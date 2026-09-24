"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BrandStorySection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ginseng-hero-2.jpg"
          alt="Hình nền thương hiệu"
          fill
          sizes="100vw"
          className="object-cover object-top opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div aria-hidden="true" className="mb-4 flex h-4 w-16 items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5222A]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0831F]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5222A]" />
          </div>
          <span className="text-[#666666] text-sm md:text-base font-normal tracking-wide">
            Lời nguyện ước cùng đất mẹ thiêng liêng
          </span>
          <h2 className="font-sans mt-2 text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#2D2D2D] tracking-tight">
            Khởi đầu tuyệt đẹp của Tổng công ty Nông nghiệp Nhân sâm Punggi
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Video Player */}
          <div className="lg:col-span-7">
            <div className="na-media-lift group relative aspect-video w-full overflow-hidden rounded-xl border border-[#E5E5E5] bg-black">
              <iframe
                src="https://www.youtube.com/embed/F0obQn6c_50?rel=0"
                title="Video giới thiệu thương hiệu Kim's Red Ginseng - Nhân sâm Punggi"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Text & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-3.5 inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#B5222A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#B5222A]">
                Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác
              </span>
            </div>

            <h3 className="font-sans text-lg sm:text-xl md:text-[20px] font-normal text-[#2D2D2D] leading-snug">
              Hồng sâm Kim&#8217;s lưu giữ trọn vẹn ở trạng thái nguyên bản trí tuệ ngàn năm của tiền nhân cùng vẻ đẹp thanh cao và nguồn sinh khí dồi dào từ triều đại Cao Ly.
            </h3>

            {/* Divider */}
            <div className="w-48 sm:w-72 h-[1px] bg-[#E5E5E5] my-6" />

            <p className="text-[15px] sm:text-[16px] text-[#4B4F52] leading-relaxed">
              Kể từ khi thành lập vào năm 1986, Tổng công ty Nông nghiệp Nhân sâm Punggi luôn kiên định theo đuổi một mục tiêu duy nhất: kiến tạo những sản phẩm hồng sâm thượng hạng nhất.
            </p>

            <div className="mt-10">
              <Link
                href="/gioi-thieu"
                className="group na-btn-outline px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase"
              >
                <span>CÂU CHUYỆN THƯƠNG HIỆU</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
