import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, ArrowRight, Award, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Quy Trình Chế Biến Hồng Sâm 6 Năm Tuổi Thượng Hạng | Hồng Sâm Kim",
  description:
    "Khám phá quy trình hấp sấy độc quyền chuyển hóa nhân sâm 6 năm tuổi thành Hồng sâm với hơn 30 loại Ginsenoside quý hiếm tại Punggi Hàn Quốc.",
  keywords: [
    "Hồng sâm 6 năm tuổi",
    "Quy trình hấp sấy hồng sâm",
    "Saponin Ginsenoside",
    "Hồng sâm Hàn Quốc",
    "Hồng Sâm Kim",
    "NA Korea",
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
          eyebrow="TINH HOA CHẾ BIẾN PUNGGI"
          showEyebrow={false}
          title="Hồng Sâm Là Gì?"
          description="Hồng sâm được tạo ra bằng cách hấp và sấy khô nhân sâm 6 năm tuổi tại thủ phủ Punggi. Quá trình xử lý nhiệt giúp bảo quản lên đến 10 năm và sản sinh hơn 30 loại Saponin Ginsenoside quý hiếm."
          image="/images/ginseng/sub02_hero.jpg"
          imageAlt="Hồng sâm 6 năm tuổi thượng hạng Punggi"
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
            <span className="text-[#500028] font-bold">Hồng Sâm (6 Năm Tuổi)</span>
          </nav>

          {/* 2-Article Tab Navigation */}
          <div className="flex items-center gap-2 p-1.5 bg-gray-100/90 rounded-xl border border-gray-200/80 max-w-md shadow-2xs">
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

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-12 mt-4">
          {/* Section 1: Định nghĩa & Quá trình hấp sấy */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#500028] bg-[#500028]/5 px-3 py-1 rounded-full">
                  Quy Trình Hấp SẤY ĐỘC QUYỀN
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                  Sự Biến Đổi Kỳ Diệu Từ Nhân Sâm Thành Hồng Sâm
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Hồng sâm được tạo ra bằng cách hấp và sấy khô nhân sâm từ 4 năm tuổi trở lên. Chất lượng hồng sâm được phân loại thành ba cấp độ cao quý: thiên, địa, nhân.
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Quá trình hấp và sấy khô làm cho thân nhân sâm cứng lại đồng thời tiêu diệt hoàn toàn các enzyme oxy hóa, giúp bảo quản hồng sâm trong thời hạn lên đến 10 năm mà không bị biến chất. Quá trình xử lý nhiệt tạo ra nhiều thành phần Ginsenoside quý hiếm không hề có trong nhân sâm tươi hay bạch sâm.
                </p>
              </div>

              <div className="lg:col-span-6 relative aspect-4/3 rounded-xl overflow-hidden shadow-xs bg-gray-50 border border-gray-200">
                <Image
                  src="/images/ginseng/red1.jpg"
                  alt="Chế biến hồng sâm 6 năm tuổi Punggi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Vì sao sâm 6 năm tuổi là chất lượng tốt nhất */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs border border-gray-200 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#500028] bg-[#500028]/5 px-3 py-1 rounded-full">
                Chu Kỳ Sinh Trưởng
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Vì Sao Nhân Sâm 6 Năm Tuổi Là Chất Lượng Tốt Nhất?
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Các chuyên gia đánh giá nhân sâm 6 năm tuổi là tiêu chuẩn vàng. Đến năm thứ 6, phần đầu chắc khỏe (7–10cm), đường kính thân (2–3cm), rễ con phân nhánh cân đối tổng chiều dài 34cm và tích lũy hàm lượng Ginsenoside đỉnh cao.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="text-sm font-bold text-gray-800">1 – 3 Năm Tuổi</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Nhân sâm thay đổi hình dạng trong quá trình sinh trưởng. Năm thứ nhất rễ bắt đầu mọc 30–40 rễ con. Năm thứ 3 số lượng rễ con ổn định nhưng lượng Saponin chưa tích tụ đủ.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#500028]/5 border-2 border-[#500028]/40 space-y-3 relative shadow-2xs">
                <div className="absolute -top-3 right-4 bg-[#500028] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                  ĐỈNH CAO HOÀN HẢO
                </div>
                <div className="text-sm font-bold text-[#500028]">Đúng 6 Năm Tuổi (6-Year Old)</div>
                <p className="text-xs text-gray-800 leading-relaxed font-medium">
                  Đầu chắc khỏe (7–10cm), thân dày dặn (2–3cm), rễ con dày và ngắn (34cm). Tích lũy trọn vẹn 30 loại Saponin Ginsenoside với khả năng tạo bọt và trị liệu đỉnh cao.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="text-sm font-bold text-gray-800">Từ 7 Năm Tuổi Trở Lên</div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Nếu nhân sâm già hơn 7 năm, hình dạng bị biến dạng, vỏ ngoài cứng xơ. Nhiều củ có xu hướng bị rỗng hoặc xốp trắng bên trong khi được chế biến.
                </p>
              </div>
            </div>

            {/* Saponin Comparison Banner */}
            <div className="p-6 rounded-xl bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1 text-center md:text-left">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Sức Mạnh 30 Loại Ginsenoside
                </div>
                <h3 className="text-lg font-bold text-white">
                  Sâm Cao Ly (30 Loại Saponin) vs Sâm Mỹ (14 Loại) & Sâm Trung Quốc (15 Loại)
                </h3>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-semibold text-white whitespace-nowrap shrink-0">
                Toàn Diện Nhất Thế Giới
              </div>
            </div>
          </section>

          {/* Section 3: Type of Ginseng (Phân loại theo hình thái) */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs border border-gray-200 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#500028] bg-[#500028]/5 px-3 py-1 rounded-full">
                Type of Ginseng
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Phân Loại Theo Hình Thái Hồng Sâm
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Nguyên thể */}
              <div className="flex flex-col p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-4">
                <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-white border border-gray-100">
                  <Image
                    src="/images/ginseng/red2.jpg"
                    alt="Hồng sâm nguyên thể"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-bold text-gray-900 text-sm">1. Nhân Sâm Nguyên Thể</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Sản xuất giữ nguyên cả đầu, thân và chân rễ. Được phân loại thành 3 cấp độ cao cấp: Thiên, Địa, Nhân và xếp hạng từ 10 đến 70 củ tùy theo kích thước.
                  </p>
                </div>
              </div>

              {/* Cắt lát */}
              <div className="flex flex-col p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-4">
                <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-white border border-gray-100">
                  <Image
                    src="/images/ginseng/red3.jpg"
                    alt="Hồng sâm cắt lát"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-bold text-gray-900 text-sm">2. Hồng Sâm Cắt Lát</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Thân chính của hồng sâm được cắt thành những lát nhỏ kích thước đều đặn theo chiều ngang, dọc hoặc chéo, vừa ăn và cực kỳ tiện lợi sử dụng hàng ngày.
                  </p>
                </div>
              </div>

              {/* Rễ sâm */}
              <div className="flex flex-col p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-4">
                <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-white border border-gray-100">
                  <Image
                    src="/images/ginseng/red4.jpg"
                    alt="Rễ hồng sâm"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-bold text-gray-900 text-sm">3. Rễ Hồng Sâm</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Phần rễ con tách riêng từ thân sâm. Chứa hàm lượng Saponin rất cao, vị đắng đậm đà đặc trưng, thường dùng sắc trà hoặc ngâm chiết xuất.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Phân loại chế phẩm hồng sâm */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs border border-gray-200 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#500028] bg-[#500028]/5 px-3 py-1 rounded-full">
                Thành Phẩm Ứng Dụng
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Phân Loại Sản Phẩm Chế Phẩm Hồng Sâm
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Cao hồng sâm */}
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-white border border-gray-100">
                  <Image
                    src="/images/ginseng/red5.jpg"
                    alt="Hồng sâm cô đặc"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Hồng Sâm Cô Đặc</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Sản phẩm dạng cao đặc sánh được chiết xuất từ hồng sâm 6 năm tuổi ở nhiệt độ thấp nhiều lần.
                </p>
              </div>

              {/* Hồng sâm lỏng */}
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-white border border-gray-100">
                  <Image
                    src="/images/ginseng/red6.jpg"
                    alt="Hồng sâm dạng lỏng"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Hồng Sâm Lỏng</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Dạng nước uống tinh chất hòa tan đóng gói stick hoặc túi tinh khiết chiết xuất nhiệt độ thấp.
                </p>
              </div>

              {/* Hồng sâm ngâm mật ong */}
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-white border border-gray-100">
                  <Image
                    src="/images/ginseng/red7.jpg"
                    alt="Hồng sâm ngâm mật ong"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Hồng Sâm Ngâm Mật Ong</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Ngâm trong dung dịch đường mật ong tự nhiên và sấy khô, thơm dẻo làm quà tặng và đồ ăn nhẹ bổ dưỡng.
                </p>
              </div>

              {/* Hồng sâm bột */}
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-white border border-gray-100">
                  <Image
                    src="/images/ginseng/dry_ginseng.jpg"
                    alt="Hồng sâm bột"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Hồng Sâm Bột</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Sản phẩm dạng bột mịn làm bằng cách nghiền nhỏ hồng sâm đã làm sạch, dễ dàng pha trà uống hàng ngày.
                </p>
              </div>
            </div>
          </section>

          {/* Standard Minimalist CTA Banner */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Khám Phá Cửa Hàng Hồng Sâm Kim Chính Hãng
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trải nghiệm trọn bộ sản phẩm chính hãng nhập khẩu nguyên hộp từ Punggi Hàn Quốc do Công ty TNHH Thương Mại NA Korea phân phối.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/san-pham"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#500028] text-white text-sm font-semibold hover:bg-[#3d001f] transition-all shadow-xs"
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
