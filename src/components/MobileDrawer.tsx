"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown, ShoppingCart } from "lucide-react";
import { navItems } from "@/lib/navigation";

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
      return pathname === "/";
    }
    if (pathname === itemHref || pathname.startsWith(itemHref + "/")) {
      return true;
    }
    if (
      subItems &&
      subItems.some((sub) => {
        if (pathname === sub.href || (sub.href !== "/" && pathname.startsWith(sub.href + "/"))) {
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

  // Auto-expand the active section when drawer opens
  useEffect(() => {
    if (isOpen) {
      const activeItem = navItems.find((item) => isNavActive(item.href, item.subItems));
      if (activeItem && activeItem.subItems) {
        setExpanded(activeItem.title);
      }
    }
  }, [isOpen, pathname]);

  const toggleExpand = (title: string) => {
    setExpanded((prev) => (prev === title ? null : title));
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`na-drawer-transition fixed bottom-0 right-0 top-0 z-50 flex w-[min(300px,85vw)] flex-col bg-[#1C1C1C] p-7 text-white ${
          isOpen
            ? "translate-x-0 opacity-100 shadow-[-20px_0_56px_rgba(18,5,15,0.42)]"
            : "pointer-events-none translate-x-8 opacity-0 shadow-none"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60">Danh mục điều hướng</span>
          <button
            onClick={onClose}
            aria-label="Đóng menu"
            className="rounded-md p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 space-y-1 overflow-y-auto py-6">
          {navItems.map((item) => {
            const isRouteActive = isNavActive(item.href, item.subItems);

            return (
              <div key={item.title} className="border-b border-white/10 pb-1">
                <div className="flex items-center justify-between py-3">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-2 text-[16px] tracking-wide transition-colors ${
                      isRouteActive
                        ? "font-bold text-white"
                        : "font-medium text-white/80 hover:text-white"
                    }`}
                  >
                    {isRouteActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.95)] animate-pulse" />
                    )}
                    <span>{item.title}</span>
                  </Link>
                  {item.subItems && (
                    <button
                      onClick={() => toggleExpand(item.title)}
                      className="rounded-md p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                      aria-label={`${expanded === item.title ? "Đóng" : "Mở"} ${item.title}`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expanded === item.title
                            ? "rotate-180 text-white"
                            : isRouteActive
                              ? "text-white"
                              : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.subItems && expanded === item.title && (
                  <div className="space-y-1 rounded-md bg-white/5 py-2 pl-4">
                    {item.subItems.map((sub) => {
                      const isSubActive = (() => {
                        if (!pathname) return false;
                        if (pathname === sub.href) return true;
                        if (
                          sub.subItems &&
                          sub.subItems.some((child) => pathname === child.href)
                        ) {
                          return true;
                        }
                        // Product detail pages under "Tất Cả Sản Phẩm"
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
                        <div key={sub.title} className="space-y-1">
                          <Link
                            href={sub.href}
                            onClick={onClose}
                            className={`flex items-center gap-2 py-2 text-[13px] transition-colors ${
                              isSubActive
                                ? "font-bold text-white"
                                : "text-white/60 hover:text-white"
                            }`}
                          >
                            {isSubActive && (
                              <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.95)] animate-pulse" />
                            )}
                            <span>{sub.title}</span>
                          </Link>

                          {/* Nested 3rd-level items like "Nhân Sâm" and "Hồng Sâm" */}
                          {sub.subItems && (
                            <div className="ml-3.5 space-y-1 border-l-2 border-white/15 pl-3 py-1 my-0.5">
                              {sub.subItems.map((child) => {
                                const isChildActive = pathname === child.href;
                                return (
                                  <Link
                                    key={child.title}
                                    href={child.href}
                                    onClick={onClose}
                                    className={`flex items-center gap-2 py-1.5 text-[12px] transition-colors ${
                                      isChildActive
                                        ? "font-bold text-white"
                                        : "text-white/50 hover:text-white"
                                    }`}
                                  >
                                    {isChildActive && (
                                      <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.95)] animate-pulse" />
                                    )}
                                    <span>{child.title}</span>
                                  </Link>
                                );
                              })}
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

          <div className="pt-6 space-y-2.5">
            <Link
              href="/gio-hang"
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              <ShoppingCart className="w-4 h-4 text-[#F0831F]" />
              <span>GIỎ HÀNG CỦA BẠN</span>
            </Link>
            <a
              href="http://www.goldsammall.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-[#B5222A] bg-[#B5222A] py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#991C23]"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>TRUY CẬP CỬA HÀNG (MALL)</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
