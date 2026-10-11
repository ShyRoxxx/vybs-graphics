import { Hero } from "@/components/home/hero";
import { Statement } from "@/components/home/statement";
import { WorkColumns } from "@/components/home/work-columns";
import { Services } from "@/components/home/services";
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
  description: "Social-Media-Design, Werbeanzeigen, Flyer und Logos für Unternehmen, Selbstständige und lokale Geschäfte.",
  url: site.url,
  email: site.email,
  sameAs: [site.instagram],
  areaServed: "DE",
  founder: { "@type": "Person", name: "Phillip" },
  priceRange: "15 € – 30 € pro Design",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Statement />
      <WorkColumns />
      <Services />
      <Process />
      <SampleBuilder />
      <AboutTeaser />
      <FaqTeaser />
      <FinalCta />
    </>
  );
}
