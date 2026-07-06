"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import FloatingShapes, { AUDIENCE_SHAPES } from "@/components/ui/FloatingShapes";
import { FAQS } from "@/lib/data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative isolate overflow-hidden bg-paper-soft py-24 sm:py-32">
      <FloatingShapes items={AUDIENCE_SHAPES} />
      <div className="container-px mx-auto max-w-3xl">
        <div className="text-center">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-blue">
              Dúvidas
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-[0.95] text-ink">
              Perguntas <span className="text-gradient">frequentes</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-3xl border bg-white shadow-[0_18px_50px_-24px_rgba(4,60,134,0.20)] transition-colors duration-300 ${
                    isOpen
                      ? "border-blue/50"
                      : "border-paper-tint"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-bold text-ink sm:text-xl">
                      {item.q}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-blue text-white"
                          : "bg-paper-tint text-blue"
                      }`}
                    >
                      <Icon name="chevron-down" className="h-5 w-5" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 font-body font-semibold leading-relaxed text-ink-soft">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
