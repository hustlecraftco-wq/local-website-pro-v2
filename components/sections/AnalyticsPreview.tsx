"use client";
import { AreaChart, BarChart, Activity, DollarSign, PhoneIncoming, MousePointerClick } from "lucide-react";

export default function AnalyticsPreview() {
  return (
    <section className="py-24 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* LEFT: The Copy */}
        <div className="w-full md:w-1/3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Activity className="w-4 h-4" />
            Live ROI Tracking
          </div>
          <h2 className="text-4xl font-black text-white mb-6">
            Stop Guessing.<br/>
            <span className="text-kc-muted">Start Scaling.</span>
          </h2>
          <p className="text-kc-muted text-lg leading-relaxed mb-8">
            Old websites are black holes. You throw money in, and maybe the phone rings.
            <br/><br/>
            <strong>Our Tech Stack is different.</strong> We tag every button click, form fill, and phone call. You get a monthly "ledger" showing exactly how much revenue your website generated.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <MousePointerClick className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-bold">Google Tag Manager</div>
                <div className="text-xs text-kc-muted">Tracks every interaction</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <BarChart className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-white font-bold">Looker Studio Reports</div>
                <div className="text-xs text-kc-muted">Real-time revenue dashboards</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: The Visual (Fake Dashboard) */}
        <div className="w-full md:w-2/3">
          <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">
            {/* Fake Browser Header */}
            <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <div className="text-sm text-kc-muted mb-1">Total Revenue Generated</div>
                  <div className="text-4xl font-mono text-white">$142,390.00</div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 text-green-400 bg-green-400/10 px-2 py-1 rounded text-xs font-bold">
                    +12.5% vs last month
                  </div>
                </div>
              </div>

              {/* Grid of Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2 mb-2 text-kc-muted text-xs uppercase font-bold">
                    <PhoneIncoming className="w-4 h-4" /> Calls
                  </div>
                  <div className="text-2xl font-bold text-white">48</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                   <div className="flex items-center gap-2 mb-2 text-kc-muted text-xs uppercase font-bold">
                    <DollarSign className="w-4 h-4" /> Quotes
                  </div>
                  <div className="text-2xl font-bold text-white">12</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                   <div className="flex items-center gap-2 mb-2 text-kc-muted text-xs uppercase font-bold">
                    <Activity className="w-4 h-4" /> Conversion
                  </div>
                  <div className="text-2xl font-bold text-green-400">18.4%</div>
                </div>
              </div>

              {/* Fake Graph */}
              <div className="h-32 w-full flex items-end justify-between gap-1 opacity-50">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                  <div key={i} className="w-full bg-kc-accent rounded-t-sm hover:bg-white transition-colors" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-kc-accent/5 blur-[80px] pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
