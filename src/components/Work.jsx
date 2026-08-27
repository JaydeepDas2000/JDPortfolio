import React, { useState, useRef } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { theme } from "../theme";
import SectionHeading from "./SectionHeading";
import FluidImage from "./FluidImage";

export default function Work({ work }) {
  const { eyebrow, title, note, projects } = work;
  const [openProject, setOpenProject] = useState(projects[0]?.index ?? null);
  const [hoverProject, setHoverProject] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const listRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const hoveredProject = projects.find((p) => p.index === hoverProject);

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <SectionHeading eyebrow={eyebrow} title={title} note={note} />

      <div
        ref={listRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverProject(null)}
        style={{ position: "relative", borderTop: `1px solid ${theme.line}` }}
      >
        {hoveredProject && (
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              zIndex: 20,
              left: mouse.x + 24,
              top: mouse.y - 90,
              width: "220px",
              height: "150px",
              borderRadius: "4px",
              overflow: "hidden",
              pointerEvents: "none",
              border: `1px solid ${theme.line}`,
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            }}
          >
            <FluidImage src={hoveredProject.image} alt="" />
          </div>
        )}

        {projects.map((project) => {
          const isOpen = openProject === project.index;
          return (
            <div key={project.index} style={{ borderBottom: `1px solid ${theme.line}` }}>
              <button
                className="row-btn"
                onMouseEnter={() => setHoverProject(project.index)}
                onClick={() => setOpenProject(isOpen ? null : project.index)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  color: theme.text,
                  padding: "22px 0",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div className="flex items-center gap-4 md:gap-8 min-w-0">
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "13px",
                      color: isOpen ? theme.accent : theme.mutedDim,
                      flexShrink: 0,
                    }}
                  >
                    {project.index}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "clamp(1.5rem, 4vw, 2.4rem)",
                      letterSpacing: "0.01em",
                      color: isOpen ? theme.accent : theme.text,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {project.title}
                  </span>
                  <span
                    className="hidden sm:inline"
                    style={{ color: theme.muted, fontSize: "13px", whiteSpace: "nowrap" }}
                  >
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center gap-6 flex-shrink-0">
                  <span
                    className="hidden sm:inline"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: theme.mutedDim }}
                  >
                    {project.year}
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
                    className="grid md:grid-cols-2 gap-8 md:gap-12 pb-10"
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? "none" : "translateY(10px)",
                      transition: "opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "6px",
                        overflow: "hidden",
                        border: `1px solid ${theme.line}`,
                        aspectRatio: "4 / 3",
                      }}
                    >
                      {isOpen && <FluidImage src={project.image} alt={`${project.title} cover`} />}
                    </div>

                    <div>
                      <p style={{ fontSize: "12px", color: theme.mutedDim, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.1em", marginBottom: "10px" }}>
                        CASE STUDY FOCUS
                      </p>
                      <ul style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "22px" }}>
                        {project.focus.map((f) => (
                          <li key={f} style={{ color: theme.muted, lineHeight: 1.6, fontSize: "14.5px", display: "flex", gap: "8px" }}>
                            <span style={{ color: theme.mutedDim, flexShrink: 0 }}>—</span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tools.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: "12px",
                              border: `1px solid ${theme.line}`,
                              borderRadius: "999px",
                              padding: "4px 12px",
                              color: theme.muted,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-btn inline-flex items-center gap-2"
                        style={{ color: theme.accent, fontSize: "14px", fontWeight: 600 }}
                      >
                        View on Behance <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
