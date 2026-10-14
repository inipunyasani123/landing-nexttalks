import { Inter_Tight, Inter } from "next/font/google";
import MotionProvider from "./components/MotionProvider";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";

const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], weight: ["600", "700", "900"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"NextTalks","description":"Seri percakapan bulanan: empat pembicara, satu meja","url":"https://landing-nexttalks.pintuweb.id","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://landing-nexttalks.pintuweb.id"),
  title: { default: "NextTalks — Empat Pembicara, Satu Meja", template: "%s — NextTalks" },
  description: "NextTalks: empat pembicara, satu meja, tiap Kamis kedua. Sesi 13 \"Memutuskan dengan data yang tidak lengkap\", Kamis 8 Oktober 2026. Transkrip rapi dikirim dalam 24 jam.",
  applicationName: "NextTalks",
  keywords: ["webinar", "pembicara inspiratif", "seminar", "talk show", "konferensi"],
  authors: [{ name: "NextTalks" }],
  creator: "NextTalks",
  publisher: "NextTalks",
  alternates: { canonical: "https://landing-nexttalks.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-nexttalks.pintuweb.id",
    siteName: "NextTalks",
    title: "NextTalks — Empat Pembicara, Satu Meja",
    description: "NextTalks: empat pembicara, satu meja, tiap Kamis kedua. Sesi 13 \"Memutuskan dengan data yang tidak lengkap\", Kamis 8 Oktober 2026. Transkrip rapi dikirim dalam 24 jam.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "NextTalks — Empat Pembicara, Satu Meja" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextTalks — Empat Pembicara, Satu Meja",
    description: "NextTalks: empat pembicara, satu meja, tiap Kamis kedua. Sesi 13 \"Memutuskan dengan data yang tidak lengkap\", Kamis 8 Oktober 2026. Transkrip rapi dikirim dalam 24 jam.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${interTight.variable} ${inter.variable} antialiased`}>
        <MotionProvider>
          <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-room">Lompat ke konten</a>
          <SiteHeader />
          <div id="konten">{children}</div>
          <SiteFooter />
        </MotionProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
