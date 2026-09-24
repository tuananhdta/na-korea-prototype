"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";

const TABS = [
  { id: "all", label: "Tất Cả Sản Phẩm" },
  { id: "gifts", label: "Bộ Quà Biếu" },
  { id: "extracts", label: "Cao & Củ Khô" },
  { id: "tonics", label: "Nước Sâm & Trẻ Em" },
] as const;

export function ProductSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    const all = productsData as Product[];
    if (activeTab === "all") return all.slice(0, 8);
    if (activeTab === "gifts") {
      return all
        .filter((p) =>
          p.categories.some(
            (c) => c.toLowerCase().includes("quà") || c.toLowerCase().includes("set")
          )
        )
        .slice(0, 8);
    }
    if (activeTab === "extracts") {
      return all
        .filter((p) =>
          p.categories.some(
            (c) =>
              c.toLowerCase().includes("cao") ||
              c.toLowerCase().includes("nguyên chất") ||
              c.toLowerCase().includes("củ")
          )
        )
        .slice(0, 8);
    }
    if (activeTab === "tonics") {
      return all
        .filter((p) =>
          p.categories.some(
            (c) =>
              c.toLowerCase().includes("trẻ") ||
              c.toLowerCase().includes("nước") ||
              c.toLowerCase().includes("tonic") ||
              c.toLowerCase().includes("kẹo") ||
              c.toLowerCase().includes("trà")
          )
        )
        .slice(0, 8);
    }
    return all.slice(0, 8);
  }, [activeTab]);

  return (
    <section id="products" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div aria-hidden="true" className="mb-4 flex h-4 w-24 items-center justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5222A]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0831F]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5222A]" />
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B5222A] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#F0831F]" />
            <span>NGHỆ NHÂN KIM JEONG HWAN</span>
          </div>
          <h2 className="font-sans mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D2D2D] tracking-tight">
            Sản Phẩm Hồng Sâm Kim&apos;s Nổi Bật
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B4F52] max-w-xl leading-relaxed">
            Chiết xuất từ nhân sâm 6 năm tuổi vùng núi Punggi nguyên chất 100%, bảo đảm hàm lượng Saponin và Ginsenoside cao nhất.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[#EAE6E1]/70 backdrop-blur-xs">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 sm:text-sm ${
                    isActive
                      ? "bg-[#4B193E] text-white shadow-sm"
                      : "text-[#555555] hover:bg-white/80 hover:text-[#4B193E]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid with smooth transition */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 transition-opacity duration-300">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <Link
            href="/product"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#4B193E] hover:bg-[#B5222A] text-white text-sm font-bold rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span>XEM TẤT CẢ 32+ SẢN PHẨM</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
