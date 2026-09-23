export const BRAND_LOGOS = {
  // Logo bố cục dọc chuẩn (Vertical standard)
  vertical: "/images/logos/logo-vertical.png",
  // Logo bố cục dọc độ nét cao (Vertical HD)
  verticalHd: "/images/logos/logo-vertical-hd.png",
  // Logo bố cục ngang chuẩn (Horizontal layout - nền sáng)
  horizontal: "/images/logos/logo-horizontal.png",
  // Logo bố cục ngang chữ trắng (Horizontal layout - nền tối)
  horizontalWhite: "/images/logos/logo-horizontal-white.png",
  // Logo chữ trắng SINCE 1986 (SINCE 1986 typography - nền tối/footer)
  since1986White: "/images/logos/logo-since1986-white.png",
  // Logo nền tím mận (Purple background badge)
  purpleBg: "/images/logos/logo-purple-bg.jpg",
  // Logo dọc chữ trắng (White text vertical)
  whiteText: "/images/logos/logo-white-text.png",
} as const;

export type BrandLogoKey = keyof typeof BRAND_LOGOS;
