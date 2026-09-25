import { Metadata } from "next";
import { PolicyPageView } from "@/components/PolicyPageView";
import policiesData from "@/data/policies.json";
import { SITE_CONFIG } from "@/lib/siteConfig";

const policy = policiesData["chinh-sach-kiem-hang"];

export const metadata: Metadata = {
  title: policy.title,
  description: policy.metaDescription,
  keywords: policy.keywords,
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/chinh-sach-kiem-hang`,
  },
  openGraph: {
    title: `${policy.title} | ${SITE_CONFIG.brandName}`,
    description: policy.metaDescription,
    url: `${SITE_CONFIG.siteUrl}/chinh-sach-kiem-hang`,
    siteName: `${SITE_CONFIG.brandName} - NA Korea`,
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
    title: policy.title,
    description: policy.metaDescription,
    images: ["/images/production.jpg"],
  },
};

export default function ChinhSachKiemHangPage() {
  return <PolicyPageView slug="chinh-sach-kiem-hang" />;
}
