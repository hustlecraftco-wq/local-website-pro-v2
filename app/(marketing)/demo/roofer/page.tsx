"use client";

import { useState, useEffect } from "react";

// --- 1. STRICT TYPING FOR ICONS ---
type IconProps = React.SVGProps<SVGSVGElement>;

const ActivityIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const ShieldCheckIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ClockIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const AlertTriangleIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4m0 4h.01" /></svg>;
const ServerIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012-2v-4a2 2 0 01-2-2" /></svg>;
const ChevronRightIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>;
const CheckCircleIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

// --- 2. CENTRALIZED DATA CONFIG (MOCK API) ---
const SYSTEM_METRICS = {
   version: "v3.0.4",
   activeProjects: 14,
   cycleTime: 9.2,
   approvalRate: 91,
   installCrews: 3,
   supplyChainStatus: "NOMINAL",
   weatherRisk: "MODERATE"
};

export default function RooferOpsV3() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-zinc-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      {/* Passing Data via Props */}
      <SystemStatusBar metrics={SYSTEM_METRICS} />

      <NavHeader />
      <MissionControlHero metrics={SYSTEM_METRICS} />
      <EngineeringManifesto />
      <PipelineSection />
      <TelemetryBento />
      <AuditComplianceSection />
      <OperationalFAQ />
      <PostDeploymentSection />
      <FooterSection />
    </main>
  );
}

