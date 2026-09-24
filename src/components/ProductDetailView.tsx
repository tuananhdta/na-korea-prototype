"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Plus,
  Minus,
  Check,
  ChevronRight,
  Share2,
  Star,
  MessageSquareQuote,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Product, ProductReview } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ProductCard";

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "reviews" | "usage" | "origin">("desc");
  const [copied, setCopied] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
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
            </div>

            {/* Right Column: Product Purchase Info */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-[#ECEBE9] text-[#B5222A] text-xs font-bold rounded-md uppercase tracking-wider mb-3">
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
                    className="na-btn-primary flex-1 h-12 text-sm sm:text-base tracking-wide"
                  >
                    <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    <span>Thêm vào giỏ hàng</span>
                  </button>

                  {/* Buy Now Button */}
                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="na-btn-secondary h-12 px-7 text-sm sm:text-base tracking-wide"
                  >
                    <span>Mua ngay</span>
                  </button>
                </div>
              </div>

              {/* Share */}
              <div className="pt-4 border-t border-[#E5E5E5] flex items-center gap-4 text-xs text-[#666666]">
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
              className={`px-6 sm:px-8 py-4 text-xs sm:text-sm font-bold transition-colors relative ${
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
              onClick={() => setActiveTab("reviews")}
              className={`px-6 sm:px-8 py-4 text-xs sm:text-sm font-bold transition-colors relative flex items-center gap-1.5 ${
                activeTab === "reviews"
                  ? "text-[#B5222A]"
                  : "text-[#666666] hover:text-[#2D2D2D]"
              }`}
            >
              <span>Đánh Giá Khách Hàng</span>
              {product.reviews && product.reviews.length > 0 && (
                <span className="px-2 py-0.5 text-[11px] rounded-full bg-[#B5222A]/10 text-[#B5222A] font-extrabold">
                  {product.reviews.length}
                </span>
              )}
              {activeTab === "reviews" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B5222A]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("usage")}
              className={`px-6 sm:px-8 py-4 text-xs sm:text-sm font-bold transition-colors relative ${
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
              className={`px-6 sm:px-8 py-4 text-xs sm:text-sm font-bold transition-colors relative ${
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
                <div
                  className="space-y-4 text-[#4B4F52] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.description || product.shortDescription }}
                />
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6 max-w-4xl">
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5]">
                  <div>
                    <h3 className="font-sans text-lg font-bold text-[#2D2D2D] flex items-center gap-2">
                      <span>Đánh giá từ người mua hàng thực tế</span>
                      <span className="text-xs font-normal text-[#666666]">(Đã xác minh qua Goldsammall Hàn Quốc)</span>
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center text-[#F0831F]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-[#2D2D2D]">5.0 / 5.0</span>
                    </div>
                  </div>
                </div>

                {product.reviews && product.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {product.reviews.map((rev: ProductReview) => (
                      <div key={rev.id} className="p-5 rounded-xl bg-[#F8F8F8] border border-[#E5E5E5] space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#B5222A] text-white font-bold flex items-center justify-center text-xs">
                              {rev.author.slice(0, 1)}
                            </div>
                            <div>
                              <div className="font-bold text-[#2D2D2D] text-sm">{rev.author}</div>
                              <div className="flex items-center text-[#F0831F] text-xs">
                                {[...Array(rev.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-[#666666]">{rev.date}</span>
                        </div>

                        <h4 className="font-bold text-[#2D2D2D] text-sm sm:text-base">
                          {rev.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-[#4B4F52] leading-relaxed">
                          {rev.content}
                        </p>

                        {rev.image && (
                          <div className="relative aspect-video w-48 rounded-lg overflow-hidden border border-[#E5E5E5] mt-2">
                            <Image
                              src={rev.image}
                              alt="Ảnh thực tế từ khách hàng"
                              fill
                              sizes="192px"
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    Chưa có bình luận nào cho sản phẩm này.
                  </div>
                )}
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
