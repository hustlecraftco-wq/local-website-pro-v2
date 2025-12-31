"use client";
import { ChartIcon, LockIcon, TrendingIcon, CalculatorIcon, DollarIcon } from "./icons";

export default function FinanceDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-emerald-950 to-gray-900 text-white">
      <HeroSection />
      <ROISection />
      <ServicesSection />
      <ClientPortalSection />
      <ConsultationSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-7xl font-bold mb-6">
            Build<br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">Real Wealth</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">Data-driven wealth management. Tax optimization. Retirement planning. Let numbers work for you.</p>
          <button className="px-10 py-4 rounded-lg bg-emerald-500 text-white font-bold text-lg hover:bg-emerald-400 transition-colors">Schedule Consultation</button>
        </div>
        <div className="h-96 rounded-2xl border border-gray-700 bg-gradient-to-br from-emerald-900/30 to-gray-800 flex items-center justify-center">
          [Hero Chart]
        </div>
      </div>
    </section>
  );
}

function ROISection() {
  const stats = [
    { label: "Avg Client ROI", value: "12.4%" },
    { label: "Assets Under Management", value: "$850M" },
    { label: "Tax Savings", value: "$2.1M" },
    { label: "Client Retention", value: "98%" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-800">
      <h2 className="text-5xl font-bold text-center mb-12">Performance That Speaks</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="p-8 rounded-2xl border border-gray-700 bg-gray-800/50 text-center">
            <p className="text-4xl font-bold text-emerald-400 mb-2">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { icon: ChartIcon, title: "Wealth Management", desc: "Custom portfolio strategies" },
    { icon: TrendingIcon, title: "Tax Optimization", desc: "Minimize liabilities legally" },
    { icon: CalculatorIcon, title: "Retirement Planning", desc: "Secure your future" },
    { icon: DollarIcon, title: "Estate Planning", desc: "Protect your legacy" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-5xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div key={i} className="p-8 rounded-2xl border border-gray-700 bg-gray-800/50 hover:border-emerald-500 transition-all">
            <service.icon className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ClientPortalSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 border-t border-gray-800">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-6">Secure Client Portal</h2>
          <p className="text-lg text-gray-300 mb-6">24/7 access to your portfolio, documents, and real-time performance metrics.</p>
          <ul className="space-y-4">
            {["Real-time portfolio tracking", "Tax document access", "Secure messaging", "Performance reports"].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <LockIcon className="w-5 h-5 text-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-80 rounded-2xl border border-gray-700 bg-gray-800 flex items-center justify-center">
          [Portal Preview]
        </div>
      </div>
    </section>
  );
}

function ConsultationSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-12 text-center">
        <h2 className="text-5xl font-bold mb-6 text-white">Start Building Wealth Today</h2>
        <p className="text-xl mb-8 text-white/90">Free financial analysis. No obligation.</p>
        <button className="px-10 py-4 rounded-lg bg-white text-emerald-600 font-bold text-lg hover:bg-gray-100 transition-colors">Book Free Consultation</button>
      </div>
    </section>
  );
}
