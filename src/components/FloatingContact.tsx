"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   Official Zalo Sticker Icon (Matching Provided Image)
   Crisp official Zalo app icon
   ───────────────────────────────────────────────────────────── */
function ZaloStickerIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-full bg-white ${className}`}>
      <Image
        src="/images/zalo-icon.png"
        alt="Zalo Official"
        width={64}
        height={64}
        className="h-full w-full object-contain"
        priority
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Phone Call Sticker Icon (Matching Image 1)
   Crisp blue circle with phone handset vector
   ───────────────────────────────────────────────────────────── */
function PhoneStickerIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Gọi điện"
    >
      <circle cx="50" cy="50" r="50" fill="#28CD41" />
      <path
        d="M68.5 60.2c-2.8 0-5.6-.5-8.2-1.3-1.2-.4-2.6 0-3.4.8l-5.1 5.1C41.2 59.2 34 52 28.4 41.5l5.1-5.1c.9-.9 1.2-2.2.8-3.4-.8-2.6-1.3-5.4-1.3-8.2 0-1.8-1.5-3.3-3.3-3.3H17.8c-1.8 0-3.3 1.5-3.3 3.3 0 29.8 24.2 54 54 54 1.8 0 3.3-1.5 3.3-3.3v-12c0-1.9-1.5-3.3-3.3-3.3z"
        fill="white"
      />
    </svg>
  );
}

export function FloatingContact() {
  const pathname = usePathname();
  const [isHeroPassed, setIsHeroPassed] = useState(false);

  // Activation threshold logic (remains 100% intact as before)
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

  if (!isHeroPassed) return null;

  return (
    <>
      {/* ─── CSS Keyframes for Vigorous Shake every 5 seconds ─── */}
      <style jsx global>{`
        @keyframes sticker-shake-5s {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          2% {
            transform: rotate(-22deg) scale(1.15) translate(-1.5px, -1.5px);
          }
          4% {
            transform: rotate(22deg) scale(1.15) translate(1.5px, 1.5px);
          }
          6% {
            transform: rotate(-20deg) scale(1.14) translate(-1.5px, 0);
          }
          8% {
            transform: rotate(20deg) scale(1.14) translate(1.5px, 0);
          }
          10% {
            transform: rotate(-16deg) scale(1.1) translate(-1px, 1px);
          }
          12% {
            transform: rotate(16deg) scale(1.1) translate(1px, -1px);
          }
          14% {
            transform: rotate(-10deg) scale(1.06);
          }
          16% {
            transform: rotate(10deg) scale(1.06);
          }
          18% {
            transform: rotate(-4deg) scale(1.02);
          }
          20% {
            transform: rotate(4deg) scale(1.02);
          }
          22% {
            transform: rotate(0deg) scale(1);
          }
          23%, 99% {
            transform: rotate(0deg) scale(1);
          }
        }

        .animate-sticker-shake-phone {
          animation: sticker-shake-5s 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
          transform-origin: center center;
        }

        .animate-sticker-shake-zalo {
          animation: sticker-shake-5s 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) 0.5s infinite;
          transform-origin: center center;
        }
      `}</style>

      {/* ─── 2 FLOATING CONTACT STICKERS PINNED TO THE LEFT EDGE ─── */}
      <div
        className="fixed left-3 sm:left-5 bottom-20 md:bottom-28 z-50 flex flex-col items-start gap-4 select-none animate-in fade-in slide-in-from-left-4 duration-300 pointer-events-auto"
        role="region"
        aria-label="Kênh liên hệ nhanh"
      >
        {/* 1. STICKER GỌI (PHONE CALL) */}
        <a
          href="tel:0903409939"
          aria-label="Gọi hotline 0903409939"
          className="group relative flex items-center focus:outline-none"
        >
          {/* Circular Button with Shake Animation & Ripple Rings */}
          <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center shrink-0">
            {/* Concentric Ripple Wave Rings */}
            <span className="absolute -inset-1.5 rounded-full bg-[#28CD41]/35 animate-ping pointer-events-none" />
            <span className="absolute -inset-1 rounded-full bg-[#28CD41]/25 animate-pulse pointer-events-none" />

            {/* Main Shaking Sticker Icon */}
            <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full shadow-[0_8px_24px_rgba(40,205,65,0.45)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_28px_rgba(40,205,65,0.6)] animate-sticker-shake-phone active:scale-95">
              <PhoneStickerIcon className="h-full w-full drop-shadow-sm" />
            </div>
          </div>

          {/* Slide-out Text from the Left Edge on Hover (No border/box container) */}
          <div className="overflow-hidden transition-all duration-300 ease-out max-w-0 opacity-0 -translate-x-2 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-3 pointer-events-none sm:pointer-events-auto">
            <span className="font-bold text-sm sm:text-base text-[#16A34A] tracking-wide whitespace-nowrap">
              Hotline
            </span>
          </div>
        </a>

        {/* 2. STICKER CHAT ZALO */}
        <a
          href="https://zalo.me/0903409939"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo tư vấn 0903409939"
          className="group relative flex items-center focus:outline-none"
        >
          {/* Circular Button with Shake Animation & Ripple Rings */}
          <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center shrink-0">
            {/* Concentric Ripple Wave Rings */}
            <span className="absolute -inset-1.5 rounded-full bg-[#0068FF]/35 animate-ping pointer-events-none" />
            <span className="absolute -inset-1 rounded-full bg-[#0068FF]/25 animate-pulse pointer-events-none" />

            {/* Main Shaking Sticker Icon */}
            <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full shadow-[0_8px_24px_rgba(0,104,255,0.45)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_28px_rgba(0,104,255,0.6)] animate-sticker-shake-zalo active:scale-95">
              <ZaloStickerIcon className="h-full w-full drop-shadow-sm" />
            </div>
          </div>

          {/* Slide-out Text from the Left Edge on Hover (No border/box container) */}
          <div className="overflow-hidden transition-all duration-300 ease-out max-w-0 opacity-0 -translate-x-2 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-3 pointer-events-none sm:pointer-events-auto">
            <span className="font-bold text-sm sm:text-base text-[#0068FF] tracking-wide whitespace-nowrap">
              Chat Zalo
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
