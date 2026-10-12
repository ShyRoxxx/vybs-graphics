export type WorkKind = "Kundenprojekt" | "Konzept";

export type WorkSlide = { src: string; alt: string };

export type Work = {
  slug: string;
  client: string;
  title: string;
  kind: WorkKind;
  format: string;
  category: "social" | "print" | "branding";
  tint: string;
  featured: boolean;
  description: string;
  details: string[];
  ratio: "4 / 5" | "1 / 1";
  slides: WorkSlide[];
};

export const works: Work[] = [
  {
    slug: "cready-online",
    client: "Cready Online",
    title: "Content, der verkauft",
    kind: "Kundenprojekt",
    format: "Instagram-Carousel, 3 Slides",
    category: "social",
    tint: "#7C3AED",
    featured: true,
    ratio: "4 / 5",
    description:
      "Eine Content-Beratung wollte auf Instagram nicht wie ein weiteres Coaching-Profil aussehen. Das Carousel stellt auf Slide eins eine Frage, nennt auf Slide zwei drei Gründe und zeigt auf Slide drei das Angebot. Helle Fläche, violetter Akzent, türkise Handschrift als Gegenpol.",
    details: ["Eigene Farbwelt mit Violett und Türkis", "Nummerierte Liste als Mittelteil", "Abschluss-Slide mit Handlungsaufforderung"],
    slides: [
      { src: "/images/works/cready-1.webp", alt: "Slide 1 von 3 für Cready Online: große schwarze und violette Schrift „Dein Content sieht gut aus. Aber verkauft er auch?“, darunter „Likes zahlen keine Rechnungen“ mit türkisem Pfeil." },
      { src: "/images/works/cready-2.webp", alt: "Slide 2 von 3 für Cready Online: Überschrift „Warum es nicht funktioniert“ und drei nummerierte Punkte: keine klare Strategie, kein Wiedererkennungswert, zu wenig Conversion-Fokus." },
      { src: "/images/works/cready-3.webp", alt: "Slide 3 von 3 für Cready Online: „Content, der Aufmerksamkeit und Kunden bringt.“ mit vier Icons für Branding, Social Media, KI und Performance und dem Button „Lass uns dein Branding upgraden“." },
    ],
  },
  {
    slug: "eifelhaus-auszeit",
    client: "Eifelhaus Auszeit",
    title: "Raus aus dem Stress",
    kind: "Kundenprojekt",
    format: "Instagram-Serie, 3 Beiträge",
    category: "social",
    tint: "#6B7A4B",
    featured: true,
    ratio: "4 / 5",
    description:
      "Ein Ferienhaus in der Eifel lebt von Ruhe, nicht von Rabattcodes. Die Serie arbeitet mit großen Fotos, einer ruhigen Serifenschrift und wenig Text: Kaminofen, Holzfassade, Wiese. Die Icon-Liste auf dem zweiten Beitrag erklärt, was Gäste erwartet, ohne zu drängen.",
    details: ["Fotos als Hauptdarsteller, Text zurückhaltend", "Serifenschrift passend zur Marke", "Icon-Liste mit fünf Argumenten"],
    slides: [
      { src: "/images/works/eifelhaus-1.webp", alt: "Beitrag für Eifelhaus Auszeit: Kaminofen vor großer Fensterfront mit Blick ins Grüne, Schriftzug „Gönn dir eine Auszeit. Jetzt Verfügbarkeit prüfen.“" },
      { src: "/images/works/eifelhaus-2.webp", alt: "Beitrag für Eifelhaus Auszeit: Überschrift „Was dich erwartet“ und fünf Punkte mit Icons: Sauna und Kaminofen, Natur direkt vor der Tür, absolute Ruhe, seenah, nachhaltiges Wohnen." },
      { src: "/images/works/eifelhaus-3.webp", alt: "Beitrag für Eifelhaus Auszeit: Holzhaus mit Blechdach auf einer Wiese vor Wald, Schriftzug „Raus aus dem Stress. Rein in die Ruhe. Dein Rückzugsort in der Eifel“." },
    ],
  },
  {
    slug: "nettwerk-it",
    client: "Nettwerk IT",
    title: "Was passiert, wenn nichts passiert?",
    kind: "Kundenprojekt",
    format: "Instagram-Carousel, 4 Slides",
    category: "social",
    tint: "#2F7BF6",
    featured: true,
    ratio: "4 / 5",
    description:
      "Ein IT-Dienstleister brauchte Beiträge, die Geschäftsführer ansprechen, nicht Techniker. Das Carousel geht vom Problem (IT-Ausfälle kosten Geld) über die Folgen und die Leistungen zur kostenlosen Analyse. Dunkle Serverraum-Stimmung, Blau als Markenfarbe, Rot nur für das, was wehtut.",
    details: ["Vier Slides mit klarer Dramaturgie", "Dunkle Farbwelt mit zwei Signalfarben", "Abschluss-Slide mit kostenloser Analyse"],
    slides: [
      { src: "/images/works/nettwerk-1.webp", alt: "Slide 1 von 4 für Nettwerk IT: beschädigter Serverschrank mit glühenden Rissen und Euro-Münzen, Überschrift „IT-Probleme? Dann verlierst du täglich Geld.“" },
      { src: "/images/works/nettwerk-2.webp", alt: "Slide 2 von 4 für Nettwerk IT: „Was passiert, wenn nichts passiert?“ mit drei Punkten: langsame Systeme kosten Zeit, Ausfälle kosten Umsätze, unsichere IT kostet Nerven." },
      { src: "/images/works/nettwerk-3.webp", alt: "Slide 3 von 4 für Nettwerk IT: „Unsere Leistungen für Sie“ mit vier Punkten: Cloud-Lösungen, IT-Sicherheit, Netzwerk, IT-Support." },
      { src: "/images/works/nettwerk-4.webp", alt: "Slide 4 von 4 für Nettwerk IT: leuchtendes Häkchen-Symbol im Serverraum, „Lass uns über deine IT reden“ und Button „Kostenlose Analyse sichern“." },
    ],
  },
  {
    slug: "grundstein-betriebswirte",
    client: "Grundstein Betriebswirte",
    title: "Dein Erfolg ist planbar",
    kind: "Kundenprojekt",
    format: "Instagram-Serie, 3 Beiträge",
    category: "social",
    tint: "#C9A96A",
    featured: false,
    ratio: "4 / 5",
    description:
      "Eine Beratung für Gründer und kleine Unternehmen wollte seriös wirken, ohne nach Bank auszusehen. Dunkelblau und Gold, echte Fotos statt Symbolbilder, und auf jedem Beitrag ein klarer Dreischritt: Problem benennen, Plan zeigen, Gespräch anbieten.",
    details: ["Drei Beiträge mit einheitlichem Aufbau", "Fotos mit weichem Verlauf eingebunden", "Kostenloses Erstgespräch als Handlungsaufforderung"],
    slides: [
      { src: "/images/works/grundstein-1.webp", alt: "Beitrag für Grundstein Betriebswirte: „Dein Erfolg ist planbar.“ mit drei Punkten zu Strategie und Planung, Unternehmensentwicklung und persönlicher Begleitung, goldener Button „Kostenloses Erstgespräch“, im Hintergrund gestapelte Steine am Wasser." },
      { src: "/images/works/grundstein-2.webp", alt: "Beitrag für Grundstein Betriebswirte: „Klarer Plan. Klare Entscheidung. Klares Ergebnis.“ mit drei Schritten: Ziele definieren, Strategie entwickeln, umsetzen und wachsen, daneben eine lächelnde Frau mit Brille am Laptop." },
      { src: "/images/works/grundstein-3.webp", alt: "Beitrag für Grundstein Betriebswirte: „Warum 90 % scheitern … und die anderen erfolgreich werden“ mit drei Gründen: kein klarer Plan, falsche Entscheidungen, fehlende Struktur; daneben eine Frau, die sich an den Kopf fasst." },
    ],
  },
  {
    slug: "sandeck-media",
    client: "Sandeck Media",
    title: "Webdesign, das beeindruckt",
    kind: "Kundenprojekt",
    format: "Instagram-Posts, quadratisch",
    category: "social",
    tint: "#F15A22",
    featured: false,
    ratio: "1 / 1",
    description:
      "Für eine Webagentur zwei Leistungsbeiträge in einem System: einmal hell, einmal dunkel, immer mit Orange, dem Logo oben links und einem Illustrationsmotiv rechts. Drei Argumente mit Icons und ein Button, der sagt, was als Nächstes passiert.",
    details: ["Helle und dunkle Variante im selben System", "Große Illustrationen statt Stockfotos", "Icon-Liste mit drei Argumenten"],
    slides: [
      { src: "/images/works/sandeck-webdesign.webp", alt: "Beitrag für Sandeck Media auf schwarzem Grund: „Webdesign, das beeindruckt“, drei Punkte zu Responsive Design, modern und kreativ, SEO-optimiert, Button „Lass uns dein Projekt starten“, rechts ein stilisierter Browser." },
      { src: "/images/works/sandeck-onlineshops.webp", alt: "Beitrag für Sandeck Media auf weißem Grund: „Onlineshops, die verkaufen“, drei Punkte zu Verkaufsstärke, individuellen Lösungen und sicherer Abwicklung, Button „Starte dein E-Commerce-Projekt“, rechts ein großer Einkaufswagen in Orange." },
    ],
  },
];

