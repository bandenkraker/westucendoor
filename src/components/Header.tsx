"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { megaMenu, aboutMenu, newsMenu } from "@/content/nav";
import { site } from "@/lib/site";

type Panel = "expertises" | "over" | "nieuws" | null;

export function Header() {
  const [open, setOpen] = useState<Panel>(null);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // Sluit menu's bij navigatie
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setMobile(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const toggle = (p: Panel) => setOpen((cur) => (cur === p ? null : p));

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo-link" aria-label={`${site.name} – home`}>
          <Logo />
        </Link>

        <nav ref={navRef} aria-label="Hoofdmenu" className="main-nav">
          <ul className="nav-list">
            <li>
              <Link href="/stucwerk" className="nav-link">
                Stucwerk
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="nav-link"
                aria-expanded={open === "expertises"}
                aria-controls="mega-expertises"
                onClick={() => toggle("expertises")}
              >
                Expertises <Icon name="chevron" size={16} />
              </button>
              <div
                id="mega-expertises"
                className="mega"
                hidden={open !== "expertises"}
              >
                <div className="container mega-grid">
                  {megaMenu.map((col) => (
                    <div key={col.href}>
                      <Link href={col.href} className="mega-title">
                        {col.title} <Icon name="arrow" size={16} />
                      </Link>
                      <ul>
                        {col.links.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href}>{l.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="mega-aside">
                    <p className="eyebrow">Ons ambacht</p>
                    <p>
                      Stucwerk voor wanden, plafonds en gevels. Sausklaar,
                      behangklaar of sierpleister.
                    </p>
                    <Link href="/stucwerk" className="btn btn-primary btn-sm">
                      Naar stucwerk
                    </Link>
                    <Link href="/expertises" className="mega-all">
                      Alle expertises <Icon name="arrow" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href="/zakelijk" className="nav-link">
                Zakelijk
              </Link>
            </li>
            <li className="has-drop">
              <button
                type="button"
                className="nav-link"
                aria-expanded={open === "over"}
                aria-controls="drop-over"
                onClick={() => toggle("over")}
              >
                Over ons <Icon name="chevron" size={16} />
              </button>
              <ul id="drop-over" className="drop" hidden={open !== "over"}>
                {aboutMenu.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="has-drop">
              <button
                type="button"
                className="nav-link"
                aria-expanded={open === "nieuws"}
                aria-controls="drop-nieuws"
                onClick={() => toggle("nieuws")}
              >
                Kennis <Icon name="chevron" size={16} />
              </button>
              <ul id="drop-nieuws" className="drop" hidden={open !== "nieuws"}>
                <li>
                  <Link href="/nieuws">Nieuws</Link>
                </li>
                {newsMenu.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <a href={`tel:${site.phone}`} className="header-phone">
            <Icon name="phone" size={18} />
            <span>{site.phoneDisplay}</span>
          </a>
          <Link href="/offerte-aanvragen" className="btn btn-primary btn-sm">
            Gratis offerte
          </Link>
        </div>

        <button
          type="button"
          className="burger"
          aria-expanded={mobile}
          aria-controls="mobile-nav"
          onClick={() => setMobile((m) => !m)}
        >
          <Icon name={mobile ? "close" : "menu"} size={26} />
          <span className="sr-only">{mobile ? "Menu sluiten" : "Menu openen"}</span>
        </button>
      </div>

      <div id="mobile-nav" className="mobile-nav plaster" hidden={!mobile}>
        <nav aria-label="Mobiel menu" className="container">
          <Link href="/stucwerk" className="m-link">
            Stucwerk
          </Link>
          {megaMenu.map((col) => (
            <details key={col.href}>
              <summary>
                {col.title} <Icon name="chevron" size={18} />
              </summary>
              <ul>
                <li>
                  <Link href={col.href}>Overzicht {col.title.toLowerCase()}</Link>
                </li>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <Link href="/zakelijk" className="m-link">
            Zakelijk
          </Link>
          <details>
            <summary>
              Over ons <Icon name="chevron" size={18} />
            </summary>
            <ul>
              {aboutMenu.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.name}</Link>
                </li>
              ))}
            </ul>
          </details>
          <details>
            <summary>
              Kennis &amp; nieuws <Icon name="chevron" size={18} />
            </summary>
            <ul>
              <li>
                <Link href="/nieuws">Nieuws</Link>
              </li>
              {newsMenu.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.name}</Link>
                </li>
              ))}
            </ul>
          </details>
          <Link href="/werkgebied" className="m-link">
            Werkgebied
          </Link>
          <Link href="/contact" className="m-link">
            Contact
          </Link>
          <Link href="/offerte-aanvragen" className="btn btn-primary m-cta">
            Gratis offerte aanvragen
          </Link>
        </nav>
      </div>
    </header>
  );
}
