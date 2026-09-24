"use client";

import { CheckCircle2, ShoppingBag, X, PackageCheck, PhoneCall, ShieldCheck } from "lucide-react";

export interface OrderDetails {
  orderId: string;
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  note?: string;
  paymentMethod: string;
  total: string;
  itemCount: number;
}

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinueShopping: () => void;
  orderDetails?: OrderDetails | null;
}

export function OrderSuccessModal({
  isOpen,
  onClose,
  onContinueShopping,
  orderDetails,
}: OrderSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-success-title"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-[#E5E5E5] transition-all transform animate-in zoom-in-95 duration-300">
        {/* Close Button top-right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors z-10"
          aria-label="Đóng"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header with decorative badge */}
        <div className="bg-gradient-to-b from-red-50/70 via-white to-white px-6 pt-8 pb-4 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#B5222A]/10 text-[#B5222A] ring-8 ring-red-50 mb-4 shadow-xs">
            <CheckCircle2 className="h-9 w-9 stroke-[2.2]" />
          </div>

          <h2
            id="order-success-title"
            className="text-2xl font-bold tracking-tight text-[#2D2D2D] sm:text-3xl"
          >
            Đặt hàng thành công
          </h2>

          <div className="mt-3 space-y-1.5 text-sm sm:text-base text-[#4B4F52] leading-relaxed max-w-md mx-auto">
            <p className="font-medium text-[#2D2D2D]">
              Cảm ơn Quý khách đã đặt hàng tại Na Korea.
            </p>
            <p className="text-xs sm:text-sm text-[#666666]">
              Nhân viên của Na Korea sẽ liên hệ với Quý khách trong thời gian sớm nhất để xác nhận đơn hàng.
            </p>
          </div>
        </div>

        {/* Order Brief Info */}
        {orderDetails && (
          <div className="px-6 py-4">
            <div className="rounded-xl border border-[#E5E5E5] bg-[#F8F8F8] p-4 text-xs sm:text-sm space-y-2.5">
              <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
                <span className="text-[#666666]">Mã đơn hàng:</span>
                <span className="font-bold text-[#B5222A] text-sm tracking-wide">
                  {orderDetails.orderId}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#666666]">Người nhận:</span>
                <span className="font-semibold text-[#2D2D2D]">
                  {orderDetails.customerName}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#666666]">Số điện thoại:</span>
                <span className="font-medium text-[#2D2D2D]">{orderDetails.phone}</span>
              </div>

              <div className="flex items-start justify-between gap-3">
                <span className="text-[#666666] shrink-0">Địa chỉ nhận hàng:</span>
                <span className="text-right font-medium text-[#2D2D2D] line-clamp-2">
                  {orderDetails.address}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-[#E5E5E5] pt-2">
                <span className="text-[#666666]">Phương thức thanh toán:</span>
                <span className="font-medium text-[#2D2D2D]">
                  {orderDetails.paymentMethod}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-bold text-[#2D2D2D]">Tổng thanh toán:</span>
                <span className="text-base font-extrabold text-[#B5222A]">
                  {orderDetails.total}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Reassurance items */}
        <div className="px-6 pb-2">
          <div className="flex items-center justify-around rounded-lg bg-[#ECEBE9]/50 py-2.5 px-3 text-[11px] text-[#4B4F52]">
            <div className="flex items-center gap-1.5">
              <PackageCheck className="h-3.5 w-3.5 text-[#B5222A]" />
              <span>Đóng gói cẩn thận</span>
            </div>
            <div className="flex items-center gap-1.5">
              <PhoneCall className="h-3.5 w-3.5 text-[#F0831F]" />
              <span>Hỗ trợ: 0969.866.505</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-green-600" />
              <span>100% Chính hãng</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-4 flex flex-col-reverse sm:flex-row gap-3">
          <button
            type="button"
            onClick={onClose}
            className="na-btn-outline flex-1 py-3 px-4 text-sm"
          >
            Đóng
          </button>

          <button
            type="button"
            onClick={onContinueShopping}
            className="na-btn-primary group flex-1 py-3 px-4 text-sm"
          >
            <ShoppingBag className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Tiếp tục mua hàng</span>
          </button>
        </div>
      </div>
    </div>
  );
}
