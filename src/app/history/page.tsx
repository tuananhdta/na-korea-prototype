"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, Calendar } from "lucide-react";

const TIMELINE = [
  {
    year: "1968",
    title: "Khởi nguồn trang trại sâm Punggi",
    description: "Gia đình nghệ nhân Kim Jeong Hwan bắt đầu nghề canh tác nhân sâm truyền thống tại vùng chân núi Sobaek huyền thoại.",
  },
  {
    year: "1986",
    title: "Chính thức thành lập cơ sở chế biến",
    description: "Mở rộng quy mô và xây dựng nhà máy sơ chế và hấp sấy hồng sâm đạt tiêu chuẩn chất lượng cao.",
  },
  {
    year: "2006",
    title: "Được cấp phép sản xuất Thực phẩm chức năng",
    description: "Cục Quản lý Thực phẩm & Dược phẩm Daegu cấp Giấy phép sản xuất chuyên biệt (Số 2006-Daegu-0001).",
  },
  {
    year: "2015",
    title: "Đạt chứng nhận Quốc Tế HACCP, GMP, FDA",
    description: "Tiên phong áp dụng công nghệ chiết xuất nước tinh khiết nhiệt độ thấp và xuất khẩu sang thị trường Mỹ, Nhật Bản, Châu Âu.",
  },
  {
    year: "Hiện nay",
    title: "Phân phối chính ngạch tại Việt Nam",
    description: "Chính thức có mặt tại Việt Nam, mang đến dòng sản phẩm Hồng sâm 6 năm tuổi thượng hạng cho người tiêu dùng Việt.",
  },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col">
      <Header />

      <main className="flex-1 pb-20">
        <PageHero
          eyebrow="HÀNH TRÌNH PHÁT TRIỂN"
          showEyebrow={false}
          title="Lịch Sử Hình Thành"
          description="Hơn nửa thế kỷ gìn giữ tinh hoa trồng sâm truyền thống và không ngừng đổi mới công nghệ chế biến hiện đại."
          image="/images/sub03.jpg"
          imageAlt="Hành trình phát triển Punggi"
          imageOpacity={0.9}
        />

        {/* Breadcrumb */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">Trang Chủ</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-medium">Giới Thiệu</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#b5222a] font-medium">Lịch Sử Hình Thành</span>
          </nav>
        </div>

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 mt-6">
          <div className="bg-white rounded-2xl p-6 sm:p-12 shadow-xs border border-gray-100">
            <div className="relative border-l-2 border-red-200 ml-4 sm:ml-8 space-y-10 py-4">
              {TIMELINE.map((item, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 sm:pl-10"
                  data-scroll-fade="on"
                >
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#b5222a] border-4 border-white shadow-xs" />
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-[#b5222a] font-bold text-xs rounded-md mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-gray-600 leading-relaxed max-w-2xl">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
