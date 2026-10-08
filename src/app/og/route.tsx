import { ImageResponse } from "next/og";

export const dynamic = "force-static";

/** Standaard Open Graph-afbeelding (1200×630) */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #F5F2EC 0%, #E8DFCF 60%, #D9CBB3 100%)",
          color: "#2B2F33",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ width: 88, height: 88, background: "#1F4E6B", borderRadius: 6, display: "flex", flexDirection: "column", justifyContent: "center", padding: 16, gap: 10 }}>
            <div style={{ width: 28, height: 6, background: "#C08A3E", borderRadius: 3 }} />
            <div style={{ width: 44, height: 6, background: "#D9CBB3", borderRadius: 3 }} />
            <div style={{ width: 56, height: 6, background: "#F5F2EC", borderRadius: 3 }} />
          </div>
          <div style={{ fontSize: 44, fontWeight: 700 }}>We Stucen Door</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 950 }}>
            Strak afgewerkt. Droog opgeleverd. Al drie generaties.
          </div>
          <div style={{ fontSize: 30, color: "#1F4E6B" }}>
            Stucwerk · vochtbestrijding · badkamers — Zeeland, Brabant & Amsterdam
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
