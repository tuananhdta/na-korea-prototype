import type { Metadata } from "next";
import { LienHeView } from "@/components/LienHeView";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Liên Hệ & Hỗ Trợ Khách Hàng",
  description: "Liên hệ NA Korea – Nhà nhập khẩu và phân phối độc quyền Hồng sâm 6 năm tuổi Kim's Red Ginseng Punggi Hàn Quốc. Hotline tư vấn 24/7: 090.340.9939.",
  keywords: [
    "Liên hệ NA Korea",
    "Hotline hồng sâm Kim",
    "Showroom Kim's Red Ginseng",
    "Địa chỉ NA Korea",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/lien-he`,
  },
  openGraph: {
    title: `Liên Hệ & Hỗ Trợ Khách Hàng | ${SITE_CONFIG.brandName}`,
    description: "Đội ngũ chuyên viên tư vấn dinh dưỡng của Kim's Red Ginseng luôn sẵn sàng hỗ trợ bạn.",
    url: `${SITE_CONFIG.siteUrl}/lien-he`,
    type: "website",
  },
};

export default function LienHePage() {
  return <LienHeView />;
}
