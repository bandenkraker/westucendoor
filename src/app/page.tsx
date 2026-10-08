import Link from "next/link";
import { Icon } from "@/components/Icon";
import { FaqList, LinkCard, SectionHead, Todo } from "@/components/ui";
import { BeforeAfter } from "@/components/Interactive";
import { Timeline, WerkgebiedMap, WorkSteps } from "@/components/Story";
import { QuoteForm } from "@/components/QuoteForm";
import { homeFaqs } from "@/content/faqs";
import { pageMeta } from "@/lib/meta";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Stukadoor Zeeland & Amsterdam | We Stucen Door",
  absoluteTitle: true,
  description:
    "Stukadoor en specialist in vocht en badkamers in Zeeland, Brabant en Amsterdam. Familiebedrijf sinds 1969, één aanspreekpunt. Vraag een gratis offerte.",
  path: "/",
});

const entries = [
  {
    href: "/expertises/renovatie-verbouw",
    title: "Renovatie & verbouw",
    text: "Badkamer, keuken, toilet, dakkapel of uitbouw. Van sloop tot strak stucwerk, met één planning.",
    icon: "home" as const,
  },
  {
    href: "/expertises/service-onderhoud",
    title: "Service & onderhoud",
    text: "Kitwerk, voegwerk, dakpannen, kozijnen en balkons. Kleine gebreken oplossen voor ze groot worden.",
    icon: "wrench" as const,
  },
  {
    href: "/expertises/schade-herstel",
    title: "Schade & herstel",
    text: "Lekkage, vocht, storm of brand. Eerst de schade beperken, dan de oorzaak en de afwerking.",
    icon: "shield" as const,
  },
];

