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

export function SanPhamNguoiLonView() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "name">("default");

  const products = productsData as Product[];

  const adultProducts = useMemo(() => {
    return products
      .filter((p) => p.categories.some((c) => c.toLowerCase().includes("người lớn")))
      .filter((p) => {
        if (selectedForm === "extract") {
          return p.categories.some((c) => c.toLowerCase().includes("nguyên chất")) || p.title.toLowerCase().includes("nguyên chất") || p.title.toLowerCase().includes("cao");
        }
        if (selectedForm === "stick") {
          return p.categories.some((c) => c.toLowerCase().includes("nước")) || p.title.toLowerCase().includes("balance") || p.title.toLowerCase().includes("nước") || p.title.toLowerCase().includes("stick");
        }
        if (selectedForm === "honey") {
          return p.categories.some((c) => c.toLowerCase().includes("mật ong")) || p.title.toLowerCase().includes("mật ong") || p.title.toLowerCase().includes("lát") || p.title.toLowerCase().includes("củ");
        }
        if (selectedForm === "candy") {
          return p.categories.some((c) => c.toLowerCase().includes("kẹo") || c.toLowerCase().includes("trà")) || p.title.toLowerCase().includes("kẹo") || p.title.toLowerCase().includes("trà");
        }
        return true;
      })
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
  }, [products, selectedForm, searchTerm, sortBy]);

  // Schema.org Structured Data (JSON-LD) for SEO & GEO
  const adultJsonLd = {
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
            "name": "Hồng Sâm Người Lớn",
            "item": "https://hongsamkim.com/san-pham/nguoi-lon"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Danh Mục Hồng Sâm Người Lớn - Kim's Red Ginseng",
        "description": "Các dòng sản phẩm Cao hồng sâm cô đặc, Nước hồng sâm Balance Time giúp bồi bổ sức khỏe, tăng cường sinh lực và tuần hoàn máu.",
        "numberOfItems": adultProducts.length,
        "itemListElement": adultProducts.map((p, idx) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(adultJsonLd) }}
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
          title="Hồng Sâm Người Lớn"
          description="Các dòng sản phẩm Cao hồng sâm cô đặc 6 năm tuổi, Nước sâm Balance Time, Củ sâm tẩm mật ong giúp tăng cường thể lực, bồi bổ sức khỏe và nâng cao hệ miễn dịch."
          image="/images/production.jpg"
          imageAlt="Sản phẩm Hồng Sâm Người Lớn"
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
            <span className="text-[#4B193E] font-medium">Hồng Sâm Người Lớn</span>
          </nav>
        </div>

        {/* ═══ THANH CÔNG CỤ & TÌM KIẾM (Utility Toolbar) ═══ */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-3 border-b border-[#EEEEEE]">
            {/* Left: Counter & Form Sub-Filter */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-xs sm:text-sm text-gray-600">
                Hiển thị <strong className="text-[#111111] font-bold">{adultProducts.length}</strong> sản phẩm
              </span>

              <div className="h-4 w-[1px] bg-gray-300 hidden sm:block" />

              {/* Form Filter Dropdown */}
              <div className="flex items-center gap-1.5">
                <select
                  value={selectedForm}
                  onChange={(e) => setSelectedForm(e.target.value)}
                  className="h-9 rounded-lg border border-[#EEEEEE] bg-white px-3 text-xs sm:text-sm font-medium text-gray-700 outline-none transition-colors hover:border-gray-400 focus:border-[#4B193E] shadow-2xs"
                >
                  <option value="all">Tất cả dạng sản phẩm</option>
                  <option value="extract">Cao sâm cô đặc</option>
                  <option value="stick">Nước sâm dạng Stick</option>
                  <option value="honey">Sâm lát / củ mật ong</option>
                  <option value="candy">Trà & Kẹo hồng sâm</option>
                </select>
              </div>
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
                  className="h-9 w-full rounded-lg border border-[#EEEEEE] bg-white pl-9 pr-8 text-xs sm:text-sm text-[#111111] placeholder:text-gray-400 outline-none transition-colors hover:border-gray-400 focus:border-[#4B193E] shadow-2xs"
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
                  className="h-9 rounded-lg border border-[#EEEEEE] bg-white px-3 text-xs sm:text-sm font-medium text-gray-700 outline-none transition-colors hover:border-gray-400 focus:border-[#4B193E] shadow-2xs"
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
          {adultProducts.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-gray-100 shadow-xs">
              <p className="text-gray-500 text-base font-medium">
                Không tìm thấy sản phẩm nào phù hợp với bộ lọc hiện tại.
              </p>
              <button
                onClick={() => {
                  setSelectedForm("all");
                  setSearchTerm("");
                }}
                className="mt-4 px-5 py-2 bg-[#4B193E] text-white text-xs font-semibold rounded-lg hover:bg-[#3A1230] transition-colors"
              >
                Đặt lại bộ lọc
              </button>
            </div>
          ) : (
            <div className="na-stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {adultProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

        {/* Customer Reviews Section */}
        <CustomerReviewsSection
          title="Khách hàng nói gì về Hồng Sâm Người Lớn"
          subtitle="Đánh giá thực tế từ các khách hàng sử dụng Cao hồng sâm cô đặc và Nước sâm Balance Time"
        />

        {/* E-E-A-T Knowledge Section */}
        <EeatKnowledgeSection />
      </main>

      <Footer />
    </div>
  );
}
