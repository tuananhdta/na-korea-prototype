"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function HeroSlider() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section
      data-floating-contact-hero
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black text-white select-none"
    >
      {/* ─── 1. Fullscreen YouTube Background Video (Scaled to crop all YouTube UI elements) ─── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          src={`https://www.youtube.com/embed/p9detg0Rt_Q?autoplay=1&mute=${
            isMuted ? 1 : 0
          }&controls=0&loop=1&playlist=p9detg0Rt_Q&playsinline=1&rel=0&disablekb=1&modestbranding=1&iv_load_policy=3&autohide=1&showinfo=0`}
          title="Video Giới Thiệu Thương Hiệu Hồng Sâm Kim"
          className="absolute left-1/2 top-1/2 min-w-[135vw] min-h-[135vh] w-[140vw] h-[140vh] -translate-x-1/2 -translate-y-1/2 object-cover border-0 scale-125 pointer-events-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>

      {/* ─── 2. Subtle Dark Gradient Overlay (Ensures White Header & Logo Are 100% Readable) ─── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40 pointer-events-none" />

      {/* ─── 3. Sound Control Button (Bottom Right) ─── */}
      <button
        type="button"
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-6 right-6 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
        title={isMuted ? "Bật âm thanh video" : "Tắt âm thanh video"}
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-[#F0831F]" />}
      </button>
    </section>
  );
}
