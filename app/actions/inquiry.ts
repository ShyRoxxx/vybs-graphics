"use server";

import { site } from "@/lib/site";

export type InquiryKind = "beispiel" | "kontakt";

export type InquiryPayload = {
  kind: InquiryKind;
  name: string;
  email: string;
  service?: string;
  link?: string;
  message: string;
  topic?: string;
};

export type InquiryResult = { status: "sent" } | { status: "mailto"; href: string } | { status: "error"; message: string };

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

function buildMail(p: InquiryPayload) {
  const subject = p.kind === "beispiel" ? `Kostenloses Beispieldesign: ${p.name}` : `${p.topic ?? "Anfrage"}: ${p.name}`;
  const lines = [
    `Name / Unternehmen: ${p.name}`,
    `E-Mail: ${p.email}`,
    p.kind === "beispiel" ? `Gewünschte Leistung: ${p.service || "noch offen"}` : `Thema: ${p.topic ?? "Allgemeine Anfrage"}`,
    `Website / Profil: ${p.link || "–"}`,
    "",
    p.message.trim(),
    "",
    p.kind === "beispiel" ? "Logo oder Fotos schicke ich nach deiner Rückmeldung als Anhang." : "",
  ];
  return { subject, body: lines.join("\n").trim() };
}

/**
 * Sends the inquiry through Resend when RESEND_API_KEY is configured.
 * Without a key the client receives a prepared mailto link, so the demo never shows a fake success.
 */
export async function sendInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  const name = payload.name.trim().slice(0, 200);
  const email = payload.email.trim().slice(0, 200);
  const message = payload.message.trim().slice(0, 4000);
  if (!name || !emailOk(email) || message.length < 10) {
    return { status: "error", message: "Bitte Name, eine gültige E-Mail-Adresse und ein paar Sätze angeben." };
  }
  const clean: InquiryPayload = { ...payload, name, email, message, service: payload.service?.slice(0, 120), link: payload.link?.slice(0, 300), topic: payload.topic?.slice(0, 120) };
  const { subject, body } = buildMail(clean);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO ?? site.email;
  const from = process.env.INQUIRY_FROM ?? `Vybs Graphics Website <website@${new URL(site.url).hostname}>`;

  if (!apiKey) {
    return { status: "mailto", href: `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject, text: body }),
    });
    if (!res.ok) {
      return { status: "error", message: "Die Anfrage konnte gerade nicht übermittelt werden." };
    }
    return { status: "sent" };
  } catch {
    return { status: "error", message: "Die Anfrage konnte gerade nicht übermittelt werden." };
  }
}
