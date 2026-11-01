"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { nav, primaryCta, site } from "@/lib/site";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

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
    html.classList.add("lenis-stopped", "scroll-lock");
    inertTargets.forEach((el) => el.setAttribute("inert", ""));
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 120);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      html.classList.remove("lenis-stopped", "scroll-lock");
      inertTargets.forEach((el) => el.removeAttribute("inert"));
      window.removeEventListener("keydown", onKey);
      toggle?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 -mb-[4.25rem] px-2 pt-2 sm:-mb-[4.5rem] sm:px-3 sm:pt-3">
      <div
        data-scrolled={scrolled || open || undefined}
        className="site-header-bar glass mx-auto max-w-[76rem] !rounded-full"
      >
        <div className="flex h-[3.75rem] items-center justify-between gap-4 pl-4 pr-2 sm:pl-5">
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
                      className={`inline-flex min-h-10 items-center rounded-full px-4 text-[0.95rem] font-medium transition-colors duration-200 hover:bg-[var(--fill-gray)] hover:text-text ${
                        active ? "bg-[var(--fill-gray)] text-text" : "text-text-2"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href={primaryCta.href} className="btn btn-primary hidden !min-h-11 !px-5 text-[0.95rem] sm:inline-flex">
              {primaryCta.short}
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={open ? "mobile-menu" : undefined}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--fill-gray)] lg:hidden"
            >
              <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
              <span aria-hidden className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-full rounded bg-text transition-transform duration-200 ease-[var(--ease-out)] ${
                    open ? "translate-y-[5.25px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] w-full rounded bg-text transition-transform duration-200 ease-[var(--ease-out)] ${
                    open ? "-translate-y-[5.25px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {open && <div aria-hidden className="anim-fade fixed inset-0 z-30 bg-[rgb(30_41_82/0.18)] lg:hidden" onClick={() => setOpen(false)} />}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menü"
          data-lenis-prevent
          className="glass anim-fade-down fixed inset-x-2 top-[4.75rem] z-40 max-h-[calc(100dvh-5.5rem)] overflow-y-auto !bg-[rgb(255_255_255/0.8)] sm:inset-x-3 sm:top-[5rem] lg:hidden"
        >
          <div className="flex flex-col px-5 py-3">
            <ul className="flex flex-col">
              {[{ href: "/", label: "Startseite" }, ...nav].map((item, i) => (
                <li key={item.href} className="anim-fade-up border-b border-line last:border-0" style={{ "--d": `${0.04 + i * 0.04}s` } as CSSProperties}>
                  <Link
                    href={item.href}
                    ref={i === 0 ? closeRef : undefined}
                    onClick={() => setOpen(false)}
                    className="display flex items-center justify-between py-3.5 text-[1.6rem] leading-none text-text"
                  >
                    {item.label}
                    <span aria-hidden className="text-lg font-normal text-text-3">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="anim-fade-up mt-5 flex flex-col gap-3 pb-2" style={{ "--d": "0.25s" } as CSSProperties}>
              <Link href={primaryCta.href} onClick={() => setOpen(false)} className="btn btn-primary btn-lg w-full">
                {primaryCta.label}
              </Link>
              <div className="flex flex-col items-start gap-1 text-text-2">
                <a href={`mailto:${site.email}`} className="link-u inline-flex min-h-11 items-center">
                  {site.email}
                </a>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2">
                  <InstagramLogoIcon size={20} weight="regular" aria-hidden />
                  {site.instagramHandle}
                  <span className="sr-only">(öffnet in neuem Tab)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
