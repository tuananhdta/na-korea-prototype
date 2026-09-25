"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Plus,
  Minus,
  ChevronRight,
  Share2,
  Star,
  Maximize2,
  X,
  ChevronLeft,
  CheckCircle2,
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showStickyBar, setShowStickyBar] = useState(false);

  const buyButtonRef = useRef<HTMLDivElement>(null);
  const { addToCart, openCart } = useCart();

  // Authentic gallery generation strictly for this specific product
  const getProductGallery = (prod: Product) => {
    if (prod.galleryImages && prod.galleryImages.length > 0) {
      const labelMap = [
        "Tổng quan sản phẩm",
        "Quy cách đóng gói",
        "Chi tiết góc chụp",
        "Thành phần & Công dụng",
        "Hình ảnh thực tế",
        "Chi tiết bao bì",
        "Góc nhìn cận cảnh",
        "Tem nhãn & Chứng nhận",
        "Quy cách gói stick",
        "Thông số dinh dưỡng",
        "Bảo chứng chất lượng",
        "Hướng dẫn sử dụng"
      ];
      return prod.galleryImages.map((src, idx) => ({
        src,
        label: labelMap[idx] || `Chi tiết ${idx + 1}`
      }));
    }

    return [{ src: prod.image, label: "Tổng quan sản phẩm" }];
  };

  const galleryImages = getProductGallery(product);
  const activeImage = galleryImages[activeImageIndex] || galleryImages[0];

  // Parse price savings
  const parsePrice = (priceStr?: string | null): number => {
    if (!priceStr) return 0;
    const clean = priceStr.replace(/[^0-9]/g, "");
    return parseInt(clean, 10) || 0;
  };

  const currentPriceNum = parsePrice(product.price);
  const originalPriceNum = parsePrice(product.originalPrice);
  const hasDiscount = originalPriceNum > currentPriceNum;
  const discountPercent = hasDiscount
    ? Math.round(((originalPriceNum - currentPriceNum) / originalPriceNum) * 100)
    : 0;

  // Zoom position tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - left) / width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - top) / height) * 100));
    setZoomPos({ x, y });
  };

  // Sticky Buy Bar scroll trigger
  useEffect(() => {
    const handleScroll = () => {
      if (!buyButtonRef.current) return;
      const rect = buyButtonRef.current.getBoundingClientRect();
      if (rect.bottom < 80) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3800);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    triggerToast(`Đã thêm ${quantity} x sản phẩm vào giỏ hàng`);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push("/thanh-toan");
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      triggerToast("Đã sao chép liên kết sản phẩm vào bộ nhớ tạm!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-24 sm:pt-28 pb-24 text-[#4B4F52]">
      {/* Toast Notification */}
      <div
        className={`fixed bottom-24 right-4 sm:right-8 z-50 transition-all duration-300 transform ${
          showToast ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 pointer-events-none scale-95"
        }`}
      >
        <div className="flex items-center gap-3 rounded-2xl bg-[#2D1225]/95 text-white px-5 py-3.5 shadow-[0_14px_34px_rgba(45,18,37,0.45)] border border-white/20 backdrop-blur-md">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B5222A] text-white shadow-inner">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white/70">Thông báo giỏ hàng</p>
            <p className="text-sm font-bold text-white">{toastMessage}</p>
          </div>
          <button
            onClick={openCart}
            className="ml-2 rounded-lg bg-white/15 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-white/25 hover:text-white"
          >
            Xem giỏ
          </button>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">
            Trang Chủ
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/san-pham" className="hover:text-black transition-colors">
            Sản Phẩm
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-medium truncate max-w-xs sm:max-w-md">
            {product.title}
          </span>
        </nav>
      </div>

      {/* Main Product Showcase Card */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-[#ECE6DE] p-5 sm:p-7 lg:p-8 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* LEFT COLUMN: Solution 1 - Ambient Aura & Frosted Glass Showcase */}
            <div className="lg:col-span-6 flex flex-col gap-4 items-center w-full">
              
              {/* Outer Wrapper with Multi-Layer Ambient Aura Glow */}
              <div className="relative w-full aspect-square">
                {/* Ambient Aura Background Radiance */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-1.5 sm:-inset-2.5 bg-gradient-to-tr from-[#4B193E]/15 via-[#F0831F]/12 to-[#B5222A]/15 rounded-2xl blur-xl opacity-80 pointer-events-none transition-opacity duration-500"
                />

                {/* Main Large Image Box (Flush Edge-to-Edge with hairline border) */}
                <div className="relative w-full h-full bg-[#FAF9F6] rounded-xl overflow-hidden border border-[#EAE4DC] shadow-[0_4px_20px_rgba(0,0,0,0.03)] group z-10">
                  
                  {/* Floating Discount Tag if applicable */}
                  {hasDiscount && (
                    <div className="absolute top-3.5 left-3.5 z-20">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#B5222A] text-white text-[11px] font-extrabold tracking-wide shadow-sm">
                        -{discountPercent}%
                      </span>
                    </div>
                  )}

                  {/* Frosted Glass Lightbox Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="absolute top-3.5 right-3.5 z-20 h-8 w-8 rounded-full bg-white/80 hover:bg-white text-[#4B193E] hover:text-[#B5222A] backdrop-blur-md shadow-xs border border-white/60 flex items-center justify-center transition-all duration-200 opacity-75 group-hover:opacity-100 cursor-pointer"
                    aria-label="Phóng to ảnh"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Quick Prev / Next Arrows on Main Image */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-white/85 hover:bg-white text-[#4B193E] hover:text-[#B5222A] backdrop-blur-md shadow-sm border border-white/60 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                    aria-label="Ảnh trước"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-white/85 hover:bg-white text-[#4B193E] hover:text-[#B5222A] backdrop-blur-md shadow-sm border border-white/60 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
                    aria-label="Ảnh kế tiếp"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Interactive Zoomable Image Area (p-0 edge-to-edge) */}
                  <div
                    onMouseEnter={() => setIsHoveringImage(true)}
                    onMouseLeave={() => setIsHoveringImage(false)}
                    onMouseMove={handleMouseMove}
                    className="relative w-full h-full cursor-crosshair overflow-hidden"
                  >
                    <Image
                      key={activeImageIndex}
                      src={activeImage.src}
                      alt={product.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                      className="object-contain p-0 transition-transform duration-300 ease-out animate-in fade-in duration-200"
                      style={{
                        transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                        transform: isHoveringImage ? "scale(2.2)" : "scale(1)",
                      }}
                    />
                  </div>

                  {/* Frosted Glass Status Badge at Bottom */}
                  <div className="absolute bottom-3.5 inset-x-0 flex items-center justify-center pointer-events-none z-10">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[#2D2D2D] text-[11px] font-semibold tracking-wide border border-white/60 shadow-[0_4px_14px_rgba(0,0,0,0.08)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B5222A] animate-pulse" />
                      <span>{activeImage.label} · Rê chuột để phóng to</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Horizontal Flush Thumbnails Rail (Only when product has multiple authentic images) */}
              {galleryImages.length > 1 && (
                <div className="flex items-center justify-center gap-2.5 sm:gap-3 overflow-x-auto w-full no-scrollbar py-1">
                  {galleryImages.map((img, idx) => {
                    const isActive = activeImageIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        onMouseEnter={() => setActiveImageIndex(idx)}
                        className={`group relative h-16 w-16 sm:h-[76px] sm:w-[76px] shrink-0 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-white border-2 border-[#B5222A] shadow-[0_4px_16px_rgba(181,34,42,0.18)] opacity-100 ring-2 ring-[#B5222A]/10"
                            : "bg-[#FAF9F6] border border-[#EAE4DC] opacity-50 hover:opacity-95 hover:border-[#B5222A]/40"
                        }`}
                        aria-label={img.label}
                      >
                        <Image
                          src={img.src}
                          alt={img.label}
                          fill
                          sizes="76px"
                          className="object-contain p-0.5 transition-transform duration-300 group-hover:scale-105"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Product Purchase Information */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 pt-1">
              <div>
                {/* Product Title */}
                <h1 className="font-sans text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#1F1F1F] tracking-tight leading-snug">
                  {product.title}
                </h1>

                {/* Price Display */}
                <div className="mt-5 flex items-baseline gap-3.5 pb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#B5222A] tracking-tight">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base sm:text-lg text-[#999999] line-through font-normal">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Short Description */}
                {product.shortDescription && (
                  <p className="mt-4 text-sm sm:text-[15px] text-[#4B4F52] leading-relaxed">
                    {product.shortDescription}
                  </p>
                )}

                {/* Quantity & CTA Action Buttons */}
                <div ref={buyButtonRef} className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  {/* Quantity Counter */}
                  <div className="flex items-center border border-[#D9CFC4] rounded-xl bg-[#FAFAFA] h-13 w-32 justify-between px-3 shrink-0 shadow-xs">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1.5 text-[#666666] hover:text-[#2D2D2D] hover:bg-black/5 rounded-md transition-colors"
                      aria-label="Giảm số lượng"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-extrabold text-[#222222] text-base">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1.5 text-[#666666] hover:text-[#2D2D2D] hover:bg-black/5 rounded-md transition-colors"
                      aria-label="Tăng số lượng"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart Button with Metallic Shimmer Light */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="animate-shimmer-btn flex-1 h-13 px-6 rounded-xl bg-[#B5222A] hover:bg-[#9E1B22] text-white text-sm sm:text-base font-bold shadow-[0_8px_20px_rgba(181,34,42,0.28)] hover:shadow-[0_12px_28px_rgba(181,34,42,0.38)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    <span>Thêm vào giỏ hàng</span>
                  </button>

                  {/* Buy Now Button */}
                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="h-13 px-7 rounded-xl bg-[#4B193E] hover:bg-[#38112E] text-white text-sm sm:text-base font-bold shadow-[0_8px_20px_rgba(75,25,62,0.2)] hover:shadow-[0_12px_28px_rgba(75,25,62,0.3)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center cursor-pointer shrink-0"
                  >
                    <span>Mua ngay</span>
                  </button>
                </div>
              </div>

              {/* Share */}
              <div className="pt-4 border-t border-[#EFEAE2] flex items-center gap-4 text-xs text-[#7A726A]">
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-1.5 hover:text-[#B5222A] transition-colors"
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
          className="mt-12 bg-white rounded-3xl shadow-[0_10px_34px_rgba(0,0,0,0.03)] border border-[#EAE2D8] overflow-hidden"
          data-scroll-fade="on"
        >
          {/* Tabs Navigation (Order: 1. Mô Tả -> 3. Hướng Dẫn Sử Dụng -> 4. Nguồn Gốc & Chứng Nhận -> 2. Đánh Giá Khách Hàng) */}
          <div className="overflow-x-auto border-b border-[#EAE2D8] no-scrollbar bg-[#FAF8F5]/80">
            <div className="flex min-w-max p-2 gap-2">
              {/* 1. Mô Tả Sản Phẩm & Công Dụng */}
              <button
                onClick={() => setActiveTab("desc")}
                className={`px-6 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 relative ${
                  activeTab === "desc"
                    ? "bg-white text-[#B5222A] shadow-xs ring-1 ring-black/5"
                    : "text-[#666666] hover:text-[#2D2D2D] hover:bg-white/60"
                }`}
              >
                Mô Tả Sản Phẩm & Công Dụng
              </button>

              {/* 3. Hướng Dẫn Sử Dụng */}
              <button
                onClick={() => setActiveTab("usage")}
                className={`px-6 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 relative ${
                  activeTab === "usage"
                    ? "bg-white text-[#B5222A] shadow-xs ring-1 ring-black/5"
                    : "text-[#666666] hover:text-[#2D2D2D] hover:bg-white/60"
                }`}
              >
                Hướng Dẫn Sử Dụng
              </button>

              {/* 4. Nguồn Gốc & Chứng Nhận */}
              <button
                onClick={() => setActiveTab("origin")}
                className={`px-6 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 relative ${
                  activeTab === "origin"
                    ? "bg-white text-[#B5222A] shadow-xs ring-1 ring-black/5"
                    : "text-[#666666] hover:text-[#2D2D2D] hover:bg-white/60"
                }`}
              >
                Nguồn Gốc & Chứng Nhận
              </button>

              {/* 2. Đánh Giá Khách Hàng */}
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-3 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 relative flex items-center gap-1.5 ${
                  activeTab === "reviews"
                    ? "bg-white text-[#B5222A] shadow-xs ring-1 ring-black/5"
                    : "text-[#666666] hover:text-[#2D2D2D] hover:bg-white/60"
                }`}
              >
                <span>Đánh Giá Khách Hàng</span>
                {product.reviews && product.reviews.length > 0 && (
                  <span className="px-2 py-0.5 text-[11px] rounded-full bg-[#B5222A]/10 text-[#B5222A] font-extrabold">
                    {product.reviews.length}
                  </span>
                )}
              </button>
            </div>
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
                href="/san-pham"
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

      {/* Sticky Bottom Purchase Bar (slides in on scroll) */}
      <div
        className={`fixed bottom-0 inset-x-0 z-40 bg-[#35122C]/95 backdrop-blur-md text-white border-t border-white/15 px-4 sm:px-8 py-3.5 shadow-[0_-10px_30px_rgba(0,0,0,0.35)] transition-all duration-400 ease-in-out ${
          showStickyBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="relative h-12 w-12 rounded-lg bg-white overflow-hidden shrink-0 border border-white/20">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="48px"
                className="object-contain p-1"
              />
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-white truncate max-w-[220px] sm:max-w-md">
                {product.title}
              </h4>
              <p className="text-xs text-[#F0831F] font-extrabold">{product.price}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleAddToCart}
              className="h-10 px-4 rounded-lg bg-[#B5222A] hover:bg-[#9E1B22] text-white text-xs sm:text-sm font-bold shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Thêm giỏ hàng</span>
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              className="h-10 px-5 rounded-lg bg-white text-[#4B193E] hover:bg-white/90 text-xs sm:text-sm font-extrabold shadow-md transition-colors cursor-pointer"
            >
              Mua ngay
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for High-Res Zoom */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/15 text-white hover:bg-white/30 flex items-center justify-center transition-colors"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous / Next buttons */}
          <button
            type="button"
            onClick={() =>
              setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))
            }
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/15 text-white hover:bg-white/30 flex items-center justify-center transition-colors"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={() =>
              setActiveImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))
            }
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/15 text-white hover:bg-white/30 flex items-center justify-center transition-colors"
            aria-label="Ảnh kế tiếp"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Centered Large Image */}
          <div className="relative max-w-3xl max-h-[70vh] w-full h-full flex items-center justify-center">
            <div className="relative w-full h-[65vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.label}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Lightbox Thumbnails Strip */}
          <div className="flex gap-2.5 mt-4 overflow-x-auto max-w-full p-2">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-14 w-14 rounded-lg overflow-hidden border-2 bg-white/10 p-1 transition-all ${
                  activeImageIndex === idx
                    ? "border-[#B5222A] scale-110"
                    : "border-white/30 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img.src} alt={img.label} fill sizes="56px" className="object-contain" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
