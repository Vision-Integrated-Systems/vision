'use client'
// app/mchd/page.tsx

import { useEffect, useRef, useState, useCallback } from 'react'

// ── Types ────────────────────────────────────────────────────────────────────
interface SiteStatus {
  status: string
  date?: string
  tech?: string
  addr?: string
  city?: string
}
interface DashboardData {
  stn: Record<string, SiteStatus>
  twr: Record<string, Pick<SiteStatus, 'status' | 'date'>>
  uploadedAt?: string
}

// ── Schedule constants ────────────────────────────────────────────────────────
const TWR = [
  { name: 'Conroe Service Center Tower',   short: 'CSC Tower',           sched: 'Apr 7–8',   addr: '1400 S Loop 336 W, Conroe'  },
  { name: 'East County / Splendora Tower', short: 'E. County/Splendora', sched: 'Apr 9–10',  addr: '14809 First St, Splendora'   },
  { name: 'Thompson Road Tower',           short: 'Thompson Rd',         sched: 'Apr 11–14', addr: '12370 Thompson Rd, Willis'   },
  { name: 'Robinson Rd Tower',             short: 'Robinson Rd',         sched: 'Apr 15–16', addr: '27906 Robinson Rd, Spring'   },
  { name: 'Magnolia Tower',                short: 'Magnolia',            sched: 'Apr 17–18', addr: '14575 FM 1488, Magnolia'     },
  { name: 'Grangerland Tower',             short: 'Grangerland',         sched: 'Apr 21–22', addr: '13885 Grangerland Rd, Conroe'},
  { name: 'Conroe Service Tower',          short: 'Conroe Svc',          sched: 'Apr 23–24', addr: '401 Sgt Ed Holcomb, Conroe'  },
]

const EMS = [
  { day: 'Mon', dt: 'Apr 28', g: 1, ids: ['St. 10', 'St. 15', 'St. 11'] },
  { day: 'Tue', dt: 'Apr 29', g: 1, ids: ['St. 14', 'St. 45', 'St. 16'] },
  { day: 'Wed', dt: 'Apr 30', g: 1, ids: ['St. 13']                      },
  { day: 'Thu', dt: 'May 1',  g: 2, ids: ['St. 27', 'St. 24', 'St. 23'] },
  { day: 'Fri', dt: 'May 2',  g: 2, ids: ['St. 26', 'St. 20', 'St. 25'] },
  { day: 'Mon', dt: 'May 5',  g: 2, ids: ['St. 22', 'St. 21']           },
  { day: 'Tue', dt: 'May 6',  g: 3, ids: ['St. 12', 'St. 33', 'St. 32'] },
  { day: 'Wed', dt: 'May 7',  g: 3, ids: ['St. 35', 'St. 30', 'St. 34'] },
  { day: 'Thu', dt: 'May 8',  g: 3, ids: ['St. 31']                      },
  { day: 'Fri', dt: 'May 9',  g: 4, ids: ['St. 44', 'St. 43', 'St. 47'] },
  { day: 'Mon', dt: 'May 12', g: 4, ids: ['St. 46', 'St. 40', 'St. 41'] },
  { day: 'Tue', dt: 'May 13', g: 4, ids: ['St. 42']                      },
]

