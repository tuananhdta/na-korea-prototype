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
  const [dontShowToday, setDontShowToday] = useState(false);

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
      aria-label="Thanh ưu đãi hàng đầu"
      className="fixed inset-x-0 top-0 z-50 h-20 overflow-hidden border-b border-black/10 bg-[#1A0609] text-white select-none shadow-md transition-all duration-300"
    >
      {/* ─── Banner Background Image Container (Responsive Desktop & Mobile) ─── */}
      <Link
        href="/san-pham"
        className="group relative block h-full w-full overflow-hidden"
        title="Đăng ký nhận ưu đãi đặc quyền Hồng sâm Kim"
      >
        {/* Desktop Banner Image (Hidden on Mobile) */}
        <div className="hidden sm:block absolute inset-0 w-full h-full">
          <Image
            src="https://cdn-saas-web-219-244.cdn-nhncommerce.com/pg2304_godomall_com/data/skin/front/8design/img/banner/slider_2893533255/5bd669e275cee0274fac8c9934f93823_53756.jpg"
            alt="Ưu đãi thành viên Hồng sâm Kim 6 năm tuổi"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Mobile Banner Image (Visible on Mobile) */}
        <div className="block sm:hidden absolute inset-0 w-full h-full">
          <Image
            src="https://cdn-saas-web-219-244.cdn-nhncommerce.com/pg2304_godomall_com/data/skin/front/8design/img/banner/slider_3549783502/6b97f33c325ba526fdfe82e11609abea_91159.jpg"
            alt="Ưu đãi thành viên Hồng sâm Kim 6 năm tuổi"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Subtle Dark Gradient Overlay for High Contrast Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/50 pointer-events-none" />
      </Link>

      {/* ─── Close Bar & "Don't show today" Checkbox (Top Right Overlay) ─── */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md shadow-lg border border-white/15">
        <button
          type="button"
          onClick={handleDismissToday}
          className="flex items-center gap-1.5 transition-colors hover:text-[#F0831F] cursor-pointer"
          title="Không hiển thị lại banner trong hôm nay"
        >
          <span className="h-3 w-3 rounded-xs border border-white/60 flex items-center justify-center text-[9px] font-bold">
            ✓
          </span>
          <span className="hidden md:inline whitespace-nowrap">Không hiển thị hôm nay</span>
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
