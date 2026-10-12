import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/portfolio", "/leistungen", "/ueber-mich", "/kostenloses-beispiel", "/kontakt", "/faq", "/impressum", "/datenschutz"];
  return routes.map((r) => ({ url: `${site.url}${r}`, lastModified: new Date("2026-10-12") }));
}
