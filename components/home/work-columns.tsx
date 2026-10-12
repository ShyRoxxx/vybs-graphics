"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGsapScene } from "@/lib/gsap";
import { workCategories } from "@/lib/content";
import { Arrow } from "@/components/ui/arrow";
import { Reveal } from "@/components/reveal";
import { reduceMotion, scrubFor } from "@/lib/motion";

export function WorkColumns() {
  const root = useRef<HTMLElement>(null);

  useGsapScene(root, (gsap, _ScrollTrigger, el) => {
      if (reduceMotion()) return;
      const scrub = scrubFor();
      const mm = gsap.matchMedia();
      // adapted from Animorio's "columns going opposite ways": outer columns rise, middle sinks, no pinning
      mm.add("(min-width: 1024px)", () => {
        const cols = gsap.utils.toArray<HTMLElement>("[data-col]");
        cols.forEach((c, i) => {
          const dir = i === 1 ? 1 : -1;
          gsap.fromTo(
            c,
            { y: dir * -90 },
            {
              y: dir * 90,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub },
            },
          );
        });
      });
      // image zoom per card on hover handled by CSS; subtle parallax for images
      gsap.utils.toArray<HTMLElement>("[data-img]").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -6 },
          { yPercent: 6, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub } },
        );
      });
  });

  return (
    <section ref={root} id="arbeiten" className="section relative overflow-hidden scroll-mt-20">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal as="h2" className="max-w-[16ch] text-[clamp(2.25rem,5.5vw,4.75rem)]">
            Ausgewählte Arbeiten.
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/portfolio" className="link-arrow min-h-11 text-text-2 hover:text-text">
              Alle Arbeiten ansehen
              <Arrow />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {workCategories.map((w, i) => (
            <Reveal key={w.slug} from={i === 1 ? "down" : "up"} delay={i * 0.08} className={i === 1 ? "lg:mt-24" : ""}>
              <article data-col className="group relative">
                <div
                  aria-hidden
                  className="orb absolute left-1/2 top-[30%] -z-10 h-[22rem] w-[22rem] -translate-x-1/2 opacity-[0.22] transition-opacity duration-500 group-hover:opacity-[0.4]"
                  style={{ background: w.tint }}
                />
                <Link href={`/portfolio#${w.slug}`} className="block overflow-hidden rounded-[var(--radius-card)] shadow-[inset_0_0_0_1px_var(--line)]" aria-label={`${w.title} ${w.titleAccent}: Arbeiten ansehen`}>
                  <div className="relative aspect-[486/470] overflow-hidden bg-ink-2">
                    <Image
                      data-img
                      src={w.image}
                      alt={w.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 90vw"
                      className="scale-[1.14] object-cover transition-transform duration-[400ms] ease-[var(--ease-out)] group-hover:scale-[1.2]"
                    />
                  </div>
                </Link>
                <div className="mt-6">
                  <h3 className="text-[clamp(1.75rem,3vw,2.5rem)]">
                    {w.title} <span style={{ color: w.tint }}>{w.titleAccent}</span>
                  </h3>
                  <p className="mt-1 text-sm text-text-3">
                    <span className="font-semibold text-text-2">{w.kind}</span> · {w.client} · {w.format}
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
