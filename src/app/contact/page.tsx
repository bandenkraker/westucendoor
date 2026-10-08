import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageHero, Todo } from "@/components/ui";
import { MapEmbed } from "@/components/Interactive";
import { pageMeta } from "@/lib/meta";
import { site, mapsQuery } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact: bel, app of mail ons",
  description:
    "Contact met We Stucen Door in Middelburg. Bel of WhatsApp 06 41 00 71 53 of mail westucendoor@outlook.com. Werkgebied Zeeland, Brabant en Amsterdam.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact met We Stucen Door"
        lead="Bel, app of mail. Of kom langs na afspraak in Middelburg. Je hebt altijd één vast aanspreekpunt."
        crumbs={[{ name: "Contact", path: "/contact" }]}
      />
      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Gegevens</h2>
            <ul className="contact-list">
              <li>
                <Icon name="whatsapp" size={20} />
                <span>
                  <strong>WhatsApp</strong>
                  <br />
                  <a href={site.whatsapp} target="_blank" rel="noopener">{site.phoneIntl}</a>
                </span>
              </li>
              <li>
                <Icon name="phone" size={20} />
                <span>
                  <strong>Telefoon</strong>
                  <br />
                  <a href={`tel:${site.phone}`}>{site.phoneIntl}</a>
                </span>
              </li>
              <li>
                <Icon name="mail" size={20} />
                <span>
                  <strong>E-mail</strong>
                  <br />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
              </li>
              <li>
                <Icon name="pin" size={20} />
                <span>
                  <strong>Adres</strong>
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </li>
              <li>
                <Icon name="clock" size={20} />
                <span>
                  <strong>Openingstijden</strong>
                  <br />
                  {site.openingHours ?? <Todo>openingstijden</Todo>}
                </span>
              </li>
            </ul>
            <p>
              KvK: {site.kvk ?? <Todo>KvK-nummer</Todo>}
              <br />
              Btw: {site.btw ?? <Todo>btw-nummer</Todo>}
            </p>
            <div className="socials" style={{ marginBottom: "1.5rem" }}>
              <a href={site.socials.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="btn btn-ghost btn-sm">
                <Icon name="facebook" size={18} /> Facebook
              </a>
              <a href={site.socials.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="btn btn-ghost btn-sm">
                <Icon name="instagram" size={18} /> Instagram
              </a>
            </div>
            <Link href="/offerte-aanvragen" className="btn btn-primary">
              Offerte aanvragen <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div>
            <h2>Route</h2>
            <MapEmbed query={mapsQuery} label={`${site.address.street}, ${site.address.city}`} />
            <p className="hint" style={{ marginTop: "1rem" }}>
              Bezoek alleen op afspraak. We zijn vaak op locatie aan het werk.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
