# Übergabe – Website Vybs Graphics (Livegang-Stand)

Stand: 12. Oktober 2026. Livegang-Stand, alle Freigaben liegen vor. Design ist eingefroren (Design-Freeze),
alle Änderungen gegenüber der Demo betreffen Inhalte, Rechtstexte, Funktionen und Technik.

## Freigaben

- Preise (`lib/content.ts`, `priceItems`) und Portfolio (fünf Projekte, Kennzeichnung „Kundenprojekt“, gezeigte
  Kundenlogos) sind am 12.10.2026 über Bilbao Consulting als passend bestätigt worden.
- Navigation und Seitentitel heißen „Über mich“ statt „Über Phillip“.

## Überarbeitung vom 22.10.2026 (Prüfung und Aufwertung)

Prüfung: alle Seiten gecrawlt (keine toten Links, keine Konsolenfehler, keine Überläufe bei 320 bis 1440 px),
axe-Scan ohne Befunde, zwei Review-Durchgänge (Barrierefreiheit/Robustheit und Art Direction).

Umgesetzt:

- Weniger JavaScript: Menü, Akkordeon, Lightbox, Ablauf-Vorschau und Formular-Bestätigung laufen mit CSS statt
  einer Animationsbibliothek; das Animationspaket für Scroll-Effekte lädt erst, wenn der Browser Leerlauf hat.
  Lighthouse-Performance der Startseite (mobil, lokal) von 76 auf 86.
- Hero: Überschrift bricht nicht mehr mit einem Einzelwort um, die drei Slides verdecken sich weniger,
  Vertrauenspunkte als Chips, kürzere Einleitung, schnellerer Einstieg.
- Startseite um rund ein Viertel kürzer: Leistungen als drei Karten mit Ab-Preis, Preise als drei Kacheln mit
  Beispielen statt der kompletten Liste (die bleibt auf /leistungen). Nummerierte Sektionslabels geben Rhythmus.
- Leitsatz: ruhige Einblendung statt umherfliegender Wörter, zentriert.
- Arbeiten: Farbglühen je Projekt, Slide-Badges verdecken keine Kundenlogos mehr.
- Abschluss-Band in der Seitenpalette (vorher fremdes Blau), auf /leistungen mit eigenem Text.
- Über mich (Startseite und Unterseite): drei echte Arbeiten statt Logo-Platzhalter; ein Foto von Phillip kann
  die Collage in `components/work-collage.tsx` später ersetzen.
- Beispielseite: Vorschau aus dem Konfigurator neben dem Formular, auf dem Handy Überschrift, dann Formular.
- Konfigurator-Vorschau nach Phillips Slides aus dem Portfolio gebaut (`components/mock-post.tsx`): Wortmarke
  oben links, Website-Pill oder Slide-Zähler oben rechts, schwere Versal-Headline (Anton) mit zweiter Zeile in
  der Markenfarbe, Marker-Unterstreichung, Subline mit farbigem Satzteil, drei Icon-Karten, großer CTA. Je
  Branche helles Raster- oder dunkles Glow-Layout; Carousel mit drei Slides, Story, Anzeige, Flyer, Visitenkarte
  und Logo in derselben Sprache. Inhalte je Branche in `lib/content.ts` (`industries`).
- Header (23.10.2026): `position: sticky` statt `fixed`, Leiste auf eigener Compositing-Ebene, auf iOS ohne
  Backdrop-Blur, Scroll-Sperre für Menü und Lightbox über `html.scroll-lock` statt `body` (sonst scrollt der
  Sticky-Header weg). Behebt den mitwandernden Header auf dem Handy. Körnungsebene auf Touch-Geräten aus.
- Lichtkante: Karten reagieren dezent auf den Mauszeiger (`components/light-layer.tsx`, nur bei Maus).
- Kleinere Korrekturen: Mobilmenü-Fußzeile, Trennlinien und Pfeile auf /leistungen, Ausrichtung auf FAQ und
  Rechtstexten, 404 mit Arbeit statt leerem Raum, einheitliche Chip-Zustände im Konfigurator, Kontrast auf der
  Kontaktseite, Körnung ohne Kante am Hero-Ende.

