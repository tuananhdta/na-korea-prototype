"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { FlipPage } from "./FlipPage";

// Dynamically import HTMLFlipBook without SSR to avoid hydration mismatch
const HTMLFlipBook: any = dynamic(
  () => import("react-pageflip").then((mod: any) => mod.default || mod),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[550px] w-full items-center justify-center rounded-2xl bg-[#F7F5F0] text-sm text-[#4B193E]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-9 w-9 animate-spin rounded-full border-3 border-[#B5222A] border-t-transparent" />
          <span className="font-semibold tracking-wide">Đang khởi tạo E-Catalog 3D...</span>
        </div>
      </div>
    ),
  }
);

interface FlipBookViewerProps {
  pages: string[];
  title: string;
  pdfDownloadUrl?: string;
  aspectRatio?: "portrait" | "landscape";
}

export function FlipBookViewer({
  pages,
  title,
  aspectRatio = "portrait",
}: FlipBookViewerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(pages.length);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 460, height: 650 });
  const [isMounted, setIsMounted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const flipBookRef = useRef<any>(null);

  // Responsive book dimension calculation
  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth || window.innerWidth;
    const isMobile = containerWidth < 768;

    if (aspectRatio === "portrait") {
      // 2-page spread on desktop, 1-page on mobile
      if (isMobile) {
        const w = Math.min(containerWidth - 32, 380);
        const h = Math.round(w * 1.414);
        setDimensions({ width: w, height: h });
      } else {
        const maxWidthAvailable = Math.min(containerWidth - 96, 1080);
        const pageW = Math.round(maxWidthAvailable / 2);
        const pageH = Math.round(pageW * 1.414);
        setDimensions({
          width: Math.min(pageW, 520),
          height: Math.min(pageH, 735),
        });
      }
    } else {
      // Landscape presentation format (16:9)
      if (isMobile) {
        const w = Math.min(containerWidth - 32, 420);
        const h = Math.round((w * 9) / 16);
        setDimensions({ width: w, height: h });
      } else {
        const maxWidthAvailable = Math.min(containerWidth - 64, 1000);
        const w = Math.round(maxWidthAvailable / 2);
        const h = Math.round((w * 9) / 16);
        setDimensions({
          width: Math.min(w, 540),
          height: Math.min(h, 304),
        });
      }
    }
  }, [aspectRatio]);

  useEffect(() => {
    setIsMounted(true);
    setTotalPages(pages.length);
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [pages.length, updateDimensions]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFull = !!document.fullscreenElement;
      setIsFullscreen(isFull);
      setTimeout(updateDimensions, 100);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [updateDimensions]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "f" || e.key === "F") {
        if (!e.metaKey && !e.ctrlKey) {
          toggleFullscreen();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNext = () => {
    if (flipBookRef.current) {
      try {
        flipBookRef.current.pageFlip().flipNext();
      } catch {
        // Fallback
      }
    }
  };

  const handlePrev = () => {
    if (flipBookRef.current) {
      try {
        flipBookRef.current.pageFlip().flipPrev();
      } catch {
        // Fallback
      }
    }
  };

  const handleFirst = () => {
    if (flipBookRef.current) {
      try {
        flipBookRef.current.pageFlip().turnToPage(0);
      } catch {}
    }
  };

  const handleLast = () => {
    if (flipBookRef.current) {
      try {
        flipBookRef.current.pageFlip().turnToPage(totalPages - 1);
      } catch {}
    }
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fullscreen not supported or blocked
    }
  };

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  // Helper text for current spread / page
  const getPageIndicator = () => {
    if (currentPage === 0) {
      return "Trang Bìa Trước";
    }
    if (currentPage >= totalPages - 1) {
      return "Trang Bìa Sau";
    }
    const rightPage = currentPage + 1;
    if (rightPage < totalPages) {
      return `Trang ${currentPage} - ${rightPage} / ${totalPages}`;
    }
    return `Trang ${currentPage} / ${totalPages}`;
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center justify-between rounded-3xl border border-[#E8E4DA] bg-gradient-to-b from-[#FDFBF7] to-[#F5F2EA] p-4 shadow-xl transition-all duration-300 sm:p-6 lg:p-8 ${
        isFullscreen ? "h-screen w-screen rounded-none p-4 !bg-[#1A1815] text-white" : ""
      }`}
    >
      {/* ═══ Top Header Toolbar ═══ */}
      <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-3 border-b border-[#E6E1D5]/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4B193E] text-[#F0831F] shadow-sm">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h2 className={`font-sans text-base font-bold tracking-tight sm:text-lg ${isFullscreen ? "text-white" : "text-[#2D2D2D]"}`}>
              {title}
            </h2>
          </div>
        </div>

        {/* Quick Action Tools */}
        <div className="flex items-center gap-2">
          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
              isFullscreen
                ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "border-[#DCD7CB] bg-white text-[#4B4F52] hover:bg-[#F2EFE8]"
            }`}
            title={isFullscreen ? "Thoát toàn màn hình" : "Xem toàn màn hình (Phím F)"}
            aria-label="Toàn màn hình"
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* ═══ Main 3D Book Stage ═══ */}
      <div className="relative my-2 flex w-full flex-1 items-center justify-center overflow-hidden py-4">
        {/* Left Click Navigation Zone */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentPage === 0}
          aria-label="Trang trước"
          className="group absolute left-1 sm:left-2 z-30 flex h-14 w-10 sm:h-16 sm:w-12 items-center justify-center rounded-r-xl bg-black/35 text-white backdrop-blur-md transition-all hover:w-14 hover:bg-[#B5222A] disabled:pointer-events-none disabled:opacity-0"
        >
          <ChevronLeft className="h-6 w-6 stroke-[2.5] transition-transform group-hover:-translate-x-0.5" />
        </button>

        {/* Right Click Navigation Zone */}
        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage >= totalPages - 1}
          aria-label="Trang sau"
          className="group absolute right-1 sm:right-2 z-30 flex h-14 w-10 sm:h-16 sm:w-12 items-center justify-center rounded-l-xl bg-black/35 text-white backdrop-blur-md transition-all hover:w-14 hover:bg-[#B5222A] disabled:pointer-events-none disabled:opacity-0"
        >
          <ChevronRight className="h-6 w-6 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* 3D Realistic Book Shell with Spine Depth Shadow */}
        <div className="relative flex items-center justify-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]">
          {isMounted && (
            <HTMLFlipBook
              ref={flipBookRef}
              width={dimensions.width}
              height={dimensions.height}
              size="fixed"
              minWidth={280}
              maxWidth={560}
              minHeight={390}
              maxHeight={780}
              maxShadowOpacity={0.45}
              showCover={true}
              mobileScrollSupport={true}
              drawShadow={true}
              flippingTime={700}
              usePortrait={true}
              startPage={0}
              startZIndex={0}
              autoSize={true}
              clickEventForward={true}
              useMouseEvents={true}
              swipeDistance={30}
              showPageCorners={true}
              disableFlipByClick={false}
              onFlip={onFlip}
              className="flip-book-shadow overflow-hidden rounded-sm"
              style={{ margin: "0 auto" }}
            >
              {pages.map((imgSrc, index) => (
                <FlipPage
                  key={index}
                  pageNumber={index + 1}
                  totalPages={totalPages}
                  imageSrc={imgSrc}
                  isCover={index === 0}
                  isBackCover={index === pages.length - 1}
                />
              ))}
            </HTMLFlipBook>
          )}
        </div>
      </div>

      {/* ═══ Bottom Navigation & Progress Toolbar ═══ */}
      <div className="mt-3 flex w-full flex-wrap items-center justify-between gap-3 border-t border-[#E6E1D5]/80 pt-3">
        {/* Page Jump Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleFirst}
            disabled={currentPage === 0}
            className={`flex h-8 w-8 items-center justify-center rounded-md border text-xs transition-colors disabled:opacity-30 ${
              isFullscreen
                ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "border-[#DCD7CB] bg-white text-[#4B4F52] hover:bg-[#F2EFE8]"
            }`}
            title="Về trang đầu tiên"
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`flex h-8 items-center gap-1 rounded-md border px-2.5 text-xs font-semibold transition-colors disabled:opacity-30 ${
              isFullscreen
                ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "border-[#DCD7CB] bg-white text-[#4B4F52] hover:bg-[#F2EFE8]"
            }`}
            title="Lật trang trước (Phím Mũi tên Trái)"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Trang trước</span>
          </button>
        </div>

        {/* Current Page / Total Pages Badge */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full border border-[#DCD7CB] bg-white/90 px-4 py-1 text-xs font-bold text-[#4B193E] shadow-2xs backdrop-blur-xs">
            <span>{getPageIndicator()}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1}
            className={`flex h-8 items-center gap-1 rounded-md border px-2.5 text-xs font-semibold transition-colors disabled:opacity-30 ${
              isFullscreen
                ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "border-[#DCD7CB] bg-white text-[#4B4F52] hover:bg-[#F2EFE8]"
            }`}
            title="Lật trang sau (Phím Mũi tên Phải)"
          >
            <span className="hidden sm:inline">Trang sau</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={handleLast}
            disabled={currentPage >= totalPages - 1}
            className={`flex h-8 w-8 items-center justify-center rounded-md border text-xs transition-colors disabled:opacity-30 ${
              isFullscreen
                ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "border-[#DCD7CB] bg-white text-[#4B4F52] hover:bg-[#F2EFE8]"
            }`}
            title="Đến trang cuối cùng"
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
