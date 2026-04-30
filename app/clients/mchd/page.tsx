"use client";

import { useState, useEffect, useRef } from "react";
import * as XLSX from "xlsx";

// ══════════════════════════════════════════
//  STATIC DATA SCHEDULE
// ══════════════════════════════════════════
const TWR = [
  { name: 'Conroe Service Center Tower', short: 'CSC Tower', sched: 'Apr 7–8', addr: '1400 S Loop 336 W, Conroe' },
  { name: 'East County / Splendora Tower', short: 'E. County/Splendora', sched: 'Apr 9–10', addr: '14809 First St, Splendora' },
  { name: 'Thompson Road Tower', short: 'Thompson Rd', sched: 'Apr 11–14', addr: '12370 Thompson Rd, Willis' },
  { name: 'Robinson Rd Tower', short: 'Robinson Rd', sched: 'Apr 15–16', addr: '27906 Robinson Rd, Spring' },
  { name: 'Magnolia Tower', short: 'Magnolia', sched: 'Apr 17–18', addr: '14575 FM 1488, Magnolia' },
  { name: 'Grangerland Tower', short: 'Grangerland', sched: 'Apr 21–22', addr: '13885 Grangerland Rd, Conroe' },
  { name: 'Conroe Service Tower', short: 'Conroe Svc', sched: 'Apr 23–24', addr: '401 Sgt Ed Holcomb, Conroe' },
];

const EMS = [
  { day: 'Mon', dt: 'Apr 28', g: 1, ids: ['St. 10', 'St. 15', 'St. 11'] },
  { day: 'Tue', dt: 'Apr 29', g: 1, ids: ['St. 14', 'St. 45', 'St. 16'] },
  { day: 'Wed', dt: 'Apr 30', g: 1, ids: ['St. 13'] },
  { day: 'Thu', dt: 'May 1', g: 2, ids: ['St. 27', 'St. 24', 'St. 23'] },
  { day: 'Fri', dt: 'May 2', g: 2, ids: ['St. 26', 'St. 20', 'St. 25'] },
  { day: 'Mon', dt: 'May 5', g: 2, ids: ['St. 22', 'St. 21'] },
  { day: 'Tue', dt: 'May 6', g: 3, ids: ['St. 12', 'St. 33', 'St. 32'] },
  { day: 'Wed', dt: 'May 7', g: 3, ids: ['St. 35', 'St. 30', 'St. 34'] },
  { day: 'Thu', dt: 'May 8', g: 3, ids: ['St. 31'] },
  { day: 'Fri', dt: 'May 9', g: 4, ids: ['St. 44', 'St. 43', 'St. 47'] },
  { day: 'Mon', dt: 'May 12', g: 4, ids: ['St. 46', 'St. 40', 'St. 41'] },
  { day: 'Tue', dt: 'May 13', g: 4, ids: ['St. 42'] },
];

