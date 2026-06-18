const sekarang = new Date();

const hari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
];
console.log("Tanggal :", sekarang.getDate());
console.log("Bulan   :", sekarang.getMonth() + 1);
console.log("Tahun   :", sekarang.getFullYear());
console.log("Hari    :", hari[sekarang.getDay()]);
console.log("Jam     :", sekarang.getHours());
console.log("Menit   :", sekarang.getMinutes());
console.log("Detik   :", sekarang.getSeconds());