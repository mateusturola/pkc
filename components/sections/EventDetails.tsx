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
    chip: "bg-blue/10 text-blue",
  },
  {
    icon: "clock",
    label: "Horário",
    value: EVENT.timeLabel,
    sub: "horário previsto",
    chip: "bg-magenta/15 text-magenta",
  },
  {
    icon: "pin",
    label: "Local",
    value: EVENT.venue,
    sub: "Barueri · SP",
    chip: "bg-blue/10 text-blue",
  },
];

export default function EventDetails() {
  return (
    <section id="local" className="relative isolate overflow-hidden bg-paper pt-12 pb-24 sm:pt-16 sm:pb-32">
      <FloatingShapes items={EVENT_SHAPES} />
      <div className="container-px mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-blue">
              Local & data
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-[0.95] text-ink">
              Marque na <span className="text-gradient">agenda</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INFO_TILES.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-3 rounded-4xl border border-paper-tint bg-white p-6 shadow-[0_18px_50px_-24px_rgba(4,60,134,0.20)]">
                <span className={`grid h-11 w-11 place-items-center rounded-2xl ${tile.chip}`}>
                  <Icon name={tile.icon} className="h-6 w-6" />
                </span>
                <dt className="font-body text-xs font-bold uppercase tracking-[0.18em] text-ink-mute">
                  {tile.label}
                </dt>
                <dd className="font-display text-xl font-bold leading-tight text-ink">
                  {tile.value}
                </dd>
                {tile.sub && (
                  <dd className="font-body text-sm font-semibold leading-snug text-ink-soft">
                    {tile.sub}
                  </dd>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="relative mt-6 min-h-[420px] overflow-hidden rounded-5xl border border-paper-tint shadow-[0_18px_50px_-24px_rgba(4,60,134,0.20)]">
            <iframe
              title="Mapa — Paz Church Barueri"
              src="https://maps.google.com/maps?q=Paz+Church+Barueri,+Av.+Vinte+e+Seis+de+Mar%C3%A7o,+989+-+Vila+Sao+Joao,+Barueri+-+SP,+06401-050&z=16&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
