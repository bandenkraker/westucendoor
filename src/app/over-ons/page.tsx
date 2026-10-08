import { CtaBlock, LinkCard, PageHero, PhotoPlaceholder, SectionHead } from "@/components/ui";
import { Timeline } from "@/components/Story";
import { aboutPages } from "@/content/pages";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Over ons: familiebedrijf sinds 1969",
  description:
    "We Stucen Door is een familiebedrijf in de derde generatie. Sinds 1969 vakmanschap in afbouw en renovatie, nu vanuit Middelburg voor Zeeland en Amsterdam.",
  path: "/over-ons",
});

const icons = { oorsprong: "clock", "missie-en-visie": "leaf", werkwijze: "layers", referenties: "users", mvo: "shield" } as const;

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Over ons"
        title="Een familie van vakmensen, sinds 1969"
        lead="Drie generaties, één constante: betrokken, praktisch en gericht op oplossingen die lang meegaan."
        crumbs={[{ name: "Over ons", path: "/over-ons" }]}
      />
      <section className="section">
        <div className="container two-col">
          <div className="prose" data-reveal>
            <p className="intro-p">
              We Stucen Door is een familiebedrijf in de derde generatie. Het
              begon in 1969 met keukens in Bergen op Zoom. Daarna kwamen
              aannemerij, renovatie en stukadoorswerk. Sinds 2020 zijn we
              gespecialiseerd in stucwerk, vochtbestrijding en badkamer-,
              keuken- en toiletrenovatie, met Middelburg als thuisbasis.
            </p>
            <p>
              We zijn nuchter in hoe we werken. Eerst kijken wat er echt aan de
              hand is, dan een heldere offerte, en daarna het werk zo afleveren
              dat we er zelf trots op zijn. Je hebt één aanspreekpunt, van de
              eerste WhatsApp tot de oplevering.
            </p>
            <p>
              Onze naam is ook een belofte. We stucen door: tot het werk af is,
              en tot het goed is.
            </p>
          </div>
          <PhotoPlaceholder
            label="Teamfoto"
            shot="Het team of de eigenaar op een werkplek, met gereedschap, natuurlijk licht. Geen geposeerde stockfoto."
            ratio="4 / 5"
          />
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="Tijdlijn" title="Drie generaties" />
          <Timeline />
        </div>
      </section>
      <section className="section">
        <div className="container grid-3">
          {aboutPages.map((p) => (
            <LinkCard key={p.slug} href={`/over-ons/${p.slug}`} title={p.name} text={p.lead} icon={icons[p.slug as keyof typeof icons]} />
          ))}
        </div>
      </section>
      <CtaBlock />
    </>
  );
}
