"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, CheckCircle2, Quote, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
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
    imageAlt: "Cao hồng sâm cô đặc Hồng Sâm Kim",
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
    imageAlt: "Nước hồng sâm trẻ em Hồng Sâm Kim",
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
  {
    id: "rev-4",
    author: "Cô Hoàng Thị Mai",
    role: "Khách hàng tại Hải Phòng (58 tuổi)",
    productName: "Hồng Sâm Lựu Collagen Thượng Hạng",
    rating: 5,
    date: "25/08/2024",
    comment:
      "Tôi dùng Hồng sâm lựu Collagen được 2 tháng nay, da dẻ hồng hào hẳn ra, vết nám mờ đi rõ rệt. Vị lựu chua ngọt rất dễ uống, gói nhỏ tiện mang theo đi du lịch hay đi làm.",
    image:
      "/images/products/hong-sam-luu-collagen-thuong-hang-kims-red-ginseng-30-goi-x-12gr.png",
    imageAlt: "Hồng sâm lựu collagen thượng hạng Hồng Sâm Kim",
  },
  {
    id: "rev-5",
    author: "Bác Phạm Quốc Bảo",
    role: "Khách hàng tại Cần Thơ (65 tuổi)",
    productName: "Hồng Sâm Nguyên Củ Tẩm Mật Ong 320g",
    rating: 5,
    date: "10/09/2024",
    comment:
      "Sâm củ dẻo ngon, thơm nồng vị mật ong rừng quyện cùng sâm Punggi. Mỗi sáng nhấm nháp 2-3 lát giúp huyết áp ổn định, xương khớp bớt đau nhức hẳn khi trời trở lạnh.",
    image:
      "/images/products/hong-sam-nguyen-cu-tam-mat-ong-320g-8-cu.jpeg",
    imageAlt: "Hồng sâm nguyên củ tẩm mật ong Hồng Sâm Kim",
  },
  {
    id: "rev-6",
    author: "Chị Nguyễn Phương Thảo",
    role: "Khách hàng tại Quảng Ninh (38 tuổi)",
    productName: "Cốt Hồng Sâm Linh Chi Cô Đặc Energy Time Plus",
    rating: 5,
    date: "05/09/2024",
    comment:
      "Chồng mình làm kinh doanh thường xuyên tiếp khách muộn. Từ ngày cho anh dùng cốt sâm linh chi này, người khỏe khoắn, mát gan giải độc và không còn bị mệt sau các chuyến công tác.",
    image:
      "/images/products/cot-hong-sam-linh-chi-co-dac-energy-time-plus-cua-kims-red-ginseng.jpeg",
    imageAlt: "Cốt hồng sâm linh chi cô đặc Energy Time Plus",
  },
  {
    id: "rev-7",
    author: "Anh Đỗ Hoàng Nam",
    role: "Khách hàng tại Bình Dương (45 tuổi)",
    productName: "Hồng Sâm 6 Năm Tuổi Thái Lát Tẩm Mật Ong",
    rating: 5,
    date: "19/08/2024",
    comment:
      "Sâm thái lát đóng gói từng khay rất vệ sinh. Vị ngọt nhẹ không gắt, miếng sâm dai dẻo thơm. Lái xe đường dài ngậm 1-2 lát là tỉnh táo tinh thần ngay lập tức.",
    image:
      "/images/products/hong-sam-6-nam-tuoi-thai-lat-tam-mat-ong-kims-red-ginseng.png",
    imageAlt: "Hồng sâm thái lát tẩm mật ong Hồng Sâm Kim",
  },
  {
    id: "rev-8",
    author: "Chị Vũ Ngọc Anh",
    role: "Khách hàng tại Hà Nội (29 tuổi)",
    productName: "Hồng Sâm Tăng Chiều Cao Trẻ Em Kids High",
    rating: 5,
    date: "30/08/2024",
    comment:
      "Bé nhà mình 7 tuổi uống hết 2 hộp thấy tăng chiều cao rõ rệt và nhanh nhẹn hơn. Sản phẩm chuẩn nội địa Hàn Quốc nhập khẩu chính ngạch nên gia đình rất yên tâm.",
    image:
      "/images/products/hong-sam-tang-chieu-cao-kims-red-ginseng-30-goi-x-10gr.png",
    imageAlt: "Hồng sâm tăng chiều cao trẻ em Hồng Sâm Kim",
  },
  {
    id: "rev-9",
    author: "Bác Phạm Minh Đức",
    role: "Khách hàng tại Nghệ An (67 tuổi)",
    productName: "Bộ Quà Biếu Hồng Sâm Thượng Hạng Hanneul",
    rating: 5,
    date: "12/09/2024",
    comment:
      "Đợt Tết vừa rồi con gái mua tặng bộ quà biếu Hồng Sâm Kim. Hộp gỗ dập kim sang trọng vô cùng, sản phẩm đa dạng từ nước sâm đến củ khô. Món quà sức khỏe rất ý nghĩa.",
    image:
      "/images/products/set-qua-bieu-kims-red-ginseng-3-san-pham-thuong-hang.png",
    imageAlt: "Bộ quà biếu hồng sâm thượng hạng Hồng Sâm Kim",
  },
  {
    id: "rev-10",
    author: "Anh Trịnh Quốc Việt",
    role: "Khách hàng tại Vũng Tàu (36 tuổi)",
    productName: "Cốt Hồng Sâm EnergyTime Shot (20 ống)",
    rating: 5,
    date: "22/09/2024",
    comment:
      "Dạng ống bẻ uống rất tiện lợi và sang. Mỗi lần tập gym hoặc làm việc tăng ca uống 1 ống là tràn đầy năng lượng, sức bền cải thiện rõ rệt.",
    image:
      "/images/products/cot-hong-sam-energytime-shot-20-ong-x-20ml.jpeg",
    imageAlt: "Cốt hồng sâm EnergyTime Shot dạng ống",
  },
];

