"use client";
import { useState } from "react";
import { TreeIcon, SparklesIcon, LeafIcon, ImageIcon, CheckIcon } from "./icons";

export default function LandscapingDemoPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-green-950 to-gray-900 text-white">
      {/* HERO SECTION */}
      <HeroSection />

      {/* PROJECT GALLERY */}
      <ProjectGallerySection selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      {/* BEFORE/AFTER SHOWCASE */}
      <BeforeAfterSection />

      {/* SERVICES */}
      <ServicesSection />

      {/* SEASONAL PACKAGES */}
      <SeasonalPackagesSection />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* FINAL CTA */}
      <FinalCTASection />
    </main>
  );
}

// --- HERO SECTION ---
function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500 text-green-400 font-bold text-sm mb-6">
            <SparklesIcon className="w-4 h-4" /> AWARD-WINNING DESIGNS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Transform Your<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Outdoor Space</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            From concept to completion. Patios, pools, gardens, and complete landscape transformations that elevate your property value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-full bg-green-500 text-white font-bold text-lg hover:bg-green-400 transition-colors">
              View Portfolio
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-gray-600 hover:border-green-400 transition-colors">
              Get Free Design
            </button>
          </div>
        </div>

        <div className="relative h-96 rounded-3xl overflow-hidden border border-gray-700 bg-gradient-to-br from-green-900/30 to-gray-800">
          <div className="absolute inset-0 flex items-center justify-center text-gray-600">
            [Hero Image: Stunning Backyard]
          </div>
        </div>
      </div>
    </section>
  );
}

// --- PROJECT GALLERY ---
function ProjectGallerySection({ selectedCategory, setSelectedCategory }: any) {
  const categories = ["all", "pools", "patios", "gardens", "full-yards"];
  
  const projects = [
    { category: "pools", title: "Modern Pool Oasis", type: "Pool & Spa" },
    { category: "patios", title: "Outdoor Living Room", type: "Patio & Hardscape" },
    { category: "gardens", title: "Japanese Zen Garden", type: "Garden Design" },
    { category: "full-yards", title: "Complete Transformation", type: "Full Property" },
    { category: "pools", title: "Infinity Edge Pool", type: "Luxury Pool" },
    { category: "patios", title: "Fire Pit Lounge", type: "Entertainment Area" },
  ];

  const filteredProjects = selectedCategory === "all" ? projects : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">Featured Projects</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Let our work speak for itself. Browse hundreds of completed projects.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-green-500 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {cat === "all" ? "All Projects" : cat.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => (
          <div key={i} className="group relative rounded-2xl overflow-hidden border border-gray-700 bg-gray-800 hover:border-green-500 transition-all">
            <div className="aspect-video bg-gradient-to-br from-green-900/20 to-gray-700 flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-gray-600" />
            </div>
            <div className="p-6">
              <p className="text-xs text-green-400 font-bold mb-2">{project.type}</p>
              <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- BEFORE/AFTER ---
function BeforeAfterSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">Dramatic Transformations</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-video rounded-2xl overflow-hidden border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
            <p className="text-gray-500 font-bold">BEFORE</p>
          </div>
          <p className="text-gray-400 text-center">Overgrown, unused space</p>
        </div>

        <div className="space-y-4">
          <div className="aspect-video rounded-2xl overflow-hidden border-2 border-green-500 bg-gradient-to-br from-green-900/30 to-gray-700 flex items-center justify-center">
            <p className="text-green-400 font-bold">AFTER</p>
          </div>
          <p className="text-gray-300 text-center font-bold">Award-winning outdoor living space</p>
        </div>
      </div>
    </section>
  );
}

// --- SERVICES ---
function ServicesSection() {
  const services = [
    { icon: TreeIcon, title: "Landscape Design", desc: "Custom plans tailored to your vision" },
    { icon: LeafIcon, title: "Hardscaping", desc: "Patios, walkways, retaining walls" },
    { icon: TreeIcon, title: "Water Features", desc: "Pools, ponds, fountains" },
    { icon: SparklesIcon, title: "Lighting", desc: "Outdoor lighting systems" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-800">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">Our Services</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div key={i} className="p-8 rounded-2xl border border-gray-700 bg-gray-800/50 hover:border-green-500 transition-all text-center">
            <service.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- SEASONAL PACKAGES ---
function SeasonalPackagesSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">Seasonal Packages</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {["Spring Refresh", "Summer Upgrade", "Fall Cleanup"].map((pkg, i) => (
          <div key={i} className="p-8 rounded-2xl border border-gray-700 bg-gray-800 text-center">
            <h3 className="text-2xl font-bold mb-4">{pkg}</h3>
            <p className="text-3xl font-bold text-green-400 mb-6">$2,500+</p>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Design consultation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Plant installation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">Maintenance plan</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 rounded-full bg-gray-700 hover:bg-green-500 transition-colors font-bold">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- TESTIMONIALS ---
function TestimonialsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">Client Stories</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { quote: "They transformed our backyard into a resort.", author: "Jennifer M." },
          { quote: "Best investment we've made in our home.", author: "Robert K." },
        ].map((testimonial, i) => (
          <div key={i} className="p-8 rounded-2xl border border-gray-700 bg-gray-800/50">
            <p className="text-xl italic mb-4">"{testimonial.quote}"</p>
            <p className="text-sm text-green-400 font-bold">— {testimonial.author}</p>
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
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-12 text-center text-black">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <p className="text-xl mb-8">Get a free design consultation and quote</p>
        <button className="px-10 py-4 rounded-full bg-black text-white font-bold text-lg hover:bg-gray-900 transition-colors">
          Schedule Free Consult
        </button>
      </div>
    </section>
  );
}
