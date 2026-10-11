import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/final-cta";
import { workCategories } from "@/lib/content";
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
        text="Drei Serien, drei Betriebe, drei Farbwelten. Keine Vorlage mit getauschtem Logo, sondern Beiträge, die zum jeweiligen Unternehmen gehören. Das Portfolio wächst mit jedem Auftrag und ist so angelegt, dass neue Arbeiten einfach dazukommen."
      />

      <section className="overflow-hidden pb-[var(--section)]">
        <div className="container-x space-y-[clamp(5rem,10vw,9rem)]">
          {workCategories.map((w, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={w.slug} id={w.slug} className="relative scroll-mt-28">
                <div aria-hidden className="orb absolute left-1/2 top-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.18]" style={{ background: w.tint }} />
                <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <Reveal from={flip ? "right" : "left"} className="relative">
                    <div className="relative overflow-hidden rounded-[var(--radius-card)] shadow-[inset_0_0_0_1px_var(--line),0_40px_80px_-40px_rgba(0,0,0,.9)]">
                      <Image src={w.image} alt={w.alt} width={486} height={470} sizes="(min-width:1024px) 45vw, 92vw" className="h-auto w-full" />
                    </div>
                  </Reveal>
                  <div>
                    <Reveal as="h2" className="text-[clamp(2.25rem,5vw,4.25rem)]">
                      {w.title} <span style={{ color: w.tint }}>{w.titleAccent}</span>
                    </Reveal>
                    <Reveal as="p" delay={0.05} className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-text-3">
                      {w.client}
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
                  Ich zeige lieber ein Design für Ihren Betrieb als zehn für andere. Fordern Sie es kostenlos an, danach entscheiden Sie.
                </p>
              </div>
              <Link href={primaryCta.href} className="btn btn-primary btn-lg">
                {primaryCta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <FinalCta title="Lieber gleich Ihr eigenes sehen?" />
    </>
  );
}
