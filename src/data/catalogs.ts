export interface CatalogItem {
  id: string;
  tabKey: string;
  title: string;
  subtitle: string;
  badge: string;
  totalPages: number;
  aspectRatio: "portrait" | "landscape";
  pdfDownloadUrl: string;
  fileSize: string;
  publishedYear: string;
  coverImage: string;
  description: string;
  highlights: string[];
  pages: string[];
}

export const CATALOG_PRODUCTS_2026: CatalogItem = {
  id: "product-2026",
  tabKey: "product-2026",
  title: "Catalogue Sản Phẩm & Di Sản 2026",
  subtitle: "Tổng công ty Nông nghiệp Nhân sâm Punggi Hàn Quốc (Hồng Kim Sâm)",
  badge: "BỘ CATALOGUE 2026",
  totalPages: 60,
  aspectRatio: "portrait",
  pdfDownloadUrl: "/downloads/CTL-Kim-2026.pdf",
  fileSize: "99.9 MB PDF",
  publishedYear: "2026",
  coverImage: "/catalogs/product-2026/page-1.webp",
  description:
    "Tài liệu toàn diện giới thiệu lịch sử 500 năm vùng trồng sâm Punggi, bí quyết hấp sấy gia truyền 50 năm của bậc thầy Kim Jeong Hwan, cùng danh mục chi tiết 32 chế phẩm Hồng sâm 6 năm tuổi cao cấp nhập khẩu nguyên hộp.",
  highlights: [
    "60 trang in ấn màu sắc độ phân giải cao chuẩn quốc tế",
    "Bảng thông số hàm lượng Ginsenoside Rb1+Rg1+Rg3 từng dòng sản phẩm",
    "Chứng nhận tiêu chuẩn HACCP, GMP, ISO và Bộ Y tế cấp phép",
    "Hướng dẫn phân biệt nhân sâm chính hãng và cẩm nang quà biếu VIP",
  ],
  pages: Array.from({ length: 60 }, (_, i) => `/catalogs/product-2026/page-${i + 1}.webp`),
};

export const CATALOG_GINSENOSIDE_GUIDE: CatalogItem = {
  id: "ginsenoside-guide",
  tabKey: "ginsenoside-guide",
  title: "Cẩm Nang Dược Tính Ginsenoside",
  subtitle: "Tài liệu đào tạo khoa học & phân tích dược lý Hồng Sâm chuyên sâu",
  badge: "CẨM NANG Y KHOA",
  totalPages: 25,
  aspectRatio: "landscape",
  pdfDownloadUrl: "/downloads/Dao-tao-Ginsenoside.pdf",
  fileSize: "2.4 MB PDF",
  publishedYear: "2026",
  coverImage: "/catalogs/ginsenoside-guide/page-1.webp",
  description:
    "Bộ tài liệu phân tích cơ chế khoa học của 30+ loại Ginsenoside trong Hồng sâm Goryeo 6 năm tuổi. Giải thích chi tiết tác dụng tăng cường miễn dịch NK, chống oxy hóa ROS, bảo vệ hệ thần kinh và cân bằng chỉ số đường huyết.",
  highlights: [
    "25 slide bài giảng đào tạo chuyên sâu về cơ chế sinh hóa",
    "So sánh phân tích 30 loại saponin Goryeo so với sâm Mỹ & Trung Quốc",
    "Cơ chế kích hoạt đại thực bào, tế bào NK và chống xơ vữa động mạch",
    "Phương pháp nhận biết và ứng dụng lâm sàng cho từng nhóm đối tượng",
  ],
  pages: Array.from({ length: 25 }, (_, i) => `/catalogs/ginsenoside-guide/page-${i + 1}.webp`),
};

export const ALL_CATALOGS = [CATALOG_PRODUCTS_2026, CATALOG_GINSENOSIDE_GUIDE];
