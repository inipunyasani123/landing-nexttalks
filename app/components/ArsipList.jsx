'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ARSIP, TEMA } from '@/lib/sesi';

export default function ArsipList({ tanggal }) {
  const [tema, setTema] = useState('Semua');
  const [cari, setCari] = useState('');

  const hasil = useMemo(() => {
    const q = cari.trim().toLowerCase();
    return ARSIP.filter((a) => tema === 'Semua' || a.tema === tema).filter((a) => {
      if (!q) return true;
      const teks = [a.judul, ...a.kalimat.flat(), ...a.transkrip.map((b) => b.t)].join(' ').toLowerCase();
      return teks.includes(q);
    });
  }, [tema, cari]);

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-ink pb-6 md:flex-row md:items-end md:justify-between">
        <div role="group" aria-label="Saring menurut tema" className="flex flex-wrap gap-2">
          {TEMA.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={tema === t}
              onClick={() => setTema(t)}
              className={`stamp inline-flex min-h-11 items-center px-3.5 ${tema === t ? 'bg-ink text-room' : 'border border-wire text-ink hover:border-ink'}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="md:w-80">
          <label htmlFor="cari" className="stamp mb-2 block text-ink">Cari kalimat</label>
          <input
            id="cari"
            type="search"
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            placeholder="mis. diskon, rapat, tenggat"
            className="w-full border border-wire bg-room px-4 py-2.5 text-ink focus:border-live focus:outline-none"
          />
        </div>
      </div>

      <p className="stamp mt-6" aria-live="polite">{hasil.length} sesi</p>

      <ol className="mt-4">
        {hasil.map((a) => (
          <li key={a.nomor} className="grid gap-5 border-b border-wire py-8 md:gap-6 md:py-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="stamp text-live">Sesi {a.nomor} · {a.tema}</p>
              <h2 className="mt-3 text-2xl text-ink">{a.judul}</h2>
              <p className="mt-2 text-sm">{tanggal[a.nomor]} · {a.penonton.toLocaleString('id-ID')} penonton</p>
              <Link href={`/sesi/${a.nomor}`} className="stamp mt-3 inline-flex min-h-11 items-center border-b border-live/50 text-live hover:border-live">
                Baca transkrip
              </Link>
            </div>
            <ul className="space-y-4">
              {a.kalimat.map(([siapa, k]) => (
                <li key={siapa}>
                  <p className="leading-snug font-semibold text-ink">“{k}”</p>
                  <p className="stamp mt-1.5">{siapa}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      {hasil.length === 0 && (
        <p className="py-16 text-center">Tidak ada kalimat yang cocok. Coba kata lain, atau pilih tema “Semua”.</p>
      )}
    </div>
  );
}
