"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

export function HeroSlider() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section
      data-floating-contact-hero
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black text-white"
    >
      {/* ─── 1. Fullscreen YouTube Background Video ─── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          src={`https://www.youtube.com/embed/p9detg0Rt_Q?autoplay=1&mute=${
            isMuted ? 1 : 0
          }&controls=0&loop=1&playlist=p9detg0Rt_Q&playsinline=1&rel=0&disablekb=1&modestbranding=1`}
          title="Video Giới Thiệu Thương Hiệu Hồng Sâm Kim"
          className="absolute left-1/2 top-1/2 min-w-full min-h-full w-[177.77777778vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 object-cover border-0 scale-105"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>

      {/* ─── 2. Cinematic Dark Gradient Overlay (Ensures White Header & Typography Are 100% Readable) ─── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 pointer-events-none" />

      {/* ─── 3. Hero Text Overlay Content ─── */}
      <div className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center text-center pt-20">
        {/* Subtle Brand Slogan Capsule */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 backdrop-blur-md animate-[fade-in-down_0.8s_ease-out]">
          <span className="h-2 w-2 rounded-full bg-[#B5222A] animate-ping" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-white/90">
            Hồng sâm Kim 6 năm tuổi Punggi
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-tight md:leading-[1.25] text-white max-w-4xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] animate-[fade-in-up_1s_ease-out]">
          Con người có thể dối lừa Đất, <br className="hidden sm:inline" />
          nhưng <span className="text-[#F0831F]">Đất không bao giờ</span> dối lừa Con người.
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Hồng sâm 6 năm tuổi được nuôi dưỡng tại Punggi – vùng đất thanh khiết dưới chân dãy núi Sobaek huyền thoại, niềm tự hào nghệ nhân Hàn Quốc.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/nhan-sam"
            className="na-btn-primary group inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[#B5222A] px-8 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#991C23] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>XEM CHI TIẾT</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* ─── 4. Sound Control Button (Bottom Right) ─── */}
      <button
        type="button"
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-6 right-6 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
        title={isMuted ? "Bật âm thanh video" : "Tắt âm thanh video"}
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-[#F0831F]" />}
      </button>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1.5 text-white/70 text-xs font-semibold">
        <span className="tracking-widest uppercase text-[10px]">KHÁM PHÁ</span>
        <div className="h-6 w-3.5 rounded-full border border-white/40 p-0.5 flex justify-center">
          <div className="h-1.5 w-1 rounded-full bg-[#F0831F] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
