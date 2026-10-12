"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { m } from "motion/react";
import { priceItems } from "@/lib/content";
import { site } from "@/lib/site";
import { DUR, EASE_OUT } from "@/lib/motion";
import { buildMailto } from "@/lib/inquiry";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";

type Values = { name: string; email: string; service: string; message: string; link: string };
type Errors = Partial<Record<keyof Values, string>>;

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export function SampleForm() {
  const params = useSearchParams();
  const id = useId();
  const [values, setValues] = useState<Values>(() => {
    const leistung = params.get("leistung") ?? params.get("format") ?? "";
    const firma = params.get("firma") ?? "";
    const branche = params.get("branche");
    return {
      name: firma,
      email: "",
      service: priceItems.some((p) => p.name === leistung) ? leistung : leistung ? "Etwas anderes" : "",
      message: branche ? `Branche: ${branche}\n` : "",
      link: "",
    };
  });
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
    if (values.name.trim().length < 2) er.name = "Bitte deinen Namen oder dein Unternehmen angeben, damit das Beispiel in deinem Namen entsteht.";
    if (!values.email.trim()) er.email = "Bitte eine E-Mail-Adresse angeben, an die ich das Beispiel schicken kann.";
    else if (!emailOk(values.email)) er.email = "Diese E-Mail-Adresse sieht unvollständig aus, bitte prüf sie kurz.";
    if (!values.service) er.service = "Bitte wähl aus, welche Art Design du sehen möchtest.";
    if (values.message.replace(/^Branche:.*\n?/, "").trim().length < 10) er.message = "Zwei, drei Sätze reichen: Worum soll es gehen, was soll das Design erreichen?";
    setErrors(er);
    const first = Object.keys(er)[0];
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    const href = buildMailto({ kind: "beispiel", name: values.name.trim(), email: values.email.trim(), service: values.service, link: values.link.trim(), message: values.message.trim() });
    setMailto(href);
    window.location.href = href;
  };

  const field = (name: keyof Values, label: string, hint: string | undefined, control: React.ReactNode) => (
    <div key={name}>
      <label htmlFor={`${id}-${name}`} className="mb-2 block text-sm font-semibold text-text">
        {label}
        {hint && <span className="ml-2 font-normal text-text-3">{hint}</span>}
      </label>
      {control}
      {errors[name] && (
        <p id={`${id}-${name}-error`} role="alert" className="mt-2 text-sm text-danger">
          {errors[name]}
        </p>
      )}
    </div>
  );

  const aria = (name: keyof Values, required = true) => ({
    id: `${id}-${name}`,
    name,
    "aria-required": required || undefined,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });

  if (mailto) {
    return (
      <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: DUR.panel, ease: EASE_OUT }} className="card p-8 md:p-10" role="status">
        <m.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2, delay: 0.08 }}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink"
        >
          <EnvelopeSimpleIcon size={22} weight="bold" aria-hidden />
        </m.span>
        <h2 ref={doneRef} tabIndex={-1} className="mt-6 text-[2rem] outline-none">
          Deine Anfrage liegt jetzt in deinem E-Mail-Programm.
        </h2>
        <p className="measure mt-4 text-text-2">
          Einmal auf Senden klicken, dann ist sie bei mir. Logo oder Fotos kannst du direkt anhängen. Ich schaue mir deinen Betrieb an und melde mich mit dem Beispieldesign, {site.replyTimeShort}.
        </p>
        <p className="measure mt-4 text-text-2">
          Hat sich nichts geöffnet? Dann{" "}
          <a href={mailto} className="link-u text-text">
            E-Mail-Programm erneut öffnen
          </a>{" "}
          oder schreib direkt an{" "}
          <a href={`mailto:${site.email}`} className="link-u text-text">
            {site.email}
          </a>
          , per Instagram an{" "}
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-u text-text">
            {site.instagramHandle}
            <span className="sr-only"> (öffnet in neuem Tab)</span>
          </a>{" "}
          oder ruf an unter{" "}
          <a href={site.phoneHref} className="link-u text-text">
            {site.phone}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/portfolio" className="btn btn-ghost">
            Arbeiten ansehen
          </Link>
          <button type="button" onClick={() => setMailto(null)} className="btn btn-ghost">
            Zurück zum Formular
          </button>
        </div>
      </m.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 md:p-10">
      <p className="sr-only">Alle Felder außer „Website oder Instagram-Profil“ sind Pflichtfelder.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {field("name", "Name oder Unternehmen", undefined, <input {...aria("name")} className="field" maxLength={200} value={values.name} onChange={set("name")} autoComplete="organization" placeholder="z. B. Glanzwerk Reinigung" />)}
        {field(
          "email",
          "E-Mail-Adresse",
          undefined,
          <input {...aria("email")} type="email" maxLength={200} className="field" value={values.email} onChange={set("email")} autoComplete="email" inputMode="email" spellCheck={false} autoCapitalize="none" placeholder="name@firma.de" />,
        )}
        {field(
          "service",
          "Gewünschte Designleistung",
          undefined,
          <select {...aria("service")} className="field" value={values.service} onChange={set("service")}>
            <option value="">Bitte wählen</option>
            {priceItems.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
                {p.price !== null ? ` · ${p.priceNote.startsWith("ab") ? "ab " : ""}${p.price} €` : " · Angebot"}
              </option>
            ))}
            <option value="Etwas anderes">Etwas anderes</option>
          </select>,
        )}
        {field(
          "link",
          "Website oder Instagram-Profil",
          "optional",
          <input {...aria("link", false)} type="text" maxLength={300} className="field" value={values.link} onChange={set("link")} inputMode="url" autoComplete="url" spellCheck={false} autoCapitalize="none" placeholder="www.firma.de oder @instagramname" />,
        )}
        <div className="md:col-span-2">
          {field(
            "message",
            "Was soll das Design zeigen?",
            undefined,
            <textarea
              {...aria("message")}
              className="field min-h-[8rem] resize-y"
              maxLength={4000}
              value={values.message}
              onChange={set("message")}
              placeholder="Worum geht es? Ein Angebot, eine Leistung, eine Neuigkeit? Hast du Farben oder Beiträge, die dir gefallen?"
            />,
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary btn-lg">
          Kostenloses Beispieldesign anfordern
          <ArrowUpRightIcon size={18} weight="bold" aria-hidden />
        </button>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-text-2 hover:text-text">
          <InstagramLogoIcon size={18} aria-hidden />
          Oder per Instagram schreiben
          <span className="sr-only">(öffnet in neuem Tab)</span>
        </a>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-text-3">
        Kein Kauf, kein Vertrag. Die Anfrage wird in deinem E-Mail-Programm vorbereitet und von dort geschickt. Deine Angaben verwende ich nur für dieses Beispiel und die Antwort darauf. Mehr dazu in der{" "}
        <Link href="/datenschutz" className="link-u">
          Datenschutzerklärung
        </Link>
        .
      </p>
    </form>
  );
}
