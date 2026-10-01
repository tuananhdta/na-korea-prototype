import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, ArrowRight, Award } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Nguồn Gốc & Công Dụng Nhân Sâm Goryeo 6 Năm Tuổi | Hồng Sâm Kim",
  description:
    "Tìm hiểu nguồn gốc Nhân sâm Goryeo (Cao Ly) chính thống Hàn Quốc, thành phần Saponin Ginsenoside vượt trội, cẩm nang phân biệt sâm Hàn Quốc và sâm ngoại quốc. Nhập khẩu chính ngạch bởi Công ty TNHH Thương Mại NA Korea.",
  keywords: [
    "Nhân sâm Goryeo",
    "Nhân sâm Cao Ly",
    "Nhân sâm Hàn Quốc 6 năm tuổi",
    "Phân biệt nhân sâm",
    "Saponin Ginsenoside",
    "Hồng Sâm Kim",
    "Công ty TNHH Thương Mại NA Korea",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/nhan-sam`,
  },
  openGraph: {
    title: `Nguồn Gốc & Công Dụng Nhân Sâm Goryeo 6 Năm Tuổi | ${SITE_CONFIG.brandName}`,
    description: "Khám phá nguồn gốc và công dụng di sản ngàn năm của Nhân sâm Goryeo Hàn Quốc.",
    url: `${SITE_CONFIG.siteUrl}/nhan-sam`,
    type: "article",
  },
};

const GINSENG_FAQS = [
  {
    question: "Nhân sâm Goryeo (Cao Ly) là gì và xuất xứ từ đâu?",
    answer:
      "Nhân sâm Goryeo (Cao Ly) là loại thảo dược quý hiếm nổi tiếng thế giới, chỉ sinh trưởng ở vùng khí hậu đặc thù Viễn Đông châu Á (vĩ độ 33,7º – 43,1º). Đặc biệt, vùng đất Punggi dưới chân núi Sobaek Hàn Quốc có thổ nhưỡng và chu kỳ thời tiết lý tưởng nhất để nhân sâm tích tụ dưỡng chất đỉnh cao.",
  },
  {
    question: "Thành phần Saponin (Ginsenoside) trong Nhân sâm Goryeo có tác dụng gì?",
    answer:
      "Saponin (Ginsenoside) là tinh chất quý báu nhất của nhân sâm Goryeo chứa các hoạt chất panaxydol, panaxynol và panaxytriol giúp phân giải mỡ thừa, kích hoạt enzyme tế bào, thúc đẩy tổng hợp protein huyết thanh, phục hồi sức bền và chống mệt mỏi suy nhược.",
  },
  {
    question: "Làm thế nào để phân biệt Nhân sâm Hàn Quốc chính thống với sâm ngoại quốc?",
    answer:
      "Nhân sâm Hàn Quốc chính thống luôn có lớp đất mỏng tự nhiên bám trên vỏ, phần đầu chắc tròn ngắn, bề mặt màu vàng chanh hoặc vàng trắng, rễ chính và chân phát triển nở nang. Trong khi đó, sâm ngoại quốc vỏ trắng nhạt đã rửa sạch, đầu mảnh dài và nhiều rễ râu vụn.",
  },
  {
    question: "Nhân sâm tươi, nhân sâm khô và hồng sâm khác nhau như thế nào?",
    answer:
      "Nhân sâm tươi (Thủy sâm) thu hoạch chứa 75% độ ẩm dùng ăn tươi hoặc nấu ăn; Nhân sâm khô (Bạch sâm) sấy khô tự nhiên chứa dưới 14% độ ẩm; Hồng sâm được hấp chín ở nhiệt độ thấp từ sâm 6 năm tuổi giúp bảo quản đến 10 năm và sản sinh hàm lượng Ginsenoside vượt trội.",
  },
];

export default function NhanSamPage() {
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Nguồn Gốc & Công Dụng Nhân Sâm Goryeo (Cao Ly) Hàn Quốc",
    description: metadata.description,
    image: [`${SITE_CONFIG.siteUrl}/images/ginseng/sub01_hero.jpg`],
    author: {
      "@type": "Person",
      name: "Kim Jung-hwan (Nghệ nhân Nhân sâm Hàn Quốc)",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.companyName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.siteUrl}/images/wholesale/logo-kimsredginseng-3.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.siteUrl}/nhan-sam`,
    },
  };

  // FAQ Schema for GEO AI Crawlers
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GINSENG_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Structured Data Scripts for SEO & GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="flex-1 pb-20">
        <PageHero
          eyebrow="DI SẢN NGÀN NĂM PUNGGI"
          showEyebrow={false}
          title="Nhân sâm là gì?"
          description="Chúng tôi sẽ tiếp tục duy trì sự bền bỉ của nghề trồng nhân sâm 6 năm tuổi ở Punggi. Dấu ấn ngàn năm hòa quyện giữa dòng chảy thời gian, con người và vạn vật."
          image="/images/ginseng/sub01_hero.jpg"
          imageAlt="Nguồn gốc vùng trồng Nhân sâm Goryeo Punggi 6 năm tuổi - Hồng Sâm Kim"
          imageOpacity={0.96}
        />

        {/* Standard Breadcrumb & 2-Tab Navigation */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 space-y-4 font-sans">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/gioi-thieu" className="hover:text-black transition-colors">
              Giới Thiệu
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-600 font-medium">Về Nhân Sâm</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#500028] font-bold">Nhân Sâm</span>
          </nav>

          {/* Tab buttons */}
          <div className="flex items-center gap-2 p-1.5 bg-gray-100/90 rounded-xl border border-gray-200/80 max-w-md shadow-2xs font-sans">
            <Link
              href="/nhan-sam"
              className="flex-1 text-center py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold bg-[#500028] text-white shadow-xs transition-all"
            >
              Nhân Sâm (Goryeo)
            </Link>
            <Link
              href="/hong-sam"
              className="flex-1 text-center py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-white/80 transition-all"
            >
              Hồng Sâm (6 Năm Tuổi)
            </Link>
          </div>
        </div>

        {/* Top Sub-heading */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-6 mb-12 text-center font-sans">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug tracking-tight">
            Dấu ấn ngàn năm hòa quyện giữa dòng chảy thời gian, con người và vạn vật
          </h2>
          <div className="w-16 h-0.5 bg-[#500028]/30 mx-auto mt-4" />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-16 font-sans">
          {/* SECTION 1: 2-Column Split */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="relative aspect-16/10 w-full rounded-lg overflow-hidden bg-gray-100 shadow-xs border border-gray-200">
                <Image
                  src="/images/ginseng/sub02_hero.jpg"
                  alt="Lá và hoa cây Nhân sâm Goryeo Punggi Hàn Quốc - Hồng Sâm Kim"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pt-2 tracking-tight">
                Nhân sâm Goryeo là gì?
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                Nhân sâm Goryeo, một loại thảo dược quý hiếm, chỉ mọc ở vùng Viễn Đông châu Á, bao gồm Hàn Quốc (vĩ độ 33,7º – 43,1º), Trung Quốc (Mãn Châu, vĩ độ 43º – 47º) và Nga (vùng Primorsky, vĩ độ 40º – 48º), tất cả đều nằm trong khoảng vĩ độ bắc từ 30º đến 48º. Nhân sâm là loại cây vô cùng khó trồng ở những vùng không có điều kiện khí hậu thích hợp. Hàn Quốc là một trong số ít những nơi trên thế giới có điều kiện lý tưởng để trồng nhân sâm và được biết đến đặc biệt với tên gọi “Nhân Sâm Goryeo”, được người tiêu dùng trên toàn thế giới ưa chuộng.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="relative aspect-16/10 w-full rounded-lg overflow-hidden bg-gray-100 shadow-xs border border-gray-200">
                <Image
                  src="/images/ginseng/ginseng_about_1.jpg"
                  alt="Thành phần dưỡng chất trong củ Nhân sâm Goryeo - Hồng Sâm Kim"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pt-2 tracking-tight">
                Nhân sâm Goryeo: Thành phần và Công dụng
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                Nhân Sâm Goryeo chủ yếu được cấu tạo từ các loại carbohydrate như tinh bột, polysaccharide và cellulose, chiếm tới khoảng 60 đến 70% tổng thành phần. Ngoài ra, nó còn chứa saponin – tinh chất của nhân sâm, và nhiều hợp chất hóa học chứa nitơ như protein, peptide, alkaloid, hợp chất phenolic và polyacetylene, thành phần dầu, chất tan trong dầu như phytosterol và nhiều loại vitamin. Người ta đã tìm thấy khoảng 20 loại chất polyacetylene khác nhau trong nhân sâm và ba thành phần chính là panaxydol, panaxynol và panaxytriol.
              </p>
            </div>
          </section>

          {/* SECTION 2: Dark Background 2x2 Grid (Công dụng của Saponin trong Nhân sâm Goryeo) */}
          <section className="relative rounded-2xl overflow-hidden bg-[#2d2524] text-white p-6 sm:p-10 lg:p-12 shadow-md">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-8 font-sans">
              <div className="text-center space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Công dụng của Saponin trong Nhân sâm Goryeo
                </h2>
                <div className="inline-block bg-[#443836] px-4 py-1.5 rounded text-xs text-gray-300 italic tracking-wider">
                  Men may deceive the Earth, but the Earth never deceives Men.
                </div>
              </div>

              {/* 2x2 Grid Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 border border-white/20 rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/20 bg-white/5">
                <div className="p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 hover:bg-white/10 transition-colors border-b border-white/20 md:border-b">
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    <svg className="w-10 h-10 stroke-current text-white/90 fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 3" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-xs text-center">
                    Tác dụng phân giải mỡ cao trong cơ thể và hỗ trợ quá trình hấp thụ, tiêu hóa chất dinh dưỡng.
                  </p>
                </div>

                <div className="p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 hover:bg-white/10 transition-colors border-b border-white/20">
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    <svg className="w-10 h-10 stroke-current text-white/90 fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 0 0-1.022-.547l-2.387-.477a6 6 0 0 0-3.86.517l-.318.158a6 6 0 0 1-3.86.517L5.601 15.13a2 2 0 0 0-1.022.547l-1.3 1.3a2 2 0 0 0 0 2.828l.8.8a2 2 0 0 0 2.828 0l1.3-1.3" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-xs text-center">
                    Thúc đẩy quá trình trao đổi chất bằng cách kích hoạt các enzyme trong tế bào.
                  </p>
                </div>

                <div className="p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    <svg className="w-10 h-10 stroke-current text-white/90 fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-xs text-center">
                    Thúc đẩy quá trình tổng hợp protein huyết thanh.
                  </p>
                </div>

                <div className="p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    <svg className="w-10 h-10 stroke-current text-white/90 fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-xs text-center">
                    Tăng cường năng lượng, phục hồi sức bền, chống mệt mỏi, bất lực và chán ăn.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: Phương Pháp Phân Biệt Sâm Hàn Quốc & Ngoại Quốc */}
          <section className="space-y-8 font-sans">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Phương Pháp Phân Biệt Nhân Sâm
              </h2>
              <div className="w-16 h-0.5 bg-[#500028]/30 mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-start max-w-4xl mx-auto">
              {/* Foreign Ginseng */}
              <div className="md:col-span-5 space-y-4 bg-white p-5 rounded-xl border border-gray-200 shadow-2xs">
                <div className="border border-gray-300 rounded overflow-hidden">
                  <div className="relative aspect-4/3 w-full bg-white p-2">
                    <Image
                      src="/images/ginseng/korean_vs_foreign.jpg"
                      alt="Hình ảnh đặc điểm nhận dạng sâm ngoại quốc (Foreign Ginseng)"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-[#9c9384] text-white text-center py-2 text-xs font-bold tracking-wider uppercase">
                    • Nhân sâm Ngoại quốc •
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-gray-700 pl-4 list-disc leading-relaxed">
                  <li>Sạch, không có đất bám trên bề mặt.</li>
                  <li>Đầu dài, phát triển kém.</li>
                  <li>Bề mặt màu trắng.</li>
                  <li>Nhiều rễ râu.</li>
                  <li>Chân ngắn, phát triển kém.</li>
                  <li>Đầu hơi dài và mảnh.</li>
                  <li>Màu sắc trắng sữa hoặc nâu nhạt.</li>
                </ul>
              </div>

              {/* VS Divider */}
              <div className="md:col-span-1 flex items-center justify-center py-4 md:py-24">
                <span className="text-2xl font-extrabold text-[#7e6d65] tracking-widest">
                  VS
                </span>
              </div>

              {/* Korean Ginseng */}
              <div className="md:col-span-5 space-y-4 bg-white p-5 rounded-xl border border-gray-200 shadow-2xs">
                <div className="border border-gray-300 rounded overflow-hidden">
                  <div className="relative aspect-4/3 w-full bg-white">
                    <Image
                      src="/images/ginseng/gin02.png"
                      alt="Hình ảnh đặc điểm nhận dạng Nhân sâm Hàn Quốc chính thống (Korean Ginseng) - Hồng Sâm Kim"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-[#500028] text-white text-center py-2 text-xs font-bold tracking-wider uppercase">
                    • Nhân sâm Hàn Quốc (Goryeo) •
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-gray-800 pl-4 list-disc leading-relaxed font-medium">
                  <li>Có một ít đất bám trên bề mặt.</li>
                  <li>Đầu chắc khỏe, ngắn.</li>
                  <li>Bề mặt màu vàng trắng.</li>
                  <li>Chân phát triển tốt.</li>
                  <li>Rễ ngắn, dày.</li>
                  <li>Màu sắc vàng chanh.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 4: Các loại nhân sâm */}
          <section className="space-y-10 font-sans">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Các loại nhân sâm
              </h2>
              <div className="w-16 h-0.5 bg-[#500028]/30 mx-auto mt-3" />
            </div>

            <div className="space-y-10 max-w-4xl mx-auto">
              {/* Item 1: Nhân sâm tươi */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start bg-white p-6 rounded-xl border border-gray-200 shadow-2xs">
                <div className="md:col-span-5 relative aspect-4/3 w-full rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                  <Image
                    src="/images/ginseng/fresh_ginseng.jpg"
                    alt="Nhân sâm tươi (Thủy sâm) 6 năm tuổi Punggi Hàn Quốc - Hồng Sâm Kim"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    Nhân sâm tươi
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                    Nhân sâm tươi được khai thác trực tiếp từ nông trại, chứa đến 75% độ ẩm trong tổng thành phần. Đây là loại nhân sâm phổ biến nhất, được thu hoạch khi cây từ 4 đến 6 tuổi. Nhân sâm tươi là nguyên liệu cơ bản cho các loại nhân sâm khác như nhân sâm đỏ và nhân sâm trắng.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                    Nhân sâm tươi rất thích hợp làm quà tặng và được sử dụng rộng rãi trong nấu ăn, ăn nhẹ và các mục đích khác.
                  </p>
                </div>
              </div>

              {/* Item 2: Nhân Sâm Khô */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start bg-white p-6 rounded-xl border border-gray-200 shadow-2xs">
                <div className="md:col-span-5 relative aspect-4/3 w-full rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                  <Image
                    src="/images/ginseng/dry_ginseng.jpg"
                    alt="Nhân sâm khô (Bạch sâm) sấy tự nhiên Hàn Quốc - Hồng Sâm Kim"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    Nhân Sâm Khô
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                    Nhân sâm tươi được sấy khô để tạo thành nhân sâm khô có màu vàng nhạt. Nhân sâm khô được phân loại thành nhân sâm trắng (đã loại bỏ vỏ) và nhân sâm trắng có vỏ. Ngoài ra, nó còn được phân loại dựa trên hình dạng như nhân sâm thẳng (rễ được xử lý thẳng), nhân sâm cong (sấy khô khi rễ bị cong) và nhân sâm nửa cong.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                    Nó chứa ít hơn 14% độ ẩm và có thể được sấy khô bằng nhiệt độ mặt trời tự nhiên, gió nóng hoặc các phương pháp khác mà không cần hấp. Nhân sâm khô có thể rất cứng và được sử dụng làm nguyên liệu cơ bản cho nhân sâm đỏ phổ biến như một loại thảo dược phương Đông.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                    Ví dụ, nếu bạn sấy khô 15 đơn vị nhân sâm tươi tổng cộng 750g, sẽ có 15 đơn vị sản phẩm khoảng 150 đến 200g. Nói cách khác, nếu bạn sấy khô 15 đơn vị nhân sâm tươi, có nghĩa là bạn đã chế biến được 25 đơn vị nhân sâm khô 300g. Nếu bạn sấy khô 8 đến 10 đơn vị nhân sâm tươi, sẽ thu được 15 đơn vị nhân sâm khô 300g.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                    Nhìn chung, nhân sâm khô được nghiền thành bột và bán dưới dạng &quot;bột nhân sâm&quot; hoặc &quot;viên nén bột&quot; hoặc có thể được bán nguyên trạng ở trạng thái khô, giúp khách hàng dễ dàng bảo quản và sử dụng. Một số phòng khám y học cổ truyền sử dụng nó như một thành phần thuốc và một số nhà hàng sử dụng nó trong các món ăn khác nhau như súp gà nhân sâm.
                  </p>
                </div>
              </div>

              {/* Item 3: Hồng Sâm */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start bg-white p-6 rounded-xl border border-gray-200 shadow-2xs">
                <div className="md:col-span-5 relative aspect-4/3 w-full rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                  <Image
                    src="/images/ginseng/red1.jpg"
                    alt="Hồng Sâm 6 năm tuổi chế biến độc quyền Hàn Quốc - Hồng Sâm Kim"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    Hồng Sâm
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                    Nhân sâm tươi từ 4 đến 6 tuổi được hấp bằng nước, tạo ra nhân sâm màu nâu đỏ gọi là Hồng sâm. Nó được phân loại thành ba cấp độ: thiên, địa, nhân dựa trên chất lượng. Phần lớn được xuất khẩu ra nước ngoài như Hồng Kông, Đài Loan và Nhật Bản, chỉ một phần nhỏ được phân phối trong nước. Tuy nhiên, với sự quan tâm ngày càng tăng đối với thực phẩm bổ sung sức khỏe trên thị trường nội địa, phân phối nội địa đang tăng lên, góp phần phát triển ngành công nghiệp chế biến nhân sâm.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                    Hồng sâm được chế biến qua quá trình hấp và sấy khô, tạo ra hàm lượng nước dưới 14%. Quá trình nâu hóa không enzyme xảy ra trong quá trình chế biến, làm cho nhân sâm có màu nâu đậm và kết cấu cứng. Điều này cho phép nhân sâm có thời hạn sử dụng dài lên đến khoảng 10 năm, và nhiều người gọi đây là một cuộc cách mạng trong việc bảo quản nhân sâm.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                    Người ta ước tính rằng lịch sử sản xuất hồng sâm kéo dài khoảng 1000 năm vì có một tài liệu tham khảo trong một biên niên sử cổ (năm 1123 dưới thời nhà Goryeo) rằng có nhân sâm hấp và nhân sâm sống (nhân sâm trắng). Đặc biệt là vào thời Joseon khi nhân sâm trắng được tiêu thụ nhiều, số lượng hồng sâm tăng nhanh chóng trong những năm cuối khi được người Trung Quốc tiêu thụ nhiều thức ăn dầu mỡ và lầm tưởng rằng nhân sâm trắng gây kích thích dạ dày. Năm 1895 (năm thứ 32 triều vua Gojong), Luật về chế biến và giao dịch hồng sâm được ban hành, và năm 1908, chế độ thực dân Nhật Bản độc quyền lợi nhuận liên quan đến hồng sâm, từ đó thống trị thương mại với Trung Quốc. Cho đến nay, Luật đã được sửa đổi và bổ sung nhiều lần.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                    Cho đến năm 1995, chỉ chính phủ mới được phép sản xuất hồng sâm, nhưng từ năm 1996, ngành công nghiệp này được mở cửa cho công chúng và bất kỳ ai có cơ sở vật chất phù hợp và đầy đủ đều có thể chế biến và bán. Theo quy định hiện hành, hồng sâm được định nghĩa là &quot;nhân sâm hấp hoặc bột nhân sâm hóa gel&quot;.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: GEO AI Answer Extraction Block - FAQ Section */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 max-w-4xl mx-auto space-y-6 shadow-2xs font-sans">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#500028]" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  Giải Đáp Thắc Mắc Nguồn Gốc & Công Dụng Nhân Sâm
                </h3>
              </div>
              <span className="text-xs text-gray-400 font-medium">Chuẩn GEO AI</span>
            </div>

            <div className="space-y-3">
              {GINSENG_FAQS.map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-gray-200 rounded-xl overflow-hidden bg-white transition-colors"
                >
                  <summary className="w-full text-left p-4 flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-gray-900 cursor-pointer hover:bg-gray-50/80 transition-colors list-none">
                    <span className="flex-1 leading-snug">{faq.question}</span>
                    <span className="text-[#500028] font-bold text-base transition-transform group-open:rotate-180">
                      ↓
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/30 text-justify">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Standard Minimalist CTA Banner */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto font-sans">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Tìm Hiểu Tiếp Quy Trình Chế Biến Hồng Sâm 6 Năm Tuổi
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Khám phá sự chuyển hóa tạo nên 30 loại Saponin Ginsenoside quý hiếm nhập khẩu chính ngạch bởi {SITE_CONFIG.companyName}.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/hong-sam"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#500028] text-white text-sm font-semibold hover:bg-[#3d001f] transition-all shadow-xs"
              >
                <span>Xem Bài Hồng Sâm</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
