"use client";

import { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Shield, Zap, Target, ArrowRight, Lock, BarChart3, PieChart, Award, Users, DollarSign, Search, Code, Eye, X } from "lucide-react";
import Spline from "@splinetool/react-spline";
import dynamic from "next/dynamic";

// Premium UI Components
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import { AnimatedGradient } from "@/components/ui/GradientNoise";
import MagneticButton from "@/components/ui/MagneticButton";
import { TextRevealWords, TextRevealGradient } from "@/components/ui/TextReveal";
import ScrollReveal, { ScrollRevealStagger, ScrollRevealScale } from "@/components/ui/ScrollReveal";
import Parallax, { ParallaxText, ParallaxScale } from "@/components/ui/Parallax";
import { HoverGlow, HoverTilt, HoverLift, HoverBorderGlow } from "@/components/ui/HoverEffects";

// Finance Components (Dynamic Imports for Performance)
const ROICalculator = dynamic(() => import("@/components/finance/ROICalculator"), { ssr: false });
const QualificationBot = dynamic(() => import("@/components/finance/QualificationBot"), { ssr: false });
const PortfolioDashboard = dynamic(() => import("@/components/finance/PortfolioDashboard"), { ssr: false });
import AutomationToggle from "@/components/finance/AutomationToggle";

