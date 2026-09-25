import type { Metadata } from "next";
import { CatalogClientView } from "@/components/catalog/CatalogClientView";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Cẩm Nang Dược Tính & Công Dụng Ginsenoside",
  description: `Cẩm nang chuyên sâu về 30+ loại hoạt chất Ginsenoside (Saponin) quý hiếm trong Hồng sâm 6 năm tuổi Punggi Hàn Quốc: cơ chế miễn dịch, phục hồi thể lực và lưu thông khí huyết.`,
  keywords: [
    "Công dụng Ginsenoside",
    "Hoạt chất Saponin trong hồng sâm",
    "Ginsenoside Rg1 Rb1 Rg3",
    "Tác dụng của hồng sâm 6 năm tuổi",
    "Kim's Red Ginseng",
    "NA Korea",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/cam-nang/ginsenoside`,
  },
  openGraph: {
    title: `Cẩm Nang Dược Tính & Công Dụng Ginsenoside | ${SITE_CONFIG.brandName}`,
    description: `Cẩm nang chuyên sâu về 30+ loại hoạt chất Ginsenoside quý hiếm trong Hồng sâm 6 năm tuổi Punggi Hàn Quốc.`,
    url: `${SITE_CONFIG.siteUrl}/cam-nang/ginsenoside`,
    siteName: `${SITE_CONFIG.brandName} - NA Korea`,
    locale: "vi_VN",
    type: "article",
  },
};

export default function GinsenosideCamNangPage() {
  return <CatalogClientView initialTab="ginsenoside-guide" />;
}
