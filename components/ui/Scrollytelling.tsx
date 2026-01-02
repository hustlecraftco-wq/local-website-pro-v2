"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Brain, Database, Zap, MessageSquare, Shield, TrendingUp } from "lucide-react";

interface ScrollytellingStep {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  iconClass: string;
  bgClass: string;
}

const steps: ScrollytellingStep[] = [
  {
    title: "Data Ingestion",
    description: "Your financial documents, market data, and client preferences are securely ingested and encrypted with bank-grade AES-256 encryption.",
    icon: Database,
    color: "emerald",
    iconClass: "text-emerald-400",
    bgClass: "bg-emerald-500/20",
  },
  {
    title: "Vector Analysis",
    description: "Our RAG engine transforms your data into high-dimensional vectors, enabling semantic search across millions of data points in milliseconds.",
    icon: Brain,
    color: "amber",
    iconClass: "text-amber-400",
    bgClass: "bg-amber-500/20",
  },
  {
    title: "Context Retrieval",
    description: "When you ask a question, the AI retrieves the most relevant context from your entire knowledge base—not just keyword matches.",
    icon: Zap,
    color: "blue",
    iconClass: "text-blue-400",
    bgClass: "bg-blue-500/20",
  },
  {
    title: "Intelligent Response",
    description: "The AI synthesizes retrieved context with real-time market data to generate personalized, actionable financial insights.",
    icon: MessageSquare,
    color: "purple",
    iconClass: "text-purple-400",
    bgClass: "bg-purple-500/20",
  },
];

/**
 * ScrollytellingSection - The "Sticky Scroll Reveal" pattern
 * A key differentiator for award-winning financial interfaces.
 * Pins a visualization while text cards scroll past, explaining the AI process.
 */
