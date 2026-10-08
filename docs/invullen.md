# Aan te leveren door de klant ([INVULLEN] / [CHECK])

Alles wat hieronder staat, is op de site zichtbaar gemarkeerd met een geel/oranje label `[INVULLEN: …]`. Er is niets verzonnen. Pas na aanlevering vervangen.

## Bedrijfsgegevens — `src/lib/site.ts`

| Veld | Waar zichtbaar | Status |
|---|---|---|
| KvK-nummer (`kvk`) | footer, contact, privacy | [INVULLEN] |
| Btw-nummer (`btw`) | footer, contact | [INVULLEN] |
| Openingstijden (`openingHours`) | footer, contact | [INVULLEN] |
| Statutaire naam (`legalName`) | privacy | [INVULLEN] |
| Link naar Google-reviews (`googleReviewsUrl`) | homepage reviews | [INVULLEN] |
| Belofte "binnen 1 werkdag reactie" (`responsePromise`) | formulier, CTA's, werkwijze | [CHECK] haalbaar? |

## Vertrouwen en garanties

- Certificeringen en keurmerken (bijv. VCA, brancheorganisatie) — `/zakelijk`, eventueel footer
- Garantietermijnen per soort werk — `/over-ons/werkwijze`, homepage-FAQ, algemene voorwaarden
- Afgesproken reactietijden voor zakelijke klanten — `/zakelijk`
- Verzekeringen (aansprakelijkheid/CAR) — `/zakelijk`
- Beleid voorrijkosten — FAQ op `/werkgebied/middelburg`
- MVO: opleiding, leerlingen, veiligheid — `/over-ons/mvo`

## Reviews (alleen echte!)

- Echte reviews met naam/initialen, plaats, type werk en datum → homepage en `/over-ons/referenties`
- Zakelijke referenties (met toestemming) → `/over-ons/referenties`
- **Pas als er echte, verifieerbare reviews zijn** mag er `AggregateRating` in de schema-markup. Nu bewust weggelaten.
- De oude sterrenwidget (3,1 uit 60 stemmen) is niet overgenomen.

## Beeld

Alle plaatshouders beschrijven exact welke opname nodig is.

| Plek | Gewenste opname |
|---|---|
| Hero homepage | 6–10 s stille videoloop (MP4/WebM, < 3 MB): spaan trekt verse kalkpleister strak over een muur, zijlicht. Plus een stilstaand frame als poster (WebP). |
| Over ons | Teamfoto/eigenaar op een werkplek, natuurlijk licht, geen stockfoto |
| Voor/na per dienst (12×) | Zie `/nieuws/projecten`: per project vóór en na vanaf exact hetzelfde standpunt, bij daglicht, ≥ 2000 px breed |

Lever JPG's aan; Next.js (`next/image`) zet ze automatisch om naar AVIF/WebP met srcset en lazy loading. Geef elke foto een beschrijvende alt-tekst (plaats + werk, bijv. "Badkamer met inloopdouche in Middelburg na renovatie").

## Juridisch

- Privacyverklaring: bewaartermijn offerteaanvragen, naam e-maildienst, datum → `src/content/pages.ts` [CHECK door jurist]
- Algemene voorwaarden: volledige tekst (of verwijzing naar branchevoorwaarden) → `src/content/pages.ts`

## Techniek

| Variabele | Doel |
|---|---|
| `RESEND_API_KEY` | Verzenden van het offerteformulier (zonder sleutel geeft het formulier een nette foutmelding met WhatsApp/e-mail als alternatief) |
| `OFFERTE_FROM` | Geverifieerd afzenderadres, bijv. `Website <offerte@westucendoor.nl>` |
| `OFFERTE_TO` | Ontvanger (standaard westucendoor@outlook.com) |
| `NEXT_PUBLIC_GA_ID` | Optioneel. Alleen als dit is ingesteld verschijnt de cookiebanner en laadt analytics pas na toestemming. |
