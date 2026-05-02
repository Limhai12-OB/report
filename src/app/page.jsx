"use client";

import { useState } from "react";
import { AppSidebar } from "../components/reports/AppSidebar";
import { GenerateReportModal } from "../components/reports/GenerateReportModal";
import { INITIAL_SAVED_REPORTS, MOCK_DATA, NAV_ITEMS } from "../components/reports/constants";
import { ReportView } from "../components/reports/ReportView";
import { ReportsHome } from "../components/reports/ReportsHome";
import { reportsCss } from "../components/reports/reports-css.js";

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

  if (report) {
    return <ReportView report={report} onBack={() => setReport(null)} />;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "var(--font-sans)", background: "var(--color-background-tertiary)" }}>
      <style>{reportsCss}</style>

      <AppSidebar
        activeNav={activeNav}
        onNavChange={setActiveNav}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((p) => !p)}
      />

      <main style={{ flex: 1, padding: "2rem 2.5rem", overflowY: "auto" }}>
        {activeNav === "reports" ? (
          <ReportsHome
            savedReports={savedReports}
            onGenerateClick={() => setShowModal(true)}
            onOpenReport={openSavedReport}
            onDeleteReport={deleteSavedReport}
          />
        ) : (
          <div>
            <h1 style={{ fontWeight: 500, fontSize: 22, color: "var(--color-text-primary)", margin: "0 0 4px" }}>{NAV_ITEMS.find((n) => n.id === activeNav)?.label}</h1>
            <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0 }}>This section is coming soon.</p>
          </div>
        )}
      </main>

      <GenerateReportModal
        showModal={showModal}
        closeModal={closeModal}
        step={step}
        setStep={setStep}
        reportType={reportType}
        setReportType={setReportType}
        timeline={timeline}
        setTimeline={setTimeline}
        onGenerate={generate}
      />
    </div>
  );
}
