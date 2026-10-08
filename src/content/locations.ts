import type { Location } from "./types";

const VOCHT = "/expertises/schade-herstel/vochtbestrijding";
const BAD = "/expertises/renovatie-verbouw/verduurzaming/badkamer-renovatie";
const GEVEL = "/expertises/renovatie-verbouw/verduurzaming/gevelrenovatie";
const BUITENSTUC = `${GEVEL}/buiten-stucwerk`;
const DG = "/expertises/service-onderhoud/dak-en-gevelonderhoud";
const STORM = "/expertises/schade-herstel/storm-en-natuurschade";
const KEUKEN = "/expertises/renovatie-verbouw/verduurzaming/keukenrenovatie";
const DAKKAPEL = "/expertises/renovatie-verbouw/woninguitbreiding/vergunningvrije-dakkapel";
const KELDER = "/expertises/renovatie-verbouw/verduurzaming/kelderrenovatie";
const BALKON = "/expertises/service-onderhoud/balkononderhoud";

export const locations: Location[] = [
  {
    slug: "middelburg",
    name: "Middelburg",
    h1: "Stukadoor in Middelburg",
    title: "Stukadoor Middelburg: stucwerk en vocht",
    description:
      "Stukadoor in Middelburg nodig? Vanuit de Oosterscheldestraat werken we in de binnenstad en alle wijken: stucwerk, vocht en badkamers. Vraag offerte aan.",
    intro: [
      "Middelburg is onze thuisbasis. Vanuit de Oosterscheldestraat rijden we in een paar minuten naar de binnenstad, Dauwendaele of Arnemuiden. Dat scheelt reistijd, en dus kosten. Het betekent ook dat we snel kunnen langskomen voor een opname of als er iets spoedeisends is.",
      "In Middelburg werken we aan heel verschillende woningen. Van statige panden in de binnenstad tot jaren-30-woningen aan de rand van het centrum en rijwoningen uit de jaren zeventig en tachtig in de buitenwijken. Elk type vraagt om een eigen aanpak.",
    ],
    sections: [
      {
        h2: "Monumenten en oude panden in de binnenstad",
        body: [
          "De binnenstad van Middelburg is een beschermd stadsgezicht met honderden monumenten. Veel muren zijn gemetseld met kalkmortel en afgewerkt met kalkpleister. Die muren moeten vocht kwijt kunnen. Een harde cementpleister of een dichte verf sluit dat vocht op. Het gevolg zie je later: zoutuitslag, loslatend pleisterwerk en schimmel.",
          "Wij werken in oude panden daarom met dampopen kalkpleisters en verven die passen bij de ondergrond. Bij werk aan de buitenkant van een monument is vaak een omgevingsvergunning nodig. We helpen je met de juiste materiaalkeuze en omschrijving.",
        ],
      },
      {
        h2: "Jaren-30-woningen: mooie details, koude muren",
        body: [
          "Rond de binnenstad en richting Sint Laurens en Koudekerke staan veel jaren-30-woningen. Ze hebben karakter: erkers, glas-in-lood en hoge plafonds. Maar vaak ook een smalle of ongeïsoleerde spouw, geen goede vochtkering en een kelder of kruipruimte die vochtig is. Daar zien we veel optrekkend vocht en condens in hoeken.",
          "Bij deze woningen combineren we vaak vochtbestrijding met nieuw stucwerk en, waar het kan, verduurzaming. Ook een dakkapel op het achterdak is hier een populaire manier om ruimte te winnen.",
        ],
      },
      {
        h2: "De buitenwijken: badkamers en onderhoud",
        body: [
          "In wijken als Dauwendaele, Magistraatwijk, Klarenbeek en de Stromenwijk staan veel rijwoningen uit de jaren zeventig tot negentig. Daar gaat het vaak om badkamers en toiletten die aan vervanging toe zijn, plafonds met spuitwerk die glad moeten en kitwerk dat versleten is. In nieuwere wijken zoals Mortiere en Veersepoort doen we vooral afwerking en stucwerk na verbouwingen.",
        ],
      },
      {
        h2: "Het Walcherse klimaat",
        body: [
          "Middelburg ligt midden op Walcheren, een paar kilometer van de kust. De zeewind brengt zout en vocht mee, en de westgevels krijgen veel slagregen. Dat merk je aan voegwerk en gevelpleister die sneller verweren dan in het binnenland. Regelmatig gevelonderhoud loont hier.",
        ],
      },
    ],
    neighborhoods: ["Binnenstad", "Dauwendaele", "Magistraatwijk", "Klarenbeek", "Stromenwijk", "Mortiere", "Veersepoort", "Sint Laurens", "Nieuw- en Sint Joosland", "Arnemuiden"],
    services: ["/stucwerk", VOCHT, BAD, BUITENSTUC, DAKKAPEL],
    faqs: [
      { q: "Hoe snel kunnen jullie in Middelburg langskomen?", a: "Omdat we in Middelburg zitten, kunnen we meestal op korte termijn een opname plannen." },
      { q: "Werken jullie aan monumenten in de binnenstad?", a: "Ja. We werken met dampopen kalkpleisters en adviseren over vergunningen en materiaalkeuze." },
      { q: "Rekenen jullie voorrijkosten in Middelburg?", a: "Hoe we voorrijkosten rekenen, staat in de offerte. [INVULLEN: beleid voorrijkosten]" },
      { q: "Doen jullie ook kleine klussen in Middelburg?", a: "Ja, ook een scheur in een plafond of kitwerk in de badkamer." },
    ],
  },
  {
    slug: "vlissingen",
    name: "Vlissingen",
    h1: "Stukadoor in Vlissingen",
    title: "Stukadoor Vlissingen: stucwerk en gevel",
    description:
      "Stukadoor in Vlissingen of Souburg? Stucwerk, gevelonderhoud en vochtbestrijding die bestand zijn tegen zeewind en zout. Vraag een offerte aan.",
    intro: [
      "Vlissingen ligt pal aan de Westerschelde, waar de zee het dichtst bij de stad komt. Langs de boulevard krijgen woningen en appartementen de volle laag: wind, zout en slagregen. Dat zie je terug aan gevels, balkons en kozijnen.",
      "We werken in heel Vlissingen, van de oude binnenstad en het Scheldekwartier tot Paauwenburg, Lammerenburg, Westduin en Oost- en West-Souburg. Vanuit Middelburg zijn we er in een kwartier.",
    ],
    sections: [
      {
        h2: "Wonen aan zee: zout in de gevel",
        body: [
          "Zeewind bevat kleine zoutdeeltjes. Die slaan neer op gevels, trekken met regenwater in het metselwerk en kristalliseren als de muur opdroogt. Dat drukt voegen en pleisterwerk kapot. Aan de boulevard en in de straten erachter zien we daardoor meer zoutschade en sneller verweerde voegen dan landinwaarts.",
          "Bij gevelonderhoud in Vlissingen kiezen we materialen die daartegen kunnen: zoutbestendige mortels, dampopen pleisters en waar zinvol een impregnering die regen buiten houdt. En we adviseren om vaker te inspecteren.",
        ],
      },
      {
        h2: "Appartementen en balkons",
        body: [
          "Vlissingen heeft veel appartementencomplexen, langs de boulevard en in de nieuwbouw van het Scheldekwartier. Balkons en galerijen zijn daar extra kwetsbaar. Kitwerk droogt uit in zon en wind, coatings slijten en water vindt zijn weg naar de onderburen. Voor VvE's doen we periodieke controles en herstel.",
        ],
      },
      {
        h2: "Oudere wijken en wederopbouw",
        body: [
          "In de binnenstad en in Souburg staan nog veel oudere woningen, deels uit de wederopbouwperiode na de oorlog. Die hebben vaak te maken met vochtige kelders en kruipruimtes, koude muren en oude badkamers. We combineren vochtbestrijding met strak nieuw stucwerk en, waar gewenst, een badkamerrenovatie.",
        ],
      },
    ],
    neighborhoods: ["Binnenstad", "Boulevard", "Scheldekwartier", "Paauwenburg", "Lammerenburg", "Westduin", "Groot-Abeele", "Oost-Souburg", "West-Souburg", "Ritthem"],
    services: [DG, BALKON, VOCHT, "/stucwerk", BAD],
    faqs: [
      { q: "Waarom verweert mijn gevel in Vlissingen zo snel?", a: "Door de combinatie van zout, wind en slagregen. Regelmatig onderhoud en de juiste materialen maken een groot verschil." },
      { q: "Doen jullie balkons voor VvE's aan de boulevard?", a: "Ja, inclusief kitwerk, waterdichting en betonherstel." },
      { q: "Werken jullie ook in Souburg?", a: "Ja, in Oost- en West-Souburg en in Ritthem." },
    ],
  },
  {
    slug: "goes",
    name: "Goes",
    h1: "Stukadoor in Goes",
    title: "Stukadoor Goes: stucwerk en badkamers",
    description:
      "Stukadoor in Goes of Kloetinge? Strak stucwerk, badkamer- en keukenrenovatie en vochtbestrijding op de Bevelanden. Familiebedrijf sinds 1969.",
    intro: [
      "Goes is het hart van de Bevelanden en groeit al jaren. Naast de historische binnenstad rond de Grote Markt zijn er uitgestrekte wijken met rijwoningen en nieuwbouw. Wij werken in Goes aan stucwerk, badkamers, keukens en vochtproblemen, voor particulieren en voor beheerders.",
      "Vanuit Middelburg rijden we in ongeveer een halfuur naar Goes. We plannen opnames en klussen daar zo efficiënt mogelijk, zodat je snel geholpen wordt.",
    ],
    sections: [
      {
        h2: "De binnenstad: oude panden met een eigen karakter",
        body: [
          "Rond de Grote Markt en de haven staan oude winkel- en woonpanden. Vaak met woningen boven winkels, krappe trappen en muren van verschillende ouderdom. Dat vraagt om stucwerk dat rekening houdt met de ondergrond, en om een nette werkwijze in smalle ruimtes. We werken stofarm en dekken trappenhuizen goed af.",
        ],
      },
      {
        h2: "Wijken uit de jaren zestig tot negentig",
        body: [
          "In wijken als Goes-Oost, Goes-Zuid en Goes-West staan veel eengezinswoningen die rond de veertig tot zestig jaar oud zijn. Daar komen badkamers, toiletten en keukens aan het einde van hun levensduur. Ook spuitplafonds die glad moeten en wanden die opnieuw strak moeten na het verwijderen van behang zijn hier veel voorkomende klussen.",
          "Combineer je een badkamerrenovatie met stucwerk in de rest van het huis? Dan heb je één planning en één aanspreekpunt.",
        ],
      },
      {
        h2: "Nieuwbouw in de Ouverture en Kloetinge",
        body: [
          "In nieuwbouwwijken zoals de Ouverture en rond Kloetinge doen we vooral afwerking: wanden sausklaar stucen, plafonds afwerken en een dakkapel of uitbouw afbouwen. Nieuwbouw heeft vaak nog bouwvocht. We adviseren daarom over droogtijd voordat je gaat schilderen.",
        ],
      },
      {
        h2: "Polderklimaat op de Bevelanden",
        body: [
          "Goes ligt minder direct aan zee dan Walcheren, maar de Oosterschelde en de open polders zorgen voor veel wind en een hoge luchtvochtigheid. In oudere woningen zonder goede ventilatie zien we daardoor geregeld condens en schimmel in slaap- en badkamers.",
        ],
      },
    ],
    neighborhoods: ["Binnenstad", "Goes-Oost", "Goes-Zuid", "Goes-West", "Ouverture", "Kloetinge", "Wilhelminadorp", "'s-Heer Hendrikskinderen"],
    services: ["/stucwerk", BAD, KEUKEN, VOCHT, DAKKAPEL],
    faqs: [
      { q: "Werken jullie ook in de dorpen rond Goes?", a: "Ja, onder meer in Kloetinge, Wilhelminadorp en 's-Heer Hendrikskinderen, en verder op Zuid- en Noord-Beveland." },
      { q: "Kunnen jullie een spuitplafond in Goes glad maken?", a: "Ja. Bij oudere spuitplafonds adviseren we eerst een asbestinventarisatie." },
      { q: "Hoe snel kan een badkamerrenovatie starten?", a: "Dat hangt af van de planning. In de offerte staat een realistische startdatum." },
    ],
  },
  {
    slug: "veere-domburg",
    name: "Veere & Domburg",
    h1: "Stukadoor in Veere, Domburg en de Walcherse kust",
    title: "Stukadoor Veere en Domburg",
    description:
      "Stukadoor in Veere, Domburg of Oostkapelle? Stucwerk en gevelonderhoud voor woningen en vakantiehuizen aan de Walcherse kust. Vraag een offerte aan.",
    intro: [
      "De gemeente Veere strekt zich uit langs de kust van Walcheren, van Vrouwenpolder via Oostkapelle en Domburg tot Westkapelle en Zoutelande. Het historische stadje Veere ligt aan het Veerse Meer. Het is een gebied met monumenten, villa's, dijkwoningen en veel vakantiewoningen.",
      "Woningen hier staan direct in de zeewind. Dat maakt onderhoud van gevels, daken en kozijnen belangrijker dan waar ook. Wij werken in de hele gemeente Veere, voor eigenaren die er wonen en voor eigenaren van tweede woningen en vakantieverhuur.",
    ],
    sections: [
      {
        h2: "Vestingstadje Veere: monumenten met kalkpleister",
        body: [
          "Veere is een beschermd stadsgezicht met veel monumenten. Gepleisterde en gewitte gevels, oude kalkmuren en houten details bepalen het beeld. Bij herstel van pleisterwerk en voegen werken we met kalkgebonden materialen die bij de historische constructie passen. Voor werk aan de buitenkant is meestal een vergunning nodig. We denken mee over de aanvraag.",
        ],
      },
      {
        h2: "Domburg en de kustdorpen: wind, zand en zout",
        body: [
          "In Domburg, Oostkapelle, Westkapelle en Zoutelande krijgen gevels het zwaarst te verduren. Zout en zand schuren langs de gevel, en slagregen uit het westen dringt in voegen en pleisterwerk. Witte en lichte gepleisterde villa's verkleuren snel en krijgen haarscheuren.",
          "We herstellen gevelpleister, vernieuwen voegwerk, impregneren waar dat zinvol is en schilderen met dampopen gevelverf. Bij dakonderhoud letten we extra op nokvorsten en loodwerk, want daar trekt de wind als eerste aan.",
        ],
      },
      {
        h2: "Vakantiewoningen: onderhoud buiten het seizoen",
        body: [
          "Verhuur je een vakantiewoning, dan wil je in het seizoen geen bouwvakkers over de vloer. We plannen binnenwerk, badkamerrenovaties en schilderwerk daarom graag in het najaar en de winter. Buitenwerk doen we in het voorjaar, zodat de woning weer klaar is als de eerste gasten komen. Ook tussen twee boekingen door kunnen we kleine reparaties doen.",
        ],
      },
    ],
    neighborhoods: ["Veere", "Domburg", "Oostkapelle", "Westkapelle", "Zoutelande", "Vrouwenpolder", "Serooskerke", "Koudekerke", "Gapinge", "Meliskerke"],
    services: [BUITENSTUC, DG, STORM, BAD, "/stucwerk"],
    faqs: [
      { q: "Kunnen jullie werken als ik er niet ben?", a: "Ja. Bij tweede woningen spreken we sleuteloverdracht en updates met foto's af." },
      { q: "Wanneer plan ik onderhoud aan mijn vakantiewoning?", a: "Binnenwerk in het najaar en de winter, buitenwerk in het voorjaar. Zo is de woning klaar voor het seizoen." },
      { q: "Werken jullie aan monumenten in Veere?", a: "Ja, met kalkgebonden materialen en met advies over de vergunning." },
    ],
  },
  {
    slug: "zierikzee",
    name: "Zierikzee",
    h1: "Stukadoor in Zierikzee en Schouwen-Duiveland",
    title: "Stukadoor Zierikzee en Schouwen-Duiveland",
    description:
      "Stukadoor in Zierikzee of op Schouwen-Duiveland? Stucwerk en gevelherstel voor monumenten, wederopbouwwoningen en nieuwbouw. Vraag een offerte aan.",
    intro: [
      "Zierikzee is een van de mooiste historische steden van Zeeland. Achter de havens en stadspoorten staat een binnenstad vol monumentale panden. Daarbuiten liggen wijken en dorpen met een heel andere geschiedenis: veel woningen op Schouwen-Duiveland zijn na de watersnoodramp van 1953 herbouwd.",
      "Wij werken in Zierikzee en op heel Schouwen-Duiveland, van Brouwershaven tot Burgh-Haamstede en Renesse. Aan monumenten, wederopbouwwoningen, nieuwbouw en vakantiewoningen.",
    ],
    sections: [
      {
        h2: "De monumentale binnenstad",
        body: [
          "De binnenstad van Zierikzee is een beschermd stadsgezicht. Panden aan de Oude en Nieuwe Haven en in de straten erachter hebben vaak dikke, massieve muren met kalkmortel. Ze hebben te maken met optrekkend vocht en zouten uit de bodem en het havenwater. Stucwerk moet hier dampopen zijn, anders sluit je het probleem op.",
          "We herstellen binnen en buiten met kalkgebonden pleisters en adviseren over vochtbestrijding die past bij een monument. Bij twijfel over vergunningen stemmen we vooraf af met de gemeente.",
        ],
      },
      {
        h2: "Wederopbouwwoningen na 1953",
        body: [
          "Na de watersnoodramp zijn in korte tijd veel woningen gebouwd. Ze zijn degelijk, maar inmiddels zo'n zeventig jaar oud. Vaak hebben ze een smalle spouw, oude kozijnen en badkamers die al eens zijn vervangen maar weer aan de beurt zijn. Hier doen we veel badkamerrenovaties, stucwerk en verduurzaming van gevel en dak.",
        ],
      },
      {
        h2: "Kustdorpen en recreatie",
        body: [
          "In Renesse, Burgh-Haamstede en langs de kust staan veel vakantiewoningen en recreatieparken. Ook hier geldt: zeewind en zout belasten gevels en daken. We plannen onderhoud buiten het seizoen en werken voor zowel particuliere eigenaren als beheerders van parken.",
        ],
      },
    ],
    neighborhoods: ["Binnenstad", "Havengebied", "Malta", "Zierikzee-Noord", "Brouwershaven", "Burgh-Haamstede", "Renesse", "Bruinisse", "Nieuwerkerk"],
    services: [VOCHT, "/stucwerk", BUITENSTUC, BAD, DG],
    faqs: [
      { q: "Werken jullie op heel Schouwen-Duiveland?", a: "Ja, in Zierikzee en in de dorpen, van Bruinisse tot Renesse." },
      { q: "Hoe pakken jullie vocht in een monument aan?", a: "Met een dampopen aanpak: eerst de oorzaak, dan zouthoudend pleister eraf en herstel met kalkpleister." },
      { q: "Doen jullie ook vakantieparken?", a: "Ja, voor beheerders van parken plannen we onderhoud buiten het seizoen." },
    ],
  },
  {
    slug: "bergen-op-zoom",
    name: "Bergen op Zoom",
    h1: "Stukadoor in Bergen op Zoom",
    title: "Stukadoor Bergen op Zoom",
    description:
      "Stukadoor in Bergen op Zoom of Halsteren? Hier begon ons familiebedrijf in 1969. Stucwerk, keukens, badkamers en vochtbestrijding. Vraag een offerte aan.",
    intro: [
      "In Bergen op Zoom begon het in 1969. De grootvader plaatste hier keukens van Bruynzeel en Keller en groeide door tot aannemer en projectontwikkelaar. Daarna bouwde de tweede generatie hier een renovatie- en aannemersbedrijf op. Onze wortels liggen dus in West-Brabant.",
      "We werken nog steeds graag in Bergen op Zoom en omgeving. Van de binnenstad rond de Grote Markt en het Markiezenhof tot Halsteren, Gageldonk, Meilust en Noordgeest.",
    ],
    sections: [
      {
        h2: "Een stad met lagen geschiedenis",
        body: [
          "De binnenstad van Bergen op Zoom heeft middeleeuwse wortels, maar ook veel panden uit de negentiende en twintigste eeuw. Oude muren, verbouwde winkelpanden en woningen boven winkels. Bij stucwerk in deze panden kijken we goed naar de ondergrond. Soms is het kalk, soms gips, soms een mix van eerdere reparaties. De juiste hechtlaag en pleister bepalen of het werk blijft zitten.",
        ],
      },
      {
        h2: "Naoorlogse wijken: keukens en badkamers",
        body: [
          "Wijken als Gageldonk, Meilust en Noordgeest, en grote delen van Halsteren, zijn na de oorlog gebouwd. Veel woningen hebben nog keukens, badkamers en toiletten die al decennia meegaan. Keukens zijn waar onze familie mee begon. We doen het voorwerk, de installaties, het stucwerk en de afwerking, zodat de nieuwe keuken of badkamer op een strakke basis komt te staan.",
        ],
      },
      {
        h2: "Brabantse klei en vocht",
        body: [
          "Rond Bergen op Zoom ligt de overgang van zandgrond naar zeeklei. Op de lagere delen staat het grondwater hoog. Woningen met een kruipruimte of kelder kunnen daardoor last hebben van vocht. We meten de oorzaak en pakken het aan met injecties, ventilatie of een waterdicht keldersysteem.",
        ],
      },
    ],
    neighborhoods: ["Binnenstad", "Halsteren", "Gageldonk", "Meilust", "Noordgeest", "Fort-Zeekant", "De Bergse Haven", "Lepelstraat"],
    services: [KEUKEN, BAD, "/stucwerk", VOCHT, KELDER],
    faqs: [
      { q: "Hebben jullie een vestiging in Bergen op Zoom?", a: "Ons adres is in Middelburg. Bergen op Zoom is onze familiestad en een vast deel van ons werkgebied." },
      { q: "Werken jullie ook in Roosendaal of Woensdrecht?", a: "Neem contact op. In de regio rond Bergen op Zoom kijken we graag wat mogelijk is." },
      { q: "Plaatsen jullie keukens?", a: "Ja, en we doen het voorwerk en de afwerking. Ook als je de keuken elders koopt." },
    ],
  },
  {
    slug: "amsterdam",
    name: "Amsterdam",
    h1: "Stukadoor in Amsterdam",
    title: "Stukadoor Amsterdam: stucwerk en badkamers",
    description:
      "Stukadoor in Amsterdam voor grachtenpanden, jaren-30-woningen en VvE's: stucwerk, badkamers en vochtbestrijding. Eén aanspreekpunt. Vraag een offerte.",
    intro: [
      "Sinds 2020 werken we ook in Amsterdam. Het is een stad waar vakmanschap en logistiek hand in hand gaan. Smalle trappen, geen parkeerplek voor de deur, buren boven en onder, en panden die soms drie eeuwen oud zijn. Je hebt hier een stukadoor nodig die net zo goed kan plannen als stucen.",
      "We werken in het centrum, in Zuid, Oost, West en Noord. Voor particulieren, VvE's en beheerders van appartementencomplexen. Onze specialiteit hier: strak stucwerk in oude panden, kleine badkamers en vochtproblemen.",
    ],
    sections: [
      {
        h2: "Grachtenpanden: kalk, scheve vloeren en vocht",
        body: [
          "In de grachtengordel en de Jordaan staan panden uit de zeventiende en achttiende eeuw. Ze staan op houten palen, hebben massieve muren met kalkmortel en vaak latwerk met kalkpleister op de plafonds. Vloeren lopen af, muren staan niet haaks en de kelder of het souterrain is vochtig door het grachtwater.",
          "In zulke panden werken we met dampopen kalkpleister, zodat de muur kan blijven ademen. We herstellen oude plafonds waar het kan, en waar een nieuw plafond nodig is, werken we het zo af dat het past bij het karakter van het pand. Voor werk aan monumenten is vaak een vergunning nodig.",
        ],
      },
      {
        h2: "Jaren-30-woningen in Zuid en West",
        body: [
          "In de Rivierenbuurt, de Stadionbuurt en delen van West staan portiekwoningen uit de jaren twintig en dertig, deels in de stijl van de Amsterdamse School. Mooie panden, maar vaak met kleine badkamers, koude buitenmuren en oud stucwerk dat scheurt. We renoveren kleine badkamers waarin elke centimeter telt, en stucen wanden en plafonds strak na een verbouwing.",
        ],
      },
      {
        h2: "VvE's: planmatig onderhoud en mutaties",
        body: [
          "Een groot deel van Amsterdam bestaat uit appartementen in VvE's. Voor VvE's en beheerders doen we onderhoud aan trappenhuizen, balkons, gevels en natte ruimtes. We overleggen met het bestuur, informeren bewoners en werken met een vaste planning.",
        ],
      },
      {
        h2: "Logistiek en vergunningen",
        body: [
          "In Amsterdam regelen we parkeervergunningen, hijswerk via de hijsbalk en afvoer van bouwafval. We werken stofarm en houden trappenhuizen schoon, zodat de buren er zo min mogelijk last van hebben.",
        ],
      },
    ],
    neighborhoods: ["Grachtengordel", "Jordaan", "De Pijp", "Rivierenbuurt", "Oud-Zuid", "Oost", "Indische Buurt", "De Baarsjes", "Bos en Lommer", "Amsterdam-Noord"],
    services: ["/stucwerk", BAD, VOCHT, "/zakelijk", BALKON],
    faqs: [
      { q: "Werken jullie vanuit Zeeland in Amsterdam?", a: "Ja. We plannen projecten in Amsterdam aaneengesloten, zodat we efficiënt kunnen werken." },
      { q: "Regelen jullie de parkeervergunning?", a: "Ja, voor de werkdagen regelen we de parkeer- en ontheffingsvergunningen." },
      { q: "Werken jullie voor VvE's in Amsterdam?", a: "Ja, voor onderhoud aan gevels, balkons, trappenhuizen en natte ruimtes." },
      { q: "Kunnen jullie in een monument werken?", a: "Ja, met materialen die passen bij oude panden. Voor vergunningplichtig werk adviseren we je vooraf." },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
