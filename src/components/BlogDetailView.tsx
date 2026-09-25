"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Eye,
  Share2,
  Check,
  ChevronRight,
  ChevronDown,
  ListOrdered,
  Tag,
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Send,
  ExternalLink,
  Award,
  HelpCircle,
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
  featuredProducts = [],
}: BlogDetailViewProps) {
  const [copied, setCopied] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

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

  const handleShareZalo = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://zalo.me/share?url=${url}`, "_blank", "width=600,height=400");
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setEmailInput("");
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

  const jsonLdFaq =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* Inject SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}

      {/* Breadcrumb Bar */}
      <div className="border-b border-[#EAE4DC] bg-[#FAF9F6] py-3.5">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-[#666666]">
            <Link href="/" className="hover:text-[#B5222A] transition-colors">Trang Chủ</Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#A8A196]" />
            <Link href="/tin-tuc" className="hover:text-[#B5222A] transition-colors">Tin Tức & Hoạt Động</Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#A8A196]" />
            <span className="font-semibold text-[#B5222A] truncate max-w-[280px] sm:max-w-md md:max-w-lg">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#FAF7F2] py-8 sm:py-12">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            
            {/* ─── LEFT COLUMN: ARTICLE CONTENT (8/12) ─── */}
            <main className="lg:col-span-8">
              <article className="rounded-3xl border border-[#EAE4DC] bg-white p-6 shadow-sm sm:p-10 md:p-12">
                
                {/* 1. Header & Meta */}
                <header className="space-y-5 pb-8 border-b border-[#EAE4DC]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4B193E] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs">
                      <Award className="h-3.5 w-3.5 text-[#F0831F]" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#B5222A] bg-red-50 px-2.5 py-1 rounded-full">
                      Tin Quốc Tế
                    </span>
                  </div>

                  <h1 className="font-sans text-2xl font-extrabold leading-tight text-[#2D2D2D] sm:text-3xl md:text-4xl tracking-tight">
                    {post.title}
                  </h1>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs sm:text-sm text-[#666666]">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full border border-[#EAE4DC] bg-[#FAF9F6]">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            sizes="32px"
                            className="object-contain p-1"
                          />
                        </div>
                        <span className="font-bold text-[#2D2D2D]">{post.author.name}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-[#B5222A]" />
                        <span>{post.formattedDate}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-[#F0831F]" />
                        <span>{post.readTime}</span>
                      </div>

                      <div className="flex items-center gap-1.5 hidden sm:flex">
                        <Eye className="h-4 w-4 text-[#888888]" />
                        <span>{post.viewsCount.toLocaleString()} lượt xem</span>
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
                        onClick={handleShareZalo}
                        title="Chia sẻ Zalo"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0068FF]/10 text-[#0068FF] hover:bg-[#0068FF] hover:text-white transition-colors"
                      >
                        <span className="text-[10px] font-bold">Zalo</span>
                      </button>
                      <button
                        onClick={handleCopyLink}
                        title="Sao chép liên kết"
                        className="flex items-center gap-1.5 rounded-full border border-[#EAE4DC] bg-[#FAF9F6] px-3 py-1 text-xs font-semibold text-[#4B4F52] hover:border-[#B5222A] hover:text-[#B5222A] transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-green-600" />
                            <span className="text-green-600">Đã chép link!</span>
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

                {/* 2. Interactive Table of Contents */}
                {post.tableOfContents && post.tableOfContents.length > 0 && (
                  <div className="my-8 rounded-2xl border border-[#EAE4DC] bg-[#FAF9F6] p-5 sm:p-6 shadow-xs">
                    <div
                      onClick={() => setIsTocOpen(!isTocOpen)}
                      className="flex cursor-pointer items-center justify-between font-sans text-lg font-bold text-[#4B193E]"
                    >
                      <div className="flex items-center gap-2.5">
                        <ListOrdered className="h-5 w-5 text-[#B5222A]" />
                        <span>Mục Lục Bài Viết</span>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-[#666666] transition-transform duration-200 ${
                          isTocOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {isTocOpen && (
                      <ol className="mt-4 space-y-2 border-t border-[#EAE4DC]/80 pt-4 text-sm">
                        {post.tableOfContents.map((item, idx) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className="flex items-start gap-2.5 text-[#4B4F52] hover:text-[#B5222A] transition-colors leading-snug py-0.5"
                            >
                              <span className="font-sans font-bold text-[#B5222A] shrink-0 text-xs mt-0.5">
                                {idx + 1}.
                              </span>
                              <span>{item.title.replace(/^\d+\.\s*/, "")}</span>
                            </a>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                )}

                {/* 3. Rich Editorial Article Body */}
                <div
                  className="prose prose-lg max-w-none text-[#4B4F52] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />

                {/* 4. FAQ Accordion (If exists) */}
                {post.faqs && post.faqs.length > 0 && (
                  <div className="my-10 space-y-4 rounded-2xl border border-[#EAE4DC] bg-[#FAF9F6] p-6 sm:p-8">
                    <div className="flex items-center gap-2.5 font-sans text-xl font-bold text-[#4B193E]">
                      <HelpCircle className="h-6 w-6 text-[#B5222A]" />
                      <span>Giải Đáp Thắc Mắc Thường Gặp (FAQ)</span>
                    </div>
                    <div className="divide-y divide-[#EAE4DC] border-t border-[#EAE4DC] pt-2">
                      {post.faqs.map((faq, idx) => {
                        const isOpen = openFaqIndex === idx;
                        return (
                          <div key={idx} className="py-4">
                            <button
                              type="button"
                              onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                              className="flex w-full items-center justify-between text-left font-bold text-[#2D2D2D] hover:text-[#B5222A] transition-colors gap-4"
                            >
                              <span className="text-sm sm:text-base">{faq.question}</span>
                              <ChevronDown
                                className={`h-4 w-4 shrink-0 text-[#888888] transition-transform duration-200 ${
                                  isOpen ? "rotate-180 text-[#B5222A]" : ""
                                }`}
                              />
                            </button>
                            {isOpen && (
                              <p className="mt-3 text-sm text-[#4B4F52] leading-relaxed pl-2 border-l-2 border-[#B5222A] bg-white/60 p-3 rounded-r-lg">
                                {faq.answer}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 5. Tags Cloud */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-10 flex flex-wrap items-center gap-2 pt-6 border-t border-[#EAE4DC]">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#2D2D2D]">
                      <Tag className="h-3.5 w-3.5 text-[#B5222A]" />
                      Từ khóa:
                    </span>
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href="/tin-tuc"
                        className="rounded-lg border border-[#EAE4DC] bg-[#FAF9F6] px-3 py-1 text-xs font-medium text-[#4B4F52] hover:border-[#B5222A] hover:text-[#B5222A] transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                )}

                {/* 6. Author Bio Card */}
                <div className="mt-10 rounded-2xl border border-[#EAE4DC] bg-gradient-to-r from-[#FAF9F6] to-white p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xs">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-[#B5222A] shadow-md bg-white">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      sizes="80px"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <h4 className="font-sans text-lg font-bold text-[#2D2D2D]">
                        {post.author.name}
                      </h4>
                      <span className="inline-flex items-center rounded-full bg-[#4B193E]/10 px-2.5 py-0.5 text-xs font-semibold text-[#4B193E]">
                        Tác giả đã xác minh
                      </span>
                    </div>
                    <p className="text-xs font-medium text-[#B5222A]">{post.author.role}</p>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                      {post.author.bio}
                    </p>
                  </div>
                </div>

                {/* 7. Prev / Next Article Navigation */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-[#EAE4DC]">
                  {prevPost ? (
                    <Link
                      href={`/tin-tuc/${prevPost.id}`}
                      className="group flex flex-col justify-between rounded-xl border border-[#EAE4DC] p-4 bg-[#FAF9F6] hover:border-[#B5222A] hover:bg-white transition-all duration-200"
                    >
                      <div className="flex items-center gap-1.5 text-xs text-[#888888] font-bold group-hover:text-[#B5222A]">
                        <ArrowLeft className="h-3.5 w-3.5" />
                        <span>BÀI VIẾT TRƯỚC</span>
                      </div>
                      <div className="mt-2 text-sm font-bold text-[#2D2D2D] group-hover:text-[#B5222A] line-clamp-2 transition-colors">
                        {prevPost.title}
                      </div>
                    </Link>
                  ) : <div />}

                  {nextPost ? (
                    <Link
                      href={`/tin-tuc/${nextPost.id}`}
                      className="group flex flex-col justify-between rounded-xl border border-[#EAE4DC] p-4 bg-[#FAF9F6] hover:border-[#B5222A] hover:bg-white transition-all duration-200 text-right sm:text-right"
                    >
                      <div className="flex items-center justify-end gap-1.5 text-xs text-[#888888] font-bold group-hover:text-[#B5222A]">
                        <span>BÀI TIẾP THEO</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                      <div className="mt-2 text-sm font-bold text-[#2D2D2D] group-hover:text-[#B5222A] line-clamp-2 transition-colors">
                        {nextPost.title}
                      </div>
                    </Link>
                  ) : <div />}
                </div>

              </article>
            </main>

            {/* ─── RIGHT COLUMN: STICKY SIDEBAR (4/12) ─── */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Widget 1: Brand Trust Card */}
              <div className="rounded-2xl border border-[#EAE4DC] bg-white p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4B193E] text-white shadow-sm">
                    <ShieldCheck className="h-6 w-6 text-[#F0831F]" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold text-[#2D2D2D]">NA Korea</h3>
                    <p className="text-xs text-[#B5222A] font-semibold">Nhà phân phối độc quyền chính thức</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  Đại diện nhập khẩu và bảo chứng chất lượng dòng sản phẩm Hồng sâm 6 năm tuổi Kim&apos;s Red Ginseng chính hãng từ Punggi Hàn Quốc.
                </p>
                <div className="pt-2 border-t border-[#EAE4DC] flex items-center justify-between text-xs font-bold">
                  <Link href="/ve-nha-nhap-khau" className="text-[#B5222A] hover:underline flex items-center gap-1">
                    <span>Tìm hiểu NA Korea</span>
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                  <Link href="/chung-chi-chat-luong" className="text-[#4B193E] hover:underline flex items-center gap-1">
                    <span>Chứng chỉ quốc tế</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Widget 2: Featured Products In Article */}
              {featuredProducts.length > 0 && (
                <div className="rounded-2xl border border-[#EAE4DC] bg-white p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-sans text-base font-bold text-[#4B193E] flex items-center gap-2">
                      <Award className="h-4 w-4 text-[#B5222A]" />
                      <span>Sản Phẩm Tiêu Biểu</span>
                    </h3>
                    <Link href="/san-pham" className="text-[11px] font-bold text-[#B5222A] hover:underline">
                      Tất cả
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {featuredProducts.map((prod) => (
                      <Link
                        key={prod.id}
                        href={`/san-pham/${prod.id}`}
                        className="group flex items-center gap-3 rounded-xl border border-[#EAE4DC] p-2.5 hover:border-[#B5222A] hover:shadow-sm transition-all"
                      >
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#FAF9F6] border border-[#EAE4DC]">
                          <Image
                            src={prod.image}
                            alt={prod.title}
                            fill
                            sizes="64px"
                            className="object-contain p-1 group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex-1 min-w-0 space-y-1">
                          <h4 className="text-xs font-bold text-[#2D2D2D] line-clamp-2 group-hover:text-[#B5222A] transition-colors leading-snug">
                            {prod.title}
                          </h4>
                          <div className="text-xs font-extrabold text-[#B5222A]">
                            {prod.price}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Widget 3: Recent & Popular Articles */}
              <div className="rounded-2xl border border-[#EAE4DC] bg-white p-6 shadow-sm space-y-4">
                <h3 className="font-sans text-base font-bold text-[#4B193E]">
                  Bài Viết Đáng Chú Ý
                </h3>

                <div className="space-y-3.5">
                  {relatedPosts.map((item, idx) => (
                    <Link
                      key={item.id}
                      href={`/tin-tuc/${item.id}`}
                      className="group flex gap-3 items-start"
                    >
                      <span className="font-sans text-lg font-black text-[#A8A196] group-hover:text-[#B5222A] shrink-0 w-5">
                        0{idx + 1}
                      </span>
                      <div className="space-y-1 min-w-0 flex-1">
                        <h4 className="text-xs sm:text-sm font-bold text-[#2D2D2D] line-clamp-2 group-hover:text-[#B5222A] transition-colors leading-snug">
                          {item.title}
                        </h4>
                        <div className="text-[11px] text-[#888888] flex items-center gap-2">
                          <span>{item.formattedDate}</span>
                          <span>•</span>
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Widget 4: Newsletter Box */}
              <div className="rounded-2xl border border-[#EAE4DC] bg-gradient-to-br from-[#4B193E] to-[#2D0C24] p-6 text-white shadow-md space-y-3.5">
                <div className="flex items-center gap-2 font-sans text-base font-bold text-[#F0831F]">
                  <Send className="h-4 w-4" />
                  <span>Bản Tin Sức Khỏe Kim&apos;s</span>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  Đăng ký nhận cẩm nang chăm sóc sức khỏe với sâm Punggi và ưu đãi 10% cho đơn hàng đầu tiên.
                </p>

                {emailSubscribed ? (
                  <div className="rounded-xl bg-white/10 p-3 text-center text-xs font-bold text-green-300 border border-white/20">
                    ✓ Cảm ơn bạn! Đã đăng ký nhận bản tin thành công.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2">
                    <input
                      type="email"
                      required
                      placeholder="Nhập email của bạn..."
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full rounded-xl bg-white/10 border border-white/20 px-3.5 py-2.5 text-xs text-white placeholder-white/50 focus:border-[#F0831F] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#B5222A] hover:bg-[#991C23] py-2.5 text-xs font-bold text-white transition-colors shadow-sm"
                    >
                      Đăng Ký Ngay
                    </button>
                  </form>
                )}
              </div>

              {/* Widget 5: Direct Hotline Consultation */}
              <div className="rounded-2xl border border-[#EAE4DC] bg-[#FFF9ED] p-6 shadow-xs text-center space-y-3">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#B5222A] text-white">
                  <PhoneCall className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-[#2D2D2D]">Tư Vấn Chuyên Gia Sâm Hàn Quốc</h4>
                  <p className="text-xs text-[#666666] mt-0.5">Hỗ trợ 24/7 từ chuyên viên dinh dưỡng</p>
                </div>
                <a
                  href="tel:0963167888"
                  className="inline-block font-sans text-lg font-black text-[#B5222A] hover:underline"
                >
                  0963.167.888
                </a>
              </div>

            </aside>

          </div>
        </div>
      </div>

      {/* ─── BOTTOM SECTION: RELATED POSTS CARDS ─── */}
      <section className="border-t border-[#EAE4DC] bg-white py-14">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B5222A]">
                CÓ THỂ BẠN QUAN TÂM
              </span>
              <h2 className="font-sans text-2xl font-extrabold text-[#2D2D2D] sm:text-3xl mt-1 tracking-tight">
                Bài Viết & Hoạt Động Khác
              </h2>
            </div>
            <Link
              href="/tin-tuc"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B5222A] hover:underline"
            >
              <span>Xem tất cả tin tức</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((item) => (
              <Link
                key={item.id}
                href={`/tin-tuc/${item.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#EAE4DC] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#B5222A] hover:shadow-lg"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-md bg-[#4B193E]/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-[#888888]">
                      <Calendar className="h-3.5 w-3.5 text-[#B5222A]" />
                      <span>{item.formattedDate}</span>
                    </div>
                    <h3 className="font-sans text-base font-bold text-[#2D2D2D] leading-snug group-hover:text-[#B5222A] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-[#B5222A] group-hover:underline pt-2 border-t border-[#EAE4DC]/60">
                    <span>Đọc toàn bộ bài viết</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
