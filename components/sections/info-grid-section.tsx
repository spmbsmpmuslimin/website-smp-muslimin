// Path: components/sections/info-grid-section.tsx
import IbadahCard from "./ibadah-card";
import PengumumanCard from "./pengumuman-card";

export default function InfoGridSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <IbadahCard />
          <PengumumanCard />
        </div>
      </div>
    </section>
  );
}
