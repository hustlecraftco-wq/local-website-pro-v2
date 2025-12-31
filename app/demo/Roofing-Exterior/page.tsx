// app/demo/roofer/page.tsx
export default function RooferDemoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Premium Roofing. Zero Guesswork.
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          High-ticket roofing demo built to close $20k+ jobs with
          speed, trust, and a frictionless quote flow.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button className="px-6 py-3 rounded-full bg-emerald-500 text-black font-semibold">
            Get Instant Roof Quote
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-600">
            View Before & After Gallery
          </button>
        </div>
      </section>
    </main>
  );
}
