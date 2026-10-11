"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  from?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  /** Stagger direct children instead of animating the wrapper. */
  stagger?: number;
  start?: string;
  id?: string;
};

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  scale: { scale: 0.92 },
  none: {},
};

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  from = "up",
  delay = 0,
  duration = 0.9,
  distance = 40,
  stagger,
  start = "top 85%",
  id,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const reduce = document.documentElement.classList.contains("reduce-motion");
      const targets: Element[] = stagger ? Array.from(el.children) : [el];
      if (stagger) {
        gsap.set(el, { opacity: 1 });
      }
      if (reduce) {
        gsap.set(targets, { opacity: 1, x: 0, y: 0, scale: 1 });
        return;
      }
      const o = offsets[from];
      gsap.fromTo(
        targets,
        {
          opacity: 0,
          x: (o.x ?? 0) * distance,
          y: (o.y ?? 0) * distance,
          scale: o.scale ?? 1,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: "expo.out",
          stagger: stagger ?? 0,
          overwrite: "auto",
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    },
    { scope: ref, dependencies: [] },
  );

  return (
    <Tag ref={ref} id={id} className={className} data-reveal={stagger ? undefined : ""} data-reveal-group={stagger ? "" : undefined}>
      {children}
    </Tag>
  );
}
