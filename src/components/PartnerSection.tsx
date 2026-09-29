"use client";

import Image from "next/image";

export interface Partner {
  id: string;
  name: string;
  category: string;
  logo: string;
  width: number;
  height: number;
}

export const PARTNERS_LIST: Partner[] = [
  {
    id: "fpt",
    name: "Tập đoàn FPT",
    category: "Công nghệ & Viễn thông",
    logo: "/images/partners/fpt.png",
    width: 140,
    height: 60,
  },
  {
    id: "vingroup",
    name: "Tập đoàn Vingroup",
    category: "Tập đoàn Đa ngành",
    logo: "/images/partners/vingroup.png",
    width: 140,
    height: 60,
  },
  {
    id: "viettel",
    name: "Tập đoàn Viettel",
    category: "Công nghệ & Viễn thông",
    logo: "/images/partners/viettel.png",
    width: 130,
    height: 50,
  },
  {
    id: "bidv",
    name: "Ngân hàng BIDV",
    category: "Tài chính - Ngân hàng",
    logo: "/images/partners/bidv.png",
    width: 140,
    height: 55,
  },
  {
    id: "vietcombank",
    name: "Ngân hàng Vietcombank",
    category: "Tài chính - Ngân hàng",
    logo: "/images/partners/vietcombank.webp",
    width: 140,
    height: 50,
  },
  {
    id: "hana-bank",
    name: "KEB Hana Bank (Hàn Quốc)",
    category: "Ngân hàng Quốc tế",
    logo: "/images/partners/hana-bank.webp",
    width: 150,
    height: 48,
  },
  {
    id: "shinhan-bank",
    name: "Shinhan Bank (Hàn Quốc)",
    category: "Ngân hàng Quốc tế",
    logo: "/images/partners/shinhan-bank.svg",
    width: 140,
    height: 50,
  },
  {
    id: "samsung-sds",
    name: "Samsung SDS (Hàn Quốc)",
    category: "Công nghệ Toàn cầu",
    logo: "/images/partners/samsung-sds.png",
    width: 150,
    height: 50,
  },
  {
    id: "vanphu-invest",
    name: "Văn Phú - Invest",
    category: "Bất động sản & Đầu tư",
    logo: "/images/partners/vanphu-invest.webp",
    width: 140,
    height: 50,
  },
  {
    id: "kci",
    name: "Tập đoàn KCI",
    category: "Y tế & Sản xuất",
    logo: "/images/partners/kci.png",
    width: 120,
    height: 50,
  },
  {
    id: "vietnam-airlines",
    name: "Vietnam Airlines & Đối tác",
    category: "Hàng không & Dịch vụ",
    logo: "/images/partners/vietnam-airlines.png",
    width: 140,
    height: 50,
  },
  {
    id: "k-market",
    name: "K-Market Chuỗi Bán lẻ Hàn Quốc",
    category: "Hệ thống Phân phối",
    logo: "/images/partners/k-market.jpg",
    width: 140,
    height: 60,
  },
];

export function PartnerSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 border-t border-[#EEEEEE]">
      {/* Background Decorative Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#4B193E 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

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

          <h2 className="font-sans mt-2.5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D2D2D] tracking-tight">
            Đối tác của Kim&apos;s Red Ginseng tại Việt Nam & Quốc tế
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl">
            Tự hào là thương hiệu Hồng sâm 6 năm tuổi Punggi được tin chọn làm quà tặng ngoại giao và đối tác chiến lược của các tập đoàn, ngân hàng hàng đầu.
          </p>
        </div>
      </div>

      {/* ═══ Seamless Infinite Marquee Showcase (Solution 1) ═══ */}
      <div className="group-marquee relative mt-12 sm:mt-16 w-full overflow-hidden py-4">
        {/* Left & Right Gradient Masks for Seamless Edge Fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 sm:w-36 md:w-48 bg-gradient-to-r from-white via-white/90 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 sm:w-36 md:w-48 bg-gradient-to-l from-white via-white/90 to-transparent"
        />

        {/* Continuous Marquee Track */}
        <div className="animate-marquee flex gap-5 sm:gap-7 items-center py-2">
          {/* First loop of items */}
          {PARTNERS_LIST.map((partner, index) => (
            <div
              key={`p1-${partner.id}-${index}`}
              className="group/card relative flex h-20 w-44 sm:h-24 sm:w-56 shrink-0 items-center justify-center rounded-2xl bg-white/95 px-5 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.03)] ring-1 ring-[#EDE8DD] transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-[0_12px_28px_rgba(181,34,42,0.12)] hover:ring-[#B5222A]/40"
            >
              <div className="relative h-full w-full flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="max-h-12 sm:max-h-14 w-auto object-contain filter grayscale-[20%] opacity-85 transition-all duration-300 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-105"
                  unoptimized
                />
              </div>
            </div>
          ))}

          {/* Duplicate loop for continuous 100% seamless marquee */}
          {PARTNERS_LIST.map((partner, index) => (
            <div
              key={`p2-${partner.id}-${index}`}
              className="group/card relative flex h-20 w-44 sm:h-24 sm:w-56 shrink-0 items-center justify-center rounded-2xl bg-white/95 px-5 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.03)] ring-1 ring-[#EDE8DD] transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-[0_12px_28px_rgba(181,34,42,0.12)] hover:ring-[#B5222A]/40"
            >
              <div className="relative h-full w-full flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="max-h-12 sm:max-h-14 w-auto object-contain filter grayscale-[20%] opacity-85 transition-all duration-300 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-105"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
