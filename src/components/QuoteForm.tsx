"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

const workTypes = [
  "Stucwerk binnen",
  "Buitenstucwerk / gevel",
  "Vochtbestrijding / schimmel",
  "Badkamer, keuken of toilet",
  "Lekkage of schadeherstel",
  "Onderhoud (dak, gevel, kozijnen)",
  "Verbouw / uitbreiding",
  "Iets anders",
];

const buildingTypes = [
  "Tussenwoning / hoekwoning",
  "Vrijstaande woning",
  "Appartement",
  "Jaren-30-woning",
  "Monument / grachtenpand",
  "Bedrijfspand",
  "VvE / complex",
];

const steps = ["Werk", "Pand", "Locatie", "Omschrijving", "Foto's", "Contact"];
const MAX_FILES = 5;
const MAX_MB = 8;

type Status = "idle" | "sending" | "ok" | "error";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const liveRef = useRef<HTMLParagraphElement>(null);

  const validateStep = () => {
    const form = formRef.current;
    if (!form) return false;
    const fieldset = form.querySelector<HTMLFieldSetElement>(
      `fieldset[data-step="${step}"]`,
    );
    if (!fieldset) return true;
    const fields = Array.from(
      fieldset.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        "input, textarea, select",
      ),
    );
    for (const f of fields) {
      if (!f.checkValidity()) {
        f.reportValidity();
        return false;
      }
    }
    return true;
  };

  const go = (dir: 1 | -1) => {
    if (dir === 1 && !validateStep()) return;
    setStep((s) => Math.min(steps.length - 1, Math.max(0, s + dir)));
    requestAnimationFrame(() => {
      formRef.current
        ?.querySelector<HTMLElement>(`fieldset[data-step] legend`)
        ?.focus();
    });
  };

  const onFiles = (list: FileList | null) => {
    if (!list) return;
    const picked = Array.from(list)
      .filter((f) => f.type.startsWith("image/") && f.size <= MAX_MB * 1024 * 1024)
      .slice(0, MAX_FILES);
    setFiles(picked);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStep()) return;
    const data = new FormData(e.currentTarget);
    data.delete("fotos");
    files.forEach((f) => data.append("fotos", f));
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/offerte", { method: "POST", body: data });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Versturen is niet gelukt.");
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Versturen is niet gelukt.");
    }
  };

  if (status === "ok") {
    return (
      <div className="form-done" role="status">
        <Icon name="check" size={40} />
        <h3>Bedankt, je aanvraag is binnen.</h3>
        <p>
          We nemen {site.responsePromise.replace("reactie", "contact met je op")}.
          Haast? Stuur ons direct een{" "}
          <a href={site.whatsapp} target="_blank" rel="noopener">
            WhatsApp-bericht
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className={`quote-form${compact ? " compact" : ""}`}
      onSubmit={onSubmit}
      noValidate={false}
      encType="multipart/form-data"
    >
      <ol className="q-progress" aria-label="Stappen">
        {steps.map((s, i) => (
          <li
            key={s}
            className={i === step ? "cur" : i < step ? "done" : undefined}
            aria-current={i === step ? "step" : undefined}
          >
            <span>{i + 1}</span>
            <em>{s}</em>
          </li>
        ))}
      </ol>
      <p className="sr-only" aria-live="polite" ref={liveRef}>
        Stap {step + 1} van {steps.length}: {steps[step]}
      </p>

      {/* Honeypot tegen spam */}
      <div className="hp" aria-hidden="true">
        <label>
          Laat dit veld leeg
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <fieldset data-step="0" hidden={step !== 0}>
        <legend tabIndex={-1}>Wat voor werk wil je laten doen?</legend>
        <div className="choice-grid">
          {workTypes.map((w, i) => (
            <label key={w} className="choice">
              <input type="radio" name="werk" value={w} required={i === 0} />
              <span>{w}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset data-step="1" hidden={step !== 1}>
        <legend tabIndex={-1}>Om wat voor pand gaat het?</legend>
        <div className="choice-grid">
          {buildingTypes.map((b, i) => (
            <label key={b} className="choice">
              <input type="radio" name="pand" value={b} required={i === 0} />
              <span>{b}</span>
            </label>
          ))}
        </div>
        <label className="field-check">
          <input type="checkbox" name="zakelijk" value="ja" /> Ik vraag aan
          namens een bedrijf, VvE of corporatie
        </label>
      </fieldset>

      <fieldset data-step="2" hidden={step !== 2}>
        <legend tabIndex={-1}>Waar is het werk?</legend>
        <div className="field-row">
          <label className="field">
            <span>Postcode</span>
            <input
              name="postcode"
              autoComplete="postal-code"
              inputMode="text"
              pattern="[1-9][0-9]{3}\s?[A-Za-z]{2}"
              title="Bijvoorbeeld 4335 PL"
              required
            />
          </label>
          <label className="field">
            <span>Plaats</span>
            <input name="plaats" autoComplete="address-level2" required />
          </label>
        </div>
      </fieldset>

      <fieldset data-step="3" hidden={step !== 3}>
        <legend tabIndex={-1}>Vertel kort wat er speelt</legend>
        <label className="field">
          <span>Omschrijving</span>
          <textarea
            name="omschrijving"
            rows={5}
            minLength={10}
            required
            placeholder="Bijvoorbeeld: scheuren in het plafond van de woonkamer, ongeveer 25 m², graag sausklaar."
          />
        </label>
        <label className="field">
          <span>Wanneer wil je starten? (optioneel)</span>
          <select name="planning" defaultValue="">
            <option value="">Maakt niet uit</option>
            <option>Zo snel mogelijk</option>
            <option>Binnen 1–3 maanden</option>
            <option>Later dit jaar</option>
          </select>
        </label>
      </fieldset>

      <fieldset data-step="4" hidden={step !== 4}>
        <legend tabIndex={-1}>Foto&apos;s (optioneel, maar handig)</legend>
        <label className="upload">
          <Icon name="upload" size={28} />
          <span>
            Kies maximaal {MAX_FILES} foto&apos;s (max. {MAX_MB} MB per foto)
          </span>
          <input
            type="file"
            name="fotos"
            accept="image/*"
            multiple
            onChange={(e) => onFiles(e.target.files)}
          />
        </label>
        {files.length > 0 && (
          <ul className="file-list">
            {files.map((f) => (
              <li key={f.name}>
                <Icon name="check" size={16} /> {f.name}
              </li>
            ))}
          </ul>
        )}
        <p className="hint">
          Tip: maak één overzichtsfoto en één close-up van het probleem.
        </p>
      </fieldset>

      <fieldset data-step="5" hidden={step !== 5}>
        <legend tabIndex={-1}>Hoe bereiken we je?</legend>
        <label className="field">
          <span>Naam</span>
          <input name="naam" autoComplete="name" required />
        </label>
        <div className="field-row">
          <label className="field">
            <span>E-mail</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label className="field">
            <span>Telefoon</span>
            <input name="telefoon" type="tel" autoComplete="tel" required />
          </label>
        </div>
        <label className="field-check">
          <input type="checkbox" name="toestemming" value="ja" required />
          <span>
            Ik geef toestemming om mijn gegevens te gebruiken voor het
            beantwoorden van deze aanvraag. Zie de{" "}
            <Link href="/privacy">privacyverklaring</Link>.
          </span>
        </label>
      </fieldset>

      {status === "error" && (
        <p className="form-error" role="alert">
          {error} Je kunt ons ook mailen op{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> of{" "}
          <a href={site.whatsapp} target="_blank" rel="noopener">
            WhatsAppen
          </a>
          .
        </p>
      )}

      <div className="q-nav">
        {step > 0 && (
          <button type="button" className="btn btn-ghost" onClick={() => go(-1)}>
            Vorige
          </button>
        )}
        {step < steps.length - 1 ? (
          <button type="button" className="btn btn-primary" onClick={() => go(1)}>
            Volgende <Icon name="arrow" size={18} />
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Bezig met versturen…" : "Offerte aanvragen"}
          </button>
        )}
      </div>
      <p className="hint">
        Gratis en vrijblijvend · {site.responsePromise} · één vast aanspreekpunt
      </p>
    </form>
  );
}
