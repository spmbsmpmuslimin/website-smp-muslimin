// Path: components/sections/ekskul-section.tsx
import { Music, Tent, Music2, CircleDot, Trophy } from "lucide-react";
import { ekskul } from "@/lib/site-data";

const icons = [Music, Tent, Music2, CircleDot, Trophy];

export default function EkskulSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-3">
            Ekstrakurikuler
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Wadah pengembangan minat & bakat siswa di luar akademik
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {ekskul.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 mb-4">
                  <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
