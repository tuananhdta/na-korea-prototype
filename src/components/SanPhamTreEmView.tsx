"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileDrawer } from "@/components/MobileDrawer";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";
import { CustomerReviewsSection } from "@/components/CustomerReviewsSection";
import { EeatKnowledgeSection } from "@/components/EeatKnowledgeSection";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";
import { Search, SlidersHorizontal, ChevronRight } from "lucide-react";

export function SanPhamTreEmView() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "name">("default");

  const products = productsData as Product[];

  const kidProducts = useMemo(() => {
    return products
      .filter((p) =>
        p.categories.some((c) => c.toLowerCase().includes("trẻ") || c.toLowerCase().includes("em") || p.title.toLowerCase().includes("easy") || p.title.toLowerCase().includes("trẻ"))
      )
      .filter((p) => {
        if (!searchTerm.trim()) return true;
        const q = searchTerm.toLowerCase();
        return p.title.toLowerCase().includes(q) || p.shortDescription?.toLowerCase().includes(q);
      })
      .sort((a, b) => {
        const parsePrice = (priceStr: string) => {
          return parseInt(priceStr.replace(/[^0-9]/g, ""), 10) || 0;
        };

        if (sortBy === "price-asc") {
          return parsePrice(a.price) - parsePrice(b.price);
        }
        if (sortBy === "price-desc") {
          return parsePrice(b.price) - parsePrice(a.price);
        }
        if (sortBy === "name") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [products, searchTerm, sortBy]);

  // Schema.org Structured Data (JSON-LD) for SEO & GEO
  const kidsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Trang Chủ",
            "item": "https://hongsamkim.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Sản Phẩm",
            "item": "https://hongsamkim.com/san-pham"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Hồng Sâm Trẻ Em",
            "item": "https://hongsamkim.com/san-pham/tre-em"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Danh Mục Hồng Sâm Trẻ Em - Kim's Red Ginseng",
        "description": "Các sản phẩm nước hồng sâm trẻ em và kẹo dẻo sâm giúp bé ăn ngon miệng, tăng cường hệ miễn dịch và hỗ trợ phát triển thể chất.",
        "numberOfItems": kidProducts.length,
        "itemListElement": kidProducts.map((p, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": p.title,
          "url": `https://hongsamkim.com/san-pham/${p.id}`,
          "image": `https://hongsamkim.com${p.image}`
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kidsJsonLd) }}
      />

      <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex-1 pb-20">
        {/* Banner Hero */}
        <PageHero
          eyebrow="DANH MỤC SẢN PHẨM"
          showEyebrow={false}
          title="Hồng Sâm Trẻ Em"
          description="Dòng sản phẩm Hồng sâm Easy & High, Hồng sâm lê hoa chuông giúp bé ăn ngon miệng, tăng cường sức đề kháng và hỗ trợ phát triển thể chất tự nhiên."
          image="/images/production.jpg"
          imageAlt="Sản phẩm Hồng Sâm dành cho trẻ em"
        />

        {/* Breadcrumb */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/san-pham" className="hover:text-black transition-colors">
              Sản Phẩm
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#b5222a] font-medium">Hồng Sâm Trẻ Em</span>
          </nav>
        </div>

        {/* ═══ THANH CÔNG CỤ & TÌM KIẾM (Utility Toolbar) ═══ */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-3 border-b border-[#EEEEEE]">
            {/* Left: Counter */}
            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm text-gray-600">
                Hiển thị <strong className="text-[#111111] font-bold">{kidProducts.length}</strong> sản phẩm cho bé
              </span>
            </div>

            {/* Right: Search Input & Sort Dropdown */}
            <div className="flex items-center gap-3">
              {/* Search input with sleek styling */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-9 w-full rounded-lg border border-[#EEEEEE] bg-white pl-9 pr-8 text-xs sm:text-sm text-[#111111] placeholder:text-gray-400 outline-none transition-colors hover:border-gray-400 focus:border-[#B5222A] shadow-2xs"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs p-0.5"
                    aria-label="Xóa tìm kiếm"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-1.5 shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500 hidden sm:inline" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="h-9 rounded-lg border border-[#EEEEEE] bg-white px-3 text-xs sm:text-sm font-medium text-gray-700 outline-none transition-colors hover:border-gray-400 focus:border-[#B5222A] shadow-2xs"
                >
                  <option value="default">Sắp xếp: Mặc định</option>
                  <option value="price-asc">Giá: Thấp → Cao</option>
                  <option value="price-desc">Giá: Cao → Thấp</option>
                  <option value="name">Tên: A → Z</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {kidProducts.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-gray-100 shadow-xs">
              <p className="text-gray-500 text-base font-medium">
                Không tìm thấy sản phẩm nào phù hợp với bộ lọc hiện tại.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                }}
                className="mt-4 px-5 py-2 bg-[#b5222a] text-white text-xs font-semibold rounded-lg hover:bg-[#8f1920] transition-colors"
              >
                Đặt lại bộ lọc
              </button>
            </div>
          ) : (
            <div className="na-stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {kidProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

        {/* Customer Reviews Section */}
        <CustomerReviewsSection
          title="Phụ huynh chia sẻ về Hồng Sâm Trẻ Em"
          subtitle="Trải nghiệm thực tế từ các bậc cha mẹ cho con dùng nước hồng sâm Kids Growth"
        />

        {/* E-E-A-T Knowledge Section */}
        <EeatKnowledgeSection />
      </main>

      <Footer />
    </div>
  );
}
