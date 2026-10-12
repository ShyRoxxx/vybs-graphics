"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { DUR, EASE_OUT } from "@/lib/motion";
import { Logo } from "@/components/ui/logo";
import { nav, primaryCta, site } from "@/lib/site";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation (also back/forward) and when the viewport grows into the
  // desktop layout, otherwise main/footer would stay inert behind an invisible menu.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const toggle = toggleRef.current;
    const inertTargets = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    html.classList.add("lenis-stopped");
    document.body.style.overflow = "hidden";
    inertTargets.forEach((el) => el.setAttribute("inert", ""));
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 120);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      html.classList.remove("lenis-stopped");
      document.body.style.overflow = "";
      inertTargets.forEach((el) => el.removeAttribute("inert"));
      window.removeEventListener("keydown", onKey);
      toggle?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-[background-color,box-shadow] duration-200 ${
          scrolled || open ? "bg-ink/80 backdrop-blur-xl shadow-[inset_0_-1px_0_var(--line)]" : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative inline-flex min-h-11 items-center rounded-full px-4 text-[0.95rem] font-semibold transition-colors duration-200 hover:text-text ${
                        active ? "text-text" : "text-text-2"
                      }`}
                    >
                      {item.label}
                      {active && (
                        <span aria-hidden className="absolute inset-x-4 -bottom-0.5 h-px bg-accent" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href={primaryCta.href} className="btn btn-primary hidden sm:inline-flex">
              {primaryCta.short}
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={open ? "mobile-menu" : undefined}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink-2/60 shadow-[inset_0_0_0_1px_var(--line-strong)] lg:hidden"
            >
              <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
              <span aria-hidden className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full rounded bg-text transition-transform duration-200 ease-[var(--ease-out)] ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-[2px] w-full rounded bg-text transition-opacity duration-200 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-[2px] w-full rounded bg-text transition-transform duration-200 ease-[var(--ease-out)] ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menü"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
            transition={{ duration: DUR.ui }}
            className="fixed inset-0 top-[4.5rem] z-40 overflow-y-auto bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex min-h-full flex-col justify-between py-8">
              <ul className="flex flex-col gap-1">
                {[{ href: "/", label: "Startseite" }, ...nav].map((item, i) => (
                  <m.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: DUR.panel, delay: 0.05 + i * 0.05, ease: EASE_OUT }}
                  >
                    <Link
                      href={item.href}
                      ref={i === 0 ? closeRef : undefined}
                      onClick={() => setOpen(false)}
                      className="display flex items-center justify-between border-b border-line py-4 text-[2rem] leading-none tracking-[-0.03em] text-text"
                    >
                      {item.label}
                      <span aria-hidden className="text-text-3">
                        →
                      </span>
                    </Link>
                  </m.li>
                ))}
              </ul>
              <m.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: DUR.panel, delay: 0.25, ease: EASE_OUT }}
                className="mt-10 flex flex-col gap-4"
              >
                <Link href={primaryCta.href} onClick={() => setOpen(false)} className="btn btn-primary btn-lg w-full">
                  {primaryCta.label}
                </Link>
                <div className="flex items-center justify-between text-text-2">
                  <a href={`mailto:${site.email}`} className="link-u inline-flex min-h-11 items-center">
                    {site.email}
                  </a>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2">
                    <InstagramLogoIcon size={20} weight="regular" aria-hidden />
                    {site.instagramHandle}
                    <span className="sr-only">(öffnet in neuem Tab)</span>
                  </a>
                </div>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
