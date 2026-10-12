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
  description: "Instagram-Carousels und Beitragsserien von vybs.graphics, jeweils mit allen Slides: Beratung, IT, Ferienhaus, Webagentur.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Arbeiten, die man dem Betrieb"
        accent="zuordnen kann."
        text="Fünf Projekte, jeweils vollständig: Bei Carousels siehst du alle Slides nebeneinander, bei Serien jeden Beitrag. Kundenprojekte und Konzeptarbeiten sind gekennzeichnet. Auf dem Handy wischen, am Rechner klicken."
      >
        <nav aria-label="Projekte" className="flex flex-wrap gap-2">
          {works.map((w) => (
            <a key={w.slug} href={`#${w.slug}`} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink-2 px-4 text-sm font-semibold text-text-2 shadow-[inset_0_0_0_1px_var(--line-strong)] transition-colors hover:text-text">
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
              <div aria-hidden className="orb absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.16]" style={{ background: w.tint }} />
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.6fr] lg:gap-14">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <Reveal as="h2" className="text-[clamp(2rem,4vw,3.25rem)]">
                    {w.client}
                  </Reveal>
                  <Reveal as="p" delay={0.05} className="mt-3 flex flex-wrap items-center gap-2 text-sm text-text-3">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 font-semibold ${w.kind === "Kundenprojekt" ? "bg-accent/15 text-accent" : "bg-ink-3 text-text-2"}`}>{w.kind}</span>
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
            <div aria-hidden className="orb drift-a right-[-10%] top-[-50%] h-[20rem] w-[20rem] bg-accent opacity-20" />
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)]">Das nächste Projekt hier könnte deins sein.</h2>
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
