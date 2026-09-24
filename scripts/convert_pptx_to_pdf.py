import os
import subprocess

pptx_source = "/Users/tuananh/Na-Korea/na-korea-prototype/2 file mẫu cho catalog/Đào tạo nội bộ - Ginsenoside .pptx"
pdf_target = "/Users/tuananh/Na-Korea/na-korea-prototype/public/downloads/Dao-tao-Ginsenoside.pdf"

applescript = f'''
tell application "Microsoft PowerPoint"
    set pptFile to POSIX file "{pptx_source}"
    set pdfFile to POSIX file "{pdf_target}"
    open pptFile
    save active presentation in pdfFile as save as PDF
    close active presentation saving no
end tell
'''

try:
    p = subprocess.run(["osascript", "-e", applescript], capture_output=True, text=True)
    print("STDOUT:", p.stdout)
    print("STDERR:", p.stderr)
    if os.path.exists(pdf_target):
        print(f"✓ Successfully generated PDF: {pdf_target} (size: {os.path.getsize(pdf_target)} bytes)")
    else:
        print("❌ Target PDF not created.")
except Exception as e:
    print("Error running AppleScript:", e)
