"use client";

import { useState } from "react";
import { ShieldIcon, AwardIcon, DollarSignIcon, FileCheckIcon, ChevronDownIcon } from "./icons";
export default function RooferDemoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <TrustSection />
      <BeforeAfterSection />
      <FinancingCalculatorSection />
      <HailDamageReportSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}

// --- HERO SECTION ---
function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Premium Roofing.
            <span className="block text-emerald-400">Zero Guesswork.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            High-ticket roofing demo built to close $20k+ jobs with speed, trust, and a frictionless quote flow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-full bg-emerald-500 text-black font-semibold text-lg hover:bg-emerald-400 transition-colors">
              Get Instant Roof Quote
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-gray-600 hover:border-emerald-400 transition-colors">
              View Before & After Gallery
            </button>
          </div>
        </div>
        <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="absolute inset-0 flex items-center justify-center text-gray-600">
            [Hero Image Placeholder]
          </div>
        </div>
      </div>
    </section>
  );
}

// --- TRUST SECTION ---
function TrustSection() {
  const badges = [
    { icon: ShieldIcon, label: "25-Year Warranty", color: "text-blue-400" },
    { icon: AwardIcon, label: "GAF Master Elite", color: "text-yellow-400" },
    { icon: DollarSignIcon, label: "0% Financing Available", color: "text-emerald-400" },
    { icon: FileCheckIcon, label: "Free Hail Inspection", color: "text-orange-400" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 border-y border-gray-800">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((badge, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-2">
            <badge.icon className={`w-10 h-10 ${badge.color}`} />
            <span className="text-sm font-medium text-gray-300">{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- BEFORE/AFTER SLIDER ---
function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Premium Results</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        See the transformation. Drag the slider to compare before and after.
      </p>

      <div className="relative w-full max-w-4xl mx-auto h-96 rounded-2xl overflow-hidden border border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center text-white text-sm">
          [Before Image]
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 flex items-center justify-center text-white text-sm"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          [After Image]
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
        <div
          className="absolute top-0 bottom-0 w-1 bg-white"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- FINANCING CALCULATOR ---
function FinancingCalculatorSection() {
  const [roofCost, setRoofCost] = useState(18000);
  const [downPayment, setDownPayment] = useState(2000);
  const monthlyPayment = ((roofCost - downPayment) * 0.0045).toFixed(2);

  return (
    <section className="max-w-5xl mx-auto px-4 py-20 border-t border-gray-800">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Affordable Financing</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Most clients pay under $100/mo with 0% APR financing. Calculate yours below.
      </p>

      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Estimated Roof Cost</label>
            <input
              type="range"
              min="10000"
              max="40000"
              step="1000"
              value={roofCost}
              onChange={(e) => setRoofCost(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-2xl font-bold text-emerald-400 mt-2">${roofCost.toLocaleString()}</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Down Payment</label>
            <input
              type="range"
              min="0"
              max="10000"
              step="500"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-2xl font-bold text-emerald-400 mt-2">${downPayment.toLocaleString()}</div>
          </div>
        </div>

        <div className="mt-10 p-6 bg-black rounded-2xl border border-emerald-500/30">
          <div className="text-center">
            <div className="text-gray-400 text-sm mb-2">Estimated Monthly Payment (0% APR, 36 months)</div>
            <div className="text-5xl font-bold text-emerald-400">${monthlyPayment}/mo</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- HAIL DAMAGE REPORT TOOL ---
function HailDamageReportSection() {
  const [formData, setFormData] = useState({ address: "", phone: "", email: "" });

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 md:p-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Hail Damage Inspection</h2>
          <p className="text-orange-100 mb-8">
            Storm damage? We'll inspect your roof and handle your insurance claim—at no cost to you.
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Property Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-6 py-4 rounded-full bg-white/20 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-6 py-4 rounded-full bg-white/20 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 rounded-full bg-white/20 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="w-full px-6 py-4 rounded-full bg-white text-red-600 font-bold text-lg hover:bg-gray-100 transition-colors">
              Schedule Free Inspection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- FAQ ACCORDION ---
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does a roof replacement take?",
      a: "Most residential roofs are completed in 1-2 days, weather permitting. We'll provide a precise timeline during your free estimate.",
    },
    {
      q: "Do you work with insurance companies?",
      a: "Yes. We handle all communication with your insurance company and help maximize your claim to minimize out-of-pocket costs.",
    },
    {
      q: "What roofing materials do you offer?",
      a: "We install asphalt shingles, metal roofing, tile, and flat roof systems. We'll recommend the best option for your budget and style.",
    },
    {
      q: "Is financing really 0% APR?",
      a: "Yes, for qualified buyers. We partner with leading lenders to offer flexible terms with no interest for up to 36 months.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Common Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-800 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-900 transition-colors"
            >
              <span className="font-semibold text-lg">{faq.q}</span>
              <ChevronDownIcon className={`w-5 h-5 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
            </button>
            {openIndex === i && (
              <div className="px-6 py-4 bg-gray-900 text-gray-300 border-t border-gray-800">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// --- FINAL CTA ---
function FinalCTASection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a Premium Roof?</h2>
      <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
        Join 1,000+ homeowners who chose quality and speed. Get your free quote in under 60 seconds.
      </p>
      <button className="px-12 py-5 rounded-full bg-emerald-500 text-black font-bold text-xl hover:bg-emerald-400 transition-colors">
        Get Instant Quote →
      </button>
    </section>
  );
}
