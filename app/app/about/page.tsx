import Navbar from "@/components/ui/Navbar";
import About from "@/components/sections/About";
import Robot from "@/components/ui/Robot";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-kc-dark text-white">
      <Navbar />
      <div className="pt-20"> {/* Padding for Navbar */}
        <About />
      </div>
      <Robot />
    </main>
  );
}
