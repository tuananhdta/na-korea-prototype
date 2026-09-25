// Server Component — do NOT add "use client" here
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { ThanhToanView } from "@/components/ThanhToanView";

export const metadata: Metadata = {
  title: "Thanh Toán Đơn Hàng",
  description:
    "Trang thanh toán an toàn, bảo mật đơn hàng Hồng sâm Kim's Red Ginseng tại NA Korea.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/thanh-toan`,
  },
  openGraph: {
    title: `Thanh Toán Đơn Hàng | ${SITE_CONFIG.brandName}`,
    description: "Thanh toán an toàn, giao hàng toàn quốc và hỗ trợ VietQR 24/7.",
    url: `${SITE_CONFIG.siteUrl}/thanh-toan`,
    type: "website",
  },
};

export default function ThanhToanPage() {
  return <ThanhToanView />;
}
