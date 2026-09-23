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

export const metadata: Metadata = {
  title: "Kim's Red Ginseng - Hồng Sâm 6 Năm Tuổi Punggi Hàn Quốc",
  description: "Tổng công ty Nông nghiệp Nhân sâm Punggi - Chuyên sản xuất Hồng sâm 6 năm tuổi Kim's Red Ginseng và Thực phẩm chức năng bảo vệ sức khỏe cao cấp",
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
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
