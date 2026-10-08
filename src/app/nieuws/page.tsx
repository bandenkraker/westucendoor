import Link from "next/link";
import { CtaBlock, LinkCard, PageHero, SectionHead } from "@/components/ui";
import { articles } from "@/content/articles";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Nieuws, kennis en projecten",
  description:
    "Nieuws, kennisartikelen en projecten van We Stucen Door. Praktische uitleg over stucwerk, vocht, badkamers en gevelonderhoud in Zeeland en Amsterdam.",
  path: "/nieuws",
});

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });

export default function NieuwsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nieuws & kennis"
        title="Nieuws, kennis en projecten"
        lead="Praktische uitleg over stucwerk, vocht, badkamers en onderhoud. En een kijkje bij ons werk."
        crumbs={[{ name: "Nieuws", path: "/nieuws" }]}
      />
      <section className="section">
        <div className="container grid-3">
          <LinkCard href="/nieuws/kenniscentrum" title="Kenniscentrum" text="Artikelen over vocht, stucwerk, badkamers en gevels." icon="layers" />
          <LinkCard href="/nieuws/projecten" title="Projecten" text="Voor en na: werk dat we hebben opgeleverd." icon="home" />
          <LinkCard href="/nieuws/veelgestelde-vragen" title="Veelgestelde vragen" text="Antwoorden op de vragen die we het vaakst krijgen." icon="users" />
        </div>
      </section>
      <section className="section section-sand">
        <div className="container">
          <SectionHead title="Laatste artikelen" />
          <ul className="grid-3" style={{ listStyle: "none", padding: 0 }}>
            {articles.slice(0, 6).map((a) => (
              <li key={a.slug} className="card" data-reveal>
                <p className="meta-line">
                  <time dateTime={a.date}>{fmtDate(a.date)}</time>
                </p>
                <h3>
                  <Link href={`/nieuws/kenniscentrum/${a.slug}`}>{a.title}</Link>
                </h3>
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
