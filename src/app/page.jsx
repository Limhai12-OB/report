"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity=".9"/><rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity=".4"/><rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity=".4"/><rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity=".4"/></svg>
  )},
  { id: "classes", label: "Classes", icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M5 3V2M11 3V2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M1 7h14" stroke="currentColor" strokeWidth="1.4"/></svg>
  )},
  { id: "tasks", label: "Tasks", icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l2.5 2.5L10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4"/></svg>
  )},
  { id: "reports", label: "Reports", icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="1" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M5 5h6M5 8h6M5 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
  )},
  { id: "settings", label: "Settings", icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
  )},
];

const TIMELINES = [
  { label: "Last 7 days", sub: "Past week" },
  { label: "Last 30 days", sub: "Past month" },
  { label: "Last 3 months", sub: "Quarterly" },
  { label: "Last 6 months", sub: "Half-year" },
  { label: "This year", sub: "Jan – now" },
  { label: "Custom range", sub: "Pick dates" },
];

const REPORT_TYPES = [
  {
    id: "All Classes",
    label: "All Classes",
    desc: "Holistic overview across every class — attendance, scores, and task completion rates at a glance.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="1" y="1" width="9" height="9" rx="2.5" fill="#378add" opacity=".2" stroke="#378add" strokeWidth="1.4"/><rect x="12" y="1" width="9" height="9" rx="2.5" fill="#378add" opacity=".2" stroke="#378add" strokeWidth="1.4"/><rect x="1" y="12" width="9" height="9" rx="2.5" fill="#378add" opacity=".2" stroke="#378add" strokeWidth="1.4"/><rect x="12" y="12" width="9" height="9" rx="2.5" fill="#378add" opacity=".1" stroke="#378add" strokeWidth="1.4" strokeDasharray="2 1.5"/></svg>
    ),
  },
  {
    id: "Task Based",
    label: "Task Based",
    desc: "Deep-dive into individual tasks — submissions, due dates, completion status, and overdue counts.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="2" width="18" height="18" rx="4" stroke="#378add" strokeWidth="1.4" fill="#378add" fillOpacity=".1"/><path d="M7 11l3 3 5-5" stroke="#378add" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
];

const MOCK_DATA = {
  "All Classes": {
    stats: [
      { label: "Total classes", value: "12", delta: "+2 this term", up: true },
      { label: "Total students", value: "348", delta: "+24 enrolled", up: true },
      { label: "Avg score", value: "78%", delta: "-1.2% vs last period", up: false },
      { label: "Tasks completed", value: "204", delta: "86% completion rate", up: true },
    ],
    headers: ["Class name", "Students", "Avg score", "Tasks", "Completion"],
    rows: [
      { cells: ["Mathematics 101", "32", "82%", "18", "94%"], completionIdx: 4 },
      { cells: ["English Literature", "28", "75%", "14", "87%"], completionIdx: 4 },
      { cells: ["Physics Advanced", "24", "71%", "22", "79%"], completionIdx: 4 },
      { cells: ["Computer Science", "30", "88%", "20", "96%"], completionIdx: 4 },
      { cells: ["History & Culture", "26", "77%", "12", "91%"], completionIdx: 4 },
    ],
    bars: [
      ["Mathematics 101", 94, "#185fa5"],
      ["Computer Science", 96, "#0f6e56"],
      ["History & Culture", 91, "#185fa5"],
      ["English Literature", 87, "#185fa5"],
      ["Physics Advanced", 79, "#ba7517"],
    ],
  },
  "Task Based": {
    stats: [
      { label: "Total tasks", value: "86", delta: "Across all classes", up: true },
      { label: "Completed", value: "204", delta: "+18 this week", up: true },
      { label: "Pending", value: "44", delta: "Due within 7 days", up: false },
      { label: "Overdue", value: "12", delta: "Requires attention", up: false },
    ],
    headers: ["Task name", "Class", "Due date", "Status", "Submissions"],
    rows: [
      { cells: ["Assignment 1 — Math Quiz", "Mathematics 101", "Apr 12", "Completed", "32 / 32"], statusIdx: 3 },
      { cells: ["Essay Draft", "English Literature", "Apr 18", "Pending", "21 / 28"], statusIdx: 3 },
      { cells: ["Lab Report", "Physics Advanced", "Apr 20", "Overdue", "18 / 24"], statusIdx: 3 },
      { cells: ["Coding Project", "Computer Science", "Apr 25", "Completed", "30 / 30"], statusIdx: 3 },
      { cells: ["Timeline Poster", "History & Culture", "Apr 28", "Pending", "14 / 26"], statusIdx: 3 },
    ],
  },
};

