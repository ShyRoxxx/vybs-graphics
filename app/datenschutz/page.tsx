import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LegalText } from "@/components/legal-text";
import { privacy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Welche Daten diese Website verarbeitet, wofür und auf welcher Grundlage.",
  alternates: { canonical: "/datenschutz" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Datenschutzerklärung" />
      <section className="pb-[var(--section)]">
        <div className="container-x max-w-3xl">
          <LegalText sections={privacy} />
        </div>
      </section>
    </>
  );
}
