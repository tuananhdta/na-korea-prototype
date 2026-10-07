"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  CheckCircle2,
  Tag,
  ChevronRight,
  Check,
} from "lucide-react";
import { useCart, parsePriceToNumber } from "@/context/CartContext";
import { VoucherModal, Voucher } from "@/components/VoucherModal";

export function CartDrawer() {
  const router = useRouter();
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    totalCount,
    selectedItemIds,
    toggleSelectItem,
    toggleSelectAll,
    isAllSelected,
    selectedCount,
    selectedTotalPrice,
    formattedSelectedTotalPrice,
    savingsTotalPrice,
    formattedSavingsTotalPrice,
  } = useCart();

  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);
  const [appliedVouchers, setAppliedVouchers] = useState<Voucher[]>([]);

  // Restore vouchers from localStorage on mount
  useEffect(() => {
    try {
      const savedMulti = localStorage.getItem("kims_applied_vouchers");
      if (savedMulti) {
        const parsed: Voucher[] = JSON.parse(savedMulti);
        if (Array.isArray(parsed)) {
          setAppliedVouchers(parsed);
          return;
        }
      }
      const savedSingle = localStorage.getItem("kims_applied_voucher");
      if (savedSingle) {
        const single = JSON.parse(savedSingle);
        if (single) setAppliedVouchers([single]);
      }
    } catch {}
  }, []);

  const handleApplyVouchers = (vouchers: Voucher[]) => {
    setAppliedVouchers(vouchers);
    try {
      localStorage.setItem("kims_applied_vouchers", JSON.stringify(vouchers));
    } catch {}
  };

  const handleCheckout = () => {
    if (selectedCount === 0) return;
    closeCart();
    router.push("/thanh-toan");
  };

  return (
    <div
      aria-hidden={!isCartOpen}
      inert={!isCartOpen ? true : undefined}
      className={`fixed inset-0 z-50 overflow-hidden ${
        isCartOpen ? "" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isCartOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div
          className={`flex w-screen max-w-md sm:max-w-lg flex-col bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isCartOpen
              ? "translate-x-0 opacity-100 shadow-[-24px_0_64px_rgba(0,0,0,0.25)]"
              : "translate-x-full opacity-0 shadow-none"
          }`}
        >
          {/* Header */}
          <div className="px-5 sm:px-6 py-4 border-b border-[#EEEEEE] flex items-center justify-between bg-white">
            <h2 className="text-base sm:text-lg font-bold text-[#111111] tracking-tight">
              Giỏ hàng ({totalCount})
            </h2>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full text-gray-500 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Đóng giỏ hàng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Banner */}
          <div className="bg-[#EBF7EE] border-b border-[#D4ECD8] px-5 sm:px-6 py-2.5 flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#1E7E34]">
            <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
            <span>Bạn đã được miễn phí vận chuyển</span>
          </div>

          {items.length > 0 && (
            /* Select All Toolbar */
            <div className="px-5 sm:px-6 py-3 border-b border-[#EEEEEE] bg-[#FAFAFA] flex items-center justify-between">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={(e) => toggleSelectAll(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[#4B193E] focus:ring-[#4B193E] cursor-pointer"
                />
                <span className="text-xs sm:text-sm font-semibold text-[#111111]">
                  Chọn tất cả
                </span>
              </label>

              <span className="text-xs text-[#666666]">
                Bạn đã chọn {selectedCount} sản phẩm
              </span>
            </div>
          )}

          {/* Items List (Scrollable) */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-6 divide-y divide-gray-100">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300 border border-gray-100">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <p className="text-gray-700 font-bold mb-1">Giỏ hàng của bạn đang trống</p>
                <p className="text-xs text-gray-400 max-w-xs mb-6">
                  Hãy khám phá các sản phẩm Hồng sâm 6 năm tuổi thượng hạng của chúng tôi
                </p>
                <Link
                  href="/san-pham"
                  onClick={closeCart}
                  className="px-6 py-2.5 bg-[#4B193E] text-white rounded text-xs sm:text-sm font-bold hover:bg-[#3A1230] transition-colors"
                >
                  Mua sắm ngay
                </Link>
              </div>
            ) : (
              items.map(({ product, quantity, selectedOption }) => {
                const isSelected = selectedItemIds.includes(product.id);
                const pNum = parsePriceToNumber(product.price);
                const origNum = parsePriceToNumber(product.originalPrice);
                const hasDiscount = origNum > pNum && pNum > 0;
                const discountPercent = hasDiscount
                  ? Math.round(((origNum - pNum) / origNum) * 100)
                  : 0;

                return (
                  <div
                    key={`${product.id}-${selectedOption || "default"}`}
                    className="py-4 flex gap-3 sm:gap-4 items-start"
                  >
                    {/* Item Checkbox */}
                    <div className="pt-2">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelectItem(product.id)}
                        className="w-4 h-4 rounded border-gray-300 text-[#4B193E] focus:ring-[#4B193E] cursor-pointer"
                        aria-label={`Chọn sản phẩm ${product.title}`}
                      />
                    </div>

                    {/* Product Thumbnail */}
                    <Link
                      href={`/san-pham/${product.id}`}
                      onClick={closeCart}
                      className="relative w-18 h-18 sm:w-20 sm:h-20 bg-[#FAFAFA] rounded-lg overflow-hidden shrink-0 border border-[#EEEEEE] block group"
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="80px"
                        className="object-contain p-1 group-hover:scale-105 transition-transform duration-200"
                      />
                    </Link>

                    {/* Product Info & Controls */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/san-pham/${product.id}`}
                          onClick={closeCart}
                          className="font-semibold text-xs sm:text-sm text-[#111111] hover:text-[#4B193E] line-clamp-2 leading-snug transition-colors"
                        >
                          {product.title}
                        </Link>

                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-gray-400 hover:text-red-600 p-1 -mr-1 transition-colors cursor-pointer shrink-0"
                          title="Xóa khỏi giỏ hàng"
                          aria-label="Xóa sản phẩm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {selectedOption && (
                        <p className="text-[11px] text-[#666666] mt-0.5">
                          {selectedOption}
                        </p>
                      )}

                      {/* Pricing Row */}
                      <div className="flex items-baseline gap-2 mt-1.5 flex-wrap">
                        {product.originalPrice && (
                          <span className="text-[11px] text-[#888888] line-through font-figtree">
                            {product.originalPrice}
                          </span>
                        )}
                        {discountPercent > 0 && (
                          <span className="text-[11px] font-bold text-[#4B193E] font-figtree">
                            -{discountPercent}%
                          </span>
                        )}
                        <span className="font-bold text-[#4B193E] text-xs sm:text-sm font-figtree">
                          {product.price}
                        </span>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center justify-end mt-2">
                        <div className="inline-flex items-center border border-gray-200 rounded">
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-l transition-colors cursor-pointer"
                            aria-label="Giảm"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-7 sm:w-8 text-center text-xs font-bold text-[#111111] font-figtree">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="p-1 text-gray-500 hover:text-black hover:bg-gray-100 rounded-r transition-colors cursor-pointer"
                            aria-label="Tăng"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom Section */}
          {items.length > 0 && (
            <div className="bg-white border-t border-[#EEEEEE] p-4 sm:p-5 space-y-3.5">
              {/* Promo / Voucher Bar */}
              <div className="border border-[#EEEEEE] rounded-lg p-3 bg-[#FAFAFA]">
                <button
                  type="button"
                  onClick={() => setIsVoucherModalOpen(true)}
                  className="w-full flex items-center justify-between text-xs sm:text-[13px] text-[#111111] font-medium cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-[#B5222A]" />
                    <span className="font-semibold">Mã ưu đãi</span>
                    {appliedVouchers.length > 0 && (
                      <span className="bg-[#B5222A] text-white px-2 py-0.5 rounded text-[10px] font-bold">
                        Đã chọn ({appliedVouchers.length})
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[#666666] hover:text-[#111111]">
                    <span>{appliedVouchers.length > 0 ? `${appliedVouchers.length} mã đã áp dụng` : "Chọn hoặc nhập mã"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </div>

              {/* Subtotal Calculation */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm text-[#111111]">
                  <span className="font-medium">Tạm tính:</span>
                  <div className="text-right">
                    <span className="text-base sm:text-lg font-bold text-[#4B193E] font-figtree">
                      {formattedSelectedTotalPrice}
                    </span>
                  </div>
                </div>

                {savingsTotalPrice > 0 && (
                  <div className="text-right">
                    <span className="text-xs text-red-600 font-medium font-figtree">
                      (Tiết kiệm {formattedSavingsTotalPrice})
                    </span>
                  </div>
                )}
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={handleCheckout}
                disabled={selectedCount === 0}
                className={`w-full py-3.5 rounded text-sm sm:text-base font-bold text-white uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md ${
                  selectedCount > 0
                    ? "bg-[#B5222A] hover:bg-[#991C23] active:scale-[0.99]"
                    : "bg-gray-300 cursor-not-allowed shadow-none"
                }`}
              >
                {selectedCount > 0 ? "THANH TOÁN" : "VUI LÒNG CHỌN SẢN PHẨM"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Voucher Selector Modal */}
      <VoucherModal
        isOpen={isVoucherModalOpen}
        onClose={() => setIsVoucherModalOpen(false)}
        onApply={handleApplyVouchers}
        currentCodes={appliedVouchers.map((v) => v.code)}
        orderTotal={selectedTotalPrice}
      />
    </div>
  );
}
