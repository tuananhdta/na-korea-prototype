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
    highlight: true,
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

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
      <g fill="currentColor">
        <path d="M16 28.5h27c1.7 0 2.8 1.8 1.7 3.2L25.4 62.7h18.3c1.5 0 2.6 1.1 2.6 2.6v2.9c0 1.5-1.1 2.6-2.6 2.6H15.3c-1.7 0-2.8-1.8-1.7-3.2L32.8 36.7H16c-1.5 0-2.6-1.1-2.6-2.6v-2.9c0-1.6 1.1-2.7 2.6-2.7z" />
        <path d="M60.1 40.5c5.7 0 9.7 4.3 9.7 10v20.4H62.3v-3.6c-1.9 2.5-4.9 4.2-8.5 4.2-6.4 0-10.8-4.7-10.8-11 0-6.4 4.6-11 11.4-11 2.9 0 5.3 1 7 2.5v-1.5c0-2.8-2-4.6-5-4.6-2.8 0-4.6 1.4-5 3.6l-6.8-1c1.1-5.3 5.7-8.9 12.1-8.9zm-3.1 19.6c2.8 0 5-2.1 5-5s-2.2-5-5-5-5 2.1-5 5 2.2 5 5 5z" />
        <path d="M76.2 25.2h7.5v45.7h-7.5V25.2z" />
        <path d="M94.5 40.5c7.4 0 13.3 5.4 13.3 12.9s-5.9 12.9-13.3 12.9-13.3-5.4-13.3-12.9 5.9-12.9 13.3-12.9zm0 18.3c3.5 0 6.1-2.5 6.1-5.4s-2.6-5.4-6.1-5.4-6.1 2.5-6.1 5.4 2.6 5.4 6.1 5.4z" />
      </g>
    </svg>
  );
}

