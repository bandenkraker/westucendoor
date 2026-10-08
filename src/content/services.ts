import type { Service } from "./types";
import { renovatie } from "./services-renovatie";
import { onderhoud } from "./services-onderhoud";
import { schade } from "./services-schade";

/** Hoofdpagina voor het kernambacht (eigen URL: /stucwerk) */
export const stucwerk: Service = {
  path: "/stucwerk",
  name: "Stucwerk",
  short: "Wanden en plafonds strak gestuukt: sausklaar, behangklaar of met sierpleister.",
  h1: "Stukadoor in Zeeland: strak stucwerk voor wand en plafond",
  title: "Stukadoor Zeeland: stucwerk wand en plafond",
  description:
    "Stukadoor in Middelburg en heel Zeeland: wanden en plafonds sausklaar of behangklaar, sierpleister en scheurherstel. Familiebedrijf sinds 1969.",
  icon: "trowel",
  intro: [
    "Stucwerk is ons ambacht. Het zit in de naam en in de familie. Een strak gestuukte muur zie je niet, en dat is precies de bedoeling. Je ziet een rustige, vlakke wand waar het licht gelijkmatig overheen valt. Pas als stucwerk slecht is gedaan, valt het op: bobbels, scheurtjes, slordige hoeken en plekken die bij strijklicht schaduw geven.",
    "We stucen wanden en plafonds in nieuwbouw, bij verbouwingen en in bestaande woningen. Je kiest tussen sausklaar stucwerk, dat je direct kunt verven, en behangklaar stucwerk, dat vlak genoeg is voor behang. Ook brengen we sierpleister aan, zoals spachtelputz, betonlook of kalkpleister met een levendige structuur. Bij renovaties werken we oude, beschadigde wanden opnieuw af met renovatiestuc en herstellen we scheuren duurzaam.",
    "Het verschil zit in de voorbereiding. Wij dekken alles zorgvuldig af, beoordelen de ondergrond en kiezen het juiste systeem. Een gipsplaat vraagt om een andere aanpak dan een oude kalkzandsteen wand of een vochtgevoelige muur in een jaren-30-woning. Daarna zetten we hoeken met hoekprofielen strak en werken we in de juiste volgorde, met de juiste droogtijden.",
    "We werken in Middelburg, Vlissingen, Goes en de rest van Zeeland, in West-Brabant en in de regio Amsterdam. Voor particulieren, aannemers, VvE's en woningcorporaties.",
  ],
  signals: [
    "Nieuwe wanden of plafonds na een verbouwing",
    "Scheuren of gaten in bestaande wanden",
    "Een structuurplafond dat je kwijt wilt",
    "Oude, onvlakke muren die je strak wilt hebben",
    "Je wilt een sierpleister of betonlook",
  ],
  steps: [
    { t: "Opname", d: "We beoordelen de ondergrond, meten op en bespreken het gewenste afwerkingsniveau." },
    { t: "Afdekken", d: "Vloeren, kozijnen, stopcontacten en meubels worden zorgvuldig afgedekt en afgeplakt." },
    { t: "Voorbereiden", d: "Hechtlaag of voorstrijk, hoekprofielen zetten en naden en scheuren wapenen." },
    { t: "Stucen", d: "Een of meer lagen pleister, vlak afgewerkt en gladgezet op het juiste moment." },
    { t: "Opleveren", d: "We ruimen op, lopen het werk samen na en geven droog- en verfadvies." },
  ],
  sections: [
    {
      h2: "Sausklaar of behangklaar?",
      body: [
        "Sausklaar stucwerk is de hoogste afwerkingsklasse voor wanden. Het oppervlak is zo glad en vlak dat je er direct muurverf op kunt zetten, zonder dat oneffenheden zichtbaar zijn. Behangklaar stucwerk is vlak, maar mag kleine oneffenheden hebben die behang wegwerkt. Het is iets voordeliger. Twijfel je nog? In ons kennisbankartikel leggen we het verschil uitgebreid uit.",
      ],
    },
    {
      h2: "Plafonds: van spuitwerk naar strak glad",
      body: [
        "Veel woningen hebben nog een spuitplafond of een structuurplafond met korrel. Die kun je glad laten stucen. We schrapen of schuren waar nodig, brengen een hechtlaag aan en stucen het plafond glad. Het resultaat is een rustig, modern plafond dat je makkelijk kunt sausen. Bij oudere spuitplafonds controleren we eerst of er asbest in kan zitten. Is dat mogelijk, dan laat je eerst een asbestinventarisatie doen.",
      ],
    },
    {
      h2: "Stucwerk in oude panden en monumenten",
      body: [
        "In de binnensteden van Middelburg, Veere en Zierikzee en in Amsterdamse grachtenpanden zitten nog veel muren met kalkpleister. Kalk is dampopen en flexibel. Een moderne gipspleister of cementpleister op zo'n muur kan vocht opsluiten en scheuren veroorzaken. Daarom werken we in oude panden met kalkgebonden pleisters die passen bij de bestaande constructie.",
      ],
    },
    {
      h2: "Scheurherstel dat blijft zitten",
      body: [
        "Een scheur dichtsmeren is makkelijk. Zorgen dat hij niet terugkomt, is vakwerk. We kijken eerst naar de oorzaak: krimp, werking tussen twee materialen of een constructief probleem. Daarna snijden we de scheur open, wapenen we met gaas of een wapeningsstrook en stucen we het vlak opnieuw bij. Zo blijft het herstel ook na een paar seizoenen onzichtbaar.",
      ],
    },
  ],
  materials: [
    "Gipspleister voor binnenwanden en plafonds",
    "Kalkpleister voor oude, dampopen muren",
    "Renovatiestuc en hechtlagen voor lastige ondergronden",
    "Glasvezelgaas en hoekprofielen tegen scheuren en voor strakke hoeken",
    "Sierpleisters: spachtelputz, betonlook, Marmorino-achtige kalkafwerkingen",
  ],
  duration:
    "Een gemiddelde kamer is in één tot twee dagen gestuukt. Daarna moet het stucwerk drogen: reken op ongeveer een week per millimeter laagdikte bij goede ventilatie, voordat je gaat sausen.",
  costFactors: [
    "Aantal vierkante meters wand en plafond",
    "Staat en soort ondergrond",
    "Afwerkingsniveau: behangklaar, sausklaar of sierpleister",
    "Hoeveel er afgedekt en voorbereid moet worden",
    "Bereikbaarheid en hoogte (trappenhuizen, vides)",
  ],
  faqs: [
    {
      q: "Hoe lang moet stucwerk drogen voordat ik kan verven?",
      a: "Als vuistregel een week per millimeter laagdikte, bij goede ventilatie en normale temperatuur. Gestuukte wanden zijn droog als ze egaal licht van kleur zijn.",
    },
    {
      q: "Wat is het verschil tussen sausklaar en behangklaar?",
      a: "Sausklaar is vlakker en gladder, zodat je direct kunt verven. Behangklaar mag kleine oneffenheden hebben die behang verbergt.",
    },
    {
      q: "Kunnen jullie een spuitplafond glad maken?",
      a: "Ja. We brengen een hechtlaag aan en stucen het plafond glad. Bij oudere spuitplafonds adviseren we eerst een asbestinventarisatie.",
    },
    {
      q: "Moet ik zelf afdekken of leeghalen?",
      a: "Haal kleine spullen weg en schuif meubels naar het midden. Het afdekken doen wij.",
    },
    {
      q: "Werken jullie ook voor aannemers?",
      a: "Ja. We stucen ook als onderaannemer voor bouw- en renovatieprojecten.",
    },
    {
      q: "Is stucen stoffig?",
      a: "Het stucen zelf niet. Het voorbereiden, zoals schuren of oud pleister verwijderen, wel. Dat doen we met afzuiging en we dekken alles goed af.",
    },
  ],
  related: [
    "/expertises/schade-herstel/vochtbestrijding",
    "/expertises/renovatie-verbouw/verduurzaming/gevelrenovatie/buiten-stucwerk",
    "/expertises/schade-herstel/interieur-en-afbouwschade",
  ],
  articles: ["sausklaar-vs-behangklaar-stucwerk", "hoe-lang-moet-stucwerk-drogen"],
  project: {
    title: "Structuurplafond glad gestuukt",
    before: "Woonkamerplafond met spuitwerk en scheuren, bij strijklicht van het raam.",
    after: "Glad gestuukt, gesausd plafond met inbouwspots, zelfde standpunt.",
  },
};

export const services: Service[] = [stucwerk, ...renovatie, ...onderhoud, ...schade];

const byPath = new Map(services.map((s) => [s.path, s]));

export const getService = (path: string) => byPath.get(path);

const parentOf = (path: string) => path.slice(0, path.lastIndexOf("/")) || "/";

export const getChildren = (path: string) =>
  services.filter((s) => s.path !== path && parentOf(s.path) === path);

export const expertiseServices = services.filter((s) =>
  s.path.startsWith("/expertises/"),
);

export function crumbsFor(path: string) {
  const parts = path.split("/").filter(Boolean);
  const crumbs: { name: string; path: string }[] = [];
  let acc = "";
  for (const p of parts) {
    acc += `/${p}`;
    if (acc === "/expertises") {
      crumbs.push({ name: "Expertises", path: acc });
      continue;
    }
    const s = byPath.get(acc);
    if (s) crumbs.push({ name: s.name, path: acc });
  }
  return crumbs;
}
