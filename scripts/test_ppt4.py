import os
import subprocess

pptx_path = "/Users/tuananh/Na-Korea/na-korea-prototype/2 file mẫu cho catalog/Đào tạo nội bộ - Ginsenoside .pptx"
pdf_path = "/Users/tuananh/Na-Korea/na-korea-prototype/public/downloads/Dao-tao-Ginsenoside.pdf"

script = f'''
tell application "Microsoft PowerPoint"
    activate
    open "{pptx_path}"
    delay 1
    save active presentation in "{pdf_path}" as save as PDF
    delay 2
    close active presentation saving no
end tell
'''

p = subprocess.run(["osascript", "-e", script], capture_output=True, text=True)
print("STDOUT:", p.stdout)
print("STDERR:", p.stderr)
print("Exists:", os.path.exists(pdf_path))
