"use client";

import React, { useRef, useState, useEffect, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Lenis from "lenis";
import { 
  ArrowRight, Activity, Droplet, Target, Eye, EyeOff, Menu, X, Anchor, 
  Waves, Microscope, Construction, ShieldCheck, AlertTriangle, Phone 
} from "lucide-react";

// --- 1. THE 4K REALISTIC WATER SHADER ---
// Uses Fresnel equations to simulate reflection/refraction and deep light absorption.

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;
  varying float vElevation;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  // Simplex noise function (simplified for performance)
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Deep Swell (Low Frequency)
    float bigWave = sin(pos.x * 0.5 + uTime * 0.2) * sin(pos.y * 0.3 + uTime * 0.1) * 1.5;
    
    // Surface Chop (High Frequency Noise)
    float smallWave = snoise(pos.xy * 2.0 + uTime * 0.5) * 0.4;
    
    // Mouse Interactive Ripple
    float dist = distance(uv, uMouse);
    float ripple = smoothstep(0.4, 0.0, dist) * sin(dist * 25.0 - uTime * 8.0) * 0.8;

    pos.z += bigWave + smallWave + ripple;
    vElevation = pos.z;

    // Recalculate normal for lighting (Mocked for performance)
    vec3 objectNormal = normalize(vec3(-smallWave, -bigWave, 1.0));
    vNormal = normalMatrix * objectNormal;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vViewPosition = -mvPosition.xyz;

    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 uColorDeep;
  uniform vec3 uColorSurface;
  uniform vec3 uColorHighlight;
  varying float vElevation;
  varying vec3 vNormal;
  varying vec3 vViewPosition;

  void main() {
    // 1. Fresnel Effect (Grazing Angle Reflection)
    vec3 viewDir = normalize(vViewPosition);
    vec3 normal = normalize(vNormal);
    float fresnel = dot(viewDir, normal);
    fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
    fresnel = pow(fresnel, 3.0); // Sharpen the reflection curve

    // 2. Color Mixing based on height
    float mixStrength = (vElevation + 1.0) * 0.5;
    vec3 baseColor = mix(uColorDeep, uColorSurface, mixStrength);

    // 3. Specular Highlight (The "Glossy" Look)
    vec3 lightDir = normalize(vec3(1.0, 1.0, 2.0));
    vec3 reflectDir = reflect(-lightDir, normal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
    vec3 highlight = uColorHighlight * spec * 0.8;

    // Combine
    vec3 finalColor = baseColor + (fresnel * 0.4) + highlight;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// --- 3D SCENE CONFIG ---
const FluidScene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uColorDeep: { value: new THREE.Color("#020408") },      // Abyssal Black
    uColorSurface: { value: new THREE.Color("#0f1f38") },   // Deep Industrial Navy
    uColorHighlight: { value: new THREE.Color("#4fa3c7") }  // Cyan Specular Hit
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      // FIX: Cast material to THREE.ShaderMaterial so TS knows 'uniforms' exists
      const material = meshRef.current.material as THREE.ShaderMaterial;
      
      if (material.uniforms) {
        material.uniforms.uTime.value = state.clock.getElapsedTime();
        
        // Mouse interaction smoothing
        const targetX = (state.pointer.x + 1) / 2;
        const targetY = (state.pointer.y + 1) / 2;
        
        material.uniforms.uMouse.value.x += (targetX - material.uniforms.uMouse.value.x) * 0.05;
        material.uniforms.uMouse.value.y += (targetY - material.uniforms.uMouse.value.y) * 0.05;
      }
    }
  });
  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -3, -8]}>
      {/* High-Res Plane for 4K Look */}
      <planeGeometry args={[40, 40, 256, 256]} /> 
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// --- UI COMPONENTS ---

