"use client";

import { useState, useEffect } from "react";
import { ChevronUp, ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Circular progress radius
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-7 right-7 z-40 transition-all duration-400 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-6 scale-90 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Cuộn lên đầu trang"
        className="group relative w-12 h-12 rounded-full bg-[#181818]/95 hover:bg-[#B5222A] text-white backdrop-blur-md shadow-xl border border-white/20 hover:border-transparent flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        {/* SVG Circular Scroll Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          viewBox="0 0 50 50"
        >
          <circle
            cx="25"
            cy="25"
            r={radius}
            className="stroke-white/15"
            strokeWidth="2.5"
            fill="none"
          />
          <circle
            cx="25"
            cy="25"
            r={radius}
            className="stroke-[#b5222a] group-hover:stroke-white transition-all duration-200"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Custom distinctive navigation icon */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300 stroke-[2.5]" />
        </div>

        {/* Tooltip on hover */}
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black/85 text-white text-[10px] font-medium tracking-wide px-2.5 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Lên đầu trang
        </span>
      </button>
    </div>
  );
}
