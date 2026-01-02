"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  AnimatePresence
} from "framer-motion";
import { Brain, Database, Zap, MessageSquare, Shield, Lock, Server, Cpu } from "lucide-react";
import Image from "next/image";

// --- VELOCITY MARQUEE (Award-winning pattern) ---
const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

function VelocityMarquee({ children, baseVelocity = 50 }: { children: React.ReactNode; baseVelocity?: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="flex whitespace-nowrap gap-8 font-mono text-xs uppercase tracking-[0.3em] py-5"
        style={{ x }}
      >
        {[...Array(8)].map((_, i) => (
          <span key={i} className="flex items-center gap-8 text-emerald-400/80">
            {children}
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// --- STEP DATA ---
interface ScrollytellingStep {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  color: string;
  image: string;
  stats: { label: string; value: string }[];
}

const steps: ScrollytellingStep[] = [
  {
    title: "INGEST",
    subtitle: "Data Ingestion",
    description: "Your financial documents, market data, and client preferences are securely ingested and encrypted with bank-grade AES-256 encryption.",
    icon: Database,
    color: "emerald",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    stats: [
      { label: "Encryption", value: "AES-256" },
      { label: "Data Points", value: "50M+" },
    ],
  },
  {
    title: "ANALYZE",
    subtitle: "Vector Analysis",
    description: "Our RAG engine transforms your data into high-dimensional vectors, enabling semantic search across millions of data points in milliseconds.",
    icon: Brain,
    color: "amber",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80",
    stats: [
      { label: "Dimensions", value: "1536" },
      { label: "Query Speed", value: "<50ms" },
    ],
  },
  {
    title: "RETRIEVE",
    subtitle: "Context Retrieval",
    description: "When you ask a question, the AI retrieves the most relevant context from your entire knowledge base—not just keyword matches.",
    icon: Zap,
    color: "blue",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    stats: [
      { label: "Accuracy", value: "99.2%" },
      { label: "Context", value: "128K" },
    ],
  },
  {
    title: "RESPOND",
    subtitle: "Intelligent Response",
    description: "The AI synthesizes retrieved context with real-time market data to generate personalized, actionable financial insights.",
    icon: MessageSquare,
    color: "purple",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&q=80",
    stats: [
      { label: "Response", value: "1.2s" },
      { label: "Confidence", value: "97%" },
    ],
  },
];

// --- MAIN COMPONENT ---
export default function ScrollytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring for animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Check for client-side and mobile
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update active step based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stepIndex = Math.min(
        Math.floor(latest * steps.length),
        steps.length - 1
      );
      setActiveStep(Math.max(0, stepIndex));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Transform values for animations
  const clipPathSize = useTransform(
    smoothProgress,
    [0, 0.15, 0.85, 1],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)", "inset(0% 0 0 0)", "inset(0 0 100% 0)"]
  );

  // Don't render until client-side
  if (!isClient) {
    return (
      <section className="relative py-32 bg-[#030303]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-[50vh] flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  // Mobile: Editorial card layout
  if (isMobile) {
    return (
      <section className="relative py-24 px-4 bg-[#030303]">
        {/* Velocity Marquee */}
        <div className="border-y border-white/5 bg-black/40 backdrop-blur-sm mb-16">
          <VelocityMarquee baseVelocity={-2}>
            RAG ENGINE — VECTOR ANALYSIS — SEMANTIC SEARCH — AI SYNTHESIS
          </VelocityMarquee>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-emerald-500 mb-4 uppercase tracking-[0.2em] text-xs">
              System Architecture
            </p>
            <h2 className="text-5xl font-serif font-light text-white tracking-tight">
              How It <span className="italic text-emerald-400">Works</span>
            </h2>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="relative overflow-hidden bg-[#0A0A0A] border border-white/10"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-video">
                    <Image
                      src={step.image}
                      alt={step.subtitle}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />

                    {/* Step Number */}
                    <div className="absolute top-4 left-4 font-mono text-xs text-white/40 tracking-widest">
                      /// 0{i + 1}
                    </div>

                    {/* Large Title */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-4xl font-serif font-light text-white tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className={`w-5 h-5 ${
                        step.color === 'emerald' ? 'text-emerald-400' :
                        step.color === 'amber' ? 'text-amber-400' :
                        step.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                      }`} />
                      <span className="text-sm text-white/60">{step.subtitle}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">{step.description}</p>

                    {/* Stats */}
                    <div className="flex gap-6">
                      {step.stats.map((stat, si) => (
                        <div key={si}>
                          <div className="text-xs font-mono text-white/30 uppercase tracking-wider mb-1">{stat.label}</div>
                          <div className={`text-lg font-mono ${
                            step.color === 'emerald' ? 'text-emerald-400' :
                            step.color === 'amber' ? 'text-amber-400' :
                            step.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                          }`}>{stat.value}</div>
                        </div>
                      ))}
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

  // Desktop: Award-winning Scrollytelling experience
  return (
    <section
      ref={containerRef}
      className="relative bg-[#030303]"
      style={{ height: `${(steps.length + 1) * 100}vh` }}
    >
      {/* Sticky Container - full screen experience */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Velocity Marquee - Inside sticky, at top */}
        <div className="absolute top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
          <VelocityMarquee baseVelocity={-2}>
            RAG ENGINE — VECTOR ANALYSIS — SEMANTIC SEARCH — AI SYNTHESIS
          </VelocityMarquee>
        </div>

        {/* Background Image Layer with Clip-Path Reveal */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ clipPath: clipPathSize }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].subtitle}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/50" />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Content Layer - with top padding for marquee */}
        <div className="relative z-10 h-full flex items-center pt-16">
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-24 grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Typography & Content */}
            <div className="relative">
              {/* Section Label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-white/40" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
                  System Architecture v4.0
                </span>
              </div>

              {/* Giant Title */}
              <div className="mb-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <h2 className="text-[12vw] lg:text-[8vw] leading-[0.85] font-serif font-light text-white tracking-tighter mix-blend-difference">
                      {steps[activeStep].title}
                    </h2>
                    <h3 className="text-[6vw] lg:text-[4vw] leading-[0.9] font-serif italic text-emerald-400/80 tracking-tight -mt-2">
                      {steps[activeStep].subtitle}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-lg text-white/60 font-light leading-relaxed max-w-md mb-12"
                >
                  {steps[activeStep].description}
                </motion.p>
              </AnimatePresence>

              {/* Stats */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex gap-12"
                >
                  {steps[activeStep].stats.map((stat, i) => (
                    <div key={i} className="border-l border-white/10 pl-6">
                      <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">
                        {stat.label}
                      </div>
                      <div className={`text-3xl font-mono ${
                        steps[activeStep].color === 'emerald' ? 'text-emerald-400' :
                        steps[activeStep].color === 'amber' ? 'text-amber-400' :
                        steps[activeStep].color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                      }`}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Step Indicator */}
            <div className="hidden lg:flex flex-col justify-center items-end">
              <div className="space-y-6">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  const isActive = i === activeStep;

                  return (
                    <motion.div
                      key={i}
                      className={`flex items-center gap-6 transition-all duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-30'
                      }`}
                      animate={{
                        x: isActive ? 0 : 20,
                      }}
                    >
                      <div className="text-right">
                        <div className="font-mono text-xs text-white/40 tracking-widest mb-1">
                          /// 0{i + 1}
                        </div>
                        <div className={`text-lg font-light ${isActive ? 'text-white' : 'text-white/40'}`}>
                          {step.subtitle}
                        </div>
                      </div>

                      <div className={`relative w-16 h-16 rounded-full border transition-all duration-500 flex items-center justify-center ${
                        isActive
                          ? `border-${step.color}-500/50 bg-${step.color}-500/10`
                          : 'border-white/10 bg-white/5'
                      }`}>
                        <Icon className={`w-6 h-6 transition-colors duration-500 ${
                          isActive
                            ? (step.color === 'emerald' ? 'text-emerald-400' :
                               step.color === 'amber' ? 'text-amber-400' :
                               step.color === 'blue' ? 'text-blue-400' : 'text-purple-400')
                            : 'text-white/30'
                        }`} />

                        {/* Active ring */}
                        {isActive && (
                          <motion.div
                            layoutId="activeRing"
                            className={`absolute inset-0 rounded-full border-2 ${
                              step.color === 'emerald' ? 'border-emerald-500' :
                              step.color === 'amber' ? 'border-amber-500' :
                              step.color === 'blue' ? 'border-blue-500' : 'border-purple-500'
                            }`}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Scroll Progress */}
              <div className="mt-12 w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-emerald-500 origin-left"
                  style={{ scaleX: smoothProgress }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step Number Watermark */}
        <div className="absolute bottom-8 right-8 font-mono text-[20vw] leading-none text-white/[0.02] pointer-events-none select-none">
          0{activeStep + 1}
        </div>
      </div>
    </section>
  );
}

// --- EXPORTS FOR OTHER COMPONENTS ---

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
      className="fixed bottom-24 right-6 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl min-w-[300px]"
    >
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
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
            <span className={visibleSteps.includes(i) ? 'text-white/80' : 'text-white/20'}>
              {step.action}
            </span>
            <span className="text-white/30">{step.duration}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

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
        bg-[#0A0A0A] backdrop-blur-sm border border-white/10 rounded-xl p-6
        hover:border-emerald-500/30 transition-all duration-300
        ${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]} ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
