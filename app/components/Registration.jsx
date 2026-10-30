'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BERIKUT, HARGA } from '@/lib/sesi';

export default function Registration({ hari }) {
  const [paket, setPaket] = useState('Satu sesi');
  const [selesai, setSelesai] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('paket');
    if (p && HARGA.some((h) => h.nama === p)) setPaket(p);
  }, []);

  const kirim = (e) => {
    e.preventDefault();
    // Purwarupa desain: tidak ada data yang dikirim ke mana pun.
    setSelesai(true);
  };

  const input = 'w-full border border-wire bg-room px-4 py-3 text-ink focus:border-live focus:outline-none';
  const pilih = HARGA.find((h) => h.nama === paket);

  return (
    <section id="daftar" className="scroll-mt-16 bg-caption py-16 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="stamp penanda mb-5 flex items-center text-white">Ambil tempat</p>
          <h2 className="text-[2rem] leading-[1.1] text-white md:text-[2.6rem]">
            Sesi {BERIKUT.nomor}: {BERIKUT.judul}
          </h2>
          <p className="mt-5 leading-relaxed text-white/80">
            {hari} · {BERIKUT.jam}. Tautan ruang bicara dikirim ke surel Anda tiga jam sebelum sesi dimulai.
          </p>
        </div>

        <div className="bg-room p-6 text-ink-soft sm:p-8">
          {selesai ? (
            <div role="status" className="py-8">
              <p className="stamp text-live">Tercatat · {paket}</p>
              <p className="mt-4 text-2xl font-bold text-ink">Sampai jumpa di meja.</p>
              <p className="mt-3 leading-relaxed">Ini baru tampilan formulir, jadi tidak ada data yang dikirim dan tidak ada surel yang akan datang.</p>
              <button type="button" onClick={() => setSelesai(false)} className="stamp mt-6 border border-ink/30 px-4 py-3 text-ink hover:border-ink">Isi ulang</button>
            </div>
          ) : (
            <form onSubmit={kirim} className="space-y-5">
              <fieldset>
                <legend className="stamp mb-3 text-ink">Paket</legend>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {HARGA.map((h) => (
                    <label key={h.nama} className={`cursor-pointer border p-2.5 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-live sm:p-3.5 ${paket === h.nama ? 'border-ink bg-room-2' : 'border-wire hover:border-ink/40'}`}>
                      <input type="radio" name="paket" value={h.nama} checked={paket === h.nama} onChange={() => setPaket(h.nama)} className="sr-only" />
                      <span className="stamp block text-ink">{h.nama}</span>
                      <span className="mt-1.5 block text-xs whitespace-nowrap text-ink sm:text-sm">{h.harga}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nama" className="stamp mb-2 block text-ink">Nama</label>
                  <input id="nama" name="nama" required autoComplete="name" className={input} />
                </div>
                <div>
                  <label htmlFor="surel" className="stamp mb-2 block text-ink">Surel</label>
                  <input id="surel" name="surel" type="email" required autoComplete="email" className={input} />
                </div>
              </div>
              <div>
                <label htmlFor="tanya" className="stamp mb-2 block text-ink">Pertanyaan untuk meja (boleh kosong)</label>
                <textarea id="tanya" name="tanya" rows={3} className={`${input} resize-y`} />
              </div>
              <label className="flex gap-3 text-sm leading-relaxed">
                <input type="checkbox" name="kabari" className="mt-0.5 h-5 w-5 shrink-0 accent-[#2447d6]" />
                <span>Kabari saya lewat surel saat pendaftaran sesi berikutnya dibuka (opsional).</span>
              </label>
              <label className="flex gap-3 text-sm leading-relaxed">
                <input type="checkbox" required className="mt-0.5 h-5 w-5 shrink-0 accent-[#2447d6]" />
                <span>
                  Saya menyetujui <Link href="/terms" className="inline-block py-2 font-semibold text-live underline underline-offset-4">ketentuan</Link> dan{' '}
                  <Link href="/privacy" className="inline-block py-2 font-semibold text-live underline underline-offset-4">kebijakan privasi</Link> NextTalks.
                </span>
              </label>
              <button type="submit" className="w-full bg-ink py-4 text-sm font-bold text-room hover:bg-live">
                Ambil tempat · {pilih.harga}
              </button>
              <p className="text-xs leading-relaxed">Formulir ini hanya tampilan dan tidak mengirim data ke mana pun.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
