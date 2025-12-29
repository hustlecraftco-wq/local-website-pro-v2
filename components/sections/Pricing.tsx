"use client";
import { Check, X, AlertTriangle, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden bg-kc-dark border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-kc-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* --- PART 1: THE LOGIC (COMPETITOR COMPARISON) --- */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Why Local Website Pro?</h2>
            <p className="text-kc-muted text-lg">Stop renting. Stop building it yourself. Start owning.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. The "Rental" Agency */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4 text-red-400 font-bold uppercase tracking-wider text-xs">
                <AlertTriangle className="w-4 h-4" /> The "Rental" Agency
              </div>
              <div className="text-2xl font-black text-white mb-2">$3k + $79/mo</div>
              <p className="text-sm text-kc-muted mb-6">Typical Local Competitor</p>
              <ul className="space-y-3 text-sm text-kc-muted">
                <li className="flex gap-2"><X className="w-4 h-4 text-red-500"/> <strong>You never</strong> own the code</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-red-500"/> Fees <strong>never stop</strong> ($7k+ in 5 yrs)</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-red-500"/> Price hikes are common</li>
              </ul>
            </div>

            {/* 2. The DIY Trap */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
               <div className="flex items-center gap-2 mb-4 text-yellow-400 font-bold uppercase tracking-wider text-xs">
                <AlertTriangle className="w-4 h-4" /> The DIY Trap (Wix/Odoo)
              </div>
              <div className="text-2xl font-black text-white mb-2">$159/mo + Your Time</div>
              <p className="text-sm text-kc-muted mb-6">"Easy" Builders</p>
              <ul className="space-y-3 text-sm text-kc-muted">
                <li className="flex gap-2"><X className="w-4 h-4 text-red-500"/> <strong>Slow</strong> load speeds (Bad SEO)</li>
                <li className="flex gap-2"><X className="w-4 h-4 text-red-500"/> You have to <strong>build it yourself</strong></li>
                <li className="flex gap-2"><X className="w-4 h-4 text-red-500"/> Stuck on their platform forever</li>
              </ul>
            </div>

            {/* 3. US (The Asset) */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-kc-accent/20 to-black border border-kc-accent/50 relative overflow-hidden group">
               <div className="absolute top-0 right-0 bg-kc-accent text-white text-[10px] font-bold px-2 py-1 uppercase">Winner</div>
               <div className="flex items-center gap-2 mb-4 text-kc-success font-bold uppercase tracking-wider text-xs">
                <Check className="w-4 h-4" /> Local Website Pro
              </div>
              <div className="text-2xl font-black text-white mb-2">$2,997 One-Time</div>
              <p className="text-sm text-white/80 mb-6">The "Trade Asset"</p>
              <ul className="space-y-3 text-sm text-white">
                <li className="flex gap-2"><Check className="w-4 h-4 text-kc-success"/> <strong>You Own It</strong> (100% Code Access)</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-kc-success"/> <strong>0.4s</strong> Load Speed (Google Loves It)</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-kc-success"/> <strong>No</strong> Mandatory Monthly Fees</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- PART 2: THE MENU (MONTHLY OPTIONS) --- */}
        <div className="text-center mb-16 pt-16 border-t border-white/5">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">You Own The Code. <br/>We Keep It Running.</h2>
          <p className="text-kc-muted text-lg max-w-2xl mx-auto">
            Pay once for the build. Then choose how you want to handle the keys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          
          {/* OPTION 1: DIY (Free) */}
          <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
            <h3 className="text-xl font-bold text-kc-muted mb-2">Self-Managed</h3>
            <div className="text-4xl font-black text-white mb-1">$0<span className="text-lg text-kc-muted font-normal">/mo</span></div>
            <p className="text-sm text-kc-muted mb-8">You handle the tech.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-kc-muted"><Check className="w-5 h-5 text-white"/> You own the repo</li>
              <li className="flex items-center gap-3 text-kc-muted"><X className="w-5 h-5 text-red-500"/> No Updates</li>
              <li className="flex items-center gap-3 text-kc-muted"><X className="w-5 h-5 text-red-500"/> No Hosting Support</li>
            </ul>
            <div className="w-full py-4 rounded-xl border border-dashed border-white/10 text-center text-kc-muted text-sm">
              Great for Tech-Savvy Owners
            </div>
          </div>

          {/* OPTION 2: PEACE OF MIND ($99) */}
          <div className="relative p-8 rounded-3xl border border-kc-accent/50 bg-gradient-to-b from-white/10 to-black/40 shadow-2xl shadow-orange-900/20 z-10 md:scale-110">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-kc-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
              Most Popular
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Peace of Mind</h3>
            <div className="text-5xl font-black text-white mb-1">$99<span className="text-lg text-white/50 font-normal">/mo</span></div>
            <p className="text-sm text-kc-success font-bold mb-8">Hosting + Unlimited Updates.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-kc-success"/> <strong>Managed</strong> Hosting (Vercel)</li>
              <li className="flex items-center gap-3 text-white"><Check className="w-5 h-5 text-kc-success"/> <strong>Unlimited</strong> Text/Image Changes</li>
              <li className="flex items-center gap-3 text-white"><ShieldCheck className="w-5 h-5 text-kc-success"/> <strong>Daily</strong> Backups & Security</li>
              <li className="flex items-center gap-3 text-white"><Zap className="w-5 h-5 text-kc-success"/> <strong>Priority</strong> Support Line</li>
            </ul>
            
            <button className="block w-full py-4 rounded-xl bg-kc-accent text-center text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-orange-900/40">
              Add Care Plan
            </button>
          </div>

          {/* OPTION 3: GROWTH ($299) */}
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
              Add Growth
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
