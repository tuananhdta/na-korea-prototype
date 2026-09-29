"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function BrandStorySection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white border-b border-[#EEEEEE]">
      {/* Subtle background decorative pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image
          src="/images/ginseng-hero-2.jpg"
          alt="Hình nền thương hiệu"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div aria-hidden="true" className="mb-3 flex items-center justify-center gap-1.5 text-[#B5222A]">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#B5222A]">DI SẢN 50 NĂM PUNGGI</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-[#666666] text-xs sm:text-sm md:text-base font-normal tracking-wide">
            Lời nguyện ước cùng đất mẹ thiêng liêng
          </span>
          <h2 className="font-serif mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight max-w-3xl leading-snug">
            Khởi đầu tuyệt đẹp của Tổng công ty Nông nghiệp Nhân sâm Punggi
          </h2>
          <div className="w-12 h-0.5 bg-[#B5222A] my-4" />
        </div>

        {/* 2-Column Content (Photo + Brand Story) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heritage Farming Photography */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#EEEEEE] shadow-lg group">
              <Image
                src="/images/production.jpg"
                alt="Di sản trồng sâm Punggi 6 năm tuổi - Kim's Red Ginseng"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 bg-[#B5222A] text-[11px] font-bold tracking-wider uppercase rounded mb-2">
                  Tâm Huyết Nghệ Nhân
                </span>
                <p className="text-sm font-medium leading-relaxed drop-shadow-sm">
                  Vùng núi Punggi — Nơi thổ nhưỡng và khí hậu tối ưu cho hàm lượng Saponin cao nhất Hàn Quốc.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Action */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-3.5 inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#B5222A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#B5222A]">
                Hồng sâm Kim — Nơi tận tâm trở thành kiệt tác
              </span>
            </div>

            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#111111] leading-snug">
              Hồng sâm Kim&#8217;s lưu giữ trọn vẹn ở trạng thái nguyên bản trí tuệ ngàn năm của tiền nhân cùng vẻ đẹp thanh cao và nguồn sinh khí dồi dào từ triều đại Cao Ly.
            </h3>

            {/* Divider */}
            <div className="w-32 h-px bg-[#EEEEEE] my-6" />

            <p className="text-sm sm:text-base text-[#4B4F52] leading-relaxed mb-8">
              Kể từ khi thành lập vào năm 1986, Tổng công ty Nông nghiệp Nhân sâm Punggi luôn kiên định theo đuổi một mục tiêu duy nhất: kiến tạo những sản phẩm hồng sâm thượng hạng nhất từ củ nhân sâm 6 năm tuổi đạt chuẩn bảo tồn thiên nhiên.
            </p>

            <div>
              <Link
                href="/gioi-thieu"
                className="group na-btn-secondary px-7 py-3.5 text-xs font-bold tracking-wider uppercase"
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
