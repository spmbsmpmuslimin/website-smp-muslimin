// Path: components/sections/hero-section.tsx
import Link from "next/link";
import { ArrowRight, MoonStar } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-900/30 mb-5">
          <MoonStar className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
        </div>

        <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-4">
          Sekolah Islam Terpadu
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6 leading-tight">
          Assalamu&apos;alaikum
          <br />
          <span className="text-emerald-600 dark:text-emerald-400">
            SMP Muslimin Cililin
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Membentuk generasi Qur&apos;ani yang berakhlak mulia, cerdas, dan berwawasan global
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/profil"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Kenali Sekolah Kami
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <Link
            href="/kontak"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
