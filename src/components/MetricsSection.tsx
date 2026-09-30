"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Award,
  PackageCheck,
  Store,
  Handshake,
  ShieldCheck,
  Sprout,
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
    value: 50,
    suffix: "+",
    lines: [
      "Năm truyền thống",
      "canh tác & chế biến",
      "hồng sâm Punggi",
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
      "& thị trường quốc tế",
    ],
    icon: Handshake,
    href: "/gioi-thieu",
    badge: "Đối Tác",
  },
  {
    id: "quality",
    value: 100,
    suffix: "%",
    lines: [
      "Sâm Punggi 6 năm tuổi,",
      "đạt chuẩn quốc tế",
    ],
    icon: ShieldCheck,
    href: "/chung-chi-chat-luong",
    badge: "Cam Kết",
  },
  {
    id: "products",
    value: 32,
    suffix: "+",
    lines: [
      "Dòng sản phẩm",
      "Hồng sâm thượng hạng",
    ],
    icon: PackageCheck,
    href: "/san-pham",
    badge: "Danh Mục",
  },
  {
    id: "ginseng",
    value: 6,
    suffix: "năm",
    lines: [
      "Hồng sâm Punggi",
      "tuổi thượng hạng",
    ],
    icon: Sprout,
    href: "/nhan-sam",
    badge: "Nguồn Gốc",
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
  const [counts, setCounts] = useState<number[]>(() =>
    METRICS.map(() => 0)
  );

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

    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : 1800;

    if (duration === 0) {
      setCounts(METRICS.map((m) => m.value));
      return;
    }

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
      aria-label="Tổng quan năng lực & uy tín thương hiệu Hồng Sâm Kim"
      className="relative overflow-hidden border-y border-[#E8E4DD] bg-[#F5F3EF] py-16 sm:py-24"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="mb-4 font-figtree text-[11px] sm:text-xs font-semibold tracking-[0.05em] uppercase text-[#B5222A]">
            <span>Năng Lực & Uy Tín Thương Hiệu</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#111111] tracking-[-0.015em] leading-[1.4]">
            Hồng Sâm Kim — Khẳng Định Vị Thế Dẫn Đầu
          </h2>
          <div className="w-16 h-1 bg-[#B5222A] mx-auto my-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-[#666666] leading-[1.7] tracking-[-0.01em]">
            Thương hiệu Hồng sâm 6 năm tuổi Kim&apos;s Red Ginseng thượng hạng từ vùng núi Punggi, Hàn Quốc — Kế thừa trọn vẹn tinh hoa bí quyết canh tác &amp; chế biến của Nghệ nhân Kim Jeong Hwan.
          </p>
        </div>

        {/* Six interactive metric cards */}
        <div className="relative mb-16 sm:mb-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {METRICS.map((metric, idx) => {
              const IconComponent = metric.icon;
              const currentCount = counts[idx];

              return (
                <Link
                  key={metric.id}
                  href={metric.href}
                  title={`Click để xem chi tiết: ${metric.lines.join(" ")}`}
                  style={{ transitionDelay: `${idx * 90}ms` }}
                  className={`group relative flex min-h-[284px] flex-col items-center rounded-xl border-2 border-[#B5222A]/80 bg-white px-6 pb-7 pt-14 text-center shadow-[0_8px_24px_rgba(40,28,18,0.05)] transition-[opacity,transform,border-color,box-shadow] duration-700 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B5222A] focus-visible:ring-offset-4 motion-reduce:transition-none motion-reduce:transform-none ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  } hover:-translate-y-1 hover:border-[#B5222A] hover:shadow-[0_14px_30px_rgba(181,34,42,0.14)] motion-reduce:translate-y-0 motion-reduce:opacity-100`}
                >
                  {/* Circular icon medallion overlapping the card */}
                  <div className="absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#B5222A] bg-[#F5F3EF] p-1.5 transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:transition-none">
                    <div className="flex h-full w-full items-center justify-center rounded-full border border-[#D4A359] bg-[#1E0A0D] text-[#D4A359] shadow-[0_4px_12px_rgba(30,10,13,0.18)]">
                      <IconComponent className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="flex items-baseline justify-center gap-1 font-figtree">
                    <span className="text-5xl font-extrabold leading-none tracking-[-0.04em] text-[#B5222A] sm:text-[56px]">
                      {currentCount}
                    </span>
                    <span className="text-xl font-bold leading-none text-[#B5222A] sm:text-2xl">
                      {metric.suffix}
                    </span>
                  </div>

                  <h3 className="mt-4 font-sans text-base font-bold uppercase leading-[1.35] tracking-[0.02em] text-[#111111] sm:text-lg">
                    {metric.lines[0]}
                  </h3>

                  <p className="mt-2 max-w-[250px] font-sans text-sm leading-6 text-[#666666]">
                    {metric.lines.slice(1).join(" ")}
                  </p>

                  <div className="mt-auto flex items-center gap-2 pt-5 font-sans text-xs font-semibold uppercase tracking-[0.04em] text-[#B5222A] transition-[gap] duration-300 group-hover:gap-3">
                    <span>Xem chi tiết</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#B5222A]/50 transition-colors duration-300 group-hover:bg-[#B5222A] group-hover:text-white">
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
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
