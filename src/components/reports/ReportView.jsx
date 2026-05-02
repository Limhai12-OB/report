import { STATUS_STYLE, completionStyle } from "./constants";
import { reportsCss } from "./reports-css.js";

export function ReportView({ report, onBack }) {
  const { type, timeline: tl, data, name: reportName, reportId: stableReportId, generatedAt: savedGeneratedAt } = report;
  const isTask = type === "Task Based";
  const displayGenerated = savedGeneratedAt ?? new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const reportId = stableReportId ?? "RPT-TBD";

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-background-tertiary)", fontFamily: "var(--font-sans)" }}>
      <style>{reportsCss}</style>

      <div style={{ position: "sticky", top: 0, zIndex: 10, background: "var(--color-background-primary)", borderBottom: "0.5px solid var(--color-border-tertiary)", height: 56, display: "flex", alignItems: "center", padding: "0 1.75rem", gap: 14 }}>
        <button type="button" onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 13, color: "var(--color-text-secondary)", flexShrink: 0 }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M8 2L3 6.5 8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back
        </button>
        <div style={{ width: "0.5px", height: 18, background: "var(--color-border-tertiary)" }} />
        <span style={{ fontWeight: 500, fontSize: 14, color: "var(--color-text-primary)" }}>{type} Report</span>
        <span style={{ fontSize: 11, fontWeight: 500, background: "#e6f1fb", color: "#185fa5", borderRadius: 20, padding: "3px 10px", flexShrink: 0 }}>{tl}</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button type="button" style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 13, color: "var(--color-text-secondary)" }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v8M3.5 6.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M1 11.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            Export PDF
          </button>
          <button type="button" style={{ display: "flex", alignItems: "center", gap: 6, background: "#185fa5", color: "#fff", border: "none", borderRadius: 8, padding: "7px 16px", cursor: "pointer", fontSize: 13, fontWeight: 500 }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="10" cy="3" r="2" stroke="#fff" strokeWidth="1.3"/><circle cx="10" cy="10" r="2" stroke="#fff" strokeWidth="1.3"/><circle cx="3" cy="6.5" r="2" stroke="#fff" strokeWidth="1.3"/><path d="M5 7.5l3.5 2M8.5 4L5 5.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/></svg>
            Share
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 940, margin: "0 auto", padding: "2.5rem 2rem" }}>

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
