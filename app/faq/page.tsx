import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { FaqList } from "@/components/faq-list";
import { FinalCta } from "@/components/final-cta";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Häufige Fragen",
  description: "Antworten zu Kosten, Ablauf, Dateien, Dauer und Zusammenarbeit mit Vybs Graphics.",
  alternates: { canonical: "/faq" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero title="Häufige" accent="Fragen." text="Kostenloses Beispiel, Festpreise, Dateien, Dauer: die Fragen, die vor der ersten Anfrage kommen. Fehlt deine, schreib mir einfach." />
      <section className="pb-[var(--section)]">
        <div className="container-x max-w-4xl">
          <Reveal>
            <FaqList items={faqs} headingLevel={2} />
          </Reveal>
        </div>
      </section>
      <FinalCta title="Noch Fragen? Oder gleich ein Beispiel?" />
    </>
  );
}
