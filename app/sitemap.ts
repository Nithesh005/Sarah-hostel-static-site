import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { getFlatNavLinks } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.siteUrl;
  const routes = getFlatNavLinks().map((item) => ({
    url: item.href === "/" ? base : `${base}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));

  return routes;
}
