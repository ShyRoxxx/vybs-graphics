import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Anton, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RouteRefresh } from "@/components/route-refresh";
import { LightLayer } from "@/components/light-layer";
import { site } from "@/lib/site";

/* One editorial grotesk for headlines and text: sober, tight, made for print-like layouts. */
const display = Schibsted_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

/* Condensed headline face for the preview cards: the look of the real slides (heavy, uppercase, tight). */
const condensed = Anton({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Grafikdesign aus Langenhagen für Social Media, Print & Logos`,
    template: `%s – ${site.name}`,
  },
  description:
    "Grafikdesign aus Langenhagen bei Hannover: Instagram-Designs, Flyer, Visitenkarten und Logos für Unternehmen. Feste Preise ab 15 €, kostenloses Beispieldesign vorab.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
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

/* Dark is the default; a stored choice from the theme toggle wins. Runs before the first paint, so no flash. */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;var c=document.querySelector('meta[name="theme-color"]');if(c)c.setAttribute('content',t==='light'?'#e8edf7':'#070b12')}}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" data-theme="dark" className={`${display.variable} ${condensed.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body className="min-h-dvh flex flex-col">
        <div aria-hidden="true" className="color-field" />
        <RouteRefresh />
        <LightLayer />
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
