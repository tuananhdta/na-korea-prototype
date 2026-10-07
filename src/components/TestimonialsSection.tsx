"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Quote, Star, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
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
    imageAlt: "Cao hồng sâm cô đặc Hồng Sâm Kim",
  },
  {
    quote:
      "“Bé 4 tuổi nhà mình trước đây rất biếng ăn và hay ốm vặt khi thời tiết thay đổi. Từ lúc uống sâm trẻ em vị thơm ngọt tự nhiên dễ uống, trộm vía bé ăn ngon và khỏe khoắn hơn hẳn.”",
    name: "Chị Trần Thu Trang",
    location: "Khách hàng tại TP.HCM (34 tuổi)",
    product: "Đã mua: Nước Hồng Sâm Trẻ Em Kids Growth",
    image:
      "/images/products/hong-sam-le-hoa-chuong-thuong-hang-cho-tre-em-30-goi-x-60ml.jpeg",
    imageAlt: "Nước hồng sâm trẻ em Hồng Sâm Kim",
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
  {
    quote:
      "“Tôi dùng Hồng sâm lựu Collagen được 2 tháng nay, da dẻ hồng hào hẳn ra, vết nám mờ đi rõ rệt. Vị lựu chua ngọt rất dễ uống, gói nhỏ tiện mang theo đi du lịch hay đi làm.”",
    name: "Cô Hoàng Thị Mai",
    location: "Khách hàng tại Hải Phòng (58 tuổi)",
    product: "Đã mua: Hồng Sâm Lựu Collagen Thượng Hạng",
    image:
      "/images/products/hong-sam-luu-collagen-thuong-hang-kims-red-ginseng-30-goi-x-12gr.png",
    imageAlt: "Hồng sâm lựu collagen thượng hạng Hồng Sâm Kim",
  },
  {
    quote:
      "“Sâm củ dẻo ngon, thơm nồng vị mật ong rừng quyện cùng sâm Punggi. Mỗi sáng nhấm nháp 2-3 lát giúp huyết áp ổn định, xương khớp bớt đau nhức hẳn khi trời trở lạnh.”",
    name: "Bác Phạm Quốc Bảo",
    location: "Khách hàng tại Cần Thơ (65 tuổi)",
    product: "Đã mua: Hồng Sâm Nguyên Củ Tẩm Mật Ong 320g",
    image:
      "/images/products/hong-sam-nguyen-cu-tam-mat-ong-320g-8-cu.jpeg",
    imageAlt: "Hồng sâm nguyên củ tẩm mật ong Hồng Sâm Kim",
  },
  {
    quote:
      "“Chồng mình làm kinh doanh thường xuyên tiếp khách muộn. Từ ngày cho anh dùng cốt sâm linh chi này, người khỏe khoắn, mát gan giải độc và không còn bị mệt sau các chuyến công tác.”",
    name: "Chị Nguyễn Phương Thảo",
    location: "Khách hàng tại Quảng Ninh (38 tuổi)",
    product: "Đã mua: Cốt Hồng Sâm Linh Chi Cô Đặc Energy Time Plus",
    image:
      "/images/products/cot-hong-sam-linh-chi-co-dac-energy-time-plus-cua-kims-red-ginseng.jpeg",
    imageAlt: "Cốt hồng sâm linh chi cô đặc Energy Time Plus",
  },
  {
    quote:
      "“Sâm thái lát đóng gói từng khay rất vệ sinh. Vị ngọt nhẹ không gắt, miếng sâm dai dẻo thơm. Lái xe đường dài ngậm 1-2 lát là tỉnh táo tinh thần ngay lập tức.”",
    name: "Anh Đỗ Hoàng Nam",
    location: "Khách hàng tại Bình Dương (45 tuổi)",
    product: "Đã mua: Hồng Sâm 6 Năm Tuổi Thái Lát Tẩm Mật Ong",
    image:
      "/images/products/hong-sam-6-nam-tuoi-thai-lat-tam-mat-ong-kims-red-ginseng.png",
    imageAlt: "Hồng sâm thái lát tẩm mật ong Hồng Sâm Kim",
  },
  {
    quote:
      "“Bé nhà mình 7 tuổi uống hết 2 hộp thấy tăng chiều cao rõ rệt và nhanh nhẹn hơn. Sản phẩm chuẩn nội địa Hàn Quốc nhập khẩu chính ngạch nên gia đình rất yên tâm.”",
    name: "Chị Vũ Ngọc Anh",
    location: "Khách hàng tại Hà Nội (29 tuổi)",
    product: "Đã mua: Hồng Sâm Tăng Chiều Cao Trẻ Em Kids High",
    image:
      "/images/products/hong-sam-tang-chieu-cao-kims-red-ginseng-30-goi-x-10gr.png",
    imageAlt: "Hồng sâm tăng chiều cao trẻ em Hồng Sâm Kim",
  },
  {
    quote:
      "“Đợt Tết vừa rồi con gái mua tặng bộ quà biếu Hồng Sâm Kim. Hộp gỗ dập kim sang trọng vô cùng, sản phẩm đa dạng từ nước sâm đến củ khô. Món quà sức khỏe rất ý nghĩa.”",
    name: "Bác Phạm Minh Đức",
    location: "Khách hàng tại Nghệ An (67 tuổi)",
    product: "Đã mua: Bộ Quà Biếu Hồng Sâm Thượng Hạng Hanneul",
    image:
      "/images/products/set-qua-bieu-kims-red-ginseng-3-san-pham-thuong-hang.png",
    imageAlt: "Bộ quà biếu hồng sâm thượng hạng Hồng Sâm Kim",
  },
  {
    quote:
      "“Dạng ống bẻ uống rất tiện lợi và sang. Mỗi lần tập gym hoặc làm việc tăng ca uống 1 ống là tràn đầy năng lượng, sức bền cải thiện rõ rệt.”",
    name: "Anh Trịnh Quốc Việt",
    location: "Khách hàng tại Vũng Tàu (36 tuổi)",
    product: "Đã mua: Cốt Hồng Sâm EnergyTime Shot (20 ống)",
    image:
      "/images/products/cot-hong-sam-energytime-shot-20-ong-x-20ml.jpeg",
    imageAlt: "Cốt hồng sâm EnergyTime Shot dạng ống",
  },
];

