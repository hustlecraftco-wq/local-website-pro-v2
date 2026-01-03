/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. PATH PRECISION: Be specific.
  // Only scan app and components - no unused library CSS
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      // 2. BRAND TOKENS: Your 'kc' design system
      colors: {
        'kc-dark': '#050505',
        'kc-panel': '#0A0A0A',
        'kc-accent': '#ff6b35', 
        'kc-success': '#22c55e', 
        'kc-text': '#E2E8F0',
        'kc-muted': '#94A3B8',
      },
      fontFamily: {
        // Ensure these match your next/font variable names in layout.tsx
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-playfair)', 'ui-serif', 'Georgia'],
        reading: ['var(--font-lora)', 'serif'],
      },
      backgroundImage: {
        'glass': 'linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      // 3. PERFORMANCE ANIMATIONS:
      // marquee at 40s is great, but ensure you use 'will-change-transform' in your JSX
      animation: {
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  
  // 4. PLUGINS: Only add plugins that are actually used
  plugins: [],

  // 5. FUTURE-PROOFING: Stop Tailwind from purging your 3D-related dynamic classes
  safelist: [
    'opacity-0',
    'opacity-100',
    'translate-y-0',
    'translate-y-10',
  ],
};
