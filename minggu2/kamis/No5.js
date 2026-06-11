// Data harga produk
const harga = [10000, 25000, 50000, 120000];

// Function hitung diskon
function hitungDiskon(array) {
  const setelahDiskon = array.map(function(h) {
    return h - (h * 10 / 100); //diskon 10%;
  });

  console.log("Harga Sebelum Diskon:", array);
  console.log("Harga Setelah Diskon:", setelahDiskon);
}
hitungDiskon(harga);