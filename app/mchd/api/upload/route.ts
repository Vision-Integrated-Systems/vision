// app/mchd/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server'
import * as XLSX from 'xlsx'
import { setData, type DashboardData } from '../../_data'

export const runtime = 'nodejs'
export const maxDuration = 30

function fmtDate(v: unknown): string {
  if (v == null || v === '') return ''
  if (v instanceof Date) {
    return v.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
  const s = String(v).split('T')[0]
  const d = new Date(s + 'T00:00:00')
  return isNaN(d.getTime()) ? s : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function parseWorkbook(buffer: Buffer): DashboardData {
  const wb = XLSX.read(buffer, { type: 'buffer', cellDates: true })
  const result: DashboardData = { stn: {}, twr: {}, uploadedAt: new Date().toISOString() }

  for (let g = 1; g <= 4; g++) {
    const ws = wb.Sheets[`Group ${g}`]
    if (!ws) continue
    const rows = XLSX.utils.sheet_to_json<unknown[]>(ws, { header: 1, defval: '' })
    for (let i = 3; i < rows.length; i++) {
      const r = rows[i] as unknown[]
      const id = String(r[0] ?? '').trim()
      if (!id || /^total/i.test(id)) continue
      result.stn[id] = {
        status: String(r[7] ?? 'Pending'),
        date:   fmtDate(r[8]),
        tech:   String(r[9] ?? ''),
        addr:   String(r[1] ?? ''),
        city:   String(r[2] ?? ''),
      }
    }
  }

  const ws2 = wb.Sheets['Tower Sites']
  if (ws2) {
    const rows = XLSX.utils.sheet_to_json<unknown[]>(ws2, { header: 1, defval: '' })
    for (let i = 3; i < rows.length; i++) {
      const r    = rows[i] as unknown[]
      const name = String(r[1] ?? '').trim()
      if (!name || /^total/i.test(name)) continue
      result.twr[name] = {
        status: String(r[6] ?? 'Pending'),
        date:   fmtDate(r[7]),
      }
    }
  }

  return result
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData()
    const file = form.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file received' }, { status: 400 })
    }

    const ext = file.name.split('.').pop()?.toLowerCase()
    if (!ext || !['xlsx', 'xls'].includes(ext)) {
      return NextResponse.json({ error: 'Only .xlsx / .xls files are accepted' }, { status: 400 })
    }

    const bytes  = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const data   = parseWorkbook(buffer)

    setData(data)

    return NextResponse.json({
      ok:       true,
      stations: Object.keys(data.stn).length,
      towers:   Object.keys(data.twr).length,
      uploadedAt: data.uploadedAt,
    })
  } catch (err) {
    console.error('[mchd/upload]', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Parse error' },
      { status: 422 }
    )
  }
}
