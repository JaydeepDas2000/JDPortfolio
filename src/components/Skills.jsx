import React from "react";
import { theme } from "../theme";
import SectionHeading from "./SectionHeading";

export default function Skills({ skills }) {
  const { eyebrow, title, note, groups } = skills;
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <SectionHeading eyebrow={eyebrow} title={title} note={note} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group) => (
          <div
            key={group.title}
            style={{
              background: theme.bgAlt2,
              border: `1px solid ${theme.line}`,
              borderRadius: "6px",
              padding: "26px 22px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.5rem",
                color: theme.accent,
                marginBottom: "16px",
              }}
            >
              {group.title}
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {group.items.map((item) => (
                <li key={item} style={{ fontSize: "14px", color: theme.muted, display: "flex", gap: "8px" }}>
                  <span style={{ color: theme.mutedDim, flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
