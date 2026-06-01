"use client";

import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import FloatingShapes, { ABOUT_SHAPES } from "@/components/ui/FloatingShapes";

export default function About() {
  return (
    <section id="sobre" className="relative isolate overflow-hidden py-24 sm:py-32">
      <FloatingShapes items={ABOUT_SHAPES} />
      <div className="border-y-2 border-white/10 bg-purple py-4 text-white">
        <Marquee
          items={[
            "Próxima geração",
            "Ministério infantil",
            "PazKids 27",
            "Barueri",
            "Inspiração",
            "Comunhão",
          ]}
        />
      </div>

      <div className="container-px mx-auto mt-20 max-w-5xl text-center">
        <Reveal>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-purple-light">
            O evento
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[0.95] text-lav">
            Feito para quem{" "}
            <span className="text-sun">forma</span> a próxima geração.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-2xl font-body text-lg font-semibold text-lav/70 sm:text-xl">
            A PAZ Kids Conference 27 reúne quem dedica a vida a cuidar,
            ensinar e discipular crianças. Um dia para reabastecer o coração,
            aprender com quem vive isso na prática e celebrar o chamado de
            servir os pequenos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
