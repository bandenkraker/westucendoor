import { Icon } from "@/components/Icon";
import { CtaBlock, FaqList, JsonLd, LinkCard, PageHero, SectionHead } from "@/components/ui";
import { getService } from "@/content/services";
import { pageMeta } from "@/lib/meta";
import { serviceSchema } from "@/lib/schema";

const description =
  "Onderhoud voor VvE's, corporaties en vastgoedbeheerders: mutatieonderhoud, planmatig onderhoud en raamcontracten in Zeeland en Amsterdam. Bel ons.";

export const metadata = pageMeta({
  title: "VvE onderhoud en corporaties",
  description,
  path: "/zakelijk",
});

const offers = [
  {
    icon: "door" as const,
    t: "Mutatieonderhoud",
    d: "Een woning die leeg komt, maken we snel en volgens jullie standaard weer verhuurklaar. Stucwerk, schilderwerk, kitwerk, sanitair, hang- en sluitwerk en kleine reparaties in één ronde.",
  },
  {
    icon: "clock" as const,
    t: "Planmatig onderhoud",
    d: "Gevels, balkons, trappenhuizen en natte ruimtes volgens het meerjarenonderhoudsplan. We plannen per complex, informeren bewoners en rapporteren per object.",
  },
  {
    icon: "drop" as const,
    t: "Vocht- en schimmelklachten",
    d: "Huurders met vochtklachten helpen we met een meting, een duidelijke oorzaak en een oplossing. Je krijgt een rapport met foto's dat je in het dossier kunt opnemen.",
  },
  {
    icon: "shield" as const,
    t: "Schadeherstel",
    d: "Lekkage, storm of brand in een complex? We beperken de schade, herstellen en stemmen af met verzekeraar en beheerder.",
  },
  {
    icon: "balcony" as const,
    t: "Balkons en galerijen",
    d: "Waterdichting, kitwerk en betonherstel. Inspectie per balkon, zodat het bestuur kan prioriteren.",
  },
  {
    icon: "key" as const,
    t: "Raamcontracten",
    d: "Vaste prijsafspraken per eenheid of uurtarief, met afgesproken reactietijden. Zo hoef je niet voor elke klus een offerte op te vragen.",
  },
];

