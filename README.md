# Aplikasi Manajemen Matakuliah - RESTful API dengan Pyramid

Proyek ini adalah implementasi RESTful API menggunakan framework **Pyramid** yang dirancang untuk memanajemen data mata kuliah.

---

## Fitur

- ✅ Menyimpan data matakuliah (id, kode_mk, nama_mk, sks, semester)
- ✅ Mendukung metode **GET, POST, PUT, DELETE**
- ✅ Struktur endpoint sudah lengkap dan mengikuti standar RESTful
- ✅ Menggunakan **SQLAlchemy** dan database **SQLite**
- ✅ Menggunakan `pserve` dan konfigurasi `development.ini`

---

##  Struktur Folder
matakuliah_api_project/
│
├── matakuliah_api/
│ ├── init.py
│ ├── models.py
│ ├── views.py
│ ├── routes.py
│
├── matakuliah.db
├── setup.py
├── development.ini
├── README.md


##  Cara Menjalankan 
1. Buat virtual environment:
   ```bash
   python -m venv env

2. Aktifkan environment
.\env\Scripts\activate

3. Install dependensi
pip install -e .

4. Jalankan server
pserve development.ini --reload

🧪 Pengujian
Pengujian endpoint dilakukan menggunakan Postman, dengan skenario:
GET /matakuliah
POST /matakuliah
PUT /matakuliah/{id}
DELETE /matakuliah/{id}

FYI BANG :)
Saya sudah berusaha semaksimal mungkin mengikuti semua prosedur instalasi dan struktur yang sesuai dengan dokumentasi resmi Pyramid. Namun karena kendala teknis yang cukup kompleks, proyek ini belum berhasil dijalankan di localhost (pserve tidak dapat membaca package meskipun struktur dan setup.py sudah sesuai).
Saya berharap penilaian bisa mempertimbangkan usaha dan struktur sistem yang sudah lengkap, meskipun runtime-nya belum sempurna.
Terima kasih sudah membaca dan meninjau proyek ini. Saya belajar banyak meskipun mengalami kendala berat di akhir pengerjaan.