export const featuredWorks = works.filter((w) => w.featured);

/* ------------------------------------------------------------------ Preise je Leistung */

export type PriceItem = {
  id: string;
  name: string;
  group: "social" | "print" | "branding";
  description: string;
  price: number | null;
  priceNote: string;
  unit: string;
  includes: string[];
};

export const includedByDefault = ["Fertiges Design in deiner Farbwelt", "Alle vereinbarten Dateiformate", "2 Korrekturrunden"];

export const priceItems: PriceItem[] = [
  {
    id: "instagram-post",
    name: "Instagram-Post",
    group: "social",
    description: "Individuell gestaltete Grafik für dein Unternehmen, abgestimmt auf deine Marke, deine Farben und deine Botschaft.",
    price: 20,
    priceNote: "Festpreis",
    unit: "pro Design",
    includes: ["1080 × 1350 px oder quadratisch", "PNG und JPG", ...includedByDefault.slice(2)],
  },
  {
    id: "instagram-carousel",
    name: "Instagram-Carousel",
    group: "social",
    description: "Mehrere Slides, die eine Geschichte erzählen: Einstieg, Argumente, Abschluss. Für Erklärungen, Angebote und Tipps aus deinem Fach.",
    price: 60,
    priceNote: "Festpreis bis 5 Slides, jeder weitere Slide 10 €",
    unit: "pro Carousel",
    includes: ["Bis zu 5 Slides, 1080 × 1350 px", "Jeder Slide einzeln als PNG", "2 Korrekturrunden"],
  },
  {
    id: "instagram-story",
    name: "Instagram-Story",
    group: "social",
    description: "Hochformat für Stories, Reel-Cover und Highlights. Schnell erfasst, auch wenn jemand nur eine Sekunde hinschaut.",
    price: 15,
    priceNote: "Festpreis",
    unit: "pro Design",
    includes: ["1080 × 1920 px", "PNG, auf Wunsch als Vorlage", "2 Korrekturrunden"],
  },
  {
    id: "werbegrafik",
    name: "Werbegrafik & Anzeige",
    group: "social",
    description: "Motive für Meta- und Google-Anzeigen, Banner und digitale Aushänge. Eine Aussage, ein Bild, ein Button.",
    price: 25,
    priceNote: "Festpreis pro Motiv, weitere Formatvarianten je 5 €",
    unit: "pro Motiv",
    includes: ["Ein Motiv im Hauptformat", "PNG und JPG, Format nach Plattform", "2 Korrekturrunden"],
  },
  {
    id: "flyer",
    name: "Flyer",
    group: "print",
    description: "Professionell gestalteter Flyer für deine Leistungen, Angebote oder Veranstaltungen. Druckfertig, damit deine Druckerei direkt loslegen kann.",
    price: 60,
    priceNote: "Festpreis, Vorder- und Rückseite",
    unit: "pro Flyer",
    includes: ["DIN A6 oder A5, beidseitig", "Druck-PDF mit Beschnitt und Vorschau-JPG", "2 Korrekturrunden"],
  },
  {
    id: "visitenkarte",
    name: "Visitenkarte",
    group: "print",
    description: "Ein moderner, professioneller Visitenkartenauftritt, der zu deinem Unternehmen passt und beim Übergeben hängen bleibt.",
    price: 40,
    priceNote: "Festpreis, Vorder- und Rückseite",
    unit: "pro Design",
    includes: ["85 × 55 mm, beidseitig", "Druck-PDF mit Beschnitt", "2 Korrekturrunden"],
  },
  {
    id: "plakat",
    name: "Plakat",
    group: "print",
    description: "Für Schaufenster, Veranstaltungen und Aushänge. Groß genug, um von der Straße aus zu wirken, klar genug, um es im Vorbeigehen zu lesen.",
    price: 60,
    priceNote: "Festpreis",
    unit: "pro Plakat",
    includes: ["DIN A3 bis A1", "Druck-PDF mit Beschnitt", "2 Korrekturrunden"],
  },
  {
    id: "logo",
    name: "Logo & einfacher Markenauftritt",
    group: "branding",
    description: "Eine Bildmarke, dazu Farben und Schriften, damit Beiträge, Flyer und Visitenkarten später zusammenpassen.",
    price: 150,
    priceNote: "ab, je nach Umfang mit festem Angebot vorab",
    unit: "pro Logo",
    includes: ["Logo in allen Dateiformaten, auch als Vektor", "Farb- und Schriftdefinition auf einer Seite", "2 Korrekturrunden"],
  },
  {
    id: "individuell",
    name: "Individuelle Grafikdesign-Aufträge",
    group: "branding",
    description: "Speisekarten, Fahrzeugbeschriftung, Präsentationen, Icons, alles, was nicht in eine Zeile passt. Du beschreibst es, ich nenne vorher einen festen Preis.",
    price: null,
    priceNote: "Festes Angebot nach kurzer Absprache",
    unit: "",
    includes: ["Kurze Abstimmung, dann ein fester Preis", "Dateiformate nach Verwendungszweck", "Korrekturrunden wie vereinbart"],
  },
];

