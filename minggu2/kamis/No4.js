// Data nilai siswa
const nilai = [90, 65, 75, 40, 88, 70, 55];

// Function nilai kelulusan
function cekKelulusan(array) {
  const lulus = array.filter(function(n) {
    return n >= 75;
  });

  const tidakLulus = array.filter(function(n) {
    return n < 75;
  });

  console.log("Data Nilai      :", array);
  console.log("Lulus (≥75)     :", lulus);
  console.log("Tidak Lulus (<75):", tidakLulus);
  console.log("Jumlah Lulus    :", lulus.length);
  console.log("Jumlah Tdk Lulus:", tidakLulus.length);
}
cekKelulusan(nilai);

   