import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";
import { EVENT, INSTAGRAM, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-lav/80">
      <div className="container-px mx-auto max-w-6xl py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <span className="inline-block rounded-3xl bg-cream-light px-5 py-4">
              <Logo className="h-12 w-auto" />
            </span>
            <p className="mt-5 font-body font-semibold text-lav/60">
              A conferência para quem tem um coração voltado para a próxima
              geração.
            </p>
            <p className="mt-4 font-body text-sm font-bold text-lav/50">
              {EVENT.dateLabel} · {EVENT.venue} · {EVENT.city}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={INSTAGRAM.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${INSTAGRAM.handle}`}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 text-lav/80 transition-colors hover:border-purple-light hover:text-purple-light"
              >
                <Icon name="instagram" className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-bold text-lav/70 transition-colors hover:text-purple-light"
              >
                {INSTAGRAM.handle}
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body font-bold text-lav/70 transition-colors hover:text-purple-light"
              >
                {l.label}
              </a>
            ))}
            <a
              href={EVENT.registerUrl}
              className="font-body font-bold text-sun transition-colors hover:text-white"
            >
              Inscreva-se
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm font-semibold text-lav/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} PAZ Kids Conference. Todos os direitos
            reservados.
          </span>
          <span>Barueri · São Paulo · Brasil</span>
        </div>
      </div>
    </footer>
  );
}
