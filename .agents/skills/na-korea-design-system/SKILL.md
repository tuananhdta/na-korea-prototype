---
name: na-korea-design-system
description: >
  Apply the NA Korea visual design system to existing website UI.
  Use this skill whenever creating, modifying, reviewing, or styling NA Korea frontend pages or components.
  Preserve all existing text and business content. Only modify visual styling, CSS, layout, spacing, typography, responsive behavior, and UI presentation.
---

# NA Korea Design System

## Goal
Apply a consistent premium Korean visual system to the NA Korea website without changing any existing content, text, data, or business logic.

---

## Critical Content Preservation Rule

> [!CAUTION]
> **STRICT ZERO-CONTENT-ALTERATION POLICY**
> You must NEVER rewrite, shorten, paraphrase, translate, or invent text to make it "fit" a visual layout.

### NEVER Modify:
- Text content, copy, and slogans
- Product names, SKUs, and specifications
- Prices, discount values, and currency symbols
- Menu labels, category names, and navigation paths
- Headings (`h1`–`h6`) and paragraph texts
- CTA button texts
- Product descriptions and nutritional/saponin details
- Form labels, placeholders, and error messages
- Product data (`products.json`, data structures, API endpoints)
- Business logic (cart operations, checkout calculations, auth state)

### ONLY Modify:
- CSS styles, Tailwind utility classes, and custom stylesheets
- Layout grids, flex containers, and element alignments
- Colors, gradients, and brand token applications
- Typography styles (font families, sizes, weights, line-heights, tracking)
- Spacing (margins, paddings, gaps)
- Borders, corner radiuses, dividers, and decorative accents
- Drop shadows, glassmorphism, and backdrop filters
- Responsive breakpoints and viewport adaptations
- Interactive states (hover, active, focus, disabled transitions)
- Image framing, aspect ratios, object-fit, and presentation containers

*If a visual issue appears to require content changes: **do not change the content**. Adapt the layout around the existing content using flexible wrapping, responsive font scaling, or scroll containers.*

---

## Design Tokens & Brand Palette (JungKwanJang Standard)

```css
:root {
  /* 1. Đỏ Nhân sâm (Ginseng Red) — Nút CTA chính, link, trạng thái active, giá khuyến mãi */
  --red-700: #B5222A;
  --brand-primary: #B5222A;
  --color-primary: #B5222A;
  --color-primary-hover: #991C23;

  /* 2. Tím mận / Dark Charcoal — Footer, hero, dải sẫm */
  --dark-bg: #181818;
  --color-brand-footer: #1E0A0D;

  /* 3. Vàng hổ phách (Amber Gold) — Tiết chế: nhãn, sao đánh giá, chi tiết nguồn gốc */
  --gold-600: #D4A359;
  --color-secondary: #D4A359;
  --color-secondary-hover: #B88942;

  /* 4. Typography & Text */
  --color-heading: #111111; /* Tiêu đề */
  --color-text: #333333;    /* Nội dung thân bài */
  --color-text-secondary: #666666;
  --color-text-muted: #888888;

  /* 5. Backgrounds & Surfaces */
  --color-background: #FFFFFF;      /* Trắng tinh khiết chuẩn JungKwanJang */
  --color-background-soft: #F8F8F8; /* Xám nhạt mờ */
  --color-background-warm: #F5F3EF;

  /* 6. Borders & Dividers */
  --color-border: #EEEEEE;

  /* Typography Families (Chuẩn JungKwanJang) */
  --font-sans: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-figtree: "Figtree", "Pretendard", sans-serif;
  --font-serif: "Nanum Myeongjo", "Batang", Georgia, serif;
}
```

---

## Antigravity Execution Rules

### 1. Inspect Before Editing
- Always read and inspect existing component code, stylesheets (`globals.css`), and layout files before proposing or writing modifications.
- Check how existing props, state, and markup are constructed.

### 2. Reuse Existing Components
- Prioritize reusing existing UI components (`Button`, `ProductCard`, `CartDrawer`, `Header`, `Footer`) rather than creating duplicate or one-off implementations.
- If an existing component needs styling adjustments, modify it safely or pass styling props.

### 3. Incremental, Scoped Changes
- Apply changes component-by-component or page-by-page.
- Do NOT perform sweeping rewrites of entire pages or the frontend codebase in a single action.

### 4. Harmonize with Existing Token System
- If the project already has established Tailwind configs or CSS variables, map the NA Korea tokens into the existing system.
- Never create disconnected or redundant parallel token systems.

### 5. Multi-Viewport & No Horizontal Overflow
- Every UI change must render cleanly on Desktop (1280px+), Tablet (768px–1024px), and Mobile (320px–480px).
- Strictly prevent horizontal scrolling (`overflow-x`) on mobile viewports.

### 6. Minimal Dependencies
- Do not introduce new npm packages, UI libraries, or external fonts unless strictly requested and justified.

---

## Instructions: Step-by-Step Workflow

1. **Analyze Target Component/Page:**
   - Read the target file using `view_file`.
   - Identify existing DOM structure, CSS classes, and content nodes.
2. **Apply Design Tokens & Layout:**
   - Replace hardcoded arbitrary hex colors with design tokens or brand utilities (`#B5222A`, `#D4A359`, `#111111`, `#FFFFFF`, `#F8F8F8`).
   - Use `Pretendard` (`font-sans`) for all UI text, headings, cards, and navigation, `Figtree` for numbers/stats, and `Nanum Myeongjo` (`font-serif`) for traditional luxury headings.
   - Refine spacing using standard 4px/8px grid increments (`gap-4`, `p-6`, `my-8`).
3. **Verify Responsive Behavior:**
   - Ensure flex layouts wrap cleanly (`flex-wrap`) and grid columns scale gracefully (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
4. **Preserve Exact Copy:**
   - Double-check that all strings, prices, and links match the original source character-for-character.

---

## Concrete Examples

### ❌ Incorrect (Content Changed / Rewritten):
```tsx
// BAD: Altered heading text and shortened description to fit a 2-line box
<h2>Hồng Sâm Cao Cấp</h2>
<p>Chiết xuất sâm nguyên chất.</p>
<button>Mua</button>
```

### ✅ Correct (Layout Adapted Around Existing Content):
```tsx
// GOOD: Exact text preserved 100%, layout refined with brand tokens & typography
<h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-tight">
  Sản Phẩm Hồng Sâm Kim&apos;s Nổi Bật
</h2>
<p className="font-sans text-sm sm:text-base text-[#4B4F52] max-w-xl leading-relaxed mt-3">
  Chiết xuất từ nhân sâm 6 năm tuổi vùng núi Punggi nguyên chất 100%, bảo đảm hàm lượng Saponin và Ginsenoside cao nhất.
</p>
<button className="bg-[#B5222A] hover:bg-[#991C23] text-white px-6 py-2.5 rounded-md font-medium transition-colors shadow-sm">
  Thêm vào giỏ hàng
</button>
```
