import Link from "next/link";
import { aboutPhillip } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Arrow } from "@/components/ui/arrow";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WorkCollage } from "@/components/work-collage";

export function AboutTeaser() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal from="right" className="relative mx-auto w-full max-w-[22rem]">
            <WorkCollage />
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow n="06">Über mich</Eyebrow>
              <h2 className="max-w-[16ch] text-[clamp(2rem,4vw,3.5rem)]">Du arbeitest direkt mit mir.</h2>
            </Reveal>
            <Reveal as="p" className="measure mt-5 text-lg text-text-2" delay={0.1}>
              {aboutPhillip.intro}
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <Link href="/ueber-mich" className="link-arrow min-h-11 text-text-2 hover:text-text">
                Mehr über mich und die Arbeitsweise
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
