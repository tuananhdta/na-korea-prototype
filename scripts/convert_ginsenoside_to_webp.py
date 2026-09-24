import os
import pypdfium2 as pdfium
from PIL import Image

BASE_DIR = "/Users/tuananh/Na-Korea/na-korea-prototype"
PDF_PATH = os.path.join(BASE_DIR, "public", "downloads", "Dao-tao-Ginsenoside.pdf")
OUTPUT_DIR = os.path.join(BASE_DIR, "public", "catalogs", "ginsenoside-guide")

os.makedirs(OUTPUT_DIR, exist_ok=True)

pdf = pdfium.PdfDocument(PDF_PATH)
page_count = len(pdf)
print(f"Rendering {page_count} pages from {PDF_PATH} to {OUTPUT_DIR}...")

for i in range(page_count):
    page_num = i + 1
    page = pdf[i]
    # Scale 2.0 gives ~150-200 DPI for crisp reading on all devices
    image = page.render(scale=2.0).to_pil()
    output_path = os.path.join(OUTPUT_DIR, f"page-{page_num}.webp")
    image.save(output_path, "WEBP", quality=85, method=4)
    print(f"  ✓ Rendered page {page_num}/{page_count} -> {output_path}")

print(f"Finished rendering all {page_count} pages for Ginsenoside Guide!")
