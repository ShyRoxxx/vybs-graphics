"use client";

import { useId, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { designFormats, priceTiers } from "@/lib/content";
import { site } from "@/lib/site";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";

type Values = {
  company: string;
  contact: string;
  email: string;
  link: string;
  format: string;
  tier: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export function SampleForm() {
  const params = useSearchParams();
  const id = useId();
  const [values, setValues] = useState<Values>(() => {
    const firma = params.get("firma") ?? "";
    const format = params.get("format") ?? "";
    const branche = params.get("branche");
    const paket = params.get("paket") ?? "";
    return {
      company: firma,
      contact: "",
      email: "",
      link: "",
      format: designFormats.some((f) => f.label === format) ? format : "",
      tier: priceTiers.some((t) => t.id === paket) ? paket : "",
      message: branche ? `Branche: ${branche}\n` : "",
    };
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = (): Errors => {
    const er: Errors = {};
    if (!values.company.trim()) er.company = "Bitte den Namen Ihres Unternehmens angeben, damit das Beispiel in Ihrem Namen entsteht.";
    if (!values.contact.trim()) er.contact = "Bitte sagen Sie mir, wen ich ansprechen darf.";
    if (!values.email.trim()) er.email = "Bitte eine E-Mail-Adresse angeben, an die ich das Beispiel schicken kann.";
    else if (!emailOk(values.email)) er.email = "Diese E-Mail-Adresse sieht unvollständig aus, bitte prüfen Sie sie kurz.";
    if (!values.format) er.format = "Bitte wählen Sie, welche Art Design Sie sehen möchten.";
    if (values.message.trim().length < 10) er.message = "Zwei, drei Sätze reichen: Worum soll es gehen, was soll der Beitrag erreichen?";
    return er;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    const first = Object.keys(er)[0];
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    const tier = priceTiers.find((t) => t.id === values.tier);
    const body = [
      `Unternehmen: ${values.company}`,
      `Ansprechpartner: ${values.contact}`,
      `E-Mail: ${values.email}`,
      `Website / Profil: ${values.link || "–"}`,
      `Gewünschtes Design: ${values.format}`,
      `Preisstufe (optional): ${tier ? `${tier.name} (${tier.price} €)` : "noch offen"}`,
      "",
      "Vorstellungen:",
      values.message,
      "",
      "Logo oder Fotos schicke ich nach Ihrer Rückmeldung als Anhang.",
    ].join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(`Kostenloses Beispieldesign: ${values.company}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  };

  const field = ({
    name,
    label,
    hint,
    children,
  }: {
    name: keyof Values;
    label: string;
    hint?: string;
    children: React.ReactNode;
  }) => (
    <div key={name}>
      <label htmlFor={`${id}-${name}`} className="mb-2 block text-sm font-semibold text-text">
        {label}
        {hint && <span className="ml-2 font-normal text-text-3">{hint}</span>}
      </label>
      {children}
      <AnimatePresence>
        {errors[name] && (
          <motion.p
            id={`${id}-${name}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-sm text-danger"
          >
            {errors[name]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );

  const aria = (name: keyof Values) => ({
    id: `${id}-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="card p-8 md:p-10">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink">
          <CheckIcon size={22} weight="bold" aria-hidden />
        </span>
        <h2 className="mt-6 text-[2rem]">Ihr E-Mail-Programm sollte sich jetzt geöffnet haben.</h2>
        <p className="measure mt-4 text-text-2">
          Die Anfrage ist darin vorbereitet. Schicken Sie sie einfach ab, Logo oder Fotos können Sie direkt anhängen.
          Ich melde mich mit dem Beispieldesign zurück, {site.replyTime.toLowerCase()}.
        </p>
        <p className="measure mt-4 text-text-2">
          Hat sich nichts geöffnet? Dann schreiben Sie mir direkt an{" "}
          <a href={`mailto:${site.email}`} className="link-u text-text">
            {site.email}
          </a>{" "}
          oder per Instagram an{" "}
          <a href={site.instagram} target="_blank" rel="noopener" className="link-u text-text">
            {site.instagramHandle}
          </a>
          .
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn btn-ghost mt-8">
          Zurück zum Formular
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        {field({ name: "company", label: "Name des Unternehmens", children: (
          <input {...aria("company")} className="field" value={values.company} onChange={set("company")} autoComplete="organization" placeholder="z. B. Glanzwerk Reinigung" />
) })}
        {field({ name: "contact", label: "Ansprechpartner", children: (
          <input {...aria("contact")} className="field" value={values.contact} onChange={set("contact")} autoComplete="name" placeholder="Vor- und Nachname" />
) })}
        {field({ name: "email", label: "E-Mail-Adresse", children: (
          <input {...aria("email")} type="email" className="field" value={values.email} onChange={set("email")} autoComplete="email" inputMode="email" placeholder="name@firma.de" />
) })}
        {field({ name: "link", label: "Website oder Social-Media-Profil", hint: "optional", children: (
          <input {...aria("link")} type="text" className="field" value={values.link} onChange={set("link")} inputMode="url" placeholder="www.firma.de oder @instagramname" />
) })}
        {field({ name: "format", label: "Gewünschte Designart", children: (
          <select {...aria("format")} className="field" value={values.format} onChange={set("format")}>
            <option value="">Bitte wählen</option>
            {designFormats.map((f) => (
              <option key={f.id} value={f.label}>
                {f.label}
              </option>
            ))}
            <option value="Etwas anderes">Etwas anderes</option>
          </select>
) })}
        {field({ name: "tier", label: "Preisstufe, falls Sie schon eine im Blick haben", hint: "optional", children: (
          <select {...aria("tier")} className="field" value={values.tier} onChange={set("tier")}>
            <option value="">Noch offen</option>
            {priceTiers.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} – {t.price} € pro Design
              </option>
            ))}
          </select>
) })}
        <div className="md:col-span-2">
          {field({ name: "message", label: "Was schwebt Ihnen vor?", children: (
            <textarea
              {...aria("message")}
              className="field min-h-[9rem] resize-y"
              value={values.message}
              onChange={set("message")}
              placeholder="Worum soll es gehen? Ein Angebot, eine Leistung, eine Neuigkeit? Gibt es Farben oder Beiträge, die Ihnen gefallen?"
            />
) })}
        </div>
      </div>

      <div className="mt-6 rounded-[var(--radius-field)] bg-ink-3/60 px-4 py-3 text-sm text-text-2">
        Logo, Fotos oder andere Dateien? Antworten Sie einfach auf meine Rückmeldung mit Anhang, das ist der einfachste Weg.
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary btn-lg">
          Kostenloses Beispiel anfordern
          <ArrowUpRightIcon size={18} weight="bold" aria-hidden />
        </button>
        <p className="text-sm text-text-3">Kein Kauf, kein Vertrag. Die Anfrage geht als E-Mail an {site.email}.</p>
      </div>
    </form>
  );
}
