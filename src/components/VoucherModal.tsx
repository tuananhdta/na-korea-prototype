"use client";

import React, { useState } from "react";
import { X, CheckCircle2, AlertCircle } from "lucide-react";
import { formatNumberToVnd } from "@/context/CartContext";

export interface Voucher {
  code: string;
  title: string;
  description: string;
  type: "percent" | "fixed";
  value: number;
  minSpend: number;
  badge?: string;
  expiryDate: string;
  terms: string;
}

export const SYSTEM_VOUCHERS: Voucher[] = [
  {
    code: "BANMOI80",
    title: "Voucher 80K",
    description: "Giảm 80k cho đơn Online đầu tiên từ 399k",
    type: "fixed",
    value: 80000,
    minSpend: 399000,
    badge: "Lựa chọn tốt nhất",
    expiryDate: "2026-12-31",
    terms: "Áp dụng cho khách hàng mới và đơn hàng từ 399.000₫ trở lên.",
  },
  {
    code: "CANIFA50",
    title: "Voucher 50K",
    description: "Giảm 50k cho đơn từ 699k",
    type: "fixed",
    value: 50000,
    minSpend: 699000,
    badge: "Ưu đãi riêng bạn",
    expiryDate: "2026-12-31",
    terms: "Áp dụng cho đơn hàng từ 699.000₫ trở lên.",
  },
  {
    code: "KIMS50",
    title: "Voucher 50K",
    description: "Giảm 50.000₫ cho đơn từ 500k",
    type: "fixed",
    value: 50000,
    minSpend: 500000,
    badge: "Ưu đãi riêng bạn",
    expiryDate: "2026-12-31",
    terms: "Áp dụng cho đơn hàng từ 500.000₫ trở lên.",
  },
  {
    code: "NAKOREA",
    title: "Voucher 10%",
    description: "Giảm 10% tổng giá trị đơn hàng từ 1.000.000₫",
    type: "percent",
    value: 10,
    minSpend: 1000000,
    badge: "Lựa chọn tốt nhất",
    expiryDate: "2026-12-31",
    terms: "Giảm tối đa 10% trên tổng giá trị sản phẩm khi đơn hàng đạt từ 1.000.000₫.",
  },
  {
    code: "TRIAN",
    title: "Voucher 100K",
    description: "Giảm 100.000₫ tri ân khách hàng thân thiết cho đơn từ 2.000.000₫",
    type: "fixed",
    value: 100000,
    minSpend: 2000000,
    badge: "Khách hàng thân thiết",
    expiryDate: "2026-12-31",
    terms: "Áp dụng cho đơn hàng từ 2.000.000₫ trở lên.",
  },
];

interface VoucherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (voucher: Voucher) => void;
  currentCode?: string | null;
  orderTotal: number;
}

