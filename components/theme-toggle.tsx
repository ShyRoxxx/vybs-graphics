"use client";

import { useEffect, useSyncExternalStore } from "react";
import { MoonIcon } from "@phosphor-icons/react/dist/ssr/Moon";
import { SunIcon } from "@phosphor-icons/react/dist/ssr/Sun";

export type Theme = "dark" | "light";
export const THEME_KEY = "theme";
export const THEME_COLORS: Record<Theme, string> = { dark: "#070b12", light: "#e8edf7" };

/* The inline script in app/layout.tsx sets data-theme before the first paint; this only reads and flips it. */
function subscribe(cb: () => void) {
  const mo = new MutationObserver(cb);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}
const getTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");
const getServerTheme = (): Theme => "dark";

export function setTheme(next: Theme) {
  const html = document.documentElement;
  const reduce = html.classList.contains("reduce-motion");
  if (!reduce) html.classList.add("theme-fade");
  html.dataset.theme = next;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[next]);
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {}
  if (!reduce) window.setTimeout(() => html.classList.remove("theme-fade"), 400);
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const light = theme === "light";

  // keep the browser chrome colour in step (the meta tag may render after the inline script ran)
  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(light ? "dark" : "light")}
      aria-label={light ? "Dunkles Design einschalten" : "Helles Design einschalten"}
      title={light ? "Dunkles Design" : "Helles Design"}
      className={`group relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[var(--fill-gray)] text-text transition-colors duration-200 hover:bg-[var(--fill-gray-hover)] ${className}`}
    >
      {/* both icons stay mounted and swap by data-theme, so server and client markup always match */}
      <SunIcon
        size={19}
        weight="bold"
        aria-hidden
        className="absolute transition-[transform,opacity] duration-500 ease-[var(--ease-out)] light:rotate-90 light:scale-50 light:opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
      <MoonIcon
        size={19}
        weight="bold"
        aria-hidden
        className="absolute transition-[transform,opacity] duration-500 ease-[var(--ease-out)] dark:-rotate-90 dark:scale-50 dark:opacity-0 light:rotate-0 light:scale-100 light:opacity-100"
      />
    </button>
  );
}

/** Two-option switch for the mobile menu: "Dunkel" and "Hell". */
export function ThemeSwitch({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const options: { value: Theme; label: string; Icon: typeof SunIcon }[] = [
    { value: "dark", label: "Dunkel", Icon: MoonIcon },
    { value: "light", label: "Hell", Icon: SunIcon },
  ];
  return (
    <div role="group" aria-label="Design" className={`inline-grid grid-cols-2 gap-1 rounded-full bg-[var(--fill-gray)] p-1 ${className}`}>
      {options.map(({ value, label, Icon }) => {
        const on = theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={on}
            onClick={() => !on && setTheme(value)}
            className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold transition-[background-color,color,box-shadow] duration-300 ${
              on ? "bg-[var(--glide)] text-text shadow-[var(--hairline-shadow)]" : "text-text-2 hover:text-text"
            }`}
          >
            <Icon size={16} weight="bold" aria-hidden />
            {label}
          </button>
        );
      })}
    </div>
  );
}
