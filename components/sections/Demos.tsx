"use client";
import Link from "next/link";

import { useRef, useEffect, useState } from "react";
import { ExternalLink, ArrowRight, Phone, Scale, TrendingUp, Activity, Hammer, Droplets, Leaf } from "lucide-react";

// --- DATA ---
const demos = [
  // BLUE COLLAR
  {
    category: "Trade",
    industry: "Plumbing & HVAC",
    title: "The Emergency Dispatcher",
    desc: "Built for speed. Sticky 'Call Now' buttons and '24/7 Service' badges that drive immediate emergency calls.",
    icon: <Droplets className="w-5 h-5 text-blue-400" />,
    video: "/demo-plumber.mp4",
    thumbnail: "/thumb-plumber.jpg"
  },
  {
    category: "Trade",
    industry: "Roofing & Exteriors",
    title: "The High-Ticket Closer",
    desc: "Trust-heavy design. Features 'Before/After' sliders, financing calculators, and hail damage report tools.",
    icon: <Hammer className="w-5 h-5 text-orange-400" />,
    video: "/demo-roofer.mp4",
    thumbnail: "/thumb-roofer.jpg"
  },
  {
    category: "Trade",
    industry: "Landscaping & Hardscape",
    title: "The Visual Portfolio",
    desc: "Gallery-first architecture. Lets the photos of patios, pools, and lawns do the selling. Clean and green.",
    icon: <Leaf className="w-5 h-5 text-green-400" />,
    video: "/demo-landscaping.mp4",
    thumbnail: "/thumb-landscaping.jpg"
  },

  // WHITE COLLAR
  {
    category: "Professional",
    industry: "Legal & Attorney",
    title: "The Legal Authority",
    desc: "Commanding and clean. Focuses on 'Case Results', practice areas, and direct attorney bios to build instant trust.",
    icon: <Scale className="w-5 h-5 text-indigo-400" />,
    video: "/demo-lawyer.mp4",
    thumbnail: "/thumb-lawyer.jpg"
  },
  {
    category: "Professional",
    industry: "Financial & CPA",
    title: "The Wealth Manager",
    desc: "Data-driven design. Features ROI charts, secure client portals, and 'Schedule Consultation' funnels.",
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    video: "/demo-finance.mp4",
    thumbnail: "/thumb-finance.jpg"
  },
  {
    category: "Professional",
    industry: "Medical & Dental",
    title: "The Practice Engine",
    desc: "Soft, clean, and calming. Integrated with booking engines (ZocDoc) and patient review aggregators.",
    icon: <Activity className="w-5 h-5 text-sky-200" />,
    video: "/demo-medical.mp4",
    thumbnail: "/thumb-medical.jpg"
  }
];

// --- COMPONENT: VIDEO CARD ---
function DemoCard({ demo }: { demo: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer for scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        
        // Auto-play on mobile when in view
        if (isMobile && videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
          } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isMobile]);

  // Desktop: Mouse hover to play
  const handleMouseEnter = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  };

  return (
    <div 
      ref={containerRef}
      className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-kc-accent/40 transition-all hover:-translate-y-2 duration-300 flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* --- THE SCREEN VISUAL --- */}
      <div className="h-80 w-full bg-black relative overflow-hidden">
        
        {/* VIDEO PLAYER with POSTER IMAGE */}
        <video
          ref={videoRef}
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-0"
          poster={demo.thumbnail}
        >
          <source src={demo.video} type="video/mp4" />
        </video>

        {/* Dark Overlay (Fades out on hover so video is bright) */}
        <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"></div>

        {/* 2. The "View Live" Overlay (Appears on Hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 z-20">
            <span className="px-5 py-2.5 bg-kc-accent text-white font-bold rounded-full text-xs flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform cursor-pointer shadow-xl">
                View Live Demo <ExternalLink className="w-3 h-3"/>
            </span>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="p-6 flex-grow flex flex-col bg-[#0A0A0A] relative z-20 border-t border-white/5">
        <div className="flex items-center gap-2 mb-2">
            <span className="p-1 rounded-lg bg-white/5 border border-white/10">
                {demo.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-kc-muted">{demo.industry}</span>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-kc-accent transition-colors">{demo.title}</h3>
        <p className="text-xs text-kc-muted leading-relaxed mb-4 flex-grow">
          {demo.desc}
        </p>
        
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-bold text-white/50">
                <Phone className="w-3 h-3" /> Mobile First
            </div>
            <span className="text-[10px] text-kc-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                See Details <ArrowRight className="w-3 h-3"/>
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
    "Medical & Dental": "/demo/medical"
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
