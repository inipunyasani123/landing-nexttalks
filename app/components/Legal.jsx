import Link from 'next/link';

export default function Legal({ label, judul, intro, pasal }) {
  return (
    <main className="bg-room px-6 pt-32 pb-24">
      <article className="mx-auto max-w-3xl">
        <p className="stamp text-live">{label} · Diperbarui 30 September 2026</p>
        <h1 className="mt-5 text-[2.4rem] leading-[1.06] text-ink md:text-[3rem]">{judul}</h1>
        <p className="mt-5 text-lg leading-relaxed">{intro}</p>
        <ol className="mt-12 border-t border-ink">
          {pasal.map(([h, p], i) => (
            <li key={h} className="grid gap-3 border-b border-wire py-7 sm:grid-cols-[3rem_minmax(0,1fr)]">
              <span className="stamp text-live">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 className="text-lg text-ink">{h}</h2>
                <p className="mt-2 leading-relaxed">{p}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm leading-relaxed">
          Draf untuk purwarupa desain; perlu ditinjau sebelum dipakai sungguhan.{' '}
          <Link href="/" className="inline-block py-3 font-semibold text-live underline underline-offset-4">Kembali ke beranda</Link>
        </p>
      </article>
    </main>
  );
}
