# Übergabe – Website Vybs Graphics (Livegang-Stand)

Stand: 12. Oktober 2026. Dieser Stand ist technisch versandfertig. Er geht erst live, wenn die unten
aufgeführten Blocker erledigt sind. Design ist eingefroren (Design-Freeze), alle Änderungen gegenüber der
Demo betreffen Inhalte, Rechtstexte, Funktionen und Technik.

## Livegang-Blocker (vor dem Merge erledigen)

1. **Formularversand ist noch nicht scharf.** Die Server-Action `app/actions/inquiry.ts` sendet über Resend,
   sobald die Umgebungsvariablen im Vercel-Projekt `vybs-graphics` gesetzt sind (Production und Preview):
   - `RESEND_API_KEY` – API-Key aus dem Resend-Konto von Bilbao Consulting.
   - `INQUIRY_TO` – Postfach, in dem Anfragen landen sollen (Standard ohne Variable: `phillip.creates@icloud.com`).
   - `INQUIRY_FROM` – verifizierte Absenderadresse, z. B. `Vybs Graphics <anfrage@vybs-graphics.de>`
     (Standard ohne Variable: genau diese Adresse).
   - `NEXT_PUBLIC_SITE_URL` – optional, `https://www.vybs-graphics.de` ist bereits der Standard in `lib/site.ts`.

   In Resend ist bisher nur `bilbaoconsulting.com` verifiziert, `vybs-graphics.de` nicht. Zwei Wege:
   a) `vybs-graphics.de` in Resend anlegen und die angezeigten DNS-Einträge (DKIM, SPF/Return-Path, optional DMARC)
      bei INWX setzen, dann `INQUIRY_FROM` auf `anfrage@vybs-graphics.de`;
   b) übergangsweise `INQUIRY_FROM` auf eine Adresse unter `bilbaoconsulting.com` setzen.
   Ohne Key zeigt das Formular eine ehrliche Fehlermeldung mit Telefonnummer und E-Mail; es gibt keinen
   stillen Fehlschlag und keinen mailto-Fallback mehr.

2. **Platzhalter in den Rechtstexten.** Impressum und Datenschutzerklärung stehen wörtlich aus dem CRM in
   `lib/legal.ts`. Vier Stellen sind noch Platzhalter und auf der Seite gelb hervorgehoben
   (`components/legal-text.tsx` markiert alles in eckigen Klammern):
   - Impressum: `[Handelsregistereintrag, sofern vorhanden, einfügen]` – bei einem Einzelunternehmen ohne
     Eintrag kann der Absatz entfallen; das ist von Phillip zu bestätigen.
   - Impressum: `[Umsatzsteuer-Identifikationsnummer … sofern vorhanden]` – im CRM ist kein USt-IdNr hinterlegt.
     Entweder Nummer eintragen oder Satz zur Kleinunternehmerregelung (§ 19 UStG) ersetzen.
   - Impressum: `[Anpassen, falls eine Teilnahmepflicht oder -bereitschaft besteht.]` – Streitbeilegung.
   - Datenschutz: `[Falls doch ein Datenschutzbeauftragter …]` – Phillip hat vermutlich keinen; Satz streichen,
     sobald bestätigt.
   Sobald die Angaben vorliegen: Text in `lib/legal.ts` ersetzen, die Hervorhebung verschwindet automatisch.

3. **Preise bestätigen.** Die Einzelpreise in `lib/content.ts` (`priceItems`) sind Vorschläge aus der Demo-Phase
   (Post 20 €, Carousel 60 € bis 5 Slides + 10 €/Slide, Story 15 €, Werbegrafik 25 €, Flyer 60 €, Visitenkarte 40 €,
   Plakat 60 €, Logo ab 150 €, 2 Korrekturrunden). Phillip muss sie freigeben oder korrigieren, bevor sie
   öffentlich stehen.

4. **Portfolio-Freigaben.** Alle fünf Projekte (Cready Online, Eifelhaus Auszeit, Nettwerk IT, Grundstein
   Betriebswirte, Sandeck Media) sind als „Kundenprojekt“ markiert (Feld `kind` in `lib/content.ts`). Phillip
   bestätigt, welche davon Konzeptarbeiten sind, und dass die Kundenlogos gezeigt werden dürfen. Details in
   `public/images/QUELLEN.md`.

## Was sich gegenüber der Demo geändert hat

