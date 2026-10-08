import { CtaBlock, PageHero } from "./ui";
import { Markdown } from "./Markdown";
import { Timeline, WorkSteps } from "./Story";
import type { TextPage } from "@/content/pages";

export function TextPageView({
  page,
  crumbs,
  cta = true,
}: {
  page: TextPage;
  crumbs: { name: string; path: string }[];
  cta?: boolean;
}) {
  return (
    <>
      <PageHero title={page.h1} lead={page.lead} crumbs={crumbs} />
      {page.extra === "timeline" && (
        <section className="section section-dark">
          <div className="container">
            <Timeline />
          </div>
        </section>
      )}
      {page.extra === "steps" && (
        <section className="section section-sand">
          <div className="container">
            <WorkSteps />
          </div>
        </section>
      )}
      <section className="section">
        <div className="container narrow prose">
          <Markdown source={page.body} />
        </div>
      </section>
      {cta && <CtaBlock />}
    </>
  );
}
