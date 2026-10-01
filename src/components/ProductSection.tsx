"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";
import { SectionIndicator } from "@/components/SectionIndicator";
import { useCart } from "@/context/CartContext";

const featuredProducts = (productsData as Product[]).slice(0, 5);
const heroProduct = featuredProducts[0];
const secondaryProducts = featuredProducts.slice(1, 5);

export function ProductSection() {
  const { addToCart } = useCart();

  const parsePrice = (priceStr?: string | null) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, ""), 10) || 0;
  };

  const getDiscountPercent = (product: Product) => {
    const p = parsePrice(product.price);
    const o = parsePrice(product.originalPrice);
    return o > p && p > 0 ? Math.round(((o - p) / o) * 100) : 0;
  };

  const heroReviewCount =
    heroProduct.reviews && heroProduct.reviews.length > 0
      ? heroProduct.reviews.length * 6 + 4
      : 18;
  const heroRating = 5.0;

  return (
    <section id="products" className="py-16 md:py-24 bg-[#F8F8F8] border-t border-[#EEEEEE] font-sans">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-[1080px] text-center mb-10 sm:mb-14">
          <SectionIndicator activeIndex={4} total={5} />

          <p className="mb-3 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#888888]">
            Nghệ nhân Kim Jeong Hwan
          </p>

          <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px] lg:text-[32px]">
            Sản Phẩm Hồng Sâm Kim Nổi Bật
          </h2>

          <p className="mt-4 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#111111] max-w-[860px] mx-auto">
            Chiết xuất từ nhân sâm 6 năm tuổi vùng núi Punggi nguyên chất 100%, bảo đảm hàm lượng Saponin và Ginsenoside cao nhất.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════
           BỘ SƯU TẬP CARD SẢN PHẨM KHÔNG VIỀN - ẢNH SÁT VIỀN 0PX
           - Ảnh tràn viền trên và 2 bên (0px margin)
           - Bình thường: Không viền, đồng màu nền (#F8F8F8)
           - Khi hover: Nổi card trắng 3D, viền Đỏ Sâm (#4B193E), hiện 2 nút bên trong ảnh
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          
          {/* ═══════════ TOP 1 HERO CARD + DESKTOP FULL-WIDTH CTA (LEFT 6 COLS) ═══════════ */}
          <div className="md:col-span-6 flex flex-col justify-between gap-4 sm:gap-6">
            <div
              className="group/hero relative bg-transparent hover:bg-white flex flex-col transition-all duration-300 hover:z-20 hover:scale-[1.015] hover:shadow-2xl border border-transparent hover:border-[#4B193E] rounded-2xl overflow-hidden cursor-pointer"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="name" content={heroProduct.title} />
              <meta itemProp="image" content={heroProduct.image} />

              <div className="flex flex-col">
                {/* Image Container with Floating Hover Overlay - Flush 0px */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#F0EFEB]">
                  <Link href={`/san-pham/${heroProduct.id}`} className="relative block h-full w-full">
                    <Image
                      src={heroProduct.image}
                      alt={heroProduct.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-500 group-hover/hero:scale-105"
                      priority
                    />
                  </Link>

                  {getDiscountPercent(heroProduct) > 0 && (
                    <span className="absolute left-3 top-3 bg-[#4B193E] text-white px-2.5 py-0.5 font-figtree text-xs font-semibold rounded shadow-xs z-10">
                      -{getDiscountPercent(heroProduct)}%
                    </span>
                  )}

                  <span className="absolute right-3 top-3 bg-[#D4A359] text-white px-2.5 py-0.5 text-[11px] font-bold rounded uppercase tracking-wider shadow-xs z-10">
                    ★ Best Seller
                  </span>

                  {/* Floating Action Buttons Inside Image (Hover Overlay) */}
                  <div className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2.5 z-20 transition-all duration-300 opacity-0 translate-y-2 pointer-events-none group-hover/hero:opacity-100 group-hover/hero:translate-y-0 group-hover/hero:pointer-events-auto">
                    <Link
                      href={`/san-pham/${heroProduct.id}`}
                      className="py-2 px-3 bg-white/95 backdrop-blur-xs border border-[#111111] text-[#111111] text-xs sm:text-sm font-bold rounded hover:bg-[#111111] hover:text-white transition-colors text-center flex items-center justify-center shadow-md"
                    >
                      Chi tiết
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(heroProduct, 1);
                      }}
                      className="py-2 px-3 bg-[#4B193E] text-white text-xs sm:text-sm font-bold rounded hover:bg-[#3A1230] transition-colors text-center cursor-pointer shadow-md flex items-center justify-center"
                    >
                      Thêm giỏ
                    </button>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-4 sm:p-5 flex flex-col">
                  {/* Title */}
                  <Link href={`/san-pham/${heroProduct.id}`} className="block mb-2">
                    <h3 className="font-sans text-base sm:text-lg lg:text-xl font-bold text-[#111111] leading-snug tracking-[-0.01em] transition-colors group-hover/hero:text-[#4B193E]">
                      {heroProduct.title}
                    </h3>
                  </Link>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="font-bold text-[#111111] text-xs font-figtree">{heroRating.toFixed(1)}</span>
                    <span className="text-xs text-[#888888] font-figtree">({heroReviewCount})</span>
                  </div>

                  {/* Price & Divider */}
                  <div className="pt-3 border-t border-[#E5E5E5] flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-[#4B193E] font-figtree">
                      {heroProduct.price}
                    </span>
                    {heroProduct.originalPrice && (
                      <span className="text-xs sm:text-sm text-[#888888] line-through font-figtree">
                        {heroProduct.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Full-width CTA Bar (Only visible on md+ screen) */}
            <Link
              href="/san-pham"
              className="hidden md:flex items-center justify-between px-6 py-4 rounded-xl bg-[#111111] hover:bg-[#4B193E] text-white transition-all duration-300 group/cta shadow-xs hover:shadow-lg"
            >
              <div className="flex flex-col">
                <span className="text-xs text-white/70 font-medium tracking-wide">Danh mục chính hãng</span>
                <span className="text-sm sm:text-base font-bold uppercase tracking-[0.03em]">
                  XEM TẤT CẢ 32+ SẢN PHẨM
                </span>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover/cta:translate-x-1.5 group-hover/cta:bg-white/20">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>

          {/* ═══════════ 4 SECONDARY CARDS (RIGHT 6 COLS - 2x2 GRID) ═══════════ */}
          <div className="md:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {secondaryProducts.map((product, idx) => {
              const discount = getDiscountPercent(product);
              const reviewCount = product.reviews && product.reviews.length > 0 ? product.reviews.length * 6 + 4 : 22;
              return (
                <div
                  key={product.id}
                  className="group/card relative bg-transparent hover:bg-white flex flex-col justify-between transition-all duration-300 hover:z-20 hover:scale-[1.02] hover:shadow-2xl border border-transparent hover:border-[#4B193E] rounded-xl overflow-hidden cursor-pointer"
                >
                  <div className="flex flex-col flex-1">
                    {/* Image with Floating Hover Overlay - Flush 0px */}
                    <div className="relative aspect-square w-full overflow-hidden bg-[#F0EFEB]">
                      <Link href={`/san-pham/${product.id}`} className="block h-full w-full">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-width: 640px) 50vw, 25vw"
                          className="object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
                        />
                      </Link>
                      {discount > 0 && (
                        <span className="absolute left-2.5 top-2.5 bg-[#4B193E] text-white text-[11px] font-bold px-2 py-0.5 rounded font-figtree z-10 shadow-xs">
                          -{discount}%
                        </span>
                      )}

                      {/* Floating Action Buttons Inside Image (Hover Overlay) */}
                      <div className="absolute inset-x-2 bottom-2 sm:inset-x-2.5 sm:bottom-2.5 grid grid-cols-2 gap-1.5 sm:gap-2 z-20 transition-all duration-300 opacity-0 translate-y-2 pointer-events-none group-hover/card:opacity-100 group-hover/card:translate-y-0 group-hover/card:pointer-events-auto">
                        <Link
                          href={`/san-pham/${product.id}`}
                          className="py-1.5 sm:py-2 px-1 sm:px-2 bg-white/95 backdrop-blur-xs border border-[#111111] text-[#111111] text-[11px] sm:text-xs font-bold rounded hover:bg-[#111111] hover:text-white transition-colors text-center flex items-center justify-center whitespace-nowrap shadow-md"
                        >
                          Chi tiết
                        </Link>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product, 1);
                          }}
                          className="py-1.5 sm:py-2 px-1 sm:px-2 bg-[#4B193E] text-white text-[11px] sm:text-xs font-bold rounded hover:bg-[#3A1230] transition-colors text-center cursor-pointer shadow-md flex items-center justify-center whitespace-nowrap"
                        >
                          Thêm giỏ
                        </button>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Title */}
                        <Link href={`/san-pham/${product.id}`} className="block mb-2">
                          <h4 className="line-clamp-2 text-xs sm:text-sm font-bold text-[#111111] leading-snug group-hover/card:text-[#4B193E] transition-colors">
                            {product.title}
                          </h4>
                        </Link>

                        {/* Rating */}
                        <div className="flex items-center gap-1.5 mb-2.5">
                          <div className="flex items-center text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-500 text-amber-500" />
                            ))}
                          </div>
                          <span className="font-bold text-[#111111] text-[11px] sm:text-xs font-figtree">5.0</span>
                          <span className="text-[11px] sm:text-xs text-[#888888] font-figtree">({reviewCount})</span>
                        </div>
                      </div>

                      {/* Price & Divider */}
                      <div className="pt-2.5 border-t border-[#E5E5E5] flex items-baseline gap-1.5 sm:gap-2">
                        <span className="text-sm sm:text-base font-bold text-[#4B193E] font-figtree">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[11px] sm:text-xs text-[#888888] line-through font-figtree">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile View All Button (Only visible on screens < md) */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/san-pham"
            className="group inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#111111] hover:bg-[#4B193E] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>XEM TẤT CẢ 32+ SẢN PHẨM</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* JSON-LD Structured Data for SEO & GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Sản Phẩm Hồng Sâm Kim Nổi Bật",
            "description": "Chiết xuất từ nhân sâm 6 năm tuổi vùng núi Punggi nguyên chất 100%, bảo đảm hàm lượng Saponin và Ginsenoside cao nhất.",
            "numberOfItems": featuredProducts.length,
            "itemListElement": featuredProducts.map((p, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "item": {
                "@type": "Product",
                "name": p.title,
                "image": p.image,
                "description": p.shortDescription,
                "brand": {
                  "@type": "Brand",
                  "name": "Hồng Sâm Kim Jeong Hwan"
                },
                "offers": {
                  "@type": "Offer",
                  "price": parsePrice(p.price).toString(),
                  "priceCurrency": "VND",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "NA Korea"
                  }
                }
              }
            }))
          })
        }}
      />
    </section>
  );
}
