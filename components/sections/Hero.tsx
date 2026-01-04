"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// LAZY LOAD: Spline is ~12MB - load immediately on desktop for hero experience
const HeroBackground = dynamic(() => import("@/components/ui/HeroBackground"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Load Spline after a brief delay to let critical content paint
  useEffect(() => {
    const timer = setTimeout(() => setShouldLoad(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-kc-dark">
      {/* Gradient fallback for mobile and initial load */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-kc-dark to-kc-dark" />

      {/* Interactive Spline - DESKTOP: Full experience, MOBILE: Gradient only */}
      {isDesktop && shouldLoad ? (
        <div className="absolute inset-0">
          <HeroBackground />
        </div>
      ) : (
        /* Mobile: Show a subtle animated gradient instead */
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-kc-dark to-emerald-900/10" />
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
