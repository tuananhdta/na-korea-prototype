"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function GinsengSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div aria-hidden="true" className="mb-4 flex h-4 w-16 items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B5222A]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#F0831F]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#B5222A]" />
            </div>

            <span className="text-[#666666] text-sm md:text-base font-normal">
              Lưu truyền ngàn năm qua từng hơi thở<br />kết tinh tinh hoa đất trời
            </span>

            <h2 className="font-sans mt-2 text-3xl md:text-[32px] font-extrabold text-[#2D2D2D] tracking-tight">
              Nhân sâm Hàn Quốc
            </h2>

            {/* Divider */}
            <div className="w-24 md:w-72 h-[1px] bg-[#E5E5E5] my-6 md:my-8" />

            <div className="max-w-md">
            <h3 className="font-sans text-xl md:text-[22px] font-semibold text-[#B5222A] mb-2">
                Nhân sâm Punggi
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#4B4F52] leading-relaxed">
                Hàm lượng saponin đạt mức tối đa và vượt trội nhờ kết cấu củ rắn chắc, hương thơm sâm tự nhiên nồng nàn hơn hẳn nhân sâm từ các khu vực khác.
              </p>
            </div>
          </div>

          {/* Right 2 Fancy Boxes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Box 1: Nhân sâm là gì? */}
            <Link
              href="/ginseng"
              className="na-media-lift group relative flex h-[380px] flex-col justify-between overflow-hidden rounded-2xl p-7 text-white sm:h-[420px]"
            >
              <Image
                src="/images/ginseng-fresh-card.jpg"
                alt="Nhân sâm là gì?"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 transition-colors duration-500 group-hover:via-black/40" />

              <div className="relative z-10 pt-4">
                <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
                  Nhân sâm là gì?
                </h3>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white group-hover:text-[#ff8a90] transition-colors">
                <span>Xem thêm</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>

            {/* Box 2: Hồng sâm là gì? */}
            <Link
              href="/red-ginseng"
              className="na-media-lift group relative flex h-[380px] flex-col justify-between overflow-hidden rounded-2xl p-7 text-white sm:h-[420px]"
            >
              <Image
                src="/images/red-ginseng-steamed-card.jpg"
                alt="Hồng sâm là gì?"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 transition-colors duration-500 group-hover:via-black/40" />

              <div className="relative z-10 pt-4">
                <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
                  Hồng sâm là gì?
                </h3>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white group-hover:text-[#ff8a90] transition-colors">
                <span>Xem thêm</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
