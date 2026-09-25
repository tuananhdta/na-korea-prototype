"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  ChevronRight,
  ShieldCheck,
  Send,
  CheckCircle2,
} from "lucide-react";
import { BRAND_LOGOS } from "@/lib/logos";
import { SITE_CONFIG } from "@/lib/siteConfig";

const usefulLinks = [
  {
    label: "Chính sách bảo mật thông tin cá nhân",
    href: "/chinh-sach-bao-mat",
  },
  {
    label: "Hướng dẫn mua hàng",
    href: "/huong-dan-mua-hang",
  },
  {
    label: "Chính sách đổi trả & hoàn tiền",
    href: "/chinh-sach-doi-tra",
  },
  {
    label: "Chính sách kiểm hàng",
    href: "/chinh-sach-kiem-hang",
  },
  {
    label: "Chính sách giao hàng & vận chuyển",
    href: "/chinh-sach-giao-hang",
  },
  {
    label: "Chính sách thanh toán",
    href: "/chinh-sach-thanh-toan",
  },
] as const;

function SocialIcon({ name }: { name: "facebook" | "instagram" | "tiktok" | "zalo" }) {
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

  if (name === "tiktok") {
    return (
      <svg aria-hidden="true" viewBox="0 0 448 512" className="h-4 w-4 fill-current">
        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
      </svg>
    );
  }

  // Zalo custom text icon
  return (
    <span className="text-xs font-black tracking-tight">Zalo</span>
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
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/90 transition-all duration-300 hover:bg-[#B5222A] hover:text-white hover:scale-115 hover:shadow-[0_0_14px_rgba(181,34,42,0.7)] active:scale-95"
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
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/90 transition-all duration-300 hover:bg-[#B5222A] hover:text-white hover:scale-115 hover:shadow-[0_0_14px_rgba(181,34,42,0.7)] active:scale-95"
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
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/90 transition-all duration-300 hover:bg-[#B5222A] hover:text-white hover:scale-115 hover:shadow-[0_0_14px_rgba(181,34,42,0.7)] active:scale-95"
        >
          <SocialIcon name="tiktok" />
        </a>
      </li>
      <li>
        <a
          href="https://zalo.me/g/kogger629"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Zalo"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/90 transition-all duration-300 hover:bg-[#B5222A] hover:text-white hover:scale-115 hover:shadow-[0_0_14px_rgba(181,34,42,0.7)] active:scale-95"
        >
          <SocialIcon name="zalo" />
        </a>
      </li>
    </ul>
  );
}

function ConsultationForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-center text-xs font-medium leading-relaxed text-emerald-200">
        <div className="flex items-center justify-center gap-2 mb-1.5 text-emerald-400 font-bold">
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
        className="h-10 w-full rounded-lg border border-white/15 bg-white/10 px-3 text-xs text-white placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-[#F0831F] focus:ring-1 focus:ring-[#F0831F]/40 focus:bg-white/15"
      />
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center border-r border-white/15 pr-2.5 text-xs text-gray-300">
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
          className="h-10 w-full rounded-lg border border-white/15 bg-white/10 pl-14 pr-3 text-xs text-white placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-[#F0831F] focus:ring-1 focus:ring-[#F0831F]/40 focus:bg-white/15"
        />
      </div>
      <input
        type="text"
        name="loi_nhan"
        placeholder="Lời nhắn / Nhu cầu tư vấn"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        aria-label="Lời nhắn"
        className="h-10 w-full rounded-lg border border-white/15 bg-white/10 px-3 text-xs text-white placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-[#F0831F] focus:ring-1 focus:ring-[#F0831F]/40 focus:bg-white/15"
      />
      <button
        type="submit"
        className="na-btn-primary animate-shimmer-btn group w-full h-10 text-xs uppercase tracking-wider font-bold shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <span>GỬI YÊU CẦU TƯ VẤN</span>
        <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
  return (
    <footer className="relative bg-[#4B193E] text-white overflow-hidden border-t border-[#622152]">
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
          backgroundImage: `radial-gradient(#FFF 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top Gold Accent Line with Infinite Border Beam (Animation #1) */}
      <div className="relative h-[2px] w-full overflow-hidden bg-white/10">
        <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#F0831F] to-transparent animate-border-beam" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* ═══ Cột 1: Thương hiệu & Di sản (Col 4) ═══ */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group" aria-label="Trang chủ Kim's Red Ginseng">
              <div className="relative h-14 w-48 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={BRAND_LOGOS.horizontalWhite}
                  alt="6년근 김정환홍삼 | Kim's Red Ginseng"
                  fill
                  sizes="200px"
                  className="object-contain object-left drop-shadow-md"
                />
              </div>
            </Link>

            <p className="font-sans text-sm font-bold text-[#F0831F] tracking-wide">
              Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác
            </p>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Thương hiệu Hồng sâm 6 năm tuổi thượng hạng vùng núi Punggi Hàn Quốc, được kiến tạo từ 50 năm tâm huyết và bí quyết gia truyền của nghệ nhân Kim Jeong Hwan.
            </p>

            {/* Certification & Sale Notification Badge */}
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

              <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-[11px] font-semibold text-gray-200 shadow-xs">
                <ShieldCheck className="h-3.5 w-3.5 text-[#F0831F]" />
                <span>GMP • HACCP • ISO 22000</span>
              </div>
            </div>
          </div>

          {/* ═══ Cột 2: Đơn vị nhập khẩu & Trụ sở (Col 3) ═══ */}
          <div className="lg:col-span-3 space-y-4">
            <div className="border-b border-white/10 pb-2">
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-white">
                Đơn vị nhập khẩu
              </h3>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-gray-300">
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
                <p className="font-bold text-white uppercase text-[13px]">
                  CÔNG TY TNHH THƯƠNG MẠI NA KOREA
                </p>
                <p className="text-gray-400 mt-0.5 text-[11px]">
                  GPĐKKD/MST: 0109946846 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp
                </p>
              </div>

              <address className="not-italic space-y-2.5 pt-1">
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="h-4 w-4 shrink-0 text-[#F0831F] mt-0.5" />
                  <span>LK 19-TT1, khu nhà ở 96-96B Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="h-4 w-4 shrink-0 text-[#F0831F]" />
                  <a href="tel:0903409939" className="hover:text-white transition-colors">
                    090.340.9939
                  </a>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="h-4 w-4 shrink-0 text-[#F0831F]" />
                  <a href="mailto:contact@nakorea.vn" className="hover:text-white transition-colors">
                    contact@nakorea.vn
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* ═══ Cột 3: Chính sách & Hỗ trợ (Col 2) ═══ */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border-b border-white/10 pb-2">
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-white">
                Chính sách
              </h3>
            </div>

            <nav aria-label="Liên kết chính sách">
              <ul className="space-y-2.5 text-xs text-gray-300">
                {usefulLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-start gap-1.5 transition-all duration-200 hover:text-white hover:translate-x-1"
                    >
                      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#F0831F]/70 transition-transform duration-200 group-hover:text-[#F0831F] group-hover:translate-x-1 mt-0.5" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ═══ Cột 4: Đăng ký nhận tư vấn VIP (Col 3) (Animation #2: Glow & Shimmer) ═══ */}
          <div className="lg:col-span-3 space-y-3">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-[#F0831F]/40 hover:bg-white/[0.08] hover:shadow-[0_12px_36px_rgba(75,25,62,0.5)]">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-[#F0831F]" />
                <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-white">
                  Đăng ký nhận tư vấn
                </h3>
              </div>
              <p className="text-[11px] text-gray-300 leading-relaxed mb-3.5">
                Nhận báo giá ưu đãi & tư vấn liệu trình hồng sâm chuyên sâu từ chuyên gia.
              </p>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Dải đáy: Copyright & Social Links ═══ */}
      <div className="border-t border-white/10 bg-[#3B1231]/90 py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-gray-400">
          <p>
            © 2026 NA Korea - Kim&apos;s Red Ginseng Vietnam. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-[11px] hidden md:inline">Kết nối với chúng tôi:</span>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}


