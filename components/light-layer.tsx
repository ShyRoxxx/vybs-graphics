"use client";

import { useEffect } from "react";

/**
 * Pointer layer for the glass surfaces, one delegated listener, painted by CSS only:
 * - `.lit`: a soft light follows the pointer (`--lx`, `--ly`).
 * - `.tilt`: the element leans a few degrees toward the pointer (`--tx`, `--ty`), and settles back on leave.
 * Only with a mouse; touch screens and reduced motion get the static look.
 */
export function LightLayer() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let last: PointerEvent | null = null;
    let tilted: HTMLElement | null = null;

    const settle = (el: HTMLElement | null) => {
      if (!el) return;
      el.style.setProperty("--tx", "0deg");
      el.style.setProperty("--ty", "0deg");
    };

    const paint = () => {
      frame = 0;
      const e = last;
      if (!e) return;
      const target = e.target as Element | null;

      const lit = target?.closest<HTMLElement>(".lit");
      if (lit) {
        const r = lit.getBoundingClientRect();
        lit.style.setProperty("--lx", `${e.clientX - r.left}px`);
        lit.style.setProperty("--ly", `${e.clientY - r.top}px`);
      }

      if (reduce) return;
      const tilt = target?.closest<HTMLElement>(".tilt") ?? null;
      if (tilt !== tilted) {
        settle(tilted);
        tilted = tilt;
      }
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.setProperty("--tx", `${(x * 9).toFixed(2)}deg`);
        tilt.style.setProperty("--ty", `${(-y * 7).toFixed(2)}deg`);
      }
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onLeave = () => {
      settle(tilted);
      tilted = null;
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
