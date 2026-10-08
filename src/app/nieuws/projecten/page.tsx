import Link from "next/link";
import { CtaBlock, PageHero } from "@/components/ui";
import { BeforeAfter } from "@/components/Interactive";
import { services } from "@/content/services";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Projecten: voor en na",
  description:
    "Bekijk projecten van We Stucen Door met voor- en na-foto's: stucwerk, vochtbestrijding, badkamers, dakkapellen en gevels in Zeeland, Brabant en Amsterdam.",
  path: "/nieuws/projecten",
});

export default function ProjectenPage() {
  const withProject = services.filter((s) => s.project);
  return (
    <>
      <PageHero
        eyebrow="Projecten"
        title="Projecten: voor en na"
        lead="Schuif over de foto's om het verschil te zien. Elk project is gekoppeld aan de dienst erachter."
        crumbs={[
          { name: "Nieuws", path: "/nieuws" },
          { name: "Projecten", path: "/nieuws/projecten" },
        ]}
      />
      <section className="section">
        <div className="container">
          <p className="callout">
            <span className="todo">[INVULLEN: echte projectfoto&apos;s]</span> De
            onderstaande plaatsen tonen per project welke opname we nodig hebben.
            Fotografeer vóór en na vanaf exact hetzelfde standpunt, bij daglicht.
            Lever aan als JPG van minimaal 2000 px breed; de site zet ze om naar
            WebP/AVIF.
          </p>
          <div className="grid-2">
            {withProject.map((s) => (
              <div key={s.path}>
                <BeforeAfter {...s.project!} />
                <p>
                  <Link href={s.path}>Meer over {s.name.toLowerCase()}</Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBlock />
    </>
  );
}
