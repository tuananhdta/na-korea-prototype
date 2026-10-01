import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, Calendar, Award, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Lịch Sử Hình Thành & Phát Triển | Hồng Sâm Kim",
  description: "Hành trình phát triển lịch sử từ năm 1986 của Hồng Sâm Kim (Red Ginseng) – Bậc thầy Nhân sâm Hàn Quốc Kim Jeong Hwan, phân phối chính ngạch tại Việt Nam bởi CÔNG TY TNHH THƯƠNG MẠI NA KOREA.",
  keywords: [
    "Lịch sử hình thành",
    "Lịch sử Hồng Sâm Kim",
    "Red Ginseng",
    "Nghệ nhân Kim Jeong Hwan",
    "Punggi Ginseng Farming Corp",
    "Nhân sâm 6 năm tuổi",
    "NA KOREA",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/lich-su-hinh-thanh`,
  },
  openGraph: {
    title: `Lịch Sử Hình Thành & Phát Triển | ${SITE_CONFIG.brandName}`,
    description: "Chi tiết mốc lịch sử hình thành và phát triển từ năm 1986 đến nay của Hồng Sâm Kim.",
    url: `${SITE_CONFIG.siteUrl}/lich-su-hinh-thanh`,
    type: "website",
  },
};

interface TimelineItem {
  year: string;
  title?: string;
  events: string[];
  highlight?: boolean;
}

const FULL_TIMELINE: TimelineItem[] = [
  {
    year: "1986",
    events: [
      "Thành lập Công ty TNHH Nhân sâm Punggi Tae-geuk (Pung-gi Tae-geuk Ginseng Co. Ltd.).",
    ],
    highlight: true,
  },
  {
    year: "1988",
    events: [
      "Bằng khen từ Bộ trưởng Bộ Thực phẩm, Nông nghiệp, Lâm nghiệp và Thủy sản Hàn Quốc.",
    ],
  },
  {
    year: "1989",
    events: [
      "Lần đầu tiên xuất khẩu sản phẩm sâm trị giá 300.000 USD sang Đài Loan và các vùng Đông Nam Á.",
    ],
  },
  {
    year: "1991",
    events: [
      "Xuất khẩu sang Hồng Kông với kim ngạch khoảng 170.000 USD.",
    ],
  },
  {
    year: "1992",
    events: [
      "Mở rộng xuất khẩu sâm sang Đài Loan, Hồng Kông và Đông Nam Á (đạt khoảng 0,98 triệu USD).",
    ],
  },
  {
    year: "1993",
    events: [
      "Xuất khẩu 6.000kg nhân sâm sang Đài Loan, Hồng Kông và Đông Nam Á (đạt khoảng 1,26 triệu USD).",
    ],
  },
  {
    year: "1994",
    events: [
      "Thành lập Tập đoàn Nông nghiệp Nhân sâm Tae-geuk.",
      "Bằng khen từ Thống đốc Tỉnh Gyeongbuk (Nhân Ngày Thương mại lần thứ 31).",
      "Xuất khẩu Sâm Taegeuk sang Đài Loan (khoảng 2,33 triệu USD) kéo dài đến năm 1996.",
    ],
    highlight: true,
  },
  {
    year: "1995",
    events: [
      "Hoàn thành kho bảo quản lạnh nhiệt độ thấp.",
      "Hoàn thành cơ sở chế biến nhân sâm, trang thiết bị máy móc và nhà máy sản xuất hồng sâm.",
      "Xuất khẩu khoảng 5 tấn nhân sâm (tương đương 800.000 USD) sang Trung Quốc, Đài Loan và Đông Nam Á.",
    ],
  },
  {
    year: "1996",
    events: [
      "Nhận Bằng khen của Tổng thống Hàn Quốc (Giải thưởng New Korean Award).",
    ],
    highlight: true,
  },
  {
    year: "1998",
    events: [
      "Nộp đơn đăng ký bằng sáng chế về quy trình chế biến nhân sâm ngâm mật quỳnh.",
    ],
  },
  {
    year: "1999",
    events: [
      "Chính thức đổi tên công ty thành TẬP ĐOÀN NÔNG NGHIỆP NHÂN SÂM PUNGGI (PUNGGI GINSENG FARMING CORP).",
    ],
    highlight: true,
  },
  {
    year: "2000",
    events: [
      "Đăng ký bằng sáng chế cho quy trình sản xuất Nhân sâm ướp đường/mật.",
    ],
  },
  {
    year: "2002",
    events: [
      "Trao tặng sản phẩm Chiết xuất Hồng sâm 6 năm tuổi cho Đội tuyển Bóng đá Quốc gia Hàn Quốc tại World Cup 2002 (trị giá 30 triệu KRW).",
      "Trao tặng Chiết xuất Hồng sâm 6 năm tuổi cho vận động viên Bong-Ju Lee cổ vũ tinh thần chiến thắng tại Đại hội Thể thao Châu Á (Asian Games).",
    ],
  },
  {
    year: "2004",
    events: [
      "Bằng khen từ Bộ trưởng Bộ Thực phẩm, Nông nghiệp, Lâm nghiệp và Thủy sản (Về Phát triển Công nghệ Nông nghiệp và Đổi mới Quản lý).",
      "Được phê duyệt sử dụng biểu tượng nhân vật Nhân sâm Hàn Quốc (Đăng ký số 2003-5).",
      "Xuất khẩu khoảng 1.000kg nhân sâm sang Trung Quốc (khoảng 240.000 USD).",
    ],
  },
  {
    year: "2005",
    events: [
      "Ông Kim Jeong Hwan được vinh danh là BẬC THẦY NGHỆ NHÂN NÔNG NGHIỆP TỈNH GYEONGBUK (Lĩnh vực Nhân sâm - Số hiệu Gyeongbuk 2005-1).",
      "Đạt chứng nhận tiêu chuẩn quốc tế KSA 14001:2004 / ISO 14001:2004 (Số đăng ký ESC 0384).",
      "Được cấp phép sử dụng Thương hiệu Nông sản Xuất sắc của Tỉnh Gyeongbuk (Cấp phép số 05-6-10).",
    ],
    highlight: true,
  },
  {
    year: "2006",
    events: [
      "Đăng ký sáng chế cho Câu chuyện Hồng sâm Kim và Cây Tầm gửi.",
      "Được cấp phép là Cơ sở Sản xuất Thực phẩm Chức năng Bảo vệ Sức khỏe (Số giấy phép: 2006-가-0005).",
      "Được công nhận là Cơ sở Quản lý Nông sản Quản lý Chất lượng Xuất sắc (Số phê duyệt: 16-06-025).",
      "Đăng ký bảo hộ thương hiệu thành công tại Hoa Kỳ cho thương hiệu 'Kim’s Red Ginseng'.",
      "Tất cả sản phẩm Hồng sâm Kim vượt qua các bài kiểm nghiệm khắt khe LAP TEST từ Bộ Nông nghiệp Hoa Kỳ (USDA).",
    ],
    highlight: true,
  },
  {
    year: "2007",
    events: [
      "Toàn bộ các dòng sản phẩm chính thức được Cục Quản lý Thực phẩm và Dược phẩm Hoa Kỳ (FDA) đăng ký và phê duyệt.",
    ],
  },
  {
    year: "2008",
    events: [
      "Khai trương văn phòng đại diện thứ 1 và thứ 2 tại New York, Hoa Kỳ.",
      "Hoàn tất đăng ký bảo hộ nhãn hiệu thương mại trên toàn bộ 53 tiểu bang của Hoa Kỳ.",
      "Thành lập chi nhánh Bờ Tây Hoa Kỳ và hệ thống nhà phân phối.",
    ],
    highlight: true,
  },
  {
    year: "2009",
    events: [
      "Đạt Giải thưởng Lớn (Grand Prize) Thương hiệu Tăng trưởng Xanh.",
    ],
  },
  {
    year: "2010",
    events: [
      "Nhận Giải thưởng Doanh nghiệp Vừa và Nhỏ xuất sắc năm 2009.",
      "Tại Hội nghị Diễn đàn Kinh tế Thế giới Davos 2010: Sản phẩm Nhân sâm và Đậm đặc Hồng Sâm Kim được lựa chọn phục vụ hội nghị.",
    ],
    highlight: true,
  },
  {
    year: "2011",
    events: [
      "Thành lập Trung tâm Nghiên cứu Phát triển (R&D) trực thuộc tập đoàn.",
    ],
  },
  {
    year: "2012",
    events: [
      "Nhận Bằng khen từ Cục trưởng Cục Sở hữu Trí tuệ Hàn Quốc.",
    ],
  },
  {
    year: "2013",
    events: [
      "Đạt chứng nhận an toàn thực phẩm quốc tế ISO 22000.",
      "Được bình chọn là Doanh nghiệp Vừa và Nhỏ Xuất khẩu Triển vọng.",
    ],
  },
  {
    year: "2014",
    events: [
      "Thành lập chi nhánh thương mại chính thức tại Ma Cao.",
    ],
  },
  {
    year: "2015",
    events: [
      "Được chứng nhận là Doanh nghiệp Tăng trưởng Mới xuất sắc.",
    ],
  },
  {
    year: "Hiện Nay",
    events: [
      "Chính thức nhập khẩu chính ngạch 100% và phân phối độc quyền tại thị trường Việt Nam bởi CÔNG TY TNHH THƯƠNG MẠI NA KOREA.",
    ],
    highlight: true,
  },
];

export default function LichSuHinhThanhPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.siteUrl}/lich-su-hinh-thanh#webpage`,
        "url": `${SITE_CONFIG.siteUrl}/lich-su-hinh-thanh`,
        "name": "Lịch Sử Hình Thành & Phát Triển | Hồng Sâm Kim",
        "description": "Chi tiết các mốc lịch sử phát triển từ năm 1986 đến nay của Hồng Sâm Kim Hàn Quốc.",
      },
      {
        "@type": "Organization",
        "name": "Punggi Ginseng Farming Corp",
        "alternateName": "Hồng Sâm Kim",
        "foundingDate": "1986",
        "founder": {
          "@type": "Person",
          "name": "Kim Jeong Hwan",
        },
      },
      {
        "@type": "Organization",
        "name": "CÔNG TY TNHH THƯƠNG MẠI NA KOREA",
        "role": "Nhà phân phối độc quyền Hồng Sâm Kim tại Việt Nam",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <Header />

      <main className="flex-1 pb-20">
        {/* Page Hero */}
        <PageHero
          eyebrow="HÀNH TRÌNH HƠN 35 NĂM DI SẢN"
          showEyebrow={true}
          title="Lịch Sử Hình Thành"
          description="Chúng tôi sẽ tiếp tục giữ vững sự kiên trì và chân thành trong việc trồng và chế biến nhân sâm 6 năm tuổi tại thủ phủ Punggi Hàn Quốc."
          image="/images/sub03.jpg"
          imageAlt="Lịch sử hình thành và phát triển Hồng Sâm Kim Punggi Hàn Quốc"
          imageOpacity={0.9}
        />

        {/* Breadcrumb */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Trang Chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/gioi-thieu" className="hover:text-black transition-colors">
              Giới Thiệu
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#4B193E] font-medium">Lịch Sử Hình Thành</span>
          </nav>
        </div>

        {/* Main Timeline Section */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-4">
          <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs border border-gray-100">
            <div className="mb-8 border-b border-gray-100 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4B193E]/5 text-[#4B193E] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                PUNGGI GINSENG FARMING CORP
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Các Mốc Lịch Sử Phát Triển Quốc Tế
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Ghi nhận những bước tiến bền bỉ từ nhà máy sản xuất sâm truyền thống tại Punggi năm 1986 đến thương hiệu quốc tế phân phối chính ngạch tại Việt Nam.
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className="relative border-l-2 border-[#4B193E]/20 ml-3 sm:ml-6 md:ml-10 pl-6 sm:pl-8 md:pl-10 space-y-10">
              {FULL_TIMELINE.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Circle Indicator */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-4 transition-transform ${
                      item.highlight
                        ? "bg-[#4B193E] border-white ring-2 ring-[#4B193E]/30 scale-110"
                        : "bg-white border-[#4B193E] group-hover:scale-125"
                    }`}
                  />

                  <div className="space-y-3">
                    {/* Badge Năm */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-extrabold tracking-wide ${
                        item.highlight
                          ? "bg-[#4B193E] text-white shadow-xs"
                          : "bg-[#4B193E]/10 text-[#4B193E]"
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      {item.year}
                    </span>

                    {/* Danh sách các sự kiện trong năm */}
                    <ul className="space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl">
                      {item.events.map((evt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4B193E] shrink-0 mt-2" />
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
        </section>

        {/* Footer CTA */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-8">
          <div className="bg-[#4B193E]/5 border border-[#4B193E]/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#4B193E] text-white flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base">
                  Cam Kết Chất Lượng Thượng Hạng Từ Punggi Hàn Quốc
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Hồng Sâm Kim nhập khẩu chính ngạch 100% bởi CÔNG TY TNHH THƯƠNG MẠI NA KOREA.
                </p>
              </div>
            </div>
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 bg-[#4B193E] text-white font-bold px-6 py-2.5 rounded-xl hover:bg-[#38132e] transition-colors text-sm shrink-0"
            >
              Khám Phá Sản Phẩm
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