export function CustomerReviewsSection({
  title = "Đánh giá từ khách hàng thực tế",
  subtitle = "Trải nghiệm sức khỏe chân thực từ hơn 10.000 khách hàng tin dùng Hồng Sâm Kim",
}: {
  title?: string;
  subtitle?: string;
}) {
  const [selectedImage, setSelectedImage] = useState<ReviewItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  // Exactly 3 reviews displayed starting from currentIndex
  const visibleReviews = [
    REVIEWS_DATA[currentIndex],
    REVIEWS_DATA[(currentIndex + 1) % REVIEWS_DATA.length],
    REVIEWS_DATA[(currentIndex + 2) % REVIEWS_DATA.length],
  ];

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

        {/* Carousel Container with Left/Right Icon Navigation */}
        <div className="relative mt-8 sm:mt-10 px-1 sm:px-12 lg:px-14">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Xem đánh giá trước đó"
            title="Đánh giá trước đó"
            className="absolute -left-1 sm:left-0 z-10 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white bg-white/95 text-[#4B193E] shadow-md backdrop-blur-xs transition-all duration-200 hover:bg-[#4B193E] hover:text-white hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B193E] cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Xem đánh giá tiếp theo"
            title="Đánh giá tiếp theo"
            className="absolute -right-1 sm:right-0 z-10 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white bg-white/95 text-[#4B193E] shadow-md backdrop-blur-xs transition-all duration-200 hover:bg-[#4B193E] hover:text-white hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B193E] cursor-pointer"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          {/* 2 Review Cards on Mobile (grid-cols-2), 3 Review Cards on Desktop (lg:grid-cols-3) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-3">
            {visibleReviews.map((rev, idx) => (
              <article
                key={`${rev.id}-${(currentIndex + idx) % REVIEWS_DATA.length}`}
                className={`relative flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-white bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-in fade-in duration-300 ${
                  idx === 2 ? "hidden lg:flex" : "flex"
                }`}
              >
                {/* Clickable Image with Zoom Trigger */}
                <button
                  type="button"
                  onClick={() => setSelectedImage(rev)}
                  className="group/img relative w-full aspect-[4/3] shrink-0 overflow-hidden bg-[#F2EEE8] cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4B193E]"
                  aria-label={`Xem ảnh lớn: ${rev.imageAlt}`}
                  title="Nhấn để phóng to ảnh"
                >
                  <Image
                    src={rev.image}
                    alt={rev.imageAlt}
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
                <div className="flex flex-1 flex-col justify-between p-2.5 sm:p-5 lg:p-6 min-w-0">
                  <div>
                    {/* Rating Stars & Quote Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-amber-400" aria-label={`Đánh giá 5 sao`}>
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <Quote className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-[#4B193E]/20" />
                    </div>

                    {/* Comment Text */}
                    <p className="mt-1.5 sm:mt-4 text-xs sm:text-sm text-gray-700 leading-tight sm:leading-relaxed italic line-clamp-4 sm:line-clamp-none">
                      &ldquo;{rev.comment}&rdquo;
                    </p>
                  </div>

                  <div className="mt-2.5 sm:mt-6 border-t border-gray-100 pt-2 sm:pt-4">
                    <p className="font-bold text-xs sm:text-sm text-[#111111] truncate">{rev.author}</p>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 truncate">{rev.role}</p>
                    <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-[#4B193E] truncate">
                      Đã mua: {rev.productName}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {REVIEWS_DATA.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Chuyển đến đánh giá ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? "w-8 bg-[#4B193E]"
                    : "w-2.5 bg-gray-300 hover:bg-[#4B193E]/40"
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
