"use client";

import { X } from "lucide-react";

/* ───────────────────────────────────────────
   Bé Củ Sâm Pung-i (풍이) - SVG Mascot
   Inspired by 6-year Punggi ginseng root
   ─────────────────────────────────────────── */
function PungiMascot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="none" className={className} aria-hidden="true">
      {/* Body - Golden ginseng root shape */}
      <ellipse cx="40" cy="52" rx="18" ry="22" fill="#E8C87A" />
      <ellipse cx="40" cy="52" rx="16" ry="20" fill="#F2D98B" />
      {/* Warm belly highlight */}
      <ellipse cx="40" cy="48" rx="10" ry="12" fill="#F7E5A8" opacity="0.6" />

      {/* Root legs */}
      <path d="M30 70 Q28 82 24 90" stroke="#D4A84A" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M36 72 Q35 84 33 92" stroke="#D4A84A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M44 72 Q45 84 47 92" stroke="#D4A84A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M50 70 Q52 82 56 90" stroke="#D4A84A" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Small root arms */}
      <path d="M22 50 Q14 46 10 42" stroke="#D4A84A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M58 50 Q66 46 70 42" stroke="#D4A84A" strokeWidth="3.5" strokeLinecap="round" fill="none" />

      {/* Punggi farmer hat */}
      <ellipse cx="40" cy="33" rx="22" ry="6" fill="#8B6F47" />
      <path d="M24 33 Q26 18 40 15 Q54 18 56 33" fill="#A0845C" />
      <path d="M28 33 Q30 22 40 19 Q50 22 52 33" fill="#B89A6E" />
      {/* Hat band - brand red */}
      <rect x="26" y="31" width="28" height="3" rx="1.5" fill="#B5222A" />

      {/* Face */}
      {/* Eyes - happy squint */}
      <path d="M33 46 Q35 43 37 46" stroke="#5C3A1E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M43 46 Q45 43 47 46" stroke="#5C3A1E" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Rosy cheeks */}
      <ellipse cx="30" cy="50" rx="4" ry="2.5" fill="#F4A89A" opacity="0.6" />
      <ellipse cx="50" cy="50" rx="4" ry="2.5" fill="#F4A89A" opacity="0.6" />
      {/* Smile */}
      <path d="M35 53 Q40 58 45 53" stroke="#5C3A1E" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Red scarf */}
      <path d="M26 60 Q30 65 40 66 Q50 65 54 60" stroke="#B5222A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M50 62 Q52 68 54 72" stroke="#B5222A" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Waving hand animation target */}
      <g className="animate-[wave_2.5s_ease-in-out_infinite]" style={{ transformOrigin: "70px 42px" }}>
        <circle cx="70" cy="38" r="4" fill="#F2D98B" />
        {/* Tiny fingers */}
        <circle cx="68" cy="34" r="1.5" fill="#F2D98B" />
        <circle cx="71" cy="33" r="1.5" fill="#F2D98B" />
        <circle cx="74" cy="34" r="1.5" fill="#F2D98B" />
      </g>
    </svg>
  );
}

/* ───────────────────────────────────────────
   Bé Quả Sâm Berry (베리) - SVG Mascot
   Inspired by Ginseng Berry (red fruit)
   ─────────────────────────────────────────── */
function BerryMascot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" fill="none" className={className} aria-hidden="true">
      {/* Body - Round red ginseng berry */}
      <circle cx="40" cy="55" r="20" fill="#C03030" />
      <circle cx="40" cy="55" r="18" fill="#D14040" />
      {/* Highlight sheen */}
      <ellipse cx="34" cy="48" rx="6" ry="8" fill="#E06060" opacity="0.5" />

      {/* Sprouting leaves on top */}
      <g className="animate-[sway_3s_ease-in-out_infinite]" style={{ transformOrigin: "40px 36px" }}>
        <path d="M38 36 Q32 22 28 18" stroke="#5DA34E" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="26" cy="17" rx="5" ry="3" fill="#6DB85A" transform="rotate(-30 26 17)" />
        <path d="M42 36 Q48 22 52 18" stroke="#5DA34E" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="54" cy="17" rx="5" ry="3" fill="#6DB85A" transform="rotate(30 54 17)" />
        {/* Center tiny bud */}
        <ellipse cx="40" cy="28" rx="3" ry="4" fill="#7CC96A" />
      </g>

      {/* Face */}
      {/* Big round eyes */}
      <circle cx="34" cy="52" r="3.5" fill="white" />
      <circle cx="46" cy="52" r="3.5" fill="white" />
      <circle cx="35" cy="52" r="2" fill="#2D1810" />
      <circle cx="47" cy="52" r="2" fill="#2D1810" />
      {/* Eye sparkles */}
      <circle cx="36" cy="51" r="0.8" fill="white" />
      <circle cx="48" cy="51" r="0.8" fill="white" />
      {/* Rosy cheeks */}
      <ellipse cx="28" cy="57" rx="4" ry="2.5" fill="#E8807A" opacity="0.5" />
      <ellipse cx="52" cy="57" rx="4" ry="2.5" fill="#E8807A" opacity="0.5" />
      {/* Happy open mouth */}
      <path d="M35 60 Q40 65 45 60" stroke="#7A1E1E" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Tiny stubby legs */}
      <ellipse cx="33" cy="75" rx="5" ry="3" fill="#B03030" />
      <ellipse cx="47" cy="75" rx="5" ry="3" fill="#B03030" />

      {/* Little arm holding a coin */}
      <g className="animate-[toss_3s_ease-in-out_infinite]" style={{ transformOrigin: "18px 55px" }}>
        <path d="M22 55 Q16 50 14 46" stroke="#B03030" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="14" cy="43" r="3" fill="#B03030" />
      </g>
      {/* Other arm */}
      <path d="M58 55 Q64 52 66 48" stroke="#B03030" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="66" cy="46" r="3" fill="#B03030" />

      {/* Crossbody bag strap */}
      <line x1="30" y1="42" x2="50" y2="68" stroke="#8B6F47" strokeWidth="2" />
      <rect x="46" y="63" width="10" height="8" rx="2" fill="#A0845C" />
      <text x="49" y="70" fontSize="6" fill="white" fontWeight="bold" textAnchor="middle">P</text>
    </svg>
  );
}

