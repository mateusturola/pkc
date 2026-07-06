"use client";

import Script from "next/script";
import Reveal from "@/components/ui/Reveal";
import Logo from "@/components/ui/Logo";
import EinscricaoButton from "@/components/ui/EinscricaoButton";
import useCurrentLot from "@/hooks/useCurrentLot";
import { EINSCRICAO, EVENT } from "@/lib/data";

export default function Register() {
  // Lote vigente em destaque; encerrados riscados e o próximo como aviso de
  // aumento. Vira sozinho pela data (lib/data.ts → LOTS).
  const { lot, next, closed } = useCurrentLot();

  return (
    <section
      id="inscricao"
      className="brand-iridescent relative overflow-hidden py-24 text-ink sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 bg-dots opacity-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-magenta/25 blur-3xl"
      />
      <div className="container-px relative mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-blue">
            Inscrições
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,5vw,3rem)] font-bold leading-[0.95] text-ink">
            Garanta sua <span className="text-gradient">vaga</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex rounded-3xl bg-white px-6 py-4 shadow-xl shadow-blue/10 ring-1 ring-paper-tint">
              <Logo className="h-12 w-auto sm:h-14" />
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg font-semibold text-ink-soft">
            {EVENT.dateLabel} · {EVENT.venue}. Vagas limitadas — inscreva-se e
            traga sua equipe.
          </p>
        </Reveal>

        <Reveal delay={0.13}>
          <div className="mx-auto mt-10 max-w-md">
            {/* Card principal — lote vigente em destaque */}
            <div className="overflow-hidden rounded-4xl border border-paper-tint bg-white text-ink shadow-2xl shadow-blue/15">
              <div className="flex items-center justify-between gap-3 bg-blue px-7 py-3 text-white transition-colors duration-500">
                <span className="font-body text-sm font-bold uppercase tracking-[0.2em] text-white">
                  {lot.name}
                </span>
                <span className="font-body text-sm font-bold text-white/85">
                  {lot.periodLabel}
                </span>
              </div>
              <div className="px-7 py-8 text-center">
                <span className="font-body text-sm font-bold uppercase tracking-[0.2em] text-ink-mute">
                  Investimento
                </span>
                <div className="mt-1 font-display text-6xl font-bold leading-none text-ink">
                  {lot.price}
                </div>
                <p className="mt-3 font-body text-sm font-semibold text-ink-soft">
                  por pessoa ·{" "}
                  {lot.cap
                    ? `lote limitado a ${lot.cap.replace("ou ", "")}`
                    : "vagas limitadas"}
                </p>
              </div>
            </div>

            {/* Faixas finas — lotes encerrados (riscados) e o próximo */}
            {closed.map((c) => (
              <div
                key={c.name}
                className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-paper-tint bg-paper-soft px-5 py-3 text-ink"
              >
                <span className="font-body text-xs font-bold uppercase tracking-[0.16em] text-ink-mute">
                  {c.name} · encerrado
                </span>
                <span className="font-body text-sm font-bold text-ink-mute line-through">
                  {c.price}
                </span>
              </div>
            ))}
            {next && (
              <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-paper-tint bg-paper-soft px-5 py-3 text-ink">
                <span className="font-body text-xs font-bold uppercase tracking-[0.16em] text-ink-mute">
                  {next.name} · {next.periodLabel}
                </span>
                <span className="font-body text-sm font-bold text-ink-soft">
                  {next.price}
                </span>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8">
            <EinscricaoButton className="btn-pop bg-blue px-8 py-4 text-lg text-white">
              Inscreva-se já
            </EinscricaoButton>
            <p className="mx-auto mt-4 max-w-md font-body text-sm font-semibold text-ink-soft">
              {next
                ? `Garanta o ${lot.name} por ${lot.price} — no ${next.name.toLowerCase()} passa para ${next.price}.`
                : "Último lote — garanta sua vaga antes que esgote."}
            </p>
          </div>
        </Reveal>

        {/* Widget do e-inscrição — carrega só quando a URL do script é informada
            em lib/data.ts (EINSCRICAO.widgetScriptSrc). É ele que faz o botão
            .ei-button abrir o checkout. */}
        {EINSCRICAO.widgetScriptSrc && (
          <Script
            src={EINSCRICAO.widgetScriptSrc}
            data-einscricao-widget=""
            strategy="afterInteractive"
          />
        )}
      </div>
    </section>
  );
}
