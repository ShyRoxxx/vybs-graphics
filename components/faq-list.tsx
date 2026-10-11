"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/lib/content";
import { PlusIcon } from "@phosphor-icons/react/dist/ssr/Plus";

export function FaqList({ items = faqs, defaultOpen = 0 }: { items?: typeof faqs; defaultOpen?: number }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-button-${i}`;
        return (
          <li key={item.q} className="relative">
            {isOpen && (
              <motion.span
                layoutId="faq-card"
                aria-hidden
                className="absolute -inset-x-4 inset-y-0 -z-10 rounded-2xl bg-ink-2 md:-inset-x-6"
                transition={{ type: "spring", stiffness: 300, damping: 34 }}
              />
            )}
            <h3 className="font-sans text-base font-normal tracking-normal">
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="display text-[clamp(1.2rem,2vw,1.6rem)] leading-tight tracking-[-0.02em] text-text transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-1">
                  {item.q}
                </span>
                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-[var(--ease-out)] ${
                    isOpen ? "rotate-[135deg] bg-text text-ink" : "text-text shadow-[inset_0_0_0_1.5px_var(--line-strong)] group-hover:shadow-[inset_0_0_0_1.5px_var(--accent)]"
                  }`}
                  aria-hidden
                >
                  <PlusIcon size={18} weight="bold" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="measure pb-7 text-text-2">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
