"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { priceNote, priceTiers } from "@/lib/content";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

export function PricePicker() {
  const [tier, setTier] = useState<(typeof priceTiers)[number]["id"]>("standard");
  const current = priceTiers.find((t) => t.id === tier)!;

  return (
    <div className="card overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_1.3fr]">
        <div role="tablist" aria-label="Preisstufe wählen" className="flex flex-col divide-y divide-line lg:border-r lg:border-line">
          {priceTiers.map((t) => {
            const selected = t.id === tier;
            return (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setTier(t.id)}
                onKeyDown={(e) => {
                  const idx = priceTiers.findIndex((p) => p.id === tier);
                  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                    e.preventDefault();
                    const next = priceTiers[(idx + 1) % priceTiers.length];
                    setTier(next.id);
                    document.getElementById(`tab-${next.id}`)?.focus();
                  }
                  if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    const prev = priceTiers[(idx - 1 + priceTiers.length) % priceTiers.length];
                    setTier(prev.id);
                    document.getElementById(`tab-${prev.id}`)?.focus();
                  }
                }}
                className={`relative flex min-h-[5.5rem] items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${
                  selected ? "bg-ink-3" : "hover:bg-ink-3/50"
                }`}
              >
                {selected && (
                  <motion.span layoutId="tier-bar" aria-hidden className="absolute inset-y-0 left-0 w-1 bg-accent" transition={{ type: "spring", stiffness: 400, damping: 36 }} />
                )}
                <span>
                  <span className="block font-semibold text-text">{t.name}</span>
                  <span className="mt-0.5 block text-sm text-text-2">{t.bestFor}</span>
                </span>
                <span className="display tnum text-[2rem] leading-none">
                  {t.price}
                  <span className="ml-0.5 text-[1.1rem] text-text-2">€</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[22rem] p-6 md:p-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              id={`panel-${current.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${current.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h3 className="text-[2rem]">{current.name}</h3>
                <p className="display tnum text-[3rem] leading-none text-accent">
                  {current.price} €<span className="ml-2 font-sans text-base font-normal text-text-2">{current.perWhat}</span>
                </p>
              </div>
              <p className="mt-4 text-text-2">{current.summary}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {current.includes.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
                    className="flex items-start gap-3 text-text"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <CheckIcon size={12} weight="bold" aria-hidden />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <Link href={`/kostenloses-beispiel?paket=${current.id}`} className="btn btn-primary mt-8">
                Beispiel in dieser Stufe anfordern
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <p className="border-t border-line px-6 py-5 text-sm text-text-3 md:px-10">{priceNote}</p>
    </div>
  );
}
