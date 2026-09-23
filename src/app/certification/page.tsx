"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight } from "lucide-react";

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

export default function CertificationPage() {
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
            <span className="text-gray-900 font-medium">Giới Thiệu</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#b5222a] font-medium">Chứng Chỉ Đạt Được</span>
          </nav>
        </div>

        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {CERTIFICATE_IMAGES.map((certificate) => (
              <article
                key={certificate.src}
                data-scroll-fade="on"
                className="group overflow-hidden border border-[#e8e2dd] bg-white shadow-[0_10px_30px_rgba(75,25,62,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(75,25,62,0.14)]"
              >
                <div className="overflow-hidden bg-[#f7f4f1]">
                  <Image
                    src={certificate.src}
                    alt={certificate.alt}
                    width={300}
                    height={420}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <h3 className="min-h-[72px] whitespace-pre-line px-3 py-4 text-center font-sans text-sm font-semibold leading-snug text-[#2d2d2d] sm:text-[15px]">
                  {certificate.title}
                </h3>
              </article>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
