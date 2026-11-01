"use client";

import { useRef } from "react";
import Link from "next/link";
import { featuredWorks } from "@/lib/content";
import { Arrow } from "@/components/ui/arrow";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WorkStack } from "@/components/work-stack";
import { useGsapScene } from "@/lib/gsap";
import { reduceMotion, scrubFor } from "@/lib/motion";

export function WorkColumns() {
  const root = useRef<HTMLElement>(null);

  useGsapScene(root, (gsap, _ScrollTrigger, el) => {
    if (reduceMotion()) return;
    const scrub = scrubFor();
    const mm = gsap.matchMedia();
    // adapted from Animorio's "columns going opposite ways": outer columns rise, middle sinks, no pinning
    mm.add("(min-width: 1024px)", () => {
      gsap.utils.toArray<HTMLElement>("[data-col]", el).forEach((c, i) => {
        const dir = i === 1 ? 1 : -1;
        gsap.fromTo(c, { y: dir * -80 }, { y: dir * 80, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub } });
      });
    });
  });

  return (
    <section ref={root} id="arbeiten" className="section relative overflow-x-clip scroll-mt-20">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <Eyebrow>Arbeiten</Eyebrow>
            <h2 className="max-w-[16ch] t-section">Ausgewählte Arbeiten.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/portfolio" className="link-arrow min-h-11 text-text-2 hover:text-text">
              Alle Arbeiten ansehen
              <Arrow />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {featuredWorks.map((w, i) => (
            <Reveal key={w.slug} from={i === 1 ? "down" : "up"} delay={i * 0.08} className={i === 1 ? "lg:mt-20" : ""}>
              <article data-col className="group relative">
                <WorkStack work={w} />
                <div className="mt-7">
                  <h3 className="t-title">{w.client}</h3>
                  <p className="mt-1.5 text-sm text-text-3">
                    <span className="font-semibold text-text-2">{w.kind}</span> · {w.format}
                  </p>
                  <p className="mt-4 text-text-2">{w.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
