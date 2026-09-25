import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Lời Chào Nghệ Nhân Kim Jeong Hwan",
  description: "Tâm huyết suốt 50 năm của Nghệ nhân Nhân sâm Hàn Quốc Kim Jeong Hwan – Giữ trọn sự chân thành và bền bỉ trong từng củ hồng sâm 6 năm tuổi.",
  keywords: [
    "Nghệ nhân Kim Jeong Hwan",
    "Lời chào nghệ nhân",
    "Kim's Red Ginseng",
    "Nhân sâm Hàn Quốc",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/loi-chao-nghe-nhan`,
  },
  openGraph: {
    title: `Lời Chào Nghệ Nhân Kim Jeong Hwan | ${SITE_CONFIG.brandName}`,
    description: "Tâm huyết suốt 50 năm của Nghệ nhân Nhân sâm Hàn Quốc Kim Jeong Hwan.",
    url: `${SITE_CONFIG.siteUrl}/loi-chao-nghe-nhan`,
    type: "website",
  },
};

export default function LoiChaoNgheNhanPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col">
      <Header />

      <main className="flex-1 pb-20">
        <PageHero
          eyebrow="THÔNG ĐIỆP TỪ NGHỆ NHÂN"
          showEyebrow={false}
          title="Lời Chào Đầu"
          description="&quot;Hồng sâm Kim luôn giữ vững sự chân thành và bền bỉ trong từng củ nhân sâm gửi gắm đến sức khỏe quý khách hàng.&quot;"
          image="/images/sub02.jpg"
          imageAlt="Hồng sâm Kim's Red Ginseng"
          imageOpacity={0.9}
        />

        {/* Breadcrumb */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">Trang Chủ</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/gioi-thieu" className="hover:text-black transition-colors">Giới Thiệu</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#b5222a] font-medium">Lời Chào Đầu</span>
          </nav>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-4">
          <section className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#b5222a]">
                  BẬC THẦY NHÂN SÂM HÀN QUỐC
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                  Tâm Huyết Suốt 50 Năm Của Nghệ Nhân Kim Jeong Hwan
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Xin chào quý khách hàng đã ghé thăm trang chính thức của Kim&apos;s Red Ginseng Việt Nam. Chúng tôi tin rằng: đất đai không bao giờ lừa dối người nông dân nếu người làm nông dốc hết lòng thành kính với thiên nhiên.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Mỗi củ hồng sâm 6 năm tuổi được thu hoạch và chế biến là một cam kết sắt son về chất lượng, sự an toàn và hàm lượng dinh dưỡng cao nhất để bảo vệ sức khỏe cho cả gia đình bạn.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-lg">Kim Jeong Hwan</div>
                  <div className="text-xs text-gray-500">Đại diện Tổng công ty Nông nghiệp Nhân sâm Punggi</div>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-4/3 rounded-xl overflow-hidden shadow-md bg-gray-50 border border-gray-100">
                <Image
                  src="/images/sub02.jpg"
                  alt="Nghệ nhân Kim Jeong Hwan"
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
