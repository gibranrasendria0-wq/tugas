const namaBarang = "sapi jantan";
const hargaBarang = "15749999.95"; // masih berupa string, harus dikonversi
const diskon = 12.5; // dalam persen

// 1. Nama barang dalam huruf kapital
// toUpperCase() -> built-in function String untuk mengubah seluruh huruf jadi kapital
const namaKapital = namaBarang.toUpperCase();

// 2. Konversi harga dari string ke number
// Number() -> built-in function untuk konversi tipe data string menjadi number
const harga = Number(hargaBarang);

// 3. Nominal diskon = harga asli x persentase diskon
const nominalDiskon = harga * (diskon / 100);

// 4. Harga setelah diskon = harga asli - nominal diskon
const hargaSetelahDiskon = harga - nominalDiskon;

// Fungsi bantu untuk memformat angka menjadi format mata uang Rupiah
function formatRupiah(angka) {
  return angka.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // tampil tanpa desimal
  });
}
console.log("======== STRUK BELANJA ========");
console.log("Nama Barang          :", namaKapital);
console.log("Harga Asli           :", formatRupiah(harga));
console.log("Diskon               :", diskon + "%");
console.log("Nominal Diskon       :", formatRupiah(nominalDiskon));
// toFixed(2) -> built-in function Number untuk membatasi 2 angka di belakang koma
console.log("Harga Setelah Diskon :", hargaSetelahDiskon.toFixed(2));
console.log("Harga Akhir          :", formatRupiah(hargaSetelahDiskon));
console.log("================================");