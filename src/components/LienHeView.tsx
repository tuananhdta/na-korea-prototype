"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ZaloLogo, GoogleGmailLogo, PhoneCallFilledIcon } from "@/components/icons/BrandIcons";
import {
  ChevronRight,
  MapPin,
  Send,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Award,
  Truck,
  HeartHandshake,
} from "lucide-react";

export function LienHeView() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "Tư vấn chọn sản phẩm",
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
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col font-sans text-[#333333]">
      <Header />

      <main className="flex-1 pb-20">
        {/* Banner Hero */}
        <PageHero
          title="Liên Hệ Trực Tiếp"
          description="Đội ngũ chuyên viên tư vấn dinh dưỡng của Kim's Red Ginseng luôn sẵn sàng lắng nghe và đồng hành chăm sóc sức khỏe cùng bạn."
          image="/images/ginseng-hero-2.jpg"
          imageAlt="Liên hệ Kim's Red Ginseng"
          imageOpacity={0.92}
        />

        {/* Breadcrumb */}
        <div className="border-b border-[#EEEEEE] bg-[#F8F8F8] py-3">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <nav className="flex items-center space-x-2 text-xs text-[#666666]">
              <Link href="/" className="hover:text-[#B5222A] transition-colors">
                Trang Chủ
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#A8A196]" />
              <span className="text-[#B5222A] font-semibold">Liên Hệ</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 mt-10 space-y-10">
          
          {/* ─── 3 VIP QUICK-CONTACT CARDS ─── */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            
            {/* Card 1: Hotline (Phone màu xanh + animation rung chuông & sóng lan tỏa) */}
            <a
              href="tel:0903409939"
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#EEEEEE] bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-[0_12px_28px_rgba(16,185,129,0.18)] active:scale-[0.99]"
            >
              {/* Subtle green ambient sheen on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

              <div className="relative flex h-13 w-13 shrink-0 items-center justify-center">
                {/* Ripple wave ring */}
                <span className="absolute inset-0 rounded-2xl bg-emerald-400/35 animate-ring-wave pointer-events-none" />
                <span className="absolute -inset-0.5 rounded-2xl bg-emerald-500/20 animate-ping opacity-60 pointer-events-none group-hover:opacity-100" />
                
                {/* Vibrant green phone container with filled icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-600 text-white shadow-[0_4px_14px_rgba(16,185,129,0.38)] transition-all duration-300 group-hover:scale-108 group-hover:shadow-[0_6px_20px_rgba(16,185,129,0.5)]">
                  <PhoneCallFilledIcon className="h-5 w-5 text-white animate-phone-ring transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>

              <div className="relative min-w-0 flex-1">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#888888]">
                  <span>Hotline 24/7</span>
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="font-sans text-lg font-extrabold text-[#15803D] group-hover:text-emerald-600 transition-colors truncate">
                  090.340.9939
                </div>
                <div className="text-xs text-[#666666] truncate">
                  Tư vấn sản phẩm & đơn hàng
                </div>
              </div>
            </a>

            {/* Card 2: Zalo VIP (Zalo chuẩn logo chính thức + animation floating nhịp nhàng) */}
            <a
              href="https://zalo.me/0903409939"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#EEEEEE] bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0068FF] hover:shadow-[0_12px_28px_rgba(0,104,255,0.18)] active:scale-[0.99]"
            >
              {/* Subtle blue ambient sheen on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

              <div className="relative flex h-13 w-13 shrink-0 items-center justify-center">
                {/* Ripple wave ring */}
                <span className="absolute inset-0 rounded-2xl bg-blue-400/35 animate-ring-wave pointer-events-none" />
                
                {/* Official Zalo icon container */}
                <div className="relative flex h-12 w-12 items-center justify-center transition-all duration-300 group-hover:scale-108">
                  <ZaloLogo className="h-12 w-12 rounded-xl shadow-[0_4px_14px_rgba(0,104,255,0.38)] group-hover:shadow-[0_6px_20px_rgba(0,104,255,0.5)] animate-float-gentle" />
                </div>
              </div>

              <div className="relative min-w-0 flex-1">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#888888]">
                  <span>Chat Zalo Trực Tuyến</span>
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0068FF] animate-pulse" />
                </div>
                <div className="font-sans text-lg font-extrabold text-[#111111] group-hover:text-[#0068FF] transition-colors truncate">
                  Zalo OA Kim&apos;s Ginseng
                </div>
                <div className="text-xs text-[#666666] truncate">
                  Giải đáp & hỗ trợ 1:1 nhanh
                </div>
              </div>
            </a>

            {/* Card 3: Google Gmail (Chuẩn logo Gmail Google 4 màu chính thức + floating & hover glow) */}
            <a
              href="mailto:Kimsredginseng@gmail.com"
              className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#EEEEEE] bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#EA4335] hover:shadow-[0_12px_28px_rgba(234,67,53,0.18)] active:scale-[0.99]"
            >
              {/* Subtle red ambient sheen on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-50/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

              <div className="relative flex h-13 w-13 shrink-0 items-center justify-center">
                {/* Ripple wave ring */}
                <span className="absolute inset-0 rounded-2xl bg-red-400/30 animate-ring-wave pointer-events-none" />
                
                {/* Gmail icon container */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#EEEEEE] shadow-[0_4px_14px_rgba(234,67,53,0.18)] transition-all duration-300 group-hover:scale-108 group-hover:border-[#EA4335]/40 group-hover:shadow-[0_6px_20px_rgba(234,67,53,0.3)]">
                  <div className="animate-float-gentle transition-transform duration-300 group-hover:scale-110">
                    <GoogleGmailLogo className="h-6 w-6" />
                  </div>
                </div>
              </div>

              <div className="relative min-w-0 flex-1">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#888888]">
                  <span>Hộp Thư Tiếp Nhận</span>
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#EA4335] animate-pulse" />
                </div>
                <div className="font-sans text-base font-extrabold text-[#111111] group-hover:text-[#EA4335] transition-colors truncate">
                  Kimsredginseng@gmail.com
                </div>
                <div className="text-xs text-[#666666] truncate">
                  Phản hồi trong vòng 2 giờ
                </div>
              </div>
            </a>

          </div>

          {/* ─── MAIN 2-COLUMN SECTION (Concise Info vs Streamlined Form) ─── */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
            
            {/* ─── LEFT COLUMN: CONCISE CORPORATE INFO & LOCATIONS (5/12) ─── */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="h-full rounded-3xl border border-[#EEEEEE] bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
                
                <div className="space-y-5">
                  <div className="space-y-1.5 pb-4 border-b border-[#EEEEEE]">
                    <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight">
                      NA Korea – Phân Phối Độc Quyền
                    </h2>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      Sản phẩm Hồng sâm 6 năm tuổi Kim&apos;s Red Ginseng được nhập khẩu chính ngạch từ Hàn Quốc.
                    </p>
                  </div>

                  {/* Concise Locations List */}
                  <div className="space-y-4 text-xs sm:text-sm">
                    
                    {/* Location 1: Main HQ */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F5F3EF] border border-[#EEEEEE] text-[#B5222A]">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="block text-[#111111] font-bold">
                          Trụ sở & Showroom Hà Nội
                        </strong>
                        <p className="text-[#666666] text-xs leading-relaxed">
                          210 Trung Kính, P. Yên Hòa, Q. Cầu Giấy, Hà Nội
                        </p>
                      </div>
                    </div>

                    {/* Location 2: Representative Office */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F5F3EF] border border-[#EEEEEE] text-[#B5222A]">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="block text-[#111111] font-bold">
                          Văn phòng Thanh Xuân
                        </strong>
                        <p className="text-[#666666] text-xs leading-relaxed">
                          LK 19-TT1, Khu nhà ở 96-96B Nguyễn Huy Tưởng, Hà Nội
                        </p>
                      </div>
                    </div>

                    {/* Location 3: South Branch */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F5F3EF] border border-[#EEEEEE] text-[#B5222A]">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="block text-[#111111] font-bold">
                          Chi nhánh TP. Hồ Chí Minh
                        </strong>
                        <p className="text-[#666666] text-xs leading-relaxed">
                          41/10D/29 Đường Gò Cát, P. Phú Hữu, TP. Thủ Đức, TP. HCM
                        </p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-3 pt-1">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F5F3EF] border border-[#EEEEEE] text-[#181818]">
                        <Clock className="h-4 w-4 text-[#D4A359]" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="block text-[#111111] font-bold">
                          Thời gian phục vụ
                        </strong>
                        <p className="text-[#666666] text-xs leading-relaxed">
                          08:00 – 18:00 (Thứ Hai – Chủ Nhật)
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Legal Entity Trust Badge */}
                <div className="mt-6 rounded-xl bg-[#F8F8F8] border border-[#EEEEEE] p-3.5 text-xs text-[#181818] leading-relaxed flex items-center gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-[#B5222A] shrink-0" />
                  <div>
                    <span className="font-bold text-[#111111]">CÔNG TY TNHH TM NA KOREA</span>
                    <span className="text-[#888888] block text-[11px]">MST: 0109946846 • Đại diện thương hiệu Kim&apos;s Red Ginseng</span>
                  </div>
                </div>

              </div>
            </div>

            {/* ─── RIGHT COLUMN: STREAMLINED CONSULTATION FORM (7/12) ─── */}
            <div className="lg:col-span-7">
              <div className="h-full rounded-3xl border border-[#EEEEEE] bg-white p-6 sm:p-8 md:p-10 shadow-xs flex flex-col justify-center">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-5">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 shadow-sm animate-bounce">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans text-2xl font-extrabold text-[#111111] tracking-tight">
                        Gửi Yêu Cầu Thành Công!
                      </h3>
                      <p className="text-sm text-[#666666] max-w-md mx-auto leading-relaxed">
                        Cảm ơn bạn đã liên hệ. Chuyên viên tư vấn của <strong>Kim&apos;s Red Ginseng</strong> sẽ gọi lại hỗ trợ bạn trong vòng <strong>15–30 phút</strong>.
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", phone: "", email: "", topic: "Tư vấn chọn sản phẩm", message: "" });
                        }}
                        className="inline-flex items-center gap-2 rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] px-5 py-2 text-xs font-bold text-[#333333] hover:border-[#B5222A] hover:text-[#B5222A] transition-all"
                      >
                        <span>Gửi thêm yêu cầu khác</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="space-y-1 pb-1">
                      <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight">
                        Tư Vấn Sức Khỏe & Sản Phẩm
                      </h2>
                    </div>

                    {/* Name & Phone (2 cols) */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#111111]">
                          Họ và tên <span className="text-[#B5222A]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ví dụ: Nguyễn Văn A"
                          className="w-full rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] px-3.5 py-2.5 text-sm text-[#111111] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#111111]">
                          Số điện thoại <span className="text-[#B5222A]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Ví dụ: 090 340 9939"
                          className="w-full rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] px-3.5 py-2.5 text-sm text-[#111111] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                        />
                      </div>
                    </div>

                    {/* Topic Select */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#111111]">
                        Nhu cầu hỗ trợ
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] px-3.5 py-2.5 text-sm text-[#111111] transition-all focus:border-[#B5222A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                      >
                        <option value="Tư vấn chọn sản phẩm">Tư vấn chọn sản phẩm hồng sâm phù hợp thể trạng</option>
                        <option value="Quà biếu sức khỏe VIP">Tư vấn set quà biếu cao cấp & doanh nghiệp</option>
                        <option value="Hỗ trợ đơn hàng & giao nhận">Hỗ trợ tra cứu đơn hàng & vận chuyển</option>
                        <option value="Khác">Nội dung câu hỏi khác</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#111111]">
                        Nội dung cần tư vấn <span className="text-[#B5222A]">*</span>
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Quý khách vui lòng để lại lời nhắn hoặc câu hỏi cần giải đáp..."
                        className="w-full rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] px-3.5 py-2.5 text-sm text-[#111111] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#B5222A] via-[#991C23] to-[#991C23] py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.005] active:scale-[0.99] disabled:opacity-70"
                      >
                        {loading ? (
                          <span>Đang gửi thông tin...</span>
                        ) : (
                          <>
                            <span>GỬI YÊU CẦU TƯ VẤN</span>
                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-[#888888] pt-1">
                      🔒 Cam kết bảo mật thông tin cá nhân khách hàng tuyệt đối 100%.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

          {/* ─── SERVICE COMMITMENTS (4 ICONS) ─── */}
          <div className="rounded-2xl border border-[#EEEEEE] bg-white p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EF] text-[#B5222A] border border-[#EEEEEE]">
                  <Award className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-[#111111]">100% Sâm Punggi 6 Năm</h4>
                  <p className="text-xs text-[#666666]">
                    Nhập khẩu chính ngạch Hàn Quốc
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EF] text-[#B5222A] border border-[#EEEEEE]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-[#111111]">Bảo Chứng Quốc Tế</h4>
                  <p className="text-xs text-[#666666]">
                    Đạt chuẩn HACCP, GMP, FDA
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EF] text-[#B5222A] border border-[#EEEEEE]">
                  <Truck className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-[#111111]">Giao Hàng Hỏa Tốc</h4>
                  <p className="text-xs text-[#666666]">
                    Giao nhanh 2h nội thành Hà Nội & TP.HCM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EF] text-[#B5222A] border border-[#EEEEEE]">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-[#111111]">Tư Vấn Tận Tâm</h4>
                  <p className="text-xs text-[#666666]">
                    Đồng hành 1:1 theo thể trạng
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
