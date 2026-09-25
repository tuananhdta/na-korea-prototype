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
  Globe,
  Award,
  MessageCircle,
  Check,
  ArrowRight,
} from "lucide-react";

export default function LienHePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Tư vấn chọn sản phẩm hồng sâm");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const topics = [
    "Tư vấn chọn sản phẩm hồng sâm",
    "Quà biếu doanh nghiệp & VIP",
    "Đăng ký hợp tác đại lý",
    "Hỗ trợ đơn hàng & vận chuyển",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col font-sans text-[#4B4F52]">
      <Header />

      <main className="flex-1 pb-24">
        {/* Banner Hero */}
        <PageHero
          title="Liên Hệ Kim's Red Ginseng"
          description="Đội ngũ chuyên viên tư vấn dinh dưỡng và chăm sóc khách hàng luôn sẵn sàng đồng hành cùng sức khỏe của bạn và gia đình."
          image="/images/ginseng-hero-2.jpg"
          imageAlt="Liên hệ Kim's Red Ginseng"
          imageOpacity={0.92}
        />

        {/* Breadcrumb */}
        <div className="border-b border-[#EAE4DC] bg-[#FAF9F6] py-3.5">
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

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 mt-10 space-y-12">
          
          {/* ─── 3 VIP QUICK-CONTACT CARDS ─── */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            
            {/* Card 1: Hotline */}
            <a
              href="tel:0903409939"
              className="group relative overflow-hidden rounded-2xl border border-[#EAE4DC] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#B5222A] hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4B193E] to-[#2D0C24] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-5 w-5 text-[#F0831F]" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Trực tuyến 24/7
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#888888]">
                  TỔNG ĐÀI TƯ VẤN VIP
                </div>
                <div className="font-sans text-xl font-extrabold text-[#B5222A] group-hover:underline">
                  090.340.9939
                </div>
                <p className="text-xs text-[#666666] pt-1">
                  Hỗ trợ nhanh, giải đáp mọi thắc mắc về sản phẩm
                </p>
              </div>
            </a>

            {/* Card 2: Zalo VIP */}
            <a
              href="https://zalo.me/0903409939"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-[#EAE4DC] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0068FF] hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0068FF] to-[#004BB5] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0068FF] bg-blue-50 px-2.5 py-0.5 rounded-full">
                  Chat Zalo 1:1
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#888888]">
                  TƯ VẤN TRỰC TUYẾN
                </div>
                <div className="font-sans text-xl font-extrabold text-[#2D2D2D] group-hover:text-[#0068FF] transition-colors">
                  Zalo Official Account
                </div>
                <p className="text-xs text-[#666666] pt-1">
                  Gửi hình ảnh và nhận tư vấn liều lượng phù hợp
                </p>
              </div>
            </a>

            {/* Card 3: Email */}
            <a
              href="mailto:Kimsredginseng@gmail.com"
              className="group relative overflow-hidden rounded-2xl border border-[#EAE4DC] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#4B193E] hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4B193E] to-[#2D0C24] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Mail className="h-5 w-5 text-[#F0831F]" />
                </div>
                <span className="inline-flex items-center text-[11px] font-semibold text-[#4B193E] bg-purple-50 px-2.5 py-0.5 rounded-full">
                  Phản hồi trong 2h
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#888888]">
                  HỘP THƯ TIẾP NHẬN
                </div>
                <div className="font-sans text-lg font-extrabold text-[#2D2D2D] group-hover:text-[#4B193E] transition-colors truncate">
                  Kimsredginseng@gmail.com
                </div>
                <p className="text-xs text-[#666666] pt-1">
                  Tiếp nhận báo giá đối tác & hợp đồng quà tặng
                </p>
              </div>
            </a>

          </div>

          {/* ─── MAIN 2-COLUMN SECTION (Info vs Form) ─── */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
            
            {/* ─── LEFT COLUMN: ROYAL HEADQUARTERS & BRANCHES (5/12) ─── */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-[#EAE4DC] bg-white p-6 sm:p-8 shadow-sm space-y-6">
                
                <div className="space-y-1.5 pb-4 border-b border-[#EAE4DC]">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B5222A]">
                    <ShieldCheck className="h-4 w-4" />
                    <span>HỆ THỐNG TRỤ SỞ & CHI NHÁNH</span>
                  </div>
                  <h2 className="font-sans text-2xl font-extrabold text-[#2D2D2D] tracking-tight">
                    Mạng Lưới Hoạt Động
                  </h2>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Sản phẩm được nhập khẩu trực tiếp từ Hàn Quốc và bảo hộ phân phối độc quyền tại Việt Nam.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  
                  {/* Branch 1: Korea HQ */}
                  <div className="relative rounded-2xl border border-[#EAE4DC] bg-[#FAF9F6] p-4 transition-all duration-200 hover:border-[#4B193E] hover:bg-white hover:shadow-xs">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#4B193E] text-white shadow-xs">
                        <Globe className="h-4 w-4 text-[#F0831F]" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <strong className="font-bold text-[#2D2D2D]">
                            Trụ sở Tập đoàn (Hàn Quốc)
                          </strong>
                          <span className="rounded-md bg-[#4B193E]/10 px-1.5 py-0.5 text-[10px] font-bold text-[#4B193E]">
                            Ginseng HQ
                          </span>
                        </div>
                        <p className="text-[#666666] text-xs leading-relaxed">
                          Sobaek-ro 1701, Bonghyeon-myeon, Yeongju-si, Gyeongbuk, Republic of Korea.
                        </p>
                        <div className="text-[11px] text-[#B5222A] font-semibold flex items-center gap-1 pt-1">
                          <Award className="h-3 w-3" />
                          <span>Tổng công ty Nông nghiệp Nhân sâm Punggi</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Branch 2: Vietnam Company HQ */}
                  <div className="relative rounded-2xl border border-[#EAE4DC] bg-[#FAF9F6] p-4 transition-all duration-200 hover:border-[#B5222A] hover:bg-white hover:shadow-xs">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B5222A] text-white shadow-xs">
                        <Building2 className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <strong className="font-bold text-[#2D2D2D]">
                            Chi nhánh Tập đoàn tại Việt Nam
                          </strong>
                        </div>
                        <p className="text-[#666666] text-xs leading-relaxed">
                          210 Trung Kính, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Branch 3: Hanoi Representative Office */}
                  <div className="relative rounded-2xl border border-[#EAE4DC] bg-[#FAF9F6] p-4 transition-all duration-200 hover:border-[#B5222A] hover:bg-white hover:shadow-xs">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF6F0] border border-[#EAE4DC] text-[#4B193E] shadow-xs">
                        <MapPin className="h-4 w-4 text-[#B5222A]" />
                      </div>
                      <div className="space-y-1">
                        <strong className="font-bold text-[#2D2D2D]">
                          Văn phòng đại diện Hà Nội
                        </strong>
                        <p className="text-[#666666] text-xs leading-relaxed">
                          LK 19-TT1, Khu nhà ở 96-96B Nguyễn Huy Tưởng, Phường Thanh Xuân, TP. Hà Nội.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Branch 4: Southern Distributor */}
                  <div className="relative rounded-2xl border border-[#EAE4DC] bg-[#FAF9F6] p-4 transition-all duration-200 hover:border-[#B5222A] hover:bg-white hover:shadow-xs">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF6F0] border border-[#EAE4DC] text-[#4B193E] shadow-xs">
                        <MapPin className="h-4 w-4 text-[#B5222A]" />
                      </div>
                      <div className="space-y-1">
                        <strong className="font-bold text-[#2D2D2D]">
                          Trung tâm phân phối Miền Nam (AGP)
                        </strong>
                        <p className="text-[#666666] text-xs leading-relaxed">
                          Công ty AGP – 41/10D/29 Đường Gò Cát, Phường Phú Hữu, TP. Thủ Đức, TP. Hồ Chí Minh.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Legal Entity Trust Badge */}
                <div className="rounded-2xl bg-[#FFF9ED] border border-[#F0E6D6] p-4 text-xs text-[#5A402D] leading-relaxed space-y-1">
                  <div className="font-bold text-[#8C3A00] flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[#B5222A]" />
                    <span>ĐƠN VỊ NHẬP KHẨU CHÍNH HÃNG:</span>
                  </div>
                  <p>
                    <strong>CÔNG TY TNHH THƯƠNG MẠI NA KOREA</strong>. GPĐKKD/MST: 0109946846 do Sở Kế hoạch & Đầu tư Thành phố Hà Nội cấp.
                  </p>
                </div>

              </div>
            </div>

            {/* ─── RIGHT COLUMN: ROYAL CONCIERGE FORM (7/12) ─── */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[#EAE4DC] bg-white p-6 sm:p-10 md:p-12 shadow-sm">
                
                {submitted ? (
                  <div className="py-14 text-center space-y-6">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 shadow-sm animate-bounce">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#2D2D2D] tracking-tight">
                        Gửi Yêu Cầu Thành Công!
                      </h3>
                      <p className="text-sm sm:text-base text-[#666666] max-w-md mx-auto leading-relaxed">
                        Cảm ơn quý khách đã gửi thông tin. Chuyên viên tư vấn của <strong>Kim&apos;s Red Ginseng</strong> sẽ liên hệ trực tiếp tới số điện thoại của quý khách trong vòng <strong>15–30 phút</strong>.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", phone: "", email: "", message: "" });
                        }}
                        className="inline-flex items-center gap-2 rounded-xl border border-[#EAE4DC] bg-[#FAF9F6] px-6 py-2.5 text-xs font-bold text-[#4B4F52] hover:border-[#B5222A] hover:text-[#B5222A] transition-all"
                      >
                        <span>Gửi thêm yêu cầu khác</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="space-y-2 pb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B5222A]">
                        TIẾP NHẬN YÊU CẦU TRỰC TUYẾN
                      </span>
                      <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#2D2D2D] tracking-tight">
                        Đặt Lịch Tư Vấn Với Chuyên Gia
                      </h2>
                      <p className="text-xs sm:text-sm text-[#666666]">
                        Vui lòng điền thông tin bên dưới, chúng tôi cam kết bảo mật tuyệt đối 100% dữ liệu cá nhân.
                      </p>
                    </div>

                    {/* Topic Selection Pills */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-[#2D2D2D]">
                        Chủ đề cần tư vấn:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {topics.map((t) => {
                          const isSelected = selectedTopic === t;
                          return (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setSelectedTopic(t)}
                              className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 text-left ${
                                isSelected
                                  ? "bg-[#4B193E] text-white shadow-xs scale-102 font-bold"
                                  : "border border-[#EAE4DC] bg-[#FAF9F6] text-[#4B4F52] hover:border-[#B5222A] hover:bg-white"
                              }`}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#2D2D2D]">
                          Họ và tên quý khách <span className="text-[#B5222A]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ví dụ: Nguyễn Văn A"
                          className="w-full rounded-xl border border-[#EAE4DC] bg-[#FAF9F6] px-4 py-3 text-sm text-[#2D2D2D] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#2D2D2D]">
                          Số điện thoại liên hệ <span className="text-[#B5222A]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Ví dụ: 090 340 9939"
                          className="w-full rounded-xl border border-[#EAE4DC] bg-[#FAF9F6] px-4 py-3 text-sm text-[#2D2D2D] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#2D2D2D]">
                        Địa chỉ Email (Nhận báo giá & tài liệu)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full rounded-xl border border-[#EAE4DC] bg-[#FAF9F6] px-4 py-3 text-sm text-[#2D2D2D] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#2D2D2D]">
                        Nội dung cần hỗ trợ chi tiết <span className="text-[#B5222A]">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Quý khách vui lòng mô tả nhu cầu cần tư vấn, độ tuổi người dùng hoặc số lượng quà biếu cần đặt..."
                        className="w-full rounded-xl border border-[#EAE4DC] bg-[#FAF9F6] px-4 py-3 text-sm text-[#2D2D2D] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#B5222A] via-[#A01C23] to-[#8C161D] py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Đang xử lý yêu cầu...</span>
                      ) : (
                        <>
                          <span>GỬI YÊU CẦU TƯ VẤN NGAY</span>
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-[#888888]">
                      🔒 Thông tin của quý khách được mã hóa an toàn và chỉ sử dụng cho mục đích tư vấn sức khỏe.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

          {/* ─── ROYAL SERVICE COMMITMENTS (4 ICONS) ─── */}
          <div className="rounded-3xl border border-[#EAE4DC] bg-white p-8 shadow-xs">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FAF6F0] text-[#B5222A] border border-[#EAE4DC]">
                  <Award className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-sm font-bold text-[#2D2D2D]">100% Sâm Punggi 6 Năm</h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Độc quyền nhập khẩu từ Tổng công ty Nông nghiệp Punggi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FAF6F0] text-[#B5222A] border border-[#EAE4DC]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-sm font-bold text-[#2D2D2D]">Bảo Chứng Quốc Tế</h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Đạt chuẩn HACCP, GMP, ISO 22000 và FDA Hoa Kỳ.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FAF6F0] text-[#B5222A] border border-[#EAE4DC]">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-sm font-bold text-[#2D2D2D]">Giao Hàng Hỏa Tốc</h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Giao nhanh 2h tại Hà Nội & TP.HCM, toàn quốc 24-48h.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FAF6F0] text-[#B5222A] border border-[#EAE4DC]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-sans text-sm font-bold text-[#2D2D2D]">Dịch Vụ Concierge VIP</h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Tư vấn 1:1 tận tâm theo thể trạng của từng khách hàng.
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
