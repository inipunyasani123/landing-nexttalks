import Image from 'next/image';
import { BERIKUT } from '@/lib/sesi';

/* Empat pembicara digambarkan sebagai kursi di sekeliling satu meja bundar, dilihat dari atas.
   Orangnya fiktif, jadi potretnya ilustrasi cetak buatan sendiri (public/images/meja), bukan foto. */
const POSISI = {
  Utara: 'top-0 left-1/2 -translate-x-1/2',
  Timur: 'top-1/2 right-0 -translate-y-1/2',
  Selatan: 'bottom-0 left-1/2 -translate-x-1/2',
  Barat: 'top-1/2 left-0 -translate-y-1/2',
};

export default function Meja() {
  const { pembicara, moderator } = BERIKUT;
  return (
    <section id="meja" className="scroll-mt-16 bg-room-2 py-16 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="relative mx-auto aspect-square w-full max-w-[15rem] sm:max-w-sm" aria-hidden="true">
          <div className="absolute inset-[18%] flex items-center justify-center rounded-full border-2 border-wire bg-room">
            <span className="stamp text-center">Satu meja<br />sesi {BERIKUT.nomor}</span>
          </div>
          {pembicara.map((p) => (
            <Image
              key={p.inisial}
              src={`/images/meja/${p.potret}.webp`}
              alt=""
              width={64}
              height={64}
              className={`absolute h-14 w-14 rounded-full ring-2 ring-caption sm:h-[4.5rem] sm:w-[4.5rem] ${POSISI[p.kursi]}`}
            />
          ))}
        </div>

        <div>
          <p className="stamp mb-5 text-live">Di meja</p>
          <h2 className="text-[2rem] leading-[1.1] text-ink md:text-[2.6rem]">
            Empat orang yang tidak selalu setuju
          </h2>
          <p className="mt-4 flex items-start gap-4 leading-relaxed">
            <Image src={`/images/meja/${moderator.potret}.webp`} alt="" width={48} height={48} className="mt-1 h-12 w-12 shrink-0 rounded-full" />
            <span>
              Dipandu {moderator.nama}, {moderator.peran}, yang tugasnya hanya menjaga waktu
              dan membacakan pertanyaan Anda.
            </span>
          </p>
          <ul className="mt-8 space-y-6 md:mt-10 md:space-y-7">
            {pembicara.map((p) => (
              <li key={p.nama} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4">
                <Image src={`/images/meja/${p.potret}.webp`} alt="" width={48} height={48} className="mt-0.5 h-12 w-12 rounded-full" />
                <div>
                  <h3 className="text-lg text-ink">
                    <span className="caption-bar">{p.nama}</span>
                  </h3>
                  <p className="stamp mt-2">{p.peran}</p>
                  <p className="mt-2 leading-relaxed text-ink">{p.sudut}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
