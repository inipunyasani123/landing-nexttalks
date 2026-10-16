import { Inter_Tight, Inter } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";

const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], weight: ["600", "700", "900"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"NextTalks","description":"Seri percakapan bulanan: empat pembicara, satu meja","url":"https://landing-nexttalks.pintuweb.id","inLanguage":"id"};

const DESKRIPSI = "NextTalks, seri percakapan tiap Kamis kedua: empat pembicara di satu meja, 45 menit tanya jawab, dan transkrip rapi yang dikirim dalam 24 jam.";

// Tanggal sesi dihitung dari hari ini (lib/sesi.js), jadi halaman dibangun ulang tiap jam.
export const revalidate = 3600;

export const metadata = {
  metadataBase: new URL("https://landing-nexttalks.pintuweb.id"),
  title: { default: "NextTalks — Empat Pembicara, Satu Meja", template: "%s — NextTalks" },
  description: DESKRIPSI,
  applicationName: "NextTalks",
  keywords: ["webinar percakapan", "diskusi panel daring", "transkrip webinar", "webinar pengambilan keputusan", "seri diskusi bulanan"],
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
    description: DESKRIPSI,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "NextTalks — Empat Pembicara, Satu Meja" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextTalks — Empat Pembicara, Satu Meja",
    description: DESKRIPSI,
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
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-room">Lompat ke konten</a>
        <SiteHeader />
        <div id="konten">{children}</div>
        <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=nexttalks" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
