import { site } from "@/lib/site";

export type TextPage = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  lead: string;
  body: string;
  /** Extra component boven de tekst */
  extra?: "timeline" | "steps";
};

export const aboutPages: TextPage[] = [
  {
    slug: "oorsprong",
    name: "Oorsprong",
    h1: "Onze oorsprong: drie generaties sinds 1969",
    title: "Oorsprong: familiebedrijf sinds 1969",
    description:
      "Van keukens in Bergen op Zoom in 1969 tot stuc-, vocht- en badkamerspecialist in Zeeland en Amsterdam. Lees het verhaal van drie generaties vakmanschap.",
    lead: "Wat in 1969 begon met keukens in Bergen op Zoom, is drie generaties later een stuc-, vocht- en badkamerspecialist.",
    extra: "timeline",
    body: `
## 1969: keukens in Bergen op Zoom

Het verhaal begint in Bergen op Zoom. In 1969 start de grootvader met het plaatsen van keukens van Bruynzeel en Keller, twee namen die toen in veel Nederlandse huizen stonden. Een keuken plaatsen leert je snel wat er allemaal bij komt kijken: rechte wanden, goede aansluitingen, leidingen op de juiste plek. Het bedrijf groeit door. Eerst als aannemer, later ook als projectontwikkelaar.

## 1989: de tweede generatie

Twintig jaar later start de volgende generatie een eigen onderneming. Die begint breed, met uitzendwerk, vastgoed en renovatie. Gaandeweg groeit het uit tot een aannemerij met een duidelijke specialisatie: verbouw en renovatie, en later stukadoorswerk. Het vak van de stukadoor blijkt de rode draad. Bij elke verbouwing komt het erop aan hoe de wanden en plafonds worden afgewerkt.

## Sinds 2020: de derde generatie

De huidige generatie richt zich sinds 2020 op badkamer-, keuken- en toiletrenovaties (BKT), onderhoud en bouwafdichtingen. Denk aan kitwerk, waterdichting en vochtbestrijding. Het werkgebied groeit mee: van Zeeland en West-Brabant naar onder andere de regio Amsterdam. De basis ligt in Middelburg.

## De constante factor

Drie generaties, drie verschillende tijden, maar één constante: betrokken, praktisch en gericht op duurzame oplossingen. We leveren werk af waar we zelf achter staan. Niet omdat het moet, maar omdat het in de familie zit.

De naam zegt het ook: **we stucen door**. Als familie, als vakmensen, en op elke klus tot het af is.
`,
  },
  {
    slug: "missie-en-visie",
    name: "Missie en visie",
    h1: "Missie en visie",
    title: "Missie en visie",
    description:
      "Onze missie: woningen die droog, strak en duurzaam zijn, met één aanspreekpunt en heldere afspraken. Lees hoe We Stucen Door werkt en waar we voor staan.",
    lead: "Droog opgeleverd, strak afgewerkt en heldere afspraken. Dat is waar we elke dag aan werken.",
    body: `
## Onze missie

We maken woningen en gebouwen droog, strak en duurzaam. Of het nu gaat om een gestuukte wand, een nieuwe badkamer of een gevel die tegen de zeewind moet kunnen. We pakken eerst de oorzaak aan, en daarna de afwerking. Zo voorkomen we dat een probleem na een paar jaar terugkomt.

## Onze visie

Bouwen en renoveren wordt steeds ingewikkelder. Meer regels, meer vakken, meer partijen. Voor een opdrachtgever is dat lastig. Wie is verantwoordelijk als er iets misgaat? Wij geloven in één aanspreekpunt dat het overzicht houdt, en in vakmensen die verder kijken dan hun eigen klus.

We geloven ook in onderhoud. Een huis dat goed wordt onderhouden, gaat generaties mee. Dat is beter voor de eigenaar, en beter voor het milieu. Herstellen waar het kan, vervangen waar het moet.

## Waar we voor staan

- **Eerst de oorzaak.** Bij vocht, scheuren en lekkages zoeken we eerst waar het vandaan komt.
- **Eén aanspreekpunt.** Je hoeft niet zelf vijf vakmensen te coördineren.
- **Heldere afspraken.** Een offerte per onderdeel, met wat er wel en niet in zit.
- **Netjes werken.** Afdekken, stofarm werken en dagelijks opruimen.
- **Eerlijk advies.** Ook als dat betekent dat een kleinere klus genoeg is.

## Voor wie we werken

Voor particulieren die hun huis willen verbouwen, verduurzamen of herstellen. En voor zakelijke opdrachtgevers: VvE's, woningcorporaties, vastgoedbeheerders en aannemers. Voor hen werken we met vaste werkwijzen en planningen. Lees meer op onze pagina [Zakelijk](/zakelijk).
`,
  },
  {
    slug: "werkwijze",
    name: "Werkwijze",
    h1: "Onze werkwijze in vijf stappen",
    title: "Werkwijze: van contact tot oplevering",
    description:
      "Hoe werkt We Stucen Door? In vijf stappen van eerste contact via opname en heldere offerte naar uitvoering, oplevering en nazorg. Lees hoe we werken.",
    lead: "Van het eerste bericht tot de oplevering: zo weet je altijd waar je aan toe bent.",
    extra: "steps",
    body: `
## 1. Contact

Je neemt contact op via WhatsApp, telefoon, e-mail of het offerteformulier. Stuur gerust een paar foto's mee. Een overzichtsfoto en een close-up van het probleem helpen ons om direct mee te denken. Je krijgt ${site.responsePromise}.

## 2. Opname

We komen langs om te kijken en op te meten. Bij vocht en scheuren meten we en zoeken we naar de oorzaak. We vragen naar je wensen, je planning en je budget. Een opname is vrijblijvend.

## 3. Heldere offerte

Je ontvangt een offerte per onderdeel. Daarin staan de werkzaamheden, de materialen, de planning en wat er niet in zit. Waar er risico's zijn, zoals bij sloop in een oude badkamer, benoemen we die vooraf. Geen kleine lettertjes.

## 4. Uitvoering

We plannen het werk en houden je op de hoogte. Je hebt één vast aanspreekpunt dat de planning bewaakt en de andere vakmensen aanstuurt. We dekken af, werken stofarm en ruimen dagelijks op.

## 5. Oplevering en nazorg

Aan het einde lopen we het werk samen na. Is er iets niet goed, dan lossen we het op. Je krijgt een droog-, verf- of onderhoudsadvies mee. En ook na de oplevering blijven we bereikbaar.

## Garantie

[INVULLEN: garantievoorwaarden en -termijnen per type werk]
`,
  },
  {
    slug: "referenties",
    name: "Referenties",
    h1: "Referenties en ervaringen",
    title: "Referenties en klantervaringen",
    description:
      "Lees ervaringen van klanten van We Stucen Door. We tonen alleen echte, verifieerbare reviews. Bekijk ook onze projecten met voor- en na-foto's.",
    lead: "We tonen hier alleen echte ervaringen van klanten. Geen verzonnen reviews.",
    body: `
## Ervaringen van klanten

[INVULLEN: echte reviews met naam (of initialen), plaats, type werk en datum. Bij voorkeur met link naar de review op Google.]

## Reviews op Google

[INVULLEN: link naar het Google Bedrijfsprofiel met reviews]

## Zakelijke referenties

[INVULLEN: VvE's, corporaties, beheerders of aannemers die als referentie genoemd mogen worden, met toestemming]

## Zelf een ervaring delen?

Heb je met ons gewerkt? We horen graag hoe het je bevallen is. Een review op Google helpt andere mensen bij hun keuze, en helpt ons om beter te worden.

Bekijk ook onze [projecten](/nieuws/projecten).
`,
  },
  {
    slug: "mvo",
    name: "MVO",
    h1: "Maatschappelijk verantwoord ondernemen",
    title: "Maatschappelijk verantwoord ondernemen",
    description:
      "Hoe We Stucen Door verantwoord onderneemt: herstellen boven vervangen, duurzame materialen, afvalscheiding en lokaal werken in Zeeland en Amsterdam.",
    lead: "Duurzaam bouwen begint bij wat er al staat. Herstellen boven vervangen, en vakwerk dat lang meegaat.",
    body: `
## Herstellen waar het kan

De meest duurzame woning is de woning die er al staat. Daarom kijken we bij elke klus eerst wat er hersteld kan worden. Een kozijn met houtrot herstellen in plaats van vervangen. Oude kalkpleister repareren in plaats van eraf halen. Dakpannen hergebruiken als ze nog goed zijn.

## Onderhoud voorkomt verspilling

Goed onderhoud verlengt de levensduur van een gebouw. Een kitvoeg op tijd vervangen voorkomt een lekkage, en daarmee sloop en nieuw materiaal. Daarom adviseren we onze klanten over periodiek onderhoud.

## Materialen die passen

We kiezen materialen die passen bij de constructie en lang meegaan. Dampopen pleisters die vochtproblemen voorkomen. Kalk in oude panden. Isolatie die de energierekening en de CO₂-uitstoot verlaagt.

## Afval scheiden

Bouwafval scheiden we zo goed mogelijk: puin, hout, metaal, gips en restafval. Zo kan zoveel mogelijk worden hergebruikt of gerecycled.

## Lokaal en efficiënt

We werken vanuit Middelburg en plannen klussen per regio. Dat scheelt reistijd en uitstoot. In Amsterdam plannen we projecten aaneengesloten.

## Mensen

[INVULLEN: beleid rond opleiding, leerlingen, veiligheid (VCA) en samenwerking met lokale vakmensen]
`,
  },
];

