// Path: components/layout/footer.tsx
import Link from "next/link";
import { Building2 } from "lucide-react";
import { kontak, socialMedia } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-semibold">SMP Muslimin</span>
            </div>
            <p className="text-sm text-gray-400">
              Sekolah Islam Terpadu yang membentuk generasi Qur&apos;ani berakhlak mulia.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/profil" className="hover:text-white transition-colors">
                  Profil Sekolah
                </Link>
              </li>
              <li>
                <Link href="/guru" className="hover:text-white transition-colors">
                  Guru & Staff
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-white transition-colors">
                  Galeri Foto
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-white transition-colors">
                  Artikel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {kontak.alamat.map((baris) => (
                <li key={baris}>{baris}</li>
              ))}
              <li className="pt-2">Telp: {kontak.telp}</li>
              <li>{kontak.email}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Sosial Media</h3>
            <div className="flex gap-3">
              {socialMedia.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-xs font-semibold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SMP Muslimin Cililin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
