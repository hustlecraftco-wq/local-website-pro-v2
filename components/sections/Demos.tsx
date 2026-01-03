"use client";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, ArrowRight, Phone, Scale, TrendingUp, Activity, Hammer, Droplets, Leaf } from "lucide-react";

// --- INDUSTRY THEMES ---
const themes = {
  plumbing: {
    primary: "#3B82F6",
    secondary: "#1D4ED8",
    accent: "#60A5FA",
    glow: "rgba(59, 130, 246, 0.4)",
  },
  roofing: {
    primary: "#F97316",
    secondary: "#EA580C",
    accent: "#FB923C",
    glow: "rgba(249, 115, 22, 0.4)",
  },
  landscaping: {
    primary: "#22C55E",
    secondary: "#16A34A",
    accent: "#4ADE80",
    glow: "rgba(34, 197, 94, 0.4)",
  },
  legal: {
    primary: "#8B5CF6",
    secondary: "#7C3AED",
    accent: "#A78BFA",
    glow: "rgba(139, 92, 246, 0.4)",
  },
  finance: {
    primary: "#10B981",
    secondary: "#059669",
    accent: "#34D399",
    glow: "rgba(16, 185, 129, 0.4)",
  },
  medical: {
    primary: "#06B6D4",
    secondary: "#0891B2",
    accent: "#22D3EE",
    glow: "rgba(6, 182, 212, 0.4)",
  },
};

// --- DATA ---
const demos = [
  {
    category: "Trade",
    industry: "Plumbing & HVAC",
    title: "The Emergency Dispatcher",
    desc: "Built for speed. Sticky 'Call Now' buttons and '24/7 Service' badges that drive immediate emergency calls.",
    icon: <Droplets className="w-5 h-5" />,
    theme: themes.plumbing,
  },
  {
    category: "Trade",
    industry: "Roofing & Exteriors",
    title: "The High-Ticket Closer",
    desc: "Trust-heavy design. Features 'Before/After' sliders, financing calculators, and hail damage report tools.",
    icon: <Hammer className="w-5 h-5" />,
    theme: themes.roofing,
  },
  {
    category: "Trade",
    industry: "Landscaping & Hardscape",
    title: "The Visual Portfolio",
    desc: "Gallery-first architecture. Lets the photos of patios, pools, and lawns do the selling. Clean and green.",
    icon: <Leaf className="w-5 h-5" />,
    theme: themes.landscaping,
  },
  {
    category: "Professional",
    industry: "Legal & Attorney",
    title: "The Legal Authority",
    desc: "Commanding and clean. Focuses on 'Case Results', practice areas, and direct attorney bios to build instant trust.",
    icon: <Scale className="w-5 h-5" />,
    theme: themes.legal,
  },
  {
    category: "Professional",
    industry: "Financial & CPA",
    title: "The Wealth Manager",
    desc: "Data-driven design. Features ROI charts, secure client portals, and 'Schedule Consultation' funnels.",
    icon: <TrendingUp className="w-5 h-5" />,
    theme: themes.finance,
  },
  {
    category: "Professional",
    industry: "Medical & Dental",
    title: "The Practice Engine",
    desc: "Soft, clean, and calming. Integrated with booking engines (ZocDoc) and patient review aggregators.",
    icon: <Activity className="w-5 h-5" />,
    theme: themes.medical,
  },
];

