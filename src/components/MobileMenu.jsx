import React from "react";
import { X } from "lucide-react";
import { theme } from "../theme";

export default function MobileMenu({ open, links, onClose }) {
  return (
    <div
      aria-hidden={!open}
      style={{
        position: "fixed",
        inset: 0,
        background: theme.accent,
        color: "#0B0B0A",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        transform: open ? "translateY(0)" : "translateY(-100%)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition:
          "transform 0.55s cubic-bezier(0.76,0,0.24,1), opacity 0.4s ease",
      }}
    >
      <div className="flex justify-end px-6 py-5">
        <button aria-label="Close menu" onClick={onClose} style={{ background: "none", border: "none", color: "#0B0B0A" }}>
          <X size={28} />
        </button>
      </div>
      <div className="flex flex-col justify-center flex-1 px-8 gap-5">
        {links.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "2.6rem",
              lineHeight: 1.1,
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.4s ease ${open ? 0.15 + i * 0.06 : 0}s, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${open ? 0.15 + i * 0.06 : 0}s`,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
