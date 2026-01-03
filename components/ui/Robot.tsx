// components/ui/Robot.tsx
"use client";

import { memo, useState, useEffect } from "react"; // Added useState, useEffect
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const RobotScene = dynamic(() => import('./RobotScene'), {
  ssr: false,
  loading: () => <div className="w-10 h-10 border-4 border-slate-600 rounded-full animate-spin"></div>,
});

export default function Robot({ showRobot, isLoaded }: { showRobot: boolean; isLoaded: boolean }) {
  // 1. Add a local state to delay the heavy import
  const [shouldLoad3D, setShouldLoad3D] = useState(false);

  useEffect(() => {
    // 2. Wait 3 seconds after the page loads before asking for the 1.5MB file
    const timer = setTimeout(() => {
      setShouldLoad3D(true);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showRobot && isLoaded && shouldLoad3D && (
        <motion.div 
          key="robot-main"
          className="fixed bottom-0 right-0 z-30 pointer-events-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }} // Slower fade-in looks smoother
        >
          <div className="w-[250px] h-[250px] md:w-[600px] md:h-[600px] relative">
             <RobotScene />
          </div>
        </motion.div>
      )}
    </>
  );
}
