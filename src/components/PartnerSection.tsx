"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Building2, Handshake, Sparkles, ShieldCheck } from "lucide-react";

export interface Partner {
  id: string;
  name: string;
  category: string;
  badge?: string;
  logo: string;
  width: number;
  height: number;
}

/* ═══ 1. Đối tác Quốc tế & Hàn Quốc (Dòng 1 - Scroll Left) ═══ */
export const INTERNATIONAL_PARTNERS: Partner[] = [
  {
    id: "shinhan-bank",
    name: "Shinhan Bank (Hàn Quốc)",
    category: "Tài chính - Ngân hàng Quốc tế",
    badge: "Strategic Partner",
    logo: "/images/partners/shinhan-bank.svg",
    width: 150,
    height: 48,
  },
  {
    id: "hana-bank",
    name: "KEB Hana Bank (Hàn Quốc)",
    category: "Ngân hàng Quốc tế",
    badge: "Global Banking",
    logo: "/images/partners/hana-bank.webp",
    width: 150,
    height: 48,
  },
  {
    id: "samsung-sds",
    name: "Samsung SDS (Hàn Quốc)",
    category: "Công nghệ Toàn cầu",
    badge: "Enterprise Tech",
    logo: "/images/partners/samsung-sds.png",
    width: 150,
    height: 48,
  },
  {
    id: "punggi-corp",
    name: "Punggi Ginseng Agricultural Corp.",
    category: "Hiệp Hội Vùng Trồng Punggi Hàn Quốc",
    badge: "Origin Heritage",
    logo: "/images/brand_logo/Punggi ginseng corp.png",
    width: 160,
    height: 45,
  },
  {
    id: "kci",
    name: "Tập đoàn KCI (Hàn Quốc)",
    category: "Y tế & Sản xuất Công nghệ cao",
    badge: "Medical Partner",
    logo: "/images/partners/kci.png",
    width: 130,
    height: 45,
  },
  {
    id: "k-market",
    name: "K-Market Chuỗi Bán lẻ Hàn Quốc",
    category: "Hệ thống Bán lẻ & Phân phối Quốc tế",
    badge: "Retail Network",
    logo: "/images/partners/k-market.jpg",
    width: 140,
    height: 55,
  },
];

/* ═══ 2. Đối tác Doanh nghiệp & Phân phối Việt Nam (Dòng 2 - Scroll Right) ═══ */
export const DOMESTIC_PARTNERS: Partner[] = [
  {
    id: "vingroup",
    name: "Tập đoàn Vingroup",
    category: "Tập đoàn Đa ngành",
    badge: "VIP Enterprise",
    logo: "/images/partners/vingroup.png",
    width: 140,
    height: 55,
  },
  {
    id: "fpt",
    name: "Tập đoàn FPT",
    category: "Công nghệ & Viễn thông",
    badge: "Corporate Gift",
    logo: "/images/partners/fpt.png",
    width: 140,
    height: 55,
  },
  {
    id: "viettel",
    name: "Tập đoàn Viettel",
    category: "Công nghệ & Viễn thông",
    badge: "Corporate Partner",
    logo: "/images/partners/viettel.png",
    width: 130,
    height: 50,
  },
  {
    id: "vietcombank",
    name: "Ngân hàng Vietcombank",
    category: "Tài chính - Ngân hàng",
    badge: "Priority Banking",
    logo: "/images/partners/vietcombank.webp",
    width: 140,
    height: 50,
  },
  {
    id: "bidv",
    name: "Ngân hàng BIDV",
    category: "Tài chính - Ngân hàng",
    badge: "Financial Partner",
    logo: "/images/partners/bidv.png",
    width: 140,
    height: 50,
  },
  {
    id: "vietnam-airlines",
    name: "Vietnam Airlines",
    category: "Hàng không & Dịch vụ",
    badge: "Diplomatic Gift",
    logo: "/images/partners/vietnam-airlines.png",
    width: 140,
    height: 50,
  },
  {
    id: "vanphu-invest",
    name: "Văn Phú - Invest",
    category: "Bất động sản & Đầu tư",
    badge: "Enterprise Partner",
    logo: "/images/partners/vanphu-invest.webp",
    width: 140,
    height: 48,
  },
];

