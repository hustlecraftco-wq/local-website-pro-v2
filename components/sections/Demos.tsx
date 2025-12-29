"use client";
import { ExternalLink, ArrowRight, Phone, Scale, TrendingUp, Activity, Hammer, Droplets, Leaf } from "lucide-react";

const demos = [
  // --- BLUE COLLAR (TRADES) ---
  {
    category: "Trade",
    industry: "Plumbing & HVAC",
    title: "The Emergency Dispatcher",
    desc: "Built for speed. Sticky 'Call Now' buttons and '24/7 Service' badges that drive immediate emergency calls.",
    color: "from-blue-600 to-cyan-800",
    icon: <Droplets className="w-5 h-5 text-blue-400" />
  },
  {
    category: "Trade",
    industry: "Roofing & Exteriors",
    title: "The High-Ticket Closer",
    desc: "Trust-heavy design. Features 'Before/After' sliders, financing calculators, and hail damage report tools.",
    color: "from-orange-700 to-red-900",
    icon: <Hammer className="w-5 h-5 text-orange-400" />
  },
  {
    category: "Trade",
    industry: "Landscaping & Hardscape",
    title: "The Visual Portfolio",
    desc: "Gallery-first architecture. Lets the photos of patios, pools, and lawns do the selling. Clean and green.",
    color: "from-green-600 to-emerald-900",
    icon: <Leaf className="w-5 h-5 text-green-400" />
  },

  // --- WHITE COLLAR (OFFICE) ---
  {
    category: "Professional",
    industry: "Legal & Attorney",
    title: "The Legal Authority",
    desc: "Commanding and clean. Focuses on 'Case Results', practice areas, and direct attorney bios to build instant trust.",
    color: "from-slate-800 to-black",
    icon: <Scale className="w-5 h-5 text-indigo-400" />
  },
  {
    category: "Professional",
    industry: "Financial & CPA",
    title: "The Wealth Manager",
    desc: "Data-driven design. Features ROI charts, secure client portals, and 'Schedule Consultation' funnels.",
    color: "from-emerald-800 to-teal-900",
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />
  },
  {
    category: "Professional",
    industry: "Medical & Dental",
    title: "The Practice Engine",
    desc: "Soft, clean, and calming. Integrated with booking engines (ZocDoc) and patient review aggregators.",
    color: "from-sky-500 to-blue-600",
    icon: <Activity className="w-5 h-5 text-sky-200" />
  }
];

export default function Demos() {
  return (
    <section id="demos" className="py-24 px-6 bg-kc-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Don't imagine it. <span className="text-kc-accent">See it.</span>
            </h2>
            <p className="text-kc-muted text-lg">
              We build specialized assets for high-value industries. These aren't templates; they are sector-specific lead machines.
            </p>
          </div>
          <a href="/contact" className="hidden md:flex items-center gap-2 text-white font-bold hover:text-kc-accent transition-colors">
            Get a Custom Mockup <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* DEMO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/20 transition-all hover:-translate-y-2 duration-300 flex flex-col">
              
              {/* THE "SCREEN" VISUAL */}
              <div className={`h-48 w-full bg-gradient-to-br ${demo.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                    <span className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform cursor-pointer">
                        View Live Demo <ExternalLink className="w-4 h-4"/>
                    </span>
                </div>
                {/* Fake Browser UI */}
                <div className="absolute top-4 left-4 right-4 h-32 bg-white/10 rounded-t-xl border border-white/10 backdrop-blur-md overflow-hidden">
                    <div className="h-4 w-full bg-white/10 border-b border-white/5 flex items-center px-2 gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    </div>
                    {/* Abstract Content Lines */}
                    <div className="p-4 space-y-2">
                        <div className="w-1/2 h-2 bg-white/20 rounded-full"></div>
                        <div className="w-full h-16 bg-white/5 rounded-lg border border-white/5 mt-2"></div>
                    </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                    <span className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                        {demo.icon}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-kc-muted">{demo.industry}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-kc-accent transition-colors">{demo.title}</h3>
                <p className="text-sm text-kc-muted leading-relaxed mb-6 flex-grow">
                  {demo.desc}
                </p>
                
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-white/50">
                        <Phone className="w-3 h-3" /> Mobile First
                    </div>
                    <span className="text-xs text-kc-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        See Details <ArrowRight className="w-3 h-3"/>
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
             <a href="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-kc-accent transition-colors">
                Get a Custom Mockup <ArrowRight className="w-4 h-4" />
            </a>
        </div>

      </div>
    </section>
  );
}
