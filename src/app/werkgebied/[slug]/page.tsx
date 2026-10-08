import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { CtaBlock, FaqList, JsonLd, LinkCard, PageHero, SectionHead } from "@/components/ui";
import { getLocation, locations } from "@/content/locations";
import { getService } from "@/content/services";
import { pageMeta } from "@/lib/meta";
import { serviceSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/werkgebied/[slug]">) {
  const l = getLocation((await params).slug);
  if (!l) return {};
  return pageMeta({ title: l.title, description: l.description, path: `/werkgebied/${l.slug}` });
}

export default async function LocationPage({ params }: PageProps<"/werkgebied/[slug]">) {
  const l = getLocation((await params).slug);
  if (!l) notFound();
  const path = `/werkgebied/${l.slug}`;
  const others = locations.filter((o) => o.slug !== l.slug);

  return (
    <>
      <PageHero
        eyebrow={`Werkgebied · ${l.name}`}
        title={l.h1}
        lead={l.intro[0]}
        crumbs={[
          { name: "Werkgebied", path: "/werkgebied" },
          { name: l.name, path },
        ]}
      />
      <JsonLd
        data={serviceSchema({
          name: `Stukadoor en renovatie in ${l.name}`,
          description: l.description,
          path,
          area: l.name,
        })}
      />

      <section className="section">
        <div className="container two-col">
          <div className="prose">
            {l.intro.slice(1).map((p, i) => (
              <p key={i} className="intro-p">
                {p}
              </p>
            ))}
            {l.sections.map((s) => (
              <div key={s.h2} data-reveal>
                <h2>{s.h2}</h2>
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </div>
          <aside className="card signals" data-reveal>
            <h2 className="h3">We werken onder meer in</h2>
            <ul className="checklist">
              {l.neighborhoods.map((n) => (
                <li key={n}>
                  <Icon name="pin" size={18} /> {n}
                </li>
              ))}
            </ul>
            <Link href="/offerte-aanvragen" className="btn btn-primary btn-sm">
              Offerte in {l.name}
            </Link>
          </aside>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <SectionHead title={`Veelgevraagd in ${l.name}`} />
          <div className="grid-3">
            {l.services.map((p) => {
              const s = getService(p);
              if (!s) {
                return p === "/zakelijk" ? (
                  <LinkCard key={p} href={p} title="Zakelijk & VvE" text="Mutatieonderhoud, planmatig onderhoud en raamcontracten." icon="building" />
                ) : null;
              }
              return <LinkCard key={p} href={p} title={s.name} text={s.short} icon={s.icon} />;
            })}
          </div>
        </div>
      </section>

      <FaqList faqs={l.faqs} title={`Vragen uit ${l.name}`} />

      <section className="section-tight">
        <div className="container">
          <h2 className="h3">Ook actief in</h2>
          <ul className="wg-list" style={{ columns: 3 }}>
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/werkgebied/${o.slug}`}>
                  <Icon name="pin" size={16} /> {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBlock title={`Een stukadoor nodig in ${l.name}?`} />
    </>
  );
}
