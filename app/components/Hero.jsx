import { ARSIP, BERIKUT, tanggalSesi } from '@/lib/sesi';

/* Angka di bawah hero adalah aturan format, bukan klaim jumlah penonton. */
const angka = [
  ['4', 'Pembicara di satu meja'],
  ['45 menit', 'Porsi tanya jawab'],
  ['24 jam', 'Transkrip rapi dikirim'],
];

export default function Hero() {
  const t = tanggalSesi(BERIKUT.nomor);
  const lalu = ARSIP[0];
  return (
    <section className="relative overflow-hidden bg-room pt-24 pb-14 md:pt-36 md:pb-24">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-20">
          <div>
            <p className="stamp penanda naik mb-6 flex items-center text-live md:mb-8">
              Sesi {BERIKUT.nomor} · {t.hari}
            </p>

            <h1 className="text-[2.35rem] leading-[1.06] text-ink sm:text-5xl lg:text-[3.6rem]">
              Yang dibawa pulang
              <br />
              bukan rekamannya,
              <br />
              <span className="caption-bar">tapi satu kalimat.</span>
            </h1>

            <p className="naik naik-2 mt-6 max-w-lg leading-relaxed text-ink-soft md:mt-8">
              Webinar profesional dengan format percakapan: empat pembicara, satu meja, dan
              pertanyaan yang benar-benar dijawab. Transkripnya kami rapikan supaya Anda bisa
              mengutipnya lagi minggu depan.
            </p>

            <div className="naik naik-3 mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-9">
              <a
                href="#daftar"
                className="inline-flex items-center justify-center bg-ink px-8 py-4 text-sm font-bold text-room transition-colors duration-300 hover:bg-live"
              >
                Ambil tempat
              </a>
              <a
                href="#kutipan"
                className="inline-flex items-center justify-center border border-ink/25 px-8 py-4 text-sm font-bold text-ink transition-colors duration-300 hover:border-ink/60"
              >
                Baca kutipannya
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-wire pt-6 sm:gap-8 md:mt-14 md:pt-8">
              {angka.map(([n, k]) => (
                <div key={k} className="flex flex-col-reverse justify-end">
                  <dt className="stamp mt-2 text-ink-soft sm:mt-2.5">{k}</dt>
                  <dd className="text-xl font-bold text-ink sm:text-2xl">{n}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Kartu transkrip: cuplikan sesi lalu, lengkap dengan penanda menit.
              Di ponsel disembunyikan karena bagian berikutnya memuat transkrip yang sama. */}
          <figure className="naik naik-2 hidden border border-wire bg-room-2 p-6 sm:block sm:p-9">
            <figcaption className="mb-6 flex items-center justify-between border-b border-wire pb-4 sm:mb-7">
              <span className="stamp penanda flex items-center text-live">Sesi {lalu.nomor} · Cuplikan</span>
              <span className="stamp text-ink-soft">Transkrip</span>
            </figcaption>

            <ol className="transcript-rail space-y-5 pl-5 sm:space-y-6">
              <li>
                <span className="stamp text-ink-soft">00:23 · Penanya</span>
                <p className="mt-2 leading-relaxed text-ink-soft italic">
                  — Kalau timnya kecil dan waktunya mepet, bagian mana yang paling aman untuk
                  dikorbankan?
                </p>
              </li>
              <li>
                <span className="stamp text-ink-soft">00:24 · Pembicara II</span>
                <p className="mt-2 leading-relaxed text-ink">
                  Ruang lingkupnya, bukan kualitasnya. Mengurangi jumlah yang dikerjakan masih bisa
                  dijelaskan ke pengguna. Mengurangi mutu tidak.
                </p>
              </li>
            </ol>

            <p className="mt-7 border-t border-wire pt-6 sm:mt-8 sm:pt-7">
              <span className="caption-bar text-sm">
                &ldquo;Pertanyaan yang bagus lebih berharga daripada jawaban yang panjang.&rdquo;
              </span>
            </p>
            <p className="stamp mt-4 text-ink-soft">Menit 41 · Sesi {lalu.nomor}</p>
          </figure>
        </div>
      </div>
    </section>
  );
}
