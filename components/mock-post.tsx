import type { CSSProperties, ReactNode } from "react";
import type { DesignFormat, Industry, IndustryFeature } from "@/lib/content";
import { SparkleIcon } from "@phosphor-icons/react/dist/ssr/Sparkle";
import { ClockIcon } from "@phosphor-icons/react/dist/ssr/Clock";
import { ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr/ShieldCheck";
import { WrenchIcon } from "@phosphor-icons/react/dist/ssr/Wrench";
import { CalendarCheckIcon } from "@phosphor-icons/react/dist/ssr/CalendarCheck";
import { CoffeeIcon } from "@phosphor-icons/react/dist/ssr/Coffee";
import { BagIcon } from "@phosphor-icons/react/dist/ssr/Bag";
import { ScissorsIcon } from "@phosphor-icons/react/dist/ssr/Scissors";
import { TargetIcon } from "@phosphor-icons/react/dist/ssr/Target";
import { ChartLineUpIcon } from "@phosphor-icons/react/dist/ssr/ChartLineUp";
import { UsersThreeIcon } from "@phosphor-icons/react/dist/ssr/UsersThree";
import { HouseIcon } from "@phosphor-icons/react/dist/ssr/House";
import { KeyIcon } from "@phosphor-icons/react/dist/ssr/Key";
import { FileTextIcon } from "@phosphor-icons/react/dist/ssr/FileText";
import { LinkSimpleIcon } from "@phosphor-icons/react/dist/ssr/LinkSimple";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";

/*
 * Preview card for the configurator, the process phone and the service previews.
 * Built after the real slides in the portfolio: wordmark top left, slide counter top right,
 * heavy condensed uppercase headline with the second line in the brand colour, marker
 * underline, a subline with one coloured phrase, three icon cards, a big CTA and a handle.
 * Light slides sit on a grey grid with a soft colour wash, dark slides on near-black with a glow.
 */

const ratios: Record<DesignFormat["ratio"], string> = {
  square: "1 / 1",
  portrait: "4 / 5",
  story: "9 / 16",
  card: "85 / 55",
  a4: "1 / 1.414",
};

const icons: Record<IndustryFeature["icon"], typeof SparkleIcon> = {
  sparkle: SparkleIcon,
  clock: ClockIcon,
  shield: ShieldCheckIcon,
  wrench: WrenchIcon,
  calendar: CalendarCheckIcon,
  coffee: CoffeeIcon,
  bag: BagIcon,
  scissors: ScissorsIcon,
  target: TargetIcon,
  chart: ChartLineUpIcon,
  users: UsersThreeIcon,
  house: HouseIcon,
  key: KeyIcon,
  file: FileTextIcon,
};

export function initialsOf(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "IB";
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

function handleOf(name: string) {
  const slug = name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${slug || "dein-betrieb"}.de`;
}

const condensed: CSSProperties = { fontFamily: "var(--font-condensed), Impact, sans-serif", textTransform: "uppercase", lineHeight: 0.94, letterSpacing: "0.005em" };

function Headline({ text, size, dark }: { text: string; size: string; dark: boolean }) {
  const parts = text.split(". ").map((p, i, arr) => (i < arr.length - 1 ? `${p}.` : p));
  return (
    <p style={{ ...condensed, fontSize: size }}>
      {parts.map((part, i) => (
        <span key={part} className="block" style={{ color: i === parts.length - 1 && parts.length > 1 ? "var(--t)" : dark ? "#fff" : "#141A26" }}>
          {part}
        </span>
      ))}
    </p>
  );
}

function Marker({ dark }: { dark: boolean }) {
  // hand-drawn marker stroke under the headline, as on the real slides
  return (
    <svg aria-hidden viewBox="0 0 240 14" style={{ width: "42cqw", height: "2.6cqw", marginTop: "1.8cqw", display: "block" }}>
      <path d="M3 9 C 60 3, 120 11, 237 5" stroke={dark ? "#fff" : "var(--t)"} strokeWidth="5" strokeLinecap="round" fill="none" opacity={dark ? 0.9 : 0.85} />
      <path d="M8 11 C 70 7, 130 13, 200 9" stroke="var(--t)" strokeWidth="3" strokeLinecap="round" fill="none" opacity={0.6} />
    </svg>
  );
}

function Sub({ industry, dark, size }: { industry: Industry; dark: boolean; size: string }) {
  const { sub, subAccent } = industry;
  const i = subAccent ? sub.indexOf(subAccent) : -1;
  return (
    <p style={{ fontSize: size, lineHeight: 1.3, fontWeight: 500, color: dark ? "rgba(255,255,255,.88)" : "#2A3242" }}>
      {i >= 0 && subAccent ? (
        <>
          {sub.slice(0, i)}
          <span style={{ color: "var(--t)" }}>{subAccent}</span>
          {sub.slice(i + subAccent.length)}
        </>
      ) : (
        sub
      )}
    </p>
  );
}

function Brand({ name, dark, size = "4cqw" }: { name: string; dark: boolean; size?: string }) {
  return (
    <span className="inline-flex items-center" style={{ gap: "2cqw" }}>
      <span className="inline-flex items-center justify-center" style={{ width: "7cqw", height: "7cqw", borderRadius: "22%", background: "var(--t)", color: dark ? "#0A0E14" : "#fff", fontSize: "3cqw", fontWeight: 800, letterSpacing: "-0.02em" }}>
        {initialsOf(name)}
      </span>
      <span style={{ ...condensed, fontSize: size, letterSpacing: "0.04em", color: dark ? "#fff" : "#141A26" }}>{name}</span>
    </span>
  );
}

function FeatureCard({ f, dark, numeral }: { f: IndustryFeature; dark: boolean; numeral?: string }) {
  const Icon = icons[f.icon];
  return (
    <li
      className="relative flex items-center"
      style={{
        gap: "2.6cqw",
        padding: "2cqw 2.8cqw",
        borderRadius: "2.4cqw",
        background: dark ? "rgba(255,255,255,.06)" : "rgba(255,255,255,.75)",
        boxShadow: dark ? "inset 0 0 0 0.3cqw rgba(255,255,255,.1)" : "inset 0 0 0 0.3cqw rgba(20,26,38,.1), 0 2cqw 4cqw -2cqw rgba(20,26,38,.12)",
      }}
    >
      <span className="inline-flex shrink-0 items-center justify-center" style={{ width: "8cqw", height: "8cqw", borderRadius: "50%", background: dark ? "rgba(255,255,255,.06)" : "var(--ts)", color: "var(--t)", boxShadow: dark ? "inset 0 0 0 0.3cqw rgba(255,255,255,.14)" : "none" }}>
        <Icon weight={dark ? "regular" : "fill"} style={{ width: "4.6cqw", height: "4.6cqw" }} aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block" style={{ ...condensed, fontSize: "3.6cqw", letterSpacing: "0.02em", color: dark ? "#fff" : "#141A26" }}>
          {f.title}
        </span>
        <span className="block" style={{ fontSize: "2.8cqw", lineHeight: 1.25, color: dark ? "rgba(255,255,255,.7)" : "#4B5563" }}>
          {f.text}
        </span>
      </span>
      {numeral && (
        <span aria-hidden style={{ ...condensed, fontSize: "9cqw", color: dark ? "rgba(255,255,255,.12)" : "rgba(20,26,38,.12)", lineHeight: 1 }}>
          {numeral}
        </span>
      )}
    </li>
  );
}

function Cta({ industry, dark, compact = false }: { industry: Industry; dark: boolean; compact?: boolean }) {
  return (
    <span
      className="flex items-center justify-between"
      style={{
        gap: "3cqw",
        padding: compact ? "2cqw 4cqw" : "2.3cqw 4.2cqw",
        borderRadius: "2.4cqw",
        background: "var(--t)",
        color: dark ? "#0A0E14" : "#fff",
        boxShadow: "0 3cqw 6cqw -3cqw rgba(0,0,0,.45)",
      }}
    >
      <span className="min-w-0">
        <span className="block" style={{ ...condensed, fontSize: compact ? "3.8cqw" : "4.4cqw", letterSpacing: "0.03em" }}>
          {industry.cta}
        </span>
        {!compact && (
          <span className="block" style={{ fontSize: "2.6cqw", fontWeight: 500, opacity: 0.9, marginTop: "0.4cqw" }}>
            {industry.ctaSub}
          </span>
        )}
      </span>
      <ArrowRightIcon weight="bold" style={{ width: "4cqw", height: "4cqw", flexShrink: 0 }} aria-hidden />
    </span>
  );
}

function Handle({ name, dark }: { name: string; dark: boolean }) {
  return (
    <span
      className="inline-flex items-center"
      style={{ gap: "1.4cqw", padding: "1.2cqw 2.6cqw", borderRadius: "999px", fontSize: "2.6cqw", fontWeight: 600, whiteSpace: "nowrap", color: dark ? "#fff" : "#141A26", boxShadow: `inset 0 0 0 0.3cqw ${dark ? "rgba(255,255,255,.35)" : "rgba(20,26,38,.3)"}` }}
    >
      <LinkSimpleIcon weight="bold" style={{ width: "3cqw", height: "3cqw", color: "var(--t)" }} aria-hidden />
      {handleOf(name)}
    </span>
  );
}

function Backdrop({ dark }: { dark: boolean }) {
  return (
    <>
      {dark ? (
        <>
          <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(120% 90% at 85% 100%, color-mix(in srgb, var(--t) 38%, transparent) 0%, transparent 55%), linear-gradient(180deg, #0D1119 0%, #070A10 100%)" }} />
          <div aria-hidden className="absolute" style={{ right: "-4cqw", bottom: "8cqw", width: "38cqw", height: "22cqw", backgroundImage: "radial-gradient(circle, var(--t) 0.9cqw, transparent 1.1cqw)", backgroundSize: "4cqw 4cqw", opacity: 0.55, maskImage: "linear-gradient(90deg, transparent, #000)" }} />
        </>
      ) : (
        <>
          <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, #F7F8FA 0%, #EEF0F4 100%)" }} />
          <div aria-hidden className="absolute inset-0" style={{ backgroundImage: "linear-gradient(#141A26 0.5px, transparent 0.5px), linear-gradient(90deg, #141A26 0.5px, transparent 0.5px)", backgroundSize: "7cqw 7cqw", opacity: 0.05 }} />
          <div aria-hidden className="absolute" style={{ right: "-25%", bottom: "-18%", width: "85%", height: "60%", borderRadius: "50%", background: "var(--t)", opacity: 0.22, filter: "blur(10cqw)" }} />
          <div aria-hidden className="absolute" style={{ left: "-20%", top: "-15%", width: "55%", height: "40%", borderRadius: "50%", background: "var(--t)", opacity: 0.1, filter: "blur(10cqw)" }} />
        </>
      )}
    </>
  );
}

function Frame({ children, className, style, label, dark, ratio, vars }: { children: ReactNode; className: string; style?: CSSProperties; label: string; dark: boolean; ratio: string; vars: CSSProperties }) {
  return (
    <div className={`mock ${dark ? "text-white" : "text-[#141A26]"} ${className}`} style={{ aspectRatio: ratio, background: dark ? "#0A0E14" : "#F3F4F6", ...vars, ...style }} role="img" aria-label={label}>
      <Backdrop dark={dark} />
      {children}
    </div>
  );
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
  const name = company.trim() || "Dein Betrieb";
  const dark = industry.theme === "dark";
  const vars = { "--t": industry.tint, "--ts": industry.tintSoft } as CSSProperties;
  const ratio = ratios[format.ratio];
  const isStory = format.ratio === "story";
  const isSquare = format.ratio === "square";
  const isCarousel = format.id === "carousel";

  if (format.id === "logo") {
    return (
      <Frame className={className} style={style} label={`Vorschau einer Logo-Idee für ${name}`} dark={dark} ratio={ratio} vars={vars}>
        <div className="relative flex h-full flex-col items-center justify-center text-center" style={{ gap: "4cqw", padding: "8cqw" }}>
          <div className="flex items-center justify-center" style={{ width: "30cqw", height: "30cqw", borderRadius: "26%", background: "var(--t)", color: dark ? "#0A0E14" : "#fff", fontSize: "12cqw", fontWeight: 800, letterSpacing: "-0.04em", boxShadow: "0 6cqw 12cqw -6cqw rgba(0,0,0,.5)" }}>
            {initialsOf(name)}
          </div>
          <div>
            <p style={{ ...condensed, fontSize: "8cqw", letterSpacing: "0.03em" }}>{name}</p>
            <p style={{ fontSize: "3cqw", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.6, marginTop: "1cqw" }}>{industry.label}</p>
          </div>
        </div>
      </Frame>
    );
  }

  if (format.ratio === "card") {
    return (
      <Frame className={`!rounded-[4px] ${className}`} style={style} label={`Vorschau, Visitenkarte für ${name}`} dark={dark} ratio={ratio} vars={vars}>
        <div className="relative flex h-full flex-col justify-between" style={{ padding: "6cqw" }}>
          <div className="flex items-center justify-between">
            <Brand name={name} dark={dark} size="5cqw" />
            <span style={{ fontSize: "2.8cqw", fontWeight: 600, opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.12em" }}>{industry.label}</span>
          </div>
          <div className="flex items-end justify-between" style={{ gap: "4cqw" }}>
            <div>
              <p style={{ ...condensed, fontSize: "6cqw", letterSpacing: "0.02em" }}>
                {industry.features[0].title}
              </p>
              <p style={{ fontSize: "3cqw", opacity: 0.75, marginTop: "0.6cqw" }}>{industry.features[0].text}</p>
            </div>
            <Handle name={name} dark={dark} />
          </div>
        </div>
      </Frame>
    );
  }

  if (format.ratio === "a4") {
    return (
      <Frame className={`!rounded-[4px] ${className}`} style={style} label={`Vorschau, ${format.label} für ${name}: „${industry.headline}“`} dark={dark} ratio={ratio} vars={vars}>
        <div className="relative flex h-full flex-col" style={{ padding: "7cqw" }}>
          <div className="flex items-center justify-between">
            <Brand name={name} dark={dark} />
            <Handle name={name} dark={dark} />
          </div>
          <div style={{ marginTop: "7cqw" }}>
            <Headline text={industry.headline} size="13cqw" dark={dark} />
            <Marker dark={dark} />
          </div>
          <div style={{ marginTop: "3.5cqw" }}>
            <Sub industry={industry} dark={dark} size="3.6cqw" />
          </div>
          <ul className="flex min-h-0 shrink flex-col overflow-hidden" style={{ gap: "1.8cqw", marginTop: "5cqw" }}>
            {industry.features.map((f) => (
              <FeatureCard key={f.title} f={f} dark={dark} />
            ))}
          </ul>
          <div className="mt-auto flex shrink-0 flex-col" style={{ gap: "2.5cqw", paddingTop: "4cqw" }}>
            <Cta industry={industry} dark={dark} />
            <span className="text-center" style={{ fontSize: "2.6cqw", fontWeight: 600, opacity: 0.6 }}>
              {handleOf(name)} · {industry.label}
            </span>
          </div>
        </div>
      </Frame>
    );
  }

  /* Instagram formats: post (portrait), square ad, story, carousel slides */
  const label = `Vorschau, ${format.label} für ${name}: „${industry.headline}“`;
  const features = isSquare ? industry.features.slice(0, 2) : industry.features;
  const headlineSize = isStory ? "13.5cqw" : isSquare ? "11cqw" : "11.5cqw";

  if (isCarousel && slide === 2) {
    return (
      <Frame className={className} style={style} label={`${label}, Slide 2`} dark={dark} ratio={ratio} vars={vars}>
        <div className="relative flex h-full flex-col" style={{ padding: "6.5cqw" }}>
          <div className="flex items-center justify-between">
            <Brand name={name} dark={dark} />
            <span style={{ ...condensed, fontSize: "4cqw", color: "var(--t)" }}>2/3</span>
          </div>
          <div style={{ marginTop: "8cqw" }}>
            <Headline text="Das bekommst du. Auf einen Blick." size="11cqw" dark={dark} />
            <Marker dark={dark} />
          </div>
          <ul className="flex flex-col" style={{ gap: "2.4cqw", marginTop: "6cqw" }}>
            {industry.features.map((f, i) => (
              <FeatureCard key={f.title} f={f} dark={dark} numeral={`0${i + 1}`} />
            ))}
          </ul>
          <div className="mt-auto flex items-center justify-between">
            <Handle name={name} dark={dark} />
            <span style={{ fontSize: "2.8cqw", fontWeight: 600, opacity: 0.6 }}>Weiter →</span>
          </div>
        </div>
      </Frame>
    );
  }

  if (isCarousel && slide === 3) {
    return (
      <Frame className={className} style={style} label={`${label}, Slide 3`} dark={dark} ratio={ratio} vars={vars}>
        <div className="relative flex h-full flex-col" style={{ padding: "6.5cqw" }}>
          <div className="flex items-center justify-between">
            <Brand name={name} dark={dark} />
            <span style={{ ...condensed, fontSize: "4cqw", color: "var(--t)" }}>3/3</span>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <Headline text="Lass uns starten. Heute noch." size="15cqw" dark={dark} />
            <Marker dark={dark} />
            <div style={{ marginTop: "4cqw" }}>
              <Sub industry={industry} dark={dark} size="3.8cqw" />
            </div>
            <div style={{ marginTop: "7cqw" }}>
              <Cta industry={industry} dark={dark} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Handle name={name} dark={dark} />
            <span style={{ fontSize: "2.8cqw", fontWeight: 600, opacity: 0.6 }}>#{handleOf(name).replace(".de", "")}</span>
          </div>
        </div>
      </Frame>
    );
  }

  return (
    <Frame className={className} style={style} label={label} dark={dark} ratio={ratio} vars={vars}>
      <div className="relative flex h-full flex-col" style={{ padding: "6.5cqw" }}>
        <div className="flex items-center justify-between">
          <Brand name={name} dark={dark} />
          {isCarousel ? <span style={{ ...condensed, fontSize: "4cqw", color: "var(--t)" }}>1/3</span> : <Handle name={name} dark={dark} />}
        </div>

        <div style={{ marginTop: isStory ? "14cqw" : "6cqw" }}>
          <Headline text={industry.headline} size={headlineSize} dark={dark} />
          <Marker dark={dark} />
        </div>
        <div style={{ marginTop: "3cqw" }}>
          <Sub industry={industry} dark={dark} size={isStory ? "4cqw" : "3.4cqw"} />
        </div>

        <ul className="flex min-h-0 shrink flex-col overflow-hidden" style={{ gap: "1.6cqw", marginTop: isStory ? "9cqw" : "4.5cqw" }}>
          {features.map((f) => (
            <FeatureCard key={f.title} f={f} dark={dark} />
          ))}
        </ul>

        <div className="mt-auto flex shrink-0 flex-col" style={{ paddingTop: "3.5cqw" }}>
          <Cta industry={industry} dark={dark} compact={isSquare} />
          {isStory && (
            <span className="text-center" style={{ fontSize: "2.8cqw", fontWeight: 600, opacity: 0.6, marginTop: "3cqw" }}>
              #{handleOf(name).replace(".de", "")}
            </span>
          )}
        </div>
      </div>
    </Frame>
  );
}
