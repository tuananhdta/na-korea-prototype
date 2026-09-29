"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface PromoBannerProps {
  visible: boolean;
  onClose: () => void;
}

export function PromoBanner({ visible, onClose }: PromoBannerProps) {
  useEffect(() => {
    // Check if dismissed for today
    const dismissedDate = localStorage.getItem("na_top_banner_dismissed");
    const today = new Date().toDateString();

    if (dismissedDate === today) {
      onClose();
    }
  }, [onClose]);

  const handleDismissToday = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const today = new Date().toDateString();
    localStorage.setItem("na_top_banner_dismissed", today);
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="PJ_popup_head"
      aria-label="Thanh banner ưu đãi"
      className="fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-[#E5DFD3] bg-[#FFFDF8] text-[#2D2D2D] select-none shadow-sm transition-all duration-300"
    >
      <div className="relative w-full overflow-hidden">
        {/* ─── PJ_popup_head_close (Exact Goldsammall Close Button Style) ─── */}
        <button
          type="button"
          onClick={handleDismissToday}
          className="PJ_popup_head_close absolute right-4 sm:right-8 top-3.5 z-30 flex items-center gap-1.5 rounded-full border border-[#D5C9B8] bg-white/95 px-3 py-1 text-xs text-[#5A2B18] backdrop-blur-md transition-all hover:bg-white cursor-pointer shadow-sm"
          title="Không hiển thị lại banner trong hôm nay"
        >
          <span className="text-[11px] font-medium tracking-tight">Không hiển thị hôm nay</span>
          <img
            src="https://cdn-saas-web-219-244.cdn-nhncommerce.com/pg2304_godomall_com/data/skin/front/8design/img/banner/8be8c7954e8da2880584b233f523db44_70505.png"
            alt="Đóng banner hôm nay"
            className="h-3.5 w-3.5 object-contain"
          />
        </button>

        {/* ─── Banner Link & Image Layer ─── */}
        <Link
          href="/san-pham"
          className="group relative block w-full overflow-hidden"
          title="Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác"
        >
          {/* Desktop Banner Image */}
          <div className="hidden md:block relative h-[80px] w-full overflow-hidden">
            <img
              src="https://cdn-saas-web-219-244.cdn-nhncommerce.com/pg2304_godomall_com/data/skin/front/8design/img/banner/slider_2893533255/5bd669e275cee0274fac8c9934f93823_53756.jpg"
              alt="Background Goldsammall"
              className="absolute left-1/2 top-0 h-[80px] w-[2000px] max-w-none -translate-x-1/2 object-cover"
            />
          </div>

          {/* Mobile Banner Image */}
          <div className="block md:hidden relative h-[70px] w-full overflow-hidden">
            <img
              src="https://cdn-saas-web-219-244.cdn-nhncommerce.com/pg2304_godomall_com/data/skin/front/8design/img/banner/slider_3549783502/6b97f33c325ba526fdfe82e11609abea_91159.jpg"
              alt="Background Goldsammall Mobile"
              className="absolute left-1/2 top-0 h-[70px] w-[1500px] max-w-none -translate-x-1/2 object-cover"
            />
          </div>

          {/* ─── Solution 1: CSS Patch Masking (Covering Korean Text completely) ─── */}
          <div
            className="absolute inset-0 z-10 flex items-center justify-center px-4 pr-32 sm:pr-40"
            style={{
              background: `
                radial-gradient(ellipse at center, #FFFDF8 45%, rgba(255,253,248,0.95) 70%, transparent 100%)
              `,
            }}
          >
            {/* Vietnamese Slogan Capsule */}
            <div className="flex items-center gap-2 rounded-full border border-dashed border-[#B5222A]/30 bg-white/95 px-4 py-1.5 sm:px-7 sm:py-2 shadow-[0_4px_16px_rgba(181,34,42,0.08)] backdrop-blur-md transition-all group-hover:border-[#B5222A]/60 group-hover:shadow-[0_6px_20px_rgba(181,34,42,0.15)]">
              <span className="font-sans text-xs sm:text-base md:text-lg font-extrabold text-[#B5222A] tracking-wide whitespace-nowrap">
                Hồng sâm Kim
              </span>

              <span className="mx-1 inline-flex h-1.5 w-1.5 rounded-full bg-[#F0831F] animate-pulse shrink-0" />

              <span className="font-sans text-xs sm:text-sm md:text-base font-bold text-[#5A2B18] tracking-tight whitespace-nowrap">
                Nơi tận tâm trở thành kiệt tác
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
