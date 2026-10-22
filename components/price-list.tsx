import Link from "next/link";
import { priceItems, priceNote, serviceGroups } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";
import { Arrow } from "@/components/ui/arrow";

function Price({ item }: { item: (typeof priceItems)[number] }) {
  if (item.price === null) {
    return <span className="display text-[1.6rem] leading-none text-text">Angebot</span>;
  }
  const isFrom = item.priceNote.startsWith("ab");
  return (
    <span className="display tnum text-[2.25rem] leading-none text-text md:text-[2.75rem]">
      {isFrom && <span className="mr-1 font-sans text-base font-normal text-text-2">ab</span>}
      {item.price}
      <span className="ml-1 text-[1.2rem] text-text-2">€</span>
    </span>
  );
}

export function PriceList({ compact = false }: { compact?: boolean }) {
  return (
    <div className="space-y-14 md:space-y-20">
      {serviceGroups.map((g) => {
        const items = priceItems.filter((p) => p.group === g.id);
        return (
          <section key={g.id} id={`preise-${g.id}`} aria-labelledby={`preise-${g.id}-h`} className="scroll-mt-28">
            <Reveal className="flex items-baseline gap-4">
              <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: g.tint }} />
              <h3 id={`preise-${g.id}-h`} className="text-[clamp(1.5rem,2.8vw,2.25rem)]">
                {g.title}
              </h3>
            </Reveal>
            <Reveal as="ul" stagger={0.06} className="mt-6 divide-y divide-line border-y border-line">
              {items.map((item) => (
                <li key={item.id} id={`preis-${item.id}`} className="scroll-mt-28 py-7 md:py-8">
                  <div className={`grid gap-5 md:items-start md:gap-10 ${compact ? "md:grid-cols-[1fr_auto]" : "md:grid-cols-[minmax(0,1.3fr)_minmax(0,20rem)_auto]"}`}>
                    <div className="min-w-0">
                      <h4 className="font-sans text-[1.2rem] font-semibold tracking-normal text-text">{item.name}</h4>
                      <p className="mt-2 max-w-[46ch] text-text-2">{item.description}</p>
                      <p className="mt-2 text-sm text-text-3">
                        {item.priceNote}
                        {item.unit ? ` · ${item.unit}` : ""}
                      </p>
                    </div>
                    {!compact && (
                      <ul className="space-y-2 text-sm text-text-2">
                        {item.includes.map((inc) => (
                          <li key={inc} className="flex items-start gap-2">
                            <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                              <CheckIcon size={10} weight="bold" aria-hidden />
                            </span>
                            {inc}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 md:flex-col md:items-end md:justify-start">
                      <Price item={item} />
                      <Link
                        href={`/kostenloses-beispiel?leistung=${encodeURIComponent(item.name)}`}
                        className="link-arrow min-h-11 text-sm text-text-2 hover:text-text md:whitespace-nowrap"
                      >
                        Beispiel anfordern
                        <Arrow />
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </Reveal>
          </section>
        );
      })}
      <Reveal as="p" className="measure text-sm text-text-3">
        {priceNote}
      </Reveal>
    </div>
  );
}
