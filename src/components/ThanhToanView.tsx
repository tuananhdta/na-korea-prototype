"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  ChevronRight,
  ChevronDown,
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
import { VoucherModal, Voucher } from "@/components/VoucherModal";
import { useCart, parsePriceToNumber, formatNumberToVnd } from "@/context/CartContext";

const VALID_COUPONS: Record<
  string,
  { type: "percent" | "fixed"; value: number; label: string }
> = {
  BANMOI80: { type: "fixed", value: 80000, label: "Giảm 80.000₫" },
  CANIFA50: { type: "fixed", value: 50000, label: "Giảm 50.000₫" },
  KIMS50: { type: "fixed", value: 50000, label: "Giảm 50.000₫" },
  NAKOREA: { type: "percent", value: 10, label: "Giảm 10% tổng đơn hàng" },
  TRIAN: { type: "fixed", value: 100000, label: "Giảm 100.000₫ cho khách hàng thân thiết" },
};

export function ThanhToanView() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, totalPrice, clearCart } = useCart();

  // Form Fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Coupon / Voucher modal state
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);
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

  // Form completion check (All delivery & payment fields must be filled)
  const isFormComplete =
    fullName.trim().length > 0 &&
    phone.trim().length >= 9 &&
    address.trim().length > 0 &&
    Boolean(paymentMethod);

  const isButtonDisabled = isSubmitting || items.length === 0 || !isFormComplete;

  // Restore applied voucher from localStorage on mount
  useEffect(() => {
    try {
      const savedStr = localStorage.getItem("kims_applied_voucher");
      if (savedStr) {
        const voucher: Voucher = JSON.parse(savedStr);
        let calculatedDiscount = 0;
        if (voucher.type === "percent") {
          calculatedDiscount = Math.round((totalPrice * voucher.value) / 100);
        } else {
          calculatedDiscount = Math.min(totalPrice, voucher.value);
        }
        setAppliedCoupon({
          code: voucher.code,
          discountAmount: calculatedDiscount,
          label: voucher.title,
        });
      }
    } catch {}
  }, [totalPrice]);

  const handleApplyVoucher = (voucher: Voucher) => {
    let calculatedDiscount = 0;
    if (voucher.type === "percent") {
      calculatedDiscount = Math.round((totalPrice * voucher.value) / 100);
    } else {
      calculatedDiscount = Math.min(totalPrice, voucher.value);
    }

    setAppliedCoupon({
      code: voucher.code,
      discountAmount: calculatedDiscount,
      label: voucher.title,
    });
    try {
      localStorage.setItem("kims_applied_voucher", JSON.stringify(voucher));
    } catch {}
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    try {
      localStorage.removeItem("kims_applied_voucher");
    } catch {}
  };

  const validateForm = () => {
    const newErrors: {
      fullName?: string;
      phone?: string;
      address?: string;
    } = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập tên người nhận";
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
      address: address.trim(),
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
    try {
      localStorage.removeItem("kims_applied_voucher");
    } catch {}
    clearCart();
    router.push("/");
  };

  const handleContinueShopping = () => {
    setIsSuccessModalOpen(false);
    try {
      localStorage.removeItem("kims_applied_voucher");
    } catch {}
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
        <div className="bg-white border-b border-[#EEEEEE]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm text-[#666666]">
              <Link href="/" className="hover:text-[#111111] transition-colors">
                Trang Chủ
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <Link href="/gio-hang" className="hover:text-[#111111] transition-colors">
                Giỏ Hàng
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#111111] font-semibold">Thanh Toán (Checkout)</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                Thanh Toán Đơn Hàng
              </h1>
              <p className="text-xs sm:text-sm text-[#666666] mt-1">
                Vui lòng nhập thông tin giao hàng và xác nhận đơn hàng
              </p>
            </div>
          </div>

          {items.length === 0 && !isSuccessModalOpen ? (
            <div className="bg-white rounded-2xl border border-[#EEEEEE] p-10 text-center max-w-xl mx-auto shadow-xs">
              <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h2 className="text-lg font-bold text-[#111111] mb-2">
                Không có sản phẩm nào để thanh toán
              </h2>
              <p className="text-xs text-[#666666] mb-6">
                Giỏ hàng của bạn đang trống, hãy thêm sản phẩm trước khi thanh toán.
              </p>
              <Link
                href="/san-pham"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4B193E] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:bg-[#3A1230] transition-colors"
              >
                Quay lại danh mục sản phẩm
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmitOrder}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Column: Customer Information & Payment Method Form (50%) */}
                <div>
                  <div className="bg-white rounded-2xl border border-[#EEEEEE] p-6 sm:p-7 shadow-xs space-y-5">
                    <div className="flex items-center gap-2.5 border-b border-[#EEEEEE] pb-4">
                      <Truck className="w-5 h-5 text-[#4B193E]" />
                      <h2 className="text-lg font-bold text-[#111111]">
                        Thông Tin Giao Hàng &amp; Thanh Toán
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-[#111111] mb-1.5">
                          Tên người nhận <span className="text-red-500">*</span>
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
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none transition-colors ${
                            errors.fullName
                              ? "border-red-500 focus:border-red-500 bg-red-50/20"
                              : "border-[#EEEEEE] focus:border-[#4B193E]"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold text-[#111111] mb-1.5">
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
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none transition-colors ${
                            errors.phone
                              ? "border-red-500 focus:border-red-500 bg-red-50/20"
                              : "border-[#EEEEEE] focus:border-[#4B193E]"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      {/* Delivery Address */}
                      <div>
                        <label className="block text-xs font-bold text-[#111111] mb-1.5">
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
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none transition-colors ${
                            errors.address
                              ? "border-red-500 focus:border-red-500 bg-red-50/20"
                              : "border-[#EEEEEE] focus:border-[#4B193E]"
                          }`}
                        />
                        {errors.address && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.address}</span>
                          </p>
                        )}
                      </div>

                      {/* Payment Method Select (Placed right below Delivery Address) */}
                      <div>
                        <label className="block text-xs font-bold text-[#111111] mb-1.5">
                          Phương thức thanh toán <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={paymentMethod}
                            onChange={(e) =>
                              setPaymentMethod(e.target.value as "cod" | "bank_transfer")
                            }
                            className="w-full px-4 py-3 pr-10 rounded-xl border border-[#EEEEEE] text-sm text-[#111111] bg-white focus:outline-none focus:border-[#4B193E] transition-colors appearance-none cursor-pointer"
                          >
                            <option value="cod">Thanh toán khi nhận hàng (COD)</option>
                            <option value="bank_transfer">
                              Chuyển khoản ngân hàng (VietQR / Internet Banking)
                            </option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-gray-500">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Helper Note for Selected Payment Method */}
                        <div className="mt-2.5 p-3.5 bg-[#F8F8F8] rounded-xl border border-[#EEEEEE] flex items-start gap-2.5 text-xs text-[#666666]">
                          {paymentMethod === "cod" ? (
                            <>
                              <CreditCard className="w-4 h-4 text-[#4B193E] shrink-0 mt-0.5" />
                              <p className="leading-relaxed">
                                Quý khách được kiểm tra sản phẩm trước khi thanh toán tiền mặt trực tiếp cho bưu tá giao hàng.
                              </p>
                            </>
                          ) : (
                            <>
                              <Building2 className="w-4 h-4 text-[#4B193E] shrink-0 mt-0.5" />
                              <p className="leading-relaxed">
                                Chuyển khoản nhanh 24/7. Mã VietQR kèm số tiền và mã đơn hàng sẽ hiển thị ngay sau khi Quý khách xác nhận <strong>&ldquo;Đặt Hàng Ngay&rdquo;</strong>.
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Order Review & Total Summary (50%) */}
                <div className="space-y-6">
                  {/* Order Summary & Product List */}
                  <div className="bg-white rounded-2xl border border-[#EEEEEE] p-6 sm:p-7 shadow-xs space-y-5">
                    <div className="flex items-center justify-between border-b border-[#EEEEEE] pb-4">
                      <h2 className="text-lg font-bold text-[#111111]">
                        Đơn Hàng ({items.reduce((acc, it) => acc + it.quantity, 0)})
                      </h2>
                      <Link
                        href="/gio-hang"
                        className="text-xs text-[#4B193E] hover:underline font-semibold flex items-center gap-1"
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
                            <div className="relative w-14 h-14 bg-[#F8F8F8] rounded-lg overflow-hidden shrink-0 border border-[#EEEEEE]">
                              <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                sizes="56px"
                                className="object-contain p-1"
                              />
                              <span className="absolute bottom-0 right-0 bg-[#111111] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-tl-md">
                                x{quantity}
                              </span>
                            </div>

                            <div className="flex-1 min-w-0">
                              <h3 className="text-xs font-semibold text-[#111111] line-clamp-1">
                                {product.title}
                              </h3>
                              {selectedOption && (
                                <p className="text-[11px] text-[#666666] line-clamp-1 mt-0.5">
                                  Quy cách: {selectedOption}
                                </p>
                              )}
                              <p className="text-xs font-bold text-[#4B193E] mt-1">
                                {formatNumberToVnd(itemSubtotal)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Coupon / Voucher Selection */}
                    <div className="pt-2 border-t border-[#EEEEEE]">
                      {appliedCoupon ? (
                        <div className="flex items-center justify-between p-3.5 bg-[#FDF8F8] rounded-xl border border-[#B5222A]/20">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Tag className="w-4 h-4 text-[#B5222A] shrink-0" />
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-[#B5222A] truncate">
                                Mã: {appliedCoupon.code}
                              </p>
                              <p className="text-[11px] text-[#666666] truncate">
                                {appliedCoupon.label} (-{formatNumberToVnd(appliedCoupon.discountAmount)})
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0 ml-2">
                            <button
                              type="button"
                              onClick={() => setIsVoucherModalOpen(true)}
                              className="text-xs font-semibold text-[#111111] hover:underline cursor-pointer"
                            >
                              Đổi mã
                            </button>
                            <button
                              type="button"
                              onClick={handleRemoveCoupon}
                              className="text-xs font-semibold text-red-600 hover:text-red-800 underline cursor-pointer"
                            >
                              Gỡ
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setIsVoucherModalOpen(true)}
                          className="w-full flex items-center justify-between p-3.5 bg-[#FAFAFA] hover:bg-[#F3F4F6] border border-[#EEEEEE] rounded-xl text-xs sm:text-[13px] text-[#111111] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            <Tag className="w-4 h-4 text-[#B5222A]" />
                            <span className="font-semibold">Mã ưu đãi</span>
                          </div>
                          <div className="flex items-center gap-1 text-[#666666]">
                            <span>Chọn hoặc nhập mã</span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </button>
                      )}
                    </div>

                    {/* Price Breakdown Calculation */}
                    <div className="space-y-2.5 border-t border-[#EEEEEE] pt-4 text-xs sm:text-sm">
                      <div className="flex justify-between text-[#666666]">
                        <span>Tạm tính tiền hàng:</span>
                        <span className="font-semibold text-[#111111]">
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
                        <div className="flex justify-between text-[#4B193E]">
                          <span>Giảm giá khuyến mãi:</span>
                          <span className="font-bold">
                            -{formatNumberToVnd(discountAmount)}
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between items-baseline border-t border-[#EEEEEE] pt-3 text-base">
                        <div>
                          <span className="font-bold text-[#111111]">Tổng thanh toán:</span>
                          <p className="text-[11px] text-[#666666] font-normal">
                            (Đã bao gồm thuế VAT)
                          </p>
                        </div>
                        <span className="text-xl sm:text-2xl font-extrabold text-[#4B193E]">
                          {formattedFinalTotal}
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isButtonDisabled}
                      className={`w-full py-4 rounded-xl text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md ${
                        isButtonDisabled
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
                          : "bg-[#4B193E] hover:bg-[#3A1230] hover:shadow-lg active:scale-[0.99] cursor-pointer"
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
                        <Link href="/chinh-sach-giao-hang" className="text-[#4B193E] hover:underline">
                          Điều khoản mua hàng
                        </Link>{" "}
                        của Na Korea.
                      </p>
                    </div>
                  </div>

                  {/* Return to cart button */}
                  <Link
                    href="/gio-hang"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#666666] hover:text-[#4B193E] transition-colors"
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

      {/* Discount Voucher Selector Modal */}
      <VoucherModal
        isOpen={isVoucherModalOpen}
        onClose={() => setIsVoucherModalOpen(false)}
        onApply={handleApplyVoucher}
        currentCode={appliedCoupon?.code}
        orderTotal={totalPrice}
      />
    </div>
  );
}
