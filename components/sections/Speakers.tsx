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

function SpeakerPhoto({
  speaker,
  pedestal,
}: {
  speaker: Speaker;
  pedestal: string;
}) {
  const [errored, setErrored] = useState(false);
  const showPhoto = speaker.photo && !errored;

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
      {/* Pedestal de cor na base — a pessoa "sai" dele por cima */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-3 bottom-0 top-[42%] rounded-t-[2.2rem] bg-gradient-to-t ${pedestal}`}
      />
      {showPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={speaker.photo}
          alt={speaker.name}
          loading="lazy"
          decoding="async"
          onError={() => setErrored(true)}
          className="absolute inset-0 z-10 mx-auto h-full w-full object-contain object-bottom drop-shadow-[0_12px_22px_rgba(4,60,134,0.22)] transition-transform duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <div className="relative z-10 flex h-full w-full items-center justify-center">
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
          {SPEAKERS.map((s, i) => {
            const pedestal =
              i % 2 === 0
                ? "from-blue via-blue/85 to-blue/25"
                : "from-magenta via-magenta/85 to-magenta/25";
            return (
              <Reveal
                key={s.name}
                delay={i * 0.06}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:w-[250px]"
              >
                <article className="group h-full overflow-hidden rounded-4xl border border-paper-tint bg-white shadow-[0_18px_50px_-24px_rgba(4,60,134,0.25)] transition-transform duration-300 hover:-translate-y-2">
                  <SpeakerPhoto speaker={s} pedestal={pedestal} />
                  <div className="px-4 py-4 text-center sm:px-5 sm:py-5">
                    <h3 className="font-display text-lg font-bold leading-tight text-ink">
                      {s.name}
                    </h3>
                    <p
                      className={`mt-1 font-body text-xs font-bold uppercase tracking-[0.16em] ${
                        i % 2 === 0 ? "text-blue" : "text-magenta"
                      }`}
                    >
                      {s.role}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
