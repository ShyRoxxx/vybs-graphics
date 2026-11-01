import Image from "next/image";
import { works } from "@/lib/content";

/** Three real slides side by side, the middle one set lower: stands in for a portrait without pretending to be one. */
export function WorkCollage({ className = "" }: { className?: string }) {
  const picks = [works[1], works[3], works[4]];
  return (
    <div role="img" aria-label="Drei Arbeiten von Vybs Graphics: Eifelhaus Auszeit, Grundstein Betriebswirte und Sandeck Media" className={`grid grid-cols-3 items-start gap-2 ${className}`}>
      {picks.map((w, i) => (
        <div key={w.slug} aria-hidden className={`frame relative aspect-[4/5] ${i === 1 ? "mt-10" : ""}`}>
          <Image src={w.slides[0].src} alt="" fill sizes="(min-width:1024px) 10rem, 30vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}
