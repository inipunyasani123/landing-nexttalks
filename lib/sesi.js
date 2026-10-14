/* ==========================================================================
   Satu sumber isi NextTalks: sesi mendatang, arsip transkrip, harga.
   Seri bulanan, tiap Kamis kedua, 19.00–21.00 WIB, empat pembicara satu meja.
   Semua nama, kutipan, jadwal, dan harga adalah contoh untuk purwarupa desain.
   ========================================================================== */

export const SITE = 'https://landing-nexttalks.pintuweb.id';

export const BERIKUT = {
  nomor: 13,
  judul: 'Memutuskan dengan data yang tidak lengkap',
  hari: 'Kamis, 8 Oktober 2026',
  iso: '2026-10-08',
  jam: '19.00–21.00 WIB',
  pembuka: 'Kapan terakhir kali Anda menunda keputusan karena menunggu data yang ternyata tidak pernah datang?',
  moderator: { nama: 'Maya Lestari', peran: 'pemandu tetap NextTalks' },
  pembicara: [
    { inisial: 'AN', nama: 'Aditya Nugraha', peran: 'Kepala produk, perusahaan logistik', kursi: 'Utara', sudut: 'Memutuskan saat angka dari tiga tim saling bertentangan.' },
    { inisial: 'SM', nama: 'Sari Mahendra', peran: 'Peneliti perilaku pengguna', sudut: 'Lima wawancara yang lebih berguna daripada lima ribu klik.', kursi: 'Timur' },
    { inisial: 'FR', nama: 'Fikri Ramadhan', peran: 'Konsultan operasional UMKM', sudut: 'Usaha kecil jarang punya data — tapi selalu punya buku kas.', kursi: 'Selatan' },
    { inisial: 'WK', nama: 'Wulan Kartika', peran: 'Pemilik usaha katering, 40 karyawan', sudut: 'Keputusan yang salah tapi cepat, dan cara memperbaikinya minggu depan.', kursi: 'Barat' },
  ],
  alur: [
    ['19.00', 'Pembukaan', 'Pemandu membacakan pertanyaan pembuka.'],
    ['19.05', 'Satu putaran', 'Tiap pembicara menjawab pertanyaan pembuka, masing-masing lima menit.'],
    ['19.25', 'Saling tanya', 'Pembicara boleh membantah satu sama lain. Pemandu hanya menjaga waktu.'],
    ['20.00', 'Tanya jawab', 'Empat puluh lima menit untuk pertanyaan peserta, dijawab langsung.'],
    ['20.45', 'Satu kalimat', 'Tiap pembicara menutup dengan satu kalimat untuk dibawa pulang.'],
    ['21.00', 'Selesai', 'Transkrip rapi dikirim dalam 24 jam.'],
  ],
};

export const SETELAHNYA = { nomor: 14, judul: 'Berhenti dengan terhormat: menutup produk yang tidak jalan', hari: 'Kamis, 12 November 2026' };