Nicht umgesetzt (Vorschläge für später): Vorher/Nachher-Schieber mit einem echten Kundenbeispiel, Instagram-
Profil-Simulation aus dem Konfigurator, GSAP-Flip-Übergang vom Hero-Stapel in die Arbeiten.

## Design „Helles Glas“ (01.11.2026, heute die helle Variante)

- Nur heller Modus. Hinter der ganzen Seite liegt ein festes, statisches Farbfeld (`.color-field` in
  `app/layout.tsx`): vier weiche Verläufe in den Markenfarben Eisblau, Violett, Grün und Gold auf dem hellen,
  leicht getönten Grund `#e8edf7`. Darauf schweben weiße, mattierte Glasflächen.
- Alle Werte zentral als Tokens in `app/globals.css` (`--glass-surface`, `--glass-panel`, `--glass-card`,
  `--glass-edge`, `--glass-shadow`, `--hairline-shadow`, `--glass-blur`, `--fill-gray`). Klassen:
  `.glass` (stark, mit Blur: Header-Pille, Hero, Seitenköpfe, Formulare, Abschluss), `.glass-panel`
  (Inhaltsabschnitte, Blur erst ab 1024 px, auf dem Handy dichteres Weiß) und `.card` (halbtransparent, ohne
  eigenen Blur, Haarlinie).
- Akzent `#1667d9`: das Vybs-Blau, dunkler gesetzt, damit weiße Schrift und blaue Schrift auf Glas den
  Kontrast nach WCAG AA erfüllen. Eine Schrift für alles: Schibsted Grotesk; Anton nur in den Vorschaukacheln.
- Buttons, Auswahl-Chips und Tags als Pillen im Apple-Stil: Hauptbutton blau, Zweitbuttons graue Fläche.
  Felder wie Apple-Suchfelder mit blauem Fokusschein.
- Leitplanken: höchstens drei bis vier Blur-Flächen gleichzeitig im Bild, nichts Bewegtes hinter Glas, kein
  `position: fixed` in einem Element mit `backdrop-filter`. `prefers-reduced-transparency` liefert weiße
  Flächen, auf iOS bleibt die Header-Pille ohne Blur und dafür deckender (Absicherung aus dem Scroll-Fix).
- Token-Namen (`ink`, `text`) stammen aus früheren Versionen, damit alle Komponenten weiterlaufen:
  `ink` ist der helle Grund, `text` die dunkle Schrift.

### Nachtrag 08.11.2026: Dunkel als Standard, Schalter Hell/Dunkel

- Standard ist wieder das dunkle Glas aus der Live-Version vom 01.11. (Grund `#070b12`, Akzent `#5cc8ff`),
  das helle Glas gibt es weiterhin als zweite Variante. Header, Menü, Hero-Band und SEO sind in beiden gleich.
- Technik: `:root` enthält die dunklen Tokens, `:root[data-theme="light"]` die hellen (`app/globals.css`).
  Alles Farbige läuft über Tokens; für Einzelfälle gibt es die Tailwind-Varianten `light:` und `dark:`
  (z. B. Logo `light:invert`).
- Schalter: Sonne/Mond-Knopf im Header (`components/theme-toggle.tsx`), im Handy-Menü zusätzlich „Dunkel | Hell“.
  Die Wahl liegt im `localStorage` (`theme`) und wird von einem kleinen Inline-Skript in `app/layout.tsx`
  vor dem ersten Bild gesetzt, also ohne Aufblitzen. Ohne gespeicherte Wahl gilt immer Dunkel, unabhängig von
  der Systemeinstellung. Die Browserleisten-Farbe (`theme-color`) zieht mit.

### Nachtrag 08.11.2026: Header, Menü, Hero, SEO

- Kein Smooth Scroll mehr: Lenis ist entfernt, die Seite scrollt nativ. `components/route-refresh.tsx` setzt
  nach einem Seitenwechsel nach oben und aktualisiert die GSAP-Scroll-Animationen.
