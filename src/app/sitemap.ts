import type { MetadataRoute } from "next";
import { allPages } from "@/lib/searchIndex";
import { articles } from "@/content/articles";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const dates = new Map(articles.map((a) => [`/nieuws/kenniscentrum/${a.slug}`, a.date]));
  return allPages().map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: dates.get(p.path) ?? "2026-10-08",
    changeFrequency: p.path.startsWith("/nieuws") ? "weekly" : "monthly",
    priority:
      p.path === "/"
        ? 1
        : ["/stucwerk", "/offerte-aanvragen", "/expertises/schade-herstel/vochtbestrijding"].includes(p.path)
          ? 0.9
          : p.path.split("/").length <= 3
            ? 0.8
            : 0.6,
  }));
}
