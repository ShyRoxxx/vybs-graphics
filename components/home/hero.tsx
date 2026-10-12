"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGsapScene } from "@/lib/gsap";
import { featuredWorks } from "@/lib/content";
import { primaryCta } from "@/lib/site";
import { reduceMotion, scrubFor } from "@/lib/motion";

const lines = ["Professionelles", "Grafikdesign für", "dein Unternehmen."];
const rotations = [-9, 0, 9];

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const stack = useRef<HTMLDivElement>(null);

  useGsapScene(root, (gsap, _ScrollTrigger, el) => {
      if (reduceMotion()) return;
      const scrub = scrubFor();
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]", el);

      // signature moment: the stack of real work fans out while the hero scrolls away
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub },
          })
          .to(cards[0], { xPercent: -46, yPercent: -22, rotate: -18 }, 0)
          .to(cards[1], { yPercent: -36, scale: 1.06 }, 0)
          .to(cards[2], { xPercent: 46, yPercent: -10, rotate: 18 }, 0)
          .to("[data-hero-copy]", { yPercent: 18, opacity: 0.4 }, 0);

        return;
      });
      mm.add("(min-width: 1024px) and (hover: hover) and (pointer: fine)", () => {
        const st = stack.current;
        if (!st) return;
        const qx = gsap.quickTo(st, "rotationY", { duration: 0.8, ease: "power3.out" });
        const qy = gsap.quickTo(st, "rotationX", { duration: 0.8, ease: "power3.out" });
        gsap.set(st, { transformPerspective: 1200 });
        const onMove = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          qx(((e.clientX - r.left) / r.width - 0.5) * 10);
          qy(-((e.clientY - r.top) / r.height - 0.5) * 8);
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
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub },
        });
      });
  });

  return (
    <section ref={root} className="grain relative isolate flex min-h-dvh flex-col justify-end overflow-hidden pt-[7rem] pb-10 lg:pb-14">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb drift-a left-[-15%] top-[-10%] h-[42rem] w-[42rem] bg-[var(--glow)] opacity-60" />
        <div className="orb drift-b right-[-10%] top-[10%] h-[36rem] w-[36rem] bg-accent opacity-[0.12]" />
        <div className="orb drift-a bottom-[-20%] left-[30%] h-[30rem] w-[30rem] bg-[var(--tint-branding)] opacity-[0.10]" style={{ animationDelay: "-9s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_40%,var(--ink)_95%)]" />
      </div>

      <div className="container-x grid items-end gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
        <div data-hero-copy className="relative z-10 max-w-[44rem]">
          <h1 className="text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95]">
            {lines.map((line, i) => (
              <span key={line} className="hero-line block overflow-hidden pb-[0.08em] -mb-[0.08em] pr-[0.12em]">
                <span className={`block ${i === 2 ? "text-accent" : ""}`} style={{ "--d": `${0.15 + i * 0.09}s` } as React.CSSProperties}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p className="hero-fade measure mt-8 text-lg leading-relaxed text-text-2 md:text-xl" style={{ "--d": "0.55s" } as React.CSSProperties}>
            Instagram-Designs, Flyer, Visitenkarten, Logos und weitere Werbemittel für Unternehmen, Selbstständige
            und lokale Betriebe. Feste Preise pro Design. Und bevor du etwas bezahlst, bekommst du ein kostenloses
            Beispieldesign für deinen Betrieb.
          </p>
          <div className="hero-fade mt-9 flex flex-wrap items-center gap-x-7 gap-y-4" style={{ "--d": "0.65s" } as React.CSSProperties}>
            <Link href={primaryCta.href} className="btn btn-primary btn-lg">
              {primaryCta.label}
            </Link>
            <Link href="/portfolio" className="btn btn-ghost btn-lg">
              Arbeiten ansehen
            </Link>
          </div>
          <p className="hero-fade mt-8 text-sm text-text-3" style={{ "--d": "0.75s" } as React.CSSProperties}>
            Kostenloses Beispiel · Festpreise ab 15 € · Komplett digital
          </p>
        </div>

        <div
          ref={stack}
          role="group"
          aria-label="Drei Beispiele aus dem Portfolio: Cready Online, Eifelhaus Auszeit und Nettwerk IT"
          className="relative mx-auto h-[min(68vw,24rem)] w-full max-w-[26rem] lg:h-[34rem] lg:max-w-none"
        >
          {featuredWorks.map((w, i) => {
            const pos = ["left-[2%] top-[14%] lg:left-[6%] lg:top-[20%]", "left-1/2 top-[4%] -translate-x-1/2 lg:top-[6%]", "right-[2%] top-[18%] lg:right-[6%] lg:top-[24%]"][i];
            return (
              <div
                key={w.slug}
                className={`hero-card absolute ${pos} w-[44%] lg:w-[46%]`}
                style={{ zIndex: i === 1 ? 3 : 2, "--d": `${0.35 + i * 0.12}s` } as React.CSSProperties}
              >
                <div
                  data-card
                  className="overflow-hidden rounded-[1.25rem]"
                  style={{
                    transform: `rotate(${rotations[i]}deg)`,
                    boxShadow: `0 40px 80px -30px rgba(0,0,0,.85), 0 0 0 1px rgba(255,255,255,.07), 0 0 120px -40px ${w.tint}`,
                  }}
                >
                  <Image src={w.slides[0].src} alt={w.slides[0].alt} width={1080} height={1350} priority={i === 1} sizes="(min-width: 1024px) 24vw, 50vw" className="h-auto w-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
