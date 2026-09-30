"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";

const featuredProducts = (productsData as Product[]).slice(0, 8);

export function ProductSection() {
  return (
    <section id="products" className="py-20 md:py-24 bg-[#F8F8F8] border-t border-[#EEEEEE]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-figtree text-[11px] sm:text-xs font-semibold uppercase tracking-[0.05em] text-[#4B193E] mb-2">
            NGHỆ NHÂN KIM JEONG HWAN
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-[36px] font-bold text-[#111111] tracking-[-0.015em] leading-[1.4]">
            Sản Phẩm Hồng Sâm Kim&apos;s Nổi Bật
          </h2>
          <div className="w-12 h-0.5 bg-[#4B193E] my-3.5" />
          <p className="font-sans text-sm sm:text-base text-[#666666] max-w-xl leading-[1.7] tracking-[-0.01em]">
            Chiết xuất từ nhân sâm 6 năm tuổi vùng núi Punggi nguyên chất 100%, bảo đảm hàm lượng Saponin và Ginsenoside cao nhất.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <Link
            href="/san-pham"
            className="group na-btn-secondary px-8 py-3.5 text-[13px] sm:text-sm font-bold uppercase tracking-[0.03em]"
          >
            <span>XEM TẤT CẢ 32+ SẢN PHẨM</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
