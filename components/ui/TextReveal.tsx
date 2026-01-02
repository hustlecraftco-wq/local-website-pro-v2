"use client";

import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function TextRevealWords({ 
  children, 
  delay = 0, 
  staggerDelay = 0.05,
  className = ""
}: { 
  children: string; 
  delay?: number; 
  staggerDelay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = children.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: delay + i * staggerDelay, duration: 0.5 }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
}

export function TextRevealChars({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: string; 
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const chars = children.split("");

  return (
    <span ref={ref} className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + i * 0.03, duration: 0.3 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export function TextRevealGradient({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: string; 
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ backgroundPosition: "200% 0" }}
      animate={isInView ? { backgroundPosition: "0% 0" } : {}}
      transition={{ delay, duration: 1.5, ease: "easeInOut" }}
      style={{ backgroundSize: "200% 100%" }}
    >
      {children}
    </motion.span>
  );
}

export function TextRevealSlide({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        className={className}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
        transition={{ delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function TextRevealScale({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
      animate={isInView ? { scale: 1, opacity: 1, filter: "blur(0px)" } : {}}
      transition={{ delay, duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export function TextRevealType({ 
  children, 
  delay = 0,
  speed = 0.05,
  className = ""
}: { 
  children: string; 
  delay?: number;
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const chars = children.split("");

  return (
    <span ref={ref} className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + i * speed, duration: 0 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-current ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
}
