const input = "89.75";
const nilaiNumber = Number(input);
console.log("1. Hasil konversi ke number :", nilaiNumber);
console.log("2. Tipe data sebelum konversi:", typeof input);
console.log("   Tipe data sesudah konversi:", typeof nilaiNumber);

const nilaiDibulatkan = Math.round(nilaiNumber);
console.log("3. Nilai setelah dibulatkan  :", nilaiDibulatkan);

const apakahIniBilanganBulat = Number.isInteger(nilaiNumber);
console.log(
  "4. Apakah ini bilangan bulat?   :",
  apakahIniBilanganBulat ? "Yoi, bilangan bulat" : "tedd salah ini desimal oi"
);