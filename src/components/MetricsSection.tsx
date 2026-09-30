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
} from "lucide-react";
import { SectionIndicator } from "@/components/SectionIndicator";

interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  lines: string[];
  icon: React.ElementType;
  href: string;
  badge: string;
  colorScheme: {
    iconColor: string;
    iconBg: string;
    iconBorder: string;
    glowShadow: string;
  };
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
    colorScheme: {
      iconColor: "text-[#D97706]",
      iconBg: "bg-amber-50",
      iconBorder: "border-amber-200/90",
      glowShadow: "group-hover:shadow-[0_8px_20px_rgba(217,119,6,0.25)]",
    },
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
    colorScheme: {
      iconColor: "text-[#0284C7]",
      iconBg: "bg-sky-50",
      iconBorder: "border-sky-200/90",
      glowShadow: "group-hover:shadow-[0_8px_20px_rgba(2,132,199,0.25)]",
    },
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
    colorScheme: {
      iconColor: "text-[#4B193E]",
      iconBg: "bg-[#4B193E]/5",
      iconBorder: "border-[#4B193E]/25",
      glowShadow: "group-hover:shadow-[0_8px_20px_rgba(75,25,62,0.25)]",
    },
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
    colorScheme: {
      iconColor: "text-[#16A34A]",
      iconBg: "bg-emerald-50",
      iconBorder: "border-emerald-200/90",
      glowShadow: "group-hover:shadow-[0_8px_20px_rgba(22,163,74,0.25)]",
    },
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
    colorScheme: {
      iconColor: "text-[#EA580C]",
      iconBg: "bg-orange-50",
      iconBorder: "border-orange-200/90",
      glowShadow: "group-hover:shadow-[0_8px_20px_rgba(234,88,12,0.25)]",
    },
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
    colorScheme: {
      iconColor: "text-[#E11D48]",
      iconBg: "bg-rose-50",
      iconBorder: "border-rose-200/90",
      glowShadow: "group-hover:shadow-[0_8px_20px_rgba(225,29,72,0.25)]",
    },
  },
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
      { threshold: 0.12 }
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
      className="relative overflow-hidden border-y border-[#E8E4DD] bg-[#F5F3EF] py-12 sm:py-16 lg:py-20 font-sans"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[1080px] text-center mb-10 sm:mb-14">
          {/* Section 2: 1 chấm + 1 thanh ngang + 3 chấm */}
          <SectionIndicator activeIndex={2} total={5} />

          <p className="mb-3 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#888888]">
            Năng Lực &amp; Uy Tín Thương Hiệu
          </p>

          <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px] lg:text-[32px]">
            Hồng Sâm Kim — Khẳng Định Vị Thế Dẫn Đầu
          </h2>

          <p className="mt-4 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#111111] max-w-[860px] mx-auto">
            Thương hiệu Hồng sâm 6 năm tuổi Kim&apos;s Red Ginseng thượng hạng từ vùng núi Punggi, Hàn Quốc — Kế thừa trọn vẹn tinh hoa bí quyết canh tác &amp; chế biến của Nghệ nhân Kim Jeong Hwan.
          </p>
        </div>

        {/* Six clean luxury centered metric cards */}
        <div className="relative">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {METRICS.map((metric, idx) => {
              const IconComponent = metric.icon;
              const currentCount = counts[idx];
              const { iconColor, iconBg, iconBorder, glowShadow } = metric.colorScheme;

              return (
                <Link
                  key={metric.id}
                  href={metric.href}
                  title={`Xem thông tin: ${metric.lines.join(" ")}`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                  className={`group relative flex flex-col items-center justify-center rounded-2xl border border-[#EEEEEE] bg-white p-6 sm:p-7 text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B193E] focus-visible:ring-offset-2 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  } hover:-translate-y-1.5 hover:border-[#4B193E]/40 hover:shadow-[0_12px_28px_rgba(75,25,62,0.12)]`}
                >
                  {/* Top: Themed Colorful Icon with Micro-Interaction Animation */}
                  <div className="mb-3.5 flex items-center justify-center">
                    <div
                      className={`flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-2xl border ${iconBg} ${iconBorder} ${iconColor} ${glowShadow} transition-all duration-300 group-hover:scale-112 group-hover:rotate-6 shadow-xs`}
                    >
                      <IconComponent className="h-6 w-6 stroke-[2]" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Metric Value (Figtree - JungKwanJang Official Numeric Typography) */}
                  <div className="flex items-baseline justify-center gap-1 font-figtree">
                    <span className="font-figtree text-4xl font-extrabold leading-none tracking-tight text-[#4B193E] sm:text-[46px]">
                      {currentCount}
                    </span>
                    <span className="font-figtree text-lg font-bold leading-none text-[#4B193E] sm:text-xl">
                      {metric.suffix}
                    </span>
                  </div>

                  {/* Expandable Accent Divider Line on Hover */}
                  <div className="w-8 h-[2px] bg-[#4B193E]/20 my-3 mx-auto rounded-full transition-all duration-300 group-hover:w-14 group-hover:bg-[#4B193E]" />

                  {/* Title (Pretendard Sans) */}
                  <h3 className="font-sans text-sm sm:text-base font-bold uppercase leading-snug tracking-[-0.01em] text-[#111111] group-hover:text-[#4B193E] transition-colors">
                    {metric.lines[0]}
                  </h3>

                  {/* Description Subtitle (Pretendard Sans) */}
                  <p className="mt-1 font-sans text-xs sm:text-sm font-normal text-[#666666] leading-relaxed max-w-[250px]">
                    {metric.lines.slice(1).join(" ")}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
