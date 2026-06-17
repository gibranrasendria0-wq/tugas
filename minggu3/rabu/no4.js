const nama = "Muhammad Fikri Baihaqi";

const inisial = nama
  .split(" ")
  .map((kata) => kata.charAt(0).toUpperCase())
  .join(". ") + ".";

console.log("1. Inisial nama       :", inisial);

const namaKapitalSemua = nama.toUpperCase();
console.log("2. Huruf gede semua:", namaKapitalSemua);

const namaTitleCase = nama
  .split(" ")
  .map(
    (kata) =>
      kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase()
  )
  .join(" ");

console.log("3. Huruf kecil semua :", namaTitleCase);