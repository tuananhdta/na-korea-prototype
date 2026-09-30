"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { FlipBookViewer } from "@/components/catalog/FlipBookViewer";
import {
  CATALOG_PRODUCTS_2026,
  CATALOG_GINSENOSIDE_GUIDE,
} from "@/data/catalogs";
import {
  ArrowRight,
  Eye,
} from "lucide-react";

interface CatalogClientViewProps {
  initialTab?: "product-2026" | "ginsenoside-guide";
}

export function CatalogClientView({ initialTab = "product-2026" }: CatalogClientViewProps) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<"product-2026" | "ginsenoside-guide">(initialTab);

  // Sync tab if route changes
  useEffect(() => {
    if (pathname === "/cam-nang/ginsenoside") {
      setActiveTab("ginsenoside-guide");
    } else if (pathname === "/cam-nang") {
      setActiveTab("product-2026");
    }
  }, [pathname]);

  const isProductCatalog = activeTab === "product-2026";

  const heroContent = isProductCatalog
    ? {
        eyebrow: "BỘ SƯU TẬP & DI SẢN THƯƠNG HIỆU",
        title: "Catalogue Sản Phẩm & Di Sản Kim's Red Ginseng",
        description:
          "Trải nghiệm trọn bộ ấn phẩm Catalogue 32 chế phẩm Hồng sâm 6 năm tuổi Punggi Hàn Quốc, khám phá lịch sử 500 năm vùng trồng sâm và bí quyết chế biến gia truyền của nghệ nhân Kim Jeong Hwan.",
        image: "/images/slide_1.jpg",
        imageAlt: "Catalogue Sản Phẩm Kim's Red Ginseng",
      }
    : {
        eyebrow: "TÀI LIỆU Y KHOA & DƯỢC LÝ",
        title: "Cẩm Nang Dược Tính & Công Dụng Ginsenoside",
        description:
          "Tài liệu y khoa & cẩm nang chuyên sâu về 30+ loại Ginsenoside quý hiếm trong Hồng sâm 6 năm tuổi, phân tích cơ chế tăng cường miễn dịch, bồi bổ khí huyết và các nghiên cứu khoa học chuyên sâu.",
        image: "/images/slide_2.jpg",
        imageAlt: "Cẩm Nang Dược Tính Ginsenoside Kim's Red Ginseng",
      };

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#111111] selection:bg-[#4B193E] selection:text-white flex flex-col">
      <Header />

      <main className="flex-1 pb-24">
        {/* ═══ Page Hero Banner ═══ */}
        <PageHero
          eyebrow={heroContent.eyebrow}
          showEyebrow={false}
          title={heroContent.title}
          description={heroContent.description}
          image={heroContent.image}
          imageAlt={heroContent.imageAlt}
          imageOpacity={0.92}
        />

        {/* ═══ Main Content Section ═══ */}
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
          {/* ═══ 3D Interactive Flipbook Container ═══ */}
          <div>
            {activeTab === "product-2026" ? (
              <FlipBookViewer
                key="catalog-product-2026"
                pages={CATALOG_PRODUCTS_2026.pages}
                title={CATALOG_PRODUCTS_2026.title}
                pdfDownloadUrl={CATALOG_PRODUCTS_2026.pdfDownloadUrl}
                aspectRatio={CATALOG_PRODUCTS_2026.aspectRatio}
              />
            ) : (
              <FlipBookViewer
                key="catalog-ginsenoside-guide"
                pages={CATALOG_GINSENOSIDE_GUIDE.pages}
                title={CATALOG_GINSENOSIDE_GUIDE.title}
                pdfDownloadUrl={CATALOG_GINSENOSIDE_GUIDE.pdfDownloadUrl}
                aspectRatio={CATALOG_GINSENOSIDE_GUIDE.aspectRatio}
              />
            )}
          </div>

          {/* ═══ Additional Brand Trust & Wholesale CTA Banner ═══ */}
          <div className="relative mt-12 sm:mt-16 overflow-hidden rounded-3xl border border-[#181818]/60 bg-gradient-to-br from-[#181818] via-[#181818] to-[#181818] p-6 sm:p-10 lg:p-12 text-white shadow-[0_20px_50px_rgba(45,13,36,0.25)] ring-1 ring-white/10">
            {/* Background Texture & Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#4B193E]/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#D4A359]/15 blur-3xl"
            />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-full sm:w-1/2 opacity-10 mix-blend-luminosity">
              <Image
                src="/images/ginseng.jpg"
                alt="Nhân sâm background"
                fill
                className="object-cover object-right"
              />
            </div>

            {/* 2-Column Responsive Grid Content */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Text & CTA */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                {/* Brand Accent Dots */}
                <div aria-hidden="true" className="flex h-3.5 items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4B193E]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4A359]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4B193E]" />
                </div>

                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug !text-white">
                  Bạn Muốn Hợp Tác Phân Phối Sản Phẩm Kim&apos;s Red Ginseng?
                </h3>
                
                <p className="text-sm sm:text-base text-[#EEEEEE] leading-relaxed">
                  NA Korea cung cấp chính sách chiết khấu đại lý hấp dẫn, hỗ trợ tài liệu in ấn Catalog, chứng từ nguồn gốc xuất xứ CO/CQ và đào tạo chuyên sâu về dược tính Ginsenoside cho đội ngũ tư vấn.
                </p>

                <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/dang-ky-dai-ly"
                    className="na-btn-primary group px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider"
                  >
                    <span>ĐĂNG KÝ HỢP TÁC ĐẠI LÝ</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/san-pham"
                    className="na-btn-outline group px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold !border-white/25 !bg-white/10 !text-white hover:!bg-white hover:!text-[#181818] hover:!border-white transition-all backdrop-blur-sm"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Xem 32 Sản Phẩm Chính Hãng</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Framed Visual Showcase */}
              <div className="lg:col-span-5">
                <div className="group relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-2xl">
                  <Image
                    src={heroContent.image}
                    alt={heroContent.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
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
