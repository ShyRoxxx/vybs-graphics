import Link from "next/link";
import { includedByDefault, priceItems, serviceGroups } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Arrow } from "@/components/ui/arrow";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

export function Prices() {
  return (
    <section id="preise" className="section scroll-mt-20">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow n="03">Preise</Eyebrow>
              <h2 className="max-w-[14ch] text-[clamp(2rem,4vw,3.5rem)]">Feste Preise. Pro Design.</h2>
            </Reveal>
            <Reveal as="p" className="measure mt-5 text-text-2" delay={0.1}>
              Du siehst vorher, was eine Leistung kostet und was enthalten ist. Und bevor du zahlst, bekommst du für
              jede davon ein kostenloses Beispiel.
            </Reveal>
            <Reveal as="ul" delay={0.15} className="mt-6 space-y-2 text-sm text-text">
              {includedByDefault.map((i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <span className="inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckIcon size={10} weight="bold" aria-hidden />
                  </span>
                  {i}
                </li>
              ))}
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <Link href="/leistungen#preise" className="link-arrow min-h-11 text-text-2 hover:text-text">
                Alle Preise im Detail
                <Arrow />
              </Link>
            </Reveal>
          </div>

          <Reveal as="ul" stagger={0.08} delay={0.1} className="grid gap-4 sm:grid-cols-3">
            {serviceGroups.map((g) => {
              const items = priceItems.filter((p) => p.group === g.id);
              const from = Math.min(...items.filter((p) => p.price !== null).map((p) => p.price as number));
              return (
                <li key={g.id} className="card lit flex flex-col p-6">
                  <span aria-hidden className="h-2 w-2 rounded-full" style={{ background: g.tint }} />
                  <h3 className="mt-4 font-sans text-base font-semibold tracking-normal text-text">{g.id === "branding" ? "Branding" : g.title}</h3>
                  <p className="mt-2 text-text-3">
                    <span className="text-sm">ab</span> <span className="display tnum text-[2.25rem] leading-none text-text">{from} €</span>
                  </p>
                  <ul className="mt-5 space-y-1.5 border-t border-line pt-4 text-sm text-text-2">
                    {items.slice(0, 3).map((p) => (
                      <li key={p.id} className="flex justify-between gap-3">
                        <span>{p.name}</span>
                        <span className="tnum shrink-0 text-text">{p.price === null ? "Angebot" : `${p.priceNote.startsWith("ab") ? "ab " : ""}${p.price} €`}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/leistungen#preise-${g.id}`} className="link-arrow mt-auto pt-5 text-sm text-text-2 hover:text-text">
                    Alle Preise
                    <Arrow />
                  </Link>
                </li>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
