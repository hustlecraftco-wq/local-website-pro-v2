"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
}

export default function Parallax({ 
  children, 
  speed = 0.5, 
  direction = "up",
  className = ""
}: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function ParallaxImage({ 
  src, 
  alt, 
  speed = 0.3,
  className = ""
}: { 
  src: string; 
  alt: string; 
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} style={{ y, scale }} className="w-full h-full object-cover" />
    </div>
  );
}

export function ParallaxText({ 
  children, 
  speed = 0.2,
  className = ""
}: { 
  children: ReactNode; 
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30 * speed, -30 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

export function ParallaxHorizontal({ 
  children, 
  speed = 0.3,
  direction = "left",
  className = ""
}: ParallaxProps & { direction?: "left" | "right" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [50 * speed, -50 * speed] : [-50 * speed, 50 * speed]
  );

  return (
    <motion.div ref={ref} style={{ x }} className={className}>
      {children}
    </motion.div>
  );
}

export function ParallaxScale({ 
  children, 
  scaleRange = [0.8, 1.2],
  className = ""
}: { 
  children: ReactNode; 
  scaleRange?: [number, number];
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], 1, scaleRange[1]]);

  return (
    <motion.div ref={ref} style={{ scale }} className={className}>
      {children}
    </motion.div>
  );
}
