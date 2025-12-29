"use client";
import Hero from "@/components/sections/Hero";
import ComparisonTable from "@/components/sections/ComparisonTable";
import BentoGrid from "@/components/sections/BentoGrid";
import Pricing from "@/components/sections/Pricing";
import Features from "@/components/sections/Features";
import AnalyticsPreview from "@/components/sections/AnalyticsPreview"; // <--- 1. Import This

export default function Home() {
  return (
    <main className="min-h-screen bg-kc-dark text-white selection:bg-kc-accent selection:text-white">
      <Hero />
      <ComparisonTable />
      <BentoGrid />
      
      {/* 2. Add Analytics BEFORE Features (Builds trust before the deep dive) */}
      <AnalyticsPreview /> 
      
      <Features />
      <Pricing />
      
      <footer className="py-12 text-center text-kc-muted text-sm border-t border-white/5">
        <p>© 2025 Local Website Pro. Hand-Coded in Kansas City.</p>
      </footer>
    </main>
  );
}
