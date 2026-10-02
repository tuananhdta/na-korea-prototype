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
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
} from "lucide-react";
import { FlipPage } from "./FlipPage";

// Dynamically import HTMLFlipBook without SSR to avoid hydration mismatch
const HTMLFlipBook: any = dynamic(
  () => import("react-pageflip").then((mod: any) => mod.default || mod),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[550px] w-full items-center justify-center rounded-2xl bg-[#F8F8F8] text-sm text-[#181818]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-9 w-9 animate-spin rounded-full border-3 border-[#4B193E] border-t-transparent" />
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

  // Zoom & Pan state
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const flipBookRef = useRef<any>(null);

  const isZoomed = zoomLevel > 1;

  // Responsive book dimension calculation
  const updateDimensions = useCallback(() => {
    const activeRef = isZoomed ? modalContainerRef.current : containerRef.current;
    const containerWidth = activeRef?.clientWidth || (typeof window !== "undefined" ? window.innerWidth : 1200);
    const isMobile = containerWidth < 768;

    if (aspectRatio === "portrait") {
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
      // Landscape presentation format (16:9) - 50% larger base size for enhanced readability
      if (isMobile) {
        const w = Math.min(containerWidth - 32, 540);
        const h = Math.round((w * 9) / 16);
        setDimensions({ width: w, height: h });
      } else {
        const maxWidthAvailable = Math.min(containerWidth - 48, 1200);
        const pageW = Math.round(maxWidthAvailable * 0.68);
        const pageH = Math.round((pageW * 9) / 16);
        setDimensions({
          width: Math.min(pageW, 810),
          height: Math.min(pageH, 456),
        });
      }
    }
  }, [aspectRatio, isZoomed]);

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

  // Prevent body scroll when Lightbox Modal is active
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  // Zoom handlers
  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => {
      const next = Math.min(prev + 0.3, 2.5);
      return Number(next.toFixed(2));
    });
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.3, 1);
      if (next === 1) {
        setPanPosition({ x: 0, y: 0 });
      }
      return Number(next.toFixed(2));
    });
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, []);

  // Keyboard navigation & zoom shortcuts
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
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      } else if (e.key === "Escape" && isZoomed) {
        handleResetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleZoomIn, handleZoomOut, handleResetZoom, isZoomed]);

  // Navigation handlers (reset pan position when flipping)
  const handleNext = () => {
    if (flipBookRef.current) {
      try {
        setPanPosition({ x: 0, y: 0 });
        flipBookRef.current.pageFlip().flipNext();
      } catch {
        // Fallback
      }
    }
  };

  const handlePrev = () => {
    if (flipBookRef.current) {
      try {
        setPanPosition({ x: 0, y: 0 });
        flipBookRef.current.pageFlip().flipPrev();
      } catch {
        // Fallback
      }
    }
  };

  const handleFirst = () => {
    if (flipBookRef.current) {
      try {
        setPanPosition({ x: 0, y: 0 });
        flipBookRef.current.pageFlip().turnToPage(0);
      } catch {}
    }
  };

  const handleLast = () => {
    if (flipBookRef.current) {
      try {
        setPanPosition({ x: 0, y: 0 });
        flipBookRef.current.pageFlip().turnToPage(totalPages - 1);
      } catch {}
    }
  };

  const toggleFullscreen = async () => {
    const targetRef = isZoomed ? modalContainerRef : containerRef;
    if (!targetRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await targetRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fullscreen not supported or blocked
    }
  };

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
    setPanPosition({ x: 0, y: 0 });
  };

  // Pan dragging handlers when zoomed in
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isZoomed) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - panPosition.x,
      y: e.clientY - panPosition.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isZoomed) return;
    const maxPanX = (dimensions.width * zoomLevel) / 1.5;
    const maxPanY = (dimensions.height * zoomLevel) / 1.5;

    const newX = Math.max(Math.min(e.clientX - dragStartRef.current.x, maxPanX), -maxPanX);
    const newY = Math.max(Math.min(e.clientY - dragStartRef.current.y, maxPanY), -maxPanY);

    setPanPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isZoomed || e.touches.length !== 1) return;
    setIsDragging(true);
    const touch = e.touches[0];
    dragStartRef.current = {
      x: touch.clientX - panPosition.x,
      y: touch.clientY - panPosition.y,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isZoomed || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const maxPanX = (dimensions.width * zoomLevel) / 1.5;
    const maxPanY = (dimensions.height * zoomLevel) / 1.5;

    const newX = Math.max(Math.min(touch.clientX - dragStartRef.current.x, maxPanX), -maxPanX);
    const newY = Math.max(Math.min(touch.clientY - dragStartRef.current.y, maxPanY), -maxPanY);

    setPanPosition({ x: newX, y: newY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    if (isZoomed) {
      handleResetZoom();
    } else {
      setZoomLevel(1.6);
    }
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

  const zoomPercent = Math.round(zoomLevel * 100);

  // Shared Book Render Element
  const renderBookStage = () => (
    <div
      className={`relative flex items-center justify-center transition-transform duration-150 ease-out select-none ${
        isZoomed
          ? isDragging
            ? "cursor-grabbing drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]"
            : "cursor-grab drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
          : "drop-shadow-[0_12px_28px_rgba(0,0,0,0.14)]"
      }`}
      style={{
        transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
        transformOrigin: "center center",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onDoubleClick={handleDoubleClick}
    >
      {isMounted && (
        <HTMLFlipBook
          ref={flipBookRef}
          width={dimensions.width}
          height={dimensions.height}
          size="fixed"
          minWidth={280}
          maxWidth={aspectRatio === "landscape" ? 810 : 560}
          minHeight={250}
          maxHeight={aspectRatio === "landscape" ? 850 : 780}
          maxShadowOpacity={0.4}
          showCover={true}
          mobileScrollSupport={!isZoomed}
          drawShadow={true}
          flippingTime={700}
          usePortrait={true}
          startPage={0}
          startZIndex={0}
          autoSize={true}
          clickEventForward={!isZoomed}
          useMouseEvents={!isZoomed}
          swipeDistance={30}
          showPageCorners={!isZoomed}
          disableFlipByClick={isZoomed}
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
  );

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          MODE 1: LIGHTBOX MODAL OVERLAY (KHI ZOOM > 100%)
          - Bỏ hoàn toàn khung hộp kem cồng kềnh
          - Nền đen mờ cao cấp bg-black/92 backdrop-blur-md
          - Khung điều khiển Glassmorphism nổi tinh tế
         ═══════════════════════════════════════════════════════════════════ */}
      {isZoomed && (
        <div
          ref={modalContainerRef}
          role="dialog"
          aria-label={`Phóng to ${title}`}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-black/92 p-4 sm:p-6 backdrop-blur-md text-white select-none animate-in fade-in duration-200"
        >
          {/* Top Glassmorphic Controls Bar */}
          <div className="flex w-full max-w-[1240px] items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md shadow-2xl z-50">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4B193E] text-[#D4A359] shadow-sm">
                <BookOpen className="h-4 w-4" />
              </div>
              <h2 className="font-sans text-sm font-bold tracking-tight sm:text-base text-white truncate max-w-[200px] sm:max-w-md">
                {title}
              </h2>
            </div>

            {/* Quick Action Tools */}
            <div className="flex items-center gap-2">
              {/* Zoom Out Button */}
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                title="Thu nhỏ (Phím -)"
                aria-label="Thu nhỏ"
              >
                <ZoomOut className="h-4 w-4" />
              </button>

              {/* Zoom Percentage Badge */}
              <button
                type="button"
                onClick={handleResetZoom}
                className="flex h-9 min-w-[70px] items-center justify-center gap-1.5 rounded-lg border border-[#D4A359] bg-[#4B193E] px-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#38132e] cursor-pointer"
                title="Bấm để thu nhỏ về 100% (Phím Esc)"
                aria-label="Đặt lại zoom"
              >
                <span>{zoomPercent}%</span>
                <RotateCcw className="h-3 w-3 text-[#D4A359]" />
              </button>

              {/* Zoom In Button */}
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.5}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                title="Phóng to (Phím +)"
                aria-label="Phóng to"
              >
                <ZoomIn className="h-4 w-4" />
              </button>

              <div className="mx-1 h-5 w-[1px] bg-white/20" />

              {/* Fullscreen Toggle */}
              <button
                type="button"
                onClick={toggleFullscreen}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
                title={isFullscreen ? "Thoát toàn màn hình" : "Xem toàn màn hình (Phím F)"}
                aria-label="Toàn màn hình"
              >
                {isFullscreen ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </button>

              {/* Close Lightbox Modal Button */}
              <button
                type="button"
                onClick={handleResetZoom}
                className="flex h-9 items-center gap-1.5 rounded-lg bg-white/20 px-3 text-xs font-semibold text-white transition-colors hover:bg-red-600 cursor-pointer"
                title="Đóng chế độ phóng to (Phím Esc)"
                aria-label="Thoát phóng to"
              >
                <X className="h-4 w-4" />
                <span className="hidden sm:inline">Thoát Zoom</span>
              </button>
            </div>
          </div>

          {/* Main Stage Area in Modal */}
          <div className="relative my-auto flex w-full flex-1 items-center justify-center overflow-hidden py-4">
            {/* Drag Hint Badge */}
            <div className="pointer-events-none absolute top-2 z-50 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-1.5 text-xs font-medium text-white shadow-xl backdrop-blur-md">
              <span>Kéo chuột để di chuyển</span>
              <span className="opacity-40">•</span>
              <span>Double click hoặc bấm ESC để thoát</span>
            </div>

            {/* Floating Left Navigation Button */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentPage === 0}
              aria-label="Trang trước"
              className="group absolute left-2 sm:left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-[#4B193E] disabled:pointer-events-none disabled:opacity-0 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6 stroke-[2.5] transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Floating Right Navigation Button */}
            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage >= totalPages - 1}
              aria-label="Trang sau"
              className="group absolute right-2 sm:right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-[#4B193E] disabled:pointer-events-none disabled:opacity-0 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
            </button>

            {renderBookStage()}
          </div>

          {/* Bottom Glassmorphic Navigation Bar */}
          <div className="flex w-full max-w-[1240px] items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md shadow-2xl z-50">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleFirst}
                disabled={currentPage === 0}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-xs text-white transition-colors hover:bg-white/20 disabled:opacity-30 cursor-pointer"
                title="Về trang đầu tiên"
              >
                <ChevronsLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="flex h-8 items-center gap-1 rounded-lg border border-white/20 bg-white/10 px-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20 disabled:opacity-30 cursor-pointer"
                title="Trang trước"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Trang trước</span>
              </button>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-1 text-xs font-bold text-white shadow-inner">
              <span>{getPageIndicator()}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleNext}
                disabled={currentPage >= totalPages - 1}
                className="flex h-8 items-center gap-1 rounded-lg border border-white/20 bg-white/10 px-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20 disabled:opacity-30 cursor-pointer"
                title="Trang sau"
              >
                <span className="hidden sm:inline">Trang sau</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={handleLast}
                disabled={currentPage >= totalPages - 1}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-xs text-white transition-colors hover:bg-white/20 disabled:opacity-30 cursor-pointer"
                title="Đến trang cuối cùng"
              >
                <ChevronsRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          MODE 2: NORMAL PAGE VIEW (KHI ZOOM === 100%)
          - Giao diện tối giản, sạch sẽ, bỏ viền kem thô cũ
          - Bo góc rounded-2xl, border-gray-200/80 nhẹ nhàng
         ═══════════════════════════════════════════════════════════════════ */}
      <div
        ref={containerRef}
        className={`relative flex flex-col items-center justify-between rounded-2xl border border-gray-200/80 bg-white p-4 sm:p-6 shadow-2xs transition-all duration-300 text-[#111111] ${
          isFullscreen ? "h-screen w-screen rounded-none p-4 !bg-[#181818] text-white" : ""
        }`}
      >
        {/* Top Header Toolbar */}
        <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#181818] text-[#D4A359] shadow-2xs">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h2 className={`font-sans text-base font-bold tracking-tight sm:text-lg ${isFullscreen ? "text-white" : "text-[#111111]"}`}>
                {title}
              </h2>
            </div>
          </div>

          {/* Quick Action Tools */}
          <div className="flex items-center gap-2">
            {/* Zoom In Button */}
            <button
              type="button"
              onClick={handleZoomIn}
              className={`flex h-9 items-center gap-1.5 rounded-lg border px-3 text-xs font-semibold transition-colors cursor-pointer ${
                isFullscreen
                  ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                  : "border-gray-200 bg-gray-50 text-gray-800 hover:bg-[#4B193E] hover:text-white hover:border-[#4B193E]"
              }`}
              title="Phóng to tài liệu (Phím +)"
              aria-label="Phóng to"
            >
              <ZoomIn className="h-4 w-4" />
              <span>Phóng to</span>
            </button>

            <div className="mx-1 h-5 w-[1px] bg-gray-200" />

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors cursor-pointer ${
                isFullscreen
                  ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                  : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-black"
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

        {/* Main 3D Book Stage */}
        <div className="relative my-2 flex w-full flex-1 items-center justify-center overflow-hidden py-4">
          {/* Left Navigation Zone - Proposal 1 Glassmorphic Circle */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentPage === 0}
            aria-label="Trang trước"
            className="group absolute left-2 sm:left-4 z-30 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-200/80 bg-white/85 text-[#4B193E] shadow-md backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-[#4B193E] hover:text-white hover:border-[#4B193E] disabled:pointer-events-none disabled:opacity-0 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 stroke-[2.5] transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Right Navigation Zone - Proposal 1 Glassmorphic Circle */}
          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1}
            aria-label="Trang sau"
            className="group absolute right-2 sm:right-4 z-30 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-200/80 bg-white/85 text-[#4B193E] shadow-md backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-[#4B193E] hover:text-white hover:border-[#4B193E] disabled:pointer-events-none disabled:opacity-0 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
          </button>

          {renderBookStage()}
        </div>

        {/* Bottom Navigation & Progress Toolbar */}
        <div className="mt-3 flex w-full flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-3">
          {/* Page Jump Controls */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleFirst}
              disabled={currentPage === 0}
              className={`flex h-8 w-8 items-center justify-center rounded-lg border text-xs transition-colors disabled:opacity-30 cursor-pointer ${
                isFullscreen
                  ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                  : "border-gray-200 bg-white text-[#333333] hover:bg-gray-100"
              }`}
              title="Về trang đầu tiên"
            >
              <ChevronsLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`flex h-8 items-center gap-1 rounded-lg border px-2.5 text-xs font-semibold transition-colors disabled:opacity-30 cursor-pointer ${
                isFullscreen
                  ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                  : "border-gray-200 bg-white text-[#333333] hover:bg-gray-100"
              }`}
              title="Lật trang trước (Phím Mũi tên Trái)"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Trang trước</span>
            </button>
          </div>

          {/* Current Page / Total Pages Badge */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1 text-xs font-bold text-[#181818] shadow-2xs">
              <span>{getPageIndicator()}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleNext}
              disabled={currentPage >= totalPages - 1}
              className={`flex h-8 items-center gap-1 rounded-lg border px-2.5 text-xs font-semibold transition-colors disabled:opacity-30 cursor-pointer ${
                isFullscreen
                  ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                  : "border-gray-200 bg-white text-[#333333] hover:bg-gray-100"
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
              className={`flex h-8 w-8 items-center justify-center rounded-lg border text-xs transition-colors disabled:opacity-30 cursor-pointer ${
                isFullscreen
                  ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                  : "border-gray-200 bg-white text-[#333333] hover:bg-gray-100"
              }`}
              title="Đến trang cuối cùng"
            >
              <ChevronsRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
