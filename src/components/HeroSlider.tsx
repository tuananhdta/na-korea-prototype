"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string[];
  description: string[];
  link: string;
}

const slides: Slide[] = [
  {
    image: "/images/slide_1.jpg",
    title: [
      "Lời ước hẹn cùng lòng đất mẹ",
      "Khởi đầu tuyệt mỹ của Tổng công ty Nông nghiệp Nhân sâm Punggi",
    ],
    description: [
      "Tổng công ty Nông nghiệp Nhân sâm Punggi gửi trọn tấm lòng chân thành vào mảnh đất màu mỡ.",
      "Chúng tôi gìn giữ trọn vẹn sự kiên định nuôi trồng nhân sâm 6 năm tuổi trứ danh vùng Punggi.",
    ],
    link: "/summary",
  },
  {
    image: "/images/slide_2.jpg",
    title: [
      "Con người có thể dối lừa Đất,",
      "nhưng Đất không bao giờ dối lừa Con người.",
    ],
    description: [
      "Hồng sâm 6 năm tuổi được nuôi dưỡng tại Punggi – vùng đất thanh khiết dưới chân dãy núi Sobaek huyền thoại,",
      "niềm tự hào của những nghệ nhân nhân sâm Hàn Quốc.",
    ],
    link: "/greeting",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => {
      clearInterval(timer);
    };
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section data-floating-contact-hero className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#111] text-white">
      {/* Slides with Ken Burns slow zoom animation */}
      {slides.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image Container with Smooth Slow Zoom-Out */}
            <div
              className={`absolute inset-0 w-full h-full ${
                isActive ? "na-hero-image" : "scale-[1.15]"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title.join(" ")}
                fill
                sizes="100vw"
                preload={idx === 0}
                unoptimized
                className="object-cover object-center"
              />
            </div>

            {/* Subtle Gradient Overlay so the image is fully bright and visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 pointer-events-none" />

            {/* Slide Text Content */}
            <div className={`${isActive ? "na-hero-content" : ""} absolute inset-0 z-20 max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col justify-center items-center text-center pt-16 ${isActive ? "" : "pointer-events-none"}`}>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal leading-tight md:leading-[1.28] text-white max-w-4xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {slide.title.map((line, lIdx) => (
                  <span key={lIdx} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <p className="font-sans mt-5 md:mt-6 text-sm sm:text-base md:text-[18px] text-gray-200 font-normal max-w-2xl leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                {slide.description.map((line, lIdx) => (
                  <span key={lIdx} className="block">
                    {line}
                  </span>
                ))}
              </p>

              {/* VIEW MORE Button */}
              <div className="mt-8 md:mt-10">
                <Link
                  href={slide.link}
                  className="inline-block px-10 py-3 border border-white/80 text-white font-sans text-xs md:text-sm font-normal tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-xs"
                >
                  XEM CHI TIẾT
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Slide trước"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 text-white/70 hover:text-white transition-colors"
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Slide tiếp theo"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 text-white/70 hover:text-white transition-colors"
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
      </button>

      {/* Bottom Controls: Pagination Dots & Custom Scroll Down Indicator */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex flex-col items-center justify-center gap-4 pointer-events-none">
        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 pointer-events-auto">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Chuyển đến slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                idx === current
                  ? "w-7 h-1.5 bg-[#b5222a] rounded-full shadow-sm"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70 rounded-full"
              }`}
            />
          ))}
        </div>

        {/* Distinctive Animated Scroll Down Indicator */}
        <button
          onClick={() => {
            const nextSec = document.getElementById("products");
            if (nextSec) {
              nextSec.scrollIntoView({ behavior: "smooth" });
            } else {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }
          }}
          aria-label="Cuộn xuống khám phá"
          className="group pointer-events-auto flex flex-col items-center gap-1 text-white/70 hover:text-white transition-all duration-300 transform hover:translate-y-0.5"
        >
          <div className="w-5 h-9 rounded-full border-2 border-white/60 group-hover:border-white flex items-start justify-center p-1 backdrop-blur-xs transition-colors shadow-sm">
            <div className="w-1.5 h-2 bg-white rounded-full animate-bounce mt-0.5" />
          </div>
          <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-medium text-white/80 group-hover:text-white drop-shadow-sm">
            Khám phá
          </span>
        </button>
      </div>
    </section>
  );
}
