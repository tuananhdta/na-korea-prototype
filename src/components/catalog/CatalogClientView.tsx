"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CAM_NANG_SUB_NAV } from "@/lib/subNavItems";
import { FlipBookViewer } from "@/components/catalog/FlipBookViewer";
import {
  CATALOG_PRODUCTS_2026,
  CATALOG_GINSENOSIDE_GUIDE,
} from "@/data/catalogs";
import {
  ArrowRight,
  ChevronRight,
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
        title: "Catalogue Sản Phẩm & Di Sản Hồng Kim Sâm",
        description:
          "Trải nghiệm trọn bộ ấn phẩm Catalogue 32 chế phẩm Hồng sâm 6 năm tuổi Punggi Hàn Quốc, khám phá lịch sử 500 năm vùng trồng sâm và bí quyết chế biến gia truyền của nghệ nhân Kim Jeong Hwan.",
        image: "/images/slide_1.jpg",
        imageAlt: "Catalogue Sản Phẩm Hồng Kim Sâm",
      }
    : {
        eyebrow: "TÀI LIỆU Y KHOA & DƯỢC LÝ",
        title: "Cẩm Nang Dược Tính & Công Dụng Ginsenoside",
        description:
          "Tài liệu y khoa & cẩm nang chuyên sâu về 30+ loại Ginsenoside quý hiếm trong Hồng sâm 6 năm tuổi, phân tích cơ chế tăng cường miễn dịch, bồi bổ khí huyết và các nghiên cứu khoa học chuyên sâu.",
        image: "/images/slide_2.jpg",
        imageAlt: "Cẩm Nang Dược Tính Ginsenoside Hồng Kim Sâm",
      };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#111111] selection:bg-[#4B193E] selection:text-white flex flex-col font-sans">
      <Header overlay />

      <main className="flex-1 pb-20">
        {/* ═══ Page Hero Banner ═══ */}
        <PageHero
          eyebrow={heroContent.eyebrow}
          showEyebrow={true}
          title={heroContent.title}
          description={heroContent.description}
          image={heroContent.image}
          imageAlt={heroContent.imageAlt}
          imageOpacity={0.9}
          subNavItems={CAM_NANG_SUB_NAV}
          currentHref={activeTab === "product-2026" ? "/cam-nang" : "/cam-nang/ginsenoside"}
        />

        {/* Breadcrumb Navigation - Đồng bộ 100% chuẩn /loi-chao-nghe-nhan */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3 border-b border-gray-100">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/cam-nang" className="hover:text-black transition-colors">
              Cẩm Nang
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#4B193E] font-medium">
              {activeTab === "product-2026" ? "Catalogue 2026" : "Cẩm Nang Ginsenoside"}
            </span>
          </nav>
        </div>

        {/* ═══ Main Content Section ═══ */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-4 space-y-8">
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

          {/* ═══ Minimalist Call To Action Banner (Đồng bộ phong cách /gioi-thieu & /loi-chao-nghe-nhan) ═══ */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug">
                Bạn Muốn Hợp Tác Phân Phối Sản Phẩm Hồng Kim Sâm?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
                NA Korea cung cấp chính sách chiết khấu đại lý hấp dẫn, hỗ trợ tài liệu in ấn Catalog, chứng từ nguồn gốc xuất xứ CO/CQ và đào tạo chuyên sâu về dược tính Ginsenoside cho đội ngũ tư vấn.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 shrink-0">
              <Link
                href="/nha-nhap-khau"
                className="inline-flex items-center gap-2 bg-[#4B193E] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#38132e] transition-colors text-sm shadow-2xs"
              >
                <span>Đăng Ký Đại Lý</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-800 font-semibold px-5 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm"
              >
                <Eye className="w-4 h-4 text-gray-500" />
                <span>32 Sản Phẩm Chính Hãng</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
