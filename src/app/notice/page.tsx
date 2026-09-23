"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";
import blogsData from "@/data/blogs.json";

export default function NoticePage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col">
      <Header />

      <main className="flex-1 pb-20">
        <PageHero
          eyebrow="BẢN TIN & SỰ KIỆN"
          title="Tin Tức & Hoạt Động Thương Hiệu"
          description="Cập nhật những hoạt động nổi bật, sự kiện hợp tác quốc tế và kiến thức chăm sóc sức khỏe cùng Kim&apos;s Red Ginseng."
          image="/images/blog/tin-tuc.jpg"
          imageAlt="Tin tức Kim's Red Ginseng"
          imageOpacity={0.9}
        />

        {/* Breadcrumb */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">Trang Chủ</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#b5222a] font-medium">Tin Tức & Blog</span>
          </nav>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                data-scroll-fade="on"
                className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
              >
                <div className="relative aspect-16/10 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#161e27]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-snug group-hover:text-[#b5222a] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center text-xs font-bold text-[#b5222a] group-hover:underline gap-1">
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
