"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionIndicator } from "@/components/SectionIndicator";
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
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col font-sans text-[#333333] antialiased">
      <Header />

      <main className="flex-1 pb-20">
        {/* Banner Hero */}
        <PageHero
          title="Liên Hệ & Hỗ Trợ Khách Hàng"
          description="Đội ngũ chuyên viên tư vấn dinh dưỡng của Hồng Kim Sâm luôn sẵn sàng lắng nghe và đồng hành chăm sóc sức khỏe cùng bạn."
          image="/images/ginseng-hero-2.jpg"
          imageAlt="Liên hệ Hồng Kim Sâm"
          imageOpacity={0.92}
        />

        {/* Breadcrumb Navigation */}
        <div className="border-b border-[#EEEEEE] bg-[#F8F8F8] py-3">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <nav className="flex items-center space-x-2 font-sans text-xs text-[#666666]">
              <Link href="/" className="hover:text-[#4B193E] transition-colors">
                Trang Chủ
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#A8A196]" />
              <span className="font-semibold text-[#4B193E]">Liên Hệ</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
          
          {/* ─── 3 SLIM COMPACT QUICK-CONTACT BADGES ─── */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            
            {/* Card 1: Hotline 24/7 */}
            <a
              href="tel:0903409939"
              className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-[#EEEEEE] bg-white px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xs transition-all duration-300 hover:border-emerald-500 hover:shadow-sm active:scale-[0.99]"
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-600 text-white shadow-[0_3px_10px_rgba(16,185,129,0.3)] transition-transform duration-300 group-hover:scale-105">
                <PhoneCallFilledIcon className="h-5 w-5 text-white animate-phone-ring" />
              </div>

              <div className="relative min-w-0 flex-1">
                <div className="flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-wider text-[#888888]">
                  <span>Hotline 24/7</span>
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="font-figtree text-base sm:text-lg font-extrabold text-[#15803D] group-hover:text-emerald-600 transition-colors truncate">
                  090.340.9939
                </div>
              </div>
            </a>

            {/* Card 2: Zalo VIP */}
            <a
              href="https://zalo.me/0903409939"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-[#EEEEEE] bg-white px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xs transition-all duration-300 hover:border-[#0068FF] hover:shadow-sm active:scale-[0.99]"
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <ZaloLogo className="h-11 w-11 rounded-xl shadow-[0_3px_10px_rgba(0,104,255,0.3)]" />
              </div>

              <div className="relative min-w-0 flex-1">
                <div className="flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-wider text-[#888888]">
                  <span>Chat Zalo Trực Tuyến</span>
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0068FF] animate-pulse" />
                </div>
                <div className="font-sans text-sm sm:text-base font-bold text-[#111111] group-hover:text-[#0068FF] transition-colors truncate">
                  Zalo OA Kim&apos;s Ginseng
                </div>
              </div>
            </a>

            {/* Card 3: Google Gmail */}
            <a
              href="mailto:Kimsredginseng@gmail.com"
              className="group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-[#EEEEEE] bg-white px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xs transition-all duration-300 hover:border-[#EA4335] hover:shadow-sm active:scale-[0.99]"
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#EEEEEE] shadow-2xs transition-transform duration-300 group-hover:scale-105 group-hover:border-[#EA4335]/40">
                <GoogleGmailLogo className="h-5.5 w-5.5" />
              </div>

              <div className="relative min-w-0 flex-1">
                <div className="flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-wider text-[#888888]">
                  <span>Hộp Thư Tiếp Nhận</span>
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#EA4335] animate-pulse" />
                </div>
                <div className="font-sans text-xs sm:text-sm font-bold text-[#111111] group-hover:text-[#EA4335] transition-colors truncate">
                  Kimsredginseng@gmail.com
                </div>
              </div>
            </a>

          </div>

          {/* ─── MAIN 2-COLUMN SECTION (Balanced 6/6 Grid with Pixel-Perfect Alignment) ─── */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
            
            {/* ─── LEFT COLUMN: THÔNG TIN TRỤ SỞ (6/12) ─── */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="h-full rounded-3xl border border-[#EEEEEE] bg-white p-6 sm:p-8 md:p-9 shadow-xs flex flex-col justify-between">
                
                <div>
                  {/* Symmetrical Header */}
                  <div className="pb-4 border-b border-[#EEEEEE] mb-6">
                    <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px]">
                      Thông tin trụ sở
                    </h2>
                  </div>

                  {/* Balanced Locations List */}
                  <div className="space-y-5 font-sans text-xs sm:text-sm py-1">
                    
                    {/* Location 1: Representative Office */}
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EF] border border-[#EEEEEE] text-[#4B193E] shadow-2xs">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="space-y-1 pt-0.5">
                        <strong className="block font-sans text-sm sm:text-base font-bold text-[#111111]">
                          Văn phòng Thanh Xuân
                        </strong>
                        <p className="font-sans text-xs sm:text-sm text-[#666666] leading-relaxed">
                          LK 19-TT1, Khu nhà ở 96-96B Nguyễn Huy Tưởng, Hà Nội
                        </p>
                      </div>
                    </div>

                    {/* Location 2: South Branch */}
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5F3EF] border border-[#EEEEEE] text-[#4B193E] shadow-2xs">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="space-y-1 pt-0.5">
                        <strong className="block font-sans text-sm sm:text-base font-bold text-[#111111]">
                          Chi nhánh TP. Hồ Chí Minh
                        </strong>
                        <p className="font-sans text-xs sm:text-sm text-[#666666] leading-relaxed">
                          41/10D/29 Đường Gò Cát, P. Phú Hữu, TP. Thủ Đức, TP. HCM
                        </p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-3.5 pt-1">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EF] border border-[#EEEEEE] text-[#181818] shadow-2xs">
                        <Clock className="h-4 w-4 text-[#D4A359]" />
                      </div>
                      <div className="space-y-1 pt-0.5">
                        <strong className="block font-sans text-sm sm:text-base font-bold text-[#111111]">
                          Thời gian phục vụ
                        </strong>
                        <p className="font-sans text-xs sm:text-sm text-[#666666] leading-relaxed">
                          08:00 – 18:00 (Thứ Hai – Chủ Nhật)
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Legal Entity Trust Badge (Aligned with Right Bottom Note) */}
                <div className="mt-8 rounded-2xl bg-[#F8F8F8] border border-[#EEEEEE] p-4 font-sans text-xs text-[#181818] leading-relaxed flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#4B193E] shrink-0" />
                  <div>
                    <span className="font-bold text-[#111111] block text-xs sm:text-sm">CÔNG TY TNHH THƯƠNG MẠI NA KOREA</span>
                    <span className="text-[#888888] block text-[11px] sm:text-xs">MST: 0109946846 • Đại diện thương hiệu Hồng Kim Sâm</span>
                  </div>
                </div>

              </div>
            </div>

            {/* ─── RIGHT COLUMN: ĐĂNG KÝ NHẬN TƯ VẤN TRỰC TIẾP (6/12) ─── */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="h-full rounded-3xl border border-[#EEEEEE] bg-white p-6 sm:p-8 md:p-9 shadow-xs flex flex-col justify-between">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-5 my-auto">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 shadow-sm animate-bounce">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111]">
                        Gửi Yêu Cầu Thành Công!
                      </h2>
                      <p className="font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#666666] max-w-md mx-auto">
                        Cảm ơn bạn đã liên hệ. Chuyên viên tư vấn của <strong>Hồng Kim Sâm</strong> sẽ gọi lại hỗ trợ bạn trong vòng <strong>15–30 phút</strong>.
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", phone: "", email: "", topic: "Tư vấn chọn sản phẩm", message: "" });
                        }}
                        className="inline-flex items-center gap-2 rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] px-5 py-2.5 font-sans text-xs font-bold text-[#333333] hover:border-[#4B193E] hover:text-[#4B193E] transition-all"
                      >
                        <span>Gửi thêm yêu cầu khác</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between space-y-6">
                    
                    <div>
                      {/* Symmetrical Header */}
                      <div className="pb-4 border-b border-[#EEEEEE] mb-6">
                        <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px]">
                          Đăng ký nhận tư vấn trực tiếp
                        </h2>
                      </div>

                      {/* Inputs Container */}
                      <div className="space-y-4">
                        {/* Name & Phone */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-1.5">
                            <label className="block font-sans text-xs font-bold text-[#111111]">
                              Họ và tên <span className="text-[#4B193E]">*</span>
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
                              Số điện thoại <span className="text-[#4B193E]">*</span>
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

                        {/* Topic Select */}
                        <div className="space-y-1.5">
                          <label className="block font-sans text-xs font-bold text-[#111111]">
                            Nhu cầu hỗ trợ
                          </label>
                          <select
                            value={formData.topic}
                            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                            className="w-full rounded-xl border border-[#EEEEEE] bg-[#F8F8F8] px-4 py-3 font-sans text-sm text-[#111111] transition-all focus:border-[#4B193E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4B193E]/15"
                          >
                            <option value="Tư vấn chọn sản phẩm">Tư vấn chọn sản phẩm hồng sâm phù hợp thể trạng</option>
                            <option value="Quà biếu sức khỏe VIP">Tư vấn set quà biếu cao cấp &amp; doanh nghiệp</option>
                            <option value="Hỗ trợ đơn hàng &amp; giao nhận">Hỗ trợ tra cứu đơn hàng &amp; vận chuyển</option>
                            <option value="Khác">Nội dung câu hỏi khác</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button & Security Note */}
                    <div className="space-y-3 pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#4B193E] via-[#3A1230] to-[#3A1230] py-3.5 font-sans text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.005] active:scale-[0.99] disabled:opacity-70"
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

                      <p className="text-center font-sans text-[11px] sm:text-xs text-[#888888]">
                        🔒 Cam kết bảo mật thông tin cá nhân khách hàng tuyệt đối 100%.
                      </p>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

          {/* ─── SERVICE COMMITMENTS (4 ICONS) ─── */}
          <div className="rounded-2xl border border-[#EEEEEE] bg-white p-6 sm:p-8 shadow-xs">
            <div className="mx-auto max-w-[1080px] text-center mb-8">
              <SectionIndicator activeIndex={4} total={5} />
              <p className="mb-3 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#888888]">
                Cam kết dịch vụ &amp; chất lượng
              </p>
              <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px]">
                An Tâm Mua Sắm Tại NA Korea
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EF] text-[#4B193E] border border-[#EEEEEE]">
                  <Award className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-sm sm:text-base font-bold text-[#111111]">100% Sâm Punggi 6 Năm</h4>
                  <p className="font-sans text-xs text-[#666666] leading-relaxed">
                    Nhập khẩu chính ngạch Hàn Quốc
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EF] text-[#4B193E] border border-[#EEEEEE]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-sm sm:text-base font-bold text-[#111111]">Bảo Chứng Quốc Tế</h4>
                  <p className="font-sans text-xs text-[#666666] leading-relaxed">
                    Đạt chuẩn HACCP, GMP, FDA
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EF] text-[#4B193E] border border-[#EEEEEE]">
                  <Truck className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-sm sm:text-base font-bold text-[#111111]">Giao Hàng Hỏa Tốc</h4>
                  <p className="font-sans text-xs text-[#666666] leading-relaxed">
                    Giao nhanh 2h nội thành Hà Nội &amp; TP.HCM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EF] text-[#4B193E] border border-[#EEEEEE]">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-sm sm:text-base font-bold text-[#111111]">Tư Vấn Tận Tâm</h4>
                  <p className="font-sans text-xs text-[#666666] leading-relaxed">
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
