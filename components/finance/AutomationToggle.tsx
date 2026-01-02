"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Zap, Mail, Calendar, BarChart3, Target, Users } from "lucide-react";

export default function AutomationToggle() {
  const [showAutomation, setShowAutomation] = useState(false);

  const automations = [
    {
      icon: Target,
      title: "Lead Capture Optimization",
      metric: "+340% engagement",
      description: "Smart forms with progressive profiling",
      details: "A/B tested headlines, +28% CTR on CTAs"
    },
    {
      icon: Users,
      title: "Smart Lead Qualification",
      metric: "67% email capture",
      description: "AI chatbot pre-qualifies prospects 24/7",
      details: "42% of chats convert to SQL"
    },
    {
      icon: Zap,
      title: "24/7 AI Qualification",
      metric: "89% automation rate",
      description: "Instant responses, zero wait time",
      details: "0.3s average response time"
    },
    {
      icon: Mail,
      title: "Email Nurture Sequences",
      metric: "34% open rate",
      description: "Personalized drip campaigns based on behavior",
      details: "8.2% meeting conversion rate"
    },
    {
      icon: Calendar,
      title: "Calendar Sync & Reminders",
      metric: "78% no-show reduction",
      description: "Auto-scheduling with SMS confirmations",
      details: "Syncs with advisor calendars"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      metric: "60s data latency",
      description: "Live dashboard with attribution tracking",
      details: "100% lead source attribution"
    }
  ];

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setShowAutomation(!showAutomation)}
        className="fixed bottom-6 right-6 z-40 bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-2xl flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        {showAutomation ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        {showAutomation ? "Hide Backend" : "Show Backend"}
      </motion.button>

      {/* Automation Overlays */}
      <AnimatePresence>
        {showAutomation && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 pointer-events-none"
            />

            {/* Automation Cards */}
            {automations.map((auto, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ delay: i * 0.1 }}
                className="fixed z-30 pointer-events-none"
                style={{
                  top: `${15 + (i % 3) * 30}%`,
                  left: i < 3 ? '5%' : 'auto',
                  right: i >= 3 ? '5%' : 'auto',
                }}
              >
                <div className="bg-slate-900/95 backdrop-blur-xl border-2 border-amber-500/50 rounded-2xl p-6 w-80 shadow-2xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-500/20 rounded-xl">
                      <auto.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white mb-1">{auto.title}</div>
                      <div className="text-xs text-amber-400 font-mono mb-2">{auto.metric}</div>
                      <div className="text-sm text-slate-300 mb-2">{auto.description}</div>
                      <div className="text-xs text-slate-500">{auto.details}</div>
                    </div>
                  </div>
                  
                  {/* Animated pulse indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">LIVE</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </>
  );
}
