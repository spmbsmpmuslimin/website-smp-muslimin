// app/artikel/page.tsx
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const revalidate = 60; // ISR — refresh tiap 60 detik, sesuaikan kalau perlu

export default async function ArtikelPage() {
  const { data: pengumuman, error } = await supabase
    .from("pengumuman")
    .select("id, title, slug, description, is_penting, published_at")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Gagal fetch pengumuman:", error.message);
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Semua Pengumuman</h1>

      {!pengumuman || pengumuman.length === 0 ? (
        <p className="text-gray-500">Belum ada pengumuman.</p>
      ) : (
        <ul className="space-y-4">
          {pengumuman.map((item) => (
            <li key={item.id} className="border-b pb-4">
              <Link href={`/artikel/${item.slug}`} className="block group">
                <div className="flex items-center gap-2">
                  {item.is_penting && (
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                      Penting
                    </span>
                  )}
                  <h2 className="font-semibold group-hover:underline">
                    {item.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                <time className="text-xs text-gray-400">
                  {new Date(item.published_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}