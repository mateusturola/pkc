"use client";

import { useEffect, useState } from "react";
import EinscricaoButton from "@/components/ui/EinscricaoButton";
import usePromoActive from "@/hooks/usePromoActive";
import { EVENT } from "@/lib/data";

/**
 * Barra fixa de inscrição. Fica sempre no DOM (só desliza pra fora da tela
 * quando escondida) para que o widget do e-inscrição consiga ligar o clique no
 * botão já no carregamento. Aparece depois do hero e some ao chegar na seção
 * de Inscrições, evitando CTA duplicado.
 */
export default function StickyCTA() {
  const promoActive = usePromoActive();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.8;
      const reg = document.getElementById("inscricao");
      // Esconde assim que a seção de Inscrições se aproxima do meio da tela.
      const beforeRegister = reg
        ? reg.getBoundingClientRect().top > window.innerHeight * 0.6
        : true;
      setShow(pastHero && beforeRegister);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const price = promoActive ? EVENT.promoLotPrice : EVENT.fullPrice;
  const label = promoActive ? "Lote promocional" : "1º lote";

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ease-out ${
        show ? "translate-y-0" : "pointer-events-none translate-y-[140%]"
      }`}
    >
      <div className="container-px mx-auto max-w-3xl pb-3">
        <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-ink/90 px-5 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-6">
          <div className="leading-tight">
            <p className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-lav/55 sm:text-[11px]">
              {label}
            </p>
            <p className="font-display text-lg font-bold text-lav sm:text-xl">
              {price}{" "}
              <span className="font-body text-xs font-semibold text-lav/50">
                por pessoa
              </span>
            </p>
          </div>
          <EinscricaoButton className="btn-pop shrink-0 bg-purple px-6 py-3 text-base text-white">
            Inscreva-se já
          </EinscricaoButton>
        </div>
      </div>
    </div>
  );
}
