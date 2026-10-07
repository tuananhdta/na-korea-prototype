import type { Metadata } from "next";
import { SanPhamTreEmView } from "@/components/SanPhamTreEmView";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Hồng Sâm Trẻ Em Tăng Cường Miễn Dịch",
  description: "Dòng sản phẩm Hồng sâm trẻ em Easy & High, Hồng sâm lê hoa chuông Hàn Quốc giúp bé ăn ngon, tăng sức đề kháng và hỗ trợ phát triển thể chất.",
  keywords: [
    "Hồng sâm trẻ em",
    "Nước hồng sâm cho bé",
    "Hồng sâm lê hoa chuông",
    "Hồng Sâm Kim Kids",
    "Tăng đề kháng cho trẻ",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/san-pham/tre-em`,
  },
  openGraph: {
    title: `Hồng Sâm Trẻ Em Tăng Cường Miễn Dịch | ${SITE_CONFIG.brandName}`,
    description: "Bộ sản phẩm Hồng sâm bổ dưỡng an toàn, thơm ngon dành riêng cho sự phát triển khỏe mạnh của trẻ nhỏ.",
    url: `${SITE_CONFIG.siteUrl}/san-pham/tre-em`,
    type: "website",
  },
};

export default function KidsProductPage() {
  return <SanPhamTreEmView />;
}
