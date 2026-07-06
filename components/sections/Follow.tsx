import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { INSTAGRAM } from "@/lib/data";

export default function Follow() {
  return (
    <section
      id="acompanhe"
      className="relative isolate overflow-hidden bg-paper py-20 sm:py-28"
    >
      <div className="container-px mx-auto max-w-4xl">
        <Reveal>
          <div className="brand-iridescent relative overflow-hidden rounded-5xl border border-paper-tint p-10 text-center shadow-[0_18px_50px_-24px_rgba(4,60,134,0.20)] sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-magenta/15 blur-3xl"
            />
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-[0_18px_40px_-12px_rgba(203,108,230,0.55)]">
              <Icon name="instagram" className="h-8 w-8" />
            </span>
            <h2 className="mt-6 font-display text-[clamp(1.8rem,5vw,3rem)] font-bold leading-[0.95] text-ink">
              Acompanhe cada <span className="text-gradient">novidade</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg font-semibold text-ink-soft">
              Programação, palestrantes e avisos de inscrição saem primeiro no
              nosso Instagram. Segue a gente pra não perder nada.
            </p>
            <a
              href={INSTAGRAM.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pop mt-8 bg-magenta px-8 py-4 text-lg text-white"
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
