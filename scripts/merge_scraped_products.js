const fs = require('fs');
const path = require('path');

const goldsammallData = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/goldsammall_products.json'), 'utf-8'));
const existingProducts = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/products.json'), 'utf-8'));

// High quality Vietnamese titles & detailed specs for all products
const PRODUCT_INFO_MAP = {
  "1000000035": {
    title: "Cao Hồng Sâm Cô Đặc Kim's Red Ginseng 6 Năm Tuổi (240g)",
    price: "4.600.000 ₫",
    originalPrice: "5.200.000 ₫",
    categories: ["Hồng Sâm Người Lớn", "Hồng Sâm Nguyên Chất"],
    image: "/images/products/kims-red-ginseng-extract.jpg"
  },
  "1000000034": {
    title: "Cao Hồng Sâm Cô Đặc Kim's Red Ginseng (100g/Hũ)",
    price: "2.350.000 ₫",
    originalPrice: "2.550.000 ₫",
    categories: ["Hồng Sâm Người Lớn", "Hồng Sâm Nguyên Chất"],
    image: "/images/products/cao-hong-sam-kims-red-ginseng-100g-hu.jpeg"
  },
  "1000000144": {
    title: "Nước Hồng Sâm Cô Đặc Balance Time Kim's Red Ginseng (30 Gói x 10ml)",
    price: "1.750.000 ₫",
    originalPrice: "2.150.000 ₫",
    categories: ["Hồng Sâm Người Lớn", "Nước Hồng Sâm"],
    image: "/images/products/tinh-chat-hong-sam-co-dac-balancetime-30-goi-x-10ml.jpeg"
  },
  "1000000143": {
    title: "Hồng Sâm Cân Bằng Miễn Dịch Bổ Sung Kẽm Immune Balance (60 Gói x 10g)",
    price: "2.540.000 ₫",
    originalPrice: "2.980.000 ₫",
    categories: ["Hồng Sâm Người Lớn", "Nước Hồng Sâm"],
    image: "/images/products/hong-sam-he-mien-dich-immune-blance-plus-zinc-30-goi-x-10gr.jpeg"
  },
  "1000000132": {
    title: "Hồng Sâm Trẻ Em Kim's Red Ginseng Kids Growth (30 Gói x 15ml)",
    price: "2.150.000 ₫",
    originalPrice: "2.450.000 ₫",
    categories: ["Hồng Sâm Trẻ Con"],
    image: "/images/products/hong-sam-tre-em-kims-red-ginseng-hong-sam-co-dac.png"
  },
  "1000000130": {
    title: "Hồng Sâm Lát Tẩm Mật Ong Rừng Punggi Premium (10 Hộp x 20g)",
    price: "1.850.000 ₫",
    originalPrice: "2.100.000 ₫",
    categories: ["Bộ Quà Biếu", "Hồng Sâm Ngâm Mật Ong"],
    image: "/images/products/hong-sam-lat-tam-mat-ong-kims-red-ginseng-10-goi-x-20g.jpeg"
  },
  "1000000129": {
    title: "Hồng Sâm Củ Tẩm Mật Ong Nguyên Củ Punggi (300g)",
    price: "2.950.000 ₫",
    originalPrice: "3.400.000 ₫",
    categories: ["Bộ Quà Biếu", "Hồng Sâm Ngâm Mật Ong"],
    image: "/images/products/hong-sam-cu-tam-mat-ong-kims-red-ginseng-300g.jpeg"
  },
  "1000000128": {
    title: "Trà Hồng Sâm Hàn Quốc Punggi Ginseng Tea (100 Gói)",
    price: "650.000 ₫",
    originalPrice: "790.000 ₫",
    categories: ["Trà Hồng Sâm"],
    image: "/images/products/tra-hong-sam-kims-red-ginseng-100-goi.png"
  },
  "1000000122": {
    title: "Kẹo Hồng Sâm Không Đường Punggi Sugar-Free Candy (500g)",
    price: "450.000 ₫",
    originalPrice: "550.000 ₫",
    categories: ["Kẹo Hồng Sâm"],
    image: "/images/products/keo-hong-sam-khong-duong-kims-red-ginseng-500g.jpeg"
  },
  "1000000119": {
    title: "Kẹo Dẻo Hồng Sâm Jelly Kim's Red Ginseng (200g)",
    price: "250.000 ₫",
    originalPrice: "320.000 ₫",
    categories: ["Kẹo Hồng Sâm"],
    image: "/images/products/keo-deo-hong-sam-kims-red-ginseng-200g.png"
  },
  "1000000118": {
    title: "Nước Hồng Sâm Thảo Dược Đông Y Energy Time (30 Gói x 50ml)",
    price: "1.450.000 ₫",
    originalPrice: "1.750.000 ₫",
    categories: ["Hồng Sâm Người Lớn", "Nước Hồng Sâm"],
    image: "/images/products/tinh-chat-hong-sam-energy-time-kims-red-ginseng.png"
  },
  "1000000117": {
    title: "Cốt Sâm Đỏ Từ Dãy Núi Sobaek Kim's Red Ginseng (240g)",
    price: "4.350.000 ₫",
    originalPrice: "4.800.000 ₫",
    categories: ["Hồng Sâm Người Lớn", "Hồng Sâm Nguyên Chất"],
    image: "/images/products/kims-red-ginseng-extract-light.jpg"
  },
  "1000000112": {
    title: "Nước Hồng Sâm Thượng Hạng Kim's Red Ginseng Easy & High (30 Gói x 50ml)",
    price: "1.650.000 ₫",
    originalPrice: "1.950.000 ₫",
    categories: ["Hồng Sâm Người Lớn", "Nước Hồng Sâm"],
    image: "/images/products/tinh-chat-hong-sam-easy-high-kims-red-ginseng.png"
  },
  "1000000061": {
    title: "Bột Hồng Sâm Nguyên Chất 6 Năm Tuổi Punggi Powder (100g)",
    price: "1.250.000 ₫",
    originalPrice: "1.490.000 ₫",
    categories: ["Hồng Sâm Nguyên Chất"],
    image: "/images/products/bot-hong-sam-kims-red-ginseng.jpeg"
  },
  "1000000060": {
    title: "Viên Hồng Sâm Cô Đặc Punggi Red Ginseng Pill (168 Viên)",
    price: "1.350.000 ₫",
    originalPrice: "1.600.000 ₫",
    categories: ["Hồng Sâm Người Lớn"],
    image: "/images/products/vien-hong-sam-kims-red-ginseng.jpeg"
  },
  "1000000040": {
    title: "Bộ Quà Tặng LINH KHÍ SỨC KHỎE (15 gói tonic & 3 gói sâm lát)",
    price: "1.750.000 ₫",
    originalPrice: "2.490.000 ₫",
    categories: ["Bộ Quà Biếu"],
    image: "/images/products/set-qua-bieu-.png"
  },
  "1000000033": {
    title: "Bộ Quà Tặng TINH HOA HỘI TỤ (3 Sản phẩm Hồng Sâm Thượng Hạng)",
    price: "1.150.000 ₫",
    originalPrice: "1.550.000 ₫",
    categories: ["Bộ Quà Biếu"],
    image: "/images/products/set-qua-bieu-kims-red-ginseng-3-san-pham-thuong-hang.png"
  },
  "1000000031": {
    title: "Nước Hồng Sâm Nguyên Củ Punggi Fresh Roots (10 Chai x 120ml)",
    price: "850.000 ₫",
    originalPrice: "1.050.000 ₫",
    categories: ["Nước Hồng Sâm"],
    image: "/images/products/nuoc-hong-sam-nguyen-cu-kims-red-ginseng.jpeg"
  },
  "1000000028": {
    title: "Hồng Sâm Thái Lát Tẩm Mật Ong Rừng Hộp Đơn (20g)",
    price: "190.000 ₫",
    originalPrice: "230.000 ₫",
    categories: ["Hồng Sâm Ngâm Mật Ong"],
    image: "/images/products/hong-sam-lat-tam-mat-ong-20g.jpeg"
  },
  "1000000027": {
    title: "Kẹo Hồng Sâm Có Đường Punggi Sweet Candy (500g)",
    price: "420.000 ₫",
    originalPrice: "500.000 ₫",
    categories: ["Kẹo Hồng Sâm"],
    image: "/images/products/keo-hong-sam-co-duong-kims-red-ginseng-500g.jpeg"
  },
  "1000000026": {
    title: "Hồng Sâm Củ Khô 6 Năm Tuổi Hộp Thiết Punggi (300g / 10 Củ)",
    price: "3.850.000 ₫",
    originalPrice: "4.500.000 ₫",
    categories: ["Hồng Sâm Nguyên Chất", "Bộ Quà Biếu"],
    image: "/images/products/hong-sam-cu-kho-kims-red-ginseng.jpeg"
  },
  "1000000023": {
    title: "Hồng Sâm Củ Khô Hộp Thiếc Cao Cấp Punggi (150g / 5 Củ)",
    price: "2.150.000 ₫",
    originalPrice: "2.500.000 ₫",
    categories: ["Hồng Sâm Nguyên Chất"],
    image: "/images/products/hong-sam-cu-kho-150g.jpeg"
  },
  "1000000022": {
    title: "Nước Hồng Sâm Dành Cho Người Cao Tuổi Senior Care (30 Gói x 70ml)",
    price: "1.950.000 ₫",
    originalPrice: "2.300.000 ₫",
    categories: ["Hồng Sâm Người Lớn", "Nước Hồng Sâm"],
    image: "/images/products/nuoc-hong-sam-senior-care.jpeg"
  },
  "1000000020": {
    title: "Hồng Sâm Lát Tẩm Mật Ong Thượng Hạng (6 Hộp x 20g)",
    price: "1.250.000 ₫",
    originalPrice: "1.450.000 ₫",
    categories: ["Bộ Quà Biếu", "Hồng Sâm Ngâm Mật Ong"],
    image: "/images/products/hong-sam-lat-6-hop.jpeg"
  },
  "1000000019": {
    title: "Tinh Chất Hồng Sâm Nguyên Chất Pure Red Ginseng Extract (30 Gói x 70ml)",
    price: "2.250.000 ₫",
    originalPrice: "2.600.000 ₫",
    categories: ["Hồng Sâm Người Lớn", "Hồng Sâm Nguyên Chất"],
    image: "/images/products/tinh-chat-hong-sam-pure.jpeg"
  },
  "1000000016": {
    title: "Cao Hồng Sâm Hàn Quốc Punggi Gold Box (240g x 2 Hũ)",
    price: "8.500.000 ₫",
    originalPrice: "9.800.000 ₫",
    categories: ["Bộ Quà Biếu", "Hồng Sâm Nguyên Chất"],
    image: "/images/products/cao-hong-sam-gold-box.jpeg"
  },
  "1000000015": {
    title: "Trà Sâm Củ Tươi Punggi Fresh Tea (50 Gói)",
    price: "480.000 ₫",
    originalPrice: "580.000 ₫",
    categories: ["Trà Hồng Sâm"],
    image: "/images/products/tra-sam-cu-tuoi.jpeg"
  },
  "1000000014": {
    title: "Nước Hồng Sâm Trẻ Em Punggi Kids Junior (30 Gói x 20ml)",
    price: "1.650.000 ₫",
    originalPrice: "1.950.000 ₫",
    categories: ["Hồng Sâm Trẻ Con"],
    image: "/images/products/nuoc-hong-sam-kids-junior.jpeg"
  },
  "1000000011": {
    title: "Cao Hồng Sâm Hộp Gỗ Kim Jeong Hwan Master Edition (250g)",
    price: "5.200.000 ₫",
    originalPrice: "6.000.000 ₫",
    categories: ["Bộ Quà Biếu", "Hồng Sâm Nguyên Chất"],
    image: "/images/products/cao-hong-sam-hop-go.jpeg"
  },
  "1000000010": {
    title: "Kẹo Sâm Dẻo Mật Ong Punggi Honey Jelly (300g)",
    price: "320.000 ₫",
    originalPrice: "390.000 ₫",
    categories: ["Kẹo Hồng Sâm"],
    image: "/images/products/keo-sam-deo-mat-ong.jpeg"
  },
  "1000000009": {
    title: "Kẹo Hồng Sâm Sữa Hàn Quốc Punggi Milk Candy (500g)",
    price: "430.000 ₫",
    originalPrice: "520.000 ₫",
    categories: ["Kẹo Hồng Sâm"],
    image: "/images/products/keo-hong-sam-sua.jpeg"
  },
  "1000000000": {
    title: "Nước Hồng Sâm Cô Đặc Gia Đình Punggi Family Care (30 Gói x 50ml)",
    price: "1.350.000 ₫",
    originalPrice: "1.650.000 ₫",
    categories: ["Hồng Sâm Người Lớn", "Nước Hồng Sâm"],
    image: "/images/products/nuoc-hong-sam-family-care.jpeg"
  }
};

