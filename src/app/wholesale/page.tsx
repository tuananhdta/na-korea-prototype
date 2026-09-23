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
  TrendingUp,
  Image as ImageIcon,
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

const POLICIES = [
  {
    icon: DollarSign,
    title: "Vốn Nhỏ, Lợi Nhuận Cao",
    desc: "Nhà phân phối chỉ cần bỏ ra số vốn nhỏ, với chiết khấu không giới hạn và lợi nhuận lên đến hàng chục triệu đồng/đơn hàng.",
  },
  {
    icon: Award,
    title: "Chất Lượng Đạt Chuẩn Quốc Tế",
    desc: "Sản xuất từ sâm 6 năm tuổi, đạt chuẩn HACCP, xuất khẩu sang Mỹ, Canada, Châu Âu và có mặt tại các Duty Free Lotte, Shilla, Shinsegae.",
  },
  {
    icon: Truck,
    title: "Hỗ Trợ Kho Hàng & Giao Hàng",
    desc: "Hỗ trợ miễn phí lưu kho và đóng gói giao hàng trực tiếp từ kho đến tay khách hàng, giúp đại lý tiết kiệm tối đa chi phí vận hành.",
  },
  {
    icon: TrendingUp,
    title: "Chính Sách Nâng Hạng Đại Lý",
    desc: "Sau một tháng hợp tác, đại lý đạt chỉ tiêu sẽ được nâng hạn mức ký quỹ và hưởng mức chiết khấu cùng quyền lợi ưu tiên cao hơn.",
  },
  {
    icon: ImageIcon,
    title: "Cung Cấp Tư Liệu Quảng Bá",
    desc: "Cung cấp miễn phí trọn bộ hình ảnh, video sản phẩm, poster thương hiệu và hỗ trợ đại lý xây dựng nội dung truyền thông chuyên nghiệp.",
  },
  {
    icon: BookOpen,
    title: "Đào Tạo Bán Hàng Chuyên Nghiệp",
    desc: "Tham gia các khóa đào tạo miễn phí về kiến thức sản phẩm, kỹ năng tư vấn khách hàng, marketing online và xây dựng thương hiệu cá nhân.",
  },
];

