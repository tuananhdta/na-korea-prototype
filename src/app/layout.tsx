import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { BackToTop } from "@/components/BackToTop";
import { FloatingContact } from "@/components/FloatingContact";
import { ScrollFade } from "@/components/ScrollFade";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.brandName} - ${SITE_CONFIG.slogan} | ${SITE_CONFIG.subBrandName}`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description: `${SITE_CONFIG.slogan}. Tổng công ty Nông nghiệp Nhân sâm Punggi - Hồng sâm 6 năm tuổi Kim's Red Ginseng phân phối độc quyền bởi NA Korea tại Việt Nam.`,
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      className={`${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900 relative">
        <CartProvider>
          {children}
          <ScrollFade />
          <CartDrawer />
          <FloatingContact />
          <BackToTop />
        </CartProvider>
      </body>
    </html>
  );
}
