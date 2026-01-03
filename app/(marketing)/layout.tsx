import React from 'react';
import type { Metadata } from 'next';
// Import the globals from the main folder so Tailwind still works
import '../(main)/globals.css';

export const metadata: Metadata = {
  title: 'FlowTech | Emergency Demo',
  description: 'Fastest emergency response in Kansas City.',
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* LIGHTHOUSE OPTIMIZATION:
        This layout intentionally excludes the heavy Navbar, Footer, 
        and Analytics providers found in the (main) layout.
      */}
      <body className="antialiased bg-slate-950 text-slate-50 m-0 p-0">
        {children}
      </body>
    </html>
  );
}
