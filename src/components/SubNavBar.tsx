"use client";

import Link from "next/link";

export interface SubNavItem {
  title: string;
  href: string;
}

interface SubNavBarProps {
  items: SubNavItem[];
  currentHref: string;
}

export function SubNavBar({ items, currentHref }: SubNavBarProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full border-t border-white/20 bg-transparent text-white z-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <nav
          aria-label="Menu danh mục con"
          className="flex items-center justify-start sm:justify-center gap-5 sm:gap-8 overflow-x-auto py-3.5 text-xs sm:text-sm font-medium scrollbar-none whitespace-nowrap"
        >
          {items.map((item) => {
            const isActive =
              currentHref === item.href ||
              (item.href === "/nhan-sam" && currentHref === "/hong-sam");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-all duration-200 shrink-0 ${
                  isActive
                    ? "text-white font-bold drop-shadow-sm border-b-2 border-white"
                    : "text-white/80 hover:text-white font-medium drop-shadow-xs hover:drop-shadow-sm"
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
