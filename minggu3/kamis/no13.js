const acara = " Demo!!! Prabowo-Gibran";
const tanggalAcara = "2026-12-01";

const sekarang = new Date();
const acaraDate = new Date(tanggalAcara);

const selisihMs = acaraDate - sekarang;

const sisaHari = Math.floor(selisihMs / (1000 * 60 * 60 * 24));
const sisaJam = Math.floor(selisihMs / (1000 * 60 * 60));

console.log("Nama Acara :", acara);
console.log("Hari menuju acara :", sisaHari, "hari");
console.log("Jam menuju acara  :", sisaJam, "jam");