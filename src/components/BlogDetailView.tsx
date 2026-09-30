"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Share2,
  Check,
  ChevronRight,
  ChevronDown,
  ListOrdered,
  Tag,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { BlogPost } from "@/types/blog";
import { Product } from "@/types/product";

interface BlogDetailViewProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  prevPost?: BlogPost | null;
  nextPost?: BlogPost | null;
  featuredProducts?: Product[];
}

export function BlogDetailView({
  post,
  relatedPosts,
  prevPost,
  nextPost,
}: BlogDetailViewProps) {
  const [copied, setCopied] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(true);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareFacebook = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "width=600,height=400");
    }
  };

  // Structured Data JSON-LD for SEO
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    image: [post.image],
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: [
      {
        "@type": "Organization",
        name: post.author.name,
        url: "https://kimsredginseng.com",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "NA Korea - Kim's Red Ginseng Vietnam",
      logo: {
        "@type": "ImageObject",
        url: "https://kimsredginseng.com/wp-content/uploads/2024/07/logo-kimsredginseng-3.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  };

  return (
    <>
      {/* Inject SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      {/* Breadcrumb Bar */}
      <div className="border-b border-[#EEEEEE] bg-[#F8F8F8] py-3">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-[#666666]">
            <Link href="/" className="hover:text-[#4B193E] transition-colors">Trang Chủ</Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#A8A196]" />
            <Link href="/tin-tuc" className="hover:text-[#4B193E] transition-colors">Tin Tức & Hoạt Động</Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#A8A196]" />
            <span className="font-semibold text-[#4B193E] truncate max-w-[240px] sm:max-w-md md:max-w-lg">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#F8F8F8] py-8 sm:py-12">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            
            {/* ─── LEFT COLUMN: ARTICLE CONTENT (8/12) ─── */}
            <main className="lg:col-span-8">
              <article className="rounded-2xl border border-[#EEEEEE] bg-white p-6 sm:p-10 md:p-12 shadow-xs">
                
                {/* 1. Article Header */}
                <header className="space-y-4 pb-6 border-b border-[#EEEEEE]">
                  <div>
                    <span className="inline-block rounded-full bg-[#4B193E]/10 px-3 py-1 text-xs font-semibold text-[#4B193E]">
                      {post.category}
                    </span>
                  </div>

                  <h1 className="font-sans text-2xl font-extrabold leading-tight text-[#111111] sm:text-3xl md:text-4xl tracking-tight">
                    {post.title}
                  </h1>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs sm:text-sm text-[#666666]">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="font-semibold text-[#111111]">{post.author.name}</span>
                      <span className="text-[#CCCCCC]">•</span>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-[#888888]" />
                        <span>{post.formattedDate}</span>
                      </div>
                      <span className="text-[#CCCCCC]">•</span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[#888888]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Social Share Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleShareFacebook}
                        title="Chia sẻ Facebook"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors"
                      >
                        <span className="text-xs font-bold">f</span>
                      </button>
                      <button
                        onClick={handleCopyLink}
                        title="Sao chép liên kết"
                        className="flex items-center gap-1.5 rounded-full border border-[#EEEEEE] bg-[#F8F8F8] px-3 py-1.5 text-xs font-medium text-[#333333] hover:border-[#4B193E] hover:text-[#4B193E] transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-green-600" />
                            <span className="text-green-600">Đã chép link</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="h-3.5 w-3.5" />
                            <span>Chia sẻ</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </header>

                {/* 2. Table of Contents */}
                {post.tableOfContents && post.tableOfContents.length > 0 && (
                  <div className="my-8 rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] p-5">
                    <button
                      type="button"
                      onClick={() => setIsTocOpen(!isTocOpen)}
                      className="flex w-full items-center justify-between text-left font-sans text-base font-bold text-[#111111]"
                    >
                      <div className="flex items-center gap-2">
                        <ListOrdered className="h-4 w-4 text-[#4B193E]" />
                        <span>Mục lục nội dung</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-[#666666] transition-transform duration-200 ${
                          isTocOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isTocOpen && (
                      <ol className="mt-3 space-y-1.5 border-t border-[#EEEEEE] pt-3 text-sm">
                        {post.tableOfContents.map((item, idx) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className="flex items-start gap-2 text-[#333333] hover:text-[#4B193E] transition-colors leading-snug py-0.5"
                            >
                              <span className="font-semibold text-[#888888] shrink-0 text-xs mt-0.5">
                                {idx + 1}.
                              </span>
                              <span>{item.title}</span>
                            </a>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                )}

                {/* 3. Article Body */}
                <div
                  className="prose prose-lg max-w-none text-[#333333] leading-relaxed pt-2"
                  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />

                {/* 4. Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-10 flex flex-wrap items-center gap-2 pt-6 border-t border-[#EEEEEE]">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#111111]">
                      <Tag className="h-3.5 w-3.5 text-[#888888]" />
                      Từ khóa:
                    </span>
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href="/tin-tuc"
                        className="rounded-md border border-[#EEEEEE] bg-[#F8F8F8] px-2.5 py-1 text-xs text-[#555555] hover:border-[#4B193E] hover:text-[#4B193E] transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                )}

                {/* 5. Editorial Signature */}
                <div className="mt-8 rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[#EEEEEE] bg-white p-1">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      sizes="56px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="space-y-1 text-center sm:text-left flex-1">
                    <h4 className="font-sans text-sm font-bold text-[#111111]">
                      {post.author.name}
                    </h4>
                    <p className="text-xs text-[#4B193E] font-medium">{post.author.role}</p>
                    <p className="text-xs text-[#666666] leading-relaxed pt-1">
                      {post.author.bio}
                    </p>
                  </div>
                </div>

                {/* 6. Prev / Next Navigation */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#EEEEEE]">
                  {prevPost ? (
                    <Link
                      href={`/tin-tuc/${prevPost.id}`}
                      className="group flex flex-col justify-between rounded-xl border border-[#EEEEEE] p-4 bg-[#F8F8F8] hover:border-[#4B193E] hover:bg-white transition-all"
                    >
                      <div className="flex items-center gap-1.5 text-xs text-[#888888] font-semibold group-hover:text-[#4B193E]">
                        <ArrowLeft className="h-3.5 w-3.5" />
                        <span>Bài viết trước</span>
                      </div>
                      <div className="mt-2 text-sm font-bold text-[#111111] group-hover:text-[#4B193E] line-clamp-2 transition-colors">
                        {prevPost.title}
                      </div>
                    </Link>
                  ) : <div />}

                  {nextPost ? (
                    <Link
                      href={`/tin-tuc/${nextPost.id}`}
                      className="group flex flex-col justify-between rounded-xl border border-[#EEEEEE] p-4 bg-[#F8F8F8] hover:border-[#4B193E] hover:bg-white transition-all text-left sm:text-right"
                    >
                      <div className="flex items-center justify-start sm:justify-end gap-1.5 text-xs text-[#888888] font-semibold group-hover:text-[#4B193E]">
                        <span>Bài tiếp theo</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                      <div className="mt-2 text-sm font-bold text-[#111111] group-hover:text-[#4B193E] line-clamp-2 transition-colors">
                        {nextPost.title}
                      </div>
                    </Link>
                  ) : <div />}
                </div>

              </article>
            </main>

            {/* ─── RIGHT COLUMN: CLEAN SIDEBAR (4/12) ─── */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Widget 1: NA Korea Brand Card */}
              <div className="rounded-2xl border border-[#EEEEEE] bg-white p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4B193E]/10 text-[#4B193E]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-[#111111]">NA Korea</h3>
                    <p className="text-xs text-[#666666]">Nhà phân phối độc quyền chính thức</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  Đại diện nhập khẩu và phân phối độc quyền thương hiệu Kim&apos;s Red Ginseng (Punggi, Hàn Quốc) tại thị trường Việt Nam.
                </p>
                <div className="pt-2 border-t border-[#EEEEEE] flex items-center justify-between text-xs font-semibold">
                  <Link href="/ve-nha-nhap-khau" className="text-[#4B193E] hover:underline flex items-center gap-1">
                    <span>Về chúng tôi</span>
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                  <Link href="/chung-chi-chat-luong" className="text-[#666666] hover:text-[#111111] flex items-center gap-1">
                    <span>Chứng chỉ</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Widget 2: Recent Articles */}
              <div className="rounded-2xl border border-[#EEEEEE] bg-white p-6 shadow-xs space-y-4">
                <h3 className="font-sans text-sm font-bold text-[#111111] uppercase tracking-wider">
                  Tin Tức Mới Nhất
                </h3>

                <div className="divide-y divide-[#EEEEEE]">
                  {relatedPosts.map((item) => (
                    <Link
                      key={item.id}
                      href={`/tin-tuc/${item.id}`}
                      className="group block py-3 first:pt-0 last:pb-0 space-y-1"
                    >
                      <div className="text-[11px] text-[#888888]">
                        {item.formattedDate}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#111111] line-clamp-2 group-hover:text-[#4B193E] transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>

            </aside>

          </div>
        </div>
      </div>

      {/* ─── BOTTOM SECTION: RELATED ARTICLES ─── */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-[#EEEEEE] bg-white py-12">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-sans text-xl font-bold text-[#111111] sm:text-2xl">
                Bài Viết Khác
              </h2>
              <Link
                href="/tin-tuc"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#4B193E] hover:underline"
              >
                <span>Xem tất cả tin tức</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  href={`/tin-tuc/${item.id}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[#EEEEEE] bg-white transition-all hover:border-[#4B193E] hover:shadow-sm"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5 space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs text-[#888888]">
                        <Calendar className="h-3 w-3 text-[#888888]" />
                        <span>{item.formattedDate}</span>
                      </div>
                      <h3 className="font-sans text-sm font-bold text-[#111111] leading-snug group-hover:text-[#4B193E] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-semibold text-[#4B193E] pt-2 border-t border-[#EEEEEE]">
                      <span>Xem chi tiết</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
