"use client";

import Image from "next/image";
import { SectionIndicator } from "@/components/SectionIndicator";

export interface Partner {
  id: string;
  name: string;
  category: string;
  logo: string;
  width: number;
  height: number;
  imgClass?: string;
}

/* ═══ 1. Đối tác Quốc tế & Hàn Quốc (Dòng 1 - Scroll Left) ═══ */
export const INTERNATIONAL_PARTNERS: Partner[] = [
  {
    id: "the-shilla",
    name: "The Shilla Duty Free (Hàn Quốc)",
    category: "Hệ thống Bán lẻ & Miễn thuế Cao cấp",
    logo: "/images/partners/the-shilla.svg",
    width: 400,
    height: 140,
    imgClass: "h-12 sm:h-16",
  },
  {
    id: "lotte-duty-free",
    name: "Lotte Duty Free (Hàn Quốc)",
    category: "Hệ thống Bán lẻ & Miễn thuế Quốc tế",
    logo: "/images/partners/lotte.svg",
    width: 360,
    height: 160,
    imgClass: "h-13 sm:h-16",
  },
  {
    id: "shinsegae",
    name: "Tập đoàn Bách hóa Shinsegae (Hàn Quốc)",
    category: "Tập đoàn Bán lẻ & Trung tâm Thương mại",
    logo: "/images/partners/shinsegae.svg",
    width: 400,
    height: 130,
    imgClass: "h-12 sm:h-15",
  },
  {
    id: "coupang",
    name: "Coupang (Hàn Quốc)",
    category: "Sàn Thương mại Điện tử Toàn cầu",
    logo: "/images/partners/coupang.svg",
    width: 400,
    height: 130,
    imgClass: "h-13 sm:h-17",
  },
  {
    id: "market-kurly",
    name: "Market Kurly (Hàn Quốc)",
    category: "Sàn Thực phẩm Cao cấp & Tiêu chuẩn Premium",
    logo: "/images/partners/market-kurly.svg",
    width: 380,
    height: 130,
    imgClass: "h-14 sm:h-18",
  },
  {
    id: "wooltari",
    name: "Wooltari (Hoa Kỳ)",
    category: "Hệ thống Phân phối K-Food Bắc Mỹ",
    logo: "/images/partners/wooltari.svg",
    width: 360,
    height: 160,
    imgClass: "h-16 sm:h-20",
  },
  {
    id: "t-brothers",
    name: "T-Brothers Food & Trading (Quốc tế)",
    category: "Hệ thống Chuỗi Cung ứng K-Food Toàn cầu",
    logo: "/images/partners/t-brothers.svg",
    width: 400,
    height: 130,
    imgClass: "h-12 sm:h-16",
  },
  {
    id: "shinhan-bank",
    name: "Shinhan Bank (Hàn Quốc)",
    category: "Tài chính - Ngân hàng Quốc tế",
    logo: "/images/partners/shinhan-bank.svg",
    width: 400,
    height: 130,
    imgClass: "h-13 sm:h-16",
  },
  {
    id: "hana-bank",
    name: "KEB Hana Bank (Hàn Quốc)",
    category: "Ngân hàng Quốc tế",
    logo: "/images/partners/hana-bank.webp",
    width: 400,
    height: 130,
    imgClass: "h-13 sm:h-16",
  },
  {
    id: "samsung-sds",
    name: "Samsung SDS (Hàn Quốc)",
    category: "Công nghệ Toàn cầu",
    logo: "/images/partners/samsung-sds.png",
    width: 400,
    height: 130,
    imgClass: "h-11 sm:h-14",
  },
  {
    id: "k-market",
    name: "K-Market Chuỗi Bán lẻ Hàn Quốc",
    category: "Hệ thống Bán lẻ & Phân phối Quốc tế",
    logo: "/images/partners/k-market.jpg",
    width: 380,
    height: 150,
    imgClass: "h-14 sm:h-18",
  },
];

