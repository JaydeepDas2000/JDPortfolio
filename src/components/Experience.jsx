import React, { useState } from "react";
import { Plus } from "lucide-react";
import { theme } from "../theme";
import SectionHeading from "./SectionHeading";

export default function Experience({ experience }) {
  const { eyebrow, title, note, roles } = experience;
  const [openExp, setOpenExp] = useState(roles[0]?.index ?? null);

  return (
    <section id="experience" style={{ background: theme.bgAlt, borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionHeading eyebrow={eyebrow} title={title} note={note} />

        <div style={{ borderTop: `1px solid ${theme.line}` }}>
          {roles.map((exp) => {
            const isOpen = openExp === exp.index;
            return (
              <div key={exp.index} style={{ borderBottom: `1px solid ${theme.line}` }}>
                <button
                  className="row-btn"
                  onClick={() => setOpenExp(isOpen ? null : exp.index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    color: theme.text,
                    padding: "20px 0",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "16px",
                  }}
                >
                  <div className="flex items-center gap-4 md:gap-8 min-w-0 flex-1">
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "13px",
                        color: isOpen ? theme.accent : theme.mutedDim,
                        flexShrink: 0,
                      }}
                    >
                      {exp.index}
                    </span>
                    <div className="min-w-0">
                      <div
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
                          color: isOpen ? theme.accent : theme.text,
                        }}
                      >
                        {exp.company}
                      </div>
                      <div style={{ fontSize: "13px", color: theme.muted }}>{exp.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 flex-shrink-0">
                    <span
                      className="hidden sm:inline"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: theme.mutedDim, whiteSpace: "nowrap" }}
                    >
                      {exp.dates}
                    </span>
                    <Plus
                      size={20}
                      style={{
                        color: isOpen ? theme.accent : theme.muted,
                        transform: isOpen ? "rotate(45deg)" : "none",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </div>
                </button>

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.45s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <div style={{ overflow: "hidden", minHeight: 0 }}>
                    <div
                      className="pb-8 pl-0 md:pl-16"
                      style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "none" : "translateY(10px)",
                        transition: "opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s",
                      }}
                    >
                      <span
                        className="sm:hidden block mb-3"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: theme.mutedDim }}
                      >
                        {exp.dates}
                      </span>
                      <ul style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "720px" }}>
                        {exp.bullets.map((b) => (
                          <li key={b} style={{ color: theme.muted, lineHeight: 1.6, fontSize: "14.5px", display: "flex", gap: "8px" }}>
                            <span style={{ color: theme.mutedDim, flexShrink: 0 }}>—</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
