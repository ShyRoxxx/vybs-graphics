import Link from "next/link";
import { priceItems, serviceGroups } from "@/lib/content";
import { Arrow } from "@/components/ui/arrow";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/reveal";
import { ServicePreview } from "@/components/service-preview";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

function fromPrice(group: string) {
  const prices = priceItems.filter((p) => p.group === group && p.price !== null).map((p) => p.price as number);
  return prices.length ? Math.min(...prices) : null;
}

export function Services() {
  return (
    <section id="leistungen" className="section relative scroll-mt-20 overflow-x-clip">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <Eyebrow n="02">Leistungen</Eyebrow>
            <h2 className="max-w-[16ch] text-[clamp(2.25rem,5.5vw,4.75rem)]">Was du bei mir bestellen kannst.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/leistungen" className="link-arrow min-h-11 text-text-2 hover:text-text">
              Alle Leistungen im Detail
              <Arrow />
            </Link>
          </Reveal>
        </div>

        <Reveal as="ul" stagger={0.08} className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {serviceGroups.map((g) => {
            const from = fromPrice(g.id);
            return (
              <li key={g.id} className="card lit group relative flex flex-col overflow-hidden p-6 md:p-8">
                <div aria-hidden className="orb absolute right-[-30%] top-[-20%] h-[22rem] w-[22rem] opacity-20 transition-opacity duration-500 group-hover:opacity-35" style={{ background: g.tint }} />
                <div className="relative mx-auto w-[72%] max-w-[15rem] pt-2">
                  <ServicePreview group={g.id} />
                </div>
                <div className="relative mt-8 flex flex-1 flex-col">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[clamp(1.5rem,2.4vw,1.9rem)]">{g.title}</h3>
                    {from !== null && (
                      <span className="shrink-0 text-sm text-text-3">
                        ab <span className="display tnum text-xl text-text">{from} €</span>
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-text-2">{g.short}</p>
                  <ul className="mt-5 space-y-2 text-sm text-text">
                    {g.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full" style={{ background: `${g.tint}26`, color: g.tint }}>
                          <CheckIcon size={10} weight="bold" aria-hidden />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/leistungen#${g.id}`} className="link-arrow mt-auto pt-6 text-sm text-text-2 hover:text-text">
                    Mehr zu {g.id === "branding" ? "Branding" : g.title}
                    <Arrow />
                  </Link>
                </div>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
