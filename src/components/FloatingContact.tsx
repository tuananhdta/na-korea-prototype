"use client";

import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Phone, Mail, MessageCircle, X, ShoppingBag } from "lucide-react";
import { ZaloLogo, GoogleGmailLogo, MessengerLogo, ZaloIconOnly } from "@/components/icons/BrandIcons";

export function FloatingContact() {
  const pathname = usePathname();
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isHeroPassed, setIsHeroPassed] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const widgetRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ startX: number; startY: number; initX: number; initY: number }>({
    startX: 0,
    startY: 0,
    initX: 0,
    initY: 0,
  });

  // Initialize position for desktop
  useEffect(() => {
    const initialFrame = window.requestAnimationFrame(() => {
      const initialY = Math.max(160, Math.min(window.innerHeight - 340, window.innerHeight * 0.35));
      const initialX = 16;
      setPosition({ x: initialX, y: initialY });
    });

    const handleResize = () => {
      setPosition((prev) => {
        if (!prev) return null;
        const clampedX = Math.min(Math.max(8, prev.x), 72);
        const clampedY = Math.min(Math.max(60, prev.y), window.innerHeight - 280);
        return { x: clampedX, y: clampedY };
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-floating-contact-hero]");

    if (!hero) {
      const frame = window.requestAnimationFrame(() => setIsHeroPassed(true));
      return () => window.cancelAnimationFrame(frame);
    }

    if (typeof window.IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => {
        setIsHeroPassed(hero.getBoundingClientRect().bottom <= 0);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroPassed(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
      },
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  // Mouse Drag Handlers for Desktop
  const handleMouseDown = (e: ReactMouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setHasMoved(false);

    const currentX = position?.x ?? 16;
    const currentY = position?.y ?? 200;

    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initX: currentX,
      initY: currentY,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - dragStartRef.current.startX;
      const deltaY = e.clientY - dragStartRef.current.startY;

      if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
        setHasMoved(true);
      }

      const newX = dragStartRef.current.initX + deltaX;
      const newY = dragStartRef.current.initY + deltaY;

      const widgetHeight = widgetRef.current?.offsetHeight || 260;
      const clampedX = Math.min(Math.max(8, newX), 72);
      const clampedY = Math.min(Math.max(70, newY), window.innerHeight - widgetHeight - 16);

      setPosition({ x: clampedX, y: clampedY });
    };

    const handleDragEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleDragEnd);
    };
  }, [isDragging]);

  const handleLinkClick = (e: ReactMouseEvent) => {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  if (!isHeroPassed) return null;

  return (
    <>
      {/* ─── 1. DESKTOP FLOATING BAR (Hidden on Mobile < md) ─── */}
      {position && (
        <div
          ref={widgetRef}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          className={`hidden md:block fixed z-50 select-none transition-[transform,opacity,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isDragging ? "cursor-grabbing shadow-2xl scale-105 opacity-95" : "cursor-grab"
          }`}
        >
          <div className="relative group/panel flex w-[52px] sm:w-[56px] flex-col items-center overflow-visible rounded-lg border border-white/15 bg-[#181818] py-1.5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.24)]">
            {/* Drag handle & Title */}
            <div
              onMouseDown={handleMouseDown}
              className="w-full flex flex-col items-center pt-1.5 pb-2 px-1 cursor-grab active:cursor-grabbing group/header"
              title="Nhấn và giữ để kéo thanh liên hệ đến vị trí tùy ý"
            >
              <div className="w-5 h-1 bg-white/40 rounded-full mb-1 group-hover/header:bg-white transition-colors" />
              <span className="text-[11px] sm:text-[12px] font-bold text-center leading-tight tracking-wide uppercase pointer-events-none drop-shadow-sm">
                Liên<br />hệ
              </span>
            </div>

            <div className="w-8/12 h-[1px] bg-white/30 my-0.5" />

            {/* 1. Phone Hotline */}
            <a
              href="tel:0903409939"
              onClick={handleLinkClick}
              aria-label="Gọi điện Hotline"
              className="group relative w-full py-2.5 flex items-center justify-center hover:bg-white/15 transition-colors"
            >
              <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-200">
                <Phone className="w-5 h-5 text-white animate-phone-ring" />
              </div>

              {/* Tooltip */}
              <div className="absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform -translate-x-2 group-hover:translate-x-0 border border-white/10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-ping" />
                <span>Hotline: <strong className="text-yellow-300 font-bold">090.340.9939</strong></span>
              </div>
            </a>

            <div className="w-8/12 h-[1px] bg-white/20 my-0.5" />

            {/* 2. Email Contact */}
            <a
              href="mailto:contact@nakorea.vn"
              onClick={handleLinkClick}
              aria-label="Gửi email liên hệ"
              className="group relative w-full py-2.5 flex items-center justify-center hover:bg-white/15 transition-colors"
            >
              <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-[#EA4335] group-hover:scale-110 transition-all duration-200">
                <Mail className="w-5 h-5 text-white" />
              </div>

              {/* Tooltip */}
              <div className="absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform -translate-x-2 group-hover:translate-x-0 border border-white/10">
                <span>Email: <strong className="text-yellow-300 font-bold">contact@nakorea.vn</strong></span>
              </div>
            </a>

            <div className="w-8/12 h-[1px] bg-white/20 my-0.5" />

            {/* 3. Zalo Chat */}
            <a
              href="https://zalo.me/0903409939"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              aria-label="Chat qua Zalo"
              className="group relative w-full py-2.5 flex items-center justify-center hover:bg-white/15 transition-colors"
            >
              <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-[#0068ff] group-hover:scale-110 transition-all duration-200 flex items-center justify-center">
                <ZaloLogo className="w-5 h-5" />
              </div>

              {/* Tooltip */}
              <div className="absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform -translate-x-2 group-hover:translate-x-0 border border-white/10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                <span>Chat Zalo tư vấn 24/7</span>
              </div>
            </a>

            <div className="w-8/12 h-[1px] bg-white/20 my-0.5" />

            {/* 4. Facebook Messenger */}
            <a
              href="https://m.me/KimRedGinseng"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              aria-label="Nhắn tin Facebook Messenger"
              className="group relative w-full py-2.5 pb-3 flex items-center justify-center hover:bg-white/15 transition-colors rounded-b-xl"
            >
              <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-[#0084ff] group-hover:scale-110 transition-all duration-200 flex items-center justify-center">
                <MessengerLogo className="w-5 h-5" />
              </div>

              {/* Tooltip */}
              <div className="absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform -translate-x-2 group-hover:translate-x-0 border border-white/10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0084ff] inline-block" />
                <span>Chat Messenger</span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* ─── 2. MOBILE FLOATING ACTION BUTTON (Visible on Mobile Only) ─── */}
      <div className="md:hidden fixed inset-x-4 bottom-4 z-40 flex flex-col items-stretch gap-2.5 pb-[env(safe-area-inset-bottom)]">
        {/* Expanded Options */}
        {mobileExpanded && (
          <div className="flex flex-col items-end gap-2 pb-1 animate-in fade-in slide-in-from-bottom-3 duration-200">
            {/* Phone Call */}
            <a
              href="tel:0903409939"
              className="flex items-center gap-2 rounded-full bg-emerald-600 text-white px-4 py-2 shadow-lg text-xs font-bold transition-transform active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Gọi 090.340.9939</span>
            </a>

            {/* Zalo */}
            <a
              href="https://zalo.me/0903409939"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#0068ff] text-white px-4 py-2 shadow-lg text-xs font-bold transition-transform active:scale-95"
            >
              <ZaloLogo className="w-4 h-4" />
              <span>Chat Zalo</span>
            </a>

            {/* Messenger */}
            <a
              href="https://m.me/KimRedGinseng"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#0084ff] text-white px-4 py-2 shadow-lg text-xs font-bold transition-transform active:scale-95 border border-white/20"
            >
              <MessengerLogo className="w-3.5 h-3.5" />
              <span>Messenger</span>
            </a>
          </div>
        )}

        {/* Two mobile actions: contact channels and product catalogue */}
        <div className="flex w-full items-center gap-2.5">
          <button
            type="button"
            onClick={() => setMobileExpanded(!mobileExpanded)}
            aria-label={mobileExpanded ? "Đóng liên hệ" : "Mở liên hệ"}
            className="flex h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-full border border-white/30 bg-gradient-to-br from-[#181818] to-[#B5222A] px-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(75,25,62,0.45)] transition-transform duration-200 active:scale-[0.98]"
          >
            {mobileExpanded ? (
              <X className="h-4 w-4 shrink-0" />
            ) : (
              <div className="relative flex shrink-0 items-center justify-center">
                <Phone className="h-4 w-4 animate-pulse" />
                <span className="absolute -right-1 -top-1 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
              </div>
            )}
            <span>Liên hệ</span>
          </button>

          <Link
            href="/san-pham"
            aria-label="Xem sản phẩm"
            className="flex h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-full border border-[#B5222A]/20 bg-white px-4 text-sm font-bold text-[#181818] shadow-[0_8px_20px_rgba(75,25,62,0.16)] transition-transform duration-200 active:scale-[0.98]"
          >
            <ShoppingBag className="h-4 w-4 shrink-0 text-[#B5222A]" />
            <span>Sản Phẩm</span>
          </Link>
        </div>
      </div>
    </>
  );
}
