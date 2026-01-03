"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- ICON COMPONENTS ---
type IconProps = React.SVGProps<SVGSVGElement>;

const TreeIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const LeafIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>;
const SunIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const DropletIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-4.97 5.97-7 9.97-7 13a7 7 0 1014 0c0-3.03-2.03-7.03-7-13z" /></svg>;
const CameraIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const StarIcon = (props: IconProps) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
const PhoneIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const ArrowRightIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>;
const XIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const CheckCircleIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const MenuIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
const ChevronLeftIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const ChevronRightIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
const GridIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
const PlayIcon = (props: IconProps) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>;
const AwardIcon = (props: IconProps) => <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>;

// --- PROJECT DATA ---
const PROJECTS = [
  { id: 1, title: "Modern Zen Retreat", category: "full-yard", location: "Mission Hills, KS", year: "2024", featured: true, color: "emerald" },
  { id: 2, title: "Infinity Pool Paradise", category: "pools", location: "Leawood, KS", year: "2024", featured: true, color: "cyan" },
  { id: 3, title: "Tuscan Garden Escape", category: "gardens", location: "Prairie Village, KS", year: "2023", featured: true, color: "amber" },
  { id: 4, title: "Outdoor Living Suite", category: "patios", location: "Overland Park, KS", year: "2024", featured: false, color: "rose" },
  { id: 5, title: "Japanese Water Garden", category: "gardens", location: "Fairway, KS", year: "2023", featured: false, color: "emerald" },
  { id: 6, title: "Resort-Style Pool", category: "pools", location: "Olathe, KS", year: "2024", featured: false, color: "cyan" },
  { id: 7, title: "Fire Pit Lounge", category: "patios", location: "Brookside, MO", year: "2024", featured: false, color: "amber" },
  { id: 8, title: "Complete Estate Transform", category: "full-yard", location: "Mission Hills, KS", year: "2023", featured: false, color: "purple" },
  { id: 9, title: "Native Prairie Garden", category: "gardens", location: "Shawnee, KS", year: "2024", featured: false, color: "emerald" },
  { id: 10, title: "Entertainment Deck", category: "patios", location: "Westwood, KS", year: "2023", featured: false, color: "rose" },
  { id: 11, title: "Lap Pool + Spa", category: "pools", location: "Lake Quivira, KS", year: "2024", featured: false, color: "cyan" },
  { id: 12, title: "Mediterranean Courtyard", category: "full-yard", location: "Leawood, KS", year: "2023", featured: false, color: "amber" },
];

const CATEGORIES = [
  { id: "all", label: "All Projects", count: PROJECTS.length },
  { id: "full-yard", label: "Full Transformations", count: PROJECTS.filter(p => p.category === "full-yard").length },
  { id: "pools", label: "Pools & Spas", count: PROJECTS.filter(p => p.category === "pools").length },
  { id: "patios", label: "Patios & Hardscape", count: PROJECTS.filter(p => p.category === "patios").length },
  { id: "gardens", label: "Gardens & Planting", count: PROJECTS.filter(p => p.category === "gardens").length },
];

