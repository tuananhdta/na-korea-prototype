# 📖 Quy Tắc Typography & Font Size Chuẩn JungKwanJang (NA Korea)

> **Tài liệu chuẩn hóa Typography & Sizing** được trích xuất trực tiếp từ mã nguồn CSS của website chính thức **[JungKwanJang](https://jungkwanjang.com/)** (`font.ko.css` & `common.css`).  
> **Áp dụng:** Toàn bộ hệ thống giao diện website NA Korea.

---

## 🔤 1. Bộ Font Chữ Tiêu Chuẩn (Font Stacks)

### 1.1. Font Chính (Primary Sans Font): `Pretendard`
- **Mục đích:** Font chữ chủ đạo cho toàn bộ giao diện (HTML Body, Headings, Sub-headlines, Navigation, Product Cards, Footer).
- **Font Stack:**
  ```css
  --font-sans: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  ```
- **Các Font Weights tiêu chuẩn:**
  - `Regular (400)`: Nội dung văn bản thân bài (Body text), mô tả, ghi chú (Remarks), thông tin chân trang (Footer).
  - `Medium (500)`: Thanh điều hướng (Navigation), danh mục tabs (Sub-category tabs), nút bấm phụ.
  - `SemiBold (600)`: Tiêu đề sản phẩm, nhãn danh mục phụ, tiêu đề cấp 3–4 (`h3`, `h4`).
  - `Bold (700) / ExtraBold (800)`: Tiêu đề chính (`h1`, `h2`), giá tiền nổi bật, CTA buttons.

### 1.2. Font Con Số & Tiêu Đề Số/Anh (Numeral & Accent Font): `Figtree`
- **Mục đích:** Font sans hình học hiện đại dùng riêng cho các con số (chỉ số thống kê `10+`, `130+`, `100%`), ngày tháng (`date`), giá tiền và nhãn tiếng Anh.
- **Font Stack:**
  ```css
  --font-figtree: "Figtree", "Pretendard", sans-serif;
  ```
- **Font Weights:** `300 (Light)`, `400 (Regular)`, `500 (Medium)`, `600 (SemiBold)`, `700 (Bold)`.

### 1.3. Font Di Sản Cổ Điển (Traditional Heritage Serif): `Nanum Myeongjo`
- **Mục đích:** Dùng cho các câu trích dẫn triết lý thương hiệu di sản 50 năm truyền thống sâm Punggi.
- **Font Stack:**
  ```css
  --font-serif: "Nanum Myeongjo", "Batang", Georgia, serif;
  ```

---

## 📐 2. Bảng Quy Tắc Phân Bổ Font Size & Spacing Chi Tiết

| Cấp Độ Typography | Font Family | Desktop (≥ 1280px) | Tablet (768px – 1023px) | Mobile (≤ 767px) | Font Weight | Line Height | Letter Spacing | Áp Dụng Cho |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Hero Title (`title_k1`)** | `Pretendard` | `80px` (`text-5xl`–`text-6xl`) | `48px` | `32px` | `700 (Bold)` | `1.35` | `-0.015em` | Tiêu đề Hero chính |
| **Section Title (`title_k2` / `h2`)** | `Pretendard` / `Serif` | `36px – 48px` | `32px – 36px` | `24px – 28px` | `700 (Bold)` | `1.4` | `-0.015em` | Tiêu đề các Section |
| **Sub Headline (`title_k3` / `h3`)** | `Pretendard` | `24px – 28px` | `20px – 22px` | `18px – 20px` | `600 (SemiBold)` | `1.45` | `-0.01em` | Tiêu đề khối / Story highlight |
| **Card Title (`sub-product-title`)** | `Pretendard` | `15px – 16px` | `14px – 15px` | `13px – 14px` | `600 (SemiBold)` | `1.35` | `-0.01em` | Tên sản phẩm trên Card |
| **Body Standard (`text_k7` / `text_k8`)** | `Pretendard` | `15px – 16px` | `14px – 15px` | `13px – 14px` | `400 (Regular)` | `1.6 – 1.75` | `-0.01em` | Đoạn văn bản mô tả, chi tiết |
| **Small / Remarks (`remark`)** | `Pretendard` | `13px – 14px` | `12px – 13px` | `11px – 12px` | `400 (Regular)` | `1.5` | `-0.01em` | Chú thích, đánh giá, MST, bản quyền |
| **Badge / Tag (`box_tab`)** | `Figtree` / `Pretendard` | `11px – 12px` | `11px – 12px` | `10px – 11px` | `600 (SemiBold)` | `1.0` | `0.05em` | Tagline in hoa, nhãn phân loại |
| **Stats Numbers (`numb`)** | `Figtree` | `44px – 56px` | `36px – 44px` | `28px – 34px` | `800 (ExtraBold)` | `1.0` | `-0.02em` | Con số nổi bật `10+`, `130+`, `100%` |
| **Price Display (`pd_price`)** | `Figtree` / `Pretendard` | `16px – 18px` | `15px – 16px` | `14px – 15px` | `700 (Bold)` | `1.2` | `-0.01em` | Giá niêm yết sản phẩm |
| **Navigation Main (`nav`)** | `Pretendard` | `14px` | `14px` | `14px` | `500 (Medium)` | `1.15` | `0.02em` | Menu chính trên Header |
| **Sub-Menu Dropdown** | `Pretendard` | `14px` | `13px` | `13px` | `500 (Medium)` | `1.15` | `0.02em` | Danh mục Sub-menu trượt |
| **CTA Buttons (`btn`)** | `Pretendard` | `13px – 14px` | `12px – 13px` | `12px` | `700 (Bold)` | `1.0` | `0.03em` | Nút hành động in hoa |

---

## 🎨 3. Quy Tắc Màu Sắc Đi Kèm Typography

```css
:root {
  /* Tiêu đề & Chữ đậm */
  --color-heading: #111111;

  /* Nội dung văn bản thân bài */
  --color-text: #333333;

  /* Chữ mô tả phụ & Thông tin phụ trợ */
  --color-text-secondary: #666666;

  /* Chú thích nhỏ & Muted */
  --color-text-muted: #888888;

  /* Điểm nhấn thương hiệu Đỏ Sâm */
  --color-primary: #B5222A;
  --color-primary-hover: #991C23;

  /* Điểm nhấn Vàng Kim / Hổ Phách */
  --color-gold: #D4A359;
}
```

---

## 🛠 4. Quy Tắc Dành Cho Developer & Antigravity Agents

1. **Luôn sử dụng Font Class chuẩn:**
   - Sử dụng `font-sans` (mặc định trỏ về `Pretendard`) cho 95% thành phần giao diện.
   - Sử dụng `font-figtree` cho các con số thống kê hoặc cụm chữ số tiếng Anh.
   - Sử dụng `font-serif` cho các đoạn châm ngôn triết lý truyền thống.
2. **Không tự ý nhúng font thứ 3 lạ:** Chỉ sử dụng 3 font chuẩn đã được khai báo: `Pretendard`, `Figtree`, `Nanum Myeongjo`.
3. **Bảo toàn khoảng cách chữ & dòng:** Tuân thủ `letter-spacing: -0.01em` và `line-height: 1.6` để đảm bảo trải nghiệm đọc chuẩn sang trọng của JungKwanJang.
4. **Không đổi dữ liệu:** Áp dụng font styling không được phép làm thay đổi chuỗi text hoặc cấu trúc dữ liệu sản phẩm.
