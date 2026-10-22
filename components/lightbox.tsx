"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { XIcon } from "@phosphor-icons/react/dist/ssr/X";
import { CaretLeftIcon } from "@phosphor-icons/react/dist/ssr/CaretLeft";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr/CaretRight";

export type LightboxItem = { src: string; alt: string; width: number; height: number; caption?: string };

type Props = {
  items: LightboxItem[];
  /** Renders the trigger for item i; `open` opens the lightbox at that index. */
  children: (open: (index: number) => void) => ReactNode;
};

export function Lightbox({ items, children }: Props) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const open = useCallback((i: number) => setIndex(i), []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) {
      returnFocus.current = document.activeElement as HTMLElement | null;
      dialog.showModal();
      document.documentElement.classList.add("lenis-stopped");
      document.body.style.overflow = "hidden";
    }
    if (index === null && dialog.open) {
      dialog.close();
    }
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const onClose = () => {
    document.documentElement.classList.remove("lenis-stopped");
    document.body.style.overflow = "";
    setIndex(null);
    returnFocus.current?.focus({ preventScroll: true });
  };

  const item = index !== null ? items[index] : null;

  return (
    <>
      {children(open)}
      <dialog
        ref={dialogRef}
        onClose={onClose}
        aria-label={item ? `${item.alt} (Bild ${index! + 1} von ${items.length})` : "Bildansicht"}
        data-lenis-prevent
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-ink/90 backdrop:backdrop-blur-md"
      >
        {item && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) dialogRef.current?.close();
            }}
            className="flex h-full flex-col items-center justify-center gap-4 p-4 md:p-10"
          >
            <figure key={item.src} className="anim-fade-up relative flex max-h-full w-full max-w-5xl flex-col items-center">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 60vw, 92vw"
                className="h-auto max-h-[78dvh] w-auto max-w-full rounded-2xl object-contain shadow-[0_60px_120px_-40px_rgba(0,0,0,.9),0_0_0_1px_rgba(255,255,255,.08)]"
                priority
              />
              {item.caption && <figcaption className="mt-4 text-center text-sm text-text-2">{item.caption}</figcaption>}
            </figure>

            <div className="flex items-center gap-3">
              {items.length > 1 && (
                <button type="button" onClick={() => step(-1)} className="btn btn-ghost h-12 w-12 !px-0" aria-label="Vorheriges Bild">
                  <CaretLeftIcon size={20} weight="bold" aria-hidden />
                </button>
              )}
              <span className="tnum text-sm text-text-2" aria-live="polite" aria-atomic="true">
                {index! + 1} / {items.length}
              </span>
              {items.length > 1 && (
                <button type="button" onClick={() => step(1)} className="btn btn-ghost h-12 w-12 !px-0" aria-label="Nächstes Bild">
                  <CaretRightIcon size={20} weight="bold" aria-hidden />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="btn btn-ghost absolute right-4 top-4 h-12 w-12 !px-0 md:right-8 md:top-8"
              aria-label="Bildansicht schließen"
              autoFocus
            >
              <XIcon size={20} weight="bold" aria-hidden />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
