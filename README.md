# NextTalks — Empat Pembicara, Satu Meja

NextTalks: empat pembicara, satu meja, tiap Kamis kedua. Sesi 13 "Memutuskan dengan data yang tidak lengkap", Kamis 8 Oktober 2026. Transkrip rapi dikirim dalam 24 jam.

**Demo live:** https://landing-nexttalks.vercel.app

![Tangkapan layar NextTalks](public/og.jpg)

> Template landing page untuk bisnis fiktif. Formulir di dalamnya hanya demo dan tidak mengirim data.

## Konsep

Bahasa rupa **Ruang Bicara**: yang dijual adalah percakapannya, jadi motif utamanya adalah takarir berupa pita teks.

## Halaman

- `/` — Sesi 13 "Memutuskan dengan data yang tidak lengkap": empat pembicara, diagram meja, dan pendaftaran
- `/arsip` — arsip transkrip sesi 9–12 dengan saring tema dan pencarian
- `/sesi/[nomor]` — ringkasan dan kutipan per sesi
- `/privacy` · `/terms` — kebijakan privasi dan ketentuan acara

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Framer Motion (animasi hero)
- Font: Inter Tight, Inter (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD, sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Bagian dari koleksi 17 template landing page di [PortalLanding](https://www.pintuweb.id/landing-page). Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.
