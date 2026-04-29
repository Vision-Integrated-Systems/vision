// pages/api/mchd/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import * as XLSX from 'xlsx'
import { setData } from '../../../lib/mchdStore'

export const config = {
  api: { bodyParser: false },
}

// Simple multipart parser — no extra dependency needed
async function getRawBody(req: NextApiRequest): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk: Buffer) => chunks.push(chunk))
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

function extractFile(body: Buffer, boundary: string): Buffer | null {
  const sep = Buffer.from('--' + boundary)
  const parts = []
  let start = 0
  while (true) {
    const idx = body.indexOf(sep, start)
    if (idx === -1) break
    parts.push(body.slice(start, idx))
    start = idx + sep.length
  }
  for (const part of parts) {
    if (part.includes(Buffer.from('filename='))) {
      const headerEnd = part.indexOf(Buffer.from('\r\n\r\n'))
      if (headerEnd === -1) continue
      let fileData = part.slice(headerEnd + 4)
      if (fileData.slice(-2).toString() === '\r\n') fileData = fileData.slice(0, -2)
      return fileData
    }
  }
  return null
}

function fmtDate(v: unknown): string {
  if (v == null || v === '') return ''
  if (v instanceof Date) return v.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  const s = String(v).split('T')[0]
  const d = new Date(s + 'T00:00:00')
  return isNaN(d.getTime()) ? s : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function parseWorkbook(buffer: Buffer) {
  const wb = XLSX.read(buffer, { type: 'buffer', cellDates: true })
  const stn: Record<string, unknown> = {}
  const twr: Record<string, unknown> = {}

  for (let g = 1; g <= 4; g++) {
    const ws = wb.Sheets[`Group ${g}`]
    if (!ws) continue
    const rows = XLSX.utils.sheet_to_json<unknown[]>(ws, { header: 1, defval: '' })
    for (let i = 3; i < rows.length; i++) {
      const r = rows[i] as unknown[]
      const id = String(r[0] ?? '').trim()
      if (!id || /^total/i.test(id)) continue
      stn[id] = {
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
      twr[name] = { status: String(r[6] ?? 'Pending'), date: fmtDate(r[7]) }
    }
  }

  return { stn, twr }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  try {
    const ct = req.headers['content-type'] ?? ''
    const boundaryMatch = ct.match(/boundary=(.+)/)
    if (!boundaryMatch) return res.status(400).json({ error: 'Missing boundary' })

    const body     = await getRawBody(req)
    const fileData = extractFile(body, boundaryMatch[1])
    if (!fileData) return res.status(400).json({ error: 'No file found in request' })

    const parsed     = parseWorkbook(fileData)
    const uploadedAt = new Date().toISOString()
    const data       = { ...parsed, uploadedAt }

    setData(data)

    return res.status(200).json({
      ok:         true,
      stations:   Object.keys(parsed.stn).length,
      towers:     Object.keys(parsed.twr).length,
      uploadedAt,
      data,
    })
  } catch (err) {
    console.error('[mchd/upload]', err)
    return res.status(422).json({ error: err instanceof Error ? err.message : 'Parse error' })
  }
}
