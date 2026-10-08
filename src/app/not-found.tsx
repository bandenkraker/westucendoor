import Link from "next/link";
import type { Metadata } from "next";
import { SearchBox } from "@/components/SearchBox";
import { allPages } from "@/lib/searchIndex";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const items = allPages();
  return (
    <section className="notfound plaster">
      <div className="container narrow">
        <p className="big" aria-hidden="true">404</p>
        <h1>Deze pagina is er niet (meer)</h1>
        <p className="lead">
          Misschien is de pagina verplaatst of is de link niet helemaal goed.
          Zoek hieronder of kies een van de populaire pagina&apos;s.
        </p>
        <SearchBox items={items} />
        <h2 className="h3" style={{ marginTop: "2.5rem" }}>
          Populaire pagina&apos;s
        </h2>
        <ul>
          <li><Link href="/stucwerk">Stucwerk</Link></li>
          <li><Link href="/expertises/schade-herstel/vochtbestrijding">Vochtbestrijding</Link></li>
          <li><Link href="/expertises/renovatie-verbouw/verduurzaming/badkamer-renovatie">Badkamerrenovatie</Link></li>
          <li><Link href="/expertises">Alle expertises</Link></li>
          <li><Link href="/nieuws/kenniscentrum">Kenniscentrum</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <Link href="/" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
          Naar de homepage
        </Link>
      </div>
    </section>
  );
}
