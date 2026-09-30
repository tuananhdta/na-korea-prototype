"use client";

import { useEffect, useRef, useState } from "react";

export function IntroScreen() {
  // Fix Flash Of Content: Start with isVisible = true so it covers the screen on 1st frame
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Lock body scrolling immediately when intro starts
    document.body.style.overflow = "hidden";

    // Play video programmatically if needed
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if autoplay is restricted
      });
    }

    // Safety fallback timer: auto finish after 6.5s if onEnded event fails
    const fallbackTimer = setTimeout(() => {
      finishIntro();
    }, 6500);

    return () => {
      clearTimeout(fallbackTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const finishIntro = () => {
    if (isFadingOut || isDestroyed) return;
    setIsFadingOut(true);

    // 850ms transition matches the cinematic curtain slide up duration
    setTimeout(() => {
      setIsDestroyed(true);
      document.body.style.overflow = "";
    }, 850);
  };

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    finishIntro();
  };

  if (isDestroyed || !isVisible) return null;

  return (
    <div
      aria-label="Video Giới Thiệu Thương Hiệu Hồng Sâm Kim"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black select-none transition-all duration-[850ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isFadingOut
          ? "-translate-y-full opacity-90 scale-[1.02] filter blur-xs"
          : "translate-y-0 opacity-100 scale-100"
      }`}
    >
      {/* 1. Video Element (Full screen object-cover) */}
      <video
        ref={videoRef}
        src="/videos/intro.mov"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={finishIntro}
        className="h-full w-full object-cover object-center"
      />

      {/* 2. Top & Bottom Brand Red Sweep Accent Bars */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-transparent via-[#B5222A] to-transparent transition-opacity duration-500 ${
          isFadingOut ? "opacity-100 animate-pulse" : "opacity-0"
        }`}
      />

      {/* 3. Minimalist Skip Button (Bottom Right) */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute bottom-6 right-6 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-4 py-2 font-sans text-xs font-semibold leading-[1.0] tracking-[0.03em] text-white/90 backdrop-blur-md transition-all hover:border-white/50 hover:bg-black/80 hover:text-white cursor-pointer active:scale-95 shadow-xl"
      >
        <span>Bỏ qua Video</span>
        <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
}
