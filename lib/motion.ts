/** A short scrub lag so scroll-linked motion feels soft with native scrolling. */
export function scrubFor(): number | boolean {
  return 0.4;
}

export function reduceMotion(): boolean {
  return typeof document !== "undefined" && document.documentElement.classList.contains("reduce-motion");
}
