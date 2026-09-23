"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileDrawer } from "@/components/MobileDrawer";
import { ProductCard } from "@/components/ProductCard";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";
import { ChevronRight } from "lucide-react";

export default function AdultsProductPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const products = productsData as Product[];

  const adultProducts = products.filter((p) =>
    p.categories.some((c) => c.toLowerCase().includes("người lớn"))
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex-1 pb-20">
        {/* Banner Hero */}
        <div data-floating-contact-hero className="relative overflow-hidden border-b border-gray-800 bg-[#161e27] px-4 py-14 text-white sm:px-6">
          <Image
            src="/images/production.jpg"
            alt="Sản phẩm Hồng Sâm Người Lớn"
            fill
            sizes="100vw"
            preload
            className="na-image-reveal object-cover object-center"
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/55 via-[#161e27]/30 to-transparent" />
          <div className="na-hero-content relative z-10 mx-auto max-w-[1240px] space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
              Hồng Sâm Người Lớn
            </h1>
            <p className="text-white/90 text-sm max-w-2xl leading-relaxed drop-shadow-[0_1px_5px_rgba(0,0,0,0.45)]">
              Các dòng sản phẩm Cao hồng sâm cô đặc, Nước hồng sâm Balance Time, Cốt hồng sâm thượng hạng giúp tăng cường sinh lực, bồi bổ sức khỏe và nâng cao hệ miễn dịch.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/product" className="hover:text-black transition-colors">
              Sản Phẩm
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#b5222a] font-medium">Hồng Sâm Người Lớn</span>
          </nav>
        </div>

        {/* Products Grid */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-4">
          <div className="na-stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {adultProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
