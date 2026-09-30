"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function HeroSlider() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video starts playing immediately across all strict browser policies (Safari / Edge / Chrome)
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Safe fallback if browser requires user gesture
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <section
      data-floating-contact-hero
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black text-white select-none"
    >
      {/* ─── 1. Fullscreen Native HTML5 Local Video (Cross-Platform Certified for Windows & macOS) ─── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-center scale-105"
        />
      </div>

      {/* ─── 2. Subtle Dark Gradient Overlay (Ensures Header & White Logo Are 100% Readable) ─── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40 pointer-events-none" />

      {/* ─── 3. Sound Control Button (Bottom Right) ─── */}
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
        title={isMuted ? "Bật âm thanh video" : "Tắt âm thanh video"}
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-[#D4A359]" />}
      </button>
    </section>
  );
}
