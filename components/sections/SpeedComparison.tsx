"use client";
import { useEffect, useState } from "react";
import { TrendingDown, Zap, AlertTriangle } from "lucide-react";

export default function SpeedComparison() {
  const [startAnim, setStartAnim] = useState(false);

  // Simple trigger to start animation when component mounts
  useEffect(() => {
    setStartAnim(true);
  }, []);

  return (
    // ADDED id="speed" HERE SO THE NAVBAR LINK WORKS
    <section id="speed" className="py-24 px-6 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Speed is <span className="text-kc-success">Money.</span></h2>
          <p className="text-kc-muted text-lg">
            53% of mobile users leave a site that takes longer than 3 seconds to load.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* THE RACE */}
          <div className="space-y-6">
            
            {/* YOU (Fast) */}
            <div>
              <div className="flex justify-between text-white mb-2 text-sm font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-400"/> Local Website Pro</span>
                <span className="text-kc-success">0.4s (Instant)</span>
              </div>
              <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-kc-success transition-all duration-[400ms] ease-out ${startAnim ? "w-full" : "w-0"}`}
                ></div>
              </div>
            </div>

            {/* THEM (Slow) */}
            <div>
              <div className="flex justify-between text-white mb-2 text-sm font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-500"/> Wix / Wordpress Template</span>
                <span className="text-red-400">3.2s (Loading...)</span>
              </div>
              <div className="h-4 bg-white/10 rounded-full overflow-hidden relative">
                {/* The "Loading" Animation */}
                <div 
                  className={`h-full bg-red-500/50 transition-all duration-[3200ms] ease-linear ${startAnim ? "w-full" : "w-0"}`}
                ></div>
              </div>
            </div>

          </div>

          {/* THE REALITY CHECK (The Stat) */}
          <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-2xl flex items-start gap-4">
            <TrendingDown className="w-8 h-8 text-red-500 shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-1">You are losing 20% of your revenue.</h3>
              <p className="text-kc-muted text-sm">
                Google data shows that as page load time goes from 1s to 3s, the probability of a user bouncing increases by 32%. If they can't see it, they can't buy it.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
