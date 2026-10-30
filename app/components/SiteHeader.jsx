import Link from 'next/link';
import Navigasi from './Navigasi';

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-wire bg-room/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="inline-flex min-h-11 items-center font-[family-name:var(--font-inter-tight)] text-lg font-bold tracking-tight text-ink">
          Next<span className="caption-bar ml-0.5 !py-0.5">Talks</span>
        </Link>
        <Navigasi>
          <Link href="/#daftar" className="inline-flex h-11 items-center bg-ink px-4 text-xs font-bold text-room hover:bg-live">
            Ambil tempat
          </Link>
        </Navigasi>
      </div>
    </header>
  );
}
