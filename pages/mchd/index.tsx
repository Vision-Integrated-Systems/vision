// pages/mchd/index.tsx
import { useEffect, useRef, useState, useCallback } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'

// ── Types ─────────────────────────────────────────────────────────────────────
interface SiteStatus {
  status: string; date?: string; tech?: string; addr?: string; city?: string
}
interface DashboardData {
  stn: Record<string, SiteStatus>
  twr: Record<string, { status: string; date?: string }>
  uploadedAt?: string
}
// This tells your _app.tsx to skip the layout for this page
type NextPageWithLayout = NextPage & { noLayout?: boolean }

// ── Schedule constants ────────────────────────────────────────────────────────
const TWR = [
  { name:'Conroe Service Center Tower',   short:'CSC Tower',           sched:'Apr 7–8',   addr:'1400 S Loop 336 W, Conroe'   },
  { name:'East County / Splendora Tower', short:'E. County/Splendora', sched:'Apr 9–10',  addr:'14809 First St, Splendora'    },
  { name:'Thompson Road Tower',           short:'Thompson Rd',         sched:'Apr 11–14', addr:'12370 Thompson Rd, Willis'    },
  { name:'Robinson Rd Tower',             short:'Robinson Rd',         sched:'Apr 15–16', addr:'27906 Robinson Rd, Spring'    },
  { name:'Magnolia Tower',                short:'Magnolia',            sched:'Apr 17–18', addr:'14575 FM 1488, Magnolia'      },
  { name:'Grangerland Tower',             short:'Grangerland',         sched:'Apr 21–22', addr:'13885 Grangerland Rd, Conroe' },
  { name:'Conroe Service Tower',          short:'Conroe Svc',          sched:'Apr 23–24', addr:'401 Sgt Ed Holcomb, Conroe'   },
]
const EMS = [
  { day:'Mon', dt:'Apr 28', g:1, ids:['St. 10','St. 15','St. 11'] },
  { day:'Tue', dt:'Apr 29', g:1, ids:['St. 14','St. 45','St. 16'] },
  { day:'Wed', dt:'Apr 30', g:1, ids:['St. 13']                   },
  { day:'Thu', dt:'May 1',  g:2, ids:['St. 27','St. 24','St. 23'] },
  { day:'Fri', dt:'May 2',  g:2, ids:['St. 26','St. 20','St. 25'] },
  { day:'Mon', dt:'May 5',  g:2, ids:['St. 22','St. 21']          },
  { day:'Tue', dt:'May 6',  g:3, ids:['St. 12','St. 33','St. 32'] },
  { day:'Wed', dt:'May 7',  g:3, ids:['St. 35','St. 30','St. 34'] },
  { day:'Thu', dt:'May 8',  g:3, ids:['St. 31']                   },
  { day:'Fri', dt:'May 9',  g:4, ids:['St. 44','St. 43','St. 47'] },
  { day:'Mon', dt:'May 12', g:4, ids:['St. 46','St. 40','St. 41'] },
  { day:'Tue', dt:'May 13', g:4, ids:['St. 42']                   },
]
const GM: Record<number, { name:string; area:string; color:string; dates:string }> = {
  1: { name:'Group 1', area:'North Conroe / Willis',           color:'#e63946', dates:'Apr 28–30' },
  2: { name:'Group 2', area:'Woodlands / Spring / Shenandoah', color:'#1d9bf0', dates:'May 1–5'   },
  3: { name:'Group 3', area:'East / Porter / Splendora',       color:'#2ec44a', dates:'May 6–8'   },
  4: { name:'Group 4', area:'West / Magnolia / Montgomery',    color:'#ff8c00', dates:'May 9–13'  },
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function st(s?: string): 'dn' | 'pr' | 'pe' {
  if (!s) return 'pe'
  if (/complet/i.test(s)) return 'dn'
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
const LS_KEY = 'mchd_data_v1'

// ── Page ──────────────────────────────────────────────────────────────────────
const MCHDPage: NextPageWithLayout = () => {
  const [data,        setDataState]  = useState<DashboardData | null>(null)
  const [modalOpen,   setModalOpen]  = useState(false)
  const [uploading,   setUploading]  = useState(false)
  const [upPct,       setUpPct]      = useState(0)
  const [upStatus,    setUpStatus]   = useState('')
  const [toast,       setToast]      = useState<{ msg:string; ok:boolean } | null>(null)
  const [dragging,    setDragging]   = useState(false)
  const [lastUpdated, setLastUpdated]= useState('')
  const fileRef = useRef<HTMLInputElement>(null)
  const lastTs  = useRef('')

  function applyData(d: DashboardData) {
    lastTs.current = d.uploadedAt ?? ''
    setDataState(d)
    if (d.uploadedAt) setLastUpdated(new Date(d.uploadedAt).toLocaleTimeString())
    try { localStorage.setItem(LS_KEY, JSON.stringify(d)) } catch {}
  }

  const pollServer = useCallback(async () => {
    try {
      const res = await fetch('/api/mchd/data', { cache: 'no-store' })
      if (!res.ok) return
      const d = await res.json()
      if (d.empty) return
      if (d.uploadedAt && d.uploadedAt !== lastTs.current) applyData(d)
    } catch {}
  }, [])

  useEffect(() => {
    // Load from localStorage immediately (instant render)
    try {
      const saved = localStorage.getItem(LS_KEY)
      if (saved) {
        const parsed = JSON.parse(saved) as DashboardData
        setDataState(parsed)
        lastTs.current = parsed.uploadedAt ?? ''
        if (parsed.uploadedAt) setLastUpdated(new Date(parsed.uploadedAt).toLocaleTimeString())
      }
    } catch {}
    // Then sync from server
    pollServer()
    const id = setInterval(pollServer, 10_000)
    return () => clearInterval(id)
  }, [pollServer])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 4500)
    return () => clearTimeout(t)
  }, [toast])

  async function doUpload(file: File) {
    setUploading(true); setUpPct(5); setUpStatus('READING FILE...')
    let pct = 5
    const tick = setInterval(() => { pct = Math.min(pct + 3, 80); setUpPct(pct) }, 80)
    const fd = new FormData()
    fd.append('file', file)
    try {
      const res  = await fetch('/api/mchd/upload', { method: 'POST', body: fd })
      const json = await res.json()
      clearInterval(tick)
      if (json.ok && json.data) {
        setUpPct(100)
        setUpStatus(`✓ ${json.stations} STATIONS · ${json.towers} TOWERS UPDATED`)
        applyData(json.data as DashboardData)
        setToast({ msg: `Updated — ${json.stations} stations, ${json.towers} towers`, ok: true })
        setTimeout(() => { setModalOpen(false); setUploading(false); setUpPct(0) }, 1200)
      } else {
        setUpPct(0); setUpStatus('✗ ' + (json.error ?? 'Upload failed'))
        setToast({ msg: json.error ?? 'Upload failed', ok: false })
        setTimeout(() => setUploading(false), 1500)
      }
    } catch (err) {
      clearInterval(tick)
      const msg = err instanceof Error ? err.message : 'Network error'
      setUpPct(0); setUpStatus('✗ ' + msg)
      setToast({ msg, ok: false })
      setTimeout(() => setUploading(false), 1500)
    }
  }

  // ── Stats ────────────────────────────────────────────────────────────────
  const allS  = data ? Object.values(data.stn) : []
  const allT  = data ? Object.values(data.twr) : []
  const sDone = allS.filter(x => st(x.status) === 'dn').length
  const tDone = allT.filter(x => st(x.status) === 'dn').length
  const tot   = allS.length + allT.length
  const done  = sDone + tDone
  const pct   = tot > 0 ? Math.round(done / tot * 100) : 0

  return (
    <>
      <Head>
        <title>MCHD — Device Upgrade Schedule</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        html, body { margin:0; padding:0; background:#07090f; }
        .mchd {
          --bg:#07090f;--bg2:#0d1219;--panel:#0a1020;
          --b1:rgba(80,130,220,0.10);--b2:rgba(80,130,220,0.22);
          --dim:#48657a;--bright:#ddeeff;--accent:#2f7fff;
          --done:#1fa854;--donel:rgba(31,168,84,0.12);--doneb:#1a7043;
          --prog:#e8a020;--progl:rgba(232,160,32,0.12);
          --twr:#9b5de5;--twrl:rgba(155,93,229,0.12);--twrb:#7a43c0;
          background:var(--bg);color:#b8cce0;
          font-family:'Barlow',sans-serif;font-size:14px;
          min-height:100vh;overflow-x:hidden;position:relative;
        }
        .mchd *,.mchd *::before,.mchd *::after{box-sizing:border-box;}
        .mchd::before{content:'';position:fixed;inset:0;
          background-image:linear-gradient(rgba(47,127,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(47,127,255,.018) 1px,transparent 1px);
          background-size:48px 48px;pointer-events:none;z-index:0;}
        @keyframes rot {to{transform:rotate(360deg)}}
        @keyframes glo {0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(31,168,84,.4)}60%{opacity:.7;box-shadow:0 0 0 6px rgba(31,168,84,0)}}
        @keyframes fu  {from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes si  {from{opacity:0;transform:translateX(16px)}to{opacity:1;transform:translateX(0)}}
        .spin{width:28px;height:28px;border:2px solid var(--b1);border-top-color:var(--accent);border-radius:50%;animation:rot .8s linear infinite}
        .tgrid{display:grid;grid-template-columns:repeat(7,1fr);gap:1px;background:var(--b1)}
        @media(max-width:980px){.tgrid{grid-template-columns:repeat(4,1fr)}}
        @media(max-width:560px){.tgrid{grid-template-columns:repeat(2,1fr)}}
        .pgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        @media(max-width:700px){.pgrid{grid-template-columns:1fr}}
        .tc:hover{background:var(--panel)!important}
      `}</style>

      <div className="mchd">

        {/* No data */}
        {!data && (
          <div style={C.center}>
            <div style={C.org}>Montgomery County Hospital District — EMS</div>
            <div style={C.big}>Device Upgrade<br/>Schedule</div>
            <div className="spin" />
            <div style={{fontSize:13,color:'var(--dim)',textAlign:'center',maxWidth:360,lineHeight:1.7}}>
              Waiting for data — upload the master workbook to populate the dashboard.
            </div>
            <button style={C.btn} onClick={() => setModalOpen(true)}>⬆ Upload Workbook</button>
          </div>
        )}

        {/* Dashboard */}
        {data && (
          <div style={{position:'relative',zIndex:1}}>
            <div style={{maxWidth:1300,margin:'0 auto',padding:'0 24px 80px'}}>

              {/* Header */}
              <div style={C.hdr}>
                <div>
                  <div style={C.org}>Montgomery County Hospital District — EMS</div>
                  <h1 style={C.h1}>Device Upgrade Schedule</h1>
                  <div style={{fontSize:12,color:'var(--dim)',marginTop:4}}>
                    {done} of {tot} sites complete ({pct}%) · Towers: {tDone}/7 · Stations: {sDone}/{allS.length} · Est. completion: May 13, 2025
                  </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:6}}>
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <div style={{width:8,height:8,borderRadius:'50%',background:'var(--done)',animation:'glo 2.5s infinite',flexShrink:0}}/>
                    <span style={C.m10}><b style={{color:'var(--done)'}}>LIVE</b> · auto-refreshes every 10s</span>
                  </div>
                  {lastUpdated && <div style={C.m9}>Last upload: {lastUpdated}</div>}
                  <button style={C.btn} onClick={() => { setUploading(false); setUpStatus(''); setUpPct(0); setModalOpen(true) }}>
                    ⬆ Update Data
                  </button>
                </div>
              </div>

              {/* Progress */}
              <div style={C.panel}>
                <div style={C.ptitle}>Overall Project Progress</div>
                <div className="pgrid" style={{marginBottom:16}}>
                  {[
                    {label:'Overall',      val:`${done}/${tot}`,          p:pct,                                            color:'var(--done)'},
                    {label:'Towers',       val:`${tDone}/7`,              p:Math.round(tDone/7*100),                        color:'var(--twr)'},
                    {label:'EMS Stations', val:`${sDone}/${allS.length}`, p:allS.length?Math.round(sDone/allS.length*100):0,color:'var(--accent)'},
                  ].map(b=>(
                    <div key={b.label} style={{display:'flex',flexDirection:'column',gap:6}}>
                      <div style={{display:'flex',justifyContent:'space-between'}}>
                        <span style={{...C.cond,fontSize:13,fontWeight:700,textTransform:'uppercase',color:b.color}}>{b.label}</span>
                        <span style={C.m11}>{b.val}</span>
                      </div>
                      <div style={{height:6,background:'rgba(51,68,85,.5)',borderRadius:3,overflow:'hidden'}}>
                        <div style={{height:'100%',background:b.color,borderRadius:3,width:`${b.p}%`,transition:'width .7s ease'}}/>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{display:'flex',gap:8,flexWrap:'wrap',borderTop:'1px solid var(--b1)',paddingTop:14}}>
                  {[
                    {l:'Towers · Apr 7–24',   d:tDone,         t:7},
                    {l:'Group 1 · Apr 28–30', d:gDone(data,1), t:gTotal(1)},
                    {l:'Group 2 · May 1–5',   d:gDone(data,2), t:gTotal(2)},
                    {l:'Group 3 · May 6–8',   d:gDone(data,3), t:gTotal(3)},
                    {l:'Group 4 · May 9–13',  d:gDone(data,4), t:gTotal(4)},
                  ].map(p=>{
                    const full=p.d===p.t&&p.t>0; const any=p.d>0
                    return (
                      <div key={p.l} style={{display:'flex',alignItems:'center',gap:6,padding:'4px 11px',borderRadius:20,fontSize:11,fontFamily:"'Barlow Condensed',sans-serif",fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',border:`1px solid ${full?'#1a7043':any?'#b07010':'#2a3a4a'}`,background:full?'var(--donel)':any?'var(--progl)':'rgba(51,68,85,.3)',color:full?'var(--done)':any?'var(--prog)':'var(--dim)'}}>
                        <div style={{width:6,height:6,borderRadius:'50%',background:'currentColor'}}/>
                        {p.l} &nbsp;{p.d}/{p.t}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Towers */}
              <SecLabel>Phase 1 — Tower Sites · Starting Apr 7</SecLabel>
              <div style={{marginBottom:28,border:'1px solid var(--b1)',borderRadius:4,overflow:'hidden'}}>
                <div style={{padding:'14px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',background:'linear-gradient(135deg,rgba(155,93,229,.18),rgba(155,93,229,.06))'}}>
                  <div style={{display:'flex',alignItems:'center',gap:12}}>
                    <span style={{fontSize:20}}>📡</span>
                    <div>
                      <div style={{...C.cond,fontSize:20,fontWeight:800,textTransform:'uppercase',color:'var(--bright)',letterSpacing:'.05em'}}>Tower Phase</div>
                      <div style={C.m9}>Apr 7 – Apr 24, 2025 · ~2 days per tower · 7 locations</div>
                    </div>
                  </div>
                  <div style={{...C.cond,fontSize:12,fontWeight:700,padding:'4px 12px',borderRadius:12,letterSpacing:'.08em',textTransform:'uppercase',background:'var(--twrl)',color:'var(--twr)',border:'1px solid var(--twrb)'}}>
                    {tDone} / 7
                  </div>
                </div>
                <div className="tgrid">
                  {TWR.map((tw,i)=>{
                    const info=data.twr[tw.name]??{status:'Pending',date:''}
                    const s=st(info.status)
                    const [bg,clr,lbl]=s==='dn'?['var(--donel)','var(--done)','✓ Complete']:s==='pr'?['var(--progl)','var(--prog)','In Progress']:['rgba(51,68,85,.3)','var(--dim)','Pending']
                    return (
                      <div key={tw.name} className="tc" style={{background:'var(--bg2)',padding:'14px 12px',display:'flex',flexDirection:'column',gap:5,animation:`fu .3s ${i*.05}s both`,transition:'background .15s'}}>
                        <div style={C.m9}>TWR {i+1}</div>
                        <div style={{...C.cond,fontSize:13,fontWeight:700,color:'var(--bright)',lineHeight:1.2,textTransform:'uppercase'}}>{tw.short}</div>
                        <div style={C.m9}>{tw.addr}</div>
                        <div style={{...C.m9,color:'var(--twr)'}}>📅 {tw.sched}</div>
                        <div style={{display:'flex',alignItems:'center',gap:5,padding:'3px 8px',borderRadius:3,background:bg,...C.cond,fontSize:11,fontWeight:700,letterSpacing:'.06em',textTransform:'uppercase',color:clr,marginTop:4}}>
                          <div style={{width:6,height:6,borderRadius:'50%',background:'currentColor',flexShrink:0}}/>
                          {lbl}
                        </div>
                        {info.date&&<div style={{...C.m9,color:'var(--done)'}}>Done {info.date}</div>}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* EMS */}
              <SecLabel>Phase 2 — EMS Stations · Starting Apr 28</SecLabel>
              <EMSSec data={data}/>

              {/* Footer */}
              <div style={{borderTop:'1px solid var(--b1)',paddingTop:16,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:8,marginTop:8}}>
                <div style={C.m9}>MCHD · MONTGOMERY COUNTY HOSPITAL DISTRICT · DEVICE UPGRADE PROJECT · INTERNAL USE ONLY</div>
                <div style={C.m9}>PROJECTED COMPLETE: MAY 13, 2025 · {tot} TOTAL SITES</div>
              </div>
            </div>
          </div>
        )}

        {/* Upload modal */}
        {modalOpen&&(
          <div onClick={e=>{if(e.target===e.currentTarget&&!uploading)setModalOpen(false)}}
            style={{position:'fixed',inset:0,background:'rgba(7,9,15,.88)',backdropFilter:'blur(6px)',zIndex:300,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{background:'var(--panel)',border:'1px solid var(--b2)',borderRadius:8,padding:'36px 40px',display:'flex',flexDirection:'column',alignItems:'center',gap:16,maxWidth:460,width:'92%'}}>
              <div style={{...C.cond,fontSize:22,fontWeight:900,color:'var(--bright)',textTransform:'uppercase',letterSpacing:'.05em'}}>⬆ Update Dashboard</div>
              <div style={{fontSize:12,color:'var(--dim)',textAlign:'center',lineHeight:1.65,maxWidth:340}}>
                Upload the MCHD Master Workbook. The dashboard updates immediately and all viewers sync within 10 seconds.
              </div>
              <div
                onClick={()=>!uploading&&fileRef.current?.click()}
                onDragOver={e=>{e.preventDefault();setDragging(true)}}
                onDragLeave={()=>setDragging(false)}
                onDrop={e=>{e.preventDefault();setDragging(false);const f=e.dataTransfer.files[0];if(f&&!uploading)doUpload(f)}}
                style={{width:'100%',border:`2px dashed ${dragging?'var(--accent)':'var(--b2)'}`,borderRadius:6,padding:'32px 20px',display:'flex',flexDirection:'column',alignItems:'center',gap:10,cursor:uploading?'default':'pointer',background:dragging?'rgba(47,127,255,.06)':'var(--bg2)',transition:'all .2s'}}>
                {uploading?<div className="spin"/>:<>
                  <div style={{fontSize:30}}>📅</div>
                  <div style={{...C.cond,fontSize:16,fontWeight:700,color:'var(--bright)',textTransform:'uppercase'}}>Drop File Here</div>
                  <div style={C.m9}>MCHD_Master_Workbook.xlsx</div>
                </>}
              </div>
              {uploading&&(
                <div style={{width:'100%',display:'flex',flexDirection:'column',gap:8}}>
                  <div style={{height:4,background:'var(--b1)',borderRadius:2,overflow:'hidden'}}>
                    <div style={{height:'100%',background:'var(--accent)',borderRadius:2,width:`${upPct}%`,transition:'width .4s'}}/>
                  </div>
                  <div style={{...C.m9,textAlign:'center',letterSpacing:'.06em',color:upStatus.startsWith('✓')?'var(--done)':upStatus.startsWith('✗')?'#e63946':'var(--dim)'}}>
                    {upStatus}
                  </div>
                </div>
              )}
              <div style={C.m9}>Processed server-side · other viewers update within 10s</div>
              {!uploading&&(
                <button onClick={()=>setModalOpen(false)} style={{padding:'6px 18px',background:'transparent',color:'var(--dim)',border:'1px solid var(--b2)',borderRadius:3,...C.cond,fontSize:12,fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',cursor:'pointer'}}>
                  ✕ Cancel
                </button>
              )}
            </div>
          </div>
        )}

        <input ref={fileRef} type="file" accept=".xlsx,.xls" style={{display:'none'}}
          onChange={e=>{const f=e.target.files?.[0];if(f)doUpload(f);e.target.value=''}}/>

        {toast&&(
          <div style={{position:'fixed',bottom:24,right:24,zIndex:400,padding:'10px 16px',borderRadius:4,...C.m9,fontSize:11,letterSpacing:'.06em',border:'1px solid',animation:'si .2s ease',...(toast.ok?{background:'var(--donel)',color:'var(--done)',borderColor:'var(--doneb)'}:{background:'rgba(230,57,70,.12)',color:'#e63946',borderColor:'#a02030'})}}>
            {toast.msg}
          </div>
        )}
      </div>
    </>
  )
}

// Tells _app.tsx to skip the site layout for this page
MCHDPage.noLayout = true
export default MCHDPage

// ── Sub-components ────────────────────────────────────────────────────────────
function SecLabel({children}:{children:React.ReactNode}) {
  return (
    <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,fontWeight:700,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--dim)',padding:'0 0 10px',display:'flex',alignItems:'center',gap:12}}>
      {children}
      <div style={{flex:1,height:1,background:'rgba(80,130,220,.1)'}}/>
    </div>
  )
}

function EMSSec({data}:{data:DashboardData}) {
  let curG=0
  return (
    <div>
      {EMS.map((day,di)=>{
        const ng=day.g!==curG; if(ng)curG=day.g
        const gm=GM[day.g]
        return (
          <div key={day.dt}>
            {ng&&(
              <div style={{display:'flex',alignItems:'center',gap:10,padding:'10px 0 8px'}}>
                <div style={{width:10,height:10,borderRadius:'50%',background:gm.color,flexShrink:0}}/>
                <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:15,fontWeight:700,textTransform:'uppercase',letterSpacing:'.05em',color:gm.color}}>{gm.name}</div>
                <div style={{fontSize:12,color:'var(--dim)'}}>— {gm.area}</div>
                <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:'var(--dim)',marginLeft:'auto'}}>
                  {gm.dates} · {gDone(data,day.g)}/{gTotal(day.g)} complete
                </div>
              </div>
            )}
            <div style={{display:'grid',gridTemplateColumns:'110px 1fr',gap:1,background:'rgba(80,130,220,.1)',border:'1px solid rgba(80,130,220,.1)',borderRadius:3,marginBottom:4,overflow:'hidden',animation:`fu .3s ${di*.03}s both`}}>
              <div style={{background:'var(--bg2)',padding:'10px 14px',display:'flex',flexDirection:'column',justifyContent:'center',gap:3,borderLeft:`3px solid ${gm.color}`}}>
                <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:14,fontWeight:700,color:'var(--bright)',textTransform:'uppercase'}}>{day.day}</div>
                <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:'var(--dim)'}}>{day.dt}</div>
              </div>
              <div style={{display:'flex',alignItems:'stretch',flexWrap:'wrap',gap:1,background:'rgba(80,130,220,.1)'}}>
                {day.ids.map(id=>{
                  const info=data.stn[id]??{status:'Pending',date:'',tech:'',addr:'',city:''}
                  const s=st(info.status)
                  const [clr,lbl]=s==='dn'?['var(--done)','✓ Complete']:s==='pr'?['var(--prog)','⬤ In Progress']:['var(--dim)','○ Pending']
                  return (
                    <div key={id} style={{flex:1,minWidth:160,background:'var(--panel)',padding:'10px 14px',display:'flex',flexDirection:'column',gap:3}}>
                      <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:15,fontWeight:700,letterSpacing:'.04em',color:gm.color}}>{id}</div>
                      <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:'var(--dim)',lineHeight:1.4}}>{info.addr}{info.city?` · ${info.city}`:''}</div>
                      <div style={{display:'flex',alignItems:'center',gap:5,marginTop:4,fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,fontWeight:700,letterSpacing:'.06em',textTransform:'uppercase',color:clr}}>
                        <div style={{width:6,height:6,borderRadius:'50%',background:'currentColor',flexShrink:0}}/>
                        {lbl}
                      </div>
                      {info.date&&<div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:'var(--done)',marginTop:1}}>Done {info.date}</div>}
                      {info.tech&&<div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:'var(--dim)'}}>Tech: {info.tech}</div>}
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

// ── Style constants ───────────────────────────────────────────────────────────
const C = {
  center: {display:'flex',flexDirection:'column' as const,alignItems:'center',justifyContent:'center',minHeight:'100vh',gap:16,position:'relative' as const,zIndex:1,padding:'40px 20px'},
  org:    {fontFamily:"'Barlow Condensed',sans-serif",fontSize:10,fontWeight:700,letterSpacing:'.22em',color:'var(--accent)',textTransform:'uppercase' as const},
  big:    {fontFamily:"'Barlow Condensed',sans-serif",fontSize:46,fontWeight:900,color:'var(--bright)',textTransform:'uppercase' as const,textAlign:'center' as const,lineHeight:1},
  h1:     {fontFamily:"'Barlow Condensed',sans-serif",fontSize:28,fontWeight:900,color:'var(--bright)',textTransform:'uppercase' as const,lineHeight:1,margin:0},
  hdr:    {padding:'24px 0 20px',borderBottom:'1px solid rgba(80,130,220,.22)',marginBottom:24,display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap' as const,gap:14},
  panel:  {background:'var(--panel)',border:'1px solid var(--b1)',borderRadius:4,padding:'20px 24px',marginBottom:24},
  ptitle: {fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,fontWeight:700,letterSpacing:'.18em',textTransform:'uppercase' as const,color:'var(--dim)',marginBottom:14},
  btn:    {padding:'6px 14px',background:'rgba(47,127,255,.12)',color:'var(--accent)',border:'1px solid rgba(47,127,255,.35)',borderRadius:3,fontFamily:"'Barlow Condensed',sans-serif",fontSize:12,fontWeight:700,letterSpacing:'.07em',textTransform:'uppercase' as const,cursor:'pointer'} as React.CSSProperties,
  cond:   {fontFamily:"'Barlow Condensed',sans-serif"},
  m9:     {fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:'var(--dim)',letterSpacing:'.05em'},
  m10:    {fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:'var(--dim)',letterSpacing:'.07em'},
  m11:    {fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:'var(--dim)'},
}
