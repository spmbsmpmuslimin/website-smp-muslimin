// Path: components/sections/cta-section.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-emerald-600 dark:bg-emerald-700">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Tertarik Bergabung?</h2>
        <p className="text-base sm:text-lg text-emerald-50 mb-8">
          Daftarkan putra-putri Anda menjadi bagian dari keluarga besar SMP Muslimin Cililin
        </p>
        <Link
          href="/kontak"
          className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-600 text-sm font-medium rounded-lg hover:bg-emerald-50 transition-colors"
        >
          Daftar Sekarang
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
