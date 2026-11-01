"use client";

import Image from "next/image";
import type { Work } from "@/lib/content";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { MagnifyingGlassPlusIcon } from "@phosphor-icons/react/dist/ssr/MagnifyingGlassPlus";

/** All slides of one work side by side: swipeable with snap on phones, a row on desktop. Each slide opens the lightbox. */
export function WorkSlides({ work, priority = false }: { work: Work; priority?: boolean }) {
  const items: LightboxItem[] = work.slides.map((s, i) => ({
    src: s.src,
    alt: s.alt,
    width: 1080,
    height: work.ratio === "1 / 1" ? 1080 : 1350,
    caption: `${work.client} · ${work.slides.length > 1 ? `Slide ${i + 1} von ${work.slides.length}` : work.format}`,
  }));
  const cols = work.slides.length;
  return (
    <Lightbox items={items}>
      {(open) => (
        <ul
          className="-mx-[var(--gutter)] flex snap-x snap-mandatory gap-3 overflow-x-auto px-[var(--gutter)] pb-3 [scrollbar-width:none] md:mx-0 md:grid md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
          style={{ gridTemplateColumns: `repeat(${Math.min(cols, 4)}, minmax(0, 1fr))` }}
          aria-label={`${work.client}: ${work.format}`}
        >
          {work.slides.map((s, i) => (
            <li key={s.src} className="w-[78%] shrink-0 snap-center sm:w-[60%] md:w-auto">
              <button
                type="button"
                onClick={() => open(i)}
                className="group relative block w-full overflow-hidden rounded-[1.1rem] shadow-[inset_0_0_0_1px_var(--line),0_30px_60px_-30px_rgba(18,18,18,.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                aria-label={`${work.client}, Slide ${i + 1} von ${cols} groß ansehen`}
                style={{ aspectRatio: work.ratio }}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  priority={priority && i === 0}
                  sizes="(min-width: 1024px) 22vw, (min-width: 768px) 40vw, 78vw"
                  className="object-cover transition-transform duration-[500ms] ease-[var(--ease-out)] group-hover:scale-[1.03]"
                />
                {cols > 1 && (
                  <span className="pointer-events-none absolute bottom-3 left-3 rounded-[var(--radius-field)] bg-ink px-2 py-0.5 text-xs font-medium text-text">
                    {i + 1}/{cols}
                  </span>
                )}
                <span className="pointer-events-none absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-field)] bg-ink text-text opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <MagnifyingGlassPlusIcon size={18} aria-hidden />
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </Lightbox>
  );
}
