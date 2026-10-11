import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LegalNote } from "@/components/legal-note";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Impressum" };

export default function ImprintPage() {
  return (
    <>
      <PageHero title="Impressum" />
      <section className="pb-[var(--section)]">
        <div className="container-x max-w-3xl space-y-8 text-text-2">
          <LegalNote />
          <div>
            <h2 className="text-2xl text-text">Angaben gemäß § 5 DDG</h2>
            <p className="mt-3">
              {site.name}
              <br />
              Inhaber: Phillip [Nachname]
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ und Ort]
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-text">Kontakt</h2>
            <p className="mt-3">
              E-Mail: {site.email}
              <br />
              Telefon: [Telefonnummer]
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-text">Umsatzsteuer</h2>
            <p className="mt-3">[Umsatzsteuer-Identifikationsnummer oder Hinweis auf Kleinunternehmerregelung nach § 19 UStG]</p>
          </div>
          <div>
            <h2 className="text-2xl text-text">Verantwortlich für den Inhalt</h2>
            <p className="mt-3">Phillip [Nachname], Anschrift wie oben.</p>
          </div>
        </div>
      </section>
    </>
  );
}
