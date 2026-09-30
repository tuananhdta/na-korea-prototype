"use client";

import Image from "next/image";
import { CircleCheck, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "“Tôi dùng cao sâm cô đặc Kim Jeong Hwan mỗi sáng pha nước ấm. Sau 3 tuần thấy ăn ngon miệng hơn, đêm ngủ sâu giấc và sáng dậy người rất khoan khoái, không còn mệt mỏi.”",
    name: "Bác Nguyễn Văn Hùng",
    location: "Khách hàng tại Hà Nội (62 tuổi)",
    product: "Đã mua: Cao Hồng Sâm Cô Đặc 6 Năm Tuổi",
    image: "/images/products/cao-hong-sam-kims-red-ginseng-100g-hu.jpeg",
    imageAlt: "Cao hồng sâm cô đặc Kim's Red Ginseng",
  },
  {
    quote:
      "“Bé 4 tuổi nhà mình trước đây rất biếng ăn và hay ốm vặt khi thời tiết thay đổi. Từ lúc uống sâm trẻ em vị thơm ngọt tự nhiên dễ uống, trộm vía bé ăn ngon và khỏe khoắn hơn hẳn.”",
    name: "Chị Trần Thu Trang",
    location: "Khách hàng tại TP.HCM (34 tuổi)",
    product: "Đã mua: Nước Hồng Sâm Trẻ Em Kids Growth",
    image:
      "/images/products/hong-sam-le-hoa-chuong-thuong-hang-cho-tre-em-30-goi-x-60ml.jpeg",
    imageAlt: "Nước hồng sâm trẻ em Kim's Red Ginseng",
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
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E5E2DD] px-4 py-2 font-figtree text-[11px] font-semibold uppercase tracking-[0.05em] text-[#181818]">
            <CircleCheck className="h-4 w-4" aria-hidden="true" />
            <span>CHỨNG THỰC NGƯỜI MUA HÀNG</span>
          </div>

          <h2 className="mt-4 font-sans text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#111111] sm:text-4xl lg:text-[40px]">
            Đánh giá từ khách hàng thực tế
          </h2>

          <p className="mt-3 font-sans text-sm leading-6 text-[#35628A] sm:text-base">
            Trải nghiệm sức khỏe chân thực từ hơn 10.000 khách hàng tin dùng
            Kim&apos;s Red Ginseng
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative flex h-full flex-col rounded-2xl border border-[#E8E4DD] bg-white p-6 shadow-[0_8px_24px_rgba(40,28,18,0.05)] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div
                  className="flex gap-0.5 text-[#F5AA00]"
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

              <p className="mt-6 flex-1 font-sans text-[15px] italic leading-7 text-[#35628A]">
                {testimonial.quote}
              </p>

              <div className="my-6 h-px w-full bg-[#ECE8E2]" />

              <div className="flex items-end gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-[#EEE8DF] bg-[#F7F4EF]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.imageAlt}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-sans text-base font-semibold leading-6 text-[#111111]">
                    {testimonial.name}
                  </h3>
                  <p className="font-sans text-xs leading-5 text-[#777777]">
                    {testimonial.location}
                  </p>
                  <p className="font-sans text-xs leading-5 text-[#F04438]">
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
