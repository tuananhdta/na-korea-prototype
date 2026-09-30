"use client";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCount,
    formattedTotalPrice,
  } = useCart();

  return (
    <div
      aria-hidden={!isCartOpen}
      inert={!isCartOpen}
      className={`fixed inset-0 z-50 overflow-hidden ${isCartOpen ? "" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isCartOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          className={`na-drawer-transition flex w-screen max-w-md flex-col bg-white ${
            isCartOpen
              ? "translate-x-0 opacity-100 shadow-[-24px_0_64px_rgba(33,11,28,0.28)]"
              : "translate-x-8 opacity-0 shadow-none"
          }`}
        >
          {/* Header */}
          <div className="px-6 py-5 bg-[#181818] text-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#b5222a]" />
              <h2 className="text-lg font-bold tracking-wide text-white">
                Giỏ Hàng Của Bạn ({totalCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Delivery Note */}
          <div className="bg-[#fcf8e3] border-b border-[#faebcc] px-6 py-2.5 text-xs text-[#B88942] flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#b5222a] shrink-0" />
            <span>Miễn phí giao hàng toàn quốc cho đơn từ 1.000.000₫</span>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-gray-100">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <p className="text-gray-500 font-medium mb-2">Giỏ hàng của bạn đang trống</p>
                <p className="text-xs text-gray-400 max-w-xs mb-6">
                  Hãy khám phá các sản phẩm Hồng sâm 6 năm tuổi thượng hạng của chúng tôi
                </p>
                <Link
                  href="/san-pham"
                  onClick={closeCart}
                  className="px-6 py-2.5 bg-[#b5222a] text-white rounded-md text-sm font-semibold hover:bg-[#8f1920] transition-colors"
                >
                  Mua sắm ngay
                </Link>
              </div>
            ) : (
              items.map(({ product, quantity, selectedOption }) => (
                <div key={product.id} className="py-4 flex gap-4 items-center">
                  <div className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${product.id}`}
                      onClick={closeCart}
                      className="font-medium text-sm text-gray-900 hover:text-[#b5222a] line-clamp-2 leading-snug transition-colors"
                    >
                      {product.title}
                    </Link>
                    {selectedOption && (
                      <p className="text-xs text-gray-500 mt-0.5">Quy cách: {selectedOption}</p>
                    )}
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-bold text-[#b5222a] text-sm">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center border border-gray-200 rounded-md">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-l-md transition-colors"
                          aria-label="Giảm"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-semibold text-gray-800">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-r-md transition-colors"
                          aria-label="Tăng"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                        title="Xóa khỏi giỏ hàng"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Số lượng:</span>
                  <span className="font-medium text-gray-900">{totalCount} sản phẩm</span>
                </div>
                <div className="flex items-center justify-between text-base font-bold text-gray-900">
                  <span>Tổng tiền thanh toán:</span>
                  <span className="text-xl text-[#b5222a] font-extrabold">{formattedTotalPrice}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-gray-500 justify-center">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>Cam kết chính hãng 100% ｜ Đổi trả trong 7 ngày</span>
              </div>

              <div className="space-y-2.5">
                <Link
                  href="/thanh-toan"
                  onClick={closeCart}
                  className="na-btn-primary group w-full py-3.5 text-sm tracking-wide"
                >
                  <span>TIẾN HÀNH THANH TOÁN</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/gio-hang"
                  onClick={closeCart}
                  className="na-btn-outline w-full py-2.5 text-xs font-semibold"
                >
                  <span>Xem giỏ hàng chi tiết</span>
                </Link>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={clearCart}
                    className="text-xs text-gray-500 hover:text-red-600 underline"
                  >
                    Xóa tất cả
                  </button>
                  <button
                    onClick={closeCart}
                    className="text-xs text-gray-600 hover:text-black font-medium"
                  >
                    Tiếp tục mua hàng →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
