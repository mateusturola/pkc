"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import FloatingShapes, { SPEAKERS_SHAPES } from "@/components/ui/FloatingShapes";
import { SPEAKERS, type Speaker } from "@/lib/data";

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
    <div className="aspect-[4/5] w-full overflow-hidden bg-paper-soft">
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
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue to-magenta">
          <span className="font-display text-5xl font-bold text-white">
            {initials(speaker.name)}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Speakers() {
  return (
    <section
      id="palestrantes"
      className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16"
    >
      <FloatingShapes items={SPEAKERS_SHAPES} />
      <div className="container-px mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-blue">
              Palestrantes
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[0.95] text-ink">
              Quem vai <span className="text-gradient">inspirar</span> você.
            </h2>
          </Reveal>
        </div>

        {/* Grid centralizado: linhas incompletas (ex.: 3+2) ficam no centro */}
        <div className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-6">
          {SPEAKERS.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 0.06}
              className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[250px]"
            >
              <article className="group h-full overflow-hidden rounded-4xl border border-paper-tint bg-white shadow-[0_18px_50px_-24px_rgba(4,60,134,0.25)] transition-transform duration-300 hover:-translate-y-2">
                <SpeakerPhoto speaker={s} />
                <div className="px-4 py-4 text-center sm:px-5 sm:py-5">
                  <h3 className="font-display text-lg font-bold leading-tight text-ink">
                    {s.name}
                  </h3>
                  <p
                    className={`mt-1 font-body text-xs font-bold uppercase tracking-[0.2em] ${
                      i % 2 === 0 ? "text-blue" : "text-magenta"
                    }`}
                  >
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
