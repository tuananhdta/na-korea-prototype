"use client";

import { useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  ChevronRight,
  Send,
  CheckCircle2,
} from "lucide-react";
import { BRAND_LOGOS } from "@/lib/logos";
import { SITE_CONFIG } from "@/lib/siteConfig";

const usefulLinks: Array<{
  label: ReactNode;
  href: string;
}> = [
  {
    label: (
      <>
        Chính sách bảo mật{" "}
        <span className="inline-block">thông tin cá nhân</span>
      </>
    ),
    href: "/chinh-sach-bao-mat",
  },
  {
    label: (
      <>
        Hướng dẫn <span className="inline-block">mua hàng</span>
      </>
    ),
    href: "/huong-dan-mua-hang",
  },
  {
    label: (
      <>
        Chính sách đổi trả{" "}
        <span className="inline-block">& hoàn tiền</span>
      </>
    ),
    href: "/chinh-sach-doi-tra",
  },
  {
    label: (
      <>
        Chính sách <span className="inline-block">kiểm hàng</span>
      </>
    ),
    href: "/chinh-sach-kiem-hang",
  },
  {
    label: (
      <>
        Chính sách giao hàng{" "}
        <span className="inline-block">& vận chuyển</span>
      </>
    ),
    href: "/chinh-sach-giao-hang",
  },
  {
    label: (
      <>
        Chính sách <span className="inline-block">thanh toán</span>
      </>
    ),
    href: "/chinh-sach-thanh-toan",
  },
];

function SocialIcon({ name }: { name: "facebook" | "instagram" | "tiktok" }) {
  if (name === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <ul className="flex items-center gap-2.5" aria-label="Mạng xã hội">
      <li>
        <a
          href="https://www.facebook.com/KimRedGinseng"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white border border-white/25 shadow-sm transition-all duration-300 hover:bg-[#D4A359] hover:border-[#D4A359] hover:text-black hover:scale-110 hover:shadow-[0_0_14px_rgba(212,163,89,0.7)] active:scale-95"
        >
          <SocialIcon name="facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/kimsredginseng.vietnam/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white border border-white/25 shadow-sm transition-all duration-300 hover:bg-[#D4A359] hover:border-[#D4A359] hover:text-black hover:scale-110 hover:shadow-[0_0_14px_rgba(212,163,89,0.7)] active:scale-95"
        >
          <SocialIcon name="instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@kimsredginsenghq"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tiktok"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white border border-white/25 shadow-sm transition-all duration-300 hover:bg-[#D4A359] hover:border-[#D4A359] hover:text-black hover:scale-110 hover:shadow-[0_0_14px_rgba(212,163,89,0.7)] active:scale-95"
        >
          <SocialIcon name="tiktok" />
        </a>
      </li>
    </ul>
  );
}

function ConsultationForm({ isSlate }: { isSlate?: boolean }) {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-center text-[13px] font-medium leading-relaxed text-emerald-200">
        <div className="flex items-center justify-center gap-2 mb-1.5 text-emerald-400 font-bold text-sm">
          <CheckCircle2 className="h-4 w-4" />
          <span>Đã gửi thành công!</span>
        </div>
        Chuyên viên NA Korea sẽ liên hệ tư vấn quý khách trong thời gian sớm nhất.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5" aria-label="Đăng ký nhận tư vấn">
      <input
        type="text"
        name="Ho_ten_khach_hang"
        placeholder="Họ và tên *"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        aria-label="Họ và tên"
        className="h-10 w-full rounded-lg border border-white/15 bg-white/10 px-3 text-[13px] text-white placeholder:text-[#C6BBBD] outline-none transition-all duration-200 focus:border-[#D4A359] focus:ring-1 focus:ring-[#D4A359]/40 focus:bg-white/15"
      />
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center border-r border-white/15 pr-2.5 text-[13px] text-gray-300">
          +84
        </span>
        <input
          type="tel"
          name="so_dien_thoai"
          placeholder="Số điện thoại *"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          aria-label="Số điện thoại"
          className="h-10 w-full rounded-lg border border-white/15 bg-white/10 pl-14 pr-3 text-[13px] text-white placeholder:text-[#C6BBBD] outline-none transition-all duration-200 focus:border-[#D4A359] focus:ring-1 focus:ring-[#D4A359]/40 focus:bg-white/15"
        />
      </div>
      <input
        type="text"
        name="loi_nhan"
        placeholder="Lời nhắn / Nhu cầu tư vấn"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        aria-label="Lời nhắn"
        className="h-10 w-full rounded-lg border border-white/15 bg-white/10 px-3 text-[13px] text-white placeholder:text-[#C6BBBD] outline-none transition-all duration-200 focus:border-[#D4A359] focus:ring-1 focus:ring-[#D4A359]/40 focus:bg-white/15"
      />
      <button
        type="submit"
        className={`group flex items-center justify-center w-full h-10 px-2.5 sm:px-3 text-xs sm:text-sm lg:text-xs min-[1360px]:text-sm uppercase tracking-tight sm:tracking-normal font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap gap-1.5 cursor-pointer ${
          isSlate
            ? "bg-white text-[#1E2B2A] hover:bg-gray-100 hover:text-black"
            : "bg-white text-[#4A163D] hover:bg-gray-100 hover:text-[#3B0F30]"
        }`}
      >
        <span>GỬI YÊU CẦU TƯ VẤN</span>
        <Send className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}

const footerJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.siteUrl}/#organization`,
      name: SITE_CONFIG.companyName,
      alternateName: [SITE_CONFIG.brandName, SITE_CONFIG.subBrandName, "NA Korea"],
      url: SITE_CONFIG.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.siteUrl}${BRAND_LOGOS.horizontalWhite}`,
      },
      taxID: SITE_CONFIG.taxId,
      sameAs: SITE_CONFIG.sameAs,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+84-90-340-9939",
        contactType: "customer service",
        areaServed: "VN",
        availableLanguage: ["vi", "ko", "en"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_CONFIG.siteUrl}/#localbusiness`,
      name: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.subBrandName} (NA Korea)`,
      image: `${SITE_CONFIG.siteUrl}${BRAND_LOGOS.horizontalWhite}`,
      url: SITE_CONFIG.siteUrl,
      telephone: "+84-90-340-9939",
      email: SITE_CONFIG.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONFIG.streetAddress,
        addressLocality: SITE_CONFIG.addressLocality,
        addressRegion: SITE_CONFIG.addressRegion,
        postalCode: SITE_CONFIG.postalCode,
        addressCountry: SITE_CONFIG.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE_CONFIG.geo.latitude,
        longitude: SITE_CONFIG.geo.longitude,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
      parentOrganization: {
        "@id": `${SITE_CONFIG.siteUrl}/#organization`,
      },
    },
  ],
};

