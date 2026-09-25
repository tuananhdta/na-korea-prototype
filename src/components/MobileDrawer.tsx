"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ChevronDown, ShoppingCart, Phone, MapPin, Mail } from "lucide-react";
import { navItems } from "@/lib/navigation";
import { BRAND_LOGOS } from "@/lib/logos";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

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
    if (itemHref === "/catalog" && pathname.startsWith("/catalog")) {
      return true;
    }
    return false;
  };

  // Auto-expand active section when drawer opens
  useEffect(() => {
    if (isOpen) {
      const activeItem = navItems.find((item) => isNavActive(item.href, item.subItems));
      if (activeItem && activeItem.subItems) {
        setExpanded(activeItem.title);
      }
      // Lock body scroll on mobile
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, pathname]);

  const toggleExpand = (title: string) => {
    setExpanded((prev) => (prev === title ? null : title));
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-300 ${
        isOpen ? "visible" : "invisible pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        aria-hidden={!isOpen}
        role="dialog"
        aria-label="Menu điều hướng"
        className={`fixed inset-y-0 right-0 flex w-[min(320px,85vw)] flex-col bg-[#1A1A1A] text-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header with Logo & Close Button */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-[#241320]">
          <div className="relative h-9 w-32">
            <Image
              src={BRAND_LOGOS.horizontalWhite}
              alt="Kim's Red Ginseng"
              fill
              sizes="128px"
              className="object-contain object-left"
            />
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng menu"
            className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
          {navItems.map((item) => {
            const isRouteActive = isNavActive(item.href, item.subItems);

            return (
              <div key={item.title} className="border-b border-white/10 pb-1">
                <div className="flex items-center justify-between py-2.5">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-2 text-[15px] tracking-wide transition-colors ${
                      isRouteActive
                        ? "font-bold text-[#F0831F]"
                        : "font-medium text-white/90 hover:text-white"
                    }`}
                  >
                    {isRouteActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F0831F] shadow-[0_0_6px_rgba(240,131,31,0.9)] animate-pulse" />
                    )}
                    <span>{item.title}</span>
                  </Link>

                  {item.subItems && (
                    <button
                      onClick={() => toggleExpand(item.title)}
                      className="rounded-md p-1.5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                      aria-label={`${expanded === item.title ? "Thu gọn" : "Mở rộng"} ${item.title}`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          expanded === item.title ? "rotate-180 text-white" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Sub Items Accordion */}
                {item.subItems && expanded === item.title && (
                  <div className="space-y-1 rounded-xl bg-white/5 p-3 my-1">
                    {item.subItems.map((sub) => {
                      const isSubActive = pathname === sub.href;

                      return (
                        <div key={sub.title} className="space-y-1">
                          <Link
                            href={sub.href}
                            onClick={onClose}
                            className={`flex items-center gap-2 py-1.5 text-[13px] transition-colors ${
                              isSubActive
                                ? "font-bold text-[#F0831F]"
                                : "text-white/70 hover:text-white"
                            }`}
                          >
                            {isSubActive && (
                              <span className="h-1.5 w-1.5 rounded-full bg-[#F0831F]" />
                            )}
                            <span>{sub.title}</span>
                          </Link>

                          {/* 3rd Level Sub-Items */}
                          {sub.subItems && (
                            <div className="ml-3 space-y-1 border-l border-white/15 pl-3 py-1">
                              {sub.subItems.map((child) => (
                                <Link
                                  key={child.title}
                                  href={child.href}
                                  onClick={onClose}
                                  className={`block py-1 text-xs transition-colors ${
                                    pathname === child.href
                                      ? "font-bold text-[#F0831F]"
                                      : "text-white/50 hover:text-white"
                                  }`}
                                >
                                  {child.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Bottom Quick Contacts & CTA */}
        <div className="border-t border-white/10 bg-[#141414] p-5 space-y-3">
          <Link
            href="/gio-hang"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 py-2.5 text-xs font-bold text-white transition-colors hover:bg-white/20"
          >
            <ShoppingCart className="w-4 h-4 text-[#F0831F]" />
            <span>XEM GIỎ HÀNG</span>
          </Link>

          <a
            href="tel:0903409939"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#B5222A] py-2.5 text-xs font-bold text-white shadow-md transition-colors hover:bg-[#991C23]"
          >
            <Phone className="w-4 h-4" />
            <span>HOTLINE: 090.340.9939</span>
          </a>
        </div>
      </div>
    </div>
  );
}
