"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      aria-label="Thanh banner ưu đãi Goldsammall"
      className="fixed inset-x-0 top-0 z-50 overflow-hidden bg-[#0F0406] text-white shadow-md transition-all duration-300"
    >
      <div className="relative w-full overflow-hidden">
        {/* ─── PJ_popup_head_close (100% Exact Goldsammall Close Button & Image) ─── */}
        <button
          type="button"
          onClick={handleDismissToday}
          className="PJ_popup_head_close absolute right-4 sm:right-8 top-3 z-30 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white/90 backdrop-blur-md transition-all hover:bg-black/80 hover:text-white cursor-pointer shadow-lg border border-white/20"
          title="Không hiển thị lại banner trong hôm nay"
        >
          <span className="text-[11px] font-medium tracking-tight">Không hiển thị hôm nay</span>
          <img
            src="https://cdn-saas-web-219-244.cdn-nhncommerce.com/pg2304_godomall_com/data/skin/front/8design/img/banner/8be8c7954e8da2880584b233f523db44_70505.png"
            alt="Đóng banner hôm nay"
            className="h-3.5 w-3.5 object-contain"
          />
        </button>

        {/* ─── Banner Link & Content ─── */}
        <Link
          href="/san-pham"
          className="group relative block w-full overflow-hidden"
          title="Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác"
        >
          {/* 1. Desktop Banner (Width 2000px, Height 80px, Centered like Goldsammall CSS) */}
          <div className="hidden md:block relative h-[80px] w-full overflow-hidden">
            <img
              src="https://cdn-saas-web-219-244.cdn-nhncommerce.com/pg2304_godomall_com/data/skin/front/8design/img/banner/slider_2893533255/5bd669e275cee0274fac8c9934f93823_53756.jpg"
              alt="Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác"
              className="absolute left-1/2 top-0 h-[80px] w-[2000px] max-w-none -translate-x-1/2 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
          </div>

          {/* 2. Mobile Banner (Width 1500px, Height 70px, Centered like Goldsammall CSS) */}
          <div className="block md:hidden relative h-[70px] w-full overflow-hidden">
            <img
              src="https://cdn-saas-web-219-244.cdn-nhncommerce.com/pg2304_godomall_com/data/skin/front/8design/img/banner/slider_3549783502/6b97f33c325ba526fdfe82e11609abea_91159.jpg"
              alt="Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác"
              className="absolute left-1/2 top-0 h-[70px] w-[1500px] max-w-none -translate-x-1/2 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
          </div>

        </Link>
      </div>
    </div>
  );
}
