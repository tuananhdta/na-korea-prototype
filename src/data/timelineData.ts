export interface TimelineEvent {
  year: string;
  events: string[];
  highlight?: boolean;
}

export interface EraGroup {
  id: string;
  label: string;
  badge: string;
  summaryTitle: string;
  summaryDesc: string;
  icon: "Award" | "Globe" | "ShieldCheck";
  items: TimelineEvent[];
}

export const ERA_DATA: EraGroup[] = [
  {
    id: "era-1986-1999",
    label: "1986 – 1999",
    badge: "GIAI ĐOẠN I: KHỞI NGUỒN & NỀN MÓNG",
    summaryTitle: "Thành Lập Cơ Sở Punggi & Bằng Khen Tổng Thống Hàn Quốc (1996)",
    summaryDesc: "Khởi đầu từ xưởng sơ chế sâm truyền thống tại thủ phủ Punggi năm 1986, mở rộng thị trường xuất khẩu sang Đài Loan, Hồng Kông và vinh dự nhận Giải thưởng New Korean Award từ Tổng thống Hàn Quốc năm 1996.",
    icon: "Award",
    items: [
      {
        year: "1986",
        events: [
          "Chính thức thành lập Công ty TNHH Nhân sâm Punggi Tae-geuk (Pung-gi Tae-geuk Ginseng Co. Ltd.).",
        ],
        highlight: true,
      },
      {
        year: "1988",
        events: [
          "Vinh dự nhận Bằng khen từ Bộ trưởng Bộ Thực phẩm, Nông nghiệp, Lâm nghiệp và Thủy sản Hàn Quốc.",
        ],
      },
      {
        year: "1989",
        events: [
          "Lần đầu tiên xuất khẩu sản phẩm nhân sâm đạt kim ngạch 300.000 USD sang thị trường Đài Loan và các nước Đông Nam Á.",
        ],
      },
      {
        year: "1991",
        events: [
          "Xuất khẩu nhân sâm sang thị trường Hồng Kông với kim ngạch khoảng 170.000 USD.",
        ],
      },
      {
        year: "1992",
        events: [
          "Mở rộng quy mô xuất khẩu sang Đài Loan, Hồng Kông và Đông Nam Á (đạt tổng doanh thu khoảng 0,98 triệu USD).",
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
          "Nhận Bằng khen từ Thống đốc Tỉnh Gyeongbuk nhân Ngày Thương mại lần thứ 31.",
          "Xuất khẩu Sâm Taegeuk sang Đài Loan (khoảng 2,33 triệu USD) kéo dài đến năm 1996.",
        ],
        highlight: true,
      },
      {
        year: "1995",
        events: [
          "Hoàn thành xây dựng kho bảo quản lạnh nhiệt độ thấp.",
          "Hoàn thiện dây chuyền chế biến nhân sâm, hệ thống trang thiết bị máy móc hiện đại và nhà máy sản xuất hồng sâm.",
          "Xuất khẩu khoảng 5 tấn nhân sâm (tương đương 800.000 USD) sang Trung Quốc, Đài Loan và Đông Nam Á.",
        ],
      },
      {
        year: "1996",
        events: [
          "Vinh dự nhận Bằng khen của Tổng thống Hàn Quốc (Giải thưởng New Korean Award).",
        ],
        highlight: true,
      },
      {
        year: "1998",
        events: [
          "Nộp đơn đăng ký bằng sáng chế về quy trình chế biến nhân sâm ngâm mật quỳnh độc bản.",
        ],
      },
      {
        year: "1999",
        events: [
          "Chính thức đổi tên tập đoàn thành TẬP ĐOÀN NÔNG NGHIỆP NHÂN SÂM PUNGGI (PUNGGI GINSENG FARMING CORP).",
        ],
        highlight: true,
      },
    ],
  },
  {
    id: "era-2000-2009",
    label: "2000 – 2009",
    badge: "GIAI ĐOẠN II: BẬC THẦY NHÂN SÂM & BẢO HỘ MỸ",
    summaryTitle: "Phong Tặng Bậc Thầy Gyeongbuk (2005) & Đăng Ký Thương Hiệu Tại Hoa Kỳ",
    summaryDesc: "Năm 2005, ông Kim Jeong Hwan chính thức được vinh danh là Bậc Thầy Nhân Sâm Tỉnh Gyeongbuk. Đạt chứng nhận FDA, USDA LAP TEST và bảo hộ thương hiệu trên toàn bộ 53 tiểu bang Hoa Kỳ.",
    icon: "Award",
    items: [
      {
        year: "2000",
        events: [
          "Đăng ký bằng sáng chế độc quyền cho quy trình sản xuất Nhân sâm ướp đường/mật.",
        ],
      },
      {
        year: "2002",
        events: [
          "Trao tặng Chiết xuất Hồng sâm 6 năm tuổi cho Đội tuyển Bóng đá Quốc gia Hàn Quốc tại World Cup 2002 (trị giá 30 triệu KRW).",
          "Trao tặng sản phẩm cho VĐV điền kinh Bong-Ju Lee tại Đại hội Thể thao Châu Á (Asian Games).",
        ],
      },
      {
        year: "2004",
        events: [
          "Nhận Bằng khen từ Bộ trưởng Bộ Nông nghiệp về Phát triển Công nghệ Nông nghiệp và Đổi mới Quản lý.",
          "Được cấp phép sử dụng biểu tượng nhân vật Nhân sâm Hàn Quốc (Đăng ký số 2003-5).",
          "Xuất khẩu khoảng 1.000kg nhân sâm sang thị trường Trung Quốc (khoảng 240.000 USD).",
        ],
      },
      {
        year: "2005",
        events: [
          "Ông Kim Jeong Hwan được vinh danh là BẬC THẦY NGHỆ NHÂN NÔNG NGHIỆP TỈNH GYEONGBUK (Số hiệu Gyeongbuk 2005-1).",
          "Đạt chứng nhận tiêu chuẩn quốc tế ISO 14001:2004 (Số đăng ký ESC 0384).",
          "Được phê duyệt sử dụng Thương hiệu Nông sản Xuất sắc của Tỉnh Gyeongbuk (Cấp phép số 05-6-10).",
        ],
        highlight: true,
      },
      {
        year: "2006",
        events: [
          "Đăng ký sáng chế Câu chuyện Hồng sâm Kim và Cây Tầm gửi.",
          "Được cấp Giấy phép Sản xuất Thực phẩm Chức năng Bảo vệ Sức khỏe (Số: 2006-가-0005).",
          "Được công nhận là Cơ sở Quản lý Nông sản Quản lý Chất lượng Xuất sắc (Số: 16-06-025).",
          "Đăng ký bảo hộ nhãn hiệu thành công tại Hoa Kỳ.",
          "Tất cả sản phẩm đạt kiểm nghiệm LAP TEST nghiêm ngặt từ Bộ Nông nghiệp Hoa Kỳ (USDA).",
        ],
        highlight: true,
      },
      {
        year: "2007",
        events: [
          "Toàn bộ các dòng sản phẩm chính thức được Cục Quản lý Thực phẩm và Dược phẩm Hoa Kỳ (FDA) đăng ký và chứng nhận.",
        ],
      },
      {
        year: "2008",
        events: [
          "Khai trương văn phòng đại diện thứ 1 và thứ 2 tại New York, Hoa Kỳ.",
          "Hoàn tất đăng ký bảo hộ nhãn hiệu thương mại trên toàn bộ 53 tiểu bang của Hoa Kỳ.",
          "Thành lập chi nhánh Bờ Tây Hoa Kỳ và hệ thống đại lý phân phối.",
        ],
        highlight: true,
      },
      {
        year: "2009",
        events: [
          "Đạt Giải thưởng Lớn (Grand Prize) Thương hiệu Tăng trưởng Xanh.",
        ],
      },
    ],
  },
  {
    id: "era-2010-present",
    label: "2010 – Hiện nay",
    badge: "GIAI ĐOẠN III: VƯƠN TẦM QUỐC TẾ & PHÂN PHỐI ĐỘC QUYỀN TẠI VIỆT NAM",
    summaryTitle: "Phục Vụ Tại Davos Forum 2010, Đạt ISO 22000 & Phân Phối Độc Quyền Tại Việt Nam",
    summaryDesc: "Sản phẩm Hồng Sâm Kim vinh dự được lựa chọn phục vụ các nguyên thủ tại Diễn đàn Kinh tế Thế giới Davos 2010, thành lập Trung tâm R&D chuyên sâu, đạt chứng nhận ISO 22000 và được CÔNG TY TNHH THƯƠNG MẠI NA KOREA nhập khẩu chính ngạch 100%, phân phối độc quyền tại Việt Nam.",
    icon: "Globe",
    items: [
      {
        year: "2010",
        events: [
          "Nhận Giải thưởng Doanh nghiệp Vừa và Nhỏ xuất sắc năm 2009.",
          "Sản phẩm Hồng Sâm Kim vinh dự được lựa chọn phục vụ các nguyên thủ quốc tế tại Diễn đàn Kinh tế Thế giới Davos Forum 2010.",
        ],
        highlight: true,
      },
      {
        year: "2011",
        events: [
          "Thành lập Trung tâm Nghiên cứu Phát triển (R&D) trực thuộc tập đoàn chuyên sâu về Ginsenoside.",
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
          "Đạt chứng nhận quản lý an toàn thực phẩm quốc tế ISO 22000.",
          "Được chính phủ bình chọn là Doanh nghiệp Vừa và Nhỏ Xuất khẩu Triển vọng.",
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
          "Được chứng nhận là Doanh nghiệp Tăng trưởng Mới xuất sắc Hàn Quốc.",
        ],
      },
      {
        year: "Hiện Nay",
        events: [
          "Chính thức nhập khẩu chính ngạch 100% và phân phối độc quyền tại thị trường Việt Nam bởi CÔNG TY TNHH THƯƠNG MẠI NA KOREA.",
          "Cung cấp hệ sinh thái sản phẩm phong phú: Hồng sâm người lớn, Hồng sâm trẻ em, Cao chiết xuất, Nước sâm tinh chất 6 năm tuổi Punggi.",
          "Cam kết gìn giữ nguyên vẹn chất lượng sâm tươi 6 năm tuổi từ vùng núi Sobaek Hàn Quốc.",
        ],
        highlight: true,
      },
    ],
  },
];
