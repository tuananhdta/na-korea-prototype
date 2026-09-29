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
      className="fixed inset-x-0 top-0 z-50 h-20 overflow-hidden border-b border-[#E5DFD3] bg-[#FFFDF8] text-[#2D2D2D] select-none shadow-sm transition-all duration-300"
      style={{
        background: `
          linear-gradient(to right, #FFFDF8, #FFF9ED, #FFFDF8),
          repeating-linear-gradient(0deg, transparent, transparent 19px, #EDE8DD33 19px, #EDE8DD33 20px),
          repeating-linear-gradient(90deg, transparent, transparent 19px, #EDE8DD33 19px, #EDE8DD33 20px)
        `,
      }}
    >
      {/* Accent Border Beams */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#B5222A]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#B5222A]/40 to-transparent" />

      {/* ─── Banner Content Link ─── */}
      <Link
        href="/san-pham"
        className="group relative flex h-full w-full items-center justify-center px-4"
        title="Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác"
      >
        {/* Center Slogan Capsule */}
        <div className="flex items-center gap-2.5 rounded-full border border-dashed border-[#B5222A]/30 bg-white/90 px-4 py-1.5 sm:px-7 sm:py-2 shadow-[0_4px_16px_rgba(181,34,42,0.08)] backdrop-blur-md transition-all group-hover:border-[#B5222A]/60 group-hover:shadow-[0_6px_20px_rgba(181,34,42,0.15)]">
          <span className="font-sans text-xs sm:text-base md:text-lg font-extrabold text-[#B5222A] tracking-wide whitespace-nowrap">
            Hồng sâm Kim
          </span>

          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#F0831F] animate-pulse shrink-0" />

          <span className="font-sans text-xs sm:text-sm md:text-base font-bold text-[#5A2B18] tracking-tight whitespace-nowrap">
            Nơi tận tâm trở thành kiệt tác
          </span>
        </div>
      </Link>

      {/* ─── Top Right Close Controls (Clean Goldsammall Style) ─── */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2 rounded-full border border-[#D5C9B8] bg-white/95 px-3 py-1 text-[11px] font-medium text-[#5A2B18] shadow-sm backdrop-blur-md transition-all hover:bg-white">
        <button
          type="button"
          onClick={handleDismissToday}
          className="flex items-center gap-1.5 text-xs text-[#5A2B18] transition-colors hover:text-[#B5222A] cursor-pointer whitespace-nowrap"
          title="Không hiển thị lại banner trong hôm nay"
        >
          <span className="h-3 w-3 rounded-xs border border-[#8C7565] flex items-center justify-center text-[9px] font-bold">
            ✓
          </span>
          <span className="hidden sm:inline">Không hiển thị hôm nay</span>
        </button>

        <span className="h-3 w-px bg-[#D5C9B8]" aria-hidden="true" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng banner"
          className="flex h-5 w-5 items-center justify-center rounded-full transition-colors hover:bg-black/5 hover:text-[#B5222A] cursor-pointer"
        >
          <X aria-hidden="true" className="h-3.5 w-3.5 text-[#5A2B18]" />
        </button>
      </div>
    </div>
  );
}
