import type { Faq } from "./types";
import { site } from "@/lib/site";

export const homeFaqs: Faq[] = [
  {
    q: "In welke regio werken jullie?",
    a: "Onze basis is Middelburg. We werken in heel Zeeland, in West-Brabant rond Bergen op Zoom en in de regio Amsterdam.",
  },
  {
    q: "Is een offerte gratis?",
    a: "Ja. De opname en offerte zijn gratis en vrijblijvend. Je krijgt een offerte per onderdeel, zodat je precies ziet waar je voor betaalt.",
  },
  {
    q: "Hoe snel reageren jullie op een aanvraag?",
    a: `We streven naar ${site.responsePromise}. Via WhatsApp gaat het vaak nog sneller.`,
  },
  {
    q: "Moet ik zelf andere vakmensen regelen?",
    a: "Nee. Je hebt één aanspreekpunt. Wij stemmen loodgieter, elektricien en andere vakken op elkaar af.",
  },
  {
    q: "Wat is het verschil tussen sausklaar en behangklaar stucwerk?",
    a: "Sausklaar is glad en vlak genoeg om direct te verven. Behangklaar mag kleine oneffenheden hebben die behang verbergt.",
  },
  {
    q: "Mijn muur is vochtig. Kunnen jullie helpen?",
    a: "Ja. We meten eerst waar het vocht vandaan komt: optrekkend, doorslaand, condens of lekkage. Daarna adviseren we de oplossing en werken we de muur opnieuw af.",
  },
  {
    q: "Werken jullie ook voor VvE's en woningcorporaties?",
    a: "Ja. We doen mutatieonderhoud, planmatig onderhoud en renovaties, en werken graag met vaste afspraken of raamcontracten.",
  },
  {
    q: "Welke garantie krijg ik?",
    a: "De garantie hangt af van het soort werk en staat in de offerte. [INVULLEN: garantietermijnen]",
  },
];

export const generalFaqs: { topic: string; faqs: Faq[] }[] = [
  {
    topic: "Offerte en planning",
    faqs: [
      homeFaqs[1],
      homeFaqs[2],
      {
        q: "Wat moet ik meesturen bij een aanvraag?",
        a: "Een korte omschrijving, de plaats en bij voorkeur een paar foto's: één overzichtsfoto en één close-up van het probleem.",
      },
      {
        q: "Hoe ver vooruit plannen jullie?",
        a: "Dat verschilt per seizoen. In de offerte staat een realistische startdatum. Spoedklussen bij lekkage of stormschade proberen we zo snel mogelijk op te pakken.",
      },
    ],
  },
  {
    topic: "Stucwerk",
    faqs: [
      homeFaqs[4],
      {
        q: "Hoe lang moet stucwerk drogen?",
        a: "Als vuistregel ongeveer een week per millimeter laagdikte, bij goede ventilatie en normale temperatuur.",
      },
      {
        q: "Kunnen jullie een spuitplafond glad maken?",
        a: "Ja. Bij oudere spuitplafonds adviseren we eerst een asbestinventarisatie.",
      },
    ],
  },
  {
    topic: "Vocht en schimmel",
    faqs: [
      homeFaqs[5],
      {
        q: "Helpt een ontvochtiger tegen vochtige muren?",
        a: "Tegen condens kan het iets helpen, tegen optrekkend of doorslaand vocht niet.",
      },
      {
        q: "Waarom komt schimmel in mijn badkamer steeds terug?",
        a: "Meestal door onvoldoende ventilatie. Schoonmaken bestrijdt het symptoom, betere afzuiging en luchttoevoer de oorzaak.",
      },
    ],
  },
  {
    topic: "Badkamer, keuken en toilet",
    faqs: [
      {
        q: "Hoe lang duurt een badkamerrenovatie?",
        a: "Meestal twee tot vier weken, inclusief droogtijden.",
      },
      {
        q: "Mag ik zelf tegels en sanitair kopen?",
        a: "Ja. We controleren vooraf of het technisch past.",
      },
    ],
  },
  {
    topic: "Zakelijk",
    faqs: [
      homeFaqs[6],
      {
        q: "Kunnen jullie rapporteren per woning of balkon?",
        a: "Ja. Voor VvE's en beheerders leveren we rapportages met foto's per object.",
      },
    ],
  },
];
