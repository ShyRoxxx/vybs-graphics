import type { CSSProperties } from "react";
import Image from "next/image";
import { designFormats, industries, works } from "@/lib/content";
import { MockPost } from "@/components/mock-post";

const fmt = (id: string) => designFormats.find((f) => f.id === id)!;
const ind = (id: string) => industries.find((i) => i.id === id)!;

/** Composed example per service group, built from the same mock card the configurator uses. Labelled as examples in the UI. */
export function ServicePreview({ group }: { group: "social" | "print" | "branding" }) {
  if (group === "social") {
    const a = works[0].slides[0];
    const b = works[2].slides[0];
    return (
      <div role="img" aria-label="Beispiele aus dem Portfolio: Instagram-Carousels für Cready Online und Nettwerk IT" className="relative mx-auto aspect-[4/5] w-[78%] max-w-[20rem]">
        <div aria-hidden className="absolute left-[-6%] top-[8%] w-[70%] overflow-hidden rounded-[0.9rem] shadow-[0_30px_60px_-30px_rgba(0,0,0,.9),0_0_0_1px_rgba(255,255,255,.08)]" style={{ transform: "rotate(-7deg)", aspectRatio: works[0].ratio }}>
          <Image src={a.src} alt="" fill sizes="14rem" className="object-cover" />
        </div>
        <div aria-hidden className="absolute right-[-4%] top-0 w-[70%] overflow-hidden rounded-[0.9rem] shadow-[0_30px_60px_-30px_rgba(0,0,0,.9),0_0_0_1px_rgba(255,255,255,.08)]" style={{ transform: "rotate(5deg)", aspectRatio: works[2].ratio }}>
          <Image src={b.src} alt="" fill sizes="14rem" className="object-cover" />
        </div>
        <div aria-hidden className="absolute bottom-[-4%] left-[18%] w-[32%] shadow-2xl" style={{ rotate: "-4deg" }}>
          <MockPost company="Glanzwerk Reinigung" industry={ind("reinigung")} format={fmt("story")} />
        </div>
      </div>
    );
  }
  if (group === "print") {
    return (
      <div role="img" aria-label="Beispielmotiv: Flyer und Visitenkarte für ein Café" className="relative mx-auto aspect-[4/5] w-[80%] max-w-[20rem]">
        <div aria-hidden className="contents">
        <MockPost company="Café Lindenhof" industry={ind("gastro")} format={fmt("flyer")} className="absolute left-0 top-0 w-[72%] !rounded-[4px]" style={{ rotate: "-4deg" }} />
        <div className="mock absolute bottom-[4%] right-0 aspect-[85/55] w-[62%] bg-[#F9E7E9] text-[#101828] !rounded-[4px]" style={{ rotate: "5deg", "--t": "#B23A48" } as CSSProperties}>
          <div className="flex h-full flex-col justify-between p-[6cqw]">
            <span className="flex h-[12cqw] w-[12cqw] items-center justify-center rounded-[28%] bg-[var(--t)] text-white" style={{ fontSize: "5cqw", fontWeight: 800 }}>
              CL
            </span>
            <div>
              <p className="font-semibold" style={{ fontSize: "5.5cqw" }}>Café Lindenhof</p>
              <p className="opacity-70" style={{ fontSize: "3.6cqw" }}>Kaffee · Kuchen · Frühstück</p>
            </div>
          </div>
        </div>
        <span className="absolute -right-2 top-[10%] rounded-full bg-text px-3 py-1 text-xs font-semibold text-ink shadow-lg" style={{ rotate: "6deg" }}>
          DIN A5
        </span>
        </div>
      </div>
    );
  }
  return (
    <div role="img" aria-label="Beispielmotiv: Logo-Idee und Farbpalette für ein Immobilienbüro" className="relative mx-auto aspect-[4/5] w-[78%] max-w-[20rem]">
      <div aria-hidden className="contents">
      <MockPost company="Nordlicht Immobilien" industry={ind("immobilien")} format={fmt("logo")} className="absolute left-0 top-[6%] w-[70%]" style={{ rotate: "-3deg" }} />
      <div className="mock absolute bottom-[4%] right-0 w-[58%] bg-white" style={{ rotate: "4deg" }} aria-hidden>
        <div className="grid grid-cols-4 gap-[3cqw] p-[6cqw]">
          {["#2B6CB0", "#1A365D", "#E3EDF9", "#101828"].map((c) => (
            <span key={c} className="aspect-square rounded-[20%]" style={{ background: c }} />
          ))}
          <p className="col-span-4 text-[#101828]" style={{ fontSize: "4cqw", fontWeight: 600 }}>
            Farben &amp; Schrift
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
