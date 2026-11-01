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
    <section className="pt-[5.5rem] pb-[clamp(0.625rem,1.4vw,1rem)] sm:pt-[6rem]">
      <div className={`panel-wrap ${narrow ? "max-w-4xl" : ""}`}>
        <div className="glass px-[clamp(1.25rem,4vw,3.5rem)] py-[clamp(2.25rem,5vw,4.5rem)]">
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
      </div>
    </section>
  );
}
