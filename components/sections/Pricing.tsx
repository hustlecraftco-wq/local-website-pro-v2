"use client";

import { useState } from "react";
import { 
  Check, ArrowRight, ShieldCheck, Zap, Rocket, Building2, Globe2, 
  Server, Unlock, Target, Lock, Cpu, Terminal 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from '@splinetool/react-spline';

// --- TYPES ---
type BusinessSize = "starter" | "established" | "enterprise";

// --- COLOR MAPPING ---
const colorStyles = {
  amber: {
    iconBg: "bg-amber-500/10",
    iconText: "text-amber-400",
    border: "border-amber-500/50",
    shadow: "shadow-amber-500/20",
    glow: "from-amber-500/20",
    btn: "bg-amber-600 hover:bg-amber-500 shadow-amber-900/20",
    check: "text-amber-400"
  },
  emerald: {
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-400",
    border: "border-emerald-500/50",
    shadow: "shadow-emerald-500/20",
    glow: "from-emerald-500/20",
    btn: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/20",
    check: "text-emerald-400"
  },
  blue: {
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-400",
    border: "border-blue-500/50",
    shadow: "shadow-blue-500/20",
    glow: "from-blue-500/20",
    btn: "bg-blue-600 hover:bg-blue-500 shadow-blue-900/20",
    check: "text-blue-400"
  },
  purple: {
    iconBg: "bg-purple-500/10",
    iconText: "text-purple-400",
    border: "border-purple-500/50",
    shadow: "shadow-purple-500/20",
    glow: "from-purple-500/20",
    btn: "bg-purple-600 hover:bg-purple-500 shadow-purple-900/20",
    check: "text-purple-400"
  },
  slate: {
    iconBg: "bg-zinc-800",
    iconText: "text-zinc-400",
    border: "border-zinc-700",
    shadow: "shadow-zinc-900/20",
    glow: "from-zinc-500/10",
    btn: "bg-zinc-800 hover:bg-zinc-700 border-zinc-700",
    check: "text-zinc-500"
  }
};

export default function ServicesAndPricing() {
  const [activeTab, setActiveTab] = useState<BusinessSize>("established");

  // --- DATA: BUILD TIERS ---
  const buildData = {
    starter: {
      options: [
        {
          name: "The 7-Day Pilot",
          price: "$0",
          period: "7-day trial",
          description: "Try our AI Receptionist on your current site.",
          features: ["Missed Call Text Back", "Chat Widget Install", "Mobile App Access", "No Credit Card Required"],
          cta: "Start Free Trial",
          icon: <Zap className="w-5 h-5" />,
          color: "amber" as keyof typeof colorStyles,
          highlight: false
        },
        {
          name: "The Launchpad",
          price: "$1,250",
          period: "one-time",
          description: "A high-performance one-page site to validate your business.",
          features: ["Single Page App (SPA)", "5 Sections (Hero, Services)", "0.4s Load Speed", "Basic SEO Setup", "Contact Form"],
          cta: "Launch Now",
          icon: <Rocket className="w-5 h-5" />,
          color: "emerald" as keyof typeof colorStyles,
          highlight: true
        }
      ]
    },
    established: {
      options: [
        {
          name: "The Standard",
          price: "$3,500",
          period: "one-time",
          description: "The industry standard for local service businesses.",
          features: ["5-8 Custom Pages", "CMS Integration (Sanity)", "Local SEO Routing", "Review Automation", "Code Ownership"],
          cta: "Build Standard",
          icon: <Globe2 className="w-5 h-5" />,
          color: "blue" as keyof typeof colorStyles,
          highlight: false
        },
        {
          name: "The Authority",
          price: "$5,500",
          period: "one-time",
          description: "For high-trust firms (Legal, Finance, Medical).",
          features: ["12-15 Custom Pages", "Interactive Calculators", "Compliance Ready", "Advanced Security (Kali)", "Concierge Migration"],
          cta: "Build Authority",
          icon: <ShieldCheck className="w-5 h-5" />,
          color: "emerald" as keyof typeof colorStyles,
          highlight: true
        }
      ]
    },
    enterprise: {
      options: [
        {
          name: "The Franchise System",
          price: "$15k - $30k+",
          period: "project based",
          description: "Dominance across multiple cities or states.",
          features: ["Centralized Design System", "Programmatic SEO (50+ Cities)", "Multi-Location GHL", "Custom Web Apps", "Red Team Pentesting"],
          cta: "Schedule Strategy Call",
          icon: <Building2 className="w-5 h-5" />,
          color: "purple" as keyof typeof colorStyles,
          highlight: true,
          fullWidth: true
        }
      ]
    }
  };

  // --- DATA: MONTHLY ---
  const monthlyData = [
    {
      name: "Self-Managed",
      price: "$0",
      period: "/mo",
      description: "We hand you the code. You host it.",
      features: ["You own the GitHub Repo", "You pay for Hosting", "You handle updates", "No ongoing support"],
      icon: <Unlock className="w-5 h-5" />,
      cta: "I'll Run It Myself",
      color: "slate" as keyof typeof colorStyles,
      highlight: false
    },
    {
      name: "The Engine",
      price: "$297",
      period: "/mo",
      description: "Hosting + The Software Suite.",
      features: ["Managed Edge Hosting", "Missed Call Text Back", "Review Automation", "Unified CRM Dashboard", "Standard Chatbot"],
      icon: <Server className="w-5 h-5" />,
      cta: "Add The Engine",
      color: "blue" as keyof typeof colorStyles,
      highlight: true
    },
    {
      name: "Total Command",
      price: "$497",
      period: "/mo",
      description: "Security & Peace of Mind.",
      features: ["Everything in Engine", "1 Hour Dev Update/mo", "Quarterly Security Scan", "Priority Support", "Compliance Archiving"],
      icon: <ShieldCheck className="w-5 h-5" />,
      cta: "Partner With Us",
      color: "emerald" as keyof typeof colorStyles,
      highlight: false
    }
  ];

  return (
    <section className="relative min-h-screen bg-neutral-950 text-zinc-200 overflow-hidden py-24 px-4 md:px-6 font-sans antialiased selection:bg-emerald-500/30">
      
      {/* --- SPLINE BACKGROUND SCENE (Added at 40% Opacity) --- */}
      <div className="absolute inset-0 z-0 opacity-40 h-full w-full pointer-events-none">
        <Spline scene="https://prod.spline.design/Np-gnO5Y5UwmUzxE/scene.splinecode" />
      </div>

      {/* --- AMBIENT BACKGROUND GLOW (Existing) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-sm">
            <Cpu className="w-3 h-3" />
            System Architecture
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Asset <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Engineering.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Stop renting templates. Build a digital asset you actually own. 
            Choose your build tier, then decide how you want to run it.
          </p>
        </div>

        {/* BUILD TABS */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-1 bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800 backdrop-blur-xl">
            {(Object.keys(buildData) as BusinessSize[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all capitalize relative ${
                  activeTab === tab ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-zinc-800 border border-zinc-700 rounded-lg shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* BUILD CARDS */}
        <div className="mb-32 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`grid gap-8 w-full max-w-5xl mx-auto ${
                activeTab === 'enterprise' ? 'grid-cols-1' : 'md:grid-cols-2'
              }`}
            >
              {buildData[activeTab].options.map((option, idx) => (
                <PricingCard key={idx} option={option} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* GUARANTEE BREAKOUT */}
        <div className="mb-32 relative group max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative bg-zinc-900/90 border border-amber-500/20 rounded-3xl p-8 md:p-12 text-center backdrop-blur-xl overflow-hidden">
             {/* Background Decoration */}
             <Unlock className="absolute -top-12 -right-12 w-64 h-64 text-amber-500/5 rotate-12" />
             
             <div className="relative z-10">
               <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-xl mb-6 border border-amber-500/20">
                  <Lock className="w-6 h-6 text-amber-400" />
               </div>
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">The "No Hostage" Protocol</h3>
               <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
                  We don't believe in trapping clients. <span className="text-amber-400 font-bold">You own 100% of the code.</span> 
                  If you ever decide to leave, we hand over the GitHub repository. 
                  Zero lock-in. Zero proprietary fees.
               </p>
             </div>
          </div>
        </div>

        {/* MONTHLY OPERATING SYSTEMS */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Run Your <span className="text-blue-400">System.</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Decide how you want to manage your asset. We can handle the hosting, security, and automation, or you can take the keys and drive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {monthlyData.map((plan, idx) => (
              <PricingCard key={idx} option={plan} />
            ))}
          </div>
        </div>

        {/* GROWTH HUNTER SECTION */}
        <div className="relative max-w-5xl mx-auto">
          {/* Scanning Line Animation */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent rounded-[2.5rem] opacity-30 blur-sm animate-pulse" />
          
          <div className="relative bg-neutral-900 border border-purple-500/30 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-900/20">
            
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#4c1d95 1px, transparent 1px), linear-gradient(90deg, #4c1d95 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-16 relative z-10">
              
              {/* Hunter Text */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                   <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </div>
                   <span className="text-purple-400 font-mono text-xs tracking-widest uppercase">Active Intelligence</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
                  The Growth <span className="text-purple-400">Hunter.</span>
                </h3>
                
                <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
                  Websites wait for customers. The Hunter finds them. 
                  We deploy active OSINT scrapers to monitor local social channels, 
                  delivering hot leads before your competitors even know they exist.
                </p>

                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-3xl font-black text-white">$997</span>
                    <span className="text-zinc-500 text-xs uppercase tracking-wider">Per Month</span>
                  </div>
                  <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold shadow-lg shadow-purple-900/40 transition-all flex items-center gap-2 group">
                    Start Hunting <Target className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Hunter Terminal */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />
                <div className="relative bg-black border border-zinc-800 rounded-xl p-6 font-mono text-xs text-zinc-400 shadow-2xl">
                  <div className="flex items-center gap-2 border-b border-zinc-800 pb-4 mb-4">
                    <Terminal className="w-4 h-4 text-zinc-600" />
                    <span className="ml-auto text-[10px] text-zinc-600">hunter_v1.0.exe</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <span className="text-purple-500">➜</span>
                      <span>Initializing scan... [Kansas City, MO]</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-purple-500">➜</span>
                      <span>Monitoring r/KansasCity...</span>
                    </div>
                    <div className="flex gap-2 bg-purple-900/10 p-2 rounded border-l-2 border-purple-500">
                      <span className="text-purple-500">➜</span>
                      <span className="text-emerald-400 font-bold">LEAD FOUND:</span>
                      <span className="text-zinc-300">"Need a roofer in Overland Park ASAP" (2m ago)</span>
                    </div>
                      <div className="flex gap-2">
                      <span className="text-purple-500">➜</span>
                      <span>Scraping Google Maps competitors...</span>
                    </div>
                      <div className="flex gap-2 bg-red-900/10 p-2 rounded border-l-2 border-red-500">
                      <span className="text-purple-500">➜</span>
                      <span className="text-red-400 font-bold">OPPORTUNITY:</span>
                      <span className="text-zinc-300">Competitor "KC Roofs" dropped to 3.8 stars.</span>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-[10px] text-purple-400 mb-1">
                        <span>COMPILING REPORT</span>
                        <span>84%</span>
                      </div>
                      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-purple-500"
                          animate={{ width: ["0%", "84%"] }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// --- SUB-COMPONENT: CARD ---
function PricingCard({ option }: { option: any }) {
  // Look up colors from the map
  const styles = colorStyles[option.color as keyof typeof colorStyles];

  return (
    <div 
      className={`group relative p-8 rounded-3xl border transition-all duration-500 flex flex-col bg-zinc-900/80 backdrop-blur-xl
        ${option.highlight 
          ? `${styles.border} ${styles.shadow}` 
          : "border-zinc-800 hover:border-zinc-700"
        }
        ${option.fullWidth ? "md:p-12 md:flex-row gap-12 items-center" : ""}
      `}
    >
      {/* Dynamic Underglow (Using style map to fix JIT issue) */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
        bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${styles.glow} via-transparent to-transparent
      `} />

      <div className={`${option.fullWidth ? "md:w-1/3" : "w-full"}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${styles.iconBg} ${styles.iconText} group-hover:scale-110 transition-transform duration-300`}>
            {option.icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{option.name}</h3>
        </div>
        
        <p className="text-zinc-400 text-sm mb-6 min-h-[40px] leading-relaxed">{option.description}</p>
        
        <div className="mb-8">
          <div className="text-4xl font-black text-white mb-1 tracking-tight">{option.price}</div>
          <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">{option.period}</div>
        </div>

        <button className={`w-full py-4 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-transparent text-white
          ${styles.btn}
        `}>
          {option.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className={`space-y-4 relative z-10 ${
        option.fullWidth 
          ? "md:w-2/3 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 md:space-y-0 pt-8 md:pt-0 border-t md:border-t-0 border-zinc-800" 
          : "flex-grow pt-8 border-t border-zinc-800"
      }`}>
        {option.features.map((feature: string, fIdx: number) => (
          <div key={fIdx} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${styles.check}`} />
            <span className="text-zinc-300 text-sm font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