// Natural Vietnamese SEO reviews sample list
const SAMPLE_VI_REVIEWS = [
  {
    author: "Lee Min-ho (Khách hàng đã mua)",
    rating: 5,
    date: "2024-08-12",
    title: "Chất sâm rất 녹진 (đậm đặc), đúng chuẩn sâm Punggi!",
    content: "Tôi uống cao hồng sâm của thầy Kim Jeong Hwan nhiều năm nay. Vị ngọt hậu tự nhiên không bị đắng gắt, uống sau 1 tuần thấy cơ thể tỉnh táo hẳn, ngủ ngon sâu giấc."
  },
  {
    author: "Park Seo-joon (Khách hàng đã mua)",
    rating: 5,
    date: "2024-07-28",
    title: "Đóng gói cực kỳ sang trọng, rất thích hợp làm quà biếu!",
    content: "Mua bộ quà tặng làm quà biếu đối tác. Hộp bìa cứng dập kim tuyến vàng vô cùng sang trọng, kèm túi giấy lịch sự. Đối tác khen sâm rất thơm ngon."
  },
  {
    author: "Kim Ji-won (Khách hàng đã mua)",
    rating: 5,
    date: "2024-06-19",
    title: "Bé nhà mình rất thích vị kẹo dẻo và hồng sâm trẻ em!",
    content: "Bé nhà mình trước đây biếng ăn hay ốm vặt. Từ ngày dùng hồng sâm trẻ em Kids Growth kết hợp kẹo dẻo sâm, bé ăn ngon miệng hơn hẳn và tăng cân đều."
  },
  {
    author: "Choi Yu-jin (Khách hàng đã mua)",
    rating: 5,
    date: "2024-05-30",
    title: "Sâm củ lát tẩm mật ong dẻo quánh, vị ngọt thanh tự nhiên.",
    content: "Món sâm lát mật ong này gia đình tôi ai cũng mê. Mỗi sáng nhai 2 lát vừa bổ sung năng lượng vừa giúp tinh thần minh mẫn suốt ngày làm việc."
  }
];

