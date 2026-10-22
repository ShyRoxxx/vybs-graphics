import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/lib/content";

/** A work shown as a fanned stack of its slides, the first slide on top. Links to the portfolio entry. */
export function WorkStack({ work, sizes = "(min-width: 1024px) 30vw, 90vw", priority = false }: { work: Work; sizes?: string; priority?: boolean }) {
  const back = work.slides.slice(1, 3);
  return (
    <Link href={`/portfolio#${work.slug}`} className="group relative block focus-visible:outline-none" aria-label={`${work.client}: ${work.format} ansehen`}>
      <div className="relative mx-auto w-[86%]" style={{ aspectRatio: work.ratio }}>
        {back.map((s, i) => (
          <div
            key={s.src}
            aria-hidden
            className="absolute inset-0 overflow-hidden rounded-[1.1rem] shadow-[inset_0_0_0_1px_var(--line)] transition-transform duration-500 ease-[var(--ease-out)]"
            style={{
              transform: `rotate(${(i + 1) * (i % 2 ? -4 : 5)}deg) translateY(${(i + 1) * 2}%)`,
              zIndex: back.length - i,
              opacity: 0.85 - i * 0.25,
            }}
          >
            <Image src={s.src} alt="" fill sizes={sizes} className="object-cover" />
          </div>
        ))}
        <div
          className="relative overflow-hidden rounded-[1.1rem] shadow-[inset_0_0_0_1px_var(--line),0_40px_80px_-40px_rgba(0,0,0,.9)] transition-transform duration-500 ease-[var(--ease-out)] group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-accent"
          style={{ aspectRatio: work.ratio, zIndex: 5 }}
        >
          <Image data-img src={work.slides[0].src} alt={work.slides[0].alt} fill priority={priority} sizes={sizes} className="object-cover" />
        </div>
        {work.slides.length > 1 && (
          <span className="absolute -right-2 bottom-4 z-10 rounded-full bg-text px-3 py-1 text-xs font-semibold text-ink shadow-lg">
            {work.slides.length} Slides
          </span>
        )}
      </div>
    </Link>
  );
}