export const ARSIP = [
  {
    nomor: 12,
    tema: 'Tim',
    judul: 'Tim kecil, tenggat mepet',
    hari: 'Kamis, 10 September 2026',
    penonton: 1040,
    kalimat: [
      ['Pembicara I · Kepala produk', 'Yang rusak biasanya bukan alatnya, tapi cara kita memutuskan.'],
      ['Pembicara II · Konsultan', 'Kurangi ruang lingkupnya, bukan mutunya.'],
      ['Pembicara III · Peneliti', 'Sesi ini berhasil kalau Anda pulang membawa pertanyaan baru.'],
      ['Pembicara IV · Pemilik studio desain', 'Tenggat yang mepet adalah keputusan seseorang — tanyakan siapa.'],
    ],
    transkrip: [
      { m: '00:07', s: 'Pembicara I', p: 'Kepala produk', t: 'Kita sering menyebutnya masalah teknis, padahal yang rusak adalah cara kita memutuskan. Alatnya cuma memperbesar keputusan itu.' },
      { m: '00:15', s: 'Pembicara IV', p: 'Pemilik studio desain', t: 'Tenggat yang mepet jarang jatuh dari langit. Biasanya ada satu rapat di mana seseorang mengangguk terlalu cepat.' },
      { m: '00:23', s: 'Penanya', p: 'Peserta, Surabaya', t: 'Kalau timnya kecil dan waktunya mepet, bagian mana yang paling aman untuk dikorbankan?', tanya: true },
      { m: '00:24', s: 'Pembicara II', p: 'Konsultan', t: 'Ruang lingkupnya, bukan kualitasnya. Mengurangi jumlah yang dikerjakan masih bisa dijelaskan ke pengguna. Mengurangi mutu tidak.' },
      { m: '00:33', s: 'Penanya', p: 'Peserta, Makassar', t: 'Bagaimana menolak permintaan atasan tanpa terdengar malas?', tanya: true },
      { m: '00:34', s: 'Pembicara IV', p: 'Pemilik studio desain', t: 'Jangan bilang tidak. Bilang "bisa, kalau yang ini ditunda" — lalu biarkan dia yang memilih.' },
      { m: '00:41', s: 'Pembicara III', p: 'Peneliti', t: 'Pertanyaan yang bagus lebih berharga daripada jawaban yang panjang. Sesi ini berhasil kalau Anda pulang membawa pertanyaan baru.', sorot: true },
    ],
  },
  {
    nomor: 11,
    tema: 'Tim',
    judul: 'Merekrut orang pertama',
    hari: 'Kamis, 13 Agustus 2026',
    penonton: 880,
    kalimat: [
      ['Pembicara I · Pendiri toko daring', 'Rekrut untuk pekerjaan yang Anda benci, bukan yang Anda kuasai.'],
      ['Pembicara II · Praktisi SDM', 'Uraian tugas yang jujur menyaring lebih baik daripada wawancara yang panjang.'],
      ['Pembicara III · Akuntan', 'Hitung gaji tiga bulan di muka sebelum menulis lowongan.'],
      ['Pembicara IV · Pemilik bengkel', 'Orang pertama akan meniru cara Anda bekerja, termasuk yang buruk.'],
    ],
    transkrip: [
      { m: '00:04', s: 'Pembicara I', p: 'Pendiri toko daring', t: 'Kesalahan saya dulu: merekrut orang yang mirip saya. Akhirnya kami berdua sama-sama menghindari pekerjaan yang sama.' },
      { m: '00:12', s: 'Pembicara III', p: 'Akuntan', t: 'Sebelum menulis lowongan, pastikan kas cukup untuk tiga bulan gaji. Orang pertama tidak boleh jadi taruhan.' },
      { m: '00:26', s: 'Penanya', p: 'Peserta, Bandung', t: 'Lebih baik orang berpengalaman yang mahal, atau pemula yang bisa dibentuk?', tanya: true },
      { m: '00:27', s: 'Pembicara II', p: 'Praktisi SDM', t: 'Tergantung siapa yang punya waktu membentuk. Kalau jawabannya "tidak ada", pilih yang berpengalaman.' },
      { m: '00:38', s: 'Pembicara IV', p: 'Pemilik bengkel', t: 'Orang pertama akan meniru cara Anda bekerja — termasuk kebiasaan buruk yang tidak Anda sadari.', sorot: true },
    ],
  },
  {
    nomor: 10,
    tema: 'Harga',
    judul: 'Harga pertama jarang yang benar',
    hari: 'Kamis, 9 Juli 2026',
    penonton: 960,
    kalimat: [
      ['Pembicara I · Pemilik kedai kopi', 'Harga pertama adalah hipotesis, bukan keputusan.'],
      ['Pembicara II · Konsultan harga', 'Pelanggan membandingkan harga dengan alternatifnya, bukan dengan ongkos Anda.'],
      ['Pembicara III · Pendiri jasa kebersihan', 'Menaikkan harga lebih mudah kalau alasannya bisa dilihat.'],
      ['Pembicara IV · Peneliti', 'Diskon yang terlalu sering mengajari pelanggan untuk menunggu.'],
    ],
    transkrip: [
      { m: '00:06', s: 'Pembicara II', p: 'Konsultan harga', t: 'Menghitung harga dari ongkos ditambah untung itu masuk akal di kertas. Tapi pelanggan tidak melihat ongkos Anda. Mereka melihat pilihan lain.' },
      { m: '00:18', s: 'Pembicara I', p: 'Pemilik kedai kopi', t: 'Tiga bulan pertama kami menjual terlalu murah karena takut sepi. Yang datang memang ramai — tapi kami rugi setiap cangkir.' },
      { m: '00:29', s: 'Penanya', p: 'Peserta, Semarang', t: 'Bagaimana menaikkan harga tanpa kehilangan pelanggan lama?', tanya: true },
      { m: '00:30', s: 'Pembicara III', p: 'Pendiri jasa kebersihan', t: 'Beri tahu jauh-jauh hari, dan tunjukkan apa yang berubah. Kalau tidak ada yang berubah, mungkin memang belum waktunya.' },
      { m: '00:44', s: 'Pembicara IV', p: 'Peneliti', t: 'Diskon yang terlalu sering mengajari pelanggan satu hal: menunggu.', sorot: true },
    ],
  },
  {
    nomor: 9,
    tema: 'Rapat',
    judul: 'Rapat yang tidak perlu diadakan',
    hari: 'Kamis, 11 Juni 2026',
    penonton: 720,
    kalimat: [
      ['Pembicara I · Manajer proyek', 'Kalau keputusannya sudah diambil, kirim surel — jangan undang rapat.'],
      ['Pembicara II · Fasilitator', 'Agenda tanpa pertanyaan bukan agenda, tapi daftar topik.'],
      ['Pembicara III · Kepala sekolah', 'Rapat terbaik saya selesai dalam sebelas menit.'],
      ['Pembicara IV · Pendiri agensi', 'Setiap rapat harus bisa menjawab: apa yang berubah setelah ini?'],
    ],
    transkrip: [
      { m: '00:03', s: 'Pembicara II', p: 'Fasilitator', t: 'Tulis agenda sebagai pertanyaan. "Anggaran Q3" itu topik. "Apakah kita memotong anggaran acara?" itu agenda.' },
      { m: '00:16', s: 'Pembicara I', p: 'Manajer proyek', t: 'Separuh rapat di kalender saya dulu hanya untuk mengumumkan keputusan yang sudah diambil. Itu tugas surel.' },
      { m: '00:27', s: 'Penanya', p: 'Peserta, Medan', t: 'Bagaimana kalau atasan yang suka rapat panjang?', tanya: true },
      { m: '00:28', s: 'Pembicara III', p: 'Kepala sekolah', t: 'Tawarkan notulennya. Orang yang memegang notulen diam-diam memegang arah rapat.' },
      { m: '00:39', s: 'Pembicara IV', p: 'Pendiri agensi', t: 'Setiap rapat harus bisa menjawab satu pertanyaan: apa yang berubah setelah ini? Kalau tidak ada, batalkan.', sorot: true },
    ],
  },
];

