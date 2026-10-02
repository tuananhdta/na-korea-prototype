"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export function CartNotificationToast() {
  const { notification, dismissNotification, openCart } = useCart();
  const [topOffset, setTopOffset] = useState<number>(180);

  useEffect(() => {
    const calculateHeaderBottom = () => {
      if (typeof document === "undefined") return;
      const headerEl = document.querySelector("header");
      if (headerEl) {
        const rect = headerEl.getBoundingClientRect();
        // Position directly below header with a 10px spacing
        setTopOffset(Math.round(rect.bottom + 10));
      } else {
        setTopOffset(100);
      }
    };

    calculateHeaderBottom();
    window.addEventListener("scroll", calculateHeaderBottom, { passive: true });
    window.addEventListener("resize", calculateHeaderBottom, { passive: true });
    return () => {
      window.removeEventListener("scroll", calculateHeaderBottom);
      window.removeEventListener("resize", calculateHeaderBottom);
    };
  }, [notification?.isOpen]);

  if (!notification || !notification.isOpen || !notification.product) return null;

  const { product } = notification;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{ top: `${topOffset}px` }}
      className="fixed right-4 sm:right-6 lg:right-10 z-[9990] max-w-[calc(100vw-32px)] sm:max-w-md w-full animate-in slide-in-from-top-3 fade-in duration-300 pointer-events-auto transition-[top] duration-150 ease-out"
    >
      <div className="flex items-center gap-3 sm:gap-4 bg-white border border-[#E5E5E5] border-l-[4px] border-l-[#2E7D32] rounded-lg p-3 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.14)]">
        {/* Product Thumbnail */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-[#FAFAFA] border border-[#EEEEEE] overflow-hidden shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="56px"
            className="object-contain p-0.5"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0 pr-1">
          <p className="text-xs sm:text-[14px] font-bold text-[#111111] leading-snug">
            Đã thêm sản phẩm vào giỏ hàng!
          </p>
        </div>

        {/* Action Button: "Xem giỏ hàng" */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => {
              dismissNotification();
              openCart();
            }}
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white rounded text-xs sm:text-[13px] font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer"
          >
            Xem giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}
