"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { services } from "@/lib/content";
import { Arrow } from "@/components/ui/arrow";
import { Reveal } from "@/components/reveal";
import { PricePicker } from "@/components/price-picker";

gsap.registerPlugin(useGSAP);

export function Services() {
  const root = useRef<HTMLElement>(null);
  const floater = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useGSAP(
    () => {
      const el = root.current;
      const fl = floater.current;
      if (!el || !fl) return;
      const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const reduce = document.documentElement.classList.contains("reduce-motion");
      if (!fine || reduce) return;

      const toX = gsap.quickTo(fl, "x", { duration: 0.55, ease: "power3.out" });
      const toY = gsap.quickTo(fl, "y", { duration: 0.55, ease: "power3.out" });
      const toR = gsap.quickTo(fl, "rotation", { duration: 0.7, ease: "power3.out" });
      let lastX = 0;

      const list = el.querySelector<HTMLElement>("[data-list]");
      if (!list) return;
      const onMove = (e: PointerEvent) => {
        const r = list.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        toX(x + 32);
        toY(y - 120);
        const vx = gsap.utils.clamp(-14, 14, (e.clientX - lastX) * 0.6);
        lastX = e.clientX;
        toR(vx);
      };
      const onEnter = () => gsap.to(fl, { opacity: 1, scale: 1, duration: 0.35, ease: "power3.out" });
      const onLeave = () => gsap.to(fl, { opacity: 0, scale: 0.9, duration: 0.3, ease: "power3.out" });
      list.addEventListener("pointermove", onMove);
      list.addEventListener("pointerenter", onEnter);
      list.addEventListener("pointerleave", onLeave);
      return () => {
        list.removeEventListener("pointermove", onMove);
        list.removeEventListener("pointerenter", onEnter);
        list.removeEventListener("pointerleave", onLeave);
      };
    },
    { scope: root },
  );

  const shown = services[active ?? 0];

  return (
    <section ref={root} id="leistungen" className="section relative scroll-mt-20">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal as="h2" className="max-w-[14ch] text-[clamp(2.25rem,5.5vw,4.75rem)]">
              Was Sie bei mir bekommen.
            </Reveal>
            <Reveal as="p" className="measure mt-6 text-text-2" delay={0.1}>
              Alles, was ein kleiner Betrieb zeigt: im Feed, in der Anzeige, auf dem Tresen. Fahren Sie über die
              Liste, um ein Beispiel zu sehen, oder öffnen Sie die Leistungsseite für Details und Formate.
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <Link href="/leistungen" className="link-arrow min-h-11 text-text-2 hover:text-text">
                Alle Leistungen und Formate
                <Arrow />
              </Link>
            </Reveal>
          </div>

          <div className="relative">
            <div
              ref={floater}
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 z-20 hidden w-[15rem] overflow-hidden rounded-2xl opacity-0 shadow-[0_30px_60px_-20px_rgba(0,0,0,.8),0_0_0_1px_rgba(255,255,255,.08)] lg:block"
              style={{ transform: "scale(0.9)" }}
            >
              <Image src={shown.image} alt="" width={486} height={470} sizes="240px" className="h-auto w-full" />
            </div>

            <Reveal as="ul" data-list stagger={0.07} className="divide-y divide-line border-y border-line" id="leistungsliste">
              {services.map((s, i) => (
                <li key={s.slug} className="group" onPointerEnter={() => setActive(i)} onFocus={() => setActive(i)}>
                  <Link
                    href={`/leistungen#${s.slug}`}
                    className="grid min-h-[5.5rem] grid-cols-[1fr_auto] items-center gap-6 py-6 transition-[padding] duration-300 ease-[var(--ease-out)] hover:pl-3"
                  >
                    <div>
                      <h3 className="text-[clamp(1.5rem,2.6vw,2.125rem)] transition-colors duration-200 group-hover:text-accent">{s.title}</h3>
                      <p className="mt-1.5 text-text-2">{s.short}</p>
                    </div>
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full shadow-[inset_0_0_0_1px_var(--line-strong)] transition-all duration-300 group-hover:bg-accent group-hover:text-accent-ink group-hover:shadow-none"
                      aria-hidden
                    >
                      <Arrow className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </span>
                  </Link>
                </li>
              ))}
            </Reveal>
          </div>
        </div>

        <div id="preise" className="mt-24 scroll-mt-24 lg:mt-32">
          <Reveal as="h2" className="max-w-[16ch] text-[clamp(2rem,4.5vw,3.75rem)]">
            Feste Preise. Keine Stundenzettel.
          </Reveal>
          <Reveal className="mt-10" delay={0.1}>
            <PricePicker />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
