import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { primaryCta, site } from "@/lib/site";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";

export function FinalCta({ title = "Dein erstes Design wartet.", text }: { title?: string; text?: string }) {
  return (
    <section className="bg-text text-ink">
      <div className="container-x grid gap-10 py-[clamp(5rem,10vw,9rem)] lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
        <Reveal as="h2" className="t-display max-w-[13ch] text-ink">
          {title}
        </Reveal>
        <Reveal delay={0.1}>
          <p className="measure text-lg leading-relaxed text-[#c8c8cc]">
            {text ??
              "Zwei Minuten Formular, ein echtes Beispieldesign in deinem Namen. Kostenlos, unverbindlich, und du kaufst nur, wenn es dir gefällt."}
          </p>
          <Link href={primaryCta.href} className="btn btn-lg mt-8 bg-accent text-accent-ink hover:bg-ink hover:text-text">
            {primaryCta.label}
          </Link>
          <p className="mt-5 text-sm text-[#a6a6ab]">{site.replyTime}</p>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-[#dcdcdf] underline-offset-4 hover:underline">
            <InstagramLogoIcon size={20} aria-hidden />
            Oder per Instagram: {site.instagramHandle}
            <span className="sr-only">(öffnet in neuem Tab)</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
