# Microservices Lab • Landing Page & Portal Login

Landing page dan portal autentikasi praktikum arsitektur sistem terdistribusi & microservices dengan tema modern cute pastel (*Deep Raspberry Rose* `#8A1F4B`).

## 📁 Struktur Folder & File

```text
landing-page-login/
├── images/           # Direktori aset gambar
├── .dockerignore     # File pengecualian build Docker
├── Dockerfile        # Konfigurasi container Nginx Alpine
├── index.html        # Halaman utama landing page & modal
├── README.md         # Dokumentasi proyek praktikum
├── script.js         # Logika interaktif modal & autentikasi
└── style.css         # Styling antarmuka & tema warna
```

## 🚀 Panduan Build & Menjalankan Docker

### 1. Build Docker Image
```bash
docker build -t velisa/landing-page-login .
```

### 2. Jalankan Container
```bash
docker run -d -p 8081:80 --name landing-page velisa/landing-page-login
```

Akses aplikasi melalui browser di: `http://localhost:8081`

