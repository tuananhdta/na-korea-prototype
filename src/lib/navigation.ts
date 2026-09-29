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
      { title: "Lời Chào Đầu", href: "/loi-chao-nghe-nhan" },
      { title: "Thương Hiệu", href: "/gioi-thieu" },
      { title: "Lịch Sử Hình Thành", href: "/lich-su-hinh-thanh" },
      { title: "Chứng Chỉ Quốc Tế", href: "/chung-chi-chat-luong" },
      { title: "Nguồn Gốc Nhân Sâm", href: "/nhan-sam" },
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

