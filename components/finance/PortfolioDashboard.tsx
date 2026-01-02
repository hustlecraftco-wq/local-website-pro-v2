"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, PieChart, Activity } from "lucide-react";

export default function PortfolioDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'holdings' | 'performance'>('overview');

  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-2xl">
      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-slate-800 pb-4">
        {(['overview', 'holdings', 'performance'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === tab
                ? 'bg-emerald-600 text-white'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'overview' && <OverviewTab />}
      {activeTab === 'holdings' && <HoldingsTab />}
      {activeTab === 'performance' && <PerformanceTab />}
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <MetricCard
          label="Total Value"
          value="$1,847,290"
          change="+12.4%"
          positive
        />
        <MetricCard
          label="YTD Gain"
          value="$204,891"
          change="+12.4%"
          positive
        />
        <MetricCard
          label="Cash"
          value="$82,450"
          change="4.5%"
        />
      </div>

      <div className="bg-slate-950 rounded-2xl p-6">
        <div className="text-sm font-bold text-slate-400 mb-4">ALLOCATION</div>
        <div className="space-y-3">
          <AllocationBar label="Stocks" percentage={60} color="emerald" />
          <AllocationBar label="Bonds" percentage={25} color="blue" />
          <AllocationBar label="Real Estate" percentage={10} color="amber" />
          <AllocationBar label="Cash" percentage={5} color="slate" />
        </div>
      </div>

      <div className="bg-slate-950 rounded-2xl p-6">
        <div className="text-sm font-bold text-slate-400 mb-4">RECENT ACTIVITY</div>
        <div className="space-y-3">
          <ActivityItem action="Dividend" amount="+$2,847" date="2 days ago" />
          <ActivityItem action="Rebalance" amount="Portfolio adjusted" date="1 week ago" />
          <ActivityItem action="Contribution" amount="+$5,000" date="2 weeks ago" />
        </div>
      </div>
    </div>
  );
}

function HoldingsTab() {
  const holdings = [
    { symbol: "VTI", name: "Total Stock Market ETF", value: "$542,890", allocation: 29, change: "+8.2%" },
    { symbol: "BND", name: "Total Bond Market ETF", value: "$461,823", allocation: 25, change: "+2.1%" },
    { symbol: "VNQ", name: "Real Estate ETF", value: "$184,729", allocation: 10, change: "+15.3%" },
    { symbol: "VXUS", name: "International Stock ETF", value: "$575,398", allocation: 31, change: "+6.7%" },
  ];

  return (
    <div className="space-y-4">
      {holdings.map((holding, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-slate-950 rounded-xl p-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <PieChart className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="font-bold text-white">{holding.symbol}</div>
              <div className="text-sm text-slate-400">{holding.name}</div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="font-mono font-bold text-white">{holding.value}</div>
            <div className="text-sm text-emerald-400">{holding.change}</div>
          </div>
          
          <div className="w-32">
            <div className="text-xs text-slate-500 mb-1">{holding.allocation}%</div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${holding.allocation}%` }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                className="h-full bg-emerald-500"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function PerformanceTab() {
  const monthlyData = [42, 48, 55, 52, 61, 58, 67, 71, 78, 82, 89, 94];

  return (
    <div className="space-y-6">
      <div className="bg-slate-950 rounded-2xl p-6">
        <div className="text-sm font-bold text-slate-400 mb-6">12-MONTH GROWTH</div>
        <div className="h-64 flex items-end justify-between gap-2">
          {monthlyData.map((value, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${value}%` }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg"
            />
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-950 rounded-xl p-6">
          <div className="text-xs font-mono text-slate-500 uppercase mb-2">Annualized Return</div>
          <div className="text-3xl font-mono font-bold text-emerald-400">+12.4%</div>
        </div>
        <div className="bg-slate-950 rounded-xl p-6">
          <div className="text-xs font-mono text-slate-500 uppercase mb-2">Sharpe Ratio</div>
          <div className="text-3xl font-mono font-bold text-white">1.42</div>
        </div>
        <div className="bg-slate-950 rounded-xl p-6">
          <div className="text-xs font-mono text-slate-500 uppercase mb-2">Max Drawdown</div>
          <div className="text-3xl font-mono font-bold text-red-400">-8.2%</div>
        </div>
        <div className="bg-slate-950 rounded-xl p-6">
          <div className="text-xs font-mono text-slate-500 uppercase mb-2">Volatility</div>
          <div className="text-3xl font-mono font-bold text-white">11.3%</div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, change, positive = false }: { label: string; value: string; change: string; positive?: boolean }) {
  return (
    <div className="bg-slate-950 rounded-xl p-6">
      <div className="text-xs font-mono text-slate-500 uppercase mb-2">{label}</div>
      <div className="text-3xl font-mono font-bold text-white mb-2">{value}</div>
      <div className={`flex items-center gap-1 text-sm font-bold ${positive ? 'text-emerald-400' : 'text-slate-400'}`}>
        {positive ? <TrendingUp className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
        {change}
      </div>
    </div>
  );
}

function AllocationBar({ label, percentage, color }: { label: string; percentage: number; color: string }) {
  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    amber: 'bg-amber-500',
    slate: 'bg-slate-500',
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-slate-400">{label}</span>
        <span className="text-white font-mono">{percentage}%</span>
      </div>
      <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`h-full ${colorMap[color]}`}
        />
      </div>
    </div>
  );
}

function ActivityItem({ action, amount, date }: { action: string; amount: string; date: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-800 last:border-0">
      <div>
        <div className="text-sm text-white font-semibold">{action}</div>
        <div className="text-xs text-slate-500">{date}</div>
      </div>
      <div className="text-sm font-mono text-emerald-400">{amount}</div>
    </div>
  );
}
