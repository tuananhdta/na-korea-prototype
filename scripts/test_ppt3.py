import os
import subprocess
import shutil

home = os.path.expanduser("~")
container_dir = os.path.join(home, "Library/Containers/com.microsoft.Powerpoint/Data/Documents")
os.makedirs(container_dir, exist_ok=True)
container_pdf = os.path.join(container_dir, "Dao-tao-Ginsenoside.pdf")
final_pdf = "/Users/tuananh/Na-Korea/na-korea-prototype/public/downloads/Dao-tao-Ginsenoside.pdf"
pptx_path = "/Users/tuananh/Na-Korea/na-korea-prototype/2 file mẫu cho catalog/Đào tạo nội bộ - Ginsenoside .pptx"

script = f'''
tell application "Microsoft PowerPoint"
    open "{pptx_path}"
    save active presentation in "{container_pdf}" as save as PDF
    close active presentation saving no
end tell
'''

p = subprocess.run(["osascript", "-e", script], capture_output=True, text=True)
print("STDOUT:", p.stdout)
print("STDERR:", p.stderr)

if os.path.exists(container_pdf):
    shutil.copy2(container_pdf, final_pdf)
    print(f"✓ Success! Created PDF: {final_pdf} ({os.path.getsize(final_pdf)} bytes)")
else:
    print("Container PDF not created.")
