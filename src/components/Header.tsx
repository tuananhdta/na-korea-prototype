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

  const { totalCount, openCart, isCartShaking, isBadgePopping } = useCart();
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
  // Transparent even while a submenu is open — stays transparent until user scrolls
  const isTopTransparent = isOverlayTop;
  const isHomepage = pathname === "/";
  const headerBgClass = isOverlayTop
    ? isHomepage
      ? "bg-transparent shadow-none border-b border-transparent"
      : "bg-transparent shadow-none border-b border-white/20"
    : "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-[#EEEEEE]";

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
        className={`fixed left-0 right-0 ${headerOffset} z-40 text-[#111111] transition-[background-color,box-shadow] duration-300 ease-in-out ${headerBgClass}`}
      >
        <div
          className={`mx-auto flex max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-400 ease-in-out ${
            isScrolled ? "h-20" : "h-[88px] sm:h-[96px]"
          }`}
        >
          <Link
            href="/"
            className={`relative block shrink-0 transition-all duration-300 hover:scale-[1.02] ${
              isScrolled
                ? "h-[42px] w-[142px] min-[400px]:h-[48px] min-[400px]:w-[162px] sm:h-[54px] sm:w-[180px]"
                : "h-[48px] w-[160px] min-[400px]:h-[56px] min-[400px]:w-[188px] sm:h-[62.4px] sm:w-[208px]"
            }`}
          >
            {/* White logo — fades IN when at top of page (transparent) */}
            <Image
              src={BRAND_LOGOS.horizontalWhite}
              alt="6년근 김정환홍삼 | Hồng Kim Sâm"
              fill
              sizes="(max-width: 400px) 160px, (max-width: 640px) 188px, 208px"
              className={`object-contain object-left transition-opacity duration-400 ease-in-out ${
                isOverlayTop ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
            {/* Dark logo — fades IN when scrolled or on inner pages */}
            <Image
              src={BRAND_LOGOS.horizontal}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 640px) 194px, 208px"
              className={`object-contain object-left transition-opacity duration-400 ease-in-out ${
                isOverlayTop ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden h-full flex-1 items-center justify-end gap-1 lg:flex xl:gap-2">
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
                    className={`relative flex h-full min-w-[84px] max-w-[160px] items-center justify-center gap-1.5 px-2.5 text-center font-sans text-[16px] leading-[1.15] tracking-[0.01em] transition-all duration-200 xl:px-3.5 xl:text-[17px] ${
                      isHovered || isRouteActive
                        ? isTopTransparent
                          ? "font-bold text-white"
                          : "font-bold text-[#4B193E]"
                        : isTopTransparent
                          ? "font-semibold text-white hover:text-white"
                          : "font-semibold text-[#111111] hover:text-[#4B193E]"
                    }`}
                  >
                    <span className="relative flex h-full items-center justify-center">
                      <span>{item.title}</span>

                      {/* Active / Hover underline: clean solid 2.5px bar matching sub-menu line style */}
                      <span
                        aria-hidden="true"
                        className={`absolute bottom-0 left-0 right-0 h-[2.5px] transition-all duration-200 ${
                          isTopTransparent
                            ? "bg-white"
                            : "bg-[#4B193E]"
                        } ${
                          isHovered || isRouteActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        }`}
                      />
                    </span>

                    {item.subItems && (
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                          isHovered ? "rotate-180" : ""
                        } ${
                          isTopTransparent
                            ? "text-white"
                            : isHovered || isRouteActive
                              ? "text-[#4B193E]"
                              : "text-[#666666]"
                        }`}
                      />
                    )}
                  </Link>
                </div>
              );
            })}

            <button
              id="header-cart-icon"
              data-cart-icon="true"
              type="button"
              onClick={openCart}
              aria-label="Giỏ hàng"
              className={`relative ml-3 flex h-[54px] min-w-[72px] shrink-0 flex-col items-center justify-center gap-0.5 rounded-xl px-3 transition-all duration-200 cursor-pointer ${
                isCartShaking ? "animate-cart-shake" : ""
              } ${
                isTopTransparent
                  ? "text-white hover:bg-white/10 hover:text-white"
                  : "text-[#111111] hover:bg-gray-100 hover:text-[#4B193E]"
              }`}
            >
              <ShoppingBag className="h-6 w-6 sm:h-6.5 sm:w-6.5" />
              {totalCount > 0 && (
                <span
                  className={`absolute right-1 top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#B5222A] font-figtree text-[11px] font-extrabold text-white ring-2 ring-white ${
                    isBadgePopping ? "animate-badge-pop" : ""
                  }`}
                >
                  {totalCount}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Right Controls (Cart + Hamburger) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 lg:hidden">
            <button
              id="header-mobile-cart-icon"
              data-cart-icon="true"
              type="button"
              onClick={openCart}
              aria-label="Giỏ hàng"
              className={`relative rounded-xl p-2.5 transition-colors cursor-pointer ${
                isCartShaking ? "animate-cart-shake" : ""
              } ${
                isTopTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-[#111111] hover:bg-gray-100 hover:text-[#4B193E]"
              }`}
            >
              <ShoppingBag className="h-6.5 w-6.5 sm:h-7 sm:w-7" />
              {totalCount > 0 && (
                <span
                  className={`absolute -right-0.5 -top-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#B5222A] font-figtree text-[11px] font-extrabold text-white ring-2 ring-white ${
                    isBadgePopping ? "animate-badge-pop" : ""
                  }`}
                >
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
              className={`rounded-xl p-2.5 transition-colors cursor-pointer ${
                isTopTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-[#111111] hover:bg-gray-100 hover:text-[#4B193E]"
              }`}
            >
              <Menu className="h-6.5 w-6.5 sm:h-7 sm:w-7" />
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
              className={`absolute inset-x-0 top-full hidden transition-[opacity,transform,visibility,background-color,border-color] duration-200 lg:block ${
                isTopTransparent
                  ? "border-t border-white/10 bg-black/30 backdrop-blur-md shadow-[0_16px_32px_rgba(0,0,0,0.2)] text-white"
                  : "border-t border-[#EEEEEE] bg-white shadow-[0_16px_32px_rgba(0,0,0,0.08)] text-[#111111]"
              } ${
                isItemActive
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0 pointer-events-none"
              }`}
            >
              <div className="mx-auto max-w-[1320px] px-4 py-3.5 sm:px-6 lg:px-8">
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
                          className={`group/link relative flex min-h-11 shrink-0 items-center justify-center px-3 py-2 text-center font-sans text-[15px] sm:text-base leading-[1.15] tracking-[0.01em] whitespace-nowrap transition-colors duration-200 ${
                            isSubActive
                              ? isTopTransparent
                                ? "font-semibold text-white"
                                : "font-semibold text-[#4B193E]"
                              : isTopTransparent
                                ? "font-medium text-white/90 hover:text-white"
                                : "font-medium text-[#333333] hover:text-[#4B193E]"
                          }`}
                        >
                          <span className="relative inline-flex items-center gap-1.5 whitespace-nowrap py-1 transition-transform duration-200 group-hover/sub:-translate-y-0.5">
                            <span
                              aria-hidden="true"
                              className={`h-1.5 w-1.5 shrink-0 rounded-full transition-[opacity,transform] duration-200 ${
                                isTopTransparent
                                  ? "bg-white"
                                  : "bg-[#4B193E]"
                              } ${
                                isSubActive
                                  ? "scale-100 opacity-100 animate-pulse"
                                  : "scale-75 opacity-0 group-hover/sub:scale-100 group-hover/sub:opacity-100"
                              }`}
                            />
                            <span>{sub.title}</span>
                            <span
                              aria-hidden="true"
                              className={`absolute -bottom-0.5 left-0 right-0 h-[2px] transition-[opacity,transform] duration-200 ease-out ${
                                isTopTransparent
                                  ? "bg-white"
                                  : "bg-[#4B193E]"
                              } ${
                                isSubActive
                                  ? "scale-x-100 opacity-100"
                                  : "scale-x-0 opacity-0 group-hover/sub:scale-x-100 group-hover/sub:opacity-100"
                              }`}
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
