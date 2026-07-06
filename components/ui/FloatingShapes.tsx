"use client";

import type { CSSProperties } from "react";

type Kind = "sphere" | "box" | "ring" | "pill";

export type FloatingShape = {
  kind: Kind;
  color: string; // hex from the brand palette
  /** position + size utility classes, e.g. "left-[6%] top-[14%] h-16 w-16" */
  className: string;
  anim?: "float" | "float-slow" | "wiggle";
  delay?: number; // seconds
  rotate?: number; // degrees (box only)
  opacity?: number; // 0..1
  blur?: boolean; // soften for depth
};

// Nova identidade PKC 2027 — clara e iridescente. Tons de azul/magenta/lavanda.
const C = {
  purple: "#CB6CE6", // magenta
  purpleLight: "#E2A6F1", // magenta light
  sky: "#043C86", // azul primário
  coral: "#A445C2", // magenta dark
  sun: "#3E74C9", // azul light
  mint: "#3E74C9", // azul light
  grape: "#A445C2", // magenta dark
} as const;

// Preenchimento claro e translúcido: brilho branco no topo derretendo numa
// versão suave da cor, para as formas ficarem etéreas sobre o fundo claro.
function gloss(color: string) {
  return `radial-gradient(circle at 32% 26%, rgba(255,255,255,0.85), color-mix(in srgb, ${color} 42%, #FBFAFF) 58%, color-mix(in srgb, ${color} 62%, #F2EEFC) 100%)`;
}

const SHADOW = "0 18px 40px -20px rgba(4,60,134,0.28)";

// Full literal class names so Tailwind's JIT scanner emits them.
const ANIM: Record<NonNullable<FloatingShape["anim"]>, string> = {
  float: "animate-float",
  "float-slow": "animate-float-slow",
  wiggle: "animate-wiggle",
};

function styleFor(s: FloatingShape): CSSProperties {
  const base: CSSProperties = {
    opacity: s.opacity ?? 0.5,
    animationDelay: s.delay ? `${s.delay}s` : undefined,
  };
  switch (s.kind) {
    case "sphere":
    case "pill":
      return {
        ...base,
        background: gloss(s.color),
        borderRadius: "9999px",
        boxShadow: SHADOW,
      };
    case "box":
      return {
        ...base,
        background: gloss(s.color),
        borderRadius: "30%",
        transform: s.rotate ? `rotate(${s.rotate}deg)` : undefined,
        boxShadow: SHADOW,
      };
    case "ring":
      return {
        ...base,
        background: "transparent",
        borderRadius: "9999px",
        borderColor: `color-mix(in srgb, ${s.color} 55%, #FBFAFF)`,
        boxShadow: `inset 0 4px 9px rgba(255,255,255,0.5), ${SHADOW}`,
      };
  }
}

export default function FloatingShapes({ items }: { items: FloatingShape[] }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {items.map((s, i) => (
        <span
          key={i}
          className={`absolute block ${ANIM[s.anim ?? "float"]} ${
            s.blur ? "blur-[1.5px]" : ""
          } ${s.className}`}
          style={styleFor(s)}
        />
      ))}
    </div>
  );
}

// Edge-biased presets, tuned per section so shapes decorate without crowding
// the centered headings or cards.
export const ABOUT_SHAPES: FloatingShape[] = [
  { kind: "sphere", color: C.purple, className: "left-[5%] top-[24%] h-16 w-16", anim: "float" },
  { kind: "box", color: C.sun, className: "right-[7%] top-[18%] h-14 w-14", anim: "float-slow", rotate: 16, delay: 0.6 },
  { kind: "ring", color: C.sky, className: "right-[12%] bottom-[14%] h-20 w-20 border-[12px]", anim: "float", delay: 1.1, blur: true },
  { kind: "pill", color: C.mint, className: "left-[10%] bottom-[18%] h-9 w-20", anim: "float-slow", delay: 0.3 },
];

export const AUDIENCE_SHAPES: FloatingShape[] = [
  { kind: "ring", color: C.coral, className: "left-[4%] top-[16%] h-20 w-20 border-[12px]", anim: "float", blur: true },
  { kind: "sphere", color: C.sky, className: "right-[5%] top-[26%] h-14 w-14", anim: "float-slow", delay: 0.8 },
  { kind: "box", color: C.grape, className: "right-[9%] bottom-[12%] h-12 w-12", anim: "float", rotate: -12, delay: 0.4 },
  { kind: "pill", color: C.sun, className: "left-[8%] bottom-[16%] h-8 w-16", anim: "float-slow", delay: 1.2 },
];

export const SPEAKERS_SHAPES: FloatingShape[] = [
  { kind: "box", color: C.purpleLight, className: "left-[6%] top-[12%] h-12 w-12", anim: "float-slow", rotate: 14 },
  { kind: "sphere", color: C.coral, className: "right-[4%] top-[20%] h-16 w-16", anim: "float", delay: 0.7, blur: true },
  { kind: "ring", color: C.mint, className: "left-[3%] bottom-[12%] h-16 w-16 border-[10px]", anim: "float", delay: 1.0 },
];

export const EVENT_SHAPES: FloatingShape[] = [
  { kind: "sphere", color: C.sun, className: "left-[4%] top-[14%] h-14 w-14", anim: "float", blur: true },
  { kind: "pill", color: C.sky, className: "right-[6%] top-[10%] h-8 w-16", anim: "float-slow", delay: 0.5 },
  { kind: "box", color: C.purple, className: "left-[7%] bottom-[14%] h-12 w-12", anim: "float-slow", rotate: -10, delay: 0.9 },
];
