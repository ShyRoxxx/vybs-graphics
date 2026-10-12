import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/final-cta";
import { aboutPhillip } from "@/lib/content";
import { site } from "@/lib/site";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";

export const metadata: Metadata = {
  title: "Über Phillip",
  description: "Wer hinter vybs.graphics steht, wie die Arbeit abläuft und warum das erste Design kostenlos ist.",
  alternates: { canonical: "/ueber-mich" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="Ein Designer, der zuerst" accent="hinschaut." text={aboutPhillip.intro} />

      <section className="pb-[var(--section)]">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal from="left" className="relative lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-[radial-gradient(circle_at_30%_20%,#1b6b8f_0%,#0d1420_55%,#070b12_100%)] shadow-[inset_0_0_0_1px_var(--line)]">
              <div aria-hidden className="orb left-[15%] top-[25%] h-[70%] w-[70%] bg-accent opacity-25" />
              <Image src="/images/logo.png" alt="Logo von Vybs Graphics" fill sizes="(min-width:1024px) 40vw, 90vw" className="object-contain p-[18%]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="display text-2xl text-white">Phillip</p>
                <p className="text-sm text-text-2">Gestaltung, Vybs Graphics</p>
              </div>
            </div>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-arrow mt-5 inline-flex min-h-11 items-center gap-2 text-text-2 hover:text-text">
              <InstagramLogoIcon size={20} aria-hidden />
              Aktuelle Arbeiten auf Instagram: {site.instagramHandle}
            </a>
          </Reveal>

          <div className="space-y-6 text-lg text-text-2">
            {aboutPhillip.paragraphs.map((p, i) => (
              <Reveal key={i} as="p" className="measure" delay={i * 0.05}>
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[var(--section)]">
        <div className="container-x">
          <Reveal as="h2" className="max-w-[16ch] text-[clamp(2.25rem,5vw,4.25rem)]">
            Vier Dinge, auf die du dich verlassen kannst.
          </Reveal>
          <Reveal stagger={0.1} className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-line sm:grid-cols-2">
            {aboutPhillip.principles.map((p) => (
              <div key={p.title} className="group bg-ink p-8 transition-colors duration-300 hover:bg-ink-2">
                <h3 className="text-[1.6rem]">{p.title}</h3>
                <p className="mt-3 text-text-2">{p.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pb-[var(--section)]">
        <div className="container-x">
          <Reveal className="card relative overflow-hidden p-8 md:p-12">
            <div aria-hidden className="orb right-[-10%] top-[-50%] h-[20rem] w-[20rem] bg-accent opacity-20" />
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)]">Für wen ich bisher gearbeitet habe.</h2>
                <p className="measure mt-4 text-text-2">
                  Eine Gebäudereinigung, zwei Beratungen und einige kleinere Betriebe aus dem Umfeld. Die drei Serien, die
                  am meisten über die Arbeitsweise sagen, stehen mit Hintergrund im Portfolio.
                </p>
              </div>
              <Link href="/portfolio" className="btn btn-ghost btn-lg">
                Zu den Arbeiten
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
