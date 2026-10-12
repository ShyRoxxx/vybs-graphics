import { Reveal } from "@/components/reveal";
import { PriceList } from "@/components/price-list";

export function Prices() {
  return (
    <section id="preise" className="section scroll-mt-20">
      <div className="container-x">
        <Reveal as="h2" className="max-w-[16ch] text-[clamp(2.25rem,5.5vw,4.75rem)]">
          Feste Preise. Pro Design.
        </Reveal>
        <Reveal as="p" className="measure mt-6 text-lg text-text-2" delay={0.1}>
          Du siehst vorher, was eine Leistung kostet und was enthalten ist. Und bevor du zahlst, bekommst du für jede
          dieser Leistungen ein kostenloses Beispiel.
        </Reveal>
        <div className="mt-12 lg:mt-16">
          <PriceList compact />
        </div>
      </div>
    </section>
  );
}
