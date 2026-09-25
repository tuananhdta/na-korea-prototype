"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ShoppingBag } from "lucide-react";
import { navItems } from "@/lib/navigation";
import { BRAND_LOGOS } from "@/lib/logos";
import { useCart } from "@/context/CartContext";
import { MobileDrawer } from "./MobileDrawer";
import { PromoBanner } from "./PromoBanner";

interface HeaderProps {
  onOpenMobileMenu?: () => void;
  overlay?: boolean;
}

export function Header({ onOpenMobileMenu, overlay = false }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  // Active route detection for main menu items and their children
  const isNavActive = (itemHref: string, subItems?: any[]) => {
    if (!pathname) return false;
    if (itemHref === "/") {
      return false;
    }
    if (pathname === itemHref || pathname.startsWith(itemHref + "/")) {
      return true;
    }
    if (
      subItems &&
      subItems.some((sub) => {
        if (
          pathname === sub.href ||
          (sub.href !== "/" && pathname.startsWith(sub.href + "/")) ||
          (sub.href === "/nhan-sam" && (pathname === "/hong-sam" || pathname.startsWith("/hong-sam/")))
        ) {
          return true;
        }
        if (
          sub.subItems &&
          sub.subItems.some(
            (child: any) =>
              pathname === child.href ||
              (child.href !== "/" && pathname.startsWith(child.href + "/"))
          )
        ) {
          return true;
        }
        return false;
      })
    ) {
      return true;
    }
    if (
      (itemHref === "/san-pham" || itemHref === "/product") &&
      (pathname.startsWith("/san-pham") || pathname.startsWith("/product") || pathname.startsWith("/products"))
    ) {
      return true;
    }
    if (itemHref === "/cam-nang" && pathname.startsWith("/cam-nang")) {
      return true;
    }
    return false;
  };

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
  // Keep the navigation directly below the 80px promo banner on every mobile
  // viewport. The old mobile `top-24` left a visible 16px strip between them.
  const headerOffset = isBannerVisible ? "top-20" : "top-0";
  const pageSpacerHeight = isBannerVisible
    ? isScrolled
      ? "h-40"
      : "h-[168px] sm:h-44"
    : isScrolled
      ? "h-20"
      : "h-[88px] sm:h-24";

  const isOverlayTop = overlay && !isScrolled;
  const headerBgClass = isOverlayTop
    ? activeMenu
      ? "bg-[#4B193E]/10 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
      : "bg-transparent shadow-none"
    : "bg-[#4B193E]/95 backdrop-blur-sm shadow-[0_12px_30px_rgba(33,11,28,0.24)]";

  return (
    <>
      <PromoBanner visible={isBannerVisible} onClose={() => setIsBannerVisible(false)} />

      {!overlay && (
        <div
          aria-hidden="true"
          className={`shrink-0 transition-[height] duration-400 ease-in-out ${pageSpacerHeight} bg-transparent`}
        />
      )}

      <header
        onMouseLeave={() => setActiveMenu(null)}
        className={`fixed left-0 right-0 ${headerOffset} z-40 text-white transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-in-out ${headerBgClass}`}
      >
        <div
          className={`mx-auto flex max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-400 ease-in-out ${
            isScrolled ? "h-20" : "h-[88px] sm:h-[96px]"
          }`}
        >
          <Link
            href="/"
            className={`relative block shrink-0 transition-all duration-300 hover:scale-[1.03] ${
              isScrolled
                ? "h-[50px] w-[168px] sm:h-[54px] sm:w-[180px]"
                : "h-[58px] w-[194px] sm:h-[62.4px] sm:w-[208px]"
            }`}
          >
            <Image
              src={BRAND_LOGOS.horizontalWhite}
              alt="6년근 김정환홍삼 | Kim's Red Ginseng"
              fill
              sizes="(max-width: 640px) 194px, 208px"
              className="object-contain object-left drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden h-full flex-1 items-center justify-end gap-0.5 lg:flex xl:gap-1.5">
            {navItems.map((item) => {
              const isHovered = activeMenu === item.title;
              const isRouteActive = isNavActive(item.href, item.subItems);

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
                    aria-expanded={item.subItems ? isHovered : undefined}
                    className={`relative flex h-full min-w-[74px] max-w-[136px] items-center justify-center gap-1.5 px-2 text-center text-[14px] leading-[1.15] tracking-[0.03em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.75)] transition-all duration-200 xl:px-2.5 ${
                      isHovered
                        ? "font-semibold text-white/95"
                        : isRouteActive
                          ? "font-bold text-white"
                          : "font-medium text-white hover:text-[#FFF7F7]"
                    }`}
                  >
                    <span>{item.title}</span>

                    {item.subItems && (
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-3 w-3 shrink-0 transition-transform duration-200 ${
                          isHovered
                            ? "rotate-180 text-white"
                            : isRouteActive
                              ? "text-white"
                              : "text-white/80"
                        }`}
                      />
                    )}

                    {/* Active / Hover underline indicator bar in WHITE */}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-2 right-2 h-[2.5px] origin-center rounded-t-full bg-white transition-all duration-300 ${
                        isHovered || isRouteActive ? "scale-x-100 opacity-100 shadow-[0_0_8px_rgba(255,255,255,0.85)]" : "scale-x-0 opacity-0"
                      }`}
                    />
                  </Link>
                </div>
              );
            })}

            <button
              type="button"
              onClick={openCart}
              className="relative ml-2 flex h-[54px] min-w-[72px] shrink-0 flex-col items-center justify-center gap-0.5 rounded-md px-2 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.75)] transition-all duration-200 hover:bg-white/10 hover:text-white cursor-pointer"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#B5222A] text-[10px] font-extrabold text-white ring-2 ring-black/20">
                  {totalCount}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Right Controls (Cart + Hamburger) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={openCart}
              aria-label="Giỏ hàng"
              className="relative rounded-md p-2 text-white transition-colors hover:bg-white/10 cursor-pointer"
            >
              <ShoppingBag className="h-6 w-6" />
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
              aria-label="Mở menu điều hướng"
              className="rounded-md p-2 text-white transition-colors hover:bg-white/10 cursor-pointer"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Full-width Desktop Submenus */}
        {navItems.map((item) => {
          if (!item.subItems) return null;
          const isItemActive = activeMenu === item.title;
          return (
            <div
              key={item.title}
              aria-hidden={!isItemActive}
              onMouseEnter={() => setActiveMenu(item.title)}
              className={`absolute inset-x-0 top-full hidden border-t border-white/10 ${
                isOverlayTop
                  ? "bg-[#4B193E]/10 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                  : "bg-[#4B193E]/95 backdrop-blur-sm shadow-[0_18px_34px_rgba(33,11,28,0.2)]"
              } text-white transition-[opacity,transform,visibility] duration-200 lg:block ${
                isItemActive
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0 pointer-events-none"
              }`}
            >
              <div className="mx-auto max-w-[1240px] px-4 py-3.5 sm:px-6 lg:px-8">
                <div className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8 lg:gap-x-11">
                  {item.subItems.map((sub) => {
                    const isSubActive = (() => {
                      if (!pathname) return false;
                      if (pathname === sub.href) return true;
                      if (
                        sub.href === "/nhan-sam" &&
                        (pathname === "/hong-sam" || pathname.startsWith("/hong-sam/"))
                      ) {
                        return true;
                      }
                      if (
                        sub.subItems &&
                        sub.subItems.some((child) => pathname === child.href)
                      ) {
                        return true;
                      }
                      if (
                        (sub.href === "/san-pham" || sub.href === "/product") &&
                        (pathname.startsWith("/product/") || pathname.startsWith("/san-pham/")) &&
                        !pathname.startsWith("/products/") &&
                        !pathname.startsWith("/san-pham/nguoi-lon") &&
                        !pathname.startsWith("/san-pham/tre-em")
                      ) {
                        return true;
                      }
                      return false;
                    })();

                    return (
                      <div
                        key={sub.title}
                        className="relative group/sub flex items-center"
                      >
                        <Link
                          href={sub.href}
                          className={`group/link relative flex min-h-11 shrink-0 items-center justify-center px-2.5 py-2 text-center text-sm tracking-[0.02em] whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] transition-colors duration-200 ${
                            isSubActive
                              ? "font-bold text-white"
                              : "font-medium text-white/90 hover:text-white"
                          }`}
                        >
                          <span className="relative inline-flex items-center gap-1.5 whitespace-nowrap py-1 transition-transform duration-200 group-hover/sub:-translate-y-0.5">
                            {isSubActive && (
                              <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.95)] animate-pulse" />
                            )}
                            <span>{sub.title}</span>
                            <span
                              aria-hidden="true"
                              className="absolute -bottom-0.5 left-0 right-0 h-[2px] origin-center scale-x-0 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] transition-transform duration-300 ease-out group-hover/sub:scale-x-100"
                            />
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </header>

      {/* ─── Render Mobile Drawer OUTSIDE header element so it covers 100% full screen cleanly ─── */}
      {!onOpenMobileMenu && (
        <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      )}
    </>
  );
}