export const priceNote =
  "Alle Preise sind Festpreise pro Design und gelten für Unternehmen und Selbstständige. Du siehst vorher, was du bekommst, und zahlst erst, wenn du dich nach dem kostenlosen Beispiel für den Kauf entscheidest.";

/* ------------------------------------------------------------------ Leistungsbereiche */

export type ServiceGroup = {
  id: "social" | "print" | "branding";
  title: string;
  short: string;
  description: string;
  items: string[];
  tint: string;
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "social",
    title: "Social Media Design",
    short: "Instagram-Posts, Carousels, Stories, Werbegrafiken.",
    description:
      "Beiträge, die zu deinem Profil passen und im Feed auffallen. Ich übernehme Logo, Farben und Fotos von dir und gestalte daraus Kacheln, die man ohne Nachdenken liest. Einzeln oder als Serie für die nächsten Wochen.",
    items: ["Instagram-Posts", "Instagram-Carousels", "Story-Designs", "Werbegrafiken für Social Media", "Anzeigen und digitale Werbemittel"],
    tint: "#5BC276",
  },
  {
    id: "print",
    title: "Printdesign",
    short: "Flyer, Visitenkarten, Plakate und mehr.",
    description:
      "Gedrucktes wird in der Hand gehalten und muss anders funktionieren als ein Beitrag im Feed: größere Schrift, klare Reihenfolge, ein Weg zu dir. Du bekommst druckfertige Daten mit Beschnitt für deine Druckerei.",
    items: ["Flyer", "Visitenkarten", "Plakate", "Speisekarten, Aufsteller, Gutscheine", "Weitere gedruckte Werbemittel"],
    tint: "#C9A96A",
  },
  {
    id: "branding",
    title: "Branding & weitere Leistungen",
    short: "Logos, einfache Markenauftritte, individuelle Aufträge.",
    description:
      "Ein Logo allein ist kein Auftritt. Dazu gehören eine kleine Farbpalette, ein bis zwei Schriften und ein paar Regeln, damit alles zusammenpasst. Und wenn du etwas brauchst, das in keine Kategorie passt, besprechen wir es kurz und ich nenne dir einen festen Preis.",
    items: ["Logos und einfache visuelle Markenauftritte", "Gestaltung von Werbemitteln", "E-Mail-Signaturen, Profilbilder, Highlight-Cover", "Individuelle Grafikdesign-Aufträge nach Absprache"],
    tint: "#8B5CF6",
  },
];

