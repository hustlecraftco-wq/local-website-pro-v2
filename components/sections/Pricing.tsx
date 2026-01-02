"use client";

import { useState, useRef, useEffect, memo } from "react";
import Spline from '@splinetool/react-spline';
import { Check, ArrowRight } from "lucide-react";

// Memoized Spline Component
const AnimationScene = memo(function AnimationScene() {
  return (
    <div className="w-full h-full">
      <Spline scene="https://prod.spline.design/Np-gnO5Y5UwmUzxE/scene.splinecode" />
    </div>
  );
});

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("one-time");
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Stop observing once loaded
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="pricing" ref={containerRef} className="relative py-24 px-6 bg-kc-dark border-t border-white/5 overflow-hidden">
      
      {/* 3D ANIMATION BACKGROUND - Lazy Loaded */}
      {isInView && (
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none md:opacity-40 opacity-20">
          <div className="w-200 h-full scale-200 md:scale-300 md:translate-y-0 translate-y-32">
            <AnimationScene />
          </div>
        </div>
      )}

      {/* CONTENT OVERLAY */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Own Your Asset. <span className="text-kc-accent">No Rental Fees.</span>
          </h2>
          <p className="text-kc-muted text-lg max-w-2xl mx-auto mb-8">
            One price. Forever ownership. No monthly subscriptions. No surprise fees. You own the code.
          </p>

          {/* TOGGLE */}
          <div className="inline-flex items-center gap-4 bg-white/5 p-1 rounded-full border border-white/10 mb-12">
            <button
              onClick={() => setBillingCycle("one-time")}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                billingCycle === "one-time"
                  ? "bg-kc-accent text-white"
                  : "text-kc-muted hover:text-white"
              }`}
            >
              One-Time Fee
            </button>
            <button
              onClick={() => setBillingCycle("ongoing")}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                billingCycle === "ongoing"
                  ? "bg-kc-accent text-white"
                  : "text-kc-muted hover:text-white"
              }`}
            >
              Support Plans
            </button>
          </div>
        </div>

        {/* PRICING CARDS */}
        {billingCycle === "one-time" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* STARTER */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-kc-accent/50 transition-all group flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-white mb-2">Starter</h3>
                <p className="text-kc-muted text-sm">Perfect for local service contractors just getting online.</p>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-black text-white mb-2">$2,500</div>
                <p className="text-kc-muted text-sm">One-time. You own it forever.</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">5-7 page custom site</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Mobile optimized</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">SEO foundation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Contact forms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">0.4s load time</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-white/10 hover:bg-kc-accent text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
                Get Started <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* PROFESSIONAL (FEATURED) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-kc-accent/20 to-transparent border border-kc-accent hover:border-kc-accent transition-all group flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-kc-accent text-white text-xs font-bold rounded-full">
                MOST POPULAR
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-black text-white mb-2">Professional</h3>
                <p className="text-kc-muted text-sm">For contractors who want everything.</p>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-black text-kc-accent mb-2">$3,500</div>
                <p className="text-kc-muted text-sm">One-time. You own it forever.</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Everything in Starter, plus:</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">10-15 page custom site</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">AI chatbot (24/7)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">CRM integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Email automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Advanced SEO</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-kc-accent hover:bg-orange-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
                Get Started <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* ENTERPRISE */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-kc-accent/50 transition-all group flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-white mb-2">Enterprise</h3>
                <p className="text-kc-muted text-sm">Multi-location, custom integrations.</p>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-black text-white mb-2">$5,000+</div>
                <p className="text-kc-muted text-sm">One-time. Custom quote.</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Everything in Professional, plus:</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Unlimited pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Multi-location setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Custom integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Training included</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-white/10 hover:bg-kc-accent text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
                Get Started <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* SUPPORT PLAN 1 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-kc-accent/50 transition-all flex flex-col">
              <h3 className="text-2xl font-black text-white mb-2">Basic Support</h3>
              <p className="text-kc-muted text-sm mb-6">Email support & monthly updates</p>
              
              <div className="mb-8">
                <div className="text-3xl font-black text-white mb-2">$299<span className="text-sm font-normal text-kc-muted">/month</span></div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Email support (24-48hr response)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Monthly updates & maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Security patches</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">1 small content update/month</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-white/10 hover:bg-kc-accent text-white font-bold rounded-xl transition-all">
                Subscribe Now
              </button>
            </div>

            {/* SUPPORT PLAN 2 */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-kc-accent/20 to-transparent border border-kc-accent hover:border-kc-accent transition-all flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-kc-accent text-white text-xs font-bold rounded-full">
                RECOMMENDED
              </div>

              <h3 className="text-2xl font-black text-white mb-2">Premium Support</h3>
              <p className="text-kc-muted text-sm mb-6">Everything + priority support & features</p>
              
              <div className="mb-8">
                <div className="text-3xl font-black text-kc-accent mb-2">$699<span className="text-sm font-normal text-kc-muted">/month</span></div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Everything in Basic Support, plus:</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Priority support (same business day)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Bi-weekly strategy calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">Unlimited content updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-kc-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-kc-muted">A/B testing & analytics reports</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-kc-accent hover:bg-orange-600 text-white font-bold rounded-xl transition-all">
                Subscribe Now
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <p className="text-kc-muted text-sm mb-4">Not sure which is right for you?</p>
          <a href="/contact" className="inline-flex items-center gap-2 text-kc-accent font-bold hover:text-orange-600 transition-colors">
            Schedule a free consultation <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
