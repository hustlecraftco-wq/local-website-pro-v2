"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================================
// Icon Components - Soft, Medical-Themed
// ============================================================================

interface IconProps {
  className?: string;
}

function HeartPulseIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 12h3l1.5-3 2 6 2-4 1.5 2h3" />
    </svg>
  );
}

function CalendarIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function UserIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function StarIcon({ className, filled = false }: IconProps & { filled?: boolean }) {
  return (
    <svg className={className} fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function MapPinIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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

function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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

function VideoIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

function StethoscopeIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3v3.879c0 .663-.357 1.275-.93 1.599L6.5 9.758A2.25 2.25 0 0 0 5.25 11.8V13.5a4.5 4.5 0 0 0 9 0v-1.7a2.25 2.25 0 0 0-1.25-2.042l-2.32-1.28A1.875 1.875 0 0 1 9.75 6.88V3M14.25 3v3.879c0 .663.357 1.275.93 1.599l2.32 1.28a2.25 2.25 0 0 1 1.25 2.042v.45" />
      <circle cx="18.75" cy="15.75" r="2.25" />
    </svg>
  );
}

function BabyIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="8" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 20.25c0-3.314 3.022-6 6.75-6s6.75 2.686 6.75 6" />
    </svg>
  );
}

function HeartIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  );
}

function SparklesIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  );
}

// ============================================================================
// Data - Providers, Reviews, Services
// ============================================================================

const PROVIDERS = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    title: "MD, FAAFP",
    specialty: "Family Medicine",
    image: "EC",
    experience: "15+ Years",
    education: ["Johns Hopkins University School of Medicine", "UCLA Medical Center Residency"],
    certifications: ["Board Certified - Family Medicine", "Fellow, American Academy of Family Physicians"],
    specialInterests: ["Preventive Care", "Women's Health", "Chronic Disease Management"],
    languages: ["English", "Mandarin"],
    bio: "Dr. Chen brings a compassionate, patient-centered approach to family medicine. She believes in building long-term relationships with her patients to help them achieve their best health.",
    acceptingNew: true,
    nextAvailable: "Today, 3:00 PM"
  },
  {
    id: 2,
    name: "Dr. James Martinez",
    title: "DO",
    specialty: "Internal Medicine",
    image: "JM",
    experience: "12+ Years",
    education: ["University of Kansas School of Medicine", "KUMC Internal Medicine Residency"],
    certifications: ["Board Certified - Internal Medicine", "Certified in Diabetes Care"],
    specialInterests: ["Diabetes Management", "Heart Health", "Geriatric Care"],
    languages: ["English", "Spanish"],
    bio: "Dr. Martinez focuses on providing comprehensive care for adults, with particular expertise in managing complex chronic conditions and helping patients navigate their health journey.",
    acceptingNew: true,
    nextAvailable: "Tomorrow, 9:30 AM"
  },
  {
    id: 3,
    name: "Dr. Sarah Williams",
    title: "MD",
    specialty: "Pediatrics",
    image: "SW",
    experience: "10+ Years",
    education: ["Washington University School of Medicine", "Children's Mercy Pediatric Residency"],
    certifications: ["Board Certified - Pediatrics", "Certified in Adolescent Medicine"],
    specialInterests: ["Newborn Care", "Developmental Milestones", "Adolescent Health"],
    languages: ["English"],
    bio: "Dr. Williams is passionate about helping children thrive from infancy through adolescence. She creates a warm, welcoming environment where kids feel safe and parents feel supported.",
    acceptingNew: true,
    nextAvailable: "Today, 4:15 PM"
  }
];

const REVIEW_SOURCES = [
  { name: "Google", rating: 4.9, count: 487, color: "bg-blue-500" },
  { name: "Healthgrades", rating: 4.8, count: 234, color: "bg-teal-500" },
  { name: "Vitals", rating: 4.9, count: 156, color: "bg-green-500" },
  { name: "Zocdoc", rating: 4.7, count: 89, color: "bg-purple-500" }
];

