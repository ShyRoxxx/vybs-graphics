# Übergabe – Demo-Website Vybs Graphics

Stand: 12. Oktober 2026 (nach Phillips Feedback überarbeitet). Demo für die Neukundengewinnung, nicht für den Livegang gedacht (noindex).

## Umgesetzt aus Phillips Feedback

- Positionierung: „Professionelles Grafikdesign für dein Unternehmen.“ Social Media, Print und Branding stehen
  gleichberechtigt nebeneinander (Startseite, /leistungen).
- Einzelpreise je Leistung statt Basic/Standard/Custom, jeweils mit Beschreibung, Hinweis zum Umfang, „Enthalten“
  und direktem Link zum kostenlosen Beispiel. Carousel-Preis gilt ausdrücklich pro Carousel bis 5 Slides.
- Ablauf in sechs Schritten (Leistung wählen → Anfrage → Beispiel → Entscheidung → Kauf zum Festpreis → Anpassungen
  und Dateien), mit Sticky-Vorschau.
- Startseiten-Reihenfolge: Hero mit Beispiel-CTA und zweitem Button zu den Arbeiten → Leitsatz → Arbeiten →
  Leistungen → Preise → Ablauf → Konfigurator → Über Phillip (kurz) → FAQ → Abschluss.
- Portfolio: fünf Projekte mit allen Slides in voller Auflösung (1080 px), auf dem Handy als wischbare Reihe, am
  Rechner nebeneinander, jede Slide öffnet die Lightbox. Kennzeichnung „Kundenprojekt“ bzw. „Konzept“ pro Projekt.
  Startseite zeigt drei Projekte als Slide-Stapel, der Hero die drei Cover.
- Formular: Name/Unternehmen, E-Mail, Leistung, Beschreibung, optionaler Link. Datenschutzhinweis am Formular.
  Direkte Übermittlung über eine Server-Action, sobald `RESEND_API_KEY` gesetzt ist; ohne Key öffnet sich das
  E-Mail-Programm mit vorbereiteter Nachricht, und die Bestätigung sagt das ehrlich.
- FAQ mit den zwölf gewünschten Fragen.
- Ansprache auf „du“ umgestellt, weil Phillips Beispieltexte durchgehend „dein Unternehmen“ verwenden.
  Impressum/Datenschutz bleiben in Sie-Form. Rückstellung auf Sie ist möglich, betrifft `lib/content.ts` und einige Komponenten.

## Noch offen aus Phillips Feedback

- Originaldateien sind eingebaut (15 Slides, fünf Projekte: Cready Online, Eifelhaus Auszeit, Nettwerk IT, Grundstein
  Betriebswirte, Sandeck Media). Alle sind als „Kundenprojekt“ markiert, weil echte Firmenlogos darauf sind; Phillip
  muss bestätigen, welche davon Konzeptarbeiten sind (Feld `kind` in `lib/content.ts`). Die frühere
  Gebäudereinigungs-Collage ist entfernt, bis die Originalslides vorliegen.
- Flyer, Visitenkarten und Logos sind noch nicht im Portfolio, weil keine Druckdaten vorliegen. Die Leistungsseite zeigt
  dafür gekennzeichnete Beispielmotive.
- Endgültige Preise und Leistungsumfang: die eingetragenen Werte (Post 20 €, Carousel 60 € bis 5 Slides + 10 €/Slide,
  Story 15 €, Werbegrafik 25 €, Flyer 60 €, Visitenkarte 40 €, Plakat 60 €, Logo ab 150 €, 2 Korrekturrunden)
  sind Vorschläge auf Basis seiner früheren 15/20/30-€-Angabe und müssen von Phillip bestätigt werden.
- Eigene Domain vybs.graphics (derzeit nicht registriert) nach Vertragsschluss einrichten; `lib/site.ts` → `url`.
- Kundenstimmen, sobald echte vorliegen.


## Was die Demo zeigt

- Startseite mit Hero (Kartenstapel aus Phillips echten Arbeiten, fächert sich beim Scrollen auf),
  Leitsatz, drei Arbeitsfamilien, Leistungen mit Hover-Bild, Preiswähler (15 / 20 / 30 €),
  Ablauf mit Sticky-Handyvorschau, Beispiel-Konfigurator (Firmenname, Branche, Format → Live-Vorschau),
  Über Phillip, FAQ, Abschluss-Aufruf.
- Portfolio mit Lightbox (Klick auf ein Bild, Pfeiltasten blättern, Escape schließt) und der kompletten
  Portfolio-Grafik als großem Überblick.
- Unterseiten: /portfolio, /leistungen, /ueber-mich, /kostenloses-beispiel, /kontakt, /faq,
  /impressum, /datenschutz, eigene 404-Seite.
- Visuelle Richtung: siehe DIRECTION.md („Studio bei Nacht“).

## Vor dem Versand an den Lead prüfen

- E-Mail-Adresse `hallo@vybs.graphics` ist ein Platzhalter (Domain ist nicht registriert). In `lib/site.ts` ändern.
- Telefonnummer und Adresse sind nicht bekannt und fehlen deshalb bewusst (kein `tel:`-Link, keine Karte).
- Instagram `@vybs.graphics` stammt aus dem CRM; das Profil war aus der Session heraus nicht abrufbar (Instagram blockt).
- Texte zu Projekten (Content-Beratung, Gebäudereinigung Hildesheim, Unternehmensberatung) sind aus den
  sichtbaren Kacheln der Portfolio-Grafik abgeleitet und müssen von Phillip bestätigt werden.