/* ═══ 2. Đối tác Doanh nghiệp & Phân phối Việt Nam (Dòng 2 - Scroll Right) ═══ */
export const DOMESTIC_PARTNERS: Partner[] = [
  {
    id: "vingroup",
    name: "Tập đoàn Vingroup",
    category: "Tập đoàn Đa ngành",
    logo: "/images/partners/vingroup.png",
    width: 380,
    height: 150,
    imgClass: "h-13 sm:h-17",
  },
  {
    id: "fpt",
    name: "Tập đoàn FPT",
    category: "Công nghệ & Viễn thông",
    logo: "/images/partners/fpt.png",
    width: 380,
    height: 150,
    imgClass: "h-12 sm:h-15",
  },
  {
    id: "viettel",
    name: "Tập đoàn Viettel",
    category: "Công nghệ & Viễn thông",
    logo: "/images/partners/viettel.png",
    width: 360,
    height: 140,
    imgClass: "h-18 sm:h-24",
  },
  {
    id: "vietcombank",
    name: "Ngân hàng Vietcombank",
    category: "Tài chính - Ngân hàng",
    logo: "/images/partners/vietcombank.webp",
    width: 380,
    height: 140,
    imgClass: "h-12 sm:h-15",
  },
  {
    id: "bidv",
    name: "Ngân hàng BIDV",
    category: "Tài chính - Ngân hàng",
    logo: "/images/partners/bidv.png",
    width: 380,
    height: 140,
    imgClass: "h-11 sm:h-14",
  },
  {
    id: "vietnam-airlines",
    name: "Vietnam Airlines",
    category: "Hàng không & Dịch vụ",
    logo: "/images/partners/vietnam-airlines.png",
    width: 400,
    height: 140,
    imgClass: "h-12 sm:h-16",
  },
  {
    id: "vanphu-invest",
    name: "Văn Phú - Invest",
    category: "Bất động sản & Đầu tư",
    logo: "/images/partners/vanphu-invest.webp",
    width: 380,
    height: 130,
    imgClass: "h-14 sm:h-18",
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
      className="group/card relative flex h-28 w-60 sm:h-36 sm:w-72 shrink-0 cursor-pointer items-center justify-center px-6 sm:px-8 transition-transform duration-300 hover:scale-105"
      title={`${partner.name} - ${partner.category}`}
    >
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={partner.width}
          height={partner.height}
          className={`w-auto object-contain mix-blend-multiply opacity-90 transition-all duration-300 group-hover/card:opacity-100 ${partner.imgClass || "h-14 sm:h-18"}`}
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
        <div className="mx-auto max-w-[1080px] text-center mb-10 sm:mb-14">
          {/* Section 3: 2 chấm + 1 thanh ngang + 2 chấm */}
          <SectionIndicator activeIndex={3} total={5} />

          <p className="mb-3 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#888888]">
            Uy tín làm nên thương hiệu
          </p>

          <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px] lg:text-[32px]">
            Đối tác của Hồng Sâm Kim tại Việt Nam &amp; Quốc tế
          </h2>

          <p className="mt-4 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#111111] max-w-[860px] mx-auto">
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
            <div className="animate-marquee-left flex gap-6 sm:gap-8 items-center py-2">
              {/* Loop 1 */}
              {INTERNATIONAL_PARTNERS.map((partner, index) => (
                <CinematicPartnerCard key={`r1-l1-${partner.id}-${index}`} partner={partner} keyPrefix="r1-l1" />
              ))}
              {/* Loop 2 */}
              {INTERNATIONAL_PARTNERS.map((partner, index) => (
                <CinematicPartnerCard key={`r1-l2-${partner.id}-${index}`} partner={partner} keyPrefix="r1-l2" />
              ))}
            </div>
          </div>
        </div>

        {/* ─── DÒNG 2: Đối tác & Đại lý Trong Nước (Header bên TRÁI - Scroll Right) ─── */}
        <div>
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 mb-3.5 flex items-center justify-start">
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
            <div className="animate-marquee-right flex gap-6 sm:gap-8 items-center py-2">
              {/* Loop 1 */}
              {DOMESTIC_PARTNERS.map((partner, index) => (
                <CinematicPartnerCard key={`r2-l1-${partner.id}-${index}`} partner={partner} keyPrefix="r2-l1" />
              ))}
              {/* Loop 2 */}
              {DOMESTIC_PARTNERS.map((partner, index) => (
                <CinematicPartnerCard key={`r2-l2-${partner.id}-${index}`} partner={partner} keyPrefix="r2-l2" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
