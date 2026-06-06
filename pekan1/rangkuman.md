Berikut rangkuman sederhana yang bisa langsung kamu letakkan di dalam file tugas atau catatan.

# **Bab 1: Pengenalan JavaScript**

## Ringkasan Materi

**JavaScript (JS)** adalah bahasa pemrograman yang digunakan untuk membuat website menjadi interaktif dan dinamis. Dengan JavaScript, website dapat merespons tindakan pengguna, seperti klik tombol, mengisi formulir, menampilkan pesan, dan membuat animasi.

### Peran HTML, CSS, dan JavaScript

* **HTML** → Membuat struktur website.
* **CSS** → Mengatur tampilan dan desain website.
* **JavaScript** → Menambahkan fungsi dan interaksi pada website.

**Analogi Bangunan:**

* HTML = Kerangka bangunan.
* CSS = Cat dan dekorasi.
* JavaScript = Listrik, tombol, dan mesin yang membuat bangunan berfungsi.

### Tempat JavaScript Dijalankan

#### 1. Browser (Front-End)

JavaScript dijalankan di browser seperti Chrome, Firefox, dan Safari untuk mengatur interaksi pengguna pada halaman web.

Contoh:

* Validasi formulir
* Animasi
* Tombol interaktif

#### 2. Node.js (Back-End)

Dengan Node.js, JavaScript dapat dijalankan di server untuk:

* Membuat API
* Mengelola database
* Memproses data

### ECMAScript (ES)

**ECMAScript (ES)** adalah standar resmi JavaScript yang menentukan aturan dan fitur bahasa tersebut.

Versi penting:

* **ES5 (2009)** → Versi lama yang stabil.
* **ES6 / ES2015 (2015)** → Pembaruan terbesar yang memperkenalkan `let`, `const`, dan arrow function.
* **ES2016 – sekarang** → Pembaruan rutin setiap tahun.

### Kesimpulan

JavaScript adalah bahasa pemrograman yang membuat website menjadi interaktif dan dapat digunakan baik di browser (Front-End) maupun di server menggunakan Node.js (Back-End). Saat ini, sintaks yang digunakan umumnya mengikuti standar modern **ES6 ke atas**.

## Poin Penting

| Istilah    | Pengertian                                             |
| ---------- | ------------------------------------------------------ |
| JavaScript | Bahasa pemrograman untuk membuat website interaktif    |
| Front-End  | JavaScript berjalan di browser                         |
| Back-End   | JavaScript berjalan di server menggunakan Node.js      |
| Node.js    | Runtime untuk menjalankan JavaScript di luar browser   |
| ECMAScript | Standar resmi JavaScript                               |
| ES6        | Versi modern JavaScript yang banyak digunakan saat ini |

**Intinya:** HTML membuat struktur, CSS mempercantik tampilan, dan JavaScript membuat website dapat berinteraksi dengan pengguna.
Berikut ringkasan singkatnya:

**1. Aturan Sintaks** — tiga hal wajib diingat: JavaScript membedakan huruf besar/kecil (`nama` ≠ `Nama`), setiap instruksi diakhiri titik koma (`;`), dan nama variabel/fungsi ditulis dengan `camelCase`, nama kelas dengan `PascalCase`, dan konstanta global dengan `UPPER_SNAKE_CASE`.

**2. Statement vs Expression** — Statement adalah perintah ke komputer (tidak menghasilkan nilai langsung), sedangkan Expression adalah kode yang menghasilkan nilai. Dalam praktiknya keduanya sering digabung, contoh: `let hasil = 5 + 10` — statement-nya adalah `let hasil = ...`, expression-nya adalah `5 + 10`.

**3. Komentar** — ditulis dengan `//` untuk satu baris atau `/* */` untuk banyak baris. Komentar sepenuhnya diabaikan oleh JS dan hanya untuk manusia. Tips terpenting: tulis komentar untuk menjelaskan *mengapa*, bukan *apa* — karena kode yang baik sudah cukup menjelaskan dirinya sendiri.

 
  ## Rangkuman: Variabel di JavaScript

**Variabel** adalah tempat penyimpanan data sementara dalam program — seperti kotak laci berlabel yang bisa kamu buka kapan saja.

---

### `let` vs `const`

| | `let` | `const` |
|---|---|---|
| Nilainya bisa diubah? | ✅ Ya | ❌ Tidak |
| Kapan dipakai? | Data yang berubah | Data yang tetap |

```javascript
let skor = 0;
skor = 50; // ✅ boleh

const pajak = 0.11;
pajak = 0.12; // ❌ error
```

> **Tips:** Selalu mulai dengan `const`. Ganti ke `let` hanya kalau nilainya memang perlu berubah.

---

### Kenapa `var` Ditinggalkan?

Dua masalah utamanya:
- **Bocor dari blok `{}`** — bisa diakses dari luar, memicu bug tak terduga
- **Bisa dideklarasikan ulang** — data lama bisa tertimpa tanpa peringatan

---

### Aturan Penamaan

- Pakai **camelCase**: `namaLengkap`, `totalHarga`
- Tidak boleh diawali angka, mengandung spasi, atau pakai simbol selain `_` dan `$`
- Nama harus **jelas dan deskriptif** — hindari `x` atau `nl`
## Rangkuman: Tipe Data di JavaScript

JavaScript punya sistem **Dynamic Typing** — variabel bisa diisi tipe data apa saja, bahkan bisa diganti sewaktu-waktu.

---

### 🔹 Tipe Primitif (satu nilai)

| Tipe | Contoh | Keterangan |
|---|---|---|
| **String** | `"Halo"`, `'Budi'` | Teks, diapit tanda kutip |
| **Number** | `25`, `3.14`, `-7` | Angka, tanpa kutip |
| **Boolean** | `true`, `false` | Hanya dua nilai |
| **Undefined** | `undefined` | Variabel belum diberi nilai (otomatis) |
| **Null** | `null` | Sengaja dikosongkan oleh programmer |

---

### 🔸 Tipe Non-Primitif (kumpulan nilai)

**Array** — daftar berurutan, akses pakai indeks mulai dari `0`
```javascript
let buah = ["Apel", "Jeruk", "Mangga"];
console.log(buah[0]); // "Apel"
```

**Object** — data terstruktur dengan pasangan `kunci: nilai`
```javascript
let user = { nama: "Budi", umur: 25 };
console.log(user.nama); // "Budi"
```

---

### 🔍 Cek Tipe Data dengan `typeof`

```javascript
typeof "Halo"  // "string"
typeof 25      // "number"
typeof true    // "boolean"
typeof data    // "undefined"
```

> ⚠️ **Jebakan umum:** `"2025"` adalah String, bukan Number!
> `"2025" + 1` hasilnya `"20251"`, bukan `2026`