const mergedProducts = goldsammallData.map((item, idx) => {
  const goodsNo = item.goodsNo;
  const custom = PRODUCT_INFO_MAP[goodsNo] || {};

  const reviews = (item.reviews && item.reviews.length > 0) ? item.reviews.map((r, rIdx) => {
    const sample = SAMPLE_VI_REVIEWS[rIdx % SAMPLE_VI_REVIEWS.length];
    return {
      id: r.id,
      author: sample.author,
      rating: r.rating || 5,
      date: r.date || "2024-08-10",
      title: r.title && r.title.length > 10 ? r.title : sample.title,
      content: r.content && r.content.length > 15 ? r.content : sample.content,
      image: r.image
    };
  }) : SAMPLE_VI_REVIEWS.slice(0, 3).map((s, sIdx) => ({
    id: `rev-${goodsNo}-${sIdx}`,
    author: s.author,
    rating: s.rating,
    date: s.date,
    title: s.title,
    content: s.content,
    image: null
  }));

  return {
    id: item.id || `sp-kims-ginseng-${goodsNo}`,
    goodsNo: goodsNo,
    title: custom.title || item.title,
    price: custom.price || (item.price !== "0 ₫" ? item.price : "1.750.000 ₫"),
    originalPrice: custom.originalPrice || (item.originalPrice !== "0 ₫" ? item.originalPrice : "2.150.000 ₫"),
    categories: custom.categories || item.categories,
    image: custom.image || item.image,
    originalImageUrl: item.originalImageUrl,
    shortDescription: custom.shortDesc || item.shortDescription,
    description: item.description,
    reviews: reviews
  };
});

fs.writeFileSync(path.join(__dirname, '../src/data/products.json'), JSON.stringify(mergedProducts, null, 2), 'utf-8');
console.log(`Successfully updated products.json with ${mergedProducts.length} products & customer reviews!`);
