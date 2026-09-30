import type { Metadata } from "next";
import { TinTucListView } from "@/components/TinTucListView";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Tin Tức & Kiến Thức Hồng Sâm",
  description: "Cập nhật tin tức hoạt động, sự kiện vinh danh quốc tế của Hồng Kim Sâm và kiến thức chuyên sâu về công dụng của hồng sâm 6 năm tuổi.",
  keywords: [
    "Tin tức hồng sâm",
    "Hồng Kim Sâm",
    "Kiến thức nhân sâm",
    "Sự kiện NA Korea",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/tin-tuc`,
  },
  openGraph: {
    title: `Tin Tức & Kiến Thức Hồng Sâm | ${SITE_CONFIG.brandName}`,
    description: "Cập nhật các hoạt động thương hiệu và cẩm nang chăm sóc sức khỏe cùng Hồng Kim Sâm.",
    url: `${SITE_CONFIG.siteUrl}/tin-tuc`,
    type: "website",
  },
};

export default function TinTucPage() {
  return <TinTucListView />;
}
