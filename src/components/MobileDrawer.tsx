"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, ShoppingCart } from "lucide-react";
import { navItems } from "@/lib/navigation";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

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
          {navItems.map((item) => (
            <div key={item.title} className="border-b border-white/10 pb-1">
              <div className="flex items-center justify-between py-3">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="text-[16px] font-semibold tracking-wide text-white/80 transition-colors hover:text-white"
                >
                  {item.title}
                </Link>
                {item.subItems && (
                  <button
                    onClick={() => toggleExpand(item.title)}
                    className="rounded-md p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                    aria-label={`${expanded === item.title ? "Đóng" : "Mở"} ${item.title}`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expanded === item.title ? "rotate-180 text-[#F0831F]" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {item.subItems && expanded === item.title && (
                <div className="space-y-1 rounded-md bg-white/5 py-2 pl-4">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      onClick={onClose}
                      className="block py-2 text-[13px] text-white/60 transition-colors hover:text-white"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-6">
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
