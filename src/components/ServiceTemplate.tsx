import Link from "next/link";
import { Icon } from "./Icon";
import {
  CtaBlock,
  FaqList,
  JsonLd,
  LinkCard,
  PageHero,
  SectionHead,
} from "./ui";
import { BeforeAfter } from "./Interactive";
import type { Service } from "@/content/types";
import { getChildren, getService, crumbsFor } from "@/content/services";
import { getArticle } from "@/content/articles";
import { serviceSchema } from "@/lib/schema";

export function ServiceTemplate({ s }: { s: Service }) {
  const children = getChildren(s.path);
  const related = s.related.map(getService).filter(Boolean) as Service[];
  const articles = s.articles.map(getArticle).filter(Boolean);

  return (
    <>
      <PageHero title={s.h1} lead={s.short} crumbs={crumbsFor(s.path)} />
      <JsonLd data={serviceSchema({ name: s.name, description: s.description, path: s.path })} />

      <section className="section">
        <div className="container two-col">
          <div className="prose" data-reveal>
            {s.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "intro-p" : undefined}>
                {p}
              </p>
            ))}
          </div>
          {s.signals && s.signals.length > 0 && (
            <aside className="card signals" data-reveal>
              <h2 className="h3">Wanneer heb je dit nodig?</h2>
              <ul className="checklist">
                {s.signals.map((sig) => (
                  <li key={sig}>
                    <Icon name="check" size={18} /> {sig}
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </section>

      {children.length > 0 && (
        <section className="section section-sand">
          <div className="container">
            <SectionHead title={`Onderdelen van ${s.name.toLowerCase()}`} />
            <div className="grid-3">
              {children.map((c) => (
                <LinkCard key={c.path} href={c.path} title={c.name} text={c.short} icon={c.icon} />
              ))}
            </div>
          </div>
        </section>
      )}

      {s.steps && s.steps.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHead eyebrow="Aanpak" title="Zo pakken we het aan, stap voor stap" />
            <ol className="steps steps-compact">
              {s.steps.map((st, i) => (
                <li key={st.t} data-reveal style={{ ["--i" as string]: i }}>
                  <span className="step-num">{i + 1}</span>
                  <h3>{st.t}</h3>
                  <p>{st.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {(s.sections?.length || s.materials?.length) && (
        <section className="section section-tight">
          <div className="container narrow prose">
            {s.sections?.map((sec) => (
              <div key={sec.h2} data-reveal>
                <h2>{sec.h2}</h2>
                {sec.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
            {s.materials && s.materials.length > 0 && (
              <div data-reveal>
                <h2>Materialen en technieken</h2>
                <ul>
                  {s.materials.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {(s.duration || s.costFactors?.length) && (
        <section className="section section-sand">
          <div className="container grid-2">
            {s.duration && (
              <div className="card" data-reveal>
                <span className="card-icon">
                  <Icon name="clock" size={26} />
                </span>
                <h2 className="h3">Doorlooptijd</h2>
                <p>{s.duration}</p>
              </div>
            )}
            {s.costFactors && (
              <div className="card" data-reveal>
                <span className="card-icon">
                  <Icon name="layers" size={26} />
                </span>
                <h2 className="h3">Wat bepaalt de prijs?</h2>
                <ul className="checklist">
                  {s.costFactors.map((c) => (
                    <li key={c}>
                      <Icon name="check" size={18} /> {c}
                    </li>
                  ))}
                </ul>
                <p className="hint">
                  We werken niet met prijzen van internet. Na de opname krijg je
                  een vaste offerte per onderdeel.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {s.project && (
        <section className="section">
          <div className="container narrow">
            <SectionHead eyebrow="Project" title="Voor en na" />
            <BeforeAfter {...s.project} />
          </div>
        </section>
      )}

      <FaqList faqs={s.faqs} title={`Vragen over ${s.name.toLowerCase()}`} />

      {(related.length > 0 || articles.length > 0) && (
        <section className="section section-sand">
          <div className="container">
            <SectionHead title="Gerelateerde diensten en kennis" />
            <div className="grid-3">
              {related.slice(0, 3).map((r) => (
                <LinkCard key={r.path} href={r.path} title={r.name} text={r.short} icon={r.icon} />
              ))}
            </div>
            {articles.length > 0 && (
              <ul className="article-links">
                {articles.map((a) => (
                  <li key={a!.slug}>
                    <Link href={`/nieuws/kenniscentrum/${a!.slug}`}>
                      <Icon name="arrow" size={16} /> {a!.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      <CtaBlock />
    </>
  );
}
