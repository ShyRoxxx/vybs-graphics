# Visuelle Richtung – Vybs Graphics

## Drei Stichworte für diesen Betrieb

1. **Monogramm mit Lichtkante.** Das einzige Markenzeichen, das es gibt: ein weißes, geometrisch gerundetes
   „VG“-Monogramm auf tiefem Blauschwarz, mit kühlem Glühen und leichtem Glitch. Das ist eine Nacht-,
   Bildschirm- und Studio-Welt, keine Papier-Welt.
2. **Karten in der Hand.** Phillips Produkt ist die Social-Media-Kachel: quadratisch oder 4:5, gekippt,
   gestapelt, mit Lichtkante. Seine eigene Portfolio-Grafik ordnet die Arbeit in drei Familien
   (Creative Branding, Carousel Slide, Social Creatives) und gibt jeder einen eigenen Farbton.
3. **Erst zeigen, dann verkaufen.** Der Kern des Geschäftsmodells ist das kostenlose Beispieldesign für
   kleine Betriebe (Gebäudereinigung, Beratung, Handwerk). Tonfall: direkt, jung, entgegenkommend,
   ohne Agentur-Pathos. Preise sind klein und ehrlich (15 / 20 / 30 €).

## Drei mögliche Richtungen

**A – Studio bei Nacht.** Tiefes Blauschwarz als Bühne, eisweiße Typografie, genau eine Akzentfarbe:
das Eisblau aus dem Logo-Glühen. Neutraltöne kühl gekippt. Die bunten Kacheln sind das einzige
Farbige auf der Seite und leuchten dadurch. Weiche Lichtflecken hinter Inhalten, feine Körnung,
Karten liegen gekippt wie auf einem Schreibtisch. Display-Schrift mit Charakter, aber breit lesbar.

**B – Weißes Papier, harte Kante.** Heller Grund, schwarze Typografie, die drei Kategorie-Verläufe
als volle Farbbänder zwischen den Abschnitten. Redaktioneller Rhythmus, viel Weißraum, Rasterlinien.
Wirkt hochwertig, aber die Logo-Welt (dunkel, Glühen) müsste man dafür aufgeben.

**C – Signalfarbe auf Schwarz.** Schwarz plus eine säurige Akzentfarbe, Brutalismus-Raster, Mono-Labels,
harte Ecken. Modisch und auffällig, aber für die Kundschaft (Inhaberin einer Gebäudereinigung,
Berater, Handwerker) eher abschreckend als einladend.

## Entscheidung: A – Studio bei Nacht

Sie ist die einzige Richtung, die das echte Logo nicht verbiegt, Phillips eigenen Wunsch
(Schwarz, Weiß, dezente Akzente) trifft und seine farbigen Arbeiten als Hauptdarsteller
leuchten lässt. Dunkel ist hier eine Entscheidung aus der Nutzungsszene (Design wird am
Bildschirm angesehen, die Kacheln sind bunt und brauchen Ruhe drumherum), nicht aus Branchengewohnheit.

### Festlegungen

- **Farben:** Grund `#070B12` (Tinte), Fläche `#0D1420`, Linie `rgba(203,224,255,.1)`,
  Text `#F2F6FC`, Nebentext `#9FB0C8` (kühl gekippt, kein Mittelgrau), Akzent `#5CC8FF` (Eisblau aus dem
  Logo). Die drei Kategorie-Töne aus Phillips Portfolio-Grafik (Violett `#8B5CF6`, Grün `#5BC276`,
  Gold `#C9A96A`) kommen ausschließlich als Lichtflecken hinter den jeweiligen Arbeiten vor,
  nie als UI-Farbe. Kein Verlaufstext.
- **Schriften:** Display *Bricolage Grotesque* 800 (eng gesetzt, -0.03em, bis 7.5rem),
  Text *Manrope* 400/600 (gerundete Geometrie wie das Monogramm). Drei Schnitte, zwei Familien.
- **Form:** Karten mit 20–28px Radius (wie die Social-Kacheln), Buttons als Pille, Eingabefelder 14px.
  Ecken nirgends gemischt.
- **Bewegung:** Lenis + GSAP ScrollTrigger als eine Schleife. Signature-Moment im Hero: der Kartenstapel
  aus Phillips echten Arbeiten fächert sich beim Scrollen auf und driftet in drei Geschwindigkeiten
  auseinander, während die Überschrift zurücktritt. Danach pro Abschnitt eine eigene Bewegung
  (Satz, der sich beim Scrollen zusammensetzt; Spalten, die gegenläufig wandern; Sticky-Vorschau
  neben weiterscrollendem Text; Beispiel-Konfigurator mit Live-Vorschau). Nichts wird mitten auf
  der Seite angehalten. `prefers-reduced-motion` zeigt den Endzustand.
- **Bildwelt:** nur Phillips eigene Arbeiten (Portfolio-Grafik) und sein Logo. Keine Stockfotos.
- **Tonfall:** Sie-Form, kurze Sätze, konkret („Instagram-Post“, „Carousel“, „Flyer“), Preise sichtbar.
