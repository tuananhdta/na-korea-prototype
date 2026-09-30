import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Về Chúng Tôi - NA Korea & Hồng Kim Sâm",
  description: "Tổng công ty Nông nghiệp Nhân sâm Punggi – Chuyên canh tác và chế biến Nhân sâm 6 năm tuổi Hồng Kim Sâm với hơn 50 năm truyền thống gia tộc, nhập khẩu độc quyền bởi NA Korea.",
  keywords: [
    "Về chúng tôi",
    "Hồng Kim Sâm",
    "NA Korea",
    "Nghệ nhân Kim Jeong Hwan",
    "Nhân sâm Punggi",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/gioi-thieu`,
  },
  openGraph: {
    title: `Về Chúng Tôi - NA Korea & Hồng Kim Sâm | ${SITE_CONFIG.brandName}`,
    description: "Kế thừa tinh hoa nhân sâm 500 năm vùng núi Sobaek – Thủ phủ Punggi Hàn Quốc.",
    url: `${SITE_CONFIG.siteUrl}/gioi-thieu`,
    type: "website",
  },
};

export default function GioiThieuPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col">
      <Header />

      <main className="flex-1 pb-20">
        <PageHero
          eyebrow="GIỚI THIỆU CÔNG TY"
          showEyebrow={false}
          title="Về Chúng Tôi"
          description="Tổng công ty Nông nghiệp Nhân sâm Punggi – Chuyên canh tác và chế biến Nhân sâm 6 năm tuổi Hồng Kim Sâm với hơn 50 năm truyền thống gia tộc."
          image="/images/sub01.jpg"
          imageAlt="Trang trại nhân sâm Punggi"
          imageOpacity={0.9}
        />

        {/* Breadcrumbs */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">Trang Chủ</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-medium">Giới Thiệu</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#4B193E] font-medium">Về Chúng Tôi</span>
          </nav>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-16 mt-4">
          <section className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4B193E]">
                  TỔNG CÔNG TY NÔNG NGHIỆP NHÂN SÂM PUNGGI
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                  Kế Thừa Tinh Hoa Sâm Vùng Núi Sobaek
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Được thành lập và phát triển tại vùng đất Punggi – nơi có bề dày lịch sử hơn 500 năm trồng nhân sâm tại Hàn Quốc, Hồng Kim Sâm là kết tinh tâm huyết của Nghệ nhân Kim Jeong Hwan.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#4B193E]" />
                    <span>100% Nhân sâm 6 năm tuổi canh tác hữu cơ không thuốc trừ sâu</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#4B193E]" />
                    <span>Quy trình chiết xuất nước tinh khiết nhiệt độ thấp lưu giữ trọn vẹn Ginsenoside</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#4B193E]" />
                    <span>Chứng nhận quốc tế: HACCP, GMP, FDA Hoa Kỳ & ISO 22000</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-4/3 rounded-xl overflow-hidden shadow-md bg-gray-50 border border-gray-100">
                <Image
                  src="/images/ginseng-hero-2.jpg"
                  alt="Về chúng tôi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
