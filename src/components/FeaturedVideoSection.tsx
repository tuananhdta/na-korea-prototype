"use client";

import { Play } from "lucide-react";

export function FeaturedVideoSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#FFFDF9] border-b border-[#E8DFD1]/60 overflow-hidden">
      {/* Subtle Warm Grid Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#2D2D2D 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          {/* Ginseng Heartbeat Dots */}
          <div aria-hidden="true" className="mb-3.5 flex h-4 w-16 items-center justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5222A]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0831F]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5222A]" />
          </div>

          <span className="text-[#F0831F] text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] mb-2">
            Hành Trình Di Sản 50 Năm
          </span>

          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D2D2D] tracking-tight leading-tight">
            Khởi Đầu Tuyệt Đẹp Của Vùng Đất Hồng Sâm Punggi
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B4F52] leading-relaxed max-w-2xl">
            Khám phá quy trình nuôi dưỡng & chế tác hồng sâm 6 năm tuổi thượng hạng vùng núi Punggi – nơi bí quyết truyền thừa của nghệ nhân Kim Jeong Hwan tạo nên những kiệt tác sức khỏe.
          </p>
        </div>

        {/* 1 Featured Cinematic Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="na-media-lift group relative aspect-video w-full overflow-hidden rounded-2xl border border-[#E5E5E5] bg-black shadow-2xl transition-all duration-500 hover:border-[#B5222A]/40 hover:shadow-[0_20px_50px_rgba(181,34,42,0.15)]">
            <iframe
              src="https://www.youtube.com/embed/F0obQn6c_50?rel=0"
              title="Video giới thiệu di sản Hồng Sâm Kim - Punggi Korea"
              loading="lazy"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Caption underneath */}
          <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs sm:text-sm font-medium text-[#666666]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5222A]" />
            <span>Phim tư liệu chính thức về di sản Hồng sâm Kim & Vùng trồng Punggi Hàn Quốc</span>
          </div>
        </div>
      </div>
    </section>
  );
}
