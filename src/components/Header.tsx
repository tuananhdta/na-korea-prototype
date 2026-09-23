"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, ShoppingBag, X } from "lucide-react";
import { navItems } from "@/lib/navigation";
import { BRAND_LOGOS } from "@/lib/logos";
import { useCart } from "@/context/CartContext";
import { MobileDrawer } from "./MobileDrawer";

interface HeaderProps {
  onOpenMobileMenu?: () => void;
  overlay?: boolean;
}

export function Header({ onOpenMobileMenu, overlay = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { totalCount, openCart } = useCart();
  const headerOffset = isBannerVisible ? "top-20 sm:top-16" : "top-0";
  const pageSpacerHeight = isBannerVisible
    ? isScrolled
      ? "h-36 sm:h-32"
      : "h-40 sm:h-36"
    : isScrolled
      ? "h-16"
      : "h-20";
  const submenuOffset = isBannerVisible
    ? isScrolled
      ? "top-36 sm:top-32"
      : "top-40 sm:top-36"
    : isScrolled
      ? "top-16"
      : "top-20";

  return (
    <>
      {isBannerVisible && (
        <div className="fixed inset-x-0 top-0 z-50 h-20 overflow-hidden border-b border-[#E5E5E5] bg-[#FFFCFA] sm:h-16">
          <div className="relative mx-auto flex h-full max-w-[1180px] flex-col items-center justify-center px-10 py-2 text-center sm:flex-row sm:gap-2 sm:px-8 sm:pr-16 sm:text-left md:gap-4 md:px-16 md:pr-20">
            <p className="banner-text font-sans text-[11px] font-bold leading-[1.15] tracking-[0.01em] text-[#B5222A] sm:whitespace-nowrap sm:text-[14px] md:text-[18px]">
              Đăng ký thành viên mới sẽ được tặng điểm
              <span className="block sm:inline"> có thể sử dụng ngay!</span>
            </p>
            <span className="mt-1 inline-flex shrink-0 items-center rounded-full bg-[#B5222A] px-4 py-1 text-[10px] font-bold leading-none text-white sm:mt-0 sm:px-3 sm:py-1 sm:text-xs md:px-5 md:py-1.5 md:text-sm">
              Đăng ký ngay <span aria-hidden="true" className="ml-1 text-base leading-none">›</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsBannerVisible(false)}
            aria-label="Đóng banner"
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center text-[#4B193E] transition-colors hover:text-[#B5222A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5222A] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:right-6 sm:top-1/2 sm:-translate-y-1/2"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      )}

      {!overlay && (
        <div
          aria-hidden="true"
          className={`shrink-0 transition-[height] duration-400 ease-in-out ${pageSpacerHeight} ${overlay ? "bg-transparent" : "bg-[#4B193E]"}`}
        />
      )}

      <header
        onMouseLeave={() => setActiveMenu(null)}
        className={`fixed left-0 right-0 ${headerOffset} z-50 text-white transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          overlay && !isScrolled ? "bg-transparent shadow-none" : "bg-[#4B193E]/95 backdrop-blur-sm"
        } ${isScrolled ? "shadow-[0_12px_30px_rgba(33,11,28,0.24)]" : "shadow-none"}`}
      >
        <div
          className={`mx-auto flex max-w-[1180px] items-center justify-between px-6 transition-all duration-400 ease-in-out sm:px-8 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          <Link
            href="/"
            className="relative block h-12 w-40 shrink-0 transition-transform duration-300 hover:scale-[1.03]"
          >
            <Image
              src={BRAND_LOGOS.horizontalWhite}
              alt="6년근 김정환홍삼 | Kim's Red Ginseng"
              fill
              sizes="160px"
              className="object-contain object-left drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]"
              preload
            />
          </Link>

        <nav className="hidden h-full flex-1 items-center justify-end gap-0.5 lg:flex xl:gap-1.5">
          {navItems.map((item) => {
            const isItemActive = activeMenu === item.title;
            return (
              <div
                key={item.title}
                className="relative flex h-full items-center"
                onMouseEnter={() => setActiveMenu(item.title)}
                onFocus={() => setActiveMenu(item.title)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setActiveMenu(null);
                  }
                }}
              >
                <Link
                  href={item.href}
                  aria-haspopup={item.subItems ? "menu" : undefined}
                  aria-expanded={item.subItems ? isItemActive : undefined}
                  className={`relative flex h-full min-w-[74px] max-w-[132px] items-center justify-center gap-1 px-2 text-center text-[14px] font-medium leading-[1.15] tracking-[0.03em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.75)] transition-all duration-200 xl:px-2.5 ${
                    isItemActive
                      ? "text-[#FFD8DB]"
                      : "text-white hover:text-[#FFF7F7]"
                  }`}
                >
                  <span>{item.title}</span>
                  {item.subItems && (
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-3 w-3 shrink-0 transition-transform duration-200 ${
                        isItemActive ? "rotate-180 text-[#FFD8DB]" : "text-white/80"
                      }`}
                    />
                  )}

                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-2 right-2 h-[2px] origin-center rounded-t-full bg-white transition-transform duration-300 ${isItemActive ? "scale-x-100" : "scale-x-0"}`}
                  />
                </Link>

                {item.subItems && (
                  <div
                    aria-hidden={!isItemActive}
                    className={`fixed inset-x-0 ${submenuOffset} hidden border-t border-white/15 bg-[#643054]/95 text-white shadow-[0_18px_34px_rgba(33,11,28,0.2)] backdrop-blur-sm transition-[opacity,transform,visibility] duration-200 lg:block ${
                      isItemActive
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="mx-auto max-w-[1180px] px-6 py-4 sm:px-8">
                      <div
                        className={`grid grid-cols-2 gap-2 sm:grid-cols-3 ${
                          item.title === "Giới Thiệu" ? "lg:grid-cols-5" : "lg:grid-cols-4"
                        }`}
                      >
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className="flex min-h-12 items-center px-4 py-3 text-sm font-medium tracking-[0.02em] text-white/90 transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <button
            type="button"
            onClick={openCart}
            className="relative ml-2 flex h-[54px] min-w-[72px] shrink-0 flex-col items-center justify-center gap-0.5 rounded-md px-2 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.75)] transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalCount > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#B5222A] text-[10px] font-extrabold text-white ring-2 ring-black/20">
                {totalCount}
              </span>
            )}
          </button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-md p-2 text-white transition-colors hover:bg-white/10"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#B5222A] text-[10px] font-bold text-white">
                {totalCount}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              if (onOpenMobileMenu) {
                onOpenMobileMenu();
              } else {
                setIsMobileOpen(true);
              }
            }}
            aria-label="Mở menu"
            className="rounded-md p-2 text-white transition-colors hover:bg-white/10"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        </div>

        {!onOpenMobileMenu && <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />}
      </header>
    </>
  );
}
