import Link from "next/link";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { Todo } from "./ui";
import { site } from "@/lib/site";
import { megaMenu } from "@/content/nav";
import { locations } from "@/content/locations";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>{site.tagline}</p>
          {/* NAP: identiek aan schema-markup */}
          <address>
            <strong>{site.name}</strong>
            <br />
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
            <br />
            <a href={`tel:${site.phone}`}>{site.phoneIntl}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
          <div className="socials">
            <a href={site.socials.facebook} target="_blank" rel="noopener" aria-label="We Stucen Door op Facebook">
              <Icon name="facebook" size={20} />
            </a>
            <a href={site.socials.instagram} target="_blank" rel="noopener" aria-label="We Stucen Door op Instagram">
              <Icon name="instagram" size={20} />
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp We Stucen Door">
              <Icon name="whatsapp" size={20} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="footer-title">Expertises</h2>
          <ul>
            <li>
              <Link href="/stucwerk">Stucwerk</Link>
            </li>
            {megaMenu.map((c) => (
              <li key={c.href}>
                <Link href={c.href}>{c.title}</Link>
              </li>
            ))}
            <li>
              <Link href="/expertises/schade-herstel/vochtbestrijding">Vochtbestrijding</Link>
            </li>
            <li>
              <Link href="/expertises/renovatie-verbouw/verduurzaming/badkamer-renovatie">Badkamerrenovatie</Link>
            </li>
            <li>
              <Link href="/zakelijk">Zakelijk & VvE</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Werkgebied</h2>
          <ul>
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/werkgebied/${l.slug}`}>Stukadoor {l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Bedrijf</h2>
          <ul>
            <li><Link href="/over-ons">Over ons</Link></li>
            <li><Link href="/over-ons/werkwijze">Werkwijze</Link></li>
            <li><Link href="/nieuws/projecten">Projecten</Link></li>
            <li><Link href="/nieuws/kenniscentrum">Kenniscentrum</Link></li>
            <li><Link href="/nieuws/veelgestelde-vragen">Veelgestelde vragen</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/offerte-aanvragen">Offerte aanvragen</Link></li>
          </ul>
          <p className="footer-hours">
            Openingstijden: {site.openingHours ?? <Todo>openingstijden</Todo>}
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {site.name} · KvK{" "}
          {site.kvk ?? <Todo>KvK-nummer</Todo>} · btw{" "}
          {site.btw ?? <Todo>btw-nummer</Todo>}
        </p>
        <ul>
          <li><Link href="/privacy">Privacy</Link></li>
          <li><Link href="/cookies">Cookies</Link></li>
          <li><Link href="/algemene-voorwaarden">Algemene voorwaarden</Link></li>
          <li><Link href="/sitemap.xml">Sitemap</Link></li>
        </ul>
      </div>
    </footer>
  );
}
