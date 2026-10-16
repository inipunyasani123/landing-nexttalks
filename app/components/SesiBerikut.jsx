import { BERIKUT, tanggalSesi } from '@/lib/sesi';

export default function SesiBerikut() {
  const t = tanggalSesi(BERIKUT.nomor);
  return (
    <section id="sesi" className="scroll-mt-16 bg-room py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="stamp penanda mb-6 flex items-center text-live">
          Sesi {BERIKUT.nomor} · {t.hari} · {BERIKUT.jam}
        </p>
        <h2 className="max-w-3xl text-[2rem] leading-[1.1] text-ink md:text-[2.8rem]">{BERIKUT.judul}</h2>

        <figure className="mt-8 max-w-3xl md:mt-10">
          <figcaption className="stamp mb-3">Pertanyaan pembuka, dibacakan di menit ke-nol</figcaption>
          <blockquote className="text-xl leading-snug font-semibold md:text-2xl">
            <span className="caption-bar">{BERIKUT.pembuka}</span>
          </blockquote>
        </figure>

        <ol className="mt-10 grid grid-cols-2 gap-px border border-wire bg-wire md:mt-14 lg:grid-cols-6" aria-label={`Alur sesi ${BERIKUT.nomor}`}>
          {BERIKUT.alur.map(([jam, judul, ket]) => (
            <li key={jam} className="bg-room p-4 sm:p-5">
              <p className="stamp text-live">{jam}</p>
              <p className="mt-2 font-bold text-ink sm:mt-3">{judul}</p>
              <p className="mt-1.5 text-sm leading-relaxed sm:mt-2">{ket}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
