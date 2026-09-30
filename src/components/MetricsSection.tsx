"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Award,
  Store,
  Handshake,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  lines: string[];
  icon: React.ElementType;
  href: string;
  badge: string;
}

const METRICS: MetricItem[] = [
  {
    id: "experience",
    value: 10,
    suffix: "+",
    lines: [
      "Năm kinh nghiệm",
      "trong lĩnh vực nhập khẩu",
      "và phát triển thương hiệu",
    ],
    icon: Award,
    href: "/gioi-thieu",
    badge: "Kinh Nghiệm",
  },
  {
    id: "distributors",
    value: 130,
    suffix: "+",
    lines: [
      "Nhà phân phối &",
      "đại lý trên toàn quốc",
    ],
    icon: Store,
    href: "/dang-ky-dai-ly",
    badge: "Hệ Thống",
  },
  {
    id: "partners",
    value: 11,
    suffix: "+",
    lines: [
      "Đối tác chiến lược",
      "Hàn Quốc",
    ],
    icon: Handshake,
    href: "/ve-nha-nhap-khau",
    badge: "Đối Tác",
  },
  {
    id: "quality",
    value: 100,
    suffix: "%",
    lines: [
      "Sản phẩm chính hãng,",
      "nguồn gốc rõ ràng",
    ],
    icon: ShieldCheck,
    href: "/chung-chi-chat-luong",
    badge: "Cam Kết",
  },
];

const CERTIFICATIONS = [
  { code: "GMP", label: "Chuẩn sản xuất GMP", sub: "Hàn Quốc" },
  { code: "HACCP", label: "An toàn thực phẩm", sub: "Quốc tế" },
  { code: "ISO 22000", label: "Quản lý chất lượng", sub: "Tiêu chuẩn ISO" },
  { code: "BỘ CÔNG THƯƠNG", label: "Tem chống hàng giả", sub: "Kiểm định chính ngạch" },
];

export function MetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const nextCounts = METRICS.map((m) =>
        Math.floor(easeProgress * m.value)
      );

      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(METRICS.map((m) => m.value));
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      aria-label="Tổng quan năng lực & chứng chỉ NA Korea"
      className="relative py-16 sm:py-24 bg-white border-y border-[#EEEEEE] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="mb-4 font-figtree text-[11px] sm:text-xs font-semibold tracking-[0.05em] uppercase text-[#B5222A]">
            <span>Năng Lực & Uy Tín Thương Hiệu</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#111111] tracking-[-0.015em] leading-[1.4]">
            NA Korea — Khẳng Định Vị Thế Dẫn Đầu
          </h2>
          <div className="w-16 h-1 bg-[#B5222A] mx-auto my-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-[#666666] leading-[1.7] tracking-[-0.01em]">
            Đại diện phân phối chính thức các dòng sản phẩm Hồng sâm 6 năm tuổi Kim&apos;s Red Ginseng thượng hạng từ vùng núi Punggi, Hàn Quốc tại Việt Nam.
          </p>
        </div>

        {/* 4 Royal Medallions Row */}
        <div className="relative mb-16 sm:mb-20">
          {/* Connecting Ribbon Line (Desktop) */}
          <div className="absolute top-20 left-24 right-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4A359]/40 to-transparent pointer-events-none hidden lg:block" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 justify-items-center">
            {METRICS.map((metric, idx) => {
              const IconComponent = metric.icon;
              const currentCount = counts[idx];

              return (
                <Link
                  key={metric.id}
                  href={metric.href}
                  className="group relative flex flex-col items-center text-center w-full max-w-[220px] focus:outline-none"
                  title={`Click để xem chi tiết: ${metric.lines.join(" ")}`}
                >
                  {/* Royal Dark Medallion Circle */}
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-[#1E0A0D] border-2 border-[#D4A359]/40 group-hover:border-[#D4A359] shadow-xl group-hover:shadow-[0_0_30px_rgba(240,131,31,0.3)] transition-all duration-500 flex flex-col items-center justify-center p-4 overflow-hidden group-hover:-translate-y-2">
                    
                    {/* Inner Gold Accent Ring */}
                    <div className="absolute inset-1.5 rounded-full border border-[#D4A359]/20 group-hover:border-[#D4A359]/50 transition-colors duration-500 pointer-events-none" />

                    {/* Subtle Radial Glow Effect */}
                    <div className="absolute inset-0 bg-radial from-[#D4A359]/15 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Top Icon Badge in Gold */}
                    <div className="relative z-10 w-8 h-8 rounded-full bg-[#D4A359]/15 border border-[#D4A359]/30 flex items-center justify-center text-[#D4A359] group-hover:scale-110 transition-transform duration-300 mb-1">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    {/* Counter Number (Figtree) */}
                    <div className="relative z-10 flex items-baseline justify-center gap-0.5">
                      <span className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight font-figtree">
                        {currentCount}
                      </span>
                      <span className="text-xl sm:text-2xl font-extrabold text-[#D4A359] font-figtree">
                        {metric.suffix}
                      </span>
                    </div>

                    {/* Category Tag inside Circle bottom */}
                    <div className="relative z-10 mt-1 px-2.5 py-0.5 rounded-full bg-[#D4A359]/10 border border-[#D4A359]/20 text-[10px] font-bold text-[#D4A359] tracking-widest uppercase font-figtree">
                      {metric.badge}
                    </div>

                    {/* Click Arrow Hint Icon */}
                    <div className="absolute top-2.5 right-2.5 z-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-[#D4A359] bg-[#D4A359]/20 p-1 rounded-full">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Clean Text Description OUTSIDE the Circle */}
                  <div className="mt-4 px-2 space-y-1">
                    <p className="font-sans text-sm sm:text-base font-semibold text-[#111111] leading-[1.45] tracking-[-0.01em] group-hover:text-[#B5222A] transition-colors">
                      {metric.lines[0]}
                    </p>
                    {metric.lines.slice(1).map((line, lineIdx) => (
                      <p key={lineIdx} className="font-sans text-[13px] sm:text-sm text-[#333333] leading-[1.6] tracking-[-0.01em]">
                        {line}
                      </p>
                    ))}

                    <div className="pt-1.5 inline-flex items-center gap-1 font-sans text-[12px] sm:text-[13px] font-semibold text-[#B5222A] leading-[1.5] opacity-80 group-hover:opacity-100 transition-opacity">
                      <span>Xem chi tiết</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Certification Badges Strip */}
        <div className="pt-8 border-t border-[#EEEEEE]/80">
          <p className="text-center font-figtree text-[11px] sm:text-xs font-semibold uppercase tracking-[0.05em] text-[#666666] mb-6">
            Tiêu Chuẩn & Chứng Nhận Chất Lượng Quốc Tế
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.code}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-white border border-[#EEEEEE] hover:border-[#B5222A]/30 transition-colors shadow-2xs"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#B5222A]/10 border border-[#B5222A]/20 flex items-center justify-center font-bold text-[#B5222A] text-xs">
                  {cert.code === "BỘ CÔNG THƯƠNG" ? "BCT" : cert.code}
                </div>
                <div className="min-w-0">
                  <p className="font-sans text-xs sm:text-sm font-semibold leading-[1.35] text-[#111111] truncate">
                    {cert.label}
                  </p>
                  <p className="font-sans text-[11px] sm:text-xs leading-[1.5] text-[#666666] truncate">
                    {cert.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
