const R = "/expertises/renovatie-verbouw";
const S = "/expertises/service-onderhoud";
const H = "/expertises/schade-herstel";

export const megaMenu = [
  {
    title: "Renovatie & verbouw",
    href: R,
    links: [
      { name: "Woninguitbreiding", href: `${R}/woninguitbreiding` },
      { name: "Vergunningvrije dakkapel", href: `${R}/woninguitbreiding/vergunningvrije-dakkapel` },
      { name: "Aanbouw & uitbouw", href: `${R}/woninguitbreiding/vergunningvrije-aanbouw-uitbouw` },
      { name: "Verduurzaming", href: `${R}/verduurzaming` },
      { name: "Gevelrenovatie", href: `${R}/verduurzaming/gevelrenovatie` },
      { name: "Badkamerrenovatie", href: `${R}/verduurzaming/badkamer-renovatie` },
      { name: "Keukenrenovatie", href: `${R}/verduurzaming/keukenrenovatie` },
      { name: "Toiletrenovatie", href: `${R}/verduurzaming/toiletrenovatie` },
      { name: "Kelderrenovatie", href: `${R}/verduurzaming/kelderrenovatie` },
    ],
  },
  {
    title: "Service & onderhoud",
    href: S,
    links: [
      { name: "Dak- en gevelonderhoud", href: `${S}/dak-en-gevelonderhoud` },
      { name: "Balkononderhoud", href: `${S}/balkononderhoud` },
      { name: "Badkamer, keuken & toilet", href: `${S}/badkamer-keuken-toilet-onderhoud-bkt` },
      { name: "Interieur", href: `${S}/interieur` },
      { name: "Kozijnen", href: `${S}/kozijnen` },
    ],
  },
  {
    title: "Schade & herstel",
    href: H,
    links: [
      { name: "Vochtbestrijding", href: `${H}/vochtbestrijding` },
      { name: "Lekkages & vochtproblemen", href: `${H}/lekkages-vochtproblemen` },
      { name: "Brandschade", href: `${H}/brandschade` },
      { name: "Storm- en natuurschade", href: `${H}/storm-en-natuurschade` },
      { name: "Balkon- en gevelschade", href: `${H}/balkon-en-gevelschade` },
      { name: "Interieur- en afbouwschade", href: `${H}/interieur-en-afbouwschade` },
    ],
  },
];

export const aboutMenu = [
  { name: "Over ons", href: "/over-ons" },
  { name: "Oorsprong", href: "/over-ons/oorsprong" },
  { name: "Missie en visie", href: "/over-ons/missie-en-visie" },
  { name: "Werkwijze", href: "/over-ons/werkwijze" },
  { name: "Referenties", href: "/over-ons/referenties" },
  { name: "MVO", href: "/over-ons/mvo" },
];

export const newsMenu = [
  { name: "Kenniscentrum", href: "/nieuws/kenniscentrum" },
  { name: "Projecten", href: "/nieuws/projecten" },
  { name: "Veelgestelde vragen", href: "/nieuws/veelgestelde-vragen" },
];
