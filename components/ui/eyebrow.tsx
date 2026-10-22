import type { ReactNode } from "react";

/** Small numbered label above a section heading: gives the long page a visible rhythm. */
export function Eyebrow({ n, children, className = "" }: { n?: string; children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow ${className}`}>
      {n && (
        <span className="tnum text-accent" aria-hidden>
          {n}
        </span>
      )}
      {children}
    </p>
  );
}