const MagneticButton = ({ children, className = "", onClick }: any) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={`relative overflow-hidden group ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
    </motion.button>
  );
};

// --- MAIN APPLICATION ---

export default function PlumberOpsV8() {
  const [salesMode, setSalesMode] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Heavier, more "fluid" feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#020408] text-slate-200 overflow-hidden selection:bg-orange-500/30">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .text-stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.1); color: transparent; }
      `}</style>

      {/* LAYER 1: THE DEEP WATER CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* FOV 25 = Cinematic/Wide View */}
        <Canvas camera={{ position: [0, 2, 5], fov: 25 }}>
          <Suspense fallback={null}>
            <FluidScene />
            <fog attach="fog" args={['#020408', 5, 25]} />
          </Suspense>
        </Canvas>
      </div>

      {/* SALES TOGGLE */}
      <div className="fixed bottom-8 left-8 z-[60]">
        <MagneticButton 
          onClick={() => setSalesMode(!salesMode)}
          className={`flex items-center gap-3 px-6 py-4 rounded-full border backdrop-blur-md transition-all ${salesMode ? 'bg-orange-600 border-orange-500 text-white' : 'bg-white/5 border-white/10 text-slate-400'}`}
        >
           <div className="flex items-center gap-2">
             {salesMode ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
             <span className="font-mono text-xs tracking-widest uppercase">{salesMode ? "REV X-RAY: ON" : "CLIENT VIEW"}</span>
           </div>
        </MagneticButton>
      </div>

      {/* LAYER 2: INTERFACE */}
      <div className="relative z-10">
        
        {/* NAV */}
        <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference text-white">
           <div className="flex flex-col">
              <span className="font-display font-bold text-3xl tracking-tighter">CORE<span className="text-orange-500">FLOW</span></span>
              <span className="font-mono text-[10px] tracking-widest opacity-70">HYDRAULIC PROTECTION</span>
           </div>
           <MagneticButton className="hidden md:flex items-center gap-2 px-6 py-3 border border-white/40 rounded-full font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors">
              <Phone className="w-4 h-4" /> Priority Dispatch
           </MagneticButton>
        </nav>

        {/* HERO */}
        <section className="min-h-[110vh] flex flex-col justify-center px-6 md:px-12 relative">
           
           <div className="max-w-5xl">
              <motion.div 
                 initial={{ opacity: 0, y: 20 }} 
                 animate={{ opacity: 1, y: 0 }} 
                 transition={{ duration: 1 }}
                 className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm mb-8"
              >
                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                 <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">System Status: Nominal</span>
              </motion.div>

              <h1 className="text-[12vw] leading-[0.85] font-display font-bold text-white mb-8 mix-blend-overlay opacity-90">
                 PREVENT<br/>FAILURE.
              </h1>

              <div className="grid md:grid-cols-2 gap-12 items-end">
                 <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-md">
                    We engineer solutions for unseen infrastructure. 
                    <span className="text-white font-medium"> Non-destructive diagnostics.</span> Municipal compliance. Zero guesswork.
                 </p>

                 {/* Live Telemetry Card */}
                 <div className="w-full bg-[#05070a]/80 backdrop-blur-xl border-t border-l border-white/10 p-8 rounded-tr-3xl">
                    <div className="flex items-center justify-between mb-6 text-orange-500 font-mono text-xs uppercase">
                       <span className="flex items-center gap-2"><Activity className="w-4 h-4" /> Live Sensor Feed</span>
                       <span className="animate-pulse">● REC</span>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                       <div>
                          <div className="text-[10px] text-slate-500 font-mono mb-1">PRESSURE</div>
                          <div className="text-3xl font-display text-white">62<span className="text-sm text-slate-600">PSI</span></div>
                       </div>
                       <div>
                          <div className="text-[10px] text-slate-500 font-mono mb-1">FLOW</div>
                          <div className="text-3xl font-display text-white">14<span className="text-sm text-slate-600">GPM</span></div>
                       </div>
                       <div>
                          <div className="text-[10px] text-slate-500 font-mono mb-1">INTEGRITY</div>
                          <div className="text-3xl font-display text-emerald-500">100%</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Hero Sales Hotspot */}
           {salesMode && (
              <div className="absolute top-[30%] right-[10%] w-72 pointer-events-none">
                 <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-orange-500"></div>
                    <h4 className="font-mono text-xs text-orange-500 font-bold mb-2">THE "FEAR" HOOK</h4>
                    <p className="font-display text-sm text-slate-300">
                       "Prevent Failure" hits harder than "Need a Plumber?". We target the homeowner's anxiety about hidden water damage to drive high-ticket inspections.
                    </p>
                 </div>
              </div>
           )}
        </section>

        {/* EDITORIAL GRID */}
        <section className="min-h-screen bg-[#020408] relative z-20 py-32 px-6 md:px-12 border-t border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12">
              
              {/* Text Block */}
              <div className="md:col-span-5 md:col-start-2 sticky top-32 h-fit">
                 <span className="font-mono text-xs text-blue-500 mb-6 block">/// CAPABILITIES</span>
                 <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
                    SURGICAL<br/>PRECISION.
                 </h2>
                 <p className="text-slate-400 leading-relaxed mb-12">
                    Traditional plumbing is destructive. We use hydro-physics and robotics to rehabilitate pipes without destroying your property.
                 </p>
                 <MagneticButton className="px-8 py-4 bg-white text-black font-display font-bold text-sm uppercase tracking-wide hover:bg-slate-200">
                    See Technology
                 </MagneticButton>
              </div>

              {/* Service Cards (Parallax Flow) */}
              <div className="md:col-span-6">
                 {[
                    { 
                       title: "Trenchless Rehab", 
                       desc: "Epoxy liner insertion. Zero digging.", 
                       tag: "NO EXCAVATION",
                       icon: Waves 
                    },
                    { 
                       title: "Hydro-Jetting", 
                       desc: "4000 PSI industrial descaling.", 
                       tag: "FACTORY RESET",
                       icon: Droplet 
                    },
                    { 
                       title: "Endoscopy", 
                       desc: "4K internal diagnostic imaging.", 
                       tag: "INSURANCE VERIFIED",
                       icon: Microscope 
                    },
                    { 
                       title: "Municipal Tie-In", 
                       desc: "Code compliant main line fusion.", 
                       tag: "IPC COMPLIANT",
                       icon: Construction 
                    }
                 ].map((s, i) => (
                    <div key={i} className="group relative mb-8 p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500">
                       <div className="flex justify-between items-start mb-6">
                          <s.icon className="w-8 h-8 text-slate-600 group-hover:text-blue-500 transition-colors" />
                          <span className="font-mono text-[10px] border border-white/20 px-2 py-1 rounded text-slate-400">{s.tag}</span>
                       </div>
                       <h3 className="text-3xl font-display font-bold mb-4">{s.title}</h3>
                       <p className="text-sm text-slate-400 font-light">{s.desc}</p>
                       <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:-rotate-45 duration-300">
                          <ArrowRight className="w-6 h-6 text-orange-500" />
                       </div>
                    </div>
                 ))}
              </div>

           </div>

           {/* Services Sales Hotspot */}
           {salesMode && (
              <div className="fixed bottom-12 right-12 w-80 bg-[#0f172a] border border-orange-500 p-6 z-50 animate-in slide-in-from-right shadow-2xl">
                 <div className="flex items-center gap-2 mb-4 text-orange-500 font-mono text-xs font-bold uppercase">
                    <Target className="w-4 h-4" /> Price Anchoring
                 </div>
                 <div className="space-y-4">
                    <p className="text-sm text-slate-300 leading-relaxed">
                       Tags like "No Excavation" justify a 30% premium. We frame the service as "Property Protection" rather than just pipe repair.
                    </p>
                    <div className="flex justify-between text-xs font-mono border-t border-slate-700 pt-2">
                       <span className="text-slate-500">AVG TICKET</span>
                       <span className="text-emerald-400">$12,500</span>
                    </div>
                 </div>
              </div>
           )}
        </section>

        {/* DIAGNOSTIC TECH SECTION */}
        <section className="py-32 px-6 md:px-12 bg-[#05070a] border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
               
               {/* Tech Visual */}
               <div className="relative aspect-video bg-black border border-slate-800 rounded-sm overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518331307255-b46765727196?q=80&w=2670&auto=format&fit=crop')] bg-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-screen"></div>
                  
                  {/* Camera UI Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                     <div className="flex justify-between text-green-500 font-mono text-xs">
                        <span className="animate-pulse">● LIVE FEED</span>
                        <span>CAM-04</span>
                     </div>
                     
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full flex items-center justify-center">
                        <div className="w-1 h-4 bg-green-500/50"></div>
                        <div className="h-1 w-4 bg-green-500/50 absolute"></div>
                     </div>

                     <div className="flex justify-between text-white font-mono text-xs">
                        <div>
                           <div className="text-slate-500 text-[10px]">DEPTH</div>
                           <div>-4.2 FT</div>
                        </div>
                        <div className="text-right">
                           <div className="text-slate-500 text-[10px]">GRADE</div>
                           <div>-2.1%</div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Copy */}
               <div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                     Visual Verification.
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-8">
                     We don't guess. We verify. Our endoscopic cameras generate a 4K map of your infrastructure, identifying root intrusion and fractures with millimeter precision.
                  </p>
                  <ul className="space-y-4 font-mono text-xs text-slate-300">
                     <li className="flex items-center gap-3">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        Insurance-Ready Documentation
                     </li>
                     <li className="flex items-center gap-3">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        Early Failure Detection
                     </li>
                  </ul>
               </div>

            </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 px-6 md:px-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-end bg-[#020408]">
           <div>
              <span className="font-display font-bold text-2xl tracking-tighter block mb-2">COREFLOW</span>
              <p className="font-mono text-[10px] text-slate-600">
                 ENGINEERING DIVISION<br/>
                 EST. 2025
              </p>
           </div>
           <div className="text-right mt-8 md:mt-0">
              <MagneticButton className="px-6 py-3 border border-white/20 rounded-full font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors">
                 Technician Login
              </MagneticButton>
           </div>
        </footer>

      </div>
    </div>
  );
}
