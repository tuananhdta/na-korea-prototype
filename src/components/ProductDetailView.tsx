"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
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
import { sanitizeProductDescription } from "@/lib/sanitizeHtml";

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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const buyButtonRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const { addToCart, openCart } = useCart();

  const checkTabScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkTabScroll();
    const el = tabsRef.current;
    if (el) {
      el.addEventListener("scroll", checkTabScroll, { passive: true });
      window.addEventListener("resize", checkTabScroll);
      return () => {
        el.removeEventListener("scroll", checkTabScroll);
        window.removeEventListener("resize", checkTabScroll);
      };
    }
  }, []);

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsRef.current) {
      const scrollAmount = direction === "left" ? -180 : 180;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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

  const handleAddToCart = (e?: React.MouseEvent) => {
    addToCart(product, quantity, undefined, e);
  };

  const handleBuyNow = (e?: React.MouseEvent) => {
    addToCart(product, quantity, undefined, e);
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
    <div className="bg-[#F8F8F8] min-h-screen py-4 sm:py-8 pb-24 text-[#333333]">

      {/* Breadcrumb Navigation */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-[#666666]">
          <Link href="/" className="hover:text-[#4B193E] transition-colors">
            Trang Chủ
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#A8A196]" />
          <Link href="/san-pham" className="hover:text-[#4B193E] transition-colors">
            Sản Phẩm
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#A8A196]" />
          <span className="text-[#111111] font-semibold truncate max-w-[160px] sm:max-w-md">
            {product.title}
          </span>
        </nav>
      </div>

      {/* Main Product Showcase Card */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xs border border-[#EEEEEE] p-4 sm:p-7 lg:p-8 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            
            {/* LEFT COLUMN: Image Showcase & Gallery */}
            <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-4 items-center w-full">
              
              {/* Outer Wrapper with Ambient Aura Glow */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div
                  aria-hidden="true"
                  className="absolute -inset-1 bg-gradient-to-tr from-[#181818]/10 via-[#D4A359]/10 to-[#4B193E]/10 rounded-2xl blur-lg opacity-80 pointer-events-none"
                />

                {/* Main Large Image Box */}
                <div className="relative w-full h-full bg-[#F8F8F8] rounded-2xl overflow-hidden border border-[#EEEEEE] shadow-xs group z-10">
                  
                  {/* Floating Discount Tag */}
                  {hasDiscount && (
                    <div className="absolute top-3 left-3 z-20">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#4B193E] text-white text-[11px] font-extrabold tracking-wide shadow-xs">
                        -{discountPercent}%
                      </span>
                    </div>
                  )}

                  {/* Lightbox Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="absolute top-3 right-3 z-20 h-8 w-8 rounded-full bg-white/80 hover:bg-white text-[#181818] hover:text-[#4B193E] backdrop-blur-md shadow-xs border border-white/60 flex items-center justify-center transition-all duration-200 opacity-80 hover:opacity-100 cursor-pointer"
                    aria-label="Phóng to ảnh"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Prev / Next Arrows */}
                  {galleryImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
                        }}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-white/85 hover:bg-white text-[#181818] hover:text-[#4B193E] backdrop-blur-md shadow-xs border border-white/60 flex items-center justify-center transition-all duration-200 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer"
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
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-white/85 hover:bg-white text-[#181818] hover:text-[#4B193E] backdrop-blur-md shadow-xs border border-white/60 flex items-center justify-center transition-all duration-200 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer"
                        aria-label="Ảnh kế tiếp"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  {/* Interactive Zoomable Image */}
                  <div
                    onMouseEnter={() => setIsHoveringImage(true)}
                    onMouseLeave={() => setIsHoveringImage(false)}
                    onMouseMove={handleMouseMove}
                    onClick={() => setIsLightboxOpen(true)}
                    className="relative w-full h-full cursor-zoom-in overflow-hidden"
                  >
                    <Image
                      key={activeImageIndex}
                      src={activeImage.src}
                      alt={product.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                      className="object-contain p-2 transition-transform duration-300 ease-out animate-in fade-in"
                      style={{
                        transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                        transform: isHoveringImage ? "scale(2.2)" : "scale(1)",
                      }}
                    />
                  </div>

                </div>
              </div>

              {/* Horizontal Thumbnails Rail */}
              {galleryImages.length > 1 && (
                <div className="flex items-center justify-center gap-2 sm:gap-2.5 overflow-x-auto w-full no-scrollbar py-1">
                  {galleryImages.map((img, idx) => {
                    const isActive = activeImageIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`group relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-white border-2 border-[#4B193E] shadow-xs opacity-100"
                            : "bg-[#F8F8F8] border border-[#EEEEEE] opacity-60 hover:opacity-100"
                        }`}
                        aria-label={img.label}
                      >
                        <Image
                          src={img.src}
                          alt={img.label}
                          fill
                          sizes="64px"
                          className="object-contain p-0.5"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Product Information & Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-5 pt-1">
              <div>
                {/* Title */}
                <h1 className="font-sans text-xl sm:text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight leading-snug">
                  {product.title}
                </h1>

                {/* Price Display */}
                <div className="mt-3 sm:mt-4 flex items-baseline gap-3 pb-1">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4B193E] tracking-tight">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm sm:text-base text-[#888888] line-through font-normal">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Short Description */}
                {product.shortDescription && (
                  <p className="mt-3 text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {product.shortDescription}
                  </p>
                )}

                {/* Quantity & CTA Buttons */}
                <div ref={buyButtonRef} className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  {/* Quantity Counter */}
                  <div className="flex items-center border border-[#EEEEEE] rounded-xl bg-[#FAFAFA] h-12 w-full sm:w-32 justify-between px-3 shrink-0">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1.5 text-[#666666] hover:text-[#111111] hover:bg-black/5 rounded-md transition-colors"
                      aria-label="Giảm số lượng"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-extrabold text-[#222222] text-sm sm:text-base">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1.5 text-[#666666] hover:text-[#111111] hover:bg-black/5 rounded-md transition-colors"
                      aria-label="Tăng số lượng"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* CTA Buttons: 1 Line Equal Width on Mobile */}
                  <div className="grid grid-cols-2 gap-2.5 w-full sm:flex sm:flex-1 sm:items-center sm:gap-3">
                    {/* Add to Cart Button */}
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(e)}
                      className="h-12 w-full sm:flex-1 px-2.5 sm:px-5 rounded-xl bg-[#4B193E] hover:bg-[#3A1230] text-white text-xs sm:text-sm font-bold shadow-sm active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer"
                    >
                      <span className="truncate">Thêm vào giỏ hàng</span>
                    </button>

                    {/* Buy Now Button */}
                    <button
                      type="button"
                      onClick={(e) => handleBuyNow(e)}
                      className="h-12 w-full sm:flex-1 px-2.5 sm:px-6 rounded-xl bg-[#B5222A] hover:bg-[#991C23] text-white text-xs sm:text-sm font-bold shadow-sm active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer"
                    >
                      <span className="truncate">Mua ngay</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Share Link */}
              <div className="pt-3 border-t border-[#EEEEEE] flex items-center gap-4 text-xs text-[#7A726A]">
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center gap-1.5 hover:text-[#4B193E] transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? "Đã sao chép link!" : "Chia sẻ sản phẩm"}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-10 bg-white rounded-3xl shadow-xs border border-[#EEEEEE] overflow-hidden">
          {/* Tabs Navigation Header */}
          <div className="relative border-b border-[#EEEEEE] bg-[#F8F8F8]">
            {/* Left Scroll Arrow */}
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => scrollTabs("left")}
                className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md border border-[#EEEEEE] flex items-center justify-center text-[#4B193E] hover:bg-[#F8F8F8] transition-all cursor-pointer"
                aria-label="Cuộn tab sang trái"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}

            {/* Right Scroll Arrow */}
            {canScrollRight && (
              <button
                type="button"
                onClick={() => scrollTabs("right")}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md border border-[#EEEEEE] flex items-center justify-center text-[#4B193E] hover:bg-[#F8F8F8] transition-all cursor-pointer animate-pulse"
                aria-label="Cuộn tab sang phải"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            {/* Scrollable Container */}
            <div
              ref={tabsRef}
              className="overflow-x-auto no-scrollbar scroll-smooth px-7 sm:px-8 p-2"
            >
              <div className="flex min-w-max gap-1.5 sm:gap-2">
                <button
                  onClick={() => setActiveTab("desc")}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    activeTab === "desc"
                      ? "bg-white text-[#4B193E] shadow-xs"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  Mô Tả Sản Phẩm & Công Dụng
                </button>

                <button
                  onClick={() => setActiveTab("usage")}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    activeTab === "usage"
                      ? "bg-white text-[#4B193E] shadow-xs"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  Hướng Dẫn Sử Dụng
                </button>

                <button
                  onClick={() => setActiveTab("origin")}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    activeTab === "origin"
                      ? "bg-white text-[#4B193E] shadow-xs"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  Nguồn Gốc & Chứng Nhận
                </button>

                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                    activeTab === "reviews"
                      ? "bg-white text-[#4B193E] shadow-xs"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  <span>Đánh Giá Khách Hàng</span>
                  {product.reviews && product.reviews.length > 0 && (
                    <span className="px-1.5 py-0.5 text-[10px] rounded-full bg-[#4B193E]/10 text-[#4B193E] font-extrabold">
                      {product.reviews.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Tab Contents */}
          <div className="p-5 sm:p-8 md:p-10 text-[#333333] leading-relaxed text-sm sm:text-base">
            {activeTab === "desc" && (
              <div className="space-y-4 max-w-4xl">
                <h3 className="font-sans text-base sm:text-lg font-bold text-[#111111]">
                  Thông tin chi tiết về {product.title}
                </h3>
                <div
                  className="na-product-content"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeProductDescription(
                      product.description || product.shortDescription
                    ),
                  }}
                />
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6 max-w-4xl">
                <div className="flex items-center justify-between pb-4 border-b border-[#EEEEEE]">
                  <div>
                    <h3 className="font-sans text-base sm:text-lg font-bold text-[#111111] flex items-center gap-2">
                      <span>Đánh giá từ người mua hàng thực tế</span>
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center text-[#D4A359]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-[#111111]">5.0 / 5.0</span>
                    </div>
                  </div>
                </div>

                {product.reviews && product.reviews.length > 0 ? (
                  <div className="space-y-4">
                    {product.reviews.map((rev: ProductReview) => (
                      <div key={rev.id} className="p-4 sm:p-5 rounded-xl bg-[#F8F8F8] border border-[#EEEEEE] space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-[#4B193E] text-white font-bold flex items-center justify-center text-xs">
                              {rev.author.slice(0, 1)}
                            </div>
                            <div>
                              <div className="font-bold text-[#111111] text-xs sm:text-sm">{rev.author}</div>
                              <div className="flex items-center text-[#D4A359] text-xs">
                                {[...Array(rev.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-[11px] text-[#888888]">{rev.date}</span>
                        </div>

                        <h4 className="font-bold text-[#111111] text-xs sm:text-sm">
                          {rev.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                          {rev.content}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500 text-sm">
                    Chưa có bình luận nào cho sản phẩm này.
                  </div>
                )}
              </div>
            )}

            {activeTab === "usage" && (
              <div className="space-y-4 max-w-3xl">
                <h3 className="font-sans text-base sm:text-lg font-bold text-[#111111]">Cách dùng & Liều lượng khuyến nghị</h3>
                <ul className="space-y-2.5 list-disc list-inside text-xs sm:text-sm text-[#333333]">
                  <li><strong>Người lớn:</strong> Dùng trực tiếp 1-2 lần mỗi ngày, mỗi lần 1 gói hoặc 1 thìa định lượng (đối với dạng cao cô đặc).</li>
                  <li><strong>Trẻ em dưới 15 tuổi:</strong> Sử dụng 1/2 liều lượng của người lớn hoặc dùng dòng sản phẩm chuyên biệt cho trẻ em.</li>
                  <li>Nên dùng vào buổi sáng hoặc buổi trưa sau khi ăn 15-30 phút để hấp thu tốt nhất. Tránh dùng vào buổi tối muộn.</li>
                  <li>Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Sau khi mở gói/hũ nên dùng ngay hoặc bảo quản ngăn mát tủ lạnh.</li>
                </ul>
              </div>
            )}

            {activeTab === "origin" && (
              <div className="space-y-4 max-w-3xl">
                <h3 className="font-sans text-base sm:text-lg font-bold text-[#111111]">Về Bậc Thầy Nhân Sâm Kim Jeong Hwan</h3>
                <p className="text-xs sm:text-sm text-[#333333]">
                  Sản phẩm được nghiên cứu và sản xuất bởi Bậc thầy Nhân sâm Kim Jeong Hwan với hơn 50 năm kinh nghiệm trồng trọt và chế biến nhân sâm tại vùng núi Punggi, tỉnh Gyeongsangbuk-do, Hàn Quốc.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                  <div className="p-3.5 bg-[#F8F8F8] border border-[#EEEEEE] rounded-xl text-center">
                    <div className="font-bold text-[#4B193E] text-base">100% 6 Năm Tuổi</div>
                    <div className="text-[11px] text-[#666666] mt-0.5">Đủ hàm lượng Saponin cao nhất</div>
                  </div>
                  <div className="p-3.5 bg-[#F8F8F8] border border-[#EEEEEE] rounded-xl text-center">
                    <div className="font-bold text-[#4B193E] text-base">HACCP & GMP</div>
                    <div className="text-[11px] text-[#666666] mt-0.5">Tiêu chuẩn quốc tế nghiêm ngặt</div>
                  </div>
                  <div className="p-3.5 bg-[#F8F8F8] border border-[#EEEEEE] rounded-xl text-center">
                    <div className="font-bold text-[#4B193E] text-base">Punggi Ginseng</div>
                    <div className="text-[11px] text-[#666666] mt-0.5">Địa danh nhân sâm 500 năm lịch sử</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-[#4B193E] uppercase tracking-wider">
                  GỢI Ý CHO BẠN
                </span>
                <h2 className="font-sans text-lg sm:text-2xl font-bold text-[#111111] mt-0.5">
                  Sản phẩm liên quan cùng danh mục
                </h2>
              </div>
              <Link
                href="/san-pham"
                className="text-xs sm:text-sm font-semibold text-[#4B193E] hover:underline flex items-center gap-1"
              >
                <span>Xem tất cả</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Purchase Bar */}
      <div
        className={`fixed bottom-0 inset-x-0 z-30 bg-[#35122C]/95 backdrop-blur-md text-white border-t border-white/15 px-4 sm:px-8 py-3 shadow-lg transition-all duration-300 ease-in-out ${
          showStickyBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-white overflow-hidden shrink-0 border border-white/20">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="48px"
                className="object-contain p-1"
              />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-white truncate max-w-[140px] sm:max-w-xs md:max-w-md">
                {product.title}
              </h4>
              <p className="text-xs text-[#D4A359] font-extrabold">{product.price}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={(e) => handleAddToCart(e)}
              className="h-9 sm:h-10 px-3 sm:px-4 rounded-lg bg-[#4B193E] hover:bg-[#3A1230] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors flex items-center justify-center cursor-pointer"
            >
              <span>Thêm giỏ hàng</span>
            </button>
            <button
              type="button"
              onClick={(e) => handleBuyNow(e)}
              className="h-9 sm:h-10 px-4 sm:px-5 rounded-lg bg-[#B5222A] hover:bg-[#991C23] text-white text-xs sm:text-sm font-extrabold shadow-xs transition-colors cursor-pointer"
            >
              <span>Mua ngay</span>
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
            className="absolute top-4 right-4 sm:top-6 sm:right-6 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/15 text-white hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Previous / Next buttons */}
          {galleryImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))
                }
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/15 text-white hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))
                }
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/15 text-white hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Ảnh kế tiếp"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Centered Large Image */}
          <div className="relative max-w-3xl max-h-[70vh] w-full h-full flex items-center justify-center">
            <div className="relative w-full h-[55vh] sm:h-[65vh]">
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
          {galleryImages.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto max-w-full p-2 no-scrollbar">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-12 w-12 sm:h-14 sm:w-14 rounded-lg overflow-hidden border-2 bg-white/10 p-1 transition-all ${
                    activeImageIndex === idx
                      ? "border-[#4B193E] scale-105"
                      : "border-white/30 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img.src} alt={img.label} fill sizes="56px" className="object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
