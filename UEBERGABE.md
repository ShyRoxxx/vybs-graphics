# Übergabe – Website Vybs Graphics (Livegang-Stand)

Stand: 12. Oktober 2026. Dieser Stand ist technisch versandfertig. Er geht erst live, wenn die unten
aufgeführten Blocker erledigt sind. Design ist eingefroren (Design-Freeze), alle Änderungen gegenüber der
Demo betreffen Inhalte, Rechtstexte, Funktionen und Technik.

## Livegang-Blocker (vor dem Merge erledigen)

1. **Preise bestätigen.** Die Einzelpreise in `lib/content.ts` (`priceItems`) sind Vorschläge aus der Demo-Phase
   (Post 20 €, Carousel 60 € bis 5 Slides + 10 €/Slide, Story 15 €, Werbegrafik 25 €, Flyer 60 €, Visitenkarte 40 €,
   Plakat 60 €, Logo ab 150 €, 2 Korrekturrunden). Phillip muss sie freigeben oder korrigieren, bevor sie
   öffentlich stehen.

2. **Portfolio-Freigaben.** Alle fünf Projekte (Cready Online, Eifelhaus Auszeit, Nettwerk IT, Grundstein
   Betriebswirte, Sandeck Media) sind als „Kundenprojekt“ markiert (Feld `kind` in `lib/content.ts`). Phillip
   bestätigt, welche davon Konzeptarbeiten sind, und dass die Kundenlogos gezeigt werden dürfen. Details in
   `public/images/QUELLEN.md`.

## Rechtstexte (fertig)

- Impressum und Datenschutzerklärung stehen in `lib/legal.ts`, Grundlage sind die CRM-Texte (Stand 12.10.2026).
- Angaben, die im CRM nicht vorhanden sind, gibt es nicht und stehen deshalb nicht im Text: kein
  Handelsregistereintrag, keine Umsatzsteuer-Identifikationsnummer, kein Datenschutzbeauftragter. Streitbeilegung:
  weder bereit noch verpflichtet. Keine Platzhalter mehr; `components/legal-text.tsx` würde Text in eckigen
  Klammern weiterhin hervorheben, falls später welcher eingetragen wird.
- Abschnitt 6 der Datenschutzerklärung beschreibt den tatsächlichen Formularweg: Die Eingaben gehen nicht an
  einen Server, sondern werden im E-Mail-Programm des Besuchers vorbereitet und von dort geschickt. Der
  ursprüngliche Absatz zum Versanddienst Resend ist entfernt, weil kein Dienst eingebunden ist.

## Formulare (ohne Backend, ohne laufende Kosten)

- /kostenloses-beispiel und /kontakt prüfen die Eingaben im Browser (Pflichtfelder, E-Mail-Format, Mindestlänge,
  Fokus auf den ersten Fehler) und öffnen dann das E-Mail-Programm des Besuchers mit einer vorbereiteten Mail an
  `phillip.creates@icloud.com` (Betreff und Text aus den Formularfeldern, siehe `lib/inquiry.ts`).
- Die Bestätigungsansicht sagt ehrlich, dass die Mail noch abgeschickt werden muss, und bietet den Mail-Link
  erneut, die Adresse, Instagram und die Telefonnummer an, falls sich kein E-Mail-Programm öffnet.
- Es gibt keine Server-Action, keinen Versanddienst und keine Umgebungsvariablen. Soll später ein echter Versand
  dazukommen (z. B. Resend), ist das ein eigener Schritt mit Anpassung von Abschnitt 6 der Datenschutzerklärung.

## Was sich gegenüber der Demo geändert hat

- Echte Firmendaten überall: Phillip Franke Grafikdesign (Auftritt als Vybs Graphics), Hoher Kamp 40,
  30855 Langenhagen, +49 176 60193983, phillip.creates@icloud.com. Telefon (`tel:`-Link), Adresse und
  Google-Maps-Link stehen im Footer und auf /kontakt; `lib/site.ts` ist die einzige Quelle.
- Impressum und Datenschutzerklärung aus dem CRM eingebunden und fertiggestellt (siehe oben), Sie-Form wie geliefert.
- `noindex` entfernt, `robots.txt` erlaubt Crawling und nennt die Sitemap, jede Seite hat eine kanonische URL,
  Sitemap und Open-Graph laufen über `https://www.vybs-graphics.de` (überschreibbar per `NEXT_PUBLIC_SITE_URL`).
- Strukturierte Daten (JSON-LD `ProfessionalService`) mit Name, rechtlichem Namen, Adresse, Telefon, E-Mail,
  Logo und Instagram.
