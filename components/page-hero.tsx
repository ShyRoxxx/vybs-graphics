import type { CSSProperties, ReactNode } from "react";

export function PageHero({
  title,
  accent,
  text,
  children,
  narrow = false,
}: {
  title: string;
  accent?: string;
  text?: string;
  children?: ReactNode;
  /** Aligns the hero with a narrow page body (legal pages, FAQ). */
  narrow?: boolean;
}) {
  return (
    <section className="pt-[7.5rem] pb-[clamp(3rem,6vw,5rem)] lg:pt-[9rem]">
      <div className={`container-x ${narrow ? "max-w-4xl" : ""}`}>
        <h1 className="hero-fade t-display max-w-[16ch]" style={{ "--d": "0.05s" } as CSSProperties}>
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
