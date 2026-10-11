import type { CSSProperties } from "react";
import { designFormats, industries } from "@/lib/content";
import { MockPost } from "@/components/mock-post";

type Kind = "instagram-posts" | "carousels" | "werbeanzeigen" | "flyer-print" | "logo-branding" | "visitenkarten";

const fmt = (id: string) => designFormats.find((f) => f.id === id)!;
const ind = (id: string) => industries.find((i) => i.id === id)!;

/** A small composed preview per service, built from the same mock card the configurator uses. */
export function ServicePreview({ kind }: { kind: Kind }) {
  switch (kind) {
    case "instagram-posts":
      return <MockPost company="Café Lindenhof" industry={ind("gastro")} format={fmt("post")} className="mx-auto w-[82%]" style={{ rotate: "-3deg" }} />;
    case "carousels":
      return (
        <div className="relative mx-auto aspect-[4/5] w-[86%]">
          <MockPost company="Glanzwerk Reinigung" industry={ind("reinigung")} format={fmt("carousel")} slide={3} className="absolute inset-0 origin-bottom scale-[0.86] opacity-50" style={{ rotate: "6deg" }} />
          <MockPost company="Glanzwerk Reinigung" industry={ind("reinigung")} format={fmt("carousel")} slide={2} className="absolute inset-0 origin-bottom scale-[0.93] opacity-80" style={{ rotate: "3deg" }} />
          <MockPost company="Glanzwerk Reinigung" industry={ind("reinigung")} format={fmt("carousel")} slide={1} className="absolute inset-0" />
        </div>
      );
    case "werbeanzeigen":
      return (
        <div className="mx-auto grid w-[90%] grid-cols-[1.4fr_1fr] items-end gap-3">
          <MockPost company="Bauer & Sohn" industry={ind("handwerk")} format={fmt("anzeige")} />
          <MockPost company="Bauer & Sohn" industry={ind("handwerk")} format={fmt("story")} className="w-full" />
        </div>
      );
    case "flyer-print":
      return (
        <div className="relative mx-auto w-[78%]">
          <MockPost company="Studio Marla" industry={ind("beauty")} format={fmt("flyer")} className="!rounded-md" />
          <span className="absolute -right-3 -top-3 rounded-full bg-text px-3 py-1 text-xs font-semibold text-ink shadow-lg" style={{ rotate: "6deg" }}>
            DIN A6
          </span>
        </div>
      );
    case "logo-branding":
      return <MockPost company="Nordlicht Immobilien" industry={ind("immobilien")} format={fmt("logo")} className="mx-auto w-[82%]" />;
    case "visitenkarten":
      return (
        <div className="relative mx-auto aspect-[85/55] w-[88%]">
          <div className="mock absolute inset-0 flex flex-col justify-between bg-[#F7F0DE] p-[6cqw] text-[#101828]" style={{ rotate: "-6deg", "--t": "#B8923F" } as CSSProperties}>
            <span className="flex h-[12cqw] w-[12cqw] items-center justify-center rounded-[28%] bg-[var(--t)] text-white" style={{ fontSize: "5cqw", fontWeight: 800 }}>
              KP
            </span>
            <div>
              <p className="font-semibold" style={{ fontSize: "5.5cqw" }}>Klara Petersen</p>
              <p className="opacity-70" style={{ fontSize: "3.6cqw" }}>Beratung & Coaching</p>
            </div>
          </div>
          <div className="mock absolute inset-0 flex items-center justify-center bg-[#B8923F] text-white" style={{ rotate: "4deg", translate: "10% 14%" }}>
            <span style={{ fontSize: "14cqw", fontWeight: 800, letterSpacing: "-0.04em" }}>KP</span>
          </div>
        </div>
      );
  }
}
