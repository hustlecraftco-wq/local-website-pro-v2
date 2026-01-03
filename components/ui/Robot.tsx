"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const RobotScene = dynamic(() => import('./RobotScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
       <div className="w-10 h-10 border-4 border-slate-600 border-t-cyan-400 rounded-full animate-spin"></div>
    </div>
  ),
});

export default function Robot({ showRobot, isLoaded }: { showRobot: boolean; isLoaded: boolean }) {
  return (
    <>
      {showRobot && isLoaded && (
        <motion.div 
          key="robot-main"
          className="fixed bottom-0 right-0 z-30 pointer-events-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-[250px] h-[250px] md:w-[600px] md:h-[600px] relative">
             <RobotScene />
          </div>
        </motion.div>
      )}
    </>
  );
}
