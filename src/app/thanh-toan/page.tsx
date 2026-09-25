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
  QrCode,
  Copy,
  Check,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileDrawer } from "@/components/MobileDrawer";
import { OrderSuccessModal, OrderDetails } from "@/components/OrderSuccessModal";
import { useCart, parsePriceToNumber, formatNumberToVnd } from "@/context/CartContext";
import { SITE_CONFIG } from "@/lib/siteConfig";

const VALID_COUPONS: Record<
  string,
  { type: "percent" | "fixed"; value: number; label: string }
> = {
  NAKOREA: { type: "percent", value: 10, label: "Giảm 10% tổng đơn hàng" },
  KIMS50: { type: "fixed", value: 50000, label: "Giảm 50.000₫" },
  TRIAN: { type: "fixed", value: 100000, label: "Giảm 100.000₫ cho khách hàng thân thiết" },
};

export default function ThanhToanPage() {
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
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Calculate discounts and totals
  const discountAmount = appliedCoupon ? appliedCoupon.discountAmount : 0;
  const finalTotalNumber = Math.max(0, totalPrice - discountAmount);
  const formattedFinalTotal = formatNumberToVnd(finalTotalNumber);

  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const qrMemo = cleanPhone ? `NAK ${cleanPhone}` : "NAK DATHANG";
  const vietQrUrl = `https://img.vietqr.io/image/${SITE_CONFIG.bankInfo.bankId}-${SITE_CONFIG.bankInfo.accountNumber}-compact2.png?amount=${finalTotalNumber}&addInfo=${encodeURIComponent(
    qrMemo
  )}&accountName=${encodeURIComponent(SITE_CONFIG.bankInfo.accountHolderAscii)}`;

  const handleCopy = (text: string, field: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

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
                  <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 sm:p-8 shadow-xs space-y-5">
                    <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
                      <h2 className="text-lg font-bold text-[#2D2D2D]">
                        Thông Tin Nhận Hàng
                      </h2>
                      <span className="text-xs text-[#B5222A] font-medium">
                        * Thông tin bắt buộc
                      </span>
                    </div>

                    <div className="space-y-4">
                      {/* Họ và tên */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-bold uppercase tracking-wider text-[#2D2D2D] mb-1.5"
                        >
                          Họ và tên <span className="text-[#B5222A]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) {
                              setErrors((prev) => ({ ...prev, fullName: undefined }));
                            }
                          }}
                          placeholder="Nguyễn Văn A"
                          className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#B5222A]/20 ${
                            errors.fullName
                              ? "border-red-500 bg-red-50/20"
                              : "border-[#E5E5E5] focus:border-[#B5222A]"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Số điện thoại & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Số điện thoại */}
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-xs font-bold uppercase tracking-wider text-[#2D2D2D] mb-1.5"
                          >
                            Số điện thoại <span className="text-[#B5222A]">*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                              if (errors.phone) {
                                setErrors((prev) => ({ ...prev, phone: undefined }));
                              }
                            }}
                            placeholder="0912 345 678"
                            className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#B5222A]/20 ${
                              errors.phone
                                ? "border-red-500 bg-red-50/20"
                                : "border-[#E5E5E5] focus:border-[#B5222A]"
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{errors.phone}</span>
                            </p>
                          )}
                        </div>

                        {/* Email (không bắt buộc) */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs font-bold uppercase tracking-wider text-[#2D2D2D] mb-1.5"
                          >
                            Email <span className="text-[#666666] font-normal normal-case">(không bắt buộc)</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@gmail.com"
                            className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] text-sm focus:border-[#B5222A] focus:outline-none focus:ring-2 focus:ring-[#B5222A]/20"
                          />
                        </div>
                      </div>

                      {/* Địa chỉ nhận hàng */}
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-xs font-bold uppercase tracking-wider text-[#2D2D2D] mb-1.5"
                        >
                          Địa chỉ nhận hàng <span className="text-[#B5222A]">*</span>
                        </label>
                        <input
                          id="address"
                          type="text"
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                            if (errors.address) {
                              setErrors((prev) => ({ ...prev, address: undefined }));
                            }
                          }}
                          placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành phố"
                          className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#B5222A]/20 ${
                            errors.address
                              ? "border-red-500 bg-red-50/20"
                              : "border-[#E5E5E5] focus:border-[#B5222A]"
                          }`}
                        />
                        {errors.address && (
                          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.address}</span>
                          </p>
                        )}
                      </div>

                      {/* Ghi chú đơn hàng */}
                      <div>
                        <label
                          htmlFor="note"
                          className="block text-xs font-bold uppercase tracking-wider text-[#2D2D2D] mb-1.5"
                        >
                          Ghi chú đơn hàng <span className="text-[#666666] font-normal normal-case">(không bắt buộc)</span>
                        </label>
                        <textarea
                          id="note"
                          rows={3}
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          placeholder="Ghi chú về thời gian giao hàng, yêu cầu đóng gói quà tặng, thiệp chúc mừng..."
                          className="w-full px-4 py-3 rounded-lg border border-[#E5E5E5] text-sm focus:border-[#B5222A] focus:outline-none focus:ring-2 focus:ring-[#B5222A]/20 resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Notice */}
                  <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-emerald-900">
                        Vận chuyển tiêu chuẩn: Miễn phí toàn quốc
                      </div>
                      <div className="text-xs text-emerald-700 mt-0.5">
                        Na Korea giao hàng miễn phí tận nơi trên toàn quốc cho tất cả đơn hàng.
                      </div>
                    </div>
                  </div>

                  {/* Payment Method Card */}
                  <div className="bg-white rounded-2xl border border-[#E5E5E5] p-6 sm:p-8 shadow-xs space-y-5">
                    <h2 className="text-lg font-bold text-[#2D2D2D] border-b border-[#E5E5E5] pb-4">
                      Phương Thức Thanh Toán
                    </h2>

                    <div className="space-y-3">
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
                            Chuyển khoản nhanh qua ngân hàng. Nhân viên Na Korea sẽ liên hệ ngay sau khi nhận được đơn để xác nhận.
                          </p>

                          {/* Bank details expansion when selected */}
                          {paymentMethod === "bank_transfer" && (
                            <div className="mt-4 p-4 rounded-xl bg-white border border-[#E5E5E5] text-xs space-y-3.5 text-[#4B4F52] shadow-xs">
                              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                                <div className="font-bold text-[#2D2D2D] text-xs flex items-center gap-1.5">
                                  <QrCode className="w-4 h-4 text-[#B5222A]" />
                                  <span>Mã VietQR thanh toán nhanh:</span>
                                </div>
                                <span className="text-[10px] font-semibold text-[#B5222A] bg-red-50 px-2 py-0.5 rounded-md">
                                  Chính thức MB Bank
                                </span>
                              </div>

                              <div className="flex flex-col sm:flex-row gap-4 items-center">
                                {/* VietQR Code Preview */}
                                <div className="flex flex-col items-center shrink-0">
                                  <div className="relative w-40 h-40 bg-white rounded-lg overflow-hidden border border-gray-200 p-1 shadow-xs">
                                    <Image
                                      src={vietQrUrl}
                                      alt="Mã VietQR chuyển khoản Na Korea"
                                      width={160}
                                      height={160}
                                      className="w-full h-full object-contain"
                                      unoptimized
                                    />
                                  </div>
                                  <span className="text-[10px] text-gray-500 mt-1 font-medium flex items-center gap-1">
                                    <CheckCircle2 className="w-3 h-3 text-green-600 inline" /> Tự động điền tiền & nội dung
                                  </span>
                                </div>

                                {/* Bank Details With Copy */}
                                <div className="flex-1 w-full space-y-2 text-xs">
                                  <div className="bg-[#F8F8F8] p-2.5 rounded-lg border border-gray-100">
                                    <div className="text-[10px] uppercase font-bold text-gray-400">Ngân hàng</div>
                                    <div className="font-bold text-[#2D2D2D]">{SITE_CONFIG.bankInfo.bankName}</div>
                                  </div>

                                  <div className="bg-[#F8F8F8] p-2.5 rounded-lg border border-gray-100 flex items-center justify-between">
                                    <div>
                                      <div className="text-[10px] uppercase font-bold text-gray-400">Số tài khoản</div>
                                      <div className="font-mono font-bold text-[#B5222A] text-sm tracking-wide">
                                        {SITE_CONFIG.bankInfo.accountNumber}
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleCopy(SITE_CONFIG.bankInfo.accountNumber, "stk");
                                      }}
                                      className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 flex items-center gap-1 transition-colors"
                                    >
                                      {copiedField === "stk" ? (
                                        <>
                                          <Check className="w-3.5 h-3.5 text-green-600" />
                                          <span className="text-green-600">Đã chép</span>
                                        </>
                                      ) : (
                                        <>
                                          <Copy className="w-3.5 h-3.5 text-gray-500" />
                                          <span>Sao chép</span>
                                        </>
                                      )}
                                    </button>
                                  </div>

                                  <div className="bg-[#F8F8F8] p-2.5 rounded-lg border border-gray-100">
                                    <div className="text-[10px] uppercase font-bold text-gray-400">Chủ tài khoản</div>
                                    <div className="font-bold text-[#2D2D2D] uppercase">{SITE_CONFIG.bankInfo.accountHolder}</div>
                                  </div>

                                  <div className="bg-amber-50/80 p-2.5 rounded-lg border border-amber-200/80 flex items-center justify-between">
                                    <div>
                                      <div className="text-[10px] uppercase font-bold text-amber-800">Nội dung chuyển khoản</div>
                                      <div className="font-mono font-bold text-[#B5222A] text-xs sm:text-sm">{qrMemo}</div>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleCopy(qrMemo, "memo");
                                      }}
                                      className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-white border border-amber-300 hover:bg-amber-50 text-amber-900 flex items-center gap-1 transition-colors"
                                    >
                                      {copiedField === "memo" ? (
                                        <>
                                          <Check className="w-3.5 h-3.5 text-green-600" />
                                          <span className="text-green-600">Đã chép</span>
                                        </>
                                      ) : (
                                        <>
                                          <Copy className="w-3.5 h-3.5 text-amber-700" />
                                          <span>Sao chép</span>
                                        </>
                                      )}
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div className="text-[11px] text-[#666666] leading-relaxed bg-[#F8F8F8] p-2 rounded-lg border border-gray-100">
                                💡 Quý khách có thể quét QR thanh toán ngay bây giờ hoặc nhấn <strong>"Đặt Hàng Ngay"</strong> để quét mã QR kèm theo mã đơn hàng tại bước xác nhận.
                              </div>
                            </div>
                          )}
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
                              <h3 className="text-xs font-bold text-[#2D2D2D] line-clamp-1 leading-snug">
                                {product.title}
                              </h3>
                              {selectedOption && (
                                <p className="text-[11px] text-[#666666]">
                                  Quy cách: {selectedOption}
                                </p>
                              )}
                              <p className="text-xs text-[#B5222A] font-semibold mt-0.5">
                                {formatNumberToVnd(itemSubtotal)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Voucher Input */}
                    <div className="pt-4 border-t border-[#E5E5E5] space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2D2D]">
                        Mã giảm giá (nếu có)
                      </label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Tag className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={couponInput}
                            onChange={(e) => setCouponInput(e.target.value)}
                            placeholder="Nhập mã giảm giá..."
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#E5E5E5] text-xs font-medium uppercase tracking-wider focus:border-[#B5222A] focus:outline-none"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => handleApplyCoupon()}
                          className="px-4 py-2.5 bg-[#2D2D2D] hover:bg-[#B5222A] text-white text-xs font-bold rounded-lg transition-colors"
                        >
                          Áp dụng
                        </button>
                      </div>

                      {/* Coupon Feedback */}
                      {couponError && (
                        <p className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{couponError}</span>
                        </p>
                      )}

                      {appliedCoupon && (
                        <div className="flex items-center justify-between p-2.5 bg-green-50 border border-green-200 rounded-lg text-xs text-green-800">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                            <span>
                              Mã <strong>{appliedCoupon.code}</strong> (-{formatNumberToVnd(appliedCoupon.discountAmount)})
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={handleRemoveCoupon}
                            className="text-xs text-red-600 hover:underline font-semibold"
                          >
                            Gỡ bỏ
                          </button>
                        </div>
                      )}

                      {/* Promo Hint */}
                      <p className="text-[11px] text-[#888888]">
                        Gợi ý mã khuyến mãi: <span className="font-semibold text-[#B5222A]">NAKOREA</span> (giảm 10%), <span className="font-semibold text-[#B5222A]">KIMS50</span> (giảm 50k)
                      </p>
                    </div>

                    {/* Price Breakdown */}
                    <div className="pt-4 border-t border-[#E5E5E5] space-y-2.5 text-sm">
                      <div className="flex items-center justify-between text-[#666666]">
                        <span>Tạm tính:</span>
                        <span className="font-semibold text-[#2D2D2D]">
                          {formatNumberToVnd(totalPrice)}
                        </span>
                      </div>

                      {appliedCoupon && (
                        <div className="flex items-center justify-between text-green-600">
                          <span>Giảm giá:</span>
                          <span className="font-bold">
                            -{formatNumberToVnd(discountAmount)}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center justify-between text-[#666666]">
                        <span>Phí vận chuyển:</span>
                        <span className="font-bold text-green-600">Miễn phí</span>
                      </div>

                      <div className="border-t border-[#E5E5E5] pt-3.5 flex items-baseline justify-between">
                        <span className="text-base font-bold text-[#2D2D2D]">
                          Tổng giá trị đơn hàng:
                        </span>
                        <div className="text-right">
                          <span className="text-2xl font-extrabold text-[#B5222A]">
                            {formattedFinalTotal}
                          </span>
                          <div className="text-[11px] text-[#666666]">Đã bao gồm VAT</div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button: Đặt hàng */}
                    <button
                      type="submit"
                      disabled={isSubmitting || items.length === 0}
                      className="na-btn-primary w-full py-4 text-base tracking-wider disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>Đang xử lý đặt hàng...</span>
                      ) : (
                        <span>ĐẶT HÀNG NGAY</span>
                      )}
                    </button>

                    {/* Return link */}
                    <div className="text-center pt-2">
                      <Link
                        href="/gio-hang"
                        className="text-xs text-[#666666] hover:text-[#2D2D2D] inline-flex items-center gap-1.5"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Quay lại kiểm tra giỏ hàng</span>
                      </Link>
                    </div>

                    {/* Trust badges */}
                    <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-center gap-2 text-[11px] text-[#666666]">
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                      <span>Bảo mật thông tin khách hàng tuyệt đối</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />

      {/* Order Success Popup */}
      <OrderSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseModal}
        onContinueShopping={handleContinueShopping}
        orderDetails={completedOrder}
      />
    </div>
  );
}
