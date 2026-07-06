import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { CARAVAN_FEATURES, CARAVAN_SIZES } from "@/lib/data";

const BEST_VALUE = 20;

export default function Caravans() {
  return (
    <section
      id="caravanas"
      className="relative isolate overflow-hidden bg-paper-soft py-20 sm:py-28"
    >
      <div className="container-px mx-auto max-w-5xl">
        <div className="text-center">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-magenta">
              Caravanas
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-[0.95] text-ink">
              Venha em <span className="text-gradient">caravana</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg font-semibold text-ink-soft">
              Quanto maior o grupo, mais vantagens para o líder e para todo
              mundo.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 overflow-x-auto">
            <div className="w-fit min-w-full overflow-hidden rounded-4xl border border-paper-tint bg-white shadow-[0_24px_60px_-30px_rgba(4,60,134,0.30)]">
              {/* Cabeçalho: tamanhos de caravana */}
              <div className="grid grid-cols-[minmax(max-content,2fr)_repeat(3,minmax(90px,1fr))]">
                <div />
                {CARAVAN_SIZES.map((size) => {
                  const best = size === BEST_VALUE;
                  return (
                    <div
                      key={size}
                      className={`flex flex-col items-center justify-center gap-1 px-4 py-6 ${
                        best ? "bg-magenta/[0.06]" : ""
                      }`}
                    >
                      {best && (
                        <span className="mb-1 rounded-full bg-magenta px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                          Mais vantajosa
                        </span>
                      )}
                      <span className="font-display text-3xl font-bold leading-none text-ink">
                        {size}
                      </span>
                      <span className="font-body text-xs font-bold uppercase tracking-wide text-ink-mute">
                        pessoas
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Linhas de benefícios */}
              {CARAVAN_FEATURES.map((feature) => (
                <div
                  key={feature.label}
                  className="grid grid-cols-[minmax(max-content,2fr)_repeat(3,minmax(90px,1fr))] border-t border-paper-tint"
                >
                  <div className="flex items-center whitespace-nowrap px-5 py-5 font-body text-sm font-semibold text-ink-soft">
                    {feature.label}
                  </div>
                  {CARAVAN_SIZES.map((size) => {
                    const included = feature.sizes.includes(size);
                    const best = size === BEST_VALUE;
                    return (
                      <div
                        key={size}
                        className={`flex items-center justify-center py-5 ${
                          best ? "bg-magenta/[0.06]" : ""
                        }`}
                      >
                        {included ? (
                          <span
                            className={`grid h-8 w-8 place-items-center rounded-full ${
                              best
                                ? "bg-magenta/15 text-magenta"
                                : "bg-blue/10 text-blue"
                            }`}
                          >
                            <Icon name="check" className="h-4 w-4" />
                          </span>
                        ) : (
                          <span className="h-px w-4 bg-paper-tint" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
