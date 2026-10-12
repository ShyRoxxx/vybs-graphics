"use client";

import { useEffect, useId, useRef, useState, useTransition, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { m } from "motion/react";
import { priceItems } from "@/lib/content";
import { site } from "@/lib/site";
import { DUR, EASE_OUT } from "@/lib/motion";
import { sendInquiry, type InquiryResult } from "@/app/actions/inquiry";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";

type Values = { name: string; email: string; service: string; message: string; link: string; company: string };
type Errors = Partial<Record<keyof Values, string>>;

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export function SampleForm() {
  const params = useSearchParams();
  const id = useId();
  const [pending, startTransition] = useTransition();
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
      company: "",
    };
  });
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<InquiryResult | null>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (result?.status === "sent") successRef.current?.focus();
  }, [result]);

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
    startTransition(async () => {
      try {
        setResult(await sendInquiry({ kind: "beispiel", name: values.name, email: values.email, service: values.service, link: values.link, message: values.message, company: values.company }));
      } catch {
        setResult({ status: "error", message: "Die Verbindung ist abgebrochen. Bitte versuch es gleich noch einmal." });
      }
    });
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

  if (result?.status === "sent") {
    return (
      <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: DUR.panel, ease: EASE_OUT }} className="card p-8 md:p-10" role="status">
        <m.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2, delay: 0.08 }}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink"
        >
          <CheckIcon size={22} weight="bold" aria-hidden />
        </m.span>
        <h2 ref={successRef} tabIndex={-1} className="mt-6 text-[2rem] outline-none">
          Deine Anfrage ist angekommen.
        </h2>
        <p className="measure mt-4 text-text-2">
          Danke! Ich schaue mir deinen Betrieb an und melde mich mit dem Beispieldesign, {site.replyTimeShort}. Du bekommst außerdem eine Bestätigung per E-Mail, schau notfalls im Spam-Ordner nach. Logo oder Fotos kannst du mir einfach per Antwort darauf schicken.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/portfolio" className="btn btn-ghost">
            Arbeiten ansehen
          </Link>
          <button type="button" onClick={() => setResult(null)} className="btn btn-ghost">
            Noch eine Anfrage
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

      <div className="hp" aria-hidden="true">
        <label htmlFor={`${id}-hp`}>Bitte dieses Feld leer lassen</label>
        <input id={`${id}-hp`} type="text" name="feld_leer_lassen" tabIndex={-1} autoComplete="off" value={values.company} onChange={set("company")} />
      </div>

      {result?.status === "error" && (
        <div role="alert" className="mt-6 rounded-[var(--radius-field)] bg-danger/10 px-4 py-3 text-sm text-danger">
          <p>{result.message}</p>
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            <a href={site.phoneHref} className="underline">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="underline">
              {site.email}
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="underline">
              {site.instagramHandle}
              <span className="sr-only"> (öffnet in neuem Tab)</span>
            </a>
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary btn-lg" disabled={pending} aria-busy={pending}>
          {pending ? "Wird gesendet …" : "Kostenloses Beispieldesign anfordern"}
          {!pending && <ArrowUpRightIcon size={18} weight="bold" aria-hidden />}
        </button>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-text-2 hover:text-text">
          <InstagramLogoIcon size={18} aria-hidden />
          Oder per Instagram schreiben
          <span className="sr-only">(öffnet in neuem Tab)</span>
        </a>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-text-3">
        Kein Kauf, kein Vertrag. Deine Angaben verwende ich nur für dieses Beispiel und die Antwort darauf. Mehr dazu in der{" "}
        <Link href="/datenschutz" className="link-u">
          Datenschutzerklärung
        </Link>
        .
      </p>
    </form>
  );
}
