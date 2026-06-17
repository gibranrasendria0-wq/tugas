const komentar = "Dasar tolol! Kamu sangat hitam dekil bau dan bangor tapi manis aww.";
const kataTerlarang = ["tolol", "hitam", "dekil", "bau", "bangor"];

let kalimatSensor = komentar; // variabel di sensor

kataTerlarang.forEach((kata) => {
  const pola = new RegExp(kata, "gi"); //RegExp (Regular Expression) dalam JavaScript adalah pola yang digunakan untuk mencari, mencocokkan, memvalidasi, mengganti, atau memanipulasi teks (string).
  kalimatSensor = kalimatSensor.replace(pola, "*");
});

console.log("Sebelum disensor :", komentar);
console.log("Sesudah disensor :", kalimatSensor);