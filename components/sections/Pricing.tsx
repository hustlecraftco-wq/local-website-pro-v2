"use client";
import { Check, X, TrendingUp, ShieldCheck, Zap, Globe, Bot, BarChart3, Rocket } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden bg-kc-dark border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-kc-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* --- STEP 1: THE BUILD (One-Time) --- */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-kc-muted mb-4">Step 1</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Choose Your Weapon.</h2>
          <p className="text-kc-muted text-lg max-w-2xl mx-auto">
            One-time investment. You own the code 100% forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
          
          {/* TIER 1: STARTER */}
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition-all flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">The Landing Page</h3>
            <div className="text-4xl font-black text-white mb-1">$1,250</div>
            <p className="text-sm text-kc-muted mb-8">Perfect for Ads & Speed.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> <strong>1-Page</strong> Conversion Scroll</li>
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> <strong>0.4s</strong> Load Speed</li>
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> <strong>Mobile</strong> First Design</li>
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> <strong>Basic</strong> SEO Setup</li>
            </ul>
            <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold transition-all">
              Start Basic Build
            </button>
          </div>

          {/* TIER 2: THE ASSET - HERO */}
          <div className="relative p-8 rounded-3xl border border-kc-accent/50 bg-gradient-to-b from-white/10 to-black/40 shadow-2xl shadow-orange-900/20 transform md:-translate-y-4 z-10 flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-kc-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
              Most Popular
            </div>

            <h3 className="text-xl font-bold text-white mb-2">The Trade Asset</h3>
            <div className="text-5xl font-black text-white mb-1">$2,997</div>
            <p className="text-sm text-kc-success font-bold mb-8">Full 5-Page Authority Site.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white"><Rocket className="w-5 h-5 text-kc-success"/> Everything in Starter</li>
              <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-kc-success"/> <strong>5-Page</strong> Complete Build</li>
              <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-kc-success"/> <strong>Advanced</strong> Local SEO</li>
              <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-kc-success"/> <strong>Copywriting</strong> Included</li>
              <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-kc-success"/> <strong>Lead</strong> Tracking Dashboard</li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-kc-accent hover:scale-105 transition-transform text-white font-bold shadow-lg shadow-orange-900/40">
              Build My Asset
            </button>
          </div>

          {/* TIER 3: ENTERPRISE */}
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition-all flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">Market Domination</h3>
            <div className="text-4xl font-black text-white mb-1">Custom</div>
            <p className="text-sm text-kc-muted mb-8">For multi-city expansion.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-kc-muted"><Globe className="w-5 h-5 text-blue-400"/> <strong>Multi-City</strong> Pages (50+)</li>
              <li className="flex items-center gap-3 text-kc-muted"><Bot className="w-5 h-5 text-purple-400"/> <strong>AI</strong> Chatbot Training</li>
              <li className="flex items-center gap-3 text-kc-muted"><BarChart3 className="w-5 h-5 text-green-400"/> <strong>CRM</strong> Integration</li>
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> <strong>Competitor</strong> Audit</li>
            </ul>
            <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold transition-all">
              Contact Sales
            </button>
          </div>
        </div>

        {/* --- STEP 2: THE ENGINE (Monthly) --- */}
        <div className="text-center mb-16 pt-16 border-t border-white/5">
           <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-kc-muted mb-4">Step 2</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Choose Your Support.</h2>
          <p className="text-kc-muted text-lg max-w-2xl mx-auto">
            You own the car. Now, do you want to drive it yourself, or hire a mechanic?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          
          {/* OPTION 1: DIY */}
          <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
            <h3 className="text-xl font-bold text-kc-muted mb-2">Self-Managed</h3>
            <div className="text-4xl font-black text-white mb-1">$0<span className="text-lg text-kc-muted font-normal">/mo</span></div>
            <p className="text-sm text-kc-muted mb-8">You handle the keys.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> You own the repo</li>
              <li className="flex items-center gap-3 text-kc-muted"><X className="w-5 h-5 text-red-500"/> No Updates</li>
              <li className="flex items-center gap-3 text-kc-muted"><X className="w-5 h-5 text-red-500"/> No Hosting Support</li>
            </ul>
            <div className="w-full py-4 rounded-xl border border-dashed border-white/10 text-center text-kc-muted text-sm">
              Great for Tech-Savvy Owners
            </div>
          </div>

          {/* OPTION 2: PEACE OF MIND */}
          <div className="relative p-8 rounded-3xl border border-kc-accent/50 bg-gradient-to-b from-white/10 to-black/40 shadow-2xl shadow-orange-900/20 z-10 md:scale-105">
            <h3 className="text-xl font-bold text-white mb-2">Peace of Mind</h3>
            <div className="text-5xl font-black text-white mb-1">$99<span className="text-lg text-white/50 font-normal">/mo</span></div>
            <p className="text-sm text-kc-success font-bold mb-8">Hosting + Unlimited Updates.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-kc-success"/> <strong>Managed</strong> Hosting (Vercel)</li>
              <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-kc-success"/> <strong>Unlimited</strong> Content Edits</li>
              <li className="flex items-center gap-3 text-white"><ShieldCheck className="w-5 h-5 text-kc-success"/> <strong>Daily</strong> Backups & Security</li>
              <li className="flex items-center gap-3 text-white"><Zap className="w-5 h-5 text-kc-success"/> <strong>Priority</strong> Support Line</li>
            </ul>
            <button className="block w-full py-4 rounded-xl bg-kc-accent text-center text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-orange-900/40">
              Select Care Plan
            </button>
          </div>

          {/* OPTION 3: GROWTH */}
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">Growth Partner</h3>
            <div className="text-4xl font-black text-white mb-1">$299<span className="text-lg text-kc-muted font-normal">/mo</span></div>
            <p className="text-sm text-kc-muted mb-8">Dominate your niche.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> <strong>Everything</strong> in Peace of Mind</li>
              <li className="flex items-center gap-3 text-kc-muted"><TrendingUp className="w-5 h-5 text-green-400"/> <strong>Monthly</strong> SEO Reporting</li>
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> <strong>1 Blog Post</strong> / Month</li>
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> <strong>Google</strong> Business Management</li>
            </ul>
            <button className="block w-full py-4 rounded-xl border border-white/20 hover:bg-white/10 text-center text-white font-bold transition-all">
              Select Growth
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
