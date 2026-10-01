export interface CertificateItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  englishTitle: string;
  issuingBody: string;
  description: string;
  categoryId: "an-toan-chat-luong" | "bang-sang-che" | "bao-ho-thuong-hieu" | "chi-dan-dia-ly";
}

export interface CertificationCategory {
  id: "tat-ca" | "an-toan-chat-luong" | "bang-sang-che" | "bao-ho-thuong-hieu" | "chi-dan-dia-ly";
  name: string;
  shortName: string;
  description: string;
}

export const CERTIFICATION_CATEGORIES: CertificationCategory[] = [
  {
    id: "tat-ca",
    name: "Tất Cả Chứng Nhận (17)",
    shortName: "Tất Cả",
    description:
      "Tổng hợp toàn bộ 17 bằng sáng chế, chứng chỉ quản lý chất lượng quốc tế và giải thưởng uy tín của thương hiệu Hồng Sâm Kim (Kim's Red Ginseng) Hàn Quốc.",
  },
  {
    id: "an-toan-chat-luong",
    name: "An Toàn & Quản Lý Chất Lượng",
    shortName: "An Toàn & Chất Lượng",
    description:
      "Các tiêu chuẩn quốc tế nghiêm ngặt như ISO 22000, FSSC 22000, HACCP và GAP chứng nhận quy trình chế biến Hồng Sâm Kim tuân thủ tuyệt đối vệ sinh an toàn thực phẩm.",
  },
  {
    id: "bang-sang-che",
    name: "Bằng Sáng Chế & Giải Thưởng Nghệ Nhân",
    shortName: "Bằng Sáng Chế & Nghệ Nhân",
    description:
      "Các bằng sáng chế độc quyền về độc tính ký sinh dâu (Korean Mistletoe), công nghệ tẩm mật ong cao cấp cùng danh hiệu Nghệ nhân Nhân sâm Hàn Quốc quốc gia cấp năm 2005.",
  },
  {
    id: "bao-ho-thuong-hieu",
    name: "Đăng Ký Thương Hiệu & Chứng Nhận Quốc Tế",
    shortName: "Thương Hiệu Quốc Tế",
    description:
      "Chứng nhận nhãn hiệu bảo hộ tại Hàn Quốc, Mỹ (U.S. Trademark) và chứng nhận HALAL quốc tế giúp Hồng Sâm Kim xuất khẩu chính ngạch toàn cầu.",
  },
  {
    id: "chi-dan-dia-ly",
    name: "Chỉ Dẫn Địa Lý Vùng Trồng Punggi",
    shortName: "Chỉ Dẫn Địa Lý Punggi",
    description:
      "Chứng nhận chỉ dẫn địa lý độc quyền nguồn gốc Nhân sâm & Hồng sâm từ thủ phủ Punggi, tỉnh Gyeongsangbuk-do — vùng đất trồng sâm lâu đời nhất Hàn Quốc từ năm 1541.",
  },
];

