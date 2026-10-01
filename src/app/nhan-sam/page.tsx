import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Về Nhân Sâm Goryeo (Cao Ly) | Hồng Sâm Kim",
  description:
    "Tìm hiểu nguồn gốc Nhân sâm Goryeo (Cao Ly) chính thống Hàn Quốc, thành phần Saponin vượt trội, cẩm nang phân biệt nhân sâm tươi và nhân sâm khô.",
  keywords: [
    "Nhân sâm Goryeo",
    "Nhân sâm Cao Ly",
    "Nhân sâm Hàn Quốc",
    "Phân biệt nhân sâm",
    "Saponin Ginsenoside",
    "Hồng Sâm Kim",
    "NA Korea",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/nhan-sam`,
  },
  openGraph: {
    title: `Về Nhân Sâm Goryeo (Cao Ly) | ${SITE_CONFIG.brandName}`,
    description: "Khám phá nguồn gốc và công dụng di sản ngàn năm của Nhân sâm Goryeo Hàn Quốc.",
    url: `${SITE_CONFIG.siteUrl}/nhan-sam`,
    type: "website",
  },
};

export default function NhanSamPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col">
      <Header />

      <main className="flex-1 pb-20">
        <PageHero
          eyebrow="DI SẢN NGÀN NĂM PUNGGI"
          showEyebrow={false}
          title="Nhân Sâm Là Gì?"
          description="Chúng tôi sẽ tiếp tục duy trì sự bền bỉ của nghề trồng nhân sâm 6 năm tuổi ở Punggi. Dấu ấn ngàn năm hòa quyện giữa dòng chảy thời gian, con người và vạn vật."
          image="/images/ginseng/sub01_hero.jpg"
          imageAlt="Nguồn gốc Nhân sâm Goryeo Punggi Hàn Quốc"
          imageOpacity={0.96}
        />

        {/* Standardized Breadcrumb & Navigation Tabs */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3 space-y-4">
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
            <span className="text-[#500028] font-bold">Nhân Sâm Goryeo</span>
          </nav>

          {/* 2-Article Tab Navigation */}
          <div className="flex items-center gap-2 p-1.5 bg-gray-100/90 rounded-xl border border-gray-200/80 max-w-md shadow-2xs">
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

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-12 mt-4">
          {/* Section 1: Khái niệm & Nguồn gốc Nhân sâm Goryeo */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#500028] bg-[#500028]/5 px-3 py-1 rounded-full">
                  Khái Niệm & Nguồn Gốc
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                  Nhân Sâm Goryeo (Cao Ly) Là Gì?
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Nhân sâm Goryeo, một loại thảo dược quý hiếm, chỉ mọc ở vùng Viễn Đông châu Á, bao gồm Hàn Quốc (vĩ độ 33,7º – 43,1º), Trung Quốc (Mãn Châu, vĩ độ 43º – 47º) và Nga (vùng Primorsky, vĩ độ 40º – 48º), tất cả đều nằm trong khoảng vĩ độ bắc từ 30º đến 48º.
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Nhân sâm là loại cây vô cùng khó trồng ở những vùng không có điều kiện khí hậu thích hợp. Hàn Quốc là một trong số ít những nơi trên thế giới có điều kiện lý tưởng để trồng nhân sâm và được biết đến đặc biệt với tên gọi <strong>“Nhân Sâm Goryeo”</strong>, được người tiêu dùng trên toàn thế giới ưa chuộng suốt nhiều thế kỷ.
                </p>
              </div>

              <div className="lg:col-span-6 relative aspect-4/3 rounded-xl overflow-hidden shadow-xs bg-gray-50 border border-gray-200">
                <Image
                  src="/images/ginseng/ginseng_about_1.jpg"
                  alt="Nhân sâm Goryeo Hàn Quốc chính thống"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Thành phần & Công dụng Saponin */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs border border-gray-200 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#500028] bg-[#500028]/5 px-3 py-1 rounded-full">
                Giá Trị Dinh Dưỡng
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Nhân Sâm Goryeo: Thành Phần & Công Dụng Saponin
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 italic">
                &quot;Men may deceive the Earth, but the Earth never deceives Men.&quot;
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Nhân Sâm Goryeo chủ yếu được cấu tạo từ các loại carbohydrate như tinh bột, polysaccharide và cellulose, chiếm tới khoảng 60 đến 70% tổng thành phần. Ngoài ra, nó còn chứa <strong>saponin – tinh chất của nhân sâm</strong>, và nhiều hợp chất hóa học chứa nitơ như protein, peptide, alkaloid, hợp chất phenolic và polyacetylene, thành phần dầu, chất tan trong dầu như phytosterol và nhiều loại vitamin. Người ta đã tìm thấy khoảng 20 loại chất polyacetylene khác nhau trong nhân sâm và ba thành phần chính là <em>panaxydol, panaxynol và panaxytriol</em>.
              </p>
            </div>

            {/* 4 Icon Benefit Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-gray-50/80 border border-gray-200 text-center space-y-3 hover:border-[#500028]/30 transition-all">
                <div className="relative w-14 h-14 mx-auto">
                  <Image
                    src="/images/ginseng/icon01.png"
                    alt="Phân giải mỡ thừa"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Phân Giải Mỡ Thừa</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tác dụng phân giải mỡ cao trong cơ thể và hỗ trợ quá trình hấp thụ, tiêu hóa chất dinh dưỡng.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50/80 border border-gray-200 text-center space-y-3 hover:border-[#500028]/30 transition-all">
                <div className="relative w-14 h-14 mx-auto">
                  <Image
                    src="/images/ginseng/icon02.png"
                    alt="Kích hoạt enzyme"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Kích Hoạt Enzyme</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Thúc đẩy quá trình trao đổi chất bằng cách kích hoạt các enzyme trong tế bào.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50/80 border border-gray-200 text-center space-y-3 hover:border-[#500028]/30 transition-all">
                <div className="relative w-14 h-14 mx-auto">
                  <Image
                    src="/images/ginseng/icon03.png"
                    alt="Tổng hợp protein"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Tổng Hợp Protein</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Thúc đẩy quá trình tổng hợp protein huyết thanh, hỗ trợ tuần hoàn khí huyết.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50/80 border border-gray-200 text-center space-y-3 hover:border-[#500028]/30 transition-all">
                <div className="relative w-14 h-14 mx-auto">
                  <Image
                    src="/images/ginseng/icon04.png"
                    alt="Phục hồi sức bền"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Phục Hồi Sức Bền</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tăng cường năng lượng, phục hồi sức bền, chống mệt mỏi, bất lực và chán ăn.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Distinguishing Method (Phân biệt Sâm Hàn Quốc & Ngoại Quốc) */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs border border-gray-200 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#500028] bg-[#500028]/5 px-3 py-1 rounded-full">
                Cẩm Nang Nhận Biết
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Phương Pháp Phân Biệt Sâm Hàn Quốc & Sâm Ngoại Quốc
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Nhân sâm Hàn Quốc chính thống luôn có đặc điểm nhận dạng rõ ràng về vỏ, đầu, chân và màu sắc.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image view */}
              <div className="lg:col-span-5 relative aspect-4/3 rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
                <Image
                  src="/images/ginseng/korean_vs_foreign.jpg"
                  alt="Đặc điểm nhân sâm Hàn Quốc vs sâm ngoại quốc"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-2"
                />
              </div>

              {/* Comparison details */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Foreign Ginseng */}
                <div className="p-5 sm:p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                  <div className="flex items-center gap-2 text-gray-700 font-bold text-sm pb-2 border-b border-gray-200">
                    <XCircle className="w-4 h-4 text-gray-400" />
                    <span>Foreign Ginseng (Sâm Ngoại Quốc)</span>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                      <span>Sạch, không có đất bám trên bề mặt.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                      <span>Đầu dài, phát triển kém, hơi mảnh.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                      <span>Bề mặt màu trắng sữa hoặc nâu nhạt.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                      <span>Nhiều rễ râu, chân ngắn, phát triển kém.</span>
                    </li>
                  </ul>
                </div>

                {/* Korean Ginseng */}
                <div className="p-5 sm:p-6 rounded-xl bg-[#500028]/5 border-2 border-[#500028]/30 space-y-3">
                  <div className="flex items-center gap-2 text-[#500028] font-bold text-sm pb-2 border-b border-[#500028]/20">
                    <CheckCircle2 className="w-4 h-4 text-[#500028]" />
                    <span>Korean Ginseng (Sâm Hàn Quốc)</span>
                  </div>
                  <ul className="space-y-2 text-xs text-gray-800">
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#500028] mt-1.5 shrink-0" />
                      <span>Có một ít đất bám trên bề mặt củ.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#500028] mt-1.5 shrink-0" />
                      <span>Đầu chắc khỏe, tròn và ngắn.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#500028] mt-1.5 shrink-0" />
                      <span>Bề mặt màu vàng chanh hoặc vàng trắng đặc trưng.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#500028] mt-1.5 shrink-0" />
                      <span>Chân phát triển nở nang, rễ ngắn và dày.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Các loại nhân sâm */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs border border-gray-200 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#500028] bg-[#500028]/5 px-3 py-1 rounded-full">
                Phân Loại Theo Chế Biến
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Các Loại Nhân Sâm Phổ Biến
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Nhân sâm tươi */}
              <div className="flex flex-col p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-4">
                <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-white border border-gray-100">
                  <Image
                    src="/images/ginseng/fresh_ginseng.jpg"
                    alt="Nhân sâm tươi (Thủy sâm)"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 flex-1 flex flex-col justify-between">
                  <h3 className="font-bold text-gray-900 text-sm">1. Nhân Sâm Tươi (Thủy Sâm)</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Nhân sâm tươi được khai thác trực tiếp từ nông trại, chứa đến 75% độ ẩm trong tổng thành phần. Thu hoạch khi cây từ 4 đến 6 tuổi, là nguyên liệu cơ bản cho các loại nhân sâm đỏ và nhân sâm trắng. Thích hợp làm quà tặng và chế biến món ăn bổ dưỡng.
                  </p>
                </div>
              </div>

              {/* Nhân sâm khô */}
              <div className="flex flex-col p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-4">
                <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-white border border-gray-100">
                  <Image
                    src="/images/ginseng/dry_ginseng.jpg"
                    alt="Nhân sâm khô (Bạch sâm)"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 flex-1 flex flex-col justify-between">
                  <h3 className="font-bold text-gray-900 text-sm">2. Nhân Sâm Khô (Bạch Sâm)</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Nhân sâm tươi sấy khô có màu vàng nhạt hoặc trắng ngà, độ ẩm dưới 14%. Bảo quản lâu dài mà không cần dùng hóa chất, thường nghiền thành bột nhân sâm, viên nén hoặc bài thuốc y học cổ truyền.
                  </p>
                </div>
              </div>

              {/* Hồng sâm */}
              <div className="flex flex-col p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-4">
                <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-white border border-gray-100">
                  <Image
                    src="/images/ginseng/red1.jpg"
                    alt="Hồng sâm 6 năm tuổi"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 flex-1 flex flex-col justify-between">
                  <h3 className="font-bold text-gray-900 text-sm">3. Hồng Sâm (6 Năm Tuổi)</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Nhân sâm tươi từ 4 đến 6 tuổi hấp chín bằng hơi nước rồi sấy khô thành màu nâu đỏ. Kết cấu cứng cáp, bảo quản lên tới 10 năm và sản sinh hàm lượng Saponin Ginsenoside quý vượt trội hoàn toàn.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Standard Minimalist CTA Banner */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Tìm Hiểu Quy Trình Hấp Sấy Chế Biến Hồng Sâm 6 Năm Tuổi
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Khám phá bí quyết tạo nên hơn 30 loại Saponin Ginsenoside đỉnh cao từ Nghệ nhân Nhân sâm Hàn Quốc Kim Jung-hwan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/hong-sam"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#500028] text-white text-sm font-semibold hover:bg-[#3d001f] transition-all shadow-xs"
              >
                <span>Xem Quy Trình Hồng Sâm</span>
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
