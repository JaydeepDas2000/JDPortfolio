import React from "react";
import { theme } from "../theme";
import Eyebrow from "./Eyebrow";
import { asset } from "../lib/asset";

export default function About({ about }) {
  return (
    <section id="about" style={{ background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16">
          <div>
            <Eyebrow style={{ marginBottom: "18px" }}>{about.eyebrow}</Eyebrow>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(1.7rem, 3.4vw, 2.4rem)",
                lineHeight: 1.25,
                marginBottom: "24px",
              }}
            >
              {about.headline}
            </p>
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  color: theme.muted,
                  lineHeight: 1.7,
                  marginBottom: i < about.paragraphs.length - 1 ? "16px" : 0,
                  fontSize: "15px",
                }}
              >
                {p}
              </p>
            ))}

            <div className="flex flex-wrap items-center gap-3" style={{ marginTop: "20px" }}>
              {about.linkedin && (
                <a
                  href={about.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn linkedin-btn inline-flex items-center gap-2"
                  style={{
                    padding: "11px 20px",
                    borderRadius: "999px",
                    background: theme.accent,
                    color: "#0B0B0A",
                    fontSize: "14px",
                    fontWeight: 600,
                    width: "fit-content",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                  {about.linkedinLabel || "View LinkedIn Profile"}
                </a>
              )}

              <a
                href={asset("/Jaydeep_das-CV_ATS.pdf")}
                download
                className="link-btn cv-btn inline-flex items-center gap-2"
                style={{
                  padding: "11px 20px",
                  borderRadius: "999px",
                  background: "transparent",
                  color: theme.text,
                  border: `1px solid ${theme.accent}`,
                  fontSize: "14px",
                  fontWeight: 600,
                  width: "fit-content",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-5 mt-10 mb-10 w-full">
              {about.badges.map((b) => (
                <a
                  key={b.name}
                  href={b.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Verify: ${b.name}`}
                  className="link-btn badge-item"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    width: "100%",
                    padding: "16px 12px",
                    borderRadius: "10px",
                    border: `1px solid ${theme.line}`,
                    background: theme.bgAlt2,
                    textAlign: "center",
                  }}
                >
                  <img
                    src={asset(b.image)}
                    alt={b.name}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    style={{ width: "64px", height: "64px", objectFit: "contain", display: "block" }}
                  />
                  <div style={{ fontSize: "12px", color: theme.text, lineHeight: 1.3 }}>{b.name}</div>
                  <div style={{ fontSize: "10.5px", color: theme.accent, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.06em" }}>
                    VERIFY →
                  </div>
                </a>
              ))}
            </div>

            <p style={{ fontSize: "12px", color: theme.mutedDim, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.1em", marginBottom: "10px" }}>
              CERTIFICATIONS
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
              {about.certifications.map((c) => (
                <li key={c.name} style={{ fontSize: "14px", color: theme.muted }}>
                  <span style={{ color: theme.text }}>{c.name}</span> — {c.org}
                </li>
              ))}
            </ul>

            <p style={{ fontSize: "12px", color: theme.mutedDim, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.1em", marginBottom: "10px" }}>
              EDUCATION
            </p>
            <p style={{ fontSize: "14px", color: theme.muted }}>
              <span style={{ color: theme.text }}>{about.education.degree}</span> — {about.education.detail}
            </p>
          </div>

          <div
            className="portrait-frame"
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              aspectRatio: "9 / 16",
              width: "100%",
              alignSelf: "start",
            }}
          >
            <img
              src={asset(about.portrait)}
              alt="Portrait"
              className="portrait-img"
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
