import { Metadata } from "next";
import { PolicyPageView } from "@/components/PolicyPageView";
import policiesData from "@/data/policies.json";

const policy = policiesData["huong-dan-mua-hang"];

export const metadata: Metadata = {
  title: policy.metaTitle,
  description: policy.metaDescription,
  keywords: policy.keywords,
  alternates: {
    canonical: "https://nakorea.vn/huong-dan-mua-hang",
  },
  openGraph: {
    title: policy.metaTitle,
    description: policy.metaDescription,
    url: "https://nakorea.vn/huong-dan-mua-hang",
    siteName: "Na Korea - Kim's Red Ginseng Việt Nam",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "/images/production.jpg",
        width: 1200,
        height: 630,
        alt: policy.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: policy.metaTitle,
    description: policy.metaDescription,
    images: ["/images/production.jpg"],
  },
};

export default function HuongDanMuaHangPage() {
  return <PolicyPageView slug="huong-dan-mua-hang" />;
}
