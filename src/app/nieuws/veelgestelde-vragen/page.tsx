import { CtaBlock, JsonLd, PageHero } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { generalFaqs } from "@/content/faqs";
import { faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op veelgestelde vragen over offertes, stucwerk, vocht en schimmel, badkamers en zakelijk onderhoud. Staat je vraag er niet bij? App ons gerust.",
  path: "/nieuws/veelgestelde-vragen",
});

export default function FaqPage() {
  const all = generalFaqs.flatMap((g) => g.faqs);
  return (
    <>
      <PageHero
        eyebrow="Veelgestelde vragen"
        title="Veelgestelde vragen"
        lead="Staat je vraag er niet bij? Stuur ons een WhatsApp-bericht, dan krijg je snel antwoord."
        crumbs={[
          { name: "Nieuws", path: "/nieuws" },
          { name: "Veelgestelde vragen", path: "/nieuws/veelgestelde-vragen" },
        ]}
      />
      <section className="section">
        <div className="container narrow">
          {generalFaqs.map((g) => (
            <div key={g.topic} style={{ marginBottom: "3rem" }}>
              <h2>{g.topic}</h2>
              <div className="faq">
                {g.faqs.map((f) => (
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
          ))}
        </div>
      </section>
      <JsonLd data={faqSchema(all)} />
      <CtaBlock />
    </>
  );
}
