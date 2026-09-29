"use client";

import { useEffect, useRef, useState } from "react";

export function IntroScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if intro has already been played in this session
    const hasSeenIntro = sessionStorage.getItem("na_intro_played");

    if (hasSeenIntro) {
      setIsDestroyed(true);
      return;
    }

    setIsVisible(true);
    document.body.style.overflow = "hidden";

    // Play video programmatically if needed
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if autoplay is restricted by browser
      });
    }

    // Safety fallback timer: auto fade-out after 6.5s if onEnded isn't fired
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

    setTimeout(() => {
      setIsDestroyed(true);
      document.body.style.overflow = "";
      sessionStorage.setItem("na_intro_played", "true");
    }, 700);
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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-700 ease-in-out select-none ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105 filter blur-xs" : "opacity-100 scale-100"
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

      {/* 2. Minimalist Skip Button (Bottom Right) */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute bottom-6 right-6 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-md transition-all hover:border-white/50 hover:bg-black/80 hover:text-white cursor-pointer active:scale-95 shadow-lg"
      >
        <span>Bỏ qua Video</span>
        <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
}
