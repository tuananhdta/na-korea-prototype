"use client";

import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { usePathname } from "next/navigation";
import { Phone, Mail, MessageSquare, GripVertical, X } from "lucide-react";

export function FloatingContact() {
  const pathname = usePathname();
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHeroPassed, setIsHeroPassed] = useState(false);
  
  const widgetRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ startX: number; startY: number; initX: number; initY: number }>({
    startX: 0,
    startY: 0,
    initX: 0,
    initY: 0,
  });

  // Initialize position on client side
  useEffect(() => {
    const initialFrame = window.requestAnimationFrame(() => {
      const initialY = Math.max(160, Math.min(window.innerHeight - 340, window.innerHeight * 0.35));
      const initialX = 16; // 16px from left
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

  // Mouse Drag Handlers
  const handleMouseDown = (e: ReactMouseEvent) => {
    // Only start drag if left click
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

  // Touch Drag Handlers
  const handleTouchStart = (e: ReactTouchEvent) => {
    if (e.touches.length !== 1) return;
    setIsDragging(true);
    setHasMoved(false);

    const touch = e.touches[0];
    const currentX = position?.x ?? (window.innerWidth - 72);
    const currentY = position?.y ?? 200;

    dragStartRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
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

      // Bound within viewport
      const widgetHeight = widgetRef.current?.offsetHeight || 260;
      const clampedX = Math.min(Math.max(8, newX), 72);
      const clampedY = Math.min(Math.max(70, newY), window.innerHeight - widgetHeight - 16);

      setPosition({ x: clampedX, y: clampedY });
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const touch = e.touches[0];

      const deltaX = touch.clientX - dragStartRef.current.startX;
      const deltaY = touch.clientY - dragStartRef.current.startY;

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
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleDragEnd);
      window.addEventListener("touchcancel", handleDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleDragEnd);
      window.removeEventListener("touchcancel", handleDragEnd);
    };
  }, [isDragging]);

  const handleLinkClick = (e: ReactMouseEvent) => {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  if (!position || !isHeroPassed) return null;

  return (
    <div
      ref={widgetRef}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className={`fixed z-50 select-none touch-none transition-[transform,opacity,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isDragging ? "cursor-grabbing shadow-2xl scale-105 opacity-95" : "cursor-grab"
      }`}
    >
      <div className="relative group/panel flex w-[52px] flex-col items-center overflow-visible rounded-xl border border-white/20 bg-gradient-to-b from-[#4B193E] via-[#3a1330] to-[#250a1e] py-1 text-white shadow-[0_14px_30px_rgba(44,13,35,0.3)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_22px_44px_rgba(44,13,35,0.42)] sm:w-[56px]">
        {/* Drag handle & Title */}
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          className="w-full flex flex-col items-center pt-2 pb-2 px-1 cursor-grab active:cursor-grabbing group/header"
          title="Nhấn và giữ để kéo thanh liên hệ đến vị trí tùy ý"
        >
          {/* Subtle drag bar indicator */}
          <div className="w-5 h-1 bg-white/40 rounded-full mb-1 group-hover/header:bg-white transition-colors" />
          <span className="text-[11px] sm:text-[12px] font-bold text-center leading-tight tracking-wide uppercase pointer-events-none drop-shadow-sm">
            Liên<br />hệ
          </span>
        </div>

        <div className="w-8/12 h-[1px] bg-white/30 my-0.5" />

        {/* 1. Phone Hotline */}
        <a
          href="tel:0982701198"
          onClick={handleLinkClick}
          aria-label="Gọi điện Hotline"
          className="group relative w-full py-2.5 flex items-center justify-center hover:bg-white/15 transition-colors"
        >
          <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-[#b5222a] group-hover:scale-110 transition-all duration-200">
            <Phone className="w-5 h-5 text-white animate-pulse" />
          </div>

          {/* Left Tooltip */}
          <div className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform translate-x-2 group-hover:translate-x-0 border border-white/10 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-ping" />
            <span>Hotline: <strong className="text-yellow-300 font-bold">0982.701.198</strong></span>
          </div>
        </a>

        <div className="w-8/12 h-[1px] bg-white/20 my-0.5" />

        {/* 2. Email Contact */}
        <a
          href="mailto:contact@kimsredginseng.com"
          onClick={handleLinkClick}
          aria-label="Gửi email liên hệ"
          className="group relative w-full py-2.5 flex items-center justify-center hover:bg-white/15 transition-colors"
        >
          <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-[#b5222a] group-hover:scale-110 transition-all duration-200">
            <Mail className="w-5 h-5 text-white" />
          </div>

          {/* Left Tooltip */}
          <div className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform translate-x-2 group-hover:translate-x-0 border border-white/10">
            <span>Email: <strong className="text-yellow-300 font-bold">contact@kimsredginseng.com</strong></span>
          </div>
        </a>

        <div className="w-8/12 h-[1px] bg-white/20 my-0.5" />

        {/* 3. Zalo Chat */}
        <a
          href="https://zalo.me/0982701198"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          aria-label="Chat qua Zalo"
          className="group relative w-full py-2.5 flex items-center justify-center hover:bg-white/15 transition-colors"
        >
          <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-[#0068ff] group-hover:scale-110 transition-all duration-200 flex items-center justify-center">
            {/* Custom crisp Zalo SVG Logo */}
            <svg
              className="w-5 h-5 fill-current text-white"
              viewBox="0 0 48 48"
            >
              <path d="M24 4C12.95 4 4 12.06 4 22c0 5.68 2.94 10.74 7.6 14.16-.33 2.45-1.22 5.56-2.52 7.67-.18.29.07.65.4.56 3.66-1.02 7.78-3.05 10.42-4.52C21.28 40.23 22.62 40.4 24 40.4c11.05 0 20-8.06 20-18.4S35.05 4 24 4z" fill="#0068ff"/>
              <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif">
                Zalo
              </text>
            </svg>
          </div>

          {/* Left Tooltip */}
          <div className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform translate-x-2 group-hover:translate-x-0 border border-white/10 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
            <span>Chat Zalo tư vấn 24/7</span>
          </div>
        </a>

        <div className="w-8/12 h-[1px] bg-white/20 my-0.5" />

        {/* 4. Facebook Messenger */}
        <a
          href="https://m.me/kimsredginseng"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          aria-label="Nhắn tin Facebook Messenger"
          className="group relative w-full py-2.5 pb-3 flex items-center justify-center hover:bg-white/15 transition-colors rounded-b-xl"
        >
          <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-[#0084ff] group-hover:scale-110 transition-all duration-200 flex items-center justify-center">
            {/* Custom crisp Messenger SVG Logo */}
            <svg
              className="w-5 h-5 fill-current text-white"
              viewBox="0 0 28 28"
            >
              <path d="M14 2C7.37 2 2 7.14 2 13.5c0 3.62 1.76 6.86 4.52 8.97V26l3.37-1.85c1.29.36 2.67.55 4.11.55 6.63 0 12-5.14 12-11.5S20.63 2 14 2zm1.2 15.5l-3.07-3.27-5.99 3.27 6.59-7 3.14 3.27 5.92-3.27-6.59 7z" />
            </svg>
          </div>

          {/* Left Tooltip */}
          <div className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform translate-x-2 group-hover:translate-x-0 border border-white/10 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0084ff] inline-block" />
            <span>Chat Messenger</span>
          </div>
        </a>

        {/* Floating drag cue tag (shows on hover) */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-medium text-white/70 bg-black/60 px-1.5 py-0.5 rounded shadow opacity-0 group-hover/panel:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Kéo thả
        </div>
      </div>
    </div>
  );
}
