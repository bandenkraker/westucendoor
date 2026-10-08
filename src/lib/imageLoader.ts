"use client";

/**
 * next/image-loader. Pexels schaalt en comprimeert zelf (WebP/AVIF via auto=compress),
 * zodat srcset en lazy loading werken zonder omweg via onze server.
 * Lokale afbeeldingen (echte projectfoto's in /public) worden ongewijzigd geserveerd.
 */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("https://images.pexels.com/")) {
    return `${src}?auto=compress&cs=tinysrgb&w=${width}&q=${quality ?? 75}`;
  }
  return src;
}
