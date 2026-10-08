# Lanceringschecklist

## Vóór livegang

- [ ] Alle `[INVULLEN]`-items aangeleverd en verwerkt (zie `invullen.md`); zoek in de code op `INVULLEN` en `CHECK`
- [ ] Oude site gecrawld en ontbrekende URL's als 301 toegevoegd (zie `sitemap-en-redirects.md`)
- [ ] Env-variabelen gezet bij de host (`RESEND_API_KEY`, `OFFERTE_FROM`, `OFFERTE_TO`)
- [ ] Domein `westucendoor.nl` + `www` gekoppeld, HTTPS actief, `www` → apex (of andersom) als 301
- [ ] Testaanvraag via het offerteformulier, inclusief foto-upload, komt aan in de mailbox
- [ ] Privacyverklaring en algemene voorwaarden gecontroleerd
- [ ] `npm run build` zonder fouten

## Direct na livegang

- [ ] **Google Search Console**: domeineigenschap toevoegen (DNS-verificatie)
- [ ] **Sitemap indienen**: `https://westucendoor.nl/sitemap.xml`
- [ ] URL-inspectie op home, `/stucwerk`, `/expertises/schade-herstel/vochtbestrijding` en de plaatspagina's → "Indexering aanvragen"
- [ ] **Rich Results Test** (search.google.com/test/rich-results) op home, een dienstpagina (FAQPage, BreadcrumbList, Service) en een kennisbankartikel (Article)
- [ ] **Snelheidstest**: PageSpeed Insights mobiel + desktop voor home, een dienstpagina en een artikel. Doel: LCP < 2,5 s, CLS < 0,1, INP < 200 ms
- [ ] Bing Webmaster Tools: importeren vanuit Search Console
- [ ] Na 1–2 weken: Search Console → Indexering → Pagina's controleren op 404's en "niet geïndexeerd"

## Google Bedrijfsprofiel (advies)

**Naam:** We Stucen Door — exact gelijk aan site en schema. Geen zoekwoorden toevoegen aan de naam.

**NAP:** Oosterscheldestraat 124, 4335 PL Middelburg · +31 6 41 00 71 53 · westucendoor.nl — letterlijk identiek aan de footer.

**Categorieën:**
- Primair: *Stukadoor* (Plasterer)
- Aanvullend: *Aannemer* (General contractor), *Badkamerrenovatie* (Bathroom remodeler), *Waterdichtingsservice* (Waterproofing service), *Renovatiebedrijf* (Remodeler), *Klusjesman/onderhoudsdienst* indien beschikbaar

**Servicegebied:** Middelburg, Vlissingen, Goes, Veere, Domburg, Zierikzee, Bergen op Zoom, Amsterdam (max. 20 gebieden). Als er geen bezoekers op het adres worden ontvangen: adres verbergen en alleen servicegebied tonen.

**Diensten:** voeg ze toe met dezelfde namen als op de site (Stucwerk, Vochtbestrijding, Badkamerrenovatie, Gevelrenovatie, Buitenstucwerk, Kitwerk, Dakonderhoud, Lekkage herstellen, enz.), elk met een korte omschrijving en een link naar de dienstpagina.

**Foto's:** minimaal 10 echte projectfoto's bij start (voor/na, team, bus/materiaal, logo, omslagfoto), daarna elke maand 2–4 nieuwe. Geen stockfoto's.

**Berichten:** elke 2–4 weken een update: afgerond project met foto + link naar de dienstpagina of een kennisbankartikel.

**Reviews (proces):**
1. Bij oplevering mondeling vragen of de klant tevreden is.
2. Dezelfde dag een WhatsApp met de directe reviewlink (Bedrijfsprofiel → "Vraag om reviews").
3. Na 5 dagen één vriendelijke herinnering.
4. Op elke review reageren, ook op kritische, binnen 48 uur, met naam van de dienst en plaats.
5. Nooit reviews kopen, ruilen of belonen.

**Q&A:** plaats zelf de 5 meest gestelde vragen met antwoord (uit de FAQ op de site).
