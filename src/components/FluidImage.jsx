import React, { useState, useRef, useEffect } from "react";

/* ------------------------------------------------------------------ */
/*  FLUID IMAGE — liquid distortion on mouse movement                  */
/*  (SVG feTurbulence + feDisplacementMap, no WebGL/extra deps)        */
/* ------------------------------------------------------------------ */
export default function FluidImage({ src, alt, style }) {
  const containerRef = useRef(null);
  const turbRef = useRef(null);
  const dispRef = useRef(null);
  const filterId = useRef(`fluid-${Math.random().toString(36).slice(2, 10)}`).current;
  const state = useRef({ scale: 0, targetScale: 0, freq: 0.01, lastX: 0.5, lastY: 0.5 });
  const frameRef = useRef(0);
  const runningRef = useRef(false);
  const animateRef = useRef(null);
  const [reduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );

  // The rAF loop runs ONLY while the liquid is in motion, then parks itself.
  // An always-on loop repaints the SVG filter every frame and fights scrolling.
  useEffect(() => {
    const animate = () => {
      const s = state.current;
      s.scale += (s.targetScale - s.scale) * 0.09;
      s.targetScale *= 0.93; // liquid settles back to calm
      if (turbRef.current) {
        s.freq += (0.01 - s.freq) * 0.02;
        turbRef.current.setAttribute("baseFrequency", `${s.freq.toFixed(4)} ${(s.freq * 1.7).toFixed(4)}`);
      }
      if (dispRef.current) dispRef.current.setAttribute("scale", s.scale.toFixed(2));

      // Settled? snap to rest and stop the loop until the next interaction.
      if (Math.abs(s.scale) < 0.05 && Math.abs(s.targetScale) < 0.05) {
        s.scale = 0;
        if (dispRef.current) dispRef.current.setAttribute("scale", "0");
        runningRef.current = false;
        return;
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    animateRef.current = animate;
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const startLoop = () => {
    if (reduceMotion || runningRef.current || !animateRef.current) return;
    runningRef.current = true;
    frameRef.current = requestAnimationFrame(animateRef.current);
  };

  const handleMove = (e) => {
    if (reduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const s = state.current;
    const dx = x - s.lastX;
    const dy = y - s.lastY;
    const velocity = Math.min(Math.sqrt(dx * dx + dy * dy) * 55, 1);
    s.targetScale = 14 + velocity * 70;
    s.freq = 0.014 + velocity * 0.02;
    s.lastX = x;
    s.lastY = y;
    startLoop();
  };

  const handleLeave = () => {
    state.current.targetScale = 0;
    startLoop(); // wake the loop so it can animate back to rest, then park
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%", ...style }}
    >
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              ref={turbRef}
              type="fractalNoise"
              baseFrequency="0.01 0.017"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              ref={dispRef}
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "scale(1.1)",
          filter: `url(#${filterId})`,
          display: "block",
        }}
      />
    </div>
  );
}
