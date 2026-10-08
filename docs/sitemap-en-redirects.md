# Sitemap en 301-redirectplan

## Uitgangspunt

Alle bestaande URL's van westucendoor.nl zijn **ongewijzigd behouden**. Het oude menu is op 8 oktober 2026 uitgelezen, en elke URL daaruit bestaat in de nieuwe site met eigen, unieke inhoud. Je hoeft voor die URL's dus niets te redirecten.

De XML-sitemap wordt automatisch gegenereerd: `https://westucendoor.nl/sitemap.xml` (89 URL's).

## Sitemap (informatiearchitectuur)

```
/                                   Home
/stucwerk                           NIEUW – kernambacht
/zakelijk                           NIEUW – VvE's, corporaties, beheerders
/offerte-aanvragen                  NIEUW – meerstappenformulier
/contact
/over-ons
  /oorsprong  /missie-en-visie  /werkwijze  /referenties  /mvo
/expertises
  /renovatie-verbouw
    /woninguitbreiding
      /vergunningvrije-dakkapel
      /vergunningvrije-aanbouw-uitbouw
    /verduurzaming
      /dakrenovatie
      /gevelrenovatie
        /buitengevelisolatie  /buiten-stucwerk  /gevelplint
      /kelderrenovatie  /badkamer-renovatie  /keukenrenovatie
      /toiletrenovatie  /interieurverbouw
  /service-onderhoud
    /dak-en-gevelonderhoud
      /inspectie-en-preventief-onderhoud-seizoen
      /dakpannen-en-nokvorsten-vervangen
      /schoorsteenrenovatie
      /dakgoten-reinigen
      /impregneren-coaten
      /gevelreiniging
      /scheuren-herstellen
      /voegwerk-herstellen-vernieuwen
      /gevel-schilderen
      /loodwerk-vervangen
    /balkononderhoud
      /controle-en-onderhoud-van-waterdichting
      /kitwerk-vervangen
    /badkamer-keuken-toilet-onderhoud-bkt
      /voeg-en-kitwerk-vervangen
      /schimmelreiniging-en-ventilatie
      /tegelwerk-herstellen-vervangen
      /sanitair-en-meubels-vervangen
    /interieur
      /schilderwerk-wanden-en-plafonds  /vloeren-vervangen  /deuren-vervangen
      /trapleuningen-vervangen  /hang-en-sluitwerk-vervangen
    /kozijnen
      /houtrotherstel  /deuren-en-kozijnen-vervangen  /glas-vervangen
  /schade-herstel
    /vochtbestrijding  /lekkages-vochtproblemen  /brandschade
    /storm-en-natuurschade  /balkon-en-gevelschade  /interieur-en-afbouwschade
/werkgebied                          NIEUW
  /middelburg  /vlissingen  /goes  /veere-domburg  /zierikzee
  /bergen-op-zoom  /amsterdam
/nieuws
  /veelgestelde-vragen
  /projecten
  /kenniscentrum
    /vochtige-muren-oorzaken-en-oplossingen
    /sausklaar-vs-behangklaar-stucwerk
    /hoe-lang-moet-stucwerk-drogen
    /schimmel-in-de-badkamer-blijvend-oplossen
    /zout-en-wind-gevelonderhoud-zeeuwse-kust
    /vergunningvrij-dakkapel-plaatsen-regels
    /wat-kost-een-badkamerrenovatie
    /scheuren-in-de-gevel-wanneer-ernstig
    /buitengevelisolatie-voor-en-nadelen
    /kitwerk-vervangen-wanneer-en-waarom
/privacy  /algemene-voorwaarden  /cookies   NIEUW
```

Alle `/expertises/...`-URL's staan onder hun ouderpagina (hub-and-spoke): expertise → subdienst → kennisbank → plaatspagina's. Elke pagina heeft broodkruimels (met BreadcrumbList-schema) en een blok "Gerelateerde diensten en kennis".

## 301-redirects

Ingesteld in `next.config.ts` (statuscode 301):

| Oud | Nieuw | Reden |
|---|---|---|
| `/home` | `/` | veelgebruikte alias van websitebouwers |
| `/offerte` | `/offerte-aanvragen` | korte variant |
| `/kenniscentrum/*` | `/nieuws/kenniscentrum/*` | kortere variant |
| `/veelgestelde-vragen` | `/nieuws/veelgestelde-vragen` | kortere variant |
| `/projecten` | `/nieuws/projecten` | kortere variant |

### Nog te doen vóór livegang

1. **Crawl de oude site volledig** (bijv. met Screaming Frog, gratis tot 500 URL's) en exporteer alle URL's met status 200, inclusief blogberichten, losse projectpagina's en afbeeldingen die extern gelinkt worden.
2. Vergelijk die lijst met de sitemap hierboven. Elke oude URL die niet bestaat, krijgt een 301 naar de inhoudelijk best passende nieuwe pagina. Voeg die toe aan `redirects()` in `next.config.ts`.
3. Kijk in Google Search Console (Prestaties → Pagina's) welke oude URL's verkeer kregen. Die hebben voorrang.
4. Controleer na livegang in Search Console → Indexering of er 404's opduiken, en vul aan.
