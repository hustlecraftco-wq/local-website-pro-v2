"use client";
import { useState, useRef, useEffect } from "react";
import { 
  TrendingDown, 
  TrendingUp, 
  Zap, 
  Search, 
  Layers, 
  DollarSign, 
  BarChart3, 
  ArrowRight, 
  MousePointer2 
} from "lucide-react";

export default function TheWhy() {
  const [activeTab, setActiveTab] = useState<"ads" | "seo" | "ux">("ads");
  
  // -- SCROLL REVEAL LOGIC --
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-32 px-6 bg-kc-dark relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kc-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-kc-accent text-xs font-black tracking-[0.2em] uppercase mb-6">
            <BarChart3 className="w-3 h-3" /> Intelligence Report
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
            The Financial Physics <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kc-accent to-orange-600">
              Of Latency.
            </span>
          </h2>
          <p className="text-xl text-kc-muted border-l-2 border-white/10 pl-6 leading-relaxed">
            In 2026, speed is not a UX preference; it is a transactional currency. 
            Our architecture is built on a simple premise: <span className="text-white font-bold">Latency acts as a tax on revenue.</span>
          </p>
        </div>

        {/* 1. THE DATA GRID (Attrition) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <div className={`p-8 bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex justify-between items-start mb-6">
              <TrendingDown className="w-8 h-8 text-red-500" />
              <span className="text-xs font-mono text-white/30 uppercase">Metric: Attrition</span>
            </div>
            <div className="text-5xl font-black text-white mb-2">
              -7<span className="text-2xl text-white/50">%</span>
            </div>
            <p className="text-sm text-kc-muted font-medium mb-4">Conversion Drop per Second</p>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 w-[70%]"></div>
            </div>
            <p className="mt-4 text-xs text-white/40 leading-relaxed">
              A 1-second lag translates to $2.5M in lost sales for enterprise retailers. It is invisible money evaporating.
            </p>
          </div>

          <div className={`p-8 bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex justify-between items-start mb-6">
              <MousePointer2 className="w-8 h-8 text-orange-400" />
              <span className="text-xs font-mono text-white/30 uppercase">Metric: Bounce</span>
            </div>
            <div className="text-5xl font-black text-white mb-2">
              +90<span className="text-2xl text-white/50">%</span>
            </div>
            <p className="text-sm text-kc-muted font-medium mb-4">Abandonment at 5s Load</p>
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-orange-400 w-[90%]"></div>
            </div>
            <p className="mt-4 text-xs text-white/40 leading-relaxed">
              The "3-second rule" is dead. Modern users judge credibility in 0.05 seconds. Slow sites are flagged as "unsafe."
            </p>
          </div>

          <div className={`p-8 bg-kc-accent text-black border border-kc-accent transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex justify-between items-start mb-6">
              <Zap className="w-8 h-8 text-black" />
              <span className="text-xs font-mono text-black/60 uppercase font-bold">The Opportunity</span>
            </div>
            <div className="text-5xl font-black text-black mb-2">
              3x
            </div>
            <p className="text-sm text-black/80 font-bold mb-4">Conversion Multiplier</p>
            <div className="h-1 w-full bg-black/20 rounded-full overflow-hidden">
              <div className="h-full bg-black w-full animate-pulse"></div>
            </div>
            <p className="mt-4 text-xs text-black/70 font-bold leading-relaxed">
              Sites loading under 1s convert 3x higher than those at 5s. We engineer for the &lt;1s standard.
            </p>
          </div>
        </div>

        {/* 2. INTERACTIVE STRATEGY SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-24">
          
          {/* Left: Interactive Menu */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-2xl font-black text-white uppercase italic mb-8">
              The Revenue <br/> Architecture
            </h3>
            
            <button 
              onClick={() => setActiveTab("ads")}
              className={`w-full text-left p-6 border transition-all duration-300 group ${activeTab === "ads" ? "bg-white/10 border-kc-accent" : "bg-transparent border-white/5 hover:bg-white/5"}`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className={`p-2 rounded-lg ${activeTab === "ads" ? "bg-kc-accent text-black" : "bg-white/10 text-white"}`}>
                  <DollarSign className="w-5 h-5" />
                </div>
                <span className={`font-bold uppercase tracking-wider text-sm ${activeTab === "ads" ? "text-white" : "text-white/50"}`}>
                  Ad Cost Reduction
                </span>
              </div>
              <p className="text-xs text-white/40 pl-14">How we lower your CPC by up to 50% via Quality Score.</p>
            </button>

            <button 
              onClick={() => setActiveTab("seo")}
              className={`w-full text-left p-6 border transition-all duration-300 group ${activeTab === "seo" ? "bg-white/10 border-kc-accent" : "bg-transparent border-white/5 hover:bg-white/5"}`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className={`p-2 rounded-lg ${activeTab === "seo" ? "bg-kc-accent text-black" : "bg-white/10 text-white"}`}>
                  <Search className="w-5 h-5" />
                </div>
                <span className={`font-bold uppercase tracking-wider text-sm ${activeTab === "seo" ? "text-white" : "text-white/50"}`}>
                  Programmatic SEO
                </span>
              </div>
              <p className="text-xs text-white/40 pl-14">Dominate local search with generated, high-speed landing pages.</p>
            </button>

            <button 
              onClick={() => setActiveTab("ux")}
              className={`w-full text-left p-6 border transition-all duration-300 group ${activeTab === "ux" ? "bg-white/10 border-kc-accent" : "bg-transparent border-white/5 hover:bg-white/5"}`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className={`p-2 rounded-lg ${activeTab === "ux" ? "bg-kc-accent text-black" : "bg-white/10 text-white"}`}>
                  <Layers className="w-5 h-5" />
                </div>
                <span className={`font-bold uppercase tracking-wider text-sm ${activeTab === "ux" ? "text-white" : "text-white/50"}`}>
                  The Modern Stack
                </span>
              </div>
              <p className="text-xs text-white/40 pl-14">Why we ditched WordPress for Next.js and Headless.</p>
            </button>
          </div>

          {/* Right: Dynamic Content Display */}
          <div className="lg:col-span-8 bg-white/5 border border-white/10 p-8 md:p-12 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
            {/* Background Grid for Tech Feel */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            {activeTab === "ads" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h4 className="text-3xl font-black text-white mb-6">GOOGLE'S PRICE MECHANISM</h4>
                <p className="text-kc-muted mb-8 leading-relaxed max-w-xl">
                  Google Ads uses a <strong>Quality Score (1-10)</strong> to price your clicks. Your landing page speed determines 39% of this score. We engineer 100/100 Lighthouse scores to force your ads into the "Discount Zone."
                </p>
                
                <div className="space-y-4 max-w-lg">
                  <div className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="text-2xl font-black text-green-500">10/10</div>
                    <div>
                      <div className="text-white font-bold text-sm uppercase">Optimized Speed (Us)</div>
                      <div className="text-green-400 text-xs">Result: 50% Discount on CPC</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg opacity-50">
                    <div className="text-2xl font-black text-red-500">3/10</div>
                    <div>
                      <div className="text-white font-bold text-sm uppercase">Typical WordPress Site</div>
                      <div className="text-red-400 text-xs">Result: 67% Cost Penalty</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "seo" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h4 className="text-3xl font-black text-white mb-6">LOCAL DOMINATION</h4>
                <p className="text-kc-muted mb-8 leading-relaxed max-w-xl">
                  Local search is 62% mobile. If your site drags on 4G, Google marks it irrelevant. We use <strong>Next.js Programmatic SEO</strong> to generate hundreds of unique, high-speed landing pages for every suburb you serve.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-white">
                    <ArrowRight className="text-kc-accent" /> <span>Structured Data (Schema.org) auto-injection</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <ArrowRight className="text-kc-accent" /> <span>City-specific landing pages (e.g., "Roofer in Overland Park")</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <ArrowRight className="text-kc-accent" /> <span>Zero-CLS visual stability for ranking retention</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "ux" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h4 className="text-3xl font-black text-white mb-6">ESCAPING THE MONOLITH</h4>
                <p className="text-kc-muted mb-8 leading-relaxed max-w-xl">
                  Legacy sites (WordPress) couple code to database, creating slow "Time to First Byte." We use <strong>Headless Architecture</strong>. Content lives in the cloud; the frontend lives on the Edge.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black/40 border border-white/10">
                    <div className="text-kc-accent font-black text-xl mb-1">56%</div>
                    <div className="text-xs text-white/60 uppercase tracking-widest">Lower TCO</div>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/10">
                    <div className="text-kc-accent font-black text-xl mb-1">0.1s</div>
                    <div className="text-xs text-white/60 uppercase tracking-widest">Global Latency</div>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/10">
                    <div className="text-kc-accent font-black text-xl mb-1">100%</div>
                    <div className="text-xs text-white/60 uppercase tracking-widest">Security Uptime</div>
                  </div>
                  <div className="p-4 bg-black/40 border border-white/10">
                    <div className="text-kc-accent font-black text-xl mb-1">AI</div>
                    <div className="text-xs text-white/60 uppercase tracking-widest">Ready</div>
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </section>
  );
}
