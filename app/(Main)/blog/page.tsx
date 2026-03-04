import { APP_URL, CurrentProjectId } from "@/lib/ProjectId";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Article = {
  id: string;
  title: string;
  coverImage: string | null;
  createdAt: string;
  updatedAt: string;
  content: string | null;
};

type GetArticlesResponse = {
  success: boolean;
  data: {
    articles: Article[];
    count: number;
  };
};

export default async function ArticlesPage() {
  const res = await fetch(
    `${APP_URL}/api/project/${CurrentProjectId}/articles`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data: GetArticlesResponse = await res.json();
  const articles = data.data.articles;

  return (
    <section id="articles" className="py-20 min-h-[60vh]" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#5C6E55] hover:text-[#2A3B25] transition-colors duration-200 mb-12">
          <ArrowLeft className="w-4 h-4" strokeWidth={2} />
          العودة للرئيسية
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E6EEDB] text-[#5C6E55] text-sm font-semibold mb-4">
            المدونة
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2A3B25] mb-4">
            خدمات الضيافة
          </h1>
          <p className="text-[#5C6E55] max-w-xl mx-auto leading-relaxed">
            مقالات ونصائح حول فن الضيافة العربية والقهوة.
          </p>
        </div>

        {/* Empty state */}
        {articles.length === 0 ? (
          <div className="text-center py-20 rounded-[48px] bg-[#E6EEDB]">
            <p className="text-[#5C6E55] text-base">
              لا توجد مقالات متاحة حالياً.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Link
                href={`/${article.title.split(" ").join("-")}`}
                key={article.id}
                className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-[#D1DBC6]/50 hover:shadow-xl transition-all duration-300">
                {/* Cover image */}
                {article.coverImage ? (
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1A2617]/30 to-transparent" />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-[#E6EEDB] flex items-center justify-center">
                    <span className="text-5xl font-black text-[#050505] ">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-1 p-8">
                  <h2 className="font-bold text-xl text-[#2A3B25] mb-3 line-clamp-2">
                    {article.title}
                  </h2>

                  {article.content && (
                    <p className="text-sm text-[#5C6E55] leading-relaxed line-clamp-3 flex-1 mb-6">
                      {article.content.replace(/<[^>]+>/g, "")}
                    </p>
                  )}

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#D1DBC6]/50 mt-auto">
                    <span className="text-xs text-[#40453c]">
                      {new Date(article.createdAt).toLocaleDateString("ar-SA", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-xs font-bold text-[#E845A8] flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      اقرأ المقال
                      <ArrowLeft className="w-3 h-3" strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
