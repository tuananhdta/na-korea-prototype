"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CERTIFICATION_CATEGORIES,
  CERTIFICATE_ITEMS,
  CERTIFICATION_FAQS,
  CertificateItem,
} from "@/data/certificationData";
import { CheckCircle2, ChevronDown, Eye, ShieldCheck, Award, X } from "lucide-react";

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
    <div className="space-y-8 sm:space-y-12">
      {/* Category Tabs Navigation */}
      <div className="sticky top-20 z-20 bg-[#fcfcfc]/95 backdrop-blur-md py-3 border-b border-gray-200/80 shadow-xs">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar px-2 sm:px-4">
          {CERTIFICATION_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-[#500028] text-white shadow-sm ring-1 ring-[#500028]"
                    : "bg-white text-gray-700 hover:text-black hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {isActive && <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />}
                <span>{cat.shortName}</span>
                <span
                  className={`ml-1 px-1.5 py-0.5 text-[11px] rounded-full font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {cat.id === "tat-ca"
                    ? CERTIFICATE_ITEMS.length
                    : CERTIFICATE_ITEMS.filter((i) => i.categoryId === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Context & Description Block (GEO text density) */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#500028]/5 rounded-xl border border-[#500028]/10 text-[#500028] shrink-0 hidden sm:block">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
              {activeCategoryData.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              {activeCategoryData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Certificate Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-xs font-semibold text-gray-900 shadow-sm">
                  <Eye className="w-3.5 h-3.5 text-[#500028]" /> Click để phóng to
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
                <span className="truncate max-w-[180px]">{cert.issuingBody}</span>
                <span className="text-[#500028] font-medium group-hover:underline shrink-0">Chi tiết &rarr;</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* GEO AI Answer Extraction Block: FAQ Section */}
      <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-xs">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#500028] bg-[#500028]/5 px-3 py-1 rounded-full mb-3">
            <Award className="w-3.5 h-3.5" /> Giải đáp thắc mắc kiểm định
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Câu Hỏi Thường Gặp Về Chứng Nhận & Chất Lượng Hồng Sâm Kim
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Thông tin chi tiết hỗ trợ khách hàng và các công cụ tìm kiếm AI hiểu rõ về quy chuẩn an toàn thực phẩm nhập khẩu chính ngạch.
          </p>
        </div>

        <div className="space-y-4">
          {CERTIFICATION_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden transition-colors bg-white"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-gray-900 hover:bg-gray-50/80 transition-colors"
                >
                  <span className="flex-1">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-[#500028]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

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