/* ─── Floating Reward Coin ─── */
function RewardCoin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#F0B429" stroke="#D4960A" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="7" fill="none" stroke="#D4960A" strokeWidth="0.8" opacity="0.5" />
      <text x="12" y="16" fontSize="10" fill="#8B5E0A" fontWeight="bold" textAnchor="middle">P</text>
    </svg>
  );
}

/* ─── Sparkle Star ─── */
function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 0 L9.5 5.5 L16 8 L9.5 10.5 L8 16 L6.5 10.5 L0 8 L6.5 5.5 Z"
        fill="#F0B429"
        opacity="0.85"
      />
    </svg>
  );
}

/* ─── Doodle Cloud ─── */
function DoodleCloud({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 26" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 22 Q2 22 2 17 Q2 12 8 12 Q8 6 16 6 Q22 4 26 8 Q30 4 36 6 Q42 6 42 12 Q48 12 48 17 Q48 22 42 22 Z"
        fill="white"
        stroke="#D1C8B8"
        strokeWidth="1"
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   Main PromoBanner Component
   ═══════════════════════════════════════════ */
interface PromoBannerProps {
  visible: boolean;
  onClose: () => void;
}

export function PromoBanner({ visible, onClose }: PromoBannerProps) {
  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-24 overflow-visible border-b border-[#E5DFD3] sm:h-20"
      style={{
        background: `
          linear-gradient(to right, #FFFDF8, #FFF9ED, #FFFDF8),
          repeating-linear-gradient(0deg, transparent, transparent 19px, #EDE8DD33 19px, #EDE8DD33 20px),
          repeating-linear-gradient(90deg, transparent, transparent 19px, #EDE8DD33 19px, #EDE8DD33 20px)
        `,
      }}
    >
      {/* Decorative grid notebook border (top & bottom dashed lines) */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B8F5B]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B8F5B]/30 to-transparent" />

      <div className="relative mx-auto flex h-full max-w-[1180px] items-center justify-center px-4 sm:px-8">

        {/* ─── Left: Berry Mascot + Coin ─── */}
        <div className="absolute bottom-0 left-2 hidden w-14 items-end sm:flex md:left-6 md:w-16 lg:left-10 lg:w-[72px]">
          <div className="animate-[bounce-gentle_2.5s_ease-in-out_infinite]">
            <BerryMascot className="w-full drop-shadow-sm" />
          </div>
          {/* Floating coin */}
          <RewardCoin className="absolute -right-1 top-1 w-5 animate-[float-coin_2s_ease-in-out_infinite] drop-shadow-sm md:w-6" />
        </div>

        {/* ─── Clouds ─── */}
        <DoodleCloud className="absolute left-20 top-1 hidden w-9 animate-[drift_12s_linear_infinite] opacity-60 sm:block md:left-28 md:w-10" />
        <DoodleCloud className="absolute right-20 top-0.5 hidden w-8 animate-[drift_15s_linear_infinite_reverse] opacity-50 sm:block md:right-28 md:w-9" />

        {/* ─── Center: Text Content ─── */}
        <div className="flex flex-col items-center gap-1 text-center sm:flex-row sm:gap-3">
          {/* Sparkles before text */}
          <Sparkle className="absolute left-[28%] top-2 hidden w-3 animate-[twinkle_2s_ease-in-out_infinite] sm:block" />
          <Sparkle className="absolute right-[30%] top-1 hidden w-2.5 animate-[twinkle_2.5s_ease-in-out_0.8s_infinite] sm:block" />

          <p className="font-sans text-[11px] font-bold leading-[1.2] tracking-[0.01em] text-[#7A3B1E] sm:whitespace-nowrap sm:text-[14px] md:text-[17px]">
            Đăng ký thành viên mới sẽ được tặng điểm
            <span className="block sm:inline"> có thể sử dụng ngay!</span>
          </p>

          <span className="inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-dashed border-[#A8422B]/40 bg-[#A8422B] px-4 py-1 text-[10px] font-bold leading-none text-white shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#A8422B] hover:shadow-md sm:px-3 sm:py-1 sm:text-xs md:px-5 md:py-1.5 md:text-sm">
            Đăng ký ngay <span aria-hidden="true" className="ml-1 inline-block text-base leading-none transition-transform duration-300 group-hover:translate-x-0.5">›</span>
          </span>
        </div>

        {/* ─── Right: Pung-i Mascot ─── */}
        <div className="absolute bottom-0 right-8 hidden w-14 items-end sm:flex md:right-12 md:w-16 lg:right-16 lg:w-[72px]">
          <div className="animate-[bounce-gentle_3s_ease-in-out_0.5s_infinite]">
            <PungiMascot className="w-full drop-shadow-sm" />
          </div>
        </div>

        {/* ─── Close Button ─── */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng banner"
          className="absolute right-2 top-2 flex h-14 w-14 items-center justify-center text-[#7A3B1E] transition-colors hover:animate-[shake_0.4s_ease-in-out_infinite] hover:text-[#B5222A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5222A] sm:right-4 sm:top-1/2 sm:-translate-y-1/2"
        >
          <X aria-hidden="true" className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}