export default function ZakelijkPage() {
  return (
    <>
      <PageHero
        eyebrow="Zakelijk"
        title="Onderhoud voor VvE's, corporaties en vastgoedbeheerders"
        lead="Eén vaste partij voor mutaties, planmatig onderhoud en herstel. Met korte lijnen, rapportage per object en een planning waar je op kunt rekenen."
        crumbs={[{ name: "Zakelijk", path: "/zakelijk" }]}
      />
      <JsonLd data={serviceSchema({ name: "Onderhoud voor VvE's en woningcorporaties", description, path: "/zakelijk" })} />

      <section className="section">
        <div className="container two-col">
          <div className="prose" data-reveal>
            <p className="intro-p">
              Als beheerder of bestuurder wil je vooral één ding: dat het werk
              goed gebeurt, zonder dat jij erachteraan moet. Wij nemen dat uit
              handen. Van een lekkende kitvoeg in één woning tot het planmatig
              onderhoud van een heel complex.
            </p>
            <p>
              We werken voor VvE&apos;s, woningcorporaties, vastgoedbeheerders en
              aannemers in Zeeland, West-Brabant en de regio Amsterdam. Onze
              achtergrond als aannemersfamilie sinds 1969 betekent dat we weten
              hoe je een project plant, hoe je met bewoners communiceert en hoe
              je verschillende vakken op elkaar afstemt.
            </p>
            <p>
              Onze kracht ligt in stucwerk, vochtbestrijding, bouwafdichtingen
              en badkamer-, keuken- en toiletonderhoud. Precies de onderdelen die
              bij mutaties en klachtenonderhoud het vaakst terugkomen.
            </p>
          </div>
          <aside className="card signals" data-reveal>
            <h2 className="h3">Wat je van ons kunt verwachten</h2>
            <ul className="checklist">
              <li><Icon name="check" size={18} /> Vaste contactpersoon per opdrachtgever</li>
              <li><Icon name="check" size={18} /> Rapportage met foto&apos;s per woning of balkon</li>
              <li><Icon name="check" size={18} /> Bewonersbrieven en afspraken op maat</li>
              <li><Icon name="check" size={18} /> Afgesproken reactietijden <span className="todo">[INVULLEN]</span></li>
              <li><Icon name="check" size={18} /> VCA en verzekeringen <span className="todo">[INVULLEN]</span></li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <SectionHead eyebrow="Diensten" title="Waarvoor je ons inschakelt" />
          <div className="grid-3">
            {offers.map((o, i) => (
              <div key={o.t} className="card" data-reveal style={{ ["--i" as string]: i }}>
                <span className="card-icon">
                  <Icon name={o.icon} size={26} />
                </span>
                <h3>{o.t}</h3>
                <p>{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow prose" data-reveal>
          <h2>Zo werken we samen</h2>
          <ol>
            <li><strong>Kennismaking.</strong> We bespreken jullie portefeuille, standaarden en verwachtingen.</li>
            <li><strong>Inspectie of proefopdracht.</strong> Een paar woningen of een complex om de samenwerking te testen.</li>
            <li><strong>Afspraken.</strong> Werkwijze, tarieven, reactietijden en rapportage leggen we vast, eventueel in een raamcontract.</li>
            <li><strong>Uitvoering.</strong> We plannen, informeren bewoners en voeren uit.</li>
            <li><strong>Rapportage en evaluatie.</strong> Na elke opdracht een overzicht, periodiek een evaluatie.</li>
          </ol>
          <h2>Werkgebied</h2>
          <p>
            We zijn gevestigd in Middelburg en werken in heel Zeeland en West-Brabant. In
            de regio Amsterdam werken we veel voor VvE&apos;s in portiekwoningen,
            jaren-30-blokken en grachtenpanden.
          </p>
        </div>
      </section>

      <section className="section section-sand">
        <div className="container">
          <SectionHead title="Veelgevraagd door beheerders" />
          <div className="grid-3">
            {[
              "/expertises/service-onderhoud/badkamer-keuken-toilet-onderhoud-bkt",
              "/expertises/service-onderhoud/balkononderhoud",
              "/expertises/schade-herstel/vochtbestrijding",
            ].map((p) => {
              const s = getService(p)!;
              return <LinkCard key={p} href={p} title={s.name} text={s.short} icon={s.icon} />;
            })}
          </div>
        </div>
      </section>

      <FaqList
        faqs={[
          { q: "Werken jullie met raamcontracten?", a: "Ja. We maken graag vaste afspraken over tarieven, reactietijden en werkwijze, zodat je niet voor elke klus een offerte hoeft op te vragen." },
          { q: "Hoe communiceren jullie met bewoners?", a: "Met een aankondiging vooraf, afspraken per woning en een vast telefoonnummer voor vragen. Bij VvE's stemmen we af met het bestuur." },
          { q: "Kunnen jullie rapporteren in ons systeem?", a: "We leveren rapportages met foto's als PDF of in het formaat dat jullie gebruiken. Vraag ernaar bij de kennismaking." },
          { q: "Hoe snel kunnen jullie een mutatiewoning oppakken?", a: "Dat leggen we vast in de afspraken. We plannen mutaties zo dat de leegstand zo kort mogelijk is." },
          { q: "Werken jullie ook als onderaannemer?", a: "Ja. Voor aannemers verzorgen we stucwerk, afdichtingen en BKT-werk binnen grotere projecten." },
        ]}
      />
      <CtaBlock
        title="Plan een kennismaking"
        text="Vertel kort over je portefeuille of project. We nemen contact op om de mogelijkheden te bespreken."
      />
    </>
  );
}
