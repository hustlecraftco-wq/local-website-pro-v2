"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

const RobotScene = memo(function RobotScene() {
  return (
    <div className="w-full h-full pointer-events-auto md:pointer-events-auto">
       <Spline scene="https://prod.spline.design/7u1sFSqNjkJO1NtH/scene.splinecode" />
    </div>
  );
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