/* ------------------------------------------------------------------ Ablauf */

export type ProcessStep = {
  title: string;
  text: string;
  duration: string;
  preview: "brief" | "draft" | "review" | "decide" | "deliver" | "order";
};

export const processSteps: ProcessStep[] = [
  {
    title: "Du suchst dir eine Leistung aus oder beschreibst, was du brauchst.",
    text: "Instagram-Post, Flyer, Visitenkarte, Logo oder etwas anderes. Du musst nichts entscheiden, was du noch nicht weißt, eine kurze Beschreibung reicht.",
    duration: "2 Minuten",
    preview: "brief",
  },
  {
    title: "Du schickst die Anfrage für dein kostenloses Beispieldesign.",
    text: "Name, E-Mail, gewünschte Leistung, ein paar Sätze. Optional ein Link zu deiner Website oder deinem Instagram-Profil. Damit gehst du keinen Auftrag ein.",
    duration: "Unverbindlich",
    preview: "draft",
  },
  {
    title: "Ich gestalte ein individuelles Beispiel für deinen Betrieb.",
    text: "Mit deinem Namen, deinem Logo und deinen Farben. Bei einem Instagram-Post ein fertiges Motiv, bei einem Flyer eine Gestaltungsvorschau. Kein Standard-Template mit getauschtem Logo.",
    duration: "In der Regel innerhalb weniger Tage",
    preview: "review",
  },
  {
    title: "Du schaust es dir an und entscheidest in Ruhe.",
    text: "Gefällt es dir, geht es weiter. Gefällt es dir nicht oder du willst doch nicht, ist das völlig in Ordnung. Es entstehen keine Kosten und ich frage nicht nach.",
    duration: "So lange du willst",
    preview: "decide",
  },
  {
    title: "Wenn du es haben willst, kaufst du es zum vorher bekannten Festpreis.",
    text: "Der Preis steht schon vor der Anfrage auf dieser Seite. Keine Nachkalkulation, keine Überraschung auf der Rechnung.",
    duration: "Festpreis",
    preview: "deliver",
  },
  {
    title: "Ich nehme vereinbarte Anpassungen vor und liefere die finalen Dateien.",
    text: "Zwei Korrekturrunden sind enthalten. Danach bekommst du alle Dateien im passenden Format, für Instagram als PNG, für den Druck als PDF mit Beschnitt.",
    duration: "Fertig",
    preview: "order",
  },
];

