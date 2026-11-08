"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { nav, primaryCta, site } from "@/lib/site";
import { works } from "@/lib/content";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  // gliding glass highlight behind the hovered nav item
  const [glide, setGlide] = useState<{ x: number; w: number; on: boolean }>({ x: 0, w: 0, on: false });
  const moveGlide = (el: HTMLElement) => {
    const list = navRef.current;
    if (!list) return;
    const a = el.getBoundingClientRect();
    const b = list.getBoundingClientRect();
    setGlide({ x: a.left - b.left, w: a.width, on: true });
  };

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
    html.classList.add("scroll-lock");
    inertTargets.forEach((el) => el.setAttribute("inert", ""));
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 120);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      html.classList.remove("scroll-lock");
      inertTargets.forEach((el) => el.removeAttribute("inert"));
      window.removeEventListener("keydown", onKey);
      toggle?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 -mb-[4.25rem] px-2 pt-2 sm:-mb-[4.5rem] sm:px-3 sm:pt-3">
      <div
        data-scrolled={scrolled || open || undefined}
        className={`site-header-bar glass mx-auto !rounded-full transition-[max-width,box-shadow] duration-500 ease-[var(--ease-out)] ${
          scrolled && !open ? "max-w-[62rem] shadow-[0_1px_0_rgb(255_255_255/0.65)_inset,0_22px_44px_-22px_rgb(30_41_82/0.35)]" : "max-w-[76rem]"
        }`}
      >
        <div className={`flex items-center justify-between gap-4 pl-4 pr-2 transition-[height] duration-500 ease-[var(--ease-out)] sm:pl-5 ${scrolled && !open ? "h-[3.4rem]" : "h-[3.75rem]"}`}>
          <Logo />

          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul ref={navRef} className="relative flex items-center" onMouseLeave={() => setGlide((g) => ({ ...g, on: false }))}>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 rounded-full bg-white/80 shadow-[0_1px_0_rgb(255_255_255/0.9)_inset,0_6px_16px_-8px_rgb(30_41_82/0.35)] transition-[transform,width,opacity] duration-300 ease-[var(--ease-out)]"
                style={{ width: glide.w, transform: `translateX(${glide.x}px)`, opacity: glide.on ? 1 : 0 }}
              />
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onMouseEnter={(e) => moveGlide(e.currentTarget)}
                      onFocus={(e) => moveGlide(e.currentTarget)}
                      className={`relative inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-[0.95rem] font-medium transition-colors duration-200 hover:text-text ${
                        active ? "text-text" : "text-text-2"
                      }`}
                    >
                      {active && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href={primaryCta.href} className="btn btn-primary group hidden !min-h-11 !px-5 text-[0.95rem] sm:inline-flex">
              {primaryCta.short}
              <ArrowUpRightIcon size={16} weight="bold" aria-hidden className="transition-transform duration-300 ease-[var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={open ? "mobile-menu" : undefined}
              className={`relative inline-flex h-11 items-center gap-2.5 rounded-full pl-4 pr-3 text-sm font-semibold transition-colors duration-300 lg:hidden ${
                open ? "bg-text text-white" : "bg-[var(--fill-gray)] text-text"
              }`}
            >
              <span aria-hidden>{open ? "Schließen" : "Menü"}</span>
              <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
              <span aria-hidden className="relative block h-2.5 w-4">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-full rounded bg-current transition-transform duration-300 ease-[var(--ease-out)] ${
                    open ? "translate-y-[4.25px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] w-full rounded bg-current transition-transform duration-300 ease-[var(--ease-out)] ${
                    open ? "-translate-y-[4.25px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menü"
          className="menu-sheet fixed inset-0 z-[-1] overflow-y-auto lg:hidden"
        >
          <div className="flex min-h-full flex-col px-5 pb-8 pt-[5.5rem] sm:px-7 sm:pt-[6rem]">
            <ul className="flex flex-col">
              {[{ href: "/", label: "Startseite" }, ...nav].map((item, i) => {
                const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href} className="menu-item" style={{ "--d": `${0.06 + i * 0.05}s` } as CSSProperties}>
                    <Link
                      href={item.href}
                      ref={i === 0 ? closeRef : undefined}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-[rgb(30_41_82/0.08)] py-3"
                    >
                      <span className="tnum w-6 text-sm font-medium text-text-3">{String(i + 1).padStart(2, "0")}</span>
                      <span className={`display text-[clamp(2rem,9vw,2.75rem)] leading-none transition-colors ${active ? "text-accent" : "text-text group-active:text-accent"}`}>
                        {item.label}
                      </span>
                      <ArrowUpRightIcon size={22} weight="bold" aria-hidden className="ml-auto self-center text-text-3" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* a glimpse of the work */}
            <div className="menu-item mt-8" style={{ "--d": "0.4s" } as CSSProperties}>
              <p className="eyebrow !mb-3">Aktuelle Arbeiten</p>
              <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-7 sm:px-7">
                {works.map((w) => (
                  <Link key={w.slug} href={`/portfolio#${w.slug}`} onClick={() => setOpen(false)} className="frame relative block aspect-[4/5] w-[6.5rem] shrink-0">
                    <Image src={w.slides[0].src} alt={w.client} fill sizes="104px" className="object-cover" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="menu-item mt-auto flex flex-col gap-3 pt-8" style={{ "--d": "0.48s" } as CSSProperties}>
              <Link href={primaryCta.href} onClick={() => setOpen(false)} className="btn btn-primary btn-lg w-full">
                {primaryCta.label}
              </Link>
              <div className="grid grid-cols-2 gap-2">
                <a href={`mailto:${site.email}`} className="btn btn-ghost !min-h-12 !px-3 text-sm">
                  <EnvelopeSimpleIcon size={18} aria-hidden />
                  E-Mail
                </a>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-12 !px-3 text-sm">
                  <InstagramLogoIcon size={18} aria-hidden />
                  Instagram
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
