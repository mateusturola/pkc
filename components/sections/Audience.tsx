"use client";

import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import FloatingShapes, { AUDIENCE_SHAPES } from "@/components/ui/FloatingShapes";
import { AUDIENCE } from "@/lib/data";

const ACCENT: Record<string, { chip: string; ink: string }> = {
  sky: { chip: "bg-blue/10", ink: "text-blue" },
  coral: { chip: "bg-magenta/15", ink: "text-magenta" },
  sun: { chip: "bg-blue-light/15", ink: "text-blue-light" },
  mint: { chip: "bg-magenta/10", ink: "text-magenta-dark" },
  grape: { chip: "bg-blue/10", ink: "text-blue-dark" },
};

export default function Audience() {
  return (
    <section
      id="para-quem"
      className="relative isolate overflow-hidden bg-paper-soft py-24 text-ink sm:py-32"
    >
      <FloatingShapes items={AUDIENCE_SHAPES} />
      <div aria-hidden className="absolute inset-0 bg-dots opacity-[0.06]" />
      <div className="container-px relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-magenta">
              Pra quem é?
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[0.95] text-ink">
              Se você ama crianças, essa conferência é pra{" "}
              <span className="text-gradient">você</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.07}>
              <div
                className="h-full rounded-4xl border border-paper-tint bg-white p-7 text-ink shadow-[0_18px_50px_-24px_rgba(4,60,134,0.20)] transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-3xl ${ACCENT[a.accent].chip}`}
                >
                  <Icon name={a.icon} className={`h-8 w-8 ${ACCENT[a.accent].ink}`} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                  {a.title}
                </h3>
                <p className="mt-2 font-body font-semibold text-ink-soft">
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
