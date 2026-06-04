"use client";

import Reveal from "@/components/ui/Reveal";
import Logo from "@/components/ui/Logo";
import { EVENT } from "@/lib/data";

export default function Register() {
  return (
    <section
      id="inscricao"
      className="relative overflow-hidden bg-gradient-to-br from-purple via-purple-dark to-ink py-24 text-white sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 bg-dots opacity-15" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sun/40 blur-3xl"
      />
      <div className="container-px relative mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-cream-light/90">
            Inscrições
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,5vw,3rem)] font-bold leading-[0.95]">
            Garanta sua vaga
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex rounded-3xl bg-white px-6 py-4 shadow-xl shadow-black/20 ring-1 ring-black/5">
              <Logo className="h-12 w-auto sm:h-14" />
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg font-semibold text-cream-light/90">
            {EVENT.dateLabel} · {EVENT.venue}. Vagas limitadas — inscreva-se e
            traga sua equipe.
          </p>
        </Reveal>

        <Reveal delay={0.13}>
          <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-4xl bg-white text-left text-purple-dark shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between gap-3 bg-sun px-7 py-3">
              <span className="font-body text-sm font-bold uppercase tracking-[0.2em] text-purple-dark">
                Lote promocional
              </span>
              <span className="font-body text-sm font-bold text-purple-dark/80">
                até {EVENT.promoLotDeadline}
              </span>
            </div>
            <div className="px-7 py-8 text-center">
              <span className="font-body text-sm font-bold uppercase tracking-[0.2em] text-purple-dark/60">
                Investimento
              </span>
              <div className="mt-1 font-display text-6xl font-bold leading-none">
                {EVENT.promoLotPrice}
              </div>
              <p className="mt-3 font-body text-sm font-semibold text-purple-dark/70">
                por pessoa · vagas limitadas
              </p>
              <a
                href={EVENT.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pop mt-7 w-full justify-center bg-purple px-8 py-4 text-lg text-white"
              >
                Inscreva-se já
              </a>
              <p className="mt-3 font-body text-xs font-semibold text-purple-dark/50">
                Você será levado ao e-inscrição para concluir.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
