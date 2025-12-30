"use client"; 

import { useState, useRef, useEffect, memo } from "react";
import { MessageSquare, X, Send, Bot, MinusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from '@splinetool/react-spline';

// --- 1. MEMOIZED ROBOT (Isolates 3D Scene) ---
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
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Yo. I'm The Foreman. I run the digital job site here. You looking to build something, or just kicking tires?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded && showRobot) {
        setShowBubble(true);
        const hideTimer = setTimeout(() => setShowBubble(false), 3000); 
        return () => clearTimeout(hideTimer);
    }
  }, [isLoaded, showRobot]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleDismissRobot = (e: any) => {
    e.stopPropagation();
    setShowRobot(false); 
  };

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

        {/* --- ROBOT CONTAINER --- */}
        {/* FIX: Removed 'group' and all hover/transform CSS classes */}
        {showRobot && isLoaded && !isOpen && (
            <div className="relative pointer-events-auto">
              
              {/* DISMISS BUTTON */}
              {/* FIX: Removed 'group-hover' logic. It is now always visible but subtle. */}
              <button 
                onClick={handleDismissRobot}
                className="absolute top-[20%] right-[10%] z-40 bg-black/40 hover:bg-red-500 text-white p-1.5 rounded-full backdrop-blur-md border border-white/10 transition-colors"
                title="Put robot away"
              >
                <X className="w-3 h-3" />
              </button>

              {/* SPEECH BUBBLE */}
              <AnimatePresence>
                {showBubble && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="cursor-pointer absolute top-[10%] right-[15%] bg-white text-black px-4 py-3 rounded-xl rounded-br-none shadow-xl text-xs font-bold whitespace-nowrap origin-bottom-right z-40 max-w-[200px] md:max-w-none whitespace-normal text-center md:text-left"
                    >
                        Welcome in! Click if you have any questions!
                    </motion.div>
                )}
              </AnimatePresence>

              {/* THE 3D SCENE */}
              {/* FIX: Removed hover scales. Kept it purely static dimensions. */}
              <div 
                onClick={() => setIsOpen(true)}
                className="w-[250px] h-[250px] md:w-[600px] md:h-[600px] cursor-pointer relative z-30"
              >
                 <RobotScene />
              </div>
            </div>
        )}

        {/* --- FALLBACK BLOB --- */}
        {(!showRobot || !isLoaded) && !isOpen && (
          <div className="fixed bottom-6 right-6 pointer-events-auto">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => { setIsOpen(true); setShowRobot(false); }}
                className="w-14 h-14 bg-kc-accent rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-900/30 hover:bg-orange-600 transition-colors relative"
            >
                <MessageSquare className="w-6 h-6 fill-current" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#050505]"></span>
            </motion.button>
          </div>
        )}

        {/* --- CHAT WINDOW --- */}
        <AnimatePresence>
          {isOpen && (
            <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
                <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="w-[90vw] md:w-[380px] h-[500px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                >
                <div className="p-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
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
                    <button onClick={() => setIsOpen(false)} className="text-kc-muted hover:text-white transition-colors">
                        <MinusCircle className="w-6 h-6" />
                    </button>
                </div>

                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
                    {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-kc-accent text-white rounded-br-none" : "bg-white/10 text-white rounded-bl-none border border-white/5"}`}>
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

                <div className="p-4 bg-white/5 border-t border-white/5">
                    <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
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
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
