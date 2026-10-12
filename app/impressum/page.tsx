import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LegalText } from "@/components/legal-text";
import { imprint } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Anbieterkennzeichnung von Vybs Graphics (Phillip Franke Grafikdesign), Langenhagen.",
  alternates: { canonical: "/impressum" },
};

export default function ImprintPage() {
  return (
    <>
      <PageHero title="Impressum" />
      <section className="pb-[var(--section)]">
        <div className="container-x max-w-3xl">
          <LegalText sections={imprint} />
        </div>
      </section>
    </>
  );
}
