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
    href: "/summary",
    subItems: [
      { title: "Về Chúng Tôi", href: "/summary" },
      { title: "Lời Chào Đầu", href: "/greeting" },
      { title: "Lịch Sử Hình Thành", href: "/history" },
      { title: "Chứng Chỉ Đạt Được", href: "/certification" },
      {
        title: "Về Nhân Sâm",
        href: "/ginseng",
        subItems: [
          { title: "Nhân Sâm", href: "/ginseng" },
          { title: "Hồng Sâm", href: "/red-ginseng" },
        ],
      },
      { title: "Về nhà nhập khẩu", href: "/ve-nha-nhap-khau" },
    ],
  },
  {
    title: "Sản Phẩm",
    href: "/product",
    subItems: [
      { title: "Tất Cả Sản Phẩm", href: "/product" },
      { title: "Hồng Sâm Người Lớn", href: "/products/adults" },
      { title: "Hồng Sâm Trẻ Em", href: "/products/kids" },
    ],
  },
  {
    title: "Catalog",
    href: "/catalog",
    subItems: [
      { title: "Kim's Red Ginseng", href: "/catalog" },
      { title: "Công dụng Ginsenoside", href: "/catalog/ginsenoside" },
    ],
  },
  {
    title: "Đăng Ký Đại Lý",
    href: "/wholesale",
  },
  {
    title: "Tin Tức",
    href: "/notice",
  },
  {
    title: "Liên Hệ",
    href: "/contact",
  },
];
