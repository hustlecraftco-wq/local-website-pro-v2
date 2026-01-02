"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children?: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export default function Parallax({ 
  children, 
  speed = 1, 
  direction = 'up',
  className = "" 
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed * multiplier]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

export function ParallaxImage({ 
  src, 
  alt, 
  speed = 0.5,
  className = "" 
}: { 
  src: string; 
  alt: string; 
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img 
        src={src} 
        alt={alt}
        style={{ y, scale }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function ParallaxText({ 
  children, 
  speed = 0.3,
  className = "" 
}: { 
  children: ReactNode; 
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </div>
  );
}

export function ParallaxHorizontal({ 
  children, 
  speed = 0.5,
  direction = 'right',
  className = "" 
}: { 
  children: ReactNode; 
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const multiplier = direction === 'right' ? 1 : -1;
  const x = useTransform(scrollYProgress, [0, 1], [0, 100 * speed * multiplier]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ x }}>
        {children}
      </motion.div>
    </div>
  );
}

export function ParallaxRotate({ 
  children, 
  speed = 45,
  className = "" 
}: { 
  children: ReactNode; 
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, speed]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ rotate }}>
        {children}
      </motion.div>
    </div>
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
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale }}>
        {children}
      </motion.div>
    </div>
  );
}
