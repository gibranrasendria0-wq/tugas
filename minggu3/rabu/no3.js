const password = "BelajarJS2026";
const syaratPanjang = password.length >= 8;
const syaratHurufBesar = /[A-Z]/.test(password); //pake regex
const syaratHurufKecil = /[a-z]/.test(password); //pske regex
const syaratAngka = /[0-9]/.test(password); //pake regex

console.log("Password yang diuji:", password);
console.log("1. Minimal 8 karakter      :", syaratPanjang);
console.log("2. Mengandung huruf besar  :", syaratHurufBesar);
console.log("3. Mengandung huruf kecil  :", syaratHurufKecil);
console.log("4. Mengandung angka        :", syaratAngka);

const semuaSyaratTerpenuhi =
  syaratPanjang && syaratHurufBesar && syaratHurufKecil && syaratAngka;