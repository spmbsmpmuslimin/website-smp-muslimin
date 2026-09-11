// Path: components/sections/ibadah-card.tsx
import { Clock } from "lucide-react";
import { ibadahRutin } from "@/lib/site-data";

export default function IbadahCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center">
          <Clock className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Kegiatan Ibadah Rutin
        </h2>
      </div>
      <div className="space-y-3">
        {ibadahRutin.map((item) => (
          <div
            key={item.name}
            className="flex justify-between items-center gap-3 py-3 border-b border-gray-100 dark:border-gray-700 last:border-0"
          >
            <span className="text-sm text-gray-600 dark:text-gray-300">{item.name}</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 text-right">
              {item.jadwal}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
