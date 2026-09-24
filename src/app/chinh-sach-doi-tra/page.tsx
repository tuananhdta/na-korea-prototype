import { Metadata } from "next";
import { PolicyPageView } from "@/components/PolicyPageView";
import policiesData from "@/data/policies.json";

const policy = policiesData["chinh-sach-doi-tra"];

export const metadata: Metadata = {
  title: policy.metaTitle,
  description: policy.metaDescription,
  keywords: policy.keywords,
  alternates: {
    canonical: "https://nakorea.vn/chinh-sach-doi-tra",
  },
  openGraph: {
    title: policy.metaTitle,
    description: policy.metaDescription,
    url: "https://nakorea.vn/chinh-sach-doi-tra",
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

export default function ChinhSachDoiTraPage() {
  return <PolicyPageView slug="chinh-sach-doi-tra" />;
}