export default function WholesalePage() {
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
          eyebrow="HỢP TÁC KINH DOANH TOÀN QUỐC"
          title="Tìm Nhà Phân Phối Hồng Sâm Kim&apos;s Red Ginseng"
          description="Cơ hội kinh doanh với vốn nhỏ, không cần mặt bằng, và thu nhập hấp dẫn từ thương hiệu Hồng sâm 6 năm tuổi uy tín hàng đầu Hàn Quốc!"
          image="/images/wholesale/kimsredginseng_20221206_p_2987154700109645423_1_2987154689942648125.jpg"
          imageAlt="Đại lý Kim's Red Ginseng"
          imageOpacity={0.9}
        />

        {/* Breadcrumb */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">Trang Chủ</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#b5222a] font-medium">Đăng Ký Đại Lý</span>
          </nav>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-16 mt-4">
          {/* Section: Giới thiệu thương hiệu & Điểm mạnh */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#b5222a]">
                  VỀ SẢN PHẨM HỒNG SÂM KIM&apos;S RED GINSENG
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                  Thương Hiệu Được Bảo Chứng Bởi Nghệ Nhân Kim Jeong Hwan
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Kim&apos;s Red Ginseng là thương hiệu hồng sâm 6 năm tuổi nổi tiếng đến từ Hàn Quốc, được sản xuất bởi Bậc Thầy Nhân Sâm với quy trình kiểm soát nghiêm ngặt từ khâu trồng trọt đến đóng gói.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Sản phẩm đạt chuẩn <strong>HACCP</strong> về an toàn thực phẩm và có đầy đủ giấy tờ chứng nhận xuất xứ rõ ràng. Hồng sâm Kim&apos;s Red Ginseng không chỉ được ưa chuộng tại Hàn Quốc mà còn xuất khẩu đến các thị trường lớn như <em>Mỹ, Canada, Châu Âu, Nga, HongKong</em>... và có mặt trên các trang Duty Free uy tín như <strong>Lotte, Shilla, Shinsegae</strong>.
                </p>
              </div>

              <div className="lg:col-span-6 relative aspect-4/3 rounded-xl overflow-hidden shadow-md bg-gray-50 border border-gray-100">
                <Image
                  src="/images/wholesale/kimsredginseng_20221206_p_2987154700109645423_1_2987154689942648125.jpg"
                  alt="Kim's Red Ginseng Store"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Section: 6 Chính sách hợp tác dành cho nhà phân phối */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b5222a]">
                QUYỀN LỢI HỢP TÁC
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Chính Sách Ưu Đãi Dành Riêng Cho Nhà Phân Phối
              </h2>
              <p className="text-sm text-gray-600">
                Phù hợp cho sinh viên, mẹ bỉm sữa, dân văn phòng, chủ spa, phòng khám và các cá nhân muốn kinh doanh sản phẩm sức khỏe cao cấp.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {POLICIES.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-gray-100 space-y-3 hover:border-red-200 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#b5222a] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: Registration Form & Contact Details */}
          <section className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Contact Info */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#b5222a]">
                    THÔNG TIN LIÊN HỆ
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                    Trụ Sở & Văn Phòng Phân Phối
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#b5222a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Trụ sở Tập đoàn:</strong>
                      <span>Sobaek-ro 1701, Bonghyeon-myeon, Yeongju-si, Gyeongbuk, Republic of Korea.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#b5222a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Văn phòng đại diện tại Việt Nam:</strong>
                      <span>LK 19-TT1, Khu nhà ở 96-96B Nguyễn Huy Tưởng, Phường Thanh Xuân, TP. Hà Nội</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#b5222a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Nhà Phân Phối miền Nam:</strong>
                      <span>Công ty TNHH TM Ánh Gia Phát – 41/10D/29 Đường Gò Cát, Phường Phú Hữu, TP. Thủ Đức, TP.HCM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#b5222a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Hotline / Zalo:</strong>
                      <span className="text-lg font-bold text-[#b5222a]">090.340.9939</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#b5222a] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-gray-900">Email:</strong>
                      <span>Kimsredginseng@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Registration Form */}
              <div className="lg:col-span-7 bg-gray-50/70 rounded-xl p-6 sm:p-8 border border-gray-200">
                {submitted ? (
                  <div className="text-center py-10 space-y-3">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Đăng Ký Hợp Tác Thành Công!</h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Bộ phận quản lý đối tác của Kim&apos;s Red Ginseng sẽ liên hệ lại với bạn qua số điện thoại/Zalo trong thời gian sớm nhất.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Điền Thông Tin Để Nhận Chính Sách Chi Tiết</h3>
                      <p className="text-xs text-gray-500 mt-0.5">Nhận bảng giá sỉ và chính sách thưởng đại lý ngay hôm nay.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Họ và tên *</label>
                        <input
                          type="text"
                          required
                          placeholder="Nguyễn Văn A"
                          className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#b5222a]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Số điện thoại / Zalo *</label>
                        <input
                          type="tel"
                          required
                          placeholder="090 340 9939"
                          className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#b5222a]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#b5222a]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Tỉnh / Thành phố *</label>
                        <input
                          type="text"
                          required
                          placeholder="Hà Nội, TP.HCM, Đà Nẵng..."
                          className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#b5222a]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Mô hình kinh doanh hiện tại</label>
                      <select className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#b5222a]">
                        <option>Cá nhân / Bán hàng Online</option>
                        <option>Cửa hàng thực phẩm chức năng / Showroom</option>
                        <option>Nhà thuốc / Phòng khám Đông y</option>
                        <option>Doanh nghiệp mua quà biếu</option>
                        <option>Đại lý độc quyền khu vực</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Lời nhắn / Yêu cầu</label>
                      <textarea
                        rows={3}
                        placeholder="Nhu cầu hoặc thắc mắc của bạn..."
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#b5222a]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#b5222a] hover:bg-[#8f1920] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md text-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>NHẬN CHÍNH SÁCH ĐẠI LÝ NGAY</span>
                    </button>
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
