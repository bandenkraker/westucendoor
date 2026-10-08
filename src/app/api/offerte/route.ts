import { site } from "@/lib/site";

/**
 * Ontvangt offerteaanvragen en mailt ze via Resend (https://resend.com).
 * Zet in de hostingomgeving:
 *   RESEND_API_KEY   – API-sleutel
 *   OFFERTE_FROM     – geverifieerd afzenderadres, bijv. "Website <offerte@westucendoor.nl>"
 *   OFFERTE_TO       – ontvanger (standaard het algemene e-mailadres)
 */
const MAX_FILES = 5;
const MAX_BYTES = 8 * 1024 * 1024;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return Response.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  // Honeypot: bots vullen dit veld in
  if (String(form.get("website") ?? "").trim()) {
    return Response.json({ ok: true });
  }

  const get = (k: string) => String(form.get(k) ?? "").trim().slice(0, 4000);
  const fields = {
    werk: get("werk"),
    pand: get("pand"),
    zakelijk: get("zakelijk") === "ja" ? "Ja" : "Nee",
    postcode: get("postcode"),
    plaats: get("plaats"),
    omschrijving: get("omschrijving"),
    planning: get("planning") || "Maakt niet uit",
    naam: get("naam"),
    email: get("email"),
    telefoon: get("telefoon"),
  };

  if (get("toestemming") !== "ja") {
    return Response.json({ error: "Toestemming voor gegevensverwerking ontbreekt." }, { status: 400 });
  }
  if (!fields.naam || !fields.omschrijving || !/^\S+@\S+\.\S+$/.test(fields.email)) {
    return Response.json({ error: "Vul naam, e-mail en omschrijving in." }, { status: 400 });
  }

  const photos = form
    .getAll("fotos")
    .filter((f): f is File => f instanceof File && f.size > 0)
    .filter((f) => f.type.startsWith("image/") && f.size <= MAX_BYTES)
    .slice(0, MAX_FILES);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[offerte] RESEND_API_KEY ontbreekt – aanvraag niet verzonden", fields.naam);
    return Response.json(
      { error: "Het formulier is nog niet gekoppeld aan e-mail." },
      { status: 503 },
    );
  }

  const attachments = await Promise.all(
    photos.map(async (f) => ({
      filename: f.name,
      content: Buffer.from(await f.arrayBuffer()).toString("base64"),
    })),
  );

  const rows = Object.entries(fields)
    .map(([k, v]) => `<tr><th align="left">${esc(k)}</th><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.OFFERTE_FROM ?? "Website <onboarding@resend.dev>",
      to: [process.env.OFFERTE_TO ?? site.email],
      reply_to: fields.email,
      subject: `Offerteaanvraag: ${fields.werk || "algemeen"} – ${fields.plaats}`,
      html: `<h2>Nieuwe offerteaanvraag via ${site.url}</h2><table cellpadding="6">${rows}</table><p>${attachments.length} foto('s) bijgevoegd.</p>`,
      attachments,
    }),
  });

  if (!res.ok) {
    console.error("[offerte] Resend-fout", res.status, await res.text());
    return Response.json({ error: "Versturen is niet gelukt." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
