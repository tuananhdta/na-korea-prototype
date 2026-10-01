import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, ArrowRight, Award } from "lucide-react";
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
            <span className="text-[#500028] font-bold">Hồng Sâm</span>
          </nav>

          {/* Tab buttons */}
          <div className="flex items-center gap-2 p-1.5 bg-gray-100/90 rounded-xl border border-gray-200/80 max-w-md shadow-2xs font-sans">
            <Link
              href="/nhan-sam"
              className="flex-1 text-center py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-white/80 transition-all"
            >
              Nhân Sâm (Goryeo)
            </Link>
            <Link
              href="/hong-sam"
              className="flex-1 text-center py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold bg-[#500028] text-white shadow-xs transition-all"
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
          {/* SECTION 1: Hồng sâm là gì & Chi tiết quá trình sinh trưởng 6 năm */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 relative aspect-4/3 w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                <Image
                  src="/images/ginseng/red1.jpg"
                  alt="Hồng sâm 6 năm tuổi chế biến từ củ sâm tươi Punggi - Hồng Sâm Kim"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                  Hồng sâm là gì?
                </h2>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                  Hồng sâm được tạo ra bằng cách hấp và sấy khô nhân sâm từ 4 năm tuổi trở lên. Chất lượng hồng sâm được phân loại thành ba cấp độ: thiên, địa, nhân.
                </p>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                  Quá trình hấp và sấy khô làm cho thân nhân sâm cứng lại đồng thời tiêu diệt hoàn toàn các enzyme oxy hóa, giúp bảo quản hồng sâm trong thời gian dài. Nhân sâm thay đổi hình dạng trong quá trình sinh trưởng. Đến năm thứ nhất, rễ bắt đầu dày lên và mọc ra khoảng 30 đến 40 rễ con. Đến năm thứ ba, chiều dài rễ chính và số lượng rễ con ổn định. Đến năm thứ tư hoặc năm thứ năm, rễ chính trở nên chắc khỏe, rễ con phát triển hoàn thiện, tạo nên hình dạng điển hình của nhân sâm.
                </p>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                  Đối với nhân sâm 6 tuổi, phần đầu chắc khỏe, dài từ 7 đến 10cm, đường kính từ 2 đến 3cm. Có nhiều rễ con, tổng chiều dài khoảng 34cm, trọng lượng từ 40 đến 120g, thậm chí có thể lên đến 300g.
                </p>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                  Nếu nhân sâm già hơn 7 năm, hình dạng của nó sẽ bị biến dạng và vỏ cứng lại. Nhiều cây có xu hướng bị rỗng hoặc trắng bên trong khi được chế biến.
                </p>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                  Đó là lý do tại sao các chuyên gia coi nhân sâm 6 tuổi là chất lượng tốt nhất. Quá trình xử lý nhiệt để tạo ra hồng sâm tạo ra nhiều thành phần có lợi không có trong nhân sâm tươi hoặc nhân sâm trắng. Về mặt chất, nhân sâm chứa 30 thành phần saponin khác nhau, được gọi chung là Ginsenoside, chiếm từ 1 đến 3%. Saponin có nghĩa là &quot;tạo bọt&quot; trong tiếng Hy Lạp. Khi bạn lắc hỗn hợp nước và một ít saponin, bạn có thể thấy tạo ra bọt. Thành phần này có trong nhiều loại cây như cam thảo và hoa chuông.
                </p>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                  Nhân sâm 6 tuổi có hiệu quả tuyệt vời. Phần lớn saponin tồn tại gần bề mặt của nhân sâm, có nghĩa là hồng sâm hiệu quả hơn nhân sâm trắng không có vỏ. Có tổng cộng 30 loại saponin khác nhau trong nhân sâm Cao Ly (Goryeo), nhiều hơn 14 loại trong nhân sâm Mỹ và 15 loại trong nhân sâm Trung Quốc.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: Type of Ginseng */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Phân Loại Hình Thái Hồng Sâm
              </h2>
              <div className="w-16 h-0.5 bg-[#500028]/30 mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Item 1 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs space-y-3 flex flex-col">
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
                  Nhân sâm nguyên thể là nhân sâm được sản xuất mà không tách riêng đầu, thân và chân.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Hồng sâm phổ biến thuộc loại này. Nó được phân loại thành nhân sâm thiên, địa, nhân và các loại khác tùy theo hình dạng sản phẩm, và được chia thành từ 10 đến 70 ngón tay theo kích thước.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs space-y-3 flex flex-col">
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
                  Hồng sâm cắt thành những miếng nhỏ vừa ăn.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Thân chính của hồng sâm được cắt thành kích thước đều đặn theo chiều ngang, dọc hoặc chéo.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs space-y-3 flex flex-col">
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
                  Phần được gọi là rễ của hồng sâm. Nó chỉ phần rễ của hồng sâm và đề cập đến các rễ con ngoại trừ thân của nhân sâm tươi.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Nó chứa nhiều saponin, thành phần chính của hồng sâm, và có vị đắng mạnh.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3: Phân loại sản phẩm */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Phân loại sản phẩm
              </h2>
              <div className="w-16 h-0.5 bg-[#500028]/30 mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {/* Product 1 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs space-y-3 flex flex-col">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                  <Image
                    src="/images/ginseng/red5.jpg"
                    alt="Hồng Sâm Cô Đặc dạng cao 6 năm tuổi - Hồng Sâm Kim"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">
                  Hồng Sâm Cô Đặc
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Là sản phẩm dạng đặc được cô đặc bằng cách chiết xuất hồng sâm 6 năm tuổi ở nhiệt độ thấp nhiều lần, bao gồm cả viên hồng sâm nổi tiếng, v.v.
                </p>
              </div>

              {/* Product 2 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs space-y-3 flex flex-col">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                  <Image
                    src="/images/ginseng/red6.jpg"
                    alt="Hồng Sâm Lỏng tinh chất uống dạng stick gói - Hồng Sâm Kim"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">
                  Hồng Sâm Lỏng
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Là sản phẩm dạng lỏng được sản xuất bằng cách chiết xuất hồng sâm 6 năm tuổi ở nhiệt độ thấp.
                </p>
              </div>

              {/* Product 3 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs space-y-3 flex flex-col">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                  <Image
                    src="/images/ginseng/red7.jpg"
                    alt="Hồng Sâm Ngâm Mật Ong tự nhiên dẻo ngọt - Hồng Sâm Kim"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">
                  Hồng Sâm Ngâm
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Là sản phẩm được ngâm trong dung dịch đường như mật ong và sấy khô, thường dùng làm quà tặng và đồ ăn nhẹ.
                </p>
              </div>

              {/* Product 4 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs space-y-3 flex flex-col">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                  <Image
                    src="/images/ginseng/dry_ginseng.jpg"
                    alt="Hồng Sâm Bột nghiền mịn pha trà - Hồng Sâm Kim"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">
                  Hồng Sâm Bột
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Là sản phẩm dạng bột được làm bằng cách nghiền mịn hồng sâm đã được rửa sạch.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4: GEO AI Answer Extraction Block - FAQ Section */}
          <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 max-w-4xl mx-auto space-y-6 shadow-2xs font-sans">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#500028]" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
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
          <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Khám Phá Cửa Hàng Hồng Sâm Kim Chính Hãng
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trải nghiệm trọn bộ sản phẩm chính hãng nhập khẩu nguyên hộp từ Punggi Hàn Quốc do {SITE_CONFIG.companyName} phân phối.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/san-pham"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#500028] text-[#ffffff] text-sm font-semibold hover:bg-[#3d001f] transition-all shadow-xs"
              >
                <span>Xem Cửa Hàng Sản Phẩm</span>
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
