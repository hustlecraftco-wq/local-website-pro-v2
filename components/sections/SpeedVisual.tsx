"use client";
import { Zap, AlertTriangle, Timer } from "lucide-react";

export default function SpeedVisual() {
  return (
    <section className="py-24 px-6 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADLINE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Agency vs. <span className="text-kc-success">LocalWebsitePro</span>
          </h2>
          <p className="text-xl text-kc-muted">Speed isn't just a metric. It's revenue.</p>
        </div>

        {/* THE VISUAL CHART */}
        <div className="space-y-8">
          
          {/* COMPETITOR BAR (SLOW) */}
          <div className="relative">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-red-400 mb-2">
              <span>Wordpress / Wix</span>
              <span>3.2s Load Time</span>
            </div>
            <div className="h-16 w-full bg-white/5 rounded-r-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-[85%] bg-gradient-to-r from-red-900/50 to-red-600/50 flex items-center px-4 border-r-4 border-red-500">
                <span className="text-white font-bold flex items-center gap-2 animate-pulse">
                  <AlertTriangle className="w-5 h-5"/> Loading...
                </span>
              </div>
            </div>
          </div>

          {/* OUR BAR (FAST) */}
          <div className="relative">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-kc-success mb-2">
              <span>Your Asset</span>
              <span>0.4s Load Time</span>
            </div>
            <div className="h-16 w-full bg-white/5 rounded-r-2xl relative overflow-hidden">
               {/* This bar is much shorter to represent speed */}
              <div className="absolute top-0 left-0 h-full w-[15%] bg-gradient-to-r from-green-900 to-kc-success flex items-center px-4 border-r-4 border-white shadow-[0_0_30px_rgba(0,255,0,0.5)]">
                <span className="text-white font-black flex items-center gap-2 whitespace-nowrap">
                  <Zap className="w-5 h-5 fill-white"/> INSTANT.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* THE PUNCHLINE */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 rounded-2xl bg-red-900/10 border border-red-500/20 max-w-2xl">
            <p className="text-lg md:text-xl text-red-200 font-bold">
              "In that 2.8s gap, your customer left."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
