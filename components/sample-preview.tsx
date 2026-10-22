"use client";

import { useSearchParams } from "next/navigation";
import { designFormats, industries, priceItems } from "@/lib/content";
import { MockPost } from "@/components/mock-post";

/** Carries the configurator's choice onto the request page: the visitor sees "their" design next to the form. */
export function SamplePreview() {
  const params = useSearchParams();
  const firma = params.get("firma")?.trim() || "Dein Betrieb";
  const branche = params.get("branche");
  const leistung = params.get("leistung") ?? params.get("format");
  const industry = industries.find((i) => i.label === branche || i.id === branche) ?? industries[0];
  const priceId = priceItems.find((p) => p.name === leistung)?.id;
  const format = designFormats.find((f) => f.priceId === priceId || f.id === leistung) ?? designFormats[0];

  return (
    <div className="relative mx-auto mt-12 w-full max-w-[15rem] lg:mx-0">
      <div aria-hidden className="orb absolute inset-[-10%] -z-10 opacity-30" style={{ background: industry.tint }} />
      <div style={{ rotate: "-4deg" }}>
        <MockPost company={firma} industry={industry} format={format} />
      </div>
      <p className="mt-5 text-sm text-text-3">So könnte es anfangen. Dein echtes Beispiel wird individuell gestaltet.</p>
    </div>
  );
}
