"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionIndicator } from "@/components/SectionIndicator";

export function BrandStorySection() {
  return (
    <section
      className="relative overflow-hidden border-b border-[#EEEEEE] bg-white bg-left-top bg-repeat py-16 font-sans sm:py-20 lg:py-[120px]"
      style={{ backgroundImage: "url('/images/brand-story-root.jpg')" }}
    >
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
        <div className="mx-auto max-w-[1080px] text-center">
          {/* Section 1: 1 thanh ngang + 4 chấm */}
          <SectionIndicator activeIndex={1} total={5} />

          <p className="mb-3 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#888888]">
            Từ nơi trồng nhân sâm bán hoang dã tại Triều Tiên
          </p>

          <h2 className="mb-0 font-sans text-2xl font-bold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px] lg:text-[32px]">
            Cùng lịch sử 500 năm vùng Punggi vươn mình ra Thế Giới
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-8 md:grid-cols-2 lg:mt-20 lg:gap-5">
          <div className="relative aspect-video overflow-hidden bg-[#F5F3EF]">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src="https://www.youtube.com/embed/F0obQn6c_50?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0"
              title="김정환홍삼 '시간이 증명하는 진짜 홍삼'"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="max-w-[530px] text-left md:ml-0">
            <p className="font-sans text-base font-normal leading-6 text-[#111111]">
              Hồng sâm được tạo nên bởi sự chân thành. Điều{" "}
              <strong className="font-bold">Hồng Sâm Kim</strong> muốn mang đến chính
              là sức khoẻ và một trái tim chân thành đến người tiêu dùng.
            </p>

            <Link
              href="/gioi-thieu"
              className="group mt-8 inline-flex items-center gap-4 rounded-lg bg-[#4B193E] px-7 py-3.5 font-sans text-[15px] font-bold leading-[1] tracking-[-0.01em] text-white transition-colors hover:bg-[#3A1230] sm:mt-10"
            >
              <span>Câu chuyện thương hiệu</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current">
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
