"use client";

import { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, Shield, Zap, Target, ArrowRight, Lock, BarChart3, PieChart, 
  Award, Users, DollarSign, Search, Code, Eye, X, Brain, Sparkles, 
  Phone, Mail, Calendar, CheckCircle, ChevronDown
} from "lucide-react";
import Spline from "@splinetool/react-spline";
import dynamic from "next/dynamic";

// Premium UI Components
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import { AnimatedGradient } from "@/components/ui/GradientNoise";
import MagneticButton from "@/components/ui/MagneticButton";
import { TextRevealWords, TextRevealGradient } from "@/components/ui/TextReveal";
import ScrollReveal, { ScrollRevealScale } from "@/components/ui/ScrollReveal";
import Parallax, { ParallaxText, ParallaxScale } from "@/components/ui/Parallax";
import { HoverGlow, HoverTilt, HoverLift, HoverBorderGlow, SpotlightCard, AnimatedCounter } from "@/components/ui/HoverEffects";
import ScrollytellingSection from "@/components/ui/Scrollytelling";

// Finance Components (Dynamic Imports for Performance)
const ROICalculator = dynamic(() => import("@/components/finance/ROICalculator"), { ssr: false });
const QualificationBot = dynamic(() => import("@/components/finance/QualificationBot"), { ssr: false });
const PortfolioDashboard = dynamic(() => import("@/components/finance/PortfolioDashboard"), { ssr: false });
const AutomationToggle = dynamic(() => import("@/components/finance/AutomationToggle"), { ssr: false });

