function analisisTeks(teks) {
  // jumlah karakter -> properti length pada string
  const jumlahKarakter = teks.length;

  // jumlah kata -> trim() menghapus spasi di ujung, split(/\s+/) memecah berdasarkan spasi
  const daftarKata = teks.trim().split(/\s+/).filter((k) => k.length > 0);
  const jumlahKata = daftarKata.length;

  // jumlah huruf vokal -> match() dengan regex mencari semua huruf a,i,u,e,o
  const cocokVokal = teks.match(/[aiueoAIUEO]/g);
  const jumlahVokal = cocokVokal ? cocokVokal.length : 0;

  // jumlah huruf konsonan -> match() dengan regex huruf selain vokal
  const cocokKonsonan = teks.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g);
  const jumlahKonsonan = cocokKonsonan ? cocokKonsonan.length : 0;

  // jumlah angka -> match() dengan regex digit 0-9
  const cocokAngka = teks.match(/[0-9]/g);
  const jumlahAngka = cocokAngka ? cocokAngka.length : 0;

  // jumlah spasi -> match() mencari karakter spasi
  const cocokSpasi = teks.match(/ /g);
  const jumlahSpasi = cocokSpasi ? cocokSpasi.length : 0;

  // simbol khusus -> test() mengecek apakah ada karakter selain huruf, angka, spasi
  const adaSimbolKhusus = /[^a-zA-Z0-9\s]/.test(teks);

  // kata terpanjang -> reduce() membandingkan panjang tiap kata satu per satu
  const kataTerpanjang = daftarKata.reduce(
    (terpanjang, kata) => (kata.length > terpanjang.length ? kata : terpanjang),
    ""
  );

  return {
    jumlahKarakter,
    jumlahKata,
    jumlahVokal,
    jumlahKonsonan,
    jumlahAngka,
    jumlahSpasi,
    adaSimbolKhusus,
    kataTerpanjang,
  };
}

// --- Pengujian function analisisTeks dengan 3 kalimat berbeda ---
const kalimat1 = "Saya belajar JavaScript sejak tahun 2023!";
const kalimat2 = "Kucing itu tidur di atas sofa empuk.";
const kalimat3 = "Harga barang ini Rp 50000, ada diskon 10%.";

console.log("========== SOAL 10: analisisTeks ==========");
console.log("=== Kalimat 1 ===");
console.log(analisisTeks(kalimat1));

console.log("=== Kalimat 2 ===");
console.log(analisisTeks(kalimat2));

console.log("=== Kalimat 3 ===");
console.log(analisisTeks(kalimat3));

function analisisAngka(kalimat) {
  // match() dengan regex /\d+/g -> menemukan seluruh angka (mendukung lebih dari 1 digit)
  const hasilMatch = kalimat.match(/\d+/g);

  // map(Number) -> mengonversi setiap teks angka hasil match menjadi tipe number
  const daftarAngka = hasilMatch ? hasilMatch.map(Number) : [];

  // reduce() -> menjumlahkan seluruh elemen array angka
  const jumlahTotal = daftarAngka.reduce((total, n) => total + n, 0);

  // rata-rata = total dibagi banyaknya angka yang ditemukan
  const rataRata = daftarAngka.length > 0 ? jumlahTotal / daftarAngka.length : 0;

  // Math.max() / Math.min() -> mencari nilai terbesar & terkecil
  // spread operator (...) membongkar array menjadi argumen terpisah untuk Math.max/min
  const angkaTerbesar = daftarAngka.length > 0 ? Math.max(...daftarAngka) : null;
  const angkaTerkecil = daftarAngka.length > 0 ? Math.min(...daftarAngka) : null;

  // replace() dengan regex -> menghapus seluruh angka, lalu merapikan spasi ganda
  const kalimatTanpaAngka = kalimat.replace(/\d+/g, "").replace(/\s+/g, " ").trim();

  return {
    daftarAngka,
    jumlahTotal,
    rataRata,
    angkaTerbesar,
    angkaTerkecil,
    kalimatTanpaAngka,
  };
}
const kalimatUji = "Aku lahir pada tahun 2006 dan sekarang berusia 20 tahun.";
const hasil = analisisAngka(kalimatUji);

console.log("\n========== BONUS CHALLENGE ==========");
console.log("Kalimat asli         :", kalimatUji);
console.log("Seluruh angka        :", hasil.daftarAngka);
console.log("Jumlah seluruh angka :", hasil.jumlahTotal);
console.log("Rata-rata angka      :", hasil.rataRata);
console.log("Angka terbesar       :", hasil.angkaTerbesar);
console.log("Angka terkecil       :", hasil.angkaTerkecil);
console.log("Kalimat tanpa angka  :", hasil.kalimatTanpaAngka);