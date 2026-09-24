import type { Metadata } from "next";
import { CatalogClientView } from "@/components/catalog/CatalogClientView";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Catalogue Sản Phẩm & Di Sản 2026 | ${SITE_CONFIG.brandName}`,
  description: `Khám phá trọn bộ ấn phẩm Catalogue 32 sản phẩm Hồng sâm 6 năm tuổi Kim's Red Ginseng vùng Punggi Hàn Quốc, quy trình hấp sấy gia truyền của nghệ nhân Kim Jeong Hwan.`,
  keywords: [
    "Catalogue Kim's Red Ginseng",
    "Catalog Hồng sâm Kim",
    "Sản phẩm Hồng sâm 6 năm tuổi",
    "Hồng sâm Punggi Hàn Quốc",
    "Kim Jeong Hwan",
    "NA Korea",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/catalog`,
  },
  openGraph: {
    title: `Catalogue Sản Phẩm & Di Sản 2026 | ${SITE_CONFIG.brandName}`,
    description: `Khám phá trọn bộ ấn phẩm Catalogue 32 sản phẩm Hồng sâm 6 năm tuổi Kim's Red Ginseng vùng Punggi Hàn Quốc.`,
    url: `${SITE_CONFIG.siteUrl}/catalog`,
    siteName: `${SITE_CONFIG.brandName} - NA Korea`,
    locale: "vi_VN",
    type: "website",
  },
};

export default function CatalogPage() {
  return <CatalogClientView initialTab="product-2026" />;
}
