import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { PriceList } from "@/components/price-list";
import { FinalCta } from "@/components/final-cta";
import { ServicePreview } from "@/components/service-preview";
import { serviceGroups } from "@/lib/content";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

export const metadata: Metadata = {
  title: "Leistungen & Preise",
  description: "Social Media Design, Printdesign, Branding. Feste Preise pro Design, kostenloses Beispiel vorab.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Leistungen &"
        accent="Preise."
        text="Alles, was ein Unternehmen nach außen zeigt, aus einer Hand und zum festen Preis. Hier steht, was jede Leistung umfasst, was sie kostet und was im Preis enthalten ist. Für jede davon kannst du vorab ein kostenloses Beispiel anfordern."
      >
        <nav aria-label="Leistungsbereiche" className="flex flex-wrap gap-2">
          {serviceGroups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="inline-flex min-h-11 items-center rounded-full bg-ink-2 px-4 text-sm font-semibold text-text-2 shadow-[inset_0_0_0_1px_var(--line-strong)] transition-colors hover:text-text">
              {g.title}
            </a>
          ))}
          <a href="#preise" className="inline-flex min-h-11 items-center rounded-full bg-accent/15 px-4 text-sm font-semibold text-accent">
            Alle Preise
          </a>
        </nav>
      </PageHero>

      <section className="overflow-x-clip pb-[var(--section)]">
        <div className="container-x divide-y divide-line border-t border-line">
          {serviceGroups.map((g, i) => (
            <article key={g.id} id={g.id} className="grid scroll-mt-28 gap-8 py-14 md:py-20 lg:grid-cols-[1fr_1.2fr_0.9fr] lg:items-center lg:gap-12">
              <Reveal from="left">
                <h2 className="text-[clamp(1.9rem,3.6vw,3rem)]">{g.title}</h2>
                <p className="mt-3 text-text-2">{g.short}</p>
                <Link href={`#preise-${g.id}`} className="link-arrow mt-6 min-h-11 text-sm text-text-2 hover:text-text">
                  Zu den Preisen
                </Link>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="measure text-lg text-text-2">{g.description}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: `${g.tint}26`, color: g.tint }}>
                        <CheckIcon size={12} weight="bold" aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal from={i % 2 ? "scale" : "right"} delay={0.1} className="relative">
                <div aria-hidden className="orb absolute inset-[5%] -z-10 opacity-25" style={{ background: g.tint }} />
                <ServicePreview group={g.id} />
                <p className="mt-4 text-center text-xs text-text-3">Beispielmotiv zur Veranschaulichung</p>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section id="preise" className="scroll-mt-24 pb-[var(--section)]">
        <div className="container-x">
          <Reveal as="h2" className="max-w-[18ch] text-[clamp(2.25rem,5vw,4.25rem)]">
            Feste Preise pro Design.
          </Reveal>
          <Reveal as="p" className="measure mt-6 text-text-2" delay={0.1}>
            Jede Leistung hat einen klaren Preis und eine klare Leistung dahinter. Bei einem Carousel gilt der Preis für
            das komplette Carousel bis fünf Slides, nicht pro Slide. Wenn sich der Umfang ändert, sage ich dir das vorher.
          </Reveal>
          <div className="mt-12 lg:mt-16">
            <PriceList />
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
