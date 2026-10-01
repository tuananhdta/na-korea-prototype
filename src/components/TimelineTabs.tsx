"use client";

import { useState } from "react";
import { Calendar, Sparkles, CheckCircle2, Award, ChevronRight } from "lucide-react";
import { ERA_DATA } from "@/data/timelineData";

export function TimelineTabs() {
  const [activeTab, setActiveTab] = useState<string>("era-1986-1999");

  const currentEra = ERA_DATA.find((e) => e.id === activeTab) || ERA_DATA[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      {/* CỘT TRÁI (Sidebar - 4/12 width): Dàn 4 Tab Giai Đoạn theo hàng dọc (Sticky trên Desktop) */}
      <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
        <div className="hidden lg:flex items-center gap-2 text-xs font-extrabold text-[#4B193E] uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-[#4B193E]" />
          ĐIỀU HƯỚNG GIAI ĐOẠN (1986 - NAY)
        </div>

        {/* Tab Buttons: Hàng ngang trên Mobile, Cột dọc trên Desktop */}
        <div className="flex lg:flex-col gap-2.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {ERA_DATA.map((era) => {
            const isActive = era.id === activeTab;
            return (
              <button
                key={era.id}
                onClick={() => setActiveTab(era.id)}
                className={`w-full text-left p-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer shrink-0 border ${
                  isActive
                    ? "bg-[#4B193E] text-white border-[#4B193E] shadow-md scale-[1.01]"
                    : "bg-white text-gray-700 border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? "bg-white/15 text-amber-300" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`text-sm font-extrabold ${isActive ? "text-white" : "text-gray-900"}`}>
                      {era.label}
                    </div>
                    <div
                      className={`text-[11px] font-medium truncate max-w-[170px] sm:max-w-[200px] ${
                        isActive ? "text-purple-200" : "text-gray-400"
                      }`}
                    >
                      {era.badge.replace(/^GIAI ĐOẠN [I|V]+:\s*/, "")}
                    </div>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 hidden sm:block shrink-0 transition-transform ${
                    isActive ? "text-amber-300 translate-x-1" : "text-gray-300"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Khối Trích Dẫn / Badge Cam Kết nhỏ ở chân Sidebar */}
        <div className="hidden lg:block bg-[#4B193E]/5 border border-[#4B193E]/10 rounded-xl p-4 mt-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#4B193E] mb-1">
            <Award className="w-4 h-4" />
            DI SẢN HƠN 35 NĂM
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Hồng Sâm Kim kiên định gìn giữ quy trình canh tác và chế biến nhân sâm 6 năm tuổi đạt chuẩn quốc tế từ vùng đất Punggi Hàn Quốc.
          </p>
        </div>
      </div>

      {/* CỘT PHẢI (Content - 8/12 width): Hiển thị chi tiết của Giai Đoạn được chọn */}
      <div className="lg:col-span-8 space-y-6">
        {/* Banner Tóm Tắt Giai Đoạn */}
        <div className="bg-gradient-to-r from-[#4B193E]/5 via-[#4B193E]/10 to-transparent p-6 sm:p-8 rounded-2xl border-l-4 border-[#4B193E] space-y-2 shadow-xs">
          <div className="text-xs font-extrabold text-[#4B193E] uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#4B193E]" />
            {currentEra.badge}
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight">
            {currentEra.summaryTitle}
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            {currentEra.summaryDesc}
          </p>
        </div>

        {/* Trục Lịch Sử Chi Tiết */}
        <div className="relative border-l-2 border-[#4B193E]/20 ml-3 sm:ml-6 md:ml-8 pl-6 sm:pl-8 space-y-8 pt-2">
          {currentEra.items.map((item, index) => (
            <div key={index} className="relative group">
              {/* Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 transition-transform ${
                  item.highlight
                    ? "bg-[#4B193E] border-white ring-2 ring-[#4B193E]/30 scale-110"
                    : "bg-white border-[#4B193E] group-hover:scale-125"
                }`}
              />

              <div className="space-y-2.5">
                {/* Year Badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold tracking-wide ${
                    item.highlight
                      ? "bg-[#4B193E] text-white shadow-xs"
                      : "bg-[#4B193E]/10 text-[#4B193E]"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  {item.year}
                </span>

                {/* Event Bullets */}
                <ul className="space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item.events.map((evt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#4B193E] shrink-0 mt-1" />
                      <span className={item.highlight ? "font-semibold text-gray-900" : ""}>
                        {evt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
