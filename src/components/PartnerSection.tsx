"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
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

export interface PartnerPhoto {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
}

/* ═══ 10 Hình Ảnh Hoạt Động Hợp Tác Thực Tế (Slider Chuyển Động Trái/Phải) ═══ */
export const FEATURED_PARTNER_PHOTOS: PartnerPhoto[] = [
  {
    id: "photo-1",
    title: "Quà Tặng Ngoại Giao Tại Davos Forum 2010",
    subtitle: "Sản phẩm Hồng Sâm Kim vinh dự đại diện phục vụ các nguyên thủ quốc tế tại Diễn đàn Kinh tế Thế giới.",
    tag: "Ngoại Giao Quốc Tế",
    image: "/images/sub01.jpg",
  },
  {
    id: "photo-2",
    title: "Hệ Thống Trưng Bày Shilla & Lotte Duty Free",
    subtitle: "Hiện diện nổi bật tại các chuỗi cửa hàng miễn thuế sân bay và trung tâm thương mại lớn.",
    tag: "Bán Lẻ & Miễn Thuế",
    image: "/images/sub02.jpg",
  },
  {
    id: "photo-3",
    title: "Nhà Máy Chế Biến Chuẩn ISO 22000 Punggi",
    subtitle: "Hệ thống nhà máy hiện đại quy mô lớn dưới chân núi Sobaek, bảo đảm 100% sâm 6 năm tuổi.",
    tag: "Nhà Máy & Chế Biến",
    image: "/images/production.jpg",
  },
  {
    id: "photo-4",
    title: "Bằng Khen Tổng Thống Hàn Quốc (1996)",
    subtitle: "Nghệ nhân Kim Jeong Hwan vinh dự nhận giải thưởng New Korean Award từ Tổng thống Hàn Quốc.",
    tag: "Giải Thưởng Quốc Gia",
    image: "/images/sub03.jpg",
  },
  {
    id: "photo-5",
    title: "Đạt Kiểm Định Khắt Khe USDA & FDA Hoa Kỳ",
    subtitle: "Sản phẩm đáp ứng hoàn toàn tiêu chuẩn an toàn thực phẩm và bảo hộ thương hiệu tại 53 tiểu bang Mỹ.",
    tag: "Tiêu Chuẩn Mỹ",
    image: "/images/sub04.jpg",
  },
  {
    id: "photo-6",
    title: "Phân Phối Độc Quyền Tại Việt Nam — NA KOREA",
    subtitle: "CÔNG TY TNHH THƯƠNG MẠI NA KOREA nhập khẩu chính ngạch 100% và phân phối độc quyền toàn quốc.",
    tag: "Độc Quyền Việt Nam",
    image: "/images/brand-story-root.jpg",
  },
  {
    id: "photo-7",
    title: "Đối Tác Chiến Lược Các Tập Đoàn & Ngân Hàng",
    subtitle: "Đồng hành cùng Shinhan Bank, KEB Hana Bank, Vingroup, Viettel trong các quà tặng doanh nghiệp VIP.",
    tag: "Đối Tác B2B",
    image: "/images/top_banner_goldsammall.jpg",
  },
  {
    id: "photo-8",
    title: "Hệ Thống Phân Phối Chuỗi K-Food Toàn Cầu",
    subtitle: "Xuất khẩu sang Hoa Kỳ, Châu Âu, Malaysia, Hồng Kông, Đài Loan và các nước Đông Nam Á.",
    tag: "Phân Phối Toàn Cầu",
    image: "/images/banner-kimsredginseng-3.jpg",
  },
  {
    id: "photo-9",
    title: "Quy Trình Hấp Sấy Gia Truyền 50 Năm Punggi",
    subtitle: "Đạt hàm lượng Ginsenoside cao nhất nhờ bí quyết hấp sấy độc bản của Bậc Thầy Nghệ Nhân.",
    tag: "Bí Quyết Nghệ Nhân",
    image: "/images/ginseng-fresh-card.jpg",
  },
  {
    id: "photo-10",
    title: "Chứng Nhận Halal (MUI) & HACCP Quốc Tế",
    subtitle: "Đạt chứng nhận an toàn thực phẩm khắt khe phục vụ thị trường toàn cầu và Đông Nam Á.",
    tag: "Chứng Nhận Quốc Tế",
    image: "/images/red-ginseng-steamed-card.jpg",
  },
];

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<PartnerPhoto | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? FEATURED_PARTNER_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === FEATURED_PARTNER_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  // Exactly 3 photos displayed starting from currentIndex
  const visiblePhotos = [
    FEATURED_PARTNER_PHOTOS[currentIndex],
    FEATURED_PARTNER_PHOTOS[(currentIndex + 1) % FEATURED_PARTNER_PHOTOS.length],
    FEATURED_PARTNER_PHOTOS[(currentIndex + 2) % FEATURED_PARTNER_PHOTOS.length],
  ];

  // Lock body scroll and handle Escape key for Lightbox Modal
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedPhoto(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedPhoto]);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 border-y border-[#EEEEEE]">
      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6">
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
      <div className="relative z-10 mt-12 sm:mt-16 space-y-8 sm:space-y-12">
        
        {/* ─── DÒNG 1: Đối tác Quốc tế & Hàn Quốc (Header bên TRÁI - Scroll Left) ─── */}
        <div>
          <div className="mx-auto max-w-[1320px] px-4 sm:px-6 mb-3.5 flex items-center justify-start">
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
          <div className="mx-auto max-w-[1320px] px-4 sm:px-6 mb-3.5 flex items-center justify-start">
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

        {/* ─── DÒNG 3: 10 Hình Ảnh Hợp Tác Thực Tế & Sự Kiện (Chuyển Động Trái/Phải Nối Tiếp Như Đánh Giá Khách Hàng) ─── */}
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 pt-10 border-t border-[#EEEEEE]">
          <div className="mb-6 flex items-center justify-between">
            <div className="inline-flex items-center font-figtree text-[11px] sm:text-xs font-bold uppercase tracking-[0.05em] text-[#111111] border-b-2 border-[#4B193E] pb-1">
              <span>Hình Ảnh Hoạt Động &amp; Hợp Tác Thương Hiệu (10 Mốc Tiêu Biểu)</span>
            </div>
          </div>

          {/* Slider Container with Left / Right Navigation Buttons */}
          <div className="relative px-1 sm:px-12 lg:px-14">
            {/* Left Chevron Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Xem ảnh đối tác trước đó"
              title="Ảnh đối tác trước đó"
              className="absolute -left-1 sm:left-0 z-10 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white bg-white/95 text-[#4B193E] shadow-md backdrop-blur-xs transition-all duration-200 hover:bg-[#4B193E] hover:text-white hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B193E] cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            {/* Right Chevron Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Xem ảnh đối tác tiếp theo"
              title="Ảnh đối tác tiếp theo"
              className="absolute -right-1 sm:right-0 z-10 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white bg-white/95 text-[#4B193E] shadow-md backdrop-blur-xs transition-all duration-200 hover:bg-[#4B193E] hover:text-white hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B193E] cursor-pointer"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            {/* 3 Visible Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visiblePhotos.map((photo, idx) => (
                <div
                  key={`${photo.id}-${(currentIndex + idx) % FEATURED_PARTNER_PHOTOS.length}`}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[#EEEEEE] bg-white shadow-2xs transition-all duration-300 hover:shadow-md hover:border-[#D4A359] animate-in fade-in duration-300 ${
                    idx === 2 ? "hidden lg:flex" : "flex"
                  }`}
                >
                  {/* Clickable Image Container with Zoom */}
                  <button
                    type="button"
                    onClick={() => setSelectedPhoto(photo)}
                    className="group/img relative h-52 sm:h-60 w-full shrink-0 overflow-hidden bg-gray-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B193E] cursor-zoom-in"
                    aria-label={`Xem ảnh phóng to: ${photo.title}`}
                    title="Nhấn để phóng to ảnh"
                  >
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      sizes="(min-width: 1024px) 390px, 50vw"
                      className="object-cover transition-transform duration-500 group-hover/img:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity group-hover/img:opacity-70" />

                    {/* Hover Zoom Icon */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs shadow-md">
                        <ZoomIn className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Tag Badge */}
                    <div className="absolute top-3 left-3 bg-[#4B193E]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs tracking-wider uppercase shadow-xs">
                      {photo.tag}
                    </div>
                  </button>

                  {/* Content Details */}
                  <div className="p-5 flex flex-1 flex-col justify-between space-y-2">
                    <div>
                      <h3 className="font-sans text-base font-bold text-[#111111] group-hover:text-[#4B193E] transition-colors leading-snug line-clamp-2">
                        {photo.title}
                      </h3>
                      <p className="font-sans text-xs text-[#666666] leading-relaxed mt-1 line-clamp-3">
                        {photo.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {FEATURED_PARTNER_PHOTOS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Chuyển đến hình ảnh đối tác ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-8 bg-[#4B193E]"
                      : "w-2.5 bg-gray-300 hover:bg-[#4B193E]/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ═══ FULLSCREEN IMAGE LIGHTBOX MODAL FOR PARTNER PHOTO ═══ */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh đối tác phóng to"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/92 p-4 sm:p-8 backdrop-blur-md animate-in fade-in duration-200 select-none"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close X Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/35 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-2xl border border-white/30 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Đóng xem ảnh"
            title="Đóng (Phím Esc)"
          >
            <X className="h-7 w-7 sm:h-8 sm:w-8 text-white stroke-[2.5]" />
          </button>

          {/* Centered High-Res Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center justify-center max-w-4xl max-h-[85vh] w-full h-full"
          >
            <div className="relative w-full h-[65vh] sm:h-[75vh]">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                sizes="95vw"
                className="object-contain animate-in zoom-in-95 duration-200 drop-shadow-2xl"
                priority
              />
            </div>

            {/* Bottom Caption Pill */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-5 py-2.5 text-xs sm:text-sm text-white/95 backdrop-blur-md shadow-lg">
              <span className="font-bold text-[#D4A359] uppercase tracking-wider">{selectedPhoto.tag}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/90 font-medium">{selectedPhoto.title}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
