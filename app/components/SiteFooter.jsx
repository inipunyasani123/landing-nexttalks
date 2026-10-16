import Link from 'next/link';
import { ARSIP, BERIKUT, SETELAHNYA, tanggalSesi } from '@/lib/sesi';

export default function SiteFooter() {
  const ini = tanggalSesi(BERIKUT.nomor);
  const nanti = tanggalSesi(SETELAHNYA.nomor);
  return (
    <footer className="border-t border-wire bg-room-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div>
          <p className="font-[family-name:var(--font-inter-tight)] text-xl font-bold text-ink">NextTalks</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">
            Empat pembicara, satu meja, tiap Kamis kedua. Sesi {BERIKUT.nomor}: {ini.hari}. Sesi {SETELAHNYA.nomor}: {nanti.hari}.
          </p>
        </div>
        <nav aria-label="Arsip transkrip">
          <p className="stamp mb-4 text-live">Arsip</p>
          <ul className="space-y-2.5 text-sm">
            {ARSIP.map((a) => (
              <li key={a.nomor}>
                <Link href={`/sesi/${a.nomor}`} className="hover:text-ink">Sesi {a.nomor} · {a.judul}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Informasi">
          <p className="stamp mb-4 text-live">Informasi</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/arsip" className="hover:text-ink">Semua transkrip</Link></li>
            <li><Link href="/terms" className="hover:text-ink">Ketentuan</Link></li>
            <li><Link href="/privacy" className="hover:text-ink">Kebijakan privasi</Link></li>
          </ul>
        </nav>
      </div>
      <p className="stamp mx-auto max-w-6xl border-t border-wire px-6 py-6 leading-[1.7]">
        © 2026 NextTalks · Nama, kutipan, jadwal, angka, dan harga di situs ini adalah contoh untuk purwarupa desain.
      </p>
    </footer>
  );
}