/** Seed list shown on the reports home (name, type, period, generated date). */
const INITIAL_SAVED_REPORTS = [
  { id: "seed-1", name: "Spring term overview", type: "All Classes", timeline: "Last 30 days", generatedAt: "Apr 18, 2026", reportId: "RPT-3102" },
  { id: "seed-2", name: "Assignment pipeline Q1", type: "Task Based", timeline: "Last 3 months", generatedAt: "Apr 22, 2026", reportId: "RPT-7841" },
  { id: "seed-3", name: "Weekly class pulse", type: "All Classes", timeline: "Last 7 days", generatedAt: "Apr 28, 2026", reportId: "RPT-5520" },
];

const STATUS_STYLE = {
  Completed: { bg: "#eaf3de", color: "#3b6d11", dot: "#639922" },
  Pending:   { bg: "#faeeda", color: "#854f0b", dot: "#ef9f27" },
  Overdue:   { bg: "#fcebeb", color: "#a32d2d", dot: "#e24b4a" },
};

const completionStyle = (v) => {
  const n = parseInt(v);
  if (n >= 90) return { bg: "#eaf3de", color: "#3b6d11" };
  if (n >= 75) return { bg: "#faeeda", color: "#854f0b" };
  return { bg: "#fcebeb", color: "#a32d2d" };
};

const css = `
  @keyframes fadeUp { from { opacity:0;transform:translateY(14px) scale(.97); } to { opacity:1;transform:none; } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  .modal-wrap { animation: fadeUp .22s cubic-bezier(.16,1,.3,1) both; }
  .overlay-bg { animation: fadeIn .15s ease both; backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
  .modal-panel { box-shadow: 0 25px 50px -12px rgba(0,0,0,.25), 0 0 0 1px rgba(0,0,0,.04); }
  .nav-btn:hover { background: var(--color-background-secondary) !important; }
  .type-opt:hover { border-color: #378add !important; }
  .tl-opt:hover { border-color: #378add !important; }
  .tr-hover:hover td { background: var(--color-background-secondary); }
  .stat-tile { transition: transform .12s; }
  .stat-tile:hover { transform: translateY(-1px); }
  .report-row:hover { background: var(--color-background-secondary); }
`;

