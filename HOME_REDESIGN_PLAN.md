# Kế Hoạch Tái Cấu Trúc Trang Chủ NA Korea (Homepage Redesign Plan)

> **Mục đích:** Tài liệu hướng dẫn chuẩn hóa cấu trúc Trang Chủ dành cho Antigravity Agents & Developers.
> **Quy tắc cốt lõi:** Không được tự ý đổi data, cấu trúc dữ liệu sản phẩm hay xóa bớt các API/component hiện có. Chỉ thay đổi bố cục và visual styling.

---

## 📐 Cấu Trúc Bố Cục Tổng Thể (6 Sections)

```
┌─────────────────────────────────────────────────────────┐
│ 1. Header (Transparent Overlay + White Logo on top)     │ (Đã xong)
├─────────────────────────────────────────────────────────┤
│ [HeroSlider] (Bối cảnh trang chính)                     │
├─────────────────────────────────────────────────────────┤
│ 2. Video Showcase (2 Video nằm song song)               │ (Phase 1)
├─────────────────────────────────────────────────────────┤
│ 3. Metrics & Certifications (10+ năm, 130+ đối tác...)  │ (Phase 2)
├─────────────────────────────────────────────────────────┤
│ 4. Dual Marquee Tickers (Đối tác Quốc tế & Trong nước)   │ (Phase 3)
├─────────────────────────────────────────────────────────┤
│ 5. Featured Products (8 Sản phẩm nổi bật)               │ (Phase 4)
├─────────────────────────────────────────────────────────┤
│ 6. Customer Reviews (Đánh giá khách hàng)               │ (Phase 5)
├─────────────────────────────────────────────────────────┤
│ [Footer] (Màu Brand Red #1E0A0D đồng bộ Header)         │ (Đã xong)
└─────────────────────────────────────────────────────────┘
```

---

## 📑 Chi Tiết Các Phase Thực Hiện

### ✅ Phase 0 — Header & Navigation (Hoàn thành)
* **Trạng thái:** COMPLETED (`commit 65838df & 157dd63`)
* **Đặc điểm:**
  - Nền mờ/trong suốt khi ở đỉnh trang (`isTopTransparent`), giữ nguyên trong suốt khi hover menu cấp 2.
  - Crossfade 400ms giữa Logo trắng (`logo-horizontal-white.png`) và Logo tối (`logo-horizontal.png`).
  - Nền Footer đồng bộ màu `#1E0A0D` (Brand Red đậm).

---

### 🔲 Phase 1 — Video Showcase (2 Video Nằm Song Song)
* **Vị trí:** Ngay bên dưới `HeroSlider`.
* **Yêu cầu UI/UX:**
  - Cấu trúc Desktop: 2 Video dạng Grid 2 Cột (Side-by-side, tỉ lệ 16:9).
  - Cấu trúc Mobile: Stack dọc 1 cột.
  - Khung Video có hiệu ứng border mờ sang trọng (`border-white/10` hoặc `border-[#B5222A]/20`), hiệu ứng shadow khi hover.
  - Tiêu đề section: *"Hành Trình Di Sản & Quy Trình Chế Tác Hồng Sâm 6 Năm Tuổi"*.
* **Nguồn Video:** Hỗ trợ nhúng YouTube Embed iframe hoặc HTML5 `<video>` player với poster thumbnail tùy chỉnh.

---

### 🔲 Phase 2 — Tổng Quan Chỉ Số & Chứng Chỉ (Metrics & Certifications)
* **Vị trí:** Ngay sau phần Video Showcase (hoặc HeroSlider).
* **Giải pháp Kỹ thuật & UI/UX:**
  - **Color Palette & Nền:** Background kem ấm vi khí hậu sâm Punggi (`bg-[#FAF7F2]`) kết hợp viền mờ `border-[#E8DFD1]` cùng hiệu ứng watermark củ sâm nhẹ (`opacity-[0.03]`).
  - **Layout:** Grid 4 Cột (Desktop), 2 Cột (Tablet & Mobile compact) giúp hiển thị cân đối trên mọi màn hình.
  - **Typography & Con số:** 
    - Font sans-serif siêu đậm (`font-extrabold`), kích thước `text-4xl sm:text-5xl lg:text-6xl`, màu đỏ sâm `#B5222A` phối cùng dấu `+`/`%` màu cam kim `#F0831F`.
    - Hiệu ứng **Count-Up Animation** mượt mà chạy từ `0` tới con số mục tiêu khi khách hàng cuộn tới (dùng `IntersectionObserver` thuần, 0 dependency).
  
