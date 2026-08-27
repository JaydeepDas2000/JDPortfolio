import React from "react";
import { theme } from "../theme";

export default function Marquee({ items }) {
  return (
    <div style={{ background: theme.accent, color: "#0B0B0A", padding: "16px 0", overflow: "hidden" }}>
      <div className="marquee-track">
        {[...items, ...items].map((skill, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "14px",
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            {skill} <span style={{ opacity: 0.5 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
