"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  TrendingUp,
  Search,
  ArrowUpRight,
  Sparkles,
  Zap,
  Code2,
  Shield,
  Coffee,
  Heart,
  Copy,
  Check,
  Bitcoin
} from "lucide-react";

// --- BLOG POST DATA ---
const featuredPost = {
  slug: "the-truth-about-custom-websites-kansas-city",
  title: "The Truth About \"Custom\" Websites in Kansas City",
  subtitle: "Templates, Rentals, and the Asset Alternative",
  excerpt: "Most Kansas City business owners have no idea how their 'custom' website was actually made. This post breaks down what's really going on in the local market.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  category: "Strategy",
  readTime: "12 min read",
  date: "Jan 2, 2026",
};

const blogPosts = [
  {
    slug: "why-kansas-city-businesses-need-custom-websites",
    title: "Why KC Businesses Are Ditching WordPress",
    excerpt: "The hidden costs of WordPress templates are bleeding contractors dry.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Strategy",
    readTime: "8 min",
    date: "Dec 28, 2025",
    color: "emerald"
  },
  {
    slug: "0-4-second-load-times-how-we-do-it",
    title: "0.4s Load Times: The Technical Deep Dive",
    excerpt: "Next.js 15, Edge Networks, and why SSR is non-negotiable for local SEO.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Technical",
    readTime: "12 min",
    date: "Dec 20, 2025",
    color: "blue"
  },
  {
    slug: "missed-call-text-back-roi-calculator",
    title: "The $47K Plumber: A KC Case Study",
    excerpt: "How one Overland Park plumber recovered lost revenue with automated SMS.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    category: "Case Study",
    readTime: "6 min",
    date: "Dec 15, 2025",
    color: "purple"
  },
  {
    slug: "local-seo-kansas-city-2025",
    title: "Local SEO in 2026: The KC Playbook",
    excerpt: "Dominate the Map Pack in Leawood, the Plaza, and beyond.",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80",
    category: "SEO",
    readTime: "10 min",
    date: "Dec 10, 2025",
    color: "amber"
  },
];

// Crypto wallet addresses
const wallets = {
  btc: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  eth: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  sol: "DYw8jCTfwHNRJhhmFcbXvVDTqWMEVFBX6ZKUmG5CNSKK"
};

