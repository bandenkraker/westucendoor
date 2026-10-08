import { services } from "@/content/services";
import { articles } from "@/content/articles";
import { locations } from "@/content/locations";
import { aboutPages } from "@/content/pages";

export const staticPages = [
  { path: "/", title: "Home" },
  { path: "/expertises", title: "Expertises" },
  { path: "/zakelijk", title: "Zakelijk: VvE's en corporaties" },
  { path: "/offerte-aanvragen", title: "Offerte aanvragen" },
  { path: "/contact", title: "Contact" },
  { path: "/werkgebied", title: "Werkgebied" },
  { path: "/over-ons", title: "Over ons" },
  { path: "/nieuws", title: "Nieuws" },
  { path: "/nieuws/kenniscentrum", title: "Kenniscentrum" },
  { path: "/nieuws/projecten", title: "Projecten" },
  { path: "/nieuws/veelgestelde-vragen", title: "Veelgestelde vragen" },
  { path: "/privacy", title: "Privacyverklaring" },
  { path: "/cookies", title: "Cookieverklaring" },
  { path: "/algemene-voorwaarden", title: "Algemene voorwaarden" },
];

export function allPages() {
  return [
    ...staticPages.map((p) => ({ ...p, text: "" })),
    ...services.map((s) => ({ path: s.path, title: s.name, text: `${s.h1} ${s.short}` })),
    ...articles.map((a) => ({ path: `/nieuws/kenniscentrum/${a.slug}`, title: a.title, text: a.excerpt })),
    ...locations.map((l) => ({ path: `/werkgebied/${l.slug}`, title: `Stukadoor ${l.name}`, text: l.h1 })),
    ...aboutPages.map((p) => ({ path: `/over-ons/${p.slug}`, title: p.name, text: p.lead })),
  ];
}
