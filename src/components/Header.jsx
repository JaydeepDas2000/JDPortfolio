import React from "react";
import { Menu } from "lucide-react";
import { theme } from "../theme";

export default function Header({ nav, onOpenMenu }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(11,11,10,0.94)",
        borderBottom: `1px solid ${theme.line}`,
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "15px", letterSpacing: "0.05em" }}>
          {nav.logo}
          <span style={{ color: theme.accent }}>.</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              style={{ fontSize: "13px", letterSpacing: "0.06em", color: theme.muted, textTransform: "uppercase" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="link-btn"
            style={{
              border: `1px solid ${theme.accent}`,
              color: theme.accent,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px",
              padding: "8px 16px",
              borderRadius: "999px",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
            }}
          >
            {nav.cta.label}
          </a>
        </nav>

        <button
          aria-label="Open menu"
          onClick={onOpenMenu}
          className="md:hidden"
          style={{ color: theme.text, background: "none", border: "none" }}
        >
          <Menu size={26} />
        </button>
      </div>
    </header>
  );
}
