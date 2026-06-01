"use client";

import Reveal from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";
import FloatingShapes, { EVENT_SHAPES } from "@/components/ui/FloatingShapes";
import { EVENT } from "@/lib/data";

type Tile = {
  icon: IconName;
  label: string;
  value: string;
  sub?: string;
  chip: string;
};

const INFO_TILES: Tile[] = [
  {
    icon: "calendar",
    label: "Data",
    value: EVENT.dateLabel,
    chip: "bg-purple/25 text-purple-light",
  },
  {
    icon: "clock",
    label: "Horário",
    value: EVENT.timeLabel,
    sub: "horário previsto",
    chip: "bg-sky/25 text-sky",
  },
  {
    icon: "pin",
    label: "Local",
    value: EVENT.venue,
    sub: "Barueri · SP",
    chip: "bg-coral/25 text-coral",
  },
  {
    icon: "user-plus",
    label: "Inscrições",
    value: "Lote promocional",
    sub: `${EVENT.promoLotPrice} · até ${EVENT.promoLotDeadline}`,
    chip: "bg-mint/25 text-mint",
  },
];

export default function EventDetails() {
  return (
    <section id="local" className="relative isolate overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32">
      <FloatingShapes items={EVENT_SHAPES} />
      <div className="container-px mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-purple-light">
              Local & data
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4rem)] font-bold leading-[0.95] text-lav">
              Marque na <span className="text-sun">agenda</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INFO_TILES.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-3 rounded-4xl border-2 border-white/10 bg-white/[0.04] p-6">
                <span className={`grid h-11 w-11 place-items-center rounded-2xl ${tile.chip}`}>
                  <Icon name={tile.icon} className="h-6 w-6" />
                </span>
                <dt className="font-body text-xs font-bold uppercase tracking-[0.18em] text-lav/60">
                  {tile.label}
                </dt>
                <dd className="font-display text-xl font-bold leading-tight text-lav">
                  {tile.value}
                </dd>
                {tile.sub && (
                  <dd className="font-body text-sm font-semibold leading-snug text-lav/70">
                    {tile.sub}
                  </dd>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="relative mt-6 min-h-[420px] overflow-hidden rounded-5xl border-2 border-white/10">
            <iframe
              title="Mapa — Paz Church Barueri"
              src="https://maps.google.com/maps?q=Paz+Church+Barueri,+Av.+Vinte+e+Seis+de+Mar%C3%A7o,+989+-+Vila+Sao+Joao,+Barueri+-+SP,+06401-050&z=16&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-sm">
              <div className="pointer-events-auto rounded-3xl bg-ink/85 p-6 text-white shadow-2xl shadow-black/40 backdrop-blur-md ring-1 ring-white/10">
                <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-sun">
                  Onde
                </span>
                <p className="mt-2 font-display text-xl font-bold text-lav">
                  {EVENT.venue}
                </p>
                <p className="mt-1 font-body text-sm font-semibold text-lav/80">
                  {EVENT.address}
                </p>
                <p className="font-body text-sm font-semibold text-lav/80">
                  {EVENT.city}
                </p>
                <a
                  href="https://maps.google.com/maps?q=Paz+Church+Barueri,+Av.+Vinte+e+Seis+de+Mar%C3%A7o,+989+-+Vila+Sao+Joao,+Barueri+-+SP,+06401-050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-body text-sm font-bold text-purple-light hover:text-sun"
                >
                  Como chegar
                  <Icon name="arrow-right" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
