// Path: components/sections/stats-section.tsx
import { Users, BookOpen, GraduationCap, Award } from "lucide-react";
import { stats } from "@/lib/site-data";

// Icon dipetakan di sini (bukan di lib/site-data.ts) biar file data tetap
// bebas dari import komponen/JSX — gampang dipindah ke fetch Supabase nanti.
const icons = [Users, BookOpen, GraduationCap, Award];

export default function StatsSection() {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 mb-4">
                  <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
