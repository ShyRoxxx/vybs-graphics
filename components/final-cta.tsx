import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { primaryCta, site } from "@/lib/site";
import { InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr/InstagramLogo";

export function FinalCta({ title = "Ihr erstes Design wartet.", text }: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x py-6">
        <div className="grain relative isolate overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0b2d47_0%,#11466b_55%,#13507a_100%)] px-6 py-16 text-center md:px-12 md:py-24">
          <div aria-hidden className="orb drift-a left-[-10%] top-[-30%] h-[26rem] w-[26rem] bg-accent opacity-20" />
          <div aria-hidden className="orb drift-b right-[-10%] bottom-[-40%] h-[30rem] w-[30rem] bg-[#8b5cf6] opacity-25" />
          <Reveal as="h2" className="mx-auto max-w-[14ch] text-[clamp(2.5rem,6.5vw,5.5rem)] text-white">
            {title}
          </Reveal>
          <Reveal as="p" className="mx-auto mt-6 max-w-[48ch] text-lg text-[#d8ecfb]" delay={0.1}>
            {text ??
              "Zwei Minuten Formular, ein echtes Beispieldesign in Ihrem Namen. Kostenlos und ohne Verpflichtung."}
          </Reveal>
          <Reveal className="mt-10 flex flex-col items-center gap-4" delay={0.2}>
            <Link href={primaryCta.href} className="btn btn-lg bg-white text-[#0b2d47] shadow-[0_20px_50px_-20px_rgba(0,0,0,.6)] hover:bg-[#eaf5ff]">
              {primaryCta.label}
            </Link>
            <p className="text-sm text-[#eaf5ff]">{site.replyTime}</p>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center gap-2 text-white underline-offset-4 hover:underline">
              <InstagramLogoIcon size={20} aria-hidden />
              Oder einfach per Instagram: {site.instagramHandle}
              <span className="sr-only">(öffnet in neuem Tab)</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
