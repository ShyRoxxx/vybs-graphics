export const site = {
  name: "Vybs Graphics",
  owner: "Phillip",
  tagline: "Social-Media-Design und Branding für kleine Unternehmen",
  // Platzhalter bis zur Bestätigung durch den Inhaber (siehe Übergabeliste).
  email: "hallo@vybs.graphics",
  instagram: "https://www.instagram.com/vybs.graphics/",
  instagramHandle: "@vybs.graphics",
  url: "https://vybs-graphics.vercel.app",
  serviceArea: "Deutschlandweit, komplett digital",
  replyTime: "Rückmeldung in der Regel innerhalb von zwei Werktagen",
  replyTimeShort: "in der Regel innerhalb von zwei Werktagen",
  year: 2026,
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
  label: "Kostenloses Beispiel anfordern",
  short: "Kostenloses Beispiel",
} as const;
