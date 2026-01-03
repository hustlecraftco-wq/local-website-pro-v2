import Hero from "@/components/sections/Hero";
import SpeedComparison from "@/components/sections/SpeedComparison";
import TheWhy from "@/components/sections/TheWhy"; // New Import
import Demos from "@/components/sections/Demos";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-kc-dark text-white selection:bg-kc-accent selection:text-white">
      {/* ROBOT REMOVED: It now lives inside <SpeedComparison /> for better performance */}

      {/* 1. HOOK: "Not a Website. A Lead Machine." */}
      <Hero />

      {/* 2. PROOF (Data): The 0.4s vs 3.2s visual test */}
      <SpeedComparison />

      {/* 3. LOGIC (The Why): The "Financial Physics" & Ad Cost Calculator */}
      <TheWhy />

      {/* 4. VISUALS (The Goods): 3D Cards for specific industries */}
      <Demos />

      {/* 5. EXPERTISE (The Tech): Next.js, Edge, Security details */}
      <Features />

      {/* 6. TRUST (The Man): Your bio */}
      <About />

      {/* 7. OFFER: Pricing/Packages */}
      <Pricing />

      {/* 8. FOOTER */}
      <Footer />
    </main>
  );
}
