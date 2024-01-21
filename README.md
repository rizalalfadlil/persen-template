### Cara menggunakannya

1. **Fork Repositori:**
   - Buka browser dan kunjungi [repositori](https://github.com/rizalalfadlil/persen-template).
   - Pada pojok kanan atas, klik tombol "Fork" untuk membuat salinan repositori ini ke akun GitHub Anda.

2. **Clone Repositori:**
   - Buka terminal pada mesin lokal Anda.
   - Clone repositori yang telah Anda fork menggunakan perintah:
     ```bash
     git clone https://github.com/YOUR_USERNAME/persen-template.git
     ```
     Gantilah `YOUR_USERNAME` dengan nama pengguna GitHub Anda.

3. **Masuk ke Direktori Proyek:**
   - Masuk ke direktori proyek yang baru saja di-clone menggunakan perintah:
     ```bash
     cd persen-template
     ```

4. **Hapus Pengaturan Homepage dari `package.json`:**
   - Buka file `package.json` dan hapus baris berikut:
     ```json
     "homepage": "https://rizalalfadlil.github.io/persen-template",
     ```

5. **Edit `src/App.js`:**
   - Buka file `src/App.js` dan modifikasi kontennya sesuai dengan kreativitas Anda.

6. **Instal Dependensi:**
   - Jalankan perintah berikut untuk menginstal dependensi proyek:
     ```bash
     npm install
     ```

7. **Menjalankan Proyek secara Lokal:**
   - Ketik perintah berikut untuk menjalankan proyek secara lokal:
     ```bash
     npm start
     ```
   - Buka browser dan kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat proyek Persen Template yang telah Anda ubah.

8. **Konfigurasi untuk Deploy ke GitHub Pages:**
   - Setelah Anda puas dengan perubahan Anda, tambahkan perintah `"homepage"` ke dalam `package.json` sesuai format:
     ```json
     "homepage": "https://YOUR_USERNAME.github.io/persen-template",
     ```
     Gantilah `YOUR_USERNAME` dengan nama pengguna GitHub Anda.

9. **Deploy ke GitHub Pages:**
   - Jalankan perintah berikut untuk melakukan deploy ke GitHub Pages:
     ```bash
     npm run deploy
     ```
   - Tunggu hingga proses deploy selesai.
   - Kunjungi [https://YOUR_USERNAME.github.io/persen-template](https://YOUR_USERNAME.github.io/persen-template) untuk melihat proyek Persen Template yang telah diubah.

Sekarang Anda telah berhasil mem-fork, mengedit, dan mendeploy proyek Persen Template ke GitHub Pages sesuai dengan kreativitas Anda. Silakan sesuaikan dengan kebutuhan dan ide-ide Anda sendiri!

(maaf bahasanya agak beda, gw pake chatgpt)