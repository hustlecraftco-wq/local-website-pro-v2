"use client";

import { ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
}

export default function MagneticButton({ 
  children, 
  className = "", 
  strength = 0.3,
  onClick,
  href
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const clientX = e.clientX;
    const clientY = e.clientY;
    // Use requestAnimationFrame to avoid forced reflow
    requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((clientX - centerX) * strength);
      y.set((clientY - centerY) * strength);
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      className={`relative overflow-hidden ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </Component>
  );
}

export function MagneticLink({ children, href, className = "", strength = 0.3 }: MagneticButtonProps & { href: string }) {
  return <MagneticButton href={href} className={className} strength={strength}>{children}</MagneticButton>;
}
