"use client";
import { ScaleIcon, ShieldIcon, TrophyIcon, UserIcon, BriefcaseIcon } from "./icons";

export default function LawyerDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900 text-white">
      {/* HERO SECTION */}
      <HeroSection />

      {/* CASE RESULTS */}
      <CaseResultsSection />

      {/* PRACTICE AREAS */}
      <PracticeAreasSection />

      {/* ATTORNEY BIOS */}
      <AttorneyBiosSection />

      {/* WHY CHOOSE US */}
      <WhyChooseUsSection />

      {/* FREE CONSULTATION CTA */}
      <FinalCTASection />
    </main>
  );
}

// --- HERO SECTION ---
function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500 text-indigo-400 font-bold text-sm mb-6">
            <TrophyIcon className="w-4 h-4" /> 40+ YEARS COMBINED EXPERIENCE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Protect Your<br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent">Rights & Future</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Aggressive representation. Proven results. Whether facing criminal charges, personal injury, or complex litigation—we fight for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-lg bg-indigo-500 text-white font-bold text-lg hover:bg-indigo-400 transition-colors">
              Free Consultation
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-gray-600 hover:border-indigo-400 transition-colors">
              View Case Results
            </button>
          </div>
        </div>

        <div className="relative h-96 rounded-2xl overflow-hidden border border-gray-700 bg-gradient-to-br from-indigo-900/30 to-gray-800">
          <div className="absolute inset-0 flex items-center justify-center text-gray-600">
            [Hero Image: Courtroom/Attorney]
          </div>
        </div>
      </div>
    </section>
  );
}

// --- CASE RESULTS ---
function CaseResultsSection() {
  const results = [
    { amount: "$4.2M", case: "Personal Injury Settlement" },
    { amount: "$2.8M", case: "Medical Malpractice" },
    { amount: "Dismissed", case: "Criminal Defense - Felony" },
    { amount: "$1.5M", case: "Wrongful Death" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 border-t border-gray-800">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">Proven Track Record</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Over $50M recovered for our clients. Results that speak for themselves.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {results.map((result, i) => (
          <div key={i} className="p-8 rounded-2xl border border-gray-700 bg-gray-800/50 text-center hover:border-indigo-500 transition-all">
            <p className="text-4xl font-bold text-indigo-400 mb-2">{result.amount}</p>
            <p className="text-sm text-gray-400">{result.case}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 text-center mt-8">Past results do not guarantee future outcomes</p>
    </section>
  );
}

// --- PRACTICE AREAS ---
function PracticeAreasSection() {
  const areas = [
    { icon: ScaleIcon, title: "Criminal Defense", desc: "DUI, Drug Crimes, Violent Crimes" },
    { icon: BriefcaseIcon, title: "Personal Injury", desc: "Auto Accidents, Slip & Fall" },
    { icon: ShieldIcon, title: "Family Law", desc: "Divorce, Custody, Support" },
    { icon: ScaleIcon, title: "Business Law", desc: "Contracts, Disputes, Formation" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">Practice Areas</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {areas.map((area, i) => (
          <div key={i} className="p-8 rounded-2xl border border-gray-700 bg-gray-800/50 hover:border-indigo-500 transition-all">
            <area.icon className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">{area.title}</h3>
            <p className="text-sm text-gray-400">{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- ATTORNEY BIOS ---
function AttorneyBiosSection() {
  const attorneys = [
    { name: "Michael Roberts", title: "Senior Partner", exp: "25 Years Experience" },
    { name: "Sarah Chen", title: "Partner", exp: "15 Years Experience" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 border-t border-gray-800">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">Our Attorneys</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {attorneys.map((attorney, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-gray-700 bg-gray-800/50">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-900/30 to-gray-700 flex items-center justify-center flex-shrink-0">
              <UserIcon className="w-16 h-16 text-gray-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">{attorney.name}</h3>
              <p className="text-indigo-400 font-semibold mb-2">{attorney.title}</p>
              <p className="text-sm text-gray-400 mb-4">{attorney.exp}</p>
              <button className="text-sm text-indigo-400 hover:text-indigo-300 font-semibold">
                View Full Bio →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- WHY CHOOSE US ---
function WhyChooseUsSection() {
  const reasons = [
    { icon: ShieldIcon, title: "Licensed & Certified", desc: "Bar certified in multiple states" },
    { icon: TrophyIcon, title: "Award-Winning", desc: "Recognized by legal associations" },
    { icon: ScaleIcon, title: "No Fee Unless We Win", desc: "Contingency fee basis" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">Why Choose Us</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((reason, i) => (
          <div key={i} className="p-8 rounded-2xl border border-gray-700 bg-gray-800/50 text-center">
            <reason.icon className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
            <p className="text-sm text-gray-400">{reason.desc}</p>
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
      <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl p-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Don't Wait. Act Now.</h2>
        <p className="text-xl mb-8 text-white/90">Free case evaluation. No obligation.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 rounded-lg bg-white text-indigo-600 font-bold text-lg hover:bg-gray-100 transition-colors">
            Call (555) 123-4567
          </button>
          <button className="px-10 py-4 rounded-lg border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors">
            Email Us
          </button>
        </div>
        <p className="text-sm text-white/70 mt-6">Available 24/7 for emergencies</p>
      </div>
    </section>
  );
}
