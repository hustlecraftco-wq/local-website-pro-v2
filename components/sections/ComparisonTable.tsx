"use client";
import { Check, X, Info } from "lucide-react";
import { Tooltip } from "flowbite-react";

export default function ComparisonTable() {
  return (
    <section id="compare" className="py-24 px-6 bg-kc-dark border-t border-white/5 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kc-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Own The Asset.<br/>Stop Paying Rent.</h2>
          <p className="text-kc-muted text-lg max-w-2xl mx-auto">
            Most agencies charge you $500/mo for a website you don't own. We build it, hand you the keys, and you never pay us rent again.
          </p>
        </div>

        {/* THE GLASS TABLE */}
        <div className="glass-panel rounded-3xl overflow-hidden p-1">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 text-kc-muted font-normal w-1/3">Feature</th>
                  <th className="p-6 text-white font-bold text-center w-1/3">
                    <span className="block text-xs text-kc-muted uppercase tracking-widest mb-1">Rental Agency</span>
                    The Trap
                  </th>
                  <th className="p-6 text-kc-success font-black text-center w-1/3 bg-kc-success/10">
                    <span className="block text-xs text-kc-success/70 uppercase tracking-widest mb-1">Local Website Pro</span>
                    Your Asset
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                
                {/* Row 1: Cost */}
                <tr>
                  <td className="p-6 text-white font-bold flex items-center gap-2">
                    5-Year Cost
                    <Tooltip content="Total cost over 60 months including monthly fees.">
                      <Info className="w-4 h-4 text-kc-muted cursor-help"/>
                    </Tooltip>
                  </td>
                  <td className="p-6 text-center text-red-400 font-mono">$30,000+</td>
                  <td className="p-6 text-center text-kc-success font-mono font-black bg-kc-success/5">$2,997</td>
                </tr>

                {/* Row 2: Ownership */}
                <tr>
                  <td className="p-6 text-kc-muted">Ownership Status</td>
                  <td className="p-6 text-center text-kc-muted">Rented (Lost if canceled)</td>
                  <td className="p-6 text-center text-white font-bold bg-kc-success/5">100% Yours</td>
                </tr>

                {/* Row 3: Speed */}
                <tr>
                  <td className="p-6 text-kc-muted">Page Load Speed</td>
                  <td className="p-6 text-center text-red-400">3.5s - 6.0s</td>
                  <td className="p-6 text-center text-kc-success font-bold bg-kc-success/5">0.4s (Instant)</td>
                </tr>

                {/* Row 4: Code */}
                <tr>
                  <td className="p-6 text-kc-muted">Platform</td>
                  <td className="p-6 text-center text-kc-muted">Wordpress / Wix Bloat</td>
                  <td className="p-6 text-center text-white font-bold bg-kc-success/5">Hand-Coded Next.js</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-kc-muted text-sm mb-4">Calculated based on average monthly SEO retainers of $500/mo vs our one-time build fee.</p>
        </div>
      </div>
    </section>
  );
}
