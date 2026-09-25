"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  ChevronRight,
  ShoppingBag,
  CreditCard,
  Truck,
  ArrowLeft,
  CheckCircle2,
  Tag,
  AlertCircle,
  Building2,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileDrawer } from "@/components/MobileDrawer";
import { OrderSuccessModal, OrderDetails } from "@/components/OrderSuccessModal";
import { useCart, parsePriceToNumber, formatNumberToVnd } from "@/context/CartContext";

const VALID_COUPONS: Record<
  string,
  { type: "percent" | "fixed"; value: number; label: string }
> = {
  NAKOREA: { type: "percent", value: 10, label: "Giảm 10% tổng đơn hàng" },
  KIMS50: { type: "fixed", value: 50000, label: "Giảm 50.000₫" },
  TRIAN: { type: "fixed", value: 100000, label: "Giảm 100.000₫ cho khách hàng thân thiết" },
};

export function ThanhToanView() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, totalPrice, clearCart } = useCart();

  // Form Fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  // Coupon state
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discountAmount: number;
    label: string;
  } | null>(null);
  const [couponError, setCouponError] = useState("");

  // Payment method: "cod" or "bank_transfer"
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "bank_transfer">("cod");

  // Form validation errors
  const [errors, setErrors] = useState<{
    fullName?: string;
    phone?: string;
    address?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Success Modal
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);

  // Calculate discounts and totals
  const discountAmount = appliedCoupon ? appliedCoupon.discountAmount : 0;
  const finalTotalNumber = Math.max(0, totalPrice - discountAmount);
  const formattedFinalTotal = formatNumberToVnd(finalTotalNumber);

  const handleApplyCoupon = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setCouponError("");

    const code = couponInput.trim().toUpperCase();
    if (!code) {
      setCouponError("Vui lòng nhập mã giảm giá");
      return;
    }

    const coupon = VALID_COUPONS[code];
    if (!coupon) {
      setCouponError("Mã giảm giá không hợp lệ hoặc đã hết hạn");
      return;
    }

    let calculatedDiscount = 0;
    if (coupon.type === "percent") {
      calculatedDiscount = Math.round((totalPrice * coupon.value) / 100);
    } else {
      calculatedDiscount = Math.min(totalPrice, coupon.value);
    }

    setAppliedCoupon({
      code,
      discountAmount: calculatedDiscount,
      label: coupon.label,
    });
    setCouponInput("");
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponError("");
  };

  const validateForm = () => {
    const newErrors: {
      fullName?: string;
      phone?: string;
      address?: string;
    } = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên";
    }

    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (cleanPhone.length < 9 || cleanPhone.length > 11) {
      newErrors.phone = "Số điện thoại không hợp lệ (9 - 11 chữ số)";
    }

    if (!address.trim()) {
      newErrors.address = "Vui lòng nhập địa chỉ nhận hàng chi tiết";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      alert("Giỏ hàng của bạn đang trống!");
      return;
    }

    if (!validateForm()) {
      window.scrollTo({ top: 120, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);

    const generatedOrderId = `NAK-${Date.now().toString().slice(-6)}`;
    const paymentLabel =
      paymentMethod === "cod"
        ? "Thanh toán khi nhận hàng (COD)"
        : "Chuyển khoản ngân hàng";

    const orderData: OrderDetails = {
      orderId: generatedOrderId,
      customerName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      address: address.trim(),
      note: note.trim() || undefined,
      paymentMethod: paymentLabel,
      total: formattedFinalTotal,
      itemCount: items.reduce((acc, it) => acc + it.quantity, 0),
    };

    setTimeout(() => {
      setCompletedOrder(orderData);
      setIsSuccessModalOpen(true);
      setIsSubmitting(false);
    }, 400);
  };

  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
    clearCart();
    router.push("/");
  };

  const handleContinueShopping = () => {
    setIsSuccessModalOpen(false);
    clearCart();
    router.push("/san-pham");
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      <Header onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex-1 pb-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#E5E5E5]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm text-[#666666]">
              <Link href="/" className="hover:text-[#2D2D2D] transition-colors">
                Trang Chủ
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <Link href="/gio-hang" className="hover:text-[#2D2D2D] transition-colors">
                Giỏ Hàng
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#2D2D2D] font-semibold">Thanh Toán (Checkout)</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2D2D2D] tracking-tight">
                Thanh Toán Đơn Hàng
              </h1>
              <p className="text-xs sm:text-sm text-[#666666] mt-1">
                Vui lòng nhập thông tin giao hàng và xác nhận đơn hàng
              </p>
            </div>
          </div>

          {items.length === 0 && !isSuccessModalOpen ? (
            <div className="bg-white rounded-2xl border border-[#E5E5E5] p-10 text-center max-w-xl mx-auto shadow-xs">
              <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h2 className="text-lg font-bold text-[#2D2D2D] mb-2">
                Không có sản phẩm nào để thanh toán
              </h2>
              <p className="text-xs text-[#666666] mb-6">
                Giỏ hàng của bạn đang trống, hãy thêm sản phẩm trước khi thanh toán.
              </p>
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B5222A] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:bg-[#991C23] transition-colors"
              >
                Quay lại danh mục sản phẩm
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmitOrder}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Customer Information & Payment Method */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Customer Information Card */}
                  <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 sm:p-7 shadow-xs space-y-5">
                    <div className="flex items-center gap-2.5 border-b border-[#E5E5E5] pb-4">
                      <div className="w-8 h-8 rounded-full bg-[#B5222A]/10 text-[#B5222A] flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <h2 className="text-lg font-bold text-[#2D2D2D]">
                        Thông Tin Giao Hàng
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-[#2D2D2D] mb-1.5">
                          Họ và tên người nhận <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Ví dụ: Nguyễn Văn A"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) {
                              setErrors((prev) => ({ ...prev, fullName: undefined }));
                            }
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2D2D2D] placeholder:text-gray-400 focus:outline-none transition-colors ${
                            errors.fullName
                              ? "border-red-500 focus:border-red-500 bg-red-50/20"
                              : "border-[#E5E5E5] focus:border-[#B5222A]"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#2D2D2D] mb-1.5">
                            Số điện thoại nhận hàng <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            placeholder="Ví dụ: 0903409939"
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                              if (errors.phone) {
                                setErrors((prev) => ({ ...prev, phone: undefined }));
                              }
                            }}
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2D2D2D] placeholder:text-gray-400 focus:outline-none transition-colors ${
                              errors.phone
                                ? "border-red-500 focus:border-red-500 bg-red-50/20"
                                : "border-[#E5E5E5] focus:border-[#B5222A]"
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{errors.phone}</span>
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#2D2D2D] mb-1.5">
                            Email (Nhận thông báo đơn hàng)
                          </label>
                          <input
                            type="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] text-sm text-[#2D2D2D] placeholder:text-gray-400 focus:outline-none focus:border-[#B5222A] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Delivery Address */}
                      <div>
                        <label className="block text-xs font-bold text-[#2D2D2D] mb-1.5">
                          Địa chỉ nhận hàng chi tiết <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Số nhà, tên đường, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố"
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                            if (errors.address) {
                              setErrors((prev) => ({ ...prev, address: undefined }));
                            }
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#2D2D2D] placeholder:text-gray-400 focus:outline-none transition-colors ${
                            errors.address
                              ? "border-red-500 focus:border-red-500 bg-red-50/20"
                              : "border-[#E5E5E5] focus:border-[#B5222A]"
                          }`}
                        />
                        {errors.address && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.address}</span>
                          </p>
                        )}
                      </div>

                      {/* Order Note */}
                      <div>
                        <label className="block text-xs font-bold text-[#2D2D2D] mb-1.5">
                          Ghi chú đơn hàng (Tùy chọn)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Ghi chú thêm về thời gian giao hàng, địa chỉ cụ thể..."
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] text-sm text-[#2D2D2D] placeholder:text-gray-400 focus:outline-none focus:border-[#B5222A] transition-colors resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method Card */}
                  <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 sm:p-7 shadow-xs space-y-5">
                    <div className="flex items-center gap-2.5 border-b border-[#E5E5E5] pb-4">
                      <div className="w-8 h-8 rounded-full bg-[#B5222A]/10 text-[#B5222A] flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <h2 className="text-lg font-bold text-[#2D2D2D]">
                        Phương Thức Thanh Toán
                      </h2>
                    </div>

                    <div className="space-y-3.5">
                      {/* COD Option */}
                      <label
                        className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                          paymentMethod === "cod"
                            ? "border-[#B5222A] bg-red-50/30 ring-1 ring-[#B5222A]"
                            : "border-[#E5E5E5] hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={paymentMethod === "cod"}
                          onChange={() => setPaymentMethod("cod")}
                          className="mt-1 text-[#B5222A] focus:ring-[#B5222A]"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-[#B5222A]" />
                            <span className="font-bold text-sm text-[#2D2D2D]">
                              Thanh toán khi nhận hàng (COD)
                            </span>
                          </div>
                          <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                            Quý khách được kiểm tra sản phẩm trước khi thanh toán tiền mặt trực tiếp cho bưu tá giao hàng.
                          </p>
                        </div>
                      </label>

                      {/* Bank Transfer Option */}
                      <label
                        className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                          paymentMethod === "bank_transfer"
                            ? "border-[#B5222A] bg-red-50/30 ring-1 ring-[#B5222A]"
                            : "border-[#E5E5E5] hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bank_transfer"
                          checked={paymentMethod === "bank_transfer"}
                          onChange={() => setPaymentMethod("bank_transfer")}
                          className="mt-1 text-[#B5222A] focus:ring-[#B5222A]"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-[#B5222A]" />
                            <span className="font-bold text-sm text-[#2D2D2D]">
                              Chuyển khoản ngân hàng (VietQR / Internet Banking)
                            </span>
                          </div>
                          <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                            Chuyển khoản nhanh 24/7. Mã VietQR kèm số tiền và mã đơn hàng sẽ hiển thị ngay sau khi Quý khách xác nhận <strong>&ldquo;Đặt Hàng Ngay&rdquo;</strong>.
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Column: Order Review & Total Summary */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Order Summary & Product List */}
                  <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 sm:p-7 shadow-xs space-y-5">
                    <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
                      <h2 className="text-lg font-bold text-[#2D2D2D]">
                        Đơn Hàng ({items.reduce((acc, it) => acc + it.quantity, 0)})
                      </h2>
                      <Link
                        href="/gio-hang"
                        className="text-xs text-[#B5222A] hover:underline font-semibold flex items-center gap-1"
                      >
                        <span>Sửa giỏ hàng</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Product Items List */}
                    <div className="space-y-3.5 max-h-72 overflow-y-auto pr-1 divide-y divide-gray-100">
                      {items.map(({ product, quantity, selectedOption }) => {
                        const unitPrice = parsePriceToNumber(product.price);
                        const itemSubtotal = unitPrice * quantity;

                        return (
                          <div
                            key={`${product.id}-${selectedOption || ""}`}
                            className="pt-3 first:pt-0 flex items-center gap-3.5"
                          >
                            <div className="relative w-14 h-14 bg-[#F8F8F8] rounded-lg overflow-hidden shrink-0 border border-[#E5E5E5]">
                              <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                sizes="56px"
                                className="object-contain p-1"
                              />
                              <span className="absolute bottom-0 right-0 bg-[#2D2D2D] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-tl-md">
                                x{quantity}
                              </span>
                            </div>

                            <div className="flex-1 min-w-0">
                              <h3 className="text-xs font-semibold text-[#2D2D2D] line-clamp-1">
                                {product.title}
                              </h3>
                              {selectedOption && (
                                <p className="text-[11px] text-[#666666] line-clamp-1 mt-0.5">
                                  Quy cách: {selectedOption}
                                </p>
                              )}
                              <p className="text-xs font-bold text-[#B5222A] mt-1">
                                {formatNumberToVnd(itemSubtotal)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Coupon Input Form */}
                    <div className="pt-2 border-t border-[#E5E5E5]">
                      {appliedCoupon ? (
                        <div className="flex items-center justify-between p-3 bg-red-50/60 rounded-xl border border-red-200">
                          <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4 text-[#B5222A]" />
                            <div>
                              <p className="text-xs font-bold text-[#B5222A]">
                                Mã: {appliedCoupon.code}
                              </p>
                              <p className="text-[11px] text-[#666666]">
                                {appliedCoupon.label} (-{formatNumberToVnd(appliedCoupon.discountAmount)})
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={handleRemoveCoupon}
                            className="text-xs font-semibold text-red-600 hover:text-red-800 underline ml-2"
                          >
                            Gỡ bỏ
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="Mã giảm giá (ví dụ: NAKOREA)"
                              value={couponInput}
                              onChange={(e) => setCouponInput(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  handleApplyCoupon();
                                }
                              }}
                              className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#E5E5E5] text-xs uppercase placeholder:normal-case placeholder:text-gray-400 focus:outline-none focus:border-[#B5222A]"
                            />
                            <button
                              type="button"
                              onClick={() => handleApplyCoupon()}
                              className="px-4 py-2.5 bg-[#2D2D2D] text-white text-xs font-bold rounded-xl hover:bg-black transition-colors shrink-0"
                            >
                              Áp dụng
                            </button>
                          </div>
                          {couponError && (
                            <p className="text-xs text-red-500 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{couponError}</span>
                            </p>
                          )}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            <button
                              type="button"
                              onClick={() => {
                                setCouponInput("NAKOREA");
                              }}
                              className="text-[10px] px-2 py-0.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium"
                            >
                              Mã NAKOREA (-10%)
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setCouponInput("KIMS50");
                              }}
                              className="text-[10px] px-2 py-0.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium"
                            >
                              Mã KIMS50 (-50k)
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Price Breakdown Calculation */}
                    <div className="space-y-2.5 border-t border-[#E5E5E5] pt-4 text-xs sm:text-sm">
                      <div className="flex justify-between text-[#666666]">
                        <span>Tạm tính tiền hàng:</span>
                        <span className="font-semibold text-[#2D2D2D]">
                          {formatNumberToVnd(totalPrice)}
                        </span>
                      </div>

                      <div className="flex justify-between text-[#666666]">
                        <span className="flex items-center gap-1">
                          <Truck className="w-3.5 h-3.5 text-green-600" />
                          <span>Phí vận chuyển toàn quốc:</span>
                        </span>
                        <span className="font-semibold text-green-600">Miễn phí</span>
                      </div>

                      {discountAmount > 0 && (
                        <div className="flex justify-between text-[#B5222A]">
                          <span>Giảm giá khuyến mãi:</span>
                          <span className="font-bold">
                            -{formatNumberToVnd(discountAmount)}
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between items-baseline border-t border-[#E5E5E5] pt-3 text-base">
                        <div>
                          <span className="font-bold text-[#2D2D2D]">Tổng thanh toán:</span>
                          <p className="text-[11px] text-[#666666] font-normal">
                            (Đã bao gồm thuế VAT)
                          </p>
                        </div>
                        <span className="text-xl sm:text-2xl font-extrabold text-[#B5222A]">
                          {formattedFinalTotal}
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || items.length === 0}
                      className={`w-full py-4 rounded-xl text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md ${
                        isSubmitting || items.length === 0
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#B5222A] hover:bg-[#991C23] hover:shadow-lg active:scale-[0.99]"
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Đang xử lý đơn hàng...</span>
                        </span>
                      ) : (
                        <span>Đặt Hàng Ngay</span>
                      )}
                    </button>

                    <div className="space-y-2 pt-2 text-center text-[11px] text-[#666666]">
                      <div className="flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-green-600" />
                        <span>Bảo mật thông tin khách hàng tuyệt đối</span>
                      </div>
                      <p>
                        Bằng việc bấm Đặt hàng, Quý khách đồng ý với các{" "}
                        <Link href="/chinh-sach-giao-hang" className="text-[#B5222A] hover:underline">
                          Điều khoản mua hàng
                        </Link>{" "}
                        của Na Korea.
                      </p>
                    </div>
                  </div>

                  {/* Return to cart button */}
                  <Link
                    href="/gio-hang"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#666666] hover:text-[#B5222A] transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Quay lại giỏ hàng</span>
                  </Link>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />

      {/* Order Success Confirmation Modal */}
      <OrderSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseModal}
        onContinueShopping={handleContinueShopping}
        orderDetails={completedOrder}
      />
    </div>
  );
}
