import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, ArrowRight, Award, Building2, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Quy Trình Hấp SẤY & Chế Biến Hồng Sâm 6 Năm Tuổi | Hồng Sâm Kim",
  description:
    "Khám phá quy trình hấp sấy độc quyền chuyển hóa nhân sâm 6 năm tuổi thành Hồng sâm với hơn 30 loại Ginsenoside quý hiếm tại Punggi Hàn Quốc. Nhập khẩu chính ngạch bởi NA Korea.",
  keywords: [
    "Hồng sâm 6 năm tuổi",
    "Hồng sâm là gì",
    "Quy trình hấp sấy hồng sâm",
    "Saponin Ginsenoside",
    "Hồng sâm Hàn Quốc",
    "Hồng Sâm Kim",
    "Công ty TNHH Thương Mại NA Korea",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/hong-sam`,
  },
  openGraph: {
    title: `Quy Trình Hấp SẤY & Chế Biến Hồng Sâm 6 Năm Tuổi | ${SITE_CONFIG.brandName}`,
    description: "Sự biến đổi kỳ diệu từ nhân sâm tươi thành Hồng sâm 6 năm tuổi thượng hạng.",
    url: `${SITE_CONFIG.siteUrl}/hong-sam`,
    type: "article",
  },
};

const RED_GINSENG_FAQS = [
  {
    question: "Hồng sâm là gì và khác gì so với nhân sâm tươi?",
    answer:
      "Hồng sâm được tạo ra bằng cách hấp chín bằng nước và sấy khô nhân sâm tươi 4 đến 6 năm tuổi ở nhiệt độ thấp. Quá trình xử lý nhiệt tiêu diệt hoàn toàn enzyme oxy hóa, giúp bảo quản tới 10 năm và sản sinh hơn 30 loại Ginsenoside quý hiếm mà sâm tươi không hề có.",
  },
  {
    question: "Vì sao Nhân sâm 6 năm tuổi lại được xem là tiêu chuẩn vàng để làm hồng sâm?",
    answer:
      "Đến năm thứ 6, nhân sâm đạt đỉnh cao về hình dáng (thân dài 7-10cm, rễ 34cm) và tích lũy hàm lượng Ginsenoside tối đa. Nếu để sâm già hơn 7 năm, củ sẽ bị biến dạng, xơ cứng vỏ ngoài và phần ruột bên trong bị xốp rỗng suy giảm hoạt chất.",
  },
  {
    question: "Tại sao Hồng sâm Cao Ly Hàn Quốc lại chứa nhiều Saponin hơn sâm Mỹ và Trung Quốc?",
    answer:
      "Thổ nhưỡng và thời tiết vùng đất Punggi chân núi Sobaek Hàn Quốc tạo điều kiện sinh trưởng lý tưởng giúp Hồng sâm Cao Ly chứa tới 30 loại Ginsenoside khác nhau – vượt trội hơn sâm Mỹ (14 loại) và sâm Trung Quốc (15 loại).",
  },
  {
    question: "Các dạng chế phẩm Hồng sâm phổ biến trên thị trường gồm những loại nào?",
    answer:
      "Các thành phẩm Hồng sâm Kim cao cấp nhập khẩu bởi NA Korea gồm có: Cao hồng sâm cô đặc, Nước uống hồng sâm (dạng stick gói tiện lợi), Hồng sâm nguyên củ/lát ngâm mật ong và Bột hồng sâm sấy mịn.",
  },
];

export default function HongSamPage() {
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Quy Trình Chế Biến Hồng Sâm 6 Năm Tuổi Thượng Hạng Punggi",
    description: metadata.description,
    image: [`${SITE_CONFIG.siteUrl}/images/ginseng/sub02_hero.jpg`],
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
      "@id": `${SITE_CONFIG.siteUrl}/hong-sam`,
    },
  };

  // FAQ Schema for GEO AI Crawlers
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: RED_GINSENG_FAQS.map((faq) => ({
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
          eyebrow="TINH HOA CHẾ BIẾN PUNGGI"
          showEyebrow={false}
          title="Hồng sâm là gì?"
          description="Chúng tôi sẽ tiếp tục duy trì sự bền bỉ của nghề trồng nhân sâm 6 năm tuổi ở Punggi."
          image="/images/ginseng/sub02_hero.jpg"
          imageAlt="Quy trình chế biến Hồng sâm 6 năm tuổi thượng hạng Punggi - Hồng Sâm Kim"
          imageOpacity={0.96}
        />

        {/* Standard Breadcrumb Bar */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 font-sans">
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
            <span className="text-[#500028] font-bold">Hồng Sâm (6 Năm Tuổi)</span>
          </nav>
        </div>

        {/* Main 2-Column Unified Layout (Solution 1) */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-4 pb-12 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* CỘT TRÁI (Sidebar 3/12 - 25%): Tabs Dọc + Mục Lục + Khung NA Korea */}
            <div className="lg:col-span-3 lg:sticky lg:top-28 space-y-5">
              
              {/* Card 1: Danh mục về Nhân Sâm */}
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 px-1">
                  Danh mục về nhân sâm
                </div>

                <div className="flex lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                  <Link
                    href="/nhan-sam"
                    className="w-full text-left py-3 px-3.5 rounded-lg text-xs sm:text-sm transition-all shrink-0 border-l-2 flex items-center justify-between bg-transparent border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50/60 font-medium"
                  >
                    <span className="truncate pr-2 text-xs sm:text-sm tracking-tight">Nhân Sâm Cao Ly (Goryeo)</span>
                    <span className="px-2 py-0.5 text-[10px] rounded-full font-bold shrink-0 bg-gray-100 text-gray-400">
                      Xem bài
                    </span>
                  </Link>

                  <Link
                    href="/hong-sam"
                    className="w-full text-left py-3 px-3.5 rounded-lg text-xs sm:text-sm transition-all shrink-0 border-l-2 flex items-center justify-between bg-gray-50 border-[#500028] text-gray-900 font-extrabold shadow-2xs"
                  >
                    <span className="truncate pr-2 text-xs sm:text-sm tracking-tight">Hồng Sâm (6 Năm Tuổi)</span>
                    <span className="px-2 py-0.5 text-[10px] rounded-full font-bold shrink-0 bg-[#500028] text-white">
                      Đang xem
                    </span>
                  </Link>
                </div>
              </div>

              {/* Card 2: Mục Lục Bài Viết (Table of Contents) */}
              <div className="hidden lg:block bg-white border border-gray-200 rounded-xl p-4 space-y-2.5 shadow-2xs">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#500028]">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Mục Lục Bài Viết</span>
                </div>
                <nav className="space-y-1 text-xs text-gray-600">
                  <a
                    href="#hong-sam-la-gi"
                    className="block py-1.5 px-2.5 rounded hover:bg-gray-50 hover:text-[#500028] transition-colors font-medium border-l-2 border-[#500028] bg-gray-50/80 text-gray-900"
                  >
                    1. Hồng Sâm Là Gì?
                  </a>
                  <a
                    href="#phan-loai-hinh-thai"
                    className="block py-1.5 px-2.5 rounded hover:bg-gray-50 hover:text-[#500028] transition-colors font-medium border-l-2 border-transparent"
                  >
                    2. Phân Loại Hình Thái Hồng Sâm
                  </a>
                  <a
                    href="#phan-loai-san-pham"
                    className="block py-1.5 px-2.5 rounded hover:bg-gray-50 hover:text-[#500028] transition-colors font-medium border-l-2 border-transparent"
                  >
                    3. Phân Loại Sản Phẩm Chế Biến
                  </a>
                  <a
                    href="#faq-hong-sam"
                    className="block py-1.5 px-2.5 rounded hover:bg-gray-50 hover:text-[#500028] transition-colors font-medium border-l-2 border-transparent"
                  >
                    4. Giải Đáp Thắc Mắc (FAQ)
                  </a>
                </nav>
              </div>

              {/* Card 3: Khung Định danh Thực thể (GEO Anchor Box NA Korea) */}
              <div className="hidden lg:block bg-white border border-gray-200 rounded-xl p-4 space-y-2 shadow-2xs">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#500028]">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Phân Phối Độc Quyền</span>
                </div>
                <div className="text-xs font-semibold text-gray-800 leading-snug">
                  {SITE_CONFIG.companyName}
                </div>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                  <span>Hotline hỗ trợ:</span>
                  <a
                    href={`tel:${SITE_CONFIG.hotline}`}
                    className="font-bold text-[#500028] hover:underline"
                  >
                    {SITE_CONFIG.hotlineDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* CỘT PHẢI (Content 9/12 - 75%): Nội dung bài viết Hồng sâm */}
            <div className="lg:col-span-9 space-y-12">
              
              {/* Top Sub-heading */}
              <div className="border-b border-gray-200 pb-6 font-sans">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug tracking-tight">
                  Dấu ấn ngàn năm hòa quyện giữa dòng chảy thời gian, con người và vạn vật
                </h1>
                <div className="w-16 h-0.5 bg-[#500028] mt-3" />
              </div>

              {/* SECTION 1: Hồng sâm là gì & Chi tiết quá trình sinh trưởng 6 năm */}
              <section id="hong-sam-la-gi" className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  <div className="lg:col-span-5 relative aspect-4/3 w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                    <Image
                      src="/images/ginseng/red1.jpg"
                      alt="Hồng sâm 6 năm tuổi chế biến từ củ sâm tươi Punggi - Hồng Sâm Kim"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="lg:col-span-7 space-y-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                      Hồng sâm là gì?
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                      Hồng sâm được tạo ra bằng cách hấp và sấy khô nhân sâm từ 4 năm tuổi trở lên. Chất lượng hồng sâm được phân loại thành ba cấp độ: thiên, địa, nhân.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                      Quá trình hấp và sấy khô làm cho thân nhân sâm cứng lại đồng thời tiêu diệt hoàn toàn các enzyme oxy hóa, giúp bảo quản hồng sâm trong thời gian dài. Nhân sâm thay đổi hình dạng trong quá trình sinh trưởng. Đến năm thứ nhất, rễ bắt đầu dày lên và mọc ra khoảng 30 đến 40 rễ con. Đến năm thứ ba, chiều dài rễ chính và số lượng rễ con ổn định.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                      Đối với nhân sâm 6 tuổi, phần đầu chắc khỏe, dài từ 7 đến 10cm, đường kính từ 2 đến 3cm. Có nhiều rễ con, tổng chiều dài khoảng 34cm, trọng lượng từ 40 đến 120g, thậm chí có thể lên đến 300g.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                      Nếu nhân sâm già hơn 7 năm, hình dạng của nó sẽ bị biến dạng và vỏ cứng lại. Đó là lý do tại sao các chuyên gia coi nhân sâm 6 tuổi là chất lượng tốt nhất.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                      Nhân sâm 6 tuổi có hiệu quả tuyệt vời. Có tổng cộng 30 loại saponin khác nhau trong nhân sâm Cao Ly (Goryeo), nhiều hơn 14 loại trong nhân sâm Mỹ và 15 loại trong nhân sâm Trung Quốc.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 2: Phân Loại Hình Thái Hồng Sâm */}
              <section id="phan-loai-hinh-thai" className="scroll-mt-32 space-y-6">
                <div className="border-b border-gray-100 pb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                    Phân Loại Hình Thái Hồng Sâm
                  </h2>
                  <div className="w-12 h-0.5 bg-[#500028] mt-2" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Item 1 */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs space-y-2.5 flex flex-col">
                    <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                      <Image
                        src="/images/ginseng/red2.jpg"
                        alt="Nhân Sâm Nguyên Thể xếp hạng Thiên Địa Nhân - Hồng Sâm Kim"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">
                      Nhân Sâm Nguyên Thể
                    </h3>
                    <p className="text-xs text-gray-700 leading-relaxed text-justify">
                      Nhân sâm nguyên thể là nhân sâm được sản xuất mà không tách riêng đầu, thân và chân. Phổ biến được phân loại thành thiên, địa, nhân.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs space-y-2.5 flex flex-col">
                    <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                      <Image
                        src="/images/ginseng/red3.jpg"
                        alt="Hồng Sâm Cắt Lát dẻo thơm tiện lợi - Hồng Sâm Kim"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">
                      Hồng Sâm Cắt Lát
                    </h3>
                    <p className="text-xs text-gray-700 leading-relaxed text-justify">
                      Thân chính của hồng sâm được cắt thành kích thước dẻo thơm đều đặn theo chiều ngang, dọc hoặc chéo tiện lợi.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs space-y-2.5 flex flex-col">
                    <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                      <Image
                        src="/images/ginseng/red4.jpg"
                        alt="Rễ Hồng Sâm chứa hàm lượng Saponin cao - Hồng Sâm Kim"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">
                      Rễ Hồng Sâm
                    </h3>
                    <p className="text-xs text-gray-700 leading-relaxed text-justify">
                      Gồm các rễ con chứa hàm lượng Saponin tập trung cao, đậm vị sâm truyền thống.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3: Phân loại sản phẩm */}
              <section id="phan-loai-san-pham" className="scroll-mt-32 space-y-6">
                <div className="border-b border-gray-100 pb-3">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                    Phân loại sản phẩm
                  </h2>
                  <div className="w-12 h-0.5 bg-[#500028] mt-2" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Product 1 */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs space-y-2.5 flex flex-col">
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                      <Image
                        src="/images/ginseng/red5.jpg"
                        alt="Hồng Sâm Cô Đặc dạng cao 6 năm tuổi - Hồng Sâm Kim"
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xs sm:text-sm">
                      Hồng Sâm Cô Đặc
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed text-justify">
                      Dạng cao sệt chiết xuất ở nhiệt độ thấp bảo toàn dưỡng chất.
                    </p>
                  </div>

                  {/* Product 2 */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs space-y-2.5 flex flex-col">
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                      <Image
                        src="/images/ginseng/red6.jpg"
                        alt="Hồng Sâm Lỏng tinh chất uống dạng stick gói - Hồng Sâm Kim"
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xs sm:text-sm">
                      Hồng Sâm Lỏng
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed text-justify">
                      Dạng nước đóng gói stick uống liền tiện dụng hàng ngày.
                    </p>
                  </div>

                  {/* Product 3 */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs space-y-2.5 flex flex-col">
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                      <Image
                        src="/images/ginseng/red7.jpg"
                        alt="Hồng Sâm Ngâm Mật Ong tự nhiên dẻo ngọt - Hồng Sâm Kim"
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xs sm:text-sm">
                      Hồng Sâm Ngâm
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed text-justify">
                      Ngâm mật ong tự nhiên dẻo thơm, làm quà biếu cao cấp.
                    </p>
                  </div>

                  {/* Product 4 */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs space-y-2.5 flex flex-col">
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                      <Image
                        src="/images/ginseng/dry_ginseng.jpg"
                        alt="Hồng Sâm Bột nghiền mịn pha trà - Hồng Sâm Kim"
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xs sm:text-sm">
                      Hồng Sâm Bột
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed text-justify">
                      Dạng bột sấy nghiền mịn thích hợp pha trà và sinh tố.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 4: GEO FAQ Accordion */}
              <section id="faq-hong-sam" className="scroll-mt-32 bg-white rounded-xl border border-gray-200 p-5 sm:p-6 space-y-5 shadow-2xs font-sans">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#500028]" />
                    <h3 className="text-base font-bold text-gray-900">
                      Giải Đáp Thắc Mắc Về Quy Trình Chế Biến Hồng Sâm
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {RED_GINSENG_FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-gray-200 rounded-xl overflow-hidden bg-white transition-colors"
                    >
                      <summary className="w-full text-left p-3.5 flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-gray-900 cursor-pointer hover:bg-gray-50/80 transition-colors list-none">
                        <span className="flex-1 leading-snug">{faq.question}</span>
                        <span className="text-[#500028] font-bold text-base transition-transform group-open:rotate-180">
                          ↓
                        </span>
                      </summary>
                      <div className="px-3.5 pb-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/30 text-justify">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Standard Minimalist CTA Banner */}
              <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                    Khám Phá Cửa Hàng Hồng Sâm Kim Chính Hãng
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Trải nghiệm trọn bộ sản phẩm nhập khẩu nguyên hộp Punggi Hàn Quốc do {SITE_CONFIG.companyName} phân phối.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href="/san-pham"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#500028] text-white text-xs sm:text-sm font-semibold hover:bg-[#3d001f] transition-all shadow-xs"
                  >
                    <span>Xem Cửa Hàng Sản Phẩm</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
