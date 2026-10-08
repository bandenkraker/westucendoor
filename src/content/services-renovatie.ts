import type { Service } from "./types";

const R = "/expertises/renovatie-verbouw";
const W = `${R}/woninguitbreiding`;
const V = `${R}/verduurzaming`;
const G = `${V}/gevelrenovatie`;

export const renovatie: Service[] = [
  {
    path: R,
    name: "Renovatie & verbouw",
    short: "Van dakkapel tot badkamer: we verbouwen, renoveren en werken alles strak af.",
    h1: "Renovatie en verbouw in Zeeland en Amsterdam",
    title: "Renovatie & verbouw Zeeland en Amsterdam",
    description:
      "Renovatie of verbouw in Zeeland, West-Brabant of Amsterdam? Van dakkapel tot badkamer, met één aanspreekpunt. Vraag vrijblijvend een offerte aan.",
    icon: "home",
    intro: [
      "Een verbouwing raakt altijd meer dan één vak. Een nieuwe badkamer vraagt om leidingwerk, tegelwerk, kitwerk en ventilatie. Een dakkapel om timmerwerk, dakdekken en stucwerk aan de binnenkant. Als al die vakken los van elkaar werken, lopen planningen uit en wijst iedereen naar elkaar.",
      "Wij pakken renovatie en verbouw aan als één project, met één aanspreekpunt. We komen uit een familie van aannemers, sinds 1969. Daarom weten we hoe een bouwvolgorde moet lopen en waar het in de praktijk misgaat: bij aansluitingen, bij vocht dat wordt ingesloten en bij afwerking die te vroeg begint.",
      "Je kunt bij ons terecht voor woninguitbreiding, zoals een vergunningvrije dakkapel of aanbouw, en voor verduurzaming van dak, gevel en kelder. Ook renoveren we badkamers, keukens en toiletten, en verbouwen we interieurs. We werken voor particulieren en voor zakelijke opdrachtgevers in Zeeland, West-Brabant en de regio Amsterdam.",
    ],
    signals: [
      "Je woning is te klein, maar verhuizen wil je niet",
      "Badkamer, keuken of toilet is versleten of gedateerd",
      "Je gevel, dak of kelder laat vocht of warmte door",
      "Je wilt één partij die het hele traject regelt",
    ],
    duration:
      "Dat hangt sterk af van het werk. Een toiletrenovatie duurt vaak enkele dagen, een badkamer enkele weken en een aanbouw meerdere weken. In de offerte staat een planning per fase.",
    costFactors: [
      "Omvang en bereikbaarheid van het werk",
      "Staat van de ondergrond en verborgen gebreken",
      "Materiaalkeuze en afwerkingsniveau",
      "Benodigde vergunningen of constructieberekeningen",
    ],
    faqs: [
      {
        q: "Regelen jullie ook de andere vakmensen?",
        a: "Ja. Je hebt één aanspreekpunt. Wij stemmen loodgieter, elektricien en andere vakken op elkaar af en bewaken de volgorde van het werk.",
      },
      {
        q: "Kan ik blijven wonen tijdens de verbouwing?",
        a: "Meestal wel. We bespreken vooraf welke ruimtes wanneer niet bruikbaar zijn, en we werken stofarm af en ruimen dagelijks op.",
      },
      {
        q: "Werken jullie ook voor VvE's en corporaties?",
        a: "Ja. Voor zakelijke opdrachtgevers doen we renovaties, mutatieonderhoud en planmatig onderhoud. Kijk op de pagina Zakelijk.",
      },
      {
        q: "Hoe snel kunnen jullie starten?",
        a: "Dat hangt af van de planning op dat moment. Na de opname geven we in de offerte een realistische startdatum.",
      },
    ],
    related: [`${V}/badkamer-renovatie`, `${W}/vergunningvrije-dakkapel`, "/stucwerk"],
    articles: ["wat-kost-een-badkamerrenovatie", "vergunningvrij-dakkapel-plaatsen-regels"],
  },

  // ---------------------------------------------------------------- Woninguitbreiding
  {
    path: W,
    name: "Woninguitbreiding",
    short: "Meer ruimte zonder te verhuizen: dakkapel, aanbouw of uitbouw.",
    h1: "Woninguitbreiding in Zeeland en West-Brabant",
    title: "Woninguitbreiding: dakkapel of aanbouw",
    description:
      "Meer ruimte zonder verhuizen? We bouwen vergunningvrije dakkapellen, aanbouwen en uitbouwen en werken ze strak af. Vraag een vrijblijvende offerte aan.",
    icon: "home",
    intro: [
      "Een extra slaapkamer, een grotere keuken of een werkplek aan huis. Verhuizen is duur en de woningmarkt zit vast. Uitbreiden is dan vaak de slimste keuze. De twee meest gekozen opties zijn een dakkapel op de zolder en een aanbouw of uitbouw aan de achterkant.",
      "Veel uitbreidingen mogen zonder omgevingsvergunning, als ze binnen de regels van het Besluit bouwwerken leefomgeving (Bbl) vallen. Die regels zijn niet ingewikkeld, maar wel precies. Een paar centimeter te hoog of te dicht bij de nok, en je hebt alsnog een vergunning nodig. Bij een monument of in een beschermd stads- of dorpsgezicht gelden bovendien andere regels. Denk aan de binnensteden van Middelburg, Veere en Zierikzee, en de grachtengordel in Amsterdam.",
      "Wij kijken vooraf mee of je plan vergunningvrij kan. We doen de vergunningcheck samen met jou via het Omgevingsloket en bouwen daarna alles af, van constructie tot stucwerk.",
    ],
    signals: [
      "Je zolder is wel ruim, maar je kunt er niet rechtop staan",
      "De keuken of woonkamer is te krap voor het gezin",
      "Je wilt een werkplek of logeerkamer erbij",
    ],
    duration:
      "Een prefab dakkapel staat vaak in één dag wind- en waterdicht; de afwerking binnen kost daarna nog enkele dagen. Een aanbouw duurt meerdere weken, afhankelijk van fundering en afwerking.",
    costFactors: [
      "Afmetingen en type (prefab of op maat gebouwd)",
      "Fundering en constructie bij een aanbouw",
      "Isolatiewaarde, kozijnen en beglazing",
      "Afwerking binnen: stucwerk, vloer, elektra",
    ],
    faqs: [
      {
        q: "Hoe weet ik of mijn uitbreiding vergunningvrij is?",
        a: "Doe de vergunningcheck op het Omgevingsloket. Wij helpen daarbij en controleren de maten in je situatie. Bij twijfel adviseren we om vooraf contact op te nemen met de gemeente.",
      },
      {
        q: "Moet ik mijn buren informeren?",
        a: "Dat is niet altijd verplicht, maar wel verstandig. Bij vergunningvrij bouwen gelden ook regels van het burenrecht, bijvoorbeeld voor ramen dicht op de erfgrens.",
      },
      {
        q: "Werken jullie de binnenkant ook af?",
        a: "Ja. Stucwerk, aftimmering, vensterbanken en schilderwerk horen erbij. Je krijgt een kamer terug die direct af is.",
      },
    ],
    related: [`${W}/vergunningvrije-dakkapel`, `${W}/vergunningvrije-aanbouw-uitbouw`, "/stucwerk"],
    articles: ["vergunningvrij-dakkapel-plaatsen-regels"],
  },
  {
    path: `${W}/vergunningvrije-dakkapel`,
    name: "Vergunningvrije dakkapel",
    short: "Meer stahoogte en daglicht op zolder, binnen de regels van het Bbl.",
    h1: "Vergunningvrije dakkapel plaatsen in Zeeland",
    title: "Vergunningvrije dakkapel plaatsen Zeeland",
    description:
      "Een vergunningvrije dakkapel op je achterdak? We checken de regels, plaatsen hem wind- en waterdicht en werken binnen strak af. Vraag een offerte aan.",
    icon: "roof",
    intro: [
      "Een dakkapel maakt van een schuine zolder een volwaardige kamer. Je krijgt stahoogte, daglicht en ventilatie. Voor veel Zeeuwse rijwoningen en jaren-30-woningen is het de goedkoopste manier om een slaapkamer of werkplek te winnen.",
      "Op het achterdakvlak mag een dakkapel vaak zonder vergunning. Dan moet hij wel binnen een aantal vaste maten blijven. Wij beginnen daarom met een vergunningcheck en een opname van je dak. Pas daarna maken we een voorstel voor maat, indeling en kozijnen.",
      "We plaatsen de dakkapel, sluiten hem waterdicht aan op het dak en werken de binnenkant compleet af. Dus ook de aftimmering, het stucwerk van wanden en plafond en de vensterbank. Zo heb je één partij voor het hele traject en geen losse eindjes.",
    ],
    signals: [
      "Je kunt op zolder alleen in het midden rechtop staan",
      "Je zoekt een extra slaapkamer of werkplek",
      "De zolder is donker en slecht geventileerd",
      "Je oude dakkapel lekt of is slecht geïsoleerd",
    ],
    steps: [
      { t: "Vergunningcheck", d: "We controleren samen via het Omgevingsloket of je dakkapel vergunningvrij kan, en meten je dak op." },
      { t: "Ontwerp en offerte", d: "Je kiest breedte, kozijnen, beglazing en afwerking. Je krijgt een vaste offerte per onderdeel." },
      { t: "Voorbereiden", d: "Binnen dekken we de zolder af. Buiten zetten we de steiger of hoogwerker klaar." },
      { t: "Plaatsen", d: "We openen het dak, plaatsen de dakkapel en maken hem dezelfde dag wind- en waterdicht." },
      { t: "Afwerken binnen", d: "Aftimmeren, isoleren waar nodig, stucen en de vensterbank plaatsen. Daarna ruimen we op." },
    ],
    sections: [
      {
        h2: "De belangrijkste regels voor een vergunningvrije dakkapel",
        body: [
          "In de basis mag een dakkapel vergunningvrij op het achterdakvlak of een zijdakvlak dat niet naar de openbare weg is gericht. De dakkapel blijft dan onder een maximale hoogte, houdt afstand tot de nok en de zijkanten van het dak, en de onderkant staat een eind boven de dakvoet. Ook mag er geen dakterras op komen.",
          "Er zijn uitzonderingen. In een beschermd stads- of dorpsgezicht en bij monumenten heb je bijna altijd een vergunning nodig. Ook het omgevingsplan van je gemeente kan extra eisen stellen. Doe daarom altijd de vergunningcheck op het Omgevingsloket voordat je bestelt. In ons kennisbankartikel lees je de regels uitgebreid.",
        ],
      },
      {
        h2: "Prefab of op maat?",
        body: [
          "Een prefab dakkapel wordt in de werkplaats gebouwd en in één dag geplaatst. Dat is snel en voordelig bij standaardmaten. Een dakkapel op maat bouwen we ter plekke. Dat is beter bij scheve daken, afwijkende maten of als de dakkapel moet aansluiten op bestaande details, zoals bij oudere Zeeuwse woningen.",
        ],
      },
    ],
    materials: [
      "Houten of kunststof kozijnen met HR++ of triple glas",
      "Geïsoleerde wangen en dak, met dampremmende folie aan de warme kant",
      "EPDM of bitumen dakbedekking met loodvervanger of lood bij de aansluitingen",
      "Gipsplaat of stucwerk binnen, sausklaar opgeleverd",
    ],
    duration:
      "Plaatsen kost meestal één dag. De afwerking binnen duurt daarna nog twee tot vijf werkdagen, plus droogtijd van het stucwerk.",
    costFactors: [
      "Breedte en type (prefab of op maat)",
      "Kozijnmateriaal, draairichting en beglazing",
      "Bereikbaarheid: steiger, hoogwerker of kraan",
      "Afwerking binnen en eventuele aanpassingen aan de trap",
    ],
    faqs: [
      {
        q: "Mag een dakkapel aan de voorkant zonder vergunning?",
        a: "Meestal niet. Aan de voorkant of aan een zijkant die naar de openbare weg is gericht, heb je doorgaans een vergunning nodig. De vergunningcheck geeft voor jouw adres uitsluitsel.",
      },
      {
        q: "Hoe lang heb ik overlast?",
        a: "Het dak is één dag open. Daarna werken we binnen. Het grootste deel van het huis blijft gewoon bruikbaar.",
      },
      {
        q: "Moet de zolder leeg?",
        a: "De zone rond de dakkapel moet vrij zijn. De rest dekken we af. We spreken vooraf af wat er weg moet.",
      },
      {
        q: "Wat als de check uitwijst dat ik een vergunning nodig heb?",
        a: "Dan bespreken we of een kleinere variant vergunningvrij kan, of dat je de vergunning aanvraagt. Dat laatste kost meer tijd, maar is goed te doen.",
      },
    ],
    related: [`${W}/vergunningvrije-aanbouw-uitbouw`, `${V}/dakrenovatie`, "/stucwerk"],
    articles: ["vergunningvrij-dakkapel-plaatsen-regels", "hoe-lang-moet-stucwerk-drogen"],
    project: {
      title: "Dakkapel op een jaren-30-woning",
      before: "Zolder met schuin dak, één klein dakraam, opname vanaf de trap.",
      after: "Dezelfde hoek met dakkapel, gestuukte wanden en vensterbank, bij daglicht.",
    },
  },
  {
    path: `${W}/vergunningvrije-aanbouw-uitbouw`,
    name: "Aanbouw & uitbouw",
    short: "Meer leefruimte op de begane grond, met fundering, isolatie en afwerking.",
    h1: "Vergunningvrije aanbouw of uitbouw in Zeeland",
    title: "Vergunningvrije aanbouw of uitbouw",
    description:
      "Een aanbouw of uitbouw voor een grotere keuken of woonkamer? We checken de regels, bouwen en werken alles af met één aanspreekpunt. Vraag een offerte aan.",
    icon: "home",
    intro: [
      "Een uitbouw aan de achterkant geeft je woonkamer of keuken een paar meter extra. Dat lijkt weinig, maar het verandert hoe je in huis leeft. Er past een eettafel bij de keuken, je krijgt meer licht via een lichtstraat en de tuin komt dichterbij.",
      "Een aanbouw tot een bepaalde diepte in het achtererfgebied mag vaak zonder omgevingsvergunning. De precieze regels hangen af van je perceel en het omgevingsplan. Wij beginnen daarom met een vergunningcheck en een opname. Daarbij kijken we ook naar de bodem, de fundering en de bestaande achtergevel.",
      "Daarna regelen we het hele traject: fundering, casco, dak, kozijnen, isolatie, installaties en afwerking. Het stucwerk doen we zelf. Zo sluit de nieuwe ruimte naadloos aan op het bestaande huis, zonder zichtbare overgang.",
    ],
    signals: [
      "Keuken en woonkamer zijn te krap",
      "Je wilt een open leefkeuken met meer licht",
      "Je zoekt een slaapkamer of badkamer beneden, bijvoorbeeld om langer thuis te wonen",
    ],
    steps: [
      { t: "Check en opname", d: "Vergunningcheck, inmeten en beoordelen van bodem en bestaande gevel." },
      { t: "Ontwerp en constructie", d: "Tekening en, waar nodig, een constructieberekening voor de doorbraak in de achtergevel." },
      { t: "Fundering en casco", d: "Grondwerk, fundering, vloer, wanden en dak. Daarna is de ruimte wind- en waterdicht." },
      { t: "Doorbraak", d: "Pas als het casco dicht is, breken we de achtergevel door. Zo blijft je huis zo kort mogelijk open." },
      { t: "Afwerking", d: "Installaties, isolatie, stucwerk, vloer en schilderwerk, aansluitend op het bestaande huis." },
    ],
    sections: [
      {
        h2: "Waar moet je op letten bij een aanbouw in Zeeland?",
        body: [
          "In delen van Zeeland is de bodem slap of staat het grondwater hoog. Dat bepaalt de fundering. Soms is een fundering op staal genoeg, soms zijn palen nodig. Dat zoeken we vooraf uit, zodat je niet halverwege voor verrassingen staat.",
          "Let ook op de aansluiting tussen oud en nieuw. Daar ontstaan later vaak scheuren of lekkages, omdat de nieuwe aanbouw anders zet dan het bestaande huis. Met een goede dilatatie en een waterdichte dakaansluiting voorkom je dat.",
        ],
      },
    ],
    materials: [
      "Fundering op staal of op palen, afhankelijk van de bodem",
      "Kalkzandsteen of houtskeletbouw met hoge isolatiewaarde",
      "Plat dak met EPDM of bitumen, eventueel met lichtstraat",
      "Stucwerk binnen, sausklaar of met sierpleister afgewerkt",
    ],
    duration:
      "Reken op enkele weken bouwtijd, afhankelijk van grootte, fundering en afwerking. Het moment dat de achtergevel open is, houden we zo kort mogelijk.",
    costFactors: [
      "Diepte en breedte van de aanbouw",
      "Type fundering en bodemgesteldheid",
      "Kozijnen, schuifpui en lichtstraat",
      "Installaties zoals vloerverwarming en elektra",
    ],
    faqs: [
      {
        q: "Hoe diep mag een vergunningvrije aanbouw zijn?",
        a: "In het achtererfgebied mag je onder voorwaarden een aanbouw tot een bepaalde diepte vergunningvrij bouwen. Het omgevingsplan en de situatie bepalen wat bij jou kan. Doe altijd de vergunningcheck.",
      },
      {
        q: "Is een constructeur nodig?",
        a: "Bij een doorbraak in een dragende achtergevel is een constructieberekening nodig. Die regelen wij.",
      },
      {
        q: "Wat is het verschil tussen een aanbouw en een uitbouw?",
        a: "Bij een uitbouw wordt de bestaande ruimte groter, bijvoorbeeld de keuken. Een aanbouw is een aparte ruimte tegen het huis. Voor de regels maakt het weinig verschil.",
      },
    ],
    related: [`${W}/vergunningvrije-dakkapel`, `${V}/keukenrenovatie`, "/stucwerk"],
    articles: ["vergunningvrij-dakkapel-plaatsen-regels", "scheuren-in-de-gevel-wanneer-ernstig"],
    project: {
      title: "Uitbouw met lichtstraat",
      before: "Achtergevel met kleine keukendeur, tuinzijde, voor de start.",
      after: "Afgewerkte uitbouw met schuifpui en lichtstraat, binnen en buiten.",
    },
  },

  // ---------------------------------------------------------------- Verduurzaming
  {
    path: V,
    name: "Verduurzaming",
    short: "Dak, gevel, kelder en natte ruimtes die droog, warm en zuinig zijn.",
    h1: "Verduurzaming van je woning in Zeeland",
    title: "Verduurzaming woning: dak, gevel en kelder",
    description:
      "Verduurzamen begint met een droge, dichte schil. We renoveren dak, gevel, kelder en natte ruimtes in Zeeland en Amsterdam. Vraag een vrijblijvende offerte.",
    icon: "leaf",
    intro: [
      "Verduurzamen gaat niet alleen over zonnepanelen en een warmtepomp. Het begint bij de schil van je huis. Een dak dat lekt, een gevel die water opzuigt of een kelder die vochtig is, kost energie en tast je woning aan. Natte muren isoleren slecht en geven schimmel een kans.",
      "Wij pakken die schil aan. We renoveren daken, gevels en kelders, en we isoleren waar dat zinvol is. Ook badkamers, keukens en toiletten vallen hieronder. Een goed geventileerde, waterdichte natte ruimte gaat jaren langer mee en voorkomt vochtschade in de rest van het huis.",
      "Voordat we isoleren, kijken we eerst naar vocht. Isoleer je een muur die nat is, dan sluit je het probleem in. Daarom combineren we verduurzaming altijd met een vochtcheck.",
    ],
    signals: [
      "Hoge stookkosten en koude muren",
      "Vochtplekken, schimmel of een muffe geur",
      "Een gevel die verweerd is of water opzuigt",
      "Een dak of kelder dat aan vervanging toe is",
    ],
    duration:
      "Van enkele dagen voor een toilet tot enkele weken voor een gevel- of dakrenovatie. Buitenwerk plannen we bij voorkeur in het droge seizoen.",
    costFactors: [
      "Oppervlakte en staat van dak, gevel of kelder",
      "Gekozen isolatiedikte en afwerking",
      "Steigerwerk en bereikbaarheid",
      "Eventueel vochtherstel vooraf",
    ],
    faqs: [
      {
        q: "Waar begin ik met verduurzamen?",
        a: "Begin bij lekken en vocht. Daarna dak, gevel en vloer isoleren, en pas daarna installaties. Zo voorkom je dat je investeert in een huis dat nog nat is.",
      },
      {
        q: "Kom ik in aanmerking voor subsidie?",
        a: "Voor isolatie bestaan landelijke en gemeentelijke regelingen, maar die veranderen regelmatig. Check de actuele regels bij de overheid en je gemeente voordat je opdracht geeft.",
      },
      {
        q: "Kan isoleren vochtproblemen veroorzaken?",
        a: "Ja, als het niet goed wordt uitgevoerd. Isolatie zonder goede dampremming en ventilatie kan condens in de constructie geven. Daar letten we bij elke klus op.",
      },
    ],
    related: [`${V}/gevelrenovatie`, `${V}/dakrenovatie`, "/expertises/schade-herstel/vochtbestrijding"],
    articles: ["buitengevelisolatie-voor-en-nadelen", "vochtige-muren-oorzaken-en-oplossingen"],
  },
  {
    path: `${V}/dakrenovatie`,
    name: "Dakrenovatie",
    short: "Pannen, dakbeschot, isolatie en aansluitingen in één keer goed.",
    h1: "Dakrenovatie in Zeeland en West-Brabant",
    title: "Dakrenovatie Zeeland en West-Brabant",
    description:
      "Dak lekt of slecht geïsoleerd? We renoveren hellende en platte daken in Zeeland en West-Brabant, inclusief isolatie en lood. Vraag een offerte aan.",
    icon: "roof",
    intro: [
      "Een dak gaat lang mee, maar niet eeuwig. Na tientallen jaren worden pannen poreus, gaat het dakbeschot rotten en verliest het loodwerk zijn vorm. Aan de Zeeuwse kust gaat dat sneller, omdat wind en zoute lucht het dak harder belasten. Losse reparaties helpen dan nog maar kort.",
      "Bij een dakrenovatie halen we de oude bedekking eraf, beoordelen we het dakbeschot en de constructie, en bouwen we het dak opnieuw op. Dat is ook hét moment om te isoleren. Van buitenaf isoleren is effectief en je houdt binnen je ruimte.",
      "We renoveren hellende pannendaken en platte daken, en we nemen de aansluitingen mee: schoorsteen, dakkapel, dakgoten en loodwerk. Daar ontstaan de meeste lekkages. Na afloop krijg je een dak dat weer decennia mee kan, en een zolder die warm en droog is.",
    ],
    signals: [
      "Lekkages of vochtplekken op zolder of plafond",
      "Verschoven, gebroken of poreuze dakpannen",
      "Een koude zolder en hoge stookkosten",
      "Mos en algen die steeds terugkomen",
      "Doorgezakt of rot dakbeschot",
    ],
    steps: [
      { t: "Dakinspectie", d: "We beoordelen pannen, beschot, panlatten, lood en isolatie, en maken foto's." },
      { t: "Advies en offerte", d: "Repareren of renoveren? Je krijgt een eerlijk advies en een offerte per onderdeel." },
      { t: "Strippen", d: "Oude pannen en latten eraf, het beschot controleren en waar nodig vervangen." },
      { t: "Isoleren en opbouwen", d: "Isolatieplaten, dampopen folie, tengels, panlatten en nieuwe of hergebruikte pannen." },
      { t: "Aansluitingen", d: "Lood, nokvorsten, schoorsteen en dakgoten. Daarna ruimen we op en lopen we het werk samen na." },
    ],
    materials: [
      "Keramische of betonnen dakpannen, nieuw of hergebruikt waar dat kan",
      "Isolatieplaten op het dakbeschot met dampopen, waterkerende folie",
      "Lood of loodvervanger bij aansluitingen",
      "Gemortelde of droge nokvorsten, passend bij het type dak",
    ],
    duration:
      "Een gemiddeld rijtjeshuisdak duurt ongeveer één tot twee weken, afhankelijk van het weer en de staat van het beschot.",
    costFactors: [
      "Dakoppervlak en dakhelling",
      "Staat van het dakbeschot en de constructie",
      "Type pannen en isolatiedikte",
      "Steiger, schoorsteen en dakramen",
    ],
    faqs: [
      {
        q: "Kan ik mijn oude dakpannen hergebruiken?",
        a: "Soms wel. Als de pannen niet poreus zijn, kunnen ze terug. Bij oudere pannen in kustgebieden is dat vaak niet verstandig. We beoordelen dat bij de inspectie.",
      },
      {
        q: "Is isoleren van buitenaf beter dan van binnen?",
        a: "Van buitenaf isoleren geeft minder koudebruggen en je houdt binnen ruimte. Bij een dakrenovatie is het daarom meestal de beste keuze.",
      },
      {
        q: "Wat als het tijdens de renovatie gaat regenen?",
        a: "We openen nooit meer dak dan we dezelfde dag dicht kunnen maken, en we dekken af met zeilen.",
      },
      {
        q: "Doen jullie ook platte daken?",
        a: "Ja, inclusief isolatie en dakbedekking. Bij een plat dak letten we extra op afschot en hemelwaterafvoer.",
      },
    ],
    related: ["/expertises/service-onderhoud/dak-en-gevelonderhoud", `${V}/gevelrenovatie`, "/expertises/schade-herstel/storm-en-natuurschade"],
    articles: ["zout-en-wind-gevelonderhoud-zeeuwse-kust", "vochtige-muren-oorzaken-en-oplossingen"],
    project: {
      title: "Dakrenovatie aan de kust",
      before: "Oud pannendak met mos en verschoven pannen, vanaf de steiger.",
      after: "Hetzelfde dak met nieuwe pannen, nokvorsten en loodwerk.",
    },
  },
  {
    path: G,
    name: "Gevelrenovatie",
    short: "Isoleren, stucen of herstellen: een gevel die weer jaren mee kan.",
    h1: "Gevelrenovatie in Zeeland en Amsterdam",
    title: "Gevelrenovatie Zeeland en Amsterdam",
    description:
      "Gevelrenovatie in Zeeland of Amsterdam: buitenstucwerk, buitengevelisolatie en gevelplint. Een droge, strakke gevel die jaren meegaat. Vraag offerte aan.",
    icon: "facade",
    intro: [
      "Je gevel vangt alles op. Slagregen, wind, vorst en aan de Zeeuwse kust ook zout. Na verloop van tijd zie je dat aan verweerd voegwerk, scheuren, afbladderende verf of groene aanslag. Dat is niet alleen een kwestie van uiterlijk. Een gevel die water opneemt, wordt koud en kan vocht doorgeven naar binnen.",
      "Bij een gevelrenovatie kijken we eerst naar de oorzaak van de schade. Daarna kiezen we samen de oplossing. Dat kan herstel van het metselwerk zijn, nieuw buitenstucwerk, buitengevelisolatie met een strakke pleisterlaag of een nieuwe gevelplint. Vaak is het een combinatie.",
      "Stucwerk is ons kernambacht. Daarom zijn we sterk in gevels die gepleisterd worden: van traditionele kalkpleister op oude panden tot moderne sierpleister op isolatie. In Amsterdam werken we ook aan gevels van grachtenpanden en portiekflats, vaak in opdracht van een VvE.",
    ],
    signals: [
      "Scheuren in het pleisterwerk of het metselwerk",
      "Losse of verpulverde voegen",
      "Groene aanslag of witte zoutuitslag",
      "Koude binnenmuren of vochtplekken aan de binnenkant",
      "Je wilt de uitstraling van je woning vernieuwen",
    ],
    steps: [
      { t: "Gevelinspectie", d: "We bekijken metselwerk, pleister, voegen, plint en aansluitingen, en meten vocht." },
      { t: "Oorzaak en advies", d: "Herstellen, stucen of isoleren? Je krijgt een advies met voor- en nadelen." },
      { t: "Voorbereiden", d: "Steiger, afdekken, reinigen en losse delen verwijderen." },
      { t: "Uitvoeren", d: "Herstel, isolatie en/of pleisterwerk, laag voor laag met de juiste droogtijden." },
      { t: "Afwerken", d: "Aansluitingen bij kozijnen en plint, en eventueel een impregnerende of verflaag." },
    ],
    duration:
      "Een gevelrenovatie van een eengezinswoning duurt meestal één tot drie weken. Pleisterwerk buiten kan alleen bij droog weer en boven het vriespunt.",
    costFactors: [
      "Geveloppervlak en aantal kozijnen",
      "Staat van de ondergrond",
      "Gekozen systeem: herstel, pleister of isolatie",
      "Steigerwerk en bereikbaarheid",
    ],
    faqs: [
      {
        q: "Moet ik voor gevelrenovatie een vergunning aanvragen?",
        a: "Herstel in dezelfde stijl mag meestal zonder vergunning. Verander je het uiterlijk, bijvoorbeeld door te pleisteren of te isoleren aan de voorkant, of is je pand een monument, dan vaak wel. Check het Omgevingsloket.",
      },
      {
        q: "Kan een oude bakstenen gevel gepleisterd worden?",
        a: "Ja, mits de ondergrond droog en stevig is. Bij oude panden kiezen we een dampopen kalkpleister, zodat de muur kan blijven ademen.",
      },
      {
        q: "Hoe lang gaat buitenstucwerk mee?",
        a: "Goed aangebracht pleisterwerk met periodiek onderhoud gaat tientallen jaren mee. Een termijn per systeem nemen we op in de offerte.",
      },
    ],
    related: [`${G}/buitengevelisolatie`, `${G}/buiten-stucwerk`, "/expertises/service-onderhoud/dak-en-gevelonderhoud"],
    articles: ["zout-en-wind-gevelonderhoud-zeeuwse-kust", "scheuren-in-de-gevel-wanneer-ernstig"],
    project: {
      title: "Gevel opnieuw gepleisterd",
      before: "Gevel met scheuren en verweerde verf, schuin van voren.",
      after: "Dezelfde gevel met nieuwe pleisterlaag en plint, zelfde standpunt.",
    },
  },
  {
    path: `${G}/buitengevelisolatie`,
    name: "Buitengevelisolatie",
    short: "Isolatie aan de buitenkant met een strakke pleisterlaag erop.",
    h1: "Buitengevelisolatie in Zeeland en West-Brabant",
    title: "Buitengevelisolatie Zeeland",
    description:
      "Buitengevelisolatie met een strakke pleisterlaag: warmer wonen en een nieuwe gevel in één keer. Advies en uitvoering in Zeeland. Vraag een offerte aan.",
    icon: "layers",
    intro: [
      "Veel woningen zonder spouw of met een smalle spouw zijn lastig te isoleren. Binnen isoleren kost ruimte en geeft risico op condens. Buitengevelisolatie lost dat op. We bevestigen isolatieplaten aan de buitenkant van de gevel en werken die af met een pleistersysteem. Je huis krijgt een warme jas en een nieuwe uitstraling.",
      "Het grote voordeel is dat de hele muur aan de warme kant van de isolatie komt. Koudebruggen bij vloeren en wanden verdwijnen grotendeels, en de muur blijft droog. Binnen merk je dat aan warmere wanden en minder tocht.",
      "Buitengevelisolatie is wel een ingreep die goed moet worden voorbereid. Kozijnen, dakrand, vensterbanken en de aansluiting op de plint veranderen mee. Wij zijn stukadoors van origine en kennen de pleistersystemen van binnen en buiten. Daardoor letten we juist op die details.",
    ],
    signals: [
      "Je woning heeft geen of een smalle spouw",
      "Binnenmuren voelen koud aan",
      "De gevel moet toch al worden gerenoveerd",
      "Je wilt een moderne, strakke uitstraling",
    ],
    steps: [
      { t: "Opname", d: "We beoordelen de gevel, meten vocht en bekijken kozijnen, dakrand en plint." },
      { t: "Systeemkeuze", d: "Isolatiemateriaal, dikte en afwerking kiezen we samen, inclusief kleur en structuur." },
      { t: "Voorbereiden", d: "Gevel reinigen, losse delen herstellen, aansluitingen voorbereiden." },
      { t: "Isoleren", d: "Platen verlijmen en mechanisch bevestigen, met wapening in de basislaag." },
      { t: "Pleisteren", d: "Eindlaag in de gekozen structuur en kleur, en alle aansluitingen waterdicht afwerken." },
    ],
    materials: [
      "EPS, minerale wol of houtvezel als isolatieplaat",
      "Gewapende basislaag met glasvezelweefsel",
      "Silicaat-, siliconen- of kalkgebonden sierpleister",
      "Nieuwe, diepere vensterbanken en aangepaste dakrandafwerking",
    ],
    duration:
      "Voor een eengezinswoning ongeveer twee tot vier weken, afhankelijk van weer, oppervlak en het aantal aansluitingen.",
    costFactors: [
      "Geveloppervlak en isolatiedikte",
      "Aantal kozijnen en aansluitingen",
      "Type isolatie en afwerkpleister",
      "Steiger en eventuele vergunning",
    ],
    faqs: [
      {
        q: "Wordt mijn huis dikker?",
        a: "Ja, de gevel komt een aantal centimeters naar voren. Daarom is het belangrijk vooraf te checken of dat mag, zeker aan de straatkant en bij erfgrenzen.",
      },
      {
        q: "Heb ik een vergunning nodig?",
        a: "Aan de voorkant vaak wel, omdat het uiterlijk verandert. Bij monumenten en beschermd stadsgezicht bijna altijd. Check het Omgevingsloket.",
      },
      {
        q: "Kan het op een monument?",
        a: "Bij monumenten is buitengevelisolatie zelden toegestaan. Daar zoeken we samen naar alternatieven, zoals dampopen binnenisolatie.",
      },
      {
        q: "Wat zijn de nadelen?",
        a: "Het is een grotere investering en de gevel verandert van uiterlijk. Lees de voor- en nadelen in ons kennisbankartikel.",
      },
    ],
    related: [`${G}/buiten-stucwerk`, `${G}/gevelplint`, `${V}/dakrenovatie`],
    articles: ["buitengevelisolatie-voor-en-nadelen", "zout-en-wind-gevelonderhoud-zeeuwse-kust"],
    project: {
      title: "Buitengevelisolatie op een jaren-60-woning",
      before: "Bakstenen gevel zonder spouw, met oude kozijnen.",
      after: "Geïsoleerde gevel met lichte sierpleister en nieuwe vensterbanken.",
    },
  },
  {
    path: `${G}/buiten-stucwerk`,
    name: "Buitenstucwerk",
    short: "Gevelpleister die beschermt én er strak uitziet.",
    h1: "Buitenstucwerk en gevelpleister in Zeeland",
    title: "Buitenstucwerk en gevelpleister Zeeland",
    description:
      "Buitenstucwerk of gevelpleister in Zeeland? Kalkpleister, sierpleister of herstel van bestaand pleisterwerk door een vakkundige stukadoor. Vraag offerte.",
    icon: "trowel",
    intro: [
      "Buitenstucwerk is het visitekaartje van je huis. Een strak gepleisterde gevel ziet er rustig en verzorgd uit. Maar pleisterwerk buiten moet meer kunnen dan mooi zijn. Het moet regen tegenhouden, vocht uit de muur laten ontsnappen en meebewegen met temperatuurwisselingen.",
      "Daarom kiezen we het pleistersysteem op basis van de ondergrond. Een oud bakstenen pand in de binnenstad van Middelburg of Zierikzee vraagt om een dampopen kalkpleister. Een nieuwbouwwoning of een geïsoleerde gevel krijgt vaak een kunstharsgebonden of silicaatpleister.",
      "We doen nieuw buitenstucwerk en we herstellen bestaand pleisterwerk. Bij herstel zoeken we eerst uit waarom het pleister loslaat of scheurt. Vaak zit de oorzaak in vocht van achteren of in een harde pleisterlaag op een zachte muur. Herstel zonder die oorzaak aan te pakken, houdt geen stand.",
    ],
    signals: [
      "Pleisterwerk dat hol klinkt of loslaat",
      "Haarscheuren of grotere scheuren in de gevel",
      "Verweerd metselwerk dat je wilt opknappen",
      "Groene of zwarte aanslag die steeds terugkomt",
    ],
    steps: [
      { t: "Beoordelen", d: "We tikken de gevel af, meten vocht en stellen het type ondergrond vast." },
      { t: "Voorbereiden", d: "Losse delen verwijderen, reinigen en hechtlaag of grondering aanbrengen." },
      { t: "Basislaag", d: "Uitvlakken en, waar nodig, wapenen tegen scheuren." },
      { t: "Eindlaag", d: "Pleister in de gekozen structuur: glad, geschuurd, korrel of spachtel." },
      { t: "Bescherming", d: "Indien nodig een dampopen gevelverf of hydrofobering." },
    ],
    materials: [
      "Kalkpleister voor oude, ademende muren",
      "Silicaat- en siliconenharspleister voor moderne gevels",
      "Glasvezelwapening tegen scheurvorming",
      "Dampopen gevelverf in de gewenste kleur",
    ],
    duration:
      "Een gevel van een eengezinswoning duurt meestal één tot twee weken. Elke laag heeft droogtijd nodig, en we werken alleen bij droog weer boven 5 °C.",
    costFactors: [
      "Oppervlak en hoogte van de gevel",
      "Hoeveel bestaand pleister eraf moet",
      "Type pleister en structuur",
      "Aantal kozijnen, hoeken en details",
    ],
    faqs: [
      {
        q: "Welke pleister is het beste voor een oud huis?",
        a: "Meestal een kalkgebonden pleister. Die is dampopen en zachter dan cementpleister, zodat de muur niet gaat scheuren of vocht opsluit.",
      },
      {
        q: "Kun je over oud pleisterwerk heen?",
        a: "Alleen als het oude pleister goed hecht. Klinkt het hol of laat het los, dan moet het eraf.",
      },
      {
        q: "In welke kleuren kan het?",
        a: "Vrijwel elke kleur. In beschermd stadsgezicht kan de gemeente eisen stellen aan kleur en structuur.",
      },
      {
        q: "Wanneer is het beste seizoen?",
        a: "Van het voorjaar tot de vroege herfst. Bij vorst en harde regen pleisteren we niet buiten.",
      },
    ],
    related: [`${G}/buitengevelisolatie`, `${G}/gevelplint`, "/stucwerk"],
    articles: ["zout-en-wind-gevelonderhoud-zeeuwse-kust", "scheuren-in-de-gevel-wanneer-ernstig"],
    project: {
      title: "Herstel kalkpleister in de binnenstad",
      before: "Gevel met losse pleistervlakken en scheuren boven de ramen.",
      after: "Hersteld pleisterwerk in de oorspronkelijke kleur.",
    },
  },
  {
    path: `${G}/gevelplint`,
    name: "Gevelplint",
    short: "De onderste meter van je gevel: waterafstotend en stootvast.",
    h1: "Gevelplint herstellen of aanbrengen in Zeeland",
    title: "Gevelplint herstellen of aanbrengen",
    description:
      "Een nieuwe of herstelde gevelplint beschermt de onderkant van je muur tegen spatwater en optrekkend vocht. Vakwerk in Zeeland. Vraag een offerte aan.",
    icon: "facade",
    intro: [
      "De plint is het onderste deel van je gevel, vlak boven het maaiveld. Hier krijgt de muur het zwaarst te verduren. Regen spat op vanaf de tegels, sneeuw blijft liggen, en grondvocht trekt van onderen op. Ook fietsen, vuilcontainers en grasmaaiers raken de muur juist hier.",
      "Een goede plint is waterafstotend, stootvast en sluit netjes aan op de gevel erboven. Vaak is het een cementgebonden pleister of een zwarte of antraciet plintpleister. Bij gepleisterde gevels en bij buitengevelisolatie is de plint een vast onderdeel van het systeem.",
      "Wij herstellen beschadigde plinten en brengen nieuwe aan. Daarbij controleren we ook of er vocht optrekt. Als dat zo is, pakken we eerst de oorzaak aan, bijvoorbeeld met een injectie tegen optrekkend vocht. Anders wordt de plint een dichte laag die het vocht hoger de muur in drukt.",
    ],
    signals: [
      "Afbladderende verf of pleister onderaan de gevel",
      "Groene aanslag of zoutuitslag vlak boven de grond",
      "Beschadigingen door stoten",
      "Vochtplekken binnen, onderaan de buitenmuur",
    ],
    steps: [
      { t: "Vocht meten", d: "We meten of en hoe hoog vocht optrekt, en bekijken de bestrating ertegen." },
      { t: "Verwijderen", d: "Oude, losse plint verwijderen tot op een stevige ondergrond." },
      { t: "Herstel", d: "Eventueel eerst injecteren tegen optrekkend vocht." },
      { t: "Opbouwen", d: "Plintpleister in lagen aanbrengen, met een strakke bovenrand of plintprofiel." },
      { t: "Afwerken", d: "Afwerken in de gewenste kleur, met de juiste aansluiting op de bestrating." },
    ],
    duration: "Een plint rondom een eengezinswoning is meestal in twee tot vier werkdagen klaar, plus droogtijd.",
    costFactors: [
      "Lengte en hoogte van de plint",
      "Staat van de ondergrond",
      "Of er vochtbestrijding nodig is",
      "Afwerking en kleur",
    ],
    faqs: [
      {
        q: "Hoe hoog moet een plint zijn?",
        a: "Meestal tussen 30 en 60 centimeter boven het maaiveld, afhankelijk van de gevel en de omgeving. We stemmen het af op de lijnen van het huis.",
      },
      {
        q: "Moet de bestrating omhoog of omlaag?",
        a: "Bestrating die tegen of boven de vochtkering ligt, laat water in de muur lopen. Soms adviseren we om de tegels langs de gevel iets te verlagen of een grindstrook aan te leggen.",
      },
      {
        q: "Kan een plint op een bakstenen muur?",
        a: "Ja, mits de ondergrond droog en stevig is. We zorgen dat de plint geen vocht in de muur opsluit.",
      },
    ],
    related: [`${G}/buiten-stucwerk`, "/expertises/schade-herstel/vochtbestrijding", `${G}/buitengevelisolatie`],
    articles: ["vochtige-muren-oorzaken-en-oplossingen", "zout-en-wind-gevelonderhoud-zeeuwse-kust"],
  },
  {
    path: `${V}/kelderrenovatie`,
    name: "Kelderrenovatie",
    short: "Een kelder die droog blijft en weer bruikbaar is.",
    h1: "Kelderrenovatie en kelder waterdicht maken",
    title: "Kelder waterdicht maken en renoveren",
    description:
      "Vochtige kelder? We maken kelders waterdicht en renoveren ze tot droge, bruikbare ruimte in Zeeland, Brabant en Amsterdam. Vraag een offerte aan.",
    icon: "drop",
    intro: [
      "In Zeeland en Amsterdam staat het grondwater vaak hoog. Kelders hebben daardoor vaak last van vocht. Je ruikt het meteen: een muffe lucht, witte uitslag op de muren en roest aan alles wat er staat. Een vochtige kelder is niet alleen onbruikbaar. Het vocht trekt ook omhoog de woning in.",
      "Een kelder waterdicht maken vraagt om een aanpak op maat. Komt het water van buiten door de wand? Drukt het van onderen door de vloer? Of is het condens, omdat warme lucht tegen een koude wand komt? Elke oorzaak heeft een andere oplossing. Daarom meten we eerst, en pas daarna adviseren we.",
      "We brengen waterdichte cementgebonden systemen aan, dichten scheuren en naden met injectie en zorgen voor ventilatie. Daarna kunnen we de kelder afwerken tot een bruikbare ruimte, met stucwerk, verlichting en een goede vloer.",
    ],
    signals: [
      "Muffe lucht en schimmel in de kelder",
      "Witte zoutuitslag of afbladderende verf",
      "Plassen water na regen of bij hoog grondwater",
      "Spullen roesten of beschimmelen",
    ],
    steps: [
      { t: "Diagnose", d: "We meten vocht in wand en vloer, en zoeken uit of het lekwater, drukwater of condens is." },
      { t: "Voorbereiden", d: "Oude verf en pleister verwijderen tot op de kale wand." },
      { t: "Dichten", d: "Scheuren en naden injecteren en hoeken afronden met een waterdichte hoekafwerking." },
      { t: "Waterdicht systeem", d: "Een cementgebonden, waterdichte laag op wanden en vloer, in meerdere lagen." },
      { t: "Afwerken en ventileren", d: "Afwerken met een dampopen pleister en zorgen voor voldoende ventilatie." },
    ],
    materials: [
      "Cementgebonden waterdichte coatings (minerale dichtingsslurry)",
      "Injectieharsen voor scheuren en naden",
      "Saneerpleister die zouten opvangt",
      "Mechanische ventilatie of ventilatieroosters",
    ],
    duration:
      "Een gemiddelde kelder is in één tot twee weken waterdicht en afgewerkt. Droogtijd van het systeem plannen we mee.",
    costFactors: [
      "Oppervlak van wanden en vloer",
      "Oorzaak en hoeveelheid water",
      "Bereikbaarheid van de kelder",
      "Gewenste afwerking en ventilatie",
    ],
    faqs: [
      {
        q: "Kan een kelder van binnenuit waterdicht worden?",
        a: "Ja, in de meeste gevallen. Een goed cementgebonden systeem kan ook tegen waterdruk van buitenaf. Bij ernstige lekkages kan aanvullend werk aan de buitenkant nodig zijn.",
      },
      {
        q: "Helpt een ontvochtiger niet gewoon?",
        a: "Een ontvochtiger helpt tegen condens, maar niet tegen water dat door de wand komt. Dan bestrijd je alleen het symptoom.",
      },
      {
        q: "Kan ik de kelder daarna als werkruimte gebruiken?",
        a: "Vaak wel. Met goede ventilatie, verlichting en afwerking wordt een droge kelder een prima hobby- of opslagruimte.",
      },
    ],
    related: ["/expertises/schade-herstel/vochtbestrijding", "/expertises/schade-herstel/lekkages-vochtproblemen", "/stucwerk"],
    articles: ["vochtige-muren-oorzaken-en-oplossingen", "schimmel-in-de-badkamer-blijvend-oplossen"],
    project: {
      title: "Kelder waterdicht gemaakt",
      before: "Kelderwand met zoutuitslag en afbladderende verf.",
      after: "Droge, gepleisterde kelderwand met ventilatierooster.",
    },
  },
  {
    path: `${V}/badkamer-renovatie`,
    name: "Badkamerrenovatie",
    short: "Een nieuwe badkamer die waterdicht is tot achter de tegels.",
    h1: "Badkamerrenovatie in Middelburg en Zeeland",
    title: "Badkamerrenovatie Middelburg en Zeeland",
    description:
      "Badkamer renoveren in Middelburg of elders in Zeeland? Van sloop tot kitwerk, waterdicht tot achter de tegels, met één aanspreekpunt. Vraag offerte aan.",
    icon: "bath",
    intro: [
      "Een nieuwe badkamer moet mooi zijn, maar vooral droog blijven. De meeste waterschade in huizen begint in de badkamer. Een kitvoeg die loslaat, een doucheafvoer die niet goed is ingebouwd of tegels zonder waterdichte laag eronder. Je ziet het pas als het plafond eronder verkleurt.",
      "Bij een badkamerrenovatie beginnen wij daarom bij de basis. We slopen de oude badkamer, controleren leidingen en ondergrond en brengen een waterdicht systeem aan onder de tegels. Pas daarna komt het tegelwerk, het sanitair en het kitwerk. Zo blijft je badkamer niet alleen het eerste jaar droog, maar vele jaren.",
      "Je hebt één aanspreekpunt voor het hele traject: sloop, loodgieterswerk, elektra, ventilatie, tegelwerk en stucwerk van het plafond. Sinds 2020 is badkamer-, keuken- en toiletrenovatie een van onze specialisaties. We werken in heel Zeeland, in West-Brabant en in de regio Amsterdam.",
    ],
    signals: [
      "Schimmel die steeds terugkomt, ook na schoonmaken",
      "Loszittende tegels of kitvoegen die verkleuren",
      "Vochtplekken op het plafond eronder",
      "Een badkamer die gedateerd of onpraktisch is",
      "Je wilt een inloopdouche of een toegankelijke badkamer",
    ],
    steps: [
      { t: "Ontwerp en offerte", d: "We meten op, bespreken je wensen en maken een indeling. Je krijgt een offerte per onderdeel." },
      { t: "Sloop", d: "Oude tegels, sanitair en leidingen eruit. Stofarm en met afgeschermde looproute." },
      { t: "Installaties", d: "Nieuwe leidingen, afvoer met het juiste afschot, elektra en mechanische ventilatie." },
      { t: "Waterdicht maken", d: "Een waterdicht systeem op wanden en vloer, met afdichtingsband in hoeken en rond doorvoeren." },
      { t: "Tegels, sanitair en kit", d: "Tegelwerk, sanitair plaatsen, plafond stucen en schimmelwerend kitten." },
    ],
    sections: [
      {
        h2: "Waarom een waterdicht systeem onder de tegels?",
        body: [
          "Tegels en voegen zijn niet waterdicht. Voegen nemen water op, en op den duur komt dat in de wand of vloer terecht. Een vloeibaar of plaatvormig afdichtingssysteem onder de tegels houdt dat water tegen. Bij een inloopdouche zonder drempel is dat extra belangrijk, omdat het water vrij over de vloer loopt.",
        ],
      },
      {
        h2: "Ventilatie: de vergeten helft van een goede badkamer",
        body: [
          "Een mooie badkamer zonder goede afzuiging wordt een schimmelbadkamer. We controleren de bestaande ventilatie en adviseren een mechanische afzuiger met nalooptijd of vochtsensor. Ook zorgen we voor een spleet onder de deur of een rooster, zodat er verse lucht kan binnenkomen.",
        ],
      },
    ],
    materials: [
      "Vloeibare of plaatvormige afdichtingssystemen met afdichtingsband",
      "Douchegoot of putje met waterdichte inbouwset",
      "Tegels naar keuze, verwerkt met flexibele tegellijm",
      "Sanitairkit met schimmelwerende toevoeging",
      "Vochtbestendig stucwerk op het plafond",
    ],
    duration:
      "Een complete badkamerrenovatie duurt meestal twee tot vier weken, inclusief droogtijden. In de offerte staat een dagplanning.",
    costFactors: [
      "Afmetingen en indeling van de badkamer",
      "Of leidingen en afvoer moeten worden verlegd",
      "Keuze van tegels en sanitair",
      "Extra's zoals vloerverwarming of een inloopdouche zonder drempel",
    ],
    faqs: [
      {
        q: "Kan ik zelf tegels en sanitair kiezen?",
        a: "Ja. Je kunt zelf kiezen en kopen, of wij adviseren en bestellen. We controleren altijd of de keuze technisch past, zoals de maat van de douchegoot.",
      },
      {
        q: "Hoe lang zit ik zonder badkamer?",
        a: "Gemiddeld twee tot vier weken. Heb je geen tweede douche, dan zoeken we samen naar een oplossing, bijvoorbeeld een tijdelijke voorziening.",
      },
      {
        q: "Wat kost een badkamerrenovatie?",
        a: "Dat hangt af van grootte, indeling en materialen. In ons artikel over de kostenfactoren lees je waar je rekening mee moet houden.",
      },
      {
        q: "Doen jullie ook kleine badkamers in appartementen?",
        a: "Ja, juist ook. In Amsterdam renoveren we veel kleine badkamers, waarbij elke centimeter telt.",
      },
      {
        q: "Hoe voorkom ik schimmel in mijn nieuwe badkamer?",
        a: "Goede afzuiging, een rooster of spleet onder de deur, en na het douchen de wanden aftrekken. We geven je bij de oplevering een onderhoudsadvies mee.",
      },
    ],
    related: [`${V}/toiletrenovatie`, "/expertises/service-onderhoud/badkamer-keuken-toilet-onderhoud-bkt", "/expertises/schade-herstel/lekkages-vochtproblemen"],
    articles: ["wat-kost-een-badkamerrenovatie", "schimmel-in-de-badkamer-blijvend-oplossen"],
    project: {
      title: "Badkamer met inloopdouche",
      before: "Oude badkamer met bad, losse kitvoegen en schimmel in de hoeken.",
      after: "Nieuwe badkamer met inloopdouche en douchegoot, vanuit de deuropening.",
    },
  },
  {
    path: `${V}/keukenrenovatie`,
    name: "Keukenrenovatie",
    short: "Van sloop tot spatwand: een keuken die klopt tot in de aansluitingen.",
    h1: "Keukenrenovatie in Zeeland en West-Brabant",
    title: "Keukenrenovatie Zeeland en West-Brabant",
    description:
      "Keuken renoveren in Zeeland of West-Brabant? We slopen, passen leidingen aan, stucen en plaatsen. Keukens zitten sinds 1969 in de familie. Vraag offerte.",
    icon: "home",
    intro: [
      "Met keukens begon het, in 1969 in Bergen op Zoom. De grootvader plaatste toen keukens van Bruynzeel en Keller. Die kennis zit nog in de familie. We weten dat een keuken pas mooi wordt als de basis klopt: rechte wanden, goede aansluitingen en installaties op de juiste plek.",
      "Bij een keukenrenovatie doen we het werk rondom de keuken. We slopen de oude keuken, passen leidingen, afvoer en elektra aan, stucen wanden en plafond en zorgen voor een goede afzuiging. Daarna plaatsen we de nieuwe keuken, of we bereiden alles voor op de montage door je keukenleverancier.",
      "Ook als je keuken nog goed is, maar de ruimte eromheen verouderd, kun je bij ons terecht. Denk aan nieuwe tegels of een spatwand, een strak gestuukt plafond met inbouwspots of het weghalen van een tussenmuur voor een open keuken.",
    ],
    signals: [
      "Je keuken is versleten of past niet meer bij je gezin",
      "Je wilt de keuken op een andere plek of open maken",
      "Wanden en plafond zijn scheef of beschadigd na de sloop",
      "Je keukenleverancier plaatst alleen, maar regelt het voorwerk niet",
    ],
    steps: [
      { t: "Opname", d: "We meten in, bespreken de indeling en stemmen af met je keukenleverancier." },
      { t: "Sloop", d: "Oude keuken, tegels en eventueel een tussenmuur verwijderen, met constructief advies waar nodig." },
      { t: "Installaties", d: "Water, afvoer, elektra en afzuiging op de juiste plek voor de nieuwe keuken." },
      { t: "Stucwerk en vloer", d: "Wanden en plafond strak en sausklaar, vloer klaar voor afwerking." },
      { t: "Plaatsen en afwerken", d: "Keuken plaatsen of laten plaatsen, spatwand, kitwerk en aansluitingen." },
    ],
    duration:
      "Het voorwerk en de afwerking duren samen meestal één tot drie weken. De keuken zelf staat vaak in één tot drie dagen.",
    costFactors: [
      "Of de keuken op dezelfde plek blijft",
      "Sloop van muren en constructieve aanpassingen",
      "Omvang van leidingwerk en elektra",
      "Afwerking van wanden, plafond en vloer",
    ],
    faqs: [
      {
        q: "Plaatsen jullie ook keukens van andere leveranciers?",
        a: "Ja. We kunnen de montage doen of alleen het voorwerk en de afwerking. We stemmen dat vooraf af met de leverancier.",
      },
      {
        q: "Kan een muur eruit voor een open keuken?",
        a: "Vaak wel. Bij een dragende muur is een constructieberekening en soms een vergunning nodig. Wij regelen de berekening.",
      },
      {
        q: "Kan ik koken tijdens de renovatie?",
        a: "Meestal niet in de keuken zelf. Veel klanten richten een tijdelijk kookhoekje in. We houden de periode zonder keuken zo kort mogelijk.",
      },
    ],
    related: [`${V}/badkamer-renovatie`, `${V}/interieurverbouw`, "/stucwerk"],
    articles: ["sausklaar-vs-behangklaar-stucwerk", "hoe-lang-moet-stucwerk-drogen"],
    project: {
      title: "Open keuken na doorbraak",
      before: "Gesloten keuken met tussenmuur naar de woonkamer.",
      after: "Open keuken met gestuukt plafond en nieuwe spatwand.",
    },
  },
  {
    path: `${V}/toiletrenovatie`,
    name: "Toiletrenovatie",
    short: "Een fris, hygiënisch toilet in enkele dagen.",
    h1: "Toilet renoveren in Zeeland en Amsterdam",
    title: "Toilet renoveren Zeeland en Amsterdam",
    description:
      "Toilet renoveren? Een hangtoilet, nieuwe tegels en strak stucwerk in een paar dagen. Werkgebied Zeeland, West-Brabant en Amsterdam. Vraag een offerte aan.",
    icon: "bath",
    intro: [
      "Het toilet is de kleinste ruimte van het huis, maar je gebruikt hem elke dag. Een gedateerd toilet met een staande pot, vergeelde kitranden en oude tegels voelt snel onfris. Een renovatie is overzichtelijk en snel klaar.",
      "We vervangen meestal de staande pot door een hangtoilet met inbouwreservoir. Dat is makkelijker schoon te houden en geeft een strakker beeld. Daarnaast vernieuwen we tegelwerk, stucen we de wanden of het plafond en plaatsen we een fonteintje. Ook een goede ventilatie hoort erbij.",
      "In appartementen en in oudere panden vraagt de afvoer extra aandacht. Daar kijken we vooraf naar, zodat er tijdens het werk geen verrassingen zijn.",
    ],
    signals: [
      "Staand toilet dat lastig schoon te maken is",
      "Lekkend reservoir of losse kitranden",
      "Oude tegels of beschadigde wanden",
      "Een muffe geur door slechte ventilatie",
    ],
    steps: [
      { t: "Kiezen", d: "We bespreken pot, fontein, tegels en afwerking, en meten op." },
      { t: "Sloop", d: "Oude pot, reservoir en tegels eruit, leidingen controleren." },
      { t: "Inbouw", d: "Inbouwreservoir plaatsen, afvoer en water aansluiten, wand dichtmaken." },
      { t: "Afwerken", d: "Tegelwerk, stucwerk boven de tegels, ventilatie en kitwerk." },
      { t: "Plaatsen", d: "Pot, fontein en accessoires monteren en alles testen." },
    ],
    duration: "Een toiletrenovatie duurt meestal drie tot vijf werkdagen.",
    costFactors: [
      "Type toilet en inbouwreservoir",
      "Hoeveel tegelwerk er vervangen wordt",
      "Aanpassingen aan afvoer of leidingen",
      "Fontein, ventilatie en verlichting",
    ],
    faqs: [
      {
        q: "Kan een hangtoilet op elke muur?",
        a: "Het inbouwreservoir wordt in een voorzetwand geplaatst. Daardoor kan het bijna altijd, ook tegen een lichte wand.",
      },
      {
        q: "Heb ik dan een paar dagen geen toilet?",
        a: "Als je één toilet hebt, plannen we het zo dat je zo kort mogelijk zonder zit. Vaak is dat één tot twee dagen.",
      },
      {
        q: "Combineren jullie dit met de badkamer?",
        a: "Ja, dat is vaak voordelig. Je hebt dan één planning en één aanspreekpunt.",
      },
    ],
    related: [`${V}/badkamer-renovatie`, "/expertises/service-onderhoud/badkamer-keuken-toilet-onderhoud-bkt", "/stucwerk"],
    articles: ["kitwerk-vervangen-wanneer-en-waarom", "wat-kost-een-badkamerrenovatie"],
  },
  {
    path: `${V}/interieurverbouw`,
    name: "Interieurverbouw",
    short: "Wanden verplaatsen, plafonds vernieuwen en ruimtes anders indelen.",
    h1: "Interieurverbouw in Zeeland en Amsterdam",
    title: "Interieurverbouw Zeeland en Amsterdam",
    description:
      "Ruimtes anders indelen, wanden plaatsen of plafonds vernieuwen? We verbouwen je interieur en werken het strak af met stucwerk. Vraag een offerte aan.",
    icon: "door",
    intro: [
      "Soms past een huis niet meer bij hoe je leeft. De kinderen zijn groot, je werkt thuis of je wilt een open woonkeuken. Met een interieurverbouwing deel je de ruimte opnieuw in, zonder aan de buitenkant iets te veranderen.",
      "We plaatsen en verwijderen wanden, maken nieuwe deuropeningen, verlagen of vernieuwen plafonds en verplaatsen installaties. Het verschil zit in de afwerking. Omdat stucwerk ons vak is, sluiten nieuwe en oude wanden naadloos op elkaar aan. Je ziet niet waar de oude muur stond.",
      "In oude panden, zoals jaren-30-woningen in Zeeland en grachtenpanden in Amsterdam, letten we op wat het huis bijzonder maakt. Denk aan ornamentplafonds, oude deuren en kalkpleister die moet blijven ademen.",
    ],
    signals: [
      "Je wilt een open woonkeuken of juist een extra kamer",
      "Een verlaagd systeemplafond dat er gedateerd uitziet",
      "Scheve wanden en plafonds na eerdere verbouwingen",
      "Je wilt een werkkamer of inloopkast",
    ],
    steps: [
      { t: "Plan", d: "We bespreken de nieuwe indeling, constructie en installaties." },
      { t: "Voorbereiden", d: "Afdekken, stofschotten plaatsen en een looproute vrijmaken." },
      { t: "Ruwbouw", d: "Wanden plaatsen of verwijderen, openingen maken, plafonds aanpassen." },
      { t: "Installaties", d: "Elektra, verlichting en eventueel verwarming verplaatsen." },
      { t: "Afwerking", d: "Stucwerk, aftimmering, deuren en schilderwerk." },
    ],
    duration: "Van enkele dagen voor een nieuwe wand tot enkele weken voor een complete verdieping.",
    costFactors: [
      "Omvang van de verbouwing",
      "Constructieve aanpassingen",
      "Verplaatsen van installaties",
      "Afwerkingsniveau",
    ],
    faqs: [
      {
        q: "Mag ik zomaar een muur weghalen?",
        a: "Een niet-dragende muur meestal wel. Bij een dragende muur heb je een constructieberekening nodig en soms een vergunning, zeker bij monumenten.",
      },
      {
        q: "Hoe houden jullie het stof binnen de perken?",
        a: "Met stofschotten, afgedekte vloeren en stofarm schuren met afzuiging. Dagelijks ruimen we op.",
      },
      {
        q: "Kunnen jullie een ornamentplafond herstellen?",
        a: "Ja, kleine beschadigingen herstellen we. Bij grote ornamenten werken we samen met een specialist.",
      },
    ],
    related: ["/stucwerk", "/expertises/service-onderhoud/interieur", `${V}/keukenrenovatie`],
    articles: ["sausklaar-vs-behangklaar-stucwerk", "hoe-lang-moet-stucwerk-drogen"],
  },
];
