const fs = require('fs');
const path = require('path');

const files = [
    { src: 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\38f7ed10-07d9-4952-b34c-e4ae67361af1\\profile_photo_1777942909115.png', dest: 'assets/profile.png' },
    { src: 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\38f7ed10-07d9-4952-b34c-e4ae67361af1\\logo_tech_minimalist_1777942921038.png', dest: 'assets/logo1.png' },
    { src: 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\38f7ed10-07d9-4952-b34c-e4ae67361af1\\logo_luxury_brand_1777942933519.png', dest: 'assets/logo2.png' },
    { src: 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\38f7ed10-07d9-4952-b34c-e4ae67361af1\\poster_design_modern_1777942949274.png', dest: 'assets/graphic1.png' },
    { src: 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\38f7ed10-07d9-4952-b34c-e4ae67361af1\\digital_art_abstract_1777942961171.png', dest: 'assets/graphic2.png' }
];

if (!fs.existsSync('assets')) {
    fs.mkdirSync('assets');
}

files.forEach(f => {
    try {
        fs.copyFileSync(f.src, f.dest);
        console.log(`Copied ${f.src} to ${f.dest}`);
    } catch (err) {
        console.error(`Error copying ${f.src}: ${err.message}`);
    }
});
