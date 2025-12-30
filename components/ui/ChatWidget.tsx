"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "bot", 
      text: "Hey there! 👋 I'm The Foreman, part of the Local Website Pro team. Welcome! Got any questions about custom web design for contractors?" 
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Great question! That's exactly what we specialize in. Our custom-coded sites load in 0.4 seconds and are built to convert leads. Want to know more about our process?";
      
      const lowerInput = userMsg.toLowerCase();
      if (lowerInput.includes("price") || lowerInput.includes("cost")) {
        botResponse = "Pricing depends on your specific needs, but we offer custom builds for KC contractors starting at $3,000. We focus on ROI, not monthly rental fees. What's your main business?";
      } else if (lowerInput.includes("how long") || lowerInput.includes("timeline")) {
        botResponse = "We can have a custom site live in 48 hours for standard builds. Rush projects? We can go faster. What's your timeline looking like?";
      } else if (lowerInput.includes("lead") || lowerInput.includes("convert")) {
        botResponse = "Our sites are built for conversions - optimized forms, fast load times, and clear CTAs. We've helped KC plumbers and HVAC contractors 3x their lead volume. Want to see some examples?";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        botResponse = "Hey! Great to meet you! 🤝 I'm here to answer any questions about building your custom website. What brings you in today?";
      }
      
      setMessages(prev => [...prev, { role: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Chat Button (Floating) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-40 bg-kc-accent hover:bg-orange-600 text-white rounded-full p-4 shadow-lg transition-all"
          >
            <Bot className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 w-[90vw] md:w-[420px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-kc-accent to-orange-600 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">The Foreman</div>
                  <div className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Always here to help
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40 max-h-[400px]">
              {messages.map((msg, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-kc-accent text-white rounded-br-none" 
                      : "bg-white/10 text-white border border-white/10 rounded-bl-none"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-lg rounded-bl-none border border-white/10 flex gap-2">
                    <span className="w-2 h-2 bg-kc-accent rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-kc-accent rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-kc-accent rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..." 
                  className="flex-1 bg-[#050505] border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:border-kc-accent focus:outline-none transition-colors"
                />
                <button 
                  type="submit" 
                  className="p-2.5 bg-kc-accent hover:bg-orange-600 rounded-lg text-white transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
