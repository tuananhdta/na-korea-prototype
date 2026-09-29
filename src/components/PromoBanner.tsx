"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

  const handleDismissToday = () => {
    const today = new Date().toDateString();
    localStorage.setItem("na_top_banner_dismissed", today);
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="PJ_popup_head"
      aria-label="Thanh banner ưu đãi Goldsammall"
      className="fixed inset-x-0 top-0 z-50 h-[80px] overflow-hidden bg-[#0F0406] text-white border-b border-black/20 shadow-md transition-all duration-300"
    >
      {/* ─── Goldsammall Background Banner Image (Responsive Desktop & Mobile) ─── */}
      <Link
        href="/san-pham"
        className="group relative block h-full w-full overflow-hidden"
        title="Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác"
      >
        {/* Desktop Banner Image (Hidden on Mobile) */}
        <div className="hidden sm:block absolute inset-0 w-full h-full">
          <Image
            src="https://cdn-saas-web-219-244.cdn-nhncommerce.com/pg2304_godomall_com/data/skin/front/8design/img/banner/slider_2893533255/5bd669e275cee0274fac8c9934f93823_53756.jpg"
            alt="Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        {/* Mobile Banner Image (Visible on Mobile) */}
        <div className="block sm:hidden absolute inset-0 w-full h-full">
          <Image
            src="https://cdn-saas-web-219-244.cdn-nhncommerce.com/pg2304_godomall_com/data/skin/front/8design/img/banner/slider_3549783502/6b97f33c325ba526fdfe82e11609abea_91159.jpg"
            alt="Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        {/* Subtle Dark Gradient Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-black/25 transition-opacity group-hover:bg-black/15" />

        {/* ─── Center Overlay Slogan: "Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác" ─── */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1240px] items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 rounded-full border border-dashed border-[#F0831F]/40 bg-black/40 px-4 py-1.5 sm:px-7 sm:py-2 shadow-lg backdrop-blur-md transition-all group-hover:border-[#B5222A]">
            <span className="font-sans text-xs sm:text-base md:text-lg font-extrabold text-[#F0831F] tracking-wide whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Hồng sâm Kim
            </span>

            <span className="mx-1 inline-flex h-1.5 w-1.5 rounded-full bg-[#B5222A] animate-pulse shrink-0" />

            <span className="font-sans text-xs sm:text-sm md:text-base font-bold text-white tracking-tight whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Nơi tận tâm trở thành kiệt tác
            </span>
          </div>
        </div>
      </Link>

      {/* ─── Top Right Close Controls (PJ_popup_head_close style 100% like Goldsammall) ─── */}
      <div className="PJ_popup_head_close absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md shadow-lg transition-all hover:bg-black/80">
        <button
          type="button"
          onClick={handleDismissToday}
          className="flex items-center gap-1.5 text-xs text-gray-200 transition-colors hover:text-[#F0831F] cursor-pointer whitespace-nowrap"
          title="Không hiển thị lại banner trong hôm nay"
        >
          <span className="h-3 w-3 rounded-xs border border-white/60 flex items-center justify-center text-[9px] font-bold">
            ✓
          </span>
          <span className="hidden sm:inline">Không hiển thị hôm nay</span>
        </button>

        <span className="h-3 w-px bg-white/30" aria-hidden="true" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng banner"
          className="flex h-5 w-5 items-center justify-center rounded-full transition-colors hover:bg-white/20 hover:text-red-400 cursor-pointer"
        >
          <X aria-hidden="true" className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
