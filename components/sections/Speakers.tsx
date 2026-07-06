"use client";

import { useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
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
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollByCards = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section
      id="palestrantes"
      className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16"
    >
      <FloatingShapes items={SPEAKERS_SHAPES} />
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
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
          <Reveal delay={0.1}>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => scrollByCards(-1)}
                aria-label="Palestrante anterior"
                className="grid h-11 w-11 place-items-center rounded-full border border-paper-tint bg-white text-blue shadow-[0_10px_26px_-12px_rgba(4,60,134,0.4)] transition-colors hover:bg-paper-soft"
              >
                <Icon name="arrow-right" className="h-5 w-5 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCards(1)}
                aria-label="Próximo palestrante"
                className="grid h-11 w-11 place-items-center rounded-full border border-paper-tint bg-white text-blue shadow-[0_10px_26px_-12px_rgba(4,60,134,0.4)] transition-colors hover:bg-paper-soft"
              >
                <Icon name="arrow-right" className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          ref={trackRef}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SPEAKERS.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 0.08}
              className="w-[230px] shrink-0 snap-start sm:w-[250px]"
            >
              <article className="group h-full overflow-hidden rounded-4xl border border-paper-tint bg-white shadow-[0_18px_50px_-24px_rgba(4,60,134,0.25)] transition-transform duration-300 hover:-translate-y-2">
                <SpeakerPhoto speaker={s} />
                <div className="px-5 py-5 text-center">
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
