export type WorkCategory = {
  slug: "branding" | "carousel" | "social";
  title: string;
  titleAccent: string;
  tint: string;
  image: string;
  alt: string;
  client: string;
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
    alt: "Drei Instagram-Kacheln für eine Content-Beratung: helle Karten mit violettem Akzent, Überschrift „Dein Content sieht gut aus. Aber verkauft er auch?“",
    client: "Content-Beratung",
    description:
      "Eine Beratung wollte auf Instagram nicht wie ein weiteres Coaching-Profil aussehen. Entstanden ist eine Serie aus hellen Kacheln mit einem violetten Akzent, einer klaren Frage als Einstieg und einer nummerierten Liste, die man auch auf dem Handy in drei Sekunden erfasst.",
    details: ["Instagram-Serie, 3 Kacheln", "Eigene Farbwelt und Typografie", "Abschlusskachel mit Handlungsaufforderung"],
  },
  {
    slug: "carousel",
    title: "Carousel",
    titleAccent: "Slide",
    tint: "#5BC276",
    image: "/images/work-carousel.webp",
    alt: "Drei Carousel-Kacheln für eine Gebäudereinigung: Fensterfotos mit grün-blauen Akzenten, Überschrift „Ihre Fenster verdienen etwas Besseres“",
    client: "Gebäudereinigung",
    description:
      "Für eine Gebäudereinigung aus der Region Hildesheim ging es um Fensterreinigung. Statt Putzeimer und Lächeln auf Bestellung: saubere Glasfronten, Tageslicht, das Firmengrün als Akzent und auf jeder Kachel ein Argument, das man beim Wischen tatsächlich nennt.",
    details: ["Carousel mit 3 Slides", "Firmenlogo und Farbwelt übernommen", "Buttons und Hinweise für Termine"],
  },
  {
    slug: "social",
    title: "Social",
    titleAccent: "Creatives",
    tint: "#C9A96A",
    image: "/images/work-social.webp",
    alt: "Drei Social-Media-Kacheln für eine Unternehmensberatung: Foto einer Frau am Laptop, goldene Akzente, Überschrift „Warum 90 % scheitern“",
    client: "Unternehmensberatung",
    description:
      "Eine Beratung für Gründer brauchte Beiträge, die seriös wirken, ohne nach Bank auszusehen. Gold auf Weiß, ein echtes Foto statt Symbolbild und ein Aufbau, der erst das Problem benennt und dann den Plan zeigt.",
    details: ["Beitragsserie mit 3 Motiven", "Foto-Integration mit Lichtkante", "Einheitliche Icon-Sprache"],
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  useCase: string;
  format: string;
  image: string;
  tint: string;
};

