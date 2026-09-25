export interface NavChildItem {
  title: string;
  href: string;
}

export interface NavSubItem {
  title: string;
  href: string;
  subItems?: NavChildItem[];
}

export interface NavItem {
  title: string;
  href: string;
  subItems?: NavSubItem[];
}

export const navItems: NavItem[] = [
  {
    title: "Trang Chủ",
    href: "/",
  },
  {
    title: "Giới Thiệu",
    href: "/gioi-thieu",
    subItems: [
      { title: "Về Chúng Tôi", href: "/gioi-thieu" },
      { title: "Lời Chào Đầu", href: "/loi-chao-nghe-nhan" },
      { title: "Lịch Sử Hình Thành", href: "/lich-su-hinh-thanh" },
      { title: "Chứng Chỉ Đạt Được", href: "/chung-chi-chat-luong" },
      { title: "Về Nhân Sâm", href: "/nhan-sam" },
      { title: "Về nhà nhập khẩu", href: "/ve-nha-nhap-khau" },
    ],
  },
  {
    title: "Sản Phẩm",
    href: "/san-pham",
    subItems: [
      { title: "Tất Cả Sản Phẩm", href: "/san-pham" },
      { title: "Hồng Sâm Người Lớn", href: "/san-pham/nguoi-lon" },
      { title: "Hồng Sâm Trẻ Em", href: "/san-pham/tre-em" },
    ],
  },
  {
    title: "Cẩm Nang",
    href: "/cam-nang",
    subItems: [
      { title: "Kim's Red Ginseng", href: "/cam-nang" },
      { title: "Công dụng Ginsenoside", href: "/cam-nang/ginsenoside" },
    ],
  },
  {
    title: "Đăng Ký Đại Lý",
    href: "/dang-ky-dai-ly",
  },
  {
    title: "Tin Tức",
    href: "/tin-tuc",
  },
  {
    title: "Liên Hệ",
    href: "/lien-he",
  },
];

