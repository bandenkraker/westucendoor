import type { Metadata } from "next";
import { site, absoluteUrl } from "./site";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  /** Titel zonder merk-template, bijv. voor de homepage */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
};

export function pageMeta({
  title,
  description,
  path,
  absoluteTitle,
  type = "website",
  publishedTime,
}: MetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: site.name,
      locale: "nl_NL",
      images: [{ url: "/og", width: 1200, height: 630, alt: site.name }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og"],
    },
  };
}
