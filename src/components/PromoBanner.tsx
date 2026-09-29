"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

/* ─── Mascot 1: Bé Củ Sâm Pung-i (풍이) ─── */
function PungiMascot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="none" className={className} aria-hidden="true">
      <ellipse cx="40" cy="52" rx="18" ry="22" fill="#E8C87A" />
      <ellipse cx="40" cy="52" rx="16" ry="20" fill="#F2D98B" />
      <ellipse cx="40" cy="48" rx="10" ry="12" fill="#F7E5A8" opacity="0.6" />
      <path d="M30 70 Q28 82 24 90" stroke="#D4A84A" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M36 72 Q35 84 33 92" stroke="#D4A84A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M44 72 Q45 84 47 92" stroke="#D4A84A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M50 70 Q52 82 56 90" stroke="#D4A84A" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M22 50 Q14 46 10 42" stroke="#D4A84A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M58 50 Q66 46 70 42" stroke="#D4A84A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <ellipse cx="40" cy="33" rx="22" ry="6" fill="#8B6F47" />
      <path d="M24 33 Q26 18 40 15 Q54 18 56 33" fill="#A0845C" />
      <path d="M28 33 Q30 22 40 19 Q50 22 52 33" fill="#B89A6E" />
      <rect x="26" y="31" width="28" height="3" rx="1.5" fill="#B5222A" />
      <path d="M33 46 Q35 43 37 46" stroke="#5C3A1E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M43 46 Q45 43 47 46" stroke="#5C3A1E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="30" cy="50" rx="4" ry="2.5" fill="#F4A89A" opacity="0.6" />
      <ellipse cx="50" cy="50" rx="4" ry="2.5" fill="#F4A89A" opacity="0.5" />
      <path d="M35 53 Q40 58 45 53" stroke="#5C3A1E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M26 60 Q30 65 40 66 Q50 65 54 60" stroke="#B5222A" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ─── Mascot 2: Bé Quả Sâm Berry (베리) ─── */
function BerryMascot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="none" className={className} aria-hidden="true">
      <circle cx="40" cy="55" r="20" fill="#C03030" />
      <circle cx="40" cy="55" r="18" fill="#D14040" />
      <ellipse cx="34" cy="48" rx="6" ry="8" fill="#E06060" opacity="0.5" />
      <g className="animate-[sway_3s_ease-in-out_infinite]" style={{ transformOrigin: "40px 36px" }}>
        <path d="M38 36 Q32 22 28 18" stroke="#5DA34E" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="26" cy="17" rx="5" ry="3" fill="#6DB85A" transform="rotate(-30 26 17)" />
        <path d="M42 36 Q48 22 52 18" stroke="#5DA34E" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="54" cy="17" rx="5" ry="3" fill="#6DB85A" transform="rotate(30 54 17)" />
      </g>
      <circle cx="34" cy="52" r="3.5" fill="white" />
      <circle cx="46" cy="52" r="3.5" fill="white" />
      <circle cx="35" cy="52" r="2" fill="#2D1810" />
      <circle cx="47" cy="52" r="2" fill="#2D1810" />
      <ellipse cx="28" cy="57" rx="4" ry="2.5" fill="#E8807A" opacity="0.5" />
      <ellipse cx="52" cy="57" rx="4" ry="2.5" fill="#E8807A" opacity="0.5" />
      <path d="M35 60 Q40 65 45 60" stroke="#7A1E1E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

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
      className="fixed inset-x-0 top-0 z-50 h-20 overflow-hidden border-b border-[#E5DFD3] text-[#2D2D2D] select-none shadow-sm transition-all duration-300"
      style={{
        background: `
          linear-gradient(to right, #FFFDF8, #FFF9ED, #FFFDF8),
          repeating-linear-gradient(0deg, transparent, transparent 19px, #EDE8DD33 19px, #EDE8DD33 20px),
          repeating-linear-gradient(90deg, transparent, transparent 19px, #EDE8DD33 19px, #EDE8DD33 20px)
        `,
      }}
    >
      {/* Accent Borders */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#B5222A]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#B5222A]/40 to-transparent" />

      {/* ─── PJ_popup_head_close (Exact Goldsammall Close Button Style) ─── */}
      <button
        type="button"
        onClick={handleDismissToday}
        className="PJ_popup_head_close absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex items-center gap-1.5 rounded-full border border-[#D5C9B8] bg-white/95 px-3 py-1 text-xs text-[#5A2B18] backdrop-blur-md transition-all hover:bg-white cursor-pointer shadow-sm"
        title="Không hiển thị lại banner trong hôm nay"
      >
        <span className="text-[11px] font-medium tracking-tight">Không hiển thị hôm nay</span>
        <img
          src="https://cdn-saas-web-219-244.cdn-nhncommerce.com/pg2304_godomall_com/data/skin/front/8design/img/banner/8be8c7954e8da2880584b233f523db44_70505.png"
          alt="Đóng banner hôm nay"
          className="h-3.5 w-3.5 object-contain"
        />
      </button>

      {/* ─── Banner Link & Mascot Content ─── */}
      <Link
        href="/san-pham"
        className="group relative flex h-full w-full items-center justify-center px-4"
        title="Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác"
      >
        <div className="relative flex items-center justify-center">
          {/* Left: Berry Mascot */}
          <div className="absolute right-full mr-3 sm:mr-5 bottom-[-16px] hidden sm:flex w-12 md:w-14 items-end pointer-events-none">
            <div className="animate-[bounce-gentle_2.5s_ease-in-out_infinite]">
              <BerryMascot className="w-full drop-shadow-sm" />
            </div>
          </div>

          {/* Center: Slogan Capsule */}
          <div className="flex items-center gap-2 sm:gap-3 rounded-full border border-dashed border-[#B5222A]/30 bg-white/90 px-4 py-1.5 sm:px-7 sm:py-2 shadow-[0_4px_16px_rgba(181,34,42,0.08)] backdrop-blur-md transition-all group-hover:border-[#B5222A]/60 group-hover:shadow-[0_6px_20px_rgba(181,34,42,0.15)]">
            <span className="font-sans text-xs sm:text-base md:text-lg font-extrabold text-[#B5222A] tracking-wide whitespace-nowrap">
              Hồng sâm Kim
            </span>

            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#F0831F] animate-pulse shrink-0" />

            <span className="font-sans text-xs sm:text-sm md:text-base font-bold text-[#5A2B18] tracking-tight whitespace-nowrap">
              Nơi tận tâm trở thành kiệt tác
            </span>
          </div>

          {/* Right: Pung-i Mascot */}
          <div className="absolute left-full ml-3 sm:ml-5 bottom-[-16px] hidden sm:flex w-12 md:w-14 items-end pointer-events-none">
            <div className="animate-[bounce-gentle_3s_ease-in-out_0.5s_infinite]">
              <PungiMascot className="w-full drop-shadow-sm" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
