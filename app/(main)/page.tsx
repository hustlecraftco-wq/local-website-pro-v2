import Hero from "@/components/sections/Hero";
import SpeedComparison from "@/components/sections/SpeedComparison";
import Demos from "@/components/sections/Demos";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";
import Robot from "@/components/ui/Robot";

export default function Home() {
  return (
    <main className="min-h-screen bg-kc-dark text-white selection:bg-kc-accent selection:text-white">
      {/* Robot only appears on main page */}
      <Robot showRobot={true} isLoaded={true} />

      {/* 1. HOOK */}
      <Hero />

      {/* 2. PROOF (Data) */}
      <SpeedComparison />

      {/* 3. VISUALS (The Goods) */}
      <Demos />

      {/* 4. EXPERTISE (The Tech) */}
      <Features />

      {/* 5. TRUST (The Man) */}
      <About />

      {/* 6. OFFER */}
      <Pricing />

      {/* 7. FOOTER */}
      <Footer />
    </main>
  );
}
