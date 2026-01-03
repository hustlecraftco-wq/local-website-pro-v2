import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Clone the response so we can modify headers
  const response = NextResponse.next();

  // --- ANTI-RECONNAISSANCE HEADERS ---

  // 1. Hide the Server Technology (Some servers ignore this, but Vercel/Next respects it)
  // Instead of "Vercel" or "Next.js", we can leave it blank or set a decoy.
  response.headers.set('X-Powered-By', 'PHP/5.6.40'); // Decoy: Makes hackers think it's an old, junk PHP site (Funny, but effective distraction)
  
  // --- SECURITY HARDENING ---
  
  // 2. Prevent "MIME Sniffing"
  // Forces browser to stick to declared content types.
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // 3. Anti-Clickjacking
  // Prevents your site from being embedded in an iframe on a competitor's site.
  response.headers.set('X-Frame-Options', 'DENY');

  // 4. Referrer Privacy
  // Don't leak URL paths to external sites when users click links.
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // 5. Strict Transport Security (HSTS)
  // Force HTTPS always.
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );

  return response;
}

// Apply these headers to all routes
export const config = {
  matcher: '/:path*',
};