export function TestimonialsSection() {
  const [selectedImage, setSelectedImage] = useState<ModalImageInfo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Exactly 3 reviews displayed starting from currentIndex
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

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
    <section className="border-t border-b border-[#EEEEEE] bg-white py-16 font-sans sm:py-20 lg:py-24">
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
            Trải nghiệm sức khỏe chân thực từ hơn 10.000 khách hàng tin dùng Hồng Sâm Kim
          </p>
        </div>

        {/* Carousel Container with Left/Right Icon Navigation */}
        <div className="relative mt-8 sm:mt-10 px-1 sm:px-12 lg:px-14">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Xem đánh giá trước đó"
            title="Đánh giá trước đó"
            className="absolute -left-1 sm:left-0 z-10 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#E8E4DD] bg-white/95 text-[#4B193E] shadow-md backdrop-blur-xs transition-all duration-200 hover:bg-[#4B193E] hover:text-white hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B193E] cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Xem đánh giá tiếp theo"
            title="Đánh giá tiếp theo"
            className="absolute -right-1 sm:right-0 z-10 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#E8E4DD] bg-white/95 text-[#4B193E] shadow-md backdrop-blur-xs transition-all duration-200 hover:bg-[#4B193E] hover:text-white hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B193E] cursor-pointer"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          {/* 2 Review Cards on Mobile (grid-cols-2), 3 Review Cards on Desktop (lg:grid-cols-3) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-3">
            {visibleTestimonials.map((testimonial, idx) => (
              <article
                key={`${testimonial.name}-${(currentIndex + idx) % testimonials.length}`}
                className={`relative flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-[#E8E4DD] bg-white shadow-[0_8px_24px_rgba(40,28,18,0.05)] transition-all duration-300 hover:border-[#4B193E]/40 hover:shadow-md animate-in fade-in duration-300 ${
                  idx === 2 ? "hidden lg:flex" : "flex"
                }`}
              >
                {/* Clickable Image with Zoom Trigger */}
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
                  className="group/img relative w-full aspect-[4/3] shrink-0 overflow-hidden bg-[#F2EEE8] cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B193E]"
                  aria-label={`Xem ảnh lớn: ${testimonial.imageAlt}`}
                  title="Nhấn để phóng to ảnh"
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 390px, 50vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover/img:scale-108"
                  />

                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs shadow-md">
                      <ZoomIn className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                  </div>
                </button>

                {/* Review Content */}
                <div className="flex flex-1 flex-col justify-between p-2.5 sm:p-5 lg:p-7 min-w-0">
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex gap-0.5 text-[#D4A359]"
                        aria-label="Đánh giá 5 trên 5 sao"
                      >
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 fill-current"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <Quote
                        className="h-3.5 w-3.5 sm:h-5 sm:w-5 lg:h-7 lg:w-7 text-[#F3CFC8]"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>

                    <p className="mt-1.5 sm:mt-4 lg:mt-6 font-sans text-[11px] sm:text-sm lg:text-[15px] italic leading-tight sm:leading-relaxed lg:leading-7 text-[#111111] line-clamp-4 sm:line-clamp-none">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div>
                    <div className="my-1.5 sm:my-3 lg:my-6 h-px w-full bg-[#ECE8E2]" />

                    <div className="min-w-0">
                      <h3 className="font-sans text-xs sm:text-sm lg:text-base font-semibold leading-tight sm:leading-6 text-[#111111] truncate">
                        {testimonial.name}
                      </h3>
                      <p className="font-sans text-[10px] sm:text-xs leading-tight sm:leading-5 text-[#777777] mt-0.5 truncate">
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

          {/* Dots Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Chuyển đến đánh giá ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "w-8 bg-[#4B193E]"
                    : "w-2.5 bg-[#E8E4DD] hover:bg-[#4B193E]/40"
                }`}
              />
            ))}
          </div>
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
