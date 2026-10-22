"use client";

import { useRef, useState, type CSSProperties } from "react";
import { reduceMotion, scrubFor } from "@/lib/motion";
import { useGsapScene } from "@/lib/gsap";
import { designFormats, industries, processSteps } from "@/lib/content";
import { MockPost } from "@/components/mock-post";
import { Reveal } from "@/components/reveal";
import { CheckIcon } from "@phosphor-icons/react/dist/ssr/Check";

const industry = industries[0];
const format = designFormats[0];

function Preview({ step, dir }: { step: number; dir: 1 | -1 }) {
  const kind = processSteps[step].preview;
  return (
    <div className="relative mx-auto aspect-[9/17] w-full max-w-[20rem] overflow-hidden rounded-[2.2rem] bg-ink-3 p-2 shadow-[inset_0_0_0_1px_var(--line-strong),0_50px_100px_-40px_rgba(0,0,0,.9)]">
      <div className="relative h-full overflow-hidden rounded-[1.7rem] bg-[#0b1018]">
        <div aria-hidden className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div key={kind} className={`${dir === 1 ? "anim-fade-up" : "anim-fade-down"} absolute inset-0 flex flex-col justify-center p-5`}>
            {kind === "brief" && (
              <div className="rounded-2xl bg-ink-2 p-4 shadow-[inset_0_0_0_1px_var(--line)]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-3">Leistung wählen</p>
                <div className="mt-3 space-y-2">
                  {["Instagram-Post · 20 €", "Flyer · 60 €", "Visitenkarte · 40 €", "Etwas anderes"].map((l, i) => (
                    <p key={l} className={`anim-slide-x rounded-lg px-3 py-2 text-sm ${i === 0 ? "bg-accent text-accent-ink font-semibold" : "bg-ink-3 text-text"}`} style={{ "--d": `${0.1 + i * 0.07}s` } as CSSProperties}>
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {kind === "draft" && (
              <div className="rounded-2xl bg-ink-2 p-4 shadow-[inset_0_0_0_1px_var(--line)]">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-3">Anfrage</p>
                <div className="mt-3 space-y-2">
                  {["Glanzwerk Reinigung", "hallo@glanzwerk.de", "Instagram-Post", "Thema: Fensterreinigung im Herbst"].map((l, i) => (
                    <p key={l} className="anim-slide-x rounded-lg bg-ink-3 px-3 py-2 text-sm text-text" style={{ "--d": `${0.1 + i * 0.07}s` } as CSSProperties}>
                      {l}
                    </p>
                  ))}
                </div>
                <div className="anim-fade mt-3 rounded-full bg-accent py-2 text-center text-sm font-semibold text-accent-ink" style={{ "--d": "0.5s" } as CSSProperties}>
                  Kostenlos anfordern
                </div>
                <p className="mt-2 text-center text-[11px] text-text-3">Kein Auftrag, kein Vertrag</p>
              </div>
            )}
            {(kind === "review" || kind === "decide" || kind === "deliver") && (
              <div className="relative">
                <MockPost company="Glanzwerk Reinigung" industry={industry} format={format} className={kind === "decide" ? "opacity-90" : ""} />
                {kind === "decide" && (
                  <div className="anim-fade-up mt-3 grid grid-cols-2 gap-2" style={{ "--d": "0.25s" } as CSSProperties}>
                    <span className="rounded-full bg-accent py-2 text-center text-sm font-semibold text-accent-ink">Gefällt mir</span>
                    <span className="rounded-full bg-ink-2 py-2 text-center text-sm font-semibold text-text-2 shadow-[inset_0_0_0_1px_var(--line-strong)]">Lieber nicht</span>
                  </div>
                )}
                {kind === "deliver" && (
                  <div className="anim-pop absolute -right-2 -top-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-sm font-semibold text-accent-ink shadow-lg" style={{ "--d": "0.3s" } as CSSProperties}>
                    <CheckIcon weight="bold" size={14} aria-hidden />
                    Gekauft · 20 €
                  </div>
                )}
              </div>
            )}
            {kind === "order" && (
              <div className="space-y-3">
                <MockPost company="Glanzwerk Reinigung" industry={industry} format={format} className="w-[70%]" />
                <div className="rounded-2xl bg-ink-2 p-4 shadow-[inset_0_0_0_1px_var(--line)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-3">Finale Dateien</p>
                  {["fensterreinigung-post.png", "fensterreinigung-post.jpg", "fensterreinigung-story.png"].map((f, i) => (
                    <p key={f} className="anim-slide-x mt-2 flex items-center gap-2 text-sm text-text" style={{ "--d": `${0.15 + i * 0.1}s` } as CSSProperties}>
                      <CheckIcon size={14} weight="bold" className="text-accent" aria-hidden />
                      {f}
                    </p>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export function Process() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  useGsapScene(root, (gsap, ScrollTrigger, rootEl) => {
      const steps = gsap.utils.toArray<HTMLElement>("[data-step]", rootEl);
      steps.forEach((s, i) => {
        ScrollTrigger.create({
          trigger: s,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => {
            setDir(1);
            setActive(i);
          },
          onEnterBack: () => {
            setDir(-1);
            setActive(i);
          },
        });
      });
      const line = rootEl.querySelector<HTMLElement>("[data-progress]");
      const list = rootEl.querySelector<HTMLElement>("[data-steps]");
      if (!line || !list) return;
      if (reduceMotion()) {
        gsap.set(line, { scaleY: 1 });
        return;
      }
      gsap.fromTo(
        line,
        { scaleY: 0 },
        { scaleY: 1, ease: "none", scrollTrigger: { trigger: list, start: "top 55%", end: "bottom 55%", scrub: scrubFor() } },
      );
  });

  return (
    <section ref={root} id="ablauf" className="section relative scroll-mt-20 overflow-x-clip">
      <div aria-hidden className="orb drift-b left-[-10%] top-[20%] h-[36rem] w-[36rem] bg-[var(--glow)] opacity-40" />
      <div className="container-x relative">
        <Reveal as="h2" className="max-w-[16ch] text-[clamp(2.25rem,5.5vw,4.75rem)]">
          So läuft es, vom kostenlosen Beispiel bis zu deinen Dateien.
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <Preview step={active} dir={dir} />
              <p className="mt-5 text-center text-sm text-text-3">Beispielbetrieb zur Veranschaulichung</p>
            </div>
          </div>

          <ol data-steps className="relative">
            <div aria-hidden className="absolute left-[1.1rem] top-4 bottom-4 w-px bg-line" />
            <div data-progress aria-hidden className="absolute left-[1.1rem] top-4 bottom-4 w-px origin-top bg-accent" style={{ transform: "scaleY(0)" }} />
            {processSteps.map((step, i) => (
              <li key={step.title} data-step className="relative py-8 pl-16 first:pt-0 last:pb-0 lg:min-h-[40vh] lg:py-10">
                <span
                  className={`absolute left-0 flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300 ${i === 0 ? "top-0" : "top-8 lg:top-10"} ${
                    i <= active ? "bg-accent text-accent-ink" : "bg-ink-2 text-text-2 shadow-[inset_0_0_0_1px_var(--line-strong)]"
                  }`}
                  aria-hidden
                >
                  {i + 1}
                </span>
                <Reveal from="left" distance={24}>
                  <h3 className="text-[clamp(1.5rem,2.6vw,2.25rem)]">{step.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-accent">{step.duration}</p>
                  <p className="measure mt-3 text-text-2">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
