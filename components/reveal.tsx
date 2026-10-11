"use client";

import { useRef, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { useGsapScene } from "@/lib/gsap";
import { reduceMotion } from "@/lib/motion";

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
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "className">;

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  scale: { scale: 0.94 },
  none: {},
};

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  from = "up",
  delay = 0,
  duration = 0.75,
  distance = 28,
  stagger,
  start = "top 85%",
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGsapScene(ref, (gsap, _ScrollTrigger, el) => {
      const targets: Element[] = stagger ? Array.from(el.children) : [el];
      if (reduceMotion()) {
        gsap.set(targets, { opacity: 1, x: 0, y: 0, scale: 1 });
        return;
      }
      const o = offsets[from];
      const tween = gsap.fromTo(
        targets,
        { opacity: 0, x: (o.x ?? 0) * distance, y: (o.y ?? 0) * distance, scale: o.scale ?? 1 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay: Math.min(delay, 0.15),
          ease: "expo.out",
          stagger: stagger ?? 0,
          overwrite: "auto",
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
      // keyboard users tabbing into hidden content must see it at once
      const onFocus = () => tween.progress(1);
      el.addEventListener("focusin", onFocus, { once: true });
      return () => el.removeEventListener("focusin", onFocus);
  });

  return (
    <Tag ref={ref} className={className} data-reveal={stagger ? undefined : ""} data-reveal-group={stagger ? "" : undefined} {...rest}>
      {children}
    </Tag>
  );
}
