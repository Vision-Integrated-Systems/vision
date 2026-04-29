// app/mchd/api/data/route.ts
// Lightweight polling endpoint.
// The client polls this every 10 seconds to pick up new uploads.
// (SSE doesn't work reliably on Vercel serverless — polling is the correct pattern here.)

import { NextResponse } from 'next/server'
import { getData } from '../../_data'

export const runtime = 'nodejs'

// Tell Next.js / Vercel not to cache this route
export const dynamic = 'force-dynamic'

export async function GET() {
  const data = getData()
  if (!data) {
    return NextResponse.json({ empty: true }, { status: 404 })
  }
  return NextResponse.json(data, {
    headers: { 'Cache-Control': 'no-store' },
  })
}
