import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { GIOI_THIEU_SUB_NAV } from "@/lib/subNavItems";
import { ChevronRight, Award, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { TimelineTabs } from "@/components/TimelineTabs";
import { ERA_DATA } from "@/data/timelineData";

export const metadata: Metadata = {
  title: "Lịch Sử Hình Thành Thương Hiệu Hồng Sâm Kim | Di Sản 35+ Năm Punggi",
  description: "Hành trình di sản từ năm 1986 của Hồng Sâm Kim (Red Ginseng) – Bậc thầy Nhân sâm Hàn Quốc Kim Jeong Hwan, nhập khẩu chính ngạch bởi CÔNG TY TNHH THƯƠNG MẠI NA KOREA.",
  keywords: [
    "Lịch sử hình thành",
    "Lịch sử Hồng Sâm Kim",
    "Red Ginseng",
    "Nghệ nhân Kim Jeong Hwan",
    "Punggi Ginseng Farming Corp",
    "Nhân sâm 6 năm tuổi",
    "NA KOREA",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/lich-su-hinh-thanh`,
  },
  openGraph: {
    title: `Lịch Sử Hình Thành Thương Hiệu Hồng Sâm Kim | ${SITE_CONFIG.brandName}`,
    description: "Chi tiết mốc lịch sử hình thành và phát triển từ năm 1986 đến nay của Hồng Sâm Kim Hàn Quốc.",
    url: `${SITE_CONFIG.siteUrl}/lich-su-hinh-thanh`,
    type: "website",
  },
};

export default function LichSuHinhThanhPage() {
  // Schema JSON-LD cho GEO (AI Search Engines: Gemini, ChatGPT, Perplexity)
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.siteUrl}/lich-su-hinh-thanh#webpage`,
        "url": `${SITE_CONFIG.siteUrl}/lich-su-hinh-thanh`,
        "name": "Lịch Sử Hình Thành Thương Hiệu Hồng Sâm Kim",
        "description": "Hành trình di sản từ năm 1986 của Hồng Sâm Kim Hàn Quốc.",
      },
      {
        "@type": "Organization",
        "name": "Punggi Ginseng Farming Corp",
        "alternateName": ["Hồng Sâm Kim", "Red Ginseng Punggi"],
        "foundingDate": "1986",
        "founder": {
          "@type": "Person",
          "name": "Kim Jeong Hwan",
          "jobTitle": "Bậc thầy Nhân sâm Tỉnh Gyeongbuk (2005)",
        },
      },
      {
        "@type": "Organization",
        "name": "CÔNG TY TNHH THƯƠNG MẠI NA KOREA",
        "url": SITE_CONFIG.siteUrl,
        "role": "Đơn vị nhập khẩu 100% chính ngạch và phân phối độc quyền thương hiệu Hồng Sâm Kim tại Việt Nam",
      },
      {
        "@type": "ItemList",
        "name": "Các Giai Đoạn Lịch Sử Phát Triển Của Hồng Sâm Kim",
        "itemListElement": ERA_DATA.map((era, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": era.label,
          "description": era.summaryTitle,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-sans">
      {/* Script Schema.org cho AI Search & Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <Header overlay />

      <main className="flex-1 pb-20">
        {/* Page Hero - Chuẩn SEO & GEO tinh gọn */}
        <PageHero
          eyebrow="DI SẢN PUNGGI HÀN QUỐC"
          showEyebrow={true}
          title="Lịch Sử Hình Thành Thương Hiệu Hồng Sâm Kim"
          description="&quot;Hành trình hơn 35 năm gìn giữ sự chân thành trong nuôi trồng và chế biến nhân sâm 6 năm tuổi từ thủ phủ Punggi.&quot;"
          image="/images/sub03.jpg"
          imageAlt="Lịch sử hình thành và phát triển Hồng Sâm Kim Punggi Hàn Quốc"
          imageOpacity={0.9}
          subNavItems={GIOI_THIEU_SUB_NAV}
          currentHref="/lich-su-hinh-thanh"
        />

        {/* Breadcrumb Navigation - Quy chuẩn Spacing py-3 */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3 border-b border-gray-100">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/gioi-thieu" className="hover:text-black transition-colors">
              Giới Thiệu
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#4B193E] font-medium">Lịch Sử Hình Thành</span>
          </nav>
        </div>

        {/* Main Section: Khoảng cách tiêu chuẩn mt-6 sm:mt-8 */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-6 sm:mt-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xs border border-gray-200">
            <div className="mb-8 border-b border-gray-100 pb-5">
              <h2 className="font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px] lg:text-[32px]">
                Hành Trình Phát Triển Qua Các Giai Đoạn
              </h2>
            </div>

            {/* Component Tab Giai Đoạn (Giao diện chuẩn JungKwanJang 2 cột) */}
            <TimelineTabs />
          </div>
        </section>

        {/* Footer CTA - Phong cách Tối Giản JungKwanJang (Nền Trắng Viền Mảnh 1px, Không Tím Khối) */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 bg-[#4B193E]/5 text-[#4B193E] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#4B193E]" />
                CAM KẾT CHẤT LƯỢNG THƯỢNG HẠNG
              </div>
              <h3 className="font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px]">
                Khám Phá Các Dòng Sản Phẩm Hồng Sâm Kim
              </h3>
              <p className="font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#666666] max-w-xl">
                Sản phẩm được nhập khẩu 100% chính ngạch từ Hàn Quốc, phân phối độc quyền tại Việt Nam bởi CÔNG TY TNHH THƯƠNG MẠI NA KOREA.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 bg-[#4B193E] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#38132e] transition-colors text-sm shadow-2xs"
              >
                Xem Danh Mục Sản Phẩm
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