// --- ANIMATED CARD COMPONENT ---
function DemoCard({ demo }: { demo: typeof demos[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const { theme } = demo;

  return (
    <div
      ref={cardRef}
      className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-500 flex flex-col cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0.5, y: 0.5 }); }}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateY(${(mousePos.x - 0.5) * 8}deg) rotateX(${(0.5 - mousePos.y) * 8}deg) translateY(-8px)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      {/* --- THE ANIMATED VISUAL AREA --- */}
      <div className="h-72 w-full relative overflow-hidden bg-[#050508]">

        {/* Animated Gradient Background */}
        <div
          className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-700"
          style={{
            background: `
              radial-gradient(ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%, ${theme.primary}40 0%, transparent 50%),
              radial-gradient(ellipse at ${100 - mousePos.x * 100}% ${100 - mousePos.y * 100}%, ${theme.secondary}30 0%, transparent 50%),
              linear-gradient(135deg, ${theme.primary}15 0%, transparent 50%, ${theme.secondary}15 100%)
            `,
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(${theme.primary}20 1px, transparent 1px),
              linear-gradient(90deg, ${theme.primary}20 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translate(${(mousePos.x - 0.5) * 10}px, ${(mousePos.y - 0.5) * 10}px)`,
            transition: 'transform 0.2s ease-out',
          }}
        />

        {/* Floating Orb 1 - Large */}
        <div
          className="absolute w-32 h-32 rounded-full blur-2xl transition-all duration-700 group-hover:scale-125"
          style={{
            background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`,
            left: `${20 + (mousePos.x - 0.5) * 30}%`,
            top: `${20 + (mousePos.y - 0.5) * 30}%`,
          }}
        />

        {/* Floating Orb 2 - Medium */}
        <div
          className="absolute w-24 h-24 rounded-full blur-xl transition-all duration-500 group-hover:scale-110"
          style={{
            background: `radial-gradient(circle, ${theme.accent}50 0%, transparent 70%)`,
            right: `${15 + (0.5 - mousePos.x) * 25}%`,
            bottom: `${25 + (0.5 - mousePos.y) * 25}%`,
          }}
        />

        {/* Floating Orb 3 - Small accent */}
        <div
          className="absolute w-16 h-16 rounded-full blur-lg transition-all duration-300"
          style={{
            background: `radial-gradient(circle, ${theme.primary}60 0%, transparent 70%)`,
            left: `${60 + (mousePos.x - 0.5) * 40}%`,
            top: `${50 + (mousePos.y - 0.5) * 40}%`,
          }}
        />

        {/* Geometric Shape - Rotating Square */}
        <div
          className="absolute w-20 h-20 border opacity-20 group-hover:opacity-40 transition-all duration-700"
          style={{
            borderColor: theme.accent,
            left: '15%',
            top: '20%',
            transform: `rotate(${45 + (mousePos.x * 20)}deg) scale(${isHovered ? 1.1 : 1})`,
            transition: 'transform 0.5s ease-out, opacity 0.3s',
          }}
        />

        {/* Geometric Shape - Circle Ring */}
        <div
          className="absolute w-28 h-28 rounded-full border opacity-15 group-hover:opacity-30 transition-all duration-700"
          style={{
            borderColor: theme.primary,
            right: '10%',
            top: '15%',
            transform: `scale(${isHovered ? 1.2 : 1})`,
          }}
        />

        {/* Geometric Shape - Small Diamond */}
        <div
          className="absolute w-8 h-8 border opacity-30 group-hover:opacity-50 transition-all duration-500"
          style={{
            borderColor: theme.accent,
            left: '45%',
            bottom: '20%',
            transform: `rotate(45deg) translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)`,
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full transition-all duration-700"
            style={{
              backgroundColor: theme.accent,
              opacity: isHovered ? 0.6 : 0.2,
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              transform: `translate(${(mousePos.x - 0.5) * (20 + i * 5)}px, ${(mousePos.y - 0.5) * (20 + i * 5)}px)`,
              boxShadow: isHovered ? `0 0 10px ${theme.glow}` : 'none',
            }}
          />
        ))}

        {/* Center Icon Display */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-500"
          style={{
            transform: `translate(${(mousePos.x - 0.5) * -15}px, ${(mousePos.y - 0.5) * -15}px)`,
          }}
        >
          <div
            className="relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 group-hover:scale-110"
            style={{
              borderColor: `${theme.primary}40`,
              backgroundColor: `${theme.primary}10`,
              boxShadow: isHovered ? `0 0 60px ${theme.glow}, inset 0 0 30px ${theme.primary}10` : `0 0 30px ${theme.glow}`,
            }}
          >
            <div style={{ color: theme.accent }} className="w-10 h-10 flex items-center justify-center">
              <div className="scale-[2]">{demo.icon}</div>
            </div>
          </div>
        </div>

        {/* "View Live" Overlay */}
        <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <span
            className="px-5 py-2.5 text-white font-bold rounded-full text-xs flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
            style={{ backgroundColor: theme.primary }}
          >
            View Live Demo <ExternalLink className="w-3 h-3" />
          </span>
        </div>

        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* --- CONTENT --- */}
      <div className="p-6 flex-grow flex flex-col bg-[#0A0A0A] relative z-20 border-t border-white/5">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="p-1.5 rounded-lg border"
            style={{
              backgroundColor: `${theme.primary}15`,
              borderColor: `${theme.primary}30`,
              color: theme.accent,
            }}
          >
            {demo.icon}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-kc-muted">{demo.industry}</span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
          {demo.title}
        </h3>
        <p className="text-xs text-kc-muted leading-relaxed mb-4 flex-grow">
          {demo.desc}
        </p>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-bold text-white/50">
            <Phone className="w-3 h-3" /> Mobile First
          </div>
          <span
            className="text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
            style={{ color: theme.accent }}
          >
            See Details <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---
export default function Demos() {
  const industryToUrl: Record<string, string> = {
    "Plumbing & HVAC": "/demo/plumber",
    "Roofing & Exteriors": "/demo/roofer",
    "Landscaping & Hardscape": "/demo/landscaping",
    "Legal & Attorney": "/demo/lawyer",
    "Financial & CPA": "/demo/finance",
    "Medical & Dental": "/demo/medical",
  };

  return (
    <section id="demos" className="py-24 px-6 bg-kc-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Don&apos;t imagine it. <span className="text-kc-accent">See it.</span>
            </h2>
            <p className="text-kc-muted text-lg">
              We build specialized assets for high-value industries. These aren&apos;t templates; they are sector-specific lead machines.
            </p>
          </div>
          <Link href="/contact" className="hidden md:flex items-center gap-2 text-white font-bold hover:text-kc-accent transition-colors">
            Get a Custom Mockup <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* DEMO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, i) => {
            const demoUrl = industryToUrl[demo.industry];

            return demoUrl ? (
              <Link key={i} href={demoUrl} className="block">
                <DemoCard demo={demo} />
              </Link>
            ) : (
              <DemoCard key={i} demo={demo} />
            );
          })}
        </div>

        {/* MOBILE FOOTER */}
        <div className="mt-12 text-center md:hidden">
          <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-kc-accent transition-colors">
            Get a Custom Mockup <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
