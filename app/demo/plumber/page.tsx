"use client";

import { useState, useEffect } from "react";
import { Activity, Phone, ArrowRight, Eye, EyeOff, Target, Anchor, Settings, ShieldCheck, MapPin, AlertCircle } from "lucide-react";

// --- CUSTOM ICONS ---
type IconProps = React.SVGProps<SVGSVGElement>;

const ValveIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12l4 4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12v-9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12l-4 4" /></svg>;

// --- METRICS ---
const SYSTEM_METRICS = {
   pressure: "62 PSI",
   flowRate: "NORMAL",
   activeUnits: 5,
   compliance: "IPC/UPC"
};

export default function PlumberOpsV6() {
  const [salesMode, setSalesMode] = useState(false);

  return (
    <main className="min-h-screen bg-[#0B1121] text-slate-300 font-sans relative overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-200">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        @keyframes flow {
           from { stroke-dashoffset: 20; }
           to { stroke-dashoffset: 0; }
        }
        .animate-flow {
           animation: flow 1s linear infinite;
        }
      `}</style>

      {/* SALES TOGGLE */}
      <div className="fixed bottom-6 left-6 z-[60]">
        <button 
          onClick={() => setSalesMode(!salesMode)}
          className={`flex items-center gap-2 px-4 py-3 rounded-none border-l-4 font-bold shadow-2xl transition-all hover:translate-x-1 ${salesMode ? 'bg-orange-600 text-white border-white' : 'bg-[#151e32] text-slate-400 border-orange-500'}`}
        >
           {salesMode ? <Eye className="w-5 h-5"/> : <EyeOff className="w-5 h-5" />}
           <span className="font-display uppercase tracking-widest text-xs">{salesMode ? "REVENUE X-RAY: ON" : "CLIENT VIEW"}</span>
        </button>
      </div>

      <IndustrialStatusBar metrics={SYSTEM_METRICS} />
      <NavHeader />

      <div className="relative">
         <HeroSection />
         {salesMode && (
            <SalesHotspot 
               top="35%" 
               right="10%" 
               title="Dispatch Psychology"
               text="We swapped 'Contact Us' for 'Dispatch Unit'. This shifts the homeowner from 'Shopper' to 'Commander', increasing urgency and click-through rate."
               color="orange"
            />
         )}
      </div>

      <div className="relative">
         <ServicesGrid />
          {salesMode && (
            <SalesHotspot 
               top="15%" 
               left="5%" 
               title="Price Anchoring"
               text="Tags like 'Avoids Excavation' justify higher prices. Customers will pay 30% more to avoid digging up their lawn."
               align="left"
            />
         )}
      </div>

      <DiagnosticTech />
      
      <Footer />

      {/* SALES PITCH OVERLAY */}
      {salesMode && (
         <div className="fixed top-24 right-6 w-96 z-50 animate-in slide-in-from-right duration-500">
            <div className="bg-[#0f172a]/95 backdrop-blur-md border-l-4 border-orange-500 p-6 shadow-2xl text-slate-200">
               <div className="flex items-center gap-2 mb-4 text-orange-500 font-display font-bold uppercase text-xs tracking-wider">
                  <Target className="w-4 h-4" /> Market Analysis
               </div>
               <h3 className="text-xl font-display font-bold text-white mb-2">The "Invisible Risk" Strategy</h3>
               <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  Homeowners fear what they can't see. This design uses "Diagnostic" language to visualize the problem, justifying the high-ticket "Cure."
               </p>
               <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                     <span className="text-xs text-slate-500 uppercase">Emergency Capture</span>
                     <span className="text-emerald-400 font-mono text-xs">+45%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                     <span className="text-xs text-slate-500 uppercase">High-Ticket Filter</span>
                     <span className="text-emerald-400 font-mono text-xs">ACTIVE</span>
                  </div>
               </div>
            </div>
         </div>
      )}
    </main>
  );
}

// --- COMPONENTS ---

function IndustrialStatusBar({ metrics }: any) {
  return (
    <div className="bg-[#080c19] border-b border-slate-800 text-[10px] font-mono py-2 px-6 flex justify-between items-center text-slate-500">
      <div className="flex gap-8 items-center">
        <span className="flex items-center gap-2 text-emerald-500">
           <span className="w-2 h-2 bg-emerald-600 rounded-sm"></span>
           SYSTEM STATUS: NOMINAL
        </span>
        <span className="hidden md:inline flex items-center gap-2">
           <Activity className="w-3 h-3" /> MAIN PRESSURE: <span className="text-slate-300">{metrics.pressure}</span>
        </span>
        <span className="hidden md:inline flex items-center gap-2">
           <ShieldCheck className="w-3 h-3" /> CODE: <span className="text-slate-300">{metrics.compliance}</span>
        </span>
      </div>
      <div className="flex gap-6">
         <span className="text-orange-500 font-bold uppercase tracking-wider flex items-center gap-2 animate-pulse">
            <AlertCircle className="w-3 h-3" /> Priority Dispatch: Available
         </span>
      </div>
    </div>
  );
}

function NavHeader() {
  return (
    <nav className="sticky top-0 w-full z-40 bg-[#0B1121]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 flex items-center justify-center text-white border border-blue-700 rounded-sm">
               <Anchor className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-white">CORE<span className="text-blue-500">FLOW</span></span>
        </div>
        
        <div className="hidden md:flex gap-8 text-xs font-display font-bold text-slate-400 uppercase tracking-widest">
           {['Residential', 'Commercial', 'Excavation', 'Diagnostics'].map(item => (
              <a key={item} href="#" className="hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-500 py-1">
                 {item}
              </a>
           ))}
        </div>

        <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 font-display font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-orange-900/20">
          <Phone className="w-4 h-4" /> DISPATCH UNIT
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-24 pb-32 border-b border-slate-800 overflow-hidden">
       {/* Background: Subtle Blueprint Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
       
       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-900/20 border-l-2 border-blue-500 text-blue-400 text-xs font-mono uppercase">
                <Settings className="w-3 h-3 animate-spin-slow" />
                Subsurface Diagnostics & Repair
             </div>
             
             {/* FEAR BASED HEADLINE */}
             <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.95]">
                PREVENT <br/>
                <span className="text-orange-500">CATASTROPHIC FAILURE.</span>
             </h1>
             
             <p className="text-lg text-slate-400 leading-relaxed max-w-lg font-light">
                We diagnose hidden infrastructure issues before they become insurance claims.
                <span className="text-slate-300 font-medium"> Non-destructive. IPC Compliant. Municipal Grade.</span>
             </p>

             <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-white text-slate-900 px-8 py-4 font-display font-bold uppercase tracking-wide hover:bg-slate-200 transition-colors flex items-center gap-2">
                   <AlertCircle className="w-4 h-4 text-orange-600" /> REQUEST PRIORITY DISPATCH
                </button>
                <button className="px-8 py-4 border border-slate-700 text-slate-400 font-mono text-sm uppercase hover:text-white hover:border-slate-500 transition-colors">
                   View Service Map
                </button>
             </div>
          </div>

          {/* THE UNIQUE MECHANIC: LIVE FLOW ANIMATION */}
          <div className="relative h-[420px] bg-[#0f1623] border border-slate-800 rounded-lg p-8 shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
             
             <div className="flex justify-between items-center mb-8">
                <div className="text-xs font-mono text-slate-500 uppercase">System Schematic: Main Line</div>
                <div className="flex items-center gap-2 text-emerald-500 text-xs font-mono">
                   <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                   </span>
                   FLOW: OPTIMAL
                </div>
             </div>

             {/* The Schematic Visualization */}
             <div className="relative h-56 w-full border border-slate-800 bg-[#0B1121] rounded flex items-center justify-center overflow-hidden">
                {/* Static Pipes */}
                <svg className="absolute inset-0 w-full h-full text-slate-700" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M0 100 H300 V50 H500" />
                   {/* Cleanout access visual */}
                   <line x1="150" y1="100" x2="150" y2="80" strokeDasharray="4 4" />
                </svg>
                
                {/* ANIMATED FLOW */}
                <svg className="absolute inset-0 w-full h-full text-blue-500" fill="none" stroke="currentColor" strokeWidth="2">
                   <path className="animate-flow" strokeDasharray="10 20" d="M0 100 H300 V50 H500" />
                </svg>

                {/* Data Labels - Trade Specific */}
                <div className="absolute bottom-10 left-10 bg-slate-900/90 px-2 py-1 border border-slate-700 text-[9px] font-mono text-slate-400">
                   CITY MAIN CONNECTION
                </div>
                <div className="absolute top-12 right-10 bg-slate-900/90 px-2 py-1 border border-slate-700 text-[9px] font-mono text-slate-400">
                   RESIDENTIAL INTAKE
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2 bg-emerald-900/30 px-2 py-1 border border-emerald-500/30 text-[9px] font-mono text-emerald-400 rounded">
                   ROOT INTRUSION: NEGATIVE
                </div>
             </div>

             {/* Telemetry Footer */}
             <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                   <div className="text-[10px] text-slate-500 uppercase mb-1">Pressure</div>
                   <div className="font-mono text-xl text-white">62 <span className="text-xs text-slate-600">PSI</span></div>
                </div>
                <div className="text-center border-l border-slate-800">
                   <div className="text-[10px] text-slate-500 uppercase mb-1">Grade</div>
                   <div className="font-mono text-xl text-white">-2.1 <span className="text-xs text-slate-600">%</span></div>
                </div>
                <div className="text-center border-l border-slate-800">
                   <div className="text-[10px] text-slate-500 uppercase mb-1">Integrity</div>
                   <div className="font-mono text-xl text-emerald-500">100%</div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}

function ServicesGrid() {
   const services = [
      { title: "Trenchless Rehabilitation", desc: "Epoxy liner insertion.", code: "TR-01", tag: "NO DIGGING" },
      { title: "Hydro-Excavation", desc: "Precision soil removal.", code: "HE-04", tag: "AVOIDS DAMAGE" },
      { title: "Endoscopic Diagnostics", desc: "High-res pipe analysis.", code: "ED-02", tag: "INSURANCE VERIFIED" },
      { title: "Backflow Prevention", desc: "Municipal compliance.", code: "BP-09", tag: "CODE REQUIRED" },
   ];

   return (
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-slate-800 bg-[#0c1224]">
         <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-2">Technical Capabilities</h2>
            <p className="text-slate-500 font-light">Residential & Light Industrial</p>
         </div>

         <div className="grid md:grid-cols-4 gap-px bg-slate-800 border border-slate-800">
            {services.map((s, i) => (
               <div key={i} className="bg-[#0B1121] p-8 group hover:bg-[#111a30] transition-colors relative">
                  <div className="flex justify-between items-start mb-6">
                     <div className="text-[10px] font-mono text-slate-600 group-hover:text-blue-500 transition-colors">{s.code}</div>
                     <div className="px-2 py-0.5 bg-blue-900/20 text-blue-400 text-[9px] font-bold uppercase tracking-wider border border-blue-900/50 rounded-sm">
                        {s.tag}
                     </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                  <ArrowRight className="w-5 h-5 text-slate-700 absolute bottom-8 right-8 group-hover:text-blue-500 group-hover:-rotate-45 transition-all" />
               </div>
            ))}
         </div>
      </section>
   )
}

function DiagnosticTech() {
   return (
      <section className="py-24 bg-[#0f172a] border-t border-slate-800">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
               <div className="text-orange-500 font-mono text-xs mb-4">AVOID CATASTROPHIC FAILURE</div>
               <h2 className="text-4xl font-display font-bold text-white mb-6">See What Lies Beneath.</h2>
               <p className="text-slate-400 mb-8 leading-relaxed">
                  Most plumbers guess. We verify. Our endoscopic cameras provide 4K visual confirmation of your line's integrity.
                  <span className="block mt-4 text-white font-medium">Live video feed available to homeowner during inspection.</span>
               </p>
               <ul className="space-y-4">
                  {[
                     "Real-time visual feed to your device",
                     "Laser-measured distance to obstruction",
                     "Slope & grade calculation"
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 bg-orange-500"></div>
                        {item}
                     </li>
                  ))}
               </ul>
            </div>
            
            <div className="relative aspect-video bg-black border border-slate-700 rounded-sm overflow-hidden flex items-center justify-center group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2736&auto=format&fit=crop')] bg-cover opacity-30"></div>
               <div className="absolute top-4 left-4 text-xs font-mono text-green-500">REC ● 00:14:22</div>
               <div className="absolute bottom-4 left-4 text-xs font-mono text-white">DEPTH: 4.2FT</div>
               <div className="absolute bottom-4 right-4 text-xs font-mono text-white">GRADE: -2.1%</div>
               <div className="relative border border-green-500/30 w-16 h-16 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-green-500"></div>
               </div>
            </div>
         </div>
      </section>
   )
}

function Footer() {
   return (
      <footer className="py-12 px-6 border-t border-slate-800 bg-[#080c19]">
         <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-mono text-slate-600">
            <div>SYSTEM: COREFLOW V6</div>
            <div>© 2025 ENGINEERING DIVISION</div>
         </div>
      </footer>
   )
}

function SalesHotspot({ top, left, right, bottom, title, text, align = 'right', color = 'blue' }: any) {
   const colors: any = {
      blue: { bg: 'bg-blue-600', border: 'border-blue-500', text: 'text-blue-400' },
      orange: { bg: 'bg-orange-600', border: 'border-orange-500', text: 'text-orange-400' }
   };
   const theme = colors[color] || colors.blue;

   return (
      <div className="absolute z-50 pointer-events-none group" style={{ top, left, right, bottom }}>
         <div className="relative">
            <div className={`absolute -inset-2 rounded-full animate-ping opacity-20 ${theme.bg}`}></div>
            <div className={`relative w-6 h-6 rounded-full border border-white flex items-center justify-center z-10 ${theme.bg}`}>
               <span className="text-white font-bold text-sm">+</span>
            </div>
            <div className={`absolute top-0 w-72 bg-[#1e293b] border-l-2 ${theme.border} p-4 shadow-2xl animate-in fade-in zoom-in duration-300 ${align === 'left' ? 'right-[calc(100%+2rem)]' : 'left-[calc(100%+2rem)]'}`}>
               <h4 className={`font-display font-bold text-xs uppercase tracking-wide mb-2 ${theme.text}`}>{title}</h4>
               <p className="text-slate-300 text-xs leading-relaxed">{text}</p>
            </div>
         </div>
      </div>
   )
}
