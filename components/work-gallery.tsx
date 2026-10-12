"use client";

import Image from "next/image";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { workCategories } from "@/lib/content";
import { MagnifyingGlassPlusIcon } from "@phosphor-icons/react/dist/ssr/MagnifyingGlassPlus";

const overview: LightboxItem = {
  src: "/images/showcase.webp",
  alt: "Portfolio-Übersicht von Vybs Graphics mit drei Serien: Creative Branding, Carousel Slide und Social Creatives",
  width: 1459,
  height: 645,
  caption: "Die drei Arbeitsfamilien auf einen Blick, so wie Phillip sie selbst zeigt.",
};

const items: LightboxItem[] = [
  overview,
  ...workCategories.map((w) => ({ src: w.image, alt: w.alt, width: 486, height: 470, caption: `${w.title} ${w.titleAccent} · ${w.client}` })),
];

/** Large overview of the real portfolio graphic; every work image on the page opens the same lightbox. */
export function WorkOverview() {
  return (
    <Lightbox items={items}>
      {(open) => (
        <button
          type="button"
          onClick={() => open(0)}
          className="group relative block w-full overflow-hidden rounded-[var(--radius-card)] shadow-[inset_0_0_0_1px_var(--line),0_50px_100px_-50px_rgba(0,0,0,.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Portfolio-Übersicht groß ansehen"
        >
          <Image
            src={overview.src}
            alt={overview.alt}
            width={overview.width}
            height={overview.height}
            sizes="(min-width: 1440px) 1360px, 92vw"
            className="h-auto w-full transition-transform duration-[600ms] ease-[var(--ease-out)] group-hover:scale-[1.02]"
          />
          <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-ink/80 px-4 py-2 text-sm font-semibold text-text opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:bottom-6 md:right-6">
            <MagnifyingGlassPlusIcon size={18} aria-hidden />
            Groß ansehen
          </span>
        </button>
      )}
    </Lightbox>
  );
}

export function WorkImage({ index, className = "" }: { index: number; className?: string }) {
  const w = workCategories[index];
  return (
    <Lightbox items={items}>
      {(open) => (
        <button
          type="button"
          onClick={() => open(index + 1)}
          className={`group relative block w-full overflow-hidden rounded-[var(--radius-card)] shadow-[inset_0_0_0_1px_var(--line),0_40px_80px_-40px_rgba(0,0,0,.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
          aria-label={`${w.title} ${w.titleAccent} groß ansehen`}
        >
          <Image src={w.image} alt={w.alt} width={486} height={470} sizes="(min-width:1024px) 45vw, 92vw" className="h-auto w-full transition-transform duration-[600ms] ease-[var(--ease-out)] group-hover:scale-[1.03]" />
          <span className="pointer-events-none absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink/80 text-text opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            <MagnifyingGlassPlusIcon size={18} aria-hidden />
          </span>
        </button>
      )}
    </Lightbox>
  );
}
