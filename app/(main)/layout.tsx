import Navbar from "@/components/ui/Navbar";
import ChatWidget from "@/components/ui/ChatWidget";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

// 1. Load Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

// 2. Mobile Optimization
export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  // Removed maximumScale: 1 - it's bad for accessibility (users need to zoom)
};

// 3. SEO Tags
export const metadata: Metadata = {
  metadataBase: new URL("https://localwebsitepro.com"),
  title: {
    default: "Local Website Pro | #1 Custom Web Design for KC Contractors",
    template: "%s | Local Website Pro",
  },
  description: "Stop renting your website. We build custom-coded, 0.4s load time lead machines for KC plumbers, HVAC & trades. Own your asset. No monthly fees.",
  keywords: ["Kansas City web design", "contractor websites KC", "plumber marketing Kansas City", "HVAC website design", "custom coded websites"],
  authors: [{ name: "Local Website Pro" }],
  openGraph: {
    title: "Local Website Pro | Stop Renting Your Website",
    description: "Own your lead machine. 48hr custom builds for KC trades. 0.4s load times.",
    url: "https://localwebsitepro.com",
    siteName: "Local Website Pro",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

// 4. Local Business Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Local Website Pro",
  "description": "Custom-coded, high-performance websites for Kansas City contractors.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kansas City",
    "addressRegion": "KS",
    "addressCountry": "US"
  },
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://www.transparenttextures.com" />
        <link rel="dns-prefetch" href="https://www.transparenttextures.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${lora.variable} font-sans bg-kc-dark text-kc-text antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Navbar sits on top */}
        <Navbar />
        <ChatWidget />

        {/* The Hero and Page Content */}
        {children}
      </body>
    </html>
  );
}
