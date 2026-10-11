import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function PageHero({
  title,
  accent,
  text,
  children,
  tint = "var(--glow)",
}: {
  title: string;
  accent?: string;
  text?: string;
  children?: ReactNode;
  tint?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-[9rem] pb-[clamp(3rem,7vw,5.5rem)]">
      <div aria-hidden className="orb drift-a right-[-15%] top-[-20%] h-[34rem] w-[34rem] opacity-40" style={{ background: tint }} />
      <div className="container-x relative">
        <Reveal as="h1" className="max-w-[18ch] text-[clamp(2.75rem,7.5vw,6.5rem)]" from="up" distance={30}>
          {title}
          {accent && (
            <>
              {" "}
              <span className="text-accent">{accent}</span>
            </>
          )}
        </Reveal>
        {text && (
          <Reveal as="p" className="measure mt-8 text-lg text-text-2 md:text-xl" delay={0.1}>
            {text}
          </Reveal>
        )}
        {children && (
          <Reveal className="mt-10" delay={0.2}>
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
