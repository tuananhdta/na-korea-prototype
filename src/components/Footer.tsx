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

function SocialLinks({ theme }: { theme?: FooterTheme }) {
  const isBeige = theme === "beige";
  const linkClass = isBeige
    ? "flex h-9 w-9 items-center justify-center rounded-full bg-[#2D2118]/10 text-[#2D2118] border border-[#2D2118]/20 shadow-sm transition-all duration-300 hover:bg-[#B5222A] hover:border-[#B5222A] hover:text-white hover:scale-110 hover:shadow-[0_0_14px_rgba(181,34,42,0.4)] active:scale-95"
    : "flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white border border-white/25 shadow-sm transition-all duration-300 hover:bg-[#D4A359] hover:border-[#D4A359] hover:text-black hover:scale-110 hover:shadow-[0_0_14px_rgba(212,163,89,0.7)] active:scale-95";

  return (
    <ul className="flex items-center gap-2.5" aria-label="Mạng xã hội">
      <li>
        <a
          href="https://www.facebook.com/KimRedGinseng"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className={linkClass}
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
          className={linkClass}
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
          className={linkClass}
        >
          <SocialIcon name="tiktok" />
        </a>
      </li>
    </ul>
  );
}

type FooterTheme = "slate" | "purple" | "beige";

