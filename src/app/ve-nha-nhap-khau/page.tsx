import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Về Nhà Nhập Khẩu - NA Korea",
  description: "Công ty TNHH Thương Mại NA Korea – Đơn vị đại diện nhập khẩu và phân phối độc quyền thương hiệu Hồng sâm 6 năm tuổi Kim's Red Ginseng Punggi tại Việt Nam.",
  keywords: [
    "NA Korea",
    "Nhà nhập khẩu",
    "Kim's Red Ginseng Việt Nam",
    "Hồng sâm chính ngạch",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/ve-nha-nhap-khau`,
  },
  openGraph: {
    title: `Về Nhà Nhập Khẩu - NA Korea | ${SITE_CONFIG.brandName}`,
    description: "Đại diện nhập khẩu và phân phối độc quyền Kim's Red Ginseng tại Việt Nam.",
    url: `${SITE_CONFIG.siteUrl}/ve-nha-nhap-khau`,
    type: "website",
  },
};

export default function ImporterPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex min-h-[calc(100vh-5rem)] flex-1 items-center justify-center px-4 sm:px-6">
        <h1 className="text-center text-2xl font-semibold text-heading sm:text-3xl">
          Về nhà nhập khẩu
        </h1>
      </main>

      <Footer />
    </div>
  );
}
