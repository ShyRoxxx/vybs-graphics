import Image from "next/image";
import { works } from "@/lib/content";

/** Three real slides on a "desk": stands in for a portrait without pretending to be one. */
export function WorkCollage({ className = "" }: { className?: string }) {
  const picks = [works[1].slides[0], works[3].slides[0], works[4].slides[0]];
  const layout = [
    { cls: "left-[4%] top-[12%] w-[52%]", rot: -8, z: 1 },
    { cls: "right-[2%] top-[2%] w-[50%]", rot: 6, z: 2 },
    { cls: "left-[24%] bottom-[2%] w-[54%]", rot: -2, z: 3 },
  ];
  return (
    <div role="img" aria-label="Drei Arbeiten von Vybs Graphics: Eifelhaus Auszeit, Grundstein Betriebswirte und Sandeck Media" className={`relative aspect-square ${className}`}>
      <div aria-hidden className="orb left-[15%] top-[20%] h-[70%] w-[70%] bg-accent opacity-20" />
      {picks.map((s, i) => (
        <div
          key={s.src}
          aria-hidden
          className={`absolute overflow-hidden rounded-[1rem] shadow-[0_30px_60px_-30px_rgba(0,0,0,.9),0_0_0_1px_rgba(255,255,255,.08)] ${layout[i].cls}`}
          style={{ transform: `rotate(${layout[i].rot}deg)`, zIndex: layout[i].z, aspectRatio: works[i === 0 ? 1 : i === 1 ? 3 : 4].ratio }}
        >
          <Image src={s.src} alt="" fill sizes="(min-width:1024px) 14rem, 45vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}
