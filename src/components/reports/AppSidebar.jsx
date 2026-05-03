import { NAV_ITEMS } from "./constants";

export function AppSidebar({
  activeNav,
  onNavChange,
  sidebarOpen,
  onToggleSidebar,
}) {
  return (
    <aside
      style={{
        width: sidebarOpen ? 224 : 60,
        background: "var(--color-background-primary)",
        borderRight: "0.5px solid var(--color-border-tertiary)",
        display: "flex",
        flexDirection: "column",
        transition: "width .2s ease",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          height: 56,
          padding: "0 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "0.5px solid var(--color-border-tertiary)",
        }}
      >
        {sidebarOpen && (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 26,
                height: 26,
                background: "#185fa5",
                borderRadius: 7,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="5" height="5" rx="1.5" fill="#fff" />
                <rect
                  x="8"
                  y="1"
                  width="5"
                  height="5"
                  rx="1.5"
                  fill="#fff"
                  opacity=".5"
                />
                <rect
                  x="1"
                  y="8"
                  width="5"
                  height="5"
                  rx="1.5"
                  fill="#fff"
                  opacity=".5"
                />
                <rect
                  x="8"
                  y="8"
                  width="5"
                  height="5"
                  rx="1.5"
                  fill="#fff"
                  opacity=".5"
                />
              </svg>
            </div>
            <span
              style={{
                fontWeight: 500,
                fontSize: 14,
                color: "var(--color-text-primary)",
                whiteSpace: "nowrap",
              }}
            >
              EduTrack
            </span>
          </div>
        )}
        <button
          type="button"
          onClick={onToggleSidebar}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-text-secondary)",
            display: "flex",
            padding: 6,
            borderRadius: 6,
            marginLeft: sidebarOpen ? 0 : "auto",
            marginRight: sidebarOpen ? 0 : "auto",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            {sidebarOpen ? (
              <path
                d="M9 2L4 7l5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M5 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      <nav style={{ flex: 1, padding: "10px 8px" }}>
        {NAV_ITEMS.map(({ id, label, icon }) => {
          const active = activeNav === id;
          return (
            <button
              key={id}
              type="button"
              className="nav-btn"
              onClick={() => onNavChange(id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 10px",
                justifyContent: sidebarOpen ? "flex-start" : "center",
                background: active
                  ? "var(--color-background-secondary)"
                  : "none",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                color: active ? "#185fa5" : "var(--color-text-secondary)",
                fontSize: 13,
                fontWeight: active ? 500 : 400,
                transition: "all .15s",
                marginBottom: 2,
              }}
            >
              <span style={{ flexShrink: 0 }}>{icon}</span>
              {sidebarOpen && (
                <span style={{ whiteSpace: "nowrap" }}>{label}</span>
              )}
              {active && sidebarOpen && (
                <span
                  style={{
                    marginLeft: "auto",
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#185fa5",
                    flexShrink: 0,
                  }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {sidebarOpen ? (
        <div
          style={{
            padding: "10px",
            borderTop: "0.5px solid var(--color-border-tertiary)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 10px",
              borderRadius: 8,
              background: "var(--color-background-secondary)",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#185fa5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 500,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              JD
            </div>
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  margin: 0,
                  color: "var(--color-text-primary)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Jane Doe
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "var(--color-text-secondary)",
                  margin: 0,
                }}
              >
                Teacher
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            padding: "10px 8px",
            borderTop: "0.5px solid var(--color-border-tertiary)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "#185fa5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 500,
              color: "#fff",
            }}
          >
            JD
          </div>
        </div>
      )}
    </aside>
  );
}
