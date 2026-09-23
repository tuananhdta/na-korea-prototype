"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";

export function ProductSection() {
  const products = (productsData as Product[]).slice(0, 8);

  return (
    <section id="products" className="py-20 md:py-28 bg-[#F8F8F8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
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
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2D2D2D] hover:bg-[#B5222A] text-white text-sm font-bold rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>XEM TẤT CẢ 32+ SẢN PHẨM</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
