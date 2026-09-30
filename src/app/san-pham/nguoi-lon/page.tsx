import type { Metadata } from "next";
import { SanPhamNguoiLonView } from "@/components/SanPhamNguoiLonView";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Hồng Sâm Người Lớn & Bồi Bổ Sức Khỏe",
  description: "Các dòng sản phẩm Cao hồng sâm cô đặc 6 năm tuổi, Nước sâm Balance Time, Sâm củ tẩm mật ong Punggi Hàn Quốc giúp tăng cường thể lực, bồi bổ sức khỏe toàn diện.",
  keywords: [
    "Hồng sâm người lớn",
    "Cao hồng sâm Hàn Quốc",
    "Nước hồng sâm Balance Time",
    "Hồng Kim Sâm",
    "Hồng sâm tăng cường sinh lực",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/san-pham/nguoi-lon`,
  },
  openGraph: {
    title: `Hồng Sâm Người Lớn & Bồi Bổ Sức Khỏe | ${SITE_CONFIG.brandName}`,
    description: "Bộ sản phẩm Cao hồng sâm cô đặc, Nước sâm Balance Time thượng hạng cho người trưởng thành và người cao tuổi.",
    url: `${SITE_CONFIG.siteUrl}/san-pham/nguoi-lon`,
    type: "website",
  },
};

export default function AdultsProductPage() {
  return <SanPhamNguoiLonView />;
}