const specs = [
  {
    href: "/stucwerk",
    title: "Stucwerk",
    text: "Wanden en plafonds sausklaar of behangklaar, sierpleister en scheurherstel. Ons ambacht, al drie generaties.",
    icon: "trowel" as const,
  },
  {
    href: "/expertises/schade-herstel/vochtbestrijding",
    title: "Vochtbestrijding",
    text: "Eerst meten, dan pas oplossen. Optrekkend vocht, doorslaand vocht of condens: elke oorzaak heeft een eigen aanpak.",
    icon: "drop" as const,
  },
  {
    href: "/expertises/renovatie-verbouw/verduurzaming/badkamer-renovatie",
    title: "BKT-renovatie",
    text: "Badkamer, keuken en toilet in één hand. Waterdicht tot achter de tegels, met goede ventilatie.",
    icon: "bath" as const,
  },
  {
    href: "/expertises/renovatie-verbouw/verduurzaming/gevelrenovatie",
    title: "Gevelrenovatie",
    text: "Buitenstucwerk, gevelisolatie en voegwerk die tegen zout en zeewind kunnen.",
    icon: "facade" as const,
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true" />
        <p className="hero-media-note">
          <span className="todo">[INVULLEN: hero-video]</span> 6–10 s stille
          loop: spaan trekt verse kalkpleister strak over een muur, zijlicht.
        </p>
        <div className="container hero-inner">
          <p className="eyebrow">Stukadoor · vocht · badkamers</p>
          <h1 id="hero-title">Strak afgewerkt. Droog opgeleverd. Al drie generaties.</h1>
          <p className="lead">
            We Stucen Door is je stukadoor en specialist in vochtbestrijding en
            badkamerrenovatie in Zeeland, West-Brabant en Amsterdam. Voor
            renovatie, onderhoud en herstel, met één aanspreekpunt.
          </p>
          <div className="hero-actions">
            <Link href="/offerte-aanvragen" className="btn btn-primary">
              Gratis offerte <Icon name="arrow" size={18} />
            </Link>
            <a href={site.whatsapp} className="btn btn-ghost" target="_blank" rel="noopener">
              <Icon name="whatsapp" size={20} /> WhatsApp ons
            </a>
          </div>
          <ul className="trust">
            <li>
              <Icon name="check" size={20} /> Familiebedrijf sinds 1969
            </li>
            <li>
              <Icon name="pin" size={20} /> Zeeland, Brabant &amp; Amsterdam
            </li>
            <li>
              <Icon name="users" size={20} /> Eén aanspreekpunt
            </li>
          </ul>
        </div>
      </section>

      {/* 2. Probleem → oplossing */}
      <section className="section">
        <div className="container problem">
          <div data-reveal>
            <p className="eyebrow">Waar kunnen we je mee helpen?</p>
            <h2>Scheuren, vocht of een gedateerde badkamer?</h2>
            <p className="lead">
              Je hoeft niet te weten welk vak je nodig hebt. Vertel wat je ziet,
              dan zoeken wij de oorzaak en de oplossing.
            </p>
          </div>
          <div className="grid-3">
            {entries.map((e) => (
              <LinkCard key={e.href} {...e} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Specialisaties */}
      <section className="section section-sand" aria-labelledby="spec-title">
        <div className="container two-col">
          <SectionHead
            id="spec-title"
            eyebrow="Specialisaties"
            title="Vier vakken waar we het verschil maken"
            text="Stucwerk is de basis. Daaromheen hebben we ons gespecialiseerd in de problemen die we in Zeeuwse en Amsterdamse woningen het vaakst tegenkomen."
          />
          <div>
            {specs.map((s, i) => (
              <div key={s.href} className="spec" data-reveal style={{ ["--i" as string]: i }}>
                <span className="card-icon">
                  <Icon name={s.icon} size={24} />
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Link href={s.href} className="card-more">
                    Meer over {s.title.toLowerCase()} <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Familieverhaal */}
      <section className="section section-dark" aria-labelledby="story-title">
        <div className="container">
          <SectionHead
            id="story-title"
            eyebrow="Drie generaties"
            title="Van keukens in Bergen op Zoom tot stucwerk in Amsterdam"
            text="Elke generatie bracht een eigen vak mee. De constante factor: betrokken, praktisch en gericht op oplossingen die lang meegaan."
          />
          <div className="on-dark-wrap">
            <Timeline />
          </div>
          <p style={{ marginTop: "2rem" }}>
            <Link href="/over-ons/oorsprong">Lees het hele verhaal</Link>
          </p>
        </div>
      </section>

      {/* 5. Werkwijze */}
      <section className="section" aria-labelledby="steps-title">
        <div className="container">
          <SectionHead
            id="steps-title"
            eyebrow="Werkwijze"
            title="In vijf stappen van vraag naar oplevering"
          />
          <WorkSteps />
        </div>
      </section>

      {/* 6. Projecten */}
      <section className="section section-sand" aria-labelledby="proj-title">
        <div className="container">
          <SectionHead
            id="proj-title"
            eyebrow="Projecten"
            title="Voor en na"
            text="Schuif over de foto om het verschil te zien."
          />
          <div className="grid-2">
            <BeforeAfter
              title="Optrekkend vocht in een jaren-30-woning"
              before="Binnenmuur met vochtrand en witte zoutuitslag tot circa 80 cm."
              after="Zelfde muur na injectie en saneerpleister, sausklaar."
            />
            <BeforeAfter
              title="Badkamer met inloopdouche"
              before="Oude badkamer met bad, schimmel in kit en hoeken."
              after="Nieuwe inloopdouche met douchegoot, vanuit de deuropening."
            />
          </div>
          <p style={{ marginTop: "2rem" }}>
            <Link href="/nieuws/projecten" className="btn btn-ghost">
              Alle projecten
            </Link>
          </p>
        </div>
      </section>

      {/* 7. Zakelijk */}
      <section className="section" aria-labelledby="biz-title">
        <div className="container two-col">
          <div data-reveal>
            <p className="eyebrow">Zakelijk</p>
            <h2 id="biz-title">Voor VvE&apos;s, corporaties en beheerders</h2>
            <p className="lead">
              Mutatieonderhoud, planmatig onderhoud en schadeherstel met één
              vaste partij. We rapporteren per woning, plannen met bewoners en
              werken graag met raamcontracten.
            </p>
            <Link href="/zakelijk" className="btn btn-primary">
              Zakelijke mogelijkheden <Icon name="arrow" size={18} />
            </Link>
          </div>
          <ul className="card checklist" data-reveal>
            <li><Icon name="check" size={18} /> Mutatieonderhoud: woning snel weer verhuurklaar</li>
            <li><Icon name="check" size={18} /> Planmatig onderhoud aan gevels, balkons en natte ruimtes</li>
            <li><Icon name="check" size={18} /> Vocht- en schimmelaanpak met rapportage</li>
            <li><Icon name="check" size={18} /> Vaste aanspreekpersoon en korte lijnen</li>
            <li><Icon name="check" size={18} /> Zeeland, West-Brabant en regio Amsterdam</li>
          </ul>
        </div>
      </section>

      {/* 8. Werkgebied */}
      <section className="section section-sand" aria-labelledby="area-title">
        <div className="container">
          <SectionHead
            id="area-title"
            eyebrow="Werkgebied"
            title="Vanuit Middelburg naar heel Zeeland, Brabant en Amsterdam"
            text="Kies je plaats voor lokale informatie over woningen, klimaat en veelvoorkomende klussen."
          />
          <WerkgebiedMap />
        </div>
      </section>

      {/* 9. Reviews */}
      <section className="section" aria-labelledby="rev-title">
        <div className="container narrow">
          <SectionHead id="rev-title" eyebrow="Ervaringen" title="Wat klanten zeggen" />
          <div className="review-empty" data-reveal>
            <p>
              <Todo>echte klantreviews (naam/initialen, plaats, type werk) en link naar Google-reviews</Todo>
            </p>
            <p className="hint">
              We tonen hier alleen echte, verifieerbare ervaringen. Heb je met
              ons gewerkt? Een review helpt anderen bij hun keuze.
            </p>
            {site.googleReviewsUrl && (
              <a href={site.googleReviewsUrl} target="_blank" rel="noopener">
                Bekijk onze reviews op Google
              </a>
            )}
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <FaqList faqs={homeFaqs} />

      {/* 11. Offerte */}
      <section className="section section-sand" id="offerte" aria-labelledby="quote-title">
        <div className="container form-wrap">
          <div>
            <p className="eyebrow">Gratis offerte</p>
            <h2 id="quote-title">Vertel wat er speelt</h2>
            <p className="lead">
              Zes korte stappen, foto&apos;s mogen erbij. Je krijgt{" "}
              {site.responsePromise} van één vast aanspreekpunt.
            </p>
            <QuoteForm />
          </div>
          <aside className="card">
            <h3>Liever direct contact?</h3>
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
              <li>
                <Icon name="pin" size={20} />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
