import Link from "next/link";
import { Fragment } from "react";

/** Inline: **vet** en [tekst](/pad) */
function inline(text: string) {
  const parts = text.split(
    /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\[(?:INVULLEN|CHECK)[^\]]*\])/g,
  );
  return parts.map((p, i) => {
    if (/^\[(INVULLEN|CHECK)/.test(p))
      return (
        <span key={i} className="todo">
          {p}
        </span>
      );
    if (p.startsWith("**") && p.endsWith("**"))
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    const m = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      return m[2].startsWith("/") ? (
        <Link key={i} href={m[2]}>
          {m[1]}
        </Link>
      ) : (
        <a key={i} href={m[2]} target="_blank" rel="noopener">
          {m[1]}
        </a>
      );
    }
    return <Fragment key={i}>{p}</Fragment>;
  });
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Minimale markdown-renderer voor kennisbank en tekstpagina's. */
export function Markdown({ source }: { source: string }) {
  const blocks = source.trim().split(/\n\s*\n/);
  return (
    <>
      {blocks.map((b, i) => {
        const block = b.trim();
        if (block.startsWith("### "))
          return <h3 key={i}>{inline(block.slice(4))}</h3>;
        if (block.startsWith("## ")) {
          const t = block.slice(3);
          return (
            <h2 key={i} id={slugify(t)}>
              {inline(t)}
            </h2>
          );
        }
        if (/^(- |\d+\. )/.test(block)) {
          const ordered = /^\d+\. /.test(block);
          const items = block
            .split("\n")
            .map((l) => l.replace(/^(- |\d+\. )/, "").trim())
            .filter(Boolean);
          const Tag = ordered ? "ol" : "ul";
          return (
            <Tag key={i}>
              {items.map((it, j) => (
                <li key={j}>{inline(it)}</li>
              ))}
            </Tag>
          );
        }
        if (block.startsWith("|")) {
          const rows = block
            .split("\n")
            .filter((l) => !/^\|\s*-/.test(l))
            .map((l) =>
              l
                .trim()
                .replace(/^\||\|$/g, "")
                .split("|")
                .map((c) => c.trim()),
            );
          const [head, ...body] = rows;
          return (
            <div key={i} className="table-wrap">
              <table>
                <thead>
                  <tr>
                    {head.map((c, j) => (
                      <th key={j} scope="col">
                        {inline(c)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((r, j) => (
                    <tr key={j}>
                      {r.map((c, k) =>
                        k === 0 ? (
                          <th key={k} scope="row">
                            {inline(c)}
                          </th>
                        ) : (
                          <td key={k}>{inline(c)}</td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        if (block.startsWith("> "))
          return (
            <aside key={i} className="callout">
              {inline(block.slice(2))}
            </aside>
          );
        return <p key={i}>{inline(block.replace(/\n/g, " "))}</p>;
      })}
    </>
  );
}

export function headings(source: string) {
  return source
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => ({ title: l.slice(3).trim(), id: slugify(l.slice(3).trim()) }));
}

export function wordCount(source: string) {
  return source.split(/\s+/).filter(Boolean).length;
}
