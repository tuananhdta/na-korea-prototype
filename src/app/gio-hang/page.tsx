import type { Metadata } from "next";
import { GioHangView } from "@/components/GioHangView";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Giỏ Hàng Của Bạn",
  description: "Quản lý giỏ hàng sản phẩm Hồng sâm Kim's Red Ginseng Punggi Hàn Quốc nhập khẩu chính ngạch bởi NA Korea.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/gio-hang`,
  },
  openGraph: {
    title: `Giỏ Hàng Của Bạn | ${SITE_CONFIG.brandName}`,
    description: "Xem lại danh sách sản phẩm hồng sâm được chọn và tiến hành đặt hàng.",
    url: `${SITE_CONFIG.siteUrl}/gio-hang`,
    type: "website",
  },
};

export default function GioHangPage() {
  return <GioHangView />;
}
