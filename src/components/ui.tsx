import Link from "next/link";
import Image from "next/image";
import { imageFor, type StockImage } from "@/content/images";
import { Icon } from "./Icon";
import { site } from "@/lib/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { Faq } from "@/content/types";

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Zichtbare markering voor gegevens die de klant nog moet aanleveren. */
export function Todo({ children }: { children: React.ReactNode }) {
  return <span className="todo">[INVULLEN: {children}]</span>;
}

export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Kruimelpad" className="crumbs">
        <ol>
          {all.map((it, i) => (
            <li key={it.path}>
              {i < all.length - 1 ? (
                <Link href={it.path}>{it.name}</Link>
              ) : (
                <span aria-current="page">{it.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs: { name: string; path: string }[];
  /** Standaard gekozen op basis van de URL; `null` = geen foto */
  image?: StockImage | null;
  children?: React.ReactNode;
}) {
  const img = image === undefined ? imageFor(crumbs[crumbs.length - 1]?.path ?? "/") : image;
  return (
    <header className={`page-hero plaster${img ? " has-image" : ""}`}>
      <div className="container page-hero-grid">
        <div>
          <Breadcrumbs items={crumbs} />
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          <div className="hero-actions">
            <Link href="/offerte-aanvragen" className="btn btn-primary">
              Gratis offerte
            </Link>
            <a
              href={site.whatsapp}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener"
            >
              <Icon name="whatsapp" size={20} /> WhatsApp ons
            </a>
          </div>
          {children}
        </div>
        {img && (
          <figure className="page-hero-img">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 520px"
            />
            <figcaption>
              Foto: <a href={img.source} target="_blank" rel="noopener nofollow">{img.credit}</a>,{" "}
              <a href={img.licenseUrl} target="_blank" rel="noopener nofollow">{img.license}</a>
            </figcaption>
          </figure>
        )}
      </div>
    </header>
  );
}

export function FaqList({
  faqs,
  title = "Veelgestelde vragen",
  schema = true,
}: {
  faqs: Faq[];
  title?: string;
  schema?: boolean;
}) {
  if (!faqs.length) return null;
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container narrow">
        <h2 id="faq-title">{title}</h2>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>
                <span>{f.q}</span>
                <Icon name="chevron" size={20} />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      {schema && <JsonLd data={faqSchema(faqs)} />}
    </section>
  );
}

export function CtaBlock({
  title = "Benieuwd wat het kost? Vraag een vrijblijvende offerte aan.",
  text = `Stuur een paar foto's en een korte omschrijving. Je krijgt ${site.responsePromise} van één vast aanspreekpunt.`,
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-block" aria-label="Offerte aanvragen">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link href="/offerte-aanvragen" className="btn btn-primary">
            Gratis offerte <Icon name="arrow" size={18} />
          </Link>
          <a
            href={site.whatsapp}
            className="btn btn-light"
            target="_blank"
            rel="noopener"
          >
            <Icon name="whatsapp" size={20} /> WhatsApp
          </a>
          <a href={`tel:${site.phone}`} className="btn btn-light">
            <Icon name="phone" size={18} /> {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

export function PhotoPlaceholder({
  shot,
  label = "Projectfoto",
  ratio = "4 / 3",
}: {
  shot: string;
  label?: string;
  ratio?: string;
}) {
  return (
    <figure
      className="photo-ph plaster"
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Plaatshouder voor ${label.toLowerCase()}: ${shot}`}
    >
      <figcaption>
        <span className="todo">[INVULLEN: {label}]</span>
        <span>{shot}</span>
      </figcaption>
    </figure>
  );
}

export function SectionHead({
  eyebrow,
  title,
  text,
  id,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  id?: string;
}) {
  return (
    <div className="section-head" data-reveal>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  );
}

export function LinkCard({
  href,
  title,
  text,
  icon,
}: {
  href: string;
  title: string;
  text: string;
  icon?: Parameters<typeof Icon>[0]["name"];
}) {
  return (
    <Link href={href} className="card link-card" data-reveal>
      {icon && (
        <span className="card-icon">
          <Icon name={icon} size={26} />
        </span>
      )}
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="card-more">
        Meer over {title.toLowerCase()} <Icon name="arrow" size={16} />
      </span>
    </Link>
  );
}
