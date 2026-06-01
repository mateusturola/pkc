"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { EVENT } from "@/lib/data";
import Logo from "@/components/ui/Logo";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
});

export default function Hero() {
  const tier = useDeviceTier();

  // Scroll-linked handoff: the big hero logo shrinks/fades as the navbar logo
  // fades in. Driven by the window scroll (Lenis scrolls the window natively).
  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const p = Math.min(scrolled / 460, 1); // 0 → 1 across the first part of the hero
  const logoScale = 1 - p * 0.22;
  const logoOpacity = 1 - p;
  const logoY = -p * 24;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-ink-light via-ink to-ink"
    >
      {/* Animated gradient fallback / base layer */}
      <div
        aria-hidden
        className="absolute inset-0 animate-gradient-pan opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 18% 22%, rgba(155,114,242,0.55), transparent 60%), radial-gradient(50% 50% at 82% 28%, rgba(43,169,224,0.32), transparent 60%), radial-gradient(55% 55% at 70% 88%, rgba(109,75,196,0.45), transparent 60%)",
          backgroundSize: "180% 180%",
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-dots opacity-40" />

      {/* 3D scene (only on capable devices) */}
      {tier !== "off" && <HeroCanvas tier={tier} />}

      {/* Readability scrim — keeps shapes from competing with the text/logo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(115% 100% at 0% 48%, rgba(21,10,46,0.78) 0%, rgba(21,10,46,0.4) 30%, rgba(21,10,46,0) 56%)",
        }}
      />

      {/* Content */}
      <div className="container-px relative z-20 mx-auto w-full max-w-6xl pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-body text-sm font-bold text-lav backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sun" />
            {EVENT.dateLabel} · {EVENT.venue}
          </span>

          <h1 className="sr-only">PAZ Kids Conference 27 — Barueri</h1>
          <div
            className="origin-left will-change-transform"
            style={{
              transform: `translateY(${logoY}px) scale(${logoScale})`,
              opacity: logoOpacity,
            }}
          >
            <Logo
              className="mt-5 h-auto w-[min(92%,40rem)] drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>

          <p className="mt-8 max-w-xl font-body text-lg font-semibold text-lav/85 sm:text-xl">
            A conferência para quem tem um coração voltado para a{" "}
            <span className="text-purple-light">próxima geração</span>. Um dia
            inteiro de inspiração, prática e comunhão.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
            <a
              href={EVENT.registerUrl}
              className="btn-pop border-2 border-transparent bg-purple px-8 py-4 text-lg text-white hover:bg-purple-dark"
            >
              Garantir minha vaga
            </a>
            <a
              href="#sobre"
              className="btn-pop border-2 border-white/20 bg-white/5 px-8 py-4 text-lg text-lav backdrop-blur-sm"
            >
              Saber mais
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-lav/30 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-lav/50"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