- Echte Firmendaten überall: Phillip Franke Grafikdesign (Auftritt als Vybs Graphics), Hoher Kamp 40,
  30855 Langenhagen, +49 176 60193983, phillip.creates@icloud.com. Telefon (`tel:`-Link), Adresse und
  Google-Maps-Link stehen im Footer und auf /kontakt; `lib/site.ts` ist die einzige Quelle.
- Impressum und Datenschutzerklärung aus dem CRM eingebunden (Stand 12.10.2026), Sie-Form wie geliefert.
- `noindex` entfernt, `robots.txt` erlaubt Crawling und nennt die Sitemap, jede Seite hat eine kanonische URL,
  Sitemap und Open-Graph laufen über `https://www.vybs-graphics.de` (überschreibbar per `NEXT_PUBLIC_SITE_URL`).
- Strukturierte Daten (JSON-LD `ProfessionalService`) mit Name, rechtlichem Namen, Adresse, Telefon, E-Mail,
  Logo und Instagram.
- Formulare (/kostenloses-beispiel und /kontakt): serverseitige Validierung mit zod, unsichtbares Honeypot-Feld,
  Rate-Limit (5 Anfragen pro 10 Minuten je IP), Anfrage an Phillip plus Bestätigung an den Absender,
  Fehlerzustand mit Telefon und E-Mail. Clientseitige Prüfung bleibt (Fokus springt zum ersten Fehler).
- Bildquellen dokumentiert in `public/images/QUELLEN.md`.

## Nach dem Livegang

- **Doppeltes Vercel-Projekt löschen:** `vybs-graphics-p3ku` ist ein Rest aus der Demo-Phase und wird nicht
  benötigt. Löschen im Vercel-Dashboard (Projekt → Settings → Delete); aus dem Connector heraus war das nicht möglich.
- Vercel-Projekt `vybs-graphics`: Preview-Deployments sind durch Vercel-Login geschützt (Team-Mitglieder sehen sie),
  Production ist öffentlich. Domains `vybs-graphics.de` (leitet auf www um) und `www.vybs-graphics.de` sind verbunden.
- DNS bei INWX: `@ A 216.198.79.1` und `www CNAME 90d2ca11c168490d.vercel-dns-017.com` bleiben; zusätzliche
  Resend-Einträge siehe Blocker 1.
- Google-Unternehmensprofil mit `https://www.vybs-graphics.de` verknüpfen und Suchkonsole einreichen
  (`https://www.vybs-graphics.de/sitemap.xml`).
- Datei-Upload im Formular (Logo/Fotos) ist bewusst nicht gebaut; Absender schicken Dateien per Antwort auf die
  Bestätigungsmail.
- Kundenstimmen, Flyer/Visitenkarten/Logos als echte Arbeiten, sobald Material vorliegt.

## Qualitätsprüfung dieses Stands

- `tsc`, ESLint und Production-Build ohne Fehler.
- Screenshots aller Seiten bei 390 px und 1440 px vor und nach der Umstellung: kein horizontaler Überlauf,
  keine Konsolenfehler.
- Formulare getestet: leere Abgabe zeigt Feldfehler und setzt den Fokus, Honeypot-Treffer werden still
  verworfen, ohne `RESEND_API_KEY` erscheint der Fehlerzustand mit Telefonnummer.
- Lighthouse (mobil, lokaler Build): Accessibility 100, Best Practices 100, SEO 100. Performance lokal
  74–79 wegen simulierter Drosselung; die gemessenen Werte (First Contentful Paint ≈ 0,2–1,3 s, Largest
  Contentful Paint = First Contentful Paint, CLS 0) liegen im grünen Bereich. Auf Vercel mit Edge-Cache
  nochmals messen.

## Technik kurz

- Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind v4, `next/font` (Bricolage Grotesque,
  Manrope, selbst gehostet), GSAP ScrollTrigger und Lenis nur bei Bedarf geladen, Motion für Mikroanimationen,
  `prefers-reduced-motion` wird respektiert.
- Inhalte: `lib/content.ts` (Leistungen, Preise, Ablauf, FAQ, Portfolio), `lib/site.ts` (Firmendaten),
  `lib/legal.ts` (Rechtstexte), `DIRECTION.md` (Gestaltungsrichtung „Studio bei Nacht“).
- Hinweis zur Git-Historie: Der erste Commit auf `main` enthält noch Hilfsordner der Entwicklungsumgebung,
  die später entfernt wurden. Im aktuellen Stand sind sie nicht mehr enthalten.
