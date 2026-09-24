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

export default function LichSuHinhThanhPage() {
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
            <Link href="/gioi-thieu" className="hover:text-black transition-colors">Giới Thiệu</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#b5222a] font-medium">Lịch Sử Hình Thành</span>
          </nav>
        </div>

        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-6">
          <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100">
            <div className="relative border-l-2 border-red-100 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
              {TIMELINE.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Dot indicator */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#b5222a] group-hover:scale-125 transition-transform" />

                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#b5222a]">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.year}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
