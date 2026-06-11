function analisisArray(data) {

  // Jumlah data
  const jumlahData = data.length;

  // Total seluruh data
  const total = data.reduce((jumlah, n) => jumlah + n, 0);

  // Nilai rata-rata
  const rataRata = (total / jumlahData).toFixed(2);

  // Nilai tertinggi & terendah
  const tertinggi = Math.max(...data);
  const terendah  = Math.min(...data);

  // Bilangan genap & ganjil
  const genap  = data.filter(n => n % 2 === 0);
  const ganjil = data.filter(n => n % 2 !== 0);

  
  console.log("Data          :", data);
  console.log("Jumlah Data   :", jumlahData);
  console.log("Total         :", total);
  console.log("Rata-rata     :", rataRata);
  console.log("Tertinggi     :", tertinggi);
  console.log("Terendah      :", terendah);
  console.log("Bilangan Genap:", genap,  "→ jumlah:", genap.length);
  console.log("Bilangan Ganjil:", ganjil, "→ jumlah:", ganjil.length);
  console.log("================================");
}

analisisArray([10, 25, 8, 42, 17, 6, 33]);
analisisArray([90, 65, 75, 40, 88, 70, 55]);