import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, ShieldCheck, HeartPulse, Zap, Flame, CheckCircle2, XCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Khám Phá Vùng Đất Nhân Sâm Punggi 500 Năm",
  description: "Tìm hiểu nguồn gốc Nhân sâm Goryeo (Cao Ly) và truyền thống canh tác nhân sâm 6 năm tuổi hơn 500 năm tại thủ phủ Punggi – Chân núi Sobaek Hàn Quốc.",
  keywords: [
    "Nhân sâm Punggi",
    "Nhân sâm Goryeo",
    "Nhân sâm Hàn Quốc",
    "Saponin Ginsenoside",
    "Kim's Red Ginseng",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/nhan-sam`,
  },
  openGraph: {
    title: `Khám Phá Vùng Đất Nhân Sâm Punggi 500 Năm | ${SITE_CONFIG.brandName}`,
    description: "Di sản 500 năm nhân sâm Punggi huyền thoại dưới chân núi Sobaek Hàn Quốc.",
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
          eyebrow="DI SẢN 500 NĂM PUNGGI"
          showEyebrow={false}
          title="Nhân Sâm Là Gì?"
          description="Chúng tôi sẽ tiếp tục duy trì sự bền bỉ của nghề trồng nhân sâm 6 năm tuổi ở vùng đất Punggi huyền thoại. Dấu ấn ngàn năm hòa quyện giữa dòng chảy thời gian, con người và vạn vật."
          image="/images/ginseng.jpg"
          imageAlt="Nhân sâm Punggi"
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
            <span className="text-[#b5222a] font-bold">Nhân Sâm</span>
          </nav>

          {/* 2-Article Tab Control */}
          <div className="flex items-center gap-2 p-1.5 bg-gray-100/80 rounded-xl border border-gray-200/80 max-w-md shadow-2xs">
            <Link
              href="/nhan-sam"
              className="flex-1 text-center py-2.5 px-4 rounded-lg text-xs sm:text-sm font-bold bg-[#B5222A] text-white shadow-xs transition-all"
            >
              Nhân Sâm (Goryeo)
            </Link>
            <Link
              href="/hong-sam"
              className="flex-1 text-center py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-white/60 transition-all"
            >
              Hồng Sâm (6 Năm Tuổi)
            </Link>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-16 mt-4">
          {/* Section 1: Nhân sâm Goryeo là gì */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#b5222a]">
                  KHÁI NIỆM & NGUỒN GỐC
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                  Nhân Sâm Goryeo (Cao Ly) Là Gì?
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Nhân sâm Goryeo, một loại thảo dược quý hiếm, chỉ mọc ở vùng Viễn Đông châu Á, bao gồm Hàn Quốc (vĩ độ 33,7º – 43,1º), Trung Quốc (Mãn Châu, vĩ độ 43º – 47º) và Nga (vùng Primorsky, vĩ độ 40º – 48º), tất cả đều nằm trong khoảng vĩ độ bắc từ 30º đến 48º.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Nhân sâm là loại cây vô cùng khó trồng ở những vùng không có điều kiện khí hậu thích hợp. Hàn Quốc là một trong số ít những nơi trên thế giới có điều kiện lý tưởng để trồng nhân sâm và được biết đến đặc biệt với tên gọi <strong>“Nhân Sâm Goryeo”</strong>, được người tiêu dùng trên toàn thế giới ưa chuộng suốt nhiều thế kỷ.
                </p>
              </div>

              <div className="lg:col-span-6 relative aspect-4/3 rounded-xl overflow-hidden shadow-md bg-gray-50 border border-gray-100">
                <Image
                  src="/images/ginseng/인삼에대하여-1.jpg"
                  alt="Nhân sâm Goryeo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Thành phần & Công dụng Saponin */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b5222a]">
                GIÁ TRỊ DINH DƯỠNG
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Thành Phần & Công Dụng Của Saponin
              </h2>
              <p className="text-sm text-gray-600 italic">
                &quot;Men may deceive the Earth, but the Earth never deceives Men.&quot;
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nhân sâm Goryeo chủ yếu được cấu tạo từ carbohydrate (tinh bột, polysaccharide và cellulose, chiếm 60–70%). Đặc biệt, nó chứa <strong>Saponin (Ginsenoside)</strong> – tinh chất linh hồn của nhân sâm, cùng protein, peptide, alkaloid, hợp chất phenolic và 3 thành phần polyacetylene quý hiếm: <em>panaxydol, panaxynol và panaxytriol</em>.
              </p>
            </div>

            {/* 4 Core Saponin Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-[#F5F3EF] border border-[#EEEEEE] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#b5222a] text-white flex items-center justify-center mx-auto shadow-sm">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">Phân Giải Mỡ Thừa</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tác dụng phân giải mỡ cao trong cơ thể, hỗ trợ tiêu hóa và hấp thụ các dưỡng chất thiết yếu một cách tối ưu.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#F5F3EF] border border-[#EEEEEE] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#b5222a] text-white flex items-center justify-center mx-auto shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">Kích Hoạt Enzyme</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Thúc đẩy quá trình trao đổi chất của cơ thể thông qua kích hoạt mạnh mẽ các enzyme nội bào.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#F5F3EF] border border-[#EEEEEE] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#b5222a] text-white flex items-center justify-center mx-auto shadow-sm">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">Tổng Hợp Protein</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Thúc đẩy quá trình tổng hợp protein huyết thanh, hỗ trợ tuần hoàn máu và lưu thông khí huyết.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#F5F3EF] border border-[#EEEEEE] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#b5222a] text-white flex items-center justify-center mx-auto shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">Phục Hồi Sức Bền</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Tăng cường năng lượng, chống suy nhược, xua tan căng thẳng mệt mỏi và cải thiện chứng chán ăn.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Phân biệt sâm Hàn Quốc vs Sâm ngoại quốc */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b5222a]">
                CẨM NANG PHÂN BIỆT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Phân Biệt Nhân Sâm Hàn Quốc & Sâm Ngoại Quốc
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                Nhân sâm Hàn Quốc chính thống luôn có những đặc điểm nhận dạng rõ ràng về hình dáng củ, rễ và màu sắc.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Foreign Ginseng Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
                <div className="flex items-center gap-2 text-gray-700 font-bold text-lg pb-2 border-b border-gray-200">
                  <XCircle className="w-5 h-5 text-gray-400" />
                  <span>Nhân Sâm Ngoại Quốc (Foreign Ginseng)</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                    <span><strong>Bề mặt:</strong> Sạch, không có đất bám trên bề mặt củ.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                    <span><strong>Phần đầu:</strong> Dài, phát triển kém, hơi mảnh.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                    <span><strong>Màu sắc:</strong> Trắng sữa hoặc màu nâu nhạt.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                    <span><strong>Phần chân & rễ:</strong> Chân ngắn, phát triển kém; nhiều rễ râu vụn.</span>
                  </li>
                </ul>
              </div>

              {/* Korean Ginseng Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-red-50/60 border-2 border-[#b5222a]/30 space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-[#b5222a] font-bold text-lg pb-2 border-b border-[#b5222a]/20">
                  <CheckCircle2 className="w-5 h-5 text-[#b5222a]" />
                  <span>Nhân Sâm Hàn Quốc (Korean Ginseng)</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-800">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b5222a] mt-2 shrink-0" />
                    <span><strong>Bề mặt:</strong> Còn một lớp đất mỏng tự nhiên bám trên bề mặt.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b5222a] mt-2 shrink-0" />
                    <span><strong>Phần đầu:</strong> Chắc khỏe, ngắn và tròn đầy đặn.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b5222a] mt-2 shrink-0" />
                    <span><strong>Màu sắc:</strong> Màu vàng chanh hoặc vàng trắng óng ánh đặc trưng.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b5222a] mt-2 shrink-0" />
                    <span><strong>Phần chân & rễ:</strong> Chân phát triển nở nang, rễ chính dày và khỏe.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Các loại nhân sâm */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b5222a]">
                PHÂN LOẠI THEO CHẾ BIẾN
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Các Loại Nhân Sâm Phổ Biến
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nhân sâm tươi */}
              <div className="flex gap-6 p-6 rounded-xl bg-gray-50 border border-gray-100 items-start">
                <div className="relative w-28 h-28 shrink-0 rounded-lg overflow-hidden bg-white shadow-xs">
                  <Image
                    src="/images/ginseng/수.jpg"
                    alt="Nhân sâm tươi"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-gray-900 text-base">Nhân Sâm Tươi (Thủy Sâm)</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Khai thác trực tiếp từ nông trại, chứa khoảng 75% độ ẩm. Thu hoạch khi cây từ 4 đến 6 tuổi, là nguyên liệu gốc quý giá để chế biến thành hồng sâm, thái cực sâm và bạch sâm.
                  </p>
                </div>
              </div>

              {/* Nhân sâm khô */}
              <div className="flex gap-6 p-6 rounded-xl bg-gray-50 border border-gray-100 items-start">
                <div className="relative w-28 h-28 shrink-0 rounded-lg overflow-hidden bg-white shadow-xs">
                  <Image
                    src="/images/ginseng/건.jpg"
                    alt="Nhân sâm khô"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-gray-900 text-base">Nhân Sâm Khô (Bạch Sâm)</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Nhân sâm tươi được sấy khô tự nhiên có màu vàng nhạt hoặc trắng ngà, bảo quản được lâu và tiện lợi trong việc sắc trà hoặc bài thuốc đông y cổ truyền.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Link to Red Ginseng */}
          <div
            className="bg-[#181818] text-white rounded-2xl p-8 sm:p-12 text-center space-y-4"
            data-scroll-fade="on"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Khám Phá Tiếp: Hồng Sâm 6 Năm Tuổi
            </h2>
            <p className="text-gray-300 text-sm max-w-xl mx-auto">
              Tìm hiểu quy trình hấp sấy độc quyền của nghệ nhân Kim Jeong Hwan giúp chuyển hóa nhân sâm thành Hồng sâm với hàm lượng Ginsenoside vượt trội.
            </p>
            <div className="pt-2">
              <Link
                href="/hong-sam"
                className="na-btn-primary px-8 py-3.5 text-sm"
              >
                <span>TÌM HIỂU VỀ HỒNG SÂM</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
