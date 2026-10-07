"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { NHA_NHAP_KHAU_SUB_NAV } from "@/lib/subNavItems";
import { SectionIndicator } from "@/components/SectionIndicator";
import {
  ChevronRight,
  DollarSign,
  Truck,
  Award,
  BookOpen,
  Image as ImageIcon,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

const POLICIES = [
  {
    icon: ShieldCheck,
    title: "Bảo Hộ Thị Trường & Chống Phá Giá",
    desc: "Chính sách giá niêm yết minh bạch trên toàn quốc, cam kết bảo vệ tối đa quyền lợi và biên lợi nhuận bền vững cho từng đại lý chính thức.",
  },
  {
    icon: Award,
    title: "Chất Lượng Quốc Tế & Đầy Đủ Pháp Lý",
    desc: "100% sâm củ 6 năm tuổi Punggi đạt chuẩn HACCP, GMP, FDA Hoa Kỳ, nhập khẩu chính ngạch với đầy đủ chứng từ CO/CQ và hóa đơn VAT.",
  },
  {
    icon: DollarSign,
    title: "Chiết Khấu Bậc Thang Vượt Trội",
    desc: "Mức chiết khấu hấp dẫn theo bậc thang doanh số, thưởng quý, thưởng năm và hỗ trợ chính sách công nợ linh hoạt cho các đối tác chiến lược.",
  },
  {
    icon: Truck,
    title: "Kho Hàng Sẵn Sàng & Giao Vận Tốc Hành",
    desc: "Hệ thống tổng kho hiện đại tại Hà Nội và TP.HCM luôn sẵn sàng nguồn hàng ổn định, hỗ trợ đóng gói và giao hàng hỏa tốc trên toàn quốc.",
  },
  {
    icon: ImageIcon,
    title: "Bộ Tư Liệu Sales Kit & Truyền Thông Cao Cấp",
    desc: "Cung cấp miễn phí trọn bộ Catalog dập nhũ vàng sang trọng, Standee trưng bày, hình ảnh/video 4K bản quyền cùng tài liệu truyền thông bài bản.",
  },
  {
    icon: BookOpen,
    title: "Đào Tạo Dược Tính & Kỹ Năng Chuyên Sâu",
    desc: "Tham gia các khóa chuyển giao chuyên sâu về dược tính Ginsenoside, phương pháp tư vấn dinh dưỡng theo thể trạng và tư vấn quà biếu VIP.",
  },
];

export function NhaNhapKhauView() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col font-sans text-[#333333] antialiased">
      <Header overlay />

      <main className="flex-1 pb-20">
        <PageHero
          title="Nhà Nhập Khẩu & Chính Sách Hợp Tác Phân Phối"
          description="Đồng hành cùng NA Korea — Nhà nhập khẩu & phân phối độc quyền thương hiệu Hồng sâm 6 năm tuổi Hồng Sâm Kim chính ngạch từ Hàn Quốc. Cơ hội gia tăng doanh thu vượt trội cho đối tác chăm sóc sức khỏe và quà biếu cao cấp."
          image="/images/wholesale/kimsredginseng_20221206_p_2987154700109645423_1_2987154689942648125.jpg"
          imageAlt="Nhà nhập khẩu NA Korea - Hồng Sâm Kim"
          imageOpacity={0.92}
          subNavItems={NHA_NHAP_KHAU_SUB_NAV}
          currentHref="/nha-nhap-khau"
        />

        {/* Breadcrumb Navigation - Quy chuẩn Spacing py-3 */}
        <div className="border-b border-[#EEEEEE] bg-white py-3">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 font-sans text-xs text-[#666666]">
              <Link href="/" className="hover:text-[#4B193E] transition-colors">
                Trang Chủ
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#A8A196]" />
              <Link href="/nha-nhap-khau" className="hover:text-[#4B193E] transition-colors">
                Nhà Nhập Khẩu
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#A8A196]" />
              <span className="font-semibold text-[#4B193E]">Nhà Nhập Khẩu NA Korea</span>
            </nav>
          </div>
        </div>

        {/* Main Content: Quy chuẩn Spacing mt-4 đồng nhất */}
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-12 mt-4">
          
          {/* Section 1: Giới thiệu thương hiệu & Điểm tựa uy tín */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xs border border-[#EEEEEE]">
            <div className="mx-auto max-w-[1080px] text-center mb-8 sm:mb-12">
              <SectionIndicator activeIndex={1} total={2} />
              <p className="mb-3 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#888888]">
                Đơn vị nhập khẩu &amp; phân phối độc quyền
              </p>
              <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px] lg:text-[32px]">
                Thương Hiệu Bảo Chứng Bởi Bậc Thầy Nhân Sâm Kim Jeong Hwan
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <p className="font-sans text-base font-normal leading-6 text-[#111111]">
                  <strong>Hồng Sâm Kim</strong> là thương hiệu hồng sâm 6 năm tuổi thượng hạng đến từ vùng đất thánh Punggi (Hàn Quốc), được chế tác dưới sự dẫn dắt của Bậc thầy Nhân sâm với quy trình kiểm định nghiêm ngặt từ nông trường đến thành phẩm.
                </p>
                <div className="h-px w-full max-w-[264px] bg-[#D8D2C8] my-4" />
                <p className="font-sans text-base font-normal leading-6 text-[#111111]">
                  Sản phẩm đạt chuẩn <strong>HACCP, GMP, FDA Hoa Kỳ</strong> và được tỉnh Gyeongsangbuk-do lựa chọn làm <strong>Quà tặng ngoại giao quốc gia</strong>. Tại Việt Nam, <strong>NA Korea</strong> cam kết bảo hộ quyền lợi đối tác, hỗ trợ pháp lý 100% và tạo mọi điều kiện để đại lý phát triển bền vững.
                </p>
                <div className="pt-2">
                  <a
                    href="http://nakorea.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#B5222A] hover:bg-[#991C23] px-5 py-3 font-sans text-sm font-bold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <span>Truy cập Website NA Korea (nakorea.vn)</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-4/3 rounded-2xl overflow-hidden shadow-md bg-[#181818] border border-[#EEEEEE]">
                <Image
                  src="/images/wholesale/kimsredginseng_20221206_p_2987154700109645423_1_2987154689942648125.jpg"
                  alt="Hồng Sâm Kim Store"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Section 2: 6 Chính sách hợp tác dành cho đối tác */}
          <section className="space-y-10">
            <div className="mx-auto max-w-[1080px] text-center mb-8 sm:mb-12">
              <SectionIndicator activeIndex={2} total={2} />
              <p className="mb-3 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#888888]">
                Quyền lợi &amp; chính sách ưu đãi
              </p>
              <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px] lg:text-[32px]">
                Chính Sách Dành Riêng Cho Đối Tác &amp; Nhà Nhập Khẩu
              </h2>
              <p className="mt-4 font-sans text-base font-normal leading-6 text-[#111111] max-w-[860px] mx-auto">
                Giải pháp hợp tác tối ưu dành cho Chuỗi thực phẩm chức năng, Nhà thuốc, Phòng khám, Spa cao cấp, Doanh nghiệp quà tặng VIP và Nhà phân phối khu vực.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {POLICIES.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#EEEEEE] space-y-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#4B193E] hover:shadow-md"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#F5F3EF] text-[#4B193E] border border-[#EEEEEE] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-sans text-lg font-bold leading-snug tracking-[-0.01em] text-[#111111]">
                      {p.title}
                    </h3>
                    <p className="font-sans text-sm font-normal leading-relaxed text-[#666666]">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

// Re-export for backward compatibility
export const DangKyDaiLyView = NhaNhapKhauView;
