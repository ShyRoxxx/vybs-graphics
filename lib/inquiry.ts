import { site } from "@/lib/site";

export type Inquiry =
  | { kind: "beispiel"; name: string; email: string; service: string; link: string; message: string }
  | { kind: "kontakt"; name: string; email: string; topic: string; message: string };

/**
 * Builds a `mailto:` link with the inquiry prefilled, so the visitor sends it from their own
 * mail program. No backend, no third-party mail service.
 */
export function buildMailto(p: Inquiry): string {
  const subject = p.kind === "beispiel" ? `Kostenloses Beispieldesign: ${p.name}` : `${p.topic}: ${p.name}`;
  const lines =
    p.kind === "beispiel"
      ? [
          `Hallo ${site.ownerFirstName},`,
          "",
          "ich hätte gern ein kostenloses Beispieldesign.",
          "",
          `Name / Unternehmen: ${p.name}`,
          `E-Mail: ${p.email}`,
          `Gewünschte Leistung: ${p.service || "noch offen"}`,
          `Website / Profil: ${p.link || "–"}`,
          "",
          "Was das Design zeigen soll:",
          p.message,
          "",
          "Logo oder Fotos hänge ich an, falls vorhanden.",
        ]
      : [`Hallo ${site.ownerFirstName},`, "", p.message, "", `Name: ${p.name}`, `E-Mail: ${p.email}`, `Thema: ${p.topic}`];
  const params = new URLSearchParams({ subject, body: lines.join("\n") });
  // URLSearchParams encodes spaces as "+", which mail programs show literally.
  return `mailto:${site.email}?${params.toString().replace(/\+/g, "%20")}`;
}
