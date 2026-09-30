import { ShieldCheck, Mountain, Award, HeartHandshake } from "lucide-react";

export function EeatKnowledgeSection() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 sm:px-6 my-12">
      <div className="rounded-2xl border border-[#EEEEEE] bg-white p-6 sm:p-10 shadow-xs">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4A359]">
            Kiến thức & Tiêu chuẩn chất lượng
          </span>
          <h2 className="mt-1 text-xl sm:text-2xl font-bold text-[#111111]">
            Hồng Sâm 6 Năm Tuổi Punggi Hàn Quốc
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
            Punggi là thủ phủ nhân sâm lâu đời nhất Hàn Quốc dưới chân dãy núi Sobaek hùng vĩ. Điều kiện thổ nhưỡng màu mỡ kết hợp khí hậu chênh lệch ngày đêm lớn tạo nên củ sâm có hàm lượng hoạt chất Ginsenoside (Saponin) vượt trội.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-gray-100">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#181818] font-bold text-sm">
              <Mountain className="h-4 w-4 text-[#D4A359]" />
              <span>Thổ nhưỡng Punggi</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              100% nguyên liệu thu hoạch từ các nông trại đạt chuẩn canh tác an toàn GAP tại vùng núi Punggi.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#181818] font-bold text-sm">
              <Award className="h-4 w-4 text-[#D4A359]" />
              <span>Nghệ nhân 50 năm</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Bí quyết hấp sấy gia truyền của nghệ nhân Kim Jeong Hwan giúp chuyển hóa và tối ưu hàm lượng Ginsenoside Rg1, Rb1, Rg3.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#181818] font-bold text-sm">
              <ShieldCheck className="h-4 w-4 text-[#D4A359]" />
              <span>Chứng nhận Quốc tế</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Nhà máy sản xuất đạt tiêu chuẩn GMP, HACCP, ISO 22000 và kiểm định an toàn của Bộ Dược phẩm Hàn Quốc (MFDS).
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#181818] font-bold text-sm">
              <HeartHandshake className="h-4 w-4 text-[#D4A359]" />
              <span>Phân phối chính ngạch</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Nhập khẩu chính hãng bởi Công ty TNHH Thương Mại NA Korea, đầy đủ tem chống giả và kiểm định của Bộ Y Tế.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
