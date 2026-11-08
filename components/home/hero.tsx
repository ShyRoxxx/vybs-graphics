import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/lib/content";
import { primaryCta } from "@/lib/site";

const lines = ["Professionelles", "Grafikdesign für", "dein Unternehmen."];
const facts = [
  { k: "Vorab", v: "Kostenloses Beispieldesign" },
  { k: "Preise", v: "Fest, ab 15 € pro Design" },
  { k: "Ablauf", v: "Komplett digital" },
];

export function Hero() {
  return (
    <section className="pt-[5.5rem] sm:pt-[6rem]">
      <div className="panel-wrap">
        <div className="glass px-[clamp(1.25rem,4vw,3.5rem)] py-[clamp(2.25rem,5.5vw,5rem)]">
        <p className="eyebrow hero-fade !mb-6" style={{ "--d": "0s" } as CSSProperties}>
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
          Grafikdesign aus Langenhagen bei Hannover
        </p>
        <h1 className="t-display max-w-[15ch]">
          {lines.map((line, i) => (
            <span key={line} className="hero-line block overflow-hidden pb-[0.06em] -mb-[0.06em]">
              <span className={`block ${i === 2 ? "text-accent" : ""}`} style={{ "--d": `${0.05 + i * 0.08}s` } as CSSProperties}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 border-t border-line pt-8 lg:mt-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="hero-fade" style={{ "--d": "0.35s" } as CSSProperties}>
            <p className="measure text-lg leading-relaxed text-text-2 md:text-xl">
              Instagram-Designs, Flyer, Visitenkarten und Logos für Unternehmen, Selbstständige und lokale Betriebe.
              Du siehst dein Design, bevor du etwas bezahlst.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href={primaryCta.href} className="btn btn-primary btn-lg">
                {primaryCta.label}
              </Link>
              <Link href="/portfolio" className="btn btn-ghost btn-lg">
                Arbeiten ansehen
              </Link>
            </div>
          </div>
          <dl className="hero-fade grid content-start divide-y divide-line border-y border-line" style={{ "--d": "0.45s" } as CSSProperties}>
            {facts.map((f) => (
              <div key={f.k} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 py-4">
                <dt className="text-sm text-text-3">{f.k}</dt>
                <dd className="font-medium text-text">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        </div>
      </div>

      {/* the work, as a slowly running reel; stops on hover, static with reduced motion */}
      <div className="reel mt-10 lg:mt-14" aria-label="Arbeiten von Vybs Graphics" role="region">
        <ul className="reel-track">
          {[...works, ...works].map((w, i) => (
            <li key={`${w.slug}-${i}`} className="reel-item" aria-hidden={i >= works.length || undefined}>
              <Link href={`/portfolio#${w.slug}`} tabIndex={i >= works.length ? -1 : undefined} className="group block">
                <div className="frame relative aspect-[4/5]">
                  <Image
                    src={w.slides[0].src}
                    alt={i >= works.length ? "" : w.slides[0].alt}
                    fill
                    priority={i < 2}
                    sizes="(min-width: 768px) 17rem, 60vw"
                    className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-3 flex items-baseline justify-between gap-3 text-sm">
                  <span className="truncate font-medium text-text">{w.client}</span>
                  <span className="hidden shrink-0 text-text-3 xl:inline">{w.format.split(",")[0]}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
