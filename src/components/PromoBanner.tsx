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
    <div
      className="fixed inset-x-0 top-0 z-50 h-20 w-full overflow-hidden border-b border-[#E5E2D9]"
      style={{
        backgroundColor: "#F8F7F2",
        backgroundImage: `
          linear-gradient(to right, rgba(229, 226, 217, 0.5) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(229, 226, 217, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
        backgroundPosition: "center center",
      }}
    >
      {/* 100% Perfectly Centered Content Wrapper */}
      <div className="relative mx-auto flex h-full w-full max-w-[1320px] items-center justify-center px-8 sm:px-12">
        <div className="relative flex h-full items-center justify-center py-1">
          {/* Main Centered Content (Hat + Text + Badge + Ginseng Mascot) */}
          <Image
            src="/images/top_banner_content.png"
            alt="Gold Sam Mall Top Banner"
            width={1880}
            height={250}
            priority
            className="h-14 sm:h-16 md:h-[70px] w-auto max-w-[calc(100vw-70px)] sm:max-w-none object-contain pointer-events-none select-none drop-shadow-2xs"
          />
        </div>
      </div>

      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Đóng banner"
        className="absolute right-2.5 sm:right-5 top-1/2 -translate-y-1/2 z-30 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-xs transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
      >
        <X aria-hidden="true" className="h-4 w-4" />
      </button>
    </div>
  );
}