export default function ScrollytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to active step
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const stepIndex = Math.min(
      Math.floor(latest * steps.length),
      steps.length - 1
    );
    setActiveStep(stepIndex);
  });

  // Animate the visualization based on scroll progress
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [0.5, 1, 1, 0.5]);

  // Mobile: Simple card layout instead of sticky scroll
  if (isMobile) {
    return (
      <section className="relative py-20 px-4 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <Brain className="w-4 h-4" />
              AI-Powered Intelligence
            </div>
            <h2 className="text-3xl font-black text-white mb-4">
              How Our RAG Engine Works
            </h2>
            <p className="text-base text-slate-400">
              Transparent AI that shows its work.
            </p>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${step.bgClass} shrink-0`}>
                      <Icon className={`w-6 h-6 ${step.iconClass}`} />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                        Step {i + 1}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: Full Scrollytelling experience
  return (
    <section 
      ref={containerRef}
      className="relative z-30"
      style={{ height: '250vh' }}
      aria-labelledby="how-it-works-heading"
    >
      {/* Solid background to prevent hero bleed-through */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-slate-950 to-[#0A1628]" />
      
      {/* Sticky Scroll Container - accounts for navbar height */}
      <div 
        className="sticky z-20 flex items-center justify-center overflow-hidden"
        style={{ top: '80px', height: 'calc(100vh - 80px)' }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left: Sticky Visualization */}
          <motion.div 
            className="relative"
            style={{ scale, opacity }}
          >
            {/* Section Header - Inside the sticky area */}
            <div className="text-center lg:text-left mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
                <Brain className="w-4 h-4" />
                AI-Powered Intelligence
              </div>
              <h2 id="how-it-works-heading" className="text-3xl lg:text-4xl font-black text-white mb-3">
                How Our RAG Engine Works
              </h2>
              <p className="text-base text-slate-400 max-w-md">
                Transparent AI that shows its work. See exactly how we process your data.
              </p>
            </div>

            {/* The 3D Orbital Visualization */}
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
              {/* Outer Ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-dashed border-slate-700"
                style={{ rotate: rotation }}
              />
              
              {/* Middle Ring */}
              <motion.div 
                className="absolute inset-8 rounded-full border border-emerald-500/30"
                style={{ rotate: useTransform(rotation, (v) => -v * 0.5) }}
              >
                {/* Orbiting Dots */}
                {[0, 90, 180, 270].map((angle, i) => (
                  <div
                    key={i}
                    className={`absolute w-4 h-4 rounded-full transition-all duration-500 ${
                      i === activeStep 
                        ? 'bg-emerald-400 shadow-lg shadow-emerald-500/50 scale-150' 
                        : 'bg-slate-600'
                    }`}
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${angle}deg) translateX(100px) rotate(-${angle}deg) translate(-50%, -50%)`,
                    }}
                  />
                ))}
              </motion.div>

              {/* Inner Core */}
              <div className="absolute inset-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/10 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center shadow-2xl shadow-emerald-900/20">
                <motion.div
                  key={activeStep}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="text-center"
                >
                  {(() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon className={`w-12 h-12 ${steps[activeStep].iconClass} mx-auto mb-2`} />;
                  })()}
                  <div className="text-sm font-bold text-white">{steps[activeStep].title}</div>
                </motion.div>
              </div>

              {/* Pulse Effect */}
              <div className="absolute inset-20 rounded-full bg-emerald-500/20 animate-ping opacity-20" />
              
              {/* Data Streams */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {[0, 1, 2, 3].map((i) => (
                  <motion.line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={200 + Math.cos((i * Math.PI) / 2) * 140}
                    y2={200 + Math.sin((i * Math.PI) / 2) * 140}
                    stroke={i === activeStep ? "#10B981" : "#334155"}
                    strokeWidth={i === activeStep ? 3 : 1}
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: i <= activeStep ? 1 : 0.3 }}
                    transition={{ duration: 0.5 }}
                  />
                ))}
              </svg>

              {/* Step Indicator */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeStep ? 'bg-emerald-400 w-8' : 'bg-slate-600 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Scrolling Text Cards */}
          <div className="space-y-[40vh] pt-[10vh] pb-[30vh]">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  className={`p-6 lg:p-8 rounded-2xl border transition-all duration-500 ${
                    i === activeStep
                      ? 'bg-slate-900/90 border-emerald-500/50 shadow-2xl shadow-emerald-900/30'
                      : 'bg-slate-900/50 border-slate-800'
                  }`}
                  initial={{ opacity: 0.5, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${step.bgClass} shrink-0`}>
                      <Icon className={`w-6 h-6 ${step.iconClass}`} />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
                        Step {i + 1}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm lg:text-base">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * AIReasoningToast - Shows the "thinking" process of the AI
 * Creates transparency and trust by revealing MCP actions
 */
export function AIReasoningToast({ 
  steps,
  isActive = false,
}: { 
  steps: { action: string; duration: string }[];
  isActive?: boolean;
}) {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    if (isActive) {
      steps.forEach((_, i) => {
        setTimeout(() => {
          setVisibleSteps((prev) => [...prev, i]);
        }, i * 800);
      });
    } else {
      setVisibleSteps([]);
    }
  }, [isActive, steps]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      className="fixed bottom-24 right-6 z-50 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl p-4 shadow-2xl min-w-[300px]"
    >
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-800">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">AI Processing</span>
      </div>
      
      <div className="space-y-2 font-mono text-xs">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ 
              opacity: visibleSteps.includes(i) ? 1 : 0.3,
              x: visibleSteps.includes(i) ? 0 : -10,
            }}
            className="flex items-center justify-between gap-4"
          >
            <span className={visibleSteps.includes(i) ? 'text-slate-300' : 'text-slate-600'}>
              {step.action}
            </span>
            <span className="text-slate-500">{step.duration}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/**
 * BentoGrid - The award-winning modular layout pattern
 */
export function BentoGrid({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className = "",
  colSpan = 1,
  rowSpan = 1,
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
}) {
  const colSpanClasses = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
  };
  
  const rowSpanClasses = {
    1: "",
    2: "lg:row-span-2",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6
        hover:border-emerald-500/30 transition-all duration-300
        ${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]} ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