export const CERTIFICATE_ITEMS: CertificateItem[] = [
  {
    id: "cc1",
    src: "/images/certification/cc1.jpg",
    alt: "Chứng nhận Chỉ dẫn địa lý Nhân sâm Punggi Hàn Quốc - Hồng Sâm Kim",
    title: "Chứng Nhận Chỉ Dẫn Địa Lý Nhân Sâm Punggi",
    englishTitle: "Geographical Indication Certificate (Ginseng)",
    issuingBody: "Bộ Nông nghiệp, Thực phẩm & Nông thôn Hàn Quốc (MAFRA)",
    description: "Bảo chứng 100% nguyên liệu nhân sâm tươi được canh tác tại vùng đất truyền thống Punggi có hàm lượng Saponin cao vượt trội.",
    categoryId: "chi-dan-dia-ly",
  },
  {
    id: "cc2",
    src: "/images/certification/cc2.jpg",
    alt: "Chứng nhận Chỉ dẫn địa lý Hồng Sâm Punggi Hàn Quốc - Hồng Sâm Kim",
    title: "Chứng Nhận Chỉ Dẫn Địa Lý Hồng Sâm Punggi",
    englishTitle: "Geographical Indication Certificate (Red Ginseng)",
    issuingBody: "Ủy ban Quản lý Chất lượng Nông sản Hàn Quốc",
    description: "Xác nhận sản phẩm Hồng Sâm Kim được chế biến hoàn toàn từ nhân sâm Punggi 6 năm tuổi đạt chuẩn quốc gia.",
    categoryId: "chi-dan-dia-ly",
  },
  {
    id: "cc3",
    src: "/images/certification/cc3.jpg",
    alt: "Chứng chỉ Cơ sở Thực hành Nông nghiệp Tốt GAP Hàn Quốc - Hồng Sâm Kim",
    title: "Chứng Nhận Cơ Sở Quản Lý Nông Nghiệp Tốt (GAP)",
    englishTitle: "Good Agricultural Management Facilities (GAP)",
    issuingBody: "Cục Quản lý Phát triển Nông nghiệp Hàn Quốc",
    description: "Chứng nhận quy trình trồng và thu hoạch sâm không chứa tồn dư thuốc bảo vệ thực vật hay kim loại nặng.",
    categoryId: "an-toan-chat-luong",
  },
  {
    id: "cc4",
    src: "/images/certification/cc4.jpg",
    alt: "Chứng nhận Sản phẩm Ưu tú Tỉnh Gyeongsangbuk-do Hàn Quốc",
    title: "Chứng Nhận Sản Phẩm Ưu Tú Tỉnh Gyeongsangbuk-do",
    englishTitle: "Good Products of Gyeongsangbuk-do",
    issuingBody: "Chính quyền Tỉnh Gyeongsangbuk-do, Hàn Quốc",
    description: "Giải thưởng công nhận sản phẩm Hồng Sâm Kim là đại diện quà tặng đặc sản hàng đầu của tỉnh.",
    categoryId: "an-toan-chat-luong",
  },
  {
    id: "cc5",
    src: "/images/certification/cc5.jpg",
    alt: "Chứng chỉ Hệ thống Quản lý An toàn Thực phẩm Quốc tế ISO 22000 - Hồng Sâm Kim",
    title: "Chứng Chỉ Quản Lý An Toàn Thực Phẩm ISO 22000",
    englishTitle: "ISO 22000 Food Safety Management System",
    issuingBody: "Tổ chức Chứng nhận Tiêu chuẩn Quốc tế ISO",
    description: "Tiêu chuẩn quốc tế công nhận hệ thống quản lý an toàn thực phẩm xuyên suốt từ khâu chế biến đến đóng gói.",
    categoryId: "an-toan-chat-luong",
  },
  {
    id: "cc6",
    src: "/images/certification/cc6.jpg",
    alt: "Chứng chỉ Tiêu chuẩn Kiểm soát An toàn Thực phẩm HACCP - Hồng Sâm Kim",
    title: "Chứng Nhận Vệ Sinh An Toàn Thực Phẩm HACCP",
    englishTitle: "HACCP Food Safety Certificate",
    issuingBody: "Viện Kiểm nghiệm An toàn Thực phẩm Hàn Quốc (KOREA HACCP)",
    description: "Chứng nhận kiểm soát mối nguy nguy hiểm trong toàn bộ dây chuyền sản xuất Hồng sâm.",
    categoryId: "an-toan-chat-luong",
  },
  {
    id: "cc7",
    src: "/images/certification/cc7.jpg",
    alt: "Đăng ký Nhãn hiệu Thương hiệu Hồng Sâm Kim tại Hàn Quốc (Logo & Thiết kế)",
    title: "Đăng Ký Nhãn Hiệu Thương Hiệu Hàn Quốc (Mẫu 1)",
    englishTitle: "Korea Trademark Registration Certificate",
    issuingBody: "Cục Sở Hữu Trí Tuệ Hàn Quốc (KIPO)",
    description: "Bảo hộ độc quyền kiểu dáng bao bì và logo nhận diện thương hiệu Hồng Sâm Kim tại Hàn Quốc.",
    categoryId: "bao-ho-thuong-hieu",
  },
  {
    id: "cc8",
    src: "/images/certification/cc8.jpg",
    alt: "Đăng ký Bảo hộ Nhãn hiệu Thương hiệu Nhân Sâm Kim tại Hàn Quốc",
    title: "Đăng Ký Nhãn Hiệu Thương Hiệu Hàn Quốc (Mẫu 2)",
    englishTitle: "Korea Trademark Registration Certificate",
    issuingBody: "Cục Sở Hữu Trí Tuệ Hàn Quốc (KIPO)",
    description: "Giấy chứng nhận đăng ký sở hữu trí tuệ thương hiệu cho các dòng chế phẩm cao cấp.",
    categoryId: "bao-ho-thuong-hieu",
  },
  {
    id: "cc9",
    src: "/images/certification/cc9.jpg",
    alt: "Bằng sáng chế Độc quyền Chế biến Hồng Sâm & Hồng Ký Sinh Hàn Quốc",
    title: "Bằng Sáng Chế: Chế Biến Hồng Sâm & Hồng Ký Sinh",
    englishTitle: "Letter of Patent [Red Ginseng & Korean Mistletoe]",
    issuingBody: "Cục Sở Hữu Trí Tuệ Hàn Quốc (KIPO)",
    description: "Bằng sáng chế khoa học độc quyền kết hợp dược tính từ Hồng Sâm 6 năm tuổi và cây Ký sinh dâu tằm (Korean Mistletoe).",
    categoryId: "bang-sang-che",
  },
  {
    id: "cc10",
    src: "/images/certification/cc10.jpg",
    alt: "Bằng sáng chế Độc quyền Sâm Tẩm Mật Ong Kim's Red Ginseng Hàn Quốc",
    title: "Bằng Sáng Chế: Sâm Củ Tẩm Mật Ong Độc Quyền",
    englishTitle: "Letter of Patent [Kim’s Honey Dipped Red Ginseng]",
    issuingBody: "Cục Sở Hữu Trí Tuệ Hàn Quốc (KIPO)",
    description: "Công nghệ chiết xuất và tẩm ướp mật ong rừng tự nhiên giữ trọn hàm lượng Ginsenoside Rg1, Rb1, Rg3.",
    categoryId: "bang-sang-che",
  },
  {
    id: "cc11",
    src: "/images/certification/cc11.jpg",
    alt: "Giấy chứng nhận Đăng ký Nhãn hiệu Thương hiệu tại Mỹ U.S. Trademark",
    title: "Đăng Ký Nhãn Hiệu Độc Quyền Tại Mỹ (U.S. Trademark)",
    englishTitle: "U.S. Trademark Registration Certificate",
    issuingBody: "Cục Sáng chế và Nhãn hiệu Hoa Kỳ (USPTO)",
    description: "Bảo chứng thương hiệu đủ tiêu chuẩn lưu hành và phân phối hợp pháp tại thị trường Hoa Kỳ.",
    categoryId: "bao-ho-thuong-hieu",
  },
  {
    id: "cc12",
    src: "/images/certification/cc12.jpg",
    alt: "Giấy chứng nhận An toàn Thực phẩm Hồi giáo HALAL Quốc tế - Hồng Sâm Kim",
    title: "Chứng Nhận Tiêu Chuẩn Quốc Tế HALAL",
    englishTitle: "HALAL International Certification",
    issuingBody: "Ủy ban Chứng nhận HALAL Quốc tế",
    description: "Xác nhận sản phẩm đáp ứng đầy đủ tiêu chuẩn tinh khiết và an toàn của cộng đồng Hồi giáo toàn cầu.",
    categoryId: "bao-ho-thuong-hieu",
  },
  {
    id: "cc13",
    src: "/images/certification/cc13.jpg",
    alt: "Chứng chỉ Hệ thống An toàn Thực phẩm Cao cấp FSSC 22000 - Hồng Sâm Kim",
    title: "Chứng Nhận An Toàn Thực Phẩm Cao Cấp FSSC 22000",
    englishTitle: "FSSC 22000 Food Safety System Certification",
    issuingBody: "Hiệp hội Chứng nhận An toàn Thực phẩm Châu Âu",
    description: "Tiêu chuẩn kiểm soát an toàn nghiêm ngặt bậc nhất thế giới dành cho các nhà máy xuất khẩu toàn cầu.",
    categoryId: "an-toan-chat-luong",
  },
  {
    id: "cc14",
    src: "/images/certification/cc14.jpg",
    alt: "Bằng khen Đổi mới Sáng tạo Nông nghiệp Hàn Quốc năm 1996 - Hồng Sâm Kim",
    title: "Bằng Khen Đổi Mới Sáng Tạo Nông Nghiệp 1996",
    englishTitle: "1996 Agricultural Innovation Award",
    issuingBody: "Bộ Nông Nghiệp Hàn Quốc",
    description: "Giải thưởng ghi nhận bước đột phá công nghệ trong việc nâng cao chất lượng chế biến nhân sâm Punggi.",
    categoryId: "bang-sang-che",
  },
  {
    id: "cc15",
    src: "/images/certification/cc15.jpg",
    alt: "Giải thưởng Sáng tạo Nông nghiệp Hàn Quốc năm 1999 - Hồng Sâm Kim",
    title: "Giải Thưởng Đổi Mới Nông Nghiệp Xuất Sắc 1999",
    englishTitle: "1999 Agriculture Innovation Award",
    issuingBody: "Chính quyền Tỉnh Gyeongsangbuk-do",
    description: "Vinh danh những đóng góp xuất sắc trong việc phát triển ngành công nghiệp nhân sâm truyền thống.",
    categoryId: "bang-sang-che",
  },
  {
    id: "cc16",
    src: "/images/certification/cc16.jpg",
    alt: "Bằng công nhận Nghệ nhân Nhân sâm Hàn Quốc năm 2005 - Kim Jung-hwan",
    title: "Danh Hiệu Nghệ Nhân Nhân Sâm Hàn Quốc (2005)",
    englishTitle: "2005 Ginseng Master of Korea",
    issuingBody: "Bộ Nông nghiệp & Chính phủ Hàn Quốc",
    description: "Bằng công nhận Nghệ nhân Kim Jung-hwan — người cống hiến trọn đời cho kỹ thuật hấp sấy nhân sâm thủ công truyền thống.",
    categoryId: "bang-sang-che",
  },
  {
    id: "cc17",
    src: "/images/certification/cc17.jpg",
    alt: "Bằng khen Sáng chế và Bằng chế biến Sâm năm 2012 - Hồng Sâm Kim",
    title: "Bằng Khen Giải Thưởng Sáng Chế Quốc Gia 2012",
    englishTitle: "2012 Patent Award Certificate",
    issuingBody: "Cục Sở Hữu Trí Tuệ Hàn Quốc (KIPO)",
    description: "Vinh danh công trình nghiên cứu và tối ưu hóa hàm lượng Ginsenoside quý hiếm trong Hồng sâm.",
    categoryId: "bang-sang-che",
  },
];