/* ------------------------------------------------------------------ Konfigurator */

export type Industry = {
  id: string;
  label: string;
  headline: string;
  sub: string;
  bullets: string[];
  cta: string;
  tint: string;
  tintSoft: string;
};

export const industries: Industry[] = [
  { id: "reinigung", label: "Reinigung & Facility", headline: "Saubere Fenster. Besseres Gefühl.", sub: "Streifenfreie Ergebnisse vom Profi.", bullets: ["Kurzfristige Termine verfügbar", "Zuverlässig & gründlich"], cta: "Termin anfragen", tint: "#2E9D5B", tintSoft: "#E6F6EC" },
  { id: "handwerk", label: "Handwerk", headline: "Wir kommen, wenn andere absagen.", sub: "Meisterbetrieb mit festen Preisen.", bullets: ["Angebot in 24 Stunden", "Termintreue, die man merkt"], cta: "Angebot anfordern", tint: "#D97A1F", tintSoft: "#FBEEDF" },
  { id: "gastro", label: "Gastronomie & Café", headline: "Heute frisch: Zimtschnecken ab 8 Uhr.", sub: "Solange der Vorrat reicht.", bullets: ["Täglich gebacken", "Auch zum Mitnehmen"], cta: "Tisch reservieren", tint: "#B23A48", tintSoft: "#F9E7E9" },
  { id: "beauty", label: "Beauty & Studio", headline: "Zeit für dich. Termin in 2 Klicks.", sub: "Neue Herbstfarben jetzt im Studio.", bullets: ["Online buchbar", "Parkplätze direkt vor der Tür"], cta: "Jetzt buchen", tint: "#9B5DE5", tintSoft: "#F1E8FB" },
  { id: "beratung", label: "Beratung & Coaching", headline: "Klarer Plan. Klares Ergebnis.", sub: "Erstgespräch kostenlos.", bullets: ["Ziele definieren", "Strategie entwickeln"], cta: "Erstgespräch sichern", tint: "#B8923F", tintSoft: "#F7F0DE" },
  { id: "immobilien", label: "Immobilien", headline: "Neu im Angebot: Helle 3-Zimmer-Wohnung.", sub: "Besichtigung nach Vereinbarung.", bullets: ["Provisionsfrei für Käufer", "Energieausweis liegt vor"], cta: "Exposé anfordern", tint: "#2B6CB0", tintSoft: "#E3EDF9" },
];

