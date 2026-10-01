"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { NHA_NHAP_KHAU_SUB_NAV } from "@/lib/subNavItems";
import { SectionIndicator } from "@/components/SectionIndicator";
import {
  ChevronRight,
  CheckCircle2,
  DollarSign,
  Truck,
  Award,
  BookOpen,
  Image as ImageIcon,
  Send,
  ShieldCheck,
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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col font-sans text-[#333333] antialiased">
      <Header overlay />

      <main className="flex-1 pb-20">
        <PageHero
          title="Nhà Nhập Khẩu & Chính Sách Hợp Tác Phân Phối"
          description="Đồng hành cùng NA Korea — Nhà nhập khẩu & phân phối độc quyền thương hiệu Hồng sâm 6 năm tuổi Hồng Kim Sâm chính ngạch từ Hàn Quốc. Cơ hội gia tăng doanh thu vượt trội cho đối tác chăm sóc sức khỏe và quà biếu cao cấp."
          image="/images/wholesale/kimsredginseng_20221206_p_2987154700109645423_1_2987154689942648125.jpg"
          imageAlt="Nhà nhập khẩu NA Korea - Hồng Kim Sâm"
          imageOpacity={0.92}
          subNavItems={NHA_NHAP_KHAU_SUB_NAV}
          currentHref="/ve-nha-nhap-khau"
        />

        {/* Breadcrumb Navigation - Quy chuẩn Spacing py-3 */}
        <div className="border-b border-[#EEEEEE] bg-white py-3">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 font-sans text-xs text-[#666666]">
              <Link href="/" className="hover:text-[#4B193E] transition-colors">
                Trang Chủ
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#A8A196]" />
              <span className="font-semibold text-[#4B193E]">Nhà Nhập Khẩu</span>
            </nav>
          </div>
        </div>

        {/* Main Content: Quy chuẩn Spacing mt-4 đồng nhất */}
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-12 mt-4">
          
          {/* Section 1: Giới thiệu thương hiệu & Điểm tựa uy tín */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xs border border-[#EEEEEE]">
            <div className="mx-auto max-w-[1080px] text-center mb-8 sm:mb-12">
              <SectionIndicator activeIndex={1} total={3} />
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
                  <strong>Hồng Kim Sâm</strong> là thương hiệu hồng sâm 6 năm tuổi thượng hạng đến từ vùng đất thánh Punggi (Hàn Quốc), được chế tác dưới sự dẫn dắt của Bậc thầy Nhân sâm với quy trình kiểm định nghiêm ngặt từ nông trường đến thành phẩm.
                </p>
                <div className="h-px w-full max-w-[264px] bg-[#D8D2C8] my-4" />
                <p className="font-sans text-base font-normal leading-6 text-[#111111]">
                  Sản phẩm đạt chuẩn <strong>HACCP, GMP, FDA Hoa Kỳ</strong> và được tỉnh Gyeongsangbuk-do lựa chọn làm <strong>Quà tặng ngoại giao quốc gia</strong>. Tại Việt Nam, <strong>NA Korea</strong> cam kết bảo hộ quyền lợi đối tác, hỗ trợ pháp lý 100% và tạo mọi điều kiện để đại lý phát triển bền vững.
                </p>
              </div>

              <div className="lg:col-span-6 relative aspect-4/3 rounded-2xl overflow-hidden shadow-md bg-[#181818] border border-[#EEEEEE]">
                <Image
                  src="/images/wholesale/kimsredginseng_20221206_p_2987154700109645423_1_2987154689942648125.jpg"
                  alt="Hồng Kim Sâm Store"
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
              <SectionIndicator activeIndex={2} total={3} />
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

          {/* Section 3: Centered Luxury Registration Form */}
          <section className="max-w-3xl mx-auto w-full">
            <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xs border border-[#EEEEEE]">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-500 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111]">
                      Đăng Ký Hợp Tác Thành Công!
                    </h2>
                    <p className="font-sans text-base font-normal leading-6 text-[#666666] max-w-md mx-auto">
                      Giám đốc kinh doanh phụ trách khu vực của <strong>NA Korea</strong> sẽ trực tiếp liên hệ và gửi bảng chính sách chiết khấu chi tiết tới bạn trong thời gian sớm nhất.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", phone: "", email: "", city: "", message: "" });
                      }}
                      className="inline-flex items-center gap-2 rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] px-5 py-2.5 font-sans text-xs font-bold text-[#333333] hover:border-[#4B193E] hover:text-[#4B193E] transition-all"
                    >
                      <span>Gửi thêm yêu cầu khác</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mx-auto text-center mb-6">
                    <SectionIndicator activeIndex={3} total={3} />
                    <p className="mb-3 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#888888]">
                      Đăng ký trực tiếp với Nhà nhập khẩu
                    </p>
                    <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px]">
                      Nhận Bảng Báo Giá Sỉ &amp; Chính Sách Nhà Nhập Khẩu
                    </h2>
                    <p className="mt-3 font-sans text-base font-normal leading-6 text-[#666666] max-w-lg mx-auto">
                      Vui lòng điền thông tin bên dưới để nhận chính sách chiết khấu và quyền lợi phân phối độc quyền từ NA Korea.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-sans text-xs font-bold text-[#111111]">
                        Họ và tên người liên hệ <span className="text-[#4B193E]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ví dụ: Nguyễn Văn A"
                        className="w-full rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] px-4 py-3 font-sans text-sm text-[#111111] placeholder-[#A8A196] transition-all focus:border-[#4B193E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4B193E]/15"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-sans text-xs font-bold text-[#111111]">
                        Số điện thoại / Zalo <span className="text-[#4B193E]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ví dụ: 090 340 9939"
                        className="w-full rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] px-4 py-3 font-sans text-sm text-[#111111] placeholder-[#A8A196] transition-all focus:border-[#4B193E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4B193E]/15"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block font-sans text-xs font-bold text-[#111111]">
                        Địa chỉ Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] px-4 py-3 font-sans text-sm text-[#111111] placeholder-[#A8A196] transition-all focus:border-[#4B193E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4B193E]/15"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-sans text-xs font-bold text-[#111111]">
                        Tỉnh / Thành phố dự kiến phân phối <span className="text-[#4B193E]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Ví dụ: Hà Nội, TP.HCM, Đà Nẵng..."
                        className="w-full rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] px-4 py-3 font-sans text-sm text-[#111111] placeholder-[#A8A196] transition-all focus:border-[#4B193E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4B193E]/15"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-sans text-xs font-bold text-[#111111]">
                      Lời nhắn / Nhu cầu hợp tác
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Quý đối tác vui lòng chia sẻ thêm về kế hoạch kinh doanh hoặc các câu hỏi cần giải đáp..."
                      className="w-full rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] px-4 py-3 font-sans text-sm text-[#111111] placeholder-[#A8A196] transition-all focus:border-[#4B193E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4B193E]/15 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#4B193E] hover:bg-[#3A1230] py-4 font-sans text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.005] active:scale-[0.99] disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Đang gửi thông tin...</span>
                      ) : (
                        <>
                          <span>NHẬN CHÍNH SÁCH NHÀ NHẬP KHẨU NGAY</span>
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center font-sans text-[11px] text-[#888888] pt-1">
                    🔒 Thông tin đối tác được bảo mật tuyệt đối theo chính sách bảo hộ phân phối của NA Korea.
                  </p>
                </form>
              )}
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
