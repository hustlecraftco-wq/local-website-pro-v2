import Navbar from "@/components/ui/Navbar";
import SpeedComparison from "@/components/sections/SpeedComparison";
import Robot from "@/components/ui/SalesBot";

export default function SpeedPage() {
  return (
    <main className="min-h-screen bg-kc-dark text-white">
      <Navbar />
      <div className="pt-20">
        <SpeedComparison />
      </div>
      <Robot />
    </main>
  );
}
