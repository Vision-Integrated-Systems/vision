// pages/api/mchd/data.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { getData } from '../../../lib/mchdStore'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end()

  const data = getData()
  if (!data) return res.status(404).json({ empty: true })

  res.setHeader('Cache-Control', 'no-store')
  return res.status(200).json(data)
}
