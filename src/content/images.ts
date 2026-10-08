/**
 * Stockfoto's van Pexels (https://www.pexels.com/license/): gratis voor
 * commercieel gebruik, naamsvermelding niet verplicht (daarom tonen we geen bronvermelding).
 * Vervang ze geleidelijk door echte projectfoto's.
 */
export type StockImage = {
  src: string;
  alt: string;
  credit: string;
  source: string;
  license: string;
  licenseUrl: string;
};

const px = (id: number, alt: string): StockImage => ({
  src: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`,
  alt,
  credit: "Pexels",
  source: `https://www.pexels.com/photo/${id}/`,
  license: "Pexels-licentie",
  licenseUrl: "https://www.pexels.com/license/",
});

const E = "/expertises";
const R = `${E}/renovatie-verbouw`;
const V = `${R}/verduurzaming`;
const G = `${V}/gevelrenovatie`;
const S = `${E}/service-onderhoud`;
const DG = `${S}/dak-en-gevelonderhoud`;
const H = `${E}/schade-herstel`;
const KC = "/nieuws/kenniscentrum";

const byPath: Record<string, StockImage> = {
  // Kernpagina's
  "/stucwerk": px(5691637, "Spaan strijkt verse witte pleister glad op een wand"),
  [E]: px(2209529, "Steiger tegen een gevel tijdens een renovatie"),
  "/zakelijk": px(12374992, "Appartementencomplex met balkons"),
  "/offerte-aanvragen": px(5691700, "Verfroller in een bak met witte muurverf"),
  "/contact": px(10275835, "Duinen en kust bij Domburg op Walcheren"),
  "/werkgebied": px(35053780, "Oosterscheldekering met windmolens in Zeeland"),
  "/over-ons": px(1029243, "Gereedschap van de vakman op een houten werkbank"),
  "/over-ons/oorsprong": px(6523300, "Lichte keuken met witte kasten"),
  "/nieuws": px(1029243, "Gereedschap van de vakman op een houten werkbank"),
  "/nieuws/projecten": px(15798781, "Kamer tijdens een renovatie met kale bakstenen muren"),

  // Renovatie & verbouw
  [R]: px(15798781, "Kamer tijdens een renovatie met kale bakstenen muren"),
  [`${R}/woninguitbreiding`]: px(18504899, "Dakkapellen in een hellend pannendak"),
  [`${R}/woninguitbreiding/vergunningvrije-dakkapel`]: px(221525, "Pannendak met dakkapellen"),
  [`${R}/woninguitbreiding/vergunningvrije-aanbouw-uitbouw`]: px(4692281, "Bakstenen woning met een aanbouw in aanbouw"),
  [V]: px(11435856, "Strakke witte gevel van een gerenoveerde woning"),
  [`${V}/dakrenovatie`]: px(2607332, "Oude dakpannen op een hellend dak"),
  [G]: px(2209529, "Steiger tegen een gevel tijdens een renovatie"),
  [`${G}/buitengevelisolatie`]: px(12901948, "Gevel met een nieuwe, nog onafgewerkte pleisterlaag"),
  [`${G}/buiten-stucwerk`]: px(4953232, "Vakman brengt pleister aan op een buitengevel"),
  [`${G}/gevelplint`]: px(16075970, "Bakstenen gevel met voordeuren aan de straat"),
  [`${V}/kelderrenovatie`]: px(16639381, "Trap en deur naar een kelder"),
  [`${V}/badkamer-renovatie`]: px(6436770, "Moderne badkamer met inloopdouche en glazen wand"),
  [`${V}/keukenrenovatie`]: px(6523300, "Lichte keuken met witte kasten"),
  [`${V}/toiletrenovatie`]: px(27924620, "Hangtoilet tegen een betegelde wand met houten accent"),
  [`${V}/interieurverbouw`]: px(11427524, "Vakman plaatst wanden tijdens een interieurverbouwing"),

  // Service & onderhoud
  [S]: px(1029243, "Gereedschap van de vakman op een houten werkbank"),
  [DG]: px(15321060, "Close-up van terracotta dakpannen"),
  [`${DG}/inspectie-en-preventief-onderhoud-seizoen`]: px(4394224, "Dak met schoorsteen en dakramen"),
  [`${DG}/dakpannen-en-nokvorsten-vervangen`]: px(6432077, "Verweerde dakpannen van dichtbij"),
  [`${DG}/schoorsteenrenovatie`]: px(11827651, "Daken met gemetselde schoorstenen"),
  [`${DG}/dakgoten-reinigen`]: px(2663254, "Regenwater loopt over een pannendak"),
  [`${DG}/impregneren-coaten`]: px(10035814, "Bakstenen gevel met erker"),
  [`${DG}/gevelreiniging`]: px(16158284, "Oude bakstenen gevel met leien dak"),
  [`${DG}/scheuren-herstellen`]: px(7794439, "Scheur in een witte gepleisterde muur"),
  [`${DG}/voegwerk-herstellen-vernieuwen`]: px(17766225, "Metselwerk met voegen van dichtbij"),
  [`${DG}/gevel-schilderen`]: px(10530185, "Geschilderde gevel met balkons"),
  [`${DG}/loodwerk-vervangen`]: px(13592507, "Dakkapel in een oud dak met aansluitingen"),
  [`${S}/balkononderhoud`]: px(16291604, "Balkons aan een woongebouw"),
  [`${S}/balkononderhoud/controle-en-onderhoud-van-waterdichting`]: px(16291604, "Balkons aan een woongebouw"),
  [`${S}/balkononderhoud/kitwerk-vervangen`]: px(6124242, "Vakman brengt kit aan langs een kozijn"),
  [`${S}/badkamer-keuken-toilet-onderhoud-bkt`]: px(8082194, "Moderne badkamer met glazen douchewand"),
  [`${S}/badkamer-keuken-toilet-onderhoud-bkt/voeg-en-kitwerk-vervangen`]: px(11701114, "Badkamer met tegelwerk, douche en wastafelmeubel"),
  [`${S}/badkamer-keuken-toilet-onderhoud-bkt/schimmelreiniging-en-ventilatie`]: px(2463332, "Donkere schimmel en vochtplekken op een muur"),
  [`${S}/badkamer-keuken-toilet-onderhoud-bkt/tegelwerk-herstellen-vervangen`]: px(9690090, "Tegelzetters aan het werk"),
  [`${S}/badkamer-keuken-toilet-onderhoud-bkt/sanitair-en-meubels-vervangen`]: px(6430748, "Toilet en badmeubel in een moderne badkamer"),
  [`${S}/interieur`]: px(6474471, "Schilder rolt een binnenmuur tijdens een renovatie"),
  [`${S}/interieur/schilderwerk-wanden-en-plafonds`]: px(1669754, "Verfroller zet witte verf op een muur"),
  [`${S}/interieur/vloeren-vervangen`]: px(4263067, "Vakman legt een laminaatvloer"),
  [`${S}/interieur/deuren-vervangen`]: px(965878, "Witte binnendeur met stalen deurkruk"),
  [`${S}/interieur/trapleuningen-vervangen`]: px(17596557, "Houten trap met witte leuning in een hal"),
  [`${S}/interieur/hang-en-sluitwerk-vervangen`]: px(279810, "Deurslot met meerpuntsluiting en kruk"),
  [`${S}/kozijnen`]: px(2910238, "Houten raam met luiken in een oude gevel"),
  [`${S}/kozijnen/houtrotherstel`]: px(5038627, "Afbladderende verf op oud hout"),
  [`${S}/kozijnen/deuren-en-kozijnen-vervangen`]: px(8650104, "Bakstenen woning met rode voordeur en witte kozijnen"),
  [`${S}/kozijnen/glas-vervangen`]: px(2972114, "Gevel met nieuwe ramen"),

  // Schade & herstel
  [H]: px(5691606, "Vakman herstelt een wand met een plamuurmes"),
  [`${H}/vochtbestrijding`]: px(14990894, "Muur met vochtvlekken en afbladderend pleister"),
  [`${H}/lekkages-vochtproblemen`]: px(7597726, "Aangetast oppervlak met vocht- en schimmelvlekken"),
  [`${H}/brandschade`]: px(11688878, "Vlammen bij een brand in een gebouw"),
  [`${H}/storm-en-natuurschade`]: px(4170448, "Woningen met beschadigde daken na een storm"),
  [`${H}/balkon-en-gevelschade`]: px(10530185, "Gevel met balkons"),
  [`${H}/interieur-en-afbouwschade`]: px(5691606, "Vakman herstelt een wand met een plamuurmes"),

  // Werkgebied
  "/werkgebied/middelburg": px(29308643, "Historische straat met bakstenen gevels"),
  "/werkgebied/vlissingen": px(12204177, "Containerschip op de Westerschelde bij Vlissingen"),
  "/werkgebied/goes": px(37355063, "Nederlandse woonstraat met bakstenen huizen"),
  "/werkgebied/veere-domburg": px(10275835, "Watertoren en duinen bij Domburg"),
  "/werkgebied/zierikzee": px(35053780, "Oosterscheldekering bij Schouwen-Duiveland"),
  "/werkgebied/bergen-op-zoom": px(16075970, "Bakstenen gevels met voordeuren aan de straat"),
  "/werkgebied/amsterdam": px(34221321, "Amsterdamse grachtenpanden"),

  // Kenniscentrum
  [KC]: px(1029243, "Gereedschap van de vakman op een houten werkbank"),
  [`${KC}/vochtige-muren-oorzaken-en-oplossingen`]: px(14990894, "Muur met vochtvlekken en afbladderend pleister"),
  [`${KC}/sausklaar-vs-behangklaar-stucwerk`]: px(1669754, "Verfroller zet witte verf op een muur"),
  [`${KC}/hoe-lang-moet-stucwerk-drogen`]: px(5691637, "Spaan strijkt verse witte pleister glad op een wand"),
  [`${KC}/schimmel-in-de-badkamer-blijvend-oplossen`]: px(2463332, "Donkere schimmel en vochtplekken op een muur"),
  [`${KC}/zout-en-wind-gevelonderhoud-zeeuwse-kust`]: px(10275835, "Duinen en kust bij Domburg op Walcheren"),
  [`${KC}/vergunningvrij-dakkapel-plaatsen-regels`]: px(221525, "Pannendak met dakkapellen"),
  [`${KC}/wat-kost-een-badkamerrenovatie`]: px(11701114, "Badkamer met tegelwerk, douche en wastafelmeubel"),
  [`${KC}/scheuren-in-de-gevel-wanneer-ernstig`]: px(7794439, "Scheur in een witte gepleisterde muur"),
  [`${KC}/buitengevelisolatie-voor-en-nadelen`]: px(11435856, "Strakke witte gevel van een gerenoveerde woning"),
  [`${KC}/kitwerk-vervangen-wanneer-en-waarom`]: px(6124242, "Vakman brengt kit aan langs een kozijn"),
};

/** Foto bij een pagina; valt terug op de dichtstbijzijnde bovenliggende pagina. */
export function imageFor(path: string): StockImage | null {
  let p = path;
  while (p && p !== "/") {
    if (byPath[p]) return byPath[p];
    p = p.slice(0, p.lastIndexOf("/"));
  }
  return null;
}
