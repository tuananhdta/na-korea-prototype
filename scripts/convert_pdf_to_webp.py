import os
import shutil
import pypdfium2 as pdfium
from PIL import Image

BASE_DIR = "/Users/tuananh/Na-Korea/na-korea-prototype"
PDF_SOURCE = os.path.join(BASE_DIR, "2 file mẫu cho catalog", "CTL Kim (update 19.6.2026).pdf")
DOWNLOADS_DIR = os.path.join(BASE_DIR, "public", "downloads")
CATALOG1_DIR = os.path.join(BASE_DIR, "public", "catalogs", "product-2026")

os.makedirs(DOWNLOADS_DIR, exist_ok=True)
os.makedirs(CATALOG1_DIR, exist_ok=True)

# 1. Copy PDF to downloads
target_pdf = os.path.join(DOWNLOADS_DIR, "CTL-Kim-2026.pdf")
shutil.copy2(PDF_SOURCE, target_pdf)
print(f"✓ Copied PDF to {target_pdf}")

# 2. Render pages to WebP
pdf = pdfium.PdfDocument(target_pdf)
page_count = len(pdf)
print(f"Total pages in CTL-Kim-2026.pdf: {page_count}")

# Render each page
for i in range(page_count):
    page_num = i + 1
    page = pdf[i]
    # Render at scale 2 (approx 144-150 DPI for crisp reading on retina screens)
    image = page.render(scale=2.0).to_pil()
    output_path = os.path.join(CATALOG1_DIR, f"page-{page_num}.webp")
    image.save(output_path, "WEBP", quality=85, method=4)
    if page_num % 10 == 0 or page_num == page_count or page_num == 1:
        print(f"  ✓ Rendered page {page_num}/{page_count} -> {output_path}")

print(f"Finished rendering {page_count} pages for Product Catalog 2026!")
