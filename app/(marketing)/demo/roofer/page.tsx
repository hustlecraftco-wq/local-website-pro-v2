"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

// --- ICON COMPONENTS ---
type IconProps = React.SVGProps<SVGSVGElement>;

const ShieldCheckIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const HomeIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const CloudIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>;
const PhoneIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const StarIcon = (props: IconProps) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
const CameraIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const CalculatorIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const CheckCircleIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ArrowRightIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>;
const XIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const ClipboardIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
const CalendarIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const MenuIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;

// --- MAIN PAGE COMPONENT ---
export default function ApexRoofingPro() {
  const [showInspectionModal, setShowInspectionModal] = useState(false);
  const [showFinancingModal, setShowFinancingModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden font-sans">

      {/* Navigation */}
      <Navigation
        onInspectionClick={() => setShowInspectionModal(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero Section */}
      <HeroSection onInspectionClick={() => setShowInspectionModal(true)} />

      {/* Trust Bar */}
      <TrustBar />

      {/* Before/After Slider Section */}
      <BeforeAfterSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Hail Damage Report Tool */}
      <HailDamageSection />

      {/* Financing Calculator */}
      <FinancingSection onOpenCalculator={() => setShowFinancingModal(true)} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Process Timeline */}
      <ProcessSection />

      {/* Final CTA */}
      <FinalCTA onInspectionClick={() => setShowInspectionModal(true)} />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AnimatePresence>
        {showInspectionModal && (
          <InspectionModal onClose={() => setShowInspectionModal(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFinancingModal && (
          <FinancingCalculatorModal onClose={() => setShowFinancingModal(false)} />
        )}
      </AnimatePresence>
    </main>
  );
}

// --- NAVIGATION ---
function Navigation({
  onInspectionClick,
  mobileMenuOpen,
  setMobileMenuOpen
}: {
  onInspectionClick: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 md:gap-3" aria-label="Apex Roofing Home">
            <div className="w-9 h-9 md:w-11 md:h-11 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-900/30">
              <HomeIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-white text-base md:text-xl tracking-tight">Apex Roofing</div>
              <div className="hidden md:block text-[10px] text-slate-500 font-mono tracking-widest">STORM DAMAGE EXPERTS</div>
            </div>
          </a>

          <div className="hidden lg:flex gap-8 text-sm font-semibold text-slate-400">
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-amber-400 transition-colors">Before/After</a>
            <a href="#financing" className="hover:text-amber-400 transition-colors">Financing</a>
            <a href="#process" className="hover:text-amber-400 transition-colors">Our Process</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+18165551234" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors" aria-label="Call us">
              <PhoneIcon className="w-4 h-4" />
              (816) 555-ROOF
            </a>

            <button
              onClick={onInspectionClick}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-amber-900/30 transition-all"
            >
              <span className="hidden sm:inline">Free Inspection</span>
              <span className="sm:hidden">Inspect</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 bg-slate-950/98 backdrop-blur-xl z-40 border-b border-slate-800 lg:hidden"
          >
            <div className="p-6 space-y-4">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Services</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Before/After</a>
              <a href="#financing" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Financing</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Our Process</a>
              <a href="tel:+18165551234" className="flex items-center gap-2 text-amber-400 font-bold">
                <PhoneIcon className="w-5 h-5" />
                (816) 555-ROOF
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- HERO SECTION ---
function HeroSection({ onInspectionClick }: { onInspectionClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <CloudIcon className="w-4 h-4" />
              24/7 Storm Response Team
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
              Protect Your Home
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
                From Every Storm
              </span>
            </h1>

            <p className="text-base md:text-xl text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              GAF Master Elite certified. Insurance claim specialists. Free drone inspections within 24 hours of your call.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onInspectionClick}
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-amber-900/40 flex items-center justify-center gap-2 transition-all"
              >
                <CameraIcon className="w-5 h-5" />
                Free Drone Inspection
              </button>

              <a
                href="#gallery"
                className="px-8 py-4 rounded-xl border-2 border-slate-700 hover:border-amber-500 text-slate-300 hover:text-white font-bold transition-all backdrop-blur-sm text-center"
              >
                See Our Work
              </a>
            </div>
          </motion.div>

          {/* Right: Live Stats Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/10 blur-3xl -z-10" />
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Live Operations</div>
                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Active
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <StatCard label="Jobs This Year" value="847" trend="+12%" />
                  <StatCard label="5-Star Reviews" value="2,341" trend="+8%" />
                  <StatCard label="Claims Approved" value="98.2%" trend="Industry Leading" />
                  <StatCard label="Avg Response" value="4.2hrs" trend="Same Day" />
                </div>

                <div className="bg-slate-950 rounded-xl p-4 border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 mb-2">CURRENT WEATHER RISK</div>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 font-bold">Moderate - Hail Possible</span>
                    <span className="text-xs text-slate-500">KC Metro</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-amber-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

// --- STAT CARD ---
function StatCard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="bg-slate-950/50 backdrop-blur-sm rounded-xl p-4 border border-slate-800/50">
      <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">{label}</div>
      <div className="text-2xl font-mono font-bold text-white mb-1">{value}</div>
      <div className="text-[10px] text-emerald-400">{trend}</div>
    </div>
  );
}

// --- TRUST BAR ---
function TrustBar() {
  const certifications = [
    { label: "GAF Master Elite", value: "Top 2% Nationwide" },
    { label: "BBB Rating", value: "A+" },
    { label: "Years in KC", value: "15+" },
    { label: "Warranty", value: "Lifetime" },
  ];

  return (
    <div className="relative bg-slate-900/50 backdrop-blur-xl border-y border-slate-800/50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <ShieldCheckIcon className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <div className="text-xl md:text-2xl font-bold text-white mb-1">{cert.value}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">{cert.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- BEFORE/AFTER SLIDER SECTION ---
function BeforeAfterSection() {
  return (
    <section id="gallery" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
            <CameraIcon className="w-4 h-4" />
            Transformation Gallery
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            See The Difference
          </h2>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto">
            Drag the slider to reveal dramatic before and after transformations from recent projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <BeforeAfterSlider
            beforeLabel="Storm Damage"
            afterLabel="Complete Restoration"
            projectName="Johnson Residence - Overland Park"
          />
          <BeforeAfterSlider
            beforeLabel="Aging Shingles"
            afterLabel="New GAF System"
            projectName="Smith Home - Leawood"
          />
        </div>
      </div>
    </section>
  );
}

// --- BEFORE/AFTER SLIDER COMPONENT ---
function BeforeAfterSlider({
  beforeLabel,
  afterLabel,
  projectName
}: {
  beforeLabel: string;
  afterLabel: string;
  projectName: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div
        ref={containerRef}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700 cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Before Image (Background) */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-slate-800 flex items-center justify-center">
          <div className="text-center">
            <CloudIcon className="w-16 h-16 text-red-400/50 mx-auto mb-2" />
            <span className="text-red-400/70 font-mono text-sm">[Before Photo]</span>
          </div>
        </div>

        {/* After Image (Overlay with clip) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-800 flex items-center justify-center"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="text-center">
            <HomeIcon className="w-16 h-16 text-emerald-400/50 mx-auto mb-2" />
            <span className="text-emerald-400/70 font-mono text-sm">[After Photo]</span>
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-slate-400 rounded" />
              <div className="w-0.5 h-4 bg-slate-400 rounded" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
          {afterLabel}
        </div>
      </div>

      <p className="text-center text-sm text-slate-400 mt-3 font-mono">{projectName}</p>
    </motion.div>
  );
}

// --- SERVICES SECTION ---
function ServicesSection() {
  const services = [
    {
      icon: HomeIcon,
      title: "Complete Roof Replacement",
      desc: "Full tear-off and installation with GAF premium materials and lifetime warranty.",
      color: "amber"
    },
    {
      icon: CloudIcon,
      title: "Storm Damage Repair",
      desc: "24/7 emergency response. We handle the entire insurance claim process.",
      color: "blue"
    },
    {
      icon: ShieldCheckIcon,
      title: "Free Inspections",
      desc: "Drone and ladder inspections with detailed photo reports. No obligation.",
      color: "emerald"
    },
    {
      icon: CalculatorIcon,
      title: "Financing Available",
      desc: "0% APR options available. Payments as low as $89/month.",
      color: "purple"
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
  };

  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive roofing solutions backed by industry-leading warranties.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-slate-900/50 backdrop-blur-sm border ${colors.border} rounded-2xl p-6 hover:bg-slate-800/50 transition-all group`}
              >
                <div className={`p-3 ${colors.bg} rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-slate-400">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- HAIL DAMAGE REPORT SECTION ---
function HailDamageSection() {
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address) setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-0" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-500/20 rounded-xl">
                <ClipboardIcon className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white">
                  Free Hail Damage Report
                </h2>
                <p className="text-slate-400">Check if your address was affected by recent storms</p>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="address" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Enter Your Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Main St, Kansas City, MO"
                    className="w-full px-4 py-4 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <CloudIcon className="w-5 h-5" />
                  Check Storm History
                </button>

                <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                  <ShieldCheckIcon className="w-4 h-4 text-emerald-400" />
                  Your information is secure and never shared
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CloudIcon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Storm Activity Detected!</h3>
                <p className="text-slate-400 mb-4">
                  Your area experienced 3 significant hail events in the past 12 months. You may have undiscovered damage.
                </p>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6">
                  <p className="text-amber-400 font-bold">Recommended: Schedule a free drone inspection</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Check another address
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- FINANCING SECTION ---
function FinancingSection({ onOpenCalculator }: { onOpenCalculator: () => void }) {
  return (
    <section id="financing" className="py-16 md:py-24 px-4 md:px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <CalculatorIcon className="w-4 h-4" />
              Flexible Payment Options
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Affordable Financing
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                For Every Budget
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Don't let cost delay protecting your home. We offer flexible financing options including 0% APR for qualified buyers.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="text-2xl font-bold text-white mb-1">0%</div>
                <div className="text-xs text-slate-400">APR Available</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="text-2xl font-bold text-white mb-1">$89</div>
                <div className="text-xs text-slate-400">Starting Monthly</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="text-2xl font-bold text-white mb-1">60sec</div>
                <div className="text-xs text-slate-400">Pre-Approval</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <div className="text-2xl font-bold text-white mb-1">No</div>
                <div className="text-xs text-slate-400">Credit Impact</div>
              </div>
            </div>

            <button
              onClick={onOpenCalculator}
              className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-emerald-900/30 flex items-center gap-2 transition-all"
            >
              <CalculatorIcon className="w-5 h-5" />
              Calculate My Payment
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Example Payment</div>
                <div className="text-5xl font-black text-white">$149<span className="text-lg text-slate-400">/mo</span></div>
                <div className="text-sm text-slate-400 mt-2">For a $15,000 roof • 60 months • 9.99% APR</div>
              </div>

              <div className="space-y-3">
                {["No money down", "Fast approval process", "Multiple lender options", "Deferred payment available"].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- TESTIMONIALS SECTION ---
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "They handled our entire insurance claim after the hail storm. Zero stress, and we got a brand new roof at no out-of-pocket cost.",
      name: "Mike Johnson",
      location: "Overland Park, KS",
      rating: 5
    },
    {
      quote: "The drone inspection was incredible. They found damage I never would have seen. Professional from start to finish.",
      name: "Sarah Williams",
      location: "Leawood, KS",
      rating: 5
    },
    {
      quote: "Best roofing company in KC. Period. Fair pricing, quality work, and they actually showed up when they said they would.",
      name: "David Chen",
      location: "Kansas City, MO",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} className="w-6 h-6 text-amber-400" />
            ))}
          </div>
          <p className="text-slate-400">4.9/5 from 2,341 verified reviews</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-slate-300 leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div>
                <div className="font-bold text-white">{t.name}</div>
                <div className="text-xs text-slate-400">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- PROCESS SECTION ---
function ProcessSection() {
  const steps = [
    { step: "01", title: "Free Inspection", desc: "Drone + ladder inspection with detailed photo report within 24 hours.", time: "Day 1" },
    { step: "02", title: "Insurance Claim", desc: "We handle all paperwork and communicate directly with your adjuster.", time: "Days 2-5" },
    { step: "03", title: "Material Selection", desc: "Choose from premium GAF shingles in our mobile showroom.", time: "Day 6" },
    { step: "04", title: "Installation", desc: "Professional installation by certified crews. Average job: 1-2 days.", time: "Days 7-9" },
    { step: "05", title: "Final Walkthrough", desc: "Comprehensive quality check with full documentation.", time: "Day 10" },
  ];

  return (
    <section id="process" className="py-16 md:py-24 px-4 md:px-6 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Our Proven Process
          </h2>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto">
            From inspection to installation in as little as 10 days. We handle everything.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-[40px] top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-amber-500/50 to-transparent" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="hidden md:flex w-20 h-20 bg-slate-900 border-2 border-amber-500/50 rounded-2xl items-center justify-center shrink-0">
                  <span className="text-2xl font-black text-amber-400">{step.step}</span>
                </div>
                <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-1 rounded">{step.time}</span>
                  </div>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- FINAL CTA ---
function FinalCTA({ onInspectionClick }: { onInspectionClick: () => void }) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Don't Wait for the Next Storm
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Schedule your free drone inspection today. 24-hour response guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onInspectionClick}
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <CalendarIcon className="w-5 h-5" />
              Book Free Inspection
            </button>
            <a
              href="tel:+18165551234"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              (816) 555-ROOF
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// --- FOOTER ---
function Footer() {
  return (
    <footer className="relative py-12 px-4 md:px-6 border-t border-slate-800/50 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <HomeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">Apex Roofing</div>
                <div className="text-xs text-slate-500 font-mono">GAF Master Elite Certified</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Protecting Kansas City homes since 2009. Specializing in storm damage restoration and insurance claim assistance.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Roof Replacement</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Storm Damage Repair</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Free Inspections</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Financing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-amber-400" />
                <a href="tel:+18165551234" className="hover:text-white">(816) 555-ROOF</a>
              </li>
              <li className="flex items-center gap-2">
                <HomeIcon className="w-4 h-4 text-amber-400" />
                Kansas City, MO & KS
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            © 2026 Apex Roofing. All rights reserved.
          </div>
          <div className="text-sm text-slate-500">
            Built by <a href="https://localwebsitepro.com" className="text-amber-400 hover:text-amber-300 transition-colors font-semibold">LocalWebsitePro</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- INSPECTION MODAL ---
function InspectionModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "", damage: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inspection lead:", formData);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-slate-900 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">Schedule Free Inspection</h3>
            <p className="text-sm text-white/80">24-hour response guaranteed</p>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white" aria-label="Close modal">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name *</label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-500"
                  placeholder="John Smith"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email *</label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-500"
                    placeholder="john@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone *</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-address" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Property Address *</label>
                <input
                  id="modal-address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-500"
                  placeholder="123 Main St, Kansas City, MO"
                />
              </div>

              <div>
                <label htmlFor="modal-damage" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Type of Damage</label>
                <select
                  id="modal-damage"
                  value={formData.damage}
                  onChange={(e) => setFormData({ ...formData, damage: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="">Select type...</option>
                  <option value="hail">Hail Damage</option>
                  <option value="wind">Wind Damage</option>
                  <option value="age">Aging/Wear</option>
                  <option value="leak">Active Leak</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                <CameraIcon className="w-5 h-5" />
                Request Free Inspection
              </button>

              <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                <CheckCircleIcon className="w-3 h-3 text-emerald-400" />
                No obligation. No pressure.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">You're All Set!</h4>
              <p className="text-slate-400 mb-6">
                A storm damage specialist will call you within 2 hours to schedule your free inspection.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all"
              >
                Close
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- FINANCING CALCULATOR MODAL ---
function FinancingCalculatorModal({ onClose }: { onClose: () => void }) {
  const [roofCost, setRoofCost] = useState(15000);
  const [term, setTerm] = useState(60);
  const [apr, setApr] = useState(9.99);

  const monthlyPayment = (() => {
    const monthlyRate = apr / 100 / 12;
    if (monthlyRate === 0) return roofCost / term;
    return (roofCost * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
  })();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-slate-900 border border-emerald-500/30 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="bg-gradient-to-r from-emerald-500 to-cyan-600 p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">Financing Calculator</h3>
            <p className="text-sm text-white/80">See your estimated monthly payment</p>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white" aria-label="Close calculator">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Roof Cost: ${roofCost.toLocaleString()}
            </label>
            <input
              type="range"
              min={5000}
              max={50000}
              step={500}
              value={roofCost}
              onChange={(e) => setRoofCost(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>$5,000</span>
              <span>$50,000</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Loan Term: {term} months
            </label>
            <div className="flex gap-2">
              {[36, 48, 60, 72, 84].map((t) => (
                <button
                  key={t}
                  onClick={() => setTerm(t)}
                  className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
                    term === t
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                  }`}
                >
                  {t}mo
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              APR: {apr}%
            </label>
            <div className="flex gap-2">
              {[0, 5.99, 9.99, 12.99].map((a) => (
                <button
                  key={a}
                  onClick={() => setApr(a)}
                  className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${
                    apr === a
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                  }`}
                >
                  {a === 0 ? "0% Promo" : `${a}%`}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-center">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
              Estimated Monthly Payment
            </div>
            <div className="text-5xl font-black text-white mb-2">
              ${monthlyPayment.toFixed(0)}
              <span className="text-lg text-slate-400">/mo</span>
            </div>
            <div className="text-sm text-slate-400">
              Total: ${(monthlyPayment * term).toFixed(0)} over {term} months
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white py-4 rounded-xl font-bold transition-all"
          >
            Apply for Pre-Approval
          </button>

          <p className="text-center text-xs text-slate-500">
            *Rates and terms subject to credit approval. This is an estimate only.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
