'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// --- COMPONENTS ---

const Icon = ({ name, className }: { name: string; className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
    wrench: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
    zap: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
    check: <polyline points="20 6 9 17 4 12" />
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      aria-hidden="true" 
    >
      {icons[name] || null}
    </svg>
  );
};

const FeatureCard = ({ icon, title, desc, delay }: { icon: string, title: string, desc: string, delay: string }) => (
  <div className={`group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up ${delay}`}>
    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
      <Icon name={icon} className="text-cyan-400 w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-300 leading-relaxed">{/* Changed to slate-300 for higher contrast */}{desc}</p>
  </div>
);

// --- MAIN PAGE ---

export default function EmergencyPlumberPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30 font-sans">
      
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translate3d(0, 40px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4); }
          50% { box-shadow: 0 0 0 10px rgba(6, 182, 212, 0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .animate-pulse-glow { animation: pulse-glow 2s infinite; }
      `}</style>

      {/* NAV */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-slate-950/90 backdrop-blur-md border-b border-slate-800' : 'py-6 bg-transparent'}`} aria-label="Main Navigation">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-slate-950">
              <Icon name="zap" className="w-5 h-5 fill-current" />
            </div>
            <span>Flow<span className="text-cyan-400">Tech</span></span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <Link href="#" className="hover:text-white transition-colors">Services</Link>
            <Link href="#" className="hover:text-white transition-colors">Areas</Link>
            <Link href="#" className="hover:text-white transition-colors">Reviews</Link>
          </div>

          <a href="tel:555-0123" className="flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-rose-900/20 animate-pulse-glow" aria-label="Call 24/7 Emergency Service">
            <Icon name="phone" className="w-4 h-4" />
            <span>24/7 EMERGENCY</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] -z-10 opacity-50 mix-blend-screen pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-400 text-sm font-medium mb-8 opacity-0 animate-fade-in-up backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Average Response Time: 14 Minutes
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-white opacity-0 animate-fade-in-up delay-100">
            Emergency HVAC & <br /> Plumbing Experts.
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up delay-200">
            Don't let a leak become a flood. We deploy licensed technicians to your door instantly. No hidden fees, just rapid results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up delay-300">
            <button className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2" aria-label="Book a service appointment now">
              Book Now
              <Icon name="check" className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-full font-bold hover:bg-slate-700 transition-colors" aria-label="View our service area map">
              View Service Map
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Techs", val: "40+" },
              { label: "Avg Arrival", val: "14m" },
              { label: "5-Star Reviews", val: "2k+" },
              { label: "Warranty", val: "Lifetime" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4 text-white">Residential & Commercial</h2>
              <p className="text-slate-300">We handle everything from minor residential leaks to complex commercial HVAC installations.</p>
            </div>
            <Link href="#" className="text-cyan-400 font-bold hover:text-cyan-300 flex items-center gap-2 group">
              View all services <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              icon="wrench" 
              title="Smart Diagnostics" 
              desc="We use thermal imaging and AI acoustic detection to pinpoint leaks behind walls without destruction."
              delay="delay-100"
            />
            <FeatureCard 
              icon="zap" 
              title="Emergency HVAC" 
              desc="Furnace out in winter? AC down in summer? Our priority dispatch gets you running same-day."
              delay="delay-200"
            />
            <FeatureCard 
              icon="shield" 
              title="Upfront Pricing" 
              desc="Digital invoices sent before we start work. No surprise fees, no overtime charges for nights/weekends."
              delay="delay-300"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-24 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-900/10" />
        <div className="container mx-auto px-6 relative text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Need help right now?</h2>
          <div className="flex flex-col items-center gap-6">
            <a href="tel:555-0123" className="text-5xl md:text-7xl font-black text-cyan-400 hover:text-cyan-300 transition-colors tracking-tight" aria-label="Call 555-012-3456">
              (555) 012-3456
            </a>
            <p className="text-slate-400">
              Live dispatchers are standing by. <br />
              <span className="text-emerald-400 font-medium">● Currently typical response time: 12 mins</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
