export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DUR = { fast: 0.15, ui: 0.2, panel: 0.3 } as const;

/** Lenis already smooths the scroll; a second numeric scrub lag would trail the wheel. */
export function scrubFor(): number | boolean {
  if (typeof document === "undefined") return true;
  return document.documentElement.classList.contains("lenis") ? true : 0.4;
}

export function reduceMotion(): boolean {
  return typeof document !== "undefined" && document.documentElement.classList.contains("reduce-motion");
}