- Preisinhalte je Stufe (Korrekturrunden, Formate, Quelldatei beim Custom-Paket) sind plausible Vorschläge.
- „Rückmeldung in der Regel innerhalb von zwei Werktagen“ ist eine Annahme.
- Leistungsbeschreibungen und FAQ-Antworten sind branchenüblich formuliert, aber nicht mit Phillip abgestimmt.
- Über-Seite: keine erfundenen Zahlen, Gründungsjahre oder Kundenzitate; die Biografie ist bewusst allgemein.

## Vor einem echten Livegang umstellen

1. `robots: { index: false }` in `app/layout.tsx` entfernen und `app/robots.ts` auf `allow` umstellen.
2. Formular-Backend: Server-Action `app/actions/inquiry.ts` ist fertig. Umgebungsvariablen in Vercel setzen:
   `RESEND_API_KEY` (Versand über Resend), `INQUIRY_TO` (Phillips Postfach), optional `INQUIRY_FROM`
   (verifizierte Absenderadresse der Domain). Ohne Key läuft der mailto-Fallback. Datei-Upload danach ergänzen.
3. Rechtstexte: Impressum und Datenschutz sind sichtbar als Platzhalter markiert; finale Texte kommen von Bilbao Consulting.
4. Bildrechte: Alle Bilder stammen aus den vom Lead übergebenen Dateien.
   - `public/images/logo.png`: freigestellt aus dem gelieferten Logo (1.webp).
   - `public/images/works/*.webp`: die 15 von Phillip gelieferten Originalslides, auf 1080 px und WebP optimiert.
     Darauf sind Logos und Fotos von Kundenbetrieben (Cready Online, Eifelhaus Auszeit, Nettwerk IT, Grundstein
     Betriebswirte, Sandeck Media); vor dem Livegang mit Phillip klären, dass er diese Arbeiten zeigen darf.
   - Keine Stockfotos, keine KI-Bilder. Die Vorschau-Kacheln im Konfigurator sind CSS-gebaute Mock-ups mit Beispieltexten.
5. Motivliste für echte Fotos (optional): Phillip am Arbeitsplatz (Hochformat), Bildschirm mit laufendem Design,
   Skizzenbuch/Notizen, drei bis fünf fertige Kacheln in Originalauflösung pro Arbeitsfamilie.
6. Font-Hinweis: Bricolage Grotesque und Manrope werden über `next/font` selbst gehostet; keine externen Requests.

## Technik

- Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4, GSAP + ScrollTrigger, Lenis, Motion (Lazy).
- Inhalte: `lib/content.ts` (Arbeiten, Leistungen, Preise, Ablauf, Branchen, Formate, FAQ, Über),
  `lib/site.ts` (Name, E-Mail, Instagram, Navigation, Haupt-CTA).
- Build: `npm run build`, `npx tsc --noEmit`, `npx eslint .` laufen fehlerfrei.
- Lighthouse (lokal, simuliertes Mobil-Throttling): Barrierefreiheit 100, Best Practices 100, CLS 0.
  Performance schwankte in der Container-Umgebung zwischen 68 und 83 (TBT 200–550 ms je nach Last der Maschine);
  gemessener LCP entspricht dem First Paint (~0,4 s unthrottled). Bitte nach dem Deploy mit PageSpeed Insights
  gegen die Production-URL prüfen; dort entfällt der lokale Server-Overhead.
- Animorio wurde als Vorlagenquelle genutzt (Spalten gegenläufig, Satz setzt sich zusammen, Fragen-Akkordeon,
  Titel in den Fokus) und an das Design angepasst. Magic UI kam nicht zum Einsatz (keine passende Komponente nötig).
- Erster Commit auf `main` enthält versehentlich die lokalen Skill-Ordner (`.claude/`, `.agents/`); ein Force-Push zum
  Bereinigen war in der Session nicht erlaubt. Sie wurden im zweiten Commit entfernt. Falls gewünscht:
  `git rebase -i --root` lokal und `main` neu pushen.

## Deployment

- Vercel-Projekt `vybs-graphics` (Team Bilbao) ist mit dem Repository verbunden, jeder Push auf `main` baut Production.
  Live: https://vybs-graphics.vercel.app (Vercel Authentication nur noch für Preview-Deployments, Production ist offen).
- Ein zweites Projekt `vybs-graphics-p3ku` im selben Team ist mit demselben Repository verbunden und baut doppelt.
  Kann gelöscht werden.
- `lib/site.ts` → `url` zeigt bereits auf die Production-URL; bei eigener Domain anpassen.

## Nicht im Umfang, als Vorschlag

- Einfache Portfolio-Pflege: neue Arbeiten sind heute ein Eintrag in `lib/content.ts` plus Bild in `public/images/`.
  Ein kleines CMS (z. B. Markdown-Ordner) wäre der nächste Schritt, wenn Phillip selbst pflegen will.
- Google-Unternehmensprofil und Instagram-Verknüpfung (siehe Lead-Analyse) parallel aufsetzen.
