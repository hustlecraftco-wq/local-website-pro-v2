"use client";
import { TrendingUp, Phone, FileText, MousePointer, ShieldCheck } from "lucide-react";

export default function AnalyticsPreview() {
  return (
    <section className="py-24 px-6 bg-kc-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT: THE COPY */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
            <TrendingUp className="w-4 h-4" /> Live ROI Tracking
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Stop Guessing. <br/> Start Scaling.
          </h2>
          <p className="text-kc-muted text-lg mb-8 leading-relaxed">
            Old websites are black holes. You throw money in, and maybe the phone rings. 
            <br/><br/>
            Our <strong>TradeFoundry Stack</strong> tags every button click, form fill, and phone call. You get a monthly "ledger" showing exactly how much revenue your asset generated.
          </p>
          
          <ul className="space-y-4">
             <li className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20"><MousePointer className="w-5 h-5 text-blue-400"/></div>
                <div>
                   <strong className="block text-sm">Google Tag Manager</strong>
                   <span className="text-xs text-kc-muted">Tracks every interaction</span>
                </div>
             </li>
             <li className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20"><FileText className="w-5 h-5 text-purple-400"/></div>
                <div>
                   <strong className="block text-sm">Looker Studio Reports</strong>
                   <span className="text-xs text-kc-muted">Real-time revenue dashboards</span>
                </div>
             </li>
          </ul>
        </div>

        {/* RIGHT: THE DASHBOARD VISUAL */}
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
          <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            
            {/* Fake Header */}
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <div>
                <div className="text-xs text-kc-muted uppercase tracking-widest">Total Revenue Generated</div>
                <div className="text-3xl font-black text-white">$142,390.00</div>
              </div>
              <div className="text-green-400 text-sm font-bold bg-green-900/20 px-2 py-1 rounded">+12.5% vs last month</div>
            </div>

            {/* Fake Grid Stats */}
            <div className="grid grid-cols-3 gap-4">
               <div className="bg-white/5 p-4 rounded-xl text-center">
                  <Phone className="w-6 h-6 text-blue-400 mx-auto mb-2"/>
                  <div className="text-2xl font-bold text-white">48</div>
                  <div className="text-xs text-kc-muted">Calls</div>
               </div>
               <div className="bg-white/5 p-4 rounded-xl text-center">
                  <FileText className="w-6 h-6 text-purple-400 mx-auto mb-2"/>
                  <div className="text-2xl font-bold text-white">12</div>
                  <div className="text-xs text-kc-muted">Quotes</div>
               </div>
               <div className="bg-white/5 p-4 rounded-xl text-center">
                  <ShieldCheck className="w-6 h-6 text-green-400 mx-auto mb-2"/>
                  <div className="text-2xl font-bold text-white">18.4%</div>
                  <div className="text-xs text-kc-muted">Conv. Rate</div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
