# Marshell Portfolio - Static Website

## 📋 Deskripsi

Portfolio statis yang dibangun dengan HTML, CSS, dan JavaScript murni tanpa menggunakan Spring Boot. Website ini dapat di-deploy ke Vercel atau platform static hosting lainnya.

## 🏗️ Struktur Folder

```
portfolio/
│
├── index.html                    # File utama (entry point)
├── vercel.json                   # Konfigurasi Vercel
│
├── static/
│   ├── css/
│   │   ├── style.css            # Styling utama
│   │   └── responsive.css       # Responsive design
│   │
│   ├── js/
│   │   ├── script.js            # JavaScript utama
│   │   └── darkmode.js          # Dark mode (opsional)
│   │
│   ├── images/
│   │   └── MARSHELL.jpeg        # Foto profil
│   │
│   ├── files/
│   │   └── CV_Marshell_Leota_Timang.pdf  # CV
│   │
│   └── icons/                   # Icon assets (opsional)
│
└── README_STATIC.md             # File ini
```

## ✨ Fitur

- ✅ Navbar dengan navigation links
- ✅ Hero section dengan typing animation
- ✅ About me section
- ✅ Tech stack showcase
- ✅ Skills dengan filter kategori (Languages, Frameworks, Database, Tools)
- ✅ Featured Projects (6 project)
- ✅ Contact section dengan social links
- ✅ Footer
- ✅ Responsive design untuk semua ukuran layar
- ✅ Smooth scrolling
- ✅ Hover effects dan animasi

## 🚀 Deployment

### Di Vercel

1. Push project ke GitHub
2. Connect GitHub repository ke Vercel
3. Vercel akan automatically detect dan deploy static site
4. URL akan digenerate otomatis

### Locally

Buka file `index.html` di browser atau gunakan local server:

```bash
# Menggunakan Python 3
python -m http.server 8000

# Menggunakan Node.js
npx http-server

# Menggunakan PHP
php -S localhost:8000
```

Kemudian buka `http://localhost:8000` di browser.

## 📝 Perubahan dari Version Lama (Spring Boot)

### Dihapus:
- ❌ Java / Spring Boot
- ❌ Maven (pom.xml)
- ❌ Thymeleaf templating
- ❌ Server-side controllers
- ❌ Database models & services

### Ditambahkan:
- ✅ Navbar langsung di index.html
- ✅ Anchor-based navigation (#about, #skills, #projects, #contact)
- ✅ Pure HTML/CSS/JavaScript
- ✅ Static asset serving

### Path Changes:
```
SEBELUM:  <link th:href="@{/css/style.css}">
SESUDAH:  <link href="static/css/style.css">

SEBELUM:  <img src="/images/MARSHELL.jpeg">
SESUDAH:  <img src="static/images/MARSHELL.jpeg">

SEBELUM:  <a th:href="@{/}">Home</a>
SESUDAH:  <a href="index.html">Home</a>
```

## 🔧 Maintenance

### Menambah Project Baru:
1. Buka `index.html`
2. Cari section `<!-- ================= PROJECTS ================= -->`
3. Copy salah satu `<div class="project-card">` block
4. Sesuaikan konten (title, description, tech stack, links)
5. Save dan refresh browser

### Mengubah Informasi Profil:
Cari dan edit:
- Hero section: Nama, job title, deskripsi
- About section: Biodata dan informasi personal
- Contact section: Email, WhatsApp, Location
- Social links: GitHub, LinkedIn, Behance, Instagram

### Mengubah Skills:
1. Buka `index.html`
2. Cari section `<!-- ================= SKILLS ================= -->`
3. Tambah atau hapus `<div class="skill-item">` block
4. Pastikan class skill-item memiliki kategori: `language`, `framework`, `database`, atau `tool`

## 🎨 Customization

### Warna Theme:
Edit `static/css/style.css`:
- Primary color: `#38bdf8` (cyan/light blue)
- Background: `#0f172a` (dark navy)
- Ganti ke warna pilihan Anda

### Typography:
Font menggunakan `Poppins` dari Google Fonts, bisa diganti di `index.html` head section.

### Animasi:
- Typing animation: Dikontrol oleh `static/js/script.js` (`type()` function)
- Scroll animation: CSS keyframes di `style.css`
- Planet orbit: CSS animation untuk `.orbit1` dan `.orbit2`

## 📱 Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Notes

- Semua file adalah static HTML/CSS/JS
- Tidak ada server-side processing
- Tidak ada database connection
- File CV bisa di-download secara publik (sesuaikan jika perlu)

## 📚 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Styling dengan flexbox, grid, dan animations
- **JavaScript (Vanilla)**: Interaktif tanpa framework
- **Bootstrap 5.3**: Responsive grid system
- **Devicon**: Technology icons
- **Google Fonts**: Typography
- **Vercel**: Hosting & deployment

## 🤝 Support & Questions

Jika ada pertanyaan atau masalah:
1. Check file `index.html` untuk struktur HTML
2. Check `static/css/style.css` untuk styling
3. Check `static/js/script.js` untuk logic
4. Verify file paths relatif terhadap root project

---

**Version**: 2.0 (Static)  
**Last Updated**: August 2026  
**Author**: Marshell Leota Timang