const WATERMARK_WORDS = [
  "GLOBAL STRATEGIC PARTNERS",
  "DIPLOMATIC GIFTS",
  "PUNGGI HERITAGE",
  "KOREAN RED GINSENG",
  "TRUSTED SINCE 1986",
  "130+ DISTRIBUTORS",
];

interface PartnerCardProps {
  partner: Partner;
  keyPrefix: string;
}

function CinematicPartnerCard({ partner, keyPrefix }: PartnerCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Compute subtle tilt angles (max +/- 8 deg)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ x: rotateX, y: rotateY, active: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  return (
    <div
      ref={cardRef}
      key={`${keyPrefix}-${partner.id}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tilt.active
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.05, 1.05, 1.05)`
          : "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: tilt.active ? "transform 100ms ease-out" : "transform 400ms ease-out",
      }}
      className="group/card relative flex h-20 w-44 sm:h-24 sm:w-56 shrink-0 cursor-pointer items-center justify-center rounded-2xl bg-white/95 px-5 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.03)] ring-1 ring-[#EDE8DD] backdrop-blur-md transition-shadow duration-300 hover:bg-white hover:shadow-[0_16px_36px_rgba(181,34,42,0.14)] hover:ring-[#B5222A]/40 overflow-hidden"
      title={`${partner.name} - ${partner.category}`}
    >
      {/* 1. Subtle Golden Shimmer Ray Sweep Effect */}
      <div className="animate-shimmer-sweep" />

      {/* 2. Top-Right Micro Amber Glow Accent on Hover */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br from-[#F0831F]/20 via-[#B5222A]/10 to-transparent opacity-0 blur-md transition-opacity duration-300 group-hover/card:opacity-100" />

      {/* 3. Partner Logo */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={partner.width}
          height={partner.height}
          className="max-h-12 sm:max-h-14 w-auto object-contain filter grayscale-[20%] opacity-85 transition-all duration-300 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-105"
          unoptimized
        />
      </div>

      {/* 4. Bottom Category Micro-Badge Reveal */}
      {partner.badge && (
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#181818]/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#F0831F] shadow-sm font-figtree">
            <Sparkles className="w-2.5 h-2.5 text-[#F0831F]" />
            {partner.badge}
          </span>
        </div>
      )}
    </div>
  );
}

export function PartnerSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 border-y border-[#EEEEEE]">
      {/* ─── Layer 1: Ambient Watermark Typography Scrolling in Background ─── */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center overflow-hidden opacity-[0.028] select-none">
        <div className="animate-watermark-slow flex items-center gap-12 text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase tracking-[0.25em] text-[#181818] font-figtree whitespace-nowrap">
          {WATERMARK_WORDS.map((word, idx) => (
            <span key={`wm1-${idx}`} className="flex items-center gap-12">
              <span>{word}</span>
              <span className="text-4xl text-[#B5222A]">✦</span>
            </span>
          ))}
          {WATERMARK_WORDS.map((word, idx) => (
            <span key={`wm2-${idx}`} className="flex items-center gap-12">
              <span>{word}</span>
              <span className="text-4xl text-[#B5222A]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── Layer 2: Subtle Dot Grid Pattern ─── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#4B193E 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* ─── Layer 3: Section Content ─── */}
      <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Brand Dots */}
          <div aria-hidden="true" className="mb-3.5 flex h-3.5 w-16 items-center justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5222A]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#F0831F]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5222A]" />
          </div>

          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#B5222A]">
            Uy tín làm nên thương hiệu
          </span>

          <h2 className="font-sans mt-2.5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
            Đối tác của Kim&apos;s Red Ginseng tại Việt Nam & Quốc tế
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl font-sans">
            Tự hào là thương hiệu Hồng sâm 6 năm tuổi Punggi được tin chọn làm quà tặng ngoại giao và đối tác chiến lược của các tập đoàn, ngân hàng hàng đầu.
          </p>
        </div>
      </div>

      {/* ═══ Phase 3 Cinematic: Dual Marquee Showcase ═══ */}
      <div className="relative z-10 mt-12 sm:mt-16 space-y-6 sm:space-y-8">
        
        {/* ─── DÒNG 1: Đối tác Quốc tế & Hàn Quốc (Scroll Left: Phải -> Trái) ─── */}
        <div>
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 mb-3.5 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B5222A] bg-[#B5222A]/5 px-3.5 py-1.5 rounded-full border border-[#B5222A]/15 shadow-2xs">
              <Globe className="w-3.5 h-3.5" />
              <span>Đối Tác Quốc Tế & Hàn Quốc</span>
            </div>
            <span className="text-[11px] font-medium text-[#777777] hidden sm:inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B5222A]" />
              Tập đoàn công nghệ, ngân hàng & viện nghiên cứu Hàn Quốc
            </span>
          </div>

          <div className="group-marquee relative w-full overflow-hidden py-2">
            {/* Left & Right Gradient Masks */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-36 md:w-52 bg-gradient-to-r from-white via-white/90 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-36 md:w-52 bg-gradient-to-l from-white via-white/90 to-transparent"
            />

            {/* Continuous Marquee Track (Left Direction) */}
            <div className="animate-marquee-left flex gap-5 sm:gap-7 items-center py-2">
              {/* Loop 1 */}
              {INTERNATIONAL_PARTNERS.map((partner, index) => (
                <CinematicPartnerCard key={`r1-l1-${partner.id}-${index}`} partner={partner} keyPrefix="r1-l1" />
              ))}
              {/* Loop 2 */}
              {INTERNATIONAL_PARTNERS.map((partner, index) => (
                <CinematicPartnerCard key={`r1-l2-${partner.id}-${index}`} partner={partner} keyPrefix="r1-l2" />
              ))}
              {/* Loop 3 */}
              {INTERNATIONAL_PARTNERS.map((partner, index) => (
                <CinematicPartnerCard key={`r1-l3-${partner.id}-${index}`} partner={partner} keyPrefix="r1-l3" />
              ))}
            </div>
          </div>
        </div>

        {/* ─── DÒNG 2: Đối tác & Đại lý Trong Nước (Scroll Right: Trái -> Phải) ─── */}
        <div>
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 mb-3.5 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#181818] bg-[#181818]/5 px-3.5 py-1.5 rounded-full border border-[#181818]/15 shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#B5222A]" />
              <span>Đối Tác Doanh Nghiệp & Phân Phối Việt Nam</span>
            </div>
            <span className="text-[11px] font-medium text-[#777777] hidden sm:inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B5222A]" />
              Hệ thống bán lẻ, tập đoàn đa ngành & ngân hàng tại Việt Nam
            </span>
          </div>

          <div className="group-marquee relative w-full overflow-hidden py-2">
            {/* Left & Right Gradient Masks */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-36 md:w-52 bg-gradient-to-r from-white via-white/90 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-36 md:w-52 bg-gradient-to-l from-white via-white/90 to-transparent"
            />

            {/* Continuous Marquee Track (Right Direction) */}
            <div className="animate-marquee-right flex gap-5 sm:gap-7 items-center py-2">
              {/* Loop 1 */}
              {DOMESTIC_PARTNERS.map((partner, index) => (
                <CinematicPartnerCard key={`r2-l1-${partner.id}-${index}`} partner={partner} keyPrefix="r2-l1" />
              ))}
              {/* Loop 2 */}
              {DOMESTIC_PARTNERS.map((partner, index) => (
                <CinematicPartnerCard key={`r2-l2-${partner.id}-${index}`} partner={partner} keyPrefix="r2-l2" />
              ))}
              {/* Loop 3 */}
              {DOMESTIC_PARTNERS.map((partner, index) => (
                <CinematicPartnerCard key={`r2-l3-${partner.id}-${index}`} partner={partner} keyPrefix="r2-l3" />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ─── Bottom CTA / Wholesale & Corporate Gift Banner ─── */}
      <div className="relative z-10 mt-14 sm:mt-18 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-[#FAF7F2] border border-[#E8DFD1] px-6 py-4 rounded-2xl shadow-2xs hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#333333]">
            <Handshake className="w-4 h-4 text-[#B5222A]" />
            <span>Mong muốn trở thành đối tác phân phối hoặc quà tặng doanh nghiệp?</span>
          </div>
          <Link
            href="/dang-ky-dai-ly"
            className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B5222A] hover:text-[#991C23] transition-colors"
          >
            <span>Đăng ký đại lý</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
