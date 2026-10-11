"use client";

import { useRef } from "react";
import { useGsapScene } from "@/lib/gsap";
import { reduceMotion, scrubFor } from "@/lib/motion";

type Piece = { text: string; accent?: boolean };

const sentence: Piece[] = [
  { text: "Die meisten Betriebe wissen nicht, wie gut ihre Beiträge aussehen könnten." },
  { text: " Deshalb " },
  { text: "zeige ich es Ihnen,", accent: true },
  { text: " bevor Sie etwas bezahlen." },
];

export function Statement() {
  const root = useRef<HTMLElement>(null);

  useGsapScene(root, (gsap, _ScrollTrigger, el) => {
      const words = gsap.utils.toArray<HTMLElement>("[data-word]");
      if (reduceMotion()) {
        gsap.set(words, { opacity: 1 });
        return;
      }
      // deterministic scatter, adapted from Animorio's "sentence that comes together"
      let s = 11;
      const rnd = () => {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
      };
      const between = (a: number, b: number) => a + (b - a) * rnd();
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: el, start: "top 85%", end: "center 45%", scrub: scrubFor() },
      });
      words.forEach((w) => {
        tl.fromTo(
          w,
          {
            x: () => between(-1, 1) * window.innerWidth * 0.22,
            y: () => between(-1, 1) * window.innerHeight * 0.18,
            rotation: between(-24, 24),
            scale: between(0.7, 1.4),
            opacity: 0,
          },
          { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, duration: 1 },
          between(0, 0.35),
        );
      });
  });

  const plain = sentence.map((p) => p.text).join("").replace(/\s+/g, " ").trim();

  return (
    <section ref={root} className="section relative overflow-hidden">
      <div className="container-x">
        <p className="display max-w-[22ch] text-[clamp(1.9rem,4.6vw,4rem)] leading-[1.08] tracking-[-0.025em]">
          <span className="sr-only">{plain}</span>
          {sentence.map((piece, pi) =>
            piece.text.split(/(\s+)/).map((chunk, ci) =>
              /^\s+$/.test(chunk) ? (
                " "
              ) : chunk ? (
                <span
                  key={`${pi}-${ci}`}
                  data-word
                  aria-hidden
                  className={`statement-word inline-block will-change-transform ${piece.accent ? "text-accent" : ""}`}
                >
                  {chunk}
                </span>
              ) : null,
            ),
          )}
        </p>
      </div>
    </section>
  );
}
