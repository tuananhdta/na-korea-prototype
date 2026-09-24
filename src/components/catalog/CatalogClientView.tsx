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
  ShieldCheck,
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
    if (pathname === "/catalog/ginsenoside") {
      setActiveTab("ginsenoside-guide");
    } else if (pathname === "/catalog") {
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
    <div className="min-h-screen bg-[#FCFAF7] text-[#2D2D2D] selection:bg-[#B5222A] selection:text-white flex flex-col">
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
                fileSize={CATALOG_PRODUCTS_2026.fileSize}
                badge={CATALOG_PRODUCTS_2026.badge}
              />
            ) : (
              <FlipBookViewer
                key="catalog-ginsenoside-guide"
                pages={CATALOG_GINSENOSIDE_GUIDE.pages}
                title={CATALOG_GINSENOSIDE_GUIDE.title}
                pdfDownloadUrl={CATALOG_GINSENOSIDE_GUIDE.pdfDownloadUrl}
                aspectRatio={CATALOG_GINSENOSIDE_GUIDE.aspectRatio}
                fileSize={CATALOG_GINSENOSIDE_GUIDE.fileSize}
                badge={CATALOG_GINSENOSIDE_GUIDE.badge}
              />
            )}
          </div>

          {/* ═══ Additional Brand Trust & Wholesale CTA Banner ═══ */}
          <div className="mt-14 rounded-3xl bg-[#1C161B] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none">
              <Image
                src="/images/ginseng.jpg"
                alt="Nhân sâm background"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F0831F]/20 px-3.5 py-1 text-xs font-bold text-[#F0831F] uppercase tracking-wider">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>CHÍNH SÁCH ĐỐI TÁC & ĐẠI LÝ 2026</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight">
                Bạn Muốn Hợp Tác Phân Phối Sản Phẩm Kim&apos;s Red Ginseng?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                NA Korea cung cấp chính sách chiết khấu đại lý hấp dẫn, hỗ trợ tài liệu in ấn Catalog, chứng từ nguồn gốc xuất xứ CO/CQ và đào tạo chuyên sâu về dược tính Ginsenoside cho đội ngũ tư vấn.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/wholesale"
                  className="na-btn-primary group px-7 py-3.5 text-sm"
                >
                  <span>ĐĂNG KÝ HỢP TÁC ĐẠI LÝ</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/product"
                  className="na-btn-outline group px-6 py-3.5 text-sm !border-white/30 !bg-white/10 !text-white hover:!bg-white/20 hover:!border-white/60"
                >
                  <Eye className="h-4 w-4" />
                  <span>Xem 32 Sản Phẩm Chính Hãng</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