export type DesignFormat = {
  id: string;
  label: string;
  ratio: "square" | "portrait" | "story" | "card" | "a4";
  note: string;
  priceId: string;
};

export const designFormats: DesignFormat[] = [
  { id: "post", label: "Instagram-Post", ratio: "portrait", note: "20 €", priceId: "instagram-post" },
  { id: "carousel", label: "Instagram-Carousel", ratio: "portrait", note: "ab 60 €", priceId: "instagram-carousel" },
  { id: "story", label: "Story", ratio: "story", note: "15 €", priceId: "instagram-story" },
  { id: "anzeige", label: "Werbegrafik", ratio: "square", note: "25 €", priceId: "werbegrafik" },
  { id: "flyer", label: "Flyer", ratio: "a4", note: "60 €", priceId: "flyer" },
  { id: "visitenkarte", label: "Visitenkarte", ratio: "card", note: "40 €", priceId: "visitenkarte" },
  { id: "plakat", label: "Plakat", ratio: "a4", note: "60 €", priceId: "plakat" },
  { id: "logo", label: "Logo", ratio: "square", note: "ab 150 €", priceId: "logo" },
];

/* ------------------------------------------------------------------ FAQ */

export const faqs = [
  {
    q: "Was ist das kostenlose Beispieldesign?",
    a: "Ein individuelles Design für deinen Betrieb, bevor du etwas bezahlst. Du sagst mir, welche Leistung du brauchst, ich gestalte ein Beispiel mit deinem Namen, deinem Logo und deinen Farben. Bei einem Instagram-Post ist das ein fertiges Motiv, bei einem Flyer eine Gestaltungsvorschau.",
  },
  {
    q: "Ist die Anfrage wirklich unverbindlich?",
    a: "Ja. Mit der Anfrage erteilst du keinen Auftrag und gehst keinen Vertrag ein. Du bekommst das Beispiel, schaust es dir an und entscheidest dann.",
  },
  {
    q: "Muss ich das Design kaufen, wenn ich es angefordert habe?",
    a: "Nein. Wenn es dir nicht gefällt oder du dich anders entscheidest, entstehen keine Kosten. Das Beispiel ist mein Weg, dir meine Arbeit zu zeigen, nicht dein Risiko.",
  },
  {
    q: "Wie funktioniert der Kauf nach dem Beispieldesign?",
    a: "Du schreibst mir, dass du es haben willst. Dann nehme ich die vereinbarten Anpassungen vor, du bekommst eine Rechnung über den vorher genannten Festpreis und nach Zahlung alle finalen Dateien.",
  },
  {
    q: "Was kostet ein Design?",
    a: "Das steht pro Leistung auf dieser Website: ein Instagram-Post 20 €, eine Story 15 €, ein Carousel bis fünf Slides 60 €, ein Flyer 60 €, eine Visitenkarte 40 €. Für Logos und individuelle Aufträge bekommst du vorab ein festes Angebot.",
  },
  {
    q: "Sind die Preise Festpreise?",
    a: "Ja. Der Preis, den du vor der Anfrage siehst, ist der Preis, den du am Ende zahlst. Nur wenn sich der Umfang ändert, zum Beispiel mehr Slides im Carousel, ändert sich der Preis, und das sage ich dir vorher.",
  },
  {
    q: "Was ist im Preis enthalten?",
    a: "Das fertige Design in deiner Farbwelt, alle vereinbarten Dateiformate und zwei Korrekturrunden. Bei Druckprodukten zusätzlich das druckfertige PDF mit Beschnitt.",
  },
  {
    q: "Wie viele Korrekturen sind enthalten?",
    a: "Zwei Korrekturrunden pro Design. Das reicht in den allermeisten Fällen. Wenn danach noch etwas Größeres geändert werden soll, besprechen wir das vorher, ohne versteckte Kosten.",
  },
  {
    q: "In welchen Dateiformaten erhalte ich mein Design?",
    a: "Für Social Media als PNG und JPG im passenden Format, bei Carousels jeden Slide einzeln. Für Druck ein PDF mit Beschnitt, das jede Druckerei annimmt. Logos zusätzlich als Vektordatei (SVG, PDF).",
  },
  {
    q: "Wie lange dauert die Erstellung?",
    a: "Das kostenlose Beispiel bekommst du in der Regel innerhalb weniger Tage. Nach dem Kauf dauern Anpassungen und finale Dateien meist ein bis drei Werktage, je nach Umfang und wie schnell du Rückmeldung gibst.",
  },
  {
    q: "Kann ich mehrere Designs bestellen?",
    a: "Ja, und für die meisten Betriebe ist das die sinnvollste Form. Viele schicken mir einmal im Monat ihre Themen und bekommen die Beiträge für die nächsten Wochen zum Festpreis pro Design, ohne Vertragslaufzeit.",
  },
  {
    q: "Kann ich auch individuelle Anfragen stellen?",
    a: "Ja. Speisekarte, Fahrzeugbeschriftung, Präsentation, Icons: Beschreib kurz, was du brauchst, und ich nenne dir vorab einen festen Preis. Die Zusammenarbeit läuft komplett digital über E-Mail und Instagram.",
  },
];

