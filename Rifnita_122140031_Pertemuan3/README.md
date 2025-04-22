# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




# 📚 My Book Manager

**My Book Manager** adalah aplikasi web yang dibuat menggunakan React untuk membantu pengguna mencatat dan mengelola koleksi buku pribadi. Pengguna dapat menambahkan buku yang dimiliki, sedang dibaca, atau ingin dibeli, serta melakukan pencarian dan filter berdasarkan status.

---

# 📚 My Book Manager

Aplikasi manajemen buku pribadi berbasis React yang memungkinkan pengguna mencatat, mengelola, dan mencari buku yang mereka miliki, sedang dibaca, atau ingin dibeli.

## 🚀 Fitur Utama

- ✅ Tambah buku baru (judul, penulis, status: **milik**, **baca**, atau **beli**)
- ✅ Edit informasi buku yang sudah ada
- ✅ Hapus buku dari daftar
- ✅ Filter buku berdasarkan status
- ✅ Cari buku berdasarkan judul atau penulis
- ✅ Navigasi antar halaman dengan React Router
- ✅ Data disimpan di `localStorage`

## 🛠️ Teknologi yang Digunakan

- React (functional components + hooks)
- Context API untuk state management
- React Router DOM
- LocalStorage API
- PropTypes untuk type checking
- React Testing Library (unit testing)
- Custom Hooks

## 🧱 Struktur Proyek
src/ ├── components/ │ ├── BookForm.js │ ├── BookList.js │ └── BookFilter.js ├── context/ │ └── BookContext.js ├── hooks/ │ ├── useBooks.js │ └── useLocalStorage.js ├── pages/ │ └── Home/ │ └── HomePage.js ├── App.js ├── App.css └── index.js


## Instalasi & Menjalankan Proyek

1. Clone repo ini:
```bash
git clone https://github.com/username/book-manager-app.git
cd book-manager-app


2. Install depedencies
npm install

3. Jalankan Aplikasi
npm start

4. Untuk menjalankan unit test : 
npm test

🧪 Testing
Aplikasi ini memiliki minimal 5 unit test menggunakan React Testing Library yang mencakup:
- Penambahan buku
- Penyaringan/filtering
- Pencarian buku
- Edit dan hapus buku
- Validasi form input

🔐 Validasi & Error Handling
Validasi input form (judul dan penulis tidak boleh kosong)

Penanganan error saat parsing/simpan data di localStorage

📌 Custom Hooks
useBooks: Mengelola state dan aksi buku secara terpusat

useLocalStorage: Abstraksi untuk penyimpanan dan pengambilan data dari localStorage

📄 Lisensi
Proyek ini dibuat untuk keperluan pembelajaran dan bebas digunakan untuk pengembangan lebih lanjut.

- Selamat mengelola koleksi bukumu! -

Screenshoot Antarmuka aplikasi BookApp
![Screenshoot Antarmuka](https://github.com/user-attachments/assets/9ec21543-fc02-470d-a93c-672068bf0640)
