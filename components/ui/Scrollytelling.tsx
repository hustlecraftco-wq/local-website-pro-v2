"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { Brain, Database, Zap, MessageSquare, Shield, TrendingUp, Lock, BarChart3 } from "lucide-react";
import Image from "next/image";
import { useLenis } from "@studio-freight/react-lenis";

interface ScrollytellingStep {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  iconClass: string;
  bgClass: string;
  borderClass: string;
  media: {
    type: "image" | "video";
    src: string;
    alt?: string;
  };
  stats?: { label: string; value: string }[];
}

const steps: ScrollytellingStep[] = [
  {
    title: "Data Ingestion",
    description: "Your financial documents, market data, and client preferences are securely ingested and encrypted with bank-grade AES-256 encryption.",
    icon: Database,
    color: "emerald",
    iconClass: "text-emerald-400",
    bgClass: "bg-emerald-500/20",
    borderClass: "border-emerald-500/50",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      alt: "Data dashboard showing secure financial ingestion",
    },
    stats: [
      { label: "Encryption", value: "AES-256" },
      { label: "Data Points", value: "50M+" },
    ],
  },
  {
    title: "Vector Analysis",
    description: "Our RAG engine transforms your data into high-dimensional vectors, enabling semantic search across millions of data points in milliseconds.",
    icon: Brain,
    color: "amber",
    iconClass: "text-amber-400",
    bgClass: "bg-amber-500/20",
    borderClass: "border-amber-500/50",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
      alt: "Neural network visualization representing vector analysis",
    },
    stats: [
      { label: "Dimensions", value: "1536" },
      { label: "Query Speed", value: "<50ms" },
    ],
  },
  {
    title: "Context Retrieval",
    description: "When you ask a question, the AI retrieves the most relevant context from your entire knowledge base—not just keyword matches.",
    icon: Zap,
    color: "blue",
    iconClass: "text-blue-400",
    bgClass: "bg-blue-500/20",
    borderClass: "border-blue-500/50",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      alt: "Data retrieval and search interface",
    },
    stats: [
      { label: "Accuracy", value: "99.2%" },
      { label: "Context Window", value: "128K" },
    ],
  },
  {
    title: "Intelligent Response",
    description: "The AI synthesizes retrieved context with real-time market data to generate personalized, actionable financial insights.",
    icon: MessageSquare,
    color: "purple",
    iconClass: "text-purple-400",
    bgClass: "bg-purple-500/20",
    borderClass: "border-purple-500/50",
    media: {
      type: "image",
      src: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
      alt: "AI-generated financial insights dashboard",
    },
    stats: [
      { label: "Response Time", value: "1.2s" },
      { label: "Confidence", value: "97%" },
    ],
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
  const [isClient, setIsClient] = useState(false);

  // Create a motion value that we'll manually update from Lenis
  const scrollProgress = useMotionValue(0);

  // Check for client-side and mobile
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate scroll progress manually based on element position
  const updateScrollProgress = useCallback(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate progress: 0 when element top reaches viewport top, 1 when element bottom leaves
    const elementTop = rect.top;
    const elementHeight = rect.height;

    // Start progress when element enters viewport, end when it exits
    const scrollStart = windowHeight; // Element top at bottom of viewport
    const scrollEnd = -elementHeight; // Element bottom leaves top of viewport
    const totalScrollDistance = scrollStart - scrollEnd;

    // Current progress through the scroll
    const currentProgress = (scrollStart - elementTop) / totalScrollDistance;
    const clampedProgress = Math.max(0, Math.min(1, currentProgress));

    scrollProgress.set(clampedProgress);

    // Update active step based on progress
    // Divide progress into equal sections for each step
    const progressPerStep = 1 / steps.length;
    const stepIndex = Math.floor(clampedProgress / progressPerStep);
    setActiveStep(Math.min(Math.max(0, stepIndex), steps.length - 1));
  }, [scrollProgress]);

  // Use Lenis scroll event to update progress smoothly
  useLenis(() => {
    updateScrollProgress();
  });

  // Also update on mount and resize
  useEffect(() => {
    if (isClient) {
      updateScrollProgress();
      window.addEventListener('resize', updateScrollProgress);
      // Fallback scroll listener for non-Lenis environments
      window.addEventListener('scroll', updateScrollProgress, { passive: true });
      return () => {
        window.removeEventListener('resize', updateScrollProgress);
        window.removeEventListener('scroll', updateScrollProgress);
      };
    }
  }, [updateScrollProgress, isClient]);

  // Animate the visualization based on scroll progress
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollProgress, [0, 0.1, 0.9, 1], [0.7, 1, 1, 0.7]);

  // Don't render until client-side
  if (!isClient) {
    return (
      <section className="relative py-20 px-4 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-[50vh] flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

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
                  className="bg-slate-900/80 border border-slate-700/50 rounded-2xl overflow-hidden"
                >
                  {/* Mobile Image */}
                  <div className="relative w-full aspect-video">
                    <Image
                      src={step.media.src}
                      alt={step.media.alt || step.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  </div>

                  <div className="p-6">
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
      style={{ height: '350vh' }}
      aria-labelledby="how-it-works-heading"
    >
      {/* Solid background to prevent hero bleed-through */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-slate-950 to-[#0A1628]" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Sticky Scroll Container - accounts for navbar height */}
      <div
        className="sticky z-20 flex items-center justify-center overflow-hidden"
        style={{ top: '80px', height: 'calc(100vh - 80px)' }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left: Sticky Media Visualization */}
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

            {/* Media Display - Changes with each step */}
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              {/* Background glow effect */}
              <motion.div
                className="absolute -inset-4 rounded-3xl blur-3xl -z-10 transition-colors duration-700"
                animate={{
                  background: activeStep === 0 ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(6, 78, 59, 0.2) 100%)' :
                             activeStep === 1 ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.3) 0%, rgba(120, 53, 15, 0.2) 100%)' :
                             activeStep === 2 ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(30, 58, 138, 0.2) 100%)' :
                             'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(88, 28, 135, 0.2) 100%)'
                }}
              />

              {/* Media Container */}
              <div className="relative w-full h-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
                {/* Animated Image Crossfade */}
                <AnimatePresence mode="wait">
                  {steps.map((step, i) => (
                    i === activeStep && (
                      <motion.div
                        key={i}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <Image
                          src={step.media.src}
                          alt={step.media.alt || step.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                        {/* Data overlay - Stats */}
                        {step.stats && (
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <div className="flex gap-4">
                              {step.stats.map((stat, si) => (
                                <motion.div
                                  key={si}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 + si * 0.1 }}
                                  className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2"
                                >
                                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{stat.label}</div>
                                  <div className={`text-lg font-bold ${step.iconClass}`}>{stat.value}</div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>

                {/* Icon Badge */}
                <motion.div
                  key={activeStep}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                  className="absolute top-4 left-4 flex items-center gap-3"
                >
                  <div className={`p-3 rounded-xl ${steps[activeStep].bgClass} backdrop-blur-xl border border-white/10`}>
                    {(() => {
                      const Icon = steps[activeStep].icon;
                      return <Icon className={`w-6 h-6 ${steps[activeStep].iconClass}`} />;
                    })()}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                      Step {activeStep + 1} of {steps.length}
                    </div>
                    <div className="text-sm font-bold text-white">{steps[activeStep].title}</div>
                  </div>
                </motion.div>
              </div>

              {/* Step Progress Indicator */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500`}
                    animate={{
                      width: i === activeStep ? 40 : 8,
                      backgroundColor: i === activeStep ?
                        (step.color === 'emerald' ? '#10B981' :
                         step.color === 'amber' ? '#F59E0B' :
                         step.color === 'blue' ? '#3B82F6' : '#A855F7')
                        : '#334155'
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Scrolling Text Cards */}
          <div className="space-y-[60vh] pt-[25vh] pb-[50vh]">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === activeStep;

              return (
                <motion.div
                  key={i}
                  className={`p-6 lg:p-8 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? `bg-slate-900/90 ${step.borderClass} shadow-2xl`
                      : 'bg-slate-900/30 border-slate-800/50'
                  }`}
                  initial={{ opacity: 0.3, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`p-3 rounded-xl ${step.bgClass} shrink-0`}
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        boxShadow: isActive ? `0 0 30px ${step.color === 'emerald' ? 'rgba(16, 185, 129, 0.3)' :
                                                         step.color === 'amber' ? 'rgba(245, 158, 11, 0.3)' :
                                                         step.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' :
                                                         'rgba(168, 85, 247, 0.3)'}` : 'none'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={`w-6 h-6 ${step.iconClass}`} />
                    </motion.div>
                    <div>
                      <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
                        Step {i + 1}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm lg:text-base">{step.description}</p>

                      {/* Progress line for active step */}
                      {isActive && (
                        <motion.div
                          className={`mt-4 h-0.5 rounded-full ${step.bgClass.replace('/20', '')}`}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2, ease: "linear" }}
                        />
                      )}
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
