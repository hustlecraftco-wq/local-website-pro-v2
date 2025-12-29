"use client";
import { Check, Zap, Globe, Bot, BarChart3, Shield } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden bg-kc-dark border-t border-white/5">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Choose Your Weapon.</h2>
          <p className="text-kc-muted text-lg max-w-2xl mx-auto">
            From single-page speeders to multi-city empires. You own the code 100%.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          
          {/* TIER 1: STARTER ($1k) */}
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">The Landing Page</h3>
            <div className="text-4xl font-black text-white mb-1">$1,000</div>
            <p className="text-sm text-kc-muted mb-8">One-time. Perfect for Ads.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> <strong>1-Page</strong> Conversion Scroll</li>
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> <strong>0.4s</strong> Load Speed</li>
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> <strong>Mobile</strong> First Design</li>
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> <strong>Basic</strong> SEO Setup</li>
            </ul>
            <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold transition-all">
              Start Basic Build
            </button>
          </div>

          {/* TIER 2: THE ASSET ($3k) - HERO */}
          <div className="relative p-8 rounded-3xl border border-kc-accent/50 bg-gradient-to-b from-white/10 to-black/40 shadow-2xl shadow-orange-900/20 transform md:-translate-y-4 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-kc-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
              Most Popular
            </div>

            <h3 className="text-xl font-bold text-white mb-2">The Trade Asset</h3>
            <div className="text-5xl font-black text-white mb-1">$3,000</div>
            <p className="text-sm text-kc-success font-bold mb-8">Full 5-Page Authority Site.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-white"><Zap className="w-5 h-5 text-kc-success"/> Everything in Starter</li>
              <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-kc-success"/> <strong>5-Page</strong> Complete Build</li>
              <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-kc-success"/> <strong>Advanced</strong> Local SEO</li>
              <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-kc-success"/> <strong>Copywriting</strong> Included</li>
              <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-kc-success"/> <strong>Lead</strong> Tracking Dashboard</li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-kc-accent hover:scale-105 transition-transform text-white font-bold shadow-lg shadow-orange-900/40">
              Build My Asset
            </button>
          </div>

          {/* TIER 3: ENTERPRISE (Custom) */}
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-white/20 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">Market Domination</h3>
            <div className="text-4xl font-black text-white mb-1">Custom</div>
            <p className="text-sm text-kc-muted mb-8">For multi-city expansion.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-kc-muted"><Globe className="w-5 h-5 text-blue-400"/> <strong>Multi-City</strong> Pages (50+)</li>
              <li className="flex items-center gap-3 text-kc-muted"><Bot className="w-5 h-5 text-purple-400"/> <strong>AI</strong> Chatbot Training</li>
              <li className="flex items-center gap-3 text-kc-muted"><BarChart3 className="w-5 h-5 text-green-400"/> <strong>CRM</strong> Integration (Hubspot/Jobber)</li>
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> <strong>Competitor</strong> Audit</li>
            </ul>
            <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold transition-all">
              Contact Sales
            </button>
          </div>
        </div>

        {/* MANAGEMENT ADD-ON SECTION */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Shield className="w-6 h-6 text-kc-success"/> Hosting & Care Plan
              </h4>
              <p className="text-kc-muted">
                Don't want to manage servers? We handle hosting, security, and unlimited text updates for a flat rate.
              </p>
            </div>
            <div className="flex items-center gap-6">
               <div className="text-right hidden md:block">
                  <span className="block text-2xl font-black text-white">$99/mo</span>
                  <span className="text-xs text-kc-muted">Cancel anytime</span>
               </div>
               <button className="px-6 py-3 bg-white/10 rounded-lg text-white font-bold hover:bg-white/20 transition-colors">
                  Add to any plan
               </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
