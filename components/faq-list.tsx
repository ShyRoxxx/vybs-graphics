"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/content";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr/Plus";

export function FaqList({ items = faqs, defaultOpen = 0, headingLevel = 3 }: { items?: typeof faqs; defaultOpen?: number; headingLevel?: 2 | 3 }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const uid = useId();
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const btnId = `${uid}-button-${i}`;
        return (
          <li key={item.q} className="relative">
            <span
              aria-hidden
              className={`absolute -inset-x-4 inset-y-0 -z-10 rounded-2xl bg-ink-2 transition-opacity duration-300 md:-inset-x-6 ${isOpen ? "opacity-100" : "opacity-0"}`}
            />
            <Heading className="font-sans text-base font-normal tracking-normal">
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="display text-[clamp(1.2rem,2vw,1.6rem)] leading-tight tracking-[-0.02em] text-text transition-transform duration-150 ease-[var(--ease-out)] group-hover:translate-x-1">
                  {item.q}
                </span>
                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-[background-color,color,box-shadow,transform] duration-200 ease-[var(--ease-out)] ${
                    isOpen ? "rotate-[135deg] bg-text text-ink" : "text-text shadow-[inset_0_0_0_1.5px_var(--line-strong)] group-hover:shadow-[inset_0_0_0_1.5px_var(--accent)]"
                  }`}
                  aria-hidden
                >
                  <PlusIcon size={18} weight="bold" />
                </span>
              </button>
            </Heading>
            <div id={panelId} role="region" aria-labelledby={btnId} className="acc" data-open={isOpen} aria-hidden={!isOpen} inert={!isOpen}>
              <div>
                <p className="measure pb-7 text-text-2">{item.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
