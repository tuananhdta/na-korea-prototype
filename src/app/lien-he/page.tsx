"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Clock,
  Sparkles,
  Award,
  MessageCircle,
  Truck,
  HeartHandshake,
} from "lucide-react";

export default function LienHePage() {
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
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col font-sans text-[#4B4F52]">
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
        <div className="border-b border-[#EAE4DC] bg-[#FAF9F6] py-3">
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

        <div className="mx-auto max-w-[1160px] px-4 sm:px-6 mt-10 space-y-10">
          
          {/* ─── 3 VIP QUICK-CONTACT CARDS ─── */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            
            {/* Card 1: Hotline */}
            <a
              href="tel:0903409939"
              className="group flex items-center gap-4 rounded-2xl border border-[#EAE4DC] bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B5222A] hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4B193E] to-[#2D0C24] text-white shadow-xs transition-transform duration-300 group-hover:scale-105">
                <Phone className="h-5 w-5 text-[#F0831F]" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#888888]">
                  Hotline 24/7
                </div>
                <div className="font-sans text-lg font-extrabold text-[#B5222A] group-hover:underline truncate">
                  090.340.9939
                </div>
                <div className="text-xs text-[#666666] truncate">
                  Tư vấn sản phẩm & đơn hàng
                </div>
              </div>
            </a>

            {/* Card 2: Zalo VIP */}
            <a
              href="https://zalo.me/0903409939"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-[#EAE4DC] bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0068FF] hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0068FF] to-[#004BB5] text-white shadow-xs transition-transform duration-300 group-hover:scale-105">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#888888]">
                  Chat Zalo Trực Tuyến
                </div>
                <div className="font-sans text-lg font-extrabold text-[#2D2D2D] group-hover:text-[#0068FF] transition-colors truncate">
                  Zalo OA Kim&apos;s Ginseng
                </div>
                <div className="text-xs text-[#666666] truncate">
                  Giải đáp & hỗ trợ 1:1 nhanh
                </div>
              </div>
            </a>

            {/* Card 3: Email */}
            <a
              href="mailto:Kimsredginseng@gmail.com"
              className="group flex items-center gap-4 rounded-2xl border border-[#EAE4DC] bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4B193E] hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4B193E] to-[#2D0C24] text-white shadow-xs transition-transform duration-300 group-hover:scale-105">
                <Mail className="h-5 w-5 text-[#F0831F]" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#888888]">
                  Hộp Thư Tiếp Nhận
                </div>
                <div className="font-sans text-base font-extrabold text-[#2D2D2D] group-hover:text-[#4B193E] transition-colors truncate">
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
              <div className="h-full rounded-3xl border border-[#EAE4DC] bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
                
                <div className="space-y-5">
                  <div className="space-y-1.5 pb-4 border-b border-[#EAE4DC]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B5222A]">
                      <Building2 className="h-4 w-4" />
                      <span>HỆ THỐNG VĂN PHÒNG</span>
                    </div>
                    <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-[#2D2D2D] tracking-tight">
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
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EAE4DC] text-[#B5222A]">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="block text-[#2D2D2D] font-bold">
                          Trụ sở & Showroom Hà Nội
                        </strong>
                        <p className="text-[#666666] text-xs leading-relaxed">
                          210 Trung Kính, P. Yên Hòa, Q. Cầu Giấy, Hà Nội
                        </p>
                      </div>
                    </div>

                    {/* Location 2: Representative Office */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EAE4DC] text-[#B5222A]">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="block text-[#2D2D2D] font-bold">
                          Văn phòng Thanh Xuân
                        </strong>
                        <p className="text-[#666666] text-xs leading-relaxed">
                          LK 19-TT1, Khu nhà ở 96-96B Nguyễn Huy Tưởng, Hà Nội
                        </p>
                      </div>
                    </div>

                    {/* Location 3: South Branch */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EAE4DC] text-[#B5222A]">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="block text-[#2D2D2D] font-bold">
                          Chi nhánh TP. Hồ Chí Minh
                        </strong>
                        <p className="text-[#666666] text-xs leading-relaxed">
                          41/10D/29 Đường Gò Cát, P. Phú Hữu, TP. Thủ Đức, TP. HCM
                        </p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-3 pt-1">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EAE4DC] text-[#4B193E]">
                        <Clock className="h-4 w-4 text-[#F0831F]" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="block text-[#2D2D2D] font-bold">
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
                <div className="mt-6 rounded-xl bg-[#FAF9F6] border border-[#EAE4DC] p-3.5 text-xs text-[#5A402D] leading-relaxed flex items-center gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-[#B5222A] shrink-0" />
                  <div>
                    <span className="font-bold text-[#2D2D2D]">CÔNG TY TNHH TM NA KOREA</span>
                    <span className="text-[#888888] block text-[11px]">MST: 0109946846 • Đại diện thương hiệu Kim&apos;s Red Ginseng</span>
                  </div>
                </div>

              </div>
            </div>

            {/* ─── RIGHT COLUMN: STREAMLINED CONSULTATION FORM (7/12) ─── */}
            <div className="lg:col-span-7">
              <div className="h-full rounded-3xl border border-[#EAE4DC] bg-white p-6 sm:p-8 md:p-10 shadow-xs flex flex-col justify-center">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-5">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 shadow-sm animate-bounce">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans text-2xl font-extrabold text-[#2D2D2D] tracking-tight">
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
                        className="inline-flex items-center gap-2 rounded-xl border border-[#EAE4DC] bg-[#FAF9F6] px-5 py-2 text-xs font-bold text-[#4B4F52] hover:border-[#B5222A] hover:text-[#B5222A] transition-all"
                      >
                        <span>Gửi thêm yêu cầu khác</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="space-y-1 pb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B5222A]">
                        GỬI TIN NHẮN TRỰC TUYẾN
                      </span>
                      <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-[#2D2D2D] tracking-tight">
                        Tư Vấn Sức Khỏe & Sản Phẩm
                      </h2>
                    </div>

                    {/* Name & Phone (2 cols) */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#2D2D2D]">
                          Họ và tên <span className="text-[#B5222A]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ví dụ: Nguyễn Văn A"
                          className="w-full rounded-xl border border-[#EAE4DC] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#2D2D2D]">
                          Số điện thoại <span className="text-[#B5222A]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Ví dụ: 090 340 9939"
                          className="w-full rounded-xl border border-[#EAE4DC] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                        />
                      </div>
                    </div>

                    {/* Topic Select */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#2D2D2D]">
                        Nhu cầu hỗ trợ
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full rounded-xl border border-[#EAE4DC] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#2D2D2D] transition-all focus:border-[#B5222A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                      >
                        <option value="Tư vấn chọn sản phẩm">Tư vấn chọn sản phẩm hồng sâm phù hợp thể trạng</option>
                        <option value="Quà biếu sức khỏe VIP">Tư vấn set quà biếu cao cấp & doanh nghiệp</option>
                        <option value="Hỗ trợ đơn hàng & giao nhận">Hỗ trợ tra cứu đơn hàng & vận chuyển</option>
                        <option value="Khác">Nội dung câu hỏi khác</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#2D2D2D]">
                        Nội dung cần tư vấn <span className="text-[#B5222A]">*</span>
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Quý khách vui lòng để lại lời nhắn hoặc câu hỏi cần giải đáp..."
                        className="w-full rounded-xl border border-[#EAE4DC] bg-[#FAF9F6] px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#B5222A] via-[#A01C23] to-[#8C161D] py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.005] active:scale-[0.99] disabled:opacity-70"
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
          <div className="rounded-2xl border border-[#EAE4DC] bg-white p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF6F0] text-[#B5222A] border border-[#EAE4DC]">
                  <Award className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-[#2D2D2D]">100% Sâm Punggi 6 Năm</h4>
                  <p className="text-xs text-[#666666]">
                    Nhập khẩu chính ngạch Hàn Quốc
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF6F0] text-[#B5222A] border border-[#EAE4DC]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-[#2D2D2D]">Bảo Chứng Quốc Tế</h4>
                  <p className="text-xs text-[#666666]">
                    Đạt chuẩn HACCP, GMP, FDA
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF6F0] text-[#B5222A] border border-[#EAE4DC]">
                  <Truck className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-[#2D2D2D]">Giao Hàng Hỏa Tốc</h4>
                  <p className="text-xs text-[#666666]">
                    Giao nhanh 2h nội thành Hà Nội & TP.HCM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF6F0] text-[#B5222A] border border-[#EAE4DC]">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-[#2D2D2D]">Tư Vấn Tận Tâm</h4>
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