export function VoucherModal({
  isOpen,
  onClose,
  onApply,
  currentCode,
  orderTotal,
}: VoucherModalProps) {
  const [selectedCode, setSelectedCode] = useState<string>(currentCode || "BANMOI80");
  const [inputCode, setInputCode] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [activeConditionCode, setActiveConditionCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleApplyInput = () => {
    setErrorMsg("");
    const clean = inputCode.trim().toUpperCase();
    if (!clean) {
      setErrorMsg("Vui lòng nhập mã ưu đãi");
      return;
    }

    const found = SYSTEM_VOUCHERS.find((v) => v.code === clean);
    if (!found) {
      setErrorMsg("Mã ưu đãi không hợp lệ hoặc đã hết hạn");
      return;
    }

    if (orderTotal < found.minSpend) {
      setErrorMsg(
        `Đơn hàng cần đạt tối thiểu ${formatNumberToVnd(found.minSpend)} để sử dụng mã này`
      );
      return;
    }

    setSelectedCode(found.code);
    setErrorMsg("");
  };

  const handleConfirm = () => {
    setErrorMsg("");
    const voucher = SYSTEM_VOUCHERS.find((v) => v.code === selectedCode);
    if (!voucher) {
      setErrorMsg("Vui lòng chọn một mã ưu đãi");
      return;
    }

    if (orderTotal < voucher.minSpend) {
      setErrorMsg(
        `Đơn hàng cần đạt tối thiểu ${formatNumberToVnd(voucher.minSpend)} để sử dụng mã này`
      );
      return;
    }

    onApply(voucher);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] bg-black/25 flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150 pointer-events-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-[560px] w-full max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150 ring-1 ring-black/5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative px-6 py-4.5 border-b border-[#EEEEEE] flex items-center justify-center bg-white shrink-0">
          <h3 className="font-bold text-base sm:text-lg text-[#111111] uppercase tracking-wide text-center">
            MÃ ƯU ĐÃI
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-gray-500 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 divide-y-0">
          {/* Input Coupon Row */}
          <div className="space-y-1.5">
            <div className="flex gap-2.5">
              <input
                type="text"
                value={inputCode}
                onChange={(e) => {
                  setInputCode(e.target.value);
                  setErrorMsg("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleApplyInput();
                  }
                }}
                placeholder="Nhập mã ưu đãi"
                className="flex-1 px-4 py-2.5 rounded-lg border border-[#D0D7DE] text-xs sm:text-sm text-[#111111] placeholder:text-[#888888] uppercase focus:outline-none focus:border-[#B5222A] bg-white transition-colors"
              />
              <button
                type="button"
                onClick={handleApplyInput}
                disabled={!inputCode.trim()}
                className={`px-5 sm:px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer ${
                  inputCode.trim()
                    ? "bg-[#181818] hover:bg-[#B5222A] text-white"
                    : "bg-[#F0F2F5] text-[#8C939D] cursor-not-allowed"
                }`}
              >
                ÁP DỤNG
              </button>
            </div>

            {errorMsg && (
              <p className="text-xs text-red-600 flex items-center gap-1 pt-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMsg}</span>
              </p>
            )}
          </div>

          {/* Vouchers List */}
          <div className="space-y-4 pt-1">
            {SYSTEM_VOUCHERS.map((v) => {
              const isSelected = selectedCode === v.code;
              const isEligible = orderTotal >= v.minSpend;

              return (
                <div
                  key={v.code}
                  onClick={() => {
                    setSelectedCode(v.code);
                    setErrorMsg("");
                  }}
                  className={`relative rounded-xl border transition-all duration-200 cursor-pointer flex items-stretch ${
                    v.badge ? "mt-3" : ""
                  } ${
                    isSelected
                      ? "border-[#D32F2F] bg-[#FFF8F8] shadow-xs"
                      : "border-[#DCE2EA] bg-[#F8F9FB] hover:border-gray-400"
                  } ${!isEligible ? "opacity-75" : ""}`}
                >
                  {/* Badge Ribbon (Elevated at Top Left) */}
                  {v.badge && (
                    <div className="absolute -top-3 left-3 z-10">
                      <span className="inline-flex items-center bg-[#439333] text-white text-[10.5px] font-bold px-2.5 py-0.5 rounded-xs shadow-xs">
                        {v.badge}
                      </span>
                    </div>
                  )}

                  {/* Left Ticket Content */}
                  <div className="flex-1 p-3.5 sm:p-4 min-w-0">
                    <h4 className="font-bold text-sm sm:text-base text-[#111111] leading-tight">
                      {v.title}
                    </h4>
                    <p className="text-xs text-[#555555] mt-1 leading-snug">
                      {v.description}
                    </p>

                    <div className="mt-2 text-xs text-[#666666] flex items-center gap-1.5 flex-wrap">
                      <span>Mã:</span>
                      <span className="font-bold text-[#111111] font-mono bg-[#EBF0F5] px-2 py-0.5 rounded text-xs">
                        {v.code}
                      </span>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-gray-200/80 flex items-center justify-between text-[11px] text-[#777777]">
                      <span>HSD: {v.expiryDate}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveConditionCode(
                            activeConditionCode === v.code ? null : v.code
                          );
                        }}
                        className="font-semibold text-[#111111] hover:underline cursor-pointer"
                      >
                        Điều kiện
                      </button>
                    </div>

                    {/* Condition Expandable Note */}
                    {activeConditionCode === v.code && (
                      <div className="mt-2 p-2.5 bg-white rounded-lg border border-gray-200 text-[11px] text-[#444444] animate-in fade-in duration-150">
                        <p>{v.terms}</p>
                        <p className="mt-1 font-semibold text-[#B5222A]">
                          Đơn hiện tại: {formatNumberToVnd(orderTotal)} / Cần tối thiểu:{" "}
                          {formatNumberToVnd(v.minSpend)}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Vertical Dashed Line & Selector */}
                  <div className="w-14 sm:w-16 border-l border-dashed border-[#CCD4DE] flex items-center justify-center bg-transparent shrink-0">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected
                          ? "border-[#D32F2F] bg-white ring-2 ring-[#D32F2F]/20"
                          : "border-[#9CA3AF] bg-white"
                      }`}
                    >
                      {isSelected && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#D32F2F]" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#EEEEEE] bg-white shrink-0">
          <button
            type="button"
            onClick={handleConfirm}
            className="w-full py-3.5 sm:py-4 rounded-lg bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer active:scale-[0.99]"
          >
            ÁP DỤNG
          </button>
        </div>
      </div>
    </div>
  );
}
