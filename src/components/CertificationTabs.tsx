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
import { ChevronDown, Eye, Award, X, Building2, Phone } from "lucide-react";

export function CertificationTabs() {
  const [activeCategory, setActiveCategory] = useState<string>("tat-ca");
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
      {/* CỘT TRÁI (Sidebar 4/12): Tabs điều hướng nằm dọc + Khung thông tin NA Korea */}
      <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
        <div className="space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 px-1">
            Danh mục chứng nhận
          </div>

          {/* Tab Buttons phong cách JungKwanJang tối giản */}
          <div className="flex lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
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
                  className={`w-full text-left py-3 px-3.5 rounded-lg text-xs sm:text-sm transition-all cursor-pointer shrink-0 border-l-2 flex items-center justify-between ${
                    isActive
                      ? "bg-gray-50 border-[#500028] text-gray-900 font-extrabold shadow-2xs"
                      : "bg-transparent border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50/60 font-medium"
                  }`}
                >
                  <span className="truncate pr-2 text-xs sm:text-sm tracking-tight">{cat.name}</span>
                  <span
                    className={`px-2 py-0.5 text-[10px] rounded-full font-bold shrink-0 ${
                      isActive ? "bg-[#500028] text-white" : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Khung Định danh Thực thể (GEO Anchor Box) Tinh gọn */}
        <div className="hidden lg:block bg-white border border-gray-200 rounded-xl p-4 space-y-2 shadow-2xs">
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#500028]">
            <Building2 className="w-3.5 h-3.5" />
            <span>Phân Phối Độc Quyền</span>
          </div>
          <div className="text-xs font-semibold text-gray-800 leading-snug">
            {SITE_CONFIG.companyName}
          </div>
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
            <span>Hotline hỗ trợ:</span>
            <a
              href={`tel:${SITE_CONFIG.hotline}`}
              className="font-bold text-[#500028] hover:underline"
            >
              {SITE_CONFIG.hotlineDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* CỘT PHẢI (Content 8/12): Grid Ảnh Siêu Tối Giản (Chỉ gồm Ảnh + Title Tiếng Việt) */}
      <div className="lg:col-span-8 space-y-6">
        {/* Tóm tắt Danh mục đang chọn */}
        <div className="bg-white border border-gray-200 p-5 sm:p-6 rounded-xl shadow-2xs flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold text-[#500028] tracking-widest uppercase block mb-1">
              Kiểm Định Chất Lượng
            </span>
            <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
              {activeCategoryData.name}
            </h2>
          </div>
          <span className="text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full shrink-0">
            {filteredCertificates.length} chứng chỉ
          </span>
        </div>

        {/* Certificate Cards Grid: Chỉ bao gồm Ảnh + Title Tiếng Việt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {filteredCertificates.map((cert) => (
            <article
              key={cert.id}
              onClick={() => setSelectedCertificate(cert)}
              className="group cursor-pointer flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#500028]/40 hover:shadow-md"
            >
              {/* Image Container với Nút Xem chi tiết khi Hover */}
              <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-50/60 p-4 border-b border-gray-100">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/95 text-xs font-semibold text-gray-900 shadow-sm">
                    <Eye className="w-3.5 h-3.5 text-[#500028]" /> Xem chi tiết
                  </span>
                </div>
              </div>

              {/* Title Tiếng Việt Tối Giản */}
              <div className="p-4 text-center">
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug group-hover:text-[#500028] transition-colors">
                  {cert.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* GEO AI Answer Extraction Block: FAQ Accordion Tối Giản */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#500028]" />
              <h3 className="text-sm sm:text-base font-bold text-gray-900">
                Giải Đáp Thắc Mắc Kiểm Định (FAQ)
              </h3>
            </div>
            <span className="text-[11px] text-gray-400">Chuẩn GEO AI</span>
          </div>

          <div className="space-y-2">
            {CERTIFICATION_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200/80 rounded-lg overflow-hidden transition-colors bg-white"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-3.5 flex items-center justify-between gap-3 font-semibold text-xs sm:text-sm text-gray-800 hover:bg-gray-50/80 transition-colors"
                  >
                    <span className="flex-1 leading-snug">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#500028]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-3.5 pb-3.5 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox / Modal Popup Chi Tiết: Hiển thị đầy đủ thông tin khi click */}
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

              {/* Popup details view */}
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
                  className="w-full py-2.5 px-4 bg-[#500028] text-white text-xs font-semibold rounded-lg hover:bg-[#3d001f] transition-colors shadow-xs cursor-pointer"
                >
                  Hoàn Tất Xem Chi Tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
