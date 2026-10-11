import type { CSSProperties } from "react";
import type { DesignFormat, Industry } from "@/lib/content";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr/MapPin";

const ratios: Record<DesignFormat["ratio"], string> = {
  square: "1 / 1",
  portrait: "4 / 5",
  story: "9 / 16",
  wide: "16 / 9",
};

export function initialsOf(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "IB";
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export function MockPost({
  company,
  industry,
  format,
  className = "",
  style,
  slide = 1,
}: {
  company: string;
  industry: Industry;
  format: DesignFormat;
  className?: string;
  style?: CSSProperties;
  slide?: number;
}) {
  const name = company.trim() || "Ihr Betrieb";
  const isStory = format.ratio === "story";
  const isLogo = format.id === "logo";
  const vars = { "--t": industry.tint, "--ts": industry.tintSoft } as CSSProperties;

  if (isLogo) {
    return (
      <div
        className={`mock flex flex-col items-center justify-center gap-5 bg-[var(--ts)] p-8 text-center text-[#101828] ${className}`}
        style={{ aspectRatio: ratios[format.ratio], ...vars, ...style }}
        aria-label={`Vorschau einer Logo-Idee für ${name}`}
        role="img"
      >
        <div className="flex h-[32%] w-[32%] items-center justify-center rounded-[28%] bg-[var(--t)] text-white shadow-lg" style={{ fontSize: "clamp(1.5rem, 9cqw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em" }}>
          {initialsOf(name)}
        </div>
        <div>
          <p className="font-semibold leading-tight" style={{ fontSize: "clamp(1rem, 6cqw, 1.75rem)", letterSpacing: "-0.02em" }}>
            {name}
          </p>
          <p className="mt-1 text-[0.7em] uppercase tracking-[0.2em] opacity-60">{industry.label}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`mock bg-white text-[#101828] ${className}`}
      style={{ aspectRatio: ratios[format.ratio], containerType: "inline-size", ...vars, ...style }}
      role="img"
      aria-label={`Vorschau eines ${format.label}s für ${name}: „${industry.headline}“`}
    >
      {/* soft tinted background shapes */}
      <div aria-hidden className="absolute inset-0 bg-[var(--ts)]" />
      <div aria-hidden className="absolute -right-[20%] -top-[25%] h-[70%] w-[70%] rounded-full bg-[var(--t)] opacity-20 blur-2xl" />
      <div aria-hidden className="absolute -bottom-[30%] -left-[15%] h-[60%] w-[60%] rounded-full bg-[var(--t)] opacity-10 blur-2xl" />

      <div className="relative flex h-full flex-col p-[7cqw]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[2.5cqw]">
            <div className="flex h-[9cqw] w-[9cqw] items-center justify-center rounded-[28%] bg-[var(--t)] text-white" style={{ fontSize: "3.6cqw", fontWeight: 800 }}>
              {initialsOf(name)}
            </div>
            <span className="font-semibold" style={{ fontSize: "3.4cqw", letterSpacing: "-0.01em" }}>
              {name}
            </span>
          </div>
          {format.id === "carousel" && (
            <span className="rounded-full bg-white/70 px-[2.5cqw] py-[1cqw] font-semibold text-[#101828]/70" style={{ fontSize: "2.8cqw" }}>
              {slide}/3
            </span>
          )}
        </div>

        <div className={`flex flex-1 flex-col ${isStory ? "justify-center" : "justify-end"}`}>
          <p className="font-extrabold uppercase leading-[0.98]" style={{ fontSize: isStory ? "9cqw" : "8.2cqw", letterSpacing: "-0.03em", fontFamily: "var(--font-display)" }}>
            {industry.headline.split(". ").map((part, i, arr) => (
              <span key={i} className={i === arr.length - 1 && arr.length > 1 ? "block text-[var(--t)]" : "block"}>
                {part}
                {i < arr.length - 1 ? "." : ""}
              </span>
            ))}
          </p>
          <p className="mt-[2.5cqw] font-semibold text-[#101828]/70" style={{ fontSize: "3.4cqw" }}>
            {industry.sub}
          </p>
          <ul className="mt-[4cqw] flex flex-wrap gap-[2cqw]">
            {industry.bullets.map((b) => (
              <li key={b} className="inline-flex items-center gap-[1.5cqw] rounded-full bg-white px-[3cqw] py-[1.6cqw] shadow-sm" style={{ fontSize: "2.9cqw", fontWeight: 600 }}>
                <CheckIcon weight="bold" style={{ color: "var(--t)", width: "3cqw", height: "3cqw" }} aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[5cqw] flex items-center justify-between gap-[3cqw]">
          <span className="inline-flex items-center gap-[1.5cqw] text-[#101828]/60" style={{ fontSize: "2.8cqw", fontWeight: 600 }}>
            <MapPinIcon style={{ width: "3cqw", height: "3cqw" }} aria-hidden />
            Bei Ihnen vor Ort
          </span>
          <span className="rounded-full bg-[var(--t)] px-[4cqw] py-[2.2cqw] font-semibold text-white" style={{ fontSize: "3cqw" }}>
            {industry.cta} →
          </span>
        </div>
      </div>
    </div>
  );
}
