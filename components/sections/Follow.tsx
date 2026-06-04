import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { INSTAGRAM } from "@/lib/data";

export default function Follow() {
  return (
    <section
      id="acompanhe"
      className="relative isolate overflow-hidden py-20 sm:py-28"
    >
      <div className="container-px mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl border-2 border-white/10 bg-gradient-to-br from-purple/20 via-white/[0.04] to-sky/15 p-10 text-center sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-purple/20 blur-3xl"
            />
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <Icon name="instagram" className="h-8 w-8" />
            </span>
            <h2 className="mt-6 font-display text-[clamp(1.8rem,5vw,3rem)] font-bold leading-[0.95] text-lav">
              Acompanhe cada <span className="text-sun">novidade</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg font-semibold text-lav/70">
              Programação, palestrantes e avisos de inscrição saem primeiro no
              nosso Instagram. Segue a gente pra não perder nada.
            </p>
            <a
              href={INSTAGRAM.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pop mt-8 bg-purple px-8 py-4 text-lg text-white"
            >
              <Icon name="instagram" className="h-5 w-5" />
              Seguir {INSTAGRAM.handle}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
