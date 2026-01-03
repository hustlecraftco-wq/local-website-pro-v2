"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================================
// Icon Components - Emergency/Speed Themed
// ============================================================================

interface IconProps {
  className?: string;
}

function ZapIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function WrenchIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function MapPinIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function StarIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

function DropletIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  );
}

function FlameIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  );
}

function WindIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  );
}

function TruckIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

// ============================================================================
// Data
// ============================================================================

const SERVICES = [
  {
    id: 1,
    icon: DropletIcon,
    title: "Emergency Plumbing",
    description: "Burst pipes, severe leaks, flooding - we arrive in minutes, not hours. 24/7 availability.",
    features: ["Burst Pipe Repair", "Leak Detection", "Flood Cleanup", "Sump Pump Service"],
    urgency: "emergency"
  },
  {
    id: 2,
    icon: FlameIcon,
    title: "Water Heater",
    description: "No hot water? We repair and replace all brands same-day. Tankless specialists.",
    features: ["Tank & Tankless", "Same-Day Install", "All Brands", "Energy Efficient"],
    urgency: "urgent"
  },
  {
    id: 3,
    icon: WrenchIcon,
    title: "Drain Cleaning",
    description: "Hydro jetting, camera inspection, and rooter services. Clear any clog guaranteed.",
    features: ["Hydro Jetting", "Camera Inspection", "Root Removal", "Preventive Cleaning"],
    urgency: "standard"
  },
  {
    id: 4,
    icon: WindIcon,
    title: "HVAC Services",
    description: "Furnace and AC repair, installation, and maintenance. Stay comfortable year-round.",
    features: ["AC Repair", "Furnace Service", "Heat Pumps", "Duct Cleaning"],
    urgency: "urgent"
  }
];

const SERVICE_AREAS = [
  { name: "Kansas City, MO", response: "12 min" },
  { name: "Overland Park, KS", response: "15 min" },
  { name: "Olathe, KS", response: "18 min" },
  { name: "Lee's Summit, MO", response: "16 min" },
  { name: "Shawnee, KS", response: "14 min" },
  { name: "Independence, MO", response: "15 min" },
  { name: "Liberty, MO", response: "17 min" },
  { name: "Blue Springs, MO", response: "19 min" },
  { name: "Lenexa, KS", response: "14 min" },
  { name: "Leawood, KS", response: "16 min" }
];

const REVIEWS = [
  {
    id: 1,
    name: "Mike T.",
    rating: 5,
    text: "Pipe burst at 2 AM on a Sunday. They were here in 11 minutes. Saved my basement from flooding. Can't thank them enough!",
    date: "3 days ago",
    service: "Emergency Plumbing",
    verified: true
  },
  {
    id: 2,
    name: "Sarah K.",
    rating: 5,
    text: "Water heater died Friday night before family was coming. They installed a new one Saturday morning. Incredible service.",
    date: "1 week ago",
    service: "Water Heater",
    verified: true
  },
  {
    id: 3,
    name: "James R.",
    rating: 5,
    text: "AC went out during a heat wave. They diagnosed it in 20 minutes and had parts on the truck. Fixed same day!",
    date: "2 weeks ago",
    service: "HVAC Services",
    verified: true
  },
  {
    id: 4,
    name: "Linda M.",
    rating: 5,
    text: "Upfront pricing, no surprises. Tech explained everything and even showed me how to prevent future issues. Professional!",
    date: "2 weeks ago",
    service: "Drain Cleaning",
    verified: true
  }
];

const EMERGENCY_TYPES = [
  { id: "burst-pipe", label: "Burst Pipe / Major Leak", priority: "critical" },
  { id: "no-water", label: "No Water", priority: "critical" },
  { id: "flooding", label: "Flooding / Water Damage", priority: "critical" },
  { id: "no-hot-water", label: "No Hot Water", priority: "urgent" },
  { id: "clogged-drain", label: "Severely Clogged Drain", priority: "urgent" },
  { id: "no-heat", label: "No Heat (Winter)", priority: "critical" },
  { id: "no-ac", label: "No AC (Summer)", priority: "urgent" },
  { id: "gas-smell", label: "Gas Smell", priority: "critical" },
  { id: "other", label: "Other Emergency", priority: "standard" }
];

