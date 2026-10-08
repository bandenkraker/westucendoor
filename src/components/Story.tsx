import Link from "next/link";
import { Icon } from "./Icon";
import { locations } from "@/content/locations";

export const timeline = [
  {
    year: "1969",
    gen: "Eerste generatie",
    title: "Keukens in Bergen op Zoom",
    text: "De grootvader begint in Bergen op Zoom met het plaatsen van keukens van Bruynzeel en Keller. Het bedrijf groeit door tot aannemer en projectontwikkelaar.",
  },
  {
    year: "1989",
    gen: "Tweede generatie",
    title: "Van renovatie naar stucwerk",
    text: "De volgende generatie start een eigen onderneming in uitzendwerk, vastgoed en renovatie. Die groeit uit tot aannemerij met verbouw, renovatie en later stukadoorswerk als specialisatie.",
  },
  {
    year: "2020",
    gen: "Derde generatie",
    title: "BKT, onderhoud en afdichting",
    text: "De huidige generatie richt zich op badkamer-, keuken- en toiletrenovaties, onderhoud en bouwafdichtingen. Het werkgebied groeit van Zeeland en West-Brabant naar onder andere Amsterdam.",
  },
];

export function Timeline() {
  return (
    <ol className="timeline">
      {timeline.map((t, i) => (
        <li key={t.year} data-reveal style={{ ["--i" as string]: i }}>
          <span className="tl-year">{t.year}</span>
          <div className="tl-body">
            <p className="eyebrow">{t.gen}</p>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export const workSteps = [
  {
    t: "Contact",
    d: "Je belt, appt of vult het formulier in. Stuur gerust foto's mee, dan kunnen we direct meedenken.",
  },
  {
    t: "Opname",
    d: "We komen kijken, meten op en zoeken bij vocht en scheuren eerst de oorzaak. Niet alleen het symptoom.",
  },
  {
    t: "Heldere offerte",
    d: "Je krijgt een offerte per onderdeel, met materialen, planning en wat er niet in zit. Geen kleine lettertjes.",
  },
  {
    t: "Uitvoering",
    d: "Afdekken, uitvoeren, dagelijks opruimen. Je hebt één aanspreekpunt dat de planning bewaakt.",
  },
  {
    t: "Oplevering & nazorg",
    d: "Samen lopen we het werk na. Je krijgt droog- en onderhoudsadvies mee en we blijven bereikbaar.",
  },
];

export function WorkSteps() {
  return (
    <ol className="steps">
      {workSteps.map((s, i) => (
        <li key={s.t} data-reveal style={{ ["--i" as string]: i }}>
          <span className="step-num">{i + 1}</span>
          <h3>{s.t}</h3>
          <p>{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

/** Schematische (niet op schaal) kaart van het werkgebied */
const pins: Record<string, { x: number; y: number }> = {
  amsterdam: { x: 372, y: 62 },
  "bergen-op-zoom": { x: 300, y: 300 },
  zierikzee: { x: 178, y: 262 },
  goes: { x: 186, y: 318 },
  "veere-domburg": { x: 92, y: 300 },
  middelburg: { x: 112, y: 340 },
  vlissingen: { x: 98, y: 372 },
};

export function WerkgebiedMap() {
  return (
    <div className="wg-map">
      <svg viewBox="0 0 460 420" role="img" aria-labelledby="wg-title wg-desc">
        <title id="wg-title">Werkgebied We Stucen Door</title>
        <desc id="wg-desc">
          Schematische kaart met Zeeland en West-Brabant in het zuidwesten en de
          regio Amsterdam in het noorden.
        </desc>
        <defs>
          <pattern id="sea" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 5h10" stroke="currentColor" strokeOpacity=".08" />
          </pattern>
        </defs>
        <rect width="460" height="420" fill="url(#sea)" />
        {/* Zeeland & West-Brabant */}
        <path
          className="wg-land"
          d="M60 280c20-30 70-40 110-30 30-20 70-15 95 0 30 0 60 5 90 20 20 20 30 50 25 85-30 25-90 35-150 30-60 10-110 20-160 0-25-25-30-70-10-105z"
        />
        <path className="wg-water" d="M70 352c50-6 110-8 175-28M90 300c40 0 70-8 110-16" />
        {/* Regio Amsterdam */}
        <path
          className="wg-land"
          d="M320 30c30-10 75-5 100 20 10 25 0 55-20 70-35 10-75 5-95-15-15-25-5-60 15-75z"
        />
        <path className="wg-route" d="M300 300C330 220 340 150 372 62" />
        {locations.map((l) => {
          const p = pins[l.slug];
          if (!p) return null;
          return (
            <a key={l.slug} href={`/werkgebied/${l.slug}`} className="wg-pin">
              <circle cx={p.x} cy={p.y} r={l.slug === "middelburg" ? 8 : 6} />
              <text x={p.x + 11} y={p.y + 4}>
                {l.name}
              </text>
            </a>
          );
        })}
      </svg>
      <ul className="wg-list">
        {locations.map((l) => (
          <li key={l.slug}>
            <Link href={`/werkgebied/${l.slug}`}>
              <Icon name="pin" size={16} /> Stukadoor {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
