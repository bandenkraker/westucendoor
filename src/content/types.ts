import type { IconName } from "@/components/Icon";

export type Faq = { q: string; a: string };
export type Step = { t: string; d: string };

export type Service = {
  /** Volledige URL, bijv. "/expertises/schade-herstel/vochtbestrijding" */
  path: string;
  /** Korte naam voor navigatie en kaarten */
  name: string;
  /** Eén zin voor kaarten en overzichten */
  short: string;
  h1: string;
  /** Meta title zonder merknaam (die komt er via de template achter) */
  title: string;
  /** Meta description, 140–155 tekens */
  description: string;
  icon?: IconName;
  intro: string[];
  signals?: string[];
  steps?: Step[];
  materials?: string[];
  sections?: { h2: string; body: string[] }[];
  duration?: string;
  costFactors?: string[];
  faqs: Faq[];
  /** Paden naar verwante diensten */
  related: string[];
  /** Slugs van kennisbankartikelen */
  articles: string[];
  /** Beschrijving van de gewenste voor/na-opname */
  project?: { title: string; before: string; after: string };
};

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string;
  excerpt: string;
  /** Eenvoudige markdown: ##, ###, -, **vet**, [link](/pad) */
  body: string;
  related: string[];
};

export type Location = {
  slug: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: string[];
  sections: { h2: string; body: string[] }[];
  neighborhoods: string[];
  services: string[];
  faqs: Faq[];
};
