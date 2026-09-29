"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Eye, Star } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const parsePrice = (priceStr?: string | null) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, ""), 10) || 0;
  };

  const priceNum = parsePrice(product.price);
  const origNum = parsePrice(product.originalPrice);
  const discountPercent =
    origNum > priceNum && priceNum > 0
      ? Math.round(((origNum - priceNum) / origNum) * 100)
      : 0;

  const reviewCount =
    product.reviews && product.reviews.length > 0
      ? product.reviews.length * 6 + 4
      : 18;
  const ratingScore = 5.0;

  return (
    <div
      className="h-full"
      itemScope
      itemType="https://schema.org/Product"
    >
      <meta itemProp="name" content={product.title} />
      <meta itemProp="image" content={product.image} />
      <meta itemProp="brand" content="Kim's Red Ginseng" />

      <div className="group relative flex h-full flex-col overflow-hidden rounded bg-white border border-[#EEEEEE] transition-all duration-300 hover:border-[#B5222A] hover:shadow-md">
        {/* Thumbnail Container */}
        <div className="relative aspect-square w-full overflow-hidden bg-[#FAFAFA]">
          <Link
            href={`/san-pham/${product.id}`}
            className="relative block h-full w-full"
            aria-label={`Xem chi tiết ${product.title}`}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Discount Badge */}
          {discountPercent > 0 && (
            <div className="absolute left-3 top-3 z-10">
              <span className="inline-flex items-center bg-[#B5222A] px-2 py-0.5 text-[11px] font-bold text-white font-figtree">
                -{discountPercent}%
              </span>
            </div>
          )}

          {/* Action Bar on Hover */}
          <div className="absolute inset-x-0 bottom-0 z-20 flex translate-y-full items-center justify-between gap-2 border-t border-[#EEEEEE] bg-white/95 p-2 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              href={`/san-pham/${product.id}`}
              className="flex-1 py-1.5 text-center text-xs font-bold border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
              title="Xem chi tiết sản phẩm"
            >
              Chi tiết
            </Link>
            <button
              type="button"
              onClick={() => addToCart(product, 1)}
              className="flex-1 py-1.5 text-center text-xs font-bold bg-[#B5222A] text-white hover:bg-[#991C23] transition-colors"
              title="Thêm vào giỏ hàng"
            >
              Thêm giỏ
            </button>
          </div>
        </div>

        {/* Info Content */}
        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <Link href={`/san-pham/${product.id}`} className="block">
              <h3 className="line-clamp-2 text-sm sm:text-[15px] font-bold text-[#111111] leading-snug transition-colors group-hover:text-[#B5222A]">
                {product.title}
              </h3>
            </Link>

            <div className="mt-1.5 flex items-center gap-1.5 text-xs">
              <div className="flex items-center text-amber-500" aria-label={`Đánh giá ${ratingScore} trên 5 sao`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="font-bold text-[#333333] text-[11px] font-figtree">{ratingScore.toFixed(1)}</span>
              <span className="text-[11px] text-[#888888] font-figtree">({reviewCount})</span>
            </div>
          </div>

          <div
            className="mt-3 flex items-baseline justify-between border-t border-[#EEEEEE] pt-2"
            itemProp="offers"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content="VND" />
            <meta itemProp="price" content={priceNum.toString()} />
            <link itemProp="availability" href="https://schema.org/InStock" />

            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-extrabold text-[#B5222A] font-figtree">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#888888] line-through font-normal font-figtree">
                  {product.originalPrice}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => addToCart(product, 1)}
              className="flex h-7 w-7 items-center justify-center rounded bg-[#F5F5F5] text-[#111111] hover:bg-[#B5222A] hover:text-white transition-colors lg:hidden"
              aria-label="Thêm vào giỏ"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
