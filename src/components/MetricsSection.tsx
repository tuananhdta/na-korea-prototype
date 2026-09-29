"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Store, Handshake, ShieldCheck, CheckCircle2 } from "lucide-react";

interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  lines: string[];
  icon: React.ElementType;
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for smooth slowdown at the end (easeOutQuad)
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
      className="relative py-16 sm:py-20 bg-[#FAF7F2] border-y border-[#E8DFD1] overflow-hidden"
    >
      {/* Decorative Ginseng Watermark Pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#B5222A_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B5222A]/10 border border-[#B5222A]/20 text-[#B5222A] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            <CheckCircle2 className="w-4 h-4 text-[#B5222A]" />
            <span>Năng Lực & Uy Tín Thương Hiệu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2D2D2D] tracking-tight font-serif">
            NA Korea — Khẳng Định Vị Thế Dẫn Đầu
          </h2>
          <div className="w-16 h-1 bg-[#B5222A] mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-[#4B4F52] leading-relaxed">
            Đại diện phân phối chính thức các dòng sản phẩm Hồng sâm 6 năm tuổi Kim&apos;s Red Ginseng thượng hạng từ vùng núi Punggi, Hàn Quốc tại Việt Nam.
          </p>
        </div>

        {/* 4 Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-14 sm:mb-16">
          {METRICS.map((metric, idx) => {
            const IconComponent = metric.icon;
            const currentCount = counts[idx];

            return (
              <div
                key={metric.id}
                className="group relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#E8DFD1] shadow-sm hover:shadow-lg hover:border-[#B5222A]/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Icon Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] flex items-center justify-[#B5222A] justify-center text-[#B5222A] group-hover:bg-[#B5222A] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-[#666666] tracking-wider uppercase">
                    0{idx + 1}
                  </span>
                </div>

                {/* Main Counter Display */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#B5222A] tracking-tight font-sans">
                      {currentCount}
                    </span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#F0831F]">
                      {metric.suffix}
                    </span>
                  </div>
                </div>

                {/* Lines of text provided strictly by user */}
                <div className="space-y-0.5 text-xs sm:text-sm lg:text-base font-semibold text-[#2D2D2D] leading-snug">
                  {metric.lines.map((line, lineIdx) => (
                    <p key={lineIdx} className={lineIdx > 0 ? "font-normal text-[#4B4F52]" : ""}>
                      {line}
                    </p>
                  ))}
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#B5222A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </div>
            );
          })}
        </div>

        {/* Certification Badges Strip */}
        <div className="pt-8 border-t border-[#E8DFD1]/80">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#666666] mb-6">
            Tiêu Chuẩn & Chứng Nhận Chất Lượng Quốc Tế
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.code}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-white border border-[#E8DFD1] hover:border-[#B5222A]/30 transition-colors shadow-2xs"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#B5222A]/10 border border-[#B5222A]/20 flex items-center justify-center font-bold text-[#B5222A] text-xs">
                  {cert.code === "BỘ CÔNG THƯƠNG" ? "BCT" : cert.code}
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-[#2D2D2D] truncate">
                    {cert.label}
                  </p>
                  <p className="text-[11px] text-[#666666] truncate">
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
