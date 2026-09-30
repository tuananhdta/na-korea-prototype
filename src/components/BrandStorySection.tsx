"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BrandStorySection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white border-b border-[#EEEEEE]">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Tagline */}
        <div className="mb-6 font-figtree text-[11px] sm:text-xs font-semibold tracking-[0.05em] uppercase text-[#B5222A]">
          <span>Hồng Sâm Kim — Nơi Tận Tâm Trở Thành Kiệt Tác</span>
        </div>

        {/* Main Title */}
        <h2 className="font-sans text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] font-bold text-[#111111] tracking-[-0.015em] leading-[1.4] mb-4">
          Khởi Đầu Tuyệt Đẹp Từ Đất Mẹ Punggi
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-base font-medium text-[#666666] tracking-[-0.01em] leading-[1.6] mb-6">
          Lời nguyện ước cùng đất mẹ thiêng liêng và di sản 50 năm truyền thống
        </p>

        {/* Divider */}
        <div className="w-16 h-1 bg-[#B5222A] mx-auto my-6 rounded-full" />

        {/* Story Text */}
        <div className="space-y-4 max-w-3xl mx-auto mb-10 text-[#333333] leading-relaxed">
          <p className="font-sans text-lg sm:text-xl md:text-[24px] font-semibold text-[#111111] leading-[1.45] tracking-[-0.01em]">
            Hồng sâm Kim&#8217;s lưu giữ trọn vẹn ở trạng thái nguyên bản trí tuệ ngàn năm của tiền nhân cùng vẻ đẹp thanh cao và nguồn sinh khí dồi dào từ triều đại Cao Ly.
          </p>
          <p className="font-sans text-sm sm:text-[15px] md:text-base text-[#666666] leading-[1.7] tracking-[-0.01em]">
            Kể từ khi thành lập vào năm 1986, Tổng công ty Nông nghiệp Nhân sâm Punggi dưới sự dẫn dắt của nghệ nhân Kim Jeong Hwan luôn kiên định theo đuổi một mục tiêu duy nhất: kiến tạo những sản phẩm hồng sâm 6 năm tuổi thượng hạng nhất mang tới sức khỏe trường thọ cho mọi gia đình.
          </p>
        </div>

        {/* Action Button */}
        <div>
          <Link
            href="/gioi-thieu"
            className="group na-btn-secondary px-8 py-3.5 text-[13px] sm:text-sm font-bold tracking-[0.03em] uppercase inline-flex items-center gap-2"
          >
            <span>CÂU CHUYỆN THƯƠNG HIỆU</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
