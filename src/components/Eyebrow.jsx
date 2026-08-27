import React from "react";
import { theme } from "../theme";

export default function Eyebrow({ children, style }) {
  return (
    <div
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "12px",
        letterSpacing: "0.18em",
        color: theme.accent,
        textTransform: "uppercase",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
