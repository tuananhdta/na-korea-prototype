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
      <ellipse cx="50" cy="50" rx="4" ry="2.5" fill="#F4A89A" opacity="0.5" />
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
    <div
      className="fixed inset-x-0 top-0 z-50 h-20 sm:h-20 overflow-visible border-b border-[#E5DFD3]"
      style={{
        background: `
          linear-gradient(to right, #FFFDF8, #FFF9ED, #FFFDF8),
          repeating-linear-gradient(0deg, transparent, transparent 19px, #EDE8DD33 19px, #EDE8DD33 20px),
          repeating-linear-gradient(90deg, transparent, transparent 19px, #EDE8DD33 19px, #EDE8DD33 20px)
        `,
      }}
    >
      {/* Decorative grid lines */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B8F5B]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B8F5B]/30 to-transparent" />

      <div className="relative mx-auto flex h-full max-w-[1240px] items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* ─── Center Group (Mascots + Slogan closely framed) ─── */}
        <div className="relative flex items-center justify-center">
          {/* Left: Berry Mascot + Coin */}
          <div className="absolute right-full mr-3 sm:mr-5 bottom-[-16px] hidden sm:flex w-13 md:w-15 lg:w-[62px] items-end pointer-events-none">
            <div className="animate-[bounce-gentle_2.5s_ease-in-out_infinite]">
              <BerryMascot className="w-full drop-shadow-sm" />
            </div>
            <RewardCoin className="absolute -right-1 top-1 w-4.5 animate-[float-coin_2s_ease-in-out_infinite] drop-shadow-sm md:w-5" />
          </div>

          {/* Left Cloud */}
          <DoodleCloud className="absolute -left-16 -top-4 hidden w-8 animate-[drift_12s_linear_infinite] opacity-60 md:block pointer-events-none" />

          {/* Center: Animated Slogan Capsule */}
          <div className="relative z-10 flex items-center justify-center animate-[banner-float_4s_ease-in-out_infinite]">
            <div className="flex items-center gap-1.5 sm:gap-3 rounded-full border border-dashed border-[#B5222A]/30 bg-white/85 px-3 py-1 sm:px-6 sm:py-2 shadow-[0_4px_16px_rgba(181,34,42,0.08)] backdrop-blur-xs transition-all hover:border-[#B5222A]/60">
              {/* Slogan Words */}
              <div className="flex items-center text-center">
                <span className="text-gold-shimmer font-sans text-[11px] sm:text-[15px] md:text-[17px] font-extrabold tracking-wide whitespace-nowrap">
                  Hồng sâm Kim
                </span>

                {/* Pulsing Ginseng Heartbeat dot */}
                <span className="mx-1.5 sm:mx-2.5 inline-flex h-1.5 w-1.5 rounded-full bg-[#B5222A] animate-pulse shrink-0" />

                <span className="font-sans text-[11px] sm:text-[14px] md:text-[16px] font-bold text-[#5A2B18] tracking-tight whitespace-nowrap">
                  Nơi tận tâm trở thành kiệt tác
                </span>
              </div>
            </div>
          </div>

          {/* Right Cloud */}
          <DoodleCloud className="absolute -right-16 -top-4 hidden w-8 animate-[drift_15s_linear_infinite_reverse] opacity-50 md:block pointer-events-none" />

          {/* Right: Pung-i Mascot */}
          <div className="absolute left-full ml-3 sm:ml-5 bottom-[-16px] hidden sm:flex w-13 md:w-15 lg:w-[62px] items-end pointer-events-none">
            <div className="animate-[bounce-gentle_3s_ease-in-out_0.5s_infinite]">
              <PungiMascot className="w-full drop-shadow-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Close Button ─── */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Đóng banner"
        className="absolute right-2.5 sm:right-5 md:right-7 lg:right-9 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-[#7A3B1E] transition-all duration-200 hover:bg-black/5 hover:text-[#B5222A] active:scale-95 focus-visible:outline-none cursor-pointer"
      >
        <X aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
}