- Header: Glas-Pille, die beim Scrollen schmaler und flacher wird. Auf dem Desktop gleitet eine weiße
  Glasfläche unter dem Menüpunkt mit, über dem die Maus steht; die aktive Seite trägt einen blauen Punkt.
  Der Button „Kostenloses Beispiel“ hat einen Pfeil, der beim Überfahren anstößt.
- Mobilmenü: Pillen-Button mit „Menü“/„Schließen“, darunter ein Vollbild-Glasmenü mit nummerierten, großen
  Einträgen, die nacheinander hereingleiten, einem Streifen „Aktuelle Arbeiten“ und unten dem Hauptbutton plus
  E-Mail und Instagram. Seite dahinter ist gesperrt (`html.scroll-lock`) und `inert`, Escape schließt, der Fokus
  springt zurück auf den Button. Auf iOS ohne Blur, dafür fast deckend.
- Hero: Ortszeile „Grafikdesign aus Langenhagen bei Hannover“ über der Überschrift; die Arbeiten laufen darunter
  als langsames Endlosband (`.reel`), das beim Überfahren oder Fokussieren anhält und bei reduzierter Bewegung
  zu einer normal scrollbaren Reihe wird.
- SEO: Titel und Beschreibungen nennen Langenhagen/Hannover, JSON-LD als `@graph` mit `ProfessionalService`
  und `WebSite`, neues helles Open-Graph-Bild (`app/opengraph-image.tsx`). Technisch war nichts blockiert
  (robots erlaubt alles, Sitemap mit allen Seiten, kanonische URLs auf www, apex leitet per 308 um); die Seite
  war bei Google schlicht noch nicht eingereicht. Search Console ist seit 08.11.2026 angemeldet.

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
- Kundenstimmen, Flyer/Visitenkarten/Logos als echte Arbeiten, sobald Material vorliegt.

## Qualitätsprüfung dieses Stands

- `tsc`, ESLint und Production-Build ohne Fehler.
- Screenshots aller Seiten bei 390 px und 1440 px vor und nach der Umstellung: kein horizontaler Überlauf,
  keine Konsolenfehler.
- Formulare getestet (390 px und 1440 px): leere Abgabe zeigt Feldfehler und setzt den Fokus, gültige Abgabe
  erzeugt den Mail-Link mit korrektem Betreff und Text, Vorauswahl der Leistung aus der URL funktioniert.
- Lighthouse (mobil, lokaler Build, Stand 22.10.2026): Accessibility 100, Best Practices 100, SEO 100 auf
  allen geprüften Seiten; Performance 84–88 (Startseite 86). Gemessen: Largest Contentful Paint ≈ 0,5–1,2 s,
  CLS 0. Auf Vercel mit Edge-Cache nochmals messen.
- Zwei unabhängige Prüfungen (Barrierefreiheit/Robustheit und Code/Sicherheit) durchgeführt, alle als
  „vor Livegang“ eingestuften Befunde umgesetzt; verbleibende Hinweise stehen in diesem Dokument.

## Technik kurz

- Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind v4, `next/font` (anfangs Bricolage Grotesque und Manrope,
  selbst gehostet; heute Schibsted Grotesk und Anton), GSAP ScrollTrigger nur bei Bedarf geladen, natives
  Scrollen ohne Smooth-Scroll-Bibliothek, `prefers-reduced-motion` wird respektiert.
- Inhalte: `lib/content.ts` (Leistungen, Preise, Ablauf, FAQ, Portfolio), `lib/site.ts` (Firmendaten),
  `lib/legal.ts` (Rechtstexte), `DIRECTION.md` (Gestaltungsrichtung „Studio bei Nacht“).
- Hinweis zur Git-Historie: Der erste Commit auf `main` enthält noch Hilfsordner der Entwicklungsumgebung,
  die später entfernt wurden. Im aktuellen Stand sind sie nicht mehr enthalten.