export const legalPages: TextPage[] = [
  {
    slug: "privacy",
    name: "Privacyverklaring",
    h1: "Privacyverklaring",
    title: "Privacyverklaring",
    description:
      "Lees hoe We Stucen Door omgaat met je persoonsgegevens: welke gegevens we verwerken, waarom, hoe lang we ze bewaren en welke rechten je hebt onder de AVG.",
    lead: "We gaan zorgvuldig om met je gegevens. Hier lees je wat we verwerken en waarom.",
    body: `
> Deze privacyverklaring is een concept. Laat de tekst controleren voordat de site live gaat. [CHECK]

## Wie zijn wij?

${site.name}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}. E-mail: ${site.email}. KvK: [INVULLEN]. Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze verklaring.

## Welke gegevens verwerken we?

Als je het offerteformulier invult, contact opneemt of klant bij ons wordt, verwerken we:

- Naam
- E-mailadres en telefoonnummer
- Adres, postcode en plaats van het werk
- Omschrijving van het werk en foto's die je meestuurt
- Gegevens die nodig zijn voor de offerte, de uitvoering en de facturatie

## Waarom verwerken we deze gegevens?

- Om je aanvraag te beantwoorden en een offerte te maken (op basis van je toestemming en/of het voorbereiden van een overeenkomst).
- Om de overeenkomst uit te voeren: plannen, uitvoeren, factureren.
- Om te voldoen aan wettelijke verplichtingen, zoals de fiscale bewaarplicht.

## Hoe lang bewaren we gegevens?

- Offerteaanvragen die niet tot een opdracht leiden: [INVULLEN, bijvoorbeeld 12 maanden].
- Gegevens van klanten: zolang nodig voor de uitvoering en garantie, en financiële gegevens 7 jaar vanwege de fiscale bewaarplicht.

## Met wie delen we gegevens?

We verkopen je gegevens nooit. We delen gegevens alleen met partijen die nodig zijn voor de uitvoering, zoals onderaannemers bij jouw project, onze boekhouder en dienstverleners voor e-mail en hosting. Met hen maken we afspraken over de beveiliging van je gegevens.

Het offerteformulier wordt verstuurd via een e-maildienst [INVULLEN: naam dienst, bijv. Resend]. WhatsApp-berichten verlopen via WhatsApp (Meta).

## Cookies

Deze website gebruikt alleen functionele cookies die nodig zijn voor de werking van de site. We gebruiken geen tracking- of advertentiecookies, tenzij je daar toestemming voor geeft. Zie onze [cookieverklaring](/cookies).

## Je rechten

Je hebt het recht om je gegevens in te zien, te laten corrigeren of te laten verwijderen. Ook kun je bezwaar maken tegen de verwerking of je toestemming intrekken. Stuur daarvoor een e-mail naar ${site.email}. We reageren binnen vier weken.

Ben je niet tevreden over hoe we met je gegevens omgaan? Dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens.

## Beveiliging

We nemen passende maatregelen om je gegevens te beveiligen. De website gebruikt een beveiligde verbinding (HTTPS).

## Wijzigingen

We kunnen deze privacyverklaring aanpassen. De meest actuele versie staat altijd op deze pagina.

Laatst bijgewerkt: [INVULLEN: datum]
`,
  },
  {
    slug: "cookies",
    name: "Cookieverklaring",
    h1: "Cookieverklaring",
    title: "Cookieverklaring",
    description:
      "Welke cookies gebruikt de website van We Stucen Door? Alleen functionele cookies, geen tracking zonder toestemming. Lees hier hoe het werkt.",
    lead: "Kort: we gebruiken geen tracking- of advertentiecookies zonder je toestemming.",
    body: `
## Wat zijn cookies?

Cookies zijn kleine bestanden die een website op je apparaat opslaat. Ze kunnen nodig zijn voor de werking van de site, of worden gebruikt om je gedrag te volgen.

## Welke cookies gebruiken wij?

**Functionele cookies.** Deze site werkt zonder tracking. We plaatsen standaard geen analytische of advertentiecookies.

**Analytische cookies.** [INVULLEN: alleen als er analytics wordt toegevoegd. Dan verschijnt er een cookiebanner en worden analytische cookies pas geplaatst na toestemming.]

## Inhoud van derden

- **Google Maps.** Op de contactpagina kun je een kaart laden. Die wordt pas geladen als je op "Kaart laden" klikt. Google kan dan cookies plaatsen.
- **WhatsApp.** Als je op een WhatsApp-knop klikt, ga je naar WhatsApp. Daar gelden de voorwaarden van WhatsApp (Meta).
- **Facebook en Instagram.** Links naar onze sociale media openen de betreffende sites, met hun eigen cookiebeleid.

## Cookies verwijderen

Je kunt cookies altijd verwijderen via de instellingen van je browser.

## Vragen?

Mail naar ${site.email}. Lees ook onze [privacyverklaring](/privacy).
`,
  },
  {
    slug: "algemene-voorwaarden",
    name: "Algemene voorwaarden",
    h1: "Algemene voorwaarden",
    title: "Algemene voorwaarden",
    description:
      "De algemene voorwaarden van We Stucen Door voor offertes, opdrachten, uitvoering, betaling en garantie. Lees ze hier of vraag ze op via e-mail.",
    lead: "Duidelijke afspraken vooraf voorkomen discussies achteraf.",
    body: `
> De definitieve algemene voorwaarden moeten door de ondernemer worden aangeleverd of juridisch worden opgesteld. Onderstaande tekst is een samenvatting van de onderwerpen die erin horen. [INVULLEN]

## Toepasselijkheid

Deze voorwaarden gelden voor alle offertes, opdrachten en overeenkomsten van ${site.name}. [INVULLEN: verwijzing naar branchevoorwaarden, indien van toepassing]

## Offertes

- Een offerte is vrijblijvend en geldig gedurende [INVULLEN] dagen.
- In de offerte staan de werkzaamheden, materialen, planning en de onderdelen die niet zijn inbegrepen.
- Stelposten en meer- en minderwerk worden in de offerte toegelicht.

## Uitvoering

- We voeren het werk vakkundig uit volgens de afspraken in de offerte.
- De opdrachtgever zorgt voor toegang tot de werkplek, water en elektra, tenzij anders afgesproken.
- Bij onvoorziene omstandigheden, zoals verborgen gebreken, overleggen we eerst voordat we extra werk uitvoeren.

## Oplevering

Het werk wordt samen opgeleverd. Eventuele punten worden vastgelegd en binnen een redelijke termijn opgelost.

## Betaling

[INVULLEN: betalingstermijnen, termijnbetalingen bij grotere projecten]

## Garantie

[INVULLEN: garantietermijnen per soort werk, voorwaarden en uitsluitingen]

## Aansprakelijkheid

[INVULLEN]

## Klachten en geschillen

Heb je een klacht? Neem eerst contact met ons op via ${site.email}. We zoeken samen naar een oplossing. [INVULLEN: geschillencommissie, indien van toepassing]

De volledige algemene voorwaarden kun je ook opvragen via e-mail.
`,
  },
];
