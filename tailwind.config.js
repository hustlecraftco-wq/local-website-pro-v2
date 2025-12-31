const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js", 
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'kc-dark': '#050505',
        'kc-panel': '#0A0A0A',
        'kc-accent': '#ff6b35', 
        'kc-success': '#22c55e', 
        'kc-text': '#E2E8F0',
        'kc-muted': '#94A3B8',
      },
      fontFamily: {
        sans: ['var(--font-inter)'], 
      },
      backgroundImage: {
        'glass': 'linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      // ADD THESE TWO BLOCKS BELOW
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
  plugins: [
    require("flowbite/plugin"),
  ],
});
