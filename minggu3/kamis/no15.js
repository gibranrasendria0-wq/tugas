const kendaraan = {
    nomorPolisi: "A 9999 BK",
    waktuMasuk: "2026-06-18T08:00:00",
    waktuKeluar: "2026-06-18T13:30:00"
};

const masuk = new Date(kendaraan.waktuMasuk);
const keluar = new Date(kendaraan.waktuKeluar);

// Selisih waktu dalam jam
const selisihMs = keluar - masuk;
const lamaParkir = Math.ceil(selisihMs / (1000 * 60 * 60));

let biaya = 3000;

// Jika lebih dari 2 jam
if (lamaParkir > 2) {
    biaya += (lamaParkir - 2) * 2000;
}

console.log("=== DATA PARKIR ===");
console.log("Nomor Polisi :", kendaraan.nomorPolisi);
console.log("Lama Parkir  :", lamaParkir, "jam");
console.log("Total Biaya  : Rp" + biaya);