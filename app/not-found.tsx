import Image from "next/image";
import Link from "next/link";
import { featuredWorks } from "@/lib/content";
import { primaryCta } from "@/lib/site";

export default function NotFound() {
  const w = featuredWorks[1];
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden pt-24">
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative">
          <span aria-hidden data-num="404" className="display pointer-events-none absolute -top-[0.55em] left-[-0.04em] text-[clamp(8rem,26vw,20rem)] leading-none text-accent/10 select-none block before:content-[attr(data-num)]" />
          <h1 className="relative max-w-[16ch] t-section">Diese Seite gibt es nicht. Ein Design dafür schon.</h1>
          <p className="measure relative mt-6 text-lg text-text-2">
            Der Link ist vermutlich veraltet oder vertippt. Von hier kommst du zurück zur Startseite oder direkt zu deinem kostenlosen Beispiel.
          </p>
          <div className="relative mt-8 flex flex-wrap gap-4">
            <Link href={primaryCta.href} className="btn btn-primary btn-lg">
              {primaryCta.label}
            </Link>
            <Link href="/" className="btn btn-ghost btn-lg">
              Zur Startseite
            </Link>
          </div>
        </div>
        <div className="relative mx-auto hidden w-[70%] max-w-[18rem] lg:block">
          <div className="relative overflow-hidden rounded-[1.25rem] shadow-[0_40px_80px_-30px_rgba(18,18,18,.22),0_0_0_1px_rgba(18,18,18,.08)]" style={{ transform: "rotate(6deg)", aspectRatio: w.ratio }}>
            <Image src={w.slides[0].src} alt={w.slides[0].alt} fill sizes="18rem" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
