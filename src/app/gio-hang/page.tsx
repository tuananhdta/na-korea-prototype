"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileDrawer } from "@/components/MobileDrawer";
import { useCart, parsePriceToNumber, formatNumberToVnd } from "@/context/CartContext";

export default function GioHangPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCount,
    formattedTotalPrice,
  } = useCart();

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex-1 pb-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#E5E5E5]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm text-[#666666]">
              <Link href="/" className="hover:text-[#2D2D2D] transition-colors">
                Trang Chủ
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#2D2D2D] font-semibold">Giỏ Hàng</span>
            </nav>
          </div>
        </div>

        {/* Page Container */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2D2D2D] tracking-tight">
                Giỏ Hàng Của Bạn
              </h1>
              <p className="text-xs sm:text-sm text-[#666666] mt-1">
                Quản lý các sản phẩm hồng sâm bạn đã lựa chọn
              </p>
            </div>
            {totalCount > 0 && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-[#B5222A]">
                {totalCount} sản phẩm
              </span>
            )}
          </div>

          {items.length === 0 ? (
            /* Empty Cart View */
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-10 sm:p-16 text-center max-w-2xl mx-auto shadow-xs">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-5 text-gray-300">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-bold text-[#2D2D2D] mb-2">
                Giỏ hàng của bạn đang trống
              </h2>
              <p className="text-sm text-[#666666] max-w-md mx-auto mb-8 leading-relaxed">
                Hãy khám phá các dòng sản phẩm Hồng sâm 6 năm tuổi thượng hạng nhập khẩu chính hãng từ vùng núi Punggi, Hàn Quốc.
              </p>
              <Link
                href="/san-pham"
                className="na-btn-primary px-8 py-3.5 text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Khám phá sản phẩm ngay</span>
              </Link>
            </div>
          ) : (
            /* Active Cart View */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Product List (Left Column) */}
              <div className="lg:col-span-8 space-y-4">
                <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-xs overflow-hidden">
                  {/* Table Header (Desktop) */}
                  <div className="hidden sm:grid sm:grid-cols-12 gap-4 px-6 py-4 bg-[#ECEBE9]/40 border-b border-[#E5E5E5] text-xs font-bold text-[#4B4F52] uppercase tracking-wider">
                    <div className="sm:col-span-6">Sản phẩm</div>
                    <div className="sm:col-span-2 text-center">Đơn giá</div>
                    <div className="sm:col-span-2 text-center">Số lượng</div>
                    <div className="sm:col-span-2 text-right">Thành tiền</div>
                  </div>

                  {/* Items List */}
                  <div className="divide-y divide-[#E5E5E5]">
                    {items.map(({ product, quantity, selectedOption }) => {
                      const unitPrice = parsePriceToNumber(product.price);
                      const itemTotal = unitPrice * quantity;

                      return (
                        <div
                          key={`${product.id}-${selectedOption || ""}`}
                          className="p-4 sm:p-6 transition-colors hover:bg-gray-50/50"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                            {/* Product Info */}
                            <div className="sm:col-span-6 flex gap-4 items-center">
                              <Link
                                href={`/san-pham/${product.id}`}
                                className="relative w-20 h-20 bg-[#F8F8F8] rounded-xl overflow-hidden shrink-0 border border-[#E5E5E5]"
                              >
                                <Image
                                  src={product.image}
                                  alt={product.title}
                                  fill
                                  sizes="80px"
                                  className="object-contain p-1"
                                />
                              </Link>

                              <div className="min-w-0 flex-1">
                                <Link
                                  href={`/san-pham/${product.id}`}
                                  className="font-bold text-sm text-[#2D2D2D] hover:text-[#B5222A] line-clamp-2 leading-snug transition-colors"
                                >
                                  {product.title}
                                </Link>
                                {selectedOption && (
                                  <p className="text-xs text-[#666666] mt-1">
                                    Quy cách: <span className="text-[#2D2D2D] font-medium">{selectedOption}</span>
                                  </p>
                                )}
                                <div className="mt-2 flex items-center gap-3 sm:hidden">
                                  <span className="font-bold text-[#B5222A] text-sm">
                                    {product.price}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => removeFromCart(product.id)}
                                    className="text-xs text-red-600 hover:underline flex items-center gap-1"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                    <span>Xóa</span>
                                  </button>
                                </div>
                              </div>
                            </div>

                            {/* Unit Price (Desktop) */}
                            <div className="hidden sm:block sm:col-span-2 text-center text-sm font-semibold text-[#4B4F52]">
                              {product.price}
                            </div>

                            {/* Quantity Controls */}
                            <div className="sm:col-span-2 flex items-center sm:justify-center justify-between pt-2 sm:pt-0">
                              <div className="flex items-center border border-[#E5E5E5] rounded-lg bg-white shadow-2xs">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(product.id, quantity - 1)}
                                  className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-l-lg transition-colors"
                                  aria-label="Giảm số lượng"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="w-10 text-center text-sm font-bold text-[#2D2D2D]">
                                  {quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(product.id, quantity + 1)}
                                  className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-r-lg transition-colors"
                                  aria-label="Tăng số lượng"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <div className="sm:hidden font-bold text-[#B5222A] text-sm">
                                {formatNumberToVnd(itemTotal)}
                              </div>
                            </div>

                            {/* Subtotal & Delete (Desktop) */}
                            <div className="hidden sm:flex sm:col-span-2 items-center justify-end gap-3 text-right">
                              <span className="text-sm font-bold text-[#B5222A]">
                                {formatNumberToVnd(itemTotal)}
                              </span>
                              <button
                                type="button"
                                onClick={() => removeFromCart(product.id)}
                                className="text-gray-400 hover:text-red-600 p-1.5 rounded-md hover:bg-red-50 transition-colors"
                                title="Xóa khỏi giỏ hàng"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Actions Footer */}
                  <div className="p-4 sm:p-6 bg-[#F8F8F8] border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href="/san-pham"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D2D2D] hover:text-[#B5222A] transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Tiếp tục mua hàng</span>
                    </Link>

                    <button
                      type="button"
                      onClick={clearCart}
                      className="inline-flex items-center gap-1.5 text-xs text-[#666666] hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Xóa toàn bộ giỏ hàng</span>
                    </button>
                  </div>
                </div>

                {/* Free shipping policy notice */}
                <div className="flex items-center gap-3 p-4 bg-amber-50/60 border border-amber-200/60 rounded-xl text-xs text-[#8a6d3b]">
                  <Truck className="w-5 h-5 text-[#F0831F] shrink-0" />
                  <div>
                    <span className="font-bold text-[#2D2D2D]">Ưu đãi giao hàng:</span>{" "}
                    Miễn phí vận chuyển toàn quốc cho tất cả đơn hàng tại Na Korea.
                  </div>
                </div>
              </div>

              {/* Order Summary (Right Column) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 shadow-xs space-y-5">
                  <h2 className="text-lg font-bold text-[#2D2D2D] border-b border-[#E5E5E5] pb-4">
                    Tóm Tắt Đơn Hàng
                  </h2>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between text-[#666666]">
                      <span>Số lượng:</span>
                      <span className="font-semibold text-[#2D2D2D]">{totalCount} sản phẩm</span>
                    </div>

                    <div className="flex items-center justify-between text-[#666666]">
                      <span>Tạm tính:</span>
                      <span className="font-semibold text-[#2D2D2D]">{formattedTotalPrice}</span>
                    </div>

                    <div className="flex items-center justify-between text-[#666666]">
                      <span>Phí vận chuyển:</span>
                      <span className="font-bold text-green-600">Miễn phí</span>
                    </div>

                    <div className="border-t border-[#E5E5E5] pt-4 flex items-baseline justify-between">
                      <span className="text-base font-bold text-[#2D2D2D]">Tổng thanh toán:</span>
                      <div className="text-right">
                        <span className="text-2xl font-extrabold text-[#B5222A]">
                          {formattedTotalPrice}
                        </span>
                        <div className="text-[11px] text-[#666666]">Đã bao gồm VAT</div>
                      </div>
                    </div>
                  </div>

                  {/* Proceed to Checkout CTA Button */}
                  <Link
                    href="/thanh-toan"
                    className="na-btn-primary w-full py-4 text-sm sm:text-base tracking-wide"
                  >
                    <span>TIẾN HÀNH THANH TOÁN</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Value Props */}
                  <div className="space-y-2.5 pt-4 border-t border-[#E5E5E5] text-xs text-[#666666]">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
                      <span>100% Chính hãng Nghệ nhân Kim Jeong Hwan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RotateCcw className="w-4 h-4 text-[#F0831F] shrink-0" />
                      <span>Đổi trả sản phẩm dễ dàng trong 7 ngày</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#B5222A] shrink-0" />
                      <span>Kiểm tra hàng trước khi thanh toán</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
