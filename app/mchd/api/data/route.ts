// app/mchd/api/data/route.ts
// Polling endpoint — returns the latest parsed data.
// Imports from the upload route so they share the same module instance
// within a single Next.js server process (dev + Vercel bundled functions).

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { getLatestData } from '../upload/route'

export async function GET() {
  const data = getLatestData()
  if (!data) {
    return NextResponse.json({ empty: true }, { status: 404 })
  }
  return NextResponse.json(data, {
    headers: { 'Cache-Control': 'no-store' },
  })
}
