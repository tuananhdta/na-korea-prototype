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

/* ═══ 1. Đối tác Quốc tế & Hàn Quốc (Dòng 1 - Scroll Left) ═══ */
export const INTERNATIONAL_PARTNERS: Partner[] = [
  {
    id: "shinhan-bank",
    name: "Shinhan Bank (Hàn Quốc)",
    category: "Tài chính - Ngân hàng Quốc tế",
    logo: "/images/partners/shinhan-bank.svg",
    width: 150,
    height: 48,
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
    id: "samsung-sds",
    name: "Samsung SDS (Hàn Quốc)",
    category: "Công nghệ Toàn cầu",
    logo: "/images/partners/samsung-sds.png",
    width: 150,
    height: 48,
  },
  {
    id: "kci",
    name: "Tập đoàn KCI (Hàn Quốc)",
    category: "Y tế & Sản xuất Công nghệ cao",
    logo: "/images/partners/kci.png",
    width: 130,
    height: 45,
  },
  {
    id: "k-market",
    name: "K-Market Chuỗi Bán lẻ Hàn Quốc",
    category: "Hệ thống Bán lẻ & Phân phối Quốc tế",
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
    logo: "/images/partners/vingroup.png",
    width: 140,
    height: 55,
  },
  {
    id: "fpt",
    name: "Tập đoàn FPT",
    category: "Công nghệ & Viễn thông",
    logo: "/images/partners/fpt.png",
    width: 140,
    height: 55,
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
    id: "vietcombank",
    name: "Ngân hàng Vietcombank",
    category: "Tài chính - Ngân hàng",
    logo: "/images/partners/vietcombank.webp",
    width: 140,
    height: 50,
  },
  {
    id: "bidv",
    name: "Ngân hàng BIDV",
    category: "Tài chính - Ngân hàng",
    logo: "/images/partners/bidv.png",
    width: 140,
    height: 50,
  },
  {
    id: "vietnam-airlines",
    name: "Vietnam Airlines",
    category: "Hàng không & Dịch vụ",
    logo: "/images/partners/vietnam-airlines.png",
    width: 140,
    height: 50,
  },
  {
    id: "vanphu-invest",
    name: "Văn Phú - Invest",
    category: "Bất động sản & Đầu tư",
    logo: "/images/partners/vanphu-invest.webp",
    width: 140,
    height: 48,
  },
];

interface PartnerCardProps {
  partner: Partner;
  keyPrefix: string;
}

function CinematicPartnerCard({ partner, keyPrefix }: PartnerCardProps) {
  return (
    <div
      key={`${keyPrefix}-${partner.id}`}
      className="group/card relative flex h-20 w-44 sm:h-24 sm:w-56 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-[#EEEEEE] bg-white px-5 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-[#4B193E]/40 hover:shadow-[0_8px_20px_rgba(75,25,62,0.10)]"
      title={`${partner.name} - ${partner.category}`}
    >
      <div className="flex h-full w-full items-center justify-center">
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
  );
}

export function PartnerSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 border-y border-[#EEEEEE]">
      <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="font-figtree text-[11px] sm:text-xs font-semibold uppercase tracking-[0.05em] text-[#4B193E]">
            Uy tín làm nên thương hiệu
          </span>

          <h2 className="font-sans mt-2.5 text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] font-bold text-[#111111] tracking-[-0.015em] leading-[1.4]">
            Đối tác của Kim&apos;s Red Ginseng tại Việt Nam &amp; Quốc tế
          </h2>

          <p className="mt-3.5 max-w-2xl font-sans text-sm sm:text-base text-[#666666] leading-[1.7] tracking-[-0.01em]">
            Tự hào là thương hiệu Hồng sâm 6 năm tuổi Punggi được tin chọn làm quà tặng ngoại giao và đối tác chiến lược của các tập đoàn, ngân hàng hàng đầu.
          </p>
        </div>
      </div>

      {/* ═══ Dual Marquee Showcase (Staggered Solo Headers) ═══ */}
      <div className="relative z-10 mt-12 sm:mt-16 space-y-6 sm:space-y-8">
        
        {/* ─── DÒNG 1: Đối tác Quốc tế & Hàn Quốc (Header bên TRÁI - Scroll Left) ─── */}
        <div>
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 mb-3.5 flex items-center justify-start">
            <div className="inline-flex items-center font-figtree text-[11px] sm:text-xs font-bold uppercase tracking-[0.05em] text-[#111111] border-b-2 border-[#4B193E] pb-1">
              <span>Đối Tác Quốc Tế &amp; Hàn Quốc</span>
            </div>
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

        {/* ─── DÒNG 2: Đối tác & Đại lý Trong Nước (Header bên PHẢI - Scroll Right) ─── */}
        <div>
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 mb-3.5 flex items-center justify-end text-right">
            <div className="inline-flex items-center font-figtree text-[11px] sm:text-xs font-bold uppercase tracking-[0.05em] text-[#111111] border-b-2 border-[#4B193E] pb-1">
              <span>Đối Tác Doanh Nghiệp &amp; Phân Phối Việt Nam</span>
            </div>
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
    </section>
  );
}
