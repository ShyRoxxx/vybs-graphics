import Image from "next/image";
import Link from "next/link";
import { aboutPhillip } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Arrow } from "@/components/ui/arrow";

export function AboutTeaser() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal from="right" className="relative mx-auto w-full max-w-[22rem]">
            <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] bg-[radial-gradient(circle_at_30%_20%,#1b6b8f_0%,#0d1420_55%,#070b12_100%)] shadow-[inset_0_0_0_1px_var(--line)]">
              <div aria-hidden className="orb left-[20%] top-[20%] h-[60%] w-[60%] bg-accent opacity-30" />
              <Image src="/images/logo.png" alt="Logo von Vybs Graphics: weißes VG-Monogramm" fill sizes="(min-width:1024px) 22rem, 80vw" className="object-contain p-14" />
            </div>
          </Reveal>
          <div>
            <Reveal as="h2" className="max-w-[16ch] text-[clamp(2.25rem,5.5vw,4.75rem)]">
              Ein Designer, kein Ticketsystem.
            </Reveal>
            <Reveal as="p" className="measure mt-6 text-lg text-text-2" delay={0.1}>
              {aboutPhillip.intro}
            </Reveal>
            <Reveal as="p" className="measure mt-4 text-text-2" delay={0.15}>
              {aboutPhillip.paragraphs[2]}
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <Link href="/ueber-mich" className="link-arrow min-h-11 text-text-2 hover:text-text">
                Mehr über Phillip und die Arbeitsweise
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
