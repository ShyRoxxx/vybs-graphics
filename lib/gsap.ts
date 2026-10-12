"use client";

import { useEffect, type RefObject } from "react";

type Gsap = typeof import("gsap")["gsap"];
type ScrollTriggerType = typeof import("gsap/ScrollTrigger")["ScrollTrigger"];
type Bundle = { gsap: Gsap; ScrollTrigger: ScrollTriggerType };

let bundle: Promise<Bundle> | null = null;

/** Loads GSAP once, after hydration, so the animation runtime never blocks the first paint. */
/** Chunk failed or hangs (stale deploy, blocker, flaky network): show everything statically. */
function showStatic() {
  document.documentElement.classList.add("reduce-motion");
}

export function loadGsap(): Promise<Bundle> {
  if (!bundle) {
    const guard = window.setTimeout(showStatic, 6000);
    bundle = Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
      .then(([g, s]) => {
        window.clearTimeout(guard);
        g.gsap.registerPlugin(s.ScrollTrigger);
        s.ScrollTrigger.config({ ignoreMobileResize: true });
        return { gsap: g.gsap, ScrollTrigger: s.ScrollTrigger };
      })
      .catch((err: unknown) => {
        window.clearTimeout(guard);
        bundle = null;
        showStatic();
        throw err;
      });
  }
  return bundle;
}

type Scene<T extends HTMLElement> = (gsap: Gsap, ScrollTrigger: ScrollTriggerType, el: T) => void | (() => void);

/** Runs a GSAP scene inside a context scoped to `ref`; everything is reverted on unmount. */
export function useGsapScene<T extends HTMLElement>(ref: RefObject<T | null>, scene: Scene<T>) {
  useEffect(() => {
    let ctx: gsap.Context | undefined;
    let cleanup: void | (() => void);
    let cancelled = false;
    loadGsap().then(({ gsap, ScrollTrigger }) => {
      const el = ref.current;
      if (cancelled || !el) return;
      ctx = gsap.context(() => {
        cleanup = scene(gsap, ScrollTrigger, el);
      }, el);
    }).catch(() => {});
    return () => {
      cancelled = true;
      if (typeof cleanup === "function") cleanup();
      ctx?.revert();
    };
    // the scene closes over stable refs/constants only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