const PATIENT_REVIEWS = [
  {
    id: 1,
    name: "Jennifer M.",
    rating: 5,
    date: "3 days ago",
    source: "Google",
    provider: "Dr. Emily Chen",
    text: "Dr. Chen is incredibly thorough and genuinely listens. The office staff was warm and welcoming, and the online booking made scheduling so easy. I finally feel like I have a doctor who truly cares about my health.",
    verified: true
  },
  {
    id: 2,
    name: "Michael R.",
    rating: 5,
    date: "1 week ago",
    source: "Healthgrades",
    provider: "Dr. James Martinez",
    text: "As someone with diabetes, I appreciate Dr. Martinez's expertise and the time he takes to explain everything. The practice uses the latest technology for monitoring, and the staff always follows up to make sure I'm doing well.",
    verified: true
  },
  {
    id: 3,
    name: "Amanda L.",
    rating: 5,
    date: "2 weeks ago",
    source: "Google",
    provider: "Dr. Sarah Williams",
    text: "We bring all three of our kids here, and Dr. Williams is amazing with each of them. She makes even shots less scary! The same-day appointment availability has been a lifesaver with little ones.",
    verified: true
  },
  {
    id: 4,
    name: "David K.",
    rating: 5,
    date: "2 weeks ago",
    source: "Zocdoc",
    provider: "Dr. Emily Chen",
    text: "After years of not having a primary care doctor, I'm so glad I found this practice. The telehealth option is perfect for my busy schedule, and Dr. Chen has been proactive about preventive care.",
    verified: true
  }
];

const SERVICES = [
  {
    id: 1,
    icon: StethoscopeIcon,
    title: "Primary Care",
    description: "Comprehensive health management including annual physicals, preventive screenings, and chronic condition care.",
    color: "teal"
  },
  {
    id: 2,
    icon: BabyIcon,
    title: "Pediatric Care",
    description: "Nurturing care for infants through teens including well-child visits, vaccinations, and developmental support.",
    color: "sky"
  },
  {
    id: 3,
    icon: HeartIcon,
    title: "Women's Health",
    description: "Complete women's care including annual exams, family planning, and menopause management.",
    color: "rose"
  },
  {
    id: 4,
    icon: VideoIcon,
    title: "Telehealth",
    description: "Convenient virtual visits for follow-ups, minor concerns, and prescription refills from home.",
    color: "violet"
  },
  {
    id: 5,
    icon: HeartPulseIcon,
    title: "Chronic Care",
    description: "Expert management of diabetes, hypertension, thyroid conditions, and other ongoing health needs.",
    color: "amber"
  },
  {
    id: 6,
    icon: SparklesIcon,
    title: "Preventive Wellness",
    description: "Health coaching, nutrition counseling, and lifestyle medicine to help you thrive.",
    color: "emerald"
  }
];

const APPOINTMENT_TYPES = [
  { id: "new-patient", label: "New Patient Visit", duration: "60 min" },
  { id: "annual", label: "Annual Physical", duration: "45 min" },
  { id: "follow-up", label: "Follow-Up Visit", duration: "20 min" },
  { id: "sick", label: "Sick Visit", duration: "20 min" },
  { id: "telehealth", label: "Telehealth Visit", duration: "20 min" }
];

const AVAILABLE_TIMES = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"
];

const INSURANCE_ACCEPTED = [
  "Blue Cross Blue Shield", "Aetna", "United Healthcare", "Cigna", "Humana",
  "Medicare", "Medicaid", "Anthem", "Kaiser Permanente"
];

// ============================================================================
// Booking Modal Component
// ============================================================================

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProvider?: typeof PROVIDERS[0];
}

