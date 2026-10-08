import Link from "next/link";
import { CtaBlock, FaqList, LinkCard, PageHero, SectionHead } from "@/components/ui";
import { getChildren, getService, stucwerk } from "@/content/services";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Expertises: stucwerk, renovatie en herstel",
  description:
    "Alle expertises van We Stucen Door: stucwerk, renovatie en verbouw, onderhoud en schadeherstel in Zeeland, Brabant en Amsterdam. Bekijk het overzicht.",
  path: "/expertises",
});

const hubs = [
  "/expertises/renovatie-verbouw",
  "/expertises/service-onderhoud",
  "/expertises/schade-herstel",
];

export default function ExpertisesPage() {
  return (
    <>
      <PageHero
        eyebrow="Expertises"
        title="Alles voor een droog, strak en duurzaam huis"
        lead="Stucwerk is ons ambacht. Daaromheen helpen we je met renovatie en verbouw, vast onderhoud en het herstel van schade, met één aanspreekpunt."
        crumbs={[{ name: "Expertises", path: "/expertises" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid-4">
            <LinkCard href={stucwerk.path} title={stucwerk.name} text={stucwerk.short} icon={stucwerk.icon} />
            {hubs.map((h) => {
              const s = getService(h)!;
              return <LinkCard key={h} href={h} title={s.name} text={s.short} icon={s.icon} />;
            })}
          </div>
        </div>
      </section>

      {hubs.map((h, idx) => {
        const hub = getService(h)!;
        const kids = getChildren(h);
        return (
          <section key={h} className={`section${idx % 2 === 0 ? " section-sand" : ""}`}>
            <div className="container">
              <SectionHead title={hub.name} text={hub.intro[0]} />
              <ul className="grid-3" style={{ listStyle: "none", padding: 0 }}>
                {kids.map((k) => (
                  <li key={k.path} className="card">
                    <h3>
                      <Link href={k.path}>{k.name}</Link>
                    </h3>
                    <p>{k.short}</p>
                    {getChildren(k.path).length > 0 && (
                      <ul>
                        {getChildren(k.path).map((g) => (
                          <li key={g.path}>
                            <Link href={g.path}>{g.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <FaqList
        faqs={[
          {
            q: "Doen jullie alles zelf?",
            a: "Stucwerk, vochtbestrijding, kitwerk en afwerking doen we zelf. Voor installatiewerk werken we met vaste vakmensen. Jij hebt één aanspreekpunt.",
          },
          {
            q: "Kan ik ook voor een kleine klus bellen?",
            a: "Ja. Ook een scheur in het plafond of een kitvoeg in de badkamer pakken we op.",
          },
          {
            q: "Werken jullie voor particulieren én bedrijven?",
            a: "Ja. Voor zakelijke opdrachtgevers hebben we een eigen werkwijze, zie de pagina Zakelijk.",
          },
        ]}
      />
      <CtaBlock />
    </>
  );
}
