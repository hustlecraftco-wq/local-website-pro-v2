"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Terminal, Cpu, Search, Code2, Zap, Brain, Mail, 
  BarChart3, Lock, Sparkles, EyeOff, ShieldCheck 
} from "lucide-react";

// --- PREMIUM TILT CARD COMPONENT ---
function TiltCard({
  children,
  className = "",
  glowColor = "emerald"
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: "emerald" | "blue" | "purple" | "orange" | "red" | "green";
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  // Spotlight position
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const glowColors: Record<string, string> = {
    emerald: "rgba(16, 185, 129, 0.15)",
    blue: "rgba(59, 130, 246, 0.15)",
    purple: "rgba(168, 85, 247, 0.15)",
    orange: "rgba(249, 115, 22, 0.15)",
    red: "rgba(239, 68, 68, 0.15)",
    green: "rgba(34, 197, 94, 0.15)"
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotlightY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    spotlightX.set(50);
    spotlightY.set(50);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group h-full ${className}`}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${glowColors[glowColor]}, transparent, ${glowColors[glowColor]})`,
        }}
      />

      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) => `radial-gradient(600px circle at ${x}% ${y}%, ${glowColors[glowColor]}, transparent 40%)`
          ),
        }}
      />

      {/* Card content */}
      <motion.div
        className="relative h-full bg-zinc-900/80 backdrop-blur-xl border border-white/[0.08] rounded-3xl overflow-hidden flex flex-col"
        animate={{
          borderColor: isHovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Inner content with transform for 3D depth */}
        <div className="flex flex-col h-full" style={{ transform: "translateZ(20px)" }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- ANIMATED ICON ---
function AnimatedIcon({
  icon: Icon,
  color
}: {
  icon: any;
  color: string;
}) {
  return (
    <motion.div
      className={`p-3 rounded-xl ${color} relative overflow-hidden`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1), transparent)",
        }}
      />
      <Icon className="w-5 h-5 relative z-10" />
    </motion.div>
  );
}

