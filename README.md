
# TodoApp

A brief description of what this project does and who it's for

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
# TodoApp

### **Folder `__tests__`**

Folder ini berisi file-file pengujian untuk memastikan bahwa aplikasi berfungsi dengan baik. Terdapat subfolder `components` untuk pengujian komponen dan `utils` untuk pengujian fungsi utilitas.

### **Folder `assets`**

Folder ini menyimpan semua aset statis seperti gambar dan ikon yang digunakan di dalam aplikasi. Folder `images` khusus untuk gambar yang digunakan dalam aplikasi.

### **Folder `components`**

Folder ini berisi semua komponen React yang digunakan dalam aplikasi. Setiap file `.tsx` di sini mewakili komponen UI yang digunakan dalam aplikasi.

### **Folder `utils`**

Folder ini berisi fungsi-fungsi utilitas yang tidak terkait langsung dengan UI tetapi mendukung logika aplikasi, seperti fungsi filtering untuk daftar tugas.

### **File Utama**

- **`app/_layout.tsx`**: Komponen root aplikasi yang mengatur navigasi dan struktur utama.
- **`app/(tabs)/index.tsx`**: Entry point aplikasi yang merender komponen root.
- **`tsconfig.json`**: Konfigurasi untuk TypeScript yang mengatur compiler options dan pengaturan proyek.
- **`package.json`**: Daftar dependensi proyek serta skrip yang dapat dijalankan dengan npm.
---

## Alasan Pilihan Teknologi dan Library

Berikut adalah penjelasan tentang teknologi dan library yang digunakan dalam proyek ini:

### **React Native**

React Native dipilih sebagai framework utama untuk pengembangan aplikasi mobile karena:
- **Cross-Platform**: Memungkinkan pengembangan aplikasi untuk iOS dan Android dari satu basis kode.
- **Komponen Reusable**: Memudahkan pembuatan UI dengan komponen yang dapat digunakan kembali.
- **Kinerja**: Menghasilkan aplikasi dengan kinerja mendekati aplikasi native.

### **TypeScript**

TypeScript digunakan karena:
- **Tipisasi Statis**: Menyediakan tipisasi statis yang membantu dalam menangkap kesalahan selama pengembangan.
- **Pengembangan yang Lebih Baik**: Meningkatkan pengalaman pengembangan dengan autocomplete dan dukungan editor yang lebih baik.

### **Expo**

Expo dipilih untuk:
- **Kemudahan Pengembangan**: Menyediakan alat dan layanan untuk mempercepat pengembangan React Native tanpa konfigurasi kompleks.
- **Hot Reloading**: Memungkinkan pengembangan lebih cepat dengan reload otomatis saat kode diubah.

### **AsyncStorage**

AsyncStorage digunakan untuk:
- **Penyimpanan Lokal**: Menyediakan cara untuk menyimpan data secara lokal di perangkat untuk persisten data antar sesi aplikasi.

### **Jest**

Jest digunakan untuk:
- **Pengujian Unit dan Integrasi**: Menyediakan framework pengujian yang kuat dengan dukungan untuk snapshot testing dan mock functions.

### **Testing Library**

React Testing Library digunakan karena:
- **Pengujian Interaksi**: Memfokuskan pengujian pada interaksi pengguna nyata, bukan hanya implementasi detail.

---

### **Gambar Hasil**

- **Halaman Home**

![alt text](https://github.com/fadliRafidan/TodoApp/blob/main/assets/images/results/home.png?raw=true)

- **Tambah Todo**

![alt text](https://github.com/fadliRafidan/TodoApp/blob/main/assets/images/results/tambah-todo.png?raw=true)

- **Halaman Home dengan todo**

![alt text](https://github.com/fadliRafidan/TodoApp/blob/main/assets/images/results/home-todo.png?raw=true)

- **Hasil test**

![alt text](https://github.com/fadliRafidan/TodoApp/blob/main/assets/images/results/test-result.png?raw=true)
