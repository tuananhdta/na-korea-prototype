"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BRAND_LOGOS } from "@/lib/logos";

export function IntroScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);

  useEffect(() => {
    // Check if intro has already been shown in this browser session
    const hasSeenIntro = sessionStorage.getItem("na_intro_played");

    if (hasSeenIntro) {
      setIsDestroyed(true);
      return;
    }

    // Show intro screen
    setIsVisible(true);

    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    // Step 1: Start fade out at 2.8s
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2800);

    // Step 2: Unmount & unlock scroll at 3.5s
    const destroyTimer = setTimeout(() => {
      setIsDestroyed(true);
      document.body.style.overflow = "";
      sessionStorage.setItem("na_intro_played", "true");
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(destroyTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsDestroyed(true);
      document.body.style.overflow = "";
      sessionStorage.setItem("na_intro_played", "true");
    }, 400);
  };

  if (isDestroyed || !isVisible) return null;

  return (
    <div
      aria-label="Màn hình chào Hồng Sâm Kim"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F0406] text-white transition-all duration-700 ease-in-out select-none ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105 filter blur-xs" : "opacity-100 scale-100"
      }`}
    >
      {/* Ambient Radial Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(181,34,42,0.25)_0%,transparent_70%)] animate-pulse"
      />

      {/* Traditional Korean Lattice Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#FFF 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Main Animated Intro Card */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-lg">
        {/* Korean Seal Stamp (Mộc Đỏ Nghệ Nhân Kim Jeong Hwan) */}
        <div className="relative mb-6 flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
          {/* Pulsing Outer Stamp Ring */}
          <div className="absolute inset-0 rounded-2xl border-2 border-[#B5222A]/60 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30" />
          
          {/* Inner Golden Border Box */}
          <div className="relative flex h-full w-full items-center justify-center rounded-2xl border-2 border-[#F0831F]/80 bg-[#1E0A0D]/90 p-3 shadow-[0_0_30px_rgba(181,34,42,0.4)] backdrop-blur-md animate-[zoom-in_0.8s_ease-out]">
            <Image
              src={BRAND_LOGOS.horizontalWhite}
              alt="Hồng Sâm Kim Logo"
              width={160}
              height={50}
              priority
              className="object-contain drop-shadow-[0_2px_10px_rgba(240,131,31,0.5)]"
            />
          </div>
        </div>

        {/* Brand Slogan Reveal */}
        <div className="space-y-2 animate-[fade-in-up_1s_ease-out_0.3s_both]">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#F0831F]">
            6 Years Old Punggi Red Ginseng
          </span>

          <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight drop-shadow-md">
            HỒNG SÂM KIM
          </h1>

          <div className="mx-auto my-3 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#B5222A]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5222A] animate-ping" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#B5222A]" />
          </div>

          <p className="font-sans text-sm sm:text-base font-bold text-gray-200 tracking-wide">
            Nơi tận tâm trở thành kiệt tác
          </p>
        </div>

        {/* Minimal Progress Bar Indicator */}
        <div className="mt-8 w-48 overflow-hidden rounded-full bg-white/10 h-1">
          <div className="h-full bg-gradient-to-r from-[#B5222A] via-[#F0831F] to-[#B5222A] animate-[progress-bar_2.8s_linear_forwards]" />
        </div>
      </div>

      {/* Skip Button (Bottom Right) */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute bottom-6 right-6 z-20 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-xs font-semibold text-gray-300 backdrop-blur-md transition-all hover:border-white/40 hover:bg-black/60 hover:text-white cursor-pointer active:scale-95"
      >
        <span>Bỏ qua</span>
        <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
}
