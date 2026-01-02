"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState({ isHovering: false, text: "" });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 400 });
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 400 });

  useEffect(() => {
    setIsMobile('ontouchstart' in window);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === "A" || target.tagName === "BUTTON" || 
                           target.classList.contains("cursor-pointer") ||
                           window.getComputedStyle(target).cursor === "pointer";
      const cursorText = target.getAttribute("data-cursor-text") || "";
      setCursorState({ isHovering: isInteractive, text: cursorText });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-emerald-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          />
          <motion.div
            className="fixed top-0 left-0 border-2 border-emerald-400/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
            style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
            animate={{
              width: cursorState.isHovering ? 60 : 32,
              height: cursorState.isHovering ? 60 : 32,
              opacity: cursorState.isHovering ? 0.6 : 0.3,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
          />
          {cursorState.text && (
            <motion.div
              className="fixed top-0 left-0 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold pointer-events-none z-[9997]"
              style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-200%" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              {cursorState.text}
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
