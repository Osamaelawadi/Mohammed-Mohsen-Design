import shutil
import os

files = [
    (r'C:\Users\Dell\.gemini\antigravity\brain\38f7ed10-07d9-4952-b34c-e4ae67361af1\profile_photo_1777942909115.png', 'assets/profile.png'),
    (r'C:\Users\Dell\.gemini\antigravity\brain\38f7ed10-07d9-4952-b34c-e4ae67361af1\logo_tech_minimalist_1777942921038.png', 'assets/logo1.png'),
    (r'C:\Users\Dell\.gemini\antigravity\brain\38f7ed10-07d9-4952-b34c-e4ae67361af1\logo_luxury_brand_1777942933519.png', 'assets/logo2.png'),
    (r'C:\Users\Dell\.gemini\antigravity\brain\38f7ed10-07d9-4952-b34c-e4ae67361af1\poster_design_modern_1777942949274.png', 'assets/graphic1.png'),
    (r'C:\Users\Dell\.gemini\antigravity\brain\38f7ed10-07d9-4952-b34c-e4ae67361af1\digital_art_abstract_1777942961171.png', 'assets/graphic2.png')
]

if not os.path.exists('assets'):
    os.makedirs('assets')

for src, dest in files:
    try:
        shutil.copy2(src, dest)
        print(f"Copied {src} to {dest}")
    except Exception as e:
        print(f"Error copying {src}: {e}")
