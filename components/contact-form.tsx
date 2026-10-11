"use client";

import { useId, useState, type FormEvent } from "react";
import { m } from "motion/react";
import { site } from "@/lib/site";
import { DUR, EASE_OUT } from "@/lib/motion";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

type Values = { name: string; email: string; topic: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<Values>({ name: "", email: "", topic: "Individuelles Projekt", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const er: Errors = {};
    if (!values.name.trim()) er.name = "Bitte Ihren Namen angeben, damit ich weiß, mit wem ich schreibe.";
    if (!values.email.trim() || !emailOk(values.email)) er.email = "Bitte eine gültige E-Mail-Adresse angeben, damit ich antworten kann.";
    if (values.message.trim().length < 10) er.message = "Ein paar Sätze zu Ihrem Anliegen helfen mir, direkt passend zu antworten.";
    setErrors(er);
    const first = Object.keys(er)[0];
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    const body = [`Name: ${values.name}`, `E-Mail: ${values.email}`, `Thema: ${values.topic}`, "", values.message].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${values.topic}: ${values.name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: DUR.panel, ease: EASE_OUT }} className="card p-8">
        <m.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2, delay: 0.08 }}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink"
        >
          <CheckIcon size={22} weight="bold" aria-hidden />
        </m.span>
        <h2 className="mt-6 text-[1.75rem]">Ihre Nachricht liegt jetzt in Ihrem E-Mail-Programm.</h2>
        <p className="measure mt-4 text-text-2">
          Einmal auf Senden klicken, dann ist sie bei mir. Falls sich nichts geöffnet hat, schreiben Sie direkt an{" "}
          <a href={`mailto:${site.email}`} className="link-u text-text">
            {site.email}
          </a>
          .
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn btn-ghost mt-8">
          Neue Nachricht
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
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="mb-2 block text-sm font-semibold">
            Ihr Name
          </label>
          <input id={`${id}-name`} type="text" aria-required className="field" value={values.name} onChange={set("name")} autoComplete="name" aria-invalid={!!errors.name || undefined} aria-describedby={errors.name ? `${id}-name-error` : undefined} />
          {err("name")}
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="mb-2 block text-sm font-semibold">
            E-Mail-Adresse
          </label>
          <input id={`${id}-email`} type="email" aria-required className="field" value={values.email} onChange={set("email")} autoComplete="email" inputMode="email" spellCheck={false} autoCapitalize="none" aria-invalid={!!errors.email || undefined} aria-describedby={errors.email ? `${id}-email-error` : undefined} />
          {err("email")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-topic`} className="mb-2 block text-sm font-semibold">
            Worum geht es?
          </label>
          <select id={`${id}-topic`} className="field" value={values.topic} onChange={set("topic")}>
            <option>Individuelles Projekt</option>
            <option>Laufende Zusammenarbeit</option>
            <option>Logo oder Branding</option>
            <option>Allgemeine Frage</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className="mb-2 block text-sm font-semibold">
            Ihre Nachricht
          </label>
          <textarea id={`${id}-message`} aria-required className="field min-h-[9rem] resize-y" value={values.message} onChange={set("message")} aria-invalid={!!errors.message || undefined} aria-describedby={errors.message ? `${id}-message-error` : undefined} />
          {err("message")}
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary btn-lg">
          Nachricht senden
        </button>
        <p className="text-sm text-text-3">Öffnet Ihr E-Mail-Programm mit der fertigen Nachricht.</p>
      </div>
    </form>
  );
}
