"use client";

import { useState } from "react";
import { ERA_DATA } from "@/data/timelineData";

export function TimelineTabs() {
  const [activeTab, setActiveTab] = useState<string>("era-1986-1999");

  const currentEra = ERA_DATA.find((e) => e.id === activeTab) || ERA_DATA[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* CỘT TRÁI (Sidebar 4/12): Tabs điều hướng tối giản phong cách JungKwanJang */}
      <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-3">
        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-1">
          Giai đoạn phát triển
        </div>

        {/* Tab Buttons phong cách JungKwanJang: Viền mảnh 1px, không gradient, không background rực rỡ */}
        <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {ERA_DATA.map((era) => {
            const isActive = era.id === activeTab;
            return (
              <button
                key={era.id}
                onClick={() => setActiveTab(era.id)}
                className={`w-full text-left py-3.5 px-4 rounded-lg text-xs sm:text-sm transition-all cursor-pointer shrink-0 border-l-2 ${
                  isActive
                    ? "bg-gray-50 border-[#4B193E] text-gray-900 font-extrabold shadow-2xs"
                    : "bg-transparent border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50/60 font-medium"
                }`}
              >
                <div className="text-sm tracking-tight">{era.label}</div>
                <div className="text-[11px] text-gray-400 mt-0.5 truncate font-normal">
                  {era.badge.replace(/^GIAI ĐOẠN [I|V]+:\s*/, "")}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* CỘT PHẢI (Content 8/12): Timeline tinh giản chuẩn Hàn Quốc */}
      <div className="lg:col-span-8 space-y-8">
        {/* Tóm tắt Giai đoạn - Khối trắng viền mảnh 1px, chữ đen sắc nét */}
        <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-xl space-y-2 shadow-2xs">
          <span className="text-[11px] font-bold text-[#4B193E] tracking-widest uppercase block">
            {currentEra.badge}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
            {currentEra.summaryTitle}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal pt-1">
            {currentEra.summaryDesc}
          </p>
        </div>

        {/* Trục Lịch Sử Tối Giản (1px gray line + năm nổi bật + bullet tinh gọn) */}
        <div className="relative border-l border-gray-200 ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {currentEra.items.map((item, index) => (
            <div key={index} className="relative">
              {/* Dot nhỏ nhắn 8px chuẩn JungKwanJang */}
              <div
                className={`absolute -left-[29px] sm:-left-[37px] top-1.5 w-2.5 h-2.5 rounded-full ${
                  item.highlight ? "bg-[#4B193E] ring-4 ring-white" : "bg-gray-300"
                }`}
              />

              <div className="space-y-2">
                {/* Năm hiển thị tối giản */}
                <div className="text-sm sm:text-base font-extrabold text-gray-900 tracking-tight font-mono">
                  {item.year}
                </div>

                {/* Danh sách sự kiện tinh gọn */}
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {item.events.map((evt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0 mt-1.5" />
                      <span className={item.highlight ? "font-semibold text-gray-900" : "text-gray-600"}>
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
