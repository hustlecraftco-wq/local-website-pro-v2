"use client";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function SalesBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Yo. I'm The Foreman. I run the digital job site here. You looking to build something, or just kicking tires?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // 1. Add User Message
    const userMsg = input;
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    // 2. SIMULATED AI RESPONSE (We will connect real OpenAI later)
    // This is hardcoded logic just for the demo
    setTimeout(() => {
      let botResponse = "I'm just a demo bot right now, but soon I'll be hooked up to GPT-4 to sell for you.";
      
      const lowerInput = userMsg.toLowerCase();
      if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("much")) {
        botResponse = "Straight to business. $3,000 for the 'Asset'. One time fee. You own the code. No monthly rent. Want to see what's included?";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        botResponse = "What's up? Ready to stop renting your website?";
      } else if (lowerInput.includes("tracking") || lowerInput.includes("seo")) {
        botResponse = "We track everything. Calls, clicks, revenue. If it doesn't make dollars, it doesn't make sense.";
      }

      setMessages(prev => [...prev, { role: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* 1. THE FLOATING TRIGGER BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-kc-accent text-white rounded-full shadow-2xl shadow-orange-900/40 hover:scale-110 transition-transform flex items-center justify-center group"
      >
        {isOpen ? <X /> : <MessageSquare className="w-6 h-6 fill-current" />}
        
        {/* Notification Dot */}
        {!isOpen && (
           <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#050505]"></span>
        )}
      </button>

      {/* 2. THE CHAT WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[380px] h-[500px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-kc-accent flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white flex items-center gap-2">
                  The Foreman <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-kc-muted uppercase">AI</span>
                </div>
                <div className="text-xs text-kc-success flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-kc-success animate-pulse"></span>
                  Online
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user" 
                        ? "bg-kc-accent text-white rounded-br-none" 
                        : "bg-white/10 text-kc-text rounded-bl-none border border-white/5"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                   <div className="bg-white/5 p-3 rounded-2xl rounded-bl-none flex gap-1">
                      <span className="w-1.5 h-1.5 bg-kc-muted/50 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-kc-muted/50 rounded-full animate-bounce delay-100"></span>
                      <span className="w-1.5 h-1.5 bg-kc-muted/50 rounded-full animate-bounce delay-200"></span>
                   </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/5 border-t border-white/5">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about pricing..." 
                  className="flex-1 bg-[#050505] border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:border-kc-accent focus:outline-none transition-colors"
                />
                <button type="submit" className="p-2 bg-white/10 rounded-xl hover:bg-kc-accent hover:text-white transition-colors text-kc-muted">
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
