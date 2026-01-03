// ./app/demo/layout.tsx
import type { Metadata } from 'next';

// Minimal metadata for the demo
export const metadata: Metadata = {
  title: 'FlowTech | Emergency Demo',
  description: 'High-performance landing page demo.',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-950 text-slate-50 m-0 p-0">
        {/* We deliberately DO NOT include global Headers, Footers, 
            or heavy Context Providers (like ThemeProvider) here. 
            This keeps the bundle size tiny. */}
        {children}
      </body>
    </html>
  );
}
