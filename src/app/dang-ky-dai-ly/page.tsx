import type { Metadata } from "next";
import { DangKyDaiLyView } from "@/components/DangKyDaiLyView";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Chính Sách Hợp Tác Đại Lý & Nhà Phân Phối",
  description: "Chương trình hợp tác đại lý, nhà thuốc, chuỗi thực phẩm chức năng và NPP phân phối độc quyền Hồng sâm 6 năm tuổi Kim's Red Ginseng cùng NA Korea.",
  keywords: [
    "Đăng ký đại lý",
    "Phân phối hồng sâm",
    "Chính sách sỉ hồng sâm",
    "Kim's Red Ginseng",
    "NA Korea",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/dang-ky-dai-ly`,
  },
  openGraph: {
    title: `Chính Sách Hợp Tác Đại Lý & Nhà Phân Phối | ${SITE_CONFIG.brandName}`,
    description: "Chiết khấu vượt trội, bảo hộ thị trường và nguồn hàng nhập khẩu chính ngạch 100%.",
    url: `${SITE_CONFIG.siteUrl}/dang-ky-dai-ly`,
    type: "website",
  },
};

export default function DangKyDaiLyPage() {
  return <DangKyDaiLyView />;
}
