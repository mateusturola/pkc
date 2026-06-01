"use client";

import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import FloatingShapes, { AUDIENCE_SHAPES } from "@/components/ui/FloatingShapes";
import { AUDIENCE } from "@/lib/data";

const ACCENT: Record<string, { border: string; chip: string; ink: string }> = {
  sky: { border: "border-sky/40", chip: "bg-sky/15", ink: "text-sky-dark" },
  coral: { border: "border-coral/40", chip: "bg-coral/15", ink: "text-coral" },
  sun: { border: "border-sun/60", chip: "bg-sun/25", ink: "text-[#b07d00]" },
  mint: { border: "border-mint/40", chip: "bg-mint/15", ink: "text-[#2aa873]" },
  grape: { border: "border-grape/40", chip: "bg-grape/15", ink: "text-grape" },
};

export default function Audience() {
  return (
    <section
      id="para-quem"
      className="relative isolate overflow-hidden bg-gradient-to-br from-purple-dark via-purple to-grape py-24 text-white sm:py-32"
    >
      <FloatingShapes items={AUDIENCE_SHAPES} />
      <div aria-hidden className="absolute inset-0 bg-dots opacity-20" />
      <div className="container-px relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-cream-light/80">
              Pra quem é?
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[0.95]">
              Se você ama crianças, essa conferência é pra{" "}
              <span className="text-sun">você</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.07}>
              <div
                className={`h-full rounded-4xl border-2 bg-cream-light p-7 text-navy transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-1 ${ACCENT[a.accent].border}`}
              >
                <span
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-3xl ${ACCENT[a.accent].chip}`}
                >
                  <Icon name={a.icon} className={`h-8 w-8 ${ACCENT[a.accent].ink}`} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold">
                  {a.title}
                </h3>
                <p className="mt-2 font-body font-semibold text-navy/70">
                  {a.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
