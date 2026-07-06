"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EVENT } from "@/lib/data";
import Logo from "@/components/ui/Logo";
import Icon, { type IconName } from "@/components/ui/Icon";

const HIGHLIGHTS: { icon: IconName; label: string }[] = [
  { icon: "clock", label: "1 dia inteiro" },
  { icon: "users", label: "Palestrantes que inspiram" },
  { icon: "heart", label: "Louvor & comunhão" },
];

export default function Hero() {
  // Scroll-linked handoff: a logo grande do hero encolhe/some enquanto a do
  // navbar aparece. Dirigido pelo scroll da window (Lenis rola nativamente).
  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const p = Math.min(scrolled / 460, 1);
  const logoScale = 1 - p * 0.18;
  const logoOpacity = 1 - p;
  const logoY = -p * 20;

  return (
    <section
      id="top"
      className="brand-iridescent relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-8 sm:pb-28"
    >
      {/* Vidro iridescente da marca, à direita */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[72%] bg-cover bg-center opacity-90"
        style={{
          backgroundImage: "url('/bg-1.webp')",
          maskImage: "linear-gradient(to right, transparent, #000 40%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 40%)",
        }}
      />
      {/* Brilhos suaves da paleta */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(45% 55% at 12% 28%, rgba(203,108,230,0.18), transparent 60%), radial-gradient(45% 55% at 82% 72%, rgba(4,60,134,0.14), transparent 60%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 z-0 bg-dots opacity-40" />

      {/* Conteúdo */}
      <div className="container-px relative z-20 mx-auto w-full max-w-6xl pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white/70 px-4 py-1.5 font-body text-sm font-bold text-ink-soft backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-magenta" />
            {EVENT.dateLabel} · {EVENT.venue}
          </span>

          <h1 className="sr-only">PAZ Kids Conference 2027 — Barueri</h1>
          <div
            className="origin-left will-change-transform"
            style={{
              transform: `translateY(${logoY}px) scale(${logoScale})`,
              opacity: logoOpacity,
            }}
          >
            <Logo
              className="mt-6 h-auto w-[min(94%,42rem)] drop-shadow-[0_18px_40px_rgba(4,60,134,0.18)]"
              priority
            />
          </div>

          <p className="mt-8 max-w-xl font-body text-lg font-semibold text-ink-soft sm:text-xl">
            A conferência para quem tem um coração voltado para a{" "}
            <span className="text-gradient font-bold">próxima geração</span>. Um
            dia inteiro de inspiração, prática e comunhão.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
            <a
              href={EVENT.registerUrl}
              className="btn-pop bg-blue px-8 py-4 text-lg text-white hover:bg-blue-dark"
            >
              Garantir minha vaga
            </a>
            <a
              href="#sobre"
              className="btn-pop bg-white px-8 py-4 text-lg text-blue ring-1 ring-blue/15 hover:bg-paper-soft"
            >
              Saber mais
            </a>
          </div>

          {/* Faixa de benefícios (estilo da barra de preço) */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-3xl border border-blue/10 bg-white/60 px-6 py-4 shadow-[0_18px_45px_-24px_rgba(4,60,134,0.35)] backdrop-blur-md">
            {HIGHLIGHTS.map((h) => (
              <span
                key={h.label}
                className="inline-flex items-center gap-2.5 font-body text-sm font-bold text-ink-soft"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue/10 text-blue">
                  <Icon name={h.icon} className="h-4 w-4" />
                </span>
                {h.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-blue/25 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-blue/40"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
