import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Quy Trình Chế Biến Hồng Sâm 6 Năm Tuổi Thượng Hạng",
  description: "Khám phá quy trình hấp sấy độc quyền chuyển hóa nhân sâm 6 năm tuổi thành Hồng sâm với hơn 30 loại Ginsenoside quý hiếm tại Punggi Hàn Quốc.",
  keywords: [
    "Hồng sâm 6 năm tuổi",
    "Quy trình hấp sấy hồng sâm",
    "Ginsenoside",
    "Kim's Red Ginseng",
    "Hồng sâm Hàn Quốc",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/hong-sam`,
  },
  openGraph: {
    title: `Quy Trình Chế Biến Hồng Sâm 6 Năm Tuổi Thượng Hạng | ${SITE_CONFIG.brandName}`,
    description: "Sự biến đổi kỳ diệu từ nhân sâm tươi thành Hồng sâm 6 năm tuổi thượng hạng.",
    url: `${SITE_CONFIG.siteUrl}/hong-sam`,
    type: "website",
  },
};

export default function HongSamPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col">
      <Header />

      <main className="flex-1 pb-20">
        <PageHero
          eyebrow="TINH HOA CHẾ BIẾN"
          showEyebrow={false}
          title="Hồng Sâm Là Gì?"
          description="Hồng sâm được tạo ra bằng quy trình hấp và sấy khô công phu từ những củ nhân sâm 6 năm tuổi đạt đỉnh cao về hàm lượng Ginsenoside tại thủ phủ sâm Punggi."
          image="/images/red-ginseng.jpg"
          imageAlt="Hồng sâm 6 năm tuổi"
          imageOpacity={0.96}
        />

        {/* Breadcrumb & Navigation Tabs */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-4 pb-2 space-y-4">
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
            <span className="text-[#4B193E] font-bold">Hồng Sâm</span>
          </nav>

          {/* 2-Article Tab Control */}
          <div className="flex items-center gap-2 p-1.5 bg-gray-100/80 rounded-xl border border-gray-200/80 max-w-md shadow-2xs">
            <Link
              href="/nhan-sam"
              className="flex-1 text-center py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-white/60 transition-all"
            >
              Nhân Sâm (Goryeo)
            </Link>
            <Link
              href="/hong-sam"
              className="flex-1 text-center py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold bg-[#4B193E] text-white shadow-xs transition-all"
            >
              Hồng Sâm (6 Năm Tuổi)
            </Link>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-16 mt-4">
          {/* Section 1: Định nghĩa & Quá trình hấp sấy */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#4B193E]">
                  QUY TRÌNH HẤP SẤY ĐỘC QUYỀN
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                  Sự Biến Đổi Kỳ Diệu Từ Nhân Sâm Thành Hồng Sâm
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Hồng sâm được tạo ra bằng cách hấp và sấy khô nhân sâm từ 4 đến 6 năm tuổi. Quá trình xử lý nhiệt nghiêm ngặt làm cho thân nhân sâm chuyển sang màu đỏ sẫm óng ánh, đồng thời kích hoạt và sản sinh ra hàng loạt hoạt chất Ginsenoside quý hiếm mà nhân sâm tươi không hề có.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Quá trình hấp và sấy khô làm cho thân nhân sâm rắn chắc, tiêu diệt hoàn toàn các enzyme oxy hóa, cho phép bảo quản hồng sâm trong thời gian rất dài mà vẫn giữ nguyên 100% tinh chất quý báu.
                </p>
              </div>

              <div className="lg:col-span-6 relative aspect-4/3 rounded-xl overflow-hidden shadow-md bg-gray-50 border border-gray-100">
                <Image
                  src="/images/ginseng/red1.jpg"
                  alt="Chế biến hồng sâm"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Vì sao phải là Sâm 6 năm tuổi */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4B193E]">
                CHU KỲ SINH TRƯỞNG
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Vì Sao Nhân Sâm 6 Năm Tuổi Là Chất Lượng Tốt Nhất?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Đến năm thứ 6, nhân sâm đạt độ hoàn thiện cao nhất về hình dáng củ, thân dài từ 7–10cm, đường kính 2–3cm, rễ con phân nhánh cân đối và tích lũy hàm lượng Ginsenoside đỉnh cao.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="text-sm font-bold text-gray-800">1 – 3 Năm Tuổi</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Rễ bắt đầu dày lên và hình thành các rễ con ban đầu. Lượng Saponin còn non nớt, chưa tích lũy đủ hoạt chất trị liệu.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#4B193E]/5 border-2 border-[#4B193E]/40 space-y-3 relative shadow-xs">
                <div className="absolute -top-3 right-4 bg-[#4B193E] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  ĐỈNH CAO HOÀN HẢO
                </div>
                <div className="text-sm font-bold text-[#4B193E]">Đúng 6 Năm Tuổi (6-Year Old)</div>
                <p className="text-xs text-gray-800 leading-relaxed font-medium">
                  Phần đầu chắc khỏe, thân dày dặn, các rễ con phát triển đều đặn. Hàm lượng Ginsenoside Rg1, Rb1, Rg3 đạt mức tối đa và cân bằng sinh học hoàn hảo.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="text-sm font-bold text-gray-800">Từ 7 Năm Tuổi Trở Lên</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Củ bị già hóa, hình dạng biến dạng, vỏ ngoài xơ cứng, bên trong có xu hướng bị xốp rỗng và suy giảm hoạt chất khi chế biến.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: 30 loại Saponin vượt trội của Sâm Goryeo */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4B193E]">
                SO SÁNH QUỐC TẾ
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Sức Mạnh Vượt Trội Của 30 Loại Saponin Goryeo
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nhân sâm Cao Ly (Goryeo) của Hàn Quốc chứa tới <strong>30 loại Ginsenoside khác nhau</strong> – vượt trội hoàn toàn so với sâm Mỹ (14 loại) và sâm Trung Quốc (15 loại).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                <div className="text-gray-500 text-xs uppercase font-semibold">Nhân sâm Mỹ</div>
                <div className="text-3xl font-extrabold text-gray-700">14 Loại</div>
                <div className="text-xs text-gray-500">Ginsenoside</div>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                <div className="text-gray-500 text-xs uppercase font-semibold">Nhân sâm Trung Quốc</div>
                <div className="text-3xl font-extrabold text-gray-700">15 Loại</div>
                <div className="text-xs text-gray-500">Ginsenoside</div>
              </div>

              <div className="p-6 rounded-xl bg-[#4B193E] text-white shadow-lg space-y-2 transform md:-translate-y-2">
                <div className="text-white/80 text-xs uppercase font-bold tracking-wider">Hồng Sâm Goryeo Hàn Quốc</div>
                <div className="text-4xl font-extrabold">30+ Loại</div>
                <div className="text-xs text-white/80 font-medium">Hàm lượng Ginsenoside toàn diện nhất thế giới</div>
              </div>
            </div>
          </section>

          {/* Section 4: Các dòng chế phẩm từ Hồng Sâm */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4B193E]">
                DANH MỤC THÀNH PHẨM
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Các Dạng Chế Phẩm Hồng Sâm Kim&apos;s
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Cao hồng sâm */}
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 space-y-3">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-white shadow-2xs">
                  <Image
                    src="/images/ginseng/red2.jpg"
                    alt="Cao hồng sâm cô đặc"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base">Cao Hồng Sâm Cô Đặc</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Dạng cao đặc sánh cô đọng từ hồng sâm 6 năm tuổi ở nhiệt độ thấp với nước tinh khiết, mang lại hàm lượng Saponin 30mg đỉnh cao.
                </p>
              </div>

              {/* Nước hồng sâm tonic */}
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 space-y-3">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-white shadow-2xs">
                  <Image
                    src="/images/ginseng/red3.jpg"
                    alt="Nước hồng sâm BalanceTime"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base">Nước Hồng Sâm (Stick & Gói)</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Thiết kế dạng gói uống tiện lợi như BalanceTime, EnergyTime, Easy & High kết hợp thảo dược quý, dễ mang theo và bồi bổ mỗi ngày.
                </p>
              </div>

              {/* Hồng sâm tẩm mật ong */}
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 space-y-3">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-white shadow-2xs">
                  <Image
                    src="/images/ginseng/red4.jpg"
                    alt="Hồng sâm tẩm mật ong"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-base">Sâm Củ & Lát Tẩm Mật Ong</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Hồng sâm cắt lát hoặc nguyên củ ngâm tẩm mật ong rừng 72 giờ, dẻo dai thơm ngọt, giảm vị đắng tự nhiên, thích hợp cho mọi lứa tuổi.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Link to Store */}
          <div
            className="bg-[#181818] text-white rounded-2xl p-8 sm:p-12 text-center space-y-4"
            data-scroll-fade="on"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Khám Phá Cửa Hàng Hồng Sâm Kim&apos;s Red Ginseng
            </h2>
            <p className="text-gray-300 text-sm max-w-xl mx-auto">
              Trải nghiệm trọn bộ 32 sản phẩm chính hãng nhập khẩu nguyên hộp từ Tổng công ty Nông nghiệp Nhân sâm Punggi Hàn Quốc.
            </p>
            <div className="pt-2">
              <Link
                href="/san-pham"
                className="na-btn-primary px-8 py-3.5 text-sm"
              >
                <span>XEM CỬA HÀNG SẢN PHẨM</span>
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