const GM: Record<number, { name: string; area: string; color: string; cls: string; dates: string }> = {
  1: { name: 'Group 1', area: 'North Conroe / Willis',           color: 'var(--g1)', cls: 'g1', dates: 'Apr 28–30' },
  2: { name: 'Group 2', area: 'Woodlands / Spring / Shenandoah', color: 'var(--g2)', cls: 'g2', dates: 'May 1–5'   },
  3: { name: 'Group 3', area: 'East / Porter / Splendora',       color: 'var(--g3)', cls: 'g3', dates: 'May 6–8'   },
  4: { name: 'Group 4', area: 'West / Magnolia / Montgomery',    color: 'var(--g4)', cls: 'g4', dates: 'May 9–13'  },
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function st(s?: string): 'dn' | 'pr' | 'pe' {
  if (!s) return 'pe'
  if (/complet/i.test(s))                         return 'dn'
  if (/progress|started|active|in.prog/i.test(s)) return 'pr'
  return 'pe'
}

function gDone(data: DashboardData, g: number) {
  return EMS.filter(d => d.g === g).flatMap(d => d.ids)
    .filter(id => st(data.stn[id]?.status) === 'dn').length
}
function gTotal(g: number) {
  return EMS.filter(d => d.g === g).flatMap(d => d.ids).length
}

// ── Main component ────────────────────────────────────────────────────────────
export default function MCHDPage() {
  const [data,        setData]        = useState<DashboardData | null>(null)
  const [modalOpen,   setModalOpen]   = useState(false)
  const [uploading,   setUploading]   = useState(false)
  const [upStatus,    setUpStatus]    = useState('')
  const [upPct,       setUpPct]       = useState(0)
  const [toast,       setToast]       = useState<{ msg: string; type: 'ok' | 'err' } | null>(null)
  const [lastUpdated, setLastUpdated] = useState<string>('')
  const [dragging,    setDragging]    = useState(false)
  const fileRef    = useRef<HTMLInputElement>(null)
  const pollRef    = useRef<ReturnType<typeof setInterval> | null>(null)
  const lastUpload = useRef<string>('')

  // ── Polling ─────────────────────────────────────────────────────────────────
  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/mchd/api/data', { cache: 'no-store' })
      if (!res.ok) return
      const d: DashboardData = await res.json()
      if (d.uploadedAt && d.uploadedAt !== lastUpload.current) {
        lastUpload.current = d.uploadedAt ?? ''
        setData(d)
        if (d.uploadedAt) {
          setLastUpdated(new Date(d.uploadedAt).toLocaleTimeString())
        }
      }
    } catch { /* network hiccup — ignore */ }
  }, [])

  useEffect(() => {
    fetchData()
    pollRef.current = setInterval(fetchData, 10_000)
    return () => { if (pollRef.current) clearInterval(pollRef.current) }
  }, [fetchData])

  // ── Toast auto-dismiss ────────────────────────────────────────────────────
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 4000)
    return () => clearTimeout(t)
  }, [toast])

  // ── Upload ───────────────────────────────────────────────────────────────
  async function doUpload(file: File) {
    setUploading(true)
    setUpPct(0)
    setUpStatus('UPLOADING...')

    // Fake progress animation
    let w = 0
    const tick = setInterval(() => {
      w = Math.min(w + 4, 85)
      setUpPct(w)
    }, 60)

    const fd = new FormData()
    fd.append('file', file)

    try {
      const res  = await fetch('/mchd/api/upload', { method: 'POST', body: fd })
      const json = await res.json()
      clearInterval(tick)

      if (json.ok) {
        setUpPct(100)
        setUpStatus(`✓ UPDATED — ${json.stations} STATIONS · ${json.towers} TOWERS`)
        setToast({ msg: `Dashboard updated — ${json.stations} stations, ${json.towers} towers`, type: 'ok' })
        await fetchData()
        setTimeout(() => { setModalOpen(false); setUploading(false) }, 1400)
      } else {
        setUpStatus('✗ ' + (json.error ?? 'Unknown error'))
        setToast({ msg: 'Upload failed: ' + (json.error ?? 'unknown'), type: 'err' })
        setTimeout(() => setUploading(false), 1000)
      }
    } catch (err) {
      clearInterval(tick)
      const msg = err instanceof Error ? err.message : 'Network error'
      setUpStatus('✗ ' + msg)
      setToast({ msg, type: 'err' })
      setTimeout(() => setUploading(false), 1000)
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragging(false)
    const f = e.dataTransfer.files[0]
    if (f) doUpload(f)
  }

  // ── Derived stats ─────────────────────────────────────────────────────────
  const allS  = data ? Object.values(data.stn) : []
  const allT  = data ? Object.values(data.twr) : []
  const sDone = allS.filter(x => st(x.status) === 'dn').length
  const tDone = allT.filter(x => st(x.status) === 'dn').length
  const tot   = allS.length + allT.length
  const done  = sDone + tDone
  const pct   = tot > 0 ? Math.round(done / tot * 100) : 0

  const phases = [
    { l: 'Towers · Apr 7–24',   d: tDone,          t: 7           },
    { l: 'Group 1 · Apr 28–30', d: data ? gDone(data, 1) : 0, t: gTotal(1) },
    { l: 'Group 2 · May 1–5',   d: data ? gDone(data, 2) : 0, t: gTotal(2) },
    { l: 'Group 3 · May 6–8',   d: data ? gDone(data, 3) : 0, t: gTotal(3) },
    { l: 'Group 4 · May 9–13',  d: data ? gDone(data, 4) : 0, t: gTotal(4) },
  ]

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&family=Share+Tech+Mono&display=swap');

        :root {
          --bg:#07090f; --bg2:#0d1219; --panel:#0a1020;
          --border:rgba(80,130,220,0.10); --border2:rgba(80,130,220,0.22);
          --text:#b8cce0; --dim:#48657a; --bright:#ddeeff; --accent:#2f7fff;
          --done:#1fa854; --donel:rgba(31,168,84,0.12); --doneb:#1a7043;
          --prog:#e8a020; --progl:rgba(232,160,32,0.12);
          --pend:#334455; --pendl:rgba(51,68,85,0.30);
          --twr:#9b5de5; --twrl:rgba(155,93,229,0.12); --twrb:#7a43c0;
          --g1:#e63946; --g2:#1d9bf0; --g3:#2ec44a; --g4:#ff8c00;
        }
        *,*::before,*::after { box-sizing:border-box; margin:0; padding:0; }
        .mchd-root {
          background:var(--bg); color:var(--text);
          font-family:'Barlow',sans-serif; font-size:14px;
          min-height:100vh; overflow-x:hidden; position:relative;
        }
        .mchd-root::before {
          content:''; position:fixed; inset:0;
          background-image:
            linear-gradient(rgba(47,127,255,0.018) 1px,transparent 1px),
            linear-gradient(90deg,rgba(47,127,255,0.018) 1px,transparent 1px);
          background-size:48px 48px; pointer-events:none; z-index:0;
        }
        @keyframes rot  { to { transform:rotate(360deg); } }
        @keyframes gp   { 0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(31,168,84,.4);}60%{opacity:.7;box-shadow:0 0 0 6px rgba(31,168,84,0);} }
        @keyframes fu   { from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);} }
        @keyframes slin { from{opacity:0;transform:translateX(20px);}to{opacity:1;transform:translateX(0);} }
      `}</style>

      <div className="mchd-root">

        {/* ── No data screen ─────────────────────────────────────────────── */}
        {!data && (
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'100vh', gap:16, position:'relative', zIndex:1, padding:'40px 20px' }}>
            <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.22em', color:'var(--accent)', textTransform:'uppercase' }}>
              Montgomery County Hospital District — EMS
            </div>
            <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:46, fontWeight:900, color:'var(--bright)', textTransform:'uppercase', textAlign:'center', lineHeight:1 }}>
              Device Upgrade<br />Schedule
            </div>
            <div style={{ width:28, height:28, border:'2px solid var(--border)', borderTopColor:'var(--accent)', borderRadius:'50%', animation:'rot .8s linear infinite' }} />
            <div style={{ fontSize:13, color:'var(--dim)', textAlign:'center', maxWidth:380, lineHeight:1.65 }}>
              Waiting for data — upload the workbook to populate the dashboard.
            </div>
            <button onClick={() => setModalOpen(true)} style={btnStyle}>⬆ Upload Workbook</button>
          </div>
        )}

        {/* ── Main dashboard ─────────────────────────────────────────────── */}
        {data && (
          <div style={{ position:'relative', zIndex:1 }}>
            <div style={{ maxWidth:1300, margin:'0 auto', padding:'0 24px 80px' }}>

              {/* Header */}
              <div style={{ padding:'24px 0 20px', borderBottom:'1px solid var(--border2)', marginBottom:24, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:14 }}>
                <div>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:'.22em', color:'var(--accent)', textTransform:'uppercase', marginBottom:3 }}>
                    Montgomery County Hospital District — EMS
                  </div>
                  <h1 style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:28, fontWeight:900, color:'var(--bright)', textTransform:'uppercase', lineHeight:1 }}>
                    Device Upgrade Schedule
                  </h1>
                  <div style={{ fontSize:12, color:'var(--dim)', marginTop:4 }}>
                    {done} of {tot} sites complete ({pct}%) · Towers: {tDone}/7 · Stations: {sDone}/{allS.length} · Est. completion: May 13, 2025
                  </div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:6 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                    <div style={{ width:8, height:8, borderRadius:'50%', background:'var(--done)', animation:'gp 2.5s infinite', flexShrink:0 }} />
                    <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:10, color:'var(--dim)', letterSpacing:'.07em' }}>
                      <b style={{ color:'var(--done)' }}>LIVE</b> · Auto-refreshes every 10s
                    </span>
                  </div>
                  {lastUpdated && (
                    <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:9, color:'var(--dim)', letterSpacing:'.05em' }}>
                      Last updated: {lastUpdated}
                    </div>
                  )}
                  <button onClick={() => { setUploading(false); setModalOpen(true) }} style={btnStyle}>
                    ⬆ Update Data
                  </button>
                </div>
              </div>

              {/* Progress */}
              <div style={{ background:'var(--panel)', border:'1px solid var(--border)', borderRadius:4, padding:'20px 24px', marginBottom:24 }}>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--dim)', marginBottom:14 }}>
                  Overall Project Progress
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginBottom:16 }}>
                  {[
                    { label:'Overall',      val:`${done} / ${tot}`,   pct,                           color:'var(--done)',   sub:`${pct}% complete`       },
                    { label:'Towers',       val:`${tDone} / 7`,       pct:Math.round(tDone/7*100),   color:'var(--twr)',    sub:'Phase 1 · Apr 7–24'     },
                    { label:'EMS Stations', val:`${sDone} / ${allS.length}`, pct:allS.length?Math.round(sDone/allS.length*100):0, color:'var(--accent)', sub:'Phase 2 · Apr 28 – May 13' },
                  ].map(p => (
                    <div key={p.label} style={{ display:'flex', flexDirection:'column', gap:6 }}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                        <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:13, fontWeight:700, textTransform:'uppercase', letterSpacing:'.05em', color:p.color }}>{p.label}</span>
                        <span style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:11, color:'var(--dim)' }}>{p.val}</span>
                      </div>
                      <div style={{ height:6, background:'var(--pend)', borderRadius:3, overflow:'hidden' }}>
                        <div style={{ height:'100%', borderRadius:3, background:p.color, width:`${p.pct}%`, transition:'width .7s ease' }} />
                      </div>
                      <div style={{ fontSize:11, color:'var(--dim)' }}>{p.sub}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display:'flex', gap:8, flexWrap:'wrap', borderTop:'1px solid var(--border)', paddingTop:14 }}>
                  {phases.map(p => {
                    const c = p.d === p.t && p.t > 0 ? '#1fa854' : p.d > 0 ? '#e8a020' : '#334455'
                    const bg = p.d === p.t && p.t > 0 ? 'rgba(31,168,84,.12)' : p.d > 0 ? 'rgba(232,160,32,.12)' : 'rgba(51,68,85,.30)'
                    const bc = p.d === p.t && p.t > 0 ? '#1a7043' : p.d > 0 ? '#b07010' : '#2a3a4a'
                    return (
                      <div key={p.l} style={{ display:'flex', alignItems:'center', gap:6, padding:'5px 12px', borderRadius:20, fontSize:11, fontWeight:600, fontFamily:"'Barlow Condensed',sans-serif", letterSpacing:'.06em', textTransform:'uppercase', border:`1px solid ${bc}`, background:bg, color:c }}>
                        <div style={{ width:6, height:6, borderRadius:'50%', background:'currentColor' }} />
                        {p.l} &nbsp;{p.d}/{p.t}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Tower section */}
              <SectionLabel>Phase 1 — Tower Sites · Starting Apr 7</SectionLabel>
              <div style={{ marginBottom:28, border:'1px solid var(--border)', borderRadius:4, overflow:'hidden' }}>
                <div style={{ padding:'14px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:12, background:'linear-gradient(135deg,rgba(155,93,229,0.18),rgba(155,93,229,0.06))' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                    <span style={{ fontSize:20 }}>📡</span>
                    <div>
                      <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:20, fontWeight:800, textTransform:'uppercase', letterSpacing:'.05em', color:'var(--bright)' }}>Tower Phase</div>
                      <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:10, color:'rgba(255,255,255,.5)', marginTop:2 }}>Apr 7 – Apr 24, 2025 · ~2 days per tower · 7 locations</div>
                    </div>
                  </div>
                  <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:700, padding:'4px 12px', borderRadius:12, letterSpacing:'.08em', textTransform:'uppercase', background:'var(--twrl)', color:'var(--twr)', border:'1px solid var(--twrb)' }}>
                    {tDone} / 7
                  </div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:1, background:'var(--border)' }}>
                  {TWR.map((tw, i) => {
                    const info = data.twr[tw.name] ?? { status: 'Pending', date: '' }
                    const s = st(info.status)
                    const [cls, lbl, dotColor] = s === 'dn'
                      ? ['rgba(31,168,84,.12)', '✓ Complete',  'var(--done)']
                      : s === 'pr'
                      ? ['rgba(232,160,32,.12)', 'In Progress', 'var(--prog)']
                      : ['rgba(51,68,85,.30)',   'Pending',     'var(--dim)']
                    return (
                      <div key={tw.name} style={{ background:'var(--bg2)', padding:'14px 12px', display:'flex', flexDirection:'column', gap:5, animation:`fu .3s ${i * .05}s both` }}>
                        <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:9, color:'var(--dim)', letterSpacing:'.1em' }}>TWR {i + 1}</div>
                        <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:13, fontWeight:700, color:'var(--bright)', lineHeight:1.2, textTransform:'uppercase' }}>{tw.short}</div>
                        <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:9, color:'var(--dim)', lineHeight:1.4 }}>{tw.addr}</div>
                        <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:9, color:'var(--twr)', marginTop:2 }}>📅 {tw.sched}</div>
                        <div style={{ display:'flex', alignItems:'center', gap:5, marginTop:5, padding:'3px 8px', borderRadius:3, background:cls, fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.06em', textTransform:'uppercase', color:dotColor }}>
                          <div style={{ width:6, height:6, borderRadius:'50%', background:dotColor, flexShrink:0 }} />
                          {lbl}
                        </div>
                        {info.date && <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:9, color:'var(--done)', marginTop:2 }}>Done {info.date}</div>}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* EMS section */}
              <SectionLabel>Phase 2 — EMS Stations · Starting Apr 28</SectionLabel>
              <EMSSection data={data} />

              {/* Footer */}
              <div style={{ borderTop:'1px solid var(--border)', paddingTop:16, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8, marginTop:8 }}>
                <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:9, color:'var(--dim)', letterSpacing:'.08em' }}>
                  MCHD · MONTGOMERY COUNTY HOSPITAL DISTRICT · DEVICE UPGRADE PROJECT · INTERNAL USE ONLY
                </div>
                <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:9, color:'var(--dim)', letterSpacing:'.08em' }}>
                  PROJECTED COMPLETE: MAY 13, 2025 · {tot} TOTAL SITES
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Upload modal ────────────────────────────────────────────────── */}
        {modalOpen && (
          <div
            onClick={e => { if (e.target === e.currentTarget && !uploading) setModalOpen(false) }}
            style={{ position:'fixed', inset:0, background:'rgba(7,9,15,0.88)', backdropFilter:'blur(6px)', zIndex:300, display:'flex', alignItems:'center', justifyContent:'center' }}
          >
            <div style={{ background:'var(--panel)', border:'1px solid var(--border2)', borderRadius:8, padding:'36px 40px', display:'flex', flexDirection:'column', alignItems:'center', gap:16, maxWidth:460, width:'92%' }}>
              <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:22, fontWeight:900, color:'var(--bright)', textTransform:'uppercase', letterSpacing:'.05em' }}>⬆ Update Dashboard</div>
              <div style={{ fontSize:12, color:'var(--dim)', textAlign:'center', lineHeight:1.65, maxWidth:340 }}>
                Upload the MCHD Master Workbook. All connected viewers refresh automatically within 10 seconds.
              </div>

              {/* Drop zone */}
              <div
                onClick={() => !uploading && fileRef.current?.click()}
                onDragOver={e => { e.preventDefault(); setDragging(true) }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                style={{ width:'100%', border:`2px dashed ${dragging ? 'var(--accent)' : 'var(--border2)'}`, borderRadius:6, padding:'34px 20px', display:'flex', flexDirection:'column', alignItems:'center', gap:10, cursor: uploading ? 'default' : 'pointer', background: dragging ? 'rgba(47,127,255,.06)' : 'var(--bg2)', transition:'all .2s' }}
              >
                <div style={{ fontSize:32 }}>📅</div>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:16, fontWeight:700, color:'var(--bright)', textTransform:'uppercase', letterSpacing:'.05em' }}>Drop File Here</div>
                <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:10, color:'var(--dim)' }}>MCHD_Master_Workbook.xlsx</div>
              </div>

              {/* Progress bar */}
              {uploading && (
                <div style={{ width:'100%', display:'flex', flexDirection:'column', gap:8 }}>
                  <div style={{ height:4, background:'var(--border)', borderRadius:2, overflow:'hidden' }}>
                    <div style={{ height:'100%', background:'var(--accent)', borderRadius:2, width:`${upPct}%`, transition:'width .3s' }} />
                  </div>
                  <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:10, color:'var(--dim)', textAlign:'center', letterSpacing:'.06em' }}>{upStatus}</div>
                </div>
              )}

              <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:9, color:'var(--dim)', letterSpacing:'.04em', textAlign:'center' }}>
                Processed on server · all viewers update within 10s
              </div>
              {!uploading && (
                <button onClick={() => setModalOpen(false)} style={{ padding:'6px 18px', background:'transparent', color:'var(--dim)', border:'1px solid var(--border2)', borderRadius:3, fontFamily:"'Barlow Condensed',sans-serif", fontSize:12, fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', cursor:'pointer' }}>
                  ✕ Cancel
                </button>
              )}
            </div>
          </div>
        )}

        {/* Hidden file input */}
        <input ref={fileRef} type="file" accept=".xlsx,.xls" style={{ display:'none' }}
          onChange={e => { const f = e.target.files?.[0]; if (f) doUpload(f); e.target.value = '' }} />

        {/* Toast */}
        {toast && (
          <div style={{ position:'fixed', bottom:24, right:24, zIndex:400, padding:'10px 16px', borderRadius:4, fontFamily:"'Share Tech Mono',monospace", fontSize:11, letterSpacing:'.06em', border:'1px solid', animation:'slin .2s ease', ...(toast.type === 'ok' ? { background:'var(--donel)', color:'var(--done)', borderColor:'var(--doneb)' } : { background:'rgba(230,57,70,.12)', color:'#e63946', borderColor:'#a02030' }) }}>
            {toast.msg}
          </div>
        )}
      </div>
    </>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase', color:'var(--dim)', padding:'0 0 10px', display:'flex', alignItems:'center', gap:12 }}>
      {children}
      <div style={{ flex:1, height:1, background:'var(--border)' }} />
    </div>
  )
}

function EMSSection({ data }: { data: DashboardData }) {
  let curG = 0
  return (
    <div>
      {EMS.map((day, di) => {
        const isNewGroup = day.g !== curG
        if (isNewGroup) curG = day.g
        const gm = GM[day.g]
        return (
          <div key={`${day.dt}-${day.g}`}>
            {isNewGroup && (
              <div style={{ display:'flex', alignItems:'center', gap:10, padding:'10px 0 8px' }}>
                <div style={{ width:10, height:10, borderRadius:'50%', background:gm.color, flexShrink:0 }} />
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:15, fontWeight:700, textTransform:'uppercase', letterSpacing:'.05em', color:gm.color }}>{gm.name}</div>
                <div style={{ fontSize:12, color:'var(--dim)' }}>— {gm.area}</div>
                <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:10, color:'var(--dim)', marginLeft:'auto' }}>
                  {gm.dates} · {gDone(data, day.g)}/{gTotal(day.g)} complete
                </div>
              </div>
            )}
            <div style={{ display:'grid', gridTemplateColumns:'110px 1fr', gap:1, background:'var(--border)', border:'1px solid var(--border)', borderRadius:3, marginBottom:4, overflow:'hidden', animation:`fu .3s ${di * .03}s both` }}>
              <div style={{ background:'var(--bg2)', padding:'10px 14px', display:'flex', flexDirection:'column', justifyContent:'center', gap:3, borderLeft:`3px solid ${gm.color}` }}>
                <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:14, fontWeight:700, color:'var(--bright)', textTransform:'uppercase', letterSpacing:'.04em' }}>{day.day}</div>
                <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:10, color:'var(--dim)' }}>{day.dt}</div>
              </div>
              <div style={{ display:'flex', alignItems:'stretch', flexWrap:'wrap', gap:1, backgroundColor:'var(--border)' }}>
                {day.ids.map(id => {
                  const info = data.stn[id] ?? { status: 'Pending', date: '', tech: '', addr: '', city: '' }
                  const s = st(info.status)
                  const [color, lbl] = s === 'dn' ? ['var(--done)', '✓ Complete'] : s === 'pr' ? ['var(--prog)', '⬤ In Progress'] : ['var(--dim)', '○ Pending']
                  return (
                    <div key={id} style={{ flex:1, minWidth:160, background:'var(--panel)', padding:'10px 14px', display:'flex', flexDirection:'column', gap:3 }}>
                      <div style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:15, fontWeight:700, letterSpacing:'.04em', color:gm.color }}>{id}</div>
                      <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:10, color:'var(--dim)', lineHeight:1.4 }}>{info.addr}{info.city ? ` · ${info.city}` : ''}</div>
                      <div style={{ display:'flex', alignItems:'center', gap:5, marginTop:4, fontFamily:"'Barlow Condensed',sans-serif", fontSize:11, fontWeight:700, letterSpacing:'.06em', textTransform:'uppercase', color }}>
                        <div style={{ width:6, height:6, borderRadius:'50%', background:'currentColor', flexShrink:0 }} />
                        {lbl}
                      </div>
                      {info.date && <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:9, color:'var(--done)', marginTop:1 }}>Done {info.date}</div>}
                      {info.tech && <div style={{ fontFamily:"'Share Tech Mono',monospace", fontSize:9, color:'var(--dim)' }}>Tech: {info.tech}</div>}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Shared button style
const btnStyle: React.CSSProperties = {
  padding: '6px 14px',
  background: 'rgba(47,127,255,0.12)',
  color: 'var(--accent)',
  border: '1px solid rgba(47,127,255,0.35)',
  borderRadius: 3,
  fontFamily: "'Barlow Condensed',sans-serif",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '.07em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 6,
}
