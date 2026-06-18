// VAR
console.log("VAR:");
console.log(nama); // undefined

var nama = "Gibran";

console.log("nama setelah di benerin(deklarasi):", nama);





// LET
console.log("\nLET:");

try {
  console.log(umur);
} catch (error) {
  console.log("Error:", error.message);
}

let umur = 18;

console.log("umur setelah di benerin(deklarasi):", umur);






// CONST
console.log("\nCONST:");

try {
  console.log(kota);
} catch (error) {
  console.log("Error:", error.message);
}

const kota = " KabTangerang";

console.log("nama kota setelah deklarasi:", kota);

