"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGsapScene } from "@/lib/gsap";
import { featuredWorks } from "@/lib/content";
import { primaryCta } from "@/lib/site";
import { reduceMotion, scrubFor } from "@/lib/motion";

const lines = ["Professionelles", "Grafikdesign für", "dein Unternehmen."];
const rotations = [-12, 0, 12];
const chips = ["Kostenloses Beispiel vorab", "Festpreise ab 15 €", "Komplett digital"];

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
    <section ref={root} className="relative isolate flex min-h-dvh flex-col justify-end overflow-hidden pt-[7rem] pb-10 lg:pb-14">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb drift-a left-[-15%] top-[-10%] h-[42rem] w-[42rem] bg-[var(--glow)] opacity-60" />
        <div className="orb drift-b right-[-10%] top-[10%] h-[36rem] w-[36rem] bg-accent opacity-[0.12]" />
        <div className="orb drift-a bottom-[-20%] left-[30%] h-[30rem] w-[30rem] bg-[var(--tint-branding)] opacity-[0.10]" style={{ animationDelay: "-9s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_40%,var(--ink)_95%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_bottom,transparent,var(--ink))]" />
      </div>

      <div className="container-x grid items-end gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-8">
        <div data-hero-copy className="relative z-10 max-w-[48rem]">
          <h1 className="text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95]">
            {lines.map((line, i) => (
              <span key={line} className="hero-line block overflow-hidden pb-[0.08em] -mb-[0.08em] pr-[0.12em]">
                <span className={`block ${i === 2 ? "text-accent" : ""}`} style={{ "--d": `${0.05 + i * 0.07}s` } as React.CSSProperties}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p className="hero-fade measure mt-7 text-lg leading-relaxed text-text-2 md:text-xl" style={{ "--d": "0.3s" } as React.CSSProperties}>
            Instagram-Designs, Flyer, Visitenkarten und Logos für Unternehmen, Selbstständige und lokale Betriebe.
            Du siehst dein Design, bevor du etwas bezahlst.
          </p>
          <div className="hero-fade mt-9 flex flex-wrap items-center gap-x-7 gap-y-4" style={{ "--d": "0.38s" } as React.CSSProperties}>
            <Link href={primaryCta.href} className="btn btn-primary btn-lg">
              {primaryCta.label}
            </Link>
            <Link href="/portfolio" className="btn btn-ghost btn-lg">
              Arbeiten ansehen
            </Link>
          </div>
          <ul className="hero-fade mt-8 flex flex-wrap gap-2" style={{ "--d": "0.46s" } as React.CSSProperties}>
            {chips.map((c) => (
              <li key={c} className="inline-flex items-center rounded-full bg-ink-2/80 px-3.5 py-1.5 text-sm text-text-2 shadow-[inset_0_0_0_1px_var(--line-strong)]">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={stack}
          role="group"
          aria-label="Drei Beispiele aus dem Portfolio: Cready Online, Eifelhaus Auszeit und Nettwerk IT"
          className="relative mx-auto h-[min(68vw,24rem)] w-full max-w-[26rem] lg:h-[34rem] lg:max-w-none"
        >
          {featuredWorks.map((w, i) => {
            const pos = ["left-0 top-[16%] lg:top-[22%]", "left-1/2 top-[2%] -translate-x-1/2 lg:top-0", "right-0 top-[20%] lg:top-[26%]"][i];
            return (
              <div
                key={w.slug}
                className={`hero-card absolute ${pos} ${i === 1 ? "w-[44%] lg:w-[42%]" : "w-[40%]"}`}
                style={{ zIndex: i === 1 ? 3 : 2, "--d": `${0.2 + i * 0.1}s` } as React.CSSProperties}
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
