/** Lenis already smooths the scroll; a second numeric scrub lag would trail the wheel. */
export function scrubFor(): number | boolean {
  if (typeof document === "undefined") return true;
  return document.documentElement.classList.contains("lenis") ? true : 0.4;
}

export function reduceMotion(): boolean {
  return typeof document !== "undefined" && document.documentElement.classList.contains("reduce-motion");
}
