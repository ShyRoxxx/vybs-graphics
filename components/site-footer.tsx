import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { nav, primaryCta, site } from "@/lib/site";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { PhoneIcon } from "@phosphor-icons/react/dist/ssr/Phone";
import { MapPinIcon } from "@phosphor-icons/react/dist/ssr/MapPin";

export function SiteFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line bg-ink">
      <div aria-hidden className="orb drift-b left-[-10%] top-[-30%] h-[28rem] w-[28rem] bg-[var(--glow)]/35" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="max-w-md">
          <Logo size={40} />
          <p className="mt-6 text-text-2">
            Instagram-Designs, Flyer, Visitenkarten, Logos und weitere Werbemittel für Unternehmen, Selbstständige
            und lokale Betriebe. Feste Preise, das erste Beispieldesign ist kostenlos.
          </p>
          <Link href={primaryCta.href} className="btn btn-primary mt-8">
            {primaryCta.label}
          </Link>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-text-3">Seiten</h2>
          <ul className="mt-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-u inline-flex min-h-11 items-center text-text-2">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/kostenloses-beispiel" className="link-u inline-flex min-h-11 items-center text-text-2">
                Kostenloses Beispiel
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-text-3">Kontakt</h2>
          <ul className="mt-3 text-text-2">
            <li>
              <a href={`mailto:${site.email}`} className="link-u inline-flex min-h-11 items-center gap-2">
                <EnvelopeSimpleIcon size={18} aria-hidden />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="link-u inline-flex min-h-11 items-center gap-2">
                <PhoneIcon size={18} aria-hidden />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-u inline-flex min-h-11 items-center gap-2">
                <InstagramLogoIcon size={18} aria-hidden />
                {site.instagramHandle}
                <span className="sr-only">(öffnet in neuem Tab)</span>
              </a>
            </li>
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-u inline-flex min-h-11 items-start gap-2 py-2">
                <MapPinIcon size={18} aria-hidden className="mt-0.5 shrink-0" />
                <span>
                  {site.legalName}
                  <br />
                  {site.address.street}, {site.address.postalCode} {site.address.city}
                </span>
                <span className="sr-only">(öffnet in neuem Tab)</span>
              </a>
            </li>
            <li className="pt-3 text-text-3">{site.serviceArea}</li>
            <li className="text-text-3">{site.replyTime}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-text-3 md:flex-row md:items-center md:justify-between">
          <p>© {site.year} {site.name}. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/impressum" className="link-u inline-flex min-h-11 items-center">
              Impressum
            </Link>
            <Link href="/datenschutz" className="link-u inline-flex min-h-11 items-center">
              Datenschutz
            </Link>
            <a href="https://bilbaoconsulting.com" target="_blank" rel="noopener" className="link-u inline-flex min-h-11 items-center">
              Website von Bilbao Consulting
              <span className="sr-only"> (öffnet in neuem Tab)</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
