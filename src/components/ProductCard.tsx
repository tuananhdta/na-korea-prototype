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

  const isGift = product.categories.some((c) => c.toLowerCase().includes("quà") || c.toLowerCase().includes("set"));
  const isKid = product.categories.some((c) => c.toLowerCase().includes("trẻ") || c.toLowerCase().includes("em"));

  return (
    <div className="h-full" data-scroll-fade="on">
      <div className="na-surface-lift group flex h-full flex-col overflow-hidden rounded-xl border border-[#E5E5E5] bg-white hover:border-[#B5222A]/40">
      {/* Thumbnail Container */}
      <div className="relative aspect-square w-full bg-[#F8F8F8] overflow-hidden">
        <Link href={`/product/${product.id}`} className="relative block h-full w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="na-image-fade object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.originalPrice && (
            <span className="bg-[#B5222A] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs tracking-wider uppercase">
              ƯU ĐÃI
            </span>
          )}
          {isGift && (
            <span className="bg-[#2D2D2D] text-[#ECEBE9] text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-xs">
              QUÀ BIẾU
            </span>
          )}
          {isKid && (
            <span className="bg-[#F0831F] text-white text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-xs">
              TRẺ EM
            </span>
          )}
        </div>

        {/* Quick View Button on Hover */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 bg-black/20 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100">
          <Link
            href={`/product/${product.id}`}
            className="pointer-events-auto translate-y-4 rounded-full bg-white p-3 text-[#2D2D2D] shadow-lg transition-[transform,background-color,color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#B5222A] hover:text-white group-hover:translate-y-0"
            title="Xem chi tiết"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Info Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <div className="flex items-center justify-between text-xs text-[#666666] mb-1.5">
            <span className="truncate">{product.categories[0] || "Hồng Sâm 6 Năm"}</span>
            <div className="flex items-center text-[#F0831F]">
              <Star className="w-3 h-3 fill-[#F0831F] text-[#F0831F]" />
              <span className="ml-1 text-[11px] font-medium text-[#4B4F52]">5.0</span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/product/${product.id}`}>
            <h3 className="font-semibold text-[#2D2D2D] group-hover:text-[#B5222A] text-[15px] leading-snug line-clamp-2 transition-colors">
              {product.title}
            </h3>
          </Link>

          {/* Short description */}
          {product.shortDescription && (
            <p className="mt-1.5 text-xs text-[#666666] line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>
          )}
        </div>

        {/* Price & Action */}
        <div className="mt-4 pt-3 border-t border-[#E5E5E5] flex items-center justify-between gap-2">
          <div>
            <div className="text-base sm:text-lg font-bold text-[#B5222A]">
              {product.price}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-[#666666] line-through">
                {product.originalPrice}
              </div>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="flex items-center gap-1.5 rounded-lg bg-[#2D2D2D] px-3.5 py-2 text-xs font-semibold text-white shadow-xs transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:bg-[#B5222A] hover:shadow-sm active:translate-y-0"
            title="Thêm vào giỏ"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Thêm giỏ</span>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