function CryptoTip() {
  const [copied, setCopied] = useState<string | null>(null);
  const [activeWallet, setActiveWallet] = useState<"btc" | "eth" | "sol">("btc");

  const copyToClipboard = (wallet: string, type: string) => {
    navigator.clipboard.writeText(wallet);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const dadJokes = [
    "My code has no bugs, just surprise features.",
    "I told my kids I'm a developer. They said, 'Cool, can you develop some dinner?'",
    "Coffee: because debugging at 2am is a lifestyle choice.",
    "I'm not saying I need coffee, but I've named my IDE 'Starbucks'.",
  ];

  const randomJoke = dadJokes[Math.floor(Math.random() * dadJokes.length)];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden"
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500/50 via-orange-500/50 to-amber-500/50 rounded-3xl opacity-50 blur-sm" />

      <div className="relative bg-gradient-to-br from-amber-950/40 via-zinc-900 to-zinc-900 border border-amber-500/20 rounded-3xl p-8 md:p-10">

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-amber-500/20 rounded-2xl">
            <Coffee className="w-8 h-8 text-amber-400" />
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
              Fuel the Chaos
            </h3>
            <p className="text-amber-200/60 text-sm font-reading italic">
              "{randomJoke}"
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="mb-8 pl-4 border-l-2 border-amber-500/30">
          <p className="text-zinc-300 font-reading leading-relaxed">
            Hey, I'm just a solo dev and stay-at-home dad trying to build cool stuff while keeping tiny humans alive.
            If this content helped you out, consider buying me a coffee—or funding my kids' endless snack demands.
            <span className="text-amber-400"> No pressure, just gratitude.</span>
          </p>
        </div>

        {/* Wallet Tabs */}
        <div className="flex gap-2 mb-4">
          {(["btc", "eth", "sol"] as const).map((wallet) => (
            <button
              key={wallet}
              onClick={() => setActiveWallet(wallet)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeWallet === wallet
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  : "text-zinc-500 hover:text-zinc-300 border border-transparent"
              }`}
            >
              {wallet}
            </button>
          ))}
        </div>

        {/* Wallet Address */}
        <div className="flex items-center gap-3 bg-black/40 rounded-xl p-4 border border-white/5">
          <div className="flex-1 font-mono text-xs text-zinc-400 truncate">
            {wallets[activeWallet]}
          </div>
          <button
            onClick={() => copyToClipboard(wallets[activeWallet], activeWallet)}
            className="p-2 bg-amber-500/20 hover:bg-amber-500/30 rounded-lg transition-colors"
          >
            {copied === activeWallet ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-amber-400" />
            )}
          </button>
        </div>

        {/* Fun footer */}
        <div className="mt-6 flex items-center justify-between text-xs text-zinc-500">
          <span className="flex items-center gap-2">
            <Heart className="w-3 h-3 text-red-400" />
            Every sat goes toward goldfish crackers
          </span>
          <span className="font-mono">v1.0.0-dad-mode</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogPage() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <main className="min-h-screen bg-[#030303] text-zinc-200 selection:bg-amber-500/30">

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Kansas City Skyline at Night"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#030303]/60 to-[#030303]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303]" />
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-[10%] w-64 h-64 bg-amber-500/10 rounded-full blur-[100px]"
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-[15%] w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px]"
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-8"
          >
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span className="text-zinc-700">/</span>
            <span className="text-amber-400">The Journal</span>
          </motion.nav>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-3 h-3" />
            Thoughts & Tactics
          </motion.div>

          {/* Title - Artistic Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 tracking-tight leading-[0.9]">
              The
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400">
                Journal
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-reading text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mt-6 italic"
          >
            Deep dives, hot takes, and hard-won lessons from the trenches of building websites that actually work.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-xl mx-auto mt-12"
          >
            <div className={`relative transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}>
              <div className={`absolute -inset-[1px] bg-gradient-to-r from-amber-500/50 to-orange-500/50 rounded-2xl blur-sm transition-opacity duration-300 ${searchFocused ? 'opacity-100' : 'opacity-0'}`} />
              <div className="relative">
                <Search className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${searchFocused ? 'text-amber-400' : 'text-zinc-500'}`} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full pl-14 pr-6 py-5 bg-zinc-900/80 border border-zinc-800 rounded-2xl text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 transition-all backdrop-blur-xl font-reading"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-amber-400 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <span className="font-serif text-amber-400 text-sm tracking-widest uppercase">Featured Read</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          </motion.div>

          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative grid lg:grid-cols-2 gap-0 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl overflow-hidden group-hover:border-amber-500/30 transition-all duration-700"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-900 via-zinc-900/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Clock className="w-3 h-3" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="font-serif text-xl text-zinc-500 mb-6 italic">
                  {featuredPost.subtitle}
                </p>

                <p className="font-reading text-zinc-400 text-lg mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <span className="flex items-center gap-2 text-amber-400 font-bold group-hover:gap-4 transition-all">
                    Read the full story
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </motion.article>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            <span className="font-serif text-zinc-500 text-sm tracking-widest uppercase">Latest Articles</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => {
              const colorMap: Record<string, { bg: string; border: string; text: string }> = {
                emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
                blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
                purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
                amber: { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400" },
              };
              const colors = colorMap[post.color] || colorMap.emerald;

              return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <article className="h-full flex flex-col bg-zinc-900/30 border border-zinc-800/50 rounded-2xl overflow-hidden group-hover:border-zinc-700 transition-all duration-500 group-hover:-translate-y-2">

                      {/* Image */}
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

                        {/* Category Badge */}
                        <div className={`absolute top-4 left-4 px-3 py-1.5 ${colors.bg} ${colors.border} border backdrop-blur-sm rounded-full`}>
                          <span className={`text-xs font-mono uppercase ${colors.text}`}>{post.category}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col p-6">
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors leading-snug">
                          {post.title}
                        </h3>

                        <p className="font-reading text-zinc-500 text-sm mb-6 leading-relaxed flex-1">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                          <div className="flex items-center gap-4 text-xs text-zinc-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>
                          <ArrowUpRight className={`w-5 h-5 text-zinc-600 group-hover:${colors.text} transition-colors`} />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Crypto Tip Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <CryptoTip />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-16 text-center overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-8">
                <Zap className="w-3 h-3" />
                Weekly Drops
              </div>

              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
                Get the KC Growth Playbook
              </h2>

              <p className="font-reading text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed italic">
                Weekly tactics for local SEO, web performance, and lead gen.
                No fluff. Just things that work.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 font-reading"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-xs text-zinc-600 mt-6 font-reading">
                Join 500+ KC business owners. Unsubscribe whenever.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
