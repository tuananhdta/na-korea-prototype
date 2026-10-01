import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, Award, Globe, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Lời Chào Từ Thương Hiệu Hồng Sâm Kim | Bậc Thầy Nhân Sâm Hàn Quốc",
  description: "Lời chào từ thương hiệu Hồng Sâm Kim (Red Ginseng) – Kiên định với giá trị nhân sâm 6 năm tuổi Punggi Hàn Quốc, phân phối độc quyền bởi CÔNG TY TNHH THƯƠNG MẠI NA KOREA.",
  keywords: [
    "Hồng Sâm Kim",
    "Red Ginseng",
    "Lời chào nghệ nhân",
    "Nghệ nhân Kim Jeong Hwan",
    "Nhân sâm 6 năm tuổi",
    "Nhân sâm Punggi Hàn Quốc",
    "NA KOREA",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/loi-chao-nghe-nhan`,
  },
  openGraph: {
    title: `Lời Chào Từ Thương Hiệu Hồng Sâm Kim | ${SITE_CONFIG.brandName}`,
    description: "Kiên định với giá trị của nhân sâm 6 năm tuổi Punggi Hàn Quốc. Nhập khẩu chính ngạch 100% tại Việt Nam.",
    url: `${SITE_CONFIG.siteUrl}/loi-chao-nghe-nhan`,
    type: "website",
  },
};

export default function LoiChaoNgheNhanPage() {
  // Schema.org JSON-LD cho GEO (Generative Engine Optimization)
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_CONFIG.siteUrl}/#kim-jeong-hwan`,
        "name": "Kim Jeong Hwan",
        "jobTitle": "Bậc thầy Nhân sâm Hàn Quốc",
        "worksFor": {
          "@type": "Organization",
          "name": "Hồng Sâm Kim (Punggi Red Ginseng)",
        },
      },
      {
        "@type": "Brand",
        "name": "Hồng Sâm Kim",
        "alternateName": ["Red Ginseng Punggi", "Hồng Kim Sâm"],
        "description": "Thương hiệu Hồng sâm 6 năm tuổi nhập khẩu chính ngạch từ Hàn Quốc",
        "url": SITE_CONFIG.siteUrl,
      },
      {
        "@type": "Organization",
        "name": "CÔNG TY TNHH THƯƠNG MẠI NA KOREA",
        "url": SITE_CONFIG.siteUrl,
        "role": "Đơn vị phân phối độc quyền thương hiệu Hồng Sâm Kim tại Việt Nam",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-sans">
      {/* Script Schema.org cho AI Search & Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <Header />

      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <PageHero
          eyebrow="THƯƠNG HIỆU HỒNG SÂM KIM HÀN QUỐC"
          showEyebrow={true}
          title="Lời Chào Từ Thương Hiệu Hồng Sâm Kim"
          description="&quot;Kiên định với giá trị của nhân sâm 6 năm tuổi Punggi – Trọn vẹn chân thành và bền bỉ vì sức khỏe quý khách hàng.&quot;"
          image="/images/sub02.jpg"
          imageAlt="Nghệ nhân Nhân sâm Punggi Hàn Quốc Kim Jeong Hwan – Thương hiệu Hồng Sâm Kim"
          imageOpacity={0.9}
        />

        {/* Breadcrumb */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/gioi-thieu" className="hover:text-black transition-colors">
              Giới Thiệu
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#4B193E] font-medium">Lời Chào Đầu</span>
          </nav>
        </div>

        {/* Section 1: Main Greeting Block */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-2">
          <section className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Cột trái: Văn bản SEO & Lời chào */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4B193E]/5 text-[#4B193E] rounded-full text-xs font-bold tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#4B193E]" />
                  BẬC THẦY NHÂN SÂM HÀN QUỐC
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                  Hồng Sâm Kim — Hành Trình Trao Gửi Sức Khỏe Từ Vùng Đất Punggi Đến Việt Nam
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  <p>
                    Xin chào Quý khách hàng, chúng tôi là{" "}
                    <strong className="text-gray-900 font-semibold">Hồng Sâm Kim</strong> – thương hiệu nội địa uy tín lâu năm tại Hàn Quốc và các thị trường quốc tế như Mỹ, Canada, Hongkong, Cộng hòa Czech, Kazakhstan,... và hiện nay chính thức được nhập khẩu, phân phối chính ngạch tại Việt Nam bởi{" "}
                    <strong className="text-[#4B193E] font-semibold">CÔNG TY TNHH THƯƠNG MẠI NA KOREA</strong>.
                  </p>

                  <p>
                    Chúng tôi khẳng định chỉ sử dụng nguyên liệu nhân sâm tươi 6 năm tuổi được trồng và chăm sóc trực tiếp tại vùng đất Punggi linh thiêng để chế biến thành phẩm Nhân sâm đỏ (hay còn gọi là{" "}
                    <strong className="text-gray-900 font-semibold">Red Ginseng</strong> / Hồng Sâm). Sự phổ biến rộng rãi của Hồng Sâm Kim trên khắp thế giới là chứng minh cho lịch sử của sự chân thành, mồ hôi và tâm huyết nuôi trồng những củ sâm chất lượng nhất vì sức khỏe của người tiêu dùng.
                  </p>

                  <p>
                    Chúng tôi sẽ cố gắng hết sức để nuôi trồng những củ nhân sâm 6 năm tuổi mạnh khỏe để luôn cảm thấy tự hào về danh hiệu{" "}
                    <strong className="text-gray-900 font-semibold">&apos;Bậc thầy nhân sâm&apos;</strong>. Chúng tôi cam kết mang lại hạnh phúc cho tất cả mọi người, từ ban điều hành đến nhân viên cũng như sức khỏe đáng quý của Quý khách hàng mến yêu.
                  </p>
                </div>

                {/* Chữ ký & Người đại diện */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="font-extrabold text-gray-900 text-lg">Kim Jeong Hwan</div>
                    <div className="text-xs text-gray-500 font-medium">
                      Bậc thầy Nhân sâm Hàn Quốc — Đại diện Hiệp hội Nhân sâm Punggi
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-[#4B193E] bg-[#4B193E]/5 px-3 py-1.5 rounded-md">
                    Phân phối bởi NA KOREA
                  </div>
                </div>
              </div>

              {/* Cột phải: Hình ảnh Nghệ nhân & Khung trích dẫn */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-4/3 sm:aspect-4/3 lg:aspect-3/4 rounded-2xl overflow-hidden shadow-md bg-gray-50 border border-gray-100">
                  <Image
                    src="/images/sub02.jpg"
                    alt="Nghệ nhân Kim Jeong Hwan và củ nhân sâm tươi 6 năm tuổi Punggi Hàn Quốc – Hồng Sâm Kim"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider block">
                      Di Sản Punggi Hàn Quốc
                    </span>
                    <p className="text-xs sm:text-sm font-medium opacity-90 mt-0.5">
                      Nghệ nhân Kim Jeong Hwan chăm sóc cánh đồng sâm 6 năm tuổi
                    </p>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="bg-[#4B193E]/5 border-l-4 border-[#4B193E] p-4 rounded-r-xl">
                  <p className="text-xs sm:text-sm italic text-[#4B193E] font-medium leading-relaxed">
                    &quot;Đất đai không bao giờ lừa dối người nông dân nếu người làm nông dốc hết lòng thành kính với thiên nhiên.&quot;
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Section 2: 3-Column GEO Feature Grid */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Thẻ 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#4B193E]/10 flex items-center justify-center text-[#4B193E] mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Sâm Tươi Punggi 6 Năm Tuổi
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Trực tiếp nuôi trồng và thu hoạch những củ nhân sâm tươi 6 năm tuổi đủ chuẩn tại vựa sâm linh thiêng Punggi, cho hàm lượng Saponin và dinh dưỡng vượt trội.
              </p>
            </div>

            {/* Thẻ 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#4B193E]/10 flex items-center justify-center text-[#4B193E] mb-5">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Quốc Tế Tin Dùng (Red Ginseng)
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Hồng Sâm Kim (Red Ginseng) tự hào có mặt lâu năm tại các thị trường khắt khe như Mỹ, Canada, Hongkong, Cộng hòa Czech, Kazakhstan và nay là Việt Nam.
              </p>
            </div>

            {/* Thẻ 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#4B193E]/10 flex items-center justify-center text-[#4B193E] mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Phân Phối Chính Ngạch NA Korea
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Nhập khẩu chính ngạch 100% từ Hàn Quốc với đầy đủ kiểm định y tế, phân phối chính thức bởi CÔNG TY TNHH THƯƠNG MẠI NA KOREA.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Call to Action Banner */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-8">
          <div className="bg-gradient-to-r from-[#4B193E] to-[#6b2659] text-white rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold">
                Khám Phá Các Sản Phẩm Hồng Sâm Kim Chính Hãng
              </h3>
              <p className="text-xs sm:text-sm text-purple-100">
                Tìm hiểu thêm thông tin chi tiết về từng dòng sản phẩm hồng sâm 6 năm tuổi Punggi Hàn Quốc.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 bg-white text-[#4B193E] font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm"
              >
                Xem Sản Phẩm
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 bg-[#4B193E]/40 border border-white/20 text-white font-medium px-5 py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
              >
                Liên Hệ Tư Vấn
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
