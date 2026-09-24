import os
import subprocess

pptx_source = "/Users/tuananh/Na-Korea/na-korea-prototype/2 file mẫu cho catalog/Đào tạo nội bộ - Ginsenoside .pptx"
output_dir = "/Users/tuananh/Na-Korea/na-korea-prototype/scripts/ppt_slides"
os.makedirs(output_dir, exist_ok=True)

script = f'''
set pptxPosix to "{pptx_source}"
set outDir to "{output_dir}"

tell application "Microsoft PowerPoint"
    set thePres to open (POSIX file pptxPosix)
    save thePres in (POSIX file outDir) as save as PNG
    close thePres saving no
end tell
'''

try:
    p = subprocess.run(["osascript", "-e", script], capture_output=True, text=True, timeout=25)
    print("STDOUT:", p.stdout)
    print("STDERR:", p.stderr)
except Exception as e:
    print("Error:", e)

files = os.listdir(output_dir)
print(f"Generated {len(files)} files in {output_dir}:", files[:10])
