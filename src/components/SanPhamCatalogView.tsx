"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileDrawer } from "@/components/MobileDrawer";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";
import { SAN_PHAM_SUB_NAV } from "@/lib/subNavItems";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";
import { Search, SlidersHorizontal, ChevronRight } from "lucide-react";

const MAIN_AUDIENCE_TABS = [
  { id: "all", label: "Tất Cả Sản Phẩm" },
  { id: "adults", label: "Hồng Sâm Người Lớn" },
  { id: "kids", label: "Hồng Sâm Trẻ Em" },
];

export function SanPhamCatalogView() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState("all");
  const [selectedForm, setSelectedForm] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "name">("default");

  const products = productsData as Product[];

  // Pre-calculate counts for audience tabs
  const audienceCounts = useMemo(() => {
    return {
      all: products.length,
      adults: products.filter((p) => p.categories.some((c) => c.toLowerCase().includes("người lớn"))).length,
      kids: products.filter((p) => p.categories.some((c) => c.toLowerCase().includes("trẻ") || c.toLowerCase().includes("em") || p.title.toLowerCase().includes("trẻ") || p.title.toLowerCase().includes("easy"))).length,
    };
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Audience filter
        if (selectedAudience === "adults") {
          return p.categories.some((c) => c.toLowerCase().includes("người lớn"));
        }
        if (selectedAudience === "kids") {
          return p.categories.some((c) => c.toLowerCase().includes("trẻ") || c.toLowerCase().includes("em") || p.title.toLowerCase().includes("trẻ") || p.title.toLowerCase().includes("easy"));
        }
        return true;
      })
      .filter((p) => {
        // Form sub-filter
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
        // Search filter
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
  }, [products, selectedAudience, selectedForm, searchTerm, sortBy]);

  // Schema.org Structured Data (JSON-LD) for SEO & GEO
  const catalogJsonLd = {
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
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Danh Mục Sản Phẩm Hồng Sâm Hồng Kim Sâm",
        "description": "Các sản phẩm hồng sâm 6 năm tuổi Punggi Hàn Quốc nhập khẩu chính ngạch bởi NA Korea.",
        "numberOfItems": filteredProducts.length,
        "itemListElement": filteredProducts.map((p, idx) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
      />

      <Header overlay onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex-1 pb-20">
        {/* Banner Hero */}
        <PageHero
          eyebrow="DANH MỤC SẢN PHẨM"
          showEyebrow={false}
          title="Tất Cả Sản Phẩm Hồng Sâm Hồng Kim Sâm"
          description="Sản phẩm bồi bổ sức khỏe cao cấp chế biến từ 100% nhân sâm 6 năm tuổi thủ phủ Punggi Hàn Quốc – Nghệ nhân Kim Jeong Hwan."
          image="/images/production.jpg"
          imageAlt="Sản phẩm Hồng Sâm Hồng Kim Sâm"
          subNavItems={SAN_PHAM_SUB_NAV}
          currentHref="/san-pham"
        />

        {/* Breadcrumbs */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-medium">Sản Phẩm</span>
            {selectedAudience !== "all" && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[#4B193E] font-medium">
                  {MAIN_AUDIENCE_TABS.find((c) => c.id === selectedAudience)?.label}
                </span>
              </>
            )}
          </nav>
        </div>

        {/* ═══ TẦNG 1: TAB ĐỐI TƯỢNG (Underline Tabs thanh lịch, không rớt dòng) ═══ */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-1 mb-5">
          <div className="flex items-center gap-6 sm:gap-10 border-b border-[#EEEEEE] overflow-x-auto no-scrollbar">
            {MAIN_AUDIENCE_TABS.map((tab) => {
              const isActive = selectedAudience === tab.id;
              const count = audienceCounts[tab.id as keyof typeof audienceCounts] || 0;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedAudience(tab.id)}
                  className={`group relative pb-3.5 text-sm sm:text-base font-semibold whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? "text-[#4B193E]"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {tab.label}
                    <span
                      className={`inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-bold transition-colors ${
                        isActive
                          ? "bg-[#4B193E]/10 text-[#4B193E]"
                          : "bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-700"
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                  {/* Active Underline Accent */}
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#4B193E] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ═══ TẦNG 2: THANH CÔNG CỤ & TÌM KIẾM (Utility Toolbar) ═══ */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-3 border-b border-[#EEEEEE]/80">
            {/* Left: Counter & Form Sub-Filter */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-xs sm:text-sm text-gray-600">
                Hiển thị <strong className="text-[#111111] font-bold">{filteredProducts.length}</strong> sản phẩm
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

        {/* Product Grid */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-gray-100 shadow-xs">
              <p className="text-gray-500 text-base font-medium">
                Không tìm thấy sản phẩm nào phù hợp với bộ lọc hiện tại.
              </p>
              <button
                onClick={() => {
                  setSelectedAudience("all");
                  setSelectedForm("all");
                  setSearchTerm("");
                }}
                className="mt-4 px-5 py-2 bg-[#4B193E] text-white text-xs font-semibold rounded-lg hover:bg-[#3A1230] transition-colors"
              >
                Đặt lại bộ lọc
              </button>
            </div>
          ) : (
            <div className="na-stagger-grid grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
