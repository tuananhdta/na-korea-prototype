"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SectionIndicator } from "@/components/SectionIndicator";

interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  lines: string[];
  href: string;
}

const METRICS: MetricItem[] = [
  {
    id: "experience",
    value: 40,
    suffix: "+",
    lines: ["Năm hành trình", "phát triển"],
    href: "/lich-su-hinh-thanh",
  },
  {
    id: "countries",
    value: 50,
    suffix: "+",
    lines: ["Quốc gia", "trên Thế Giới"],
    href: "/gioi-thieu",
  },
  {
    id: "partners",
    value: 60,
    suffix: "+",
    lines: ["Đối tác", "chiến lược"],
    href: "/gioi-thieu",
  },
  {
    id: "certificates",
    value: 20,
    suffix: "+",
    lines: ["Chứng chỉ", "Quốc Tế"],
    href: "/chung-chi-chat-luong",
  },
  {
    id: "quality",
    value: 100,
    suffix: "%",
    lines: ["Hồng sâm 6 năm tuổi", "Punggi"],
    href: "/nhan-sam",
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
            Thương hiệu Hồng sâm 6 năm tuổi Hồng Sâm Kim thượng hạng từ vùng núi Punggi, Hàn Quốc — Kế thừa trọn vẹn tinh hoa bí quyết canh tác &amp; chế biến của Nghệ nhân Kim Jeong Hwan.
          </p>
        </div>

        {/* 5 Circular Metric Badges (Option B: Circle badge on top + Text underneath) */}
        <div className="flex flex-wrap items-start justify-center gap-5 sm:gap-8 lg:gap-6 xl:gap-8 max-w-[1320px] mx-auto">
          {METRICS.map((metric, idx) => {
            const currentCount = counts[idx];

            return (
              <Link
                key={metric.id}
                href={metric.href}
                title={`Xem thông tin: ${metric.lines.join(" ")}`}
                style={{ transitionDelay: `${idx * 80}ms` }}
                className={`group relative flex flex-col items-center justify-start text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4543] focus-visible:ring-offset-2 transition-all duration-300 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } w-[135px] min-[380px]:w-[155px] sm:w-[185px] lg:w-[190px] xl:w-[210px]`}
              >
                {/* Circle badge with Dark Slate / Green background matching Footer */}
                <div className="relative flex h-28 w-28 min-[380px]:h-32 min-[380px]:w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 items-center justify-center rounded-full bg-gradient-to-b from-[#577674] via-[#3E5654] to-[#243533] border-2 border-[#D4A359]/40 shadow-[0_8px_20px_rgba(30,43,42,0.2)] transition-all duration-300 group-hover:scale-108 group-hover:border-[#D4A359] group-hover:shadow-[0_12px_28px_rgba(212,163,89,0.35)] overflow-hidden">
                  {/* Inner subtle glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20" />

                  {/* Metric Number with elevated & enlarged superscript suffix (+ / %) */}
                  <div className="relative z-10 flex items-start justify-center font-figtree">
                    <span className="font-figtree text-3xl min-[380px]:text-4xl sm:text-4xl md:text-[44px] font-extrabold leading-none tracking-tight text-white drop-shadow-sm">
                      {currentCount}
                    </span>
                    <span className="font-figtree text-xl min-[380px]:text-2xl sm:text-[26px] md:text-3xl font-extrabold leading-none text-white ml-0.5 sm:ml-1 -mt-1 sm:-mt-2 drop-shadow-sm">
                      {metric.suffix}
                    </span>
                  </div>
                </div>

                {/* Expandable Accent Gold Dash */}
                <div className="w-5 sm:w-6 h-[2px] bg-[#D4A359]/40 my-2.5 sm:my-3 mx-auto rounded-full transition-all duration-300 group-hover:w-10 group-hover:bg-[#D4A359]" />

                {/* Text description underneath */}
                <div className="space-y-0.5">
                  <h3 className="font-sans text-xs min-[380px]:text-sm sm:text-base font-bold text-[#111111] uppercase tracking-tight sm:tracking-normal group-hover:text-[#2D4543] transition-colors">
                    {metric.lines[0]}
                  </h3>
                  <p className="font-sans text-[11px] min-[380px]:text-xs sm:text-sm text-[#444444] font-medium leading-snug">
                    {metric.lines[1]}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
