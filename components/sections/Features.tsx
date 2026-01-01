"use client";
import { useState, useRef, useEffect } from "react";
import { Terminal, Cpu, Globe, Search, Code2, Zap, Brain, Mail, BarChart3, Lock } from "lucide-react";

export default function Features() {
  // 1. Lazy Load Logic
  const containerRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.1 }
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
      id="features" 
      ref={containerRef}
      className="py-24 px-6 bg-kc-dark border-t border-white/5 relative overflow-hidden"
    >
      
      {/* 2. BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {isInView && (
            <video
              autoPlay
              loop
              muted
              playsInline
              // Opacity set low (20%) so the code/text remains the focus
              className="w-full h-full object-cover opacity-20" 
            >
              {/* Ensure file is named exactly "tech background.mp4" in public folder */}
              <source src="/tech-background.mp4" type="video/mp4" />
            </video>
        )}
        {/* Gradient Overlay to make text pop against the moving tech background */}
        <div className="absolute inset-0 bg-gradient-to-b from-kc-dark/90 via-kc-dark/80 to-kc-dark/95" />
      </div>

      {/* 3. CONTENT WRAPPER (Relative z-10 to sit ON TOP of video) */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            We Don't Guess. <span className="text-kc-accent">We Code.</span>
          </h2>
          <p className="text-kc-muted text-lg max-w-2xl mx-auto">
            While they drag-and-drop, we architect. Here's what makes your site actually work.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. PROGRAMMATIC SEO */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg"><Search className="w-5 h-5 text-blue-400" /></div>
              <h3 className="text-xl font-bold text-white">Programmatic SEO Injection</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-kc-muted text-sm leading-relaxed">
                Google doesn't read pictures; it reads code. We inject <strong>JSON-LD Schema</strong> directly into the root layout. This tells search engines exactly who you are, where you service, and what you do.
              </p>
              {/* THE CODE VISUAL */}
              <div className="bg-black/50 rounded-lg p-4 font-mono text-xs text-blue-300 border border-white/5 shadow-inner">
                <p><span className="text-purple-400">"type"</span>: <span className="text-green-400">"LocalBusiness"</span>,</p>
                <p><span className="text-purple-400">"name"</span>: <span className="text-green-400">"Your Business"</span>,</p>
                <p><span className="text-purple-400">"service"</span>: <span className="text-green-400">"Roofing, etc"</span>,</p>
                <p><span className="text-purple-400">"areaServed"</span>: <span className="text-yellow-400">["KC", "Overland Park"]</span></p>
              </div>
            </div>
          </div>

          {/* 2. NEXT.JS ARCHITECTURE */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 rounded-lg"><Cpu className="w-5 h-5 text-white" /></div>
              <h3 className="text-xl font-bold text-white">Server Side Rendering</h3>
            </div>
            <p className="text-kc-muted text-sm mb-4">
              Wix loads heavy scripts <em>after</em> the user clicks. We render the HTML on the server <em>before</em> it even reaches their phone.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-kc-success">
              <Zap className="w-3 h-3" /> Zero Client Load
            </div>
          </div>

          {/* 3. CLEAN FOLDER STRUCTURE */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 rounded-lg"><Code2 className="w-5 h-5 text-purple-400" /></div>
              <h3 className="text-xl font-bold text-white">Scalable Architecture</h3>
            </div>
            <div className="bg-black/50 p-4 rounded-lg border border-white/5 font-mono text-xs text-kc-muted">
              <p>├── app</p>
              <p>│    ├── kansas-city</p>
              <p>│    ├── overland-park</p>
              <p>│    └── olathe</p>
              <p className="text-green-400 mt-2">// Ready for 50+ Cities</p>
            </div>
          </div>

          {/* 4. AI-POWERED CHATBOT */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 rounded-lg"><Brain className="w-5 h-5 text-purple-400" /></div>
              <h3 className="text-xl font-bold text-white">AI Sales Assistant</h3>
            </div>
            <p className="text-kc-muted text-sm mb-4">
              Our AI chatbot answers customer questions 24/7. No waiting for you to respond. Qualifies leads automatically while you sleep.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-kc-success">
              <Zap className="w-3 h-3" /> Always Selling
            </div>
          </div>

          {/* 5. CRM INTEGRATION */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/10 rounded-lg"><BarChart3 className="w-5 h-5 text-green-400" /></div>
              <h3 className="text-xl font-bold text-white">CRM Built In</h3>
            </div>
            <p className="text-kc-muted text-sm mb-4">
              Every lead auto-syncs to your CRM. No copy/paste. No lost data. Track every inquiry from first click to closed deal.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
              <Mail className="w-3 h-3" /> Zero Manual Entry
            </div>
          </div>

          {/* 6. EMAIL AUTOMATION */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500/10 rounded-lg"><Mail className="w-5 h-5 text-orange-400" /></div>
              <h3 className="text-xl font-bold text-white">Email Sequences</h3>
            </div>
            <p className="text-kc-muted text-sm mb-4">
              Automated follow-ups that convert. We set up sequences that nurture leads while you're on the job site.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
              <Zap className="w-3 h-3" /> Set & Forget
            </div>
          </div>

          {/* 7. ULTRA-FAST & SECURE */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-500/10 rounded-lg"><Lock className="w-5 h-5 text-red-400" /></div>
              <h3 className="text-xl font-bold text-white">Ultra-Fast & Secure</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-kc-muted text-xs uppercase tracking-wider mb-2">Load Time</p>
                <div className="text-2xl font-black text-green-400">0.4s</div>
                <p className="text-[10px] text-kc-muted mt-1">vs 3-5s on Wix</p>
              </div>
              <div>
                <p className="text-kc-muted text-xs uppercase tracking-wider mb-2">SSL Security</p>
                <div className="text-2xl font-black text-green-400">✓ Grade A</div>
                <p className="text-[10px] text-kc-muted mt-1">Enterprise level</p>
              </div>
              <div>
                <p className="text-kc-muted text-xs uppercase tracking-wider mb-2">Uptime</p>
                <div className="text-2xl font-black text-green-400">99.99%</div>
                <p className="text-[10px] text-kc-muted mt-1">No surprise downtime</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
