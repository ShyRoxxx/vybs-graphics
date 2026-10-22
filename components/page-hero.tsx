import type { CSSProperties, ReactNode } from "react";

export function PageHero({
  title,
  accent,
  text,
  children,
  tint = "var(--glow)",
  narrow = false,
}: {
  title: string;
  accent?: string;
  text?: string;
  children?: ReactNode;
  tint?: string;
  /** Aligns the hero with a narrow page body (legal pages, FAQ). */
  narrow?: boolean;
}) {
  return (
    <section className="relative overflow-hidden pt-[9rem] pb-[clamp(3rem,7vw,5.5rem)]">
      <div aria-hidden className="orb drift-a right-[-15%] top-[-20%] h-[34rem] w-[34rem] opacity-40" style={{ background: tint }} />
      <div className={`container-x relative ${narrow ? "max-w-4xl" : ""}`}>
        <h1 className="hero-fade max-w-[18ch] text-[clamp(2.5rem,7.5vw,6.5rem)]" style={{ "--d": "0.05s" } as CSSProperties}>
          {title}
          {accent && (
            <>
              {" "}
              <span className="text-accent">{accent}</span>
            </>
          )}
        </h1>
        {text && (
          <p className="hero-fade measure mt-8 text-lg text-text-2 md:text-xl" style={{ "--d": "0.12s" } as CSSProperties}>
            {text}
          </p>
        )}
        {children && (
          <div className="hero-fade mt-10" style={{ "--d": "0.2s" } as CSSProperties}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
