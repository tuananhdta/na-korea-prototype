"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Eye } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const isGift = product.categories.some(
    (c) => c.toLowerCase().includes("quà") || c.toLowerCase().includes("set")
  );

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

  return (
    <div className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#EAE6E1] bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[#B5222A]/30 hover:shadow-[0_20px_35px_-8px_rgba(75,25,62,0.12)]">
        {/* Thumbnail Container */}
        <div className="relative aspect-square w-full overflow-hidden bg-[#FAF7F5]">
          <Link href={`/product/${product.id}`} className="relative block h-full w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          </Link>

          {/* Shimmer Light Reflection Effect */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-tr from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"
          />

          {/* Sleek Single Badge */}
          <div className="absolute left-3 top-3 z-10 flex gap-1.5">
            {discountPercent > 0 ? (
              <span className="inline-flex items-center rounded-full bg-[#B5222A] px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-white shadow-xs">
                -{discountPercent}%
              </span>
            ) : isGift ? (
              <span className="inline-flex items-center rounded-full bg-[#4B193E] px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white shadow-xs">
                QUÀ BIẾU
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full bg-[#2D2D2D]/80 px-2 py-0.5 text-[10px] font-medium tracking-wide text-white backdrop-blur-xs">
                CHÍNH HÃNG
              </span>
            )}
          </div>

          {/* Slide-Up Glassmorphism Action Bar */}
          <div className="absolute inset-x-0 bottom-0 z-20 flex translate-y-full items-center justify-between gap-2 border-t border-white/60 bg-white/85 p-2.5 backdrop-blur-md opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              href={`/product/${product.id}`}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#4B193E]/10 py-2 text-xs font-semibold text-[#4B193E] transition-colors duration-200 hover:bg-[#4B193E] hover:text-white"
              title="Xem chi tiết"
            >
              <Eye className="h-3.5 w-3.5" />
              <span>Chi tiết</span>
            </Link>
            <button
              type="button"
              onClick={() => addToCart(product, 1)}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#B5222A] py-2 text-xs font-semibold text-white shadow-xs transition-colors duration-200 hover:bg-[#8F161D] active:scale-95"
              title="Thêm vào giỏ"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              <span>Thêm giỏ</span>
            </button>
          </div>
        </div>

        {/* Info Content - Streamlined & Minimalist */}
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-4.5">
          <div>
            {/* Category tag */}
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#F0831F]">
              {product.categories[0] || "Hồng Sâm 6 Năm"}
            </p>

            {/* Product Title */}
            <Link href={`/product/${product.id}`} className="mt-1 block">
              <h3 className="line-clamp-2 text-[14px] font-semibold leading-snug text-[#2D2D2D] transition-colors duration-200 group-hover:text-[#B5222A]">
                {product.title}
              </h3>
            </Link>
          </div>

          {/* Price Row */}
          <div className="mt-3.5 flex items-baseline justify-between border-t border-[#F2ECE6] pt-2.5">
            <div className="flex items-baseline gap-2">
              <span className="text-[15px] font-bold text-[#B5222A] sm:text-base">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#8A8A8A] line-through font-normal">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* Micro Add Button on Mobile (visible when hover isn't available) */}
            <button
              type="button"
              onClick={() => addToCart(product, 1)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FAF7F5] text-[#4B193E] transition-colors duration-200 hover:bg-[#B5222A] hover:text-white lg:hidden"
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
