"use client"; 

import { useState, useRef, useEffect, memo } from "react";
import { MessageSquare, X, Send, Bot, MinusCircle, MoreHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from '@splinetool/react-spline';

// --- 1. MEMOIZED ROBOT (Visual Only) ---
const RobotScene = memo(function RobotScene() {
  return (
    <div className="w-full h-full pointer-events-none md:pointer-events-auto">
       <Spline scene="https://prod.spline.design/7u1sFSqNjkJO1NtH/scene.splinecode" />
    </div>
  );
});

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function SalesBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRobot, setShowRobot] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false); 
  const [showBubble, setShowBubble] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Yo. I'm The Foreman. I run the digital job site here. You looking to build something, or just kicking tires?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load Timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Sequence: Show Welcome -> Wait 3s -> Hide Welcome -> Show "..."
  useEffect(() => {
    if (isLoaded && showRobot && !isOpen) {  
        setShowBubble(true);
        const hideTimer = setTimeout(() => {
            setShowBubble(false);
            setShowTrigger(true);
        }, 3000); 
        return () => clearTimeout(hideTimer);
    } else if (isOpen) {
      // Reset when chat opens
      setShowBubble(false);
      setShowTrigger(false);
    }
  }, [isLoaded, showRobot, isOpen]);

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
      let botResponse = "I'm just a demo bot right now, but soon I'll be hooked up to GPT-4 to sell for you.";
      const lowerInput = userMsg.toLowerCase();
      if (lowerInput.includes("price") || lowerInput.includes("cost")) {
        botResponse = "Straight to business. $3,000 for the 'Asset'. One time fee.";
      }
      setMessages(prev => [...prev, { role: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-0 right-0 z-50 flex flex-col items-end pointer-events-none">

        {/* --- ROBOT CONTAINER (CLEAN - NO BUTTONS) --- */}
        {showRobot && isLoaded && !isOpen && (
            <motion.div 
              key="robot-main"
              className="relative pointer-events-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {/* THE 3D SCENE (Visual Only - No Click Handler, No Buttons) */}
              <div key="spline-container" className="w-[250px] h-[250px] md:w-[600px] md:h-[600px] relative z-30">
                 <RobotScene />
              </div>
            </motion.div>
        )}

        {/* --- WELCOME BUBBLE & "..." BUTTON (TOP OF PAGE) --- */}
        {showRobot && isLoaded && !isOpen && (
          <div className="fixed top-6 right-6 z-40 pointer-events-none">
            {/* 1. WELCOME BUBBLE */}
            <AnimatePresence mode="wait">
              {showBubble && (
                  <motion.div 
                      key="welcome-bubble"
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                      className="bg-white text-black px-4 py-3 rounded-xl rounded-tr-none shadow-lg text-xs font-bold whitespace-nowrap"
                  >
                      Welcome in! Click the dots if you need me!
                  </motion.div>
              )}
            </AnimatePresence>

            {/* 2. THE "..." TRIGGER BUTTON */}
            <AnimatePresence mode="wait">
              {showTrigger && !showBubble && (
                  <motion.button
                      key="trigger-button"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsOpen(true)}
                      className="pointer-events-auto bg-white text-black p-2.5 rounded-full shadow-lg hover:bg-kc-accent hover:text-white transition-colors border border-black/10"
                  >
                      <MoreHorizontal className="w-5 h-5" />
                  </motion.button>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* --- FALLBACK BLOB --- */}
        {(!showRobot || !isLoaded) && !isOpen && (
          <motion.div 
            className="fixed top-6 right-6 pointer-events-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => { setIsOpen(true); setShowRobot(false); }}
                className="w-12 h-12 bg-kc-accent rounded-full flex items-center justify-center text-white shadow-lg hover:bg-orange-600 transition-colors relative"
            >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#050505]"></span>
            </motion.button>
          </motion.div>
        )}

        {/* --- CHAT WINDOW (SMALLER, RECTANGULAR) --- */}
        <AnimatePresence>
          {isOpen && (
            <div className="fixed top-20 right-6 z-50 pointer-events-auto">
                <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="w-[90vw] md:w-[360px] h-[420px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                >
                <div className="p-3 bg-white/5 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-kc-accent flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <div className="font-bold text-white text-sm flex items-center gap-2">
                        The Foreman <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] text-kc-muted uppercase">AI</span>
                        </div>
                        <div className="text-xs text-kc-success flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-kc-success animate-pulse"></span>
                        Online
                        </div>
                    </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-kc-muted hover:text-white transition-colors flex-shrink-0">
                        <MinusCircle className="w-5 h-5" />
                    </button>
                </div>

                <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 space-y-3 bg-black/20">
                    {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[80%] p-2.5 rounded-xl text-xs leading-relaxed ${msg.role === "user" ? "bg-kc-accent text-white rounded-br-none" : "bg-white/10 text-white rounded-bl-none border border-white/5"}`}>
                        {msg.text}
                        </div>
                    </div>
                    ))}
                    {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white/5 p-2.5 rounded-xl rounded-bl-none flex gap-1">
                        <span className="w-1 h-1 bg-kc-muted/50 rounded-full animate-bounce"></span>
                        <span className="w-1 h-1 bg-kc-muted/50 rounded-full animate-bounce delay-100"></span>
                        <span className="w-1 h-1 bg-kc-muted/50 rounded-full animate-bounce delay-200"></span>
                        </div>
                    </div>
                    )}
                </div>

                <div className="p-3 bg-white/5 border-t border-white/5">
                    <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about pricing..." 
                        className="flex-1 bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:border-kc-accent focus:outline-none transition-colors"
                    />
                    <button type="submit" className="p-2 bg-white/10 rounded-lg hover:bg-kc-accent hover:text-white transition-colors text-kc-muted flex-shrink-0">
                        <Send className="w-4 h-4" />
                    </button>
                    </form>
                </div>
                </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
