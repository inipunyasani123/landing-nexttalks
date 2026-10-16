import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARSIP, BERIKUT, SITE, sesiByNomor, tanggalSesi } from '@/lib/sesi';
import TranskripList from '../../components/TranskripList';

/* Deskripsi meta maksimal 155 karakter, dipotong di batas kata. */
const ringkas = (t, n = 155) => (t.length <= n ? t : `${t.slice(0, t.lastIndexOf(' ', n - 1))}…`);

export function generateStaticParams() {
  return ARSIP.map((a) => ({ nomor: String(a.nomor) }));
}

export async function generateMetadata({ params }) {
  const { nomor } = await params;
  const s = sesiByNomor(nomor);
  if (!s) return {};
  return {
    title: `Sesi ${s.nomor}: ${s.judul}`,
    description: ringkas(`Transkrip NextTalks sesi ${s.nomor}: "${s.kalimat[0][1]}" — dan tiga kalimat lain yang dibawa pulang dari meja.`),
    alternates: { canonical: `${SITE}/sesi/${s.nomor}` },
  };
}

export default async function Sesi({ params }) {
  const { nomor } = await params;
  const s = sesiByNomor(nomor);
  if (!s) notFound();
  const hari = tanggalSesi(s.nomor).hari;
  const berikut = tanggalSesi(BERIKUT.nomor);
  const i = ARSIP.indexOf(s);
  const lebihBaru = ARSIP[i - 1];
  const lebihLama = ARSIP[i + 1];

  return (
    <main className="bg-room pt-28 md:pt-32">
      <header className="mx-auto max-w-4xl px-6">
        <p className="stamp text-live">
          <Link href="/arsip" className="hover:underline">Arsip</Link> · Sesi {s.nomor} · {s.tema}
        </p>
        <h1 className="mt-5 text-[2.4rem] leading-[1.06] text-ink md:text-[3.2rem]">{s.judul}</h1>
        <p className="mt-4">{hari} · 19.00–21.00 WIB · {s.penonton.toLocaleString('id-ID')} penonton</p>
      </header>

      <section aria-labelledby="kalimat" className="mx-auto mt-14 max-w-4xl px-6">
        <h2 id="kalimat" className="stamp mb-6 text-ink">Empat kalimat yang dibawa pulang</h2>
        <ul className="grid gap-px border border-wire bg-wire sm:grid-cols-2">
          {s.kalimat.map(([siapa, k]) => (
            <li key={siapa} className="bg-room-2 p-6">
              <p className="text-lg leading-snug font-semibold text-ink">“{k}”</p>
              <p className="stamp mt-3">{siapa}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="transkrip" className="mx-auto mt-16 max-w-4xl px-6 pb-8">
        <h2 id="transkrip" className="stamp mb-8 text-ink">Potongan transkrip</h2>
        <TranskripList baris={s.transkrip} />
        <p className="stamp mt-10 leading-[1.7]">Nama pembicara disamarkan sebagai Pembicara I–IV. Transkrip ini ilustrasi untuk purwarupa desain.</p>
      </section>

      <nav aria-label="Sesi lain" className="mx-auto mt-10 grid max-w-4xl gap-px border-y border-wire bg-wire sm:grid-cols-2">
        {lebihLama ? (
          <Link href={`/sesi/${lebihLama.nomor}`} className="bg-room p-6 hover:bg-room-2">
            <span className="stamp">← Sesi {lebihLama.nomor}</span>
            <span className="mt-2 block font-bold text-ink">{lebihLama.judul}</span>
          </Link>
        ) : <span className="bg-room p-6" />}
        {lebihBaru ? (
          <Link href={`/sesi/${lebihBaru.nomor}`} className="bg-room p-6 text-right hover:bg-room-2">
            <span className="stamp">Sesi {lebihBaru.nomor} →</span>
            <span className="mt-2 block font-bold text-ink">{lebihBaru.judul}</span>
          </Link>
        ) : (
          <Link href="/#daftar" className="bg-room p-6 text-right hover:bg-room-2">
            <span className="stamp text-live">Sesi {BERIKUT.nomor} · {berikut.hari} →</span>
            <span className="mt-2 block font-bold text-ink">{BERIKUT.judul}</span>
          </Link>
        )}
      </nav>
      <div className="h-24" />
    </main>
  );
}
