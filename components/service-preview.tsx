import type { CSSProperties } from "react";
import { designFormats, industries } from "@/lib/content";
import { MockPost } from "@/components/mock-post";

const fmt = (id: string) => designFormats.find((f) => f.id === id)!;
const ind = (id: string) => industries.find((i) => i.id === id)!;

/** Composed example per service group, built from the same mock card the configurator uses. Labelled as examples in the UI. */
export function ServicePreview({ group }: { group: "social" | "print" | "branding" }) {
  if (group === "social") {
    return (
      <div className="relative mx-auto aspect-[4/5] w-[78%] max-w-[20rem]">
        <MockPost company="Glanzwerk Reinigung" industry={ind("reinigung")} format={fmt("carousel")} slide={3} className="absolute inset-0 origin-bottom scale-[0.86] opacity-50" style={{ rotate: "7deg" }} />
        <MockPost company="Glanzwerk Reinigung" industry={ind("reinigung")} format={fmt("carousel")} slide={2} className="absolute inset-0 origin-bottom scale-[0.93] opacity-80" style={{ rotate: "3.5deg" }} />
        <MockPost company="Glanzwerk Reinigung" industry={ind("reinigung")} format={fmt("carousel")} slide={1} className="absolute inset-0" />
        <MockPost company="Glanzwerk Reinigung" industry={ind("reinigung")} format={fmt("story")} className="absolute -left-[14%] bottom-[-6%] w-[34%] shadow-2xl" style={{ rotate: "-6deg" }} />
      </div>
    );
  }
  if (group === "print") {
    return (
      <div className="relative mx-auto aspect-[4/5] w-[80%] max-w-[20rem]">
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
    );
  }
  return (
    <div className="relative mx-auto aspect-[4/5] w-[78%] max-w-[20rem]">
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
  );
}