// ============================================================================
// Emergency Booking Modal
// ============================================================================

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [emergencyType, setEmergencyType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [estimatedArrival, setEstimatedArrival] = useState("");

  const selectedEmergency = EMERGENCY_TYPES.find(e => e.id === emergencyType);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Simulate arrival time based on priority
    const arrivalMinutes = selectedEmergency?.priority === "critical" ? "8-12" :
                          selectedEmergency?.priority === "urgent" ? "12-18" : "15-25";
    setEstimatedArrival(arrivalMinutes);
    setIsSubmitting(false);
    setIsConfirmed(true);
  };

  const resetAndClose = () => {
    setStep(1);
    setEmergencyType("");
    setFormData({ name: "", phone: "", address: "", description: "" });
    setIsConfirmed(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={resetAndClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`px-6 py-4 flex items-center justify-between ${
              isConfirmed ? "bg-emerald-600" : "bg-gradient-to-r from-rose-600 to-rose-500"
            }`}>
              <div className="flex items-center gap-3">
                {!isConfirmed && (
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-50" />
                    <ZapIcon className="w-6 h-6 text-white relative" />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {isConfirmed ? "Technician Dispatched!" : "Emergency Service Request"}
                  </h2>
                  {!isConfirmed && (
                    <p className="text-rose-100 text-sm">Step {step} of 2 - We respond in minutes</p>
                  )}
                </div>
              </div>
              <button
                onClick={resetAndClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
                aria-label="Close modal"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {isConfirmed ? (
                <div className="text-center py-4">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TruckIcon className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Help is on the way!</h3>
                  <p className="text-slate-300 mb-6">
                    A technician has been dispatched and will arrive shortly.
                  </p>

                  <div className="bg-slate-800 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-slate-400">Estimated Arrival</span>
                      <span className="text-2xl font-bold text-cyan-400">{estimatedArrival} min</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full w-1/4 animate-pulse" />
                    </div>
                    <p className="text-sm text-slate-400 mt-2">Tracking link sent to your phone</p>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4 text-left">
                    <p className="text-sm text-slate-400 mb-1">Service Type</p>
                    <p className="font-semibold text-white mb-3">{selectedEmergency?.label}</p>
                    <p className="text-sm text-slate-400 mb-1">Address</p>
                    <p className="font-semibold text-white">{formData.address}</p>
                  </div>
                </div>
              ) : step === 1 ? (
                <div>
                  <p className="text-slate-300 mb-4">What type of emergency are you experiencing?</p>
                  <div className="space-y-2">
                    {EMERGENCY_TYPES.map(type => (
                      <button
                        key={type.id}
                        onClick={() => setEmergencyType(type.id)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                          emergencyType === type.id
                            ? "border-cyan-500 bg-cyan-500/10"
                            : "border-slate-700 hover:border-slate-600 bg-slate-800/50"
                        }`}
                      >
                        <span className="font-medium text-white">{type.label}</span>
                        {type.priority === "critical" && (
                          <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded-full font-semibold">
                            CRITICAL
                          </span>
                        )}
                        {type.priority === "urgent" && (
                          <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full font-semibold">
                            URGENT
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-slate-800 border-2 border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 bg-slate-800 border-2 border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                      placeholder="(816) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-slate-300 mb-1">
                      Service Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                      className="w-full p-3 bg-slate-800 border-2 border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                      placeholder="123 Main St, Kansas City, MO"
                    />
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-1">
                      Describe the Problem (Optional)
                    </label>
                    <textarea
                      id="description"
                      value={formData.description}
                      onChange={e => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                      className="w-full p-3 bg-slate-800 border-2 border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none resize-none"
                      placeholder="Tell us what's happening..."
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {!isConfirmed && (
              <div className="px-6 py-4 bg-slate-800/50 border-t border-slate-700 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 text-slate-300 hover:text-white font-medium"
                  >
                    Back
                  </button>
                ) : (
                  <div className="text-sm text-slate-400">
                    <span className="text-emerald-400">●</span> Techs available now
                  </div>
                )}
                <button
                  onClick={() => {
                    if (step < 2) setStep(2);
                    else handleSubmit();
                  }}
                  disabled={(step === 1 && !emergencyType) ||
                           (step === 2 && (!formData.name || !formData.phone || !formData.address)) ||
                           isSubmitting}
                  className="px-6 py-2 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Dispatching...
                    </>
                  ) : step < 2 ? (
                    "Continue"
                  ) : (
                    <>
                      <ZapIcon className="w-4 h-4" />
                      Dispatch Now
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// Service Area Modal
// ============================================================================

interface ServiceAreaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ServiceAreaModal({ isOpen, onClose }: ServiceAreaModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="px-6 py-4 bg-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-6 h-6 text-cyan-400" />
                <h2 className="text-xl font-bold text-white">Service Areas</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-400"
                aria-label="Close modal"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-slate-300 mb-4">
                We provide rapid-response service across the greater Kansas City metro area.
              </p>

              <div className="space-y-2 max-h-80 overflow-y-auto">
                {SERVICE_AREAS.map((area, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700"
                  >
                    <div className="flex items-center gap-3">
                      <MapPinIcon className="w-4 h-4 text-slate-500" />
                      <span className="text-white font-medium">{area.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 font-semibold">{area.response}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <p className="text-cyan-400 text-sm text-center">
                  Don&apos;t see your area? Call us - we may still be able to help!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// Main Page Component
// ============================================================================

export default function EmergencyPlumberPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [serviceAreaOpen, setServiceAreaOpen] = useState(false);
  const [currentResponseTime, setCurrentResponseTime] = useState(14);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate fluctuating response time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentResponseTime(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + change;
        return Math.max(10, Math.min(18, newVal));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-slate-950/95 backdrop-blur-md border-b border-slate-800"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Link href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center">
                <ZapIcon className="w-6 h-6 text-slate-950" />
              </div>
              <span className="text-xl font-bold">
                Flow<span className="text-cyan-400">Tech</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {["Services", "Areas", "Reviews"].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-white font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block relative">
                <div className="absolute -inset-1 bg-rose-500 rounded-full opacity-75 animate-ping" />
                <a
                  href="tel:5550123456"
                  className="relative flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-colors shadow-lg shadow-rose-900/30"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>24/7 EMERGENCY</span>
                </a>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-white"
                aria-label="Toggle menu"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-t border-slate-800"
            >
              <div className="px-4 py-4 space-y-3">
                {["Services", "Areas", "Reviews"].map(item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-slate-300 hover:text-white font-medium"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="tel:5550123456"
                  className="flex items-center justify-center gap-2 bg-rose-600 text-white py-3 rounded-lg font-bold"
                >
                  <PhoneIcon className="w-4 h-4" />
                  24/7 EMERGENCY
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] -z-10 opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              Average Response Time: {currentResponseTime} Minutes
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight mb-8"
            >
              Emergency HVAC &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                Plumbing Experts
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Don&apos;t let a leak become a flood. We deploy licensed technicians to your door
              in minutes, not hours. No hidden fees, just rapid results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2"
              >
                <ZapIcon className="w-5 h-5" />
                Request Emergency Service
              </button>
              <button
                onClick={() => setServiceAreaOpen(true)}
                className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-full font-bold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <MapPinIcon className="w-5 h-5" />
                View Service Map
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Techs", value: "40+", icon: TruckIcon },
              { label: "Avg Arrival", value: `${currentResponseTime}m`, icon: ClockIcon },
              { label: "5-Star Reviews", value: "2,400+", icon: StarIcon },
              { label: "Warranty", value: "Lifetime", icon: ShieldIcon }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <stat.icon className="w-6 h-6 text-cyan-400 mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Residential & Commercial</h2>
              <p className="text-slate-300">
                We handle everything from minor residential leaks to complex commercial
                HVAC installations. Available 24/7/365.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
                  onClick={() => setBookingOpen(true)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        {service.urgency === "emergency" && (
                          <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded-full">
                            24/7
                          </span>
                        )}
                      </div>
                      <p className="text-slate-300 mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, j) => (
                          <span
                            key={j}
                            className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors"
            >
              Request any service <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(star => (
                <StarIcon key={star} className="w-8 h-8 text-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl font-bold mb-2">Trusted by 2,400+ Customers</h2>
            <p className="text-slate-300">See what our customers say about our rapid response</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{review.name}</span>
                        {review.verified && (
                          <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckIcon className="w-3 h-3" />
                            Verified
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-slate-400">{review.service}</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">{review.date}</span>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <StarIcon key={j} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="areas" className="py-24 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Need help right now?</h2>
            <a
              href="tel:5550123456"
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all tracking-tight inline-block mb-6"
            >
              (555) 012-3456
            </a>
            <p className="text-slate-400 mb-8">
              Live dispatchers are standing by 24/7.
              <br />
              <span className="text-emerald-400 font-medium">
                ● Currently typical response time: {currentResponseTime} mins
              </span>
            </p>
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 bg-cyan-500 text-white rounded-full font-bold hover:bg-cyan-400 transition-colors inline-flex items-center gap-2"
            >
              <ZapIcon className="w-5 h-5" />
              Or Request Online Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                <ZapIcon className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-lg font-bold">
                Flow<span className="text-cyan-400">Tech</span>
              </span>
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
            </div>
            <p className="text-slate-500 text-sm">
              © 2024 FlowTech. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      <ServiceAreaModal isOpen={serviceAreaOpen} onClose={() => setServiceAreaOpen(false)} />
    </main>
  );
}
