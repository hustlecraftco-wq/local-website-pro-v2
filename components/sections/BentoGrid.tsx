"use client";
import { Smartphone, Zap, Search, Lock, TrendingUp, Code } from "lucide-react";

const features = [
  {
    title: "Google Maps Domination",
    description: "We bake 'Local Business Schema' directly into the code. Google knows exactly where you work and what you do.",
    icon: <Search className="w-8 h-8 text-blue-400"/>,
    colSpan: "md:col-span-2",
  },
  {
    title: "Thumb-Friendly Design",
    description: "Sticky 'Call Now' buttons and layouts designed for guys with big thumbs on job sites.",
    icon: <Smartphone className="w-8 h-8 text-kc-accent"/>,
    colSpan: "md:col-span-1",
  },
  {
    title: "Vercel Edge Network",
    description: "Your site lives on servers in 35 cities. It loads instantly for a customer in Overland Park or Olathe.",
    icon: <Zap className="w-8 h-8 text-kc-success"/>,
    colSpan: "md:col-span-1",
  },
  {
    title: "Zero Monthly Fees",
    description: "No maintenance packages. No hosting markups. You pay for the build, and you own the machine.",
    icon: <Lock className="w-8 h-8 text-purple-400"/>,
    colSpan: "md:col-span-2",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-24 px-6 bg-kc-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">The <span className="text-kc-accent">TradeFoundry</span> Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className={`${feature.colSpan} glass-panel p-8 rounded-3xl hover:border-kc-accent/30 transition-all group`}>
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-kc-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
