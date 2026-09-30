"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function HeroSlider() {
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 1.0;
    video.muted = false;

    // Thử phát video kèm âm thanh trực tiếp
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
        })
        .catch(() => {
          // Trình duyệt chặn unmuted autoplay theo chính sách bảo mật -> chuyển sang phát câm tạm thời
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {});
          }

          // Tự động bật âm thanh ngay khi người dùng có bất kỳ tương tác đầu tiên nào trên trang
          const handleFirstGesture = () => {
            if (userInteractedRef.current) return;
            if (videoRef.current) {
              videoRef.current.muted = false;
              setIsMuted(false);
              videoRef.current.play().catch(() => {});
            }
            cleanupListeners();
          };

          const cleanupListeners = () => {
            window.removeEventListener("click", handleFirstGesture);
            window.removeEventListener("touchstart", handleFirstGesture);
            window.removeEventListener("keydown", handleFirstGesture);
            window.removeEventListener("scroll", handleFirstGesture);
          };

          window.addEventListener("click", handleFirstGesture, { once: true, passive: true });
          window.addEventListener("touchstart", handleFirstGesture, { once: true, passive: true });
          window.addEventListener("keydown", handleFirstGesture, { once: true, passive: true });
          window.addEventListener("scroll", handleFirstGesture, { once: true, passive: true });
        });
    }
  }, []);

  const toggleMute = () => {
    userInteractedRef.current = true;
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const cur = videoRef.current.currentTime;
      const dur = videoRef.current.duration;
      const pct = (cur / dur) * 100;
      setProgress(pct);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !videoRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    videoRef.current.currentTime = ratio * videoRef.current.duration;
    setProgress(ratio * 100);
  };

  return (
    <section
      data-floating-contact-hero
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black text-white select-none"
    >
      {/* ─── 1. Fullscreen Native HTML5 Local Video ─── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/videos/hero-bg.mp4"
          autoPlay
          loop
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          className="h-full w-full object-cover object-center scale-105"
        />
      </div>

      {/* ─── 2. Subtle Dark Gradient Overlay (Ensures Header & Controls Are 100% Readable) ─── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />

      {/* ─── 3. Sound Control Button (Căn sát bên phải màn hình chuẩn giao diện) ─── */}
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-8 right-5 sm:bottom-9 sm:right-8 z-30 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/80 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
        title={isMuted ? "Bật âm thanh video" : "Tắt âm thanh video"}
      >
        {isMuted ? <VolumeX className="h-4 w-4 text-white/70" /> : <Volume2 className="h-4 w-4 text-[#D4A359]" />}
      </button>

      {/* ─── 4. Sleek Horizontal Video Progress Bar (bottom-5, dày 3px, màu Trắng) ─── */}
      <div
        onClick={handleSeek}
        className="group/progress absolute bottom-5 inset-x-0 z-20 h-[3px] w-full cursor-pointer bg-white/20 transition-all hover:h-1"
        title="Nhấp để chuyển đến đoạn video tương ứng"
      >
        {/* Active filled line (màu Trắng tinh tế, dày 3px) */}
        <div
          style={{ width: `${progress}%` }}
          className="relative h-full bg-white transition-[width] duration-100 ease-linear shadow-[0_0_8px_rgba(255,255,255,0.7)]"
        />
      </div>
    </section>
  );
}
