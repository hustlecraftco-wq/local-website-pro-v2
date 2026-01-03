"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- ICON COMPONENTS ---
type IconProps = React.SVGProps<SVGSVGElement>;

const ScaleIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>;
const ShieldIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const TrophyIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>;
const UserIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const BriefcaseIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const PhoneIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const ClockIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ArrowRightIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>;
const XIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const CheckCircleIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const MenuIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
const StarIcon = (props: IconProps) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
const DocumentIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const GavelIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>;
const HeartIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const BuildingIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;

// --- CASE RESULTS DATA ---
const CASE_RESULTS = [
  { amount: "$8.2M", type: "Verdict", case: "Catastrophic Injury - Construction Accident", year: "2024" },
  { amount: "$4.5M", type: "Settlement", case: "Medical Malpractice - Surgical Error", year: "2024" },
  { amount: "$3.1M", type: "Settlement", case: "Wrongful Death - Commercial Vehicle", year: "2023" },
  { amount: "Dismissed", type: "Defense", case: "Federal Criminal Charges", year: "2024" },
  { amount: "$2.8M", type: "Settlement", case: "Product Liability - Defective Equipment", year: "2023" },
  { amount: "$1.9M", type: "Verdict", case: "Personal Injury - Auto Accident", year: "2024" },
];

// --- ATTORNEY DATA ---
const ATTORNEYS = [
  {
    name: "Michael J. Roberts",
    title: "Managing Partner",
    experience: "25+ Years",
    education: ["Harvard Law School, J.D.", "Yale University, B.A."],
    specialties: ["Personal Injury", "Medical Malpractice", "Wrongful Death"],
    results: "$50M+ Recovered",
    barAdmissions: ["Missouri", "Kansas", "Federal Courts"]
  },
  {
    name: "Sarah Chen-Williams",
    title: "Senior Partner",
    experience: "18 Years",
    education: ["Stanford Law School, J.D.", "UC Berkeley, B.A."],
    specialties: ["Criminal Defense", "White Collar Crime", "Federal Appeals"],
    results: "300+ Cases Won",
    barAdmissions: ["Missouri", "Kansas", "U.S. Supreme Court"]
  },
  {
    name: "David M. Thompson",
    title: "Partner",
    experience: "15 Years",
    education: ["Georgetown Law, J.D.", "Notre Dame, B.A."],
    specialties: ["Business Litigation", "Employment Law", "Civil Rights"],
    results: "$25M+ Recovered",
    barAdmissions: ["Missouri", "Kansas", "Illinois"]
  },
];

// --- PRACTICE AREAS ---
const PRACTICE_AREAS = [
  { icon: HeartIcon, title: "Personal Injury", desc: "Auto accidents, slip & fall, catastrophic injuries", cases: "2,500+" },
  { icon: ShieldIcon, title: "Criminal Defense", desc: "DUI, drug crimes, violent offenses, federal charges", cases: "1,800+" },
  { icon: ScaleIcon, title: "Medical Malpractice", desc: "Surgical errors, misdiagnosis, birth injuries", cases: "400+" },
  { icon: BriefcaseIcon, title: "Business Litigation", desc: "Contract disputes, partnership issues, corporate fraud", cases: "600+" },
  { icon: HeartIcon, title: "Family Law", desc: "Divorce, custody, child support, prenuptials", cases: "900+" },
  { icon: BuildingIcon, title: "Real Estate Law", desc: "Commercial transactions, disputes, development", cases: "350+" },
];

