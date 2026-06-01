"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import FloatingShapes, { SPEAKERS_SHAPES } from "@/components/ui/FloatingShapes";
import { SPEAKERS, type Speaker } from "@/lib/data";

const ACCENT: Record<string, string> = {
  purple: "from-purple to-purple-dark",
  sky: "from-sky to-sky-dark",
  coral: "from-coral to-[#e8503f]",
  sun: "from-sun to-[#f0a800]",
  mint: "from-mint to-[#2aa873]",
};

function initials(name: string) {
  return name
    .replace(/^(Pr\.|Pra\.)\s*/i, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function SpeakerPhoto({ speaker }: { speaker: Speaker }) {
  const [errored, setErrored] = useState(false);
  const showPhoto = speaker.photo && !errored;

  return (
    <div
      className={`h-44 w-36 overflow-hidden rounded-3xl border-4 border-white bg-gradient-to-br shadow-[0_18px_40px_rgba(0,0,0,0.45)] ${ACCENT[speaker.accent]}`}
    >
      {showPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={speaker.photo}
          alt={speaker.name}
          loading="lazy"
          decoding="async"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="relative flex h-full w-full items-center justify-center">
          <div aria-hidden className="absolute inset-0 bg-dots opacity-20" />
          <span className="font-display text-5xl font-bold text-white/90">
            {initials(speaker.name)}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Speakers() {
  return (
    <section id="palestrantes" className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16">
      <FloatingShapes items={SPEAKERS_SHAPES} />
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-purple-light">
                Palestrantes
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[0.95] text-lav">
                Quem vai{" "}
                <span className="text-sun">inspirar</span> você.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="font-body font-bold text-lav-dim">
              E ainda tem mais nomes a caminho.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPEAKERS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col justify-end pt-16">
                <div
                  className={`relative rounded-4xl bg-gradient-to-br px-5 pb-7 pt-32 text-center transition-transform duration-300 group-hover:-translate-y-2 ${ACCENT[s.accent]}`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-4xl bg-dots opacity-15"
                  />
                  <div className="absolute inset-x-0 -top-14 flex justify-center">
                    <SpeakerPhoto speaker={s} />
                  </div>
                  <h3 className="relative font-display text-2xl font-bold leading-tight text-white">
                    {s.name}
                  </h3>
                  <p className="relative mt-1 font-body text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                    {s.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
