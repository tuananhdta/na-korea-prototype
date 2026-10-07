import type { Metadata } from "next";
import { HomeClientView } from "@/components/HomeClientView";

import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.slogan}`,
  },
  description: `${SITE_CONFIG.brandName}, phân phối chính hãng Hồng sâm 6 năm tuổi Hồng Sâm Kim Punggi Hàn Quốc bởi NA Korea: cao hồng sâm, nước hồng sâm, củ khô, bộ quà biếu thượng hạng.`,
  keywords: [
    "Hồng sâm Kim",
    "Nơi tận tâm trở thành kiệt tác",
    "hongsamkim.com",
    "Hồng Sâm Kim",
    "Hồng sâm Hồng Sâm Kim",
    "Nhân sâm Punggi 6 năm tuổi",
    "NA Korea",
    "Cao hồng sâm Hàn Quốc",
    "Bộ quà biếu hồng sâm chính hãng",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/`,
  },
  openGraph: {
    title: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.slogan}`,
    description: `${SITE_CONFIG.brandName}, phân phối chính hãng Hồng sâm 6 năm tuổi Hồng Sâm Kim Punggi Hàn Quốc bởi NA Korea: cao hồng sâm, nước hồng sâm, củ khô, bộ quà biếu thượng hạng.`,
    url: `${SITE_CONFIG.siteUrl}/`,
    siteName: `${SITE_CONFIG.brandName} - NA Korea`,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://kimsredginseng.com/wp-content/uploads/2024/07/Screenshot-2024-08-18-at-00.17.34.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.slogan}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.slogan}`,
    description: `${SITE_CONFIG.brandName}, phân phối chính hãng Hồng sâm 6 năm tuổi Hồng Sâm Kim Punggi Hàn Quốc bởi NA Korea: cao hồng sâm, nước hồng sâm, củ khô, bộ quà biếu thượng hạng.`,
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_CONFIG.brandName,
    "alternateName": SITE_CONFIG.subBrandName,
    "url": SITE_CONFIG.siteUrl,
    "description": `${SITE_CONFIG.slogan}. Nhà phân phối độc quyền thương hiệu Hồng sâm 6 năm tuổi Hồng Sâm Kim tại Việt Nam.`,
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.companyName,
      "slogan": SITE_CONFIG.slogan,
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_CONFIG.siteUrl}/#organization`,
    "name": SITE_CONFIG.companyName,
    "alternateName": SITE_CONFIG.brandName,
    "slogan": SITE_CONFIG.slogan,
    "description": `${SITE_CONFIG.slogan}. Đại diện nhập khẩu và phân phối độc quyền thương hiệu Hồng sâm 6 năm tuổi Hồng Sâm Kim của nghệ nhân Kim Jeong Hwan từ vùng Punggi Hàn Quốc.`,
    "url": SITE_CONFIG.siteUrl,
    "telephone": SITE_CONFIG.hotline,
    "email": SITE_CONFIG.email,
    "priceRange": "1.000.000₫ - 5.000.000₫",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "LK 19-TT1, khu nhà ở 96-96B Nguyễn Huy Tưởng",
      "addressLocality": "Thanh Xuân Trung",
      "addressRegion": "Hà Nội",
      "postalCode": "100000",
      "addressCountry": "VN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE_CONFIG.geo.latitude,
      "longitude": SITE_CONFIG.geo.longitude,
    },
    "brand": {
      "@type": "Brand",
      "name": SITE_CONFIG.subBrandName,
      "slogan": SITE_CONFIG.slogan,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <h1 className="sr-only">
        Hồng sâm Kim - Nơi tận tâm trở thành kiệt tác | Hồng Sâm Kim Punggi 6 năm tuổi Hàn Quốc
      </h1>
      <HomeClientView />
    </>
  );
}
