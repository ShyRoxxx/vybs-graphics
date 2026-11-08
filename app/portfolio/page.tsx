import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/final-cta";
import { WorkSlides } from "@/components/work-slides";
import { works } from "@/lib/content";
import { primaryCta } from "@/lib/site";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

export const metadata: Metadata = {
  title: "Arbeiten",
  description: "Arbeiten von Vybs Graphics, Grafikdesign aus Langenhagen: Instagram-Carousels und Beitragsserien für Beratung, IT, Ferienhaus und Webagentur, jeweils mit allen Slides.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Arbeiten, die man dem Betrieb"
        accent="zuordnen kann."
        text="Fünf Projekte, jeweils vollständig: Bei Carousels siehst du alle Slides nebeneinander, bei Serien jeden Beitrag. Alles echte Kundenprojekte, keine Übungsstücke. Auf dem Handy wischen, am Rechner klicken."
      >
        <nav aria-label="Projekte" className="flex flex-wrap gap-2">
          {works.map((w) => (
            <a key={w.slug} href={`#${w.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-[var(--fill-gray)] px-4 text-sm font-medium text-text-2 transition-colors hover:bg-[var(--fill-gray-hover)] hover:text-text gap-2">
              <span aria-hidden className="h-2 w-2 rounded-full" style={{ background: w.tint }} />
              {w.client}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="overflow-x-clip pb-[var(--section)]">
        <div className="container-x space-y-[clamp(5rem,10vw,8rem)]">
          {works.map((w, i) => (
            <article key={w.slug} id={w.slug} className="relative scroll-mt-28">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-14">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <Reveal as="h2" className="t-section">
                    {w.client}
                  </Reveal>
                  <Reveal as="p" delay={0.05} className="mt-3 flex flex-wrap items-center gap-2 text-sm text-text-3">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-medium ${w.kind === "Kundenprojekt" ? "bg-accent text-accent-ink" : "bg-[var(--fill-gray)] text-text-2"}`}>{w.kind}</span>
                    <span>{w.format}</span>
                  </Reveal>
                  <Reveal as="p" delay={0.1} className="measure mt-6 text-text-2">
                    {w.description}
                  </Reveal>
                  <Reveal as="ul" stagger={0.08} delay={0.15} className="mt-6 space-y-2">
                    {w.details.map((d) => (
                      <li key={d} className="flex items-center gap-3 text-text">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full" style={{ background: `${w.tint}26`, color: w.tint }}>
                          <CheckIcon size={12} weight="bold" aria-hidden />
                        </span>
                        {d}
                      </li>
                    ))}
                  </Reveal>
                </div>
                <Reveal from={i % 2 ? "left" : "right"} distance={24}>
                  <WorkSlides work={w} priority={i === 0} />
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-[var(--section)]">
        <div className="container-x">
          <Reveal className="card relative overflow-hidden p-8 md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="t-title">Das nächste Projekt hier könnte deins sein.</h2>
                <p className="measure mt-4 text-text-2">
                  Ich zeige dir lieber ein Design für deinen Betrieb als zehn für andere. Fordere es kostenlos an, danach entscheidest du.
                </p>
              </div>
              <Link href={primaryCta.href} className="btn btn-primary btn-lg">
                {primaryCta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <FinalCta title="Lieber gleich dein eigenes sehen?" />
    </>
  );
}
