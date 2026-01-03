"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ChevronRight } from "lucide-react";
import { Suspense } from "react";

type ChatStep = 'greeting' | 'portfolio' | 'goals' | 'timeframe' | 'contact' | 'complete';

interface ChatMessage {
  text: string;
  isBot: boolean;
  options?: string[];
}

export default function QualificationBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<ChatStep>('greeting');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const addMessage = (text: string, isBot: boolean, options?: string[]) => {
    setMessages(prev => [...prev, { text, isBot, options }]);
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setTimeout(() => {
        addMessage("Hi! 👋 I'm your AI wealth advisor. I can help you understand your investment options 24/7. What brings you here today?", true, [
          "Grow my wealth",
          "Retirement planning",
          "Tax optimization",
          "Just exploring"
        ]);
      }, 500);
    }
  };

  const handleOptionClick = (option: string) => {
    addMessage(option, false);
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      if (currentStep === 'greeting') {
        addMessage("Great choice! Let me ask a few quick questions to personalize your recommendations. What's your current portfolio size?", true, [
          "Under $100K",
          "$100K - $500K",
          "$500K - $1M",
          "Over $1M"
        ]);
        setCurrentStep('portfolio');
      } else if (currentStep === 'portfolio') {
        addMessage("Perfect! What are your primary financial goals?", true, [
          "Build wealth",
          "Generate income",
          "Preserve capital",
          "All of the above"
        ]);
        setCurrentStep('goals');
      } else if (currentStep === 'goals') {
        addMessage("Excellent! What's your investment timeframe?", true, [
          "1-5 years",
          "5-10 years",
          "10-20 years",
          "20+ years"
        ]);
        setCurrentStep('timeframe');
      } else if (currentStep === 'timeframe') {
        addMessage("Based on your answers, I can create a personalized wealth strategy. Let me connect you with one of our advisors. Please share your contact info:", true);
        setCurrentStep('contact');
      }
    }, 1500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // AUTOMATION TRIGGER - Backend integration
    console.log("🤖 AI CHATBOT: Lead qualification complete");
    console.log("📝 Contact Info:", formData);
    console.log("🔄 Triggering automation stack:");
    console.log("  - Add to CRM (HubSpot)");
    console.log("  - Send to Slack #sales-leads");
    console.log("  - Trigger welcome email sequence");
    console.log("  - AI priority scoring: HOT LEAD");
    console.log("  - Schedule callback within 24 hours");
    console.log("  - Add to retargeting pixel");
    
    addMessage(`${formData.name}, ${formData.email}, ${formData.phone}`, false);
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage("Perfect! 🎉 I've scheduled a callback with our senior advisor within the next 24 hours. You'll also receive an email with your personalized investment analysis. Looking forward to helping you build wealth!", true);
      setCurrentStep('complete');
    }, 1500);
  };

  return (
    <>
      {/* Floating Button with Spline 3D */}
      <motion.button
        onClick={handleOpen}
        className="fixed bottom-6 left-6 w-20 h-20 rounded-2xl shadow-2xl z-50 overflow-hidden border-2 border-emerald-500/30 bg-slate-900/90 backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Suspense fallback={<div className="w-full h-full bg-emerald-500/10" />}>
        </Suspense>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-28 left-6 w-96 h-[600px] bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-4 flex items-center justify-between">
              <div>
                <div className="font-bold text-white">AI Wealth Advisor</div>
                <div className="text-xs text-white/80">Online • Instant Response</div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] ${msg.isBot ? 'bg-slate-800' : 'bg-emerald-600'} rounded-2xl px-4 py-3`}>
                    <div className={`text-sm ${msg.isBot ? 'text-slate-200' : 'text-white'}`}>
                      {msg.text}
                    </div>
                    
                    {msg.options && (
                      <div className="mt-3 space-y-2">
                        {msg.options.map((option, j) => (
                          <button
                            key={j}
                            onClick={() => handleOptionClick(option)}
                            className="w-full bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center justify-between"
                          >
                            {option}
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-800 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 'contact' && !isTyping && (
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleContactSubmit}
                  className="bg-slate-800 rounded-2xl p-4 space-y-3"
                >
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Submit
                  </button>
                </motion.form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
