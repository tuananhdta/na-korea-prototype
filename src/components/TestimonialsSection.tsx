"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Quote, Star, X, ZoomIn } from "lucide-react";
import { SectionIndicator } from "@/components/SectionIndicator";

interface ModalImageInfo {
  src: string;
  alt: string;
  author: string;
  product: string;
}

const testimonials = [
  {
    quote:
      "“Tôi dùng cao sâm cô đặc Kim Jeong Hwan mỗi sáng pha nước ấm. Sau 3 tuần thấy ăn ngon miệng hơn, đêm ngủ sâu giấc và sáng dậy người rất khoan khoái, không còn mệt mỏi.”",
    name: "Bác Nguyễn Văn Hùng",
    location: "Khách hàng tại Hà Nội (62 tuổi)",
    product: "Đã mua: Cao Hồng Sâm Cô Đặc 6 Năm Tuổi",
    image: "/images/products/cao-hong-sam-kims-red-ginseng-100g-hu.jpeg",
    imageAlt: "Cao hồng sâm cô đặc Hồng Kim Sâm",
  },
  {
    quote:
      "“Bé 4 tuổi nhà mình trước đây rất biếng ăn và hay ốm vặt khi thời tiết thay đổi. Từ lúc uống sâm trẻ em vị thơm ngọt tự nhiên dễ uống, trộm vía bé ăn ngon và khỏe khoắn hơn hẳn.”",
    name: "Chị Trần Thu Trang",
    location: "Khách hàng tại TP.HCM (34 tuổi)",
    product: "Đã mua: Nước Hồng Sâm Trẻ Em Kids Growth",
    image:
      "/images/products/hong-sam-le-hoa-chuong-thuong-hang-cho-tre-em-30-goi-x-60ml.jpeg",
    imageAlt: "Nước hồng sâm trẻ em Hồng Kim Sâm",
  },
  {
    quote:
      "“Dạng gói stick 10ml rất tiện mang đi làm và công tác. Vị sâm đậm đặc tự nhiên, không bị ngọt gắt đường hóa học. Uống 1 gói lúc đầu giờ chiều giúp tỉnh táo tập trung làm việc.”",
    name: "Anh Lê Minh Tuấn",
    location: "Khách hàng tại Đà Nẵng (41 tuổi)",
    product: "Đã mua: Nước Hồng Sâm Balance Time Stick",
    image:
      "/images/products/tinh-chat-hong-sam-co-dac-balancetime-30-goi-x-10ml.jpeg",
    imageAlt: "Nước hồng sâm Balance Time dạng stick",
  },
];

export function TestimonialsSection() {
  const [selectedImage, setSelectedImage] = useState<ModalImageInfo | null>(null);

  // Lock body scroll and add Escape key listener when lightbox is active
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
    <section className="border-b border-[#EAE6DF] bg-[#F8F6F2] py-16 font-sans sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1080px] text-center mb-10 sm:mb-14">
          {/* Section 5: 4 chấm + 1 thanh ngang */}
          <SectionIndicator activeIndex={5} total={5} />

          <p className="mb-3 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#888888]">
            Chứng thực người mua hàng
          </p>

          <h2 className="mb-0 font-sans text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[28px] lg:text-[32px]">
            Đánh giá từ khách hàng thực tế
          </h2>

          <p className="mt-4 font-sans text-base font-normal leading-6 tracking-[-0.01em] text-[#111111] max-w-[860px] mx-auto">
            Trải nghiệm sức khỏe chân thực từ hơn 10.000 khách hàng tin dùng Hồng Kim Sâm
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative flex h-full flex-row lg:flex-col overflow-hidden rounded-2xl border border-[#E8E4DD] bg-white shadow-[0_8px_24px_rgba(40,28,18,0.05)] transition-all duration-300 hover:border-[#4B193E]/40 hover:shadow-md"
            >
              {/* Left on Mobile, Top on Desktop: Clickable Image with Zoom Trigger */}
              <button
                type="button"
                onClick={() =>
                  setSelectedImage({
                    src: testimonial.image,
                    alt: testimonial.imageAlt,
                    author: testimonial.name,
                    product: testimonial.product,
                  })
                }
                className="group/img relative w-[115px] min-[400px]:w-[135px] sm:w-[190px] lg:w-full shrink-0 overflow-hidden bg-[#F2EEE8] lg:aspect-[4/3] self-stretch cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B193E]"
                aria-label={`Xem ảnh lớn: ${testimonial.imageAlt}`}
                title="Nhấn để phóng to ảnh"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.imageAlt}
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
              <div className="flex flex-1 flex-col justify-between p-3 min-[400px]:p-4 sm:p-5 lg:p-7 min-w-0">
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className="flex gap-0.5 text-[#D4A359]"
                      aria-label="Đánh giá 5 trên 5 sao"
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-2.5 w-2.5 min-[400px]:h-3 min-[400px]:w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <Quote
                      className="h-4 w-4 min-[400px]:h-5 min-[400px]:w-5 lg:h-7 lg:w-7 text-[#F3CFC8]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-1.5 min-[400px]:mt-2.5 sm:mt-4 lg:mt-6 font-sans text-xs sm:text-sm lg:text-[15px] italic leading-snug sm:leading-relaxed lg:leading-7 text-[#111111]">
                    {testimonial.quote}
                  </p>
                </div>

                <div>
                  <div className="my-2 sm:my-3 lg:my-6 h-px w-full bg-[#ECE8E2]" />

                  <div className="min-w-0">
                    <h3 className="font-sans text-xs sm:text-sm lg:text-base font-semibold leading-tight sm:leading-6 text-[#111111]">
                      {testimonial.name}
                    </h3>
                    <p className="font-sans text-[10px] sm:text-xs leading-tight sm:leading-5 text-[#777777] mt-0.5">
                      {testimonial.location}
                    </p>
                    <p className="font-sans text-[10px] sm:text-xs leading-tight sm:leading-5 text-[#4B193E] font-medium truncate mt-0.5">
                      {testimonial.product}
                    </p>
                  </div>
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
                src={selectedImage.src}
                alt={selectedImage.alt}
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
              <span className="text-white/90">{selectedImage.product}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
