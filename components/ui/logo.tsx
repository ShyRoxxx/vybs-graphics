import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ className = "", size = 34 }: { className?: string; size?: number }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label={`${site.name} – Startseite`}>
      <span className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
        <span
          aria-hidden
          className="absolute inset-[-30%] rounded-full bg-accent/30 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <Image src="/images/logo.png" alt="" width={size} height={size} className="relative h-full w-full object-contain" />
      </span>
      <span className="display text-[1.15rem] tracking-[-0.02em] leading-none">
        vybs<span className="text-text-2 font-sans font-normal">.graphics</span>
      </span>
    </Link>
  );
}
