import React from "react";
import { theme } from "../theme";
import Eyebrow from "./Eyebrow";
import { asset } from "../lib/asset";

export default function Partners({ partners }) {
  return (
    <section style={{ borderBottom: `1px solid ${theme.line}` }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <Eyebrow style={{ marginBottom: "22px" }}>{partners.eyebrow}</Eyebrow>
        <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-8">
          {partners.logos.map((logo, i) => (
            <img
              key={i}
              src={asset(logo.image)}
              alt={logo.alt || `Partner ${i + 1}`}
              className="partner-logo"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              style={{
                height: "40px",
                width: "auto",
                maxWidth: "160px",
                objectFit: "contain",
                display: "block",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
