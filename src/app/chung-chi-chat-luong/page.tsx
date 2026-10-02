import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { GIOI_THIEU_SUB_NAV } from "@/lib/subNavItems";
import { ChevronRight, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { CertificationTabs } from "@/components/CertificationTabs";
import { CERTIFICATE_ITEMS, CERTIFICATION_FAQS } from "@/data/certificationData";

export const metadata: Metadata = {
  title: "Chứng Nhận Chất Lượng & Bằng Sáng Chế Quốc Tế | Hồng Sâm Kim",
  description:
    "Bộ chứng nhận chất lượng quốc tế của Hồng Sâm Kim: HACCP, GMP, FDA Hoa Kỳ, ISO 22000, FSSC 22000, HALAL và Bằng sáng chế độc quyền từ Nghệ nhân Hàn Quốc. Phân phối chính ngạch bởi Công ty TNHH Thương Mại NA Korea.",
  keywords: [
    "Chứng chỉ chất lượng Hồng Sâm Kim",
    "HACCP",
    "GMP",
    "FDA Hoa Kỳ",
    "ISO 22000",
    "FSSC 22000",
    "HALAL",
    "Bằng sáng chế sâm Hàn Quốc",
    "Hồng Sâm Kim",
    "Công ty TNHH Thương Mại NA Korea",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/chung-chi-chat-luong`,
  },
  openGraph: {
    title: `Chứng Nhận Chất Lượng & Bằng Sáng Chế Quốc Tế | ${SITE_CONFIG.brandName}`,
    description:
      "Bảo chứng chất lượng vàng chuẩn mực quốc tế của Hồng Sâm Kim nhập khẩu chính ngạch Hàn Quốc.",
    url: `${SITE_CONFIG.siteUrl}/chung-chi-chat-luong`,
    type: "website",
  },
};

export default function ChungChiChatLuongPage() {
  // JSON-LD ItemList Schema
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Danh sách Chứng chỉ Quality & Patent Certificate của Hồng Sâm Kim",
    description:
      "Danh sách 17 chứng nhận an toàn thực phẩm, tiêu chuẩn quốc tế và bằng sáng chế độc quyền của Hồng Sâm Kim Hàn Quốc.",
    numberOfItems: CERTIFICATE_ITEMS.length,
    itemListElement: CERTIFICATE_ITEMS.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: item.description,
      image: `${SITE_CONFIG.siteUrl}${item.src}`,
    })),
  };

  // JSON-LD FAQ Schema for GEO AI search engines
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CERTIFICATION_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col">
      {/* Structured Data (JSON-LD) for SEO & GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header overlay />

      <main className="flex-1 pb-20">
        <PageHero
          eyebrow="CHẤT LƯỢNG ĐƯỢC BẢO CHỨNG QUỐC TẾ"
          showEyebrow={false}
          title="Chứng Nhận & Bằng Sáng Chế Quốc Tế"
          description="Chúng tôi cam kết chất lượng chuẩn mực cao nhất thông qua các chứng chỉ kiểm định an toàn thực phẩm uy tín hàng đầu Hàn Quốc, Mỹ và Quốc Tế."
          image="/images/sub04.jpg"
          imageAlt="Chứng nhận chất lượng Hồng Sâm Kim Hàn Quốc"
          imageOpacity={0.9}
          subNavItems={GIOI_THIEU_SUB_NAV}
          currentHref="/chung-chi-chat-luong"
        />

        {/* Standardized Breadcrumb Spacing py-3 */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/gioi-thieu" className="hover:text-black transition-colors">
              Giới Thiệu
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#500028] font-medium">Chứng Chỉ Quốc Tế</span>
          </nav>
        </div>

        {/* Main Content Section */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-6 sm:mt-8">
          <CertificationTabs />
        </section>

        {/* Standardized Minimalist CTA Banner */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-12">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Khám Phá Các Sản Phẩm Hồng Sâm Kim Đạt Chuẩn Quốc Tế
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                100% sản phẩm do {SITE_CONFIG.companyName} phân phối độc quyền tại Việt Nam đều được chứng nhận nguồn gốc xuất xứ Punggi và an toàn thực phẩm bộ kiểm định.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/san-pham"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#500028] text-white text-sm font-semibold hover:bg-[#3d001f] transition-all shadow-xs"
              >
                <span>Xem Sản Phẩm</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/lien-he"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 hover:text-black transition-all"
              >
                Liên Hệ Tư Vấn
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
