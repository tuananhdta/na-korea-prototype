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
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M14.3 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.2H9.2V14h2.4v7h2.7Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.7" r="1" className="fill-current stroke-none" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 448 512" className="h-4 w-4 fill-current">
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
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
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white/90 transition-all duration-300 hover:bg-[#4B193E] hover:text-white hover:scale-115 hover:shadow-[0_0_14px_rgba(75, 25, 62,0.7)] active:scale-95"
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
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white/90 transition-all duration-300 hover:bg-[#4B193E] hover:text-white hover:scale-115 hover:shadow-[0_0_14px_rgba(75, 25, 62,0.7)] active:scale-95"
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
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white/90 transition-all duration-300 hover:bg-[#4B193E] hover:text-white hover:scale-115 hover:shadow-[0_0_14px_rgba(75, 25, 62,0.7)] active:scale-95"
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
          ? "border-[#D4A359]/40 bg-gradient-to-b from-[#577674] via-[#3E5654] to-[#2B3D3B]"
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

      {/* Top Brand Gold Accent Line with Infinite Border Beam */}
      <div className="relative h-[2px] w-full overflow-hidden bg-white/10">
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
                  ? "border-[#D4A359]/40 bg-black/20 hover:border-[#D4A359]/70 hover:bg-black/30 hover:shadow-[0_12px_36px_rgba(43,61,59,0.7)]"
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

      {/* ═══ Dải đáy: Copyright, Demo Theme Toggle & Social Links ═══ */}
      <div
        className={`border-t border-white/10 py-4 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
          isSlate ? "bg-[#1E2B2A]/95" : "bg-[#24061D]/90"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3 text-[13px] text-[#CBBAC4] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <p>© 2026 NA Korea - Hồng Kim Sâm Vietnam. All rights reserved.</p>

            {/* Demo Theme Switcher Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[12px] font-medium text-white transition-all hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
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
            <span className="hidden text-[12px] text-[#CBBAC4] md:inline">Kết nối với chúng tôi:</span>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}



