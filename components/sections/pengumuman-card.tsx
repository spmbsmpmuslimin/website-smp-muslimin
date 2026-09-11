// Path: components/sections/pengumuman-card.tsx
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { pengumuman } from "@/lib/site-data";

export default function PengumumanCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center">
          <Star className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Berita & Pengumuman
        </h2>
      </div>
      <div className="space-y-4">
        {pengumuman.map((item) =>
          item.penting ? (
            <div
              key={item.title}
              className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800"
            >
              <span className="inline-block text-xs font-medium text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 px-2 py-1 rounded mb-2">
                Penting
              </span>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ) : (
            <div key={item.title} className="pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          )
        )}
      </div>
      <Link
        href="/artikel"
        className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium mt-4"
      >
        Baca Semua
        <ArrowRight className="h-4 w-4 ml-1" />
      </Link>
    </div>
  );
}