export const services: Service[] = [
  {
    slug: "instagram-posts",
    title: "Instagram-Posts",
    short: "Einzelne Kacheln, die zu Ihrem Profil passen.",
    description:
      "Ein einzelner Beitrag, der im Feed auffällt und trotzdem wie aus einem Guss mit dem Rest Ihres Profils wirkt. Ich übernehme Ihr Logo, Ihre Farben und ein Foto von Ihnen und gestalte daraus eine Kachel, die man ohne Nachdenken liest.",
    useCase: "Für Angebote, Neuigkeiten, Teamvorstellungen oder einfach regelmäßigen Content.",
    format: "1080 × 1350 px oder quadratisch, als PNG und als Vorlage",
    image: "/images/work-branding.webp",
    tint: "#8B5CF6",
  },
  {
    slug: "carousels",
    title: "Carousels",
    short: "Mehrere Slides, die eine Geschichte erzählen.",
    description:
      "Ein Carousel hält Leute länger auf Ihrem Beitrag, weil sie weiterwischen. Ich baue die Dramaturgie: eine Frage oder Aussage auf Slide eins, Argumente in der Mitte, auf dem letzten Slide die Handlungsaufforderung.",
    useCase: "Für Erklärungen, Vorher-nachher, Leistungsübersichten und Tipps aus Ihrem Fach.",
    format: "3 bis 10 Slides, 1080 × 1350 px",
    image: "/images/work-carousel.webp",
    tint: "#5BC276",
  },
  {
    slug: "werbeanzeigen",
    title: "Werbeanzeigen",
    short: "Motive für Meta- und Google-Anzeigen.",
    description:
      "Anzeigen brauchen ein Motiv, das in einer Sekunde sagt, worum es geht, und einen Button, der klar ist. Ich gestalte die Creatives in allen Formaten, die Instagram, Facebook und das Google-Displaynetzwerk verlangen.",
    useCase: "Für Aktionen, Neueröffnungen, Saisonangebote und Mitarbeitersuche.",
    format: "Feed, Story und Querformat, bei Bedarf in mehreren Varianten zum Testen",
    image: "/images/work-social.webp",
    tint: "#C9A96A",
  },
  {
    slug: "flyer-print",
    title: "Flyer & Print",
    short: "Flyer, Plakate, Speisekarten, Aufsteller.",
    description:
      "Gedrucktes wird in der Hand gehalten, deshalb muss es anders funktionieren als ein Beitrag im Feed: größere Schrift, klare Reihenfolge, ein Weg zu Ihnen. Sie bekommen druckfertige Daten mit Beschnitt und können bei Ihrer Druckerei bestellen.",
    useCase: "Für Postwurfsendungen, Auslagen im Laden, Messen und Veranstaltungen.",
    format: "DIN A6 bis A2, druckfertiges PDF mit 3 mm Beschnitt",
    image: "/images/work-carousel.webp",
    tint: "#5BC276",
  },
  {
    slug: "logo-branding",
    title: "Logo & Branding",
    short: "Eine Bildmarke und die Regeln drumherum.",
    description:
      "Ein Logo allein ist kein Auftritt. Zum Logo gehört eine kleine Farbpalette, ein bis zwei Schriften und ein paar Regeln, damit Beiträge, Flyer und Visitenkarten später zusammenpassen. Genau das stelle ich zusammen.",
    useCase: "Für Gründungen, Umbenennungen und Betriebe, deren Logo noch aus der Gründungszeit stammt.",
    format: "Logo in allen Dateiformaten, Farb- und Schriftdefinition, Kurz-Styleguide",
    image: "/images/work-branding.webp",
    tint: "#8B5CF6",
  },
  {
    slug: "visitenkarten",
    title: "Visitenkarten & Kleinkram",
    short: "Visitenkarten, Signaturen, Profilbilder, Highlight-Cover.",
    description:
      "Die vielen kleinen Dinge, die ein Unternehmen jeden Tag zeigt: Visitenkarte, E-Mail-Signatur, Instagram-Highlight-Cover, Profilbild, Google-Profil-Bild. Jedes für sich eine Kleinigkeit, zusammen der Unterschied zwischen Hobby und Betrieb.",
    useCase: "Für alle, die schon ein Logo haben und es überall gleich gut zeigen wollen.",
    format: "Je nach Bedarf, meist im Paket",
    image: "/images/work-social.webp",
    tint: "#C9A96A",
  },
];

export type PriceTier = {
  id: "basic" | "standard" | "custom";
  name: string;
  price: number;
  perWhat: string;
  summary: string;
  includes: string[];
  bestFor: string;
};

