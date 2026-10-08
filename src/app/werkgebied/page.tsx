import { CtaBlock, LinkCard, PageHero } from "@/components/ui";
import { WerkgebiedMap } from "@/components/Story";
import { locations } from "@/content/locations";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Werkgebied: Zeeland, Brabant en Amsterdam",
  description:
    "We Stucen Door werkt vanuit Middelburg in heel Zeeland, in West-Brabant rond Bergen op Zoom en in de regio Amsterdam. Bekijk de plaatsen in ons werkgebied.",
  path: "/werkgebied",
});

export default function WerkgebiedPage() {
  return (
    <>
      <PageHero
        eyebrow="Werkgebied"
        title="Werkgebied: Zeeland, West-Brabant en Amsterdam"
        lead="Onze basis is Middelburg. Bergen op Zoom is waar de familie begon, en sinds 2020 werken we ook in de regio Amsterdam."
        crumbs={[{ name: "Werkgebied", path: "/werkgebied" }]}
      />
      <section className="section">
        <div className="container">
          <WerkgebiedMap />
        </div>
      </section>
      <section className="section section-sand">
        <div className="container grid-3">
          {locations.map((l) => (
            <LinkCard
              key={l.slug}
              href={`/werkgebied/${l.slug}`}
              title={`Stukadoor ${l.name}`}
              text={l.description.split("?")[1]?.trim() || l.description}
              icon="pin"
            />
          ))}
        </div>
      </section>
      <CtaBlock />
    </>
  );
}
