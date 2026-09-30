"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, CheckCircle2, Quote, X, ZoomIn } from "lucide-react";
import { SectionIndicator } from "@/components/SectionIndicator";

interface ReviewItem {
  id: string;
  author: string;
  role: string;
  productName: string;
  rating: number;
  date: string;
  comment: string;
  image: string;
  imageAlt: string;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Bác Nguyễn Văn Hùng",
    role: "Khách hàng tại Hà Nội (62 tuổi)",
    productName: "Cao Hồng Sâm Cô Đặc 6 Năm Tuổi",
    rating: 5,
    date: "14/08/2024",
    comment:
      "Tôi dùng cao sâm cô đặc Kim Jeong Hwan mỗi sáng pha nước ấm. Sau 3 tuần thấy ăn ngon miệng hơn, đêm ngủ sâu giấc và sáng dậy người rất khoan khoái, không còn mệt mỏi.",
    image: "/images/products/cao-hong-sam-kims-red-ginseng-100g-hu.jpeg",
    imageAlt: "Cao hồng sâm cô đặc Hồng Kim Sâm",
  },
  {
    id: "rev-2",
    author: "Chị Trần Thu Trang",
    role: "Khách hàng tại TP.HCM (34 tuổi)",
    productName: "Nước Hồng Sâm Trẻ Em Kids Growth",
    rating: 5,
    date: "02/09/2024",
    comment:
      "Bé 4 tuổi nhà mình trước đây rất biếng ăn và hay ốm vặt khi thời tiết thay đổi. Từ lúc uống sâm trẻ em vị thơm ngọt tự nhiên dễ uống, trộm vía bé ăn ngon và khỏe khoắn hơn hẳn.",
    image:
      "/images/products/hong-sam-le-hoa-chuong-thuong-hang-cho-tre-em-30-goi-x-60ml.jpeg",
    imageAlt: "Nước hồng sâm trẻ em Hồng Kim Sâm",
  },
  {
    id: "rev-3",
    author: "Anh Lê Minh Tuấn",
    role: "Khách hàng tại Đà Nẵng (41 tuổi)",
    productName: "Nước Hồng Sâm Balance Time Stick",
    rating: 5,
    date: "18/07/2024",
    comment:
      "Dạng gói stick 10ml rất tiện mang đi làm và công tác. Vị sâm đậm đặc tự nhiên, không bị ngọt gắt đường hóa học. Uống 1 gói lúc đầu giờ chiều giúp tỉnh táo tập trung làm việc.",
    image:
      "/images/products/tinh-chat-hong-sam-co-dac-balancetime-30-goi-x-10ml.jpeg",
    imageAlt: "Nước hồng sâm Balance Time dạng stick",
  },
];

export function CustomerReviewsSection({
  title = "Đánh giá từ khách hàng thực tế",
  subtitle = "Trải nghiệm sức khỏe chân thực từ hơn 10.000 khách hàng tin dùng Hồng Kim Sâm",
}: {
  title?: string;
  subtitle?: string;
}) {
  const [selectedImage, setSelectedImage] = useState<ReviewItem | null>(null);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedImage(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedImage]);

  return (
    <section className="my-16 border-t border-b border-[#EEEEEE] bg-[#FAF7F5] py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-[1080px] text-center mb-10 sm:mb-14">
          <SectionIndicator activeIndex={5} total={5} />

          <p className="mb-3 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#888888]">
            Chứng thực người mua hàng
          </p>

          <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px] lg:text-[32px]">
            {title}
          </h2>

          <p className="mt-4 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#111111] max-w-[860px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Reviews 1-row-per-card on mobile (image left, content right), 3-col on desktop */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
          {REVIEWS_DATA.map((rev) => (
            <article
              key={rev.id}
              className="relative flex h-full flex-row lg:flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Left on Mobile, Top on Desktop: Clickable Image with Zoom Trigger */}
              <button
                type="button"
                onClick={() => setSelectedImage(rev)}
                className="group/img relative w-[115px] min-[400px]:w-[135px] sm:w-[190px] lg:w-full shrink-0 overflow-hidden bg-[#F2EEE8] lg:aspect-[4/3] self-stretch cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B193E]"
                aria-label={`Xem ảnh lớn: ${rev.imageAlt}`}
                title="Nhấn để phóng to ảnh"
              >
                <Image
                  src={rev.image}
                  alt={rev.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 390px, (min-width: 640px) 190px, 135px"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover/img:scale-108"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs shadow-md">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>
              </button>

              {/* Right on Mobile, Bottom on Desktop: Review Content */}
              <div className="flex flex-1 flex-col justify-between p-3 min-[400px]:p-4 sm:p-5 lg:p-6 min-w-0">
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-400" aria-label={`Đánh giá 5 sao`}>
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-[#4B193E]/20" />
                  </div>

                  {/* Comment Text */}
                  <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-700 leading-snug sm:leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-3 sm:mt-6 border-t border-gray-100 pt-2.5 sm:pt-4">
                  <p className="font-bold text-xs sm:text-sm text-[#111111]">{rev.author}</p>
                  <p className="text-[10px] sm:text-[11px] text-gray-500">{rev.role}</p>
                  <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-[#4B193E] truncate">
                    Đã mua: {rev.productName}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ═══ FULLSCREEN IMAGE LIGHTBOX MODAL (ZOOM TOÀN MÀN HÌNH) ═══ */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh phóng to"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/92 p-4 sm:p-8 backdrop-blur-md animate-in fade-in duration-200 select-none"
          onClick={() => setSelectedImage(null)}
        >
          {/* Large 'X' Close Button at Top-Right */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/35 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-2xl border border-white/30 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Đóng xem ảnh"
            title="Đóng (Phím Esc)"
          >
            <X className="h-7 w-7 sm:h-8 sm:w-8 text-white stroke-[2.5]" />
          </button>

          {/* Centered High-Res Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center justify-center max-w-4xl max-h-[85vh] w-full h-full"
          >
            <div className="relative w-full h-[65vh] sm:h-[75vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.imageAlt}
                fill
                sizes="95vw"
                className="object-contain animate-in zoom-in-95 duration-200 drop-shadow-2xl"
                priority
              />
            </div>

            {/* Bottom Caption Pill */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs sm:text-sm text-white/95 backdrop-blur-md shadow-lg">
              <span className="font-bold text-[#D4A359]">{selectedImage.author}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/90">Đã mua: {selectedImage.productName}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