* **Chi tiết 4 Thẻ Chỉ Số:**
  1. 🏆 **10+ Năm** — *Kinh nghiệm nhập khẩu & phân phối hồng sâm chính hãng tại VN*.
  2. 🤝 **130+ Đối tác** — *Tập đoàn, ngân hàng và doanh nghiệp đồng hành*.
  3. 🏬 **100+ Điểm bán** — *Hệ thống nhà phân phối & đại lý phủ sóng toàn quốc*.
  4. 🛡️ **100% Chuẩn hóa** — *Đạt đầy đủ chứng nhận chất lượng quốc tế & Bộ Y Tế*.

* **Dải Badge Chứng Chỉ Đi Kèm (Certification Strip):**
  - Đặt ở dải dưới cùng của Section với 4 Badge biểu tượng: **GMP**, **HACCP**, **ISO 22000**, **Tem Bộ Công Thương**.

---

### 🔲 Phase 3 — 2 Dòng Ticker Chạy Ngang (Dual Partner Marquees)
* **Vị trí:** Sau phần Chỉ số & Chứng chỉ.
* **Yêu cầu UI/UX:**
  - **Dòng 1 (Đối tác Quốc tế):** Hiển thị logo/tên các tập đoàn, vùng trồng, viện nghiên cứu tại Hàn Quốc & Quốc tế. Chạy liên tục từ **Phải sang Trái** (`scroll-left`).
  - **Dòng 2 (Đối tác Trong nước):** Hiển thị logo/tên các hệ thống đại lý, nhà phân phối, đối tác bán lẻ tại Việt Nam. Chạy liên tục từ **Trái sang Phải** (`scroll-right`).
  - Hiệu ứng: Infinite Seamless Loop CSS animation, tự động tạm dừng (`animation-play-state: paused`) khi rê chuột vào (hover).

---

### 🔲 Phase 4 — Sản Phẩm Nổi Bật (8 Featured Products)
* **Vị trí:** Ngay sau Ticker Đối Tác.
* **Yêu cầu UI/UX:**
  - Khung Grid 8 Sản phẩm nổi bật (4 cột x 2 hàng trên Desktop, 2 cột x 4 hàng trên Mobile).
  - Dữ liệu sản phẩm lấy từ danh sách sản phẩm chuẩn hiện có (không sửa file `products.json` hay data structure).
  - Mỗi Card sản phẩm gồm:
    - Badge: *"6 Năm Tuổi"*, *"Bán Chạy"* hoặc *"Thượng Hạng"*.
    - Ảnh sản phẩm chất lượng cao với hiệu ứng Zoom nhẹ khi hover.
    - Tên sản phẩm, quy cách đóng gói, giá niêm yết & giá ưu đãi.
    - Nút action: *"Xem chi tiết"* và *"Thêm vào giỏ"*.
  - Nút CTA cuối section: *"Xem Tất Cả Sản Phẩm"* điều hướng đến `/san-pham`.

---

### 🔲 Phase 5 — Review Khách Hàng (Customer Testimonials)
* **Vị trí:** Đặt trước Footer.
* **Yêu cầu UI/UX:**
  - Layout Slider / Carousel hoặc Grid 3-4 Thẻ Đánh giá.
  - Thành phần thẻ:
    - Số sao đánh giá (5 ⭐).
    - Nội dung cảm nhận thực tế về chất lượng sản phẩm & dịch vụ.
    - Thông tin khách hàng (Tên, Chức vụ/Vùng miền, Avatar đại diện).
    - Thẻ xác minh *"Đã mua hàng chính hãng tại NA Korea"*.

---

## 🛠 Hướng Dẫn Dành Cho Agent Thực Thi

1. **Đọc kỹ file này** trước khi bắt đầu bất kỳ Phase nào.
2. Thực hiện lần lượt từng Phase theo yêu cầu của người dùng.
3. Sau khi hoàn thành mỗi Phase, chạy lệnh `npm run typecheck` để đảm bảo không có lỗi TypeScript.
4. Commit & push code với message rõ ràng format `feat(home): ...` hoặc `style(home): ...`.
