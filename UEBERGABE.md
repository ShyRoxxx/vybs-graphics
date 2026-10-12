# Übergabe – Demo-Website Vybs Graphics

Stand: 11. Oktober 2026. Demo für die Neukundengewinnung, nicht für den Livegang gedacht (noindex).

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
2. Formular-Backend: beide Formulare öffnen heute eine vorbefüllte `mailto:`-Nachricht. Für den Livegang
   einen Mail-Dienst (z. B. Resend) mit Server-Action anbinden; Umgebungsvariable `RESEND_API_KEY` (Zweck: Versand
   der Anfragen an Phillips Postfach) und Empfängeradresse eintragen. Datei-Upload (Logo, Fotos) dann ergänzen.
3. Rechtstexte: Impressum und Datenschutz sind sichtbar als Platzhalter markiert; finale Texte kommen von Bilbao Consulting.
4. Bildrechte: Alle Bilder stammen aus den vom Lead übergebenen Dateien.
   - `public/images/logo.png`: freigestellt aus dem gelieferten Logo (1.webp).
   - `public/images/showcase.webp` (Gesamtgrafik) sowie `work-branding.webp`, `work-carousel.webp`,
     `work-social.webp`: Ausschnitte aus der gelieferten Portfolio-Grafik (2.webp). Auflösung nur 486 px breit; für den Livegang die Originaldateien
     der Designs bei Phillip anfordern (Instagram-Kacheln in 1080 px).
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

- Vercel-Connector hatte keinen Zugriff auf das Team (403). Import-Link:
  https://vercel.com/new/import?s=https://github.com/ShyRoxxx/vybs-graphics
  Framework wird automatisch erkannt, keine Einstellungen nötig. Nach dem Import ggf. „Vercel Authentication“ nur
  auf Preview-Deployments beschränken, damit die Production-URL ohne Login erreichbar ist.
- `lib/site.ts` → `url` auf die endgültige Production-URL setzen (für Open Graph und Sitemap).

## Nicht im Umfang, als Vorschlag

- Einfache Portfolio-Pflege: neue Arbeiten sind heute ein Eintrag in `lib/content.ts` plus Bild in `public/images/`.
  Ein kleines CMS (z. B. Markdown-Ordner) wäre der nächste Schritt, wenn Phillip selbst pflegen will.
- Google-Unternehmensprofil und Instagram-Verknüpfung (siehe Lead-Analyse) parallel aufsetzen.
