import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { PricePicker } from "@/components/price-picker";
import { FinalCta } from "@/components/final-cta";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leistungen & Preise",
  description: "Instagram-Posts, Carousels, Werbeanzeigen, Flyer, Logo und Branding. Feste Preise ab 15 € pro Design.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Leistungen und"
        accent="Preise."
        text="Alles, was ein kleiner Betrieb nach außen zeigt, aus einer Hand und zum festen Preis. Hier steht, was jede Leistung umfasst, wofür sie sich eignet und in welchem Format Sie die Dateien bekommen."
      >
        <nav aria-label="Leistungen" className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-ink-2 px-4 text-sm font-semibold text-text-2 shadow-[inset_0_0_0_1px_var(--line-strong)] transition-colors hover:text-text">
              {s.title}
            </a>
          ))}
          <a href="#preise" className="inline-flex min-h-11 items-center rounded-full bg-accent/15 px-4 text-sm font-semibold text-accent">
            Preise
          </a>
        </nav>
      </PageHero>

      <section className="pb-[var(--section)]">
        <div className="container-x divide-y divide-line border-t border-line">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-28 gap-8 py-14 md:py-20 lg:grid-cols-[1fr_1.4fr_0.8fr] lg:gap-12">
              <Reveal from="left">
                <h2 className="text-[clamp(1.9rem,3.6vw,3rem)]">{s.title}</h2>
                <p className="mt-3 text-text-2">{s.short}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="measure text-lg text-text-2">{s.description}</p>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[var(--radius-field)] bg-ink-2 p-4 shadow-[inset_0_0_0_1px_var(--line)]">
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-text-3">Wofür</dt>
                    <dd className="mt-1.5 text-text">{s.useCase}</dd>
                  </div>
                  <div className="rounded-[var(--radius-field)] bg-ink-2 p-4 shadow-[inset_0_0_0_1px_var(--line)]">
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-text-3">Format</dt>
                    <dd className="mt-1.5 text-text">{s.format}</dd>
                  </div>
                </dl>
              </Reveal>
              <Reveal from={i % 2 ? "scale" : "right"} delay={0.15} className="relative">
                <div aria-hidden className="orb absolute inset-0 -z-10 opacity-25" style={{ background: s.tint }} />
                <div className="overflow-hidden rounded-[var(--radius-card)] shadow-[inset_0_0_0_1px_var(--line)]" style={{ rotate: i % 2 ? "3deg" : "-3deg" }}>
                  <Image src={s.image} alt="" width={486} height={470} sizes="(min-width:1024px) 22vw, 70vw" className="h-auto w-full" />
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section id="preise" className="scroll-mt-24 pb-[var(--section)]">
        <div className="container-x">
          <Reveal as="h2" className="max-w-[18ch] text-[clamp(2.25rem,5vw,4.25rem)]">
            Drei Stufen, ein Preis pro Design.
          </Reveal>
          <Reveal as="p" className="measure mt-6 text-text-2" delay={0.1}>
            Wählen Sie die Stufe, die zu Ihrem Vorhaben passt. Unsicher? Dann fordern Sie einfach das kostenlose
            Beispiel an, und wir schauen gemeinsam, was Sie wirklich brauchen.
          </Reveal>
          <Reveal className="mt-10" delay={0.15}>
            <PricePicker />
          </Reveal>
          <Reveal className="mt-8 text-text-2" delay={0.2}>
            <p className="measure">
              Für Logos, komplette Brandings und laufende Betreuung bekommen Sie ein Angebot mit Festpreis.{" "}
              <Link href="/kontakt" className="link-u text-text">
                Schreiben Sie mir kurz, worum es geht.
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
