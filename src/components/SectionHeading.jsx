import React from "react";
import { theme } from "../theme";
import Eyebrow from "./Eyebrow";

export default function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-4">
      <div>
        <Eyebrow style={{ marginBottom: "14px" }}>{eyebrow}</Eyebrow>
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
            lineHeight: 0.95,
            letterSpacing: "0.01em",
            color: theme.text,
          }}
        >
          {title}
        </h2>
      </div>
      {note && (
        <p style={{ color: theme.muted, maxWidth: "320px", fontSize: "14px", lineHeight: 1.6 }}>
          {note}
        </p>
      )}
    </div>
  );
}
