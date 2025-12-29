"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Zap, ArrowRight, Clock, Laptop } from "lucide-react"; // Added Laptop for Demos icon if needed

export default function Hero() {
  const [speedTestActive, setSpeedTestActive] = useState(false);
  const [speedTestDone, setSpeedTestDone] = useState(false);
  
  // --- ANIMATION LOGIC ---
  
  // 1. Competitor Animation (Slow)
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(1));
  const competitorTextRef = useRef<HTMLParagraphElement>(null);

  // 2. Asset Animation (Fast) - NEW
  const assetCount = useMotionValue(0);
  const assetRounded = useTransform(assetCount, (latest) => latest.toFixed(1));
  const assetTextRef = useRef<HTMLParagraphElement>(null);

  // Sync Competitor Text
  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (competitorTextRef.current) {
        competitorTextRef.current.textContent = latest + "s";
      }
    });
    return () => unsubscribe();
  }, [rounded]);

  // Sync Asset Text - NEW
  useEffect(() => {
    const unsubscribe = assetRounded.on("change", (latest) => {
      if (assetTextRef.current) {
        assetTextRef.current.textContent = latest + "s";
      }
    });
    return () => unsubscribe();
  }, [assetRounded]);

  const runSpeedTest = () => {
    if (speedTestActive) return;
    setSpeedTestActive(true);
    setSpeedTestDone(false);
    
    // Reset values
    count.set(0);
    assetCount.set(0);
    
    // Animate Competitor (Slow: 3.2s over 2.5 seconds)
    animate(count, 3.2, { 
      duration: 2.5, 
      ease: "linear",
      onComplete: () => setSpeedTestDone(true)
    });

    // Animate Asset (Fast: 0.4s over 0.4 seconds) - NEW
    animate(assetCount, 0.4, {
      duration: 0.4,
      ease: "circOut"
    });
  };

  const resetSpeedTest = () => {
    count.set(0);
    assetCount.set(0);
    setSpeedTestActive(false);
    setSpeedTestDone(false);
    if (competitorTextRef.current) competitorTextRef.current.textContent = "0.0s";
    if (assetTextRef.current) assetTextRef.current.textContent = "0.0s";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5 bg-kc-dark">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          autoPlay muted loop playsInline 
          className="w-full h-full object-cover opacity-70" // Adjusted opacity for readability
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-kc-dark via-kc-dark/60 to-blue-900/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-center">

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)] backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Veteran Owned & Operated
        </motion.div>
        <br />

        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-2xl"
        >
          <span className="w-2 h-2 rounded-full bg-kc-accent animate-pulse"></span>
          <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">KC's Top Hand-Coded Assets</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black leading-[1.1] mb-6 tracking-tight text-white"
        >
          Stop Renting Sites.<br/>
          Own Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-kc-success to-emerald-200">Lead Machine.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-kc-muted mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          We build fast, custom-coded assets for KC Businesses and Professionals. 
          <span className="text-white font-semibold"> 0.4s Load Time. No Monthly Fees. 100% Ownership.</span>
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
          <Link href="/contact" className="group relative px-8 py-4 bg-kc-accent rounded-full text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
            <span>Build My Asset</span>
            <ArrowRight className="w-5 h-5"/>
          </Link>
          
          {/* Swapped to "Demos" based on your strategy pivot */}
          <Link href="#demos" className="px-8 py-4 glass-panel rounded-full text-white font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2 group">
            <Laptop className="w-5 h-5 text-kc-muted group-hover:text-white transition-colors"/>
            <span>See Live Demos</span>
          </Link>
        </div>

        {/* Speed Test Widget */}
        <div className="max-w-xl mx-auto min-h-[220px]">
          {!speedTestActive ? (
            <button onClick={runSpeedTest} className="group w-full md:w-auto glass-panel px-8 py-6 rounded-2xl flex items-center justify-center gap-4 mx-auto hover:border-kc-success/50 transition-all cursor-pointer">
              <div className="p-3 bg-kc-success/10 rounded-full text-kc-success">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-sm text-kc-muted uppercase tracking-wider font-bold">Challenge Us</div>
                <div className="text-white font-bold text-lg">Test Speed vs. Competitors</div>
              </div>
            </button>
          ) : (
            <div className="glass-panel p-8 rounded-3xl border-kc-success/30 relative overflow-hidden">
              <div className="flex justify-between items-center relative z-10">
                {/* Competitor Side */}
                <div className="text-center w-1/2">
                  <p className="text-[10px] uppercase tracking-widest text-kc-accent font-bold mb-2">Wordpress</p>
                  <p ref={competitorTextRef} className="text-5xl font-mono font-black text-white">0.0s</p>
                  <p className="text-xs text-kc-muted mt-2">Loading...</p>
                </div>

                <div className="h-12 w-px bg-white/10 mx-4"></div>

                {/* Asset Side */}
                <div className="text-center w-1/2">
                  <p className="text-[10px] uppercase tracking-widest text-kc-success font-bold mb-2">Your Asset</p>
                  <p ref={assetTextRef} className="text-5xl font-mono font-black text-kc-success">0.0s</p>
                  <p className="text-xs text-kc-success/70 mt-2">Instant.</p>
                </div>
              </div>

              {/* Result Message with Stat */}
              {speedTestDone && (
                <div className="mt-6 pt-4 border-t border-white/5 text-center animate-fade-in-up">
                  <p className="text-white font-bold mb-1 text-lg">
                    In that 2.8s gap, your customer left.
                  </p>
                  <p className="text-xs text-kc-muted mb-3 italic">
                    "53% of visits are abandoned if a mobile site takes longer than 3 seconds to load."
                  </p>
                  <button onClick={resetSpeedTest} className="text-xs text-kc-accent uppercase font-bold tracking-widest hover:text-white transition-colors">
                    Reset Test
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
