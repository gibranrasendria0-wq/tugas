// Data nilai siswa
const nilai = [80, 90, 75, 100, 60];

// Function statistik nilai
function statistikNilai(array) {
  const total      = array.reduce((jumlah, n) => jumlah + n, 0);
  const rata       = total / array.length;
  const tertinggi  = Math.max(...array);
  const terendah   = Math.min(...array);

  console.log("Data Nilai  :", array);
  console.log("Total       :", total);
  console.log("Rata-rata   :", rata);
  console.log("Tertinggi   :", tertinggi);
  console.log("Terendah    :", terendah);
}

// Jalankan function
statistikNilai(nilai);