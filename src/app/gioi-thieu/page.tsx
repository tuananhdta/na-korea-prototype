import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { GIOI_THIEU_SUB_NAV } from "@/lib/subNavItems";
import { ChevronRight, CheckCircle2, Award, ShieldCheck, ArrowRight, Mountain } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Lời Hứa Từ Đất Mẹ - Về Chúng Tôi | Hồng Sâm Kim",
  description: "Câu chuyện sáng lập Hồng Sâm Kim (Red Ginseng) bởi Bậc thầy Nhân sâm Kim Jeong Hwan – Triết lý 'SẠCH – QUÝ GIÁ' từ vùng đất Punggi 500 năm lịch sử, nhập khẩu chính ngạch bởi CÔNG TY TNHH THƯƠNG MẠI NA KOREA.",
  keywords: [
    "Hồng Sâm Kim",
    "Red Ginseng",
    "Về chúng tôi",
    "Lời hứa từ đất mẹ",
    "Nghệ nhân Kim Jeong Hwan",
    "Thủ phủ Punggi",
    "Gangwon",
    "Tỉnh Gyeongbuk",
    "Nhân sâm 6 năm tuổi",
    "NA KOREA",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/gioi-thieu`,
  },
  openGraph: {
    title: `Lời Hứa Từ Đất Mẹ - Về Chúng Tôi | ${SITE_CONFIG.brandName}`,
    description: "Kế thừa tinh hoa nhân sâm 500 năm vùng đất Punggi Hàn Quốc. Triết lý canh tác SẠCH – QUÝ GIÁ của Bậc thầy Kim Jeong Hwan.",
    url: `${SITE_CONFIG.siteUrl}/gioi-thieu`,
    type: "website",
  },
};

export default function GioiThieuPage() {
  // Schema.org JSON-LD cho GEO (Generative Engine Optimization)
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_CONFIG.siteUrl}/gioi-thieu#webpage`,
        "url": `${SITE_CONFIG.siteUrl}/gioi-thieu`,
        "name": "Lời Hứa Từ Đất Mẹ - Về Chúng Tôi | Hồng Sâm Kim",
        "description": "Hành trình sáng lập thương hiệu Hồng Sâm Kim bởi Bậc thầy Nhân sâm Kim Jeong Hwan từ năm 1986 tại thủ phủ Punggi Hàn Quốc.",
      },
      {
        "@type": "Person",
        "@id": `${SITE_CONFIG.siteUrl}/#kim-jeong-hwan`,
        "name": "Kim Jeong Hwan",
        "jobTitle": "Bậc thầy Nhân sâm Tỉnh Gyeongbuk (2005)",
        "birthPlace": "Punggi, Yeongju-si, Gyeongbuk, Hàn Quốc",
        "worksFor": {
          "@type": "Organization",
          "name": "Hồng Sâm Kim (Punggi Red Ginseng)",
        },
      },
      {
        "@type": "Brand",
        "name": "Hồng Sâm Kim",
        "alternateName": ["Red Ginseng Punggi", "Hồng Kim Sâm"],
        "foundingDate": "1986",
        "description": "Thương hiệu Hồng sâm 6 năm tuổi nguyên bản Punggi Hàn Quốc",
      },
      {
        "@type": "Organization",
        "name": "CÔNG TY TNHH THƯƠNG MẠI NA KOREA",
        "url": SITE_CONFIG.siteUrl,
        "role": "Đơn vị nhập khẩu chính ngạch 100% và phân phối độc quyền Hồng Sâm Kim tại Việt Nam",
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

      <Header overlay />

      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <PageHero
          eyebrow="TINH HOA NHÂN SÂM PUNGGI HÀN QUỐC"
          showEyebrow={true}
          title="Lời Hứa Từ Đất Mẹ"
          description="&quot;SẠCH – QUÝ GIÁ là cốt lõi trong từng củ nhân sâm 6 năm tuổi nuôi trồng từ vùng đất linh thiêng Punggi Hàn Quốc.&quot;"
          image="/images/sub01.jpg"
          imageAlt="Trang trại nhân sâm 6 năm tuổi Punggi Hàn Quốc – Hồng Sâm Kim"
          imageOpacity={0.9}
          subNavItems={GIOI_THIEU_SUB_NAV}
          currentHref="/gioi-thieu"
        />

        {/* Breadcrumb Navigation - Quy chuẩn Spacing py-3 */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3 border-b border-gray-100">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-medium">Giới Thiệu</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#4B193E] font-medium">Thương Hiệu</span>
          </nav>
        </div>

        {/* Section 1: Khoảng cách tiêu chuẩn mt-4 sm:mt-6 */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-4 sm:mt-6">
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xs border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Cột trái: Nội dung câu chuyện thương hiệu */}
              <div className="lg:col-span-7 space-y-5">
                <h2 className="font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px] lg:text-[32px]">
                  Hồng Sâm Kim — Hành Trình Khai Phá Núi Sâm Gangwon & Triết Lý &quot;SẠCH – QUÝ GIÁ&quot;
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  <p>
                    Thương hiệu <strong className="text-gray-900 font-semibold">Hồng Sâm Kim</strong> được sáng lập bởi{" "}
                    <strong className="text-[#4B193E] font-semibold">Kim Jeong Hwan</strong> – Bậc thầy nhân sâm uy tín hàng đầu được công nhận tại Hàn Quốc. Ông sinh ra và gắn bó với Punggi, vùng đất được mệnh danh là thủ phủ nhân sâm lâu đời nhất Hàn Quốc với bề dày lịch sử canh tác hơn 500 năm.
                  </p>

                  <p>
                    Ngay từ khi còn trẻ, ông Kim Jeong Hwan đã cùng những người bạn thời thơ ấu quyết định khai phá ngọn núi kéo dài từ Punggi đến Gangwon, dọn sạch vùng đất hoang sơ để bắt đầu hành trình kiên định nuôi trồng nhân sâm tươi 6 năm tuổi.
                  </p>

                  <p>
                    Với quan điểm kinh doanh cốt lõi <strong className="text-[#4B193E] font-semibold">&quot;SẠCH – QUÝ GIÁ&quot;</strong>, ông Kim không ngại vất vả, trực tiếp chở công nhân đến Gangwon từ 4 giờ sáng, miệt mài nghiên cứu kỹ thuật trồng sâm 6 năm tuổi đạt hàm lượng Saponin cao nhất. Sau hơn 10 năm kiên trì thử nghiệm, ông chính thức thành lập cơ sở chế biến Hồng Sâm (<strong className="text-gray-900 font-semibold">Red Ginseng</strong>) vào năm 1986.
                  </p>

                  <p>
                    Nhờ bí quyết canh tác độc bản cùng sự nỗ lực chân thành, năm 2005, ông Kim Jeong Hwan đã được chính quyền <strong className="text-gray-900 font-semibold">tỉnh Gyeongbuk (Hàn Quốc)</strong> chính thức vinh danh và trao tặng danh hiệu cao quý <strong className="text-gray-900 font-semibold">&quot;Bậc Thầy Nhân Sâm&quot;</strong>.
                  </p>

                  <p>
                    Ngày nay, <strong className="text-gray-900 font-semibold">Hồng Sâm Kim</strong> sở hữu cơ sở sản xuất khép kín hiện đại bậc nhất cùng hệ thống sấy nhân sâm tự nhiên truyền thống, lưu giữ trọn vẹn dưỡng chất quý giá trong môi trường vệ sinh đạt chuẩn quốc tế (HACCP, GMP, FDA Hoa Kỳ). Tại Việt Nam, thông qua đại diện nhập khẩu chính ngạch <strong className="text-[#4B193E] font-semibold">CÔNG TY TNHH THƯƠNG MẠI NA KOREA</strong>, Hồng Sâm Kim cam kết giữ vững nguyên tắc trồng sâm 6 năm tuổi, mang lại những sản phẩm hồng sâm thượng hạng và an toàn nhất cho sức khỏe Quý khách hàng.
                  </p>
                </div>

                {/* Bullets điểm mạnh thương hiệu */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#4B193E] shrink-0" />
                    <span>100% Nhân sâm 6 năm tuổi canh tác SẠCH tại Punggi & Gangwon</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#4B193E] shrink-0" />
                    <span>Công nghệ sấy tự nhiên truyền thống kết hợp tiêu chuẩn vệ sinh hiện đại</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#4B193E] shrink-0" />
                    <span>Chứng nhận quốc tế: HACCP, GMP, FDA Hoa Kỳ & ISO 22000</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#4B193E] shrink-0" />
                    <span>Nhập khẩu 100% chính ngạch bởi CÔNG TY TNHH THƯƠNG MẠI NA KOREA</span>
                  </div>
                </div>
              </div>

              {/* Cột phải: Hình ảnh & Khung triết lý */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-4/3 sm:aspect-4/3 lg:aspect-3/4 rounded-2xl overflow-hidden shadow-md bg-gray-50 border border-gray-100">
                  <Image
                    src="/images/ginseng-hero-2.jpg"
                    alt="Bậc thầy Nhân sâm Kim Jeong Hwan và trang trại nhân sâm 6 năm tuổi Punggi Gangwon – Hồng Sâm Kim"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider block">
                      Thủ Phủ Sâm Punggi 500 Năm
                    </span>
                    <p className="text-xs sm:text-sm font-medium opacity-90 mt-0.5">
                      Trang trại sâm 6 năm tuổi tại ngọn núi Punggi – Gangwon
                    </p>
                  </div>
                </div>

                {/* Quote Accent Box */}
                <div className="bg-[#4B193E]/5 border-l-4 border-[#4B193E] p-4 rounded-r-xl space-y-1">
                  <div className="text-xs font-bold text-[#4B193E] uppercase tracking-wider">
                    TRIẾT LÝ KINH DOANH CỐT LÕI
                  </div>
                  <p className="text-xs sm:text-sm italic text-gray-800 font-medium leading-relaxed">
                    &quot;SẠCH – QUÝ GIÁ là kim chỉ nam trong từng củ sâm 6 năm tuổi mà chúng tôi nuôi trồng và gửi gắm tới sức khỏe quý khách hàng.&quot;
                  </p>
                  <div className="text-xs text-gray-500 font-semibold pt-1">
                    — Kim Jeong Hwan (Bậc Thầy Nhân Sâm Tỉnh Gyeongbuk 2005)
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Section 2: Timeline Highlights Grid */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#4B193E]/10 flex items-center justify-center text-[#4B193E] mb-5">
                <Mountain className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold text-[#4B193E] uppercase tracking-wider">NĂM 1986</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                Thành Lập Cơ Sở Sản Xuất
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Sau hơn 10 năm nghiên cứu kỹ thuật canh tác sâm tươi tại núi Gangwon, Nghệ nhân Kim Jeong Hwan chính thức thành lập cơ sở chế biến Hồng Sâm (Red Ginseng).
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#4B193E]/10 flex items-center justify-center text-[#4B193E] mb-5">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold text-[#4B193E] uppercase tracking-wider">NĂM 2005</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                Bậc Thầy Nhân Sâm Gyeongbuk
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Được chính quyền tỉnh Gyeongbuk chính thức vinh danh và trao tặng danh hiệu cao quý &quot;Bậc Thầy Nhân Sâm&quot; nhờ những đóng góp vượt bậc cho ngành sâm Hàn Quốc.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#4B193E]/10 flex items-center justify-center text-[#4B193E] mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-extrabold text-[#4B193E] uppercase tracking-wider">HIỆN NAY</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                Phân Phối Bởi NA KOREA
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Hồng Sâm Kim chính thức được nhập khẩu chính ngạch 100% và phân phối độc quyền tại Việt Nam bởi CÔNG TY TNHH THƯƠNG MẠI NA KOREA.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Call To Action Banner - Minimalist JungKwanJang Style */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px]">
                Tìm Hiểu Thêm Về Lịch Sử & Sản Phẩm Hồng Sâm Kim
              </h3>
              <p className="font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#666666]">
                Ghé thăm danh mục sản phẩm chính hãng hoặc liên hệ với chuyên viên tư vấn của NA KOREA.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 bg-[#4B193E] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#38132e] transition-colors text-sm shadow-2xs"
              >
                Danh Mục Sản Phẩm
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/lich-su-hinh-thanh"
                className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-800 font-semibold px-5 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm"
              >
                Lịch Sử Hình Thành
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
