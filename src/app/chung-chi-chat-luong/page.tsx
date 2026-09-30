import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Chứng Chỉ & Giải Thưởng Quốc Tế",
  description: "Bộ chứng nhận chất lượng quốc tế của Kim's Red Ginseng: HACCP, GMP, FDA Hoa Kỳ, ISO 22000, Halal và Bằng sáng chế độc quyền từ Nghệ nhân Hàn Quốc.",
  keywords: [
    "Chứng chỉ chất lượng",
    "HACCP",
    "GMP",
    "FDA",
    "ISO 22000",
    "Kim's Red Ginseng",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/chung-chi-chat-luong`,
  },
  openGraph: {
    title: `Chứng Chỉ & Giải Thưởng Quốc Tế | ${SITE_CONFIG.brandName}`,
    description: "Bảo chứng chất lượng vàng chuẩn mực quốc tế của Kim's Red Ginseng.",
    url: `${SITE_CONFIG.siteUrl}/chung-chi-chat-luong`,
    type: "website",
  },
};

const CERTIFICATE_IMAGES = [
  { src: "/images/certification/cc1.jpg", alt: "Chứng chỉ đạt được 1", title: "Geographical indication Certificate\n(ginseng)" },
  { src: "/images/certification/cc2.jpg", alt: "Chứng chỉ đạt được 2", title: "Geographical indication Certificate\n(red ginseng)" },
  { src: "/images/certification/cc3.jpg", alt: "Chứng chỉ đạt được 3", title: "Good agricultural\nmanagement facilities" },
  { src: "/images/certification/cc4.jpg", alt: "Chứng chỉ đạt được 4", title: "Good products of Gyeongsangbuk-do" },
  { src: "/images/certification/cc5.jpg", alt: "Chứng chỉ đạt được 5", title: "ISO 22000" },
  { src: "/images/certification/cc6.jpg", alt: "Chứng chỉ đạt được 6", title: "HACCP" },
  { src: "/images/certification/cc7.jpg", alt: "Chứng chỉ đạt được 7", title: "Korea Trademark registration" },
  { src: "/images/certification/cc8.jpg", alt: "Chứng chỉ đạt được 8", title: "Korea Trademark registration" },
  { src: "/images/certification/cc9.jpg", alt: "Chứng chỉ đạt được 9", title: "Letter of a patent [Kim’s Red Ginseng\n& Korean Mistletoe]" },
  { src: "/images/certification/cc10.jpg", alt: "Chứng chỉ đạt được 10", title: "Letter of a patent\n[Kim’s Honey Dipped Red Ginseng]" },
  { src: "/images/certification/cc11.jpg", alt: "Chứng chỉ đạt được 11", title: "U.S Trademark registration" },
  { src: "/images/certification/cc12.jpg", alt: "Chứng chỉ đạt được 12", title: "HALAL" },
  { src: "/images/certification/cc13.jpg", alt: "Chứng chỉ đạt được 13", title: "FSSC 22000" },
  { src: "/images/certification/cc14.jpg", alt: "Chứng chỉ đạt được 14", title: "1996 Innovation" },
  { src: "/images/certification/cc15.jpg", alt: "Chứng chỉ đạt được 15", title: "1999 Agriculture Innovation Award" },
  { src: "/images/certification/cc16.jpg", alt: "Chứng chỉ đạt được 16", title: "2005 Ginseng Master of Korea" },
  { src: "/images/certification/cc17.jpg", alt: "Chứng chỉ đạt được 17", title: "2012 Patent Award certificate" },
];

export default function ChungChiChatLuongPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col">
      <Header />

      <main className="flex-1 pb-20">
        <PageHero
          eyebrow="CHẤT LƯỢNG ĐƯỢC BẢO CHỨNG"
          showEyebrow={false}
          title="Chứng Chỉ Đạt Được"
          description="Chúng tôi cam kết chất lượng chuẩn mực cao nhất thông qua các chứng chỉ kiểm định an toàn thực phẩm uy tín hàng đầu Hàn Quốc và Quốc Tế."
          image="/images/sub04.jpg"
          imageAlt="Chứng nhận chất lượng Kim's Red Ginseng"
          imageOpacity={0.9}
        />

        {/* Breadcrumb */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">Trang Chủ</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/gioi-thieu" className="hover:text-black transition-colors">Giới Thiệu</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#4B193E] font-medium">Chứng Chỉ Đạt Được</span>
          </nav>
        </div>

        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {CERTIFICATE_IMAGES.map((certificate) => (
              <article
                key={certificate.src}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-lg"
              >
                <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-50 p-4">
                  <Image
                    src={certificate.src}
                    alt={certificate.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 items-center justify-center p-4 text-center">
                  <h3 className="whitespace-pre-line text-xs font-semibold text-gray-800 leading-snug">
                    {certificate.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
