"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileDrawer } from "@/components/MobileDrawer";
import { ProductCard } from "@/components/ProductCard";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";
import { Search, SlidersHorizontal, ChevronRight } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "Tất Cả Sản Phẩm" },
  { id: "adults", label: "Hồng Sâm Người Lớn" },
  { id: "kids", label: "Hồng Sâm Trẻ Con" },
  { id: "gifts", label: "Bộ Quà Biếu" },
  { id: "pure", label: "Hồng Sâm Nguyên Chất" },
];

export default function ProductCatalogPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "name">("default");

  const products = productsData as Product[];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory === "adults") {
          return p.categories.some((c) => c.toLowerCase().includes("người lớn"));
        }
        if (selectedCategory === "kids") {
          return p.categories.some((c) => c.toLowerCase().includes("trẻ") || c.toLowerCase().includes("em"));
        }
        if (selectedCategory === "gifts") {
          return p.categories.some((c) => c.toLowerCase().includes("quà") || c.toLowerCase().includes("set") || p.title.toLowerCase().includes("set") || p.title.toLowerCase().includes("quà"));
        }
        if (selectedCategory === "pure") {
          return p.categories.some((c) => c.toLowerCase().includes("nguyên chất"));
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
  }, [products, selectedCategory, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex-1 pb-20">
        {/* Banner Hero */}
        <div data-floating-contact-hero className="relative -mt-2 overflow-hidden border-b border-gray-800 bg-[#161e27] px-4 py-14 text-white sm:px-6">
          <Image
            src="/images/production.jpg"
            alt="Sản phẩm Hồng Sâm Kim's Red Ginseng"
            fill
            sizes="100vw"
            preload
            className="na-image-reveal object-cover object-center"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/55 via-[#161e27]/30 to-transparent" />
          <div className="na-hero-content max-w-[1240px] mx-auto relative z-10 space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
              Tất Cả Sản Phẩm Hồng Sâm Kim&apos;s Red Ginseng
            </h1>
            <p className="text-white/90 text-sm max-w-2xl leading-relaxed drop-shadow-[0_1px_5px_rgba(0,0,0,0.45)]">
              Trải nghiệm tinh hoa nhân sâm 6 năm tuổi từ vùng núi Punggi, Hàn Quốc – Trực tiếp sản xuất bởi nghệ nhân Kim Jeong Hwan.
            </p>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-medium">Sản Phẩm</span>
            {selectedCategory !== "all" && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[#b5222a] font-medium">
                  {CATEGORIES.find((c) => c.id === selectedCategory)?.label}
                </span>
              </>
            )}
          </nav>
        </div>

        {/* Filters and Controls */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-2 mb-8">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-xs border border-gray-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[#b5222a] text-white shadow-xs font-semibold"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-black"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search & Sort Controls */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
              {/* Search input */}
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-[#b5222a] focus:bg-white transition-colors"
                />
              </div>

              {/* Sort dropdown */}
              <div className="flex items-center gap-1.5 shrink-0">
                <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-gray-700 focus:outline-none focus:border-[#b5222a]"
                >
                  <option value="default">Mặc định</option>
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
                  setSelectedCategory("all");
                  setSearchTerm("");
                }}
                className="mt-4 px-5 py-2 bg-[#b5222a] text-white text-xs font-semibold rounded-lg hover:bg-[#8f1920] transition-colors"
              >
                Đặt lại bộ lọc
              </button>
            </div>
          ) : (
            <div className="na-stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
