"use client";

import Link from "next/link";
import Script from "next/script";
import { useState, useSyncExternalStore } from "react";

/**
 * AVG: de banner verschijnt alleen als er tracking is geconfigureerd
 * (NEXT_PUBLIC_GA_ID). Zonder tracking: geen banner, geen cookies.
 * Analytics laadt pas na expliciete toestemming.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const KEY = "wsd-consent";

export function CookieBanner() {
  const stored = useSyncExternalStore(
    () => () => {},
    () => {
      try {
        return localStorage.getItem(KEY);
      } catch {
        return null;
      }
    },
    () => "ssr",
  );
  const [choice, setConsent] = useState<"yes" | "no" | null>(null);
  const consent = choice ?? (stored === "yes" || stored === "no" ? stored : null);

  if (!GA_ID || stored === "ssr") return null;

  const choose = (v: "yes" | "no") => {
    try {
      localStorage.setItem(KEY, v);
    } catch {}
    setConsent(v);
  };

  return (
    <>
      {consent === "yes" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {consent === null && (
        <div className="cookie-banner" role="dialog" aria-label="Cookie-toestemming">
          <p>
            We willen graag anoniem meten hoe de site wordt gebruikt. Dat doen we
            alleen met je toestemming. <Link href="/cookies">Meer info</Link>
          </p>
          <div>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => choose("no")}>
              Weigeren
            </button>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => choose("yes")}>
              Akkoord
            </button>
          </div>
        </div>
      )}
    </>
  );
}
