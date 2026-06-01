"use client";

import { useEffect, useState } from "react";

// Edge-biased decorative shapes that travel along the screen margins as the
// page scrolls, so they "follow" you and shift place between sections. They
// live in a fixed layer at -z-10 (behind all in-flow text, above the body
// background) and are hidden on small screens where the margins are too thin
// to clear the centered content.

function gloss(color: string) {
  return `radial-gradient(circle at 32% 26%, rgba(255,255,255,0.6), ${color} 46%, color-mix(in srgb, ${color} 60%, #000) 100%)`;
}

const SHADOW = "0 22px 45px -16px rgba(0,0,0,0.55)";

export default function ScrollShapes() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // gentle in/out sway from the edge so the travel isn't a straight line
  const sway = (phase: number) => Math.sin(p * Math.PI * 2 + phase) * 2.4;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden md:block"
    >
      {/* right edge — glides top → bottom */}
      <span
        className="absolute h-20 w-20 rounded-full animate-float-slow will-change-transform"
        style={{
          top: `${8 + p * 80}%`,
          right: `${4 + sway(0)}%`,
          background: gloss("#9B72F2"),
          boxShadow: SHADOW,
          opacity: 0.78,
        }}
      />
      {/* left edge — glides bottom → top */}
      <span
        className="absolute h-16 w-16 animate-float will-change-transform"
        style={{
          top: `${84 - p * 76}%`,
          left: `${4 + sway(2.1)}%`,
          background: gloss("#3FCB8E"),
          borderRadius: "30%",
          boxShadow: SHADOW,
          opacity: 0.72,
        }}
      />
      {/* right edge lower — ring, mid travel, slower phase */}
      <span
        className="absolute h-24 w-24 rounded-full border-[14px] animate-float will-change-transform"
        style={{
          top: `${28 + p * 44}%`,
          right: `${9 + sway(4.2)}%`,
          borderColor: "#FFC83D",
          boxShadow: `inset 0 4px 9px rgba(255,255,255,0.22), ${SHADOW}`,
          opacity: 0.66,
        }}
      />
    </div>
  );
}