export default function ApexWealthManagement() {
  const [showSEODemo, setShowSEODemo] = useState(false);

  return (
    <SmoothScrollProvider>
      <main className="relative min-h-screen bg-[#0A1628] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
        
        {/* Global Styles for Mobile Performance */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap');
          
          @media (max-width: 768px) {
            * {
              animation-duration: 0.01ms !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>

        {/* Premium Background */}
        <AnimatedGradient />
        <CustomCursor />
        <AutomationToggle />
        <QualificationBot />

        {/* Sections */}
        <HeroNav />
        <HeroSection />
        <StatsBar />
        <ROISection />
        <ServicesGrid />
        <ClientPortalSection />
        <TrustSignals />
        <FinalCTA />
        <Footer />

        {/* 🚀 SEO SHOWCASE TOGGLE (Sales Tool) */}
        <div className="fixed bottom-6 left-6 z-[100]">
            <button 
                onClick={() => setShowSEODemo(true)}
                className="flex items-center gap-2 bg-slate-900/80 border border-emerald-500/50 text-emerald-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-emerald-900/20 transition-all shadow-lg backdrop-blur-md"
            >
                <Eye className="w-4 h-4" />
                View SEO Architecture
            </button>
        </div>

        {/* 🚀 SEO VISUALIZER MODAL */}
        <AnimatePresence>
            {showSEODemo && (
                <SEODemoModal onClose={() => setShowSEODemo(false)} />
            )}
        </AnimatePresence>

      </main>
    </SmoothScrollProvider>
  );
}

// ------------------------------------------------------------------
// 1. HERO SECTION (Updated Copy + Spline + Mobile Fix)
// ------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Spline 3D Background - LOADED CORRECTLY */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1628]/80 to-[#0A1628] z-10 pointer-events-none"></div>
        
        {/* Mobile Optimization: Hide Heavy 3D on Phones */}
        <div className="hidden md:block absolute inset-0">
             <Suspense fallback={<div className="absolute inset-0 bg-[#0A1628]" />}>
              <Spline
                scene="https://prod.spline.design/mTaYVjhg-f5TwC9V/scene.splinecode"
                className="absolute inset-0"
              />
            </Suspense>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
        {/* Mobile Layout Fix: Removed Grid forcing on mobile */}
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Left: Emotional Copy */}
          <div>
            <ScrollReveal delay={0.2}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
                  <Shield className="w-4 h-4" />
                  $850M Assets Under Management
                </div>
            </ScrollReveal>

            <h1 className="text-6xl md:text-7xl font-black text-white leading-[1.1] mb-6">
              <TextRevealWords delay={0.3} staggerDelay={0.08}>
                Build Wealth
              </TextRevealWords>
              <br />
              <TextRevealGradient delay={0.6} className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-400">
                That Outlives Markets
              </TextRevealGradient>
            </h1>

            <ScrollReveal delay={0.9}>
              <ParallaxText speed={0.2}>
                <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                  Quietly engineered portfolios designed to perform through volatility, tax friction, and time itself.
                </p>
              </ParallaxText>
            </ScrollReveal>

            <ScrollReveal delay={1.1}>
              <div className="flex flex-col sm:flex-row gap-4">
                <HoverGlow>
                  <MagneticButton 
                    className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-emerald-900/50"
                  >
                    Request Portfolio Review
                  </MagneticButton>
                </HoverGlow>
                
                <HoverBorderGlow>
                  <button className="px-8 py-4 rounded-xl border-2 border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-white font-bold transition-all backdrop-blur-sm">
                    See Client Outcomes
                  </button>
                </HoverBorderGlow>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Live Data Panel (Hidden on Mobile) */}
          <div className="hidden lg:block">
            <ScrollRevealScale delay={0.5}>
                <HoverTilt intensity={5}>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-amber-500/20 blur-3xl -z-10"></div>
                    <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                        {/* Panel Content... */}
                        <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Portfolio Performance</div>
                            <div className="flex items-center gap-2 text-xs text-emerald-400">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            Live
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <LiveStat label="12-Month Return" value="+12.4%" positive />
                            <LiveStat label="Sharpe Ratio" value="1.42" />
                            <LiveStat label="Tax Savings YTD" value="$18.4K" positive />
                            <LiveStat label="Client NPS" value="94" positive />
                        </div>
                        <div className="bg-slate-950 rounded-xl p-4 border border-slate-800">
                            <div className="h-24 flex items-end justify-between gap-1">
                                {[42, 48, 55, 52, 61, 58, 67, 71, 78, 82, 89, 94].map((height, i) => (
                                <div key={i} style={{height: `${height}%`}} className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                </HoverTilt>
            </ScrollRevealScale>
          </div>
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// 2. NEW COMPONENT: SEO SALES DEMO (The "Explanation" Tool)
// ------------------------------------------------------------------

function SEODemoModal({ onClose }: { onClose: () => void }) {
    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "Apex Wealth Management",
        "areaServed": "United States",
        "serviceType": ["Wealth Management", "Tax Optimization"]
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
            <motion.div 
                initial={{ scale: 0.95 }} animate={{ scale: 1 }}
                className="w-full max-w-4xl bg-[#0F172A] border border-emerald-500/30 rounded-2xl overflow-hidden shadow-2xl"
            >
                {/* Header */}
                <div className="bg-slate-900 border-b border-slate-800 p-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-500/20 rounded-lg">
                            <Code className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold">SEO Architecture Inspector</h3>
                            <p className="text-xs text-slate-400">Why this site ranks higher than competitors</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-white"><X /></button>
                </div>

                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800 max-h-[70vh] overflow-y-auto">
                    
                    {/* Column 1: The Google Result */}
                    <div className="p-8 space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Search className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-mono text-emerald-400">SEARCH RESULT PREVIEW</span>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold">A</div>
                                <div className="text-xs text-slate-700">apexwealth.com</div>
                            </div>
                            <div className="text-[#1a0dab] text-xl font-medium hover:underline cursor-pointer mb-1">
                                Apex Wealth Management | AI-Driven Financial Planning
                            </div>
                            <div className="text-sm text-slate-600 leading-relaxed">
                                Apex Wealth Management provides data-driven portfolio management, tax optimization, and retirement planning using AI-powered analytics.
                            </div>
                        </div>
                        <p className="text-sm text-slate-400">
                            <span className="text-emerald-400 font-bold">Why it matters:</span> Most agency sites are invisible. We inject precise metadata so Google knows exactly who you are before a user even clicks.
                        </p>
                    </div>

                    {/* Column 2: The Code Injection */}
                    <div className="p-8 space-y-6 bg-slate-950">
                         <div className="flex items-center gap-2 mb-4">
                            <Code className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-mono text-amber-400">JSON-LD STRUCTURED DATA</span>
                        </div>
                        <div className="bg-[#0A101E] border border-slate-800 rounded-lg p-4 font-mono text-xs text-slate-300 overflow-x-auto">
                            <pre>{JSON.stringify(jsonLdData, null, 2)}</pre>
                        </div>
                        <p className="text-sm text-slate-400">
                            <span className="text-amber-400 font-bold">The Secret Weapon:</span> We inject "Structured Data" directly into the code. This tells search engines you are a verified Financial Service, not just a blog.
                        </p>
                    </div>
                </div>

                <div className="p-4 bg-slate-900 border-t border-slate-800 text-center">
                    <p className="text-sm text-slate-400">This technology is included in the <span className="text-white font-bold">LocalWebsitePro</span> Standard Package.</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ------------------------------------------------------------------
// 3. REMAINING SECTIONS (Simplified & Cleaned)
// ------------------------------------------------------------------

function Navigation() { /* Keep existing HeroNav logic */ return <HeroNav />; }
function HeroNav() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/60 backdrop-blur-2xl border-b border-slate-700/30"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/50">
                <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
                <div className="font-bold text-white text-lg">Apex Wealth</div>
                <div className="text-[10px] text-slate-400 font-mono tracking-widest">MANAGEMENT GROUP</div>
            </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-400">
          <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
          <a href="#calculator" className="hover:text-emerald-400 transition-colors">ROI Calculator</a>
          <a href="#portal" className="hover:text-emerald-400 transition-colors">Client Portal</a>
        </div>

        <MagneticButton className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-900/30">
          Get Started
          <ArrowRight className="w-4 h-4" />
        </MagneticButton>
      </div>
    </motion.nav>
  );
}

// Removed "HoverGlow" from here to reduce visual noise
function StatsBar() {
  return (
    <ParallaxText speed={0.1}>
      <div className="relative bg-slate-900/50 backdrop-blur-xl border-y border-slate-800/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem icon={DollarSign} value="$850M" label="AUM" />
            <StatItem icon={Users} value="1,200+" label="Clients" />
            <StatItem icon={TrendingUp} value="12.4%" label="Avg Return" />
            <StatItem icon={Award} value="98%" label="Retention" />
          </div>
        </div>
      </div>
    </ParallaxText>
  );
}

function ROISection() {
  return (
    <section aria-labelledby="calculator-heading" id="calculator" className="relative py-32 px-6">
      <Parallax speed={-0.2} className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-[120px]" />
      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 id="calculator-heading" className="text-5xl md:text-6xl font-black text-white mb-6">
              <TextRevealWords staggerDelay={0.06}>
                See Your Financial Future
              </TextRevealWords>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Our ROI calculator uses real market data and tax optimization strategies.
            </p>
          </div>
        </ScrollReveal>
        <ScrollRevealScale delay={0.2}>
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 shadow-2xl">
            <ROICalculator />
          </div>
        </ScrollRevealScale>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const services = [
    { icon: BarChart3, title: "Wealth Management", description: "Custom portfolio strategies aligned with your goals and risk tolerance", features: ["Asset allocation", "Rebalancing", "Performance tracking"] },
    { icon: Shield, title: "Tax Optimization", description: "Strategic planning to minimize tax burden and maximize after-tax returns", features: ["Tax-loss harvesting", "Roth conversions", "Estate planning"] },
    { icon: Target, title: "Retirement Planning", description: "Comprehensive roadmap to financial independence with income projections", features: ["401(k) optimization", "Social Security planning", "Healthcare costs"] },
    { icon: PieChart, title: "Portfolio Analytics", description: "Real-time insights and reporting on your portfolio performance", features: ["Risk analysis", "Benchmark comparison", "Custom reporting"] }
  ];

  return (
    <section aria-labelledby="services-heading" id="services" className="relative py-32 px-6 border-t border-slate-800/50">
      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 id="services-heading" className="text-5xl md:text-6xl font-black text-white text-center mb-16">
            <TextRevealWords staggerDelay={0.05}>Comprehensive Financial Services</TextRevealWords>
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <HoverTilt intensity={8}>
                <div className="h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 transition-all hover:-translate-y-1 hover:border-emerald-500/30">
                    <div className="p-4 bg-emerald-500/10 rounded-xl inline-block mb-6">
                        <service.icon className="w-8 h-8 text-emerald-400" />
                    </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </HoverTilt>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientPortalSection() {
  return (
    <section id="portal" className="relative py-32 px-6">
      <Parallax speed={-0.3} className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-emerald-500/10 rounded-full blur-[150px]" />
      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <Lock className="w-4 h-4" />
                Bank-Grade Security
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              <TextRevealWords staggerDelay={0.05}>Your Wealth, Always Accessible</TextRevealWords>
            </h2>
          </div>
        </ScrollReveal>
        <ParallaxScale scaleRange={[0.95, 1.05]}>
          <PortfolioDashboard />
        </ParallaxScale>
      </div>
    </section>
  );
}

function TrustSignals() {
  return (
    <ScrollReveal>
      <div className="relative py-20 px-6 border-t border-slate-800/50">
        <ParallaxText speed={0.2}>
          <div className="max-w-5xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed mb-8">
              "Apex transformed our retirement strategy. Their AI-powered insights helped us save <span className="text-emerald-400 font-semibold">$47K in taxes</span> last year alone."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-full border border-emerald-500/30"></div>
              <div className="text-left">
                <div className="font-bold text-white">Michael Chen</div>
                <div className="text-sm text-slate-400">Tech Executive, $2.4M Portfolio</div>
              </div>
            </div>
          </div>
        </ParallaxText>
      </div>
    </ScrollReveal>
  );
}

function FinalCTA() {
  return (
    <div className="relative py-32 px-6">
      <ScrollRevealScale>
        <HoverLift>
          <div className="relative max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 to-amber-500 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                <TextRevealWords staggerDelay={0.04}>Ready to Build Real Wealth?</TextRevealWords>
              </h2>
              <p className="text-xl text-white/90 mb-10">
                Schedule a free 30-minute portfolio audit. No obligation, just insights.
              </p>
              <MagneticButton className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl" strength={0.4}>
                Book Free Consultation
              </MagneticButton>
            </div>
          </div>
        </HoverLift>
      </ScrollRevealScale>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
            <div className="font-bold text-white text-lg mb-1">Apex Wealth Management</div>
            <div className="text-xs text-slate-500 font-mono">SEC Registered Investment Advisor</div>
        </div>
        <div className="text-sm text-slate-500">
          © 2026 Apex Wealth. All rights reserved. | Built by <a href="https://localwebsitepro.com" className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold">LocalWebsitePro</a>
        </div>
      </div>
    </footer>
  );
}

function LiveStat({ label, value, positive = false }: { label: string; value: string; positive?: boolean }) {
  return (
    <HoverLift>
      <div className="bg-slate-950/50 backdrop-blur-sm rounded-xl p-4 border border-slate-800/50">
        <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">{label}</div>
        <div className={`text-2xl font-mono font-bold ${positive ? 'text-emerald-400' : 'text-white'}`}>
          {value}
        </div>
      </div>
    </HoverLift>
  );
}

function StatItem({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="text-center">
      <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
      <div className="text-3xl font-mono font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-slate-400 uppercase tracking-wider">{label}</div>
    </div>
  );
}
