"use client";

import { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        // --- UPDATED PROPERTIES BELOW ---
        orientation: "vertical",        // changed from 'direction'
        gestureOrientation: "vertical", // changed from 'gestureDirection'
        smoothWheel: true,              // changed from 'smooth'
        touchMultiplier: 2,
        infinite: false,
        // smoothTouch is removed (touch handling is native by default in v1)
      }}
    >
      {children}
    </ReactLenis>
  );
}
