"use client";

import { useState } from "react";
import { Coffee, Heart, Copy, Check } from "lucide-react";

// Crypto wallets
const wallets = {
  btc: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  eth: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  sol: "DYw8jCTfwHNRJhhmFcbXvVDTqWMEVFBX6ZKUmG5CNSKK"
};

// Dad jokes for donation section
const endOfArticleJokes = [
  "If this helped you avoid a $200/month website hostage situation, maybe throw a coffee my way?",
  "Written at 2am while the kids slept. Fueled by cold coffee and stubborn optimism.",
  "My toddler thinks I 'play on the computer.' He's not entirely wrong.",
  "Every donation goes directly to the snack fund. The tiny humans are relentless.",
  "Pro tip: Kids don't care about your deploy pipeline. They want goldfish crackers.",
];

export default function ArticleTipJar() {
  const [copied, setCopied] = useState<string | null>(null);
  const [activeWallet, setActiveWallet] = useState<"btc" | "eth" | "sol">("btc");

  const joke = endOfArticleJokes[Math.floor(Math.random() * endOfArticleJokes.length)];

  const copyToClipboard = (wallet: string, type: string) => {
    navigator.clipboard.writeText(wallet);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="mt-16 pt-12 border-t border-zinc-800">
      <div className="bg-gradient-to-br from-amber-950/30 via-zinc-900/80 to-zinc-900 border border-amber-500/20 rounded-2xl p-8">

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-amber-500/20 rounded-xl shrink-0">
            <Coffee className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-1">
              Made it to the end?
            </h4>
            <p className="text-amber-200/60 text-sm font-reading italic">
              {joke}
            </p>
          </div>
        </div>

        {/* The pitch */}
        <p className="font-reading text-zinc-400 text-sm leading-relaxed mb-6 pl-4 border-l-2 border-amber-500/30">
          I'm a solo dev and stay-at-home dad building this between nap times and snack breaks.
          If this content saved you time, money, or a headache—consider sending a few sats.
          <span className="text-amber-400"> No pressure. Just good karma.</span>
        </p>

        {/* Wallet selector */}
        <div className="flex gap-2 mb-3">
          {(["btc", "eth", "sol"] as const).map((w) => (
            <button
              key={w}
              onClick={() => setActiveWallet(w)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeWallet === w
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              {w}
            </button>
          ))}
        </div>

        {/* Address */}
        <div className="flex items-center gap-2 bg-black/40 rounded-lg p-3 border border-white/5">
          <code className="flex-1 text-xs text-zinc-500 truncate font-mono">
            {wallets[activeWallet]}
          </code>
          <button
            onClick={() => copyToClipboard(wallets[activeWallet], activeWallet)}
            className="p-2 bg-amber-500/20 hover:bg-amber-500/30 rounded-md transition-colors shrink-0"
          >
            {copied === activeWallet ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-amber-400" />
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-600">
          <span className="flex items-center gap-1">
            <Heart className="w-3 h-3 text-red-400/60" />
            Powered by caffeine & chaos
          </span>
          <span className="font-mono">dad-stack v2.0</span>
        </div>
      </div>
    </div>
  );
}
