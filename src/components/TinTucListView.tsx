"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { TIN_TUC_SUB_NAV } from "@/lib/subNavItems";
import { ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
import blogsData from "@/data/blogs.json";
import { BlogPost } from "@/types/blog";

export function TinTucListView() {
  const blogs = blogsData as unknown as BlogPost[];
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");

  const categories = [
    "Tất cả",
    ...Array.from(new Set(blogs.map((b) => b.category))),
  ];

  const filteredBlogs =
    selectedCategory === "Tất cả"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  const featuredPost = blogs[0];
  const listPosts = filteredBlogs;

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      <Header overlay />

      <main className="flex-1 pb-20">
        <PageHero
          eyebrow="BẢN TIN & SỰ KIỆN"
          showEyebrow={false}
          title="Tin Tức & Hoạt Động Thương Hiệu"
          description="Cập nhật những dấu mốc vinh danh quốc tế, sự kiện hợp tác chiến lược và kiến thức chăm sóc sức khỏe cùng Hồng Sâm Kim."
          image="/images/blog/tin-tuc.jpg"
          imageAlt="Tin tức Hồng Sâm Kim"
          imageOpacity={0.9}
          subNavItems={TIN_TUC_SUB_NAV}
          currentHref="/tin-tuc"
        />

        {/* Breadcrumb */}
        <div className="border-b border-[#EEEEEE] bg-[#F8F8F8] py-3.5">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <nav className="flex items-center space-x-2 text-xs text-[#666666]">
              <Link href="/" className="hover:text-[#4B193E] transition-colors">Trang Chủ</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#A8A196]" />
              <Link href="/tin-tuc" className="hover:text-[#4B193E] transition-colors">Tin Tức</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#A8A196]" />
              <span className="text-[#4B193E] font-semibold">Tất Cả Bản Tin</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 mt-8 space-y-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#181818] text-white shadow-sm scale-102"
                      : "border border-[#EEEEEE] bg-white text-[#333333] hover:border-[#4B193E] hover:text-[#4B193E]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Featured Post Spotlight (When 'Tất cả' is selected) */}
          {selectedCategory === "Tất cả" && featuredPost && (
            <div className="rounded-3xl border border-[#EEEEEE] bg-white p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 relative aspect-16/10 rounded-2xl overflow-hidden bg-[#181818] border border-[#EEEEEE] shadow-xs">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    priority
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-[#4B193E] px-3.5 py-1 text-xs font-bold text-white shadow-md">
                    TIÊU ĐIỂM
                  </span>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-[#888888]">
                    <span className="rounded-md bg-[#181818]/10 text-[#181818] px-2.5 py-1 font-bold">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-[#4B193E]" />
                      {featuredPost.formattedDate}
                    </span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-extrabold text-[#111111] leading-snug tracking-tight hover:text-[#4B193E] transition-colors">
                    <Link href={`/tin-tuc/${featuredPost.id}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-[#666666] leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/tin-tuc/${featuredPost.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#4B193E] px-6 py-3 text-sm font-bold text-white hover:bg-[#3A1230] transition-all shadow-sm group"
                    >
                      <span>Đọc bài phóng sự</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listPosts.map((post) => (
              <Link
                key={post.id}
                href={`/tin-tuc/${post.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#EEEEEE] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#4B193E] hover:shadow-lg"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-[#181818]/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-[#888888]">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-[#4B193E]" />
                        <span>{post.formattedDate}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-[#D4A359]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-sans text-base sm:text-lg font-bold text-[#111111] leading-snug group-hover:text-[#4B193E] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#EEEEEE]/60 pt-3 text-xs font-bold text-[#4B193E]">
                    <span className="group-hover:underline">Xem chi tiết bài viết</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
