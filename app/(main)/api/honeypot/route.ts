// app/api/honeypot/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';

  // In production, you would log this to a database (Supabase/Prisma)
  console.log(`[HONEYPOT ALERT] IP: ${ip} | UA: ${userAgent} | Attempted: ${request.url}`);

  // Return a fake error or a redirect to a blackhole
  return new NextResponse('Internal Server Error', { status: 500 });
}
