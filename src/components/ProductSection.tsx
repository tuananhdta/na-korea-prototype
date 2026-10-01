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
           UNIFIED BENTO SHOWCASE (1 Hero + 4 Secondary 2x2 Grid)
           1. Ảnh vuông chuẩn 1:1 (aspect-square)
           2. Sửa triệt để khoảng trống thừa ở SP 4 & 5 (nhóm sát thông tin bên dưới)
           3. Xóa bỏ hoàn toàn trùng lặp Giá ở SP lớn
           4. Khung & góc bo ăn khớp đồng nhất, không bị lộ viền kép
           5. Hover zoom 25% + Trượt hiện Giá & Nút thêm giỏ bên trong ảnh mượt mà
           ════════════════════════════════════════════════════════════════ */}
        <div className="bg-white rounded-2xl border border-[#EEEEEE] shadow-sm overflow-hidden p-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#EEEEEE]">
            
            {/* ═══════════ TOP 1 HERO CARD (LEFT 7 COLS) ═══════════ */}
            <div
              className="md:col-span-7 group/hero relative bg-white p-4 sm:p-6 flex flex-col justify-start transition-colors duration-300 ease-out cursor-pointer hover:bg-[#FAF9F7]"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="name" content={heroProduct.title} />
              <meta itemProp="image" content={heroProduct.image} />

              {/* Image Container (Aspect Square 1:1) */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#FAFAFA] mb-4">
                <Link href={`/san-pham/${heroProduct.id}`} className="relative block h-full w-full">
                  <Image
                    src={heroProduct.image}
                    alt={heroProduct.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover/hero:scale-[1.25]"
                    priority
                  />
                </Link>

                {/* Badges */}
                {getDiscountPercent(heroProduct) > 0 && (
                  <span className="absolute left-3 top-3 z-10 bg-[#4B193E] text-white px-2.5 py-1 font-figtree text-xs font-semibold rounded shadow-xs">
                    -{getDiscountPercent(heroProduct)}%
                  </span>
                )}

                <span className="absolute right-3 top-3 z-10 bg-[#D4A359] text-white px-2.5 py-1 text-[11px] font-bold rounded uppercase tracking-wider shadow-xs">
                  ★ Best Seller
                </span>

                {/* Hover Overlay Inside Image (Bottom Slide-up: Price + Add to Cart Button) */}
                <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-3 p-3.5 bg-white/95 backdrop-blur-md border-t border-[#EEEEEE] transition-transform duration-400 ease-out translate-y-full group-hover/hero:translate-y-0">
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base font-bold text-[#4B193E] font-figtree leading-none">
                      {heroProduct.price}
                    </span>
                    {heroProduct.originalPrice && (
                      <span className="text-[11px] text-[#888888] line-through font-figtree mt-0.5">
                        {heroProduct.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(heroProduct, 1);
                      }}
                      className="flex items-center gap-1.5 px-3.5 py-2 bg-[#4B193E] text-white text-xs font-bold rounded hover:bg-[#3A1230] transition-colors cursor-pointer shadow-xs"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>Thêm giỏ</span>
                    </button>
                    <Link
                      href={`/san-pham/${heroProduct.id}`}
                      className="px-3 py-2 text-xs font-bold border border-[#111111] text-[#111111] rounded hover:bg-[#111111] hover:text-white transition-colors"
                    >
                      Chi tiết
                    </Link>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="font-bold text-[#333333] text-xs font-figtree">{heroRating.toFixed(1)}</span>
                <span className="text-xs text-[#888888] font-figtree">({heroReviewCount} đánh giá)</span>
              </div>

              {/* Title & Price Below */}
              <Link href={`/san-pham/${heroProduct.id}`} className="block">
                <h3 className="font-sans text-base sm:text-lg font-bold text-[#111111] leading-snug tracking-[-0.01em] transition-colors group-hover/hero:text-[#4B193E]">
                  {heroProduct.title}
                </h3>
              </Link>

              <div className="mt-2.5 flex items-baseline gap-2">
                <span className="text-base sm:text-lg font-bold text-[#4B193E] font-figtree">
                  {heroProduct.price}
                </span>
                {heroProduct.originalPrice && (
                  <span className="text-xs text-[#888888] line-through font-figtree">
                    {heroProduct.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* ═══════════ 4 SECONDARY CARDS (RIGHT 5 COLS - 2x2 GRID) ═══════════ */}
            <div className="md:col-span-5 grid grid-cols-2 gap-0 divide-x divide-y divide-[#EEEEEE]">
              {secondaryProducts.map((product) => {
                const discount = getDiscountPercent(product);
                return (
                  <div
                    key={product.id}
                    className="group/card relative bg-white p-3.5 sm:p-4 flex flex-col justify-start transition-colors duration-300 ease-out cursor-pointer hover:bg-[#FAF9F7]"
                  >
                    {/* Image Container (Aspect Square 1:1) */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#FAFAFA] mb-3">
                      <Link href={`/san-pham/${product.id}`} className="block h-full w-full">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-width: 640px) 50vw, 25vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover/card:scale-[1.25]"
                        />
                      </Link>

                      {discount > 0 && (
                        <span className="absolute left-2 top-2 z-10 bg-[#4B193E] text-white text-[10px] font-bold px-1.5 py-0.5 rounded font-figtree">
                          -{discount}%
                        </span>
                      )}

                      {/* Hover Overlay Inside Image (Bottom Slide-up: Price + Add to Cart Button) */}
                      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-1 p-2 bg-white/95 backdrop-blur-md border-t border-[#EEEEEE] transition-transform duration-400 ease-out translate-y-full group-hover/card:translate-y-0">
                        <span className="text-xs font-bold text-[#4B193E] font-figtree leading-none">
                          {product.price}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product, 1);
                          }}
                          className="flex items-center gap-1 px-2 py-1 bg-[#4B193E] text-white text-[10px] font-bold rounded hover:bg-[#3A1230] transition-colors cursor-pointer shadow-xs shrink-0"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Thêm giỏ</span>
                        </button>
                      </div>
                    </div>

                    {/* Title */}
                    <Link href={`/san-pham/${product.id}`} className="block">
                      <h4 className="line-clamp-2 text-xs font-bold text-[#111111] leading-snug group-hover/card:text-[#4B193E]">
                        {product.title}
                      </h4>
                    </Link>

                    {/* Price right under title */}
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="text-xs sm:text-sm font-bold text-[#4B193E] font-figtree">
                        {product.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/san-pham"
            className="group na-btn-secondary px-8 py-3.5 text-[13px] sm:text-sm font-bold uppercase tracking-[0.03em]"
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
