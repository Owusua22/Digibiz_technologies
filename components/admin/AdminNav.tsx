"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

/* Digibiz Technologies official colours */
const ACCENT = "#08947D";
const ACCENT_HOVER = "#077A69";
const ACCENT_DARK = "#066B5A";
const INK = "#0A0A0A";

export default function AdminNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  const blogActive = pathname?.startsWith("/admin/blog");

  return (
    <header
      style={{
        background: `linear-gradient(180deg, #0D1F1C 0%, ${INK} 100%)`,
        borderBottom: `1px solid rgba(8,148,125,0.18)`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: 64,
        }}
      >
        {/* ---- Left: Brand + Nav ---- */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {/* Brand mark */}
          <a
            href="/admin/blog"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
            }}
          >
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT_DARK} 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 4px 14px rgba(8,148,125,0.35)`,
                flexShrink: 0,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <rect
                  x="1"
                  y="1"
                  width="7"
                  height="7"
                  rx="2"
                  fill="#fff"
                  opacity="0.9"
                />
                <rect
                  x="10"
                  y="1"
                  width="7"
                  height="7"
                  rx="2"
                  fill="#fff"
                  opacity="0.55"
                />
                <rect
                  x="1"
                  y="10"
                  width="7"
                  height="7"
                  rx="2"
                  fill="#fff"
                  opacity="0.55"
                />
                <rect
                  x="10"
                  y="10"
                  width="7"
                  height="7"
                  rx="2"
                  fill="#fff"
                  opacity="0.3"
                />
              </svg>
            </span>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "1.05rem",
                color: "#fff",
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            >
              Digibiz{" "}
              <span style={{ color: ACCENT, fontWeight: 700 }}>
                Admin
              </span>
            </span>
          </a>

          {/* Divider */}
          <span
            style={{
              width: 1,
              height: 24,
              background:
                "rgba(255,255,255,0.1)",
              flexShrink: 0,
            }}
          />

          {/* Nav links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <a
              href="/admin/blog"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 14px",
                borderRadius: 8,
                fontSize: "0.875rem",
                fontWeight: 600,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textDecoration: "none",
                transition:
                  "background 0.2s ease, color 0.2s ease",
                background: blogActive
                  ? "rgba(8,148,125,0.14)"
                  : "transparent",
                color: blogActive
                  ? ACCENT
                  : "rgba(255,255,255,0.55)",
                ...(blogActive
                  ? {}
                  : {}),
              }}
              onMouseEnter={(e) => {
                if (!blogActive) {
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color =
                    "rgba(255,255,255,0.85)";
                }
              }}
              onMouseLeave={(e) => {
                if (!blogActive) {
                  e.currentTarget.style.background =
                    "transparent";
                  e.currentTarget.style.color =
                    "rgba(255,255,255,0.55)";
                }
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="currentColor"
                style={{ flexShrink: 0 }}
              >
                <path d="M2 2.5A1.5 1.5 0 0 1 3.5 1h9A1.5 1.5 0 0 1 14 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5v-11zM3.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-9z" />
                <path d="M5 5h6v1H5V5zm0 3h6v1H5V8zm0 3h4v1H5v-1z" />
              </svg>
              Blog Posts
              {blogActive && (
                <span
                  style={{
                    position:
                      "absolute",
                    bottom: -1,
                    left: 14,
                    right: 14,
                    height: 2,
                    borderRadius: 1,
                    background: ACCENT,
                  }}
                />
              )}
            </a>

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 14px",
                borderRadius: 8,
                fontSize: "0.875rem",
                fontWeight: 600,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                transition:
                  "background 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(255,255,255,0.06)";
                e.currentTarget.style.color =
                  "rgba(255,255,255,0.85)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "transparent";
                e.currentTarget.style.color =
                  "rgba(255,255,255,0.55)";
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="currentColor"
                style={{ flexShrink: 0 }}
              >
                <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                <path d="M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
              </svg>
              View Site
              <svg
                width="11"
                height="11"
                viewBox="0 0 16 16"
                fill="currentColor"
                style={{
                  flexShrink: 0,
                  opacity: 0.5,
                  marginLeft: -2,
                }}
              >
                <path d="M8.636 3.5a.5.5 0 0 0-.017.638L12.19 8l-3.572 3.862a.5.5 0 1 0 .728.689l4-4.318a.5.5 0 0 0 0-.689l-4-4.318a.5.5 0 0 0-.728.017z" />
              </svg>
            </a>
          </nav>
        </div>

        {/* ---- Right: Status + Logout ---- */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          {/* Logged-in indicator */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              fontSize: "0.78rem",
              fontWeight: 600,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: ACCENT,
                boxShadow: `0 0 8px rgba(8,148,125,0.5)`,
              }}
            />
            Logged in
          </span>

          {/* Logout button */}
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              padding: "8px 18px",
              borderRadius: 9,
              fontSize: "0.84rem",
              fontWeight: 700,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: loggingOut
                ? "rgba(255,255,255,0.35)"
                : "#fff",
              background: loggingOut
                ? "rgba(255,255,255,0.05)"
                : ACCENT,
              border: "none",
              cursor: loggingOut
                ? "not-allowed"
                : "pointer",
              boxShadow: loggingOut
                ? "none"
                : `0 6px 18px rgba(8,148,125,0.3)`,
              transition:
                "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              if (!loggingOut) {
                e.currentTarget.style.background =
                  ACCENT_HOVER;
                e.currentTarget.style.transform =
                  "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 22px rgba(8,148,125,0.42)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loggingOut) {
                e.currentTarget.style.background =
                  ACCENT;
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 6px 18px rgba(8,148,125,0.3)";
              }
            }}
          >
            {loggingOut ? (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    animation:
                      "adminSpin 0.8s linear infinite",
                  }}
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Logging out…
              </>
            ) : (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line
                    x1="21"
                    y1="12"
                    x2="9"
                    y2="12"
                  />
                </svg>
                Log out
              </>
            )}
          </button>
        </div>
      </div>

      {/* Subtle bottom accent line */}
      <div
        style={{
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${ACCENT} 30%, ${ACCENT_DARK} 70%, transparent 100%)`,
          opacity: 0.4,
        }}
      />

      {/* Spinner keyframes */}
      <style>{`
        @keyframes adminSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </header>
  );
}