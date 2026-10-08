# We Stucen Door — westucendoor.nl

Website voor **We Stucen Door**: stukadoor en stuc-, vocht- en badkamerspecialist in Zeeland, West-Brabant en de regio Amsterdam. Familiebedrijf sinds 1969.

Gebouwd met Next.js 16 (App Router), TypeScript en eigen CSS. Geen CMS en geen externe UI-libraries. Alle 89 pagina's worden statisch gegenereerd.

## Starten

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # productiebuild
npm start
```

## Wat zit erin

- 89 pagina's: home, stucwerk, 52 expertisepagina's (alle bestaande URL's behouden), zakelijk, 7 plaatspagina's, 10 kennisbankartikelen (900–1.400 woorden), over ons (5), FAQ, projecten, contact, offerte, privacy, cookies, voorwaarden, 404 met zoekfunctie
- SEO: unieke title (≤ 60) en description (140–155) per pagina, canonical, Open Graph/Twitter, XML-sitemap, robots.txt, JSON-LD (business, Service, FAQPage, BreadcrumbList, Article, Organization)
- Conversie: offerteformulier in 6 stappen met foto-upload, sticky mobiele balk, zwevende WhatsApp-knop, CTA's op elke pagina
- AVG: geen tracking standaard, Google Maps pas na klik, cookiebanner alleen als analytics is ingesteld, toestemmingsvinkje in het formulier

## Documentatie (`docs/`)

| Bestand | Inhoud |
|---|---|
| [sitemap-en-redirects.md](docs/sitemap-en-redirects.md) | sitemap en 301-redirectplan |
| [meta-overzicht.md](docs/meta-overzicht.md) | H1, title en description van elke pagina |
| [schema-en-design.md](docs/schema-en-design.md) | JSON-LD per paginatype, design system, componenten |
| [invullen.md](docs/invullen.md) | alles wat de klant nog moet aanleveren |
| [lancering.md](docs/lancering.md) | lanceringschecklist en advies voor het Google Bedrijfsprofiel |

## Omgevingsvariabelen

Zie `.env.example`. Zonder `RESEND_API_KEY` werkt de site volledig; alleen het formulier toont dan een melding met WhatsApp en e-mail als alternatief.
