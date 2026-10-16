import { BERIKUT } from '@/lib/sesi';

/* Empat pembicara digambarkan sebagai kursi di sekeliling satu meja bundar,
   dilihat dari atas. Tidak ada podium, tidak ada foto panggung. */
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
            <span
              key={p.inisial}
              className={`absolute flex h-12 w-12 items-center justify-center rounded-full bg-caption sm:h-16 sm:w-16 font-[family-name:var(--font-inter-tight)] text-base font-bold text-white sm:text-lg ${POSISI[p.kursi]}`}
            >
              {p.inisial}
            </span>
          ))}
        </div>

        <div>
          <p className="stamp mb-5 text-live">Di meja</p>
          <h2 className="text-[2rem] leading-[1.1] text-ink md:text-[2.6rem]">
            Empat orang yang tidak selalu setuju
          </h2>
          <p className="mt-4 leading-relaxed">
            Dipandu {moderator.nama}, {moderator.peran}, yang tugasnya hanya menjaga waktu
            dan membacakan pertanyaan Anda.
          </p>
          <ul className="mt-8 space-y-6 md:mt-10 md:space-y-7">
            {pembicara.map((p) => (
              <li key={p.nama}>
                <h3 className="text-lg text-ink">
                  <span className="caption-bar">{p.nama}</span>
                </h3>
                <p className="stamp mt-2">{p.peran}</p>
                <p className="mt-2 leading-relaxed text-ink">{p.sudut}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
