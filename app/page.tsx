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

const business = {
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: site.name,
  legalName: site.legalName,
  description: "Grafikdesign aus Langenhagen bei Hannover für Unternehmen, Selbstständige und lokale Betriebe: Instagram-Designs, Flyer, Visitenkarten, Logos. Feste Preise, kostenloses Beispiel vorab.",
  url: site.url,
  image: `${site.url}/images/logo.png`,
  logo: `${site.url}/images/logo.png`,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: site.address.country,
  },
  sameAs: [site.instagram],
  areaServed: ["Langenhagen", "Region Hannover", "Deutschland"],
  founder: { "@type": "Person", name: site.owner },
  priceRange: "€",
  knowsAbout: ["Grafikdesign", "Social Media Design", "Instagram-Design", "Flyer", "Visitenkarten", "Logodesign"],
};

const website = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: "de-DE",
  publisher: { "@id": `${site.url}/#business` },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [business, website] };

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
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
