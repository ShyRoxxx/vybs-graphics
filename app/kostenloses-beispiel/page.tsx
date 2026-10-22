import type { Metadata } from "next";
import { Suspense } from "react";
import { SampleForm } from "@/components/sample-form";
import { SamplePreview } from "@/components/sample-preview";
import { Reveal } from "@/components/reveal";
import { sampleIntro, processSteps } from "@/lib/content";
import { site } from "@/lib/site";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

export const metadata: Metadata = {
  title: "Kostenloses Beispieldesign anfordern",
  description: "Beschreib kurz deinen Betrieb und bekomm ein echtes Beispieldesign in deinem Namen. Kostenlos und unverbindlich.",
  alternates: { canonical: "/kostenloses-beispiel" },
};

export default function SamplePage() {
  return (
    <>
      <section className="relative overflow-x-clip pt-[9rem] pb-[var(--section)]">
        <div aria-hidden className="orb drift-a left-[-15%] top-[-8rem] h-[36rem] w-[36rem] bg-[var(--glow)] opacity-60" />
        <div aria-hidden className="orb drift-b right-[-10%] top-[26rem] h-[30rem] w-[30rem] bg-accent opacity-[0.1]" />
        <div className="container-x relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-x-16 lg:gap-y-0">
          <div className="order-1">
            <Reveal as="h1" className="max-w-[14ch] text-[clamp(2.75rem,6.5vw,5.5rem)]">
              {sampleIntro.headline}
            </Reveal>
            <Reveal as="p" className="measure mt-6 text-lg text-text-2" delay={0.1}>
              {sampleIntro.text}
            </Reveal>
          </div>
          <div className="order-3 lg:sticky lg:top-28 lg:self-start">
            <Reveal as="ul" stagger={0.08} delay={0.2} className="space-y-3 lg:mt-8">
              {sampleIntro.reassurance.map((r) => (
                <li key={r} className="flex items-start gap-3 text-text-2">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckIcon size={12} weight="bold" aria-hidden />
                  </span>
                  {r}
                </li>
              ))}
            </Reveal>
            <Suspense fallback={null}>
              <div className="hidden lg:block">
                <SamplePreview />
              </div>
            </Suspense>
            <Reveal delay={0.3} className="mt-10 border-t border-line pt-8">
              <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-text-3">Was danach passiert</h2>
              <ol className="mt-4 space-y-3">
                {processSteps.slice(2, 5).map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="display text-xl leading-none text-accent">{i + 1}</span>
                    <div>
                      <p className="font-semibold text-text">{s.title}</p>
                      <p className="text-sm text-text-3">{s.duration}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-text-3">
                Lieber direkt schreiben? <a href={`mailto:${site.email}`} className="link-u">{site.email}</a> oder{" "}
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-u">
                  {site.instagramHandle}
                  <span className="sr-only"> (öffnet in neuem Tab)</span>
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal from="up" delay={0.15} className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Suspense fallback={<div className="card min-h-[46rem] md:min-h-[38rem]" aria-busy="true" />}>
              <SampleForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
