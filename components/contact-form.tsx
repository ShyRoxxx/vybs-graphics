"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { m } from "motion/react";
import { site } from "@/lib/site";
import { DUR, EASE_OUT } from "@/lib/motion";
import { buildMailto } from "@/lib/inquiry";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";

type Values = { name: string; email: string; topic: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<Values>({ name: "", email: "", topic: "Individuelles Projekt", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [mailto, setMailto] = useState<string | null>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (mailto) doneRef.current?.focus();
  }, [mailto]);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const er: Errors = {};
    if (values.name.trim().length < 2) er.name = "Bitte deinen Namen angeben, damit ich weiß, mit wem ich schreibe.";
    if (!values.email.trim() || !emailOk(values.email)) er.email = "Bitte eine gültige E-Mail-Adresse angeben, damit ich antworten kann.";
    if (values.message.trim().length < 10) er.message = "Ein paar Sätze zu deinem Anliegen helfen mir, direkt passend zu antworten.";
    setErrors(er);
    const first = Object.keys(er)[0];
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    const href = buildMailto({ kind: "kontakt", name: values.name.trim(), email: values.email.trim(), topic: values.topic, message: values.message.trim() });
    setMailto(href);
    window.location.href = href;
  };

  if (mailto) {
    return (
      <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: DUR.panel, ease: EASE_OUT }} className="card p-8" role="status">
        <m.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2, delay: 0.08 }}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink"
        >
          <EnvelopeSimpleIcon size={22} weight="bold" aria-hidden />
        </m.span>
        <h2 ref={doneRef} tabIndex={-1} className="mt-6 text-[1.75rem] outline-none">
          Deine Nachricht liegt jetzt in deinem E-Mail-Programm.
        </h2>
        <p className="measure mt-4 text-text-2">Einmal auf Senden klicken, dann ist sie bei mir. Ich melde mich, {site.replyTimeShort}.</p>
        <p className="measure mt-4 text-text-2">
          Hat sich nichts geöffnet? Dann{" "}
          <a href={mailto} className="link-u text-text">
            E-Mail-Programm erneut öffnen
          </a>{" "}
          oder schreib direkt an{" "}
          <a href={`mailto:${site.email}`} className="link-u text-text">
            {site.email}
          </a>
          . Telefonisch erreichst du mich unter{" "}
          <a href={site.phoneHref} className="link-u text-text">
            {site.phone}
          </a>
          .
        </p>
        <button type="button" onClick={() => setMailto(null)} className="btn btn-ghost mt-8">
          Zurück zum Formular
        </button>
      </m.div>
    );
  }

  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={`${id}-${k}-error`} role="alert" className="mt-2 text-sm text-danger">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 md:p-8">
      <p className="sr-only">Alle Felder sind Pflichtfelder.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="mb-2 block text-sm font-semibold">
            Dein Name
          </label>
          <input id={`${id}-name`} name="name" type="text" maxLength={200} aria-required className="field" value={values.name} onChange={set("name")} autoComplete="name" aria-invalid={!!errors.name || undefined} aria-describedby={errors.name ? `${id}-name-error` : undefined} />
          {err("name")}
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="mb-2 block text-sm font-semibold">
            E-Mail-Adresse
          </label>
          <input id={`${id}-email`} name="email" type="email" maxLength={200} aria-required className="field" value={values.email} onChange={set("email")} autoComplete="email" inputMode="email" spellCheck={false} autoCapitalize="none" aria-invalid={!!errors.email || undefined} aria-describedby={errors.email ? `${id}-email-error` : undefined} />
          {err("email")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-topic`} className="mb-2 block text-sm font-semibold">
            Worum geht es?
          </label>
          <select id={`${id}-topic`} name="topic" className="field" value={values.topic} onChange={set("topic")}>
            <option>Individuelles Projekt</option>
            <option>Laufende Zusammenarbeit</option>
            <option>Logo oder Branding</option>
            <option>Allgemeine Frage</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className="mb-2 block text-sm font-semibold">
            Deine Nachricht
          </label>
          <textarea id={`${id}-message`} name="message" maxLength={4000} aria-required className="field min-h-[9rem] resize-y" value={values.message} onChange={set("message")} aria-invalid={!!errors.message || undefined} aria-describedby={errors.message ? `${id}-message-error` : undefined} />
          {err("message")}
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary btn-lg">
          Nachricht senden
        </button>
        <p className="text-sm text-text-3">
          Die Nachricht wird in deinem E-Mail-Programm vorbereitet.{" "}
          <Link href="/datenschutz" className="link-u">
            Datenschutz
          </Link>
        </p>
      </div>
    </form>
  );
}
