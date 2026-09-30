"use client";

import Image from "next/image";
import { Star, CheckCircle2, Quote } from "lucide-react";
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
              {/* Left on Mobile, Top on Desktop: Image */}
              <div className="relative w-[115px] min-[400px]:w-[135px] sm:w-[190px] lg:w-full shrink-0 overflow-hidden bg-[#F2EEE8] lg:aspect-[4/3] self-stretch">
                <Image
                  src={rev.image}
                  alt={rev.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 390px, (min-width: 640px) 190px, 135px"
                  className="object-cover object-center"
                />
              </div>

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
    </section>
  );
}
