const peserta = [
  {
    nama: "Ari",
    tanggalLahir: "2007-03-15",
    nilai: [80, 90, 75],
    penghasilanOrtu: 3500000
  },
  {
    nama: "Bima",
    tanggalLahir: "2006-08-22",
    nilai: [60, 70, 85],
    penghasilanOrtu: 1500000
  },
  {
    nama: "Citra",
    tanggalLahir: "2007-01-10",
    nilai: [95, 88, 92],
    penghasilanOrtu: 7000000
  }
];

/// ngitung umur
function hitungUmur(tanggalLahir) {
  const hariIni = new Date();
  const lahir = new Date(tanggalLahir);

  let umur = hariIni.getFullYear() - lahir.getFullYear();

  if (
    hariIni.getMonth() < lahir.getMonth() ||
    (hariIni.getMonth() === lahir.getMonth() && /// === sama niali dan tipe data. && and, true jika semua kondisinya true
      hariIni.getDate() < lahir.getDate())
  ) {
    umur--; ///ngurangin nilai variabel UMUR 1
  }

  return umur;
}

const hasilSeleksi = peserta.map((peserta) => {  ///map adalah array method yang digunakan untuk mengubah setiap elemen dalam array menjadi nilai baru, lalu menghasilkan array baru
  const {
    nama,
    tanggalLahir,
    nilai,
    penghasilanOrtu
  } = peserta;

  const umur = hitungUmur(tanggalLahir);

  const totalNilai = nilai.reduce((total, n) => total + n, 0);  /// reduce adalah array method yang digunakan untuk menggabungkan semua elemen array menjadi satu nilai

  const rataRata = totalNilai / nilai.length;

  let alasan = [];
  let lolos = true;

  // keriteria
  if (umur > 20) {
    lolos = false;
    alasan.push("Umur melebihi batas"); /// push menambahkan elemen di akhir
  }

  if (rataRata < 50) {
    lolos = false;
    alasan.push("Rata-rata nilai kurang dari 50");  /// push menambahkan elemen di akhir
  }

  if (penghasilanOrtu > 5000000) {
    lolos = false;
    alasan.push("Penghasilan orang tua terlalu tinggi");  /// push menambahkan elemen di akhir
  }

  if (lolos) {
    alasan.push("Memenuhi seluruh syarat beasiswa"); /// push menambahkan elemen di akhir
  }

  return {
    ...peserta, // spread operator
    umur,
    rataRata: Number(rataRata.toFixed(2)), /// Number Method, toFixed adalah Number Method yang digunakan untuk membatasi jumlah angka di belakang koma (desimal). 
    lolos,
    alasan
  };
});

// ranking berdasarkan rata-rata nilai
const ranking = [...hasilSeleksi].sort(
  (a, b) => b.rataRata - a.rataRata
);

console.log("=== RANKING PESERTA ===");

ranking.forEach((peserta, index) => { /// forEach adalah array method yang digunakan untuk menjalankan sebuah fungsi pada setiap elemen array
  console.log(
    `${index + 1}. ${peserta.nama} - Nilai: ${peserta.rataRata}`
  );
});

console.log("\n=== HASIL SELEKSI ==="); /// \n fungsinya untuk pindah ke baris berikutnya

hasilSeleksi.forEach((peserta) => {  /// forEach adalah array method yang digunakan untuk menjalankan sebuah fungsi pada setiap elemen array
  console.log(`\n${peserta.nama}`);
  console.log(`Umur: ${peserta.umur}`);
  console.log(`Rata-rata: ${peserta.rataRata}`);
  console.log(`Lolos: ${peserta.lolos}`);
  console.log(`Alasan: ${peserta.alasan.join(", ")}`);
});

const pesertaTerbaik = ranking[0];

console.log("\n=== PESERTA TERBAIK ===");
console.log(pesertaTerbaik.nama);