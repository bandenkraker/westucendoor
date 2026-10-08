import { site, absoluteUrl } from "./site";
import type { Faq } from "@/content/types";

const businessId = `${site.url}/#business`;
const orgId = `${site.url}/#organization`;

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": businessId,
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phoneIntl,
    image: absoluteUrl("/og"),
    logo: absoluteUrl("/icon.svg"),
    description: site.description,
    slogan: site.tagline,
    foundingDate: site.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Zeeland" },
      { "@type": "AdministrativeArea", name: "West-Brabant" },
      { "@type": "City", name: "Amsterdam" },
      { "@type": "City", name: "Middelburg" },
      { "@type": "City", name: "Vlissingen" },
      { "@type": "City", name: "Goes" },
      { "@type": "City", name: "Veere" },
      { "@type": "City", name: "Zierikzee" },
      { "@type": "City", name: "Bergen op Zoom" },
    ],
    sameAs: [site.socials.facebook, site.socials.instagram],
    parentOrganization: { "@id": orgId },
    // Geen AggregateRating: alleen toevoegen met echte, verifieerbare reviews.
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/icon.svg"),
    email: site.email,
    telephone: site.phoneIntl,
    foundingDate: site.foundingDate,
    sameAs: [site.socials.facebook, site.socials.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneIntl,
      email: site.email,
      contactType: "customer service",
      areaServed: "NL",
      availableLanguage: ["nl"],
    },
  };
}

export function serviceSchema(s: {
  name: string;
  description: string;
  path: string;
  area?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    url: absoluteUrl(s.path),
    serviceType: s.name,
    provider: { "@id": businessId },
    areaServed: s.area
      ? { "@type": "Place", name: s.area }
      : site.areaServed.map((name) => ({ "@type": "Place", name })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function articleSchema(a: {
  title: string;
  description: string;
  path: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    inLanguage: "nl-NL",
    mainEntityOfPage: absoluteUrl(a.path),
    image: absoluteUrl("/og"),
    author: { "@id": orgId },
    publisher: { "@id": orgId },
  };
}
