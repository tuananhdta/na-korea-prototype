"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface HeroSliderProps {
  canPlay?: boolean;
}

export function HeroSlider({ canPlay = true }: HeroSliderProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userInteractedRef = useRef(false);
  const isIntersectingRef = useRef(true);

  const canPlayRef = useRef(canPlay);
  canPlayRef.current = canPlay;

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.volume = 1.0;
    video.muted = false;

    // Cơ chế tự động bật âm thanh khi người dùng có tương tác đầu tiên (nếu ban đầu bị trình duyệt chặn)
    const handleFirstGesture = () => {
      if (userInteractedRef.current) return;
      if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        if (!videoRef.current.paused && canPlayRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }
      cleanupGestureListeners();
    };

    const cleanupGestureListeners = () => {
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("keydown", handleFirstGesture);
      window.removeEventListener("scroll", handleFirstGesture);
    };

    const setupGestureListeners = () => {
      window.addEventListener("click", handleFirstGesture, { once: true, passive: true });
      window.addEventListener("touchstart", handleFirstGesture, { once: true, passive: true });
      window.addEventListener("keydown", handleFirstGesture, { once: true, passive: true });
      window.addEventListener("scroll", handleFirstGesture, { once: true, passive: true });
    };

    const startPlayback = () => {
      if (!videoRef.current || !canPlayRef.current || !isIntersectingRef.current) return;

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (!userInteractedRef.current && !videoRef.current?.muted) {
              setIsMuted(false);
            }
          })
          .catch(() => {
            // Trình duyệt chặn autoplay có tiếng khi chưa tương tác -> tạm thời phát câm
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().catch(() => {});
              setupGestureListeners();
            }
          });
      }
    };

    // Intersection Observer API: Tự động Tạm dừng khi khuất màn hình và Phát tiếp khi vào tầm nhìn
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersectingRef.current = entry.isIntersecting;
          if (!videoRef.current) return;

          if (entry.isIntersecting) {
            // Khi Hero nằm trong tầm nhìn và được phép phát
            if (canPlayRef.current) {
              startPlayback();
            }
          } else {
            // Khi cuộn ra khỏi tầm nhìn -> Tạm dừng video (ngắt âm thanh & giải phóng 100% GPU/CPU)
            videoRef.current.pause();
          }
        });
      },
      {
        threshold: 0.15, // Kích hoạt khi ít nhất 15% diện tích Hero hiển thị trên màn hình
      }
    );

    observer.observe(container);

    // Initial check: Chỉ phát nếu canPlay ban đầu là true
    if (canPlay) {
      startPlayback();
    } else {
      video.pause();
      video.currentTime = 0;
    }

    return () => {
      observer.disconnect();
      cleanupGestureListeners();
    };
  }, []);

  // Khi canPlay thay đổi từ false -> true (khi video Intro kết thúc hoặc bấm bỏ qua)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (canPlay) {
      video.currentTime = 0;
      if (isIntersectingRef.current) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              if (!userInteractedRef.current && !video.muted) {
                setIsMuted(false);
              }
            })
            .catch(() => {
              video.muted = true;
              setIsMuted(true);
              video.play().catch(() => {});
            });
        }
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [canPlay]);

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
      ref={containerRef}
      data-floating-contact-hero
      className="relative w-full h-[100dvh] min-h-[500px] sm:min-h-[600px] overflow-hidden bg-black text-white select-none"
    >
      {/* ─── 1. Fullscreen Native HTML5 Local Video ─── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/videos/hero-bg.mp4"
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
