"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";

const featuredProducts = (productsData as Product[]).slice(0, 8);

export function ProductSection() {
  return (
    <section id="products" className="py-16 md:py-24 bg-[#F8F8F8] border-t border-[#EEEEEE] font-sans">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-[1080px] text-center mb-10 sm:mb-14">
          <div
            aria-hidden="true"
            className="mb-5 flex items-center justify-center gap-2"
          >
            <span className="h-1 w-1 rounded-full bg-[#4B193E]" />
            <span className="h-1 w-1 rounded-full bg-[#4B193E]" />
            <span className="h-1 w-1 rounded-full bg-[#4B193E]" />
            <span className="ml-0.5 h-1 w-9 rounded-full bg-[#4B193E]" />
          </div>

          <p className="mb-3 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#888888]">
            Nghệ nhân Kim Jeong Hwan
          </p>

          <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px] lg:text-[32px]">
            Sản Phẩm Hồng Sâm Kim&apos;s Nổi Bật
          </h2>

          <p className="mt-4 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#666666] max-w-[860px] mx-auto">
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