function SocialLinks() {
  return (
    <ul className="flex items-center gap-2" aria-label="Mạng xã hội">
      <li>
        <a
          href="https://www.facebook.com/KimRedGinseng"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] text-white hover:bg-[#B5222A] transition-colors"
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
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] text-white hover:bg-[#B5222A] transition-colors"
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
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] text-white hover:bg-[#B5222A] transition-colors"
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
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] text-white hover:bg-[#B5222A] transition-colors"
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
      <div className="rounded border border-emerald-500/30 bg-emerald-50 p-4 text-center text-xs font-medium leading-relaxed text-emerald-800">
        <div className="flex items-center justify-center gap-2 mb-1 text-emerald-600 font-bold">
          <CheckCircle2 className="h-4 w-4" />
          <span>Đã gửi thành công!</span>
        </div>
        Chuyên viên NA Korea sẽ liên hệ tư vấn quý khách trong thời gian sớm nhất.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2" aria-label="Đăng ký nhận tư vấn">
      <input
        type="text"
        name="Ho_ten_khach_hang"
        placeholder="Họ và tên *"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        aria-label="Họ và tên"
        className="h-9 w-full rounded border border-[#DDDDDD] bg-[#FAFAFA] px-3 text-xs text-[#111111] placeholder:text-[#888888] outline-none focus:border-[#B5222A] focus:bg-white transition-colors"
      />
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center border-r border-[#DDDDDD] pr-2 text-xs text-[#666666]">
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
          className="h-9 w-full rounded border border-[#DDDDDD] bg-[#FAFAFA] pl-13 pr-3 text-xs text-[#111111] placeholder:text-[#888888] outline-none focus:border-[#B5222A] focus:bg-white transition-colors"
        />
      </div>
      <input
        type="text"
        name="loi_nhan"
        placeholder="Lời nhắn / Nhu cầu tư vấn"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        aria-label="Lời nhắn"
        className="h-9 w-full rounded border border-[#DDDDDD] bg-[#FAFAFA] px-3 text-xs text-[#111111] placeholder:text-[#888888] outline-none focus:border-[#B5222A] focus:bg-white transition-colors"
      />
      <button
        type="submit"
        className="na-btn-primary w-full h-9 text-xs uppercase tracking-wider font-bold"
      >
        <span>GỬI YÊU CẦU TƯ VẤN</span>
        <Send className="h-3.5 w-3.5" />
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
        url: `${SITE_CONFIG.siteUrl}${BRAND_LOGOS.horizontal}`,
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
      image: `${SITE_CONFIG.siteUrl}${BRAND_LOGOS.horizontal}`,
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
    <footer className="bg-white text-[#333333] border-t-2 border-[#111111]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(footerJsonLd) }}
      />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Cột 1: Thương hiệu */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block" aria-label="Trang chủ Kim's Red Ginseng">
              <div className="relative h-12 w-44">
                <Image
                  src={BRAND_LOGOS.horizontal}
                  alt="6년근 김정환홍삼 | Kim's Red Ginseng"
                  fill
                  sizes="180px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-xs font-bold text-[#B5222A] uppercase tracking-wider">
              Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác
            </p>

            <p className="text-xs text-[#666666] leading-relaxed max-w-sm">
              Thương hiệu Hồng sâm 6 năm tuổi thượng hạng vùng núi Punggi Hàn Quốc, được kiến tạo từ 50 năm tâm huyết và bí quyết gia truyền của nghệ nhân Kim Jeong Hwan.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="http://online.gov.vn/Home/WebDetails/127493"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                title="Đã thông báo Bộ Công Thương"
              >
                <Image
                  src="/images/wholesale/logoSaleNoti.png"
                  alt="Đã thông báo Bộ Công Thương"
                  width={130}
                  height={48}
                  className="h-9 w-auto object-contain"
                />
              </a>

              <div className="inline-flex items-center gap-1.5 rounded border border-[#EEEEEE] bg-[#FAFAFA] px-2.5 py-1 text-[11px] text-[#666666]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#B5222A]" />
                <span>GMP • HACCP • ISO 22000</span>
              </div>
            </div>
          </div>

          {/* Cột 2: Đơn vị nhập khẩu */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#EEEEEE] pb-2">
              Đơn vị nhập khẩu
            </h3>

            <div className="space-y-3 text-xs leading-relaxed text-[#666666]">
              <a
                href="https://nakorea.vn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Trang chủ NA Korea"
                className="inline-block border border-[#EEEEEE] rounded p-1 bg-white"
              >
                <Image
                  src="/images/wholesale/Logo-Na-Korea-01-300x87.png"
                  alt="NA Korea Import & Distribution"
                  width={130}
                  height={38}
                  className="h-6 w-auto object-contain"
                />
              </a>

              <div>
                <p className="font-bold text-[#111111] uppercase text-[12px]">
                  CÔNG TY TNHH THƯƠNG MẠI NA KOREA
                </p>
                <p className="text-[#888888] text-[11px] mt-0.5">
                  GPĐKKD/MST: 0109946846 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp
                </p>
              </div>

              <address className="not-italic space-y-2 pt-1 text-[12px]">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-[#B5222A] mt-0.5" />
                  <span>LK 19-TT1, khu nhà ở 96-96B Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#B5222A]" />
                  <a href="tel:0903409939" className="hover:text-[#B5222A] transition-colors">
                    090.340.9939
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#B5222A]" />
                  <a href="mailto:contact@nakorea.vn" className="hover:text-[#B5222A] transition-colors">
                    contact@nakorea.vn
                  </a>
                </div>
              </address>
            </div>
          </div>

          {/* Cột 3: Chính sách */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#EEEEEE] pb-2">
              Chính sách
            </h3>

            <nav aria-label="Liên kết chính sách">
              <ul className="space-y-2 text-xs text-[#666666]">
                {usefulLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 transition-colors ${
                        'highlight' in link && link.highlight
                          ? 'text-[#B5222A] font-bold hover:underline'
                          : 'hover:text-[#111111]'
                      }`}
                    >
                      <ChevronRight className="h-3 w-3 shrink-0 text-[#B5222A]" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Cột 4: Đăng ký tư vấn */}
          <div className="lg:col-span-3 space-y-3">
            <div className="rounded border border-[#EEEEEE] bg-[#FAFAFA] p-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-4 w-4 text-[#B5222A]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  Đăng ký nhận tư vấn
                </h3>
              </div>
              <p className="text-[11px] text-[#666666] leading-relaxed mb-3">
                Nhận báo giá ưu đãi & tư vấn liệu trình hồng sâm chuyên sâu từ chuyên gia.
              </p>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>

      {/* Dải đáy */}
      <div className="border-t border-[#EEEEEE] bg-[#FAFAFA] py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-[#666666]">
          <p>
            © 2026 NA Korea - Kim&apos;s Red Ginseng Vietnam. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[#666666] text-[11px] hidden md:inline">Kết nối với chúng tôi:</span>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
