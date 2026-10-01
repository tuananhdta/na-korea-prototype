import type { Metadata } from "next";
import { NhaNhapKhauView } from "@/components/NhaNhapKhauView";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Nhà Nhập Khẩu & Chính Sách Hợp Tác Phân Phối",
  description: "Thông tin Nhà nhập khẩu chính ngạch NA Korea - Chương trình hợp tác phân phối độc quyền Hồng sâm 6 năm tuổi Hồng Kim Sâm tại Việt Nam.",
  keywords: [
    "Nhà nhập khẩu",
    "Nhà nhập khẩu hồng sâm",
    "NA Korea",
    "Hồng Kim Sâm",
    "Phân phối hồng sâm",
    "Chính sách sỉ hồng sâm",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/nha-nhap-khau`,
  },
  openGraph: {
    title: `Nhà Nhập Khẩu & Chính Sách Hợp Tác Phân Phối | ${SITE_CONFIG.brandName}`,
    description: "Nhà nhập khẩu chính ngạch NA Korea - Chiết khấu vượt trội, bảo hộ thị trường và nguồn hàng nhập khẩu 100% Hàn Quốc.",
    url: `${SITE_CONFIG.siteUrl}/nha-nhap-khau`,
    type: "website",
  },
};

export default function NhaNhapKhauPage() {
  return <NhaNhapKhauView />;
}
