import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { RevealObserver } from "@/components/Interactive";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd } from "@/components/ui";
import { businessSchema, organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";

// next/font host de lettertypes zelf (geen verzoeken naar Google bij bezoekers)
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Stukadoor Zeeland`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: true, email: true, address: true },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2B2F33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Markeer JS vóór de eerste paint, zodat scroll-reveals niet flitsen */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Direct naar de inhoud
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
        <RevealObserver />
        <CookieBanner />
        <JsonLd data={[businessSchema(), organizationSchema()]} />
      </body>
    </html>
  );
}
