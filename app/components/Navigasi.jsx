'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV = [
  ['/#sesi', 'Sesi berikutnya'],
  ['/#meja', 'Di meja'],
  ['/arsip', 'Arsip transkrip'],
  ['/#harga', 'Harga'],
];

/* Navigasi utama + menu ponsel. Di ponsel daftar tautannya tampil seperti
   potongan transkrip: nomor urut sebagai penanda, satu baris satu tautan.
   Menu tertutup sendiri saat pindah halaman, menekan Escape, atau mengetuk
   di luar panel. */
export default function Navigasi({ children }) {
  const path = usePathname();
  const [buka, setBuka] = useState(false);
  const tombol = useRef(null);
  const panel = useRef(null);

  useEffect(() => setBuka(false), [path]);

  useEffect(() => {
    if (!buka) return undefined;
    const tutup = (e) => {
      if (e.type === 'keydown' && e.key !== 'Escape') return;
      if (e.type === 'pointerdown' && (panel.current?.contains(e.target) || tombol.current?.contains(e.target))) return;
      setBuka(false);
      if (e.type === 'keydown') tombol.current?.focus();
    };
    document.addEventListener('keydown', tutup);
    document.addEventListener('pointerdown', tutup);
    return () => {
      document.removeEventListener('keydown', tutup);
      document.removeEventListener('pointerdown', tutup);
    };
  }, [buka]);

  const aktif = (href) => (!href.includes('#') && path.startsWith(href) ? 'page' : undefined);

  return (
    <>
      <nav aria-label="Navigasi utama" className="hidden items-center gap-7 md:flex">
        {NAV.map(([href, label]) => (
          <Link key={href} href={href} aria-current={aktif(href)} className="stamp text-ink-soft transition-colors hover:text-ink aria-[current=page]:text-ink">
            {label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        {children}
        <button
          ref={tombol}
          type="button"
          aria-expanded={buka}
          aria-controls="menu-ponsel"
          onClick={() => setBuka((b) => !b)}
          className="stamp inline-flex h-10 min-w-[4.75rem] items-center justify-center border border-ink/25 px-3 text-ink md:hidden"
        >
          {buka ? 'Tutup' : 'Menu'}
        </button>
      </div>
      <nav id="menu-ponsel" ref={panel} aria-label="Navigasi ponsel" hidden={!buka} className="absolute inset-x-0 top-full border-b border-wire bg-room shadow-[0_18px_30px_-24px_rgb(25_23_20/0.5)] md:hidden">
        <ol className="mx-auto max-w-6xl px-6 py-2">
          {NAV.map(([href, label], i) => (
            <li key={href} className="border-b border-wire last:border-b-0">
              <Link href={href} onClick={() => setBuka(false)} aria-current={aktif(href)} className="flex items-baseline gap-4 py-3.5 text-ink">
                <span className="stamp text-live">0{i + 1}</span>
                <span className="font-bold decoration-live decoration-2 underline-offset-4 [[aria-current=page]_&]:underline">{label}</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
