import Hero from "./components/Hero";
import Transcript from "./components/Transcript";
import SesiBerikut from "./components/SesiBerikut";
import Meja from "./components/Meja";
import Untuk from "./components/Untuk";
import Harga from "./components/Harga";
import FAQ from "./components/FAQ";
import Registration from "./components/Registration";
import { BERIKUT, HARGA, SITE, tanggalSesi } from "@/lib/sesi";

export default function Home() {
  // Dihitung saat render (bukan di tingkat modul) supaya ikut bergulir tiap revalidate.
  const t = tanggalSesi(BERIKUT.nomor);
  const eventLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `NextTalks Sesi ${BERIKUT.nomor}: ${BERIKUT.judul}`,
    description: `Empat pembicara di satu meja menjawab satu pertanyaan pembuka: ${BERIKUT.pembuka}`,
    startDate: `${t.iso}T19:00:00+07:00`,
    endDate: `${t.iso}T21:00:00+07:00`,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "VirtualLocation", url: SITE },
    image: [`${SITE}/og.jpg`],
    organizer: { "@type": "Organization", name: "NextTalks", url: SITE },
    performer: BERIKUT.pembicara.map((p) => ({ "@type": "Person", name: p.nama })),
    offers: {
      "@type": "Offer",
      price: Number(HARGA[0].harga.replace(/\D/g, "")),
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: `${SITE}/#daftar`,
    },
  };

  return (
    <main>
      <Hero />
      <Transcript />
      <SesiBerikut />
      <Meja />
      <Untuk />
      <Harga />
      <FAQ />
      <Registration hari={t.hari} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventLd) }} />
    </main>
  );
}
