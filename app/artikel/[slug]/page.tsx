// app/artikel/[slug]/page.tsx
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArtikelDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: artikel, error } = await supabase
    .from("pengumuman")
    .select("title, description, content, is_penting, published_at")
    .eq("slug", slug)
    .eq("is_published", true) // jaga-jaga, walau RLS udah handle ini
    .single();

  if (error || !artikel) {
    notFound(); // render app/artikel/[slug]/not-found.tsx kalau ada, atau 404 default
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      {artikel.is_penting && (
        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
          Penting Sekali
        </span>
      )}
      <h1 className="text-2xl font-bold mt-2 mb-2">{artikel.title}</h1>
      <time className="text-sm text-gray-400">
        {new Date(artikel.published_at).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </time>

      {/* Kalau content-nya plain text/paragraf biasa. Kalau nanti mau rich text (markdown/HTML), kasih tau, beda cara render-nya */}
      <div className="prose mt-6 whitespace-pre-line">{artikel.content}</div>
    </main>
  );
}