"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { site } from "@/lib/site";

export type InquiryKind = "beispiel" | "kontakt";

const payloadSchema = z.object({
  kind: z.enum(["beispiel", "kontakt"]),
  name: z.string().trim().min(2).max(200),
  email: z.string().trim().email().max(200),
  service: z.string().trim().max(120).optional(),
  link: z.string().trim().max(300).optional(),
  topic: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10).max(4000),
  /** Honeypot: stays empty for people, bots fill it. */
  company: z.string().max(0).optional(),
});

export type InquiryPayload = z.input<typeof payloadSchema>;

export type InquiryResult = { status: "sent" } | { status: "error"; message: string };

const unavailable: InquiryResult = {
  status: "error",
  message: `Die Anfrage konnte gerade nicht übermittelt werden. Ruf mich an unter ${site.phone} oder schreib direkt an ${site.email}.`,
};

/* ---- simple rate limit per IP (per server instance) ---- */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function buildOwnerMail(p: z.output<typeof payloadSchema>) {
  const subject = p.kind === "beispiel" ? `Kostenloses Beispieldesign: ${p.name}` : `${p.topic ?? "Anfrage"}: ${p.name}`;
  const lines = [
    `Name / Unternehmen: ${p.name}`,
    `E-Mail: ${p.email}`,
    p.kind === "beispiel" ? `Gewünschte Leistung: ${p.service || "noch offen"}` : `Thema: ${p.topic ?? "Allgemeine Anfrage"}`,
    `Website / Profil: ${p.link || "–"}`,
    "",
    p.message,
    "",
    `Gesendet über ${site.url}`,
  ];
  return { subject, text: lines.join("\n") };
}

function buildVisitorMail(p: z.output<typeof payloadSchema>) {
  const subject = p.kind === "beispiel" ? "Deine Anfrage für ein kostenloses Beispieldesign" : "Deine Nachricht an Vybs Graphics";
  const lines = [
    `Hallo ${p.name},`,
    "",
    p.kind === "beispiel"
      ? `danke für deine Anfrage. Ich schaue mir deinen Betrieb an und melde mich mit dem Beispieldesign, ${site.replyTimeShort}. Die Anfrage ist kostenlos und unverbindlich.`
      : `danke für deine Nachricht. Ich melde mich, ${site.replyTimeShort}.`,
    "",
    "Deine Angaben:",
    p.kind === "beispiel" ? `Gewünschte Leistung: ${p.service || "noch offen"}` : `Thema: ${p.topic ?? "Allgemeine Anfrage"}`,
    p.link ? `Website / Profil: ${p.link}` : "",
    "",
    p.message,
    "",
    "Logo oder Fotos kannst du mir einfach per Antwort auf diese E-Mail schicken.",
    "",
    "Viele Grüße",
    `${site.owner}`,
    site.name,
    site.phone,
    site.email,
    site.url,
  ].filter((l) => l !== undefined);
  return { subject, text: lines.join("\n") };
}

async function send(apiKey: string, mail: { from: string; to: string[]; reply_to?: string; subject: string; text: string }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(mail),
  });
  return res.ok;
}

/** Validates server-side, blocks bots and floods, then sends the inquiry to the owner and a confirmation to the visitor. */
export async function sendInquiry(raw: InquiryPayload): Promise<InquiryResult> {
  // Honeypot filled: answer like a success before doing anything else, so the bot learns nothing.
  if (typeof raw === "object" && raw !== null && typeof raw.company === "string" && raw.company.length > 0) {
    return { status: "sent" };
  }
  const parsed = payloadSchema.safeParse(raw);
  if (!parsed.success) {
    return { status: "error", message: "Bitte Name, eine gültige E-Mail-Adresse und ein paar Sätze angeben." };
  }
  const p = parsed.data;

  const h = await headers();
  const ip = (h.get("x-forwarded-for") ?? "").split(",")[0].trim() || h.get("x-real-ip") || "unknown";
  if (limited(ip)) {
    return { status: "error", message: `Zu viele Anfragen in kurzer Zeit. Bitte versuch es in ein paar Minuten noch einmal oder ruf an unter ${site.phone}.` };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return unavailable;

  const to = process.env.INQUIRY_TO ?? site.email;
  const hostname = new URL(site.url).hostname.replace(/^www\./, "");
  const from = process.env.INQUIRY_FROM ?? `${site.name} <anfrage@${hostname}>`;

  try {
    const owner = buildOwnerMail(p);
    const ok = await send(apiKey, { from, to: [to], reply_to: p.email, ...owner });
    if (!ok) return unavailable;
    const visitor = buildVisitorMail(p);
    // The confirmation is a courtesy; a failure here must not hide a successful inquiry.
    await send(apiKey, { from, to: [p.email], reply_to: to, ...visitor }).catch(() => false);
    return { status: "sent" };
  } catch {
    return unavailable;
  }
}