export const priceTiers: PriceTier[] = [
  {
    id: "basic",
    name: "Basic",
    price: 15,
    perWhat: "pro Design",
    summary: "Ein Motiv auf Basis einer bestehenden Vorlage. Ihr Text, Ihr Logo, Ihre Farben.",
    includes: ["1 Instagram-Post oder Story", "Aufbau auf einer bewährten Vorlage", "1 Korrekturrunde", "Lieferung als PNG"],
    bestFor: "Regelmäßige Beiträge, die schnell gehen sollen",
  },
  {
    id: "standard",
    name: "Standard",
    price: 20,
    perWhat: "pro Design",
    summary: "Ein eigens gestaltetes Motiv mit Fotoeinbindung und Ihrer Farbwelt.",
    includes: ["1 Post, Story oder Anzeigenmotiv", "Eigener Aufbau für Ihr Thema", "Fotoeinbindung und Freistellung", "2 Korrekturrunden", "Lieferung als PNG und PDF"],
    bestFor: "Angebote, Aktionen, Teamvorstellungen",
  },
  {
    id: "custom",
    name: "Custom",
    price: 30,
    perWhat: "pro Design",
    summary: "Vollständig individuell, auch als Carousel oder Flyer, mit Konzept vorab.",
    includes: ["Carousel bis 5 Slides, Flyer oder Anzeigen-Set", "Kurzes Konzept vor der Gestaltung", "Fotos, Icons und Illustration nach Bedarf", "Korrekturen bis zur Freigabe", "Alle Dateiformate inklusive Quelldatei"],
    bestFor: "Alles, was mehr erklären muss als ein einzelner Beitrag",
  },
];

export const priceNote =
  "Die Preise gelten für einzelne Designs. Logo-Entwicklung, komplette Brandings und laufende Betreuung werden nach Aufwand kalkuliert. Sie bekommen vorher einen festen Preis, keine Überraschungen hinterher.";

export type ProcessStep = {
  title: string;
  text: string;
  duration: string;
  preview: "brief" | "draft" | "review" | "deliver" | "order";
};

export const processSteps: ProcessStep[] = [
  {
    title: "Sie sagen mir, was Sie brauchen.",
    text: "Über das Formular, in zwei Minuten: Firmenname, Website oder Instagram, welche Art Design, was Ihnen vorschwebt. Mehr brauche ich für den Anfang nicht.",
    duration: "2 Minuten",
    preview: "brief",
  },
  {
    title: "Ich schaue mir Ihren Betrieb an.",
    text: "Ihre Website, Ihr Profil, Ihre Fotos, Ihre Mitbewerber. Daraus entsteht ein Bild davon, wie Sie auftreten und wo noch Luft ist.",
    duration: "Am selben Tag",
    preview: "draft",
  },
  {
    title: "Sie bekommen ein echtes Beispieldesign.",
    text: "Kein Mockup, keine Skizze: ein fertiges Motiv in Ihrem Namen, mit Ihrem Logo und Ihren Farben. Kostenlos und ohne Verpflichtung.",
    duration: "In der Regel innerhalb weniger Tage",
    preview: "review",
  },
  {
    title: "Sie entscheiden in Ruhe.",
    text: "Gefällt es Ihnen, beauftragen Sie das Design oder gleich eine Serie. Gefällt es nicht, war es ein Versuch, der Sie nichts gekostet hat.",
    duration: "So lange Sie wollen",
    preview: "deliver",
  },
  {
    title: "Ab dann läuft es.",
    text: "Sie schicken mir Themen, ich liefere Designs zum festen Preis. Viele Betriebe schicken mir einmal im Monat eine Liste und bekommen die Beiträge für die nächsten Wochen.",
    duration: "Laufend",
    preview: "order",
  },
];

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
  {
    id: "reinigung",
    label: "Reinigung & Facility",
    headline: "Saubere Fenster. Besseres Gefühl.",
    sub: "Streifenfreie Ergebnisse vom Profi.",
    bullets: ["Kurzfristige Termine verfügbar", "Zuverlässig & gründlich"],
    cta: "Termin anfragen",
    tint: "#2E9D5B",
    tintSoft: "#E6F6EC",
  },
  {
    id: "handwerk",
    label: "Handwerk",
    headline: "Wir kommen, wenn andere absagen.",
    sub: "Meisterbetrieb mit festen Preisen.",
    bullets: ["Angebot in 24 Stunden", "Termintreue, die man merkt"],
    cta: "Angebot anfordern",
    tint: "#D97A1F",
    tintSoft: "#FBEEDF",
  },
  {
    id: "gastro",
    label: "Gastronomie & Café",
    headline: "Heute frisch: Zimtschnecken ab 8 Uhr.",
    sub: "Solange der Vorrat reicht.",
    bullets: ["Täglich gebacken", "Auch zum Mitnehmen"],
    cta: "Tisch reservieren",
    tint: "#B23A48",
    tintSoft: "#F9E7E9",
  },
  {
    id: "beauty",
    label: "Beauty & Studio",
    headline: "Zeit für dich. Termin in 2 Klicks.",
    sub: "Neue Herbstfarben jetzt im Studio.",
    bullets: ["Online buchbar", "Parkplätze direkt vor der Tür"],
    cta: "Jetzt buchen",
    tint: "#9B5DE5",
    tintSoft: "#F1E8FB",
  },
  {
    id: "beratung",
    label: "Beratung & Coaching",
    headline: "Klarer Plan. Klares Ergebnis.",
    sub: "Erstgespräch kostenlos.",
    bullets: ["Ziele definieren", "Strategie entwickeln"],
    cta: "Erstgespräch sichern",
    tint: "#B8923F",
    tintSoft: "#F7F0DE",
  },
  {
    id: "immobilien",
    label: "Immobilien",
    headline: "Neu im Angebot: Helle 3-Zimmer-Wohnung.",
    sub: "Besichtigung nach Vereinbarung.",
    bullets: ["Provisionsfrei für Käufer", "Energieausweis liegt vor"],
    cta: "Exposé anfordern",
    tint: "#2B6CB0",
    tintSoft: "#E3EDF9",
  },
];