// --- MAIN FEATURES COMPONENT ---
export default function Features() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section
      id="features"
      className="relative py-32 px-6 bg-[#030303] overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/[0.02] rounded-full blur-[150px]" />
        
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030303] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header using native Framer Motion Viewport check */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-3 h-3 text-emerald-400" />
            The Technology
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight text-center">
            We Don't Guess.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-blue-400">
              We Engineer.
            </span>
          </h2>

          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            While they drag-and-drop templates, we architect systems.
            Here's the infrastructure that makes your site actually convert.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >

          {/* 1. PROGRAMMATIC SEO - Large */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <TiltCard glowColor="blue">
              <div className="p-8 md:p-10 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <AnimatedIcon icon={Search} color="bg-blue-500/20 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Programmatic SEO Injection</h3>
                    <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Schema Markup</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Google doesn't read pictures—it reads code. We inject <strong className="text-white">JSON-LD Schema</strong> directly into every page. 
                    This tells search engines exactly who you are, where you service, and what you do.
                  </p>

                  <div className="relative group/code">
                    <div className="absolute -inset-2 bg-blue-500/10 rounded-xl blur-xl opacity-0 group-hover/code:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-black/60 rounded-xl p-5 font-mono text-xs border border-white/[0.08] overflow-hidden">
                      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.05]">
                        <div className="w-2 h-2 rounded-full bg-red-500/80" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <div className="w-2 h-2 rounded-full bg-green-500/80" />
                        <span className="ml-2 text-zinc-600 text-[10px]">schema.json</span>
                      </div>
                      <div className="space-y-1">
                        <p><span className="text-purple-400">"@type"</span>: <span className="text-green-400">"LocalBusiness"</span>,</p>
                        <p><span className="text-purple-400">"name"</span>: <span className="text-green-400">"Your Business"</span>,</p>
                        <p><span className="text-purple-400">"service"</span>: <span className="text-green-400">"Roofing, HVAC"</span>,</p>
                        <p><span className="text-purple-400">"areaServed"</span>: <span className="text-yellow-400">["KC", "OP"]</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* 2. NEXT.JS ARCHITECTURE */}
          <motion.div variants={itemVariants}>
            <TiltCard glowColor="emerald">
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedIcon icon={Cpu} color="bg-emerald-500/20 text-emerald-400" />
                  <h3 className="text-xl font-bold text-white">Server Rendering</h3>
                </div>

                <p className="text-zinc-400 text-sm mb-6 flex-grow">
                  Wix loads scripts <em className="text-zinc-300">after</em> the click. We render HTML on the server <em className="text-zinc-300">before</em> it reaches their phone.
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05] mt-auto">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    Zero Client Load
                  </span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* 3. SCALABLE ARCHITECTURE */}
          <motion.div variants={itemVariants}>
            <TiltCard glowColor="purple">
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedIcon icon={Code2} color="bg-purple-500/20 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Scalable Code</h3>
                </div>

                <div className="relative group/code flex-grow">
                  <div className="bg-black/60 p-4 rounded-xl border border-white/[0.08] font-mono text-xs text-zinc-400">
                    <p className="text-zinc-600">├── app</p>
                    <p className="pl-4">├── <span className="text-purple-400">kansas-city</span></p>
                    <p className="pl-4">├── <span className="text-purple-400">overland-park</span></p>
                    <p className="pl-4">└── <span className="text-purple-400">olathe</span></p>
                    <p className="text-emerald-400/60 mt-3 text-[10px]">// Ready for 50+ Cities</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* 4. AI CHATBOT */}
          <motion.div variants={itemVariants}>
            <TiltCard glowColor="purple">
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedIcon icon={Brain} color="bg-purple-500/20 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">AI Sales Agent</h3>
                </div>

                <p className="text-zinc-400 text-sm mb-6 flex-grow">
                  Our AI chatbot answers questions 24/7. Qualifies leads automatically while you sleep.
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05] mt-auto">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
                    Always Selling
                  </span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

           {/* 5. STEALTH MODE - NEW ADDITION */}
           <motion.div variants={itemVariants}>
            <TiltCard glowColor="red">
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedIcon icon={EyeOff} color="bg-red-500/20 text-red-400" />
                  <h3 className="text-xl font-bold text-white">Stealth Mode</h3>
                </div>

                <p className="text-zinc-400 text-sm mb-6 flex-grow">
                   We obfuscate code and mask server headers. Competitors can't copy what they can't see.
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05] mt-auto">
                  <ShieldCheck className="w-3 h-3 text-red-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Anti-Recon
                  </span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* 6. EMAIL AUTOMATION */}
          <motion.div variants={itemVariants}>
            <TiltCard glowColor="orange">
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <AnimatedIcon icon={Mail} color="bg-orange-500/20 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">Email Sequences</h3>
                </div>

                <p className="text-zinc-400 text-sm mb-6 flex-grow">
                  Automated follow-ups that convert. Nurture leads while you're on the job site.
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05] mt-auto">
                  <Zap className="w-3 h-3 text-orange-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                    Set & Forget
                  </span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* 7. ULTRA-FAST & SECURE - Large */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <TiltCard glowColor="red">
              <div className="p-8 md:p-10 relative overflow-hidden h-full">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.05] via-transparent to-purple-500/[0.05]" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <AnimatedIcon icon={Lock} color="bg-red-500/20 text-red-400" />
                      <div>
                        <h3 className="text-xl font-bold text-white">Ultra-Fast & Secure</h3>
                        <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Enterprise Grade</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm">
                        Built on the same infrastructure used by Netflix and Uber. Zero compromise on speed or security.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 md:w-2/3 border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-10">
                    <div className="text-center md:text-left">
                      <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Load Time</p>
                      <div className="text-3xl md:text-4xl font-black text-emerald-400">
                        0.4s
                      </div>
                      <p className="text-[10px] text-zinc-600 mt-1">vs 3-5s on Wix</p>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2">SSL Grade</p>
                      <div className="text-3xl md:text-4xl font-black text-emerald-400">
                        A+
                      </div>
                      <p className="text-[10px] text-zinc-600 mt-1">Enterprise level</p>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-2">Uptime</p>
                      <div className="text-3xl md:text-4xl font-black text-emerald-400">
                        99.99%
                      </div>
                      <p className="text-[10px] text-zinc-600 mt-1">Zero surprises</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
