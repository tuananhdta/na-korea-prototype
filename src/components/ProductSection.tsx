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
          <span className="text-xs font-bold uppercase tracking-widest text-[#B5222A] mb-2">
            NGHỆ NHÂN KIM JEONG HWAN
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
            Sản Phẩm Hồng Sâm Kim&apos;s Nổi Bật
          </h2>
          <div className="w-12 h-0.5 bg-[#B5222A] my-3.5" />
          <p className="text-sm sm:text-base text-[#666666] max-w-xl leading-relaxed">
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
            className="group na-btn-secondary px-8 py-3.5 text-xs font-bold uppercase tracking-wider"
          >
            <span>XEM TẤT CẢ 32+ SẢN PHẨM</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