function BookingModal({ isOpen, onClose, preselectedProvider }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [appointmentType, setAppointmentType] = useState("");
  const [provider, setProvider] = useState(preselectedProvider?.id.toString() || "");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    insurance: "",
    reason: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Generate next 14 days for date selection
  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      date: date.toISOString().split('T')[0],
      label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' })
    };
  }).filter(d => !['Sat', 'Sun'].includes(d.dayName));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsConfirmed(true);
  };

  const resetAndClose = () => {
    setStep(1);
    setAppointmentType("");
    setProvider(preselectedProvider?.id.toString() || "");
    setSelectedDate("");
    setSelectedTime("");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", dob: "", insurance: "", reason: "" });
    setIsConfirmed(false);
    onClose();
  };

  const selectedProviderData = PROVIDERS.find(p => p.id.toString() === provider);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={resetAndClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-4 text-white flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Book Your Appointment</h2>
                <p className="text-teal-100 text-sm">
                  {!isConfirmed && `Step ${step} of 3`}
                  {isConfirmed && "Confirmed!"}
                </p>
              </div>
              <button
                onClick={resetAndClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            {!isConfirmed && (
              <div className="h-1 bg-teal-100">
                <div
                  className="h-full bg-teal-500 transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {isConfirmed ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Confirmed!</h3>
                  <p className="text-gray-600 mb-6">
                    We&apos;ve sent a confirmation to {formData.email}
                  </p>
                  <div className="bg-teal-50 rounded-xl p-4 text-left max-w-sm mx-auto">
                    <p className="text-sm text-teal-600 font-medium mb-2">Appointment Details</p>
                    <p className="font-semibold text-gray-900">{selectedProviderData?.name}</p>
                    <p className="text-gray-600">
                      {availableDates.find(d => d.date === selectedDate)?.label} at {selectedTime}
                    </p>
                    <p className="text-gray-600">
                      {APPOINTMENT_TYPES.find(t => t.id === appointmentType)?.label}
                    </p>
                  </div>
                </div>
              ) : step === 1 ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      What type of visit do you need?
                    </label>
                    <div className="grid gap-3">
                      {APPOINTMENT_TYPES.map(type => (
                        <button
                          key={type.id}
                          onClick={() => setAppointmentType(type.id)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            appointmentType === type.id
                              ? "border-teal-500 bg-teal-50"
                              : "border-gray-200 hover:border-teal-300"
                          }`}
                        >
                          <span className="font-medium text-gray-900">{type.label}</span>
                          <span className="text-gray-500 text-sm ml-2">({type.duration})</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select a provider
                    </label>
                    <div className="grid gap-3">
                      {PROVIDERS.map(p => (
                        <button
                          key={p.id}
                          onClick={() => setProvider(p.id.toString())}
                          className={`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                            provider === p.id.toString()
                              ? "border-teal-500 bg-teal-50"
                              : "border-gray-200 hover:border-teal-300"
                          }`}
                        >
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold">
                            {p.image}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{p.name}</p>
                            <p className="text-sm text-gray-500">{p.specialty}</p>
                          </div>
                          {p.acceptingNew && (
                            <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                              Accepting New
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : step === 2 ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select a date
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {availableDates.slice(0, 10).map(d => (
                        <button
                          key={d.date}
                          onClick={() => setSelectedDate(d.date)}
                          className={`p-3 rounded-xl border-2 text-center transition-all ${
                            selectedDate === d.date
                              ? "border-teal-500 bg-teal-50"
                              : "border-gray-200 hover:border-teal-300"
                          }`}
                        >
                          <p className="text-xs text-gray-500">{d.dayName}</p>
                          <p className="font-semibold text-gray-900">{d.label.split(' ')[1]} {d.label.split(' ')[2]}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Select a time
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {AVAILABLE_TIMES.map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-xl border-2 text-center transition-all ${
                              selectedTime === time
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-teal-300"
                            }`}
                          >
                            <span className="font-medium text-gray-900">{time}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none"
                      placeholder="(816) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dob"
                      value={formData.dob}
                      onChange={e => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-1">
                      Insurance Provider
                    </label>
                    <select
                      id="insurance"
                      value={formData.insurance}
                      onChange={e => setFormData({ ...formData, insurance: e.target.value })}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none"
                    >
                      <option value="">Select your insurance</option>
                      {INSURANCE_ACCEPTED.map(ins => (
                        <option key={ins} value={ins}>{ins}</option>
                      ))}
                      <option value="self-pay">Self Pay</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                      Reason for Visit (Optional)
                    </label>
                    <textarea
                      id="reason"
                      value={formData.reason}
                      onChange={e => setFormData({ ...formData, reason: e.target.value })}
                      rows={3}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none resize-none"
                      placeholder="Briefly describe the reason for your visit..."
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {!isConfirmed && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}
                <button
                  onClick={() => {
                    if (step < 3) setStep(step + 1);
                    else handleSubmit();
                  }}
                  disabled={(step === 1 && (!appointmentType || !provider)) ||
                           (step === 2 && (!selectedDate || !selectedTime)) ||
                           (step === 3 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone)) ||
                           isSubmitting}
                  className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Booking...
                    </>
                  ) : step < 3 ? (
                    "Continue"
                  ) : (
                    "Confirm Booking"
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
// Provider Detail Modal
// ============================================================================

interface ProviderModalProps {
  provider: typeof PROVIDERS[0] | null;
  onClose: () => void;
  onBookWithProvider: (provider: typeof PROVIDERS[0]) => void;
}

function ProviderModal({ provider, onClose, onBookWithProvider }: ProviderModalProps) {
  if (!provider) return null;

  return (
    <AnimatePresence>
      {provider && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-8 text-center text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <XIcon className="w-5 h-5" />
              </button>
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                {provider.image}
              </div>
              <h2 className="text-2xl font-bold">{provider.name}</h2>
              <p className="text-teal-100">{provider.title}</p>
              <p className="text-white/90 mt-1">{provider.specialty}</p>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[50vh]">
              <p className="text-gray-600 mb-6">{provider.bio}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                  <ul className="space-y-1">
                    {provider.education.map((edu, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-teal-500 mt-1">•</span>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
                  <ul className="space-y-1">
                    {provider.certifications.map((cert, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                        <CheckIcon className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Special Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {provider.specialInterests.map((interest, i) => (
                      <span key={i} className="bg-teal-50 text-teal-700 text-sm px-3 py-1 rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                  <p className="text-gray-600">{provider.languages.join(", ")}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-teal-50 border-t border-teal-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-teal-600 font-medium">Next Available</p>
                  <p className="font-semibold text-gray-900">{provider.nextAvailable}</p>
                </div>
                <button
                  onClick={() => onBookWithProvider(provider)}
                  className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Book with {provider.name.split(' ')[1]}
                </button>
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

export default function MedicalPracticePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<typeof PROVIDERS[0] | null>(null);
  const [bookingProvider, setBookingProvider] = useState<typeof PROVIDERS[0] | undefined>(undefined);
  const [activeReviewSource, setActiveReviewSource] = useState("all");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookWithProvider = (provider: typeof PROVIDERS[0]) => {
    setSelectedProvider(null);
    setBookingProvider(provider);
    setBookingOpen(true);
  };

  const totalReviews = REVIEW_SOURCES.reduce((acc, src) => acc + src.count, 0);
  const averageRating = (REVIEW_SOURCES.reduce((acc, src) => acc + src.rating * src.count, 0) / totalReviews).toFixed(1);

  const filteredReviews = activeReviewSource === "all"
    ? PATIENT_REVIEWS
    : PATIENT_REVIEWS.filter(r => r.source === activeReviewSource);

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-cyan-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="#" className="flex items-center gap-2">
              <HeartPulseIcon className={`w-8 h-8 ${isScrolled ? "text-teal-600" : "text-white"}`} />
              <span className={`text-xl font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>
                Harmony Health
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {["Services", "Providers", "Reviews", "Insurance", "Contact"].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors ${
                    isScrolled ? "text-gray-600 hover:text-teal-600" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setBookingOpen(true)}
                className="bg-teal-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/25"
              >
                Book Online
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <MenuIcon className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t shadow-lg"
            >
              <div className="px-4 py-4 space-y-3">
                {["Services", "Providers", "Reviews", "Insurance", "Contact"].map(item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-gray-600 hover:text-teal-600 font-medium"
                  >
                    {item}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setBookingOpen(true);
                  }}
                  className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
                >
                  Book Online
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section - Soft, Calming */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-500 overflow-hidden">
        {/* Soft abstract shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-32 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
                <ShieldCheckIcon className="w-4 h-4" />
                Accepting New Patients
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Healthcare That Feels Like{" "}
                <span className="text-cyan-200">Home</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience personalized, compassionate care for your whole family.
                Same-day appointments, telehealth options, and providers who truly listen.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-xl shadow-black/10 flex items-center gap-2"
                >
                  <CalendarIcon className="w-5 h-5" />
                  Book Appointment
                </button>
                <a
                  href="tel:8165550123"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  (816) 555-0123
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5" />
                  <span>Same-Day Visits</span>
                </div>
                <div className="flex items-center gap-2">
                  <VideoIcon className="w-5 h-5" />
                  <span>Telehealth Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5" filled />
                  <span>{averageRating} Rating ({totalReviews} reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Booking Bar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl shadow-teal-900/10 p-6 sm:p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Schedule?</h2>
              <p className="text-gray-600">
                Book online in minutes. See real-time availability.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-teal-50 px-6 py-4 rounded-xl">
                <p className="text-sm text-teal-600 font-medium">Next Available</p>
                <p className="text-xl font-bold text-gray-900">Today, 2:30 PM</p>
              </div>
              <button
                onClick={() => setBookingOpen(true)}
                className="bg-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Book This Slot
                <CalendarIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Care for Every Stage of Life
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From newborns to seniors, we provide complete medical services with compassion and expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const colorClasses: Record<string, string> = {
              teal: "bg-teal-100 text-teal-600",
              sky: "bg-sky-100 text-sky-600",
              rose: "bg-rose-100 text-rose-600",
              violet: "bg-violet-100 text-violet-600",
              amber: "bg-amber-100 text-amber-600",
              emerald: "bg-emerald-100 text-emerald-600"
            };
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-teal-200 transition-all group cursor-pointer"
                onClick={() => setBookingOpen(true)}
              >
                <div className={`w-14 h-14 rounded-xl ${colorClasses[service.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Providers Section */}
      <section id="providers" className="bg-gradient-to-b from-teal-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Care Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced, compassionate providers dedicated to your health and well-being.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROVIDERS.map((provider, i) => (
              <motion.div
                key={provider.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-8 text-center text-white">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-4 text-3xl font-bold group-hover:scale-110 transition-transform">
                    {provider.image}
                  </div>
                  <h3 className="text-xl font-bold">{provider.name}</h3>
                  <p className="text-teal-100">{provider.title}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-teal-600 font-semibold">{provider.specialty}</span>
                    <span className="text-gray-500 text-sm">{provider.experience}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{provider.bio}</p>

                  {provider.acceptingNew && (
                    <div className="bg-green-50 text-green-700 text-sm px-3 py-2 rounded-lg mb-4 flex items-center gap-2">
                      <CheckIcon className="w-4 h-4" />
                      Accepting New Patients
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProvider(provider)}
                      className="flex-1 py-2 text-teal-600 font-semibold border-2 border-teal-200 rounded-lg hover:bg-teal-50 transition-colors"
                    >
                      View Bio
                    </button>
                    <button
                      onClick={() => handleBookWithProvider(provider)}
                      className="flex-1 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Aggregator Section */}
      <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by {totalReviews.toLocaleString()} patients across Kansas City
          </p>
        </motion.div>

        {/* Review Sources Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="text-center lg:text-left lg:border-r lg:border-gray-200 lg:pr-8">
              <div className="flex items-center justify-center lg:justify-start gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <StarIcon key={star} className="w-8 h-8 text-amber-400" filled />
                ))}
              </div>
              <p className="text-4xl font-bold text-gray-900">{averageRating}</p>
              <p className="text-gray-600">Overall Rating</p>
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {REVIEW_SOURCES.map(source => (
                <button
                  key={source.name}
                  onClick={() => setActiveReviewSource(activeReviewSource === source.name ? "all" : source.name)}
                  className={`p-4 rounded-xl transition-all ${
                    activeReviewSource === source.name
                      ? "bg-teal-100 border-2 border-teal-500"
                      : "bg-gray-50 border-2 border-transparent hover:border-gray-200"
                  }`}
                >
                  <div className={`w-10 h-10 ${source.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <span className="text-white font-bold text-sm">{source.name[0]}</span>
                  </div>
                  <p className="font-bold text-gray-900">{source.rating}</p>
                  <p className="text-xs text-gray-500">{source.count} reviews</p>
                  <p className="text-sm font-medium text-gray-700">{source.name}</p>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredReviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">{review.name}</span>
                    {review.verified && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckIcon className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{review.provider} • {review.date}</p>
                </div>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">{review.source}</span>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <StarIcon key={j} className="w-5 h-5 text-amber-400" filled />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center gap-2">
            View All {totalReviews} Reviews
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Insurance Section */}
      <section id="insurance" className="bg-gradient-to-b from-white to-teal-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Insurance & Payment
            </h2>
            <p className="text-lg text-gray-600">
              We accept most major insurance plans and offer flexible payment options.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="font-bold text-gray-900 text-lg mb-6 text-center">Accepted Insurance Plans</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {INSURANCE_ACCEPTED.map(insurance => (
                <div
                  key={insurance}
                  className="bg-gray-50 px-6 py-3 rounded-lg text-gray-700 font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors"
                >
                  {insurance}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-600 mb-4">
                Don&apos;t see your insurance? Give us a call to verify coverage.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:8165550123"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700"
                >
                  <PhoneIcon className="w-5 h-5" />
                  (816) 555-0123
                </a>
                <span className="text-gray-300">|</span>
                <span className="text-gray-600">Self-pay & payment plans available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">123 Wellness Way</p>
                  <p className="text-gray-600">Kansas City, MO 64111</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                  <p className="text-gray-600">Monday – Friday: 8:00 AM – 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM – 12:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Contact</h3>
                  <p className="text-gray-600">Phone: (816) 555-0123</p>
                  <p className="text-gray-600">Fax: (816) 555-0124</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-teal-100 mb-8">
              Book your appointment online in just a few clicks, or give us a call.
              We&apos;re here to help you feel your best.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full bg-white text-teal-600 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-colors flex items-center justify-center gap-2"
              >
                <CalendarIcon className="w-5 h-5" />
                Book Appointment Online
              </button>
              <a
                href="tel:8165550123"
                className="w-full bg-white/10 backdrop-blur text-white py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2 border border-white/20"
              >
                <PhoneIcon className="w-5 h-5" />
                Call (816) 555-0123
              </a>
            </div>

            <p className="text-center text-teal-100 text-sm mt-6">
              Same-day appointments often available
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <HeartPulseIcon className="w-8 h-8 text-teal-400" />
              <span className="text-xl font-bold">Harmony Health</span>
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Patient Portal</a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Harmony Health. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => {
          setBookingOpen(false);
          setBookingProvider(undefined);
        }}
        preselectedProvider={bookingProvider}
      />
      <ProviderModal
        provider={selectedProvider}
        onClose={() => setSelectedProvider(null)}
        onBookWithProvider={handleBookWithProvider}
      />
    </main>
  );
}
