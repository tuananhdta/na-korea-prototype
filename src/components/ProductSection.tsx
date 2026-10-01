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
           HYBRID MASTER: BENTO BOX LAYOUT + FLEX MORPH EXPANSION HOVER ANIMATION
           - Bố cục: 1 Hero Card (7 Cols) + 4 Secondary Cards (5 Cols 2x2), 1px Border Divider, 0 Gap
           - Hiệu ứng: Khi Hover vào card bất kỳ, card đó mở rộng nổi khối (Scale 1.025, Border Đỏ Sâm, Zoom Ảnh & Trượt Mở Giá/Nút)
           ════════════════════════════════════════════════════════════════ */}
        <div className="group/bento-grid bg-white rounded-2xl border border-[#EEEEEE] shadow-sm overflow-hidden p-0 transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#EEEEEE]">
            
            {/* ═══════════ TOP 1 HERO CARD (LEFT 7 COLS) ═══════════ */}
            <div
              className="md:col-span-7 group/hero relative bg-white p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ease-out cursor-pointer hover:z-30 hover:scale-[1.02] hover:shadow-2xl border-2 border-transparent hover:border-[#4B193E] group-hover/bento-grid:group-hover/hero:opacity-100 group-hover/bento-grid:opacity-75"
              itemScope
              itemType="https://schema.org/Product"
            >
              <meta itemProp="name" content={heroProduct.title} />
              <meta itemProp="image" content={heroProduct.image} />

              <div>
                {/* Image Container with Parallax Zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#FAFAFA] mb-5">
                  <Link href={`/san-pham/${heroProduct.id}`} className="relative block h-full w-full">
                    <Image
                      src={heroProduct.image}
                      alt={heroProduct.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover/hero:scale-108"
                      priority
                    />
                  </Link>

                  {getDiscountPercent(heroProduct) > 0 && (
                    <span className="absolute left-3.5 top-3.5 bg-[#4B193E] text-white px-2.5 py-1 font-figtree text-xs font-semibold rounded shadow-xs">
                      -{getDiscountPercent(heroProduct)}%
                    </span>
                  )}

                  <span className="absolute right-3.5 top-3.5 bg-[#D4A359] text-white px-2.5 py-1 text-[11px] font-bold rounded uppercase tracking-wider shadow-xs">
                    ★ Best Seller
                  </span>
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

                {/* Title */}
                <Link href={`/san-pham/${heroProduct.id}`} className="block">
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-[#111111] leading-snug tracking-[-0.01em] transition-colors group-hover/hero:text-[#4B193E]">
                    {heroProduct.title}
                  </h3>
                </Link>
              </div>

              {/* Price & Action Bar (Morph Expand Slide-up on Hover on Desktop) */}
              <div className="mt-5 pt-4 border-t border-[#EEEEEE] flex flex-wrap items-center justify-between gap-3 transition-all duration-500 ease-out lg:opacity-0 lg:max-h-0 lg:overflow-hidden lg:pt-0 lg:border-t-0 group-hover/hero:lg:opacity-100 group-hover/hero:lg:max-h-24 group-hover/hero:lg:pt-4 group-hover/hero:lg:border-t">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-[#4B193E] font-figtree">
                    {heroProduct.price}
                  </span>
                  {heroProduct.originalPrice && (
                    <span className="text-xs text-[#888888] line-through font-figtree">
                      {heroProduct.originalPrice}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => addToCart(heroProduct, 1)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#4B193E] text-white text-xs font-bold rounded hover:bg-[#3A1230] transition-all duration-300 shadow-xs cursor-pointer"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" />
                    <span>Thêm giỏ</span>
                  </button>
                  <Link
                    href={`/san-pham/${heroProduct.id}`}
                    className="px-4 py-2 text-xs font-bold border border-[#111111] text-[#111111] rounded hover:bg-[#111111] hover:text-white transition-all duration-300"
                  >
                    Chi tiết →
                  </Link>
                </div>
              </div>
            </div>

            {/* ═══════════ 4 SECONDARY CARDS (RIGHT 5 COLS - 2x2 GRID) ═══════════ */}
            <div className="md:col-span-5 grid grid-cols-2 gap-0 divide-x divide-y divide-[#EEEEEE]">
              {secondaryProducts.map((product) => {
                const discount = getDiscountPercent(product);
                return (
                  <div
                    key={product.id}
                    className="group/card relative bg-white p-4 sm:p-5 flex flex-col justify-between transition-all duration-500 ease-out cursor-pointer hover:z-30 hover:scale-[1.04] hover:shadow-xl border-2 border-transparent hover:border-[#4B193E] group-hover/bento-grid:group-hover/card:opacity-100 group-hover/bento-grid:opacity-75"
                  >
                    <div>
                      {/* Image */}
                      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#FAFAFA] mb-3">
                        <Link href={`/san-pham/${product.id}`} className="block h-full w-full">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="(max-width: 640px) 50vw, 25vw"
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover/card:scale-108"
                          />
                        </Link>
                        {discount > 0 && (
                          <span className="absolute left-2 top-2 bg-[#4B193E] text-white text-[10px] font-bold px-1.5 py-0.5 rounded font-figtree">
                            -{discount}%
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <Link href={`/san-pham/${product.id}`} className="block">
                        <h4 className="line-clamp-2 text-xs sm:text-sm font-bold text-[#111111] leading-snug group-hover/card:text-[#4B193E]">
                          {product.title}
                        </h4>
                      </Link>
                    </div>

                    {/* Price & Hover Action Bar (Morph Expand) */}
                    <div className="mt-3 pt-2 border-t border-[#EEEEEE]">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm sm:text-base font-bold text-[#4B193E] font-figtree">
                          {product.price}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => addToCart(product, 1)}
                        className="mt-2 w-full py-1.5 bg-[#4B193E] text-white text-[11px] font-bold rounded opacity-100 lg:opacity-0 group-hover/card:lg:opacity-100 transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Thêm giỏ</span>
                      </button>
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
