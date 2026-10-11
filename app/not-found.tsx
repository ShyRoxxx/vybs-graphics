import Link from "next/link";
import { primaryCta } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden pt-24">
      <div aria-hidden className="orb drift-a left-[10%] top-[10%] h-[30rem] w-[30rem] bg-[var(--glow)] opacity-60" />
      <div className="container-x relative">
        <p aria-hidden className="display text-[clamp(6rem,22vw,16rem)] leading-none text-ink-3">404</p>
        <h1 className="mt-2 max-w-[16ch] text-[clamp(2rem,5vw,4rem)]">Diese Seite gibt es nicht. Ein Design dafür schon.</h1>
        <p className="measure mt-6 text-lg text-text-2">
          Der Link ist vermutlich veraltet oder vertippt. Von hier geht es zurück zur Startseite oder direkt zum kostenlosen Beispiel.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/" className="btn btn-ghost btn-lg">
            Zur Startseite
          </Link>
          <Link href={primaryCta.href} className="btn btn-primary btn-lg">
            {primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
