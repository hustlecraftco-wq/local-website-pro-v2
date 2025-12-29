"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is where we will hook up the automatic email sender next
    alert("Lead Captured! (Next Step: We connect this to your email)");
    setIsModalOpen(false);
  };

  const navLinks = [
    { name: "The System", href: "#compare" },
    { name: "Pricing", href: "#pricing" },
    { name: "Speed Test", href: "#speed" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? "bg-kc-dark/80 backdrop-blur-xl border-white/10 py-4" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-white flex items-center gap-2">
            <span className="text-kc-accent">///</span> LocalWebsitePro
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-kc-muted hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Trigger The Modal */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 py-2.5 bg-kc-accent rounded-full text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-orange-900/20"
            >
              <span>Start My Build</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- THE LEAD CAPTURE MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-kc-accent/10 rounded-full blur-[50px] pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">Let's Build Your Asset.</h3>
                    {/* UPDATED COPY HERE */}
                    <p className="text-kc-muted text-sm">Fill this out. We'll send a personal intro via text or email shortly.</p>
                  </div>
                  <button onClick={() => setIsModalOpen(false)} className="text-kc-muted hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-kc-muted uppercase tracking-wider mb-2">Your Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-kc-accent focus:ring-0 transition-colors placeholder:text-white/20" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-kc-muted uppercase tracking-wider mb-2">Phone Number</label>
                      <input type="tel" required placeholder="(555) 123-4567" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-kc-accent focus:ring-0 transition-colors placeholder:text-white/20" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-kc-muted uppercase tracking-wider mb-2">Email Address</label>
                      <input type="email" required placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-kc-accent focus:ring-0 transition-colors placeholder:text-white/20" />
                    </div>
                  </div>

                  {/* UPDATED: TEXT AREA INSTEAD OF DROPDOWN */}
                  <div>
                    <label className="block text-xs font-bold text-kc-muted uppercase tracking-wider mb-2">Tell us about your business</label>
                    <textarea 
                      rows={3} 
                      placeholder="I own a plumbing company in Olathe and I'm tired of Angi leads..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-kc-accent focus:ring-0 transition-colors placeholder:text-white/20 resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 bg-kc-accent hover:bg-orange-600 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-900/20 mt-4">
                    <span>Secure My Build Spot</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  
                  <p className="text-center text-xs text-kc-muted mt-4 flex items-center justify-center gap-2">
                    <CheckCircle className="w-3 h-3 text-kc-success" /> No Spam. Direct Line to Developer.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-kc-dark/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white"
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }}
                className="w-full py-4 bg-kc-accent rounded-xl text-white font-black text-xl flex items-center justify-center gap-3"
              >
                Start My Build
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