const GM: Record<number, any> = {
  1: { name: 'Group 1', area: 'North Conroe / Willis', color: 'bg-red-500', text: 'text-red-400', border: 'border-red-500/30', dates: 'Apr 28–30' },
  2: { name: 'Group 2', area: 'Woodlands / Spring', color: 'bg-blue-500', text: 'text-blue-400', border: 'border-blue-500/30', dates: 'May 1–5' },
  3: { name: 'Group 3', area: 'East / Porter', color: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500/30', dates: 'May 6–8' },
  4: { name: 'Group 4', area: 'West / Magnolia', color: 'bg-orange-500', text: 'text-orange-400', border: 'border-orange-500/30', dates: 'May 9–13' },
};

export default function MCHDClientPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [data, setData] = useState<{ stn: any, twr: any } | null>(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("MCHD_Master_Workbook.xlsx");
  const [syncTime, setSyncTime] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      fetch('/MCHD_Master_Workbook.xlsx')
        .then(res => res.arrayBuffer())
        .then(buf => parseData(buf, "MCHD_Master_Workbook.xlsx"))
        .catch(err => {
          console.error("No default file found. Please upload one.", err);
          setLoading(false);
        });
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "MCHDpass") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  const parseData = (buf: ArrayBuffer, fname: string) => {
    try {
      const wb = XLSX.read(buf, { type: 'array', cellDates: true });
      const d = { stn: {} as any, twr: {} as any };

      for (let g = 1; g <= 4; g++) {
        const ws = wb.Sheets['Group ' + g];
        if (!ws) continue;
        const rows: any[] = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
        for (let i = 3; i < rows.length; i++) {
          const r = rows[i], id = String(r[0] || '').trim();
          if (!id || /^total/i.test(id)) continue;
          d.stn[id] = { status: String(r[7] || 'Pending'), date: fmtD(r[8]), tech: String(r[9] || ''), addr: String(r[1] || ''), city: String(r[2] || '') };
        }
      }

      const ws2 = wb.Sheets['Tower Sites'];
      if (ws2) {
        const rows: any[] = XLSX.utils.sheet_to_json(ws2, { header: 1, defval: '' });
        for (let i = 3; i < rows.length; i++) {
          const r = rows[i];
          if (!r[1] || /^total/i.test(String(r[1] || ''))) continue;
          d.twr[String(r[1]).trim()] = { status: String(r[6] || 'Pending'), date: fmtD(r[7]) };
        }
      }

      setData(d);
      setFileName(fname);
      setSyncTime(new Date().toLocaleTimeString());
      setLoading(false);
    } catch (err) {
      console.error("Excel parse error:", err);
      setData(null);
      setLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (ev.target?.result) {
        parseData(ev.target.result as ArrayBuffer, file.name);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const fmtD = (v: any) => {
    if (!v) return '';
    if (v instanceof Date) return v.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const s = String(v).split('T')[0];
    const d = new Date(s + 'T00:00:00');
    return isNaN(d.getTime()) ? s : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const st = (s: string) => {
    if (!s) return 'pe';
    if (/complet/i.test(s)) return 'dn';
    if (/progress|started|active|in.prog/i.test(s)) return 'pr';
    return 'pe';
  };

  const gDone = (g: number) => {
    if (!data) return 0;
    return EMS.filter(d => d.g === g).flatMap(d => d.ids).filter(id => st((data.stn[id] || {}).status) === 'dn').length;
  };
  
  const gTotal = (g: number) => {
    return EMS.filter(d => d.g === g).flatMap(d => d.ids).length;
  };

  // ══════════════════════════════════════════
  //  LOCK SCREEN VIEW - Bulletproof Layout
  // ══════════════════════════════════════════
  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', fontFamily: 'sans-serif' }}>
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '2.5rem', borderRadius: '1rem', width: '100%', maxWidth: '450px', textAlign: 'center', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
          <div style={{ color: '#3b82f6', fontWeight: 'bold', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            Secure Client Portal
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', margin: '0 0 2rem 0' }}>
            MCHD Dashboard
          </h1>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <input
              type="password"
              placeholder="Enter Access Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '1rem', backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '0.5rem', color: '#ffffff', textAlign: 'center', outline: 'none', fontSize: '1.125rem' }}
            />
            {error && <p style={{ color: '#f87171', fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>{error}</p>}
            <button type="submit" style={{ padding: '1rem', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1rem' }}>
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════
  //  DASHBOARD VIEW
  // ══════════════════════════════════════════
  const allS = data ? Object.values(data.stn) : [];
  const allT = data ? Object.values(data.twr) : [];
  const sDone = allS.filter((x: any) => st(x.status) === 'dn').length;
  const tDone = allT.filter((x: any) => st(x.status) === 'dn').length;
  const tot = allS.length + allT.length;
  const done = sDone + tDone;
  const pct = tot > 0 ? Math.round((done / tot) * 100) : 0;

  const groupedEMS = [1, 2, 3, 4].map(g => ({
    g,
    info: GM[g],
    days: EMS.filter(d => d.g === g)
  }));

  return (
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#020617', color: '#cbd5e1', padding: '2rem 1rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #1e293b', paddingBottom: '1.5rem', marginBottom: '2rem', gap: '1.5rem' }}>
          <div>
            <div style={{ color: '#3b82f6', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Montgomery County Hospital District</div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', margin: 0, lineHeight: 1.2 }}>Device Upgrade Schedule</h1>
            <p style={{ color: '#94a3b8', marginTop: '0.5rem', fontSize: '1rem' }}>
              {loading ? "Loading Dashboard Data..." : !data ? "No Data Loaded" : 
              `${done} of ${tot} sites complete (${pct}%) · Towers: ${tDone}/7 · Stations: ${sDone}/${allS.length} · Est. completion: May 13, 2025`}
            </p>
          </div>
          
          <div style={{ backgroundColor: '#0f172a', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #1e293b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: data ? '#22c55e' : '#475569' }}></div>
              <span style={{ fontFamily: 'monospace', color: '#94a3b8' }}>
                <strong style={{ color: data ? '#4ade80' : '#94a3b8' }}>{data ? "DATA LOADED" : "AWAITING FILE"}</strong> · Updated {syncTime || "Never"}
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#64748b', marginBottom: '0.5rem' }}>📂 {fileName}</div>
            
            <input type="file" accept=".xlsx,.xls" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileUpload} />
            <button 
              onClick={() => fileInputRef.current?.click()}
              style={{ width: '100%', padding: '0.5rem 1rem', backgroundColor: '#1e293b', color: '#ffffff', fontWeight: 'bold', borderRadius: '0.25rem', border: '1px solid #334155', cursor: 'pointer', fontSize: '0.875rem' }}
            >
              ⇧ Upload Updated XLSX (Local)
            </button>
          </div>
        </div>

        {/* NO FILE FOUND STATE */}
        {!data && !loading && (
          <div style={{ padding: '5rem 1rem', textAlign: 'center', border: '2px dashed #1e293b', borderRadius: '1rem', backgroundColor: '#0f172a' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '0.5rem' }}>No Default File Found</h2>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Upload the MCHD Master Workbook to populate the dashboard.</p>
            <button onClick={() => fileInputRef.current?.click()} style={{ padding: '0.75rem 2rem', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
              Browse File
            </button>
          </div>
        )}

        {/* DASHBOARD CONTENT */}
        {data && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* PROGRESS BARS */}
            <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '1rem', padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Overall Project Progress</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}><span style={{ color: '#ffffff' }}>OVERALL</span> <span style={{ color: '#94a3b8', fontFamily: 'monospace' }}>{done} / {tot}</span></div>
                  <div style={{ height: '0.75rem', width: '100%', backgroundColor: '#1e293b', borderRadius: '999px', overflow: 'hidden' }}><div style={{ height: '100%', backgroundColor: '#22c55e', width: `${pct}%` }}></div></div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem', fontWeight: 'bold' }}>{pct}% Complete</div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}><span style={{ color: '#c084fc' }}>TOWERS</span> <span style={{ color: '#94a3b8', fontFamily: 'monospace' }}>{tDone} / 7</span></div>
                  <div style={{ height: '0.75rem', width: '100%', backgroundColor: '#1e293b', borderRadius: '999px', overflow: 'hidden' }}><div style={{ height: '100%', backgroundColor: '#a855f7', width: `${(tDone/7)*100}%` }}></div></div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem', fontWeight: 'bold' }}>Phase 1 · Apr 7–24</div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}><span style={{ color: '#60a5fa' }}>EMS STATIONS</span> <span style={{ color: '#94a3b8', fontFamily: 'monospace' }}>{sDone} / {allS.length}</span></div>
                  <div style={{ height: '0.75rem', width: '100%', backgroundColor: '#1e293b', borderRadius: '999px', overflow: 'hidden' }}><div style={{ height: '100%', backgroundColor: '#3b82f6', width: `${allS.length ? (sDone/allS.length)*100 : 0}%` }}></div></div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem', fontWeight: 'bold' }}>Phase 2 · Apr 28 – May 13</div>
                </div>
              </div>
            </div>

            {/* TOWERS SECTION */}
            <div>
              <h3 style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid #1e293b', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Phase 1 — Tower Sites · Starting Apr 7</h3>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '1rem', overflow: 'hidden' }}>
                <div style={{ backgroundColor: 'rgba(88, 28, 135, 0.2)', borderBottom: '1px solid #1e293b', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>📡</span>
                    <div>
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', margin: 0 }}>Tower Phase</h2>
                      <p style={{ fontSize: '0.75rem', color: '#d8b4fe', margin: '0.25rem 0 0 0' }}>Apr 7 – Apr 24, 2025 · 7 Locations</p>
                    </div>
                  </div>
                  <div style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: '#d8b4fe', fontWeight: 'bold', borderRadius: '0.5rem', border: '1px solid rgba(168, 85, 247, 0.3)', fontSize: '0.875rem' }}>
                    {tDone} / 7
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', backgroundColor: '#1e293b' }}>
                  {TWR.map((tw, i) => {
                    const info = data.twr[tw.name] || { status: 'Pending', date: '' };
                    const s = st(info.status);
                    const isDone = s === 'dn';
                    const isProg = s === 'pr';
                    
                    return (
                      <div key={i} style={{ backgroundColor: '#0f172a', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '0.25rem' }}>TWR {i + 1}</div>
                          <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#ffffff', lineHeight: 1.2, marginBottom: '0.5rem' }}>{tw.short}</div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '1rem' }}>{tw.addr}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#c084fc', marginBottom: '0.75rem' }}>📅 {tw.sched}</div>
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 'bold', backgroundColor: isDone ? 'rgba(34, 197, 94, 0.1)' : isProg ? 'rgba(245, 158, 11, 0.1)' : '#1e293b', color: isDone ? '#4ade80' : isProg ? '#fbbf24' : '#94a3b8', border: isDone ? '1px solid rgba(34, 197, 94, 0.2)' : isProg ? '1px solid rgba(245, 158, 11, 0.2)' : '1px solid #334155' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: isDone ? '#22c55e' : isProg ? '#f59e0b' : '#64748b' }}></div>
                            {isDone ? 'Complete' : isProg ? 'In Progress' : 'Pending'}
                          </div>
                          {info.date && <div style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#22c55e', marginTop: '0.5rem' }}>Done: {info.date}</div>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* STATIONS SECTION */}
            <div>
              <h3 style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid #1e293b', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Phase 2 — EMS Stations · Starting Apr 28</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {groupedEMS.map((group) => {
                  // Standardize inline colors for groups
                  const groupColorHex = group.g === 1 ? '#ef4444' : group.g === 2 ? '#3b82f6' : group.g === 3 ? '#10b981' : '#f97316';
                  
                  return (
                    <div key={group.g} style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '1rem', overflow: 'hidden' }}>
                      
                      {/* GROUP HEADER */}
                      <div style={{ padding: '1.5rem', borderBottom: '1px solid #1e293b', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: groupColorHex }}></div>
                          <div>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: groupColorHex, margin: 0 }}>{group.info.name} <span style={{ color: '#64748b', fontWeight: 'normal', fontSize: '1rem', marginLeft: '0.5rem' }}>— {group.info.area}</span></h2>
                          </div>
                        </div>
                        <div style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: '#94a3b8' }}>
                          {group.info.dates} &nbsp;·&nbsp; <strong style={{ color: '#ffffff' }}>{gDone(group.g)}/{gTotal(group.g)}</strong> Done
                        </div>
                      </div>

                      {/* DAYS */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: '#1e293b' }}>
                        {group.days.map((day, di) => (
                          <div key={di} style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#0f172a' }}>
                            {/* DAY LABEL */}
                            <div style={{ padding: '1.5rem', width: '100%', maxWidth: '160px', borderLeft: `4px solid ${groupColorHex}`, backgroundColor: '#0f172a', borderRight: '1px solid #1e293b', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#ffffff' }}>{day.day}</div>
                              <div style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: '#94a3b8' }}>{day.dt}</div>
                            </div>
                            
                            {/* STATIONS GRID */}
                            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', backgroundColor: '#1e293b' }}>
                              {day.ids.map(id => {
                                const info = data.stn[id] || { status: 'Pending', date: '', tech: '', addr: '', city: '' };
                                const s = st(info.status);
                                const isDone = s === 'dn';
                                const isProg = s === 'pr';
                                
                                return (
                                  <div key={id} style={{ backgroundColor: '#0f172a', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                      <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem', color: groupColorHex }}>{id}</div>
                                      <div style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '1rem' }}>{info.addr}{info.city ? `, ${info.city}` : ''}</div>
                                    </div>
                                    
                                    <div>
                                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 'bold', backgroundColor: isDone ? 'rgba(34, 197, 94, 0.1)' : isProg ? 'rgba(245, 158, 11, 0.1)' : '#1e293b', color: isDone ? '#4ade80' : isProg ? '#fbbf24' : '#94a3b8', border: isDone ? '1px solid rgba(34, 197, 94, 0.2)' : isProg ? '1px solid rgba(245, 158, 11, 0.2)' : '1px solid #334155' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: isDone ? '#22c55e' : isProg ? '#f59e0b' : '#64748b' }}></div>
                                        {isDone ? 'Complete' : isProg ? 'In Progress' : 'Pending'}
                                      </div>
                                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem' }}>
                                        <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#22c55e' }}>{info.date ? `Done: ${info.date}` : ''}</span>
                                        <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#64748b' }}>{info.tech ? `Tech: ${info.tech}` : ''}</span>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* FOOTER */}
            <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1.5rem', marginTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', fontSize: '0.75rem', fontFamily: 'monospace', color: '#64748b' }}>
              <div>MCHD · MONTGOMERY COUNTY HOSPITAL DISTRICT · SECURE INTERNAL DASHBOARD</div>
              <div>PROJECTED COMPLETE: MAY 13, 2025 · LOADED: {syncTime}</div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}