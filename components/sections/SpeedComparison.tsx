"use client";
import { useState, useRef, useEffect } from "react";
import { Zap, Activity, Database, Cpu, HardHat, Terminal, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import dynamic from "next/dynamic";

// DYNAMIC IMPORT: Browser ignores this file until we ask for it
const Robot = dynamic(() => import("@/components/ui/Robot"), {
  ssr: false, 
});

export default function SpeedComparison() {
  const [startAnim, setStartAnim] = useState(false);
  
  // -- LAZY LOAD LOGIC --
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Run once, then kill observer
        }
      },
      { threshold: 0.1 } // Load when 10% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="speed" 
      ref={containerRef} 
      className="py-24 px-6 bg-kc-dark border-t border-white/10 relative overflow-hidden"
    >
      
      {/* CONDITIONAL RENDER: The Firewall */}
      {/* If not in view, this code doesn't exist in the DOM */}
      {isInView && (
        <Robot showRobot={true} isLoaded={true} />
      )}

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {isInView && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60" 
            >
              <source src="/liquid-clock.mp4" type="video/mp4" />
            </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-kc-dark/40 via-kc-dark/90 to-kc-dark/40" />
      </div>

      {/* TEXT CONTENT */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <div className="inline-block px-3 py-1 bg-kc-accent/10 border border-kc-accent/30 text-kc-accent text-xs font-black tracking-[0.3em] uppercase mb-6">
              System Architecture: 2026 Standard
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              NOT A WEBSITE.<br/>
              <span className="text-kc-accent">A LEAD MACHINE.</span>
            </h2>
          </div>
          <p className="text-kc-text text-xl border-l-2 border-white/10 pl-8 leading-snug">
            Most KC agencies sell you a "pretty" WordPress site. I build <span className="text-white font-bold text-kc-accent italic">Full-Stack Business Automation</span>. Next.js performance, AI-driven dispatch, and 30-second CRM sync.
          </p>
        </div>

        {/* The Performance Chart */}
        <div className="bg-kc-panel border-2 border-white/5 p-1 md:p-12 mb-20 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* The Bars */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-white font-black tracking-widest text-sm flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-kc-accent" /> ENGINE STATUS: NEXT.JS 15 (ACTIVE)
                  </span>
                  <span className="text-kc-accent font-mono text-2xl font-bold tracking-tighter">0.4s</span>
                </div>
                <div className="h-12 bg-white/5 border border-white/10 relative overflow-hidden">
                   <div 
                    className={`h-full bg-kc-accent transition-all duration-[500ms] ease-out shadow-[0_0_20px_rgba(255,107,53,0.4)] ${startAnim ? "w-full" : "w-0"}`}
                  >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 opacity-40">
                <div className="flex justify-between items-end">
                  <span className="text-white font-black tracking-widest text-sm italic">TYPICAL KC AGENCY (WORDPRESS RENTAL)</span>
                  <span className="text-white font-mono text-2xl tracking-tighter">3.2s</span>
                </div>
                <div className="h-12 bg-white/5 border border-white/10 overflow-hidden">
                  <div 
                    className={`h-full bg-white/20 transition-all duration-[3200ms] ease-linear ${startAnim ? "w-full" : "w-0"}`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Test Button */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              {!startAnim ? (
                <button 
                  onClick={() => setStartAnim(true)}
                  className="w-full bg-kc-accent text-white font-black py-8 text-xl uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_10px_40px_rgba(255,107,53,0.3)] active:scale-95"
                >
                  Test My Engine
                </button>
              ) : (
                <div className="space-y-4 border-2 border-kc-accent/50 p-6 bg-kc-accent/5 animate-pulse">
                  <div className="flex items-center gap-2 text-kc-accent font-black uppercase tracking-widest text-sm">
                    <Activity className="w-4 h-4" /> Optimization Confirmed
                  </div>
                  <p className="text-white text-xs font-bold leading-tight">SYSTEMS: RESPONSE TIME SECURED UNDER 1.0s</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-32 border-t border-white/5 pt-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 md:sticky md:top-24">
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-kc-muted text-[10px] font-black tracking-[0.3em] uppercase mb-4">
                Deep-Level Optimization
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                OBESSIVE <br/><span className="text-kc-accent italic text-5xl">DETAIL.</span>
              </h3>
              <p className="text-kc-muted leading-relaxed mb-8">
                Most agencies stop at the surface. I optimize the parts you can't see. My code is clean, documented, and built for 2030, not 2010.
              </p>
              <div className="space-y-2">
                  {['100/100 Lighthouse Scores', 'Next.js 15 Static-First', 'Semantic HTML5 Architecture', 'Edge-Network Delivery'].map((stat) => (
                    <div key={stat} className="flex items-center gap-2 text-white font-mono text-[11px] uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 bg-kc-accent"></div> {stat}
                    </div>
                  ))}
              </div>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 gap-4">
              <div className="p-1 bg-white/5 border border-white/10 hover:border-kc-accent/30 transition-all group backdrop-blur-md">
                <div className="p-6 border border-white/5 flex gap-6">
                   <div className="text-kc-accent font-mono text-xl opacity-30 font-black">01</div>
                   <div>
                     <h4 className="text-white font-black uppercase italic mb-2 tracking-tight">Image Bio-Optimization</h4>
                     <p className="text-sm text-kc-muted">
                       I don't just "upload photos." Every image is converted to <span className="text-white font-bold underline decoration-kc-accent">AVIF/WebP</span>, lazy-loaded, and serves specific sizes based on the user's phone.
                     </p>
                   </div>
                </div>
              </div>

              <div className="p-1 bg-white/5 border border-white/10 hover:border-kc-accent/30 transition-all group backdrop-blur-md">
                <div className="p-6 border border-white/5 flex gap-6">
                   <div className="text-kc-accent font-mono text-xl opacity-30 font-black">02</div>
                   <div>
                     <h4 className="text-white font-black uppercase italic mb-2 tracking-tight">Zero-Bloat CSS</h4>
                     <p className="text-sm text-kc-muted">
                       Agencies use "builders" that load 2MB of junk code for a single button. I use <span className="text-white font-bold underline decoration-kc-accent">Tailwind Engine</span> optimization to ensure your site only ships the exact pixels it needs.
                     </p>
                   </div>
                </div>
              </div>

              <div className="p-1 bg-white/5 border border-white/10 hover:border-kc-accent/30 transition-all group backdrop-blur-md">
                <div className="p-6 border border-white/5 flex gap-6">
                   <div className="text-kc-accent font-mono text-xl opacity-30 font-black">03</div>
                   <div>
                     <h4 className="text-white font-black uppercase italic mb-2 tracking-tight">Local-First Caching</h4>
                     <p className="text-kc-muted text-sm leading-relaxed">
                        Your site is distributed across global <span className="text-white font-bold underline decoration-kc-accent">Edge Servers</span>. Data travels 10 miles, not 3,000.
                     </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          <div className="p-8 bg-kc-panel border border-white/10 relative group hover:border-kc-accent/50 transition-all backdrop-blur-sm">
            <Cpu className="text-kc-accent w-10 h-10 mb-6" />
            <h3 className="text-white font-black text-xl uppercase mb-4 leading-tight italic">SEO AS <br/> ARCHITECTURE</h3>
            <p className="text-kc-muted text-sm leading-relaxed mb-6">
              No Yoast "tape." I build programmatic local SEO into the Next.js routes. Every zip code gets a pre-rendered landing page.
            </p>
            <div className="text-kc-accent font-mono text-[10px] tracking-widest uppercase opacity-50">Status: Automated</div>
          </div>

          <div className="p-8 bg-kc-panel border border-white/10 relative group hover:border-kc-accent/50 transition-all backdrop-blur-sm">
            <MessageSquare className="text-kc-accent w-10 h-10 mb-6" />
            <h3 className="text-white font-black text-xl uppercase mb-4 leading-tight italic">AI RECEPTIONIST <br/> DISPATCH</h3>
            <p className="text-kc-muted text-sm leading-relaxed mb-6">
              An AI that never sleeps. It instantly texts back missed calls, qualifies leads, and books appointments.
            </p>
            <div className="text-kc-accent font-mono text-[10px] tracking-widest uppercase opacity-50">Status: Integrated</div>
          </div>

          <div className="p-8 bg-kc-panel border border-white/10 relative group hover:border-kc-accent/50 transition-all backdrop-blur-sm">
            <Activity className="text-kc-accent w-10 h-10 mb-6" />
            <h3 className="text-white font-black text-xl uppercase mb-4 leading-tight italic">30-SEC <br/> CRM SYNC</h3>
            <p className="text-kc-muted text-sm leading-relaxed mb-6">
              Leads hit your CRM in under 30 seconds. Enriched, scored, and routed.
            </p>
            <div className="text-kc-accent font-mono text-[10px] tracking-widest uppercase opacity-50">Status: Synchronized</div>
          </div>

          <div className="p-8 bg-kc-accent text-black relative group">
            <HardHat className="w-10 h-10 mb-6" />
            <h3 className="font-black text-xl uppercase mb-4 leading-tight italic">ZERO-RENTAL <br/> EQUITY</h3>
            <p className="font-bold text-sm leading-relaxed mb-6 text-black/80">
              You own the code. No monthly "website rental" fees. It’s an engineered asset that builds equity.
            </p>
            <div className="font-mono text-[10px] tracking-widest uppercase text-black/60 font-black">Status: Ownership</div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="mt-20 border-y border-white/5 bg-white/[0.02] py-4 overflow-hidden flex whitespace-nowrap max-w-full relative z-10 backdrop-blur-sm">
        <div className="flex animate-marquee gap-12 items-center">
          {[
            "SYSTEM STATUS: OPTIMIZED",
            "NEXT.JS 15 RUNTIME: STABLE",
            "CORE WEB VITALS: 100/100",
            "IMAGE COMPRESSION: AVIF ACTIVE",
            "SSL ENCRYPTION: AES-256",
            "EDGE DELIVERY: KANSAS CITY NODE",
            "LEAD SYNC: 30S LATENCY TARGET",
            "AI AGENT: RECEPTIONIST ACTIVE",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-kc-success rounded-full animate-pulse" />
              <span className="text-white font-mono text-[10px] uppercase tracking-[0.2em] opacity-50">
                {text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex animate-marquee gap-12 items-center ml-12" aria-hidden="true">
          {[
            "SYSTEM STATUS: OPTIMIZED",
            "NEXT.JS 15 RUNTIME: STABLE",
            "CORE WEB VITALS: 100/100",
            "IMAGE COMPRESSION: AVIF ACTIVE",
            "SSL ENCRYPTION: AES-256",
            "EDGE DELIVERY: KANSAS CITY NODE",
            "LEAD SYNC: 30S LATENCY TARGET",
            "AI AGENT: RECEPTIONIST ACTIVE",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-kc-success rounded-full animate-pulse" />
              <span className="text-white font-mono text-[10px] uppercase tracking-[0.2em] opacity-50">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
