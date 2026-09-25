import type { Metadata } from "next";
import { SanPhamCatalogView } from "@/components/SanPhamCatalogView";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Sản Phẩm Hồng Sâm Hàn Quốc Cao Cấp",
  description: "Khám phá bộ sưu tập Hồng sâm 6 năm tuổi Kim's Red Ginseng Punggi Hàn Quốc: cao hồng sâm cô đặc, nước hồng sâm stick, củ sâm khô, sâm lát mật ong chính ngạch.",
  keywords: [
    "Sản phẩm hồng sâm",
    "Hồng sâm Hàn Quốc",
    "Kim's Red Ginseng",
    "Cao hồng sâm 6 năm tuổi",
    "Nước hồng sâm",
    "Hồng sâm Punggi",
    "Hồng Sâm Kim",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/san-pham`,
  },
  openGraph: {
    title: `Sản Phẩm Hồng Sâm Hàn Quốc Cao Cấp | ${SITE_CONFIG.brandName}`,
    description: "Bộ sưu tập Hồng sâm 6 năm tuổi Kim's Red Ginseng Punggi Hàn Quốc nhập khẩu chính ngạch bởi NA Korea.",
    url: `${SITE_CONFIG.siteUrl}/san-pham`,
    type: "website",
  },
};

export default function SanPhamPage() {
  return <SanPhamCatalogView />;
}