export default function ApexWealthManagement() {
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [showSEODemo, setShowSEODemo] = useState(false);

  return (
    <SmoothScrollProvider>
      <main className="relative min-h-screen bg-[#0A1628] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
        
        {/* Premium Background */}
        <AnimatedGradient />
        
        {/* Custom Cursor - Desktop Only */}
        <div className="hidden lg:block">
          <CustomCursor />
        </div>
        
        {/* Sales Tools - Hidden from clients */}
        <AutomationToggle />
        <QualificationBot />

        {/* Main Sections */}
        <HeroNav onConsultClick={() => setShowConsultationModal(true)} />
        <HeroSection onConsultClick={() => setShowConsultationModal(true)} />
        <StatsBar />
        <ScrollytellingSection />
        <HowItWorksSection />
        <BentoServicesSection />
        <ROISection />
        <ClientPortalSection />
        <TestimonialsSection />
        <FinalCTA onConsultClick={() => setShowConsultationModal(true)} />
        <Footer />

        {/* SEO Demo Toggle - Sales Tool */}
        <div className="fixed bottom-6 left-6 z-[100] hidden md:block">
          <button 
            onClick={() => setShowSEODemo(true)}
            className="flex items-center gap-2 bg-slate-900/80 border border-emerald-500/50 text-emerald-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-emerald-900/20 transition-all shadow-lg backdrop-blur-md"
          >
            <Eye className="w-4 h-4" />
            View SEO Architecture
          </button>
        </div>

        {/* Modals */}
        <AnimatePresence>
          {showConsultationModal && (
            <ConsultationModal onClose={() => setShowConsultationModal(false)} />
          )}
        </AnimatePresence>

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
// NAVIGATION
// ------------------------------------------------------------------

function HeroNav({ onConsultClick }: { onConsultClick: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/80 backdrop-blur-2xl border-b border-slate-700/30"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/50">
              <BarChart3 className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-white text-sm md:text-lg">Apex Wealth</div>
              <div className="hidden md:block text-[10px] text-slate-400 font-mono tracking-widest">MANAGEMENT GROUP</div>
            </div>
          </a>
          
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-400">
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#calculator" className="hover:text-emerald-400 transition-colors">ROI Calculator</a>
            <a href="#portal" className="hover:text-emerald-400 transition-colors">Client Portal</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+18165551234" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white text-sm">
              <Phone className="w-4 h-4" />
              (816) 555-1234
            </a>
            
            <button 
              onClick={onConsultClick}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-emerald-900/30 transition-all"
            >
              <span className="hidden sm:inline">Get Started</span>
              <span className="sm:hidden">Start</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 bg-[#0A1628]/95 backdrop-blur-xl z-40 border-b border-slate-700/50 md:hidden"
          >
            <div className="p-6 space-y-4">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Services</a>
              <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">ROI Calculator</a>
              <a href="#portal" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Client Portal</a>
              <a href="tel:+18165551234" className="flex items-center gap-2 text-emerald-400 font-bold">
                <Phone className="w-5 h-5" />
                (816) 555-1234
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ------------------------------------------------------------------
// HERO SECTION
// ------------------------------------------------------------------

function HeroSection({ onConsultClick }: { onConsultClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      
      {/* Spline 3D Background - Desktop Only */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1628]/80 to-[#0A1628] z-10 pointer-events-none" />
        
        <div className="hidden lg:block absolute inset-0">
          <Suspense fallback={<div className="absolute inset-0 bg-[#0A1628]" />}>
            <Spline
              scene="https://prod.spline.design/mTaYVjhg-f5TwC9V/scene.splinecode"
              className="absolute inset-0"
            />
          </Suspense>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32">
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
          
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <ScrollReveal delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 backdrop-blur-sm">
                <Shield className="w-3 h-3 md:w-4 md:h-4" />
                $850M Assets Under Management
              </div>
            </ScrollReveal>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-4 md:mb-6">
              <TextRevealWords delay={0.3} staggerDelay={0.08}>
                Build Wealth
              </TextRevealWords>
              <br />
              <TextRevealGradient delay={0.6} className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-400">
                That Outlives Markets
              </TextRevealGradient>
            </h1>

            <ScrollReveal delay={0.9}>
              <p className="text-base md:text-xl text-slate-400 leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
                Quietly engineered portfolios designed to perform through volatility, tax friction, and time itself.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1.1}>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <button 
                  onClick={onConsultClick}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-2xl shadow-emerald-900/50 flex items-center justify-center gap-2 transition-all"
                >
                  Request Portfolio Review
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <a 
                  href="#testimonials"
                  className="px-6 md:px-8 py-3 md:py-4 rounded-xl border-2 border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-white font-bold transition-all backdrop-blur-sm text-center"
                >
                  See Client Outcomes
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Live Data Panel - Desktop Only */}
          <div className="hidden lg:block">
            <ScrollRevealScale delay={0.5}>
              <HoverTilt intensity={5}>
                <SpotlightCard className="rounded-2xl">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-amber-500/20 blur-3xl -z-10" />
                    <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                      <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Portfolio Performance</div>
                        <div className="flex items-center gap-2 text-xs text-emerald-400">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
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
                        <AnimatedChart />
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </HoverTilt>
            </ScrollRevealScale>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-emerald-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

// ------------------------------------------------------------------
// ANIMATED CHART
// ------------------------------------------------------------------

function AnimatedChart() {
  const bars = [42, 48, 55, 52, 61, 58, 67, 71, 78, 82, 89, 94];
  
  return (
    <div className="h-24 flex items-end justify-between gap-1">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
          className="flex-1 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t"
        />
      ))}
    </div>
  );
}

// ------------------------------------------------------------------
// STATS BAR
// ------------------------------------------------------------------

function StatsBar() {
  return (
    <div className="relative bg-slate-900/50 backdrop-blur-xl border-y border-slate-800/50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatItem icon={DollarSign} value={850} suffix="M" label="AUM" prefix="$" />
          <StatItem icon={Users} value={1200} suffix="+" label="Clients" />
          <StatItem icon={TrendingUp} value={12.4} suffix="%" label="Avg Return" />
          <StatItem icon={Award} value={98} suffix="%" label="Retention" />
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// HOW IT WORKS SECTION (Card Layout)
// ------------------------------------------------------------------

function HowItWorksSection() {
  const steps = [
    { icon: Shield, title: "Data Security", desc: "Bank-grade encryption protects your financial data with AES-256 standards", color: "emerald" },
    { icon: Brain, title: "AI Analysis", desc: "Our RAG engine analyzes your complete financial picture in real-time", color: "blue" },
    { icon: Zap, title: "Smart Insights", desc: "Personalized recommendations based on your unique goals and risk tolerance", color: "purple" },
    { icon: Target, title: "Action Plan", desc: "Clear, actionable steps to grow and protect your wealth over time", color: "amber" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              Our Process
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">
              How We Build Your Wealth
            </h2>
            <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto">
              A proven four-step process that combines technology with personalized advisory.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => {
            const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
              emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30" },
              blue: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
              purple: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
              amber: { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/30" },
            };
            const colors = colorClasses[step.color];

            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <SpotlightCard className="rounded-2xl h-full">
                  <div className={`h-full bg-slate-900/50 backdrop-blur-sm border ${colors.border} rounded-2xl p-6 md:p-8`}>
                    <div className="text-xs font-mono text-slate-500 mb-4">STEP {i + 1}</div>
                    <div className={`p-3 ${colors.bg} rounded-xl inline-block mb-4`}>
                      <step.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// BENTO SERVICES SECTION
// ------------------------------------------------------------------

function BentoServicesSection() {
  return (
    <section id="services" className="relative py-16 md:py-32 px-4 md:px-6 border-t border-slate-800/50">
      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Comprehensive Solutions
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Financial Services
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          
          {/* Large Feature Card */}
          <SpotlightCard className="md:col-span-2 md:row-span-2 rounded-2xl">
            <div className="h-full bg-gradient-to-br from-emerald-600/20 to-emerald-900/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="p-3 md:p-4 bg-emerald-500/20 rounded-xl inline-block mb-4 md:mb-6">
                  <BarChart3 className="w-8 md:w-10 h-8 md:h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Wealth Management</h3>
                <p className="text-slate-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                  Custom portfolio strategies aligned with your goals, risk tolerance, and tax situation.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["Asset Allocation", "Rebalancing", "Tax-Loss Harvesting"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* Tax Card */}
          <SpotlightCard className="rounded-2xl">
            <HoverTilt intensity={5}>
              <div className="h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 md:p-6 hover:border-amber-500/30 transition-all">
                <div className="p-3 bg-amber-500/20 rounded-xl inline-block mb-3 md:mb-4">
                  <Shield className="w-5 md:w-6 h-5 md:h-6 text-amber-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Tax Optimization</h3>
                <p className="text-xs md:text-sm text-slate-400">Strategic planning to minimize tax burden</p>
              </div>
            </HoverTilt>
          </SpotlightCard>

          {/* AI Card */}
          <SpotlightCard className="rounded-2xl">
            <HoverTilt intensity={5}>
              <div className="h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 md:p-6 hover:border-purple-500/30 transition-all">
                <div className="p-3 bg-purple-500/20 rounded-xl inline-block mb-3 md:mb-4">
                  <Brain className="w-5 md:w-6 h-5 md:h-6 text-purple-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">AI Insights</h3>
                <p className="text-xs md:text-sm text-slate-400">RAG-powered financial analysis</p>
              </div>
            </HoverTilt>
          </SpotlightCard>

          {/* Retirement Card */}
          <SpotlightCard className="md:col-span-2 rounded-2xl">
            <div className="h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 md:p-6 hover:border-blue-500/30 transition-all flex gap-4 md:gap-6">
              <div className="p-3 md:p-4 bg-blue-500/20 rounded-xl h-fit shrink-0">
                <Target className="w-6 md:w-8 h-6 md:h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Retirement Planning</h3>
                <p className="text-slate-400 mb-3 md:mb-4 text-sm md:text-base">Comprehensive roadmap to financial independence.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-mono">401(k)</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-mono">Roth IRA</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Analytics Card */}
          <SpotlightCard className="md:col-span-2 rounded-2xl">
            <div className="h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 md:p-6 hover:border-pink-500/30 transition-all">
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <div className="p-3 bg-pink-500/20 rounded-xl">
                  <PieChart className="w-5 md:w-6 h-5 md:h-6 text-pink-400" />
                </div>
                <span className="text-xs font-mono text-pink-400 bg-pink-500/10 px-2 py-1 rounded">Real-Time</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Portfolio Analytics</h3>
              <p className="text-xs md:text-sm text-slate-400 mb-3 md:mb-4">Risk analysis, benchmark comparison, and custom reporting.</p>
              
              <div className="flex items-end gap-1 h-12 md:h-16">
                {[30, 45, 35, 60, 50, 75, 65, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex-1 bg-gradient-to-t from-pink-600 to-pink-400 rounded-t"
                  />
                ))}
              </div>
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// ROI SECTION
// ------------------------------------------------------------------

function ROISection() {
  return (
    <section aria-labelledby="calculator-heading" id="calculator" className="relative py-16 md:py-32 px-4 md:px-6">
      <Parallax speed={-0.2} className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 rounded-full blur-[120px]" />
      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 id="calculator-heading" className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">
              See Your Financial Future
            </h2>
            <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto">
              Our ROI calculator uses real market data and tax optimization strategies.
            </p>
          </div>
        </ScrollReveal>
        <ScrollRevealScale delay={0.2}>
          <SpotlightCard className="rounded-2xl md:rounded-3xl">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl">
              <ROICalculator />
            </div>
          </SpotlightCard>
        </ScrollRevealScale>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// CLIENT PORTAL SECTION
// ------------------------------------------------------------------

function ClientPortalSection() {
  return (
    <section id="portal" className="relative py-16 md:py-32 px-4 md:px-6">
      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Lock className="w-4 h-4" />
              Bank-Grade Security
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">
              Your Wealth, Always Accessible
            </h2>
          </div>
        </ScrollReveal>
        <PortfolioDashboard />
      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// TESTIMONIALS SECTION
// ------------------------------------------------------------------

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Apex transformed our retirement strategy. Their AI-powered insights helped us save $47K in taxes last year alone.",
      name: "Michael Chen",
      title: "Tech Executive",
      portfolio: "$2.4M Portfolio"
    },
    {
      quote: "Finally, a wealth manager who explains things clearly. The client portal keeps me informed without the jargon.",
      name: "Sarah Williams",
      title: "Business Owner",
      portfolio: "$1.8M Portfolio"
    },
    {
      quote: "Their proactive tax-loss harvesting paid for their fees ten times over. Best financial decision we've made.",
      name: "James & Linda Park",
      title: "Retirees",
      portfolio: "$3.2M Portfolio"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-32 px-4 md:px-6 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Client Success Stories
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <SpotlightCard className="rounded-2xl h-full">
                <div className="h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8">
                  <blockquote className="text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-full border border-emerald-500/30" />
                    <div>
                      <div className="font-bold text-white">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.title}</div>
                      <div className="text-xs text-emerald-400 font-mono">{t.portfolio}</div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// FINAL CTA
// ------------------------------------------------------------------

function FinalCTA({ onConsultClick }: { onConsultClick: () => void }) {
  return (
    <div className="relative py-16 md:py-32 px-4 md:px-6">
      <ScrollRevealScale>
        <div className="relative max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 to-amber-500 rounded-2xl md:rounded-3xl p-8 md:p-16 text-center overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6">
              Ready to Build Real Wealth?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10">
              Schedule a free 30-minute portfolio audit. No obligation, just insights.
            </p>
            <button 
              onClick={onConsultClick}
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg shadow-2xl transition-all inline-flex items-center gap-2"
            >
              Book Free Consultation
              <Calendar className="w-5 h-5" />
            </button>
          </div>
        </div>
      </ScrollRevealScale>
    </div>
  );
}

// ------------------------------------------------------------------
// FOOTER
// ------------------------------------------------------------------

function Footer() {
  return (
    <footer className="relative py-12 px-4 md:px-6 border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">Apex Wealth Management</div>
                <div className="text-xs text-slate-500 font-mono">SEC Registered Investment Advisor</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Building lasting wealth for families and businesses in Kansas City since 2008. 
              Fiduciary advice you can trust.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Wealth Management</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Tax Optimization</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Retirement Planning</a></li>
              <li><a href="#portal" className="hover:text-emerald-400 transition-colors">Client Portal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a href="tel:+18165551234" className="hover:text-white">(816) 555-1234</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a href="mailto:info@apexwealth.com" className="hover:text-white">info@apexwealth.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            © 2026 Apex Wealth Management. All rights reserved.
          </div>
          <div className="text-sm text-slate-500">
            Built by <a href="https://localwebsitepro.com" className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold">LocalWebsitePro</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ------------------------------------------------------------------
// CONSULTATION MODAL
// ------------------------------------------------------------------

function ConsultationModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', portfolio: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead captured:", formData);
    setSubmitted(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div 
        initial={{ scale: 0.95 }} animate={{ scale: 1 }}
        className="w-full max-w-lg bg-[#0F172A] border border-emerald-500/30 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">Schedule Your Consultation</h3>
            <p className="text-sm text-white/80">Free 30-minute portfolio review</p>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                  placeholder="John Smith"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                    placeholder="john@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Portfolio Size</label>
                <select
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="">Select range...</option>
                  <option value="under-250k">Under $250,000</option>
                  <option value="250k-500k">$250,000 - $500,000</option>
                  <option value="500k-1m">$500,000 - $1,000,000</option>
                  <option value="1m-5m">$1,000,000 - $5,000,000</option>
                  <option value="5m+">Over $5,000,000</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">What are your goals?</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 resize-none"
                  placeholder="I'm looking to optimize my retirement strategy..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Calendar className="w-5 h-5" />
                Request Consultation
              </button>
              
              <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                No spam. Your information is secure.
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
              <p className="text-slate-400 mb-6">
                A senior advisor will contact you within 24 hours to schedule your consultation.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ------------------------------------------------------------------
// SEO DEMO MODAL
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
// UTILITY COMPONENTS
// ------------------------------------------------------------------

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

function StatItem({ 
  icon: Icon, 
  value, 
  suffix = "", 
  prefix = "",
  label,
}: { 
  icon: any; 
  value: number; 
  suffix?: string; 
  prefix?: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 mx-auto mb-2 md:mb-3" />
      <div className="text-2xl md:text-3xl font-mono font-bold text-white mb-1">
        {prefix}
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">{label}</div>
    </div>
  );
}
