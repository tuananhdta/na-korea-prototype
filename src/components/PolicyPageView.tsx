"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronRight,
  ShieldCheck,
  FileText,
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Building2,
  Award,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileDrawer } from "@/components/MobileDrawer";
import policiesData from "@/data/policies.json";
import { SITE_CONFIG } from "@/lib/siteConfig";

interface FAQItem {
  question: string;
  answer: string;
}

interface PolicyItem {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  summaryHighlights: string[];
  content: string;
  faqs?: FAQItem[];
}

const POLICIES_NAV = [
  { slug: "chinh-sach-bao-mat", label: "Chính sách bảo vệ thông tin cá nhân", href: "/chinh-sach-bao-mat" },
  { slug: "huong-dan-mua-hang", label: "Hướng dẫn mua hàng", href: "/huong-dan-mua-hang" },
  { slug: "chinh-sach-doi-tra", label: "Chính sách đổi trả hàng", href: "/chinh-sach-doi-tra" },
  { slug: "chinh-sach-kiem-hang", label: "Chính sách kiểm hàng", href: "/chinh-sach-kiem-hang" },
  { slug: "chinh-sach-giao-hang", label: "Chính sách giao hàng", href: "/chinh-sach-giao-hang" },
  { slug: "chinh-sach-thanh-toan", label: "Chính sách thanh toán", href: "/chinh-sach-thanh-toan" },
];

