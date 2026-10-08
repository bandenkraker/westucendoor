import type { Service } from "./types";

const H = "/expertises/schade-herstel";

export const schade: Service[] = [
  {
    path: H,
    name: "Schade & herstel",
    short: "Lekkage, vocht, brand of storm: we herstellen de schade en de oorzaak.",
    h1: "Schadeherstel in Zeeland, Brabant en Amsterdam",
    title: "Schadeherstel: lekkage, brand en storm",
    description:
      "Schade door lekkage, vocht, brand of storm? We herstellen snel en vakkundig, zoeken de oorzaak en helpen met je verzekering. Bel of app direct voor hulp.",
    icon: "shield",
    intro: [
      "Schade komt altijd op een slecht moment. Een lekkage na een hoosbui, een stormnacht die pannen van het dak blaast of een keukenbrand. Dan wil je snel iemand die de schade beperkt en daarna alles netjes herstelt.",
      "Wij doen allebei. Eerst maken we de situatie veilig en droog: een tijdelijke afdichting, een dak dicht, een lek gestopt. Daarna zoeken we de oorzaak en herstellen we de schade, van constructie tot stucwerk en schilderwerk.",
      "We maken foto's en een omschrijving van de schade en het herstel. Daarmee kun je bij je verzekeraar terecht. Werk je met een schade-expert, dan stemmen we daar rechtstreeks mee af.",
    ],
    signals: [
      "Water dat binnenkomt via dak, gevel of plafond",
      "Vochtplekken, schimmel of zoutuitslag",
      "Brand-, rook- of roetschade",
      "Schade na storm of hagel",
    ],
    duration:
      "Noodherstel proberen we zo snel mogelijk te doen. Het definitieve herstel plannen we zodra de oorzaak bekend is en, bij vochtschade, de constructie droog genoeg is.",
    costFactors: [
      "Soort en omvang van de schade",
      "Of noodherstel nodig is",
      "Droogtijd van de constructie",
      "Afwerkingsniveau na herstel",
    ],
    faqs: [
      {
        q: "Werken jullie met verzekeraars?",
        a: "We leveren foto's, een omschrijving en een offerte die je bij je verzekeraar kunt indienen. Met schade-experts stemmen we direct af.",
      },
      {
        q: "Komen jullie ook buiten kantoortijd?",
        a: "Bij acute schade proberen we zo snel mogelijk te helpen. Bel of app ons, ook buiten kantoortijd.",
      },
      {
        q: "Moet ik eerst de verzekeraar bellen?",
        a: "Meld de schade zo snel mogelijk bij je verzekeraar en beperk de schade waar je kunt. Noodmaatregelen om erger te voorkomen zijn meestal toegestaan.",
      },
    ],
    related: [`${H}/vochtbestrijding`, `${H}/lekkages-vochtproblemen`, `${H}/storm-en-natuurschade`],
    articles: ["vochtige-muren-oorzaken-en-oplossingen", "scheuren-in-de-gevel-wanneer-ernstig"],
  },
  {
    path: `${H}/vochtbestrijding`,
    name: "Vochtbestrijding",
    short: "Optrekkend vocht, doorslaand vocht en condens: we pakken de oorzaak aan.",
    h1: "Vochtbestrijding in Middelburg en Zeeland",
    title: "Vochtbestrijding Middelburg en Zeeland",
    description:
      "Vochtige muren, schimmel of zoutuitslag? We meten de oorzaak en bestrijden optrekkend en doorslaand vocht in Middelburg en heel Zeeland. Vraag offerte aan.",
    icon: "drop",
    intro: [
      "Vochtige muren zijn in Zeeland geen uitzondering. Hoog grondwater, zoute zeelucht en veel westenwind zorgen ervoor dat muren vocht opnemen. Je ziet het aan donkere plekken, bladderende verf, witte zoutuitslag en schimmel. Je ruikt het aan een muffe lucht.",
      "Vocht heeft altijd een oorzaak, en die bepaalt de oplossing. Optrekkend vocht komt uit de grond en trekt via de muur omhoog. Doorslaand vocht komt via de gevel naar binnen bij regen. Condens ontstaat als vochtige binnenlucht neerslaat op een koude muur. En soms is het gewoon een lekkage. Wie de verkeerde oorzaak bestrijdt, gooit geld weg.",
      "Daarom beginnen we met meten. We bepalen waar het vocht zit, hoe hoog het komt en waar het vandaan komt. Daarna adviseren we een aanpak: een injectie tegen optrekkend vocht, herstel van de gevel, betere ventilatie of een saneerpleister die zouten opvangt. Vaak is het een combinatie. Het afwerken van de muur doen we zelf, want stucwerk is ons vak.",
      "We werken voor particulieren, VvE's en corporaties in Middelburg en heel Zeeland, in West-Brabant en in de regio Amsterdam.",
    ],
    signals: [
      "Donkere vochtplekken onderaan de muur",
      "Bladderende verf of loslatend stucwerk",
      "Witte, poederige zoutuitslag",
      "Schimmel in hoeken en achter kasten",
      "Een muffe geur in huis",
      "Behang dat loslaat",
    ],
    steps: [
      { t: "Vochtmeting", d: "We meten vocht in de muur op verschillende hoogtes en plekken, en meten de luchtvochtigheid." },
      { t: "Oorzaak bepalen", d: "Optrekkend, doorslaand, condens of lekkage? We leggen uit wat we zien en waarom." },
      { t: "Aanpak", d: "Injectie, gevelherstel, ventilatie of een combinatie, met een heldere offerte." },
      { t: "Uitvoeren", d: "Oud, zouthoudend pleister verwijderen, vochtscherm aanbrengen, muur laten drogen." },
      { t: "Afwerken", d: "Saneerpleister of dampopen stucwerk, sausklaar opgeleverd, met droogadvies." },
    ],
    sections: [
      {
        h2: "Optrekkend vocht: injecteren tegen de kapillaire werking",
        body: [
          "In oudere woningen zonder goede vochtkering trekt grondvocht via de poriën van de muur omhoog. Dat noemen we kapillaire werking. Je ziet een vochtrand tot ongeveer een meter hoog. We boren gaten in een lintvoeg vlak boven de vloer en injecteren een vochtwerend middel. Dat vormt een horizontale barrière. Daarna moet de muur drogen, wat weken tot maanden kan duren.",
        ],
      },
      {
        h2: "Zouten: de verborgen tweede oorzaak",
        body: [
          "Vocht neemt zouten mee uit de grond en, aan de kust, uit de zeelucht. Als het water verdampt, blijven de zouten in de muur achter. Die zouten trekken zelf weer vocht aan uit de lucht. Daardoor blijft een muur soms nat, ook als de oorzaak is opgelost. Zouthoudend pleister moet er daarom af. We brengen een saneerpleister aan die de zouten opvangt, zodat ze niet aan het oppervlak komen.",
        ],
      },
      {
        h2: "Condens: een kwestie van ventilatie en temperatuur",
        body: [
          "Condensvocht zie je vooral op koude buitenmuren, in hoeken, achter kasten en in slaapkamers. Hier helpt geen injectie. De oplossing zit in ventilatie, warmte en soms isolatie. We meten de luchtvochtigheid en adviseren wat werkt in jouw situatie.",
        ],
      },
    ],
    materials: [
      "Injectiecrème of -vloeistof tegen optrekkend vocht",
      "Saneerpleister die zouten opvangt",
      "Dampopen kalk- of silicaatafwerking",
      "Mechanische ventilatie of ventilatieroosters",
    ],
    duration:
      "Injecteren en het herstel van één muur duren meestal één tot drie dagen. De muur heeft daarna tijd nodig om te drogen. Reken op enkele weken tot maanden voordat je kunt behangen of verven met een dichte verf.",
    costFactors: [
      "Oorzaak van het vocht",
      "Aantal strekkende meters muur",
      "Hoeveel pleister er af moet",
      "Afwerking na herstel",
    ],
    faqs: [
      {
        q: "Hoe weet ik of het optrekkend vocht of condens is?",
        a: "Optrekkend vocht zit onderaan de muur en vormt vaak een rand. Condens zit vaker hoger, in hoeken en achter meubels. Een meting geeft zekerheid.",
      },
      {
        q: "Helpt een vochtvreter of ontvochtiger?",
        a: "Tegen condens kan het iets helpen. Tegen optrekkend of doorslaand vocht niet. Dan bestrijd je alleen de lucht, niet de muur.",
      },
      {
        q: "Hoe lang duurt het voordat de muur droog is?",
        a: "Dat hangt af van de dikte van de muur, het type steen en de ventilatie. Vaak enkele maanden. We geven een droogadvies mee.",
      },
      {
        q: "Kan ik gewoon over de vochtplek heen schilderen?",
        a: "Nee. Een dichte verf sluit het vocht in en maakt het probleem erger. Eerst de oorzaak, dan de afwerking.",
      },
      {
        q: "Is vocht in huis schadelijk voor mijn gezondheid?",
        a: "Vocht en schimmel kunnen klachten aan de luchtwegen geven. Neem het daarom serieus, zeker bij kinderen of mensen met astma.",
      },
      {
        q: "Werken jullie ook in oude panden en monumenten?",
        a: "Ja. Juist daar is een dampopen aanpak met kalkpleister belangrijk, zodat de muur kan blijven ademen.",
      },
    ],
    related: [`${H}/lekkages-vochtproblemen`, "/expertises/renovatie-verbouw/verduurzaming/kelderrenovatie", "/expertises/service-onderhoud/badkamer-keuken-toilet-onderhoud-bkt/schimmelreiniging-en-ventilatie"],
    articles: ["vochtige-muren-oorzaken-en-oplossingen", "schimmel-in-de-badkamer-blijvend-oplossen"],
    project: {
      title: "Optrekkend vocht in een jaren-30-woning",
      before: "Binnenmuur met vochtrand en zoutuitslag tot ongeveer 80 cm hoogte.",
      after: "Dezelfde muur na injectie en saneerpleister, sausklaar.",
    },
  },
  {
    path: `${H}/lekkages-vochtproblemen`,
    name: "Lekkages & vochtproblemen",
    short: "Lek opsporen, stoppen en de schade erna netjes herstellen.",
    h1: "Lekkage herstellen en vochtschade oplossen",
    title: "Lekkage herstellen en vochtschade",
    description:
      "Lekkage via dak, gevel of badkamer? We sporen het lek op, stoppen het en herstellen plafond, wand en stucwerk. Zeeland en Amsterdam. Bel of app ons direct.",
    icon: "drop",
    intro: [
      "Een lekkage zie je meestal pas als er een bruine kring op het plafond verschijnt of als het druppelt. Het lek zelf zit vaak ergens anders. Water loopt langs balken, leidingen en lagen, en komt pas meters verderop tevoorschijn.",
      "We sporen de bron op. Dat kan een dakpan zijn, loodwerk bij de schoorsteen, een kitvoeg in de badkamer, een lekkende afvoer of doorslaand vocht door de gevel. Eerst stoppen we het lek. Daarna laten we de constructie drogen en herstellen we de schade.",
      "Het herstel doen we zelf: plafond en wanden opnieuw stucen, isolerende grondverf op vlekken en strak sausen. Je ziet daarna niet meer dat er een lekkage is geweest.",
    ],
    signals: [
      "Bruine kringen of vlekken op het plafond",
      "Druppels na regen of na het douchen",
      "Bladderende verf of losse stucwerkplekken",
      "Een muffe geur of schimmel",
    ],
    steps: [
      { t: "Opsporen", d: "We zoeken de bron, met vochtmeting en zo nodig een watertest." },
      { t: "Stoppen", d: "Het lek wordt gedicht: dak, lood, kit of leiding." },
      { t: "Drogen", d: "We laten de constructie drogen en meten na." },
      { t: "Herstellen", d: "Stucwerk, plafond en schilderwerk opnieuw." },
    ],
    duration: "Het lek stoppen gaat vaak snel. Het herstel volgt als de constructie droog is, meestal na een paar dagen tot weken.",
    costFactors: ["Hoe lastig de bron te vinden is", "Omvang van de gevolgschade", "Droogtijd", "Afwerking"],
    faqs: [
      { q: "Vergoedt mijn verzekering lekkageschade?", a: "Gevolgschade van een plotselinge lekkage vaak wel, het herstel van de oorzaak zelf meestal niet. Check je polis. Wij leveren foto's en een offerte." },
      { q: "Kan het plafond direct opnieuw gestuukt worden?", a: "Pas als het droog is. Anders komen de vlekken terug of laat het stucwerk los." },
      { q: "Wat doe ik in de tussentijd?", a: "Zet een emmer neer, zet de stroom uit als er water bij elektra komt en bel of app ons." },
    ],
    related: [`${H}/vochtbestrijding`, "/expertises/service-onderhoud/dak-en-gevelonderhoud/loodwerk-vervangen", "/expertises/service-onderhoud/badkamer-keuken-toilet-onderhoud-bkt/voeg-en-kitwerk-vervangen"],
    articles: ["vochtige-muren-oorzaken-en-oplossingen", "kitwerk-vervangen-wanneer-en-waarom"],
  },
  {
    path: `${H}/brandschade`,
    name: "Brandschade",
    short: "Na brand of rook: slopen, reinigen, herstellen en afwerken.",
    h1: "Brandschade herstellen in Zeeland en Brabant",
    title: "Brandschade herstel Zeeland en Brabant",
    description:
      "Brandschade na een woningbrand of rookschade? We slopen, herstellen en stucen alles opnieuw, en stemmen af met je verzekeraar. Bel of app ons direct.",
    icon: "flame",
    intro: [
      "Een brand is ingrijpend, ook als het een kleine brand was. Naast de directe schade aan materialen zit roet en rooklucht vaak in de hele woning. Bluswater kan bovendien leiden tot vochtschade in vloeren en wanden.",
      "Na de eerste reiniging door een gespecialiseerd saneringsbedrijf, als dat nodig is, nemen wij het herstel over. We slopen aangetaste delen, herstellen de constructie, plaatsen nieuwe wanden en plafonds en stucen alles opnieuw. Daarna sausen we met een isolerende grondverf, zodat geur en vlekken niet terugkomen.",
      "We stemmen af met je verzekeraar en de schade-expert, zodat het herstel snel kan beginnen en je niet zelf alles hoeft te coördineren.",
    ],
    signals: ["Roet op wanden en plafonds", "Rooklucht die blijft hangen", "Verbrande of vervormde bouwdelen", "Vochtschade door bluswater"],
    steps: [
      { t: "Beoordelen", d: "Samen met de expert bekijken we wat hersteld moet worden." },
      { t: "Slopen", d: "Aangetaste materialen verwijderen en afvoeren." },
      { t: "Herstellen", d: "Constructie, wanden en plafonds opnieuw opbouwen." },
      { t: "Afwerken", d: "Stucwerk, isolerende grondverf en schilderwerk." },
    ],
    sections: [{ h2: "Geur en roet: waarom isoleren belangrijk is", body: ["Rooklucht en roet trekken diep in poreuze materialen zoals gips, hout en isolatie. Na de reiniging kan de geur bij warm of vochtig weer terugkomen. Daarom verwijderen we sterk aangetaste materialen en zetten we wanden en plafonds af met een isolerende grondverf, voordat we opnieuw stucen en sausen. Zo komen vlekken en geur niet door de nieuwe afwerking heen."] }],
    duration: "Afhankelijk van de omvang, van enkele dagen tot meerdere weken.",
    costFactors: ["Omvang van de brand", "Sloopwerk en afvoer", "Herstel van constructie", "Afwerking"],
    faqs: [
      { q: "Doen jullie ook de reiniging van roet?", a: "Lichte roetaanslag nemen we mee. Bij zware rook- en roetschade werkt een gespecialiseerd saneringsbedrijf eerst." },
      { q: "Werken jullie met de schade-expert?", a: "Ja, we leveren een gespecificeerde offerte en stemmen het herstel af." },
      { q: "Komt de rooklucht niet terug?", a: "Met een isolerende grondverf en het verwijderen van aangetaste materialen voorkomen we dat zo goed mogelijk." },
    ],
    related: [`${H}/interieur-en-afbouwschade`, "/stucwerk", `${H}/lekkages-vochtproblemen`],
    articles: ["hoe-lang-moet-stucwerk-drogen"],
  },
  {
    path: `${H}/storm-en-natuurschade`,
    name: "Storm- en natuurschade",
    short: "Dak en gevel na storm of hagel snel dicht en daarna goed hersteld.",
    h1: "Stormschade herstellen in Zeeland",
    title: "Stormschade herstellen Zeeland",
    description:
      "Stormschade aan dak of gevel? We maken je woning snel wind- en waterdicht en herstellen daarna pannen, nokvorsten, lood en gevel. Bel of app ons direct.",
    icon: "wind",
    intro: [
      "Zeeland ligt aan zee, en dat merk je bij storm. Windstoten trekken pannen en nokvorsten los, buigen loodwerk om en kunnen dakgoten en hekwerken beschadigen. Omvallende bomen en hagel zorgen voor extra schade.",
      "Na een storm is snelheid belangrijk. Een open dak of een kapotte ruit laat regen binnen, en dan wordt de schade snel groter. We maken je woning zo snel mogelijk wind- en waterdicht, met zeilen, tijdelijke platen of direct herstel.",
      "Daarna herstellen we de schade definitief. We vervangen pannen en nokvorsten, zetten lood opnieuw vast en herstellen de gevel. Waar nodig adviseren we hoe het dak beter bestand kan worden tegen de volgende storm, bijvoorbeeld met extra panhaken of een droog nokvorstsysteem.",
    ],
    signals: ["Pannen of nokvorsten van het dak", "Opgewaaid of losgeraakt lood", "Gebroken ruiten", "Schade door omgevallen bomen of hagel"],
    steps: [
      { t: "Noodherstel", d: "Wind- en waterdicht maken zo snel als het veilig kan." },
      { t: "Opname", d: "Schade vastleggen met foto's voor de verzekeraar." },
      { t: "Herstel", d: "Pannen, lood, goten en gevel definitief herstellen." },
      { t: "Advies", d: "Hoe voorkom je schade bij de volgende storm?" },
    ],
    duration: "Noodherstel zo snel mogelijk na melding. Definitief herstel meestal binnen een paar dagen tot weken, afhankelijk van drukte na een storm.",
    costFactors: ["Omvang van de schade", "Noodherstel nodig", "Hoogte en bereikbaarheid"],
    faqs: [
      { q: "Wordt stormschade vergoed?", a: "Vaak wel, mits het om een storm gaat volgens je polis. Leg de schade vast met foto's en meld hem snel." },
      { q: "Kan ik zelf het dak op?", a: "Niet doen bij storm of nat weer. Het is gevaarlijk. Bel ons." },
      { q: "Hoe voorkom ik stormschade?", a: "Regelmatige dakinspectie, goed vastgezette pannen en nokvorsten, en goten die vrij zijn." },
    ],
    related: ["/expertises/service-onderhoud/dak-en-gevelonderhoud/dakpannen-en-nokvorsten-vervangen", "/expertises/service-onderhoud/dak-en-gevelonderhoud/inspectie-en-preventief-onderhoud-seizoen", `${H}/balkon-en-gevelschade`],
    articles: ["zout-en-wind-gevelonderhoud-zeeuwse-kust"],
  },
  {
    path: `${H}/balkon-en-gevelschade`,
    name: "Balkon- en gevelschade",
    short: "Betonrot, scheuren en losse delen aan balkons en gevels herstellen.",
    h1: "Balkon- en gevelschade herstellen",
    title: "Balkon- en gevelschade herstellen",
    description:
      "Betonrot, scheuren of losse delen aan balkon of gevel? We herstellen veilig en duurzaam, voor particulier en VvE. Zeeland en Amsterdam. Vraag offerte aan.",
    icon: "balcony",
    intro: [
      "Balkons en gevels van appartementen en portiekflats krijgen na tientallen jaren last van betonrot. Water dringt het beton in, het wapeningsstaal gaat roesten en zet uit. Het beton barst en stukken kunnen loskomen. Dat is niet alleen lelijk, maar ook gevaarlijk.",
      "Bij betonreparatie hakken we het losse beton weg, maken we de wapening roestvrij en behandelen we die tegen nieuwe roest. Daarna bouwen we het beton opnieuw op met reparatiemortel en zetten we het af met een beschermende coating.",
      "Ook scheuren in metselwerk of pleisterwerk, losse gevelelementen en schade aan balkonranden pakken we aan. Voor VvE's maken we een overzicht per balkon en per gevel, zodat je goed kunt plannen.",
    ],
    signals: ["Afgebroken stukken beton", "Roestplekken of zichtbare wapening", "Scheuren in balkonranden of gevel", "Losse gevelelementen"],
    steps: [
      { t: "Inspectie", d: "Balkons en gevels aftikken en schade vastleggen." },
      { t: "Veiligstellen", d: "Losse delen direct verwijderen." },
      { t: "Herstellen", d: "Wapening behandelen, beton opbouwen, scheuren herstellen." },
      { t: "Beschermen", d: "Coating en kitwerk om nieuwe schade te voorkomen." },
    ],
    sections: [{ h2: "Betonrot: wat er in het beton gebeurt", body: ["Beton beschermt het staal erin door zijn hoge zuurgraad. Na tientallen jaren dringt koolzuur uit de lucht het beton in en verdwijnt die bescherming. Komt er dan water en zuurstof bij, zeker met zout uit de zeelucht, dan gaat het staal roesten. Roest neemt meer ruimte in dan staal en drukt het beton eraf. Bij het herstel verwijderen we daarom ook het aangetaste beton rond het staal, niet alleen de losse stukken."] }],
    duration: "Per balkon meestal één tot drie dagen, inclusief uithardingstijd.",
    costFactors: ["Aantal balkons en omvang van de schade", "Steiger of hoogwerker", "Coating en afwerking"],
    faqs: [
      { q: "Is betonrot gevaarlijk?", a: "Losse stukken kunnen naar beneden vallen. Laat het daarom snel inspecteren en losse delen verwijderen." },
      { q: "Werken jullie voor VvE's?", a: "Ja. We rapporteren per balkon en plannen in overleg met de bewoners." },
      { q: "Kun je betonrot voorkomen?", a: "Met goede waterdichting, kitwerk en een beschermende coating vertraag je het aanzienlijk." },
    ],
    related: ["/expertises/service-onderhoud/balkononderhoud", "/expertises/service-onderhoud/dak-en-gevelonderhoud/scheuren-herstellen", "/zakelijk"],
    articles: ["scheuren-in-de-gevel-wanneer-ernstig", "kitwerk-vervangen-wanneer-en-waarom"],
  },
  {
    path: `${H}/interieur-en-afbouwschade`,
    name: "Interieur- en afbouwschade",
    short: "Schade aan wanden, plafonds, vloeren en deuren netjes hersteld.",
    h1: "Interieur- en afbouwschade herstellen",
    title: "Interieurschade en afbouwschade herstel",
    description:
      "Schade aan wanden, plafonds, vloeren of deuren? We herstellen interieur- en afbouwschade strak en onzichtbaar. Voor particulier, verhuurder en VvE.",
    icon: "trowel",
    intro: [
      "Interieurschade ontstaat op allerlei manieren. Een verhuizing, een lekkage, een losgekomen plafond, of slijtage na jaren verhuur. Het gaat vaak om stucwerk, plafonds, deuren, vloeren en kozijnen binnen.",
      "Afbouwschade herstellen is precisiewerk. Een plek in een wand of plafond moet zo worden hersteld dat je hem niet meer ziet, ook niet bij strijklicht. Dat is waar een stukadoor het verschil maakt. We werken het herstel ruim bij en sausen de hele wand, zodat er geen kleurverschil ontstaat.",
      "Voor verhuurders en corporaties doen we dit ook bij mutaties: één partij die alle schade in de woning opneemt en in één keer herstelt.",
    ],
    signals: ["Gaten of scheuren in wanden en plafonds", "Losgekomen stucwerk", "Beschadigde deuren of kozijnen", "Schade na verhuizing of huurperiode"],
    steps: [
      { t: "Opnemen", d: "Alle schade in kaart brengen, met foto's." },
      { t: "Herstellen", d: "Stucwerk, plafonds, deuren en vloeren herstellen." },
      { t: "Afwerken", d: "Hele vlakken sausen voor een egaal resultaat." },
      { t: "Opleveren", d: "Samen nalopen en schoon opleveren." },
    ],
    sections: [{ h2: "Herstel bij mutaties", body: ["Bij een huurwissel moet de woning vaak snel weer klaar zijn. We lopen de woning met de beheerder na, leggen alle schade vast met foto's en maken een herstelplan. Gaten van pluggen, beschadigde hoeken, losse plinten, deuren die klemmen en vlekken op plafonds herstellen we in één ronde. Zo is de woning in korte tijd verhuurklaar en heb je een overzicht voor het dossier."] }],
    duration: "Van een paar uur voor één plek tot enkele dagen voor een complete woning.",
    costFactors: ["Aantal en soort beschadigingen", "Afwerking", "Of het om een mutatie gaat"],
    faqs: [
      { q: "Zie je het herstel nog?", a: "Bij goed vakwerk niet. We werken het herstel ruim bij en sausen het hele vlak." },
      { q: "Doen jullie ook kleine reparaties?", a: "Ja, ook één gat in een plafond." },
      { q: "Werken jullie voor verhuurders?", a: "Ja, bij mutaties herstellen we alle schade in één keer." },
    ],
    related: ["/stucwerk", "/expertises/service-onderhoud/interieur", `${H}/lekkages-vochtproblemen`],
    articles: ["sausklaar-vs-behangklaar-stucwerk"],
  },
];
