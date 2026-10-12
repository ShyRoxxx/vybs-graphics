import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { Reveal } from "@/components/reveal";
import { Arrow } from "@/components/ui/arrow";
import { faqs } from "@/lib/content";

export function FaqTeaser() {
  return (
    <section id="fragen" className="section scroll-mt-20">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal as="h2" className="max-w-[12ch] text-[clamp(2.25rem,5.5vw,4.75rem)]">
            Was du vorher wissen willst.
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <Link href="/faq" className="link-arrow min-h-11 text-text-2 hover:text-text">
              Alle Fragen und Antworten
              <Arrow />
            </Link>
          </Reveal>
        </div>
        <Reveal from="up" delay={0.1}>
          <FaqList items={faqs.slice(0, 5)} />
        </Reveal>
      </div>
    </section>
  );
}
