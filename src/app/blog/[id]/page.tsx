import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, Calendar, ArrowLeft, Sparkles } from "lucide-react";
import blogsData from "@/data/blogs.json";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((b) => ({
    id: b.id,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = blogsData.find((b) => b.id === id);

  if (!post) {
    notFound();
  }

  const related = blogsData.filter((b) => b.id !== post.id);

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <Header />

      <main className="flex-1 pb-20">
        <PageHero
          eyebrow={post.category}
          title={post.title}
          description={`${post.date} • Tác giả: Kim's Red Ginseng Việt Nam`}
          image={post.image}
          imageAlt={post.title}
          imageOpacity={0.9}
        />

        {/* Breadcrumb */}
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">Trang Chủ</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/notice" className="hover:text-black transition-colors">Tin Tức</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-medium truncate max-w-xs">{post.title}</span>
          </nav>
        </div>

        {/* Main Article Container */}
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 mt-2">
          <article data-scroll-fade="on" className="bg-white rounded-2xl shadow-xs border border-gray-100 p-6 sm:p-10 lg:p-14 space-y-8">
            {/* Meta */}
            <div className="space-y-4 pb-6 border-b border-gray-100">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-[#b5222a] text-xs font-bold rounded-md uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{post.category}</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                <span>•</span>
                <span>Tác giả: Kim&apos;s Red Ginseng Việt Nam</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 text-sm sm:text-base">
              <p className="font-medium text-gray-900 text-base sm:text-lg leading-relaxed bg-red-50/50 p-4 rounded-xl border-l-4 border-[#b5222a]">
                {post.excerpt}
              </p>
              <div className="whitespace-pre-line text-gray-700 leading-loose space-y-4">
                {post.content}
              </div>
            </div>

            {/* Back link */}
            <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
              <Link
                href="/notice"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#b5222a] hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại danh sách tin tức</span>
              </Link>
            </div>
          </article>

          {/* Related Articles */}
          {related.length > 0 && (
            <div data-scroll-fade="on" className="mt-14 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Bài Viết Khác</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.id}`}
                    className="bg-white rounded-xl p-5 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex gap-4 items-center group"
                  >
                    <div className="relative w-24 h-20 rounded-lg overflow-hidden bg-gray-50 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#b5222a] line-clamp-2 transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs text-gray-400">{item.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
