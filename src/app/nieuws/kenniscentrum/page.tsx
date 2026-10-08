import Link from "next/link";
import { CtaBlock, PageHero } from "@/components/ui";
import { articles } from "@/content/articles";
import { wordCount } from "@/components/Markdown";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Kenniscentrum: stucwerk, vocht en badkamer",
  description:
    "Het kenniscentrum van We Stucen Door: heldere artikelen over vochtige muren, stucwerk, schimmel, badkamerkosten, gevelonderhoud en vergunningvrij bouwen.",
  path: "/nieuws/kenniscentrum",
});

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });

export default function KenniscentrumPage() {
  return (
    <>
      <PageHero
        eyebrow="Kenniscentrum"
        title="Kenniscentrum"
        lead="Uitleg van vakmensen, zonder verkooppraatjes. Zodat je weet wat er speelt voordat je een offerte aanvraagt."
        crumbs={[
          { name: "Nieuws", path: "/nieuws" },
          { name: "Kenniscentrum", path: "/nieuws/kenniscentrum" },
        ]}
      />
      <section className="section">
        <div className="container">
          <ul className="grid-2" style={{ listStyle: "none", padding: 0 }}>
            {articles.map((a, i) => (
              <li key={a.slug} className="card" data-reveal style={{ ["--i" as string]: i % 2 }}>
                <p className="meta-line">
                  <time dateTime={a.date}>{fmt(a.date)}</time> · {Math.round(wordCount(a.body) / 200)} min lezen
                </p>
                <h2 className="h3">
                  <Link href={`/nieuws/kenniscentrum/${a.slug}`}>{a.title}</Link>
                </h2>
                <p>{a.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBlock />
    </>
  );
}
