"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CERTIFICATION_CATEGORIES,
  CERTIFICATE_ITEMS,
  CERTIFICATION_FAQS,
  CertificateItem,
} from "@/data/certificationData";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { ChevronDown, Eye, ShieldCheck, Award, X, Building2, Phone } from "lucide-react";

export function CertificationTabs() {
  const [activeCategory, setActiveCategory] = useState<string>("tat-ca");
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeCategoryData =
    CERTIFICATION_CATEGORIES.find((cat) => cat.id === activeCategory) ||
    CERTIFICATION_CATEGORIES[0];

  const filteredCertificates =
    activeCategory === "tat-ca"
      ? CERTIFICATE_ITEMS
      : CERTIFICATE_ITEMS.filter((item) => item.categoryId === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      {/* CỘT TRÁI (Sidebar 4/12): Tabs điều hướng nằm dọc + Cố định thông tin thực thể NA Korea (Bố cục 100% đồng bộ với Lịch Sử) */}
      <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">
            Danh mục chứng nhận
          </div>

          {/* Tab Buttons chuẩn JungKwanJang: Viền mảnh border-l-2, nền xám siêu nhẹ khi chọn */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CERTIFICATION_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === "tat-ca"
                  ? CERTIFICATE_ITEMS.length
                  : CERTIFICATE_ITEMS.filter((i) => i.categoryId === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left py-3.5 px-4 rounded-lg text-xs sm:text-sm transition-all cursor-pointer shrink-0 border-l-2 flex items-center justify-between ${
                    isActive
                      ? "bg-gray-50 border-[#500028] text-gray-900 font-extrabold shadow-2xs"
                      : "bg-transparent border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50/60 font-medium"
                  }`}
                >
                  <div className="truncate pr-2">
                    <div className="text-xs sm:text-sm tracking-tight">{cat.name}</div>
                  </div>
                  <span
                    className={`ml-1 px-2 py-0.5 text-[11px] rounded-full font-bold shrink-0 ${
                      isActive ? "bg-[#500028] text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Khung Định danh Thực thể (GEO Anchor Box) - Giữ vững E-E-A-T tại Sidebar */}
        <div className="hidden lg:block bg-white border border-gray-200 rounded-xl p-5 space-y-3 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#500028]">
            <Building2 className="w-4 h-4" />
            <span>Đơn Vị Phân Phối Độc Quyền</span>
          </div>
          <div className="text-xs text-gray-700 font-semibold leading-snug">
            {SITE_CONFIG.companyName}
          </div>
          <p className="text-[12px] text-gray-500 leading-relaxed">
            Cam kết 100% sản phẩm Hồng Sâm Kim nhập khẩu chính ngạch từ Punggi (Hàn Quốc) có đầy đủ giấy tờ chứng nhận an toàn thực phẩm.
          </p>
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-[#500028]" /> Hotline:
            </span>
            <a
              href={`tel:${SITE_CONFIG.hotline}`}
              className="font-bold text-[#500028] hover:underline"
            >
              {SITE_CONFIG.hotlineDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* CỘT PHẢI (Content 8/12): Chi tiết Danh mục, Grid Ảnh 2 cột & Khối FAQ AI */}
      <div className="lg:col-span-8 space-y-8">
        {/* Tóm tắt Danh mục đang chọn - Khối trắng viền mảnh 1px */}
        <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold text-[#500028] tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Kiểm Định Chất Lượng Quốc Tế</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
            {activeCategoryData.name}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal pt-1">
            {activeCategoryData.description}
          </p>
        </div>

        {/* Certificate Cards Grid (2 Cột rộng rãi chuẩn Desktop trong cột 8/12) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {filteredCertificates.map((cert) => (
            <article
              key={cert.id}
              onClick={() => setSelectedCertificate(cert)}
              className="group cursor-pointer flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#500028]/30 hover:shadow-md"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-50 p-4 border-b border-gray-100">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-xs font-semibold text-gray-900 shadow-sm">
                    <Eye className="w-3.5 h-3.5 text-[#500028]" /> Phóng to xem ảnh
                  </span>
                </div>
              </div>

              {/* Card Information */}
              <div className="flex flex-1 flex-col p-4">
                <span className="text-[11px] font-medium text-[#500028] uppercase tracking-wider bg-[#500028]/5 px-2 py-0.5 rounded-xs w-fit mb-2">
                  {cert.englishTitle}
                </span>
                <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#500028] transition-colors">
                  {cert.title}
                </h3>
                <p className="mt-2 text-xs text-gray-500 line-clamp-2 flex-1 leading-relaxed">
                  {cert.description}
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="truncate max-w-[170px]">{cert.issuingBody}</span>
                  <span className="text-[#500028] font-medium group-hover:underline shrink-0">Chi tiết &rarr;</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GEO AI Answer Extraction Block: FAQ Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 space-y-6 shadow-2xs">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#500028] bg-[#500028]/5 px-2.5 py-1 rounded-full">
              <Award className="w-3.5 h-3.5" /> Thắc mắc kiểm định
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Giải Đáp Câu Hỏi Về Chứng Nhận Chất Lượng
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Dữ liệu giải đáp giúp khách hàng và công cụ tìm kiếm AI nắm rõ tính pháp lý nhập khẩu chính ngạch của Hồng Sâm Kim.
            </p>
          </div>

          <div className="space-y-3 pt-2 border-t border-gray-100">
            {CERTIFICATION_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg overflow-hidden transition-colors bg-white"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 font-semibold text-xs sm:text-sm text-gray-900 hover:bg-gray-50/80 transition-colors"
                  >
                    <span className="flex-1 leading-snug">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#500028]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox / Modal View */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-100 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors z-10"
              aria-label="Đóng modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Image view */}
              <div className="relative aspect-3/4 w-full bg-gray-50 rounded-xl p-4 border border-gray-200 overflow-hidden">
                <Image
                  src={selectedCertificate.src}
                  alt={selectedCertificate.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Details view */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <span className="inline-block text-xs font-semibold text-[#500028] bg-[#500028]/10 px-2.5 py-1 rounded-full mb-3">
                    {selectedCertificate.englishTitle}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {selectedCertificate.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {selectedCertificate.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-200 text-xs">
                  <div>
                    <span className="font-semibold text-gray-700 block">Cơ quan thẩm định & cấp bằng:</span>
                    <span className="text-gray-600">{selectedCertificate.issuingBody}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700 block">Thương hiệu & Đơn vị bảo chứng:</span>
                    <span className="text-gray-600">Hồng Sâm Kim (Kim's Red Ginseng) — Nhập khẩu bởi Công ty TNHH Thương Mại NA Korea</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="w-full py-2.5 px-4 bg-[#500028] text-white text-xs font-semibold rounded-lg hover:bg-[#3d001f] transition-colors shadow-xs"
                >
                  Hoàn Tất Xem Chứng Nhận
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
