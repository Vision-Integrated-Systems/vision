// lib/mchdStore.ts
// Module-level store shared across API routes in the same Node.js process.
// Works in local dev and on any persistent Node server.
// On Vercel serverless: upload and data routes may hit different instances,
// so the client also uses localStorage as a local cache.

let _data: Record<string, unknown> | null = null

export function getData() {
  return _data
}

export function setData(data: Record<string, unknown>) {
  _data = data
}
