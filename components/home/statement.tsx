"use client";

import { useRef } from "react";
import { useGsapScene } from "@/lib/gsap";
import { reduceMotion, scrubFor } from "@/lib/motion";

type Piece = { text: string; accent?: boolean };

const sentence: Piece[] = [
  { text: "Du musst nicht erst bezahlen, um zu sehen, ob dir mein Stil gefällt." },
  { text: " Ich gestalte " },
  { text: "zuerst ein Beispiel für deinen Betrieb,", accent: true },
  { text: " dann entscheidest du." },
];

export function Statement() {
  const root = useRef<HTMLElement>(null);

  useGsapScene(root, (gsap, _ScrollTrigger, el) => {
      const words = gsap.utils.toArray<HTMLElement>("[data-word]", el);
      if (reduceMotion()) {
        gsap.set(words, { opacity: 1 });
        return;
      }
      // words sharpen into place while the sentence scrolls into view: calm, legible, scrubbed
      gsap.fromTo(
        words,
        { y: 28, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          stagger: 0.03,
          scrollTrigger: { trigger: el, start: "top 80%", end: "center 50%", scrub: scrubFor() },
        },
      );
  });

  const plain = sentence.map((p) => p.text).join("").replace(/\s+/g, " ").trim();

  return (
    <section ref={root} className="relative overflow-hidden py-[clamp(4rem,8vw,7rem)]">
      <div className="container-x">
        <p className="display mx-auto max-w-[24ch] text-center text-[clamp(1.9rem,4.6vw,4rem)] leading-[1.08] tracking-[-0.025em]">
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
