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
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col">
      <Header />

      <main className="flex-1 pb-20">
        <PageHero
          eyebrow="HỖ TRỢ & ĐỒNG HÀNH"
          title="Liên Hệ Kim&apos;s Red Ginseng"
          description="Chúng tôi sẽ tiếp tục giữ vững sự kiên trì trong việc trồng và chế biến nhân sâm 6 năm tuổi tại Punggi để mang đến những sản phẩm tốt nhất cho bạn."
          image="/images/ginseng-hero-2.jpg"
          imageAlt="Liên hệ Kim's Red Ginseng"
          imageOpacity={0.9}
        />

        {/* Breadcrumb */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">Trang Chủ</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#b5222a] font-medium">Liên Hệ</span>
          </nav>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-12 mt-4">
          {/* Main Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-gray-100 space-y-6"
                data-scroll-fade="on"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#b5222a]">
                    THÔNG TIN CHÍNH THỨC
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mt-1">
                    Hệ Thống Trụ Sở & Chi Nhánh
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-gray-50">
                    <Building2 className="w-5 h-5 text-[#b5222a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Trụ sở Tập đoàn (Hàn Quốc):</strong>
                      <span className="text-gray-600">Sobaek-ro 1701, Bonghyeon-myeon, Yeongju-si, Gyeongbuk, Republic of Korea.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-gray-50">
                    <MapPin className="w-5 h-5 text-[#b5222a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Chi nhánh Tập đoàn tại Việt Nam:</strong>
                      <span className="text-gray-600">210 Trung Kính, Yên Hòa, Cầu Giấy, Hà Nội.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-gray-50">
                    <MapPin className="w-5 h-5 text-[#b5222a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Văn phòng đại diện Hà Nội:</strong>
                      <span className="text-gray-600">LK 19-TT1, Khu nhà ở 96-96B Nguyễn Huy Tưởng, Phường Thanh Xuân, TP. Hà Nội</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-gray-50">
                    <MapPin className="w-5 h-5 text-[#b5222a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Nhà phân phối Miền Nam:</strong>
                      <span className="text-gray-600">Công ty AGP – 41/10D/29 Đường Gò Cát, Phường Phú Hữu, TP. Thủ Đức, TP.HCM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-red-50/60 border border-red-100">
                    <Phone className="w-5 h-5 text-[#b5222a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Hotline / Zalo:</strong>
                      <a href="tel:0903409939" className="text-lg font-extrabold text-[#b5222a] hover:underline">
                        090.340.9939
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-gray-50">
                    <Mail className="w-5 h-5 text-[#b5222a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Email:</strong>
                      <a href="mailto:Kimsredginseng@gmail.com" className="text-gray-700 hover:text-[#b5222a]">
                        Kimsredginseng@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 text-xs text-gray-500 leading-relaxed">
                  <p><strong>Đơn vị nhập khẩu chính hãng:</strong> CÔNG TY TNHH THƯƠNG MẠI NA KOREA. GPĐKKD/MST: 0109946846 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp.</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div
              className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 shadow-xs border border-gray-100 flex flex-col justify-between"
              data-scroll-fade="on"
            >
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Cảm Ơn Quý Khách!</h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Thông tin liên hệ của quý khách đã được gửi tới ban quản trị Kim&apos;s Red Ginseng. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Gửi Yêu Cầu / Tư Vấn Trực Tuyến</h2>
                    <p className="text-xs text-gray-500 mt-1">Đội ngũ chuyên viên tư vấn sức khỏe của chúng tôi luôn sẵn sàng hỗ trợ bạn.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Họ và tên *</label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#b5222a] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Số điện thoại *</label>
                      <input
                        type="tel"
                        required
                        placeholder="090 340 9939"
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#b5222a] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#b5222a] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Chủ đề cần hỗ trợ</label>
                      <select className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#b5222a] focus:bg-white">
                        <option>Tư vấn chọn sản phẩm hồng sâm</option>
                        <option>Đặt hàng số lượng lớn / Quà tặng doanh nghiệp</option>
                        <option>Đăng ký trở thành đại lý</option>
                        <option>Hỏi về tình trạng đơn hàng</option>
                        <option>Ý kiến đóng góp khác</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Nội dung tin nhắn *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Nhập nội dung cần trao đổi hoặc tư vấn..."
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#b5222a] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#b5222a] hover:bg-[#8f1920] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>GỬI THÔNG TIN LIÊN HỆ</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
