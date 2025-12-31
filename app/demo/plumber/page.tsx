"use client";
import { useState } from "react";
import { PhoneIcon, ClockIcon, WrenchIcon, ThermometerIcon, CheckCircleIcon } from "./icons";

export default function PlumberDemoPage() {
  const [emergencyType, setEmergencyType] = useState("plumbing");

  return (
    <main className="min-h-screen bg-black text-white">
      {/* STICKY EMERGENCY BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-500 text-white py-3 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ClockIcon className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-bold">24/7 EMERGENCY SERVICE AVAILABLE</span>
          </div>
          <button className="px-6 py-2.5 rounded-full bg-white text-blue-500 font-semibold text-lg hover:bg-emerald-400 transition-colors">
            <PhoneIcon className="w-5 h-5 inline mr-2" />
            CALL NOW
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <HeroSection />

      {/* EMERGENCY SERVICES */}
      <EmergencyServicesSection />

      {/* TRUST BADGES */}
      <TrustSection />

      {/* RESPONSE TIME */}
      <ResponseTimeSection />

      {/* PRICING ESTIMATE */}
      <PricingEstimateSection emergencyType={emergencyType} setEmergencyType={setEmergencyType} />

      {/* FAQ */}
      <FAQSection />

      {/* FINAL CTA */}
      <FinalCTASection />
    </main>
  );
}

// --- HERO SECTION ---
function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 mt-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500 text-red-400 font-bold text-sm mb-6 animate-pulse">
            <ClockIcon className="w-4 h-4" /> EMERGENCY? WE'RE READY NOW
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Fast Plumbing &amp; HVAC<br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">24/7 Service</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Burst pipe? No heat? AC down? Our emergency dispatch team responds in under 60 minutes—guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-full bg-blue-500 text-white font-bold text-lg hover:bg-blue-400 transition-colors">
              <PhoneIcon className="w-5 h-5 inline mr-2" />
              Call Emergency Line
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-gray-600 hover:border-emerald-400 transition-colors">
              View Services
            </button>
          </div>
        </div>

        <div className="relative h-80 w-full max-w-2xl mx-auto rounded-3xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="absolute inset-0 flex items-center justify-center text-gray-600">
            [Hero Image Placeholder]
          </div>
        </div>
      </div>
    </section>
  );
}

// --- EMERGENCY SERVICES ---
function EmergencyServicesSection() {
  const services = [
    { icon: WrenchIcon, label: "Burst Pipes", color: "text-blue-400" },
    { icon: ThermometerIcon, label: "No Heat", color: "text-red-400" },
    { icon: WrenchIcon, label: "AC Failure", color: "text-sky-400" },
    { icon: WrenchIcon, label: "Gas Leaks", color: "text-yellow-400" },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-20 border-t border-gray-800">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Common Emergencies</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Our dispatch team handles these critical situations every day. No job too urgent.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-2">
            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800">
              <service.icon className={`w-10 h-10 ${service.color}`} />
            </div>
            <p className="text-sm font-bold">{service.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- TRUST SECTION ---
function TrustSection() {
  const badges = [
    { icon: CheckCircleIcon, label: "Licensed & Insured", color: "text-emerald-400" },
    { icon: ClockIcon, label: "24/7 Availability", color: "text-blue-400" },
    { icon: WrenchIcon, label: "Expert Technicians", color: "text-yellow-400" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {badges.map((badge, i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl border border-gray-800 bg-gray-900">
            <badge.icon className={`w-12 h-12 ${badge.color}`} />
            <h3 className="text-xl font-bold">{badge.label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- RESPONSE TIME ---
function ResponseTimeSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-12 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-emerald-400 mb-4">&lt;60 Minutes</h2>
        <p className="text-xl text-gray-300">Average Emergency Response Time</p>
      </div>
    </section>
  );
}

// --- PRICING ESTIMATE ---
function PricingEstimateSection({ emergencyType, setEmergencyType }: any) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 border-t border-gray-800">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Get Instant Estimate</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Select your emergency type for ballpark pricing. Final quote after inspection.
      </p>

      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 miod:p-12">
        <label className="block text-sm font-medium text-gray-400 mb-2">Emergency Type</label>
        <select 
          value={emergencyType}
          onChange={(e) => setEmergencyType(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white font-medium mb-8"
        >
          <option value="plumbing">Burst Pipe / Leak</option>
          <option value="heating">No Heat / Furnace Down</option>
          <option value="cooling">AC Failure</option>
          <option value="gas">Gas Leak (CALL IMMEDIATELY)</option>
        </select>

        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-400 mb-2">
            {emergencyType === "gas" ? "$200-$500" : "$150-$400"}
          </div>
          <p className="text-sm text-gray-500">Emergency Service Call + Diagnosis</p>
        </div>
      </div>
    </section>
  );
}

// --- FAQ ---
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do you really respond 24/7?",
      a: "Yes. We have technicians on-call around the clock, every day of the year including holidays.",
    },
    {
      q: "What's included in the emergency fee?",
      a: "The emergency service call covers dispatch, travel, and initial diagnosis. Repairs are quoted separately after inspection.",
    },
    {
      q: "How fast can you get here?",
      a: "Our average response time is under 60 minutes for true emergencies in our service area.",
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
              <CheckCircleIcon className={`w-5 h-5 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
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
    <section className="max-w-5xl mx-auto px-4 py-20">
      <div className="bg-gradient-to-r from-blue-500 to-emerald-500 text-black rounded-full shadow-xl flex items-center justify-between text-lg hover:bg-emerald-400 transition-colors">
        <button className="px-8 py-6 rounded-full bg-blue-500 to-emerald-500 text-white font-bold text-lg w-full">
          <PhoneIcon className="w-6 h-6 inline mr-2" />
          Call Emergency Hotline Now
        </button>
      </div>
      <p className="text-sm text-gray-500 text-center mt-4">Average callback time: &lt;2 minutes</p>
    </section>
  );
}
