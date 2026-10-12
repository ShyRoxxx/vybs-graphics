import Link from "next/link";
import { serviceGroups } from "@/lib/content";
import { Arrow } from "@/components/ui/arrow";
import { Reveal } from "@/components/reveal";
import { ServicePreview } from "@/components/service-preview";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

export function Services() {
  return (
    <section id="leistungen" className="section relative scroll-mt-20 overflow-x-clip">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal as="h2" className="max-w-[16ch] text-[clamp(2.25rem,5.5vw,4.75rem)]">
            Was du bei mir bestellen kannst.
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/leistungen" className="link-arrow min-h-11 text-text-2 hover:text-text">
              Alle Leistungen und Preise
              <Arrow />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-line border-y border-line lg:mt-20">
          {serviceGroups.map((g, i) => (
            <article key={g.id} className="grid gap-8 py-12 md:py-16 lg:grid-cols-[1.1fr_1fr_0.9fr] lg:items-center lg:gap-12">
              <Reveal from="left">
                <h3 className="text-[clamp(1.75rem,3.2vw,2.75rem)]">{g.title}</h3>
                <p className="measure mt-4 text-text-2">{g.description}</p>
                <Link href={`/leistungen#preise-${g.id}`} className="link-arrow mt-6 min-h-11 text-sm text-text-2 hover:text-text">
                  Preise für {g.title}
                  <Arrow />
                </Link>
              </Reveal>
              <Reveal as="ul" stagger={0.06} delay={0.05} className="space-y-3">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: `${g.tint}26`, color: g.tint }}>
                      <CheckIcon size={12} weight="bold" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </Reveal>
              <Reveal from={i % 2 ? "scale" : "right"} delay={0.1} className="relative">
                <div aria-hidden className="orb absolute inset-[5%] -z-10 opacity-25" style={{ background: g.tint }} />
                <ServicePreview group={g.id} />
                <p className="mt-4 text-center text-xs text-text-3">Beispielmotiv zur Veranschaulichung</p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
