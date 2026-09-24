import subprocess
import os

hfs_target = "Macintosh HD:Users:tuananh:Na-Korea:na-korea-prototype:public:downloads:Dao-tao-Ginsenoside.pdf"
pptx_path = "/Users/tuananh/Na-Korea/na-korea-prototype/2 file mẫu cho catalog/Đào tạo nội bộ - Ginsenoside .pptx"

script = f'''
tell application "Microsoft PowerPoint"
    activate
    open "{pptx_path}"
    delay 1
    save active presentation in "{hfs_target}" as save as PDF
    close active presentation saving no
end tell
'''

p = subprocess.run(["osascript", "-e", script], capture_output=True, text=True)
print("STDOUT:", p.stdout)
print("STDERR:", p.stderr)

pdf_target = "/Users/tuananh/Na-Korea/na-korea-prototype/public/downloads/Dao-tao-Ginsenoside.pdf"
if os.path.exists(pdf_target):
    print(f"✓ Success! PDF created: {pdf_target} ({os.path.getsize(pdf_target)} bytes)")
else:
    print("Not created yet.")
