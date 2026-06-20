function cariAngkaTerbesar(...angka) { /// ... berfungsi untuk "menyebarkan" elemen Array atau properti Object ke dalam konteks yang baru
  return angka.length ? Math.max(...angka) : null; /// Mengembalikan panjang string
}

function cariAngkaTerkecil(...angka) {  ///  ...berfungsi untuk "menyebarkan" elemen Array atau properti Object ke dalam konteks yang baru
  return angka.length ? Math.min(...angka) : null;  /// Mengembalikan panjang string
}

function analisisDokumen(teks = "") {
  if (teks.trim() === "") {  /// trim Menghapus spasi di awal dan akhir, === nilai sama dan tipr data
    return {
      jumlahKarakter: 0,
      jumlahKata: 0,
      jumlahKalimat: 0,
      jumlahAngka: 0,
      angkaTerbesar: null,
      angkaTerkecil: null,
      kataTerpanjang: "",
      rataRataPanjangKata: 0
    };
  }

  // Jumlah karakter
  const jumlahKarakter = teks.length;

  // Ambil kata
  const daftarKata = teks
    .replace(/[.,!?%]/g, "") /// adalah Regular Expression (Regex), yaitu pola untuk mencari atau mencocokkan teks dan gk asal" buat regex
    .split(" ")
    .filter(kata => kata !== ""); /// !== tidak sama nilai maupun tipe

  const jumlahKata = daftarKata.length;

  // Jumlah kalimat
  const jumlahKalimat = teks
    .split(/[.!?]/) ///  /// adalah Regular Expression (Regex), yaitu pola untuk mencari atau mencocokkan teks dan gk asal" buat regex
    .filter(kalimat => kalimat.trim() !== "").length; /// !== tidak sama nilai maupun tipe

  // Ambil semua angka
  const daftarAngka = (teks.match(/\d+/g) || []).map(Number);  /// adalah Regular Expression (Regex), yaitu pola untuk mencari atau mencocokkan teks dan gk asal" buat regex

  const jumlahAngka = daftarAngka.length;
  const angkaTerbesar = cariAngkaTerbesar(...daftarAngka);
  const angkaTerkecil = cariAngkaTerkecil(...daftarAngka);

  // Cari kata paling panjang
  let kataTerpanjang = "";

  daftarKata.forEach(kata => {  /// forEach adalah array method yang digunakan untuk menjalankan sebuah fungsi pada setiap elemen array
    if (kata.length > kataTerpanjang.length) {
      kataTerpanjang = kata;
    }
  });

  // ngitung rata-rata panjang kata
  const totalPanjangKata = daftarKata.reduce( /// reduce adalah array method yang digunakan untuk menggabungkan semua elemen array menjadi satu nilai
    (total, kata) => total + kata.length,0
    
  );

  const rataRataPanjangKata = Number(
    (totalPanjangKata / jumlahKata).toFixed(2) /// adalah method JavaScript yang membulatkan angka desimal ke jumlah digit yang kamu telah telah di tentukan
  );

  return {
    jumlahKarakter,
    jumlahKata,
    jumlahKalimat,
    jumlahAngka,
    angkaTerbesar,
    angkaTerkecil,
    kataTerpanjang,
    rataRataPanjangKata
  };
}

console.log(
  analisisDokumen(
    "JavaScript 2026 sangat populer. Pada tahun 2025 pengguna meningkat 35%."
  )
);