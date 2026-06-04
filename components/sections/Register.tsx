"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Reveal from "@/components/ui/Reveal";
import Logo from "@/components/ui/Logo";
import { EINSCRICAO, EVENT } from "@/lib/data";

export default function Register() {
  // Até 20/06 o lote promocional fica em destaque e o de R$ 120 esmaecido;
  // a partir de 21/06 inverte sozinho. Começa em "promo ativo" (realidade
  // atual) pra não dar mismatch de hidratação e corrige no cliente se a data
  // já tiver passado.
  const [promoActive, setPromoActive] = useState(true);
  useEffect(() => {
    setPromoActive(Date.now() <= new Date(EVENT.promoDeadlineISO).getTime());
  }, []);

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
          <div className="mx-auto mt-10 max-w-md">
            {/* Card principal — lote atual em destaque */}
            <div className="overflow-hidden rounded-4xl bg-white text-purple-dark shadow-2xl shadow-black/30">
              <div
                className={`flex items-center justify-between gap-3 px-7 py-3 transition-colors duration-500 ${
                  promoActive ? "bg-sun" : "bg-purple"
                }`}
              >
                <span
                  className={`font-body text-sm font-bold uppercase tracking-[0.2em] ${
                    promoActive ? "text-purple-dark" : "text-white"
                  }`}
                >
                  {promoActive ? "Lote promocional" : "1º lote"}
                </span>
                <span
                  className={`font-body text-sm font-bold ${
                    promoActive ? "text-purple-dark/80" : "text-white/85"
                  }`}
                >
                  {promoActive ? `até ${EVENT.promoLotDeadline}` : "inscrições abertas"}
                </span>
              </div>
              <div className="px-7 py-8 text-center">
                <span className="font-body text-sm font-bold uppercase tracking-[0.2em] text-purple-dark/55">
                  Investimento
                </span>
                <div className="mt-1 font-display text-6xl font-bold leading-none">
                  {promoActive ? EVENT.promoLotPrice : EVENT.fullPrice}
                </div>
                <p className="mt-3 font-body text-sm font-semibold text-purple-dark/70">
                  por pessoa · vagas limitadas
                </p>
              </div>
            </div>

            {/* Faixa fina — o outro lote */}
            <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-white/12 bg-white/[0.05] px-5 py-3">
              {promoActive ? (
                <>
                  <span className="font-body text-xs font-bold uppercase tracking-[0.16em] text-lav/55">
                    1º lote · a partir de {EVENT.fullPriceStart}
                  </span>
                  <span className="font-body text-sm font-bold text-lav/80">
                    {EVENT.fullPrice}
                  </span>
                </>
              ) : (
                <>
                  <span className="font-body text-xs font-bold uppercase tracking-[0.16em] text-lav/55">
                    Lote promocional · encerrado em {EVENT.promoLotDeadline}
                  </span>
                  <span className="font-body text-sm font-bold text-lav/45 line-through">
                    {EVENT.promoLotPrice}
                  </span>
                </>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8">
            <button
              type="button"
              className="ei-button btn-pop bg-cream-light px-8 py-4 text-lg text-purple-dark"
              data-einscricao-event={EINSCRICAO.eventId}
              data-einscricao-url={EINSCRICAO.url}
              data-einscricao-api-url={EINSCRICAO.apiUrl}
              data-einscricao-ms-api-url={EINSCRICAO.msApiUrl}
              data-einscricao-receipt-url={EINSCRICAO.receiptUrl}
              data-einscricao-api-participants-url={EINSCRICAO.participantsUrl}
            >
              Inscreva-se já
            </button>
            <p className="mx-auto mt-4 max-w-md font-body text-sm font-semibold text-cream-light/80">
              {promoActive
                ? `Garanta o lote promocional — após ${EVENT.promoLotDeadline} passa para ${EVENT.fullPrice}.`
                : "Você será levado ao e-inscrição para concluir."}
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
