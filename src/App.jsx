import React, { useState, useEffect } from "react";

import content from "./data/content.json";
import { theme, FONT_IMPORT } from "./theme";

import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
import Partners from "./components/Partners";
import Contact from "./components/Contact";

/* ------------------------------------------------------------------ */
/*  ROOT — all content is driven by src/data/content.json             */
/*  To update the site, edit that JSON file. No component changes.    */
/* ------------------------------------------------------------------ */
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div
      style={{
        background: theme.bg,
        color: theme.text,
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <style>{`
        ${FONT_IMPORT}
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; color: inherit; }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 24s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .row-btn:focus-visible, .link-btn:focus-visible, .nav-link:focus-visible {
          outline: 2px solid ${theme.accent};
          outline-offset: 4px;
        }
        .badge-item {
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .badge-item:hover {
          transform: translateY(-4px);
          border-color: ${theme.accent} !important;
          background: ${theme.accentDim} !important;
        }
        .linkedin-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }
        .linkedin-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px ${theme.accentDim};
        }
        .partner-logo {
          opacity: 0.6;
          filter: brightness(0) invert(1);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .partner-logo:hover {
          opacity: 1;
          transform: translateY(-2px);
        }
        .portrait-frame {
          animation: portrait-float 7s ease-in-out infinite;
        }
        @keyframes portrait-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .portrait-frame { animation: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
          html { scroll-behavior: auto; }
        }
      `}</style>

      <Header nav={content.nav} onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} links={content.nav.links} onClose={() => setMenuOpen(false)} />

      <Hero hero={content.hero} />
      <Marquee items={content.skillTicker} />
      <Work work={content.work} />
      <Experience experience={content.experience} />
      <Skills skills={content.skills} />
      <About about={content.about} />
      <Partners partners={content.partners} />
      <Contact contact={content.contact} />
    </div>
  );
}
