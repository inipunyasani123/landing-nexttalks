import { ARSIP, SITE, tanggalSesi } from '@/lib/sesi';
import ArsipList from '../components/ArsipList';

export const metadata = {
  title: 'Arsip Transkrip',
  description: `Arsip transkrip NextTalks: ${ARSIP.length} sesi terakhir, masing-masing dengan empat kalimat yang dibawa pulang dan potongan percakapan bertanda menit.`,
  alternates: { canonical: `${SITE}/arsip` },
};

export default function Arsip() {
  // Tanggal dihitung di server lalu dikirim ke komponen klien, supaya hidrasi cocok.
  const tanggal = Object.fromEntries(ARSIP.map((a) => [a.nomor, tanggalSesi(a.nomor).hari]));
  return (
    <main className="bg-room px-6 pt-28 pb-20 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="stamp penanda mb-6 flex items-center text-live">Arsip transkrip</p>
        <h1 className="max-w-3xl text-[2.4rem] leading-[1.06] text-ink md:text-[3.4rem]">
          Setiap sesi meninggalkan <span className="caption-bar">empat kalimat</span>
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed">
          Di akhir tiap sesi, keempat pembicara menutup dengan satu kalimat. Semuanya tersimpan di sini —
          saring menurut tema atau cari kata yang Anda ingat.
        </p>
        <div className="mt-10 md:mt-14">
          <ArsipList tanggal={tanggal} />
        </div>
      </div>
    </main>
  );
}
