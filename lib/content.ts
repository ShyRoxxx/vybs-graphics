export type WorkKind = "Kundenprojekt" | "Konzept";

export type WorkCategory = {
  slug: "branding" | "carousel" | "social";
  title: string;
  titleAccent: string;
  tint: string;
  image: string;
  alt: string;
  client: string;
  kind: WorkKind;
  format: string;
  description: string;
  details: string[];
};

export const workCategories: WorkCategory[] = [
  {
    slug: "branding",
    title: "Creative",
    titleAccent: "Branding",
    tint: "#8B5CF6",
    image: "/images/work-branding.webp",
    alt: "Instagram-Carousel für eine Content-Beratung, drei Slides: helle Kacheln mit violettem Akzent, Einstiegsfrage „Dein Content sieht gut aus. Aber verkauft er auch?“, Liste mit drei Punkten und Abschluss mit Handlungsaufforderung",
    client: "Content-Beratung",
    kind: "Kundenprojekt",
    format: "Instagram-Carousel, 3 Slides",
    description:
      "Eine Beratung wollte auf Instagram nicht wie ein weiteres Coaching-Profil aussehen. Entstanden ist ein Carousel aus hellen Kacheln mit violettem Akzent: eine klare Frage als Einstieg, eine nummerierte Liste in der Mitte und zum Schluss die Einladung zum Gespräch.",
    details: ["Alle drei Slides als zusammenhängende Serie", "Eigene Farbwelt und Typografie", "Abschluss-Slide mit Handlungsaufforderung"],
  },
  {
    slug: "carousel",
    title: "Carousel",
    titleAccent: "Slide",
    tint: "#5BC276",
    image: "/images/work-carousel.webp",
    alt: "Instagram-Carousel für eine Gebäudereinigung, drei Slides: Fensterfotos mit grün-blauen Akzenten, Überschriften „Ihre Fenster verdienen etwas Besseres“, „Ihre Immobilie verdient bewundernde Blicke“ und „Klare Fenster. Besseres Gefühl.“",
    client: "Gebäudereinigung",
    kind: "Kundenprojekt",
    format: "Instagram-Carousel, 3 Slides",
    description:
      "Für eine Gebäudereinigung aus der Region Hildesheim ging es um Fensterreinigung. Statt Putzeimer und Lächeln auf Bestellung: saubere Glasfronten, Tageslicht, das Firmengrün als Akzent und auf jedem Slide ein Argument, das man beim Kunden tatsächlich nennt.",
    details: ["Drei Slides mit durchgehendem Aufbau", "Firmenlogo und Farbwelt übernommen", "Hinweise zu Terminen und Einzugsgebiet"],
  },
  {
    slug: "social",
    title: "Social",
    titleAccent: "Creatives",
    tint: "#C9A96A",
    image: "/images/work-social.webp",
    alt: "Instagram-Carousel für eine Unternehmensberatung, drei Slides: Foto einer Frau am Laptop, goldene Akzente, Überschriften „Warum 90 % scheitern“, „Dein Erfolg ist planbar“ und „Klarer Plan. Klare Entscheidung. Klares Ergebnis.“",
    client: "Unternehmensberatung",
    kind: "Kundenprojekt",
    format: "Instagram-Carousel, 3 Slides",
    description:
      "Eine Beratung für Gründer brauchte Beiträge, die seriös wirken, ohne nach Bank auszusehen. Gold auf Weiß, ein echtes Foto statt Symbolbild und ein Aufbau, der erst das Problem benennt und dann den Plan zeigt.",
    details: ["Drei Slides, die aufeinander aufbauen", "Foto-Integration mit Lichtkante", "Einheitliche Icon-Sprache"],
  },
];

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