export const CERTIFICATION_FAQS = [
  {
    question: "Sản phẩm Hồng Sâm Kim nhập khẩu về Việt Nam có đầy đủ giấy tờ pháp lý không?",
    answer:
      "Có. Toàn bộ các dòng sản phẩm Hồng Sâm Kim do CÔNG TY TNHH THƯƠNG MẠI NA KOREA phân phối độc quyền tại Việt Nam đều được Bộ Y tế / Cục An toàn Thực phẩm cấp Giấy tiếp nhận đăng ký bản công bố sản phẩm, kèm kiểm định chất lượng nghiêm ngặt và chứng nhận xuất xứ CO/CQ từ Hàn Quốc.",
  },
  {
    question: "Các chứng chỉ quốc tế như ISO 22000, HACCP và FSSC 22000 có ý nghĩa gì đối với người tiêu dùng?",
    answer:
      "Các chứng nhận ISO 22000, HACCP và FSSC 22000 đảm bảo quy trình sản xuất từ khâu chọn củ sâm tươi Punggi 6 năm tuổi đến khâu đóng gói đều tuyệt đối vô trùng, không chứa hóa chất bảo quản, không tồn dư kim loại nặng hay thuốc bảo vệ thực vật, đạt tiêu chuẩn an toàn thực phẩm cao nhất thế giới.",
  },
  {
    question: "Bằng sáng chế chế biến Hồng Sâm & Hồng Ký Sinh mang lại lợi ích gì vượt trội?",
    answer:
      "Bằng sáng chế độc quyền từ Cục Sở Hữu Trí Tuệ Hàn Quốc (KIPO) kết hợp độc tính sinh học quý từ cây Ký sinh dâu tằm (Korean Mistletoe) và Hồng Sâm Punggi giúp gia tăng hàm lượng các hoạt chất Saponin (Ginsenoside Rg1, Rb1, Rg3), tăng cường khả năng miễn dịch và hỗ trợ chống oxy hóa gấp nhiều lần so với sâm thông thường.",
  },
  {
    question: "Nghệ nhân Nhân sâm Hàn Quốc (Ginseng Master) là ai?",
    answer:
      "Danh hiệu Nghệ nhân Nhân sâm Hàn Quốc được Bộ Nông nghiệp & Chính phủ Hàn Quốc trao tặng cho Nghệ nhân Kim Jung-hwan vào năm 2005. Đây là danh hiệu cao quý nhất dành cho những chuyên gia có trên 30-40 năm kinh nghiệm nắm giữ bí quyết hấp sấy nhân sâm truyền thống vùng Punggi.",
  },
];
