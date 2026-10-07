export interface Voucher {
  code: string;
  title: string;
  description: string;
  type: "percent" | "fixed";
  value: number;
  minSpend: number;
  badge?: string;
  expiryDate: string;
  terms: string;
}

export const SYSTEM_VOUCHERS: Voucher[] = [
  {
    code: "KIMS50K",
    title: "Voucher 50K",
    description: "Giảm 50.000₫ cho mọi đơn hàng (Không giới hạn đơn tối thiểu)",
    type: "fixed",
    value: 50000,
    minSpend: 0,
    badge: "Dễ dùng nhất",
    expiryDate: "2026-12-31",
    terms: "Áp dụng cho mọi đơn hàng không giới hạn giá trị tối thiểu.",
  },
  {
    code: "BANMOI80",
    title: "Voucher 80K",
    description: "Giảm 80.000₫ cho đơn Online đầu tiên từ 399.000₫",
    type: "fixed",
    value: 80000,
    minSpend: 399000,
    badge: "Khách hàng mới",
    expiryDate: "2026-12-31",
    terms: "Áp dụng cho khách hàng mới và đơn hàng từ 399.000₫ trở lên.",
  },
  {
    code: "NAKOREA10",
    title: "Voucher 10%",
    description: "Giảm 10% tổng giá trị đơn hàng từ 1.000.000₫",
    type: "percent",
    value: 10,
    minSpend: 1000000,
    badge: "Bán chạy nhất",
    expiryDate: "2026-12-31",
    terms: "Giảm 10% trên tổng giá trị đơn hàng đạt từ 1.000.000₫ trở lên.",
  },
  {
    code: "PUNGGI100K",
    title: "Voucher 100K",
    description: "Giảm 100.000₫ cho đơn từ 1.500.000₫",
    type: "fixed",
    value: 100000,
    minSpend: 1500000,
    badge: "Ưu đãi Punggi",
    expiryDate: "2026-12-31",
    terms: "Áp dụng cho đơn hàng từ 1.500.000₫ trở lên.",
  },
  {
    code: "HONGSAMKIM",
    title: "Voucher 15%",
    description: "Giảm 15% đặc quyền cho đơn Hồng Sâm từ 2.000.000₫",
    type: "percent",
    value: 15,
    minSpend: 2000000,
    badge: "Đặc quyền Hồng Sâm",
    expiryDate: "2026-12-31",
    terms: "Giảm 15% trên tổng giá trị đơn hàng đạt từ 2.000.000₫ trở lên.",
  },
  {
    code: "VIP200K",
    title: "Voucher 200K",
    description: "Giảm 200.000₫ tri ân khách hàng thân thiết cho đơn từ 3.000.000₫",
    type: "fixed",
    value: 200000,
    minSpend: 3000000,
    badge: "Khách hàng VIP",
    expiryDate: "2026-12-31",
    terms: "Áp dụng cho đơn hàng từ 3.000.000₫ trở lên.",
  },
];

/**
 * Smart helper to find or generate a fallback mock voucher for test codes
 */
export function findOrCreateVoucher(inputCode: string): Voucher {
  const clean = inputCode.trim().toUpperCase();
  const existing = SYSTEM_VOUCHERS.find((v) => v.code === clean);
  if (existing) return existing;

  // Generic fallback for any user-typed test code
  return {
    code: clean,
    title: `Voucher ${clean}`,
    description: `Mã ưu đãi thử nghiệm [${clean}] giảm 50.000₫ cho đơn hàng`,
    type: "fixed",
    value: 50000,
    minSpend: 0,
    badge: "Mã thử nghiệm",
    expiryDate: "2026-12-31",
    terms: "Mã ưu đãi datamock phục vụ kiểm thử luồng thanh toán.",
  };
}