export type DesignFormat = {
  id: string;
  label: string;
  ratio: "square" | "portrait" | "story" | "wide";
  note: string;
};

export const designFormats: DesignFormat[] = [
  { id: "post", label: "Instagram-Post", ratio: "portrait", note: "1080 × 1350" },
  { id: "carousel", label: "Carousel", ratio: "portrait", note: "3 bis 10 Slides" },
  { id: "story", label: "Story / Reel-Cover", ratio: "story", note: "1080 × 1920" },
  { id: "anzeige", label: "Werbeanzeige", ratio: "square", note: "Meta & Google" },
  { id: "flyer", label: "Flyer", ratio: "portrait", note: "DIN A6 / A5" },
  { id: "logo", label: "Logo", ratio: "square", note: "Bildmarke & Wortmarke" },
];

export const faqs = [
  {
    q: "Was kostet das Beispieldesign wirklich?",
    a: "Nichts. Sie bekommen ein fertiges Motiv für Ihren Betrieb, ohne Rechnung und ohne Verpflichtung. Ich mache das, weil ein echtes Beispiel mehr überzeugt als jedes Portfolio. Wenn es Ihnen gefällt, können Sie es beauftragen, müssen es aber nicht.",
  },
  {
    q: "Wie lange dauert es, bis ich das Beispiel bekomme?",
    a: "In der Regel ein paar Tage. Ich melde mich vorher kurz, falls ich noch eine Frage habe, zum Beispiel zu Ihrem Logo oder zu einem Foto. Je mehr Sie mir im Formular schon mitgeben, desto schneller geht es.",
  },
  {
    q: "Was brauche ich, damit es losgehen kann?",
    a: "Im Idealfall Ihr Logo, ein bis zwei Fotos aus Ihrem Betrieb und eine Vorstellung, worum es im Beitrag gehen soll. Wenn Sie nichts davon haben, geht es trotzdem: Dann arbeite ich mit Ihrem Namen, einer passenden Farbwelt und Text, und wir ergänzen Fotos später.",
  },
  {
    q: "Welche Dateien bekomme ich?",
    a: "Für Social Media fertige PNG-Dateien im richtigen Format, bei Carousels jeden Slide einzeln. Für Druck ein PDF mit Beschnitt, das jede Druckerei annimmt. Beim Custom-Paket zusätzlich die Quelldatei, falls Sie später selbst Kleinigkeiten ändern wollen.",
  },
  {
    q: "Kann ich auch regelmäßig Designs bekommen?",
    a: "Ja, und das ist für die meisten Betriebe die sinnvollste Form. Sie schicken mir einmal im Monat Ihre Themen, ich liefere die Beiträge für die nächsten Wochen zum festen Preis pro Design. Ohne Vertragslaufzeit.",
  },
  {
    q: "Arbeiten Sie auch mit Betrieben außerhalb Ihrer Region?",
    a: "Ja. Die Zusammenarbeit läuft komplett digital über E-Mail und Instagram. Ich brauche nichts vor Ort, nur Ihre Dateien und ein kurzes Gespräch, wenn etwas unklar ist.",
  },
];