export function Footer() {
  const [theme, setTheme] = useState<"slate" | "purple">("slate");

  useEffect(() => {
    const saved = localStorage.getItem("na_footer_theme");
    if (saved === "purple" || saved === "slate") {
      setTheme(saved);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "slate" ? "purple" : "slate";
    setTheme(nextTheme);
    localStorage.setItem("na_footer_theme", nextTheme);
  };

  const isSlate = theme === "slate";

  return (
    <footer
      className={`relative overflow-hidden border-t transition-colors duration-500 font-sans text-white ${
        isSlate
          ? "border-[#D4A359]/40 bg-gradient-to-b from-[#03403B] via-[#062F2B] to-[#021A17]"
          : "border-[#D4A359]/35 bg-gradient-to-b from-[#4A163D] via-[#3B0F30] to-[#2B0823]"
      }`}
    >
      {/* Schema.org Structured Data (JSON-LD) for SEO & GEO AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(footerJsonLd) }}
      />

      {/* Subtle Luxury Radial Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#D4A359 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Korean Traditional Mountain Waves at Footer Base (Above Bottom Bar) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[58px] sm:bottom-[62px] left-0 right-0 z-0 h-44 sm:h-56 lg:h-72 w-full opacity-90 transition-opacity duration-500"
      >
        <Image
          src={isSlate ? "/images/footer/korean-mountains-teal.svg" : "/images/footer/korean-mountains-plum.svg"}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
          priority={false}
        />
      </div>

      {/* Traditional Korean Golden Cloud (Gureum) - Top Left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 left-4 sm:top-6 sm:left-8 z-0 w-28 sm:w-36 lg:w-44 opacity-40 sm:opacity-60 transition-transform duration-1000 hover:scale-105"
      >
        <Image
          src="/images/footer/korean-cloud.svg"
          alt=""
          width={160}
          height={90}
          className="w-full h-auto drop-shadow-md"
        />
      </div>

      {/* Traditional Korean Golden Cloud (Gureum) - Top Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-8 right-2 sm:top-10 sm:right-12 z-0 w-24 sm:w-32 lg:w-36 opacity-30 sm:opacity-45 scale-x-[-1]"
      >
        <Image
          src="/images/footer/korean-cloud.svg"
          alt=""
          width={160}
          height={90}
          className="w-full h-auto drop-shadow-md"
        />
      </div>


      {/* Korean Samulnori / Nongak Folk Dancer with Sangmo Ribbon Swirls (Right Wing) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 sm:-right-4 lg:-right-8 -top-4 sm:-top-6 lg:-top-10 z-0 w-52 sm:w-64 lg:w-80 xl:w-96 opacity-45 sm:opacity-80 lg:opacity-95 drop-shadow-[0_16px_36px_rgba(0,0,0,0.6)] select-none transition-transform duration-700 hover:scale-105"
      >
        <Image
          src="/images/footer/korean-dancer-art.png"
          alt=""
          width={817}
          height={890}
          className="w-full h-auto object-contain object-right-top"
          priority={false}
        />
      </div>

      {/* Top Brand Gold Accent Line with Infinite Border Beam */}
      <div className="relative z-10 h-[2px] w-full overflow-hidden bg-white/10">
        <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#D4A359] to-transparent animate-border-beam" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* ═══ Cột 1: Thương hiệu & Di sản (Col 4) ═══ */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group" aria-label="Trang chủ Hồng Kim Sâm">
              <div className="relative h-14 w-48 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={BRAND_LOGOS.horizontalWhite}
                  alt="6년근 김정환홍삼 | Hồng Kim Sâm"
                  fill
                  sizes="200px"
                  className="object-contain object-left drop-shadow-md"
                />
              </div>
            </Link>

            <p className="font-sans text-[15px] font-bold text-[#D4A359] tracking-wide">
              Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác
            </p>

            <p className="max-w-sm text-[13px] leading-relaxed text-[#E5D7DE] sm:text-[15px]">
              Thương hiệu Hồng sâm 6 năm tuổi thượng hạng vùng núi Punggi Hàn Quốc, được kiến tạo từ 50 năm tâm huyết và bí quyết gia truyền của nghệ nhân Kim Jeong Hwan.
            </p>

            {/* Sale Notification Badge */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="http://online.gov.vn/Home/WebDetails/127493"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:scale-105"
                title="Đã thông báo Bộ Công Thương"
              >
                <Image
                  src="/images/wholesale/logoSaleNoti.png"
                  alt="Đã thông báo Bộ Công Thương"
                  width={140}
                  height={53}
                  className="h-10 w-auto object-contain brightness-[1.05]"
                />
              </a>
            </div>
          </div>

          {/* ═══ Cột 2: Đơn vị nhập khẩu & Trụ sở (Col 3) ═══ */}
          <div className="lg:col-span-3 space-y-4">
            <div className="border-b border-white/15 pb-2">
              <h3 className="font-sans text-[15px] font-bold uppercase tracking-wider text-white">
                Đơn vị nhập khẩu
              </h3>
            </div>

            <div className="space-y-3 text-[13px] sm:text-[13.5px] leading-relaxed text-[#E5D7DE]">
              <a
                href="https://nakorea.vn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Trang chủ NA Korea"
                title="NA Korea - https://nakorea.vn/"
                className="inline-block rounded-md bg-white p-1.5 shadow-sm transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/images/wholesale/Logo-Na-Korea-01-300x87.png"
                  alt="NA Korea Import & Distribution"
                  width={140}
                  height={40}
                  className="h-7 w-auto object-contain"
                />
              </a>

              <div>
                <p className="font-bold text-white uppercase text-[14px]">
                  CÔNG TY TNHH THƯƠNG MẠI NA KOREA
                </p>
                <p className="mt-0.5 text-[12px] text-[#CBBAC4]">
                  GPĐKKD/MST: 0109946846 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp
                </p>
              </div>

              <address className="not-italic space-y-2.5 pt-1">
                <div className="flex items-start gap-2 text-[#E5D7DE]">
                  <MapPin className="h-4 w-4 shrink-0 text-[#D4A359] mt-0.5" />
                  <span>LK 19-TT1, khu nhà ở 96-96B Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội</span>
                </div>

                <div className="flex items-center gap-2 text-[#E5D7DE]">
                  <Phone className="h-4 w-4 shrink-0 text-[#D4A359]" />
                  <a href="tel:0903409939" className="hover:text-white transition-colors">
                    090.340.9939
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[#E5D7DE]">
                  <Mail className="h-4 w-4 shrink-0 text-[#D4A359]" />
                  <a href="mailto:contact@nakorea.vn" className="hover:text-white transition-colors">
                    contact@nakorea.vn
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* ═══ Cột 3: Chính sách & Hỗ trợ (Col 2) ═══ */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border-b border-white/15 pb-2">
              <h3 className="font-sans text-[15px] font-bold uppercase tracking-wider text-white">
                Chính sách
              </h3>
            </div>

            <nav aria-label="Liên kết chính sách">
              <ul className="space-y-2.5 text-[13px] sm:text-[13.5px] text-[#E5D7DE]">
                {usefulLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-start gap-1.5 transition-all duration-200 hover:text-white hover:translate-x-1"
                    >
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#D4A359] transition-transform duration-200 group-hover:text-white group-hover:translate-x-1 mt-0.5" />
                      <span className="leading-snug">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ═══ Cột 4: Đăng ký nhận tư vấn VIP (Col 3) (Animation #2: Glow & Shimmer) ═══ */}
          <div className="lg:col-span-3 space-y-3">
            <div
              className={`rounded-2xl border p-4 lg:p-3.5 xl:p-5 shadow-xl backdrop-blur-md transition-all duration-300 ${
                isSlate
                  ? "border-[#D4A359]/40 bg-black/30 hover:border-[#D4A359]/70 hover:bg-black/40 hover:shadow-[0_12px_36px_rgba(2,26,23,0.8)]"
                  : "border-[#D4A359]/35 bg-white/[0.08] hover:border-[#D4A359]/60 hover:bg-white/[0.12] hover:shadow-[0_12px_36px_rgba(75,25,62,0.6)]"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-[#D4A359]" />
                <h3 className="font-sans text-[15px] font-bold uppercase tracking-wider text-white">
                  Đăng ký nhận tư vấn
                </h3>
              </div>
              <p className="mb-3.5 text-[12px] leading-relaxed text-[#E5D7DE]">
                Nhận báo giá ưu đãi & tư vấn liệu trình hồng sâm chuyên sâu từ chuyên gia.
              </p>
              <ConsultationForm isSlate={isSlate} />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Dải đáy: Copyright, Demo Theme Toggle & Social Links (Top Layer) ═══ */}
      <div
        className={`relative z-20 border-t py-4 px-4 sm:px-6 lg:px-8 transition-colors duration-500 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] ${
          isSlate
            ? "border-[#D4A359]/30 bg-[#011412]"
            : "border-[#D4A359]/30 bg-[#140210]"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3 text-[13px] text-white sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-semibold text-white/95">© 2026 NA Korea - Hồng Kim Sâm Vietnam. All rights reserved.</p>

            {/* Demo Theme Switcher Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#D4A359]/40 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white transition-all hover:bg-[#D4A359]/20 hover:border-[#D4A359] hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              title="Bấm để chuyển đổi màu giao diện Footer (Demo)"
            >
              <span
                className="h-2.5 w-2.5 rounded-full border border-white/40 shadow-inner transition-colors duration-300"
                style={{ backgroundColor: isSlate ? "#4A163D" : "#577674" }}
              />
              <span>Đổi màu Footer: {isSlate ? "Tím Mận" : "Xám Xanh Đậm"}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-[13px] font-bold text-white md:inline tracking-wide">Kết nối với chúng tôi:</span>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}



