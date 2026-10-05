"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface PromoBannerProps {
  visible: boolean;
  onClose: () => void;
}

export function PromoBanner({ visible, onClose }: PromoBannerProps) {
  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-20 w-full overflow-hidden border-b border-[#EEEEEE] bg-[#F8F7F2]">
      {/* 100% Full Width Edge-to-Edge Banner Container (Zero Side Margins) */}
      <div className="relative h-20 w-full overflow-hidden flex items-center justify-center">
        <div className="relative h-20 w-[2400px] shrink-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Image
            src="/images/top_banner_goldsammall.jpg"
            alt="Gold Sam Mall Top Banner"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center pointer-events-none select-none"
          />
        </div>
      </div>

      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Đóng banner"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-xs transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
      >
        <X aria-hidden="true" className="h-4 w-4" />
      </button>
    </div>
  );
}
