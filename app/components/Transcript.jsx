import Link from 'next/link';
import { ARSIP } from '@/lib/sesi';
import TranskripList from './TranskripList';

/* Bagian penanda NextTalks: TRANSKRIP. Alih-alih menjanjikan "materi
   berkualitas", calon peserta membaca potongan sesi terakhir lengkap dengan
   menit tiap kalimat, lalu menilai sendiri mutu percakapannya. */
export default function Transcript() {
  const s = ARSIP[0];
  return (
    <section id="kutipan" className="scroll-mt-16 bg-room-2 py-16 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="stamp mb-5 text-live">Transkrip sesi {s.nomor} · {s.judul}</p>
          <h2 className="text-[2rem] leading-[1.1] text-ink md:text-[2.6rem]">
            Nilai sendiri percakapannya, sebelum memutuskan ikut
          </h2>
          <p className="mt-5 leading-relaxed">
            Potongan dari sesi bulan lalu, beserta menit ke berapa tiap kalimat diucapkan. Kami tidak
            memotongnya supaya terdengar lebih pintar.
          </p>
        </div>

        <TranskripList baris={s.transkrip.slice(0, 4).concat(s.transkrip.slice(-1))} />

        <div className="mt-12 flex flex-col gap-4 border-t border-wire pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">Transkrip lengkap tiap sesi dikirim ke peserta dalam 24 jam.</p>
          <div className="flex flex-wrap gap-5">
            <Link href={`/sesi/${s.nomor}`} className="stamp border-b border-live/50 pb-1 text-live hover:border-live">
              Baca transkrip sesi {s.nomor}
            </Link>
            <Link href="/arsip" className="stamp border-b border-ink/30 pb-1 text-ink hover:border-ink">
              Arsip semua sesi
            </Link>
          </div>
        </div>
        <p className="stamp mt-8 leading-[1.7]">Transkrip di situs ini rekaan, dibuat untuk keperluan desain.</p>
      </div>
    </section>
  );
}
