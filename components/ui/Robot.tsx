"use client";

import { useState, useEffect } from "react"; 
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Internal dynamic import (The second layer of defense)
const RobotScene = dynamic(() => import('./RobotScene'), {
  ssr: false,
  loading: () => <div className="w-10 h-10 border-4 border-slate-600 rounded-full animate-spin"></div>,
});

export default function Robot({ showRobot, isLoaded }: { showRobot: boolean; isLoaded: boolean }) {
  const [shouldLoad3D, setShouldLoad3D] = useState(false);

  useEffect(() => {
    // 1.5 second delay allows other assets to settle first
    const timer = setTimeout(() => {
      setShouldLoad3D(true);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (!showRobot || !isLoaded || !shouldLoad3D) return null;

  return (
    <motion.div 
      key="robot-main"
      className="fixed bottom-0 right-0 z-30 pointer-events-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }} 
    >
      <div className="w-[250px] h-[250px] md:w-[600px] md:h-[600px] relative">
          <RobotScene />
      </div>
    </motion.div>
  );
}