export const TEMA = ['Semua', ...new Set(ARSIP.map((a) => a.tema))];

export const HARGA = [
  { nama: 'Satu sesi', harga: 'Rp 75.000', satuan: '/ sesi', dapat: ['Kursi di sesi yang Anda pilih', 'Transkrip rapi dalam 24 jam', 'Rekaman 30 hari'] },
  { nama: 'Musiman', harga: 'Rp 600.000', satuan: '/ 12 sesi', unggulan: true, dapat: ['Semua sesi selama satu tahun', 'Akses seluruh arsip transkrip', 'Pertanyaan Anda diprioritaskan', 'Rekaman tanpa batas waktu'] },
  { nama: 'Tim', harga: 'Rp 4.500.000', satuan: '/ 10 orang, 12 sesi', dapat: ['Semua isi paket Musiman', 'Satu sesi tanya jawab tertutup untuk tim', 'Faktur atas nama perusahaan'] },
];

export const UNTUK = [
  ['Pemimpin tim kecil', 'Yang harus memutuskan setiap hari tanpa sempat membaca buku manajemen.'],
  ['Pemilik usaha', 'Yang ingin mendengar pengalaman orang lain sebelum membuat kesalahan yang sama.'],
  ['Pekerja lepas & konsultan', 'Yang butuh bahan bicara dengan klien — dan kalimat yang bisa dikutip.'],
  ['Mahasiswa tingkat akhir', 'Yang ingin tahu bagaimana keputusan diambil di dunia kerja sungguhan.'],
];

export const FAQ = [
  { t: 'Apa bedanya dengan webinar biasa?', j: 'Tidak ada presentasi slide. Empat pembicara duduk di satu meja dan menjawab satu pertanyaan pembuka, lalu saling menanggapi. Separuh waktunya untuk pertanyaan peserta.' },
  { t: 'Apa itu transkrip rapi?', j: 'Transkrip lengkap sesi, dirapikan dari kata pengisi dan diberi penanda menit, dikirim dalam 24 jam. Anda bisa mengutipnya dengan menyebut sesi dan menitnya.' },
  { t: 'Bolehkah saya bertanya tanpa menyalakan kamera?', j: 'Boleh. Pertanyaan bisa diketik; pemandu membacakannya dengan menyebut kota Anda saja, bukan nama.' },
  { t: 'Kalau saya tidak bisa hadir?', j: 'Pemegang tiket satu sesi mendapat rekaman 30 hari dan transkripnya. Pemegang paket Musiman bisa menonton ulang kapan saja.' },
  { t: 'Apakah ada sertifikat?', j: 'Ada sertifikat kehadiran elektronik untuk yang hadir minimal 90 menit. Kami tidak menjanjikan pengakuan resmi dari lembaga mana pun.' },
];

export const sesiByNomor = (n) => ARSIP.find((a) => String(a.nomor) === String(n));
