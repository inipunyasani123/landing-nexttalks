import { UNTUK } from '@/lib/sesi';

export default function Untuk() {
  return (
    <section className="bg-room py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 max-w-2xl md:mb-12">
          <p className="stamp mb-5 text-live">Yang biasa duduk di kursi penonton</p>
          <h2 className="text-[2rem] leading-[1.1] text-ink md:text-[2.6rem]">Orang yang memutuskan sesuatu setiap hari</h2>
        </div>
        <ul className="grid grid-cols-2 gap-px border border-wire bg-wire lg:grid-cols-4">
          {UNTUK.map(([j, d]) => (
            <li key={j} className="bg-room p-4 sm:p-6">
              <h3 className="text-base leading-snug text-ink sm:text-lg">{j}</h3>
              <p className="mt-2 text-sm leading-relaxed sm:mt-3">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
