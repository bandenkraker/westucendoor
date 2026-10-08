import Link from "next/link";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

/** Sticky onderbalk op mobiel + zwevende WhatsApp-knop op grotere schermen. */
export function MobileBar() {
  return (
    <>
      <nav className="mobile-bar" aria-label="Snel contact">
        <a href={`tel:${site.phone}`}>
          <Icon name="phone" size={20} />
          Bel
        </a>
        <a href={site.whatsapp} target="_blank" rel="noopener">
          <Icon name="whatsapp" size={20} />
          WhatsApp
        </a>
        <Link href="/offerte-aanvragen" className="mb-cta">
          <Icon name="mail" size={20} />
          Offerte
        </Link>
      </nav>
      <a
        href={site.whatsapp}
        className="wa-float"
        target="_blank"
        rel="noopener"
        aria-label="Stuur ons een WhatsApp-bericht"
      >
        <Icon name="whatsapp" size={28} />
      </a>
    </>
  );
}