export const aboutPhillip = {
  intro:
    "Hinter Vybs Graphics steht Phillip. Ich gestalte Social-Media-Beiträge, Anzeigen, Flyer und Logos für Unternehmen, Selbstständige und lokale Geschäfte, die professioneller auftreten wollen, ohne eine Agentur zu bezahlen.",
  paragraphs: [
    "Angefangen hat es mit Beiträgen für Betriebe aus dem eigenen Umfeld: eine Gebäudereinigung, die auf Instagram einfach nur Handyfotos von Fenstern gepostet hat, eine Beratung, deren Beiträge aussahen wie die von allen anderen. Beide hatten etwas zu sagen, es hat nur niemand hingeschaut.",
    "Daraus ist eine Art zu arbeiten geworden, die sich bis heute nicht verändert hat: erst anschauen, was ein Betrieb tatsächlich macht, dann gestalten, was dazu passt. Kein Standard-Template mit getauschtem Logo, sondern eine Kachel, die man dem Betrieb zuordnen kann, auch wenn das Logo fehlt.",
    "Weil ich weiß, dass sich ein Design schwer beschreiben lässt, bevor man es sieht, mache ich das erste Beispiel kostenlos. Das ist keine Verkaufsmasche, sondern die ehrlichste Art zu zeigen, was Sie bekommen würden.",
  ],
  principles: [
    { title: "Lesbar auf dem Handy", text: "Jede Kachel wird auf einem Bildschirm in der Größe einer Handfläche gelesen. Große Schrift, ein Gedanke pro Slide, nichts, was man suchen muss." },
    { title: "Ihr Betrieb, nicht meiner", text: "Ihre Farben, Ihr Logo, Ihre Fotos. Ein Design, das auch ohne Logo erkennbar Ihres ist. Ich habe keinen Stil, den ich jedem überstülpe." },
    { title: "Feste Preise", text: "Sie wissen vorher, was ein Design kostet. Keine Stundensätze, keine Nachkalkulation, keine Überraschung auf der Rechnung." },
    { title: "Schnell, ohne schlampig zu sein", text: "Ein Beitrag darf nicht zwei Wochen dauern. Dafür arbeite ich mit klaren Abläufen und sauberen Vorlagen, die ich für jeden Betrieb neu anlege." },
  ],
};

export const sampleIntro = {
  headline: "Ihr erstes Design. Kostenlos, in Ihrem Namen.",
  text: "Beschreiben Sie kurz Ihren Betrieb und was Sie brauchen. Ich gestalte daraus ein echtes Beispieldesign und schicke es Ihnen zu. Ohne Rechnung, ohne Verpflichtung, ohne Kleingedrucktes.",
  reassurance: [
    "Sie schließen keinen Kauf ab und gehen keinen Vertrag ein.",
    "Ihre Angaben werden nur für dieses eine Beispiel verwendet.",
    "Das Beispiel gehört nach der Beauftragung Ihnen, vorher bleibt es ein Vorschlag.",
  ],
};