export function PolicyPageView({ slug }: { slug: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const pathname = usePathname();

  const dataMap = policiesData as Record<string, PolicyItem>;
  const policy = dataMap[slug];

  if (!policy) {
    return (
      <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
        <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
        <main className="flex-1 max-w-[1240px] mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-[#2D2D2D]">Không tìm thấy chính sách</h1>
          <Link href="/" className="mt-4 inline-block text-[#B5222A] hover:underline">
            Quay lại trang chủ
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Generate SEO & GEO Structured Data (JSON-LD)
  const baseUrl = SITE_CONFIG.siteUrl;
  const pageUrl = `${baseUrl}/${policy.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang Chủ",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Chính Sách & Quy Định",
        item: `${baseUrl}/#chinh-sach`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: policy.title,
        item: pageUrl,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: policy.metaTitle || policy.title,
    description: policy.metaDescription,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    inLanguage: "vi-VN",
    author: {
      "@type": "Organization",
      name: "Công ty TNHH Thương mại NA Korea",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Na Korea - Kim's Red Ginseng Việt Nam",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/wholesale/Logo-Na-Korea-01-300x87.png`,
      },
    },
    datePublished: "2024-01-01T08:00:00+07:00",
    dateModified: new Date().toISOString(),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Công ty TNHH Thương mại NA Korea",
    alternateName: "Kim's Red Ginseng Việt Nam",
    url: baseUrl,
    logo: `${baseUrl}/images/wholesale/Logo-Na-Korea-01-300x87.png`,
    telephone: "+84968400141",
    email: "na.koreaginseng@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Số 31 liền kề 3, khu nhà ở 90 Nguyễn Tuân, Phường Thanh Xuân Trung",
      addressLocality: "Quận Thanh Xuân",
      addressRegion: "Hà Nội",
      postalCode: "100000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.9984",
      longitude: "105.8032",
    },
    areaServed: {
      "@type": "Country",
      name: "Vietnam",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  };

  const faqSchema = policy.faqs && policy.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: policy.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      {/* Inject Structured Data for Search Engines & Generative AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex-1 pb-20">
        {/* Banner Hero */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#4B193E] via-[#35102c] to-[#1a0815] text-white py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-[1240px] mx-auto relative z-10 space-y-3">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight drop-shadow-sm">
              {policy.title}
            </h1>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
              Các điều khoản và quy định minh bạch được ban hành bởi <strong>CÔNG TY TNHH THƯƠNG MẠI NA KOREA</strong> – Đơn vị nhập khẩu & phân phối độc quyền Hồng sâm Kim&apos;s Red Ginseng tại Việt Nam.
            </p>
          </div>
        </div>

        {/* Breadcrumb Navigation (Rich SEO) */}
        <div className="bg-white border-b border-[#E5E5E5]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-[#666666]">
              <Link href="/" className="hover:text-[#2D2D2D] transition-colors">
                Trang Chủ
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#666666]">Chính sách</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#2D2D2D] font-semibold truncate max-w-xs sm:max-w-md">
                {policy.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-8 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Article Content (Left Column) */}
            <div className="lg:col-span-8 space-y-8">
              <article className="bg-white rounded-2xl border border-[#E5E5E5] p-6 sm:p-10 shadow-xs">
                {/* Document Header */}
                <div className="border-b border-[#E5E5E5] pb-6 mb-8">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-100 text-[#B5222A] uppercase tracking-wider">
                      <FileText className="w-3 h-3" />
                      Văn Bản Pháp Lý
                    </span>
                    <span className="text-xs text-[#888888]">
                      Cập nhật mới nhất: 2026 ｜ Na Korea
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
                    {policy.title}
                  </h2>
                  <p className="text-xs text-[#666666] mt-2">
                    Áp dụng cho toàn bộ hoạt động mua sắm, giao nhận và hậu mãi trên toàn quốc của Na Korea
                  </p>
                </div>

                {/* GEO & AI Executive Summary (Tối ưu Trích xuất bởi AI Overviews & Search Engines) */}
                {policy.summaryHighlights && policy.summaryHighlights.length > 0 && (
                  <div className="mb-8 rounded-xl border border-red-200/80 bg-gradient-to-br from-red-50/70 to-amber-50/40 p-5 sm:p-6 shadow-2xs">
                    <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[#B5222A]">
                      <CheckCircle2 className="w-4 h-4 text-[#B5222A]" />
                      <span>Tóm Tắt Điểm Trọng Tâm (Key Takeaways)</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#4B4F52]">
                      {policy.summaryHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-[#B5222A] font-bold text-sm shrink-0 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Main Rendered Policy HTML */}
                <div
                  className="policy-content text-[#4B4F52] text-sm sm:text-[15px] leading-relaxed space-y-4 [&_h1]:text-xl [&_h1]:sm:text-2xl [&_h1]:font-bold [&_h1]:text-[#2D2D2D] [&_h1]:mt-8 [&_h1]:mb-3 [&_h2]:text-lg [&_h2]:sm:text-xl [&_h2]:font-bold [&_h2]:text-[#2D2D2D] [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:pt-4 [&_h2]:border-t [&_h2]:border-[#E5E5E5] [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-[#2D2D2D] [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-3.5 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_ol]:space-y-1.5 [&_li]:leading-relaxed [&_strong]:text-[#2D2D2D] [&_strong]:font-bold [&_a]:text-[#B5222A] [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: policy.content }}
                />

                {/* Support Hotline Notice */}
                <div className="mt-10 pt-6 border-t border-[#E5E5E5] bg-gray-50/80 rounded-xl p-5 text-xs sm:text-sm text-[#4B4F52] space-y-2">
                  <div className="font-bold text-[#2D2D2D] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#B5222A]" />
                    <span>Cần hỗ trợ trực tiếp hoặc giải đáp khiếu nại?</span>
                  </div>
                  <p className="leading-relaxed text-xs sm:text-sm">
                    Bộ phận Chăm sóc Khách hàng của <strong>Công ty TNHH Thương mại NA Korea</strong> luôn sẵn sàng hỗ trợ Quý khách hàng qua Hotline: <strong>0968.400.141</strong> hoặc Email: <strong>na.koreaginseng@gmail.com</strong>.
                  </p>
                </div>
              </article>

              {/* FAQ Accordion Section (Tối ưu GEO / Rich Snippets) */}
              {policy.faqs && policy.faqs.length > 0 && (
                <section aria-labelledby="faq-section-title" className="bg-white rounded-2xl border border-[#E5E5E5] p-6 sm:p-8 shadow-xs">
                  <div className="flex items-center gap-2 mb-6 border-b border-[#E5E5E5] pb-4">
                    <HelpCircle className="w-5 h-5 text-[#B5222A]" />
                    <h3 id="faq-section-title" className="text-lg sm:text-xl font-bold text-[#2D2D2D]">
                      Câu Hỏi Thường Gặp (FAQ)
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {policy.faqs.map((faq, index) => {
                      const isOpen = openFaqIndex === index;
                      return (
                        <div
                          key={index}
                          className="border border-[#E5E5E5] rounded-xl overflow-hidden transition-all duration-200"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                            className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs sm:text-sm text-[#2D2D2D] hover:text-[#B5222A] bg-gray-50/50 hover:bg-gray-50 transition-colors"
                            aria-expanded={isOpen}
                          >
                            <span className="pr-4">{faq.question}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-[#666666] shrink-0 transition-transform duration-200 ${
                                isOpen ? "rotate-180 text-[#B5222A]" : ""
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="p-4 pt-2 text-xs sm:text-sm text-[#4B4F52] bg-white border-t border-gray-100 leading-relaxed">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar (Right Column) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Other useful links navigation */}
              <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-4">
                  <FileText className="w-5 h-5 text-[#B5222A]" />
                  <h3 className="font-bold text-base text-[#2D2D2D]">
                    Liên Kết Hữu Ích
                  </h3>
                </div>

                <nav aria-label="Danh mục chính sách" className="space-y-1.5">
                  {POLICIES_NAV.map((item) => {
                    const isActive = pathname === item.href || slug === item.slug;
                    return (
                      <Link
                        key={item.slug}
                        href={item.href}
                        className={`flex items-center justify-between p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                          isActive
                            ? "bg-[#B5222A] text-white shadow-xs"
                            : "text-[#4B4F52] hover:bg-gray-50 hover:text-[#B5222A]"
                        }`}
                      >
                        <span className="truncate pr-2">{item.label}</span>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 ${
                            isActive ? "text-white" : "text-gray-400"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* GEO / Local Entity Card (Tối ưu Local Business SEO) */}
              <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-3">
                  <Building2 className="w-4 h-4 text-[#B5222A]" />
                  <h4 className="font-bold text-sm text-[#2D2D2D]">
                    Đơn Vị Nhập Khẩu Độc Quyền
                  </h4>
                </div>

                <div className="space-y-3 text-xs text-[#4B4F52]">
                  <p className="font-bold text-[#2D2D2D] text-sm">
                    CÔNG TY TNHH THƯƠNG MẠI NA KOREA
                  </p>
                  <p className="text-[11px] text-[#666666]">
                    GPĐKKD/MST: <strong>0109946846</strong> do Sở Kế hoạch và Đầu tư TP Hà Nội cấp.
                  </p>
                  <div className="flex items-start gap-2 pt-1">
                    <MapPin className="w-4 h-4 text-[#F0831F] shrink-0 mt-0.5" />
                    <span>Số 31 LK3 KĐT 90 Nguyễn Tuân, Phường Thanh Xuân Trung, Quận Thanh Xuân, Hà Nội</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Chứng nhận xuất xứ: Punggi, Hàn Quốc (GMP, HACCP, GAP)</span>
                  </div>
                </div>
              </div>

              {/* Customer Care Hotline Box */}
              <div className="bg-gradient-to-br from-[#4B193E] to-[#2b0821] text-white rounded-2xl p-6 shadow-md space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#F0831F]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-white/70 uppercase tracking-wider font-semibold">
                      Tổng đài tư vấn toàn quốc
                    </div>
                    <div className="text-xl font-extrabold text-[#FFD8DB]">
                      0968.400.141
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-white/80 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#F0831F] shrink-0" />
                    <span>08:00 – 22:00 (Tất cả các ngày trong tuần)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#F0831F] shrink-0" />
                    <span>na.koreaginseng@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-white/60">
                    <span>Phục vụ giao hàng hỏa tốc Hà Nội & toàn quốc 63 tỉnh thành</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
