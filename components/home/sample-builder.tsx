"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { designFormats, industries, priceItems } from "@/lib/content";
import { MockPost } from "@/components/mock-post";
import { Reveal } from "@/components/reveal";

export function SampleBuilder() {
  const [company, setCompany] = useState("");
  const [industryId, setIndustryId] = useState(industries[0].id);
  const [formatId, setFormatId] = useState(designFormats[0].id);
  const inputId = useId();

  const industry = industries.find((i) => i.id === industryId)!;
  const format = designFormats.find((f) => f.id === formatId)!;

  const params = new URLSearchParams();
  if (company.trim()) params.set("firma", company.trim());
  params.set("branche", industry.label);
  params.set("leistung", priceItems.find((p) => p.id === format.priceId)?.name ?? format.label);

  return (
    <section id="konfigurator" className="section relative scroll-mt-20 overflow-hidden">
      <div aria-hidden className="orb drift-a right-[-20%] top-[0%] h-[40rem] w-[40rem] opacity-30" style={{ background: industry.tint }} />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <div>
            <Reveal as="h2" className="max-w-[14ch] text-[clamp(2.25rem,5.5vw,4.75rem)]">
              Probier es aus. Mit deinem Namen.
            </Reveal>
            <Reveal as="p" className="measure mt-6 text-text-2" delay={0.1}>
              Tipp deinen Firmennamen ein und wähl Branche und Leistung. Die Vorschau zeigt, in welche Richtung
              ein Design gehen kann. Dein echtes Beispiel gestalte ich dann individuell, mit deinem Logo, deinen
              Fotos und deinem Thema.
            </Reveal>

            <Reveal className="mt-10 space-y-8" delay={0.2}>
              <div>
                <label htmlFor={inputId} className="mb-2 block text-sm font-semibold text-text-2">
                  Dein Firmenname
                </label>
                <input
                  id={inputId}
                  className="field max-w-md"
                  placeholder="z. B. Glanzwerk Reinigung"
                  value={company}
                  maxLength={40}
                  onChange={(e) => setCompany(e.target.value)}
                  autoComplete="organization"
                />
              </div>

              <fieldset>
                <legend className="mb-3 text-sm font-semibold text-text-2">Branche</legend>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => {
                    const on = ind.id === industryId;
                    return (
                      <label key={ind.id} className="relative">
                        <input type="radio" name="branche" value={ind.id} checked={on} onChange={() => setIndustryId(ind.id)} className="peer sr-only" />
                        <span
                          className={`inline-flex min-h-11 cursor-pointer items-center rounded-full px-4 text-sm font-semibold transition-[background-color,color,box-shadow,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent ${
                            on ? "bg-text text-ink shadow-[0_10px_30px_-12px_rgba(242,246,252,.6)]" : "bg-ink-2 text-text-2 shadow-[inset_0_0_0_1px_var(--line-strong)] hover:text-text"
                          }`}
                        >
                          {ind.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-3 text-sm font-semibold text-text-2">Leistung</legend>
                <div className="flex flex-wrap gap-2">
                  {designFormats.map((f) => {
                    const on = f.id === formatId;
                    return (
                      <label key={f.id} className="relative">
                        <input type="radio" name="format" value={f.id} checked={on} onChange={() => setFormatId(f.id)} className="peer sr-only" />
                        <span
                          className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-4 text-sm font-semibold transition-[background-color,color,box-shadow,transform] duration-150 ease-[var(--ease-out)] active:scale-[0.97] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent ${
                            on ? "bg-accent text-accent-ink" : "bg-ink-2 text-text-2 shadow-[inset_0_0_0_1px_var(--line-strong)] hover:text-text"
                          }`}
                        >
                          {f.label}
                          <span className={`text-xs font-normal ${on ? "text-accent-ink/85" : "text-text-3"}`}>{f.note}</span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                <Link href={`/kostenloses-beispiel?${params.toString()}`} className="btn btn-primary btn-lg">
                  Genau so ein Beispiel anfordern
                </Link>
                <p className="text-sm text-text-3">Kostenlos, unverbindlich, in deinem Namen.</p>
              </div>
            </Reveal>
          </div>

          <Reveal from="scale" className="relative mx-auto w-full max-w-[22rem] lg:max-w-[24rem]" delay={0.15}>
            <div className="relative" style={{ rotate: "-3deg" }}>
              <div key={format.id} className="anim-fade">
                <MockPost company={company} industry={industry} format={format} />
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-text-3">Vorschau mit Beispieltexten. Dein Design wird individuell gestaltet.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
