"use client";

import React, { forwardRef, useState } from "react";
import Image from "next/image";

interface FlipPageProps {
  pageNumber: number;
  totalPages: number;
  imageSrc: string;
  isCover?: boolean;
  isBackCover?: boolean;
}

export const FlipPage = forwardRef<HTMLDivElement, FlipPageProps>(
  ({ pageNumber, totalPages, imageSrc, isCover = false, isBackCover = false }, ref) => {
    const [loaded, setLoaded] = useState(false);
    const isEven = pageNumber % 2 === 0;

    return (
      <div
        ref={ref}
        className={`page-container relative h-full w-full select-none overflow-hidden bg-[#FDFDFD] shadow-sm ${
          isCover
            ? "rounded-r-sm shadow-[inset_-5px_0_15px_rgba(0,0,0,0.15),0_10px_30px_rgba(0,0,0,0.25)]"
            : isBackCover
            ? "rounded-l-sm shadow-[inset_5px_0_15px_rgba(0,0,0,0.15),0_10px_30px_rgba(0,0,0,0.25)]"
            : isEven
            ? "border-r border-[#EEEEEE] shadow-[inset_-8px_0_12px_rgba(0,0,0,0.06)]"
            : "border-l border-[#EEEEEE] shadow-[inset_8px_0_12px_rgba(0,0,0,0.06)]"
        }`}
      >
        {/* Subtle Spine & Paper Texture Gradient */}
        {!isCover && !isBackCover && (
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 z-10 w-8 ${
              isEven
                ? "right-0 bg-gradient-to-l from-black/12 via-black/4 to-transparent"
                : "left-0 bg-gradient-to-r from-black/12 via-black/4 to-transparent"
            }`}
          />
        )}

        {/* Loading Skeleton */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#F5F3EF] text-xs font-medium text-[#8A8477]">
            <div className="flex flex-col items-center gap-2">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#B5222A] border-t-transparent" />
              <span>Đang tải trang {pageNumber}...</span>
            </div>
          </div>
        )}

        {/* Page Image */}
        <div className="relative h-full w-full">
          <Image
            src={imageSrc}
            alt={`Trang ${pageNumber}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
            priority={pageNumber <= 4}
            onLoad={() => setLoaded(true)}
            className={`object-contain transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Bottom Corner Page Number Badge (Excluding Covers) */}
        {!isCover && !isBackCover && (
          <div
            className={`absolute bottom-2.5 z-20 flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-black/60 backdrop-blur-xs ${
              isEven ? "left-3" : "right-3"
            }`}
          >
            <span>{pageNumber}</span>
          </div>
        )}
      </div>
    );
  }
);

FlipPage.displayName = "FlipPage";
