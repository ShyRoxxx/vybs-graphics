import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { primaryCta, site } from "@/lib/site";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";

export function FinalCta({ title = "Dein erstes Design wartet.", text }: { title?: string; text?: string }) {
  return (
    <section className="section-glass">
      <div className="panel-wrap">
        <div className="glass grid gap-10 px-[clamp(1.25rem,4vw,3.5rem)] py-[clamp(3rem,7vw,6rem)] lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
          <Reveal as="h2" className="t-display max-w-[13ch]">
            {title}
          </Reveal>
          <Reveal delay={0.1}>
            <p className="measure text-lg leading-relaxed text-text-2">
              {text ??
                "Zwei Minuten Formular, ein echtes Beispieldesign in deinem Namen. Kostenlos, unverbindlich, und du kaufst nur, wenn es dir gefällt."}
            </p>
            <Link href={primaryCta.href} className="btn btn-primary btn-lg mt-8">
              {primaryCta.label}
            </Link>
            <p className="mt-5 text-sm text-text-3">{site.replyTime}</p>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center gap-2 text-text-2 underline-offset-4 hover:text-text hover:underline">
              <InstagramLogoIcon size={20} aria-hidden />
              Oder per Instagram: {site.instagramHandle}
              <span className="sr-only">(öffnet in neuem Tab)</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
