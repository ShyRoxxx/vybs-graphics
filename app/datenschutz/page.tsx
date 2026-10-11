import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LegalNote } from "@/components/legal-note";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Datenschutz" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Datenschutz" />
      <section className="pb-[var(--section)]">
        <div className="container-x max-w-3xl space-y-8 text-text-2">
          <LegalNote />
          <div>
            <h2 className="text-2xl text-text">Verantwortlicher</h2>
            <p className="mt-3">
              {site.name}, Phillip [Nachname], [Anschrift], E-Mail: {site.email}
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-text">Hosting</h2>
            <p className="mt-3">
              Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf werden technisch notwendige Daten (IP-Adresse,
              Zeitpunkt, aufgerufene Seite, Browser) in Server-Protokollen verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
              DSGVO. [Vor Livegang: Auftragsverarbeitungsvertrag und Serverstandort prüfen.]
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-text">Kontaktaufnahme</h2>
            <p className="mt-3">
              Die Formulare auf dieser Website öffnen Ihr eigenes E-Mail-Programm mit einer vorbereiteten Nachricht. Es werden
              keine Daten auf dieser Website gespeichert. Die per E-Mail übermittelten Angaben verwende ich ausschließlich zur
              Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO).
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-text">Cookies, Analyse, Schriften</h2>
            <p className="mt-3">
              Diese Website setzt keine Cookies, verwendet keine Analyse- oder Tracking-Dienste und lädt Schriften und Skripte
              ausschließlich vom eigenen Server.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-text">Ihre Rechte</h2>
            <p className="mt-3">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und
              Widerspruch sowie das Recht, sich bei einer Aufsichtsbehörde zu beschweren. [Zuständige Aufsichtsbehörde eintragen.]
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
