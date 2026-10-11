"use client";

import { useState } from "react";
import Link from "next/link";
import { m } from "motion/react";
import { priceNote, priceTiers } from "@/lib/content";
import { DUR, EASE_OUT } from "@/lib/motion";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

export function PricePicker() {
  const [tier, setTier] = useState<(typeof priceTiers)[number]["id"]>("standard");
  const current = priceTiers.find((t) => t.id === tier)!;

  const move = (dir: 1 | -1) => {
    const idx = priceTiers.findIndex((p) => p.id === tier);
    const next = priceTiers[(idx + dir + priceTiers.length) % priceTiers.length];
    setTier(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <div className="card overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_1.3fr]">
        <div role="tablist" aria-label="Preisstufe wählen" aria-orientation="vertical" className="flex flex-col divide-y divide-line lg:border-r lg:border-line">
          {priceTiers.map((t) => {
            const selected = t.id === tier;
            return (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={selected}
                aria-controls="tier-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setTier(t.id)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                    e.preventDefault();
                    move(1);
                  }
                  if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    move(-1);
                  }
                  if (e.key === "Home") {
                    e.preventDefault();
                    setTier(priceTiers[0].id);
                    document.getElementById(`tab-${priceTiers[0].id}`)?.focus();
                  }
                  if (e.key === "End") {
                    e.preventDefault();
                    const last = priceTiers[priceTiers.length - 1];
                    setTier(last.id);
                    document.getElementById(`tab-${last.id}`)?.focus();
                  }
                }}
                className={`relative flex min-h-[5.5rem] items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${
                  selected ? "bg-ink-3" : "hover:bg-ink-3/50"
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute inset-y-0 left-0 w-1 origin-top bg-accent transition-transform duration-200 ease-[var(--ease-out)] ${selected ? "scale-y-100" : "scale-y-0"}`}
                />
                <span>
                  <span className="block font-semibold text-text">{t.name}</span>
                  <span className="mt-0.5 block text-sm text-text-2">{t.bestFor}</span>
                </span>
                <span className="display tnum text-[2rem] leading-none">
                  {t.price}
                  <span className="ml-0.5 text-[1.1rem] text-text-2">&nbsp;€</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[22rem] p-6 md:p-10">
          <m.div
            key={current.id}
            id="tier-panel"
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DUR.ui, ease: EASE_OUT }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="text-[2rem]">{current.name}</h3>
              <p className="display tnum text-[3rem] leading-none text-accent">
                {current.price}&nbsp;€<span className="ml-2 font-sans text-base font-normal text-text-2">{current.perWhat}</span>
              </p>
            </div>
            <p className="mt-4 text-text-2">{current.summary}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {current.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckIcon size={12} weight="bold" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href={`/kostenloses-beispiel?paket=${current.id}`} className="btn btn-primary mt-8">
              Beispiel in dieser Stufe anfordern
            </Link>
          </m.div>
        </div>
      </div>
      <p className="border-t border-line px-6 py-5 text-sm text-text-3 md:px-10">{priceNote}</p>
    </div>
  );
}
