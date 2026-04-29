// app/mchd/_data.ts
// Shared in-memory store — persists across requests in the same Node.js process.
// On Vercel serverless each function instance is separate, so the page uses
// polling (/mchd/api/data) which always reads from disk.

import fs from 'fs'
import path from 'path'

export interface SiteStatus {
  status: string
  date: string
  tech?: string
  addr?: string
  city?: string
}

export interface DashboardData {
  stn: Record<string, SiteStatus>
  twr: Record<string, Pick<SiteStatus, 'status' | 'date'>>
  uploadedAt: string
}

// Persist to /tmp so it survives warm Lambda restarts on Vercel
const DATA_PATH = path.join('/tmp', 'mchd-latest.json')

// In-memory cache (fast for same-process hits)
let _cache: DashboardData | null = null

export function getData(): DashboardData | null {
  if (_cache) return _cache
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf8')
    _cache = JSON.parse(raw)
    return _cache
  } catch {
    return null
  }
}

export function setData(data: DashboardData): void {
  _cache = data
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data))
  } catch {
    // /tmp write failed — still keep in memory
  }
}
