import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { SparkleIcon } from "@phosphor-icons/react/dist/ssr/Sparkle";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Allgemeine Anfragen, individuelle Projekte und laufende Zusammenarbeit: So erreichen Sie Vybs Graphics.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Schreiben Sie mir."
        text="Für individuelle Projekte, Logos, komplette Brandings oder eine laufende Zusammenarbeit. Wenn Sie zuerst sehen wollen, wie ich arbeite, ist das kostenlose Beispieldesign der schnellere Weg."
      />
      <section className="pb-[var(--section)]">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal stagger={0.1} className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <a href={`mailto:${site.email}`} className="card group flex items-center gap-5 p-6 transition-colors duration-300 hover:bg-ink-3">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <EnvelopeSimpleIcon size={22} aria-hidden />
              </span>
              <span>
                <span className="block text-sm text-text-3">E-Mail</span>
                <span className="block font-semibold text-text">{site.email}</span>
              </span>
            </a>
            <a href={site.instagram} target="_blank" rel="noopener" className="card group flex items-center gap-5 p-6 transition-colors duration-300 hover:bg-ink-3">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <InstagramLogoIcon size={22} aria-hidden />
              </span>
              <span>
                <span className="block text-sm text-text-3">Instagram</span>
                <span className="block font-semibold text-text">{site.instagramHandle}</span>
              </span>
            </a>
            <Link href="/kostenloses-beispiel" className="card group flex items-center gap-5 bg-accent p-6 text-accent-ink transition-transform duration-300 hover:-translate-y-0.5">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-ink/10">
                <SparkleIcon size={22} weight="fill" aria-hidden />
              </span>
              <span>
                <span className="block text-sm opacity-70">Noch kein Kunde?</span>
                <span className="block font-semibold">Kostenloses Beispieldesign anfordern</span>
              </span>
            </Link>
            <div className="px-2 pt-4 text-sm text-text-3">
              <p>{site.serviceArea}.</p>
              <p className="mt-1">{site.replyTime}.</p>
            </div>
          </Reveal>
          <Reveal from="up" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
