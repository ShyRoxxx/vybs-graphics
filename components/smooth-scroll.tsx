"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";
import { loadGsap } from "@/lib/gsap";

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = document.documentElement.classList.contains("reduce-motion");
    const touch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (reduce || touch) return;

    let lenis: Lenis | undefined;
    let cancelled = false;
    let teardown: (() => void) | undefined;

    Promise.all([import("lenis"), loadGsap()]).then(([{ default: LenisCtor }, { gsap, ScrollTrigger }]) => {
      if (cancelled) return;
      lenis = new LenisCtor({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

      const instance = lenis;
      const onScroll = () => ScrollTrigger.update();
      instance.on("scroll", onScroll);
      const raf = (time: number) => instance.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

    const onAnchor = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = (event.target as HTMLElement | null)?.closest("a[href^='#']");
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#" || id === "#inhalt") return;
      const el = document.querySelector<HTMLElement>(id);
      if (!el) return;
      event.preventDefault();
      history.pushState(null, "", id);
      instance.scrollTo(el, {
        offset: -88,
        onComplete: () => {
          if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
          el.focus({ preventScroll: true });
        },
      });
    };
      document.addEventListener("click", onAnchor);
      teardown = () => {
        document.removeEventListener("click", onAnchor);
        gsap.ticker.remove(raf);
        instance.destroy();
      };
    });

    return () => {
      cancelled = true;
      teardown?.();
    };
  }, []);

  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
    let cancelled = false;
    loadGsap().then(({ ScrollTrigger }) => {
      if (cancelled) return;
      requestAnimationFrame(() => ScrollTrigger.refresh());
      document.fonts?.ready.then(() => !cancelled && ScrollTrigger.refresh());
    }).catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
