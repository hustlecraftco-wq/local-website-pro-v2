"use client";
import { Search, BrainCircuit, LineChart, Target, Smartphone, Zap, Bot } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 px-6 bg-kc-dark relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-20 text-center">
          Not Just A Pretty Face.<br/>
          <span className="text-kc-accent">A Data Weapon.</span>
        </h2>

        {/* FEATURE 1: SEO DOMINATION */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <div className="w-full md:w-1/2">
            <div className="relative glass-panel p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              {/* Fake UI for SEO */}
              <div className="space-y-4 font-mono text-sm">
                 <div className="flex justify-between text-green-400"><span>Ranking Position</span> <span>#1</span></div>
                 <div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full w-[95%] bg-green-500"></div></div>
                 <div className="text-xs text-kc-muted">Keyword: "Emergency Plumber KC"</div>
                 <div className="p-4 bg-black/50 rounded-xl border border-white/5 mt-4">
                    <span className="text-blue-400">&lt;schema&gt;</span>
                    <br/>&nbsp;&nbsp;"@type": "PlumbingService",
                    <br/>&nbsp;&nbsp;"areaServed": "Kansas City"
                    <br/><span className="text-blue-400">&lt;/schema&gt;</span>
                 </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-6"><Search className="w-8 h-8 text-blue-400"/></div>
            <h3 className="text-3xl font-bold text-white mb-4">Programmatic SEO</h3>
            <p className="text-kc-muted text-lg leading-relaxed mb-6">
              We don't just write text; we speak Google's native language. We inject <strong>JSON-LD Schema</strong> directly into the code so Google Maps knows exactly where you work.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white"><Target className="w-5 h-5 text-kc-accent"/> <strong>Keyword Injection:</strong> Targeting "Near Me" searches.</li>
              <li className="flex items-center gap-3 text-white"><Zap className="w-5 h-5 text-kc-accent"/> <strong>0.4s Speed:</strong> Google rewards fast sites with higher rankings.</li>
            </ul>
          </div>
        </div>

        {/* FEATURE 2: TRACKING & CRM */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 mb-24">
          <div className="w-full md:w-1/2">
            <div className="relative glass-panel p-8 rounded-3xl border border-white/10">
               {/* Fake UI for CRM */}
               <div className="space-y-3">
                 <div className="flex items-center gap-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="text-white font-bold">New Lead: Mike S.</div>
                    <div className="ml-auto text-xs text-green-400">Just now</div>
                 </div>
                 <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="text-kc-muted">Form Submission: Quote Request</div>
                 </div>
                 <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="text-kc-muted">Click to Call: (913) 555-0192</div>
                 </div>
               </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="p-3 bg-green-500/10 rounded-xl w-fit mb-6"><LineChart className="w-8 h-8 text-green-400"/></div>
            <h3 className="text-3xl font-bold text-white mb-4">ROI You Can See</h3>
            <p className="text-kc-muted text-lg leading-relaxed mb-6">
              Stop guessing if your website works. We integrate directly with your CRM (ServiceTitan, Jobber, HubSpot) so every form fill drops right into your dispatch software.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white"><Smartphone className="w-5 h-5 text-kc-accent"/> <strong>Conversion Tracking:</strong> Know exactly which ads drive calls.</li>
              <li className="flex items-center gap-3 text-white"><Target className="w-5 h-5 text-kc-accent"/> <strong>Real-Time Alerts:</strong> Get a text the second a lead lands.</li>
            </ul>
          </div>
        </div>

        {/* FEATURE 3: AI & AUTOMATION */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative glass-panel p-8 rounded-3xl border border-white/10 bg-gradient-to-tr from-purple-500/10 to-transparent">
               {/* Fake UI for AI */}
               <div className="space-y-4">
                  <div className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center"><Bot className="w-4 h-4 text-white"/></div>
                     <div className="bg-white/10 p-3 rounded-r-xl rounded-bl-xl text-sm text-white">Hi! I can schedule that estimate for you. What is your address?</div>
                  </div>
                  <div className="flex gap-4 flex-row-reverse">
                     <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-xs">User</div>
                     <div className="bg-purple-500 p-3 rounded-l-xl rounded-br-xl text-sm text-white">123 Main St, Overland Park</div>
                  </div>
               </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="p-3 bg-purple-500/10 rounded-xl w-fit mb-6"><BrainCircuit className="w-8 h-8 text-purple-400"/></div>
            <h3 className="text-3xl font-bold text-white mb-4">24/7 AI Receptionist</h3>
            <p className="text-kc-muted text-lg leading-relaxed mb-6">
              Missed calls cost you money. Our optional AI integrations can answer FAQs, book appointments, and qualify leads while you sleep.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white"><Zap className="w-5 h-5 text-kc-accent"/> <strong>Instant Response:</strong> Speed to lead is everything.</li>
              <li className="flex items-center gap-3 text-white"><Zap className="w-5 h-5 text-kc-accent"/> <strong>Smart Booking:</strong> Syncs with your calendar automatically.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
