"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Plus,
  Minus,
  Check,
  Truck,
  Gift,
  ShieldCheck,
  Award,
  ChevronRight,
  Share2,
  Heart,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ProductCard";

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

const PACKAGING_OPTIONS = [
  {
    id: "standard",
    label: "Hộp tiêu chuẩn",
    subtitle: "Kèm túi giấy chính hãng",
  },
  {
    id: "gift",
    label: "Hộp quà biếu VIP",
    subtitle: "Thắt nơ lụa cao cấp",
  },
  {
    id: "combo",
    label: "Combo ưu đãi",
    subtitle: "Tiết kiệm thêm 5%",
  },
];

export function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedPackaging, setSelectedPackaging] = useState(PACKAGING_OPTIONS[0].label);
  const [activeTab, setActiveTab] = useState<"desc" | "usage" | "origin">("desc");
  const [copied, setCopied] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedPackaging);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedPackaging);
    router.push("/checkout");
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[#fafafa] min-h-screen pt-28 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">
            Trang Chủ
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/product" className="hover:text-black transition-colors">
            Sản Phẩm
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-medium truncate max-w-xs sm:max-w-md">
            {product.title}
          </span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div
          className="bg-white rounded-2xl shadow-sm border border-[#E5E5E5] p-6 sm:p-10 lg:p-12"
          data-scroll-fade="on"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Product Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square w-full bg-[#F8F8F8] rounded-xl overflow-hidden border border-[#E5E5E5] shadow-inner group">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  preload
                  className="object-contain p-4 sm:p-8 group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Floating tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-[#B5222A] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md tracking-wider">
                    BEST SELLER
                  </span>
                  {product.originalPrice && (
                    <span className="bg-[#F0831F] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                      GIẢM GIÁ
                    </span>
                  )}
                </div>
              </div>

              {/* Product Trust Under Photo */}
              <div className="flex items-center justify-between text-xs text-[#666666] px-2 pt-2">
                <span>Mã SP: {product.id}</span>
                <span>Hồng sâm 6 năm tuổi Punggi Hàn Quốc</span>
              </div>
            </div>

            {/* Right Column: Product Purchase Info (Matching Reference Mockup) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ECEBE9] text-[#B5222A] text-xs font-bold rounded-md uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#F0831F]" />
                  <span>CHÍNH HÃNG KIM&apos;S RED GINSENG</span>
                </div>

                {/* Product Title */}
                <h1 className="font-sans text-2xl sm:text-3xl md:text-[32px] font-bold text-[#2D2D2D] tracking-tight leading-tight">
                  {product.title}
                </h1>

                {/* Subtitle / Korean specification */}
                <p className="text-sm text-[#666666] mt-2 font-medium">
                  {product.categories.join(" · ")} ｜ 풍기 6년근 홍삼
                </p>

                {/* Price Display */}
                <div className="mt-5 pb-5 border-b border-[#E5E5E5] flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#B5222A] tracking-tight">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-[#666666] line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Short Description */}
                {product.shortDescription && (
                  <p className="mt-4 text-sm text-[#4B4F52] leading-relaxed">
                    {product.shortDescription}
                  </p>
                )}

                {/* Packaging Selection Options (Như trong ảnh mẫu) */}
                <div className="mt-6 space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2D2D]">
                    Quy cách đóng gói & Quà tặng
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {PACKAGING_OPTIONS.map((opt) => {
                      const isSelected = selectedPackaging === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSelectedPackaging(opt.label)}
                          className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                            isSelected
                              ? "border-[#B5222A] bg-red-50/50 shadow-xs"
                              : "border-[#E5E5E5] hover:border-gray-400 bg-white"
                          }`}
                        >
                          <div
                            className={`text-xs font-bold ${
                              isSelected ? "text-[#B5222A]" : "text-[#2D2D2D]"
                            }`}
                          >
                            {opt.label}
                          </div>
                          <div className="text-[11px] text-[#666666] mt-0.5">
                            {opt.subtitle}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quantity & Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  {/* Quantity Counter */}
                  <div className="flex items-center border border-[#E5E5E5] rounded-lg bg-white h-12 w-32 justify-between px-3 shrink-0">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1 text-[#666666] hover:text-[#2D2D2D] transition-colors"
                      aria-label="Giảm"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-[#2D2D2D] text-base">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1 text-[#666666] hover:text-[#2D2D2D] transition-colors"
                      aria-label="Tăng"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 h-12 bg-[#B5222A] hover:bg-[#991C23] text-white font-bold rounded-lg shadow-md flex items-center justify-center gap-2 transition-all duration-200 transform active:scale-98 text-sm sm:text-base"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Thêm vào giỏ hàng</span>
                  </button>

                  {/* Buy Now Button */}
                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="h-12 px-6 border-2 border-[#2D2D2D] hover:bg-[#2D2D2D] hover:text-white text-[#2D2D2D] font-bold rounded-lg transition-colors text-sm sm:text-base"
                  >
                    Mua ngay
                  </button>
                </div>
              </div>

              {/* Service Highlights / Trust Badges (Như trong ảnh mẫu) */}
              <div className="pt-6 border-t border-[#E5E5E5] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#4B4F52]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ECEBE9] text-[#B5222A] flex items-center justify-center shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D2D2D]">Giao hàng nhanh 1-2 ngày</div>
                    <div className="text-[#666666]">Miễn phí giao hàng toàn quốc</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ECEBE9] text-[#B5222A] flex items-center justify-center shrink-0">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D2D2D]">Túi quà sang trọng</div>
                    <div className="text-[#666666]">Kèm thiệp chúc mừng theo yêu cầu</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ECEBE9] text-[#B5222A] flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D2D2D]">100% Sâm núi Punggi</div>
                    <div className="text-[#666666]">Nghệ nhân Kim Jeong Hwan</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ECEBE9] text-[#B5222A] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2D2D2D]">Chứng nhận HACCP & GMP</div>
                    <div className="text-[#666666]">Kiểm định chất lượng nghiêm ngặt</div>
                  </div>
                </div>
              </div>

              {/* Share and wishlist */}
              <div className="pt-2 flex items-center gap-4 text-xs text-[#666666]">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 hover:text-[#2D2D2D] transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? "Đã sao chép link!" : "Chia sẻ sản phẩm"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div
          className="mt-12 bg-white rounded-2xl shadow-sm border border-[#E5E5E5] overflow-hidden"
          data-scroll-fade="on"
        >
          {/* Tabs Navigation */}
          <div className="flex border-b border-[#E5E5E5]">
            <button
              onClick={() => setActiveTab("desc")}
              className={`px-8 py-4 text-sm font-bold transition-colors relative ${
                activeTab === "desc"
                  ? "text-[#B5222A]"
                  : "text-[#666666] hover:text-[#2D2D2D]"
              }`}
            >
              Mô Tả Sản Phẩm & Công Dụng
              {activeTab === "desc" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B5222A]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("usage")}
              className={`px-8 py-4 text-sm font-bold transition-colors relative ${
                activeTab === "usage"
                  ? "text-[#B5222A]"
                  : "text-[#666666] hover:text-[#2D2D2D]"
              }`}
            >
              Hướng Dẫn Sử Dụng
              {activeTab === "usage" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B5222A]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("origin")}
              className={`px-8 py-4 text-sm font-bold transition-colors relative ${
                activeTab === "origin"
                  ? "text-[#B5222A]"
                  : "text-[#666666] hover:text-[#2D2D2D]"
              }`}
            >
              Nguồn Gốc & Chứng Nhận
              {activeTab === "origin" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B5222A]" />
              )}
            </button>
          </div>

          {/* Tab Contents */}
          <div className="p-6 sm:p-10 text-[#4B4F52] leading-relaxed text-sm sm:text-base">
            {activeTab === "desc" && (
              <div className="space-y-4 max-w-4xl">
                <h3 className="font-sans text-lg font-bold text-[#2D2D2D]">
                  Thông tin chi tiết về {product.title}
                </h3>
                <div className="whitespace-pre-line text-[#4B4F52] leading-relaxed">
                  {product.description || product.shortDescription}
                </div>
              </div>
            )}

            {activeTab === "usage" && (
              <div className="space-y-4 max-w-3xl">
                <h3 className="font-sans text-lg font-bold text-[#2D2D2D]">Cách dùng & Liều lượng khuyến nghị</h3>
                <ul className="space-y-2.5 list-disc list-inside text-[#4B4F52]">
                  <li><strong>Người lớn:</strong> Dùng trực tiếp 1-2 lần mỗi ngày, mỗi lần 1 gói hoặc 1 thìa định lượng (đối với dạng cao cô đặc).</li>
                  <li><strong>Trẻ em dưới 15 tuổi:</strong> Sử dụng 1/2 liều lượng của người lớn hoặc dùng dòng sản phẩm chuyên biệt cho trẻ em (Easy & High).</li>
                  <li>Nên dùng vào buổi sáng hoặc buổi trưa sau khi ăn 15-30 phút để hấp thu tốt nhất. Tránh dùng vào buổi tối muộn.</li>
                  <li>Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Sau khi mở gói/hũ nên dùng ngay hoặc bảo quản ngăn mát tủ lạnh.</li>
                </ul>
              </div>
            )}

            {activeTab === "origin" && (
              <div className="space-y-4 max-w-3xl">
                <h3 className="font-sans text-lg font-bold text-[#2D2D2D]">Về Bậc Thầy Nhân Sâm Kim Jeong Hwan</h3>
                <p className="text-[#4B4F52]">
                  Sản phẩm được nghiên cứu và sản xuất bởi Bậc thầy Nhân sâm Kim Jeong Hwan với hơn 50 năm kinh nghiệm trồng trọt và chế biến nhân sâm tại vùng núi Punggi, tỉnh Gyeongsangbuk-do, Hàn Quốc.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 bg-[#F8F8F8] border border-[#E5E5E5] rounded-lg text-center">
                    <div className="font-bold text-[#B5222A] text-lg">100% 6 Năm Tuổi</div>
                    <div className="text-xs text-[#666666] mt-1">Đủ hàm lượng Saponin cao nhất</div>
                  </div>
                  <div className="p-4 bg-[#F8F8F8] border border-[#E5E5E5] rounded-lg text-center">
                    <div className="font-bold text-[#B5222A] text-lg">HACCP & GMP</div>
                    <div className="text-xs text-[#666666] mt-1">Tiêu chuẩn quốc tế nghiêm ngặt</div>
                  </div>
                  <div className="p-4 bg-[#F8F8F8] border border-[#E5E5E5] rounded-lg text-center">
                    <div className="font-bold text-[#B5222A] text-lg">Punggi Ginseng</div>
                    <div className="text-xs text-[#666666] mt-1">Địa danh nhân sâm 500 năm lịch sử</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16" data-scroll-fade="on">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-[#B5222A] uppercase tracking-wider">
                  GỢI Ý CHO BẠN
                </span>
                <h2 className="font-sans text-xl sm:text-2xl font-bold text-[#2D2D2D] mt-1">
                  Sản phẩm liên quan cùng danh mục
                </h2>
              </div>
              <Link
                href="/product"
                className="text-sm font-semibold text-[#B5222A] hover:underline flex items-center gap-1"
              >
                <span>Xem tất cả</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
