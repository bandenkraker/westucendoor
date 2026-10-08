# Structured data (JSON-LD) en design system

## JSON-LD per paginatype

Alle schema's worden gegenereerd in `src/lib/schema.ts`. NAP komt uit `src/lib/site.ts`, zodat site, footer en schema altijd gelijk zijn.

| Paginatype | Schema's |
|---|---|
| Alle pagina's (layout) | `HomeAndConstructionBusiness` + `GeneralContractor` (NAP, `areaServed`, `sameAs` Facebook/Instagram, `foundingDate: 1969`, slogan) en `Organization` (met `ContactPoint`) |
| Alle pagina's behalve home | `BreadcrumbList` (via de broodkruimels) |
| Dienstpagina's (`/stucwerk`, `/expertises/...`, `/zakelijk`) | `Service` (provider → business, `areaServed`) + `FAQPage` |
| Plaatspagina's (`/werkgebied/...`) | `Service` met `areaServed` = de plaats + `FAQPage` |
| Kennisbankartikelen | `Article` (headline, datum, author/publisher → Organization) |
| Home, FAQ-pagina | `FAQPage` |

**Bewust niet opgenomen:** `AggregateRating` / `Review`. Pas toevoegen met echte, verifieerbare reviews. Ook `geo` (coördinaten) en `openingHoursSpecification` ontbreken tot ze zijn aangeleverd.

Voorbeeld (business, ingekort):

```json
{
  "@context": "https://schema.org",
  "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
  "@id": "https://westucendoor.nl/#business",
  "name": "We Stucen Door",
  "telephone": "+31 6 41 00 71 53",
  "email": "westucendoor@outlook.com",
  "foundingDate": "1969",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Oosterscheldestraat 124",
    "postalCode": "4335 PL",
    "addressLocality": "Middelburg",
    "addressRegion": "Zeeland",
    "addressCountry": "NL"
  },
  "sameAs": ["https://www.facebook.com/Westucendoor", "https://www.instagram.com/Westucendoor"]
}
```

## Design system

**Concept:** "materiaal als merk": kalkpleister-textuur (inline SVG-ruis, < 1 kB), strakke vlakken, veel witruimte.

### Kleuren (`src/app/globals.css`, `:root`)

| Token | Waarde | Gebruik |
|---|---|---|
| `--kalk` | `#F5F2EC` | achtergrond |
| `--zand` | `#D9CBB3` | accentvlakken, lijnen |
| `--lei` | `#2B2F33` | tekst, donkere secties |
| `--zee` | `#1F4E6B` | links, iconen, stapnummers |
| `--oker` | `#C08A3E` | CTA-knoppen (met donkere tekst: contrast ≈ 5,7:1) |
| `--oker-text` | `#8A5A1C` | oker als tekstkleur op licht (AA) |

### Typografie

- Koppen: **Fraunces** (variabel, optische maat), via `next/font`: self-hosted, geen requests naar Google bij bezoekers
- Lopende tekst: **Inter**
- Vloeiende schaal met `clamp()` (`--fs-0` t/m `--fs-5`)

### Componenten (`src/components`)

| Component | Functie |
|---|---|
| `Header` | sticky header, megamenu (klik/toets, Esc sluit), mobiel menu |
| `MobileBar` | sticky onderbalk mobiel (Bel/WhatsApp/Offerte) + zwevende WhatsApp-knop desktop |
| `ServiceTemplate` | dienstpagina-template: intro, signalen, stappen, materialen, doorlooptijd, kostenfactoren, voor/na, FAQ, gerelateerd, CTA |
| `QuoteForm` | 6-staps offerteformulier met foto-upload, honeypot en AVG-toestemming |
| `BeforeAfter` | toegankelijke voor/na-schuifregelaar (range-input, toetsenbord) |
| `Timeline`, `WorkSteps` | tijdlijn 1969–1989–2020, geanimeerde werkwijze |
| `RevealObserver` | zachte scroll-reveals; uit bij `prefers-reduced-motion` en zonder JS |
| `MapEmbed` | Google Maps pas na klik (geen cookies vooraf, beter voor LCP) |
| `SearchBox` | zoekfunctie op de 404-pagina |
| `CookieBanner` | verschijnt alleen als `NEXT_PUBLIC_GA_ID` is gezet |

### Toegankelijkheid (WCAG 2.2 AA)

Skip-link, zichtbare focus (3 px oker), knoppen ≥ 44 px, `aria-expanded` op menu's, semantische landmarks, één H1 per pagina, labels op alle formuliervelden, `prefers-reduced-motion` gerespecteerd, contrast gecontroleerd.

### Content beheren

Alle teksten staan in `src/content/`:
- `services*.ts`: diensten (incl. meta title/description)
- `locations.ts`: plaatspagina's
- `articles/*.ts`: kennisbank (eenvoudige markdown)
- `pages.ts`: over-ons en juridische pagina's
- `faqs.ts`: FAQ's

Overzicht van alle titles en descriptions: `meta-overzicht.md`.