// --- SYSTEM STATUS BAR (Now accepts props & Live Clock) ---
function SystemStatusBar({ metrics }: { metrics: typeof SYSTEM_METRICS }) {
  // 3. LIVE UTC CLOCK IMPLEMENTATION
  const [time, setTime] = useState("");

  useEffect(() => {
    // Hydration fix: set initial time
    setTime(new Date().toISOString().slice(11, 19) + " UTC");
    
    const interval = setInterval(() => {
       setTime(new Date().toISOString().slice(11, 19) + " UTC");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border-b border-zinc-800 text-[10px] md:text-xs font-mono py-2 px-4 flex justify-between items-center text-zinc-500 overflow-hidden">
      <div className="flex gap-6 items-center">
        <span className="flex items-center gap-2 text-emerald-500">
          <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          SYSTEM: OPERATIONAL
        </span>
        <span className="hidden md:inline flex items-center gap-2">
          <ActivityIcon className="w-3 h-3" /> CREWS: <span className="text-zinc-300">{metrics.installCrews} ACTIVE</span>
        </span>
        <span className="hidden md:inline flex items-center gap-2">
          <ServerIcon className="w-3 h-3" /> SUPPLY CHAIN: <span className="text-emerald-500">{metrics.supplyChainStatus}</span>
        </span>
      </div>
      <div className="flex gap-6">
         <span className="flex items-center gap-2">
            RISK: <span className="text-yellow-500">{metrics.weatherRisk}</span>
         </span>
         <span className="opacity-50 w-24 text-right">{time}</span>
      </div>
    </div>
  );
}

// --- NAV ---
function NavHeader() {
  return (
    <nav className="sticky top-0 w-full z-40 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center">
               <ActivityIcon className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold tracking-tight text-white">LocalWebsite<span className="text-zinc-600">Pro</span></span>
        </div>
        <div className="hidden md:flex gap-6 text-xs font-mono text-zinc-500 uppercase tracking-widest">
           {['Protocol', 'Telemetry', 'Audit', 'Deploy'].map(item => (
              <a key={item} href="#" className="hover:text-emerald-400 transition-colors">{item}</a>
           ))}
        </div>
        <button className="bg-white/5 border border-white/10 text-white px-5 py-2 rounded text-xs font-mono uppercase hover:bg-white/10 transition-all">
          Initiate Request
        </button>
      </div>
    </nav>
  );
}

// --- MISSION CONTROL HERO (Consuming Props) ---
function MissionControlHero({ metrics }: { metrics: typeof SYSTEM_METRICS }) {
  return (
    <section className="relative pt-24 pb-32 border-b border-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
           <div className="inline-block px-3 py-1 mb-6 border border-emerald-500/20 bg-emerald-500/5 rounded text-emerald-400 text-[10px] font-mono tracking-widest uppercase">
              {metrics.version} Deployment Ready
           </div>
           <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Protection Systems.</span>
           </h1>
           <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8 max-w-lg">
              We operate like a production environment. Redundancy, monitoring, and zero-downtime execution for your asset.
           </p>
           <div className="flex gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded text-sm font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                 START PROJECT
              </button>
              <button className="px-8 py-4 rounded border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors text-sm font-mono">
                 VIEW LOGS
              </button>
           </div>
        </div>

        <div className="relative">
           <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] -z-10 rounded-full"></div>
           <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-lg p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
                 <div className="text-xs font-mono text-zinc-500">LIVE OPS DASHBOARD</div>
                 <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-black/50 p-4 rounded border border-zinc-800">
                    <div className="text-[10px] text-zinc-500 font-mono mb-1">ACTIVE PROJECTS</div>
                    <div className="text-2xl font-mono text-white">{metrics.activeProjects}</div>
                    <div className="text-[10px] text-emerald-500 mt-1">▲ 2 New Today</div>
                 </div>
                 <div className="bg-black/50 p-4 rounded border border-zinc-800">
                    <div className="text-[10px] text-zinc-500 font-mono mb-1">AVG CYCLE TIME</div>
                    <div className="text-2xl font-mono text-white">{metrics.cycleTime}<span className="text-sm text-zinc-600">days</span></div>
                    <div className="text-[10px] text-emerald-500 mt-1">▼ 12% vs Market</div>
                 </div>
                 <div className="bg-black/50 p-4 rounded border border-zinc-800 col-span-2 flex items-center justify-between">
                    <div>
                       <div className="text-[10px] text-zinc-500 font-mono mb-1">APPROVAL RATE</div>
                       <div className="text-2xl font-mono text-white">{metrics.approvalRate}%</div>
                    </div>
                    <div className="h-10 w-24 bg-zinc-900 rounded border border-zinc-800 flex items-end px-1 pb-1 gap-1">
                       {[30, 45, 35, 60, 50, 75, 65, 90].map((h, i) => (
                          <div key={i} className="flex-1 bg-emerald-500/50 hover:bg-emerald-400" style={{height: `${h}%`}}></div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

// --- ENGINEERING MANIFESTO ---
function EngineeringManifesto() {
   return (
      <section className="py-20 border-b border-zinc-900 bg-black">
         <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-xs font-mono text-emerald-500 tracking-[0.2em] mb-6">CORE PHILOSOPHY</h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-200">
               "We built our operation like a production system—with redundancy, monitoring, and accountability—because your home is a critical asset, not a cosmetic upgrade."
            </p>
         </div>
      </section>
   )
}

// --- PIPELINE SECTION ---
function PipelineSection() {
   const stages = [
      { name: "INTAKE", sla: "< 4h", status: "complete" },
      { name: "INSPECTION", sla: "< 24h", status: "active" },
      { name: "ANALYSIS", sla: "< 48h", status: "pending" },
      { name: "EXECUTION", sla: "1-2d", status: "pending" },
      { name: "QA / AUDIT", sla: "Day 3", status: "pending" }
   ];

   return (
      <section className="py-24 border-b border-zinc-900 bg-[#0A0A0A]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Delivery Pipeline</h2>
                  <p className="text-zinc-500">Standard Operating Procedure v4.2</p>
               </div>
               <div className="text-right hidden md:block">
                  <div className="text-xs font-mono text-zinc-500">CURRENT VELOCITY</div>
                  <div className="text-emerald-500 font-mono">ON SCHEDULE</div>
               </div>
            </div>

            <div className="relative">
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-zinc-800 -translate-y-1/2 z-0"></div>
               <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                  {stages.map((stage, i) => (
                     <div key={i} className={`bg-black border ${stage.status === 'active' ? 'border-emerald-500 ring-1 ring-emerald-500/20' : 'border-zinc-800'} p-6 rounded-lg relative group`}>
                        <div className="flex justify-between items-start mb-4">
                           <span className={`w-2 h-2 rounded-full ${stage.status === 'complete' ? 'bg-zinc-600' : stage.status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-800'}`}></span>
                           <span className="text-[10px] font-mono text-zinc-500 uppercase">Step 0{i+1}</span>
                        </div>
                        <h3 className={`font-bold text-sm mb-2 ${stage.status === 'active' ? 'text-white' : 'text-zinc-400'}`}>{stage.name}</h3>
                        <div className="inline-block px-2 py-1 bg-zinc-900 rounded text-[10px] font-mono text-zinc-500 border border-zinc-800">
                           SLA: {stage.sla}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

// --- TELEMETRY BENTO ---
function TelemetryBento() {
   return (
      <section className="py-24 max-w-7xl mx-auto px-6">
         <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
               <div className="flex items-center gap-2 mb-6">
                  <ShieldCheckIcon className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold text-sm text-white">CERTIFICATIONS</span>
               </div>
               <ul className="space-y-4">
                  {[
                     { label: "GAF Master Elite", id: "ID-9942X" },
                     { label: "OSHA 30 Compliant", id: "Verified" },
                     { label: "HAAG Eng. Certified", id: "Lvl-2" }
                  ].map((cert, i) => (
                     <li key={i} className="flex justify-between items-center text-sm border-b border-zinc-800 pb-2 last:border-0">
                        <span className="text-zinc-300">{cert.label}</span>
                        <span className="font-mono text-[10px] text-zinc-600 bg-zinc-900 px-2 py-1 rounded">{cert.id}</span>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors flex flex-col justify-between">
               <div>
                  <div className="flex items-center gap-2 mb-2">
                     <ClockIcon className="w-5 h-5 text-emerald-500" />
                     <span className="font-bold text-sm text-white">MEAN RESPONSE TIME</span>
                  </div>
                  <div className="text-xs text-zinc-500 mb-8">Incident to on-site arrival</div>
                  <div className="flex items-baseline gap-2">
                     <span className="text-5xl font-mono text-white font-light">18.4</span>
                     <span className="text-sm font-mono text-zinc-500">hrs</span>
                  </div>
               </div>
               <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 bg-emerald-900/10 p-2 rounded border border-emerald-900/20 self-start">
                  <span>↓ 22% YoY Improvement</span>
               </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
               <div className="flex items-center gap-2 mb-6">
                  <ActivityIcon className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold text-sm text-white">PROJECT OWNERSHIP</span>
               </div>
               <div className="space-y-3">
                  {[
                     { role: "Project Lead", status: "Assigned" },
                     { role: "Adjuster Liaison", status: "Pending" },
                     { role: "Site Supervisor", status: "Assigned" },
                     { role: "QA Inspector", status: "Standby" }
                  ].map((person, i) => (
                     <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-zinc-400">{person.role}</span>
                        <div className="flex items-center gap-2">
                           <span className={`w-1.5 h-1.5 rounded-full ${person.status === 'Assigned' ? 'bg-emerald-500' : 'bg-zinc-700'}`}></span>
                           <span className="text-[10px] font-mono text-zinc-600 uppercase">{person.status}</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

// --- AUDIT COMPLIANCE ---
function AuditComplianceSection() {
   return (
      <section className="py-20 border-y border-zinc-900 bg-black/50">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10 flex items-center gap-3">
               <div className="p-2 bg-zinc-900 rounded border border-zinc-800">
                  <AlertTriangleIcon className="w-4 h-4 text-zinc-400" />
               </div>
               <h2 className="text-lg font-bold text-white">Compliance & Accountability</h2>
            </div>
            
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="border-b border-zinc-800 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        <th className="py-3 px-4">Metric</th>
                        <th className="py-3 px-4">Standard</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Evidence</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm font-mono text-zinc-400">
                     <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                        <td className="py-4 px-4 text-zinc-200">General Liability</td>
                        <td className="py-4 px-4">$2,000,000 Aggregate</td>
                        <td className="py-4 px-4 text-emerald-500">Active</td>
                        <td className="py-4 px-4 text-right underline cursor-pointer hover:text-white">View Cert</td>
                     </tr>
                     <tr className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                        <td className="py-4 px-4 text-zinc-200">State Licensing</td>
                        <td className="py-4 px-4">KS Class-A #22-004***</td>
                        <td className="py-4 px-4 text-emerald-500">Verified</td>
                        <td className="py-4 px-4 text-right underline cursor-pointer hover:text-white">Check DB</td>
                     </tr>
                     <tr className="hover:bg-zinc-900/30 transition-colors">
                        <td className="py-4 px-4 text-zinc-200">Data Retention</td>
                        <td className="py-4 px-4">7 Years (Photos/Drones)</td>
                        <td className="py-4 px-4 text-emerald-500">Encrypted</td>
                        <td className="py-4 px-4 text-right underline cursor-pointer hover:text-white">Policy</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>
   )
}

// --- OPERATIONAL FAQ ---
function OperationalFAQ() {
   const faqs = [
      { q: "Protocol: Material Delays", a: "If supply chain latency exceeds 24h, we activate secondary suppliers. Your project timeline is protected by redundant sourcing." },
      { q: "Protocol: Insurance Denial", a: "Our Adjuster Liaison triggers a Level 2 re-inspection with engineer-grade reporting. We do not accept 'visual only' denials." },
      { q: "Protocol: Weather Interruption", a: "Install crews carry emergency synthetic felt. At 30% precipitation risk, dry-in procedures are mandatory before tear-off." }
   ];

   return (
      <section className="py-24 max-w-3xl mx-auto px-6">
         <h2 className="text-2xl font-bold mb-8">Operational Protocols</h2>
         <div className="space-y-6">
            {faqs.map((item, i) => (
               <div key={i} className="bg-zinc-900/20 border border-zinc-800 p-6 rounded-lg hover:border-zinc-600 transition-colors">
                  <h3 className="text-emerald-400 font-mono text-sm mb-2 uppercase tracking-wide">{item.q}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">{item.a}</p>
               </div>
            ))}
         </div>
      </section>
   )
}

// --- POST DEPLOYMENT ---
function PostDeploymentSection() {
   return (
      <section className="py-20 border-t border-zinc-900 bg-[#0A0A0A]">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-8">Post-Deployment Lifecycle</h2>
            <div className="grid md:grid-cols-3 gap-6">
               {[
                  { title: "Annual Audit", desc: "Yearly drone thermal scan to detect early failures." },
                  { title: "Storm Watch", desc: "Automated alerts when hail >1.5in hits your geo-fence." },
                  { title: "Asset Transfer", desc: "Warranty packet ready for Zillow/MLS upload." }
               ].map((card, i) => (
                  <div key={i} className="flex gap-4 items-start opacity-70 hover:opacity-100 transition-opacity">
                     <CheckCircleIcon className="w-6 h-6 text-zinc-600" />
                     <div>
                        <h4 className="font-bold text-zinc-200 text-sm mb-1">{card.title}</h4>
                        <p className="text-xs text-zinc-500">{card.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

// --- FOOTER (With "Power Move" Copy) ---
function FooterSection() {
   return (
      <footer className="border-t border-zinc-800 bg-black py-12 px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs font-mono text-zinc-600">
               SYSTEM ID: LWP-V3 <br/>
               LATENCY: 12ms
            </div>
            
            {/* 4. THE POWER MOVE COPY */}
            <div className="text-xs text-zinc-600 text-center md:text-right">
               <p className="mb-2">© 2025 LocalWebsitePro. Engineered in KC.</p>
               <p className="text-zinc-700">This system is continuously improved through post-incident reviews.</p>
            </div>
         </div>
      </footer>
   )
}
