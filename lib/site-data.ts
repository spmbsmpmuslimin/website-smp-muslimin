// Path: lib/site-data.ts
// Data statis untuk landing page SMP Muslimin Cililin.
// Semua array di sini masih hardcoded (dummy/manual) — nanti ini yang
// bakal diganti satu-satu jadi fetch dari Supabase (stats & pengumuman
// duluan, ibadah rutin & ekskul boleh tetap statis karena jarang berubah).

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Guru", href: "/guru" },
  { label: "Galeri", href: "/galeri" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
];

// TODO: ganti jadi COUNT() dari tabel students & users di Supabase
// (tabel yang sama dipakai app admin) kalau udah masuk fase database.
export const stats = [
  { number: "324", label: "Siswa Aktif" },
  { number: "28", label: "Guru & Staff" },
  { number: "9", label: "Kelas" },
];

// Kegiatan ibadah rutin mingguan — jadwalnya tetap, aman hardcoded.
export const ibadahRutin = [
  { name: "Shalat Dhuhur Berjamaah", jadwal: "Senin - Kamis" },
  { name: "Shalat Dhuha Berjamaah", jadwal: "Kamis" },
];

// Ekstrakurikuler — jarang berubah, aman hardcoded.
export const ekskul = [
  { title: "Marching Band" },
  { title: "Pramuka" },
  { title: "Hadroh" },
  { title: "Badminton" },
  { title: "Futsal" },
];

// TODO: nanti diganti tabel `pengumuman_sekolah` di Supabase — kegiatan
// sekolah sifatnya insidental/dadakan, jadi bukan kalender rencana jauh
// hari, tapi lebih ke "berita terbaru" yang diinput pas kejadian.
export const pengumuman = [
  {
    title: "Penerimaan Siswa Baru",
    desc: "Info pendaftaran & jadwal SPMB tahun ajaran berjalan.",
    penting: true,
  },
  {
    title: "Kegiatan Sekolah Terbaru",
    desc: "Update kegiatan & prestasi terbaru SMP Muslimin Cililin.",
    penting: false,
  },
];

export const kontak = {
  alamat: ["Jl. Pendidikan No. 123", "Cililin, Bandung Barat", "Jawa Barat"],
  telp: "(022) 123456",
  email: "info@smpmuslimincililin.sch.id",
};

export const socialMedia = ["FB", "IG", "TW", "YT"];
