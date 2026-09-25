"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import {
  ChevronRight,
  CheckCircle2,
  DollarSign,
  Truck,
  Award,
  BookOpen,
  Image as ImageIcon,
  Phone,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  Building2,
  Sparkles,
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

export default function DangKyDaiLyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    businessModel: "Chuỗi cửa hàng TPCN / Showroom",
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
        <PageHero
          title="Chính Sách Đối Tác & Đại Lý Phân Phối"
          description="Đồng hành cùng NA Korea phân phối thương hiệu Hồng sâm 6 năm tuổi Kim's Red Ginseng chính ngạch từ Hàn Quốc – Cơ hội gia tăng doanh thu vượt trội cho đối tác chăm sóc sức khỏe và quà biếu cao cấp."
          image="/images/wholesale/kimsredginseng_20221206_p_2987154700109645423_1_2987154689942648125.jpg"
          imageAlt="Đại lý Kim's Red Ginseng"
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
              <span className="text-[#B5222A] font-semibold">Chính Sách Đại Lý</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 space-y-12 mt-8">
          
          {/* Section: Giới thiệu thương hiệu & Điểm tựa uy tín */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs border border-[#EAE4DC]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B5222A]">
                  <Sparkles className="h-4 w-4" />
                  <span>ĐỐI TÁC CHIẾN LƯỢC CỦA NA KOREA</span>
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#2D2D2D] tracking-tight leading-tight">
                  Thương Hiệu Bảo Chứng Bởi Bậc Thầy Nhân Sâm Kim Jeong Hwan
                </h2>
                <p className="text-sm sm:text-base text-[#4B4F52] leading-relaxed">
                  <strong>Kim&apos;s Red Ginseng</strong> là thương hiệu hồng sâm 6 năm tuổi thượng hạng đến từ vùng đất thánh Punggi (Hàn Quốc), được chế tác dưới sự dẫn dắt của Bậc thầy Nhân sâm với quy trình kiểm định nghiêm ngặt từ nông trường đến thành phẩm.
                </p>
                <p className="text-sm sm:text-base text-[#4B4F52] leading-relaxed">
                  Sản phẩm đạt chuẩn <strong>HACCP, GMP, FDA Hoa Kỳ</strong> và được tỉnh Gyeongsangbuk-do lựa chọn làm <strong>Quà tặng ngoại giao quốc gia</strong>. Tại Việt Nam, <strong>NA Korea</strong> cam kết bảo hộ quyền lợi đối tác, hỗ trợ pháp lý 100% và tạo mọi điều kiện để đại lý phát triển bền vững.
                </p>
              </div>

              <div className="lg:col-span-6 relative aspect-4/3 rounded-2xl overflow-hidden shadow-md bg-[#161e27] border border-[#EAE4DC]">
                <Image
                  src="/images/wholesale/kimsredginseng_20221206_p_2987154700109645423_1_2987154689942648125.jpg"
                  alt="Kim's Red Ginseng Store"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Section: 6 Chính sách hợp tác dành cho đối tác */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B5222A]">
                QUYỀN LỢI HỢP TÁC CHIẾN LƯỢC
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#2D2D2D] tracking-tight">
                Chính Sách Ưu Đãi Dành Riêng Cho Đối Tác & Đại Lý
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] max-w-2xl mx-auto leading-relaxed">
                Giải pháp hợp tác tối ưu dành cho Chuỗi thực phẩm chức năng, Nhà thuốc, Phòng khám, Spa cao cấp, Doanh nghiệp quà tặng VIP và Nhà phân phối khu vực.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {POLICIES.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-[#EAE4DC] space-y-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B5222A] hover:shadow-md"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] text-[#B5222A] border border-[#EAE4DC] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-sans font-bold text-[#2D2D2D] text-base sm:text-lg leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: Registration Form & Contact Details */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs border border-[#EAE4DC]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Contact Info */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1 pb-3 border-b border-[#EAE4DC]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B5222A]">
                      BỘ PHẬN PHÁT TRIỂN ĐẠI LÝ B2B
                    </span>
                    <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-[#2D2D2D] tracking-tight">
                      Liên Hệ Trực Tiếp Với NA Korea
                    </h2>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-[#4B4F52]">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EAE4DC] text-[#B5222A]">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="block text-[#2D2D2D] font-bold">Trụ sở Công ty:</strong>
                        <span>210 Trung Kính, P. Yên Hòa, Q. Cầu Giấy, TP. Hà Nội</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EAE4DC] text-[#B5222A]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="block text-[#2D2D2D] font-bold">Văn phòng Hà Nội:</strong>
                        <span>LK 19-TT1, Khu nhà ở 96-96B Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EAE4DC] text-[#B5222A]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="block text-[#2D2D2D] font-bold">Chi nhánh Miền Nam:</strong>
                        <span>41/10D/29 Đường Gò Cát, P. Phú Hữu, TP. Thủ Đức, TP.HCM</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EAE4DC] text-[#B5222A]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="block text-[#2D2D2D] font-bold">Hotline B2B / Zalo:</strong>
                        <a href="tel:0903409939" className="text-base font-extrabold text-[#B5222A] hover:underline block">
                          090.340.9939
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF6F0] border border-[#EAE4DC] text-[#B5222A]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <strong className="block text-[#2D2D2D] font-bold">Hộp thư Đối tác:</strong>
                        <a href="mailto:Kimsredginseng@gmail.com" className="text-xs text-[#2D2D2D] font-semibold hover:underline">
                          Kimsredginseng@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#FAF9F6] border border-[#EAE4DC] p-4 text-xs text-[#5A402D] leading-relaxed flex items-center gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-[#B5222A] shrink-0" />
                  <div>
                    <span className="font-bold text-[#2D2D2D]">CÔNG TY TNHH TM NA KOREA</span>
                    <span className="text-[#888888] block text-[11px]">Đại diện pháp lý & phân phối độc quyền Kim&apos;s Red Ginseng</span>
                  </div>
                </div>
              </div>

              {/* Right Registration Form */}
              <div className="lg:col-span-7 bg-[#FAF9F6] rounded-2xl p-6 sm:p-8 md:p-10 border border-[#EAE4DC] flex flex-col justify-center">
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-500 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-[#2D2D2D] tracking-tight">
                        Đăng Ký Hợp Tác Thành Công!
                      </h3>
                      <p className="text-xs sm:text-sm text-[#666666] max-w-md mx-auto leading-relaxed">
                        Giám đốc kinh doanh phụ trách khu vực của <strong>NA Korea</strong> sẽ trực tiếp liên hệ và gửi bảng chính sách chiết khấu chi tiết tới bạn trong thời gian sớm nhất.
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", phone: "", email: "", city: "", businessModel: "Chuỗi cửa hàng TPCN / Showroom", message: "" });
                        }}
                        className="inline-flex items-center gap-2 rounded-xl border border-[#EAE4DC] bg-white px-5 py-2 text-xs font-bold text-[#4B4F52] hover:border-[#B5222A] hover:text-[#B5222A] transition-all"
                      >
                        <span>Gửi thêm yêu cầu khác</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1 pb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B5222A]">
                        TIẾP NHẬN ĐĂNG KÝ ĐỐI TÁC
                      </span>
                      <h3 className="font-sans text-xl font-extrabold text-[#2D2D2D] tracking-tight">
                        Nhận Bảng Báo Giá Sỉ & Chính Sách Đại Lý
                      </h3>
                      <p className="text-xs text-[#666666]">
                        Vui lòng điền thông tin bên dưới để nhận chính sách chiết khấu độc quyền ngay hôm nay.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#2D2D2D]">
                          Họ và tên người liên hệ <span className="text-[#B5222A]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ví dụ: Nguyễn Văn A"
                          className="w-full rounded-xl border border-[#EAE4DC] bg-white px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#2D2D2D]">
                          Số điện thoại / Zalo <span className="text-[#B5222A]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Ví dụ: 090 340 9939"
                          className="w-full rounded-xl border border-[#EAE4DC] bg-white px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#2D2D2D]">
                          Địa chỉ Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          className="w-full rounded-xl border border-[#EAE4DC] bg-white px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#2D2D2D]">
                          Tỉnh / Thành phố dự kiến phân phối <span className="text-[#B5222A]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Hà Nội, TP.HCM, Đà Nẵng..."
                          className="w-full rounded-xl border border-[#EAE4DC] bg-white px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#2D2D2D]">
                        Mô hình kinh doanh hiện tại
                      </label>
                      <select
                        value={formData.businessModel}
                        onChange={(e) => setFormData({ ...formData, businessModel: e.target.value })}
                        className="w-full rounded-xl border border-[#EAE4DC] bg-white px-3.5 py-2.5 text-sm text-[#2D2D2D] transition-all focus:border-[#B5222A] focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15"
                      >
                        <option value="Chuỗi cửa hàng TPCN / Showroom">Chuỗi cửa hàng thực phẩm chức năng / Showroom cao cấp</option>
                        <option value="Nhà thuốc / Phòng khám Đông y">Hệ thống nhà thuốc / Phòng khám Đông y & Dinh dưỡng</option>
                        <option value="Spa / Thẩm mỹ viện cao cấp">Spa / Thẩm mỹ viện / Trung tâm chăm sóc sức khỏe</option>
                        <option value="Doanh nghiệp quà tặng B2B">Doanh nghiệp phân phối quà biếu tặng VIP & Doanh nghiệp</option>
                        <option value="Đại lý độc quyền khu vực">Đăng ký làm Đại lý Độc quyền Tỉnh / Khu vực</option>
                        <option value="Cá nhân kinh doanh cao cấp">Cá nhân kinh doanh online sản phẩm cao cấp</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-[#2D2D2D]">
                        Lời nhắn / Đề xuất hợp tác
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Quý đối tác vui lòng chia sẻ thêm về kế hoạch kinh doanh hoặc các câu hỏi cần giải đáp..."
                        className="w-full rounded-xl border border-[#EAE4DC] bg-white px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder-[#A8A196] transition-all focus:border-[#B5222A] focus:outline-none focus:ring-2 focus:ring-[#B5222A]/15 resize-none"
                      />
                    </div>

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
                            <span>NHẬN CHÍNH SÁCH ĐẠI LÝ NGAY</span>
                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-[#888888]">
                      🔒 Thông tin đối tác được bảo mật tuyệt đối theo chính sách bảo hộ phân phối của NA Korea.
                    </p>
                  </form>
                )}
              </div>

            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
