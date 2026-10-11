import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/lib/site";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Social-Media-Design und Branding für kleine Unternehmen`,
    template: `%s – ${site.name}`,
  },
  description:
    "Instagram-Posts, Carousels, Anzeigen, Flyer und Logos für Unternehmen, Selbstständige und lokale Geschäfte. Das erste Beispieldesign ist kostenlos.",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    title: `${site.name} – Erst sehen, dann entscheiden.`,
    description: "Social-Media-Design und Branding. Das erste Beispieldesign für Ihren Betrieb ist kostenlos.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vybs Graphics" }],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "32x32" }],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#070b12",
  width: "device-width",
  initialScale: 1,
};

const motionScript = `(function(){try{var m=window.matchMedia('(prefers-reduced-motion: reduce)');if(m.matches){document.documentElement.classList.add('reduce-motion')}document.documentElement.classList.add('js')}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body className="min-h-dvh flex flex-col">
        <SmoothScroll />
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Zum Inhalt springen
        </a>
        <SiteHeader />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
