"use client";

import { useState } from "react";
import { Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import { ERA_DATA } from "@/data/timelineData";

export function TimelineTabs() {
  const [activeTab, setActiveTab] = useState<string>("era-1986-1999");

  const currentEra = ERA_DATA.find((e) => e.id === activeTab) || ERA_DATA[0];

  return (
    <div className="space-y-8">
      {/* Tab Navigation (Giao diện Ngang trên Desktop, Responsive Scroll trên Mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-gray-100">
        {ERA_DATA.map((era) => {
          const isActive = era.id === activeTab;
          return (
            <button
              key={era.id}
              onClick={() => setActiveTab(era.id)}
              className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-[#4B193E] text-white shadow-md scale-[1.02]"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              <Calendar className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-gray-400"}`} />
              {era.label}
            </button>
          );
        })}
      </div>

      {/* Hero Highlight Card cho Giai Đoạn được chọn */}
      <div className="bg-gradient-to-r from-[#4B193E]/5 via-[#4B193E]/10 to-transparent p-6 sm:p-8 rounded-2xl border-l-4 border-[#4B193E] space-y-2">
        <div className="text-xs font-extrabold text-[#4B193E] uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#4B193E]" />
          {currentEra.badge}
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight">
          {currentEra.summaryTitle}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-3xl">
          {currentEra.summaryDesc}
        </p>
      </div>

      {/* Danh sách Timeline chi tiết của Giai Đoạn được chọn */}
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
              <ul className="space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl">
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
  );
}
