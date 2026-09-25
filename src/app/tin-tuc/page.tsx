import type { Metadata } from "next";
import { TinTucListView } from "@/components/TinTucListView";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Tin Tức & Kiến Thức Hồng Sâm",
  description: "Cập nhật tin tức hoạt động, sự kiện vinh danh quốc tế của Kim's Red Ginseng và kiến thức chuyên sâu về công dụng của hồng sâm 6 năm tuổi.",
  keywords: [
    "Tin tức hồng sâm",
    "Kim's Red Ginseng",
    "Kiến thức nhân sâm",
    "Sự kiện NA Korea",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/tin-tuc`,
  },
  openGraph: {
    title: `Tin Tức & Kiến Thức Hồng Sâm | ${SITE_CONFIG.brandName}`,
    description: "Cập nhật các hoạt động thương hiệu và cẩm nang chăm sóc sức khỏe cùng Kim's Red Ginseng.",
    url: `${SITE_CONFIG.siteUrl}/tin-tuc`,
    type: "website",
  },
};

export default function TinTucPage() {
  return <TinTucListView />;
}
