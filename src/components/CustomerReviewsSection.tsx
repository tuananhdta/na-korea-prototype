"use client";

import { Star, CheckCircle2, Quote } from "lucide-react";

interface ReviewItem {
  id: string;
  author: string;
  role: string;
  productName: string;
  rating: number;
  date: string;
  comment: string;
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
  },
];

export function CustomerReviewsSection({
  title = "Đánh giá từ khách hàng thực tế",
  subtitle = "Trải nghiệm sức khỏe chân thực từ hơn 10.000 khách hàng tin dùng Kim's Red Ginseng",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="my-16 border-t border-b border-[#EEEEEE] bg-[#FAF7F5] py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#181818]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#181818]">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#181818]" />
            <span>Chứng thực người mua hàng</span>
          </div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Reviews 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between rounded-2xl border border-white bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400" aria-label={`Đánh giá 5 sao`}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-[#4B193E]/20" />
                </div>

                {/* Comment Text */}
                <p className="mt-4 text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="font-bold text-xs sm:text-sm text-[#111111]">{rev.author}</p>
                <p className="text-[11px] text-gray-500">{rev.role}</p>
                <p className="mt-1 text-[11px] font-medium text-[#4B193E]">
                  Đã mua: {rev.productName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
