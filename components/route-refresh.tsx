"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { loadGsap } from "@/lib/gsap";

/**
 * Native scrolling (no smooth-scroll library). On every route change: start at the top, unless the
 * URL points to an anchor, and let ScrollTrigger re-measure once layout and fonts have settled.
 */
export function RouteRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
    let cancelled = false;
    loadGsap()
      .then(({ ScrollTrigger }) => {
        if (cancelled) return;
        requestAnimationFrame(() => ScrollTrigger.refresh());
        document.fonts?.ready.then(() => !cancelled && ScrollTrigger.refresh());
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