- Formulare ohne Backend: vorbereitete E-Mail im Programm des Besuchers (siehe oben).
- Robustheit: Lädt das Animationspaket nicht (Blocker, altes Deployment, schwaches Netz), werden alle Inhalte nach
  spätestens sechs Sekunden statisch sichtbar. Mobilmenü schließt bei Navigation und beim Wechsel ins
  Desktop-Layout, Lightbox schließt per Klick auf den Hintergrund.
- Sicherheitsheader (nosniff, Referrer-Policy, X-Frame-Options, Permissions-Policy) in `next.config.ts`;
  Open-Graph-Titel und -Beschreibung sind jetzt seitenspezifisch.
- Bildquellen dokumentiert in `public/images/QUELLEN.md`.

## Nach dem Livegang

- **Doppeltes Vercel-Projekt löschen:** `vybs-graphics-p3ku` ist ein Rest aus der Demo-Phase und wird nicht
  benötigt. Löschen im Vercel-Dashboard (Projekt → Settings → Delete); aus dem Connector heraus war das nicht möglich.
- Vercel-Projekt `vybs-graphics`: Preview-Deployments sind durch Vercel-Login geschützt (Team-Mitglieder sehen sie),
  Production ist öffentlich. Domains `vybs-graphics.de` (leitet auf www um) und `www.vybs-graphics.de` sind verbunden.
- DNS bei INWX: `@ A 216.198.79.1` und `www CNAME 90d2ca11c168490d.vercel-dns-017.com` bleiben.
- Google-Unternehmensprofil mit `https://www.vybs-graphics.de` verknüpfen und Suchkonsole einreichen
  (`https://www.vybs-graphics.de/sitemap.xml`).
- Datei-Upload im Formular (Logo/Fotos) ist nicht nötig: Absender hängen Dateien direkt an die vorbereitete Mail.
- Bundle-Hinweis: Die Motion-Bibliothek wird trotz Lazy-Wrapper komplett geladen (ca. 250 KB JS gzip auf der
  Startseite). Für die Lighthouse-Performance wäre ein Umbau der Header-Animationen auf CSS der nächste Schritt;
  wegen des Design-Freeze nicht angefasst.
- Kundenstimmen, Flyer/Visitenkarten/Logos als echte Arbeiten, sobald Material vorliegt.

## Qualitätsprüfung dieses Stands

- `tsc`, ESLint und Production-Build ohne Fehler.
- Screenshots aller Seiten bei 390 px und 1440 px vor und nach der Umstellung: kein horizontaler Überlauf,
  keine Konsolenfehler.
- Formulare getestet (390 px und 1440 px): leere Abgabe zeigt Feldfehler und setzt den Fokus, gültige Abgabe
  erzeugt den Mail-Link mit korrektem Betreff und Text, Vorauswahl der Leistung aus der URL funktioniert.
- Lighthouse (mobil, lokaler Build): Accessibility 100, Best Practices 100, SEO 100 auf allen geprüften Seiten.
  Performance lokal 77–85 (simulierte Drosselung, Hauptkostenpunkt ist die JavaScript-Menge der
  Animationsbibliotheken); gemessen: Largest Contentful Paint ≈ 1,2–1,3 s, CLS 0. Auf Vercel mit Edge-Cache
  nochmals messen; der Zielwert 90 ist ohne den oben genannten Umbau nicht sicher erreicht.
- Zwei unabhängige Prüfungen (Barrierefreiheit/Robustheit und Code/Sicherheit) durchgeführt, alle als
  „vor Livegang“ eingestuften Befunde umgesetzt; verbleibende Hinweise stehen in diesem Dokument.

## Technik kurz

- Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind v4, `next/font` (Bricolage Grotesque,
  Manrope, selbst gehostet), GSAP ScrollTrigger und Lenis nur bei Bedarf geladen, Motion für Mikroanimationen,
  `prefers-reduced-motion` wird respektiert.
- Inhalte: `lib/content.ts` (Leistungen, Preise, Ablauf, FAQ, Portfolio), `lib/site.ts` (Firmendaten),
  `lib/legal.ts` (Rechtstexte), `DIRECTION.md` (Gestaltungsrichtung „Studio bei Nacht“).
- Hinweis zur Git-Historie: Der erste Commit auf `main` enthält noch Hilfsordner der Entwicklungsumgebung,
  die später entfernt wurden. Im aktuellen Stand sind sie nicht mehr enthalten.