function ConsultationForm({ theme }: { theme?: FooterTheme }) {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const isBeige = theme === "beige";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`rounded-xl border p-4 text-center text-[13px] font-medium leading-relaxed ${
        isBeige
          ? "border-emerald-600/40 bg-emerald-50 text-emerald-900"
          : "border-emerald-500/30 bg-emerald-950/40 text-emerald-200"
      }`}>
        <div className={`flex items-center justify-center gap-2 mb-1.5 font-bold text-sm ${
          isBeige ? "text-emerald-700" : "text-emerald-400"
        }`}>
          <CheckCircle2 className="h-4 w-4" />
          <span>Đã gửi thành công!</span>
        </div>
        Chuyên viên NA Korea sẽ liên hệ tư vấn quý khách trong thời gian sớm nhất.
      </div>
    );
  }

  const inputClass = isBeige
    ? "h-10 w-full rounded-lg border border-[#D4A359]/40 bg-white px-3 text-[13px] text-[#1C130D] placeholder:text-[#8C7A6B] outline-none transition-all duration-200 focus:border-[#9E6C15] focus:ring-1 focus:ring-[#9E6C15]/40"
    : "h-10 w-full rounded-lg border border-white/15 bg-white/10 px-3 text-[13px] text-white placeholder:text-[#C6BBBD] outline-none transition-all duration-200 focus:border-[#D4A359] focus:ring-1 focus:ring-[#D4A359]/40 focus:bg-white/15";

  const phoneInputClass = isBeige
    ? "h-10 w-full rounded-lg border border-[#D4A359]/40 bg-white pl-14 pr-3 text-[13px] text-[#1C130D] placeholder:text-[#8C7A6B] outline-none transition-all duration-200 focus:border-[#9E6C15] focus:ring-1 focus:ring-[#9E6C15]/40"
    : "h-10 w-full rounded-lg border border-white/15 bg-white/10 pl-14 pr-3 text-[13px] text-white placeholder:text-[#C6BBBD] outline-none transition-all duration-200 focus:border-[#D4A359] focus:ring-1 focus:ring-[#D4A359]/40 focus:bg-white/15";

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
        className={inputClass}
      />
      <div className="relative">
        <span className={`pointer-events-none absolute inset-y-0 left-3 flex items-center border-r pr-2.5 text-[13px] ${
          isBeige ? "border-[#D4A359]/30 text-[#5C4838]" : "border-white/15 text-gray-300"
        }`}>
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
          className={phoneInputClass}
        />
      </div>
      <input
        type="text"
        name="loi_nhan"
        placeholder="Lời nhắn / Nhu cầu tư vấn"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        aria-label="Lời nhắn"
        className={inputClass}
      />
      <button
        type="submit"
        className={`group flex items-center justify-center w-full h-10 px-2.5 sm:px-3 text-xs sm:text-sm lg:text-xs min-[1360px]:text-sm uppercase tracking-tight sm:tracking-normal font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap gap-1.5 cursor-pointer ${
          theme === "purple"
            ? "bg-white text-[#4A163D] hover:bg-gray-100 hover:text-[#3B0F30]"
            : theme === "beige"
            ? "bg-[#B5222A] text-white hover:bg-[#991C23] shadow-md"
            : "bg-white text-[#1E2B2A] hover:bg-gray-100 hover:text-black"
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
  const [theme, setTheme] = useState<FooterTheme>("slate");

  useEffect(() => {
    const saved = localStorage.getItem("na_footer_theme") as FooterTheme;
    if (saved === "purple" || saved === "slate" || saved === "beige") {
      setTheme(saved);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme: FooterTheme =
      theme === "slate" ? "purple" : theme === "purple" ? "beige" : "slate";
    setTheme(nextTheme);
    localStorage.setItem("na_footer_theme", nextTheme);
  };

  const mountainSrc =
    theme === "slate"
      ? "/images/footer/korean-mountains-teal.svg"
      : theme === "purple"
      ? "/images/footer/korean-mountains-plum.svg"
      : "/images/footer/korean-mountains-beige.svg";

  const isBeige = theme === "beige";
  const isSlate = theme === "slate";
  const isPurple = theme === "purple";

  return (
    <footer
      className={`relative overflow-hidden border-t transition-colors duration-500 font-sans ${
        isSlate
          ? "border-[#D4A359]/40 bg-gradient-to-b from-[#03403B] via-[#062F2B] to-[#021A17] text-white"
          : isPurple
          ? "border-[#D4A359]/35 bg-gradient-to-b from-[#4A163D] via-[#3B0F30] to-[#2B0823] text-white"
          : "border-[#D4A359]/50 bg-[#FFEFD5] text-[#2D2118]"
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
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(${isBeige ? "#B88636" : "#D4A359"} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Korean Traditional Mountain Waves at Footer Base (Above Bottom Bar) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[58px] sm:bottom-[62px] left-0 right-0 z-0 h-44 sm:h-56 lg:h-72 w-full opacity-90 transition-opacity duration-500"
      >
        <Image
          src={mountainSrc}
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

      {/* Fresh 6-Year Korean Ginseng Root with Berries (Left Wing - Below Golden Cloud) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[50px] left-[10px] z-0 w-42 sm:w-54 lg:w-66 xl:w-78 opacity-40 sm:opacity-65 lg:opacity-80 drop-shadow-[0_12px_28px_rgba(0,0,0,0.3)] select-none transition-transform duration-700 hover:scale-105"
      >
        <Image
          src="/images/footer/korean-ginseng-user.png"
          alt=""
          width={1024}
          height={1024}
          className="w-full h-auto object-contain object-left-bottom"
          priority={false}
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
        className="pointer-events-none absolute -right-6 sm:-right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-0 w-42 sm:w-52 lg:w-64 xl:w-76 opacity-45 sm:opacity-80 lg:opacity-95 drop-shadow-[0_16px_36px_rgba(0,0,0,0.4)] select-none transition-transform duration-700 hover:scale-105"
      >
        <Image
          src="/images/footer/korean-dancer-art.png"
          alt=""
          width={817}
          height={890}
          className="w-full h-auto object-contain object-right-top scale-x-[-1]"
          priority={false}
        />
      </div>

      {/* Top Brand Gold Accent Line with Infinite Border Beam */}
      <div className={`relative z-10 h-[2px] w-full overflow-hidden ${isBeige ? "bg-[#D4A359]/20" : "bg-white/10"}`}>
        <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#D4A359] to-transparent animate-border-beam" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* ═══ Cột 1: Thương hiệu & Di sản (Col 4) ═══ */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group" aria-label="Trang chủ Hồng Kim Sâm">
              <div className="relative h-[67.2px] w-[230.4px] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={isBeige ? BRAND_LOGOS.horizontal : BRAND_LOGOS.horizontalWhite}
                  alt="6년근 김정환홍삼 | Hồng Kim Sâm"
                  fill
                  sizes="230px"
                  className="object-contain object-left drop-shadow-sm"
                />
              </div>
            </Link>

            <p className={`font-sans text-[15px] font-bold tracking-wide ${isBeige ? "text-[#9E6C15]" : "text-[#D4A359]"}`}>
              Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác
            </p>

            <p className={`max-w-sm text-[13px] leading-relaxed sm:text-[15px] ${isBeige ? "text-[#4A382A]" : "text-[#E5D7DE]"}`}>
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
                  width={168}
                  height={64}
                  className="h-12 w-auto object-contain brightness-[1.05]"
                />
              </a>
            </div>
          </div>

          {/* ═══ Cột 2: Đơn vị nhập khẩu & Trụ sở (Col 3) ═══ */}
          <div className="lg:col-span-3 space-y-4">
            <div className={`border-b pb-2 ${isBeige ? "border-[#D4A359]/30" : "border-white/15"}`}>
              <h3 className={`font-sans text-[15px] font-bold uppercase tracking-wider ${isBeige ? "text-[#1C130D]" : "text-white"}`}>
                Đơn vị nhập khẩu
              </h3>
            </div>

            <div className={`space-y-3 text-[13px] sm:text-[13.5px] leading-relaxed ${isBeige ? "text-[#4A382A]" : "text-[#E5D7DE]"}`}>
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
                <p className={`font-bold uppercase text-[14px] ${isBeige ? "text-[#1C130D]" : "text-white"}`}>
                  CÔNG TY TNHH THƯƠNG MẠI NA KOREA
                </p>
                <p className={`mt-0.5 text-[12px] ${isBeige ? "text-[#6E5440]" : "text-[#CBBAC4]"}`}>
                  GPĐKKD/MST: 0109946846 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp
                </p>
              </div>

              <address className="not-italic space-y-2.5 pt-1">
                <div className={`flex items-start gap-2 ${isBeige ? "text-[#4A382A]" : "text-[#E5D7DE]"}`}>
                  <MapPin className={`h-4 w-4 shrink-0 mt-0.5 ${isBeige ? "text-[#9E6C15]" : "text-[#D4A359]"}`} />
                  <span>LK 19-TT1, khu nhà ở 96-96B Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội</span>
                </div>

                <div className={`flex items-center gap-2 ${isBeige ? "text-[#4A382A]" : "text-[#E5D7DE]"}`}>
                  <Phone className={`h-4 w-4 shrink-0 ${isBeige ? "text-[#9E6C15]" : "text-[#D4A359]"}`} />
                  <a href="tel:0903409939" className={`transition-colors ${isBeige ? "hover:text-[#B5222A]" : "hover:text-white"}`}>
                    090.340.9939
                  </a>
                </div>

                <div className={`flex items-center gap-2 ${isBeige ? "text-[#4A382A]" : "text-[#E5D7DE]"}`}>
                  <Mail className={`h-4 w-4 shrink-0 ${isBeige ? "text-[#9E6C15]" : "text-[#D4A359]"}`} />
                  <a href="mailto:contact@nakorea.vn" className={`transition-colors ${isBeige ? "hover:text-[#B5222A]" : "hover:text-white"}`}>
                    contact@nakorea.vn
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* ═══ Cột 3: Chính sách & Hỗ trợ (Col 2) ═══ */}
          <div className="lg:col-span-2 space-y-4">
            <div className={`border-b pb-2 ${isBeige ? "border-[#D4A359]/30" : "border-white/15"}`}>
              <h3 className={`font-sans text-[15px] font-bold uppercase tracking-wider ${isBeige ? "text-[#1C130D]" : "text-white"}`}>
                Chính sách
              </h3>
            </div>

            <nav aria-label="Liên kết chính sách">
              <ul className={`space-y-2.5 text-[13px] sm:text-[13.5px] ${isBeige ? "text-[#4A382A]" : "text-[#E5D7DE]"}`}>
                {usefulLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`group flex items-start gap-1.5 transition-all duration-200 hover:translate-x-1 ${
                        isBeige ? "hover:text-[#B5222A]" : "hover:text-white"
                      }`}
                    >
                      <ChevronRight className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 mt-0.5 ${
                        isBeige
                          ? "text-[#9E6C15] group-hover:text-[#B5222A] group-hover:translate-x-1"
                          : "text-[#D4A359] group-hover:text-white group-hover:translate-x-1"
                      }`} />
                      <span className="leading-snug">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ═══ Cột 4: Đăng ký nhận tư vấn VIP (Col 3) ═══ */}
          <div className="lg:col-span-3 space-y-3">
            <div
              className={`rounded-2xl border p-4 lg:p-3.5 xl:p-5 shadow-xl backdrop-blur-md transition-all duration-300 ${
                isPurple
                  ? "border-[#D4A359]/35 bg-white/[0.08] hover:border-[#D4A359]/60 hover:bg-white/[0.12] hover:shadow-[0_12px_36px_rgba(75,25,62,0.6)]"
                  : isBeige
                  ? "border-[#D4A359]/40 bg-white/80 hover:border-[#D4A359]/70 hover:bg-white/95 hover:shadow-[0_12px_36px_rgba(180,140,80,0.2)]"
                  : "border-[#D4A359]/40 bg-black/30 hover:border-[#D4A359]/70 hover:bg-black/40 hover:shadow-[0_12px_36px_rgba(2,26,23,0.8)]"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <FileText className={`h-4 w-4 ${isBeige ? "text-[#9E6C15]" : "text-[#D4A359]"}`} />
                <h3 className={`font-sans text-[15px] font-bold uppercase tracking-wider ${isBeige ? "text-[#1C130D]" : "text-white"}`}>
                  Đăng ký nhận tư vấn
                </h3>
              </div>
              <p className={`mb-3.5 text-[12px] leading-relaxed ${isBeige ? "text-[#5C4838]" : "text-[#E5D7DE]"}`}>
                Nhận báo giá ưu đãi & tư vấn liệu trình hồng sâm chuyên sâu từ chuyên gia.
              </p>
              <ConsultationForm theme={theme} />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Dải đáy: Copyright, Demo Theme Toggle & Social Links (Top Layer) ═══ */}
      <div
        className={`relative z-20 border-t py-4 px-4 sm:px-6 lg:px-8 transition-colors duration-500 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] ${
          isPurple
            ? "border-[#D4A359]/30 bg-[#140210] text-white"
            : isBeige
            ? "border-[#D4A359]/30 bg-[#F7E5C8] text-[#2D2118]"
            : "border-[#D4A359]/30 bg-[#011412] text-white"
        }`}
      >
        <div className={`mx-auto flex w-full max-w-[1320px] flex-col gap-3 text-[13px] sm:flex-row sm:items-center sm:justify-between ${
          isBeige ? "text-[#2D2118]" : "text-white"
        }`}>
          <div className="flex flex-wrap items-center gap-3">
            <p className={`font-semibold ${isBeige ? "text-[#2D2118]" : "text-white/95"}`}>
              © 2026 NA Korea - Hồng Kim Sâm Vietnam. All rights reserved.
            </p>

            {/* Demo Theme Switcher Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm ${
                isBeige
                  ? "border-[#D4A359]/60 bg-white/80 text-[#2D2118] hover:bg-white hover:border-[#9E6C15]"
                  : "border-[#D4A359]/40 bg-white/10 text-white hover:bg-[#D4A359]/20 hover:border-[#D4A359]"
              }`}
              title="Bấm để chuyển đổi màu giao diện Footer (Demo)"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full shadow-inner transition-colors duration-300 ${
                  isBeige ? "border border-[#9E6C15]" : "border border-white/40"
                }`}
                style={{
                  backgroundColor:
                    isSlate
                      ? "#03403B"
                      : isPurple
                      ? "#4A163D"
                      : "#FFEFD5",
                }}
              />
              <span>
                Đổi màu Footer:{" "}
                {isSlate
                  ? "Xám Xanh Đậm"
                  : isPurple
                  ? "Tím Mận"
                  : "Màu Be Pure (#FFEFD5)"}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className={`hidden text-[13px] font-bold md:inline tracking-wide ${isBeige ? "text-[#2D2118]" : "text-white"}`}>
              Kết nối với chúng tôi:
            </span>
            <SocialLinks theme={theme} />
          </div>
        </div>
      </div>
    </footer>
  );
}



