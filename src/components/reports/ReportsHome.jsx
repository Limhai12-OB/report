export function ReportsHome({ savedReports, onGenerateClick, onOpenReport, onDeleteReport }) {
  return (
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
          <button type="button" onClick={onGenerateClick} style={{ display: "flex", alignItems: "center", gap: 6, background: "#185fa5", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 13, fontWeight: 500 }}>
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
                        onClick={() => onOpenReport(row)}
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
                        onClick={(e) => onDeleteReport(row.id, e)}
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
            <button type="button" onClick={onGenerateClick} style={{ background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 8, padding: "8px 20px", cursor: "pointer", fontSize: 13, color: "var(--color-text-secondary)" }}>
              Get started →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
