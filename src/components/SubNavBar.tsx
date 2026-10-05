"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SubNavItem {
  title: string;
  href: string;
}

interface SubNavBarProps {
  items: SubNavItem[];
  currentHref: string;
}

export function SubNavBar({ items, currentHref }: SubNavBarProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = navRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [items]);

  const scroll = (direction: "left" | "right") => {
    if (navRef.current) {
      const scrollAmount = direction === "left" ? -160 : 160;
      navRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="relative w-full border-t border-white/15 bg-black/25 backdrop-blur-xs text-white z-20">
      <div className="relative max-w-[1240px] mx-auto px-1 sm:px-6">
        {/* Left Arrow Icon */}
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center transition-all cursor-pointer"
            aria-label="Cuộn menu sang trái"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Right Arrow Icon */}
        {canScrollRight && (
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center transition-all cursor-pointer animate-pulse"
            aria-label="Cuộn menu sang phải"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {/* Scrollable Sub-Nav Bar */}
        <nav
          ref={navRef}
          aria-label="Menu danh mục con"
          className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-4 overflow-x-auto py-2.5 px-7 sm:px-0 text-xs sm:text-sm font-semibold tracking-wide scrollbar-none scroll-smooth whitespace-nowrap"
        >
          {items.map((item) => {
            const isActive =
              currentHref === item.href ||
              (item.href === "/nhan-sam" && currentHref === "/hong-sam");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-white text-[#181818] font-bold shadow-sm"
                    : "text-white/80 hover:text-white hover:bg-white/10 font-medium"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
