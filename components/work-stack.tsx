import Image from "next/image";
import Link from "next/link";
import type { Work } from "@/lib/content";

/** A work shown by its cover slide in a hairline frame. Links to the portfolio entry. */
export function WorkStack({ work, sizes = "(min-width: 1024px) 30vw, 90vw", priority = false }: { work: Work; sizes?: string; priority?: boolean }) {
  return (
    <Link href={`/portfolio#${work.slug}`} className="group block focus-visible:outline-none" aria-label={`${work.client}: ${work.format} ansehen`}>
      <div className="frame relative group-focus-visible:ring-2 group-focus-visible:ring-accent" style={{ aspectRatio: work.ratio }}>
        <Image
          data-img
          src={work.slides[0].src}
          alt={work.slides[0].alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03]"
        />
      </div>
    </Link>
  );
}