export default function App() {
  const [activeNav, setActiveNav] = useState("reports");
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [reportType, setReportType] = useState(null);
  const [timeline, setTimeline] = useState("");
  const [report, setReport] = useState(null);
  const [savedReports, setSavedReports] = useState(INITIAL_SAVED_REPORTS);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const closeModal = () => { setShowModal(false); setStep(1); setReportType(null); setTimeline(""); };
  const generate = () => {
    const reportId = `RPT-${Math.floor(1000 + Math.random() * 9000)}`;
    const generatedAt = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    const name = `${reportType} · ${timeline}`;
    const entry = { id: `sr-${Date.now()}`, name, type: reportType, timeline, generatedAt, reportId };
    setSavedReports((prev) => [entry, ...prev]);
    setReport({ type: reportType, timeline, data: MOCK_DATA[reportType], name, reportId, generatedAt });
    closeModal();
  };

  const openSavedReport = (item) => {
    setReport({
      type: item.type,
      timeline: item.timeline,
      data: MOCK_DATA[item.type],
      name: item.name,
      reportId: item.reportId,
      generatedAt: item.generatedAt,
    });
  };

  const deleteSavedReport = (id, e) => {
    e?.stopPropagation();
    setSavedReports((prev) => prev.filter((r) => r.id !== id));
  };

  /* ── REPORT VIEW ─────────────────────────────────────────────────────── */
  if (report) {
    const { type, timeline: tl, data, name: reportName, reportId: stableReportId, generatedAt: savedGeneratedAt } = report;
    const isTask = type === "Task Based";
    const displayGenerated = savedGeneratedAt ?? new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    const reportId = stableReportId ?? "RPT-TBD";

    return (
      <div style={{ minHeight: "100vh", background: "var(--color-background-tertiary)", fontFamily: "var(--font-sans)" }}>
        <style>{css}</style>

        {/* Top bar */}
        <div style={{ position: "sticky", top: 0, zIndex: 10, background: "var(--color-background-primary)", borderBottom: "0.5px solid var(--color-border-tertiary)", height: 56, display: "flex", alignItems: "center", padding: "0 1.75rem", gap: 14 }}>
          <button onClick={() => setReport(null)} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 13, color: "var(--color-text-secondary)", flexShrink: 0 }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8 2L3 6.5 8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back
          </button>
          <div style={{ width: "0.5px", height: 18, background: "var(--color-border-tertiary)" }} />
          <span style={{ fontWeight: 500, fontSize: 14, color: "var(--color-text-primary)" }}>{type} Report</span>
          <span style={{ fontSize: 11, fontWeight: 500, background: "#e6f1fb", color: "#185fa5", borderRadius: 20, padding: "3px 10px", flexShrink: 0 }}>{tl}</span>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <button style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 13, color: "var(--color-text-secondary)" }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v8M3.5 6.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M1 11.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Export PDF
            </button>
            <button style={{ display: "flex", alignItems: "center", gap: 6, background: "#185fa5", color: "#fff", border: "none", borderRadius: 8, padding: "7px 16px", cursor: "pointer", fontSize: 13, fontWeight: 500 }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="10" cy="3" r="2" stroke="#fff" strokeWidth="1.3"/><circle cx="10" cy="10" r="2" stroke="#fff" strokeWidth="1.3"/><circle cx="3" cy="6.5" r="2" stroke="#fff" strokeWidth="1.3"/><path d="M5 7.5l3.5 2M8.5 4L5 5.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/></svg>
              Share
            </button>
          </div>
        </div>

        <div style={{ maxWidth: 940, margin: "0 auto", padding: "2.5rem 2rem" }}>

          {/* Report header card */}
          <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 14, padding: "1.75rem 2rem", marginBottom: "1.25rem", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "#e6f1fb", border: "0.5px solid #b5d4f4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="2" width="16" height="18" rx="3" stroke="#185fa5" strokeWidth="1.5"/><path d="M7 7h8M7 11h8M7 15h5" stroke="#185fa5" strokeWidth="1.4" strokeLinecap="round"/></svg>
              </div>
              <div>
                <p style={{ fontSize: 11, color: "var(--color-text-secondary)", margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".06em" }}>Performance Report</p>
                <h1 style={{ fontSize: 22, fontWeight: 500, color: "var(--color-text-primary)", margin: "0 0 5px" }}>{reportName ?? type}</h1>
                <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>
                  {reportName ? <><span style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>{type}</span> · </> : null}
                  Generated {displayGenerated} · Period: <strong style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>{tl}</strong>
                </p>
              </div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ fontSize: 11, color: "var(--color-text-secondary)", margin: "0 0 3px", textTransform: "uppercase", letterSpacing: ".06em" }}>Report ID</p>
              <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)", margin: 0, fontFamily: "var(--font-mono)" }}>{reportId}</p>
            </div>
          </div>

          {/* Stat cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 12, marginBottom: "1.25rem" }}>
            {data.stats.map(({ label, value, delta, up }) => (
              <div key={label} className="stat-tile" style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "1.25rem 1.125rem" }}>
                <p style={{ fontSize: 11, color: "var(--color-text-secondary)", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: ".06em" }}>{label}</p>
                <p style={{ fontSize: 30, fontWeight: 500, color: "var(--color-text-primary)", margin: "0 0 10px", lineHeight: 1 }}>{value}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 8px", background: up ? "#eaf3de" : "#fcebeb", borderRadius: 20, width: "fit-content" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    {up
                      ? <path d="M5 8V2M2 5l3-3 3 3" stroke="#3b6d11" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      : <path d="M5 2v6M2 5l3 3 3-3" stroke="#a32d2d" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>}
                  </svg>
                  <span style={{ fontSize: 11, color: up ? "#3b6d11" : "#a32d2d", fontWeight: 500 }}>{delta}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bar chart (classes only) */}
          {!isTask && data.bars && (
            <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "1.375rem 1.75rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <p style={{ fontWeight: 500, fontSize: 14, color: "var(--color-text-primary)", margin: 0 }}>Completion by class</p>
                <span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>Task completion rate</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {data.bars.map(([name, pct, color]) => (
                  <div key={name}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <span style={{ fontSize: 13, color: "var(--color-text-primary)" }}>{name}</span>
                      <span style={{ fontSize: 13, fontWeight: 500, color }}>{pct}%</span>
                    </div>
                    <div style={{ height: 7, background: "var(--color-background-secondary)", borderRadius: 99 }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Table */}
          <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "1rem 1.5rem", borderBottom: "0.5px solid var(--color-border-tertiary)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ fontWeight: 500, fontSize: 14, color: "var(--color-text-primary)", margin: 0 }}>{isTask ? "Task breakdown" : "Class breakdown"}</p>
              <span style={{ fontSize: 12, color: "var(--color-text-secondary)", background: "var(--color-background-secondary)", borderRadius: 20, padding: "3px 10px" }}>{data.rows.length} {isTask ? "tasks" : "classes"}</span>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr>
                  {data.headers.map((h) => (
                    <th key={h} style={{ padding: "9px 16px", textAlign: "left", fontWeight: 500, fontSize: 11, color: "var(--color-text-secondary)", background: "var(--color-background-secondary)", borderBottom: "0.5px solid var(--color-border-tertiary)", letterSpacing: ".05em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row, ri) => (
                  <tr key={ri} className="tr-hover" style={{ borderBottom: ri < data.rows.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none" }}>
                    {row.cells.map((cell, ci) => {
                      const isStatusCell = isTask && ci === row.statusIdx;
                      const isCompletionCell = !isTask && ci === row.completionIdx;
                      const ss = isStatusCell ? STATUS_STYLE[cell] : null;
                      const cs = isCompletionCell ? completionStyle(cell) : null;
                      return (
                        <td key={ci} style={{ padding: "13px 16px", color: ci === 0 ? "var(--color-text-primary)" : "var(--color-text-secondary)", fontWeight: ci === 0 ? 500 : 400 }}>
                          {isStatusCell && ss ? (
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: ss.bg, color: ss.color, borderRadius: 20, padding: "4px 10px", fontSize: 11, fontWeight: 500 }}>
                              <span style={{ width: 5, height: 5, borderRadius: "50%", background: ss.dot, flexShrink: 0 }} />
                              {cell}
                            </span>
                          ) : isCompletionCell && cs ? (
                            <span style={{ background: cs.bg, color: cs.color, borderRadius: 20, padding: "4px 10px", fontSize: 11, fontWeight: 500 }}>{cell}</span>
                          ) : cell}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 12, color: "var(--color-text-secondary)", textAlign: "center", marginTop: "2rem" }}>
            EduTrack · {reportId} · {displayGenerated}
          </p>
        </div>
      </div>
    );
  }

  /* ── MAIN LAYOUT ─────────────────────────────────────────────────────── */
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "var(--font-sans)", background: "var(--color-background-tertiary)" }}>
      <style>{css}</style>

      {/* Sidebar */}
      <aside style={{ width: sidebarOpen ? 224 : 60, background: "var(--color-background-primary)", borderRight: "0.5px solid var(--color-border-tertiary)", display: "flex", flexDirection: "column", transition: "width .2s ease", overflow: "hidden", flexShrink: 0 }}>
        <div style={{ height: 56, padding: "0 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
          {sidebarOpen && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 26, height: 26, background: "#185fa5", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="5" height="5" rx="1.5" fill="#fff"/><rect x="8" y="1" width="5" height="5" rx="1.5" fill="#fff" opacity=".5"/><rect x="1" y="8" width="5" height="5" rx="1.5" fill="#fff" opacity=".5"/><rect x="8" y="8" width="5" height="5" rx="1.5" fill="#fff" opacity=".5"/></svg>
              </div>
              <span style={{ fontWeight: 500, fontSize: 14, color: "var(--color-text-primary)", whiteSpace: "nowrap" }}>EduTrack</span>
            </div>
          )}
          <button onClick={() => setSidebarOpen(p => !p)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-text-secondary)", display: "flex", padding: 6, borderRadius: 6, marginLeft: sidebarOpen ? 0 : "auto", marginRight: sidebarOpen ? 0 : "auto" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              {sidebarOpen
                ? <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                : <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>}
            </svg>
          </button>
        </div>

        <nav style={{ flex: 1, padding: "10px 8px" }}>
          {NAV_ITEMS.map(({ id, label, icon }) => {
            const active = activeNav === id;
            return (
              <button key={id} className="nav-btn" onClick={() => setActiveNav(id)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", justifyContent: sidebarOpen ? "flex-start" : "center", background: active ? "var(--color-background-secondary)" : "none", border: "none", borderRadius: 8, cursor: "pointer", color: active ? "#185fa5" : "var(--color-text-secondary)", fontSize: 13, fontWeight: active ? 500 : 400, transition: "all .15s", marginBottom: 2 }}>
                <span style={{ flexShrink: 0 }}>{icon}</span>
                {sidebarOpen && <span style={{ whiteSpace: "nowrap" }}>{label}</span>}
                {active && sidebarOpen && <span style={{ marginLeft: "auto", width: 5, height: 5, borderRadius: "50%", background: "#185fa5", flexShrink: 0 }} />}
              </button>
            );
          })}
        </nav>

        {sidebarOpen ? (
          <div style={{ padding: "10px", borderTop: "0.5px solid var(--color-border-tertiary)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, background: "var(--color-background-secondary)" }}>
              <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#185fa5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: "#fff", flexShrink: 0 }}>JD</div>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: 13, fontWeight: 500, margin: 0, color: "var(--color-text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Jane Doe</p>
                <p style={{ fontSize: 11, color: "var(--color-text-secondary)", margin: 0 }}>Teacher</p>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ padding: "10px 8px", borderTop: "0.5px solid var(--color-border-tertiary)", display: "flex", justifyContent: "center" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#185fa5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: "#fff" }}>JD</div>
          </div>
        )}
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: "2rem 2.5rem", overflowY: "auto" }}>
        {activeNav === "reports" ? (
          <div style={{ maxWidth: 720 }}>
            <div style={{ marginBottom: "2rem" }}>
              <h1 style={{ fontWeight: 500, fontSize: 22, color: "var(--color-text-primary)", margin: "0 0 4px" }}>Reports</h1>
              <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0 }}>Generate and review performance reports for your classes and tasks.</p>
            </div>

            <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "1rem 1.375rem", borderBottom: "0.5px solid var(--color-border-tertiary)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontWeight: 500, fontSize: 14, margin: "0 0 2px", color: "var(--color-text-primary)" }}>Your reports</p>
                  <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0 }}>
                    {savedReports.length === 0 ? "No reports generated yet" : `${savedReports.length} saved report${savedReports.length === 1 ? "" : "s"}`}
                  </p>
                </div>
                <button onClick={() => setShowModal(true)} style={{ display: "flex", alignItems: "center", gap: 6, background: "#185fa5", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 13, fontWeight: 500 }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="#fff" strokeWidth="1.7" strokeLinecap="round"/></svg>
                  Generate report
                </button>
              </div>
              {savedReports.length > 0 ? (
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                      <tr>
                        {["Report name", "Type", "Period", "Generated", ""].map((h) => (
                          <th
                            key={h || "actions"}
                            style={{
                              padding: "10px 1.375rem",
                              textAlign: h ? "left" : "right",
                              fontWeight: 500,
                              fontSize: 11,
                              color: "var(--color-text-secondary)",
                              background: "var(--color-background-secondary)",
                              borderBottom: "0.5px solid var(--color-border-tertiary)",
                              letterSpacing: ".05em",
                              textTransform: "uppercase",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {savedReports.map((row, ri) => (
                        <tr key={row.id} className="report-row" style={{ borderBottom: ri < savedReports.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none" }}>
                          <td style={{ padding: "14px 1.375rem", fontWeight: 500, color: "var(--color-text-primary)" }}>{row.name}</td>
                          <td style={{ padding: "14px 1.375rem", color: "var(--color-text-secondary)" }}>{row.type}</td>
                          <td style={{ padding: "14px 1.375rem", color: "var(--color-text-secondary)" }}>{row.timeline}</td>
                          <td style={{ padding: "14px 1.375rem", color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>{row.generatedAt}</td>
                          <td style={{ padding: "14px 1.375rem", textAlign: "right", whiteSpace: "nowrap" }}>
                            <button
                              type="button"
                              onClick={() => openSavedReport(row)}
                              style={{
                                marginRight: 8,
                                background: "#185fa5",
                                color: "#fff",
                                border: "none",
                                borderRadius: 8,
                                padding: "6px 12px",
                                cursor: "pointer",
                                fontSize: 12,
                                fontWeight: 500,
                              }}
                            >
                              View
                            </button>
                            <button
                              type="button"
                              onClick={(e) => deleteSavedReport(row.id, e)}
                              style={{
                                background: "none",
                                border: "0.5px solid var(--color-border-secondary)",
                                borderRadius: 8,
                                padding: "6px 12px",
                                cursor: "pointer",
                                fontSize: 12,
                                color: "var(--color-text-secondary)",
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
                  <div style={{ width: 52, height: 52, background: "var(--color-background-secondary)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="2" width="18" height="20" rx="3" stroke="var(--color-text-secondary)" strokeWidth="1.5"/><path d="M8 7h8M8 11h8M8 15h5" stroke="var(--color-text-secondary)" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  </div>
                  <p style={{ fontWeight: 500, fontSize: 15, color: "var(--color-text-primary)", margin: "0 0 6px" }}>No reports yet</p>
                  <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 1.5rem", maxWidth: 300, marginLeft: "auto", marginRight: "auto", lineHeight: 1.65 }}>Generate your first report to get insights into class performance or task completion.</p>
                  <button onClick={() => setShowModal(true)} style={{ background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 8, padding: "8px 20px", cursor: "pointer", fontSize: 13, color: "var(--color-text-secondary)" }}>
                    Get started →
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h1 style={{ fontWeight: 500, fontSize: 22, color: "var(--color-text-primary)", margin: "0 0 4px" }}>{NAV_ITEMS.find(n => n.id === activeNav)?.label}</h1>
            <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0 }}>This section is coming soon.</p>
          </div>
        )}
      </main>

      {/* ── MODAL ─────────────────────────────────────────────────────────── */}
      {showModal && (
        <div
          className="overlay-bg"
          role="presentation"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 200,
            padding: "1rem",
          }}
        >
          <div
            className="modal-wrap modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="report-modal-title"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(180deg, var(--color-background-primary) 0%, var(--color-background-secondary) 100%)",
              borderRadius: 16,
              width: "100%",
              maxWidth: 506,
              overflow: "hidden",
              border: "0.5px solid var(--color-border-tertiary)",
            }}
          >

            {/* Header */}
            <div className="bg-white" style={{ padding: "1.375rem 1.5rem", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.125rem" }}>
                <div>
                  <p id="report-modal-title" style={{ fontWeight: 500, fontSize: 16, color: "var(--color-text-primary)", margin: "0 0 3px" }}>
                    {step === 1 ? "Choose report type" : "Select time period"}
                  </p>
                  <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0 }}>
                    {step === 1 ? "What would you like to analyse?" : `For your ${reportType} report`}
                  </p>
                </div>
                <button onClick={closeModal} style={{ background: "var(--color-background-secondary)", border: "none", borderRadius: 8, width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--color-text-secondary)", flexShrink: 0, marginLeft: 12 }}>
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1 1l9 9M10 1L1 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                </button>
              </div>

              {/* Step pills */}
              <div style={{ display: "flex", gap: 6 }}>
                {["Report type", "Time period"].map((label, i) => {
                  const active = step === i + 1;
                  const done = step > i + 1;
                  return (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px 5px 8px", borderRadius: 20, background: active ? "#185fa5" : done ? "#eaf3de" : "var(--color-background-secondary)", border: `0.5px solid ${active ? "#185fa5" : done ? "#9fcf6d" : "var(--color-border-tertiary)"}`, transition: "all .2s" }}>
                      <div style={{ width: 17, height: 17, borderRadius: "50%", background: active ? "rgba(255,255,255,.2)" : done ? "#639922" : "var(--color-border-secondary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {done
                          ? <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          : <span style={{ fontSize: 9, fontWeight: 600, color: active ? "#fff" : "var(--color-text-secondary)" }}>{i + 1}</span>}
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 500, color: active ? "#fff" : done ? "#3b6d11" : "var(--color-text-secondary)", whiteSpace: "nowrap" }}>{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Body */}
            <div className="bg-white" style={{ padding: "1.25rem 1.5rem" }}>
              {step === 1 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {REPORT_TYPES.map((rt) => {
                    const sel = reportType === rt.id;
                    return (
                      <button key={rt.id} className="type-opt" onClick={() => setReportType(rt.id)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px", background: sel ? "#f0f7ff" : "var(--color-background-secondary)", border: `${sel ? 2 : 1}px solid ${sel ? "#185fa5" : "var(--color-border-tertiary)"}`, borderRadius: 12, cursor: "pointer", textAlign: "left", transition: "all .15s" }}>
                        <div style={{ width: 48, height: 48, borderRadius: 12, background: sel ? "#e6f1fb" : "var(--color-background-primary)", border: `0.5px solid ${sel ? "#b5d4f4" : "var(--color-border-tertiary)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          {rt.icon}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontWeight: 500, fontSize: 14, margin: "0 0 4px", color: sel ? "#185fa5" : "var(--color-text-primary)" }}>{rt.label}</p>
                          <p style={{ fontSize: 12, color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.55 }}>{rt.desc}</p>
                        </div>
                        <div style={{ width: 19, height: 19, borderRadius: "50%", border: `2px solid ${sel ? "#185fa5" : "var(--color-border-secondary)"}`, background: sel ? "#185fa5" : "none", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" }}>
                          {sel && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  {TIMELINES.map(({ label, sub }) => {
                    const sel = timeline === label;
                    return (
                      <button key={label} className="tl-opt" onClick={() => setTimeline(label)} style={{ padding: "12px 12px", background: sel ? "#f0f7ff" : "var(--color-background-secondary)", border: `${sel ? 2 : 1}px solid ${sel ? "#185fa5" : "var(--color-border-tertiary)"}`, borderRadius: 10, cursor: "pointer", textAlign: "left", transition: "all .15s" }}>
                        <p style={{ fontSize: 13, fontWeight: 500, margin: "0 0 3px", color: sel ? "#185fa5" : "var(--color-text-primary)" }}>{label}</p>
                        <p style={{ fontSize: 11, margin: 0, color: "var(--color-text-secondary)" }}>{sub}</p>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-white" style={{ padding: "1rem 1.5rem", borderTop: "0.5px solid var(--color-border-tertiary)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <button onClick={closeModal} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: "var(--color-text-secondary)", padding: "6px 0" }}>Cancel</button>
              <div style={{ display: "flex", gap: 8 }}>
                {step === 2 && (
                  <button onClick={() => setStep(1)} style={{ background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontSize: 13, color: "var(--color-text-secondary)", display: "flex", alignItems: "center", gap: 5 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7.5 2L3.5 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Back
                  </button>
                )}
                {step === 1 ? (
                  <button onClick={() => reportType && setStep(2)} style={{ background: reportType ? "#185fa5" : "var(--color-background-secondary)", color: reportType ? "#fff" : "var(--color-text-secondary)", border: "none", borderRadius: 8, padding: "8px 20px", cursor: reportType ? "pointer" : "default", fontSize: 13, fontWeight: 500, opacity: reportType ? 1 : 0.55, transition: "all .15s", display: "flex", alignItems: "center", gap: 6 }}>
                    Continue
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                ) : (
                  <button onClick={() => timeline && generate()} style={{ display: "flex", alignItems: "center", gap: 7, background: timeline ? "#185fa5" : "var(--color-background-secondary)", color: timeline ? "#fff" : "var(--color-text-secondary)", border: "none", borderRadius: 8, padding: "8px 20px", cursor: timeline ? "pointer" : "default", fontSize: 13, fontWeight: 500, opacity: timeline ? 1 : 0.55, transition: "all .15s" }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1.5" y="1" width="10" height="11" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M4 4h5M4 6.5h5M4 9h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    Generate report
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}