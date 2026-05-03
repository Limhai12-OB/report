import { REPORT_TYPES, TIMELINES } from "./constants";

export function GenerateReportModal({
  showModal,
  closeModal,
  step,
  setStep,
  reportType,
  setReportType,
  timeline,
  setTimeline,
  onGenerate,
}) {
  if (!showModal) return null;

  return (
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
          background:
            "linear-gradient(180deg, var(--color-background-primary) 0%, var(--color-background-secondary) 100%)",
          borderRadius: 16,
          width: "100%",
          maxWidth: 506,
          overflow: "hidden",
          border: "0.5px solid var(--color-border-tertiary)",
        }}
      >
        <div
          className="bg-white"
          style={{
            padding: "1.375rem 1.5rem",
            borderBottom: "0.5px solid var(--color-border-tertiary)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "1.125rem",
            }}
          >
            <div>
              <p
                id="report-modal-title"
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  color: "var(--color-text-primary)",
                  margin: "0 0 3px",
                }}
              >
                {step === 1 ? "Choose report type" : "Select time period"}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--color-text-secondary)",
                  margin: 0,
                }}
              >
                {step === 1
                  ? "What would you like to analyse?"
                  : `For your ${reportType} report`}
              </p>
            </div>
            <button
              type="button"
              onClick={closeModal}
              style={{
                background: "var(--color-background-secondary)",
                border: "none",
                borderRadius: 8,
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--color-text-secondary)",
                flexShrink: 0,
                marginLeft: 12,
              }}
            >
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M1 1l9 9M10 1L1 10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div style={{ display: "flex", gap: 6 }}>
            {["Report type", "Time period"].map((label, i) => {
              const active = step === i + 1;
              const done = step > i + 1;
              return (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "5px 12px 5px 8px",
                    borderRadius: 20,
                    background: active
                      ? "#185fa5"
                      : done
                        ? "#eaf3de"
                        : "var(--color-background-secondary)",
                    border: `0.5px solid ${active ? "#185fa5" : done ? "#9fcf6d" : "var(--color-border-tertiary)"}`,
                    transition: "all .2s",
                  }}
                >
                  <div
                    style={{
                      width: 17,
                      height: 17,
                      borderRadius: "50%",
                      background: active
                        ? "rgba(255,255,255,.2)"
                        : done
                          ? "#639922"
                          : "var(--color-border-secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {done ? (
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path
                          d="M1.5 4.5l2 2 4-4"
                          stroke="#fff"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span
                        style={{
                          fontSize: 9,
                          fontWeight: 600,
                          color: active
                            ? "#fff"
                            : "var(--color-text-secondary)",
                        }}
                      >
                        {i + 1}
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: active
                        ? "#fff"
                        : done
                          ? "#3b6d11"
                          : "var(--color-text-secondary)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white" style={{ padding: "1.25rem 1.5rem" }}>
          {step === 1 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {REPORT_TYPES.map((rt) => {
                const sel = reportType === rt.id;
                return (
                  <button
                    key={rt.id}
                    type="button"
                    className="type-opt"
                    onClick={() => setReportType(rt.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "16px",
                      background: sel
                        ? "#f0f7ff"
                        : "var(--color-background-secondary)",
                      border: `${sel ? 2 : 1}px solid ${sel ? "#185fa5" : "var(--color-border-tertiary)"}`,
                      borderRadius: 12,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all .15s",
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: sel
                          ? "#e6f1fb"
                          : "var(--color-background-primary)",
                        border: `0.5px solid ${sel ? "#b5d4f4" : "var(--color-border-tertiary)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {rt.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          margin: "0 0 4px",
                          color: sel ? "#185fa5" : "var(--color-text-primary)",
                        }}
                      >
                        {rt.label}
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          color: "var(--color-text-secondary)",
                          margin: 0,
                          lineHeight: 1.55,
                        }}
                      >
                        {rt.desc}
                      </p>
                    </div>
                    <div
                      style={{
                        width: 19,
                        height: 19,
                        borderRadius: "50%",
                        border: `2px solid ${sel ? "#185fa5" : "var(--color-border-secondary)"}`,
                        background: sel ? "#185fa5" : "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all .15s",
                      }}
                    >
                      {sel && (
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#fff",
                          }}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 8,
              }}
            >
              {TIMELINES.map(({ label, sub }) => {
                const sel = timeline === label;
                return (
                  <button
                    key={label}
                    type="button"
                    className="tl-opt"
                    onClick={() => setTimeline(label)}
                    style={{
                      padding: "12px 12px",
                      background: sel
                        ? "#f0f7ff"
                        : "var(--color-background-secondary)",
                      border: `${sel ? 2 : 1}px solid ${sel ? "#185fa5" : "var(--color-border-tertiary)"}`,
                      borderRadius: 10,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all .15s",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        margin: "0 0 3px",
                        color: sel ? "#185fa5" : "var(--color-text-primary)",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontSize: 11,
                        margin: 0,
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      {sub}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div
          className="bg-white"
          style={{
            padding: "1rem 1.5rem",
            borderTop: "0.5px solid var(--color-border-tertiary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            type="button"
            onClick={closeModal}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              color: "var(--color-text-secondary)",
              padding: "6px 0",
            }}
          >
            Cancel
          </button>
          <div style={{ display: "flex", gap: 8 }}>
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                style={{
                  background: "none",
                  border: "0.5px solid var(--color-border-secondary)",
                  borderRadius: 8,
                  padding: "8px 14px",
                  cursor: "pointer",
                  fontSize: 13,
                  color: "var(--color-text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M7.5 2L3.5 6l4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back
              </button>
            )}
            {step === 1 ? (
              <button
                type="button"
                onClick={() => reportType && setStep(2)}
                style={{
                  background: reportType
                    ? "#185fa5"
                    : "var(--color-background-secondary)",
                  color: reportType ? "#fff" : "var(--color-text-secondary)",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 20px",
                  cursor: reportType ? "pointer" : "default",
                  fontSize: 13,
                  fontWeight: 500,
                  opacity: reportType ? 1 : 0.55,
                  transition: "all .15s",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                Continue
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M4.5 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => timeline && onGenerate()}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  background: timeline
                    ? "#185fa5"
                    : "var(--color-background-secondary)",
                  color: timeline ? "#fff" : "var(--color-text-secondary)",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 20px",
                  cursor: timeline ? "pointer" : "default",
                  fontSize: 13,
                  fontWeight: 500,
                  opacity: timeline ? 1 : 0.55,
                  transition: "all .15s",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect
                    x="1.5"
                    y="1"
                    width="10"
                    height="11"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M4 4h5M4 6.5h5M4 9h3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                Generate report
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
