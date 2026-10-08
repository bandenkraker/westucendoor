/**
 * Vaste bedrijfsgegevens. Alleen deze gegevens worden op de site en in de
 * schema-markup gebruikt. Velden met `null` zijn nog niet aangeleverd en
 * verschijnen op de site als [INVULLEN].
 */
export const site = {
  name: "We Stucen Door",
  legalName: null as string | null, // [INVULLEN] statutaire/handelsnaam zoals in KvK
  url: "https://westucendoor.nl",
  tagline: "Strak afgewerkt. Droog opgeleverd. Al drie generaties.",
  description:
    "Stuc-, vocht- en badkamerspecialist voor renovatie, onderhoud en herstel in Zeeland, West-Brabant en de regio Amsterdam. Familiebedrijf sinds 1969.",
  email: "westucendoor@outlook.com",
  phone: "+31641007153",
  phoneDisplay: "06 41 00 71 53",
  phoneIntl: "+31 6 41 00 71 53",
  whatsapp: "https://wa.me/31641007153",
  address: {
    street: "Oosterscheldestraat 124",
    postalCode: "4335 PL",
    city: "Middelburg",
    region: "Zeeland",
    country: "NL",
  },
  socials: {
    facebook: "https://www.facebook.com/Westucendoor",
    instagram: "https://www.instagram.com/Westucendoor",
  },
  foundingDate: "1969",
  areaServed: ["Zeeland", "West-Brabant", "Amsterdam"],
  // Onbekend – door de klant aan te leveren
  kvk: null as string | null,
  btw: null as string | null,
  openingHours: null as string | null,
  googleReviewsUrl: null as string | null,
  responsePromise: "binnen 1 werkdag reactie", // [CHECK] door klant te bevestigen
} as const;

export const mapsQuery = encodeURIComponent(
  `${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
);

export const absoluteUrl = (path = "/") =>
  `${site.url}${path === "/" ? "" : path}`;
