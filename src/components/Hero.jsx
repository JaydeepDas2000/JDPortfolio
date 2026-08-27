import React from "react";
import { theme } from "../theme";
import Eyebrow from "./Eyebrow";

export default function Hero({ hero }) {
  return (
    <section id="top" className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-10">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
        {/* Portrait — right column on desktop, below the text on mobile */}
        {hero.image && (
          <div className="order-last">
            <img
              src={hero.image}
              alt={hero.imageAlt || "Portrait"}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                maxWidth: "440px",
                margin: "0 auto",
              }}
            />
          </div>
        )}

        {/* Text column */}
        <div>
          <Eyebrow style={{ marginBottom: "22px" }}>{hero.eyebrow}</Eyebrow>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.8rem, 9vw, 6.5rem)",
              lineHeight: 0.94,
              letterSpacing: "0.01em",
            }}
          >
            {hero.nameLines.map((line, i) => (
              <React.Fragment key={line}>
                {line}
                {i < hero.nameLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-8 gap-8">
            <p style={{ maxWidth: "600px", fontSize: "clamp(1.05rem, 2vw, 1.05rem)", color: theme.muted, lineHeight: 1.55 }}>
              {hero.descriptionParts.map((part, i) => (
                <span key={i} style={part.accent ? { color: theme.accent } : undefined}>
                  {part.text}
                </span>
              ))}
            </p>
            <div className="flex items-center gap-3" style={{ color: theme.mutedDim }}>
              <div style={{ width: "40px", height: "1px", background: theme.line }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.15em" }}>
                {hero.scrollLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