/* ------------------------------------------------------------------ Über */

export const aboutPhillip = {
  intro:
    "Hinter vybs.graphics steht Phillip. Ich gestalte Instagram-Designs, Flyer, Visitenkarten, Logos und weitere Werbemittel für Unternehmen, Selbstständige und lokale Betriebe, die professionell auftreten wollen, ohne eine Agentur zu bezahlen.",
  paragraphs: [
    "Angefangen hat es mit Beiträgen für Betriebe aus dem eigenen Umfeld: eine Gebäudereinigung, die auf Instagram nur Handyfotos von Fenstern gepostet hat, eine Beratung, deren Beiträge aussahen wie die von allen anderen. Beide hatten etwas zu sagen, es hat nur niemand hingeschaut.",
    "Daraus ist eine Art zu arbeiten geworden: erst anschauen, was ein Betrieb tatsächlich macht, dann gestalten, was dazu passt. Kein Standard-Template mit getauschtem Logo, sondern Designs, die man dem Betrieb zuordnen kann, auch wenn das Logo fehlt.",
    "Weil sich ein Design schwer beschreiben lässt, bevor man es sieht, mache ich das erste Beispiel kostenlos. Du arbeitest dabei direkt mit mir, nicht mit einem Ticketsystem.",
  ],
  principles: [
    { title: "Lesbar auf dem Handy", text: "Jede Kachel wird auf einem Bildschirm in der Größe einer Handfläche gelesen. Große Schrift, ein Gedanke pro Slide, nichts, was man suchen muss." },
    { title: "Dein Betrieb, nicht meiner", text: "Deine Farben, dein Logo, deine Fotos. Ein Design, das auch ohne Logo erkennbar deins ist. Ich habe keinen Stil, den ich jedem überstülpe." },
    { title: "Feste Preise", text: "Du weißt vorher, was ein Design kostet. Keine Stundensätze, keine Nachkalkulation, keine Überraschung auf der Rechnung." },
    { title: "Schnell, ohne schlampig zu sein", text: "Ein Beitrag darf nicht zwei Wochen dauern. Dafür arbeite ich mit klaren Abläufen und sauberen Vorlagen, die ich für jeden Betrieb neu anlege." },
  ],
};

export const sampleIntro = {
  headline: "Dein kostenloses Beispieldesign.",
  text: "Sag mir kurz, was du brauchst. Ich gestalte ein individuelles Beispiel für deinen Betrieb und schicke es dir zu. Kostenlos, unverbindlich, ohne Kleingedrucktes.",
  reassurance: [
    "Du erteilst keinen Auftrag und gehst keinen Vertrag ein.",
    "Es handelt sich um ein kostenloses Erstbeispiel pro Betrieb, keine unbegrenzte Gratisproduktion.",
    "Gefällt es dir, kaufst du es zum vorher bekannten Festpreis. Wenn nicht, entstehen keine Kosten.",
  ],
};
