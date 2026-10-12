import { Hero } from "@/components/home/hero";
import { Statement } from "@/components/home/statement";
import { WorkColumns } from "@/components/home/work-columns";
import { Services } from "@/components/home/services";
import { Prices } from "@/components/home/prices";
import { Process } from "@/components/home/process";
import { SampleBuilder } from "@/components/home/sample-builder";
import { AboutTeaser } from "@/components/home/about-teaser";
import { FaqTeaser } from "@/components/home/faq-teaser";
import { FinalCta } from "@/components/final-cta";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: "Grafikdesign für Unternehmen, Selbstständige und lokale Betriebe: Instagram-Designs, Flyer, Visitenkarten, Logos. Feste Preise, kostenloses Beispiel vorab.",
  url: site.url,
  email: site.email,
  sameAs: [site.instagram],
  areaServed: "DE",
  founder: { "@type": "Person", name: "Phillip" },
  priceRange: "15 € – 150 €",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Statement />
      <WorkColumns />
      <Services />
      <Prices />
      <Process />
      <SampleBuilder />
      <AboutTeaser />
      <FaqTeaser />
      <FinalCta />
    </>
  );
}
