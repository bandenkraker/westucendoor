import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Offerte aanvragen: gratis en vrijblijvend",
  description:
    "Vraag gratis en vrijblijvend een offerte aan voor stucwerk, vochtbestrijding, badkamer of onderhoud. Stuur foto's mee, binnen 1 werkdag reactie.",
  path: "/offerte-aanvragen",
});

export default function OffertePage() {
  return (
    <>
      <PageHero
        eyebrow="Offerte aanvragen"
        title="Vraag een gratis offerte aan"
        lead={`Zes korte stappen. Foto's helpen ons om direct mee te denken. Je krijgt ${site.responsePromise}.`}
        crumbs={[{ name: "Offerte aanvragen", path: "/offerte-aanvragen" }]}
      />
      <section className="section">
        <div className="container form-wrap">
          <QuoteForm />
          <aside>
            <div className="card">
              <h2 className="h3">Wat gebeurt er daarna?</h2>
              <ol>
                <li>We bekijken je aanvraag en foto&apos;s.</li>
                <li>We nemen contact op en plannen zo nodig een opname.</li>
                <li>Je ontvangt een heldere offerte per onderdeel.</li>
              </ol>
              <p className="hint">Gratis en vrijblijvend. Je zit nergens aan vast.</p>
            </div>
            <div className="card" style={{ marginTop: "1.25rem" }}>
              <h2 className="h3">Liever appen of bellen?</h2>
              <ul className="contact-list">
                <li>
                  <Icon name="whatsapp" size={20} />
                  <a href={site.whatsapp} target="_blank" rel="noopener">WhatsApp {site.phoneDisplay}</a>
                </li>
                <li>
                  <Icon name="phone" size={20} />
                  <a href={`tel:${site.phone}`}>{site.phoneIntl}</a>
                </li>
                <li>
                  <Icon name="mail" size={20} />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
