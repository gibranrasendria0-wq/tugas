const penjualan = {
  Januari: 100000,
  Februari: 120000,
  Maret: 90000,
  April: 150000
};

const nilaiPenjualan = Object.values(penjualan);
const totalPenjualan = nilaiPenjualan.reduce((total, nilai) => total + nilai, 0);
console.log("Total penjualan:", totalPenjualan);
const rataRata = totalPenjualan / nilaiPenjualan.length;
console.log("Rata-rata penjualan:", rataRata);
const penjualanTertinggi = Math.max(...nilaiPenjualan);
const bulanTertinggi = Object.entries(penjualan).find(
  ([bulan, nilai]) => nilai === penjualanTertinggi
);
console.log(`Bulan dengan penjualan tertinggi: ${bulanTertinggi[0]} (Rp${bulanTertinggi[1]})`);