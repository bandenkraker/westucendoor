import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { CtaBlock, JsonLd, LinkCard, PageHero, SectionHead } from "@/components/ui";
import { Markdown, headings, wordCount } from "@/components/Markdown";
import { articles, getArticle } from "@/content/articles";
import { getService } from "@/content/services";
import { getLocation } from "@/content/locations";
import { pageMeta } from "@/lib/meta";
import { articleSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/nieuws/kenniscentrum/[slug]">) {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return pageMeta({
    title: a.metaTitle,
    description: a.description,
    path: `/nieuws/kenniscentrum/${a.slug}`,
    type: "article",
    publishedTime: a.date,
  });
}

export default async function ArticlePage({ params }: PageProps<"/nieuws/kenniscentrum/[slug]">) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const path = `/nieuws/kenniscentrum/${a.slug}`;
  const toc = headings(a.body);
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 3);

  const relatedCards = a.related
    .map((p) => {
      const s = getService(p);
      if (s) return { href: p, title: s.name, text: s.short, icon: s.icon };
      const loc = p.startsWith("/werkgebied/") && getLocation(p.split("/").pop()!);
      if (loc) return { href: p, title: `Stukadoor ${loc.name}`, text: loc.intro[0].split(". ")[0] + ".", icon: "pin" as const };
      const art = p.startsWith("/nieuws/kenniscentrum/") && getArticle(p.split("/").pop()!);
      if (art) return { href: p, title: art.title, text: art.excerpt, icon: "layers" as const };
      return null;
    })
    .filter(Boolean) as { href: string; title: string; text: string; icon: Parameters<typeof Icon>[0]["name"] }[];

  return (
    <>
      <PageHero
        eyebrow="Kenniscentrum"
        title={a.title}
        lead={a.excerpt}
        crumbs={[
          { name: "Nieuws", path: "/nieuws" },
          { name: "Kenniscentrum", path: "/nieuws/kenniscentrum" },
          { name: a.title, path },
        ]}
      >
        <p className="meta-line" style={{ marginTop: "1.25rem" }}>
          <time dateTime={a.date}>
            {new Date(a.date).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}
          </time>{" "}
          · {Math.round(wordCount(a.body) / 200)} min lezen · door We Stucen Door
        </p>
      </PageHero>
      <JsonLd data={articleSchema({ title: a.title, description: a.description, path, date: a.date })} />

      <section className="section">
        <div className="container article-layout">
          <article className="prose">
            <Markdown source={a.body} />
          </article>
          <aside className="toc" aria-label="Inhoud van dit artikel">
            <p className="eyebrow">In dit artikel</p>
            <ol>
              {toc.map((h) => (
                <li key={h.id}>
                  <a href={`#${h.id}`}>{h.title}</a>
                </li>
              ))}
            </ol>
            <Link href="/offerte-aanvragen" className="btn btn-primary btn-sm">
              Vraag een offerte aan
            </Link>
          </aside>
        </div>
      </section>

      {relatedCards.length > 0 && (
        <section className="section section-sand">
          <div className="container">
            <SectionHead title="Gerelateerd" />
            <div className="grid-3">
              {relatedCards.map((c) => (
                <LinkCard key={c.href} {...c} />
              ))}
            </div>
            <ul className="article-links">
              {more.map((m) => (
                <li key={m.slug}>
                  <Link href={`/nieuws/kenniscentrum/${m.slug}`}>
                    <Icon name="arrow" size={16} /> {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <CtaBlock />
    </>
  );
}
