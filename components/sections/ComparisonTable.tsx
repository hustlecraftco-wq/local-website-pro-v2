"use client";
import { Check, X, Minus } from "lucide-react";

export default function ComparisonTable() {
  return (
    <section className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Stop Renting. Start Owning.</h2>
          <p className="text-kc-muted text-lg max-w-2xl mx-auto">
            See why businesses are leaving Wix and rental agencies for Local Website Pro.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="p-6 text-left text-white/50 font-medium border-b border-white/10 w-1/4">Feature</th>
                <th className="p-6 text-center text-red-400 font-bold border-b border-white/10 w-1/4 bg-red-900/5 rounded-t-xl">Rental Agencies</th>
                <th className="p-6 text-center text-yellow-400 font-bold border-b border-white/10 w-1/4 bg-yellow-900/5">Wix / DIY</th>
                <th className="p-6 text-center text-kc-success font-black text-xl border-b border-white/10 w-1/4 bg-kc-success/10 rounded-t-xl border-t-4 border-t-kc-success">Local Website Pro</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {/* Row 1: Code Ownership */}
              <tr className="border-b border-white/5">
                <td className="p-6 text-white font-bold">Do You Own The Code?</td>
                <td className="p-6 text-center text-kc-muted bg-red-900/5"><X className="w-6 h-6 text-red-500 mx-auto"/> No (Leased)</td>
                <td className="p-6 text-center text-kc-muted bg-yellow-900/5"><X className="w-6 h-6 text-red-500 mx-auto"/> No (Locked In)</td>
                <td className="p-6 text-center text-white bg-kc-success/5 font-bold"><Check className="w-6 h-6 text-kc-success mx-auto"/> YES (100%)</td>
              </tr>

              {/* Row 2: Monthly Fees */}
              <tr className="border-b border-white/5">
                <td className="p-6 text-white font-bold">Mandatory Monthly Fees</td>
                <td className="p-6 text-center text-kc-muted bg-red-900/5">$79 - $299 / mo</td>
                <td className="p-6 text-center text-kc-muted bg-yellow-900/5">$29 - $159 / mo</td>
                <td className="p-6 text-center text-white bg-kc-success/5 font-bold"><Check className="w-6 h-6 text-kc-success mx-auto"/> $0 (Optional)</td>
              </tr>

              {/* Row 3: Speed */}
              <tr className="border-b border-white/5">
                <td className="p-6 text-white font-bold">Load Speed (Mobile)</td>
                <td className="p-6 text-center text-kc-muted bg-red-900/5">3.5s (Average)</td>
                <td className="p-6 text-center text-kc-muted bg-yellow-900/5">4.0s (Bloated)</td>
                <td className="p-6 text-center text-white bg-kc-success/5 font-bold"><Check className="w-6 h-6 text-kc-success mx-auto"/> 0.4s (Instant)</td>
              </tr>

              {/* Row 4: Design */}
              <tr className="border-b border-white/5">
                <td className="p-6 text-white font-bold">Design Quality</td>
                <td className="p-6 text-center text-kc-muted bg-red-900/5">Generic Templates</td>
                <td className="p-6 text-center text-kc-muted bg-yellow-900/5">Drag & Drop DIY</td>
                <td className="p-6 text-center text-white bg-kc-success/5 font-bold"><Check className="w-6 h-6 text-kc-success mx-auto"/> Hand-Coded</td>
              </tr>

               {/* Row 5: 5 Year Cost */}
               <tr>
                <td className="p-6 text-white font-bold">Total Cost (5 Years)</td>
                <td className="p-6 text-center text-red-400 font-bold bg-red-900/5 text-lg">$8,000+</td>
                <td className="p-6 text-center text-yellow-400 font-bold bg-yellow-900/5 text-lg">$5,000+</td>
                <td className="p-6 text-center text-kc-success font-black bg-kc-success/5 text-2xl">$2,997</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
