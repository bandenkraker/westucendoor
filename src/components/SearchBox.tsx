"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "./Icon";

export type SearchItem = { title: string; path: string; text?: string };

const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function SearchBox({ items }: { items: SearchItem[] }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const terms = norm(q).split(/\s+/).filter((t) => t.length > 1);
    if (!terms.length) return [];
    return items
      .map((it) => {
        const hay = norm(`${it.title} ${it.text ?? ""}`);
        const score = terms.reduce(
          (s, t) => s + (norm(it.title).includes(t) ? 3 : hay.includes(t) ? 1 : 0),
          0,
        );
        return { it, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.it);
  }, [q, items]);

  return (
    <div className="search" role="search">
      <label htmlFor="site-search" className="sr-only">
        Zoek op de website
      </label>
      <div className="search-field">
        <Icon name="search" size={20} />
        <input
          id="site-search"
          type="search"
          placeholder="Zoek bijvoorbeeld op ‘schimmel’ of ‘gevel’"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoComplete="off"
        />
      </div>
      <p className="sr-only" aria-live="polite">
        {q ? `${results.length} resultaten` : ""}
      </p>
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((r) => (
            <li key={r.path}>
              <Link href={r.path}>{r.title}</Link>
            </li>
          ))}
        </ul>
      )}
      {q.length > 1 && results.length === 0 && (
        <p className="hint">Niets gevonden. Probeer een ander woord of bel ons.</p>
      )}
    </div>
  );
}
