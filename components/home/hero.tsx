"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { workCategories } from "@/lib/content";
import { primaryCta } from "@/lib/site";
import { Arrow } from "@/components/ui/arrow";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const lines = ["Erst das Design.", "Dann die", "Entscheidung."];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const stack = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const reduce = document.documentElement.classList.contains("reduce-motion");
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
      const words = gsap.utils.toArray<HTMLElement>("[data-line] > span");
      const rest = gsap.utils.toArray<HTMLElement>("[data-hero-fade]");

      if (reduce) {
        gsap.set([words, rest, cards], { opacity: 1, y: 0, x: 0, rotate: (i: number, t: Element) => Number((t as HTMLElement).dataset.rot ?? 0) });
        return;
      }

      // entrance
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(words, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.09 }, 0.15)
        .fromTo(rest, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 }, 0.55)
        .fromTo(
          cards,
          { y: 160, opacity: 0, rotate: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: (i, t) => Number((t as HTMLElement).dataset.rot ?? 0),
            duration: 1.3,
            stagger: 0.12,
            ease: "expo.out",
          },
          0.35,
        );

      // signature: the stack fans out while scrolling away
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const spread = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 0.6 },
        });
        spread
          .to(cards[0], { xPercent: -46, yPercent: -22, rotate: -18 }, 0)
          .to(cards[1], { yPercent: -36, scale: 1.06 }, 0)
          .to(cards[2], { xPercent: 46, yPercent: -10, rotate: 18 }, 0)
          .to("[data-hero-copy]", { yPercent: 18, opacity: 0.25 }, 0);

        // pointer parallax on the whole stack
        const st = stack.current;
        if (!st) return;
        const qx = gsap.quickTo(st, "rotationY", { duration: 0.8, ease: "power3.out" });
        const qy = gsap.quickTo(st, "rotationX", { duration: 0.8, ease: "power3.out" });
        gsap.set(st, { transformPerspective: 1200 });
        const onMove = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          qx(px * 10);
          qy(-py * 8);
        };
        const onLeave = () => {
          qx(0);
          qy(0);
        };
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerleave", onLeave);
        return () => {
          el.removeEventListener("pointermove", onMove);
          el.removeEventListener("pointerleave", onLeave);
        };
      });
      mm.add("(max-width: 1023px)", () => {
        gsap.to(cards, {
          yPercent: (i) => -14 * (i + 1),
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 0.6 },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="grain relative isolate flex min-h-dvh flex-col justify-end overflow-hidden pt-[7rem] pb-10 lg:pb-14">
      {/* ambient light from the brand */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb drift-a left-[-15%] top-[-10%] h-[42rem] w-[42rem] bg-[var(--glow)] opacity-60" />
        <div className="orb drift-b right-[-10%] top-[10%] h-[36rem] w-[36rem] bg-accent opacity-[0.12]" />
        <div className="orb drift-a bottom-[-20%] left-[30%] h-[30rem] w-[30rem] bg-[var(--tint-branding)] opacity-[0.10]" style={{ animationDelay: "-9s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_40%,var(--ink)_95%)]" />
      </div>

      <div className="container-x grid items-end gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
        <div data-hero-copy className="relative z-10 max-w-[40rem]">
          <h1 className="text-[clamp(2.9rem,8.6vw,7.5rem)] leading-[0.95]">
            {lines.map((line, i) => (
              <span key={line} data-line className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
                <span className={`block ${i === 0 ? "text-accent" : ""}`}>{line}</span>
              </span>
            ))}
          </h1>
          <p data-hero-fade className="measure mt-8 text-lg leading-relaxed text-text-2 md:text-xl">
            Vybs Graphics gestaltet Instagram-Posts, Carousels, Anzeigen, Flyer und Logos für Unternehmen,
            Selbstständige und lokale Geschäfte. Das erste Beispieldesign für Ihren Betrieb ist kostenlos und
            unverbindlich.
          </p>
          <div data-hero-fade className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href={primaryCta.href} className="btn btn-primary btn-lg">
              {primaryCta.label}
            </Link>
            <a href="#arbeiten" className="link-arrow min-h-11 text-text-2 hover:text-text">
              Arbeiten ansehen
              <Arrow className="h-4 w-4 rotate-90" />
            </a>
          </div>
          <p data-hero-fade className="mt-8 text-sm text-text-3">
            Ab 15 € pro Design · Komplett digital · Ohne Vertragslaufzeit
          </p>
        </div>

        <div ref={stack} className="relative mx-auto h-[min(60vw,22rem)] w-full max-w-[26rem] lg:h-[32rem] lg:max-w-none" aria-label="Drei Beispiele aus dem Portfolio: Creative Branding, Carousel Slide und Social Creatives">
          {workCategories.map((w, i) => {
            const rot = [-9, 0, 9][i];
            const pos = ["left-[2%] top-[14%] lg:left-[6%] lg:top-[20%]", "left-1/2 top-[4%] -translate-x-1/2 lg:top-[6%]", "right-[2%] top-[18%] lg:right-[6%] lg:top-[24%]"][i];
            return (
              <div
                key={w.slug}
                data-card
                data-rot={rot}
                className={`absolute ${pos} w-[52%] overflow-hidden rounded-[1.25rem] lg:w-[54%]`}
                style={{
                  zIndex: i === 1 ? 3 : 2,
                  boxShadow: `0 40px 80px -30px rgba(0,0,0,.85), 0 0 0 1px rgba(255,255,255,.07), 0 0 120px -40px ${w.tint}`,
                  opacity: 0,
                }}
              >
                <Image
                  src={w.image}
                  alt={w.alt}
                  width={486}
                  height={470}
                  priority={i === 1}
                  sizes="(min-width: 1024px) 30vw, 60vw"
                  className="h-auto w-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
