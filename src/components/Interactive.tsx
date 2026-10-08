"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

/**
 * Zachte scroll-reveals. Elementen met [data-reveal] worden pas verborgen als
 * JavaScript draait én de bezoeker geen voorkeur voor minder beweging heeft
 * (zie globals.css). Zo blijft alle inhoud zichtbaar zonder JS.
 */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"),
    );
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

export function BeforeAfter({
  title,
  before,
  after,
}: {
  title: string;
  before: string;
  after: string;
}) {
  const [pos, setPos] = useState(50);
  const id = useId();
  return (
    <figure className="ba" data-reveal>
      <div className="ba-stage" style={{ ["--pos" as string]: `${pos}%` }}>
        <div className="ba-layer ba-before" aria-hidden="true">
          <span className="ba-tag">Voor</span>
          <p>
            <span className="todo">[INVULLEN: foto vóór]</span>
            {before}
          </p>
        </div>
        <div className="ba-layer ba-after plaster" aria-hidden="true">
          <span className="ba-tag">Na</span>
          <p>
            <span className="todo">[INVULLEN: foto na]</span>
            {after}
          </p>
        </div>
        <div className="ba-handle" aria-hidden="true" />
        <label htmlFor={id} className="sr-only">
          Schuif tussen voor en na: {title}
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="ba-range"
        />
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  );
}

/** Google Maps pas laden na klik: geen cookies van derden vooraf, beter voor LCP. */
export function MapEmbed({ query, label }: { query: string; label: string }) {
  const [load, setLoad] = useState(false);
  return (
    <div className="map-embed plaster">
      {load ? (
        <iframe
          title={`Kaart: ${label}`}
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="map-consent">
          <p>
            <strong>{label}</strong>
          </p>
          <p>
            De kaart wordt geladen via Google Maps. Google kan daarbij cookies
            plaatsen.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => setLoad(true)}
          >
            Kaart laden
          </button>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${query}`}
            target="_blank"
            rel="noopener"
          >
            Of open in Google Maps
          </a>
        </div>
      )}
    </div>
  );
}