// --- MAIN PAGE COMPONENT ---
export default function VerdantLandscaping() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxProject, setLightboxProject] = useState<typeof PROJECTS[0] | null>(null);
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProjects = selectedCategory === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#0C1810] text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden font-sans">

      {/* Navigation */}
      <Navigation
        onConsultClick={() => setShowConsultModal(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero - Visual First */}
      <HeroSection onConsultClick={() => setShowConsultModal(true)} />

      {/* Featured Projects Showcase */}
      <FeaturedShowcase
        projects={PROJECTS.filter(p => p.featured)}
        onProjectClick={setLightboxProject}
      />

      {/* Full Gallery */}
      <GallerySection
        projects={filteredProjects}
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onProjectClick={setLightboxProject}
      />

      {/* Before/After Transformations */}
      <BeforeAfterSection />

      {/* Services Grid */}
      <ServicesSection />

      {/* Design Process */}
      <ProcessSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Awards & Recognition */}
      <AwardsSection />

      {/* Final CTA */}
      <FinalCTA onConsultClick={() => setShowConsultModal(true)} />

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxProject && (
          <ProjectLightbox
            project={lightboxProject}
            projects={filteredProjects}
            onClose={() => setLightboxProject(null)}
            onNavigate={setLightboxProject}
          />
        )}
      </AnimatePresence>

      {/* Consultation Modal */}
      <AnimatePresence>
        {showConsultModal && (
          <ConsultationModal onClose={() => setShowConsultModal(false)} />
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
          scrolled ? "bg-[#0C1810]/95 backdrop-blur-xl border-b border-emerald-900/30" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 md:gap-3" aria-label="Verdant Landscapes Home">
            <div className="w-9 h-9 md:w-11 md:h-11 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/30">
              <LeafIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-white text-base md:text-xl tracking-tight">Verdant</div>
              <div className="hidden md:block text-[10px] text-emerald-400/70 font-mono tracking-widest">LANDSCAPE DESIGN</div>
            </div>
          </a>

          <div className="hidden lg:flex gap-8 text-sm font-semibold text-slate-400">
            <a href="#gallery" className="hover:text-emerald-400 transition-colors">Portfolio</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
            <a href="#process" className="hover:text-emerald-400 transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-emerald-400 transition-colors">Reviews</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+18165551234" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors" aria-label="Call us">
              <PhoneIcon className="w-4 h-4" />
              (816) 555-1234
            </a>

            <button
              onClick={onConsultClick}
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-emerald-900/30 transition-all"
            >
              <span className="hidden sm:inline">Free Design</span>
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
            className="fixed top-16 left-0 right-0 bg-[#0C1810]/98 backdrop-blur-xl z-40 border-b border-emerald-900/30 lg:hidden"
          >
            <div className="p-6 space-y-4">
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Portfolio</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Services</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Process</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-lg font-bold text-white">Reviews</a>
              <a href="tel:+18165551234" className="flex items-center gap-2 text-emerald-400 font-bold">
                <PhoneIcon className="w-5 h-5" />
                (816) 555-1234
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- HERO SECTION (Visual First) ---
function HeroSection({ onConsultClick }: { onConsultClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-[#0C1810] to-[#0C1810]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
            <AwardIcon className="w-4 h-4" />
            2024 Best of Houzz Design
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-6">
            Let The Work
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400">
              Speak For Itself
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Award-winning landscape design in Kansas City. Pools, patios, gardens, and complete outdoor transformations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#gallery"
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <GridIcon className="w-5 h-5" />
              View Portfolio
            </a>
            <button
              onClick={onConsultClick}
              className="px-8 py-4 rounded-xl border-2 border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-white font-bold transition-all backdrop-blur-sm"
            >
              Free Design Consultation
            </button>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "15", label: "Years Experience" },
            { value: "4.9", label: "Google Rating" },
            { value: "12", label: "Design Awards" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-emerald-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

// --- FEATURED SHOWCASE ---
function FeaturedShowcase({
  projects,
  onProjectClick
}: {
  projects: typeof PROJECTS;
  onProjectClick: (project: typeof PROJECTS[0]) => void;
}) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#0A1410]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
            <StarIcon className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Signature Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onProjectClick(project)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Placeholder for image */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}-900/60 to-slate-900`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <TreeIcon className={`w-24 h-24 text-${project.color}-500/30`} />
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full mb-3 border border-emerald-500/30">
                    Featured
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-400">{project.location}</p>
                </div>

                {/* Expand icon */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <CameraIcon className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- GALLERY SECTION ---
function GallerySection({
  projects,
  categories,
  selectedCategory,
  onCategoryChange,
  onProjectClick
}: {
  projects: typeof PROJECTS;
  categories: typeof CATEGORIES;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onProjectClick: (project: typeof PROJECTS[0]) => void;
}) {
  return (
    <section id="gallery" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Complete Portfolio
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Browse our collection of outdoor transformations. Click any project to explore.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm transition-all ${
                selectedCategory === cat.id
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-900/30"
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 border border-slate-700"
              }`}
            >
              {cat.label}
              <span className="ml-2 text-xs opacity-70">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => onProjectClick(project)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                {/* Placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}-900/50 to-slate-800`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LeafIcon className={`w-12 h-12 text-${project.color}-500/30`} />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-4">
                    <CameraIcon className="w-8 h-8 text-white mx-auto mb-2" />
                    <h3 className="text-white font-bold text-sm">{project.title}</h3>
                    <p className="text-slate-400 text-xs">{project.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// --- BEFORE/AFTER SECTION ---
function BeforeAfterSection() {
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

  useEffect(() => {
    const handleMouseUp = () => { isDragging.current = false; };
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#0A1410]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <PlayIcon className="w-4 h-4" />
            Transformations
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Dramatic Results
          </h2>
          <p className="text-lg text-slate-400">
            Drag the slider to see the transformation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div
            ref={containerRef}
            className="relative aspect-video rounded-2xl overflow-hidden border-2 border-emerald-500/30 cursor-ew-resize select-none"
            onMouseDown={() => { isDragging.current = true; }}
            onMouseMove={(e) => handleMove(e.clientX)}
            onTouchStart={() => { isDragging.current = true; }}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={() => { isDragging.current = false; }}
          >
            {/* Before */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 to-slate-800 flex items-center justify-center">
              <div className="text-center">
                <SunIcon className="w-20 h-20 text-amber-500/30 mx-auto mb-4" />
                <span className="text-amber-400/70 font-mono">[Before Photo]</span>
              </div>
            </div>

            {/* After */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-800 flex items-center justify-center"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="text-center">
                <TreeIcon className="w-20 h-20 text-emerald-500/30 mx-auto mb-4" />
                <span className="text-emerald-400/70 font-mono">[After Photo]</span>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <ChevronLeftIcon className="w-4 h-4 text-slate-600" />
                  <ChevronRightIcon className="w-4 h-4 text-slate-600" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-amber-500/90 text-white text-xs font-bold rounded-full">
              Before
            </div>
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-500/90 text-white text-xs font-bold rounded-full">
              After
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-4 font-mono">
            Williams Estate - Complete Backyard Transformation
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// --- SERVICES SECTION ---
function ServicesSection() {
  const services = [
    { icon: TreeIcon, title: "Landscape Design", desc: "Custom 3D designs tailored to your vision and property", color: "emerald" },
    { icon: DropletIcon, title: "Pools & Water Features", desc: "Infinity pools, spas, ponds, and fountain installations", color: "cyan" },
    { icon: GridIcon, title: "Hardscaping", desc: "Patios, walkways, retaining walls, and outdoor kitchens", color: "amber" },
    { icon: LeafIcon, title: "Planting & Gardens", desc: "Native plants, perennial gardens, and seasonal color", color: "green" },
    { icon: SunIcon, title: "Outdoor Lighting", desc: "LED landscape lighting for ambiance and security", color: "yellow" },
    { icon: DropletIcon, title: "Irrigation Systems", desc: "Smart sprinkler systems with water conservation", color: "blue" },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
    cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/30" },
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
    green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
    yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
  };

  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-6">
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
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Full-service landscape design and installation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-slate-900/30 backdrop-blur-sm border ${colors.border} rounded-2xl p-6 hover:bg-slate-800/30 transition-all group`}
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

// --- PROCESS SECTION ---
function ProcessSection() {
  const steps = [
    { step: "01", title: "Discovery Call", desc: "We learn about your vision, lifestyle, and how you want to use your outdoor space." },
    { step: "02", title: "Site Analysis", desc: "Our designers visit your property to assess conditions, views, and opportunities." },
    { step: "03", title: "3D Design", desc: "Receive photorealistic 3D renderings so you can visualize your new landscape." },
    { step: "04", title: "Installation", desc: "Our expert crews bring the design to life with meticulous attention to detail." },
    { step: "05", title: "Maintenance Plan", desc: "Optional ongoing care to keep your landscape looking its best year-round." },
  ];

  return (
    <section id="process" className="py-16 md:py-24 px-4 md:px-6 bg-[#0A1410]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Our Process
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From concept to completion, we make the journey seamless
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-[40px] top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent" />

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
                <div className="hidden md:flex w-20 h-20 bg-[#0C1810] border-2 border-emerald-500/50 rounded-2xl items-center justify-center shrink-0">
                  <span className="text-2xl font-black text-emerald-400">{step.step}</span>
                </div>
                <div className="flex-1 bg-slate-900/30 border border-emerald-900/30 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
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

// --- TESTIMONIALS SECTION ---
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "They transformed our boring backyard into an absolute paradise. The 3D design process let us see exactly what we were getting.",
      name: "Jennifer & Mark Wilson",
      location: "Mission Hills, KS",
      rating: 5
    },
    {
      quote: "Our pool and patio are magazine-worthy. The attention to detail from design through installation was incredible.",
      name: "David Thompson",
      location: "Leawood, KS",
      rating: 5
    },
    {
      quote: "Best investment we've made in our home. Our property value increased significantly, and we use the outdoor space every day.",
      name: "Sarah Chen",
      location: "Prairie Village, KS",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Client Stories
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} className="w-6 h-6 text-amber-400" />
            ))}
          </div>
          <p className="text-slate-400">4.9/5 from 200+ verified reviews</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/30 backdrop-blur-sm border border-emerald-900/30 rounded-2xl p-6"
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

// --- AWARDS SECTION ---
function AwardsSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-[#0A1410]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-8">
            Awards & Recognition
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {[
            "Best of Houzz 2024",
            "NALP Award Winner",
            "KC Home & Garden Top 10",
            "BBB A+ Rated"
          ].map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <AwardIcon className="w-6 h-6 text-emerald-400" />
              <span className="text-slate-300 font-medium">{award}</span>
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
        className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 to-green-500 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Get a free design consultation and 3D rendering
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onConsultClick}
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <TreeIcon className="w-5 h-5" />
              Free Design Consultation
            </button>
            <a
              href="tel:+18165551234"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              (816) 555-1234
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
    <footer className="relative py-12 px-4 md:px-6 border-t border-emerald-900/30 bg-[#0A1410]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                <LeafIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">Verdant Landscapes</div>
                <div className="text-xs text-slate-500 font-mono">Award-Winning Design</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Creating stunning outdoor living spaces in Kansas City since 2009. From concept to completion, we make your vision reality.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Landscape Design</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Pool Installation</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Hardscaping</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-emerald-400" />
                <a href="tel:+18165551234" className="hover:text-white">(816) 555-1234</a>
              </li>
              <li className="flex items-center gap-2">
                <LeafIcon className="w-4 h-4 text-emerald-400" />
                Kansas City Metro
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-900/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            © 2026 Verdant Landscapes. All rights reserved.
          </div>
          <div className="text-sm text-slate-500">
            Built by <a href="https://localwebsitepro.com" className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold">LocalWebsitePro</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- PROJECT LIGHTBOX ---
function ProjectLightbox({
  project,
  projects,
  onClose,
  onNavigate
}: {
  project: typeof PROJECTS[0];
  projects: typeof PROJECTS;
  onClose: () => void;
  onNavigate: (project: typeof PROJECTS[0]) => void;
}) {
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && prevProject) onNavigate(prevProject);
      if (e.key === "ArrowRight" && nextProject) onNavigate(nextProject);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevProject, nextProject, onClose, onNavigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
          aria-label="Close lightbox"
        >
          <XIcon className="w-8 h-8" />
        </button>

        {/* Image area */}
        <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-900/40 to-slate-800 flex items-center justify-center">
          <div className="text-center">
            <TreeIcon className="w-32 h-32 text-emerald-500/30 mx-auto mb-4" />
            <span className="text-emerald-400/70 font-mono">[Project Photo Gallery]</span>
          </div>
        </div>

        {/* Project info */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h2>
          <p className="text-slate-400">{project.location} • {project.year}</p>
        </div>

        {/* Navigation */}
        {prevProject && (
          <button
            onClick={() => onNavigate(prevProject)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
        )}
        {nextProject && (
          <button
            onClick={() => onNavigate(nextProject)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next project"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        )}

        {/* Counter */}
        <div className="mt-6 text-center text-sm text-slate-500">
          {currentIndex + 1} / {projects.length}
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- CONSULTATION MODAL ---
function ConsultationModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Design consultation lead:", formData);
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
        className="w-full max-w-lg bg-[#0C1810] border border-emerald-500/30 rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">Free Design Consultation</h3>
            <p className="text-sm text-white/80">Includes complimentary 3D rendering</p>
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
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
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
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
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
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-type" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Project Type</label>
                <select
                  id="modal-type"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="">Select type...</option>
                  <option value="full-yard">Complete Transformation</option>
                  <option value="pool">Pool & Spa</option>
                  <option value="patio">Patio & Hardscape</option>
                  <option value="garden">Garden Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Tell us about your vision</label>
                <textarea
                  id="modal-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 resize-none"
                  placeholder="I'm looking to create an outdoor living space with..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                <TreeIcon className="w-5 h-5" />
                Request Free Design Consultation
              </button>

              <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                <CheckCircleIcon className="w-3 h-3 text-emerald-400" />
                Includes complimentary site visit and 3D rendering
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
                A design consultant will call you within 24 hours to schedule your free consultation.
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
