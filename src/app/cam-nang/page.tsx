import type { Metadata } from "next";
import { CatalogClientView } from "@/components/catalog/CatalogClientView";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Catalogue Sản Phẩm & Di Sản 2026",
  description: `Khám phá trọn bộ ấn phẩm Catalogue 32 sản phẩm Hồng sâm 6 năm tuổi Hồng Kim Sâm vùng Punggi Hàn Quốc, quy trình hấp sấy gia truyền của nghệ nhân Kim Jeong Hwan.`,
  keywords: [
    "Catalogue Hồng Kim Sâm",
    "Catalog Hồng sâm Kim",
    "Sản phẩm Hồng sâm 6 năm tuổi",
    "Hồng sâm Punggi Hàn Quốc",
    "Kim Jeong Hwan",
    "NA Korea",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/cam-nang`,
  },
  openGraph: {
    title: `Catalogue Sản Phẩm & Di Sản 2026 | ${SITE_CONFIG.brandName}`,
    description: `Khám phá trọn bộ ấn phẩm Catalogue 32 sản phẩm Hồng sâm 6 năm tuổi Hồng Kim Sâm vùng Punggi Hàn Quốc.`,
    url: `${SITE_CONFIG.siteUrl}/cam-nang`,
    siteName: `${SITE_CONFIG.brandName} - NA Korea`,
    locale: "vi_VN",
    type: "website",
  },
};

export default function CamNangPage() {
  return <CatalogClientView initialTab="product-2026" />;
}
