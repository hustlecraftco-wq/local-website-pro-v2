"use client";
import { useState, useEffect } from "react";
import { Code2, Database, Layout, Server, ShieldCheck } from "lucide-react";

export default function About() {
  // STRICT CONDITIONAL: Video tag doesn't exist on mobile (saves 11MB download)
  const [isDesktop, setIsDesktop] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <section id="about" className="relative py-24 px-6 bg-[#080808] border-t border-white/5 overflow-hidden">

      {/* --- BACKGROUND VIDEO (F-18 Launch) - DESKTOP ONLY --- */}
      <div className="absolute inset-0 z-0">
        {/* DESKTOP ONLY: Video tag is NULL on mobile, saving 11MB */}
        {isDesktop && (
          <video
            autoPlay muted loop playsInline
            onCanPlayThrough={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-90' : 'opacity-0'}`}
          >
            <source src="/carrier-launch.mp4" type="video/mp4" />
          </video>
        )}
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-[#080808]/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* LEFT: THE PHOTO GRID */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 space-y-4">
              
              {/* Photo 1: The Cockpit (Action/Speed) */}
              <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="/jet-selfie.jpg" 
                  alt="Devin Hummel in the cockpit" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-3 text-center border-t border-white/10">
                  <p className="text-[10px] font-bold text-white uppercase tracking-widest">Reward Flight: Sailor of the Year</p>
                </div>
              </div>

              {/* Bottom Row: Trust & Business */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Photo 2: Standing (Discipline) */}
                <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  <img 
                    src="/devin-standing.jpg" 
                    alt="Devin Hummel Navy Standing" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-2 text-center border-t border-white/10">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest">Navy Discipline</p>
                  </div>
                </div>

                {/* Photo 3: Suit (ROI/Business) */}
                <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  <img 
                    src="/devin-business.jpg" 
                    alt="Devin Hummel Financial Director" 
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-2 text-center border-t border-white/10">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest">Financial Strategy</p>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          </div>

          {/* RIGHT: THE BIO */}
          <div className="w-full lg:w-1/2 lg:pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" /> Veteran Discipline. Financial Strategy.
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Precision Meets <span className="text-kc-success">Profit.</span>
            </h2>

            <div className="space-y-6 text-lg text-kc-muted leading-relaxed">
              <p>
                <strong className="text-white">I’m Devin Hummel.</strong> My career is built on two things: Precision and ROI.
              </p>
              <p>
                In the Navy, I served as a <strong className="text-white">Plane Captain</strong> and <strong className="text-white">Aviation Ordnanceman</strong>. My job was to inspect multi-million dollar jets and sign my name guaranteeing they were safe. I was named <strong className="text-white">Sailor of the Year</strong> because I refused to cut corners on high-stakes machinery.
              </p>
              <p>
                After my service, I worked as a <strong className="text-white">Financial Director</strong>. But I kept seeing a problem: Business owners were losing money on websites that acted like liabilities instead of assets.
              </p>
              
              <div className="p-6 border-l-4 border-kc-accent bg-white/5 rounded-r-xl backdrop-blur-md">
                <p className="italic text-white">
                  "I founded Local Website Pro to fix that standard. I didn't just hire a developer; I became one. While others relied on templates, I mastered full-stack development to understand exactly what makes a website fast, secure, and profitable."
                </p>
              </div>

              <p>
                <strong className="text-white">Why do I hand-code?</strong> Because generic templates can't capture the nuance of your operation. I write every line of code with intentionality to fit <em>your</em> specific business needs.
              </p>
            </div>

            {/* TECH STACK */}
            <div className="mt-10 pt-10 border-t border-white/5">
              <p className="text-xs text-kc-muted uppercase tracking-widest mb-4 font-bold flex items-center gap-2">
                The Technical Arsenal <span className="w-full h-px bg-white/10"></span>
              </p>
              <div className="flex flex-wrap gap-6 opacity-60 hover:opacity-100 transition-opacity">
                 <div className="flex items-center gap-2"><Code2 className="w-5 h-5 text-blue-400"/> <span className="text-sm font-mono text-white">React</span></div>
                 <div className="flex items-center gap-2"><Server className="w-5 h-5 text-white"/> <span className="text-sm font-mono text-white">Next.js</span></div>
                 <div className="flex items-center gap-2"><Layout className="w-5 h-5 text-cyan-400"/> <span className="text-sm font-mono text-white">Tailwind</span></div>
                 <div className="flex items-center gap-2"><Database className="w-5 h-5 text-yellow-400"/> <span className="text-sm font-mono text-white">Vercel</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
