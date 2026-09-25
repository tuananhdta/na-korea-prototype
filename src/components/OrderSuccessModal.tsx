"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  ShoppingBag,
  X,
  PackageCheck,
  PhoneCall,
  ShieldCheck,
  QrCode,
  Copy,
  Check,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

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
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, field: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const isBankTransfer =
    orderDetails?.paymentMethod
      ?.toLowerCase()
      .includes("chuyển khoản") || false;

  const rawAmountNumber = orderDetails
    ? parseInt(orderDetails.total.replace(/[^0-9]/g, ""), 10) || 0
    : 0;

  const qrImageUrl = orderDetails
    ? `https://img.vietqr.io/image/${SITE_CONFIG.bankInfo.bankId}-${SITE_CONFIG.bankInfo.accountNumber}-compact2.png?amount=${rawAmountNumber}&addInfo=${encodeURIComponent(
        orderDetails.orderId
      )}&accountName=${encodeURIComponent(SITE_CONFIG.bankInfo.accountHolderAscii)}`
    : "";

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-success-title"
    >
      <div className="relative w-full max-w-xl my-6 max-h-[92vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-[#E5E5E5] transition-all transform animate-in zoom-in-95 duration-300">
        {/* Close Button top-right */}
        <button
          type="button"
          onClick={onClose}
          className="sticky top-3 float-right mr-3 rounded-full p-2 text-gray-400 bg-white/80 hover:bg-gray-100 hover:text-gray-700 backdrop-blur-xs transition-colors z-20"
          aria-label="Đóng"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header with decorative badge */}
        <div className="bg-gradient-to-b from-red-50/70 via-white to-white px-6 pt-7 pb-3 text-center clear-both">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#B5222A]/10 text-[#B5222A] ring-8 ring-red-50 mb-3 shadow-xs">
            <CheckCircle2 className="h-8 w-8 stroke-[2.2]" />
          </div>

          <h2
            id="order-success-title"
            className="text-2xl font-bold tracking-tight text-[#2D2D2D] sm:text-3xl"
          >
            Đặt Hàng Thành Công!
          </h2>

          <div className="mt-2 space-y-1 text-xs sm:text-sm text-[#4B4F52] leading-relaxed max-w-md mx-auto">
            <p className="font-medium text-[#2D2D2D]">
              Cảm ơn Quý khách <strong className="text-[#B5222A]">{orderDetails?.customerName}</strong> đã tin tưởng lựa chọn Na Korea.
            </p>
            <p className="text-gray-500">
              Đơn hàng của Quý khách đã được tiếp nhận và đang được xử lý.
            </p>
          </div>
        </div>

        {/* Bank Transfer VietQR Box (shown immediately if bank transfer chosen) */}
        {isBankTransfer && orderDetails && (
          <div className="px-5 sm:px-6 pt-2 pb-3">
            <div className="rounded-2xl border-2 border-[#B5222A]/20 bg-gradient-to-b from-red-50/40 to-white p-4 sm:p-5 shadow-xs space-y-3.5">
              <div className="flex items-center justify-between border-b border-red-100 pb-2.5">
                <div className="flex items-center gap-2 text-sm font-bold text-[#B5222A]">
                  <QrCode className="w-4 h-4" />
                  <span>Quét mã VietQR để thanh toán</span>
                </div>
                <span className="text-[11px] font-semibold text-[#B5222A] bg-red-100/80 px-2 py-0.5 rounded-full">
                  Xác nhận nhanh 24/7
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                {/* VietQR Code Image */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 bg-white rounded-xl overflow-hidden border border-gray-200 p-1 shadow-xs">
                    <Image
                      src={qrImageUrl}
                      alt="Mã VietQR thanh toán đơn hàng"
                      width={192}
                      height={192}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-[10px] text-gray-500 mt-1 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-600 inline" /> Tự động điền tiền & nội dung
                  </span>
                </div>

                {/* Bank Details with Copy */}
                <div className="flex-1 w-full space-y-2 text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-gray-200/80 space-y-0.5">
                    <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      Ngân hàng thụ hưởng
                    </div>
                    <div className="font-bold text-[#2D2D2D] text-xs sm:text-sm">
                      {SITE_CONFIG.bankInfo.bankName}
                    </div>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border border-gray-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                        Số tài khoản
                      </div>
                      <div className="font-mono font-bold text-[#B5222A] text-sm sm:text-base tracking-wide">
                        {SITE_CONFIG.bankInfo.accountNumber}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(SITE_CONFIG.bankInfo.accountNumber, "stk")}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-gray-50 border border-gray-300 hover:bg-gray-100 text-gray-700 flex items-center gap-1 transition-colors"
                    >
                      {copiedField === "stk" ? (
                        <>
                          <Check className="w-3 h-3 text-green-600" />
                          <span className="text-green-600">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-gray-500" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border border-gray-200/80">
                    <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      Chủ tài khoản
                    </div>
                    <div className="font-bold text-[#2D2D2D] text-xs uppercase">
                      {SITE_CONFIG.bankInfo.accountHolder}
                    </div>
                  </div>

                  <div className="bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">
                        Nội dung chuyển khoản (Bắt buộc)
                      </div>
                      <div className="font-mono font-bold text-[#B5222A] text-xs sm:text-sm">
                        {orderDetails.orderId}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(orderDetails.orderId, "memo")}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-white border border-amber-300 hover:bg-amber-50 text-amber-900 flex items-center gap-1 transition-colors"
                    >
                      {copiedField === "memo" ? (
                        <>
                          <Check className="w-3 h-3 text-green-600" />
                          <span className="text-green-600">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-amber-700" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-[#666666] leading-relaxed bg-white/90 p-2.5 rounded-xl border border-red-100">
                ⚠️ <strong>Lưu ý:</strong> Vui lòng giữ nguyên mã đơn hàng <strong className="text-[#B5222A] font-mono">{orderDetails.orderId}</strong> trong nội dung chuyển khoản để nhân viên đối soát và kích hoạt giao hàng nhanh nhất.
              </div>
            </div>
          </div>
        )}

        {/* Order Brief Info */}
        {orderDetails && (
          <div className="px-5 sm:px-6 py-2">
            <div className="rounded-xl border border-[#E5E5E5] bg-[#F8F8F8] p-4 text-xs sm:text-sm space-y-2.5">
              <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
                <span className="text-[#666666]">Mã đơn hàng:</span>
                <span className="font-mono font-bold text-[#B5222A] text-sm tracking-wide">
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
        <div className="px-5 sm:px-6 pt-2 pb-2">
          <div className="flex items-center justify-around rounded-xl bg-[#ECEBE9]/50 py-2.5 px-3 text-[11px] text-[#4B4F52]">
            <div className="flex items-center gap-1.5">
              <PackageCheck className="h-3.5 w-3.5 text-[#B5222A]" />
              <span>Đóng gói cẩn thận</span>
            </div>
            <div className="flex items-center gap-1.5">
              <PhoneCall className="h-3.5 w-3.5 text-[#F0831F]" />
              <span>Hotline: {SITE_CONFIG.hotlineDisplay}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-green-600" />
              <span>100% Chính hãng</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-5 sm:p-6 pt-3 flex flex-col-reverse sm:flex-row gap-3">
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
