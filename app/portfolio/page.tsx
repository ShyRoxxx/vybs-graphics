import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/final-cta";
import { workCategories } from "@/lib/content";
import { WorkImage, WorkOverview } from "@/components/work-gallery";
import { primaryCta } from "@/lib/site";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

export const metadata: Metadata = {
  title: "Arbeiten",
  description: "Ausgewählte Social-Media-Designs, Carousels und Beitragsserien von Vybs Graphics für Reinigung, Beratung und mehr.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Arbeiten, die man dem Betrieb"
        accent="zuordnen kann."
        text="Wenige, dafür vollständige Arbeiten: drei Instagram-Carousels als zusammenhängende Serien, jeweils mit allen Slides. Kundenprojekte sind als solche gekennzeichnet, Konzeptarbeiten ebenfalls. Flyer, Visitenkarten und Logos folgen, sobald die Druckdaten in Mockups fotografiert sind."
      />

      <section className="pb-[clamp(4rem,8vw,7rem)]">
        <div className="container-x">
          <Reveal from="scale" distance={0}>
            <WorkOverview />
          </Reveal>
          <p className="mt-4 text-center text-sm text-text-3">Klick auf ein Bild, um es groß zu sehen. Pfeiltasten blättern.</p>
        </div>
      </section>

      <section className="overflow-hidden pb-[var(--section)]">
        <div className="container-x space-y-[clamp(5rem,10vw,9rem)]">
          {workCategories.map((w, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={w.slug} id={w.slug} className="relative scroll-mt-28">
                <div aria-hidden className="orb absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.18]" style={{ background: w.tint }} />
                <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <Reveal from={flip ? "right" : "left"} className="relative">
                    <WorkImage index={i} />
                  </Reveal>
                  <div>
                    <Reveal as="h2" className="text-[clamp(2.25rem,5vw,4.25rem)]">
                      {w.title} <span style={{ color: w.tint }}>{w.titleAccent}</span>
                    </Reveal>
                    <Reveal as="p" delay={0.05} className="mt-3 flex flex-wrap items-center gap-2 text-sm text-text-3">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 font-semibold ${w.kind === "Kundenprojekt" ? "bg-accent/15 text-accent" : "bg-ink-3 text-text-2"}`}>{w.kind}</span>
                      <span>{w.client}</span>
                      <span aria-hidden>·</span>
                      <span>{w.format}</span>
                    </Reveal>
                    <Reveal as="p" delay={0.1} className="measure mt-6 text-lg text-text-2">
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
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-[var(--section)]">
        <div className="container-x">
          <Reveal className="card relative overflow-hidden p-8 md:p-12">
            <div aria-hidden className="orb drift-a right-[-10%] top-[-50%] h-[20rem] w-[20rem] bg-accent opacity-20" />
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)]">Das nächste Beispiel hier könnte Ihres sein.</h2>
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
