"use client";

import Image from "next/image";
import { CircleCheck, Quote, Star } from "lucide-react";
import { SectionIndicator } from "@/components/SectionIndicator";

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

        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8E4DD] bg-white shadow-[0_8px_24px_rgba(40,28,18,0.05)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EEE8]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 390px, (min-width: 640px) 600px, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <div
                    className="flex gap-0.5 text-[#D4A359]"
                    aria-label="Đánh giá 5 trên 5 sao"
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <Quote
                    className="h-7 w-7 text-[#F3CFC8]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-6 flex-1 font-sans text-[15px] italic leading-7 text-[#111111]">
                  {testimonial.quote}
                </p>

                <div className="my-6 h-px w-full bg-[#ECE8E2]" />

                <div className="min-w-0">
                  <h3 className="font-sans text-base font-semibold leading-6 text-[#111111]">
                    {testimonial.name}
                  </h3>
                  <p className="font-sans text-xs leading-5 text-[#777777]">
                    {testimonial.location}
                  </p>
                  <p className="font-sans text-xs leading-5 text-[#4B193E] font-medium">
                    {testimonial.product}
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
