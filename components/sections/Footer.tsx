"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Terminal,
  Shield,
  Zap
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Website Development", href: "/#pricing" },
      { name: "Missed Call Text Back", href: "/#pricing" },
      { name: "Review Automation", href: "/#pricing" },
      { name: "Growth Hunter", href: "/#pricing" },
      { name: "Enterprise Solutions", href: "/#pricing" },
    ],
    industries: [
      { name: "Financial Advisors", href: "/demo/finance" },
      { name: "Roofing Contractors", href: "/demo/roofer" },
      { name: "Plumbers & HVAC", href: "/demo/plumber" },
      { name: "Law Firms", href: "/demo/lawyer" },
      { name: "Medical Practices", href: "/demo/medical" },
    ],
    company: [
      { name: "About Us", href: "/#about" },
      { name: "Case Studies", href: "/blog" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "Terms of Service", href: "/legal/terms" },
      { name: "Cookie Policy", href: "/legal/cookies" },
      { name: "Accessibility", href: "/legal/accessibility" },
    ],
  };

  return (
    <footer className="relative bg-[#030303] text-zinc-400 border-t border-zinc-800/50 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Section: CTA + Brand */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-16 border-b border-zinc-800/50">

          {/* Brand & CTA */}
          <div className="max-w-md">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-black text-white/20 tracking-tighter">
                LOCAL<span className="text-emerald-500/30">.</span>
              </h2>
            </Link>
            <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
              Stop renting websites. Own your digital asset.
              Custom-coded lead machines for Kansas City businesses.
            </p>

            {/* CTA Button */}
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-3 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all group shadow-lg shadow-emerald-900/30"
            >
              Start Your Build
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <Shield className="w-5 h-5 text-emerald-500" />
              <div>
                <div className="text-white text-sm font-bold">SOC2 Ready</div>
                <div className="text-zinc-500 text-xs">Enterprise Security</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <Zap className="w-5 h-5 text-amber-500" />
              <div>
                <div className="text-white text-sm font-bold">0.4s Load</div>
                <div className="text-zinc-500 text-xs">Edge Delivery</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl">
              <Terminal className="w-5 h-5 text-blue-500" />
              <div>
                <div className="text-white text-sm font-bold">Code Ownership</div>
                <div className="text-zinc-500 text-xs">GitHub Handoff</div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-zinc-800/50">

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a
              href="mailto:hello@localwebsitepro.com"
              className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              hello@localwebsitepro.com
            </a>
            <a
              href="tel:+18165551234"
              className="flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              (816) 555-1234
            </a>
            <span className="flex items-center gap-2 text-zinc-500 text-sm">
              <MapPin className="w-4 h-4" />
              Kansas City, MO
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-800/50">
          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <span>KANSAS CITY</span>
            <span className="text-zinc-800">//</span>
            <span>OVERLAND PARK</span>
            <span className="text-zinc-800">//</span>
            <span>LEAWOOD</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <span>&copy; {currentYear} Local Website Pro.</span>
            <span className="text-zinc-800">|</span>
            <span>All rights reserved.</span>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="flex justify-center pt-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Built with</span>
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
              <span className="px-2 py-0.5 bg-black rounded">Next.js 15</span>
              <span className="px-2 py-0.5 bg-black rounded">Tailwind</span>
              <span className="px-2 py-0.5 bg-black rounded">Vercel Edge</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