// --- MAIN PAGE COMPONENT ---
export default function RobertsLawGroup() {
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [selectedAttorney, setSelectedAttorney] = useState<typeof ATTORNEYS[0] | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0B0F1A] text-slate-200 selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden font-sans">

      {/* Navigation */}
      <Navigation
        onConsultClick={() => setShowConsultModal(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero Section */}
      <HeroSection onConsultClick={() => setShowConsultModal(true)} />

      {/* Case Results */}
      <CaseResultsSection />

      {/* Practice Areas */}
      <PracticeAreasSection />

      {/* Attorney Bios */}
      <AttorneySection attorneys={ATTORNEYS} onSelectAttorney={setSelectedAttorney} />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA */}
      <FinalCTA onConsultClick={() => setShowConsultModal(true)} />

      {/* Footer */}
      <Footer />

      {/* Consultation Modal */}
      <AnimatePresence>
        {showConsultModal && (
          <ConsultationModal onClose={() => setShowConsultModal(false)} />
        )}
      </AnimatePresence>

      {/* Attorney Bio Modal */}
      <AnimatePresence>
        {selectedAttorney && (
          <AttorneyModal attorney={selectedAttorney} onClose={() => setSelectedAttorney(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

// --- NAVIGATION ---
function Navigation({
  onConsultClick,
  mobileMenuOpen,
  setMobileMenuOpen
}: {
  onConsultClick: () => void;
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
          scrolled ? "bg-[#0B0F1A]/95 backdrop-blur-xl border-b border-slate-800" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3" aria-label="Roberts Law Group Home">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-lg">
              <ScaleIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-white text-lg md:text-xl tracking-tight">Roberts Law</div>
              <div className="hidden md:block text-[10px] text-amber-400/70 uppercase tracking-[0.2em]">Trial Attorneys</div>
            </div>
          </a>

          <div className="hidden lg:flex gap-8 text-sm font-semibold text-slate-400">
            <a href="#results" className="hover:text-amber-400 transition-colors">Case Results</a>
            <a href="#practice" className="hover:text-amber-400 transition-colors">Practice Areas</a>
            <a href="#attorneys" className="hover:text-amber-400 transition-colors">Attorneys</a>
            <a href="#testimonials" className="hover:text-amber-400 transition-colors">Testimonials</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+18165551234" className="hidden md:flex items-center gap-2 text-amber-400 font-bold text-sm transition-colors" aria-label="Call now">
              <PhoneIcon className="w-4 h-4" />
              (816) 555-LAW1
            </a>

            <button
              onClick={onConsultClick}
              className="bg-amber-600 hover:bg-amber-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-amber-900/30 transition-all"
            >
              <span className="hidden sm:inline">Free Consultation</span>
              <span className="sm:hidden">Consult</span>
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
            className="fixed top-16 left-0 right-0 bg-[#0B0F1A]/98 backdrop-blur-xl z-40 border-b border-slate-800 lg:hidden"
          >
            <div className="p-6 space-y-4">
              <a href="#results" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Case Results</a>
              <a href="#practice" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Practice Areas</a>
              <a href="#attorneys" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Attorneys</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Testimonials</a>
              <a href="tel:+18165551234" className="flex items-center gap-2 text-amber-400 font-bold">
                <PhoneIcon className="w-5 h-5" />
                (816) 555-LAW1
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- HERO SECTION ---
function HeroSection({ onConsultClick }: { onConsultClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0B0F1A] to-[#0B0F1A]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-amber-500 to-transparent" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em]">
                Over $100 Million Recovered
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
              When Everything
              <br />
              Is On The Line.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                We Fight.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Kansas City's premier trial attorneys. Aggressive representation in personal injury, criminal defense, and complex litigation. No fee unless we win.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onConsultClick}
                className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-2xl shadow-amber-900/40 flex items-center justify-center gap-2 transition-all"
              >
                <PhoneIcon className="w-5 h-5" />
                Free Case Evaluation
              </button>

              <a
                href="#results"
                className="px-8 py-4 rounded-lg border-2 border-slate-700 hover:border-amber-500 text-slate-300 hover:text-white font-bold transition-all text-center"
              >
                View Case Results
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-wrap gap-8">
              {[
                { label: "Years Combined Experience", value: "50+" },
                { label: "Cases Won", value: "5,000+" },
                { label: "Client Satisfaction", value: "99%" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 24/7 Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-amber-600 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <ClockIcon className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Available 24/7 for Emergencies</span>
          </div>
          <span className="hidden sm:block text-white/50">|</span>
          <a href="tel:+18165551234" className="text-white font-bold text-lg hover:underline">
            Call Now: (816) 555-LAW1
          </a>
        </div>
      </div>
    </section>
  );
}

// --- CASE RESULTS SECTION ---
function CaseResultsSection() {
  return (
    <section id="results" className="py-16 md:py-24 px-4 md:px-6 bg-[#080B14]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
            <TrophyIcon className="w-4 h-4" />
            Proven Results
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Results That Speak
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Our track record of success demonstrates our commitment to maximum recovery for every client.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_RESULTS.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-amber-500/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`text-3xl md:text-4xl font-black ${result.type === "Dismissed" ? "text-emerald-400" : "text-amber-400"}`}>
                  {result.amount}
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase bg-slate-800 px-2 py-1 rounded">
                  {result.type}
                </span>
              </div>
              <p className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                {result.case}
              </p>
              <p className="text-xs text-slate-500">{result.year}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 mt-8">
          * Past results do not guarantee future outcomes. Each case is unique.
        </p>
      </div>
    </section>
  );
}

// --- PRACTICE AREAS SECTION ---
function PracticeAreasSection() {
  return (
    <section id="practice" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Practice Areas
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive legal expertise across multiple disciplines
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 hover:border-amber-500/30 transition-all group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                  <area.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3">{area.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
                    <DocumentIcon className="w-4 h-4" />
                    {area.cases} Cases Handled
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- ATTORNEY SECTION ---
function AttorneySection({
  attorneys,
  onSelectAttorney
}: {
  attorneys: typeof ATTORNEYS;
  onSelectAttorney: (attorney: typeof ATTORNEYS[0]) => void;
}) {
  return (
    <section id="attorneys" className="py-16 md:py-24 px-4 md:px-6 bg-[#080B14]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Meet Our Attorneys
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Elite trial lawyers with decades of combined experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {attorneys.map((attorney, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onSelectAttorney(attorney)}
              className="group cursor-pointer"
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all">
                {/* Photo Placeholder */}
                <div className="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <UserIcon className="w-24 h-24 text-slate-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-transparent to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-amber-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold">View Full Bio</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {attorney.name}
                  </h3>
                  <p className="text-amber-400 font-semibold text-sm mb-3">{attorney.title}</p>

                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span>{attorney.experience}</span>
                    <span className="text-slate-600">|</span>
                    <span>{attorney.results}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {attorney.specialties.slice(0, 2).map((specialty, j) => (
                      <span key={j} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- WHY CHOOSE US ---
function WhyChooseUsSection() {
  const reasons = [
    { icon: TrophyIcon, title: "Proven Track Record", desc: "Over $100 million recovered for our clients with a 99% success rate" },
    { icon: ShieldIcon, title: "No Fee Unless We Win", desc: "Contingency fee basis means you pay nothing unless we secure compensation" },
    { icon: ClockIcon, title: "Available 24/7", desc: "Emergency situations don't wait. Neither do we. Call anytime." },
    { icon: GavelIcon, title: "Trial Ready", desc: "Insurance companies know we will go to trial. That gets results." },
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
            Why Choose Roberts Law
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-sm text-slate-400">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- TESTIMONIALS SECTION ---
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "After my accident, I didn't know where to turn. Roberts Law fought for me when the insurance company wouldn't. They got me 3x what was originally offered.",
      name: "James Mitchell",
      case: "Auto Accident - $1.2M Settlement",
      rating: 5
    },
    {
      quote: "When I was facing federal charges, Sarah Chen-Williams and her team were incredible. My case was dismissed, and I got my life back.",
      name: "Anonymous Client",
      case: "Federal Criminal - Charges Dismissed",
      rating: 5
    },
    {
      quote: "Professional, compassionate, and relentless. They kept me informed every step of the way and delivered beyond my expectations.",
      name: "Maria Rodriguez",
      case: "Medical Malpractice - $2.1M Verdict",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-6 bg-[#080B14]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Client Testimonials
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} className="w-6 h-6 text-amber-400" />
            ))}
          </div>
          <p className="text-slate-400">5.0 from 200+ client reviews</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
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
                <div className="text-xs text-amber-400">{t.case}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FINAL CTA ---
function FinalCTA({ onConsultClick }: { onConsultClick: () => void }) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Don't Wait. Act Now.
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            The clock is ticking on your case. Free consultation. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onConsultClick}
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <DocumentIcon className="w-5 h-5" />
              Free Case Evaluation
            </button>
            <a
              href="tel:+18165551234"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              (816) 555-LAW1
            </a>
          </div>
          <p className="text-sm text-white/70 mt-6">Available 24/7 for emergencies</p>
        </div>
      </motion.div>
    </section>
  );
}

// --- FOOTER ---
function Footer() {
  return (
    <footer className="relative py-12 px-4 md:px-6 border-t border-slate-800 bg-[#080B14]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <ScaleIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">Roberts Law Group</div>
                <div className="text-xs text-slate-500">Trial Attorneys</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Kansas City's premier trial law firm. Aggressive representation in personal injury, criminal defense, and complex litigation since 1998.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Practice Areas</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Personal Injury</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Criminal Defense</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Medical Malpractice</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Business Litigation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-amber-400" />
                <a href="tel:+18165551234" className="hover:text-white">(816) 555-LAW1</a>
              </li>
              <li className="flex items-center gap-2">
                <BuildingIcon className="w-4 h-4 text-amber-400" />
                Kansas City, MO
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            © 2026 Roberts Law Group. All rights reserved.
          </div>
          <div className="text-sm text-slate-500">
            Built by <a href="https://localwebsitepro.com" className="text-amber-400 hover:text-amber-300 transition-colors font-semibold">LocalWebsitePro</a>
          </div>
        </div>

        <div className="mt-8 text-[10px] text-slate-600 text-center">
          Attorney Advertising. Prior results do not guarantee a similar outcome. Free consultation offer applies to personal injury and criminal defense cases only.
        </div>
      </div>
    </footer>
  );
}

// --- CONSULTATION MODAL ---
function ConsultationModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", caseType: "", description: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Legal consultation lead:", formData);
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
        className="w-full max-w-lg bg-[#0B0F1A] border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">Free Case Evaluation</h3>
            <p className="text-sm text-white/80">Confidential. No obligation.</p>
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
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
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
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
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
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-type" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Type of Case *</label>
                <select
                  id="modal-type"
                  required
                  value={formData.caseType}
                  onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="">Select case type...</option>
                  <option value="personal-injury">Personal Injury</option>
                  <option value="criminal-defense">Criminal Defense</option>
                  <option value="medical-malpractice">Medical Malpractice</option>
                  <option value="family-law">Family Law</option>
                  <option value="business">Business Litigation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-desc" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Brief Description</label>
                <textarea
                  id="modal-desc"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500 resize-none"
                  placeholder="Tell us briefly what happened..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
              >
                <ScaleIcon className="w-5 h-5" />
                Request Free Consultation
              </button>

              <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                <ShieldIcon className="w-3 h-3 text-amber-400" />
                100% Confidential. Attorney-Client Privilege Applies.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">We'll Be In Touch Soon</h4>
              <p className="text-slate-400 mb-6">
                An attorney will review your case and contact you within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold transition-all"
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

// --- ATTORNEY BIO MODAL ---
function AttorneyModal({ attorney, onClose }: { attorney: typeof ATTORNEYS[0]; onClose: () => void }) {
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
        className="w-full max-w-2xl bg-[#0B0F1A] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 flex justify-between items-start">
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-slate-700 rounded-xl flex items-center justify-center">
              <UserIcon className="w-12 h-12 text-slate-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{attorney.name}</h3>
              <p className="text-amber-400 font-semibold">{attorney.title}</p>
              <p className="text-slate-400 text-sm mt-1">{attorney.experience} Experience</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white" aria-label="Close modal">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Results */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
            <div className="text-2xl font-black text-amber-400">{attorney.results}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Career Results</div>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Practice Areas</h4>
            <div className="flex flex-wrap gap-2">
              {attorney.specialties.map((specialty, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-800 text-white text-sm rounded-lg">
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Education</h4>
            <ul className="space-y-2">
              {attorney.education.map((edu, i) => (
                <li key={i} className="text-slate-300">{edu}</li>
              ))}
            </ul>
          </div>

          {/* Bar Admissions */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Bar Admissions</h4>
            <div className="flex flex-wrap gap-2">
              {attorney.barAdmissions.map((bar, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-400 text-sm rounded-lg">
                  {bar}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/50">
          <a
            href="tel:+18165551234"
            className="w-full bg-amber-600 hover:bg-amber-500 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
          >
            <PhoneIcon className="w-5 h-5" />
            Schedule Consultation with {attorney.name.split(' ')[0]}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
