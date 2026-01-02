"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, DollarSign, Calendar, Target, Mail } from "lucide-react";
import { calculateROI, formatCurrency, ROIInputs, ROIResults } from "@/lib/finance-calculator";

export default function ROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    currentPortfolio: 100000,
    monthlyContribution: 2000,
    timeHorizon: 20,
    riskTolerance: 'moderate',
  });

  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const results: ROIResults = calculateROI(inputs);

  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // AUTOMATION TRIGGER - Backend integration points
    console.log("🤖 AUTOMATION: Email captured for ROI report");
    console.log("📧 Email:", email);
    console.log("📊 ROI Results:", results);
    console.log("🔄 Triggering automations:");
    console.log("  - Add to CRM (HubSpot)");
    console.log("  - Send detailed PDF report");
    console.log("  - Trigger nurture email sequence");
    console.log("  - Notify financial advisor");
    console.log("  - Schedule follow-up call (48 hours)");
    
    setEmailSubmitted(true);
    setTimeout(() => setEmailSubmitted(false), 3000);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left: Inputs */}
      <div className="space-y-8">
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-slate-300 mb-3">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            Current Portfolio Value
          </label>
          <input
            type="range"
            min="0"
            max="1000000"
            step="10000"
            value={inputs.currentPortfolio}
            onChange={(e) => setInputs({ ...inputs, currentPortfolio: parseInt(e.target.value) })}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <input
            type="number"
            value={inputs.currentPortfolio}
            onChange={(e) => setInputs({ ...inputs, currentPortfolio: parseInt(e.target.value) || 0 })}
            className="mt-3 w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono text-lg focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-slate-300 mb-3">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            Monthly Contribution
          </label>
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={inputs.monthlyContribution}
            onChange={(e) => setInputs({ ...inputs, monthlyContribution: parseInt(e.target.value) })}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <input
            type="number"
            value={inputs.monthlyContribution}
            onChange={(e) => setInputs({ ...inputs, monthlyContribution: parseInt(e.target.value) || 0 })}
            className="mt-3 w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono text-lg focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-slate-300 mb-3">
            <Calendar className="w-4 h-4 text-emerald-400" />
            Time Horizon (Years)
          </label>
          <input
            type="range"
            min="5"
            max="40"
            value={inputs.timeHorizon}
            onChange={(e) => setInputs({ ...inputs, timeHorizon: parseInt(e.target.value) })}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <div className="mt-2 text-3xl font-mono font-bold text-white text-center">
            {inputs.timeHorizon} years
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-slate-300 mb-3">
            <Target className="w-4 h-4 text-emerald-400" />
            Risk Tolerance
          </label>
          <div className="grid grid-cols-3 gap-3">
            {(['conservative', 'moderate', 'aggressive'] as const).map((risk) => (
              <button
                key={risk}
                onClick={() => setInputs({ ...inputs, riskTolerance: risk })}
                className={`px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                  inputs.riskTolerance === risk
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {risk.charAt(0).toUpperCase() + risk.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all"
        >
          Calculate Projections
        </button>
      </div>

      {/* Right: Results */}
      <AnimatePresence mode="wait">
        {showResults && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-2xl p-8 text-white">
              <div className="text-sm font-bold mb-2">PROJECTED VALUE</div>
              <div className="text-5xl font-mono font-black mb-4">
                {formatCurrency(results.futureValue)}
              </div>
              <div className="text-sm opacity-80">in {inputs.timeHorizon} years</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ResultCard label="Total Contributions" value={formatCurrency(results.totalContributions)} />
              <ResultCard label="Investment Growth" value={formatCurrency(results.investmentGrowth)} positive />
              <ResultCard label="Tax Savings" value={formatCurrency(results.taxSavings)} positive />
              <ResultCard label="Monthly Income" value={formatCurrency(results.monthlyRetirementIncome)} />
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <div className="text-xs font-mono text-slate-500 uppercase mb-4">Get Detailed PDF Report</div>
              
              {!emailSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Send Report
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-4"
                >
                  <div className="text-emerald-400 font-bold mb-1">✓ Report Sent!</div>
                  <div className="text-xs text-slate-500">Check your email for detailed analysis</div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultCard({ label, value, positive = false }: { label: string; value: string; positive?: boolean }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
      <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">{label}</div>
      <div className={`text-2xl font-mono font-bold ${positive ? 'text-emerald-400' : 'text-white'}`}>
        {value}
      </div>
    </div>
  );
}
