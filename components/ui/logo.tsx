import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ className = "", size = 34 }: { className?: string; size?: number }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label={`${site.name} – Startseite`}>
      <span className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
        <Image src="/images/logo.png" alt="" width={size} height={size} className="relative h-full w-full object-contain light:invert" />
      </span>
      <span className="display text-[1.2rem] font-[650] tracking-[-0.03em] leading-none">
        vybs<span className="text-text-2 font-sans font-normal">.graphics</span>
      </span>
    </Link>
  );
}
