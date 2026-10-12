const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const site = {
  name: "Vybs Graphics",
  legalName: "Phillip Franke Grafikdesign",
  owner: "Phillip Franke",
  ownerFirstName: "Phillip",
  tagline: "Grafikdesign für Unternehmen, Selbstständige und lokale Betriebe",
  email: "phillip.creates@icloud.com",
  phone: "+49 176 60193983",
  phoneHref: "tel:+4917660193983",
  address: { street: "Hoher Kamp 40", postalCode: "30855", city: "Langenhagen", country: "DE" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hoher+Kamp+40%2C+30855+Langenhagen",
  instagram: "https://www.instagram.com/vybs.graphics/",
  instagramHandle: "@vybs.graphics",
  /** Set NEXT_PUBLIC_SITE_URL in Vercel; the fallback is the domain connected to the project. */
  url: configuredUrl || "https://www.vybs-graphics.de",
  serviceArea: "Langenhagen, Region Hannover und deutschlandweit digital",
  replyTime: "Rückmeldung in der Regel innerhalb von zwei Werktagen",
  replyTimeShort: "in der Regel innerhalb von zwei Werktagen",
  year: new Date().getFullYear(),
} as const;

export const nav = [
  { href: "/portfolio", label: "Arbeiten" },
  { href: "/leistungen", label: "Leistungen & Preise" },
  { href: "/ueber-mich", label: "Über Phillip" },
  { href: "/faq", label: "Fragen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const primaryCta = {
  href: "/kostenloses-beispiel",
  label: "Kostenloses Beispieldesign anfordern",
  short: "Kostenloses Beispiel",
} as const;
